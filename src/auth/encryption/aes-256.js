const crypto = require('crypto');
const bcrypt = require('bcrypt');

class SecureEncryptor {
  constructor() {
    this.algorithm = 'aes-256-gcm';
    this.ivLength = 16;
    this.saltRounds = 12;
    this.tagLength = 16;
  }

  async deriveKeyFromPassword(password, salt) {
    return bcrypt.hash(password, salt);
  }

  async encrypt(text, password) {
    return new Promise((resolve, reject) => {
      try {
        const iv = crypto.randomBytes(this.ivLength);
        const salt = crypto.randomBytes(16);
        
        crypto.pbkdf2(password, salt, 100000, 32, 'sha512', (err, key) => {
          if (err) reject(err);
          
          const cipher = crypto.createCipheriv(this.algorithm, key, iv);
          let encrypted = cipher.update(text, 'utf8', 'hex');
          encrypted += cipher.final('hex');
          
          const authTag = cipher.getAuthTag();
          
          resolve({
            encrypted,
            iv: iv.toString('hex'),
            salt: salt.toString('hex'),
            authTag: authTag.toString('hex')
          });
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async decrypt(encryptedData, password) {
    return new Promise((resolve, reject) => {
      try {
        const { encrypted, iv, salt, authTag } = encryptedData;
        
        crypto.pbkdf2(password, Buffer.from(salt, 'hex'), 100000, 32, 'sha512', (err, key) => {
          if (err) reject(err);
          
          const decipher = crypto.createDecipheriv(
            this.algorithm, 
            key, 
            Buffer.from(iv, 'hex')
          );
          
          decipher.setAuthTag(Buffer.from(authTag, 'hex'));
          
          let decrypted = decipher.update(encrypted, 'hex', 'utf8');
          decrypted += decipher.final('utf8');
          
          resolve(decrypted);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async hashValue(value) {
    const salt = await bcrypt.genSalt(this.saltRounds);
    return bcrypt.hash(value, salt);
  }

  async compareHash(value, hash) {
    return bcrypt.compare(value, hash);
  }
}

module.exports = SecureEncryptor;

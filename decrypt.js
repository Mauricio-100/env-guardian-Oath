const { readFileSync, writeFileSync, existsSync } = require('fs');
const SecureEncryptor = require('../encryption/aes-256');
const { prompt } = require('inquirer');

async function decryptCommand(file, options) {
  try {
    if (!file || !existsSync(file)) {
      console.error('File not found');
      return;
    }
    
    // Lire le fichier chiffré
    const encryptedData = JSON.parse(readFileSync(file, 'utf8'));
    
    // Demander le mot de passe
    const { password } = await prompt([
      {
        type: 'password',
        name: 'password',
        message: 'Enter decryption password:',
        mask: '*'
      }
    ]);
    
    // Déchiffrer
    const encryptor = new SecureEncryptor();
    const decrypted = await encryptor.decrypt(encryptedData, password);
    
    // Sauvegarder
    writeFileSync(options.output, decrypted);
    
    console.log(`✅ File decrypted successfully: ${options.output}`);
  } catch (error) {
    console.error('❌ Decryption failed:', error.message);
  }
}

module.exports = { decryptCommand };

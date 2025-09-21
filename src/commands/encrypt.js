const { readFileSync, writeFileSync } = require('fs');
const SecureEncryptor = require('../encryption/aes-256');
const { prompt } = require('inquirer');

async function encryptCommand(file, options) {
  try {
    if (!file) {
      console.error('Please specify a file to encrypt');
      return;
    }
    
    // Lire le fichier
    const content = readFileSync(file, 'utf8');
    
    // Demander un mot de passe
    const { password } = await prompt([
      {
        type: 'password',
        name: 'password',
        message: 'Enter encryption password:',
        mask: '*'
      }
    ]);
    
    // Chiffrer
    const encryptor = new SecureEncryptor();
    const encrypted = await encryptor.encrypt(content, password);
    
    // Sauvegarder
    writeFileSync(options.output, JSON.stringify(encrypted));
    
    console.log(`✅ File encrypted successfully: ${options.output}`);
  } catch (error) {
    console.error('❌ Encryption failed:', error.message);
  }
}

module.exports = { encryptCommand };

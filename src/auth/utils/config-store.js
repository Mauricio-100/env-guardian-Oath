const { existsSync, readFileSync, writeFileSync, mkdirSync } = require('fs');
const { homedir } = require('os');
const path = require('path');
const SecureEncryptor = require('../encryption/aes-256');
const { machineIdSync } = require('node-machine-id');

class ConfigStore {
  constructor() {
    this.configDir = path.join(homedir(), '.env-guardian');
    this.configPath = path.join(this.configDir, 'config.enc');
    this.encryptor = new SecureEncryptor();
    this.ensureConfigDir();
  }

  ensureConfigDir() {
    if (!existsSync(this.configDir)) {
      mkdirSync(this.configDir, { recursive: true });
    }
  }

  async set(key, value) {
    try {
      let config = {};
      
      // Charger la config existante
      if (existsSync(this.configPath)) {
        const encryptedData = JSON.parse(readFileSync(this.configPath, 'utf8'));
        const machineId = machineIdSync();
        const decrypted = await this.encryptor.decrypt(encryptedData, machineId);
        config = JSON.parse(decrypted);
      }
      
      // Mettre à jour la valeur
      config[key] = value;
      
      // Chiffrer avec l'ID machine
      const machineId = machineIdSync();
      const encrypted = await this.encryptor.encrypt(JSON.stringify(config), machineId);
      
      // Sauvegarder
      writeFileSync(this.configPath, JSON.stringify(encrypted), 'utf8');
      return true;
    } catch (error) {
      console.error('Failed to save config:', error);
      return false;
    }
  }

  async get(key) {
    try {
      if (!existsSync(this.configPath)) return null;
      
      const encryptedData = JSON.parse(readFileSync(this.configPath, 'utf8'));
      const machineId = machineIdSync();
      const decrypted = await this.encryptor.decrypt(encryptedData, machineId);
      const config = JSON.parse(decrypted);
      
      return config[key] || null;
    } catch (error) {
      console.error('Failed to read config:', error);
      return null;
    }
  }

  async getAll() {
    try {
      if (!existsSync(this.configPath)) return {};
      
      const encryptedData = JSON.parse(readFileSync(this.configPath, 'utf8'));
      const machineId = machineIdSync();
      const decrypted = await this.encryptor.decrypt(encryptedData, machineId);
      
      return JSON.parse(decrypted);
    } catch (error) {
      console.error('Failed to read config:', error);
      return {};
    }
  }
}

module.exports = ConfigStore;

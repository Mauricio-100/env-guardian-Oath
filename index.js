import fs from 'fs';
import path from 'path';

/**
 * Gère, valide et type les variables d'environnement.
 */
class EnvGuardian {
  #config = {};

  constructor(options = {}) {
    const filePath = options.envPath || path.resolve(process.cwd(), '.env');
    
    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      this.#parse(fileContent);
    } catch (error) {
      // Ignore si le fichier .env n'est pas trouvé.
    }
  }

  #parse(content) {
    content.split('\n').forEach(line => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        const value = valueParts.join('=').trim();
        
        if (process.env[key] === undefined) {
          this.#config[key] = value;
        }
      }
    });
  }

  get(key, defaultValue) {
    return process.env[key] ?? this.#config[key] ?? defaultValue;
  }

  validate(requiredKeys) {
    const missingKeys = requiredKeys.filter(key => this.get(key) === undefined);
    if (missingKeys.length > 0) {
      throw new Error(`Erreur de Configuration: Variables d'environnement manquantes: ${missingKeys.join(', ')}`);
    }
  }

  getNumber(key, defaultValue) {
    const value = this.get(key);
    if (value === undefined) return defaultValue;
    const num = parseFloat(value);
    return isNaN(num) ? defaultValue : num;
  }

  getBoolean(key, defaultValue) {
    const value = this.get(key);
    if (value === undefined) return defaultValue;
    return value.toLowerCase() === 'true' || value === '1';
  }
}

const guardian = new EnvGuardian();
export default guardian;

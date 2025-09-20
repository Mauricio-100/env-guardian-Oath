const { readFileSync, existsSync } = require('fs');
const GitHubOAuth = require('../auth/github');
const ConfigStore = require('../utils/config-store');
const { prompt } = require('inquirer');

async function pushCommand() {
  try {
    const config = new ConfigStore();
    const accessToken = await config.get('github.access_token');
    
    if (!accessToken) {
      console.log('You need to connect to GitHub first. Run "env-guardian connect"');
      return;
    }
    
    const encryptedFile = '.env.encrypted';
    if (!existsSync(encryptedFile)) {
      console.log('No encrypted file found. Run "env-guardian encrypt .env" first');
      return;
    }
    
    // Demander le dépôt GitHub
    const { repo } = await prompt([
      {
        type: 'input',
        name: 'repo',
        message: 'GitHub repository (owner/repo):',
        validate: input => input.includes('/') ? true : 'Format must be owner/repo'
      }
    ]);
    
    // Lire le fichier chiffré
    const encryptedData = readFileSync(encryptedFile, 'utf8');
    
    // Stocker sur GitHub
    const githubAuth = new GitHubOAuth();
    await githubAuth.storeSecret(accessToken, repo, 'ENV_GUARDIAN_SECRETS', encryptedData);
    
    console.log('✅ Secrets successfully pushed to GitHub');
  } catch (error) {
    console.error('❌ Failed to push secrets:', error.message);
  }
}

module.exports = { pushCommand };

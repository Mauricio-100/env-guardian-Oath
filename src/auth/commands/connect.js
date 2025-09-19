const GitHubOAuth = require('../auth/github');
const ConfigStore = require('../utils/config-store');

async function connectCommand() {
  try {
    console.log('🔗 Connecting to GitHub...');
    
    const githubAuth = new GitHubOAuth();
    const accessToken = await githubAuth.authenticate();
    
    const userInfo = await githubAuth.getUserInfo(accessToken);
    
    const config = new ConfigStore();
    await config.set('github.access_token', accessToken);
    await config.set('github.user', userInfo.login);
    await config.set('github.user_id', userInfo.id);
    
    console.log(`✅ Successfully connected to GitHub as ${userInfo.login}`);
    console.log('You can now use "env-guardian push" to store secrets on GitHub.');
  } catch (error) {
    console.error('❌ Failed to connect to GitHub:', error.message);
  }
}

module.exports = { connectCommand };

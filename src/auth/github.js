const axios = require('axios');
const crypto = require('crypto');
const http = require('http');
const ConfigStore = require('../utils/config-store');

// Lancement du serveur de configuration (Server/index.js)
try {
  require('../Server/index.js');
  console.log('✅ Server loaded successfully for configuration');
} catch (err) {
  console.warn('⚠️ Server could not be loaded (skipped):', err.message);
}

// Wrapper pour gérer open (ESM only)
const openBrowser = async (url) => {
  const open = await import('open');
  return open.default(url);
};

class GitHubOAuth {
  constructor() {
    this.config = new ConfigStore();
    this.clientId = process.env.ENV_GUARDIAN_CLIENT_ID;
    this.clientSecret = process.env.ENV_GUARDIAN_CLIENT_SECRET;
    this.redirectUri = 'http://localhost:3000/auth/github/callback';
    this.state = crypto.randomBytes(20).toString('hex');
  }

  async getAuthUrl() {
    const params = new URLSearchParams({
      client_id: this.clientId,
      redirect_uri: this.redirectUri,
      state: this.state,
      scope: 'repo admin:repo_hook'
    });

    return `https://github.com/login/oauth/authorize?${params.toString()}`;
  }

  async startServer() {
    return new Promise((resolve, reject) => {
      const server = http.createServer(async (req, res) => {
        if (req.url.startsWith('/auth/github/callback')) {
          const url = new URL(req.url, `http://${req.headers.host}`);
          const code = url.searchParams.get('code');
          const state = url.searchParams.get('state');

          if (state !== this.state) {
            res.end('Security error: state mismatch');
            server.close();
            return reject(new Error('State mismatch'));
          }

          try {
            const token = await this.exchangeCodeForToken(code);
            res.end('Authentication successful! You can close this window.');
            server.close();
            resolve(token);
          } catch (error) {
            res.end('Authentication failed. Please try again.');
            server.close();
            reject(error);
          }
        }
      });

      server.listen(3000, () => {
        console.log('Temporary authentication server running on port 3000');
      });

      // Timeout après 2 minutes
      setTimeout(() => {
        server.close();
        reject(new Error('Authentication timeout'));
      }, 120000);
    });
  }

  async exchangeCodeForToken(code) {
    const response = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        code,
        redirect_uri: this.redirectUri
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data.error) {
      throw new Error(response.data.error_description);
    }

    return response.data.access_token;
  }

  async authenticate() {
    const authUrl = await this.getAuthUrl();
    console.log('Opening browser for GitHub authentication...');
    await openBrowser(authUrl); // ✅ utilisation correcte
    return this.startServer();
  }

  async getUserInfo(accessToken) {
    const response = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `token ${accessToken}` }
    });
    return response.data;
  }

  async storeSecret(accessToken, repo, secretName, secretValue) {
    // Get the repository's public key
    const keyResponse = await axios.get(
      `https://api.github.com/repos/${repo}/actions/secrets/public-key`,
      { headers: { Authorization: `token ${accessToken}` } }
    );

    const publicKey = keyResponse.data.key;
    const keyId = keyResponse.data.key_id;

    // Encrypt the secret using LibSodium
    const encryptedSecret = this.encryptSecret(secretValue, publicKey);

    // Store the secret
    await axios.put(
      `https://api.github.com/repos/${repo}/actions/secrets/${secretName}`,
      {
        encrypted_value: encryptedSecret,
        key_id: keyId
      },
      { headers: { Authorization: `token ${accessToken}` } }
    );
  }

  encryptSecret(secret, publicKey) {
    const sodium = require('libsodium-wrappers');
    return sodium.crypto_box_seal(
      secret,
      sodium.from_base64(publicKey, sodium.base64_variants.ORIGINAL)
    );
  }
}

module.exports = GitHubOAuth;

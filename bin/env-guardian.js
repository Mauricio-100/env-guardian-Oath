#!/usr/bin/env node

const { connectCommand } = require('../src/commands/connect');
const { encryptCommand } = require('../src/commands/encrypt');
const { decryptCommand } = require('../src/commands/decrypt'); // vérifier que ce fichier existe aussi
const { pushCommand } = require('../src/commands/push');       // idem
const { pullCommand } = require('../src/commands/pull');       // idem

// ----------------------
// Program CLI
// ----------------------
const program = new Command();

program
  .name('env-guardian')
  .description('Secure environment variable management with GitHub integration')
  .version('1.0.0');

program
  .command('connect')
  .description('Connect to your GitHub account')
  .action(connectCommand);

program
  .command('encrypt <file>')
  .description('Encrypt an environment file')
  .option('-o, --output <file>', 'Output file name', '.env.encrypted')
  .action(encryptCommand);

program
  .command('decrypt <file>')
  .description('Decrypt an environment file')
  .option('-o, --output <file>', 'Output file name', '.env')
  .action(decryptCommand);

// ----------------------
// push & pull : charge le serveur seulement si disponible
// ----------------------
program
  .command('push')
  .description('Push encrypted environment to GitHub Secrets')
  .action(async () => {
    try { require('../Server/index.js'); console.log('✅ Server loaded for push'); } 
    catch(err) { console.warn('⚠️ Server not loaded (skipped in CI)'); }
    await pushCommand();
  });

program
  .command('pull')
  .description('Pull environment from GitHub Secrets and decrypt')
  .action(async () => {
    try { require('../Server/index.js'); console.log('✅ Server loaded for pull'); } 
    catch(err) { console.warn('⚠️ Server not loaded (skipped in CI)'); }
    await pullCommand();
  });

// ----------------------
// Parse CLI arguments
// ----------------------
program.parse();

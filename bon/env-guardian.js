#!/usr/bin/env node

const { Command } = require('commander');
const { connectCommand } = require('../src/commands/connect');
const { encryptCommand } = require('../src/commands/encrypt');
const { decryptCommand } = require('../src/commands/decrypt');
const { pushCommand } = require('../src/commands/push');
const { pullCommand } = require('../src/commands/pull');

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

program
  .command('push')
  .description('Push encrypted environment to GitHub Secrets')
  .action(pushCommand);

program
  .command('pull')
  .description('Pull environment from GitHub Secrets and decrypt')
  .action(pullCommand);

program.parse();

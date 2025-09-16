
# Env-Guardian

[![npm version](https://badge.fury.io/js/%40mauriciotukss2%2Fenv-guardian.svg)](https://www.npmjs.com/package/@mauriciotukss2/env-guardian)

Un gestionnaire de configuration simple et robuste pour Node.js qui charge, valide et type les variables d'environnement à partir de fichiers `.env`. **Zéro dépendance.**

## Pourquoi Env-Guardian ?
La bibliothèque `dotenv` est excellente, mais elle ne résout que la moitié du problème. Elle charge les variables, mais ne garantit pas :
*   Que les variables critiques sont bien présentes.
*   Que le `PORT` est un `nombre` et non une `chaîne de caractères`.
*   Que `ENABLE_FEATURE` est un `booléen`.

Env-Guardian résout ces problèmes avec une interface simple.

## Installation
```bash
npm install @mauriciotukss2/env-guardian-Outh
```
Utilisation
1. Créez un fichier .env à la racine de votre projet :
```
code
Env
# Fichier .env
APP_NAME=Mon Application
PORT=3000
DEBUG_MODE=true
DATABASE_URL=postgres://user:pass@host:port/db
2. Utilisez Env-Guardian dans votre code :

code
```
JavaScript
// Fichier: config.js
import guardian from '@mauriciotukss2/env-guardian';

// Validez les variables critiques au démarrage de l'application.
// Le programme s'arrêtera si DATABASE_URL est manquant.
guardian.validate(['DATABASE_URL']);

export const config = {
  appName: guardian.get('APP_NAME', 'App par Défaut'),
  port: guardian.getNumber('PORT', 8080),
  debug: guardian.getBoolean('DEBUG_MODE', false),
  dbUrl: guardian.get('DATABASE_URL')
};
### API

guardian.get(key, [defaultValue]): Récupère une variable en tant que chaîne de caractères.
guardian.validate([keys]): Lance une erreur si une des clés du tableau est manquante.
guardian.getNumber(key, [defaultValue]): Récupère une variable et la convertit en nombre.
guardian.getBoolean(key, [defaultValue]): Récupère une variable et la convertit en booléen ("true" et "1" deviennent true).
### Licence
ISC

code
Code
---

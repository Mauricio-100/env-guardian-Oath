# env-guardian

<img width="1024" height="1024" alt="ChatGPT Image 20 sept  2025 à 12_33_20" src="https://github.com/user-attachments/assets/39b87253-2882-495e-9e78-c59ca3d4909a" />


[![ENV-GUARDIAN Protector](https://img.shields.io/badge/ENV--GUARDIAN-Protector-blueviolet?style=for-the-badge)](https://github.com/mauricio-100/env-guardian-oath)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/mauricio-100/env-guardian-oath/ci.yml?style=for-the-badge&logo=github)](https://github.com/mauricio-100/env-guardian-oath/actions)
[![Encryption](https://img.shields.io/badge/Encryption-AES--256--GCM-green?style=for-the-badge)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)
[![Auth](https://img.shields.io/badge/Auth-GitHub%20OAuth2-informational?style=for-the-badge)](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)
[![npm version](https://img.shields.io/npm/v/env-guardian.svg?style=for-the-badge)](https://www.npmjs.com/package/env-guardian)
[![License](https://img.shields.io/github/license/mauricio-100/env-guardian-oath?style=for-the-badge)](https://github.com/mauriciotukss2/env-guardian/blob/main/LICENSE)
[![Powered by Mangrat AI](https://img.shields.io/badge/Powered%20by-Mangrat%20AI-orange?style=for-the-badge)](https://github.com/mauricio-100)

**env-guardian: Ultimate Environment Security Suite.**

`env-guardian` est une solution de sécurité de nouvelle génération pour vos variables d'environnement. Fini les fichiers `.env` non sécurisés et les secrets dispersés. Centralisez, chiffrez et gérez l'accès à vos configurations sensibles en utilisant la puissance du chiffrement AES-256-GCM et l'authentification GitHub OAuth2.

## 🚀 Quick Start

Pour les plus pressés, voici comment sécuriser votre `.env` en moins d'une minute.

1.  **Installation Globale**
    ```bash
    npm install -g env-guardian
    ```

2.  **Initialisation (Authentification via GitHub)**
    ```bash
    guardian init
    ```
    > Suivez les instructions dans votre terminal pour vous authentifier via GitHub.

3.  **Chiffrement de votre fichier `.env`**
    ```bash
    # Crée un fichier .env.gdn chiffré et sécurisé
    guardian encrypt .env
    ```

4.  **Déchiffrement**
    ```bash
    # Génère un fichier .env à partir de .env.gdn
    guardian decrypt .env.gdn
    ```
    Votre fichier `.env` est maintenant prêt à être utilisé par votre application. N'oubliez pas d'ajouter `.env` à votre `.gitignore` !

## ✨ Features

`env-guardian` est conçu autour de trois piliers fondamentaux.

### 🛡️ Security First
* **Chiffrement End-to-End** : Utilise l'algorithme de chiffrement AES-256-GCM, une norme de l'industrie pour la protection des données sensibles.
* **Contrôle d'Accès Basé sur GitHub** : S'intègre à vos équipes GitHub pour gérer qui peut chiffrer ou déchiffrer les secrets.
* **Audit Log (Bientôt)** : Suivez chaque accès et chaque modification apportée à vos configurations.

### ☁️ Cloud Integration
* **CI/CD Ready** : Conçu pour s'intégrer parfaitement dans vos pipelines GitHub Actions, GitLab CI, et autres.
* **Synchronisation d'Équipe** : Partagez des configurations sécurisées avec votre équipe en un clin d'œil via un simple `git push`.
* **Plateforme Agnostique** : Fonctionne sur n'importe quel cloud (AWS, GCP, Azure) ou environnement on-premise.

### 💻 Developer Experience
* **CLI Intuitive** : Des commandes simples et claires pour une productivité maximale.
* **API Programmatique** : Intégrez la logique de chiffrement directement dans vos applications Node.js.
* **Validation de Schéma** : Assurez-vous que vos variables d'environnement respectent un format prédéfini pour éviter les erreurs de runtime.

## 📦 Installation

### Prérequis
* Node.js v16.x ou supérieure
* Un compte GitHub

### Installation Globale (Recommandé)
Pour un accès facile à la CLI `guardian` depuis n'importe où sur votre système.
```bash
npm install -g env-guardian
```

### Installation Locale
Pour une utilisation dans un projet spécifique ou via les scripts npm.
```bash
npm install --save-dev env-guardian
```
Vous pouvez ensuite l'utiliser via `npx guardian` ou dans la section `scripts` de votre `package.json`.

## 🔑 GitHub OAuth Setup

Pour utiliser `env-guardian`, vous devez d'abord configurer une application OAuth GitHub.

1.  **Créer une application OAuth** :
    * Accédez à [vos paramètres développeur GitHub](https://github.com/settings/developers).
    * Cliquez sur **New OAuth App**.
    * **Application name**: `env-guardian` (ou ce que vous voulez).
    * **Homepage URL**: `https://github.com/mauriciotukss2/env-guardian`.
    * **Authorization callback URL**: `http://localhost:9999/callback` (ce port est utilisé localement par `env-guardian` pour intercepter le code d'autorisation).

2.  **Générer un Client Secret** :
    * Une fois l'application créée, générez un nouveau secret client (**Generate a new client secret**).

3.  **Configurer `env-guardian`** :
    * Lors de la première exécution de `guardian init`, l'outil vous demandera votre **Client ID** et votre **Client Secret**.
    * Ces informations sont stockées localement dans `~/.config/.env-guardian/config.json`.

## 🛠️ Usage

### Commandes de Base
* **`guardian init`**: Configure et s'authentifie auprès de GitHub.
* **`guardian encrypt [fichier]`**: Chiffre un fichier (par défaut `.env`) et crée un `[fichier].gdn`.
* **`guardian decrypt [fichier]`**: Déchiffre un fichier `.gdn` pour générer sa version en clair.
* **`guardian sync`**: Synchronise les accès basés sur les permissions de votre repo GitHub (bientôt disponible).

### Workflow Avancé pour les Équipes

1.  **Admin/Lead Dev** :
    * Initialise le projet : `guardian init`.
    * Ajoute les secrets dans le fichier `.env`.
    * Chiffre les secrets : `guardian encrypt .env`.
    * Ajoute `.env` au `.gitignore`.
    * Commit et push le fichier `.env.gdn` sur le dépôt.

2.  **Nouveau Développeur** :
    * Clone le dépôt.
    * Installe les dépendances : `npm install`.
    * S'authentifie : `guardian init`.
    * Déchiffre les secrets pour son environnement local : `guardian decrypt .env.gdn`.
    * Lance l'application.

## ⚙️ CI/CD Integration Example (GitHub Actions)

Utilisez un token d'accès personnel (PAT) ou un service account pour déchiffrer les secrets dans votre pipeline.

1.  Créez un secret dans votre dépôt GitHub nommé `GUARDIAN_MASTER_KEY`.
2.  Utilisez ce secret dans votre workflow.

Voici un exemple de fichier `ci.yml` :

```yaml
# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Install env-guardian
        run: npm install -g env-guardian

      - name: Decrypt environment variables
        run: guardian decrypt .env.gdn --key ${{ secrets.GUARDIAN_MASTER_KEY }}

      - name: Run build
        run: npm run build

      - name: Run tests
        run: npm test
```

## 🛡️ Schema Validation avec `schema-forge`

Assurez-vous que vos variables d'environnement sont toujours correctes avant même de lancer votre application.

1.  Créez un fichier de schéma, par exemple `env.schema.js`.
2.  Validez votre `.env` après le déchiffrement.

Exemple de `env.schema.js`:
```javascript
// hypothetical schema-forge library
const { Schema, T } = require('schema-forge');

const envSchema = new Schema({
  DATABASE_URL: T.string().required().url(),
  API_KEY: T.string().required().length(32),
  PORT: T.number().default(3000),
  NODE_ENV: T.string().enum(['development', 'production', 'test']).required()
});

module.exports = envSchema;
```

Utilisez-le dans un script npm :
```json
"scripts": {
  "start:dev": "guardian decrypt && node -r schema-forge/validate.js index.js"
}
```

## 💻 Programmatic API

Utilisez `env-guardian` directement dans votre code pour des cas d'usage avancés.

```javascript
const { Guardian } = require('env-guardian');

const guardian = new Guardian({
  // Configuration si nécessaire, sinon utilise la config globale
});

async function secureData() {
  const plaintext = 'DATABASE_URL=postgres://...';
  
  // Chiffrement
  const encryptedContent = await guardian.encrypt(plaintext);
  console.log('Chiffré:', encryptedContent);

  // Déchiffrement
  const decryptedContent = await guardian.decrypt(encryptedContent);
  console.log('Déchiffré:', decryptedContent);
}

secureData();
```

## 🏛️ Project Architecture

Voici une vue d'ensemble de la structure du projet `env-guardian`.
```
/env-guardian
├── /bin
│   └── guardian.js       # Point d'entrée de la CLI
├── /lib
│   ├── auth.js           # Logique GitHub OAuth2
│   ├── crypto.js         # Fonctions de chiffrement/déchiffrement AES
│   ├── cli.js            # Définition des commandes (commander.js)
│   └── config.js         # Gestion de la configuration locale
├── /tests
│   └── ...               # Tests unitaires et d'intégration
├── .gitignore
├── package.json
└── README.md
```

## 🔒 Security Model

Notre modèle de sécurité repose sur plusieurs couches de protection :
1.  **Chiffrement au Repos**: Les fichiers `.env.gdn` sont chiffrés avec l'algorithme AES-256-GCM, rendant leur contenu illisible sans la clé de déchiffrement.
2.  **Chiffrement en Transit**: L'échange d'informations avec l'API GitHub se fait exclusivement via HTTPS (TLS).
3.  **Contrôle d'Accès**: L'authentification via GitHub garantit que seules les personnes autorisées (membres de l'organisation/dépôt) peuvent générer les clés nécessaires au déchiffrement.
4.  **Clés Éphémères**: Les tokens d'accès obtenus via OAuth sont stockés de manière sécurisée et peuvent être révoqués à tout moment depuis GitHub.

## 📊 Comparison

Comment `env-guardian` se compare-t-il aux autres solutions ?

| Feature                   | **env-guardian** 🚀 | `dotenv`         | `dotenv-vault`    | GitHub Secrets    |
| ------------------------- | ------------------- | ---------------- | ----------------- | ----------------- |
| **Chiffrement End-to-End** | ✅ AES-256-GCM      | ❌               | ✅                | ✅ (en transit)     |
| **Gestion d'Accès Équipe** | ✅ (via GitHub)     | ❌               | ✅ (via Vault)    | ✅                |
| **Utilisation Locale Facile** | ✅ Native           | ✅               | ✅                | ❌ (pour CI/CD)     |
| **Workflow Git-friendly** | ✅                  | ❌ (`.env` ignoré) | ✅ (`.env.vault`) | ❌                |
| **Validation de Schéma** | ✅ Intégrable       | ❌               | ❌                | ❌                |
| **API Programmatique** | ✅                  | ✅               | ✅                | ✅ (via API REST) |
| **Open Source & Gratuit** | ✅                  | ✅               | ❌ (plan payant)  | ✅ (pour repos publics) |

## 🤝 Contributing

Nous adorons les contributions de la communauté !

1.  **Fork** le projet sur GitHub.
2.  **Clone** votre fork en local : `git clone https://github.com/Mauricio-100/env-guardian-oath.git`
3.  **Créez une branche** pour votre feature : `git checkout -b feature/nouvelle-feature`
4.  **Installez les dépendances** : `npm install`
5.  **Liez votre version locale** pour tester la CLI : `npm link`
6.  Faites vos modifications.
7.  **Commit** vos changements : `git commit -m 'feat: Ajout de la nouvelle feature'`
8.  **Push** vers votre branche : `git push origin feature/nouvelle-feature`
9.  Ouvrez une **Pull Request**.

## ❓ Troubleshooting

* **Erreur OAuth "Invalid Client ID"**: Assurez-vous que le Client ID fourni lors de `guardian init` correspond exactement à celui de votre application OAuth GitHub.
* **Échec du Déchiffrement**:
    * Vérifiez que vous êtes authentifié avec le bon compte GitHub (`guardian whoami`).
    * Assurez-vous d'avoir les permissions sur le dépôt GitHub où le fichier a été chiffré.
* **Port 9999 déjà utilisé**: Si le port du callback OAuth est occupé, assurez-vous qu'aucune autre application ne l'utilise et réessayez.

## 📜 License

Ce projet est distribué sous la **licence MIT**. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Acknowledgments

* Un grand merci à la communauté open-source pour les excellentes bibliothèques qui rendent ce projet possible.
* Inspiré par la simplicité de `dotenv` et la sécurité de `dotenv-vault`.

### notre chaine WhatsApp

[📟chaine-WhatsApp](https://whatsapp.com/channel/0029VbBaQAfFcowCJIwta42yhttps://img.shields.io/badge/chaine-WhatsApp.com-blueviolet?style=for-the-badge)

### nous somme aussi sur Gravatar

[🗃️Gravatar-Mauricio](100]https://gravatar.com/donutmortallya0023fc30d)


### plus d'infos sur Patreon

[👨‍👦patreon-Mauricio-100](https://www.patreon.com/c/Mauricio_100)

### lien direct npm 

[📦npm-agent](https://www.npmjs.com/package/env-guardian)

### plus d'infos contacté notre FAQ

[FAQ](https://github.com/mauricio-100/env-guardian-oath/FAQ.md.git)

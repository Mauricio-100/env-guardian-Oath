######        © forged by Dragon🔥
  
###### 🐲 Original project started by [mauricio-100](github.com/Mauricio-100.git) (🐉 MIT License by Dragon) 

# env-guardian-dragon 🐉
![Dragon Verified](https://img.shields.io/badge/Dragon🐉-Verified✔️-black?style=for-the-badge&logo=github&logoColor=white) ![Verified](https://img.icons8.com/fluency/48/000000/verified-badge.png)





<img width="1024" height="1024" alt="env-guardian-dragon logo" src="https://github.com/user-attachments/assets/39b87253-2882-495e-9e78-c59ca3d4909a" />



[![Integrity](https://img.shields.io/badge/Integrity-ChatGPT%20Verified-8A2BE2?style=for-the-badge&logo=openai)](https://github.com/Mauricio-100/env-guardian-oath)

[![npm version](https://img.shields.io/npm/v/env-guardian-dragon.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/env-guardian-dragon)
[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/mauricio-100/env-guardian-oath/ci.yml?style=for-the-badge&logo=github)](https://github.com/mauricio-100/env-guardian-oath/actions)
[![Encryption](https://img.shields.io/badge/Encryption-AES--256--GCM-green?style=for-the-badge)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)
[![Auth](https://img.shields.io/badge/Auth-GitHub%20OAuth2-informational?style=for-the-badge)](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps)
[![License](https://img.shields.io/github/license/mauricio-100/env-guardian-oath?style=for-the-badge)](./LICENSE)
[![Powered by Mangrat AI](https://img.shields.io/badge/Powered%20by-Mangrat%20AI-orange?style=for-the-badge)](https://github.com/mauricio-100)

# 🐉 ENV-GUARDIAN-DRAGON

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://img.shields.io/npm/v/@Mauricio-100/env-guardian-dragon?color=green)](https://www.npmjs.com/package/@Mauricio-100/env-guardian-dragon)
[![Node.js](https://img.shields.io/badge/Node.js->=16.x-brightgreen?style=flat-square&logo=node.js)](https://nodejs.org/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/Mauricio-100/env-guardian-Oath)

**Ultimate Environment Security Suite** : centralisez, chiffrez et protégez vos variables d’environnement avec style et sécurité militaire.

---

## 🔐 Description
`env-guardian-dragon` est une suite complète pour sécuriser vos fichiers `.env` :
- Chiffrement AES-256-GCM
- Gestion des accès via GitHub OAuth2
- CLI intuitive pour chiffrer/déchiffrer
- Validation des schémas d’environnement
- API Node.js pour intégration programmatique
- Compatible CI/CD et cloud

---

## ⚡ Fonctionnalités

### Sécurité
- 🔒 Chiffrement AES-256-GCM de vos fichiers `.env`
- 🗝 Authentification GitHub OAuth2
- 📜 Audit log (bientôt)
- 🔑 Clés éphémères pour tokens

### Pour les développeurs
- CLI simple :  
  ```bash
  env-guardian init
  env-guardian encrypt .env
  env-guardian decrypt .env.gdn
  env-guardian push
  env-guardian pull
````
````

* Validation de schéma via `schema-forge`
* API Node.js prête à l’emploi

### Intégration cloud & CI/CD

* GitHub Actions / GitLab CI ready
* Synchronisation d’équipe
* Fonctionne sur cloud ou on-premise

### Serveur externe

* Node.js (`/Server/index.js`) pour gestion utilisateurs et tokens
* Base MySQL avec création automatique de tables
* PM2 pour tourner 24/7
* Redirection automatique depuis la CLI pour GitHub OAuth

---

## 🛠 Installation

```bash
npm install -g @Mauricio-100/env-guardian-dragon
```

**Initialisation de votre projet :**

```bash
env-guardian init
```

---

## 🚀 Usage

### Chiffrement d’un fichier `.env`

```bash
env-guardian encrypt .env
```

### Déchiffrement

```bash
env-guardian decrypt .env.gdn
```

### Push & Pull (GitHub Secrets)

```bash
env-guardian push
env-guardian pull
```

---

## 🏗 Structure du projet

```
/env-guardian-Oath
├── /Server               # Serveur Node.js
│   └── index.js
├── /bin
│   └── env-guardian.js   # CLI principale
├── /lib
│   ├── auth.js
│   ├── crypto.js
│   ├── cli.js
│   └── config.js
├── /src
│   └── commands          # Commandes CLI
├── .gitignore
├── .npmignore
├── package.json
└── README.md
```

---

## 🔧 Dépendances principales

* `axios`, `bcrypt`, `commander`, `inquirer`, `libsodium-wrappers`, `node-machine-id`, `open`
* `mysql2`, `dotenv`
* `jsonwebtoken` pour JWT

---

## ⚙️ Démarrage du serveur

```bash
pm2 start ./Server/index.js --name env-guardian-server
```
```
pm2 save
```

---

## 💡 Notes importantes

* `.env` et `/Server` sont ignorés dans le dépôt (`.gitignore`) et npm (`.npmignore`)
* Compatible Node.js >=16.x (iSH sur iPhone fonctionne)
* Tous les modules doivent être installés (`npm install`) pour que le serveur fonctionne

---

## 📄 Licence

MIT © Mauricio 🐉





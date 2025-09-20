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

**env-guardian-dragon 🐉: Ultimate Environment Security Suite.**

`env-guardian-dragon` est une solution de sécurité de nouvelle génération pour vos variables d'environnement.  
Fini les fichiers `.env` non sécurisés : **centralisez, chiffrez et contrôlez l’accès** avec **AES-256-GCM** et **GitHub OAuth2**.

---

## 🚀 Quick Start

1. **Installation Globale**
   ```bash
   npm install -g env-guardian-dragon
````
````
2. **Initialisation (Authentification via GitHub)**
 ```
   guardian init
   ```

3. **Chiffrement de votre fichier `.env`**

   ```bash
   guardian encrypt .env
   ```

4. **Déchiffrement**

   ```bash
   guardian decrypt .env.gdn
   ```

> N'oubliez pas d’ajouter `.env` à votre `.gitignore`.

---

## ✨ Features

### 🛡️ Security First

* **AES-256-GCM** : chiffrement de bout en bout.
* **GitHub OAuth2** : gestion d’accès par équipes.
* **Audit Logs** *(à venir)* : traçabilité complète.

### ☁️ Cloud Integration

* Compatible **CI/CD** (GitHub Actions, GitLab, etc).
* **Partage d’équipe** via GitHub.
* Fonctionne sur **AWS, GCP, Azure, on-premise**.

### 💻 Developer Experience

* CLI intuitive.
* API Node.js pour intégrations custom.
* Validation de schéma *(ex: schema-forge)*.

---

## 📦 Installation

### Prérequis

* Node.js v16 ou supérieur
* Compte GitHub

### Installation Globale

```bash
npm install -g env-guardian-dragon
```

### Installation Locale

```bash
npm install --save-dev env-guardian-dragon
```

---

## 🔑 GitHub OAuth Setup

1. Créez une [GitHub OAuth App](https://github.com/settings/developers).

   * **Callback URL** : `http://localhost:9999/callback`

2. Récupérez le **Client ID** & **Client Secret**.

3. Fournissez-les lors de `guardian init`.

---

## ⚙️ Exemple CI/CD (GitHub Actions)

```yaml
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
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm install -g env-guardian-dragon
      - run: guardian decrypt .env.gdn --key ${{ secrets.GUARDIAN_MASTER_KEY }}
      - run: npm run build
      - run: npm test
```

---

## 📊 Comparison

| Feature            | env-guardian-dragon 🐉 | dotenv | dotenv-vault | GitHub Secrets |
| ------------------ | ---------------------- | ------ | ------------ | -------------- |
| AES-256-GCM        | ✅                      | ❌      | ✅            | ✅              |
| GitHub OAuth       | ✅                      | ❌      | ❌            | ✅              |
| CI/CD ready        | ✅                      | ❌      | ✅            | ✅              |
| Schema validation  | ✅                      | ❌      | ❌            | ❌              |
| Open-source & Free | ✅                      | ✅      | ❌ (payant)   | ✅              |

---

## 🤝 Contributing

1. Fork le projet
2. `git clone https://github.com/Mauricio-100/env-guardian-oath.git`
3. `git checkout -b feature/ma-feature`
4. `npm install`
5. `npm link` pour tester la CLI
6. `git commit -m "feat: nouvelle feature"`
7. `git push` & ouvre une Pull Request

---

## 📜 License

Distribué sous **MIT License (Dragon Edition 🐉)**.
Voir [LICENSE](./LICENSE).

---

## 🌍 Communauté

* [📟 WhatsApp](https://whatsapp.com/channel/0029VbBaQAfFcowCJIwta42y)
* 
* [🗃️ Gravatar Mauricio](https://gravatar.com/donutmortallya0023fc30d)
* 
* [👨‍👦 Patreon](https://www.patreon.com/c/Mauricio_100)
* 
* [📦 npm officiel](https://www.npmjs.com/package/env-guardian-dragon)
* 
* [❓ FAQ](https://github.com/Mauricio-100/env-guardian-Oath/blob/main/FAQ.md)

### Telechargement Rapide

* [![npm version](https://img.shields.io/npm/v/env-guardian-dragon.svg?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/env-guardian-dragon)

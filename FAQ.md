🔍 FAQ - ENV-GUARDIAN

❓ Questions Fréquentes

---

🤔 Qu'est-ce qu'ENV-GUARDIAN et pourquoi devrais-je l'utiliser ?

ENV-GUARDIAN est un système complet de gestion sécurisée des variables d'environnement qui va bien au-delà des solutions traditionnelles comme dotenv. Il offre :

· 🔒 Chiffrement AES-256-GCM pour une protection maximale
· 🌐 Intégration GitHub OAuth pour une authentification sécurisée
· 🤝 Partage d'équipe via GitHub Secrets
· ✅ Validation de schéma avec schema-forge
· 🚀 Workflow CI/CD optimisé

Contrairement aux solutions basiques, ENV-GUARDIAN protège activement vos secrets contre l'exposition accidentelle et permet une collaboration sécurisée entre développeurs.

---

⚡ Comment installer et initialiser rapidement ENV-GUARDIAN ?

Installation globale :

```bash
npm install -g @mauriciotukss2/env-guardian
```

Installation locale :

```bash
npm install --save-dev @mauriciotukss2/env-guardian
```

Initialisation rapide :

```bash
# Configuration initiale
env-guardian init

# Connexion à GitHub
env-guardian connect

# Chiffrement du fichier .env
env-guardian encrypt .env
```

---

🔐 Comment chiffrer et déchiffrer un fichier .env ?

Chiffrement :

```bash
# Chiffrement basique
env-guardian encrypt .env

# Chiffrement avec fichier de sortie personnalisé
env-guardian encrypt .env -o .env.production.encrypted

# Chiffrement avec mot de passe spécifique
env-guardian encrypt .env --password "mon-mot-de-passe-super-secret"
```

Déchiffrement :

```bash
# Déchiffrement standard
env-guardian decrypt .env.encrypted

# Déchiffrement vers un fichier spécifique
env-guardian decrypt .env.encrypted -o .env.development

# Déchiffrement avec mot de passe
env-guardian decrypt .env.encrypted --password "mon-mot-de-passe-super-secret"
```

---

🔑 Que faire si j'oublie mon mot de passe ou mon token GitHub OAuth ?

Mot de passe oublié :
Malheureusement, sans le mot de passe, il est impossible de déchiffrer les données. ENV-GUARDIAN utilise un chiffrement fort qui ne peut être contourné. Nous recommandons :

1. 🔄 Restaurer depuis une sauvegarde si vous avez utilisé la fonction GitHub Secrets
2. 📝 Recréer le fichier d'environnement à partir de vos notes sécurisées
3. 🚨 Régénérer tous les secrets pour maintenir la sécurité

Token GitHub perdu :

```bash
# Régénérer la connexion GitHub
env-guardian disconnect
env-guardian connect
```

---

⚙️ Comment configurer des options avancées ?

Chemins personnalisés :
Créez un fichier .env-guardianrc :

```json
{
  "encryptedFile": ".config/env.encrypted",
  "backupPath": ".backups/secrets",
  "autoPush": true,
  "defaultRepo": "mon-org/mon-projet"
}
```

Sauvegarde automatique :

```bash
# Sauvegarde locale automatique
env-guardian backup --auto

# Sauvegarde vers GitHub
env-guardian push --repo mon-org/mon-projet --auto
```

Intégration CI/CD :

```yaml
# Exemple GitHub Actions
- name: Déchiffrer l'environnement
  run: env-guardian decrypt .env.ci.encrypted
  env:
    ENV_GUARDIAN_PASSWORD: ${{ secrets.ENV_GUARDIAN_PASSWORD }}
```

---

🐛 Comment contribuer ou signaler un bug ?

Signaler un bug :

1. 📋 Vérifiez d'abord les issues existantes
2. 📝 Créez un nouveau ticket avec :
   · Version d'ENV-GUARDIAN
   · Système d'exploitation
   · Étapes pour reproduire le bug
   · Messages d'erreur complets

Contribuer au projet :

1. 🍴 Fork le dépôt
2. 🌿 Créez une branche feature : git checkout -b feature/ma-fonctionnalite
3. 💾 Committez vos changements : git commit -m 'Ajout ma fonctionnalité'
4. 📤 Push vers la branche : git push origin feature/ma-fonctionnalite
5. 🔀 Ouvrez une Pull Request

---

🔧 Problèmes courants et solutions

Problème : Erreur d'authentification GitHub

```
❌ Échec de la connexion à GitHub: Bad credentials
```

Solution :

```bash
# Régénérer le token
env-guardian disconnect
env-guardian connect
```

Problème : Erreur de déchiffrement

```
❌ Échec du déchiffrement: Unsupported state or unable to authenticate data
```

Solution :

· Vérifiez que vous utilisez le même mot de passe que pour le chiffrement
· Assurez-vous que le fichier n'a pas été corrompu

Problème : Permission denied

```
Error: EACCES: permission denied, open '/root/.env-guardian/config.enc'
```

Solution :

```bash
# Corriger les permissions
sudo chown -R $USER:$USER ~/.env-guardian
chmod 700 ~/.env-guardian
```

---

📚 Liens utiles

· 📂 Dépôt GitHub : https://github.com/Mauricio-100/env-guardian
· 📦 Page npm : https://www.npmjs.com/package/@mauriciotukss2/env-guardian
· 📖 Documentation complète : https://github.com/Mauricio-100/env-guardian/wiki
· 🐛 Signaler un bug : https://github.com/Mauricio-100/env-guardian/issues
· 💡 Proposer une fonctionnalité : https://github.com/Mauricio-100/env-guardian/discussions

---

Une question ne figure pas dans cette FAQ ?
N'hésitez pas à ouvrir une discussion sur GitHub ou à créer un ticket pour toute question supplémentaire !

Dernière mise à jour : ${new Date().toLocaleDateString()}

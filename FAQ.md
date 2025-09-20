# FAQ - ENV-GUARDIAN

---

## ❓ Qu’est-ce qu’ENV-GUARDIAN et pourquoi l’utiliser ?

ENV-GUARDIAN est un outil sécurisé pour la gestion des fichiers `.env`, permettant de chiffrer et déchiffrer facilement vos variables d’environnement sensibles. Il protège vos secrets de développement et de production contre les fuites accidentelles et facilite leur gestion dans les projets.

Il est idéal pour les développeurs qui veulent garder leurs configurations sécurisées tout en automatisant leur intégration dans les workflows de développement et CI/CD.

---

## 🚀 Comment installer et initialiser rapidement le projet ?

Pour commencer avec ENV-GUARDIAN, suivez ces étapes :

1. Installer avec npm :
```
npm install -g env-guardian
```
texte

2. Initialiser dans votre projet (cela créé un fichier de configuration par défaut) :

init du gardien de l'environnement

texte

3. Chiffrez votre fichier `.env` :

env-guardian crypter

texte

4. Déchiffrez-le quand besoin :

décryptage env-guardian

texte

Vous pouvez aussi consulter toutes les options avec :
```
env-guardian --aide
```
texte

---

## 🔐 Comment chiffrer et déchiffrer un fichier `.env` ?

### Chiffrement

Pour chiffrer un fichier `.env` :
```
env-guardian crypter --fichier .env
```
texte

Par défaut, le fichier chiffré sera sauvegardé sous `.env.enc`.

### Déchiffrement

Pour récupérer les variables originales :
```
env-guardian décrypter --file .env.enc
```
texte

Cela restaurera un fichier `.env` avec les valeurs en clair.

Vous devez fournir votre mot de passe ou token configuré lors de l’initiation.

---

## ❗ Que faire si j’oublie mon mot de passe ou token GitHub OAuth ?

Si vous oubliez votre mot de passe ou token, malheureusement, vos fichiers chiffrés ne pourront pas être déchiffrés sans la clé correcte, car la sécurité est garantie par un chiffrement fort.

Actions recommandées :  
- Vérifiez si vous avez sauvegardé vos clés ailleurs (gestionnaire de mots de passe, documentation privée).  
- Si vous utilisez GitHub OAuth, générez un nouveau token OAuth et mettez à jour la configuration via :

configuration de l'environnement guardian set-token

texte

- Recréez et chiffrez un nouveau fichier `.env` si vous perdez définitivement l’accès.

---

## ⚙️ Comment configurer des options avancées (chemins personnalisés, backup) ?

Vous pouvez personnaliser ENV-GUARDIAN via le fichier de config `env-guardian.config.json` ou directement en ligne de commande.

### Exemple de config personnalisée:
```
{
"envFilePath": "config/.env.production",
"encryptedFilePath": "config/.env.production.enc",
"backup": true,
"backupPath": "backups/env-backup"
}
```
texte

### Utilisation CLI avec options :
```
env-guardian encrypt --file config/.env.production --backup --backup-path sauvegardes/env-backup
```
texte

L’option `--backup` crée une copie de sauvegarde avant modification, sécurisant vos fichiers.

---

## 🤝 Comment contribuer ou signaler un bug ?

ENV-GUARDIAN est open-source et accueille avec plaisir vos contributions.

Pour contribuer :

1. Forkez le dépôt [https://github.com/Mauricio-100/env-guardian-oath.git](https://github.com/Mauricio-100/env-guardian-oath.git)  
2. Créez une branche dédiée (`feature/ma-fonctionnalite` ou `fix/mon-bug`)  
3. Soumettez vos changements via une Pull Request

Pour signaler un bug ou demander une fonctionnalité, ouvrez une issue dans la section Issues du dépôt GitHub.

Merci de respecter les bonnes pratiques et de bien documenter vos demandes.

---

## 🛠️ Quels problèmes courants et solutions possibles ?

- **Le fichier chiffré ne se déchiffre pas**  
  Vérifiez que vous utilisez le bon mot de passe ou token. Assurez-vous que le fichier n’a pas été corrompu.

- **Erreur lors de l’installation npm**  
  Vérifiez la version de Node.js (recommandé >=14). Nettoyez le cache npm avec `npm cache clean --force`.

- **Problèmes de permission lors de la lecture/écriture**  
  Lancez la commande avec les droits suffisants ou ajustez les permissions des dossiers cibles.

- **La configuration personnalisée n’est pas prise en compte**  
  Vérifiez la syntaxe JSON du fichier `env-guardian.config.json` et le chemin vers ce fichier.

---

## 🔗 Liens rapides

- Dépôt GitHub : [https://github.com/Mauricio-100/env-guardian.git](https://github.com/Mauricio-100/env-guardian.git)  
- Documentation complète : (à compléter dans le dépôt)  
- npm package : Recherchez `env-guardian` sur [npmjs.com](https://www.npmjs.com)

---

Ce FAQ vous aidera à démarrer rapidement et à bien utiliser ENV-GUARDIAN pour sécuriser vos fichiers `.env` tout en restant productif. Pour toute autre question, se référer au dépôt GitHub.

# Changelog - env-guardian-dragon 🐉

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

---

## [v2.2.0] - 2025-09-20
### Ajouté
- Nouvelle version stable avec intégration complète GitHub OAuth2.  
- Amélioration de la sécurité : chiffrement AES-256-GCM optimisé.  
- Badges README mis à jour pour refléter l’intégrité et la vérification.  

### Modifié
- Workflow CLI `guardian decrypt` et `guardian encrypt` amélioré pour la stabilité.  
- Corrections de bugs sur le déchiffrement local des `.env.gdn`.  

### Préparé
- GitHub Actions avec SSH pour CI/CD.  

---

## [v2.1.0] - 2025-08-15
### Ajouté
- Support CLI pour validation automatique de schéma `.env`.  
- Possibilité de synchroniser les secrets via GitHub repository.  

### Modifié
- Amélioration de l’expérience utilisateur sur iSH et terminaux légers.  

---

## [v2.0.0] - 2025-07-01
### Ajouté
- Première version majeure “Dragon” 🐉.  
- Intégration GitHub OAuth2 pour contrôle d’accès.  
- Début du support CI/CD via GitHub Actions.  
- Chiffrement end-to-end des fichiers `.env.gdn`.  

### Modifié
- Documentation README et badges mis à jour.  

---

## [v1.0.0] - 2025-01-15
### Initial Release
- CLI de base `env-guardian` pour chiffrement et déchiffrement `.env`.  
- Algorithme AES-256-CBC pour sécurisation des fichiers.  
- Support minimal pour Node.js et déploiement local.  

---

**Note :**  
Chaque version majeure/minor est taguée dans Git (`git tag -a vX.X.X`) pour référence stable et publication npm.

# Blog avec React, Vite, DaisyUI et JSONPlaceholder

## Description
Ce projet est un blog simple construit avec React et Vite, utilisant la librairie DaisyUI pour le style et JSONPlaceholder comme API pour récupérer les articles et les commentaires.

## Technologies utilisées
- **React** (avec Vite pour le bundling rapide)
- **DaisyUI** (basé sur Tailwind CSS pour le style)
- **JSONPlaceholder** (API simulée pour les articles et commentaires)

## Installation

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/SaliouBaninou/reat-simple-blog.git
   cd reat-simple-blog
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le projet**
   ```bash
   npm run dev
   ```

## Fonctionnalités
- Affichage de la liste des articles
- Consultation d'un article avec ses détails et commentaires
- Interface responsive avec DaisyUI

## Utilisation de l'API JSONPlaceholder
Les données sont récupérées depuis `https://jsonplaceholder.typicode.com/` :
- Articles : `/posts`


## Personnalisation
Si tu veux modifier le design, tu peux personnaliser les styles avec Tailwind et DaisyUI dans `tailwind.config.js`.

## Déploiement
Pour builder l'application en production :
```bash
npm run build
```
Tu peux ensuite déployer le dossier `dist` sur une plateforme comme Vercel, Netlify ou GitHub Pages.

## Auteur
Ce projet a été réalisé avec passion et dévouement par **SALIOU Baninou**. 🎉👏🔥


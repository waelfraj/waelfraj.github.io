# Portfolio Wael Fraj

Portfolio professionnel moderne créé avec React et Tailwind CSS.

## 🚀 Fonctionnalités

- **Hero Section** : Présentation avec CTA buttons
- **À propos** : Section professionnelle
- **Compétences** : Technologies Web, Mobile, Architecture
- **Projets** : Chargement dynamique depuis CSV ou Google Sheets
- **Services** : Présentation des services offerts
- **Contact** : Formulaire de contact avec fallback mailto

## 📦 Installation

```bash
npm install
```

## 🏃 Démarrage

```bash
npm start
```

L'application sera accessible sur `http://localhost:3000`

## 📊 Gestion des Projets

### Format CSV

Les projets peuvent être chargés via un fichier CSV avec le format suivant :

```csv
name,description,techStack,image,link,demoLink
Mon Projet,Description du projet,React,Node.js,https://image-url.jpg,https://github.com/user/repo,https://demo-url.com
```

**Colonnes :**
- `name` : Nom du projet
- `description` : Description du projet
- `techStack` : Technologies utilisées (séparées par des virgules)
- `image` : URL de l'image du projet
- `link` : Lien GitHub/code source
- `demoLink` : Lien vers la démo (optionnel)

### Google Sheets

1. Créez un Google Sheet avec les mêmes colonnes que le CSV
2. Partagez le sheet en mode "Tout le monde avec le lien peut voir"
3. Copiez l'URL du sheet
4. Collez l'URL dans le champ "URL Google Sheets" de la section Projets
5. Cliquez sur "Charger"

Les projets sont automatiquement sauvegardés dans le localStorage du navigateur.

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.js` :

- **Teal** : `#14b8a6`
- **Orange** : `#f97316`
- **Navy** : `#0a192f`

### Typographie

- **Sans-serif** : Inter (Google Fonts)
- **Monospace** : SF Mono, Monaco, Inconsolata

## 🛠️ Technologies

- React 18
- Tailwind CSS 3
- Framer Motion (animations)
- Lucide React (icônes)

## 📱 Responsive

Le portfolio est entièrement responsive avec une approche mobile-first.

## 🚢 Déploiement

### Netlify / Vercel

Le projet est prêt pour le déploiement sur Netlify ou Vercel :

```bash
npm run build
```

Le dossier `build` contient les fichiers statiques à déployer.

### GitHub Pages

```bash
npm run build
npm run deploy
```

## 📝 Notes

- Les projets sont sauvegardés dans le localStorage
- Le formulaire de contact utilise mailto comme fallback
- Pour une intégration backend, modifiez `Contact.jsx` pour envoyer les données à votre API

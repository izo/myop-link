# README.md
# 😎 MDR.cool

Un clone de Linktree minimaliste et élégant pour partager du contenu humoristique, construit avec Astro.js et Tailwind CSS.

## 🚀 Technologies utilisées

- [Astro.js](https://astro.build) - Framework web ultra-performant
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utilitaire
- Font Awesome - Pour les icônes de réseaux sociaux

## 🛠️ Installation

1. Clonez le repository
```bash
git clone https://github.com/votre-username/mdr.cool.git
cd mdr.cool
```

2. Installez les dépendances
```bash
npm install
```

3. Lancez le serveur de développement
```bash
npm run dev
```

Le site sera disponible sur `http://localhost:4321`

## 📦 Construction

Pour construire le site pour la production :
```bash
npm run build
```

Pour prévisualiser la version de production :
```bash
npm run preview
```

## 📝 Personnalisation

### Liens
Modifiez le fichier `src/pages/index.astro` pour ajouter ou modifier les liens :
```js
const links = [
  {
	title: "Votre Titre",
	href: "https://votre-lien.com"
  },
  // Ajoutez d'autres liens...
];
```

### Réseaux sociaux
Modifiez la section `socials` dans `src/pages/index.astro` :
```js
const socials = [
  {
	icon: "twitter",
	href: "https://twitter.com/votre-compte"
  },
  // Ajoutez d'autres réseaux sociaux...
];
```

### Style
Le thème peut être personnalisé dans `tailwind.config.cjs` :
```js
theme: {
  extend: {
	colors: {
	  primary: '#votre-couleur',
	  secondary: '#votre-couleur'
	}
  }
}
```

## 📱 Fonctionnalités

- ✨ Design responsive
- 🎨 Thème sombre élégant
- 🔄 Animations au survol
- 📱 Icônes de réseaux sociaux
- 🖼️ Image de profil personnalisable
- 🚀 Performance optimisée
- 🔍 SEO-friendly

## 📄 Licence

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

Votre nom
- Twitter: [@votre-twitter](https://twitter.com/votre-twitter)
- GitHub: [@votre-github](https://github.com/votre-github)

## 💖 Support

Donnez une ⭐️ si ce projet vous a aidé !
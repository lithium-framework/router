# Lithium Hash-router Element

Le **Lithium Hash-router Element** est un composant Web léger conçu pour gérer la navigation dans une application Web en utilisant des **hashes** (`#`). Ce composant permet d'afficher dynamiquement des vues correspondant aux routes définies sans nécessiter de rechargement de page.

Développé avec [**Lithium Framework**](https://lithium-framework.github.io/lithium.io/), il facilite la création d'applications mono-page (SPA) en offrant un contrôle précis sur le rendu des composants.

## Installation

Assurez-vous que **Lithium Framework** est installé dans votre projet :

```bash
npm install @lithium-framework/core
```

Et installez le **Lithium Hash-router Element** :

```bash
npm install @lithium-framework/router-element
```

## Utilisation

### Exemple de base

Voici comment intégrer le **Lithium Hash-router Element** dans votre application :

### Avec Lithium

```tsx
import { render, html } from '@lithium-framework/core';

// Exemples de templates pour les différentes pages
const homeTemplate = html`
    <h1>Accueil</h1>
    <p>Bienvenue sur la page d'accueil</p>
`;

const aboutTemplate = html`
    <h1>À propos</h1>
    <p>Voici des informations sur nous.</p>
`;

const contactTemplate = html`
    <h1>Contact</h1>
    <p>Contactez-nous ici.</p>
`;

// Utiliser le hash-router
render(html`
    <hash-router>
        <hash-router-element path="#home" :element=${homeTemplate}></hash-router-element>
        <hash-router-element path="#about" :element=${aboutTemplate}></hash-router-element>
        <hash-router-element path="#contact" :element=${contactTemplate}></hash-router-element>
    </hash-router>
`);
```

### HTML + JS Vanilla

```html
<hash-router>
    <hash-router-element path="#home" id="homeRoute"></hash-router-element>
    <hash-router-element path="#about" id="aboutRoute"></hash-router-element>
    <hash-router-element path="#contact" id="contactRoute"></hash-router-element>
</hash-router>

<script>
    // Sélectionner les routes et définir les callbacks
    const homeRoute = document.getElementById('homeRoute');
    const aboutRoute = document.getElementById('aboutRoute');
    const contactRoute = document.getElementById('contactRoute');

    // Définir des callbacks pour chaque route
    homeRoute.setRenderCallback(() => {
        console.log("Rendering Home Page");
        homeRoute.innerHTML = `
            <h1>Accueil</h1>
            <p>Bienvenue sur la page d'accueil</p>
        `;
    });

    aboutRoute.setRenderCallback(() => {
        console.log("Rendering About Page");
        aboutRoute.innerHTML = `
            <h1>À propos</h1>
            <p>Voici des informations sur nous.</p>
        `;
    });

    contactRoute.setRenderCallback(() => {
        console.log("Rendering Contact Page");
        contactRoute.innerHTML = `
            <h1>Contact</h1>
            <p>Contactez-nous ici.</p>
        `;
    });
</script>
```

### Fonctionnement

- **`<hash-router>`** : Composant principal qui gère les différentes vues de l'application.
- **`<hash-router-element>`** : Définit une vue liée à un `path` (hash) spécifique, comme `#home` ou `#about`. Utilise la méthode `setElement()` pour définir le modèle à rendre lorsque la route devient active.
- Lorsqu'un utilisateur clique sur un lien ou modifie le hash de l'URL, le composant affiche dynamiquement la vue correspondante sans recharger la page.

### Ajouter plus de routes

Vous pouvez ajouter d'autres vues en utilisant des **`hash-router-element`** supplémentaires :

```tsx
const servicesTemplate = html`
    <h1>Nos Services</h1>
    <p>Découvrez nos services ici.</p>
`;

// Ajouter une nouvelle route
const servicesRoute = document.createElement('hash-router-element');
servicesRoute.path = "#services";
servicesRoute.setElement(servicesTemplate);
document.querySelector('hash-router').appendChild(servicesRoute);
```

---

## Notes

- Chaque **`hash-router-element`** doit avoir un `path` unique correspondant au hash de l'URL.
- Les templates définis à l'aide de `setElement()` permettent un rendu dynamique lorsque la route devient active.
- Si aucun hash ne correspond à une vue, celle-ci restera cachée par défaut.
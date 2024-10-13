# Lithium Hash-router Element

Le **Lithium Hash-router Element** est un composant Web simple et léger permettant de gérer la navigation dans une application Web via des routes basées sur des **hashes** (`#`). Ce composant affiche dynamiquement les vues correspondant aux routes définies sans nécessiter de rechargement de page.

Développé avec [**Lithium Framework**](https://lithium-framework.github.io/lithium.io/), il vous permet de créer des applications mono-page (SPA) en toute simplicité.

## Utilisation

### Installation

Assurez-vous que **Lithium Framework** est installé dans votre projet :

```bash
npm install @lithium-framework/core
```

### Exemple de base

Voici comment intégrer le **Lithium Hash-router Element** dans votre application :

```html
<hash-router>
    <hash-router-element path="#home">
        <h1>Accueil</h1>
        <p>Bienvenue sur la page d'accueil</p>
    </hash-router-element>

    <hash-router-element path="#about">
        <h1>À propos</h1>
        <p>Voici des informations sur nous.</p>
    </hash-router-element>

    <hash-router-element path="#contact">
        <h1>Contact</h1>
        <p>Contactez-nous ici.</p>
    </hash-router-element>
</hash-router>

<nav>
    <a href="#home">Accueil</a>
    <a href="#about">À propos</a>
    <a href="#contact">Contact</a>
</nav>
```

### Fonctionnement

- **`<hash-router>`** : Composant principal qui gère les différentes vues de l'application.
- **`<hash-router-element>`** : Définit une vue liée à un `path` (hash) spécifique, par exemple `#home` ou `#about`.
- Lorsque l'utilisateur clique sur un lien dans la navigation, le hash de l'URL est mis à jour et la vue correspondante est affichée.

### Ajouter plus de routes

Vous pouvez ajouter d'autres vues en utilisant des **`hash-router-element`** supplémentaires :

```html
<hash-router-element path="#services">
    <h1>Nos Services</h1>
    <p>Découvrez nos services ici.</p>
</hash-router-element>
```

---

## Notes

- Assurez-vous que chaque **`hash-router-element`** a un `path` unique correspondant au hash de l'URL.
- Si aucun hash ne correspond à une vue, celle-ci restera cachée par défaut.
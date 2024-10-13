import { WebComponent, html, css, customElement, attr , state , render } from "@lithium-framework/core";

// Chaque élément correspond à une vue spécifique, identifiable via l'attribut `path`.
// Les callbacks sont appelés lorsque la route est activée.
@customElement({
  name: 'hash-router-element',
  template: html`<slot></slot>` // Contenu via slot dynamique
})
export class HashRouterElement extends WebComponent {
  @attr() path: string = "";
  @state() element: any = null; // Stocke le modèle (template)

  // Méthode pour définir un template à rendre lors de l'activation de la route
  setElement(template: any) {
    this.element = template;
  }

  // Méthode appelée lorsque la route devient active
  activate() {
    // Utiliser Lithium pour rendre le contenu dynamique
    this.innerHTML = ""; // Vider le contenu précédent
    if (this.element) {
      render(this.element, this); // Rendre le template dans l'élément
    }
    this.style.display = 'block';  // Affiche l'élément
  }

  // Méthode appelée lorsque la route devient inactive
  deactivate() {
    this.style.display = 'none'; // Masque l'élément
  }
}

// Template pour `hash-router`
const routerTemplate = html<HashRouter>`
    <slot></slot>
`;

// Styles pour `hash-router` (optionnel)
const routerStyles = css`
    :host {
        display: block;
    }
`;

// Définition de `hash-router`
@customElement({
    name: 'hash-router',
    template: routerTemplate,
    styles: routerStyles
})
export class HashRouter extends WebComponent {

    @state() currentRoute = ""; // La route actuelle

    connectedCallback() {
        super.connectedCallback();
        this.updateRoute();
        window.addEventListener('hashchange', () => this.updateRoute());
    }

    // Fonction qui met à jour la route en fonction du hash de l'URL
    updateRoute() {
        this.currentRoute = window.location.hash || "#";
        this.updateVisibleElements();
    }

    // Fonction qui gère l'affichage et les callbacks des éléments enfants
    updateVisibleElements() {
        const children = Array.from(this.children) as HashRouterElement[];

        children.forEach((child) => {
            // Si l'élément est un `hash-router-element`
            if (child instanceof HashRouterElement) {
                // Activer l'élément si son path correspond à la route
                if (child.getAttribute("path") === this.currentRoute) {
                    child.activate();
                } else {
                    child.deactivate();
                }
            }
        });
    }
}

declare global {
  interface NamedTagMap {
      'hash-router': HashRouter;
      'hash-router-element': HashRouterElement;
  }
}
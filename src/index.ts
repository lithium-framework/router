import { WebComponent, html, css, customElement, state } from "@lithium-framework/core";

// Chaque élément correspond à une vue spécifique, identifiable via l'attribut `path`.
@customElement({
  name: 'hash-router-element',
  template: html`<slot></slot>` // Affiche son contenu via un slot
})
export class HashRouterElement extends WebComponent {
  // Attribut 'path' qui spécifie à quelle route cet élément est associé
  @state() path: string = "";
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
        // Initialiser la route courante
        this.updateRoute();
        // Écouter les changements de hash
        window.addEventListener('hashchange', () => this.updateRoute());
    }

    // Fonction qui met à jour la route en fonction du hash de l'URL
    updateRoute() {
        this.currentRoute = window.location.hash || "#";
        this.updateVisibleElements();
    }

    // Fonction qui gère l'affichage des éléments en fonction de la route
    updateVisibleElements() {
        const children = Array.from(this.children) as HTMLElement[];

        children.forEach((child: any) => {
            // Rejeter tout enfant qui n'est pas un `hash-router-element`
            if (!(child instanceof HashRouterElement)) {
                console.warn(`Element non valide dans hash-router: `, child);
                return;
            }

            // Afficher ou masquer les `hash-router-element` en fonction de la route
            child.style.display = child.path === this.currentRoute ? 'block' : 'none';
        });
    }
}

declare global {
  interface NamedTagMap {
      'hash-router': HashRouter;
      'hash-router-element': HashRouterElement;
  }
}
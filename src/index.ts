import { WebComponent, html, css, customElement, attr, state, render } from "@lithium-framework/core";

let routeParams: { [key: string]: string } = {};

// Fonction pour accéder aux paramètres de la route
export function useParams() {
  return routeParams;
}

@customElement({
  name: 'hash-router-element',
  template: html`<slot></slot>`,
  styles : [
    css`
      :host{
        display : block;
      }
    `
  ]
})
export class HashRouterElement extends WebComponent {
  @attr() path: string = "";
  @state() element: any = null;
  @state() params: { [key: string]: string } = {};  // Nouvel état pour stocker les paramètres

  setElement(template: any) {
    this.element = template;
  }

  // Méthode appelée avec les paramètres lorsque la route devient active
  activate(params: { [key: string]: string } = {}) {
    this.params = params;

    this.innerHTML = ""; // Vider le contenu précédent
    if (this.element) {
      render(this.element, this);
    }
    this.style.display = 'block';
  }

  deactivate() {
    this.style.display = 'none';
  }
}

const routerTemplate = html<HashRouter>`
  <slot></slot>
`;

const routerStyles = css`
  :host{
    display : block;
  }
`;

@customElement({
  name: 'hash-router',
  template: routerTemplate,
  styles: routerStyles
})
export class HashRouter extends WebComponent {
  @state() currentRoute = "";

  connectedCallback() {
    super.connectedCallback();
    this.updateRoute();
    window.addEventListener('hashchange', () => this.updateRoute());
  }

  updateRoute() {
    this.currentRoute = window.location.hash.replace('#' , '') || "/";

    this.updateVisibleElements();
  }

  // Fonction pour vérifier si le path correspond à la route actuelle et extraire les paramètres
  matchRoute(path: string, route: string): { matched: boolean; params: { [key: string]: string } } {

    console.log( { operationId : "matchRoute" , path , route } )

    const routeSegments = route.split('/');
    const pathSegments = path.replace('/#' , '').split('/');
    const params: { [key: string]: string } = {};

    // Vérifier si le nombre de segments est différent
    if (routeSegments.length !== pathSegments.length) {
        return { matched: false, params: {} };
    }

    // Parcourir chaque segment pour vérifier le match
    for (let i = 0; i < routeSegments.length; i++) {
        if (routeSegments[i].startsWith(":")) {
            // Si le segment de chemin commence par ':', on l'interprète comme un paramètre
            const paramName = routeSegments[i].slice(1); // Supprimer ':' pour obtenir le nom du paramètre
            params[paramName] = pathSegments[i];       // Associer la valeur au paramètre
        } else if (pathSegments[i] !== routeSegments[i]) {
            // Si les segments ne correspondent pas exactement et que ce n'est pas un paramètre, le match échoue
            console.log( "wrong segment" , { 1 : pathSegments[i] , 2 : routeSegments[i] })
            return { matched: false, params: {} };
        }
    }

    console.log({ matched: true, params })

    return { matched: true, params }; // Retourner le match et les paramètres extraits
  }

  // Mettre à jour l'affichage en fonction de la route et des paramètres
  updateVisibleElements() {
    const children = Array.from(this.children) as HashRouterElement[];
    let matchedRoute = false;

    children.forEach((child) => {
      if (child instanceof HashRouterElement) {
        const { matched, params } = this.matchRoute(this.currentRoute, child.path.replace('#' , '') );
        if (matched) {
          child.activate(params);
          routeParams = params;  // Met à jour les paramètres dans la variable globale
          matchedRoute = true;
        } else {
          child.deactivate();
        }
      }
    });

    if (!matchedRoute) {
      routeParams = {};  // Nettoie la variable globale si aucune route n'est trouvée
    }
  }
}

declare global {
  interface NamedTagMap {
    'hash-router': HashRouter;
    'hash-router-element': HashRouterElement;
  }
}
import {_ as $hgUW1$_} from "@swc/helpers/_/_ts_decorate";
import {render as $hgUW1$render, WebComponent as $hgUW1$WebComponent, attr as $hgUW1$attr, state as $hgUW1$state, customElement as $hgUW1$customElement, html as $hgUW1$html, css as $hgUW1$css} from "@lithium-framework/core";



let $149c1bd638913645$var$routeParams = {};
function $149c1bd638913645$export$99eaa27ddbbb95ef() {
    return $149c1bd638913645$var$routeParams;
}
class $149c1bd638913645$export$adb0b68179a3aea3 extends (0, $hgUW1$WebComponent) {
    setElement(template) {
        this.element = template;
    }
    // Méthode appelée avec les paramètres lorsque la route devient active
    activate(params = {}) {
        this.params = params;
        this.innerHTML = ""; // Vider le contenu précédent
        if (this.element) (0, $hgUW1$render)(this.element, this);
        this.style.display = "block";
    }
    deactivate() {
        this.style.display = "none";
    }
    constructor(...args){
        super(...args);
        this.path = "";
        this.element = null;
        this.params = {} // Nouvel état pour stocker les paramètres
        ;
    }
}
(0, $hgUW1$_)([
    (0, $hgUW1$attr)()
], $149c1bd638913645$export$adb0b68179a3aea3.prototype, "path", void 0);
(0, $hgUW1$_)([
    (0, $hgUW1$state)()
], $149c1bd638913645$export$adb0b68179a3aea3.prototype, "element", void 0);
(0, $hgUW1$_)([
    (0, $hgUW1$state)()
], $149c1bd638913645$export$adb0b68179a3aea3.prototype, "params", void 0);
$149c1bd638913645$export$adb0b68179a3aea3 = (0, $hgUW1$_)([
    (0, $hgUW1$customElement)({
        name: "hash-router-element",
        template: (0, $hgUW1$html)`<slot></slot>`,
        styles: [
            (0, $hgUW1$css)`
      :host{
        display : block;
      }
    `
        ]
    })
], $149c1bd638913645$export$adb0b68179a3aea3);
const $149c1bd638913645$var$routerTemplate = (0, $hgUW1$html)`
  <slot></slot>
`;
const $149c1bd638913645$var$routerStyles = (0, $hgUW1$css)`
  :host{
    display : block;
  }
`;
class $149c1bd638913645$export$7221d69dcfc8e36b extends (0, $hgUW1$WebComponent) {
    connectedCallback() {
        super.connectedCallback();
        this.updateRoute();
        window.addEventListener("hashchange", ()=>this.updateRoute());
    }
    updateRoute() {
        this.currentRoute = window.location.hash.replace("#", "") || "/";
        this.updateVisibleElements();
    }
    // Fonction pour vérifier si le path correspond à la route actuelle et extraire les paramètres
    matchRoute(path, route) {
        console.log({
            operationId: "matchRoute",
            path: path,
            route: route
        });
        const routeSegments = route.split("/");
        const pathSegments = path.replace("/#", "").split("/");
        const params = {};
        // Vérifier si le nombre de segments est différent
        if (routeSegments.length !== pathSegments.length) return {
            matched: false,
            params: {}
        };
        // Parcourir chaque segment pour vérifier le match
        for(let i = 0; i < routeSegments.length; i++){
            if (routeSegments[i].startsWith(":")) {
                // Si le segment de chemin commence par ':', on l'interprète comme un paramètre
                const paramName = routeSegments[i].slice(1); // Supprimer ':' pour obtenir le nom du paramètre
                params[paramName] = pathSegments[i]; // Associer la valeur au paramètre
            } else if (pathSegments[i] !== routeSegments[i]) {
                // Si les segments ne correspondent pas exactement et que ce n'est pas un paramètre, le match échoue
                console.log("wrong segment", {
                    1: pathSegments[i],
                    2: routeSegments[i]
                });
                return {
                    matched: false,
                    params: {}
                };
            }
        }
        console.log({
            matched: true,
            params: params
        });
        return {
            matched: true,
            params: params
        }; // Retourner le match et les paramètres extraits
    }
    // Mettre à jour l'affichage en fonction de la route et des paramètres
    updateVisibleElements() {
        const children = Array.from(this.children);
        let matchedRoute = false;
        children.forEach((child)=>{
            if (child instanceof $149c1bd638913645$export$adb0b68179a3aea3) {
                const { matched: matched, params: params } = this.matchRoute(this.currentRoute, child.path.replace("#", ""));
                if (matched) {
                    child.activate(params);
                    $149c1bd638913645$var$routeParams = params; // Met à jour les paramètres dans la variable globale
                    matchedRoute = true;
                } else child.deactivate();
            }
        });
        if (!matchedRoute) $149c1bd638913645$var$routeParams = {}; // Nettoie la variable globale si aucune route n'est trouvée
    }
    constructor(...args){
        super(...args);
        this.currentRoute = "";
    }
}
(0, $hgUW1$_)([
    (0, $hgUW1$state)()
], $149c1bd638913645$export$7221d69dcfc8e36b.prototype, "currentRoute", void 0);
$149c1bd638913645$export$7221d69dcfc8e36b = (0, $hgUW1$_)([
    (0, $hgUW1$customElement)({
        name: "hash-router",
        template: $149c1bd638913645$var$routerTemplate,
        styles: $149c1bd638913645$var$routerStyles
    })
], $149c1bd638913645$export$7221d69dcfc8e36b);


export {$149c1bd638913645$export$99eaa27ddbbb95ef as useParams, $149c1bd638913645$export$adb0b68179a3aea3 as HashRouterElement, $149c1bd638913645$export$7221d69dcfc8e36b as HashRouter};
//# sourceMappingURL=module.js.map

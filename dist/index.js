var $8zHUo$swchelperscjs_ts_decoratecjs = require("@swc/helpers/cjs/_ts_decorate.cjs");
var $8zHUo$lithiumframeworkcore = require("@lithium-framework/core");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useParams", () => $882b6d93070905b3$export$99eaa27ddbbb95ef);
$parcel$export(module.exports, "HashRouterElement", () => $882b6d93070905b3$export$adb0b68179a3aea3);
$parcel$export(module.exports, "HashRouter", () => $882b6d93070905b3$export$7221d69dcfc8e36b);


let $882b6d93070905b3$var$routeParams = {};
function $882b6d93070905b3$export$99eaa27ddbbb95ef() {
    return $882b6d93070905b3$var$routeParams;
}
class $882b6d93070905b3$export$adb0b68179a3aea3 extends (0, $8zHUo$lithiumframeworkcore.WebComponent) {
    setElement(template) {
        this.element = template;
    }
    // Méthode appelée avec les paramètres lorsque la route devient active
    activate(params = {}) {
        this.params = params;
        this.innerHTML = ""; // Vider le contenu précédent
        if (this.element) (0, $8zHUo$lithiumframeworkcore.render)(this.element, this);
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
(0, $8zHUo$swchelperscjs_ts_decoratecjs._)([
    (0, $8zHUo$lithiumframeworkcore.attr)()
], $882b6d93070905b3$export$adb0b68179a3aea3.prototype, "path", void 0);
(0, $8zHUo$swchelperscjs_ts_decoratecjs._)([
    (0, $8zHUo$lithiumframeworkcore.state)()
], $882b6d93070905b3$export$adb0b68179a3aea3.prototype, "element", void 0);
(0, $8zHUo$swchelperscjs_ts_decoratecjs._)([
    (0, $8zHUo$lithiumframeworkcore.state)()
], $882b6d93070905b3$export$adb0b68179a3aea3.prototype, "params", void 0);
$882b6d93070905b3$export$adb0b68179a3aea3 = (0, $8zHUo$swchelperscjs_ts_decoratecjs._)([
    (0, $8zHUo$lithiumframeworkcore.customElement)({
        name: "hash-router-element",
        template: (0, $8zHUo$lithiumframeworkcore.html)`<slot></slot>`,
        styles: [
            (0, $8zHUo$lithiumframeworkcore.css)`
      :host{
        display : block;
      }
    `
        ]
    })
], $882b6d93070905b3$export$adb0b68179a3aea3);
const $882b6d93070905b3$var$routerTemplate = (0, $8zHUo$lithiumframeworkcore.html)`
  <slot></slot>
`;
const $882b6d93070905b3$var$routerStyles = (0, $8zHUo$lithiumframeworkcore.css)`
  :host{
    display : block;
  }
`;
class $882b6d93070905b3$export$7221d69dcfc8e36b extends (0, $8zHUo$lithiumframeworkcore.WebComponent) {
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
            if (child instanceof $882b6d93070905b3$export$adb0b68179a3aea3) {
                const { matched: matched, params: params } = this.matchRoute(this.currentRoute, child.path.replace("#", ""));
                if (matched) {
                    child.activate(params);
                    $882b6d93070905b3$var$routeParams = params; // Met à jour les paramètres dans la variable globale
                    matchedRoute = true;
                } else child.deactivate();
            }
        });
        if (!matchedRoute) $882b6d93070905b3$var$routeParams = {}; // Nettoie la variable globale si aucune route n'est trouvée
    }
    constructor(...args){
        super(...args);
        this.currentRoute = "";
    }
}
(0, $8zHUo$swchelperscjs_ts_decoratecjs._)([
    (0, $8zHUo$lithiumframeworkcore.state)()
], $882b6d93070905b3$export$7221d69dcfc8e36b.prototype, "currentRoute", void 0);
$882b6d93070905b3$export$7221d69dcfc8e36b = (0, $8zHUo$swchelperscjs_ts_decoratecjs._)([
    (0, $8zHUo$lithiumframeworkcore.customElement)({
        name: "hash-router",
        template: $882b6d93070905b3$var$routerTemplate,
        styles: $882b6d93070905b3$var$routerStyles
    })
], $882b6d93070905b3$export$7221d69dcfc8e36b);


//# sourceMappingURL=index.js.map

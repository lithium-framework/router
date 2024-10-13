var $8zHUo$swchelperscjs_ts_decoratecjs = require("@swc/helpers/cjs/_ts_decorate.cjs");
var $8zHUo$lithiumframeworkcore = require("@lithium-framework/core");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "HashRouterElement", () => $882b6d93070905b3$export$adb0b68179a3aea3);
$parcel$export(module.exports, "HashRouter", () => $882b6d93070905b3$export$7221d69dcfc8e36b);


class $882b6d93070905b3$export$adb0b68179a3aea3 extends (0, $8zHUo$lithiumframeworkcore.WebComponent) {
    constructor(...args){
        super(...args);
        // Attribut 'path' qui spécifie à quelle route cet élément est associé
        this.path = "";
    }
}
(0, $8zHUo$swchelperscjs_ts_decoratecjs._)([
    (0, $8zHUo$lithiumframeworkcore.state)()
], $882b6d93070905b3$export$adb0b68179a3aea3.prototype, "path", void 0);
$882b6d93070905b3$export$adb0b68179a3aea3 = (0, $8zHUo$swchelperscjs_ts_decoratecjs._)([
    (0, $8zHUo$lithiumframeworkcore.customElement)({
        name: "hash-router-element",
        template: (0, $8zHUo$lithiumframeworkcore.html)`<slot></slot>` // Affiche son contenu via un slot
    })
], $882b6d93070905b3$export$adb0b68179a3aea3);
// Template pour `hash-router`
const $882b6d93070905b3$var$routerTemplate = (0, $8zHUo$lithiumframeworkcore.html)`
    <slot></slot>
`;
// Styles pour `hash-router` (optionnel)
const $882b6d93070905b3$var$routerStyles = (0, $8zHUo$lithiumframeworkcore.css)`
    :host {
        display: block;
    }
`;
class $882b6d93070905b3$export$7221d69dcfc8e36b extends (0, $8zHUo$lithiumframeworkcore.WebComponent) {
    connectedCallback() {
        super.connectedCallback();
        // Initialiser la route courante
        this.updateRoute();
        // Écouter les changements de hash
        window.addEventListener("hashchange", ()=>this.updateRoute());
    }
    // Fonction qui met à jour la route en fonction du hash de l'URL
    updateRoute() {
        this.currentRoute = window.location.hash || "#";
        this.updateVisibleElements();
    }
    // Fonction qui gère l'affichage des éléments en fonction de la route
    updateVisibleElements() {
        const children = Array.from(this.children);
        children.forEach((child)=>{
            // Rejeter tout enfant qui n'est pas un `hash-router-element`
            if (!(child instanceof $882b6d93070905b3$export$adb0b68179a3aea3)) {
                console.warn(`Element non valide dans hash-router: `, child);
                return;
            }
            // Afficher ou masquer les `hash-router-element` en fonction de la route
            child.style.display = child.path === this.currentRoute ? "block" : "none";
        });
    }
    constructor(...args){
        super(...args);
        this.currentRoute = "" // La route actuelle
        ;
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

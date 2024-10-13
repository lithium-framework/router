var $8zHUo$swchelperscjs_ts_decoratecjs = require("@swc/helpers/cjs/_ts_decorate.cjs");
var $8zHUo$lithiumframeworkcore = require("@lithium-framework/core");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "HashRouterElement", () => $882b6d93070905b3$export$adb0b68179a3aea3);
$parcel$export(module.exports, "HashRouter", () => $882b6d93070905b3$export$7221d69dcfc8e36b);


class $882b6d93070905b3$export$adb0b68179a3aea3 extends (0, $8zHUo$lithiumframeworkcore.WebComponent) {
    // Méthode pour définir un template à rendre lors de l'activation de la route
    setElement(template) {
        this.element = template;
    }
    // Méthode appelée lorsque la route devient active
    activate() {
        // Utiliser Lithium pour rendre le contenu dynamique
        this.innerHTML = ""; // Vider le contenu précédent
        if (this.element) (0, $8zHUo$lithiumframeworkcore.render)(this.element, this); // Rendre le template dans l'élément
        this.style.display = "block"; // Affiche l'élément
    }
    // Méthode appelée lorsque la route devient inactive
    deactivate() {
        this.style.display = "none"; // Masque l'élément
    }
    constructor(...args){
        super(...args);
        this.path = "";
        this.element = null // Stocke le modèle (template)
        ;
    }
}
(0, $8zHUo$swchelperscjs_ts_decoratecjs._)([
    (0, $8zHUo$lithiumframeworkcore.attr)()
], $882b6d93070905b3$export$adb0b68179a3aea3.prototype, "path", void 0);
(0, $8zHUo$swchelperscjs_ts_decoratecjs._)([
    (0, $8zHUo$lithiumframeworkcore.state)()
], $882b6d93070905b3$export$adb0b68179a3aea3.prototype, "element", void 0);
$882b6d93070905b3$export$adb0b68179a3aea3 = (0, $8zHUo$swchelperscjs_ts_decoratecjs._)([
    (0, $8zHUo$lithiumframeworkcore.customElement)({
        name: "hash-router-element",
        template: (0, $8zHUo$lithiumframeworkcore.html)`<slot></slot>` // Contenu via slot dynamique
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
        this.updateRoute();
        window.addEventListener("hashchange", ()=>this.updateRoute());
    }
    // Fonction qui met à jour la route en fonction du hash de l'URL
    updateRoute() {
        this.currentRoute = window.location.hash || "#";
        this.updateVisibleElements();
    }
    // Fonction qui gère l'affichage et les callbacks des éléments enfants
    updateVisibleElements() {
        const children = Array.from(this.children);
        children.forEach((child)=>{
            // Si l'élément est un `hash-router-element`
            if (child instanceof $882b6d93070905b3$export$adb0b68179a3aea3) {
                // Activer l'élément si son path correspond à la route
                if (child.getAttribute("path") === this.currentRoute) child.activate();
                else child.deactivate();
            }
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

import {_ as $hgUW1$_} from "@swc/helpers/_/_ts_decorate";
import {render as $hgUW1$render, WebComponent as $hgUW1$WebComponent, attr as $hgUW1$attr, state as $hgUW1$state, customElement as $hgUW1$customElement, html as $hgUW1$html, css as $hgUW1$css} from "@lithium-framework/core";



class $149c1bd638913645$export$adb0b68179a3aea3 extends (0, $hgUW1$WebComponent) {
    // Méthode pour définir un template à rendre lors de l'activation de la route
    setElement(template) {
        this.element = template;
    }
    // Méthode appelée lorsque la route devient active
    activate() {
        // Utiliser Lithium pour rendre le contenu dynamique
        this.innerHTML = ""; // Vider le contenu précédent
        if (this.element) (0, $hgUW1$render)(this.element, this); // Rendre le template dans l'élément
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
(0, $hgUW1$_)([
    (0, $hgUW1$attr)()
], $149c1bd638913645$export$adb0b68179a3aea3.prototype, "path", void 0);
(0, $hgUW1$_)([
    (0, $hgUW1$state)()
], $149c1bd638913645$export$adb0b68179a3aea3.prototype, "element", void 0);
$149c1bd638913645$export$adb0b68179a3aea3 = (0, $hgUW1$_)([
    (0, $hgUW1$customElement)({
        name: "hash-router-element",
        template: (0, $hgUW1$html)`<slot></slot>` // Contenu via slot dynamique
    })
], $149c1bd638913645$export$adb0b68179a3aea3);
// Template pour `hash-router`
const $149c1bd638913645$var$routerTemplate = (0, $hgUW1$html)`
    <slot></slot>
`;
// Styles pour `hash-router` (optionnel)
const $149c1bd638913645$var$routerStyles = (0, $hgUW1$css)`
    :host {
        display: block;
    }
`;
class $149c1bd638913645$export$7221d69dcfc8e36b extends (0, $hgUW1$WebComponent) {
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
            if (child instanceof $149c1bd638913645$export$adb0b68179a3aea3) {
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


export {$149c1bd638913645$export$adb0b68179a3aea3 as HashRouterElement, $149c1bd638913645$export$7221d69dcfc8e36b as HashRouter};
//# sourceMappingURL=module.js.map

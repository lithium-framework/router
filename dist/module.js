import {_ as $hgUW1$_} from "@swc/helpers/_/_ts_decorate";
import {WebComponent as $hgUW1$WebComponent, state as $hgUW1$state, customElement as $hgUW1$customElement, html as $hgUW1$html, css as $hgUW1$css} from "@lithium-framework/core";



class $149c1bd638913645$export$adb0b68179a3aea3 extends (0, $hgUW1$WebComponent) {
    constructor(...args){
        super(...args);
        // Attribut 'path' qui spécifie à quelle route cet élément est associé
        this.path = "";
    }
}
(0, $hgUW1$_)([
    (0, $hgUW1$state)()
], $149c1bd638913645$export$adb0b68179a3aea3.prototype, "path", void 0);
$149c1bd638913645$export$adb0b68179a3aea3 = (0, $hgUW1$_)([
    (0, $hgUW1$customElement)({
        name: "hash-router-element",
        template: (0, $hgUW1$html)`<slot></slot>` // Affiche son contenu via un slot
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
            if (!(child instanceof $149c1bd638913645$export$adb0b68179a3aea3)) {
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

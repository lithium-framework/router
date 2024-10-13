import { WebComponent } from "@lithium-framework/core";
export class HashRouterElement extends WebComponent {
    path: string;
}
export class HashRouter extends WebComponent {
    currentRoute: string;
    connectedCallback(): void;
    updateRoute(): void;
    updateVisibleElements(): void;
}
declare global {
    interface NamedTagMap {
        'hash-router': HashRouter;
        'hash-router-element': HashRouterElement;
    }
}

//# sourceMappingURL=types.d.ts.map

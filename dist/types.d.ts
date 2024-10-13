import { WebComponent } from "@lithium-framework/core";
export class HashRouterElement extends WebComponent {
    path: string;
    element: any;
    setElement(template: any): void;
    activate(): void;
    deactivate(): void;
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

import { WebComponent } from "@lithium-framework/core";
export function useParams(): {
    [key: string]: string;
};
export class HashRouterElement extends WebComponent {
    path: string;
    element: any;
    params: {
        [key: string]: string;
    };
    setElement(template: any): void;
    activate(params?: {
        [key: string]: string;
    }): void;
    deactivate(): void;
}
export class HashRouter extends WebComponent {
    currentRoute: string;
    connectedCallback(): void;
    updateRoute(): void;
    matchRoute(path: string, route: string): {
        matched: boolean;
        params: {
            [key: string]: string;
        };
    };
    updateVisibleElements(): void;
}
declare global {
    interface NamedTagMap {
        'hash-router': HashRouter;
        'hash-router-element': HashRouterElement;
    }
}

//# sourceMappingURL=types.d.ts.map

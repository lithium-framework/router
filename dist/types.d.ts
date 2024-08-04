import { WebComponent, ViewTemplate } from "@lithium-framework/core";
import RouteRecognizer from "route-recognizer";
export interface BaseRouteConfig {
    name?: string | undefined;
    render?: ViewTemplate<{
        [key: string]: string | undefined;
    }>;
    enter?: (params: {
        [key: string]: string | undefined;
    }) => Promise<boolean> | boolean;
}
export interface PathRouteConfig extends BaseRouteConfig {
    path: string;
}
export interface URLPatternRouteConfig extends BaseRouteConfig {
    pattern: URLPattern;
}
export type RouteConfig = PathRouteConfig & Partial<URLPatternRouteConfig>;
export class Routes extends RouteRecognizer {
    routeConfig: any;
    constructor(router: LithiumRouterElement, routeConfig: RouteConfig[]);
}
export class LithiumRouterElement extends WebComponent {
    type: 'pathname-router' | 'hash-router';
    header: ViewTemplate<LithiumRouterElement>;
    footer: ViewTemplate<LithiumRouterElement>;
    get routes(): Routes;
    get config(): RouteConfig[];
    set config(newConfig: RouteConfig[]);
    constructor(config: RouteConfig[]);
    outlet(): void;
    onHashChange(event: HashChangeEvent): void;
    normalizeHashLocation(hash: string): string;
    get pathname(): string;
    get hash(): string;
    clear(): void;
    connectedCallback(): void;
}
export { RouteRecognizer };
export declare namespace global {
    interface HTMLElementTagNameMap {
        'lithium-router': typeof LithiumRouterElement;
    }
}

//# sourceMappingURL=types.d.ts.map

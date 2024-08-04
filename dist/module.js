import {_ as $hgUW1$_} from "@swc/helpers/_/_ts_decorate";
import {render as $hgUW1$render, WebComponent as $hgUW1$WebComponent, customElement as $hgUW1$customElement, html as $hgUW1$html} from "@lithium-framework/core";
import $149c1bd638913645$import$5e9148cd569affa7$2e2bcd8739ae039 from "route-recognizer";
import {URLPattern as $hgUW1$URLPattern} from "urlpattern-polyfill";





if ("URLPattern" in globalThis == false) $149c1bd638913645$importAsync$aa75108a0d222c11.then(({ URLPattern: URLPattern })=>{
    Object.defineProperty(window, "URLPattern", {
        get () {
            return URLPattern;
        }
    });
});
class $149c1bd638913645$export$3565eb3d00ca5a74 extends (0, $149c1bd638913645$import$5e9148cd569affa7$2e2bcd8739ae039) {
    constructor(router, routeConfig){
        super();
        routeConfig.forEach((route)=>{
            this.add([
                {
                    path: route.path,
                    handler: (params)=>{
                        (0, $hgUW1$render)(route.render, router, params);
                    }
                }
            ], route.name ? {
                as: route.name
            } : null);
        });
    }
}
class $149c1bd638913645$export$3072e114a4c84017 extends (0, $hgUW1$WebComponent) {
    get routes() {
        return new Proxy(this._routes, {
            get () {
                return undefined;
            },
            set () {
                return false;
            }
        });
    }
    get config() {
        return this._config;
    }
    set config(newConfig) {
        this._config = newConfig;
        this._routes = new $149c1bd638913645$export$3565eb3d00ca5a74(this, newConfig || []);
    }
    constructor(config){
        super();
        /* The line `type : 'pathname-router' | 'hash-router' = 'hash-router';` is defining a property `type`
  in the `Router` class with a type of string literal union `'pathname-router' | 'hash-router'`.
  This means that the `type` property can only have one of two specific string values:
  `'pathname-router'` or `'hash-router'`. */ this.type = "hash-router";
        /* `private _config:RouteConfig[] = [];` is defining a private property `_config` in the `Router`
  class with an initial value of an empty array of `RouteConfig` objects. This property is used to
  store the route configuration provided to the `Router` instance. */ this._config = [];
        /* The line `private _routes = new Routes(this, this._config || []);` is initializing a private
  property `_routes` in the `Router` class with a new instance of the `Routes` class. The `Routes`
  class is responsible for constructing routes based on the provided `routeConfig` array. */ this._routes = new $149c1bd638913645$export$3565eb3d00ca5a74(this, this._config || []);
        this.config = config;
    }
    outlet() {
        this.clear();
        let url = this.type == "pathname-router" ? this.pathname : this.hash;
        let result = this._routes.recognize(url);
        if (result) Array.from({
            length: result.length
        }, (i, iterator)=>{
            let route = result[iterator];
            if (route) {
                let handler = route.handler;
                handler(route.params);
            }
        });
    }
    onHashChange(event) {
        this.outlet();
    }
    normalizeHashLocation(hash) {
        return hash.replace("#", "");
    }
    get pathname() {
        return window.location.pathname;
    }
    get hash() {
        return this.normalizeHashLocation(window.location.hash);
    }
    clear() {
        this.childNodes.forEach((element)=>{
            element.remove();
        });
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.type == "hash-router") window.addEventListener("hashchange", this.onHashChange.bind(this));
        this.outlet();
        if (!window.location.hash) window.location.hash = "/";
    }
}
$149c1bd638913645$export$3072e114a4c84017 = (0, $hgUW1$_)([
    (0, $hgUW1$customElement)({
        name: "lithium-router",
        template: (0, $hgUW1$html)`<slot></slot>`
    })
], $149c1bd638913645$export$3072e114a4c84017);


export {$149c1bd638913645$export$3565eb3d00ca5a74 as Routes, $149c1bd638913645$export$3072e114a4c84017 as LithiumRouterElement, $149c1bd638913645$import$5e9148cd569affa7$2e2bcd8739ae039 as RouteRecognizer};
//# sourceMappingURL=module.js.map

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_app__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_geranium_coherence_concrete_InMemoryContainer__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_geranium_routing_interfaces_IRouter__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_geranium_routing_concrete_BasicRouter__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_geranium_history_interfaces_IHistory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__node_modules_geranium_history_concrete_Html5HistoryAPI__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__node_modules_geranium_viewengine_interfaces_iviewengine__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_geranium_viewengine_concrete_BaseViewEngine__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_geranium_templating_interfaces_ITemplateEngine__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__node_modules_geranium_templating_concrete_mustache_ClientTemplateEngine__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node_modules_geranium_viewbinding_interfaces_IViewBinder__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__node_modules_geranium_viewbinding_concrete_BaseViewBinder__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__node_modules_geranium_exceptions_logging_interfaces_ILogger__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__node_modules_geranium_exceptions_logging_concrete_ConsoleLogger__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__node_modules_geranium_states_interfaces_IStateManager__ = __webpack_require__(21);
















__WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__["a" /* default */].container = new __WEBPACK_IMPORTED_MODULE_2__node_modules_geranium_coherence_concrete_InMemoryContainer__["a" /* InMemoryContainer */]();
__WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__["a" /* default */].container.register(__WEBPACK_IMPORTED_MODULE_3__node_modules_geranium_routing_interfaces_IRouter__["a" /* IRouter */], new __WEBPACK_IMPORTED_MODULE_4__node_modules_geranium_routing_concrete_BasicRouter__["a" /* BasicRouter */]());
__WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__["a" /* default */].container.register(__WEBPACK_IMPORTED_MODULE_5__node_modules_geranium_history_interfaces_IHistory__["a" /* IHistory */], new __WEBPACK_IMPORTED_MODULE_6__node_modules_geranium_history_concrete_Html5HistoryAPI__["a" /* Html5HistoryAPI */]());
__WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__["a" /* default */].container.register(__WEBPACK_IMPORTED_MODULE_7__node_modules_geranium_viewengine_interfaces_iviewengine__["a" /* IViewEngine */], new __WEBPACK_IMPORTED_MODULE_8__node_modules_geranium_viewengine_concrete_BaseViewEngine__["a" /* BaseViewEngine */]());
__WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__["a" /* default */].container.register(__WEBPACK_IMPORTED_MODULE_9__node_modules_geranium_templating_interfaces_ITemplateEngine__["a" /* ITemplateEngine */], new __WEBPACK_IMPORTED_MODULE_10__node_modules_geranium_templating_concrete_mustache_ClientTemplateEngine__["a" /* ClientTemplateEngine */]());
__WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__["a" /* default */].container.register(__WEBPACK_IMPORTED_MODULE_11__node_modules_geranium_viewbinding_interfaces_IViewBinder__["a" /* IViewBinder */], new __WEBPACK_IMPORTED_MODULE_12__node_modules_geranium_viewbinding_concrete_BaseViewBinder__["a" /* BaseViewBinder */]());
__WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__["a" /* default */].container.register(__WEBPACK_IMPORTED_MODULE_13__node_modules_geranium_exceptions_logging_interfaces_ILogger__["a" /* ILogger */], new __WEBPACK_IMPORTED_MODULE_14__node_modules_geranium_exceptions_logging_concrete_ConsoleLogger__["a" /* ConsoleLogger */]());
__WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__["a" /* default */].container.register(__WEBPACK_IMPORTED_MODULE_15__node_modules_geranium_states_interfaces_IStateManager__["a" /* IStateManager */], new __WEBPACK_IMPORTED_MODULE_2__node_modules_geranium_coherence_concrete_InMemoryContainer__["a" /* InMemoryContainer */]());
new __WEBPACK_IMPORTED_MODULE_0__components_app__["a" /* App */]();
//# sourceMappingURL=index.js.map

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_abstract_ViewModel__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_routing_concrete_decorators__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let App = class App extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_abstract_ViewModel__["a" /* ViewModel */] {
    view() {
        return "<h1>Hello world!</h1>";
    }
};
App = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_routing_concrete_decorators__["c" /* routeroot */]
], App);

//# sourceMappingURL=app.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Exception__ = __webpack_require__(6);

class InterfaceUsingException extends __WEBPACK_IMPORTED_MODULE_0__Exception__["a" /* Exception */] {
    constructor(msg) {
        msg += "InterfaceUsingException: you can not use interface-like class!";
        super(msg);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InterfaceUsingException;

//# sourceMappingURL=InterfaceUsingException.js.map

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export settings */
/* harmony export (immutable) */ __webpack_exports__["d"] = routes;
/* unused harmony export urlFromCtor */
/* harmony export (immutable) */ __webpack_exports__["a"] = routed;
/* harmony export (immutable) */ __webpack_exports__["b"] = routeignore;
/* harmony export (immutable) */ __webpack_exports__["c"] = routeroot;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contracts_Route__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contracts_RouteContext__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__declare_array__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__ = __webpack_require__(4);




var _ignoredRoutes = [];
var _routes = [];
var settings = { parameterFullUrl: false };
function routes() {
    return _routes.slice();
}
function urlFromCtor(ctor, params) {
    var instance = __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__["a" /* default */].container.instantiate(ctor);
    let chain = chainOfCtorNames(instance, null);
    var routeUrl = __WEBPACK_IMPORTED_MODULE_2__declare_array__["a" /* ArrayHelper */].removeSame(chain)
        .reverse();
    if (params && settings.parameterFullUrl)
        routeUrl.push.apply(routeUrl, params);
    return '/' + routeUrl.join("/").toLowerCase();
}
function routed(param, absorb) {
    //clean route overload
    if (typeof param !== 'string'
        //context overload
        && !(param instanceof __WEBPACK_IMPORTED_MODULE_1__contracts_RouteContext__["a" /* RouteContext */])
        //parent overload
        && !absorb)
        //clean decorate
        _routed(param, urlFromCtor(param));
    else
        return (constructor) => {
            if (typeof param === 'string')
                _routed(constructor, param);
            if (absorb)
                _routed(constructor, urlFromCtor(param) + urlFromCtor(constructor));
            if (param instanceof __WEBPACK_IMPORTED_MODULE_1__contracts_RouteContext__["a" /* RouteContext */]) {
                var url = urlFromCtor(constructor);
                if (param.parent)
                    url = urlFromCtor(param.parent) + url;
                if (param.prepath)
                    url = param.prepath + url;
                _routed(constructor, url, param.executable);
            }
        };
}
function routeignore(constructor) {
    //var instance = GeraniumApp.container.instantiate(constructor);
    _ignoredRoutes.push(constructor.name);
}
function routeroot(constructor) {
    _routed(constructor, './');
}
function _routed(ctor, url, executable) {
    var route = new __WEBPACK_IMPORTED_MODULE_0__contracts_Route__["a" /* Route */]();
    route.url = url,
        route.ctor = ctor;
    route.executable = executable;
    ctor.prototype["@routed"] = route;
    _routes.push(route);
}
function chainOfCtorNames(obj, names) {
    if (names == null)
        names = [];
    if (obj == null)
        return null;
    var route = obj.constructor.name;
    if (route == "Object")
        return null;
    if (_ignoredRoutes.indexOf(route) == -1)
        names.push(route);
    obj = Object.getPrototypeOf(obj);
    names.concat(chainOfCtorNames(obj, names));
    return names;
}
//# sourceMappingURL=decorators.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IApp__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coherence_concrete_InMemoryContainer__ = __webpack_require__(8);


class App extends __WEBPACK_IMPORTED_MODULE_0__interfaces_IApp__["a" /* IApp */] {
    get container() {
        let global = window[App.containerNameConst];
        if (!global) {
            global = window[App.containerNameConst] = new __WEBPACK_IMPORTED_MODULE_1__coherence_concrete_InMemoryContainer__["a" /* InMemoryContainer */]();
        }
        return global;
    }
    set container(container) {
        window[App.containerNameConst] = container;
    }
}
App.containerNameConst = "`geranium-container";
function getApp() {
    if (!window["`GeraniumApp"]) {
        window["`GeraniumApp"] = new App();
    }
    return window["`GeraniumApp"];
}
var GeraniumApp = getApp();
/* harmony default export */ __webpack_exports__["a"] = (GeraniumApp);
//# sourceMappingURL=App.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ArrayHelper {
    static remove(array, item) {
        return array.filter(e => e !== item);
    }
    static removeSame(array) {
        return array.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        });
    }
    static groupBy(array, key) {
        var groups = [];
        var targetKeys = array.map(x => x[key]);
        var unique = targetKeys.filter((value, index, array) => array.indexOf(value) === index);
        unique.forEach(z => {
            groups.push(array.filter(x => x[key] == z));
        });
        return groups;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ArrayHelper;

//# sourceMappingURL=array.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Exception extends Error {
    constructor(msg) {
        super(msg);
        this.msg = msg;
        Object.setPrototypeOf(this, Exception.prototype);
    }
    get pure() {
        return this.msg;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Exception;

//# sourceMappingURL=Exception.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(2);

class IRequest {
    send(data) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IRequest.send"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IRequest;

//# sourceMappingURL=IRequest.js.map

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declare_array__ = __webpack_require__(5);

class InMemoryContainer {
    constructor() {
        this.container = [];
    }
    register(type, value) {
        this.container.push({
            type: type.name,
            value: value
        });
    }
    resolve(type) {
        const finded = this.execute(type);
        if (finded.length == 0) {
            throw new Error("component is not registered: " + type);
        }
        return this.bindContainer(finded[0]);
    }
    resolveAll(type) {
        return this.execute(type).map(component => this.bindContainer(component));
    }
    release(type) {
        const pattern = (token) => { return token.type == type.name; };
        const component = this.container.find(pattern);
        if (component) {
            this.container = __WEBPACK_IMPORTED_MODULE_0__declare_array__["a" /* ArrayHelper */].remove(this.container, component);
        }
    }
    all() {
        const tokenExtract = function (token) {
            return token.value;
        };
        return this.container.map(tokenExtract);
    }
    instantiate(type, params) {
        var instance = new type(...(params || []));
        return this.bindContainer(instance);
    }
    bindContainer(component) {
        component["`container"] = this;
        return component;
    }
    execute(type) {
        const pattern = function (token) {
            return token.type === type.name;
        };
        const tokenExtract = function (token) {
            return token.value;
        };
        const map = 'map';
        return this.container.filter(pattern).map(tokenExtract);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InMemoryContainer;

//# sourceMappingURL=InMemoryContainer.js.map

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_abstract_view__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__ = __webpack_require__(4);



class IViewEngine {
    execute(context) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IViewEngine.execute"); }
    /**
     * return complete rendered view
     * @param selector
     */
    static ViewEngineView(iviewed, selector) {
        var view;
        var viewctr = iviewed.view();
        if (typeof viewctr === "string") {
            let vmctr = EmptyView;
            view = __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__["a" /* default */].container.instantiate(vmctr, [selector, viewctr]);
        }
        else {
            view = __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__["a" /* default */].container.instantiate(viewctr, [selector]);
        }
        view.data = iviewed;
        return view.render();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IViewEngine;

class EmptyView extends __WEBPACK_IMPORTED_MODULE_1__view_abstract_view__["a" /* View */] {
    declare() { return undefined; }
}
//# sourceMappingURL=iviewengine.js.map

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewState__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_iviewengine__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_decorators_history__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_contracts_HistoryItem__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_interfaces_IHistory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__runtime_concrete_App__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







let ViewModel = class ViewModel extends __WEBPACK_IMPORTED_MODULE_1__ViewState__["a" /* ViewState */] {
    get markup() { return this.publishedViewDom; }
    show(selector) {
        const _super = name => super[name];
        return __awaiter(this, void 0, void 0, function* () {
            this.setDocumentTitle();
            if (Object(__WEBPACK_IMPORTED_MODULE_3__history_decorators_history__["a" /* is */])(this.constructor) && !this['#routed']) {
                var _routed = this["@routed"];
                _routed.selector = selector;
                var _history = new __WEBPACK_IMPORTED_MODULE_4__history_contracts_HistoryItem__["a" /* HistoryItem */]();
                _history.url = _routed.url;
                _history.title = document.title;
                _history.state = {
                    ctor: this.constructor.name,
                    selector: selector
                };
                __WEBPACK_IMPORTED_MODULE_6__runtime_concrete_App__["a" /* default */].container.resolve(__WEBPACK_IMPORTED_MODULE_5__history_interfaces_IHistory__["a" /* IHistory */]).extend(_history);
            }
            delete this['#routed'];
            if (this.statefull) {
                _super("show").call(this, selector);
            }
            else
                this.publishedViewDom = yield __WEBPACK_IMPORTED_MODULE_6__runtime_concrete_App__["a" /* default */].container.resolve(__WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_iviewengine__["a" /* IViewEngine */]).execute({
                    iViewed: this,
                    selector: selector
                });
        });
    }
    setDocumentTitle() {
        var title = this.documentTitle();
        if (title != null)
            document.title = title;
    }
    documentTitle() { return null; }
    toString(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.show(selector);
        });
    }
};
ViewModel = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__["b" /* routeignore */]
], ViewModel);

//# sourceMappingURL=ViewModel.js.map

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Route {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Route;

//# sourceMappingURL=Route.js.map

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class RouteContext {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RouteContext;

//# sourceMappingURL=RouteContext.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_State__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_concrete_decorators__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_iviewengine__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let ViewState = class ViewState extends __WEBPACK_IMPORTED_MODULE_0__states_State__["a" /* State */] {
    constructor() {
        super(false);
        if (this.statefull)
            this.fillState();
    }
    get statefull() { return false; }
    show(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this["#ViewState"]) {
                var myState = yield __WEBPACK_IMPORTED_MODULE_0__states_State__["a" /* State */].get(this.constructor);
                myState["#ViewState"] = true;
                myState["show"](selector);
            }
            else {
                delete this["#ViewState"];
                __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__["a" /* default */].container.resolve(__WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_iviewengine__["a" /* IViewEngine */]).execute({
                    iViewed: this,
                    selector: selector
                });
            }
        });
    }
};
ViewState = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__routing_concrete_decorators__["a" /* routed */])("/hi/wtf")
], ViewState);

//# sourceMappingURL=ViewState.js.map

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Model__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_IStateManager__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_interfaces_IRequest__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runtime_concrete_App__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





let State = class State extends __WEBPACK_IMPORTED_MODULE_1__models_Model__["a" /* Model */] {
    constructor(statefull = true) {
        super();
        if (statefull)
            this.fillState();
    }
    fillState() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.constructor.name != "ViewState") {
                const stateManager = __WEBPACK_IMPORTED_MODULE_4__runtime_concrete_App__["a" /* default */].container.resolve(__WEBPACK_IMPORTED_MODULE_2__interfaces_IStateManager__["a" /* IStateManager */]);
                const state = stateManager.resolve(this.constructor);
                if (!state) {
                    stateManager.register(this.constructor, this);
                }
            }
        });
    }
    static get(type) {
        return __awaiter(this, void 0, void 0, function* () {
            var state = __WEBPACK_IMPORTED_MODULE_4__runtime_concrete_App__["a" /* default */].container.resolve(__WEBPACK_IMPORTED_MODULE_2__interfaces_IStateManager__["a" /* IStateManager */]).resolve(type);
            if (!state)
                state = new type();
            yield state.sync();
            return state;
        });
    }
    remove() {
        const container = this["`container"];
        const stateManager = container.resolve(__WEBPACK_IMPORTED_MODULE_2__interfaces_IStateManager__["a" /* IStateManager */]);
        stateManager.release(this.constructor);
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.synchronizer) {
                let request = this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_3__backend_interfaces_IRequest__["a" /* IRequest */]);
                let data = yield request.send(this.synchronizer);
                this.obtain(data);
            }
        });
    }
};
State = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__["b" /* routeignore */]
], State);

//# sourceMappingURL=State.js.map

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_cloning_decorators_ICloneable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__behaviors_events_abstract_event__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_interfaces_IRequest__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let Model = class Model extends __WEBPACK_IMPORTED_MODULE_2__behaviors_events_abstract_event__["a" /* Event */] {
    constructor() {
        super(...arguments);
        this.validators = [];
    }
    obtain(data) {
        if (typeof data == 'string') {
            data = JSON.parse(data);
        }
        Object.assign(this, data);
        this.raise(this);
    }
    /**
     * synchronize model with server state
     */
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.synchronizer) {
                let request = this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_3__backend_interfaces_IRequest__["a" /* IRequest */]);
                let data = yield request.send(this.synchronizer);
                this.obtain(data);
            }
        });
    }
    /**
     * object used as synchronizator
     */
    get synchronizer() { return undefined; }
};
Model = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__["b" /* routeignore */],
    __WEBPACK_IMPORTED_MODULE_1__reflection_cloning_decorators_ICloneable__["a" /* ICloneable */]
], Model);

//# sourceMappingURL=Model.js.map

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ICloneable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ICloner__ = __webpack_require__(19);


function ICloneable(constructor) {
    constructor.prototype.clone = function () {
        return __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__["a" /* default */].container.resolve(__WEBPACK_IMPORTED_MODULE_1__interfaces_ICloner__["a" /* ICloner */]).clone(this);
    };
}
//# sourceMappingURL=ICloneable.js.map

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(2);

class IApp {
    get container() {
        throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IApp.container.get");
    }
    set container(container) {
        throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IApp.container.set");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IApp;

//# sourceMappingURL=IApp.js.map

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(2);

class ICloner {
    clone(sample) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ICloner.clone"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ICloner;

//# sourceMappingURL=ICloner.js.map

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declare_array__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let Event = class Event {
    constructor() {
        this._requestEvents = new Array();
    }
    raise(args) {
        this._requestEvents.forEach(subscriber => {
            subscriber(args);
        });
    }
    set bind(callback) {
        this._requestEvents.push(callback);
    }
    set unbind(callback) {
        this._requestEvents = __WEBPACK_IMPORTED_MODULE_1__declare_array__["a" /* ArrayHelper */].remove(this._requestEvents, callback);
    }
};
Event = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__["b" /* routeignore */]
], Event);

//# sourceMappingURL=event.js.map

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coherence_concrete_InMemoryContainer__ = __webpack_require__(8);

class IStateManager extends __WEBPACK_IMPORTED_MODULE_0__coherence_concrete_InMemoryContainer__["a" /* InMemoryContainer */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IStateManager;

//# sourceMappingURL=IStateManager.js.map

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templating_contracts_template__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exceptions_Exception__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templating_interfaces_ITemplateEngine__ = __webpack_require__(24);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class View extends __WEBPACK_IMPORTED_MODULE_0__templating_contracts_template__["a" /* Template */] {
    constructor(selector) {
        super();
        this.protectRender(arguments[1]);
        this._selector = selector;
    }
    get selector() {
        return this._selector;
    }
    protectRender(html) {
        this.html = this.declare();
        if (!this.html)
            this.html = html;
        if (!this.html)
            throw new __WEBPACK_IMPORTED_MODULE_1__exceptions_Exception__["a" /* Exception */]('view template is empty!');
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.data == null) {
                throw new __WEBPACK_IMPORTED_MODULE_1__exceptions_Exception__["a" /* Exception */]('view data is not assigned!');
            }
            if (this._rendered) {
                throw new __WEBPACK_IMPORTED_MODULE_1__exceptions_Exception__["a" /* Exception */]('view already rendered!');
            }
            var engine = this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_2__templating_interfaces_ITemplateEngine__["a" /* ITemplateEngine */]);
            this.html = yield engine.parse(this);
            this._rendered = true;
            return new Promise(resolve => resolve(this));
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View;

//# sourceMappingURL=view.js.map

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Template {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Template;

//# sourceMappingURL=template.js.map

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(2);

class ITemplateEngine {
    parse(template) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ITemplateEngine.parse"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ITemplateEngine;

//# sourceMappingURL=ITemplateEngine.js.map

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = is;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_interfaces_IRouter__ = __webpack_require__(26);


function is(constructor) {
    var router = __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__["a" /* default */].container.resolve(__WEBPACK_IMPORTED_MODULE_1__routing_interfaces_IRouter__["a" /* IRouter */]);
    return router.routes.filter(x => {
        var instance = new x.ctor();
        return instance.constructor.name == constructor.name;
    }).length > 0;
}
//# sourceMappingURL=history.js.map

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(2);

class IRouter {
    get routes() { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IRouter.routes"); }
    routeByUrl(url) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IRouter.routeByUrl"); }
    route(current) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IRouter.route"); }
    routearea() { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IRouter.routearea"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IRouter;

//# sourceMappingURL=IRouter.js.map

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class HistoryItem {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HistoryItem;

//# sourceMappingURL=HistoryItem.js.map

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(2);

class IHistory {
    extend(hitem) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IHistory.extend"); }
    restore(state) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IHistory.restore"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IHistory;

//# sourceMappingURL=IHistory.js.map

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_Router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_contracts_HistoryItem__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_interfaces_IHistory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__ = __webpack_require__(4);




class BasicRouter extends __WEBPACK_IMPORTED_MODULE_0__abstract_Router__["a" /* Router */] {
    Current() {
        return this._current;
    }
    routearea() {
        return '.app';
    }
    route(current) {
        if (current == null)
            return;
        let selector = current.restore ? current.selector : this.routearea();
        var routed = __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__["a" /* default */].container.instantiate(current.ctor, current.params);
        var executing = current.executable ? current.executable : 'toString';
        if (!current.restore) {
            var _history = new __WEBPACK_IMPORTED_MODULE_1__history_contracts_HistoryItem__["a" /* HistoryItem */]();
            _history.url = current.url;
            _history.title = document.title;
            _history.state = {
                ctor: current.ctor.name,
                selector: selector
            };
            this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_2__history_interfaces_IHistory__["a" /* IHistory */]).extend(_history);
        }
        routed["#routed"] = {
            params: current.params,
            restore: current.restore
        };
        routed[executing](selector);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BasicRouter;

//# sourceMappingURL=BasicRouter.js.map

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IRouter__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contracts_RouteMatch__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__concrete_decorators__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__declare_array__ = __webpack_require__(5);





class Router extends __WEBPACK_IMPORTED_MODULE_0__interfaces_IRouter__["a" /* IRouter */] {
    get routes() {
        return Object(__WEBPACK_IMPORTED_MODULE_3__concrete_decorators__["d" /* routes */])();
    }
    routeByUrl(url) {
        return this.match(url);
    }
    match(url, params) {
        if (this.routes.length == 0)
            return null;
        var ctorCollection = this.routes.filter(x => x.url == url);
        if (url == '/' && ctorCollection.length == 0) {
            var shortestRoute = this.routes.reduce((a, b) => a.url.length < b.url.length ? a : b);
            return shortestRoute;
        }
        if (ctorCollection.length == 0) {
            var segments = __WEBPACK_IMPORTED_MODULE_4__declare_array__["a" /* ArrayHelper */].remove(url.split('/'), (''));
            var cutSegments = segments.filter((v, i) => {
                return i != segments.length - 1;
            });
            var route = this.match('/' + cutSegments.join('/'));
            if (!route.params)
                route.params = [];
            route.params.push(segments[segments.length - 1]);
            return route;
        }
        var match = new __WEBPACK_IMPORTED_MODULE_1__contracts_RouteMatch__["a" /* RouteMatch */]();
        Object.assign(match, ctorCollection[0]);
        match.params = params;
        return match;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Router;

if (window) {
    window.addEventListener('load', () => {
        var router = __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__["a" /* default */].container.resolve(__WEBPACK_IMPORTED_MODULE_0__interfaces_IRouter__["a" /* IRouter */]);
        var route = router.routeByUrl(window.location.pathname);
        router.route(route);
    });
}
//# sourceMappingURL=Router.js.map

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Route__ = __webpack_require__(11);

class RouteMatch extends __WEBPACK_IMPORTED_MODULE_0__Route__["a" /* Route */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RouteMatch;

//# sourceMappingURL=RouteMatch.js.map

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IHistory__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_interfaces_IRouter__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__ = __webpack_require__(4);



class Html5HistoryAPI extends __WEBPACK_IMPORTED_MODULE_0__interfaces_IHistory__["a" /* IHistory */] {
    extend(hitem) {
        if (window.history.state == null) {
            window.history.replaceState(hitem.state, hitem.title, hitem.url);
        }
        else {
            window.history.pushState(hitem.state, hitem.title, hitem.url);
        }
    }
    restore(state) {
        var router = this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_1__routing_interfaces_IRouter__["a" /* IRouter */]);
        var route = router.routes.filter(x => {
            var instance = new x.ctor();
            return instance.constructor.name == state.ctor;
        })[0];
        route.selector = state.selector;
        route.restore = true;
        router.route(route);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Html5HistoryAPI;

if (window) {
    window.addEventListener('popstate', (eventState) => {
        __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__["a" /* default */].container.resolve(__WEBPACK_IMPORTED_MODULE_0__interfaces_IHistory__["a" /* IHistory */]).restore(eventState.state);
    });
}
//# sourceMappingURL=Html5HistoryAPI.js.map

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(2);

class IBinding {
    bind(objectDOM, model) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IBinding.bind"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IBinding;

//# sourceMappingURL=ibinding.js.map

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_ViewEngine__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exceptions_logging_interfaces_ILogger__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewDOM_concrete_BaseViewDOM__ = __webpack_require__(40);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class BaseViewEngine extends __WEBPACK_IMPORTED_MODULE_0__abstract_ViewEngine__["a" /* ViewEngine */] {
    publish(viewDOM) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const selector = viewDOM.view.selector;
                    const view = viewDOM.getViewDOM();
                    const domLoaded = document.readyState === 'complete';
                    let element = document.querySelector(selector);
                    debugger;
                    if (!element && !domLoaded) {
                        yield this.domLoaded(selector, view);
                    }
                    else if (domLoaded && !element) {
                        throw new Error("Selector does not exists: " + selector);
                    }
                    else {
                        element.parentElement.replaceChild(view, element);
                    }
                    resolve(viewDOM);
                }
                catch (ex) {
                    this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_1__exceptions_logging_interfaces_ILogger__["a" /* ILogger */]).log(ex);
                    reject(null);
                }
            }));
        });
    }
    viewDOM(view) {
        return new __WEBPACK_IMPORTED_MODULE_2__viewDOM_concrete_BaseViewDOM__["a" /* BaseViewDOM */](view);
    }
    domLoaded(selector, view) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                document.addEventListener("DOMContentLoaded", () => {
                    let element = document.querySelector(selector);
                    element.parentElement.replaceChild(view, element);
                    resolve(true);
                });
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseViewEngine;

//# sourceMappingURL=BaseViewEngine.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_iviewengine__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contracts_executecontext__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewbinding_contracts_BindContext__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewbinding_interfaces_IViewBinder__ = __webpack_require__(38);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class ViewEngine {
    execute(context) {
        return __awaiter(this, void 0, void 0, function* () {
            var view = yield __WEBPACK_IMPORTED_MODULE_0__interfaces_iviewengine__["a" /* IViewEngine */].ViewEngineView(context.iViewed, context.selector);
            var viewDOM = this.viewDOM(view);
            var execCtx = new __WEBPACK_IMPORTED_MODULE_1__contracts_executecontext__["a" /* ExecuteContext */](context);
            var bindingContext = new __WEBPACK_IMPORTED_MODULE_2__viewbinding_contracts_BindContext__["a" /* BindContext */](viewDOM, execCtx.bindingFlags);
            var viewbinder = this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_3__viewbinding_interfaces_IViewBinder__["a" /* IViewBinder */]);
            yield viewbinder.bind(bindingContext);
            return this.publish(viewDOM);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewEngine;

//# sourceMappingURL=ViewEngine.js.map

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__binding_interfaces_ibinding__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__runtime_concrete_App__ = __webpack_require__(4);


class ExecuteContext {
    constructor(viewCtx, bindingFlags) {
        this.view = viewCtx.iViewed;
        this.selector = viewCtx.selector;
        if (!bindingFlags) {
            bindingFlags = __WEBPACK_IMPORTED_MODULE_1__runtime_concrete_App__["a" /* default */].container.resolveAll(__WEBPACK_IMPORTED_MODULE_0__binding_interfaces_ibinding__["a" /* IBinding */]);
        }
        this.bindingFlags = bindingFlags;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ExecuteContext;

//# sourceMappingURL=executecontext.js.map

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__binding_interfaces_ibinding__ = __webpack_require__(33);


class BindContext {
    constructor(viewDOM, bindingFlags) {
        this.viewDOM = viewDOM;
        if (!bindingFlags) {
            bindingFlags = __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__["a" /* default */].container.resolveAll(__WEBPACK_IMPORTED_MODULE_1__binding_interfaces_ibinding__["a" /* IBinding */]);
        }
        this.bindingFlags = bindingFlags;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BindContext;

//# sourceMappingURL=BindContext.js.map

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(2);

class IViewBinder {
    bind(context) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IViewBinder.bind"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IViewBinder;

//# sourceMappingURL=IViewBinder.js.map

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coherence_InterfaceUsingException__ = __webpack_require__(2);

class ILogger {
    log(err) { throw new __WEBPACK_IMPORTED_MODULE_0__coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ILogger.log"); }
    get() { throw new __WEBPACK_IMPORTED_MODULE_0__coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ILogger.get"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ILogger;

//# sourceMappingURL=ILogger.js.map

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_viewdom__ = __webpack_require__(41);

class BaseViewDOM extends __WEBPACK_IMPORTED_MODULE_0__abstract_viewdom__["a" /* ViewDOM */] {
    getViewDOM() {
        if (this._html == null) {
            let div = document.createElement("div");
            div.innerHTML = this.view.html;
            this._html = div;
        }
        return this._html;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseViewDOM;

//# sourceMappingURL=BaseViewDOM.js.map

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ViewDOM {
    constructor(view) {
        this._view = view;
    }
    get view() {
        return this._view;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewDOM;

//# sourceMappingURL=viewdom.js.map

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITemplateEngine__ = __webpack_require__(24);

class ClientTemplateEngine extends __WEBPACK_IMPORTED_MODULE_0__interfaces_ITemplateEngine__["a" /* ITemplateEngine */] {
    parse(template) {
        return new Promise((resolve) => resolve(template.html));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClientTemplateEngine;

//# sourceMappingURL=ClientTemplateEngine.js.map

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_ViewBinder__ = __webpack_require__(44);

class BaseViewBinder extends __WEBPACK_IMPORTED_MODULE_0__abstract_ViewBinder__["a" /* ViewBinder */] {
    binding(ViewDOM, binding) {
        return binding.bind(ViewDOM.getViewDOM(), ViewDOM.view.data);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseViewBinder;

//# sourceMappingURL=BaseViewBinder.js.map

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewBinder__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_Property__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validating_reporter_interfaces_ivalidatatingreporter__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__declare_array__ = __webpack_require__(5);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





class ViewBinder extends __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewBinder__["a" /* IViewBinder */] {
    bind(context) {
        return __awaiter(this, void 0, void 0, function* () {
            this.viewDOM = context.viewDOM;
            yield this.exec(this.viewDOM, context.bindingFlags);
            this.valid(this.viewDOM);
            return this.viewDOM;
        });
    }
    valid(ViewDOM) {
        var vm = ViewDOM.view.data;
        if (vm.validators) {
            var validatedProperties = __WEBPACK_IMPORTED_MODULE_4__declare_array__["a" /* ArrayHelper */].groupBy(vm.validators, 'validatedPropertyName');
            validatedProperties.forEach(validators => {
                var validProp = validators[0].validatedPropertyName;
                __WEBPACK_IMPORTED_MODULE_1__reflection_Property__["a" /* Property */].redefine(ViewDOM.view.data, validProp, (val) => { return val; }, function (val) {
                    let validationFault = false;
                    this.validators.filter(x => x.validatedPropertyName === validProp).forEach(validator => {
                        var validation = validator.validate(val, this.clone());
                        if (!validation.success) {
                            validationFault = true;
                            __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__["a" /* default */].container.resolve(__WEBPACK_IMPORTED_MODULE_2__validating_reporter_interfaces_ivalidatatingreporter__["a" /* IValidatingReporter */]).report(ViewDOM, validation);
                        }
                    });
                    return validationFault ? undefined : val;
                });
            });
        }
    }
    exec(ViewDOM, bindings) {
        return __awaiter(this, void 0, void 0, function* () {
            for (var i = 0; i < bindings.length; i++) {
                yield this.binding(ViewDOM, bindings[i]);
            }
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewBinder;

//# sourceMappingURL=ViewBinder.js.map

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__behaviors_events_abstract_event__ = __webpack_require__(20);

class Property {
    /**
     * Redefines property with new public accessors, safe
     *
     * Also creates property Event for detection end of chain:
     *
     * setter obj[#event:set[name]]
     *
     * getter obj[#event:get[name]]
     * @param target
     * @param name of property
     * @param get new public setter
     * @param set new public getter
     */
    static redefine(target, name, get, set) {
        var protoPropertyDescriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(target), name);
        var ownPropertyDescriptor = Object.getOwnPropertyDescriptor(target, name);
        var setterEvent = new PropertyEvent();
        var getterEvent = new PropertyEvent();
        //accessors doesn't exists
        if (ownPropertyDescriptor === undefined && protoPropertyDescriptor === undefined)
            return;
        //prototype accessor
        if (ownPropertyDescriptor == undefined && protoPropertyDescriptor != undefined) {
            Object.defineProperty(target, name, {
                get() {
                    var val = protoPropertyDescriptor.get.call(target);
                    var _val = get(val);
                    getterEvent.raise({ val, _val });
                    return _val;
                },
                set(val) {
                    let _val = set.call(this, val);
                    if (_val != undefined)
                        protoPropertyDescriptor.set.call(target, _val);
                    setterEvent.raise({ val, _val });
                },
                configurable: true
            });
            target["#event:set[" + name + "]"] = setterEvent;
            target["#event:get[" + name + "]"] = getterEvent;
            return;
            //own accessor exists
        }
        else if (ownPropertyDescriptor.value == undefined) {
            Object.defineProperty(target, name, {
                get() { return get(ownPropertyDescriptor.get.call(target)); },
                set(val) {
                    let _val = set.call(this, val);
                    if (_val != undefined)
                        ownPropertyDescriptor.set.call(target, _val);
                },
                configurable: true
            });
            //accessor doesn't exists
        }
        else {
            var indexer = Symbol(name);
            target[indexer] = target[name];
            Object.defineProperty(target, name, {
                get() {
                    var val = target[indexer];
                    var _val = get(val);
                    getterEvent.raise({ val, _val });
                    return _val;
                },
                set(val) {
                    let _val = set.call(this, val);
                    if (_val != undefined)
                        target[indexer] = set(_val);
                    setterEvent.raise({ val, _val });
                },
                configurable: true
            });
            target["#event:set[" + name + "]"] = setterEvent;
            target["#event:get[" + name + "]"] = getterEvent;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Property;

class PropertyEvent extends __WEBPACK_IMPORTED_MODULE_0__behaviors_events_abstract_event__["a" /* Event */] {
}
/* unused harmony export PropertyEvent */

class PropertyAccessor {
}
/* unused harmony export PropertyAccessor */

//# sourceMappingURL=Property.js.map

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(2);

class IValidatingReporter {
    report(viewDOM, validatingResult) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IValidatingReporter.report"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IValidatingReporter;

//# sourceMappingURL=ivalidatatingreporter.js.map

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ILogger__ = __webpack_require__(39);

class ConsoleLogger extends __WEBPACK_IMPORTED_MODULE_0__interfaces_ILogger__["a" /* ILogger */] {
    constructor() {
        super(...arguments);
        this.logOflog = "";
    }
    log(err) {
        this.logOflog += err.message;
        console.log("Application error: " + err.message);
    }
    get() {
        return this.logOflog;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ConsoleLogger;

//# sourceMappingURL=ConsoleLogger.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDM2NGUwMmQ1NTVhOGRlNTU5MWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvY29uY3JldGUvZGVjb3JhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcnVudGltZS9jb25jcmV0ZS9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2RlY2xhcmUvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvRXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iYWNrZW5kL2ludGVyZmFjZXMvSVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2NvaGVyZW5jZS9jb25jcmV0ZS9Jbk1lbW9yeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9pbnRlcmZhY2VzL2l2aWV3ZW5naW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3bW9kZWxzL2Fic3RyYWN0L1ZpZXdNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb250cmFjdHMvUm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvY29udHJhY3RzL1JvdXRlQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld21vZGVscy9hYnN0cmFjdC9WaWV3U3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0YXRlcy9TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vbW9kZWxzL01vZGVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yZWZsZWN0aW9uL2Nsb25pbmcvZGVjb3JhdG9ycy9JQ2xvbmVhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9ydW50aW1lL2ludGVyZmFjZXMvSUFwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcmVmbGVjdGlvbi9jbG9uaW5nL2ludGVyZmFjZXMvSUNsb25lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmVoYXZpb3JzL2V2ZW50cy9hYnN0cmFjdC9ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vc3RhdGVzL2ludGVyZmFjZXMvSVN0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlldy9hYnN0cmFjdC92aWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS90ZW1wbGF0aW5nL2NvbnRyYWN0cy90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdGVtcGxhdGluZy9pbnRlcmZhY2VzL0lUZW1wbGF0ZUVuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vaGlzdG9yeS9kZWNvcmF0b3JzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvaW50ZXJmYWNlcy9JUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9oaXN0b3J5L2NvbnRyYWN0cy9IaXN0b3J5SXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vaGlzdG9yeS9pbnRlcmZhY2VzL0lIaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2NvbmNyZXRlL0Jhc2ljUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2Fic3RyYWN0L1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb250cmFjdHMvUm91dGVNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vaGlzdG9yeS9jb25jcmV0ZS9IdG1sNUhpc3RvcnlBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvaW50ZXJmYWNlcy9pYmluZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9jb25jcmV0ZS9CYXNlVmlld0VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9hYnN0cmFjdC9WaWV3RW5naW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3ZW5naW5lL2NvbnRyYWN0cy9leGVjdXRlY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2JpbmRpbmcvY29udHJhY3RzL0JpbmRDb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3YmluZGluZy9pbnRlcmZhY2VzL0lWaWV3QmluZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2xvZ2dpbmcvaW50ZXJmYWNlcy9JTG9nZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3RE9NL2NvbmNyZXRlL0Jhc2VWaWV3RE9NLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3RE9NL2Fic3RyYWN0L3ZpZXdkb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3RlbXBsYXRpbmcvY29uY3JldGUvbXVzdGFjaGUvQ2xpZW50VGVtcGxhdGVFbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdiaW5kaW5nL2NvbmNyZXRlL0Jhc2VWaWV3QmluZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3YmluZGluZy9hYnN0cmFjdC9WaWV3QmluZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yZWZsZWN0aW9uL1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92YWxpZGF0aW5nL3JlcG9ydGVyL2ludGVyZmFjZXMvaXZhbGlkYXRhdGluZ3JlcG9ydGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2xvZ2dpbmcvY29uY3JldGUvQ29uc29sZUxvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RGM7QUFDZDtBQUM0QjtBQUNWO0FBQ0k7QUFDSDtBQUNPO0FBQ0o7QUFDRztBQUNDO0FBQ0s7QUFDVDtBQUNHO0FBQ1A7QUFDTTtBQUNBO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ29CO0FBQ0E7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ1IsK0I7Ozs7Ozs7O0FDakJvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGdCO0FBQ087QUFDRDtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxnQkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0M7Ozs7Ozs7OztBQ3pFZTtBQUNhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxpQzs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxxQzs7Ozs7Ozs7QUNWa0M7QUFDbEM7QUFDQSxnQkFBZ0IsMklBQW9EO0FBQ3BFO0FBQUE7QUFBQTtBQUNBLG9DOzs7Ozs7OztBQ0pzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxnQ0FBZ0M7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLDZDOzs7Ozs7Ozs7O0FDckRrQztBQUNuQjtBQUNmO0FBQ0E7QUFDQSxzQkFBc0IsaUpBQTBEO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0EsdUM7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNzQjtBQUNGO0FBQ0U7QUFDVDtBQUNTO0FBQ0g7QUFDbkI7QUFDQTtBQUNBLGtCQUFrQiw4QkFBOEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ1IscUM7Ozs7Ozs7QUNsRUE7QUFDQTtBQUFBO0FBQUE7QUFDQSxpQzs7Ozs7OztBQ0ZBO0FBQ0E7QUFBQTtBQUFBO0FBQ0Esd0M7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ2dCO0FBQ0M7QUFDSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixjQUFjO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDUixxQzs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNzQjtBQUNOO0FBQ1E7QUFDTDtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNSLGlDOzs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDc0I7QUFDRDtBQUNMO0FBQ0c7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNSLGlDOzs7Ozs7Ozs7O0FDcERBO0FBQ2tCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQzs7Ozs7Ozs7QUNQa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxnQzs7Ozs7Ozs7O0FDVGtDO0FBQ2xDO0FBQ0EsbUJBQW1CLDJJQUFvRDtBQUN2RTtBQUFBO0FBQUE7QUFDQSxtQzs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ3NCO0FBQ0E7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ1IsaUM7Ozs7Ozs7O0FDNUI0QjtBQUM1QjtBQUNBO0FBQUE7QUFBQTtBQUNBLHlDOzs7Ozs7Ozs7QUNIQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNtQjtBQUNDO0FBQ007QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUFBO0FBQUE7QUFDQSxnQzs7Ozs7OztBQzFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLG9DOzs7Ozs7OztBQ0ZrQztBQUNsQztBQUNBLHFCQUFxQixtSkFBNEQ7QUFDakY7QUFBQTtBQUFBO0FBQ0EsMkM7Ozs7Ozs7Ozs7QUNKQTtBQUNrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUM7Ozs7Ozs7O0FDVGtDO0FBQ2xDO0FBQ0Esa0JBQWtCLDRJQUFxRDtBQUN2RSxxQkFBcUIsZ0pBQXlEO0FBQzlFLG9CQUFvQiwySUFBb0Q7QUFDeEUsaUJBQWlCLCtJQUF3RDtBQUN6RTtBQUFBO0FBQUE7QUFDQSxtQzs7Ozs7OztBQ1BBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsdUM7Ozs7Ozs7O0FDRmtDO0FBQ2xDO0FBQ0EsbUJBQW1CLDZJQUFzRDtBQUN6RSxvQkFBb0IsOElBQXVEO0FBQzNFO0FBQUE7QUFBQTtBQUNBLG9DOzs7Ozs7Ozs7OztBQ0xpQjtBQUNLO0FBQ0g7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsdUM7Ozs7Ozs7Ozs7OztBQ2xDa0I7QUFDRztBQUNyQjtBQUNpQjtBQUNLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0M7Ozs7Ozs7O0FDNUNnQjtBQUNoQjtBQUNBO0FBQUE7QUFBQTtBQUNBLHNDOzs7Ozs7Ozs7O0FDSG1CO0FBQ0Q7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMkM7Ozs7Ozs7O0FDNUJrQztBQUNsQztBQUNBLDRCQUE0QiwySUFBb0Q7QUFDaEY7QUFBQTtBQUFBO0FBQ0Esb0M7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ3FCO0FBQ0g7QUFDSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsMEM7Ozs7Ozs7Ozs7QUN0REE7QUFBQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDc0I7QUFDRztBQUNIO0FBQ0E7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUFBO0FBQUE7QUFDQSxzQzs7Ozs7Ozs7O0FDekJtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLDBDOzs7Ozs7Ozs7QUNaQTtBQUNtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsdUM7Ozs7Ozs7O0FDWGtDO0FBQ2xDO0FBQ0EsbUJBQW1CLDhJQUF1RDtBQUMxRTtBQUFBO0FBQUE7QUFDQSx1Qzs7Ozs7Ozs7QUNKa0M7QUFDbEM7QUFDQSxjQUFjLDhIQUFrRDtBQUNoRSxXQUFXLDhIQUFrRDtBQUM3RDtBQUFBO0FBQUE7QUFDQSxtQzs7Ozs7Ozs7QUNMa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsdUM7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLG1DOzs7Ozs7OztBQ1IwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLGdEOzs7Ozs7OztBQ05xQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLDBDOzs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ3NCO0FBQ0g7QUFDVztBQUM5QjtBQUNzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdJQUEwRSxZQUFZLEVBQUU7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBO0FBQ0Esc0M7Ozs7Ozs7O0FDbERnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxZQUFZO0FBQ25EO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFlBQVk7QUFDbkQsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9EQUFvRCxFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxZQUFZO0FBQ25EO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFlBQVk7QUFDbkQsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLG9DOzs7Ozs7OztBQ3BGa0M7QUFDbEM7QUFDQSx1Q0FBdUMsd0pBQWlFO0FBQ3hHO0FBQUE7QUFBQTtBQUNBLGlEOzs7Ozs7OztBQ0prQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSx5QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMzY0ZTAyZDU1NWE4ZGU1NTkxYSIsImltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwXCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmltcG9ydCB7IEluTWVtb3J5Q29udGFpbmVyIH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9jb2hlcmVuY2UvY29uY3JldGUvSW5NZW1vcnlDb250YWluZXJcIjtcclxuaW1wb3J0IHsgSVJvdXRlciB9IGZyb20gXCIuLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9pbnRlcmZhY2VzL0lSb3V0ZXJcIjtcclxuaW1wb3J0IHsgQmFzaWNSb3V0ZXIgfSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvY29uY3JldGUvQmFzaWNSb3V0ZXJcIjtcclxuaW1wb3J0IHsgSUhpc3RvcnkgfSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2hpc3RvcnkvaW50ZXJmYWNlcy9JSGlzdG9yeVwiO1xyXG5pbXBvcnQgeyBIdG1sNUhpc3RvcnlBUEkgfSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2hpc3RvcnkvY29uY3JldGUvSHRtbDVIaXN0b3J5QVBJXCI7XHJcbmltcG9ydCB7IElWaWV3RW5naW5lIH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3ZW5naW5lL2ludGVyZmFjZXMvaXZpZXdlbmdpbmVcIjtcclxuaW1wb3J0IHsgQmFzZVZpZXdFbmdpbmUgfSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdlbmdpbmUvY29uY3JldGUvQmFzZVZpZXdFbmdpbmVcIjtcclxuaW1wb3J0IHsgSVRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS90ZW1wbGF0aW5nL2ludGVyZmFjZXMvSVRlbXBsYXRlRW5naW5lXCI7XHJcbmltcG9ydCB7IENsaWVudFRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS90ZW1wbGF0aW5nL2NvbmNyZXRlL211c3RhY2hlL0NsaWVudFRlbXBsYXRlRW5naW5lXCI7XHJcbmltcG9ydCB7IElWaWV3QmluZGVyIH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3YmluZGluZy9pbnRlcmZhY2VzL0lWaWV3QmluZGVyXCI7XHJcbmltcG9ydCB7IEJhc2VWaWV3QmluZGVyIH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3YmluZGluZy9jb25jcmV0ZS9CYXNlVmlld0JpbmRlclwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2xvZ2dpbmcvaW50ZXJmYWNlcy9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IENvbnNvbGVMb2dnZXIgfSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvbG9nZ2luZy9jb25jcmV0ZS9Db25zb2xlTG9nZ2VyXCI7XHJcbmltcG9ydCB7IElTdGF0ZU1hbmFnZXIgfSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0YXRlcy9pbnRlcmZhY2VzL0lTdGF0ZU1hbmFnZXJcIjtcclxuR2VyYW5pdW1BcHAuY29udGFpbmVyID0gbmV3IEluTWVtb3J5Q29udGFpbmVyKCk7XHJcbkdlcmFuaXVtQXBwLmNvbnRhaW5lci5yZWdpc3RlcihJUm91dGVyLCBuZXcgQmFzaWNSb3V0ZXIoKSk7XHJcbkdlcmFuaXVtQXBwLmNvbnRhaW5lci5yZWdpc3RlcihJSGlzdG9yeSwgbmV3IEh0bWw1SGlzdG9yeUFQSSgpKTtcclxuR2VyYW5pdW1BcHAuY29udGFpbmVyLnJlZ2lzdGVyKElWaWV3RW5naW5lLCBuZXcgQmFzZVZpZXdFbmdpbmUoKSk7XHJcbkdlcmFuaXVtQXBwLmNvbnRhaW5lci5yZWdpc3RlcihJVGVtcGxhdGVFbmdpbmUsIG5ldyBDbGllbnRUZW1wbGF0ZUVuZ2luZSgpKTtcclxuR2VyYW5pdW1BcHAuY29udGFpbmVyLnJlZ2lzdGVyKElWaWV3QmluZGVyLCBuZXcgQmFzZVZpZXdCaW5kZXIoKSk7XHJcbkdlcmFuaXVtQXBwLmNvbnRhaW5lci5yZWdpc3RlcihJTG9nZ2VyLCBuZXcgQ29uc29sZUxvZ2dlcigpKTtcclxuR2VyYW5pdW1BcHAuY29udGFpbmVyLnJlZ2lzdGVyKElTdGF0ZU1hbmFnZXIsIG5ldyBJbk1lbW9yeUNvbnRhaW5lcigpKTtcclxubmV3IEFwcCgpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvYWJzdHJhY3QvVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IHJvdXRlcm9vdCB9IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb25jcmV0ZS9kZWNvcmF0b3JzXCI7XHJcbmxldCBBcHAgPSBjbGFzcyBBcHAgZXh0ZW5kcyBWaWV3TW9kZWwge1xyXG4gICAgdmlldygpIHtcclxuICAgICAgICByZXR1cm4gXCI8aDE+SGVsbG8gd29ybGQhPC9oMT5cIjtcclxuICAgIH1cclxufTtcclxuQXBwID0gX19kZWNvcmF0ZShbXHJcbiAgICByb3V0ZXJvb3RcclxuXSwgQXBwKTtcclxuZXhwb3J0IHsgQXBwIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFeGNlcHRpb24gfSBmcm9tIFwiLi4vRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiBleHRlbmRzIEV4Y2VwdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcclxuICAgICAgICBtc2cgKz0gXCJJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbjogeW91IGNhbiBub3QgdXNlIGludGVyZmFjZS1saWtlIGNsYXNzIVwiO1xyXG4gICAgICAgIHN1cGVyKG1zZyk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW50ZXJmYWNlVXNpbmdFeGNlcHRpb24uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tIFwiLi4vY29udHJhY3RzL1JvdXRlXCI7XHJcbmltcG9ydCB7IFJvdXRlQ29udGV4dCB9IGZyb20gXCIuLi9jb250cmFjdHMvUm91dGVDb250ZXh0XCI7XHJcbmltcG9ydCB7IEFycmF5SGVscGVyIH0gZnJvbSBcIi4uLy4uL2RlY2xhcmUvYXJyYXlcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG52YXIgX2lnbm9yZWRSb3V0ZXMgPSBbXTtcclxudmFyIF9yb3V0ZXMgPSBbXTtcclxuZXhwb3J0IHZhciBzZXR0aW5ncyA9IHsgcGFyYW1ldGVyRnVsbFVybDogZmFsc2UgfTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlcygpIHtcclxuICAgIHJldHVybiBfcm91dGVzLnNsaWNlKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVybEZyb21DdG9yKGN0b3IsIHBhcmFtcykge1xyXG4gICAgdmFyIGluc3RhbmNlID0gR2VyYW5pdW1BcHAuY29udGFpbmVyLmluc3RhbnRpYXRlKGN0b3IpO1xyXG4gICAgbGV0IGNoYWluID0gY2hhaW5PZkN0b3JOYW1lcyhpbnN0YW5jZSwgbnVsbCk7XHJcbiAgICB2YXIgcm91dGVVcmwgPSBBcnJheUhlbHBlci5yZW1vdmVTYW1lKGNoYWluKVxyXG4gICAgICAgIC5yZXZlcnNlKCk7XHJcbiAgICBpZiAocGFyYW1zICYmIHNldHRpbmdzLnBhcmFtZXRlckZ1bGxVcmwpXHJcbiAgICAgICAgcm91dGVVcmwucHVzaC5hcHBseShyb3V0ZVVybCwgcGFyYW1zKTtcclxuICAgIHJldHVybiAnLycgKyByb3V0ZVVybC5qb2luKFwiL1wiKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByb3V0ZWQocGFyYW0sIGFic29yYikge1xyXG4gICAgLy9jbGVhbiByb3V0ZSBvdmVybG9hZFxyXG4gICAgaWYgKHR5cGVvZiBwYXJhbSAhPT0gJ3N0cmluZydcclxuICAgICAgICAvL2NvbnRleHQgb3ZlcmxvYWRcclxuICAgICAgICAmJiAhKHBhcmFtIGluc3RhbmNlb2YgUm91dGVDb250ZXh0KVxyXG4gICAgICAgIC8vcGFyZW50IG92ZXJsb2FkXHJcbiAgICAgICAgJiYgIWFic29yYilcclxuICAgICAgICAvL2NsZWFuIGRlY29yYXRlXHJcbiAgICAgICAgX3JvdXRlZChwYXJhbSwgdXJsRnJvbUN0b3IocGFyYW0pKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gKGNvbnN0cnVjdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICAgICAgX3JvdXRlZChjb25zdHJ1Y3RvciwgcGFyYW0pO1xyXG4gICAgICAgICAgICBpZiAoYWJzb3JiKVxyXG4gICAgICAgICAgICAgICAgX3JvdXRlZChjb25zdHJ1Y3RvciwgdXJsRnJvbUN0b3IocGFyYW0pICsgdXJsRnJvbUN0b3IoY29uc3RydWN0b3IpKTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtIGluc3RhbmNlb2YgUm91dGVDb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gdXJsRnJvbUN0b3IoY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtLnBhcmVudClcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmxGcm9tQ3RvcihwYXJhbS5wYXJlbnQpICsgdXJsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtLnByZXBhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gcGFyYW0ucHJlcGF0aCArIHVybDtcclxuICAgICAgICAgICAgICAgIF9yb3V0ZWQoY29uc3RydWN0b3IsIHVybCwgcGFyYW0uZXhlY3V0YWJsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByb3V0ZWlnbm9yZShjb25zdHJ1Y3Rvcikge1xyXG4gICAgLy92YXIgaW5zdGFuY2UgPSBHZXJhbml1bUFwcC5jb250YWluZXIuaW5zdGFudGlhdGUoY29uc3RydWN0b3IpO1xyXG4gICAgX2lnbm9yZWRSb3V0ZXMucHVzaChjb25zdHJ1Y3Rvci5uYW1lKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcm91dGVyb290KGNvbnN0cnVjdG9yKSB7XHJcbiAgICBfcm91dGVkKGNvbnN0cnVjdG9yLCAnLi8nKTtcclxufVxyXG5mdW5jdGlvbiBfcm91dGVkKGN0b3IsIHVybCwgZXhlY3V0YWJsZSkge1xyXG4gICAgdmFyIHJvdXRlID0gbmV3IFJvdXRlKCk7XHJcbiAgICByb3V0ZS51cmwgPSB1cmwsXHJcbiAgICAgICAgcm91dGUuY3RvciA9IGN0b3I7XHJcbiAgICByb3V0ZS5leGVjdXRhYmxlID0gZXhlY3V0YWJsZTtcclxuICAgIGN0b3IucHJvdG90eXBlW1wiQHJvdXRlZFwiXSA9IHJvdXRlO1xyXG4gICAgX3JvdXRlcy5wdXNoKHJvdXRlKTtcclxufVxyXG5mdW5jdGlvbiBjaGFpbk9mQ3Rvck5hbWVzKG9iaiwgbmFtZXMpIHtcclxuICAgIGlmIChuYW1lcyA9PSBudWxsKVxyXG4gICAgICAgIG5hbWVzID0gW107XHJcbiAgICBpZiAob2JqID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB2YXIgcm91dGUgPSBvYmouY29uc3RydWN0b3IubmFtZTtcclxuICAgIGlmIChyb3V0ZSA9PSBcIk9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgaWYgKF9pZ25vcmVkUm91dGVzLmluZGV4T2Yocm91dGUpID09IC0xKVxyXG4gICAgICAgIG5hbWVzLnB1c2gocm91dGUpO1xyXG4gICAgb2JqID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XHJcbiAgICBuYW1lcy5jb25jYXQoY2hhaW5PZkN0b3JOYW1lcyhvYmosIG5hbWVzKSk7XHJcbiAgICByZXR1cm4gbmFtZXM7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVjb3JhdG9ycy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2NvbmNyZXRlL2RlY29yYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSUFwcCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lBcHBcIjtcclxuaW1wb3J0IHsgSW5NZW1vcnlDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vY29oZXJlbmNlL2NvbmNyZXRlL0luTWVtb3J5Q29udGFpbmVyXCI7XHJcbmNsYXNzIEFwcCBleHRlbmRzIElBcHAge1xyXG4gICAgZ2V0IGNvbnRhaW5lcigpIHtcclxuICAgICAgICBsZXQgZ2xvYmFsID0gd2luZG93W0FwcC5jb250YWluZXJOYW1lQ29uc3RdO1xyXG4gICAgICAgIGlmICghZ2xvYmFsKSB7XHJcbiAgICAgICAgICAgIGdsb2JhbCA9IHdpbmRvd1tBcHAuY29udGFpbmVyTmFtZUNvbnN0XSA9IG5ldyBJbk1lbW9yeUNvbnRhaW5lcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ2xvYmFsO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbnRhaW5lcihjb250YWluZXIpIHtcclxuICAgICAgICB3aW5kb3dbQXBwLmNvbnRhaW5lck5hbWVDb25zdF0gPSBjb250YWluZXI7XHJcbiAgICB9XHJcbn1cclxuQXBwLmNvbnRhaW5lck5hbWVDb25zdCA9IFwiYGdlcmFuaXVtLWNvbnRhaW5lclwiO1xyXG5mdW5jdGlvbiBnZXRBcHAoKSB7XHJcbiAgICBpZiAoIXdpbmRvd1tcImBHZXJhbml1bUFwcFwiXSkge1xyXG4gICAgICAgIHdpbmRvd1tcImBHZXJhbml1bUFwcFwiXSA9IG5ldyBBcHAoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB3aW5kb3dbXCJgR2VyYW5pdW1BcHBcIl07XHJcbn1cclxudmFyIEdlcmFuaXVtQXBwID0gZ2V0QXBwKCk7XHJcbmV4cG9ydCBkZWZhdWx0IEdlcmFuaXVtQXBwO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1BcHAuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcnVudGltZS9jb25jcmV0ZS9BcHAuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIEFycmF5SGVscGVyIHtcclxuICAgIHN0YXRpYyByZW1vdmUoYXJyYXksIGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGUgPT4gZSAhPT0gaXRlbSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVtb3ZlU2FtZShhcnJheSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGVsZW0sIGluZGV4LCBzZWxmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleCA9PSBzZWxmLmluZGV4T2YoZWxlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ3JvdXBCeShhcnJheSwga2V5KSB7XHJcbiAgICAgICAgdmFyIGdyb3VwcyA9IFtdO1xyXG4gICAgICAgIHZhciB0YXJnZXRLZXlzID0gYXJyYXkubWFwKHggPT4geFtrZXldKTtcclxuICAgICAgICB2YXIgdW5pcXVlID0gdGFyZ2V0S2V5cy5maWx0ZXIoKHZhbHVlLCBpbmRleCwgYXJyYXkpID0+IGFycmF5LmluZGV4T2YodmFsdWUpID09PSBpbmRleCk7XHJcbiAgICAgICAgdW5pcXVlLmZvckVhY2goeiA9PiB7XHJcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKGFycmF5LmZpbHRlcih4ID0+IHhba2V5XSA9PSB6KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwcztcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJheS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9kZWNsYXJlL2FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcclxuICAgICAgICBzdXBlcihtc2cpO1xyXG4gICAgICAgIHRoaXMubXNnID0gbXNnO1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBFeGNlcHRpb24ucHJvdG90eXBlKTtcclxuICAgIH1cclxuICAgIGdldCBwdXJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1zZztcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1FeGNlcHRpb24uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXhjZXB0aW9ucy9FeGNlcHRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElSZXF1ZXN0IHtcclxuICAgIHNlbmQoZGF0YSkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJUmVxdWVzdC5zZW5kXCIpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVJlcXVlc3QuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmFja2VuZC9pbnRlcmZhY2VzL0lSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEFycmF5SGVscGVyIH0gZnJvbSBcIi4uLy4uL2RlY2xhcmUvYXJyYXlcIjtcclxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29udGFpbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gW107XHJcbiAgICB9XHJcbiAgICByZWdpc3Rlcih0eXBlLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnB1c2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVzb2x2ZSh0eXBlKSB7XHJcbiAgICAgICAgY29uc3QgZmluZGVkID0gdGhpcy5leGVjdXRlKHR5cGUpO1xyXG4gICAgICAgIGlmIChmaW5kZWQubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29tcG9uZW50IGlzIG5vdCByZWdpc3RlcmVkOiBcIiArIHR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5iaW5kQ29udGFpbmVyKGZpbmRlZFswXSk7XHJcbiAgICB9XHJcbiAgICByZXNvbHZlQWxsKHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlKHR5cGUpLm1hcChjb21wb25lbnQgPT4gdGhpcy5iaW5kQ29udGFpbmVyKGNvbXBvbmVudCkpO1xyXG4gICAgfVxyXG4gICAgcmVsZWFzZSh0eXBlKSB7XHJcbiAgICAgICAgY29uc3QgcGF0dGVybiA9ICh0b2tlbikgPT4geyByZXR1cm4gdG9rZW4udHlwZSA9PSB0eXBlLm5hbWU7IH07XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuZmluZChwYXR0ZXJuKTtcclxuICAgICAgICBpZiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gQXJyYXlIZWxwZXIucmVtb3ZlKHRoaXMuY29udGFpbmVyLCBjb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFsbCgpIHtcclxuICAgICAgICBjb25zdCB0b2tlbkV4dHJhY3QgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuLnZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLm1hcCh0b2tlbkV4dHJhY3QpO1xyXG4gICAgfVxyXG4gICAgaW5zdGFudGlhdGUodHlwZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IHR5cGUoLi4uKHBhcmFtcyB8fCBbXSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJpbmRDb250YWluZXIoaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgYmluZENvbnRhaW5lcihjb21wb25lbnQpIHtcclxuICAgICAgICBjb21wb25lbnRbXCJgY29udGFpbmVyXCJdID0gdGhpcztcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG4gICAgZXhlY3V0ZSh0eXBlKSB7XHJcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW4udHlwZSA9PT0gdHlwZS5uYW1lO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdG9rZW5FeHRyYWN0ID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbi52YWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1hcCA9ICdtYXAnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5maWx0ZXIocGF0dGVybikubWFwKHRva2VuRXh0cmFjdCk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW5NZW1vcnlDb250YWluZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vY29oZXJlbmNlL2NvbmNyZXRlL0luTWVtb3J5Q29udGFpbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi4vLi4vdmlldy9hYnN0cmFjdC92aWV3XCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuZXhwb3J0IGNsYXNzIElWaWV3RW5naW5lIHtcclxuICAgIGV4ZWN1dGUoY29udGV4dCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJVmlld0VuZ2luZS5leGVjdXRlXCIpOyB9XHJcbiAgICAvKipcclxuICAgICAqIHJldHVybiBjb21wbGV0ZSByZW5kZXJlZCB2aWV3XHJcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3JcclxuICAgICAqL1xyXG4gICAgc3RhdGljIFZpZXdFbmdpbmVWaWV3KGl2aWV3ZWQsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdmFyIHZpZXc7XHJcbiAgICAgICAgdmFyIHZpZXdjdHIgPSBpdmlld2VkLnZpZXcoKTtcclxuICAgICAgICBpZiAodHlwZW9mIHZpZXdjdHIgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgbGV0IHZtY3RyID0gRW1wdHlWaWV3O1xyXG4gICAgICAgICAgICB2aWV3ID0gR2VyYW5pdW1BcHAuY29udGFpbmVyLmluc3RhbnRpYXRlKHZtY3RyLCBbc2VsZWN0b3IsIHZpZXdjdHJdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZpZXcgPSBHZXJhbml1bUFwcC5jb250YWluZXIuaW5zdGFudGlhdGUodmlld2N0ciwgW3NlbGVjdG9yXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpZXcuZGF0YSA9IGl2aWV3ZWQ7XHJcbiAgICAgICAgcmV0dXJuIHZpZXcucmVuZGVyKCk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgRW1wdHlWaWV3IGV4dGVuZHMgVmlldyB7XHJcbiAgICBkZWNsYXJlKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXZpZXdlbmdpbmUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9pbnRlcmZhY2VzL2l2aWV3ZW5naW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IHJvdXRlaWdub3JlIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmcvY29uY3JldGUvZGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgeyBWaWV3U3RhdGUgfSBmcm9tIFwiLi9WaWV3U3RhdGVcIjtcclxuaW1wb3J0IHsgSVZpZXdFbmdpbmUgfSBmcm9tIFwiLi4vLi4vdmlld2VuZ2luZS9pbnRlcmZhY2VzL2l2aWV3ZW5naW5lXCI7XHJcbmltcG9ydCB7IGlzIH0gZnJvbSBcIi4uLy4uL2hpc3RvcnkvZGVjb3JhdG9ycy9oaXN0b3J5XCI7XHJcbmltcG9ydCB7IEhpc3RvcnlJdGVtIH0gZnJvbSBcIi4uLy4uL2hpc3RvcnkvY29udHJhY3RzL0hpc3RvcnlJdGVtXCI7XHJcbmltcG9ydCB7IElIaXN0b3J5IH0gZnJvbSBcIi4uLy4uL2hpc3RvcnkvaW50ZXJmYWNlcy9JSGlzdG9yeVwiO1xyXG5pbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmxldCBWaWV3TW9kZWwgPSBjbGFzcyBWaWV3TW9kZWwgZXh0ZW5kcyBWaWV3U3RhdGUge1xyXG4gICAgZ2V0IG1hcmt1cCgpIHsgcmV0dXJuIHRoaXMucHVibGlzaGVkVmlld0RvbTsgfVxyXG4gICAgc2hvdyhzZWxlY3Rvcikge1xyXG4gICAgICAgIGNvbnN0IF9zdXBlciA9IG5hbWUgPT4gc3VwZXJbbmFtZV07XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREb2N1bWVudFRpdGxlKCk7XHJcbiAgICAgICAgICAgIGlmIChpcyh0aGlzLmNvbnN0cnVjdG9yKSAmJiAhdGhpc1snI3JvdXRlZCddKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3JvdXRlZCA9IHRoaXNbXCJAcm91dGVkXCJdO1xyXG4gICAgICAgICAgICAgICAgX3JvdXRlZC5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9oaXN0b3J5ID0gbmV3IEhpc3RvcnlJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICBfaGlzdG9yeS51cmwgPSBfcm91dGVkLnVybDtcclxuICAgICAgICAgICAgICAgIF9oaXN0b3J5LnRpdGxlID0gZG9jdW1lbnQudGl0bGU7XHJcbiAgICAgICAgICAgICAgICBfaGlzdG9yeS5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjdG9yOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgR2VyYW5pdW1BcHAuY29udGFpbmVyLnJlc29sdmUoSUhpc3RvcnkpLmV4dGVuZChfaGlzdG9yeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVsZXRlIHRoaXNbJyNyb3V0ZWQnXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVmdWxsKSB7XHJcbiAgICAgICAgICAgICAgICBfc3VwZXIoXCJzaG93XCIpLmNhbGwodGhpcywgc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMucHVibGlzaGVkVmlld0RvbSA9IHlpZWxkIEdlcmFuaXVtQXBwLmNvbnRhaW5lci5yZXNvbHZlKElWaWV3RW5naW5lKS5leGVjdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpVmlld2VkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXREb2N1bWVudFRpdGxlKCkge1xyXG4gICAgICAgIHZhciB0aXRsZSA9IHRoaXMuZG9jdW1lbnRUaXRsZSgpO1xyXG4gICAgICAgIGlmICh0aXRsZSAhPSBudWxsKVxyXG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnRUaXRsZSgpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgIHRvU3RyaW5nKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvdyhzZWxlY3Rvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblZpZXdNb2RlbCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgcm91dGVpZ25vcmVcclxuXSwgVmlld01vZGVsKTtcclxuZXhwb3J0IHsgVmlld01vZGVsIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZpZXdNb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3bW9kZWxzL2Fic3RyYWN0L1ZpZXdNb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFJvdXRlIHtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Sb3V0ZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2NvbnRyYWN0cy9Sb3V0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFJvdXRlQ29udGV4dCB7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Um91dGVDb250ZXh0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvY29udHJhY3RzL1JvdXRlQ29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGVzL1N0YXRlXCI7XHJcbmltcG9ydCB7IHJvdXRlZCB9IGZyb20gXCIuLi8uLi9yb3V0aW5nL2NvbmNyZXRlL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgSVZpZXdFbmdpbmUgfSBmcm9tIFwiLi4vLi4vdmlld2VuZ2luZS9pbnRlcmZhY2VzL2l2aWV3ZW5naW5lXCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxubGV0IFZpZXdTdGF0ZSA9IGNsYXNzIFZpZXdTdGF0ZSBleHRlbmRzIFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZWZ1bGwpXHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgc3RhdGVmdWxsKCkgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgIHNob3coc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXNbXCIjVmlld1N0YXRlXCJdKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXlTdGF0ZSA9IHlpZWxkIFN0YXRlLmdldCh0aGlzLmNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgICAgIG15U3RhdGVbXCIjVmlld1N0YXRlXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG15U3RhdGVbXCJzaG93XCJdKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzW1wiI1ZpZXdTdGF0ZVwiXTtcclxuICAgICAgICAgICAgICAgIEdlcmFuaXVtQXBwLmNvbnRhaW5lci5yZXNvbHZlKElWaWV3RW5naW5lKS5leGVjdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpVmlld2VkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuVmlld1N0YXRlID0gX19kZWNvcmF0ZShbXHJcbiAgICByb3V0ZWQoXCIvaGkvd3RmXCIpXHJcbl0sIFZpZXdTdGF0ZSk7XHJcbmV4cG9ydCB7IFZpZXdTdGF0ZSB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1WaWV3U3RhdGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld21vZGVscy9hYnN0cmFjdC9WaWV3U3RhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IHJvdXRlaWdub3JlIH0gZnJvbSBcIi4uL3JvdXRpbmcvY29uY3JldGUvZGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvTW9kZWxcIjtcclxuaW1wb3J0IHsgSVN0YXRlTWFuYWdlciB9IGZyb20gXCIuL2ludGVyZmFjZXMvSVN0YXRlTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBJUmVxdWVzdCB9IGZyb20gXCIuLi9iYWNrZW5kL2ludGVyZmFjZXMvSVJlcXVlc3RcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5sZXQgU3RhdGUgPSBjbGFzcyBTdGF0ZSBleHRlbmRzIE1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKHN0YXRlZnVsbCA9IHRydWUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGlmIChzdGF0ZWZ1bGwpXHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICBmaWxsU3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IubmFtZSAhPSBcIlZpZXdTdGF0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZU1hbmFnZXIgPSBHZXJhbml1bUFwcC5jb250YWluZXIucmVzb2x2ZShJU3RhdGVNYW5hZ2VyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gc3RhdGVNYW5hZ2VyLnJlc29sdmUodGhpcy5jb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVNYW5hZ2VyLnJlZ2lzdGVyKHRoaXMuY29uc3RydWN0b3IsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0KHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBHZXJhbml1bUFwcC5jb250YWluZXIucmVzb2x2ZShJU3RhdGVNYW5hZ2VyKS5yZXNvbHZlKHR5cGUpO1xyXG4gICAgICAgICAgICBpZiAoIXN0YXRlKVxyXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBuZXcgdHlwZSgpO1xyXG4gICAgICAgICAgICB5aWVsZCBzdGF0ZS5zeW5jKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzW1wiYGNvbnRhaW5lclwiXTtcclxuICAgICAgICBjb25zdCBzdGF0ZU1hbmFnZXIgPSBjb250YWluZXIucmVzb2x2ZShJU3RhdGVNYW5hZ2VyKTtcclxuICAgICAgICBzdGF0ZU1hbmFnZXIucmVsZWFzZSh0aGlzLmNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuICAgIHN5bmMoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3luY2hyb25pemVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdCA9IHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB5aWVsZCByZXF1ZXN0LnNlbmQodGhpcy5zeW5jaHJvbml6ZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnRhaW4oZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuU3RhdGUgPSBfX2RlY29yYXRlKFtcclxuICAgIHJvdXRlaWdub3JlXHJcbl0sIFN0YXRlKTtcclxuZXhwb3J0IHsgU3RhdGUgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3RhdGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vc3RhdGVzL1N0YXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyByb3V0ZWlnbm9yZSB9IGZyb20gXCIuLi9yb3V0aW5nL2NvbmNyZXRlL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgSUNsb25lYWJsZSB9IGZyb20gXCIuLi9yZWZsZWN0aW9uL2Nsb25pbmcvZGVjb3JhdG9ycy9JQ2xvbmVhYmxlXCI7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4uL2JlaGF2aW9ycy9ldmVudHMvYWJzdHJhY3QvZXZlbnRcIjtcclxuaW1wb3J0IHsgSVJlcXVlc3QgfSBmcm9tIFwiLi4vYmFja2VuZC9pbnRlcmZhY2VzL0lSZXF1ZXN0XCI7XHJcbmxldCBNb2RlbCA9IGNsYXNzIE1vZGVsIGV4dGVuZHMgRXZlbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXTtcclxuICAgIH1cclxuICAgIG9idGFpbihkYXRhKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gICAgICAgIHRoaXMucmFpc2UodGhpcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHN5bmNocm9uaXplIG1vZGVsIHdpdGggc2VydmVyIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHN5bmMoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3luY2hyb25pemVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdCA9IHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB5aWVsZCByZXF1ZXN0LnNlbmQodGhpcy5zeW5jaHJvbml6ZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnRhaW4oZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogb2JqZWN0IHVzZWQgYXMgc3luY2hyb25pemF0b3JcclxuICAgICAqL1xyXG4gICAgZ2V0IHN5bmNocm9uaXplcigpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxyXG59O1xyXG5Nb2RlbCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgcm91dGVpZ25vcmUsXHJcbiAgICBJQ2xvbmVhYmxlXHJcbl0sIE1vZGVsKTtcclxuZXhwb3J0IHsgTW9kZWwgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vbW9kZWxzL01vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmltcG9ydCB7IElDbG9uZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JQ2xvbmVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBJQ2xvbmVhYmxlKGNvbnN0cnVjdG9yKSB7XHJcbiAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlcmFuaXVtQXBwLmNvbnRhaW5lci5yZXNvbHZlKElDbG9uZXIpLmNsb25lKHRoaXMpO1xyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JQ2xvbmVhYmxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JlZmxlY3Rpb24vY2xvbmluZy9kZWNvcmF0b3JzL0lDbG9uZWFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJQXBwIHtcclxuICAgIGdldCBjb250YWluZXIoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSUFwcC5jb250YWluZXIuZ2V0XCIpO1xyXG4gICAgfVxyXG4gICAgc2V0IGNvbnRhaW5lcihjb250YWluZXIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJQXBwLmNvbnRhaW5lci5zZXRcIik7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SUFwcC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9ydW50aW1lL2ludGVyZmFjZXMvSUFwcC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElDbG9uZXIge1xyXG4gICAgY2xvbmUoc2FtcGxlKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklDbG9uZXIuY2xvbmVcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JQ2xvbmVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JlZmxlY3Rpb24vY2xvbmluZy9pbnRlcmZhY2VzL0lDbG9uZXIuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbmltcG9ydCB7IHJvdXRlaWdub3JlIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRpbmcvY29uY3JldGUvZGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgeyBBcnJheUhlbHBlciB9IGZyb20gXCIuLi8uLi8uLi9kZWNsYXJlL2FycmF5XCI7XHJcbmxldCBFdmVudCA9IGNsYXNzIEV2ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3JlcXVlc3RFdmVudHMgPSBuZXcgQXJyYXkoKTtcclxuICAgIH1cclxuICAgIHJhaXNlKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0RXZlbnRzLmZvckVhY2goc3Vic2NyaWJlciA9PiB7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZXIoYXJncyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXQgYmluZChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX3JlcXVlc3RFdmVudHMucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcbiAgICBzZXQgdW5iaW5kKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdEV2ZW50cyA9IEFycmF5SGVscGVyLnJlbW92ZSh0aGlzLl9yZXF1ZXN0RXZlbnRzLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbn07XHJcbkV2ZW50ID0gX19kZWNvcmF0ZShbXHJcbiAgICByb3V0ZWlnbm9yZVxyXG5dLCBFdmVudCk7XHJcbmV4cG9ydCB7IEV2ZW50IH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JlaGF2aW9ycy9ldmVudHMvYWJzdHJhY3QvZXZlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEluTWVtb3J5Q29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL2NvaGVyZW5jZS9jb25jcmV0ZS9Jbk1lbW9yeUNvbnRhaW5lclwiO1xyXG5leHBvcnQgY2xhc3MgSVN0YXRlTWFuYWdlciBleHRlbmRzIEluTWVtb3J5Q29udGFpbmVyIHtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JU3RhdGVNYW5hZ2VyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0YXRlcy9pbnRlcmZhY2VzL0lTdGF0ZU1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSBcIi4uLy4uL3RlbXBsYXRpbmcvY29udHJhY3RzL3RlbXBsYXRlXCI7XHJcbmltcG9ydCB7IEV4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL0V4Y2VwdGlvblwiO1xyXG5pbXBvcnQgeyBJVGVtcGxhdGVFbmdpbmUgfSBmcm9tIFwiLi4vLi4vdGVtcGxhdGluZy9pbnRlcmZhY2VzL0lUZW1wbGF0ZUVuZ2luZVwiO1xyXG5leHBvcnQgY2xhc3MgVmlldyBleHRlbmRzIFRlbXBsYXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnByb3RlY3RSZW5kZXIoYXJndW1lbnRzWzFdKTtcclxuICAgICAgICB0aGlzLl9zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNlbGVjdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RvcjtcclxuICAgIH1cclxuICAgIHByb3RlY3RSZW5kZXIoaHRtbCkge1xyXG4gICAgICAgIHRoaXMuaHRtbCA9IHRoaXMuZGVjbGFyZSgpO1xyXG4gICAgICAgIGlmICghdGhpcy5odG1sKVxyXG4gICAgICAgICAgICB0aGlzLmh0bWwgPSBodG1sO1xyXG4gICAgICAgIGlmICghdGhpcy5odG1sKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCd2aWV3IHRlbXBsYXRlIGlzIGVtcHR5IScpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbigndmlldyBkYXRhIGlzIG5vdCBhc3NpZ25lZCEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVuZGVyZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ3ZpZXcgYWxyZWFkeSByZW5kZXJlZCEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZW5naW5lID0gdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZShJVGVtcGxhdGVFbmdpbmUpO1xyXG4gICAgICAgICAgICB0aGlzLmh0bWwgPSB5aWVsZCBlbmdpbmUucGFyc2UodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gcmVzb2x2ZSh0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmlldy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3L2Fic3RyYWN0L3ZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdGVtcGxhdGluZy9jb250cmFjdHMvdGVtcGxhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJVGVtcGxhdGVFbmdpbmUge1xyXG4gICAgcGFyc2UodGVtcGxhdGUpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVRlbXBsYXRlRW5naW5lLnBhcnNlXCIpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVRlbXBsYXRlRW5naW5lLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3RlbXBsYXRpbmcvaW50ZXJmYWNlcy9JVGVtcGxhdGVFbmdpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuaW1wb3J0IHsgSVJvdXRlciB9IGZyb20gXCIuLi8uLi9yb3V0aW5nL2ludGVyZmFjZXMvSVJvdXRlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gaXMoY29uc3RydWN0b3IpIHtcclxuICAgIHZhciByb3V0ZXIgPSBHZXJhbml1bUFwcC5jb250YWluZXIucmVzb2x2ZShJUm91dGVyKTtcclxuICAgIHJldHVybiByb3V0ZXIucm91dGVzLmZpbHRlcih4ID0+IHtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgeC5jdG9yKCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWUgPT0gY29uc3RydWN0b3IubmFtZTtcclxuICAgIH0pLmxlbmd0aCA+IDA7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGlzdG9yeS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9oaXN0b3J5L2RlY29yYXRvcnMvaGlzdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElSb3V0ZXIge1xyXG4gICAgZ2V0IHJvdXRlcygpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVJvdXRlci5yb3V0ZXNcIik7IH1cclxuICAgIHJvdXRlQnlVcmwodXJsKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklSb3V0ZXIucm91dGVCeVVybFwiKTsgfVxyXG4gICAgcm91dGUoY3VycmVudCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJUm91dGVyLnJvdXRlXCIpOyB9XHJcbiAgICByb3V0ZWFyZWEoKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklSb3V0ZXIucm91dGVhcmVhXCIpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVJvdXRlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2ludGVyZmFjZXMvSVJvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIEhpc3RvcnlJdGVtIHtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IaXN0b3J5SXRlbS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9oaXN0b3J5L2NvbnRyYWN0cy9IaXN0b3J5SXRlbS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElIaXN0b3J5IHtcclxuICAgIGV4dGVuZChoaXRlbSkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJSGlzdG9yeS5leHRlbmRcIik7IH1cclxuICAgIHJlc3RvcmUoc3RhdGUpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSUhpc3RvcnkucmVzdG9yZVwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlIaXN0b3J5LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2hpc3RvcnkvaW50ZXJmYWNlcy9JSGlzdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0L1JvdXRlclwiO1xyXG5pbXBvcnQgeyBIaXN0b3J5SXRlbSB9IGZyb20gXCIuLi8uLi9oaXN0b3J5L2NvbnRyYWN0cy9IaXN0b3J5SXRlbVwiO1xyXG5pbXBvcnQgeyBJSGlzdG9yeSB9IGZyb20gXCIuLi8uLi9oaXN0b3J5L2ludGVyZmFjZXMvSUhpc3RvcnlcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5leHBvcnQgY2xhc3MgQmFzaWNSb3V0ZXIgZXh0ZW5kcyBSb3V0ZXIge1xyXG4gICAgQ3VycmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudDtcclxuICAgIH1cclxuICAgIHJvdXRlYXJlYSgpIHtcclxuICAgICAgICByZXR1cm4gJy5hcHAnO1xyXG4gICAgfVxyXG4gICAgcm91dGUoY3VycmVudCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50ID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBjdXJyZW50LnJlc3RvcmUgPyBjdXJyZW50LnNlbGVjdG9yIDogdGhpcy5yb3V0ZWFyZWEoKTtcclxuICAgICAgICB2YXIgcm91dGVkID0gR2VyYW5pdW1BcHAuY29udGFpbmVyLmluc3RhbnRpYXRlKGN1cnJlbnQuY3RvciwgY3VycmVudC5wYXJhbXMpO1xyXG4gICAgICAgIHZhciBleGVjdXRpbmcgPSBjdXJyZW50LmV4ZWN1dGFibGUgPyBjdXJyZW50LmV4ZWN1dGFibGUgOiAndG9TdHJpbmcnO1xyXG4gICAgICAgIGlmICghY3VycmVudC5yZXN0b3JlKSB7XHJcbiAgICAgICAgICAgIHZhciBfaGlzdG9yeSA9IG5ldyBIaXN0b3J5SXRlbSgpO1xyXG4gICAgICAgICAgICBfaGlzdG9yeS51cmwgPSBjdXJyZW50LnVybDtcclxuICAgICAgICAgICAgX2hpc3RvcnkudGl0bGUgPSBkb2N1bWVudC50aXRsZTtcclxuICAgICAgICAgICAgX2hpc3Rvcnkuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICBjdG9yOiBjdXJyZW50LmN0b3IubmFtZSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlKElIaXN0b3J5KS5leHRlbmQoX2hpc3RvcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByb3V0ZWRbXCIjcm91dGVkXCJdID0ge1xyXG4gICAgICAgICAgICBwYXJhbXM6IGN1cnJlbnQucGFyYW1zLFxyXG4gICAgICAgICAgICByZXN0b3JlOiBjdXJyZW50LnJlc3RvcmVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJvdXRlZFtleGVjdXRpbmddKHNlbGVjdG9yKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNpY1JvdXRlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2NvbmNyZXRlL0Jhc2ljUm91dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJUm91dGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSVJvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZU1hdGNoIH0gZnJvbSBcIi4uL2NvbnRyYWN0cy9Sb3V0ZU1hdGNoXCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSBcIi4uL2NvbmNyZXRlL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgQXJyYXlIZWxwZXIgfSBmcm9tIFwiLi4vLi4vZGVjbGFyZS9hcnJheVwiO1xyXG5leHBvcnQgY2xhc3MgUm91dGVyIGV4dGVuZHMgSVJvdXRlciB7XHJcbiAgICBnZXQgcm91dGVzKCkge1xyXG4gICAgICAgIHJldHVybiByb3V0ZXMoKTtcclxuICAgIH1cclxuICAgIHJvdXRlQnlVcmwodXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0Y2godXJsKTtcclxuICAgIH1cclxuICAgIG1hdGNoKHVybCwgcGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucm91dGVzLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB2YXIgY3RvckNvbGxlY3Rpb24gPSB0aGlzLnJvdXRlcy5maWx0ZXIoeCA9PiB4LnVybCA9PSB1cmwpO1xyXG4gICAgICAgIGlmICh1cmwgPT0gJy8nICYmIGN0b3JDb2xsZWN0aW9uLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBzaG9ydGVzdFJvdXRlID0gdGhpcy5yb3V0ZXMucmVkdWNlKChhLCBiKSA9PiBhLnVybC5sZW5ndGggPCBiLnVybC5sZW5ndGggPyBhIDogYik7XHJcbiAgICAgICAgICAgIHJldHVybiBzaG9ydGVzdFJvdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3RvckNvbGxlY3Rpb24ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gQXJyYXlIZWxwZXIucmVtb3ZlKHVybC5zcGxpdCgnLycpLCAoJycpKTtcclxuICAgICAgICAgICAgdmFyIGN1dFNlZ21lbnRzID0gc2VnbWVudHMuZmlsdGVyKCh2LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaSAhPSBzZWdtZW50cy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIHJvdXRlID0gdGhpcy5tYXRjaCgnLycgKyBjdXRTZWdtZW50cy5qb2luKCcvJykpO1xyXG4gICAgICAgICAgICBpZiAoIXJvdXRlLnBhcmFtcylcclxuICAgICAgICAgICAgICAgIHJvdXRlLnBhcmFtcyA9IFtdO1xyXG4gICAgICAgICAgICByb3V0ZS5wYXJhbXMucHVzaChzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1hdGNoID0gbmV3IFJvdXRlTWF0Y2goKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKG1hdGNoLCBjdG9yQ29sbGVjdGlvblswXSk7XHJcbiAgICAgICAgbWF0Y2gucGFyYW1zID0gcGFyYW1zO1xyXG4gICAgICAgIHJldHVybiBtYXRjaDtcclxuICAgIH1cclxufVxyXG5pZiAod2luZG93KSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICB2YXIgcm91dGVyID0gR2VyYW5pdW1BcHAuY29udGFpbmVyLnJlc29sdmUoSVJvdXRlcik7XHJcbiAgICAgICAgdmFyIHJvdXRlID0gcm91dGVyLnJvdXRlQnlVcmwod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICByb3V0ZXIucm91dGUocm91dGUpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Um91dGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvYWJzdHJhY3QvUm91dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gXCIuL1JvdXRlXCI7XHJcbmV4cG9ydCBjbGFzcyBSb3V0ZU1hdGNoIGV4dGVuZHMgUm91dGUge1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJvdXRlTWF0Y2guanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb250cmFjdHMvUm91dGVNYXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSUhpc3RvcnkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JSGlzdG9yeVwiO1xyXG5pbXBvcnQgeyBJUm91dGVyIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmcvaW50ZXJmYWNlcy9JUm91dGVyXCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuZXhwb3J0IGNsYXNzIEh0bWw1SGlzdG9yeUFQSSBleHRlbmRzIElIaXN0b3J5IHtcclxuICAgIGV4dGVuZChoaXRlbSkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaGlzdG9yeS5zdGF0ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXRlbS5zdGF0ZSwgaGl0ZW0udGl0bGUsIGhpdGVtLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoaGl0ZW0uc3RhdGUsIGhpdGVtLnRpdGxlLCBoaXRlbS51cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlc3RvcmUoc3RhdGUpIHtcclxuICAgICAgICB2YXIgcm91dGVyID0gdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZShJUm91dGVyKTtcclxuICAgICAgICB2YXIgcm91dGUgPSByb3V0ZXIucm91dGVzLmZpbHRlcih4ID0+IHtcclxuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IHguY3RvcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSA9PSBzdGF0ZS5jdG9yO1xyXG4gICAgICAgIH0pWzBdO1xyXG4gICAgICAgIHJvdXRlLnNlbGVjdG9yID0gc3RhdGUuc2VsZWN0b3I7XHJcbiAgICAgICAgcm91dGUucmVzdG9yZSA9IHRydWU7XHJcbiAgICAgICAgcm91dGVyLnJvdXRlKHJvdXRlKTtcclxuICAgIH1cclxufVxyXG5pZiAod2luZG93KSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoZXZlbnRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIEdlcmFuaXVtQXBwLmNvbnRhaW5lci5yZXNvbHZlKElIaXN0b3J5KS5yZXN0b3JlKGV2ZW50U3RhdGUuc3RhdGUpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SHRtbDVIaXN0b3J5QVBJLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2hpc3RvcnkvY29uY3JldGUvSHRtbDVIaXN0b3J5QVBJLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSUJpbmRpbmcge1xyXG4gICAgYmluZChvYmplY3RET00sIG1vZGVsKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklCaW5kaW5nLmJpbmRcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pYmluZGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2ludGVyZmFjZXMvaWJpbmRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IFZpZXdFbmdpbmUgfSBmcm9tIFwiLi4vYWJzdHJhY3QvVmlld0VuZ2luZVwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvbG9nZ2luZy9pbnRlcmZhY2VzL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgQmFzZVZpZXdET00gfSBmcm9tIFwiLi4vLi4vdmlld0RPTS9jb25jcmV0ZS9CYXNlVmlld0RPTVwiO1xyXG5leHBvcnQgY2xhc3MgQmFzZVZpZXdFbmdpbmUgZXh0ZW5kcyBWaWV3RW5naW5lIHtcclxuICAgIHB1Ymxpc2godmlld0RPTSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdmlld0RPTS52aWV3LnNlbGVjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZXcgPSB2aWV3RE9NLmdldFZpZXdET00oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb21Mb2FkZWQgPSBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50ICYmICFkb21Mb2FkZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5kb21Mb2FkZWQoc2VsZWN0b3IsIHZpZXcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkb21Mb2FkZWQgJiYgIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VsZWN0b3IgZG9lcyBub3QgZXhpc3RzOiBcIiArIHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQodmlldywgZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmlld0RPTSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlKElMb2dnZXIpLmxvZyhleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2aWV3RE9NKHZpZXcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJhc2VWaWV3RE9NKHZpZXcpO1xyXG4gICAgfVxyXG4gICAgZG9tTG9hZGVkKHNlbGVjdG9yLCB2aWV3KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQodmlldywgZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlVmlld0VuZ2luZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3ZW5naW5lL2NvbmNyZXRlL0Jhc2VWaWV3RW5naW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBJVmlld0VuZ2luZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2l2aWV3ZW5naW5lXCI7XHJcbmltcG9ydCB7IEV4ZWN1dGVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRyYWN0cy9leGVjdXRlY29udGV4dFwiO1xyXG5pbXBvcnQgeyBCaW5kQ29udGV4dCB9IGZyb20gXCIuLi8uLi92aWV3YmluZGluZy9jb250cmFjdHMvQmluZENvbnRleHRcIjtcclxuaW1wb3J0IHsgSVZpZXdCaW5kZXIgfSBmcm9tIFwiLi4vLi4vdmlld2JpbmRpbmcvaW50ZXJmYWNlcy9JVmlld0JpbmRlclwiO1xyXG5leHBvcnQgY2xhc3MgVmlld0VuZ2luZSB7XHJcbiAgICBleGVjdXRlKGNvbnRleHQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB2YXIgdmlldyA9IHlpZWxkIElWaWV3RW5naW5lLlZpZXdFbmdpbmVWaWV3KGNvbnRleHQuaVZpZXdlZCwgY29udGV4dC5zZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIHZhciB2aWV3RE9NID0gdGhpcy52aWV3RE9NKHZpZXcpO1xyXG4gICAgICAgICAgICB2YXIgZXhlY0N0eCA9IG5ldyBFeGVjdXRlQ29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAgICAgdmFyIGJpbmRpbmdDb250ZXh0ID0gbmV3IEJpbmRDb250ZXh0KHZpZXdET00sIGV4ZWNDdHguYmluZGluZ0ZsYWdzKTtcclxuICAgICAgICAgICAgdmFyIHZpZXdiaW5kZXIgPSB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlKElWaWV3QmluZGVyKTtcclxuICAgICAgICAgICAgeWllbGQgdmlld2JpbmRlci5iaW5kKGJpbmRpbmdDb250ZXh0KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVibGlzaCh2aWV3RE9NKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1WaWV3RW5naW5lLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdlbmdpbmUvYWJzdHJhY3QvVmlld0VuZ2luZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSUJpbmRpbmcgfSBmcm9tIFwiLi4vLi4vYmluZGluZy9pbnRlcmZhY2VzL2liaW5kaW5nXCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuZXhwb3J0IGNsYXNzIEV4ZWN1dGVDb250ZXh0IHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXdDdHgsIGJpbmRpbmdGbGFncykge1xyXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdDdHguaVZpZXdlZDtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gdmlld0N0eC5zZWxlY3RvcjtcclxuICAgICAgICBpZiAoIWJpbmRpbmdGbGFncykge1xyXG4gICAgICAgICAgICBiaW5kaW5nRmxhZ3MgPSBHZXJhbml1bUFwcC5jb250YWluZXIucmVzb2x2ZUFsbChJQmluZGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmluZGluZ0ZsYWdzID0gYmluZGluZ0ZsYWdzO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4ZWN1dGVjb250ZXh0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdlbmdpbmUvY29udHJhY3RzL2V4ZWN1dGVjb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmltcG9ydCB7IElCaW5kaW5nIH0gZnJvbSBcIi4uLy4uL2JpbmRpbmcvaW50ZXJmYWNlcy9pYmluZGluZ1wiO1xyXG5leHBvcnQgY2xhc3MgQmluZENvbnRleHQge1xyXG4gICAgY29uc3RydWN0b3Iodmlld0RPTSwgYmluZGluZ0ZsYWdzKSB7XHJcbiAgICAgICAgdGhpcy52aWV3RE9NID0gdmlld0RPTTtcclxuICAgICAgICBpZiAoIWJpbmRpbmdGbGFncykge1xyXG4gICAgICAgICAgICBiaW5kaW5nRmxhZ3MgPSBHZXJhbml1bUFwcC5jb250YWluZXIucmVzb2x2ZUFsbChJQmluZGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmluZGluZ0ZsYWdzID0gYmluZGluZ0ZsYWdzO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJpbmRDb250ZXh0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdiaW5kaW5nL2NvbnRyYWN0cy9CaW5kQ29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElWaWV3QmluZGVyIHtcclxuICAgIGJpbmQoY29udGV4dCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJVmlld0JpbmRlci5iaW5kXCIpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVZpZXdCaW5kZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2JpbmRpbmcvaW50ZXJmYWNlcy9JVmlld0JpbmRlci5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJTG9nZ2VyIHtcclxuICAgIGxvZyhlcnIpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSUxvZ2dlci5sb2dcIik7IH1cclxuICAgIGdldCgpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSUxvZ2dlci5nZXRcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JTG9nZ2VyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvbG9nZ2luZy9pbnRlcmZhY2VzL0lMb2dnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFZpZXdET00gfSBmcm9tIFwiLi4vYWJzdHJhY3Qvdmlld2RvbVwiO1xyXG5leHBvcnQgY2xhc3MgQmFzZVZpZXdET00gZXh0ZW5kcyBWaWV3RE9NIHtcclxuICAgIGdldFZpZXdET00oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2h0bWwgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IHRoaXMudmlldy5odG1sO1xyXG4gICAgICAgICAgICB0aGlzLl9odG1sID0gZGl2O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5faHRtbDtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlVmlld0RPTS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3RE9NL2NvbmNyZXRlL0Jhc2VWaWV3RE9NLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgVmlld0RPTSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3KSB7XHJcbiAgICAgICAgdGhpcy5fdmlldyA9IHZpZXc7XHJcbiAgICB9XHJcbiAgICBnZXQgdmlldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmlldztcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD12aWV3ZG9tLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdET00vYWJzdHJhY3Qvdmlld2RvbS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSVRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVRlbXBsYXRlRW5naW5lXCI7XHJcbmV4cG9ydCBjbGFzcyBDbGllbnRUZW1wbGF0ZUVuZ2luZSBleHRlbmRzIElUZW1wbGF0ZUVuZ2luZSB7XHJcbiAgICBwYXJzZSh0ZW1wbGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZSh0ZW1wbGF0ZS5odG1sKSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2xpZW50VGVtcGxhdGVFbmdpbmUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdGVtcGxhdGluZy9jb25jcmV0ZS9tdXN0YWNoZS9DbGllbnRUZW1wbGF0ZUVuZ2luZS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVmlld0JpbmRlciB9IGZyb20gXCIuLi9hYnN0cmFjdC9WaWV3QmluZGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBCYXNlVmlld0JpbmRlciBleHRlbmRzIFZpZXdCaW5kZXIge1xyXG4gICAgYmluZGluZyhWaWV3RE9NLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpbmRpbmcuYmluZChWaWV3RE9NLmdldFZpZXdET00oKSwgVmlld0RPTS52aWV3LmRhdGEpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2VWaWV3QmluZGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdiaW5kaW5nL2NvbmNyZXRlL0Jhc2VWaWV3QmluZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBJVmlld0JpbmRlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lWaWV3QmluZGVyXCI7XHJcbmltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3JlZmxlY3Rpb24vUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgSVZhbGlkYXRpbmdSZXBvcnRlciB9IGZyb20gXCIuLi8uLi92YWxpZGF0aW5nL3JlcG9ydGVyL2ludGVyZmFjZXMvaXZhbGlkYXRhdGluZ3JlcG9ydGVyXCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuaW1wb3J0IHsgQXJyYXlIZWxwZXIgfSBmcm9tIFwiLi4vLi4vZGVjbGFyZS9hcnJheVwiO1xyXG5leHBvcnQgY2xhc3MgVmlld0JpbmRlciBleHRlbmRzIElWaWV3QmluZGVyIHtcclxuICAgIGJpbmQoY29udGV4dCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlld0RPTSA9IGNvbnRleHQudmlld0RPTTtcclxuICAgICAgICAgICAgeWllbGQgdGhpcy5leGVjKHRoaXMudmlld0RPTSwgY29udGV4dC5iaW5kaW5nRmxhZ3MpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkKHRoaXMudmlld0RPTSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZpZXdET007XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YWxpZChWaWV3RE9NKSB7XHJcbiAgICAgICAgdmFyIHZtID0gVmlld0RPTS52aWV3LmRhdGE7XHJcbiAgICAgICAgaWYgKHZtLnZhbGlkYXRvcnMpIHtcclxuICAgICAgICAgICAgdmFyIHZhbGlkYXRlZFByb3BlcnRpZXMgPSBBcnJheUhlbHBlci5ncm91cEJ5KHZtLnZhbGlkYXRvcnMsICd2YWxpZGF0ZWRQcm9wZXJ0eU5hbWUnKTtcclxuICAgICAgICAgICAgdmFsaWRhdGVkUHJvcGVydGllcy5mb3JFYWNoKHZhbGlkYXRvcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkUHJvcCA9IHZhbGlkYXRvcnNbMF0udmFsaWRhdGVkUHJvcGVydHlOYW1lO1xyXG4gICAgICAgICAgICAgICAgUHJvcGVydHkucmVkZWZpbmUoVmlld0RPTS52aWV3LmRhdGEsIHZhbGlkUHJvcCwgKHZhbCkgPT4geyByZXR1cm4gdmFsOyB9LCBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25GYXVsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdG9ycy5maWx0ZXIoeCA9PiB4LnZhbGlkYXRlZFByb3BlcnR5TmFtZSA9PT0gdmFsaWRQcm9wKS5mb3JFYWNoKHZhbGlkYXRvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbCwgdGhpcy5jbG9uZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25GYXVsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXJhbml1bUFwcC5jb250YWluZXIucmVzb2x2ZShJVmFsaWRhdGluZ1JlcG9ydGVyKS5yZXBvcnQoVmlld0RPTSwgdmFsaWRhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGlvbkZhdWx0ID8gdW5kZWZpbmVkIDogdmFsO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4ZWMoVmlld0RPTSwgYmluZGluZ3MpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJpbmRpbmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmJpbmRpbmcoVmlld0RPTSwgYmluZGluZ3NbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Vmlld0JpbmRlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3YmluZGluZy9hYnN0cmFjdC9WaWV3QmluZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuLi9iZWhhdmlvcnMvZXZlbnRzL2Fic3RyYWN0L2V2ZW50XCI7XHJcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlZGVmaW5lcyBwcm9wZXJ0eSB3aXRoIG5ldyBwdWJsaWMgYWNjZXNzb3JzLCBzYWZlXHJcbiAgICAgKlxyXG4gICAgICogQWxzbyBjcmVhdGVzIHByb3BlcnR5IEV2ZW50IGZvciBkZXRlY3Rpb24gZW5kIG9mIGNoYWluOlxyXG4gICAgICpcclxuICAgICAqIHNldHRlciBvYmpbI2V2ZW50OnNldFtuYW1lXV1cclxuICAgICAqXHJcbiAgICAgKiBnZXR0ZXIgb2JqWyNldmVudDpnZXRbbmFtZV1dXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0gbmFtZSBvZiBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGdldCBuZXcgcHVibGljIHNldHRlclxyXG4gICAgICogQHBhcmFtIHNldCBuZXcgcHVibGljIGdldHRlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmVkZWZpbmUodGFyZ2V0LCBuYW1lLCBnZXQsIHNldCkge1xyXG4gICAgICAgIHZhciBwcm90b1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCksIG5hbWUpO1xyXG4gICAgICAgIHZhciBvd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbmFtZSk7XHJcbiAgICAgICAgdmFyIHNldHRlckV2ZW50ID0gbmV3IFByb3BlcnR5RXZlbnQoKTtcclxuICAgICAgICB2YXIgZ2V0dGVyRXZlbnQgPSBuZXcgUHJvcGVydHlFdmVudCgpO1xyXG4gICAgICAgIC8vYWNjZXNzb3JzIGRvZXNuJ3QgZXhpc3RzXHJcbiAgICAgICAgaWYgKG93blByb3BlcnR5RGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkICYmIHByb3RvUHJvcGVydHlEZXNjcmlwdG9yID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3Byb3RvdHlwZSBhY2Nlc3NvclxyXG4gICAgICAgIGlmIChvd25Qcm9wZXJ0eURlc2NyaXB0b3IgPT0gdW5kZWZpbmVkICYmIHByb3RvUHJvcGVydHlEZXNjcmlwdG9yICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHByb3RvUHJvcGVydHlEZXNjcmlwdG9yLmdldC5jYWxsKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF92YWwgPSBnZXQodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBnZXR0ZXJFdmVudC5yYWlzZSh7IHZhbCwgX3ZhbCB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZhbDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXQodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF92YWwgPSBzZXQuY2FsbCh0aGlzLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdmFsICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG9Qcm9wZXJ0eURlc2NyaXB0b3Iuc2V0LmNhbGwodGFyZ2V0LCBfdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0ZXJFdmVudC5yYWlzZSh7IHZhbCwgX3ZhbCB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRhcmdldFtcIiNldmVudDpzZXRbXCIgKyBuYW1lICsgXCJdXCJdID0gc2V0dGVyRXZlbnQ7XHJcbiAgICAgICAgICAgIHRhcmdldFtcIiNldmVudDpnZXRbXCIgKyBuYW1lICsgXCJdXCJdID0gZ2V0dGVyRXZlbnQ7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy9vd24gYWNjZXNzb3IgZXhpc3RzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG93blByb3BlcnR5RGVzY3JpcHRvci52YWx1ZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gZ2V0KG93blByb3BlcnR5RGVzY3JpcHRvci5nZXQuY2FsbCh0YXJnZXQpKTsgfSxcclxuICAgICAgICAgICAgICAgIHNldCh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3ZhbCA9IHNldC5jYWxsKHRoaXMsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF92YWwgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25Qcm9wZXJ0eURlc2NyaXB0b3Iuc2V0LmNhbGwodGFyZ2V0LCBfdmFsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vYWNjZXNzb3IgZG9lc24ndCBleGlzdHNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleGVyID0gU3ltYm9sKG5hbWUpO1xyXG4gICAgICAgICAgICB0YXJnZXRbaW5kZXhlcl0gPSB0YXJnZXRbbmFtZV07XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcclxuICAgICAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gdGFyZ2V0W2luZGV4ZXJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfdmFsID0gZ2V0KHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0dGVyRXZlbnQucmFpc2UoeyB2YWwsIF92YWwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92YWw7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0KHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdmFsID0gc2V0LmNhbGwodGhpcywgdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3ZhbCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtpbmRleGVyXSA9IHNldChfdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0ZXJFdmVudC5yYWlzZSh7IHZhbCwgX3ZhbCB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRhcmdldFtcIiNldmVudDpzZXRbXCIgKyBuYW1lICsgXCJdXCJdID0gc2V0dGVyRXZlbnQ7XHJcbiAgICAgICAgICAgIHRhcmdldFtcIiNldmVudDpnZXRbXCIgKyBuYW1lICsgXCJdXCJdID0gZ2V0dGVyRXZlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUV2ZW50IGV4dGVuZHMgRXZlbnQge1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUFjY2Vzc29yIHtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9wZXJ0eS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yZWZsZWN0aW9uL1Byb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSVZhbGlkYXRpbmdSZXBvcnRlciB7XHJcbiAgICByZXBvcnQodmlld0RPTSwgdmFsaWRhdGluZ1Jlc3VsdCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJVmFsaWRhdGluZ1JlcG9ydGVyLnJlcG9ydFwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWl2YWxpZGF0YXRpbmdyZXBvcnRlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92YWxpZGF0aW5nL3JlcG9ydGVyL2ludGVyZmFjZXMvaXZhbGlkYXRhdGluZ3JlcG9ydGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUxvZ2dlclwiO1xyXG5leHBvcnQgY2xhc3MgQ29uc29sZUxvZ2dlciBleHRlbmRzIElMb2dnZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLmxvZ09mbG9nID0gXCJcIjtcclxuICAgIH1cclxuICAgIGxvZyhlcnIpIHtcclxuICAgICAgICB0aGlzLmxvZ09mbG9nICs9IGVyci5tZXNzYWdlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gZXJyb3I6IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ09mbG9nO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbnNvbGVMb2dnZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXhjZXB0aW9ucy9sb2dnaW5nL2NvbmNyZXRlL0NvbnNvbGVMb2dnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
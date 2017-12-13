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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coherence_concrete_InMemoryContainer__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backend_concrete_ajax_AjaxCommunicator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exceptions_runtime_InstantiatedException__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_concrete_Html5HistoryAPI__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exceptions_logging_concrete_ConsoleLogger__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__backend_concrete_ajax_AjaxRequest__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing_concrete_BasicRouter__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__states_interfaces_IStateManager__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__storage_concrete_LocalStorage__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__templating_concrete_mustache_ClientTemplateEngine__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__validating_reporter_concrete_NotifyValidatingReporter__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__viewbinding_concrete_BaseViewBinder__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__binding_concrete_BaseFieldBinding__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__binding_concrete_BaseClickBinding__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__binding_concrete_BaseInputBinding__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__binding_concrete_BaseCollectionBinding__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__backend_interfaces_ICommunicator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__history_interfaces_IHistory__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__exceptions_logging_interfaces_ILogger__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__backend_interfaces_IRequest__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__routing_interfaces_IRouter__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__storage_interfaces_IStorage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__templating_interfaces_ITemplateEngine__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__validating_reporter_interfaces_IValidatatingReporter__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__viewbinding_interfaces_IViewBinder__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__binding_interfaces_ibinding__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__viewengine_interfaces_iviewengine__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__viewengine_concrete_BaseViewEngine__ = __webpack_require__(56);




























class App {
    constructor() {
        this.instantiated = false;
    }
    register(type, value) {
        return this["`container"].register(type, value);
    }
    resolve(type) {
        return this["`container"].resolve(type);
    }
    resolveAll(type) {
        return this["`container"].resolveAll(type);
    }
    release(type) {
        return this["`container"].release(type);
    }
    instantiate(type, params) {
        return this["`container"].instantiate(type, params);
    }
    all() {
        return this["`container"].all();
    }
    start(geranium) {
        if (this.instantiated) {
            throw new __WEBPACK_IMPORTED_MODULE_2__exceptions_runtime_InstantiatedException__["a" /* InstantiatedException */]("GeraniumApp.instantiate");
        }
        /** apply settings */
        Object.assign(geranium, geraniumDefault);
        /** apply container */
        this["`container"] = geranium.container ? new geranium.container() : new __WEBPACK_IMPORTED_MODULE_0__coherence_concrete_InMemoryContainer__["a" /* InMemoryContainer */]();
        /** register all settings */
        this.internalRegister(geranium);
        this.instantiated = true;
    }
    internalRegister(geranium) {
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_16__backend_interfaces_ICommunicator__["a" /* ICommunicator */], new geranium.communicator());
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_17__history_interfaces_IHistory__["a" /* IHistory */], new geranium.historyprovider());
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_18__exceptions_logging_interfaces_ILogger__["a" /* ILogger */], new geranium.logger());
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_19__backend_interfaces_IRequest__["a" /* IRequest */], new geranium.request());
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_20__routing_interfaces_IRouter__["a" /* IRouter */], new geranium.router());
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_7__states_interfaces_IStateManager__["a" /* IStateManager */], new geranium.statemanager());
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_21__storage_interfaces_IStorage__["a" /* IStorage */], new geranium.storage());
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_22__templating_interfaces_ITemplateEngine__["a" /* ITemplateEngine */], new geranium.templating());
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_23__validating_reporter_interfaces_IValidatatingReporter__["a" /* IValidatingReporter */], new geranium.validationreporter());
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_24__viewbinding_interfaces_IViewBinder__["a" /* IViewBinder */], new geranium.viewbinder());
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_26__viewengine_interfaces_iviewengine__["a" /* IViewEngine */], new geranium.viewengine());
        geranium.bindings.forEach(binding => {
            this["`container"].register(__WEBPACK_IMPORTED_MODULE_25__binding_interfaces_ibinding__["a" /* IBinding */], new binding());
        });
    }
}
App.containerProperty = "`GeraniumApp";
const geraniumDefault = {
    communicator: __WEBPACK_IMPORTED_MODULE_1__backend_concrete_ajax_AjaxCommunicator__["a" /* AjaxCommunicator */],
    historyprovider: __WEBPACK_IMPORTED_MODULE_3__history_concrete_Html5HistoryAPI__["a" /* Html5HistoryAPI */],
    logger: __WEBPACK_IMPORTED_MODULE_4__exceptions_logging_concrete_ConsoleLogger__["a" /* ConsoleLogger */],
    request: __WEBPACK_IMPORTED_MODULE_5__backend_concrete_ajax_AjaxRequest__["a" /* AjaxRequest */],
    router: __WEBPACK_IMPORTED_MODULE_6__routing_concrete_BasicRouter__["a" /* BasicRouter */],
    statemanager: __WEBPACK_IMPORTED_MODULE_0__coherence_concrete_InMemoryContainer__["a" /* InMemoryContainer */],
    storage: __WEBPACK_IMPORTED_MODULE_8__storage_concrete_LocalStorage__["a" /* LocalStorage */],
    templating: __WEBPACK_IMPORTED_MODULE_9__templating_concrete_mustache_ClientTemplateEngine__["a" /* ClientTemplateEngine */],
    validationreporter: __WEBPACK_IMPORTED_MODULE_10__validating_reporter_concrete_NotifyValidatingReporter__["a" /* NotifyValidatingReporter */],
    viewbinder: __WEBPACK_IMPORTED_MODULE_11__viewbinding_concrete_BaseViewBinder__["a" /* BaseViewBinder */],
    viewengine: __WEBPACK_IMPORTED_MODULE_27__viewengine_concrete_BaseViewEngine__["a" /* BaseViewEngine */],
    bindings: [
        __WEBPACK_IMPORTED_MODULE_12__binding_concrete_BaseFieldBinding__["a" /* BaseFieldBinding */],
        __WEBPACK_IMPORTED_MODULE_14__binding_concrete_BaseInputBinding__["a" /* BaseInputBinding */],
        __WEBPACK_IMPORTED_MODULE_13__binding_concrete_BaseClickBinding__["a" /* BaseClickBinding */],
        __WEBPACK_IMPORTED_MODULE_15__binding_concrete_BaseCollectionBinding__["a" /* BaseCollectionBinding */]
    ]
};
function getApp() {
    if (!window[App.containerProperty]) {
        window[App.containerProperty] = new App();
    }
    return window[App.containerProperty];
}
/** Application intance with in-build container */
var GeraniumApp = getApp();
/** Application intance with in-build container */
/* harmony default export */ __webpack_exports__["a"] = (GeraniumApp);
//# sourceMappingURL=App.js.map

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Exception__ = __webpack_require__(7);

class InterfaceUsingException extends __WEBPACK_IMPORTED_MODULE_0__Exception__["a" /* Exception */] {
    constructor(msg) {
        msg += "InterfaceUsingException: you can not use interface-like class!";
        super(msg);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InterfaceUsingException;

//# sourceMappingURL=InterfaceUsingException.js.map

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export settings */
/* harmony export (immutable) */ __webpack_exports__["c"] = routes;
/* unused harmony export urlFromCtor */
/* unused harmony export routed */
/* harmony export (immutable) */ __webpack_exports__["a"] = routeignore;
/* harmony export (immutable) */ __webpack_exports__["b"] = routeroot;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contracts_Route__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contracts_RouteContext__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__declare_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__ = __webpack_require__(0);




var _ignoredRoutes = [];
var _routes = [];
var settings = { parameterFullUrl: false };
function routes() {
    return _routes.slice();
}
function urlFromCtor(ctor, params) {
    var instance = __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__["a" /* default */].instantiate(ctor);
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
    if (!_ignoredRoutes) {
        _ignoredRoutes = [];
    }
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
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IBinding {
    bind(objectDOM, model) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IBinding.bind"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IBinding;

//# sourceMappingURL=ibinding.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_abstract_View__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__ = __webpack_require__(0);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class IViewEngine {
    execute(context) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IViewEngine.execute"); }
    /**
     * return complete rendered view
     * @param selector
     */
    static ViewEngineView(iviewed, selector) {
        return __awaiter(this, void 0, void 0, function* () {
            var view;
            var viewctr = iviewed.view();
            const isString = typeof viewctr === "string";
            if (isString || !!viewctr["%selector"]) {
                const args = [selector];
                if (isString) {
                    args.push(viewctr);
                }
                let instView = __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__["a" /* default */].instantiate(EmptyView, args);
                yield instView.render();
                view = instView;
            }
            else {
                view = __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__["a" /* default */].instantiate(viewctr);
            }
            view.data = iviewed;
            return view;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IViewEngine;

class EmptyView extends __WEBPACK_IMPORTED_MODULE_1__view_abstract_View__["a" /* View */] {
    declare() { return undefined; }
}
//# sourceMappingURL=iviewengine.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class ICommunicator {
    send(data) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ICommunicator.send"); }
    recive() { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ICommunicator.recive"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ICommunicator;

//# sourceMappingURL=ICommunicator.js.map

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IHistory {
    extend(hitem) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IHistory.extend"); }
    restore(state) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IHistory.restore"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IHistory;

//# sourceMappingURL=IHistory.js.map

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IRouter {
    get routes() { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IRouter.routes"); }
    routeByUrl(url) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IRouter.routeByUrl"); }
    route(current) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IRouter.route"); }
    routearea() { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IRouter.routearea"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IRouter;

//# sourceMappingURL=IRouter.js.map

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coherence_InterfaceUsingException__ = __webpack_require__(1);

class ILogger {
    log(err) { throw new __WEBPACK_IMPORTED_MODULE_0__coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ILogger.log"); }
    get() { throw new __WEBPACK_IMPORTED_MODULE_0__coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ILogger.get"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ILogger;

//# sourceMappingURL=ILogger.js.map

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IViewBinder {
    bind(context) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IViewBinder.bind"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IViewBinder;

//# sourceMappingURL=IViewBinder.js.map

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Exception__ = __webpack_require__(7);

class CommunicationException extends __WEBPACK_IMPORTED_MODULE_0__Exception__["a" /* Exception */] {
    constructor(msg) {
        super("CommunicationException:" + msg);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CommunicationException;

//# sourceMappingURL=CommunicationException.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declare_array__ = __webpack_require__(3);
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
    __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__["a" /* routeignore */]
], Event);

//# sourceMappingURL=Event.js.map

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coherence_concrete_InMemoryContainer__ = __webpack_require__(21);

class IStateManager extends __WEBPACK_IMPORTED_MODULE_0__coherence_concrete_InMemoryContainer__["a" /* InMemoryContainer */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IStateManager;

//# sourceMappingURL=IStateManager.js.map

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class ITemplateEngine {
    parse(template) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ITemplateEngine.parse"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ITemplateEngine;

//# sourceMappingURL=ITemplateEngine.js.map

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IValidatingReporter {
    report(viewDOM, validatingResult) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IValidatingReporter.report"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IValidatingReporter;

//# sourceMappingURL=IValidatatingReporter.js.map

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__behaviors_events_abstract_Event__ = __webpack_require__(13);

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

class PropertyEvent extends __WEBPACK_IMPORTED_MODULE_0__behaviors_events_abstract_Event__["a" /* Event */] {
}
/* unused harmony export PropertyEvent */

class PropertyAccessor {
}
/* unused harmony export PropertyAccessor */

//# sourceMappingURL=Property.js.map

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseBinding__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extensions_HtmlElementExtensions__ = __webpack_require__(25);


class BaseByAttributeBinding extends __WEBPACK_IMPORTED_MODULE_0__BaseBinding__["a" /* BaseBinding */] {
    clear(DOMObject) {
        DOMObject.removeAttribute(this.attribute);
    }
    detection(DOM) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__extensions_HtmlElementExtensions__["a" /* findAndFilter */])(DOM, '[' + this.attribute + ']');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseByAttributeBinding;

//# sourceMappingURL=BaseByAttributeBinding.js.map

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IRequest {
    send(data) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IRequest.send"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IRequest;

//# sourceMappingURL=IRequest.js.map

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Route {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Route;

//# sourceMappingURL=Route.js.map

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declare_array__ = __webpack_require__(3);

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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class HistoryItem {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HistoryItem;

//# sourceMappingURL=HistoryItem.js.map

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IStorage {
    add(model) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IStorage.add"); }
    remove(id) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IStorage.remove"); }
    get(id) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IStorage.get"); }
    all() { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IStorage.all"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IStorage;

//# sourceMappingURL=IStorage.js.map

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extensions_HtmlElementExtensions__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_binding__ = __webpack_require__(50);


class BaseBinding extends __WEBPACK_IMPORTED_MODULE_1__abstract_binding__["a" /* Binding */] {
    detection(DOM) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__extensions_HtmlElementExtensions__["a" /* findAndFilter */])(DOM, this.attribute);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseBinding;

//# sourceMappingURL=BaseBinding.js.map

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findAndFilter;
function findAndFilter(root, query) {
    return Array.prototype.slice.call(root.querySelectorAll(query), 0);
}
//# sourceMappingURL=HtmlElementExtensions.js.map

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class StringHelper {
    static replaceAll(str, search, replacement) {
        return str.replace(new RegExp(search, 'g'), replacement);
    }
    static random(length) {
        var chars = 'abcdefghijkl0123456789mnopqrstuvwxyz';
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    static randomize(str) {
        return str + this.random(6);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StringHelper;

//# sourceMappingURL=string.js.map

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__binding_interfaces_ibinding__ = __webpack_require__(4);


class BindContext {
    constructor(viewDOM, bindingFlags) {
        this.viewDOM = viewDOM;
        if (!bindingFlags) {
            bindingFlags = __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__["a" /* default */].resolveAll(__WEBPACK_IMPORTED_MODULE_1__binding_interfaces_ibinding__["a" /* IBinding */]);
        }
        this.bindingFlags = bindingFlags;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BindContext;

//# sourceMappingURL=BindContext.js.map

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_app__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__ = __webpack_require__(0);


__WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__["a" /* default */].start({});
new __WEBPACK_IMPORTED_MODULE_0__components_app__["a" /* App */]();
//# sourceMappingURL=index.js.map

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_abstract_ViewModel__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_routing_concrete_decorators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_geranium_structures_Promised__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_geranium_viewDOM_abstract_ViewDOM__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let App = class App extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_abstract_ViewModel__["a" /* ViewModel */] {
    view() {
        return Header;
    }
    documentTitle() {
        return 'Chocolatium | Home';
    }
};
App = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_routing_concrete_decorators__["b" /* routeroot */]
], App);

class Header extends __WEBPACK_IMPORTED_MODULE_3__node_modules_geranium_viewDOM_abstract_ViewDOM__["a" /* ViewDOM */] {
    DOM() {
        return Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_geranium_structures_Promised__["a" /* promised */])(document.querySelector(".page1"));
    }
}
//# sourceMappingURL=app.js.map

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewState__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_iviewengine__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_decorators_history__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_contracts_HistoryItem__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_interfaces_IHistory__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__runtime_concrete_App__ = __webpack_require__(0);
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
                __WEBPACK_IMPORTED_MODULE_6__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_5__history_interfaces_IHistory__["a" /* IHistory */]).extend(_history);
            }
            delete this['#routed'];
            if (this.statefull) {
                _super("show").call(this, selector);
            }
            else {
                yield __WEBPACK_IMPORTED_MODULE_6__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_iviewengine__["a" /* IViewEngine */]).execute({
                    iViewed: this,
                    selector: selector
                });
            }
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
    __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__["a" /* routeignore */]
], ViewModel);

//# sourceMappingURL=ViewModel.js.map

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class RouteContext {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RouteContext;

//# sourceMappingURL=RouteContext.js.map

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ICommunicator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exceptions_backend_CommunicationException__ = __webpack_require__(12);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class AjaxCommunicator extends __WEBPACK_IMPORTED_MODULE_0__interfaces_ICommunicator__["a" /* ICommunicator */] {
    send(data) {
        this.validate(data);
        return new Promise((resolve, reject) => {
            this.innerPromise = new Promise((resolve, reject) => {
                try {
                    let xhr = new XMLHttpRequest();
                    this.setContentType(data, xhr);
                    xhr.open(data.method, data.url, data.async, data.user, data.pasw);
                    xhr.onload = function () {
                        if (xhr.status >= 200 && xhr.status < 400) {
                            resolve(xhr.responseText);
                        }
                        else {
                            reject(`${xhr.status}: ${xhr.statusText}`);
                        }
                    };
                    xhr.onerror = function () {
                        reject(`${xhr.status}: ${xhr.statusText}`);
                    };
                }
                catch (ex) {
                    throw new __WEBPACK_IMPORTED_MODULE_1__exceptions_backend_CommunicationException__["a" /* CommunicationException */](ex);
                }
            });
        });
    }
    recive() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.innerPromise;
        });
    }
    validate(data) {
        if (!data.method || !data.url) {
            throw new __WEBPACK_IMPORTED_MODULE_1__exceptions_backend_CommunicationException__["a" /* CommunicationException */]("XHR request must declare method and url!");
        }
    }
    setContentType(opt, xhr) {
        if (opt.method != "GET") {
            xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded; charset=UTF-8');
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AjaxCommunicator;

//# sourceMappingURL=AjaxCommunicator.js.map

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Exception__ = __webpack_require__(7);

class InstantiatedException extends __WEBPACK_IMPORTED_MODULE_0__Exception__["a" /* Exception */] {
    constructor(msg) {
        super("InstantiatedException: instance already instantiated, you can change instance options only at application start\n" + msg);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InstantiatedException;

//# sourceMappingURL=InstantiatedException.js.map

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IHistory__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_interfaces_IRouter__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__ = __webpack_require__(0);



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
        __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_0__interfaces_IHistory__["a" /* IHistory */]).restore(eventState.state);
    });
}
//# sourceMappingURL=Html5HistoryAPI.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ILogger__ = __webpack_require__(10);

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

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_StatefullRequest__ = __webpack_require__(37);

class AjaxRequest extends __WEBPACK_IMPORTED_MODULE_0__abstract_StatefullRequest__["a" /* StatefullRequest */] {
    constructor(error) {
        super();
        this.catchPromise = error;
    }
    catchPromise(err) { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AjaxRequest;

//# sourceMappingURL=AjaxRequest.js.map

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventRequest__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_interfaces_IStateManager__ = __webpack_require__(14);


class StatefullRequest extends __WEBPACK_IMPORTED_MODULE_0__EventRequest__["a" /* EventRequest */] {
    constructor() {
        super();
        this.bind = (super_send) => {
            const states = this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_1__states_interfaces_IStateManager__["a" /* IStateManager */]).all();
            if (states != null || states.length != 0) {
                return;
            }
            states.filter(x => { if (x.synchronizer)
                return true;
            else
                return false; })
                .forEach(state => {
                super_send(state.synchronizer)
                    .then(x => { state.obtain(x); });
            });
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = StatefullRequest;

//# sourceMappingURL=StatefullRequest.js.map

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Request__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ICommunicator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exceptions_backend_CommunicationException__ = __webpack_require__(12);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class EventRequest extends __WEBPACK_IMPORTED_MODULE_0__Request__["a" /* Request */] {
    /**
     * send request to server
     * @param data
     * @param stateless your request not raise state-sync event
     */
    send(data, stateless = false) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const communicator = this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_1__interfaces_ICommunicator__["a" /* ICommunicator */]);
                yield communicator.send(data);
                const response = communicator.recive();
                if (!stateless) {
                    this.raise();
                }
                return response;
            }
            catch (ex) {
                this.catch(new __WEBPACK_IMPORTED_MODULE_2__exceptions_backend_CommunicationException__["a" /* CommunicationException */](ex));
            }
        });
    }
    raise() {
        super.raise(super.send);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventRequest;

//# sourceMappingURL=EventRequest.js.map

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ICommunicator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__behaviors_events_abstract_Event__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exceptions_logging_interfaces_ILogger__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exceptions_backend_CommunicationException__ = __webpack_require__(12);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class Request extends __WEBPACK_IMPORTED_MODULE_1__behaviors_events_abstract_Event__["a" /* Event */] {
    send(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const communicator = this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_0__interfaces_ICommunicator__["a" /* ICommunicator */]);
            try {
                yield communicator.send(data);
                return communicator.recive();
            }
            catch (ex) {
                this.catch(new __WEBPACK_IMPORTED_MODULE_3__exceptions_backend_CommunicationException__["a" /* CommunicationException */](ex));
            }
        });
    }
    catch(err) {
        if (this.catchPromise) {
            this.catchPromise(err);
        }
        const logger = this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_2__exceptions_logging_interfaces_ILogger__["a" /* ILogger */]);
        if (logger) {
            logger.log(err);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Request;

//# sourceMappingURL=Request.js.map

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_Router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_contracts_HistoryItem__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_interfaces_IHistory__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__ = __webpack_require__(0);




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
        var routed = __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__["a" /* default */].instantiate(current.ctor, current.params);
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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IRouter__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contracts_RouteMatch__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__concrete_decorators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__declare_array__ = __webpack_require__(3);





class Router extends __WEBPACK_IMPORTED_MODULE_0__interfaces_IRouter__["a" /* IRouter */] {
    get routes() {
        return Object(__WEBPACK_IMPORTED_MODULE_3__concrete_decorators__["c" /* routes */])();
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
        var router = __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_0__interfaces_IRouter__["a" /* IRouter */]);
        var route = router.routeByUrl(window.location.pathname);
        router.route(route);
    });
}
//# sourceMappingURL=Router.js.map

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Route__ = __webpack_require__(20);

class RouteMatch extends __WEBPACK_IMPORTED_MODULE_0__Route__["a" /* Route */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RouteMatch;

//# sourceMappingURL=RouteMatch.js.map

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_BaseStorage__ = __webpack_require__(44);

class LocalStorage extends __WEBPACK_IMPORTED_MODULE_0__abstract_BaseStorage__["a" /* BaseStorage */] {
    write(data, storageName) {
        localStorage.setItem(storageName, JSON.stringify(data));
    }
    read(storageName) {
        return JSON.parse(localStorage.getItem(storageName));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LocalStorage;

//# sourceMappingURL=LocalStorage.js.map

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IStorage__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declare_array__ = __webpack_require__(3);


class BaseStorage extends __WEBPACK_IMPORTED_MODULE_0__interfaces_IStorage__["a" /* IStorage */] {
    constructor(name) {
        super();
        this.storageName = name;
    }
    add(model) {
        this.collection.push(model);
        return true;
    }
    remove(id) {
        var model = this.searchFor(id);
        if (model != null) {
            this.write(__WEBPACK_IMPORTED_MODULE_1__declare_array__["a" /* ArrayHelper */].remove(this.collection, model), this.storageName);
        }
        return true;
    }
    get(id) {
        return this.searchFor(id);
    }
    all() {
        return this.read(this.storageName);
    }
    get collection() {
        if (!this.read(this.storageName)) {
            this.write(new Array(), this.storageName);
        }
        return this.read(this.storageName);
    }
    searchFor(id) {
        var enumerable = this.collection
            .filter(x => x.id == id);
        if (enumerable.length > 0) {
            return enumerable[0];
        }
        return null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseStorage;

//# sourceMappingURL=BaseStorage.js.map

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITemplateEngine__ = __webpack_require__(15);

class ClientTemplateEngine extends __WEBPACK_IMPORTED_MODULE_0__interfaces_ITemplateEngine__["a" /* ITemplateEngine */] {
    parse(template) {
        return new Promise((resolve) => resolve(template.template));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClientTemplateEngine;

//# sourceMappingURL=ClientTemplateEngine.js.map

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IValidatatingReporter__ = __webpack_require__(16);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class NotifyValidatingReporter extends __WEBPACK_IMPORTED_MODULE_0__interfaces_IValidatatingReporter__["a" /* IValidatingReporter */] {
    report(viewDOM, validatingResult) {
        return __awaiter(this, void 0, void 0, function* () {
            validatingResult.errors.forEach(x => {
                console.error('VALLIDATING_ERR [' + x.name + ']:' + x.message);
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NotifyValidatingReporter;

//# sourceMappingURL=NotifyValidatingReporter.js.map

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_ViewBinder__ = __webpack_require__(48);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class BaseViewBinder extends __WEBPACK_IMPORTED_MODULE_0__abstract_ViewBinder__["a" /* ViewBinder */] {
    binding(view, binding) {
        return __awaiter(this, void 0, void 0, function* () {
            return binding.bind(yield view.DOM(), view.data);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseViewBinder;

//# sourceMappingURL=BaseViewBinder.js.map

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewBinder__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_Property__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validating_reporter_interfaces_IValidatatingReporter__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__declare_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runtime_concrete_App__ = __webpack_require__(0);
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
            yield this.exec(context.viewDOM, context.bindingFlags);
            this.valid(context.viewDOM);
            return context.viewDOM;
        });
    }
    valid(view) {
        var vm = view.data;
        if (vm.validators) {
            var validatedProperties = __WEBPACK_IMPORTED_MODULE_3__declare_array__["a" /* ArrayHelper */].groupBy(vm.validators, 'validatedPropertyName');
            validatedProperties.forEach(validators => {
                var validProp = validators[0].validatedPropertyName;
                __WEBPACK_IMPORTED_MODULE_1__reflection_Property__["a" /* Property */].redefine(view.data, validProp, (val) => { return val; }, function (val) {
                    let validationFault = false;
                    this.validators.filter(x => x.validatedPropertyName === validProp).forEach(validator => {
                        var validation = validator.validate(val, this.clone());
                        if (!validation.success) {
                            validationFault = true;
                            __WEBPACK_IMPORTED_MODULE_4__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_2__validating_reporter_interfaces_IValidatatingReporter__["a" /* IValidatingReporter */]).report(view, validation);
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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_BaseByAttributeBinding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_Property__ = __webpack_require__(17);


class BaseFieldBinding extends __WEBPACK_IMPORTED_MODULE_0__base_BaseByAttributeBinding__["a" /* BaseByAttributeBinding */] {
    get attribute() { return 'data-field'; }
    binding(DOMObject, model) {
        let value = DOMObject.getAttribute(this.attribute);
        __WEBPACK_IMPORTED_MODULE_1__reflection_Property__["a" /* Property */].redefine(model, value, (val) => val, (val) => {
            return val;
        });
        var event = "#event:set[" + value + "]";
        if (model[event]) {
            model[event].bind = () => {
                DOMObject.innerHTML = model[value];
            };
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseFieldBinding;

//# sourceMappingURL=BaseFieldBinding.js.map

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ibinding__ = __webpack_require__(4);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Binding extends __WEBPACK_IMPORTED_MODULE_0__interfaces_ibinding__["a" /* IBinding */] {
    bind(DOM, model) {
        return __awaiter(this, void 0, void 0, function* () {
            var DOMObjects = this.detection(DOM);
            DOMObjects.forEach(v => {
                this.binding(v, model);
                this.clear(v);
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Binding;

//# sourceMappingURL=Binding.js.map

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_BaseByAttributeBinding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declare_string__ = __webpack_require__(26);


class BaseClickBinding extends __WEBPACK_IMPORTED_MODULE_0__base_BaseByAttributeBinding__["a" /* BaseByAttributeBinding */] {
    get attribute() { return 'onclick'; }
    binding(DOMObject, model) {
        let value = DOMObject.getAttribute(this.attribute);
        var processed = this.splitMethodAndParams(value);
        var method = model[processed.method];
        if (method != null) {
            if (typeof method == 'function') {
                DOMObject.addEventListener("click", e => method.apply(model, processed.params));
            }
        }
    }
    splitMethodAndParams(value) {
        value = __WEBPACK_IMPORTED_MODULE_1__declare_string__["a" /* StringHelper */].replaceAll(value, ';', '');
        var indexOfBracket = value.indexOf('(');
        if (indexOfBracket == -1)
            return {
                method: value,
                params: null
            };
        var params = this.parseParams(value.substring(indexOfBracket));
        return {
            method: value.substring(0, indexOfBracket),
            params: params
        };
    }
    parseParams(params) {
        if (params == "()")
            return null;
        var withoutBrackets = __WEBPACK_IMPORTED_MODULE_1__declare_string__["a" /* StringHelper */].replaceAll(__WEBPACK_IMPORTED_MODULE_1__declare_string__["a" /* StringHelper */].replaceAll(params, '\\(', ''), '\\)', '');
        var _arguments = [];
        withoutBrackets.split(',').forEach(x => {
            try {
                var object = JSON.parse(x);
                _arguments.push(object);
            }
            catch (e) {
                _arguments.push(x);
            }
        });
        return _arguments;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseClickBinding;

//# sourceMappingURL=BaseClickBinding.js.map

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_BaseBinding__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_Property__ = __webpack_require__(17);


class BaseInputBinding extends __WEBPACK_IMPORTED_MODULE_0__base_BaseBinding__["a" /* BaseBinding */] {
    get attribute() { return 'input'; }
    binding(DOMObject, model) {
        let value = DOMObject.getAttribute('name');
        __WEBPACK_IMPORTED_MODULE_1__reflection_Property__["a" /* Property */].redefine(model, value, (val) => val, (val) => {
            DOMObject.innerHTML = val;
            return val;
        });
        var event = "#event:set[" + value + "]";
        if (model[event]) {
            model[event].bind = () => {
                DOMObject.nodeValue = model[value];
            };
        }
        DOMObject.addEventListener("change", e => {
            model[value] = DOMObject.nodeValue;
        });
    }
    clear() { }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseInputBinding;

//# sourceMappingURL=BaseInputBinding.js.map

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_BaseByAttributeBinding__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ibinding__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_iviewengine__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewbinding_contracts_BindContext__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewbinding_interfaces_IViewBinder__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__declare_string__ = __webpack_require__(26);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class BaseCollectionBinding extends __WEBPACK_IMPORTED_MODULE_0__base_BaseByAttributeBinding__["a" /* BaseByAttributeBinding */] {
    get attribute() { return 'data-multiple'; }
    binding(DOMObject, model) {
        return __awaiter(this, void 0, void 0, function* () {
            var collection = model[DOMObject.getAttribute(this.attribute)];
            DOMObject.removeAttribute(this.attribute);
            const DOMCollection = new HTMLElement();
            if (collection == undefined || collection.length == 0) {
                DOMObject.remove();
                return;
            }
            var tpl = __WEBPACK_IMPORTED_MODULE_5__declare_string__["a" /* StringHelper */].replaceAll(__WEBPACK_IMPORTED_MODULE_5__declare_string__["a" /* StringHelper */].replaceAll(DOMObject.outerHTML, '\\[\\[', '{{'), '\\]\\]', '}}');
            let bindings = this["`container"].resolveAll(__WEBPACK_IMPORTED_MODULE_1__interfaces_ibinding__["a" /* IBinding */]).filter(x => x.constructor.name != this.constructor.name);
            for (var i = 0; i < collection.length; i++) {
                Object.assign(model, collection[i]);
                model.view = function () {
                    return tpl;
                };
                let _view = yield __WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_iviewengine__["a" /* IViewEngine */].ViewEngineView(model, '');
                let ctx = new __WEBPACK_IMPORTED_MODULE_3__viewbinding_contracts_BindContext__["a" /* BindContext */](_view, bindings);
                yield this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_4__viewbinding_interfaces_IViewBinder__["a" /* IViewBinder */]).bind(ctx);
                DOMCollection.appendChild(yield _view.DOM());
            }
            DOMObject.parentNode.replaceChild(DOMCollection, DOMObject);
            DOMObject = DOMCollection;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseCollectionBinding;

//# sourceMappingURL=BaseCollectionBinding.js.map

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templating_contracts_Template__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exceptions_Exception__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templating_interfaces_ITemplateEngine__ = __webpack_require__(15);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class View extends __WEBPACK_IMPORTED_MODULE_0__templating_contracts_Template__["a" /* Template */] {
    constructor() {
        super();
        this.protectRender(arguments[1]);
        this["%selector"] = arguments[0];
    }
    DOM() {
        return __awaiter(this, void 0, void 0, function* () {
            let view = this;
            if (!this._rendered) {
                view = yield this.render();
            }
            const div = document.createElement("div");
            div.innerHTML = view.template;
            return div;
        });
    }
    get selector() {
        return this["%selector"];
    }
    protectRender(html) {
        if (!this.template) {
            this.template = html;
        }
        if (!this.template) {
            throw new __WEBPACK_IMPORTED_MODULE_1__exceptions_Exception__["a" /* Exception */]('view template is empty!');
        }
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
            this.template = yield engine.parse(this);
            this._rendered = true;
            return new Promise(resolve => resolve(this));
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View;

//# sourceMappingURL=view.js.map

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Template {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Template;

//# sourceMappingURL=template.js.map

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_ViewEngine__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exceptions_logging_interfaces_ILogger__ = __webpack_require__(10);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class BaseViewEngine extends __WEBPACK_IMPORTED_MODULE_0__abstract_ViewEngine__["a" /* ViewEngine */] {
    publish(view) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    const selector = view.selector;
                    const domLoaded = document.readyState === 'complete';
                    let element = document.querySelector(selector);
                    if (!element && !domLoaded) {
                        yield this.domLoaded(selector, view.dom);
                    }
                    else if (domLoaded && !element) {
                        throw new Error("Selector does not exists: " + selector);
                    }
                    else {
                        element.parentElement.replaceChild(view.dom, element);
                    }
                    resolve();
                }
                catch (ex) {
                    this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_1__exceptions_logging_interfaces_ILogger__["a" /* ILogger */]).log(ex);
                    reject(ex);
                }
            }));
        });
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
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_iviewengine__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contracts_executecontext__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewbinding_contracts_BindContext__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewbinding_interfaces_IViewBinder__ = __webpack_require__(11);
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
            var execCtx = new __WEBPACK_IMPORTED_MODULE_1__contracts_executecontext__["a" /* ExecuteContext */](context);
            var bindingContext = new __WEBPACK_IMPORTED_MODULE_2__viewbinding_contracts_BindContext__["a" /* BindContext */](view, execCtx.bindingFlags);
            var viewbinder = this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_3__viewbinding_interfaces_IViewBinder__["a" /* IViewBinder */]);
            yield viewbinder.bind(bindingContext);
            return this.publish({
                dom: yield view.DOM(),
                selector: context.selector
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewEngine;

//# sourceMappingURL=ViewEngine.js.map

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__binding_interfaces_ibinding__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__runtime_concrete_App__ = __webpack_require__(0);


class ExecuteContext {
    constructor(viewCtx, bindingFlags) {
        this.view = viewCtx.iViewed;
        this.selector = viewCtx.selector;
        if (!bindingFlags) {
            bindingFlags = __WEBPACK_IMPORTED_MODULE_1__runtime_concrete_App__["a" /* default */].resolveAll(__WEBPACK_IMPORTED_MODULE_0__binding_interfaces_ibinding__["a" /* IBinding */]);
        }
        this.bindingFlags = bindingFlags;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ExecuteContext;

//# sourceMappingURL=executecontext.js.map

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_State__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_concrete_decorators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_iviewengine__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__ = __webpack_require__(0);
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
                __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_iviewengine__["a" /* IViewEngine */]).execute({
                    iViewed: this,
                    selector: selector
                });
            }
        });
    }
};
ViewState = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__routing_concrete_decorators__["a" /* routeignore */]
], ViewState);

//# sourceMappingURL=ViewState.js.map

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Model__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_IStateManager__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_interfaces_IRequest__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runtime_concrete_App__ = __webpack_require__(0);
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
                const stateManager = __WEBPACK_IMPORTED_MODULE_4__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_2__interfaces_IStateManager__["a" /* IStateManager */]);
                const state = stateManager.resolve(this.constructor);
                if (!state) {
                    stateManager.register(this.constructor, this);
                }
            }
        });
    }
    static get(type) {
        return __awaiter(this, void 0, void 0, function* () {
            var state = __WEBPACK_IMPORTED_MODULE_4__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_2__interfaces_IStateManager__["a" /* IStateManager */]).resolve(type);
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
    __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__["a" /* routeignore */]
], State);

//# sourceMappingURL=State.js.map

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_cloning_decorators_ICloneable__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__behaviors_events_abstract_Event__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_interfaces_IRequest__ = __webpack_require__(19);
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




let Model = class Model extends __WEBPACK_IMPORTED_MODULE_2__behaviors_events_abstract_Event__["a" /* Event */] {
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
    __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__["a" /* routeignore */],
    __WEBPACK_IMPORTED_MODULE_1__reflection_cloning_decorators_ICloneable__["a" /* ICloneable */]
], Model);

//# sourceMappingURL=Model.js.map

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ICloneable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ICloner__ = __webpack_require__(63);


function ICloneable(constructor) {
    constructor.prototype.clone = function () {
        return __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_1__interfaces_ICloner__["a" /* ICloner */]).clone(this);
    };
}
//# sourceMappingURL=ICloneable.js.map

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class ICloner {
    clone(sample) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ICloner.clone"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ICloner;

//# sourceMappingURL=ICloner.js.map

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = is;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_interfaces_IRouter__ = __webpack_require__(9);


function is(constructor) {
    var router = __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_1__routing_interfaces_IRouter__["a" /* IRouter */]);
    return router.routes.filter(x => {
        var instance = new x.ctor();
        return instance.constructor.name == constructor.name;
    }).length > 0;
}
//# sourceMappingURL=history.js.map

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = promised;
function promised(value) {
    return new Promise((resolve, reject) => {
        try {
            resolve(value);
        }
        catch (error) {
            reject(error);
        }
    });
}
//# sourceMappingURL=Promised.js.map

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewDOM__ = __webpack_require__(67);

class ViewDOM extends __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewDOM__["a" /* IViewDOM */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewDOM;

//# sourceMappingURL=ViewDOM.js.map

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IViewDOM {
    DOM() { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IViewDOM.getViewDOM"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IViewDOM;

//# sourceMappingURL=IViewDOM.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWUyMWY5OTA2Njk3YjdlZWQ2YjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3J1bnRpbWUvY29uY3JldGUvQXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb25jcmV0ZS9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9kZWNsYXJlL2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2ludGVyZmFjZXMvaWJpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdlbmdpbmUvaW50ZXJmYWNlcy9pdmlld2VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmFja2VuZC9pbnRlcmZhY2VzL0lDb21tdW5pY2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvRXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9oaXN0b3J5L2ludGVyZmFjZXMvSUhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvaW50ZXJmYWNlcy9JUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2xvZ2dpbmcvaW50ZXJmYWNlcy9JTG9nZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3YmluZGluZy9pbnRlcmZhY2VzL0lWaWV3QmluZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2JhY2tlbmQvQ29tbXVuaWNhdGlvbkV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmVoYXZpb3JzL2V2ZW50cy9hYnN0cmFjdC9FdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vc3RhdGVzL2ludGVyZmFjZXMvSVN0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdGVtcGxhdGluZy9pbnRlcmZhY2VzL0lUZW1wbGF0ZUVuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmFsaWRhdGluZy9yZXBvcnRlci9pbnRlcmZhY2VzL0lWYWxpZGF0YXRpbmdSZXBvcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcmVmbGVjdGlvbi9Qcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9jb25jcmV0ZS9iYXNlL0Jhc2VCeUF0dHJpYnV0ZUJpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvaW50ZXJmYWNlcy9JUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb250cmFjdHMvUm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2NvaGVyZW5jZS9jb25jcmV0ZS9Jbk1lbW9yeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vaGlzdG9yeS9jb250cmFjdHMvSGlzdG9yeUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0b3JhZ2UvaW50ZXJmYWNlcy9JU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9jb25jcmV0ZS9iYXNlL0Jhc2VCaW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leHRlbnNpb25zL0h0bWxFbGVtZW50RXh0ZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZGVjbGFyZS9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdiaW5kaW5nL2NvbnRyYWN0cy9CaW5kQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3bW9kZWxzL2Fic3RyYWN0L1ZpZXdNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb250cmFjdHMvUm91dGVDb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iYWNrZW5kL2NvbmNyZXRlL2FqYXgvQWpheENvbW11bmljYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXhjZXB0aW9ucy9ydW50aW1lL0luc3RhbnRpYXRlZEV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vaGlzdG9yeS9jb25jcmV0ZS9IdG1sNUhpc3RvcnlBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvbG9nZ2luZy9jb25jcmV0ZS9Db25zb2xlTG9nZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iYWNrZW5kL2NvbmNyZXRlL2FqYXgvQWpheFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvYWJzdHJhY3QvU3RhdGVmdWxsUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmFja2VuZC9hYnN0cmFjdC9FdmVudFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvYWJzdHJhY3QvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb25jcmV0ZS9CYXNpY1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9hYnN0cmFjdC9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvY29udHJhY3RzL1JvdXRlTWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0b3JhZ2UvY29uY3JldGUvTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9zdG9yYWdlL2Fic3RyYWN0L0Jhc2VTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS90ZW1wbGF0aW5nL2NvbmNyZXRlL211c3RhY2hlL0NsaWVudFRlbXBsYXRlRW5naW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92YWxpZGF0aW5nL3JlcG9ydGVyL2NvbmNyZXRlL05vdGlmeVZhbGlkYXRpbmdSZXBvcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2JpbmRpbmcvY29uY3JldGUvQmFzZVZpZXdCaW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdiaW5kaW5nL2Fic3RyYWN0L1ZpZXdCaW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvQmFzZUZpZWxkQmluZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9hYnN0cmFjdC9iaW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2NvbmNyZXRlL0Jhc2VDbGlja0JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvQmFzZUlucHV0QmluZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9jb25jcmV0ZS9CYXNlQ29sbGVjdGlvbkJpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXcvYWJzdHJhY3QvVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdGVtcGxhdGluZy9jb250cmFjdHMvVGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdlbmdpbmUvY29uY3JldGUvQmFzZVZpZXdFbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdlbmdpbmUvYWJzdHJhY3QvVmlld0VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9jb250cmFjdHMvZXhlY3V0ZWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvYWJzdHJhY3QvVmlld1N0YXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9zdGF0ZXMvU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL21vZGVscy9Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcmVmbGVjdGlvbi9jbG9uaW5nL2RlY29yYXRvcnMvSUNsb25lYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcmVmbGVjdGlvbi9jbG9uaW5nL2ludGVyZmFjZXMvSUNsb25lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vaGlzdG9yeS9kZWNvcmF0b3JzL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0cnVjdHVyZXMvUHJvbWlzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdET00vYWJzdHJhY3QvVmlld0RPTS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld0RPTS9pbnRlcmZhY2VzL0lWaWV3RE9NLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0Q0QjtBQUNEO0FBQ0s7QUFDTjtBQUNGO0FBQ0Y7QUFDQTtBQUNFO0FBQ0Q7QUFDUTtBQUNJO0FBQ1Y7QUFDRTtBQUNBO0FBQ0E7QUFDSztBQUNSO0FBQ0w7QUFDRDtBQUNDO0FBQ0Q7QUFDQztBQUNPO0FBQ0k7QUFDUjtBQUNIO0FBQ0c7QUFDRztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCOzs7Ozs7OztBQzdHb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLG1EOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BnQjtBQUNPO0FBQ0Q7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsZ0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQzs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLG1DOzs7Ozs7Ozs7OztBQ25DaUI7QUFDSztBQUNIO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLHVDOzs7Ozs7Ozs7Ozs7QUNsQ2tCO0FBQ0c7QUFDckI7QUFDaUI7QUFDSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtDOzs7Ozs7OztBQzVDZ0I7QUFDaEI7QUFDQTtBQUFBO0FBQUE7QUFDQSxzQzs7Ozs7Ozs7QUNIc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSx3Qzs7Ozs7Ozs7O0FDVG1CO0FBQ0c7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsdUM7Ozs7Ozs7O0FDdkMwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLGdEOzs7Ozs7O0FDTkE7QUFBQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUFBO0FBQUE7QUFDQSxvRDs7Ozs7OztBQ2xCQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQUE7QUFBQTtBQUNBLDBDOzs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNzQjtBQUNIO0FBQ1c7QUFDUjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdJQUFrRSxZQUFZLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBO0FBQ0Esc0M7Ozs7Ozs7OztBQ2pEaUM7QUFDZDtBQUNuQjtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSw0Qzs7Ozs7OztBQ2pCQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUFBO0FBQUE7QUFDQSxtQzs7Ozs7Ozs7O0FDcEJpQztBQUNWO0FBQ3ZCO0FBQ0EscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEdBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSw0Qzs7Ozs7Ozs7O0FDN0NzQjtBQUNIO0FBQ25CO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxhQUFhO0FBQ2I7QUFBQTtBQUFBO0FBQ0EsNEM7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNpQztBQUNkO0FBQ0c7QUFDQTtBQUNBO0FBQ0M7QUFDdkI7QUFDQSxxQkFBcUIsd0JBQXdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBOQUF3RyxpQkFBaUI7QUFDekg7QUFDQSwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUFBO0FBQUE7QUFDQSxpRDs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ21CO0FBQ0M7QUFDTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsZ0M7Ozs7Ozs7QUN0REE7QUFDQTtBQUFBO0FBQUE7QUFDQSxvQzs7Ozs7Ozs7QUNGQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNxQjtBQUNIO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQUE7QUFBQTtBQUNBLDBDOzs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ3NCO0FBQ0c7QUFDSDtBQUNBO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBO0FBQ0Esc0M7Ozs7Ozs7OztBQzNCbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSwwQzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDZ0I7QUFDTTtBQUNBO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGNBQWM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNSLHFDOzs7Ozs7Ozs7Ozs7QUM5Q0E7QUFBQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ3NCO0FBQ047QUFDUTtBQUNMO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ1IsaUM7Ozs7Ozs7Ozs7O0FDaEVBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNzQjtBQUNEO0FBQ0w7QUFDRztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ1IsaUM7Ozs7Ozs7Ozs7QUNwREE7QUFDa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDOzs7Ozs7OztBQ1BrQztBQUNsQztBQUNBLG1CQUFtQiwySUFBb0Q7QUFDdkU7QUFBQTtBQUFBO0FBQ0EsbUM7Ozs7Ozs7Ozs7QUNKQTtBQUNrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUM7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9DOzs7Ozs7OztBQ1ZtQjtBQUNuQjtBQUNBO0FBQUE7QUFBQTtBQUNBLG1DOzs7Ozs7OztBQ0hrQztBQUNsQztBQUNBLFdBQVcsaUpBQTBEO0FBQ3JFO0FBQUE7QUFBQTtBQUNBLG9DIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZTIxZjk5MDY2OTdiN2VlZDZiMSIsImltcG9ydCB7IEluTWVtb3J5Q29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL2NvaGVyZW5jZS9jb25jcmV0ZS9Jbk1lbW9yeUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBBamF4Q29tbXVuaWNhdG9yIH0gZnJvbSBcIi4uLy4uL2JhY2tlbmQvY29uY3JldGUvYWpheC9BamF4Q29tbXVuaWNhdG9yXCI7XHJcbmltcG9ydCB7IEluc3RhbnRpYXRlZEV4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL3J1bnRpbWUvSW5zdGFudGlhdGVkRXhjZXB0aW9uXCI7XHJcbmltcG9ydCB7IEh0bWw1SGlzdG9yeUFQSSB9IGZyb20gXCIuLi8uLi9oaXN0b3J5L2NvbmNyZXRlL0h0bWw1SGlzdG9yeUFQSVwiO1xyXG5pbXBvcnQgeyBDb25zb2xlTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvbG9nZ2luZy9jb25jcmV0ZS9Db25zb2xlTG9nZ2VyXCI7XHJcbmltcG9ydCB7IEFqYXhSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL2JhY2tlbmQvY29uY3JldGUvYWpheC9BamF4UmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBCYXNpY1JvdXRlciB9IGZyb20gXCIuLi8uLi9yb3V0aW5nL2NvbmNyZXRlL0Jhc2ljUm91dGVyXCI7XHJcbmltcG9ydCB7IElTdGF0ZU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vc3RhdGVzL2ludGVyZmFjZXMvSVN0YXRlTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vLi4vc3RvcmFnZS9jb25jcmV0ZS9Mb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgQ2xpZW50VGVtcGxhdGVFbmdpbmUgfSBmcm9tIFwiLi4vLi4vdGVtcGxhdGluZy9jb25jcmV0ZS9tdXN0YWNoZS9DbGllbnRUZW1wbGF0ZUVuZ2luZVwiO1xyXG5pbXBvcnQgeyBOb3RpZnlWYWxpZGF0aW5nUmVwb3J0ZXIgfSBmcm9tIFwiLi4vLi4vdmFsaWRhdGluZy9yZXBvcnRlci9jb25jcmV0ZS9Ob3RpZnlWYWxpZGF0aW5nUmVwb3J0ZXJcIjtcclxuaW1wb3J0IHsgQmFzZVZpZXdCaW5kZXIgfSBmcm9tIFwiLi4vLi4vdmlld2JpbmRpbmcvY29uY3JldGUvQmFzZVZpZXdCaW5kZXJcIjtcclxuaW1wb3J0IHsgQmFzZUZpZWxkQmluZGluZyB9IGZyb20gXCIuLi8uLi9iaW5kaW5nL2NvbmNyZXRlL0Jhc2VGaWVsZEJpbmRpbmdcIjtcclxuaW1wb3J0IHsgQmFzZUNsaWNrQmluZGluZyB9IGZyb20gXCIuLi8uLi9iaW5kaW5nL2NvbmNyZXRlL0Jhc2VDbGlja0JpbmRpbmdcIjtcclxuaW1wb3J0IHsgQmFzZUlucHV0QmluZGluZyB9IGZyb20gXCIuLi8uLi9iaW5kaW5nL2NvbmNyZXRlL0Jhc2VJbnB1dEJpbmRpbmdcIjtcclxuaW1wb3J0IHsgQmFzZUNvbGxlY3Rpb25CaW5kaW5nIH0gZnJvbSBcIi4uLy4uL2JpbmRpbmcvY29uY3JldGUvQmFzZUNvbGxlY3Rpb25CaW5kaW5nXCI7XHJcbmltcG9ydCB7IElDb21tdW5pY2F0b3IgfSBmcm9tIFwiLi4vLi4vYmFja2VuZC9pbnRlcmZhY2VzL0lDb21tdW5pY2F0b3JcIjtcclxuaW1wb3J0IHsgSUhpc3RvcnkgfSBmcm9tIFwiLi4vLi4vaGlzdG9yeS9pbnRlcmZhY2VzL0lIaXN0b3J5XCI7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9sb2dnaW5nL2ludGVyZmFjZXMvSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBJUmVxdWVzdCB9IGZyb20gXCIuLi8uLi9iYWNrZW5kL2ludGVyZmFjZXMvSVJlcXVlc3RcIjtcclxuaW1wb3J0IHsgSVJvdXRlciB9IGZyb20gXCIuLi8uLi9yb3V0aW5nL2ludGVyZmFjZXMvSVJvdXRlclwiO1xyXG5pbXBvcnQgeyBJU3RvcmFnZSB9IGZyb20gXCIuLi8uLi9zdG9yYWdlL2ludGVyZmFjZXMvSVN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgSVRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4uLy4uL3RlbXBsYXRpbmcvaW50ZXJmYWNlcy9JVGVtcGxhdGVFbmdpbmVcIjtcclxuaW1wb3J0IHsgSVZhbGlkYXRpbmdSZXBvcnRlciB9IGZyb20gXCIuLi8uLi92YWxpZGF0aW5nL3JlcG9ydGVyL2ludGVyZmFjZXMvSVZhbGlkYXRhdGluZ1JlcG9ydGVyXCI7XHJcbmltcG9ydCB7IElWaWV3QmluZGVyIH0gZnJvbSBcIi4uLy4uL3ZpZXdiaW5kaW5nL2ludGVyZmFjZXMvSVZpZXdCaW5kZXJcIjtcclxuaW1wb3J0IHsgSUJpbmRpbmcgfSBmcm9tIFwiLi4vLi4vYmluZGluZy9pbnRlcmZhY2VzL2liaW5kaW5nXCI7XHJcbmltcG9ydCB7IElWaWV3RW5naW5lIH0gZnJvbSBcIi4uLy4uL3ZpZXdlbmdpbmUvaW50ZXJmYWNlcy9pdmlld2VuZ2luZVwiO1xyXG5pbXBvcnQgeyBCYXNlVmlld0VuZ2luZSB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2NvbmNyZXRlL0Jhc2VWaWV3RW5naW5lXCI7XHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluc3RhbnRpYXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXIodHlwZSwgdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tcImBjb250YWluZXJcIl0ucmVnaXN0ZXIodHlwZSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmVzb2x2ZSh0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUodHlwZSk7XHJcbiAgICB9XHJcbiAgICByZXNvbHZlQWxsKHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZUFsbCh0eXBlKTtcclxuICAgIH1cclxuICAgIHJlbGVhc2UodHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWxlYXNlKHR5cGUpO1xyXG4gICAgfVxyXG4gICAgaW5zdGFudGlhdGUodHlwZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbXCJgY29udGFpbmVyXCJdLmluc3RhbnRpYXRlKHR5cGUsIHBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBhbGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbXCJgY29udGFpbmVyXCJdLmFsbCgpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoZ2VyYW5pdW0pIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW50aWF0ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEluc3RhbnRpYXRlZEV4Y2VwdGlvbihcIkdlcmFuaXVtQXBwLmluc3RhbnRpYXRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiogYXBwbHkgc2V0dGluZ3MgKi9cclxuICAgICAgICBPYmplY3QuYXNzaWduKGdlcmFuaXVtLCBnZXJhbml1bURlZmF1bHQpO1xyXG4gICAgICAgIC8qKiBhcHBseSBjb250YWluZXIgKi9cclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXSA9IGdlcmFuaXVtLmNvbnRhaW5lciA/IG5ldyBnZXJhbml1bS5jb250YWluZXIoKSA6IG5ldyBJbk1lbW9yeUNvbnRhaW5lcigpO1xyXG4gICAgICAgIC8qKiByZWdpc3RlciBhbGwgc2V0dGluZ3MgKi9cclxuICAgICAgICB0aGlzLmludGVybmFsUmVnaXN0ZXIoZ2VyYW5pdW0pO1xyXG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGludGVybmFsUmVnaXN0ZXIoZ2VyYW5pdW0pIHtcclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWdpc3RlcihJQ29tbXVuaWNhdG9yLCBuZXcgZ2VyYW5pdW0uY29tbXVuaWNhdG9yKCkpO1xyXG4gICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlZ2lzdGVyKElIaXN0b3J5LCBuZXcgZ2VyYW5pdW0uaGlzdG9yeXByb3ZpZGVyKCkpO1xyXG4gICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlZ2lzdGVyKElMb2dnZXIsIG5ldyBnZXJhbml1bS5sb2dnZXIoKSk7XHJcbiAgICAgICAgdGhpc1tcImBjb250YWluZXJcIl0ucmVnaXN0ZXIoSVJlcXVlc3QsIG5ldyBnZXJhbml1bS5yZXF1ZXN0KCkpO1xyXG4gICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlZ2lzdGVyKElSb3V0ZXIsIG5ldyBnZXJhbml1bS5yb3V0ZXIoKSk7XHJcbiAgICAgICAgdGhpc1tcImBjb250YWluZXJcIl0ucmVnaXN0ZXIoSVN0YXRlTWFuYWdlciwgbmV3IGdlcmFuaXVtLnN0YXRlbWFuYWdlcigpKTtcclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWdpc3RlcihJU3RvcmFnZSwgbmV3IGdlcmFuaXVtLnN0b3JhZ2UoKSk7XHJcbiAgICAgICAgdGhpc1tcImBjb250YWluZXJcIl0ucmVnaXN0ZXIoSVRlbXBsYXRlRW5naW5lLCBuZXcgZ2VyYW5pdW0udGVtcGxhdGluZygpKTtcclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWdpc3RlcihJVmFsaWRhdGluZ1JlcG9ydGVyLCBuZXcgZ2VyYW5pdW0udmFsaWRhdGlvbnJlcG9ydGVyKCkpO1xyXG4gICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlZ2lzdGVyKElWaWV3QmluZGVyLCBuZXcgZ2VyYW5pdW0udmlld2JpbmRlcigpKTtcclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWdpc3RlcihJVmlld0VuZ2luZSwgbmV3IGdlcmFuaXVtLnZpZXdlbmdpbmUoKSk7XHJcbiAgICAgICAgZ2VyYW5pdW0uYmluZGluZ3MuZm9yRWFjaChiaW5kaW5nID0+IHtcclxuICAgICAgICAgICAgdGhpc1tcImBjb250YWluZXJcIl0ucmVnaXN0ZXIoSUJpbmRpbmcsIG5ldyBiaW5kaW5nKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbkFwcC5jb250YWluZXJQcm9wZXJ0eSA9IFwiYEdlcmFuaXVtQXBwXCI7XHJcbmNvbnN0IGdlcmFuaXVtRGVmYXVsdCA9IHtcclxuICAgIGNvbW11bmljYXRvcjogQWpheENvbW11bmljYXRvcixcclxuICAgIGhpc3Rvcnlwcm92aWRlcjogSHRtbDVIaXN0b3J5QVBJLFxyXG4gICAgbG9nZ2VyOiBDb25zb2xlTG9nZ2VyLFxyXG4gICAgcmVxdWVzdDogQWpheFJlcXVlc3QsXHJcbiAgICByb3V0ZXI6IEJhc2ljUm91dGVyLFxyXG4gICAgc3RhdGVtYW5hZ2VyOiBJbk1lbW9yeUNvbnRhaW5lcixcclxuICAgIHN0b3JhZ2U6IExvY2FsU3RvcmFnZSxcclxuICAgIHRlbXBsYXRpbmc6IENsaWVudFRlbXBsYXRlRW5naW5lLFxyXG4gICAgdmFsaWRhdGlvbnJlcG9ydGVyOiBOb3RpZnlWYWxpZGF0aW5nUmVwb3J0ZXIsXHJcbiAgICB2aWV3YmluZGVyOiBCYXNlVmlld0JpbmRlcixcclxuICAgIHZpZXdlbmdpbmU6IEJhc2VWaWV3RW5naW5lLFxyXG4gICAgYmluZGluZ3M6IFtcclxuICAgICAgICBCYXNlRmllbGRCaW5kaW5nLFxyXG4gICAgICAgIEJhc2VJbnB1dEJpbmRpbmcsXHJcbiAgICAgICAgQmFzZUNsaWNrQmluZGluZyxcclxuICAgICAgICBCYXNlQ29sbGVjdGlvbkJpbmRpbmdcclxuICAgIF1cclxufTtcclxuZnVuY3Rpb24gZ2V0QXBwKCkge1xyXG4gICAgaWYgKCF3aW5kb3dbQXBwLmNvbnRhaW5lclByb3BlcnR5XSkge1xyXG4gICAgICAgIHdpbmRvd1tBcHAuY29udGFpbmVyUHJvcGVydHldID0gbmV3IEFwcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpbmRvd1tBcHAuY29udGFpbmVyUHJvcGVydHldO1xyXG59XHJcbi8qKiBBcHBsaWNhdGlvbiBpbnRhbmNlIHdpdGggaW4tYnVpbGQgY29udGFpbmVyICovXHJcbnZhciBHZXJhbml1bUFwcCA9IGdldEFwcCgpO1xyXG4vKiogQXBwbGljYXRpb24gaW50YW5jZSB3aXRoIGluLWJ1aWxkIGNvbnRhaW5lciAqL1xyXG5leHBvcnQgZGVmYXVsdCBHZXJhbml1bUFwcDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXBwLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3J1bnRpbWUvY29uY3JldGUvQXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEV4Y2VwdGlvbiB9IGZyb20gXCIuLi9FeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIGV4dGVuZHMgRXhjZXB0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG1zZykge1xyXG4gICAgICAgIG1zZyArPSBcIkludGVyZmFjZVVzaW5nRXhjZXB0aW9uOiB5b3UgY2FuIG5vdCB1c2UgaW50ZXJmYWNlLWxpa2UgY2xhc3MhXCI7XHJcbiAgICAgICAgc3VwZXIobXNnKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbi5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gXCIuLi9jb250cmFjdHMvUm91dGVcIjtcclxuaW1wb3J0IHsgUm91dGVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRyYWN0cy9Sb3V0ZUNvbnRleHRcIjtcclxuaW1wb3J0IHsgQXJyYXlIZWxwZXIgfSBmcm9tIFwiLi4vLi4vZGVjbGFyZS9hcnJheVwiO1xyXG5pbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbnZhciBfaWdub3JlZFJvdXRlcyA9IFtdO1xyXG52YXIgX3JvdXRlcyA9IFtdO1xyXG5leHBvcnQgdmFyIHNldHRpbmdzID0geyBwYXJhbWV0ZXJGdWxsVXJsOiBmYWxzZSB9O1xyXG5leHBvcnQgZnVuY3Rpb24gcm91dGVzKCkge1xyXG4gICAgcmV0dXJuIF9yb3V0ZXMuc2xpY2UoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdXJsRnJvbUN0b3IoY3RvciwgcGFyYW1zKSB7XHJcbiAgICB2YXIgaW5zdGFuY2UgPSBHZXJhbml1bUFwcC5pbnN0YW50aWF0ZShjdG9yKTtcclxuICAgIGxldCBjaGFpbiA9IGNoYWluT2ZDdG9yTmFtZXMoaW5zdGFuY2UsIG51bGwpO1xyXG4gICAgdmFyIHJvdXRlVXJsID0gQXJyYXlIZWxwZXIucmVtb3ZlU2FtZShjaGFpbilcclxuICAgICAgICAucmV2ZXJzZSgpO1xyXG4gICAgaWYgKHBhcmFtcyAmJiBzZXR0aW5ncy5wYXJhbWV0ZXJGdWxsVXJsKVxyXG4gICAgICAgIHJvdXRlVXJsLnB1c2guYXBwbHkocm91dGVVcmwsIHBhcmFtcyk7XHJcbiAgICByZXR1cm4gJy8nICsgcm91dGVVcmwuam9pbihcIi9cIikudG9Mb3dlckNhc2UoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcm91dGVkKHBhcmFtLCBhYnNvcmIpIHtcclxuICAgIC8vY2xlYW4gcm91dGUgb3ZlcmxvYWRcclxuICAgIGlmICh0eXBlb2YgcGFyYW0gIT09ICdzdHJpbmcnXHJcbiAgICAgICAgLy9jb250ZXh0IG92ZXJsb2FkXHJcbiAgICAgICAgJiYgIShwYXJhbSBpbnN0YW5jZW9mIFJvdXRlQ29udGV4dClcclxuICAgICAgICAvL3BhcmVudCBvdmVybG9hZFxyXG4gICAgICAgICYmICFhYnNvcmIpXHJcbiAgICAgICAgLy9jbGVhbiBkZWNvcmF0ZVxyXG4gICAgICAgIF9yb3V0ZWQocGFyYW0sIHVybEZyb21DdG9yKHBhcmFtKSk7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIChjb25zdHJ1Y3RvcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgICAgIF9yb3V0ZWQoY29uc3RydWN0b3IsIHBhcmFtKTtcclxuICAgICAgICAgICAgaWYgKGFic29yYilcclxuICAgICAgICAgICAgICAgIF9yb3V0ZWQoY29uc3RydWN0b3IsIHVybEZyb21DdG9yKHBhcmFtKSArIHVybEZyb21DdG9yKGNvbnN0cnVjdG9yKSk7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbSBpbnN0YW5jZW9mIFJvdXRlQ29udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHVybCA9IHVybEZyb21DdG9yKGNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbS5wYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsRnJvbUN0b3IocGFyYW0ucGFyZW50KSArIHVybDtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbS5wcmVwYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHBhcmFtLnByZXBhdGggKyB1cmw7XHJcbiAgICAgICAgICAgICAgICBfcm91dGVkKGNvbnN0cnVjdG9yLCB1cmwsIHBhcmFtLmV4ZWN1dGFibGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcm91dGVpZ25vcmUoY29uc3RydWN0b3IpIHtcclxuICAgIGlmICghX2lnbm9yZWRSb3V0ZXMpIHtcclxuICAgICAgICBfaWdub3JlZFJvdXRlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgX2lnbm9yZWRSb3V0ZXMucHVzaChjb25zdHJ1Y3Rvci5uYW1lKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcm91dGVyb290KGNvbnN0cnVjdG9yKSB7XHJcbiAgICBfcm91dGVkKGNvbnN0cnVjdG9yLCAnLi8nKTtcclxufVxyXG5mdW5jdGlvbiBfcm91dGVkKGN0b3IsIHVybCwgZXhlY3V0YWJsZSkge1xyXG4gICAgdmFyIHJvdXRlID0gbmV3IFJvdXRlKCk7XHJcbiAgICByb3V0ZS51cmwgPSB1cmwsXHJcbiAgICAgICAgcm91dGUuY3RvciA9IGN0b3I7XHJcbiAgICByb3V0ZS5leGVjdXRhYmxlID0gZXhlY3V0YWJsZTtcclxuICAgIGN0b3IucHJvdG90eXBlW1wiQHJvdXRlZFwiXSA9IHJvdXRlO1xyXG4gICAgX3JvdXRlcy5wdXNoKHJvdXRlKTtcclxufVxyXG5mdW5jdGlvbiBjaGFpbk9mQ3Rvck5hbWVzKG9iaiwgbmFtZXMpIHtcclxuICAgIGlmIChuYW1lcyA9PSBudWxsKVxyXG4gICAgICAgIG5hbWVzID0gW107XHJcbiAgICBpZiAob2JqID09IG51bGwpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB2YXIgcm91dGUgPSBvYmouY29uc3RydWN0b3IubmFtZTtcclxuICAgIGlmIChyb3V0ZSA9PSBcIk9iamVjdFwiKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgaWYgKF9pZ25vcmVkUm91dGVzLmluZGV4T2Yocm91dGUpID09IC0xKVxyXG4gICAgICAgIG5hbWVzLnB1c2gocm91dGUpO1xyXG4gICAgb2JqID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaik7XHJcbiAgICBuYW1lcy5jb25jYXQoY2hhaW5PZkN0b3JOYW1lcyhvYmosIG5hbWVzKSk7XHJcbiAgICByZXR1cm4gbmFtZXM7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVjb3JhdG9ycy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2NvbmNyZXRlL2RlY29yYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIEFycmF5SGVscGVyIHtcclxuICAgIHN0YXRpYyByZW1vdmUoYXJyYXksIGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGUgPT4gZSAhPT0gaXRlbSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVtb3ZlU2FtZShhcnJheSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoZnVuY3Rpb24gKGVsZW0sIGluZGV4LCBzZWxmKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleCA9PSBzZWxmLmluZGV4T2YoZWxlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ3JvdXBCeShhcnJheSwga2V5KSB7XHJcbiAgICAgICAgdmFyIGdyb3VwcyA9IFtdO1xyXG4gICAgICAgIHZhciB0YXJnZXRLZXlzID0gYXJyYXkubWFwKHggPT4geFtrZXldKTtcclxuICAgICAgICB2YXIgdW5pcXVlID0gdGFyZ2V0S2V5cy5maWx0ZXIoKHZhbHVlLCBpbmRleCwgYXJyYXkpID0+IGFycmF5LmluZGV4T2YodmFsdWUpID09PSBpbmRleCk7XHJcbiAgICAgICAgdW5pcXVlLmZvckVhY2goeiA9PiB7XHJcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKGFycmF5LmZpbHRlcih4ID0+IHhba2V5XSA9PSB6KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGdyb3VwcztcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJheS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9kZWNsYXJlL2FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJQmluZGluZyB7XHJcbiAgICBiaW5kKG9iamVjdERPTSwgbW9kZWwpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSUJpbmRpbmcuYmluZFwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWliaW5kaW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvaW50ZXJmYWNlcy9pYmluZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4uLy4uL3ZpZXcvYWJzdHJhY3QvVmlld1wiO1xyXG5pbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmV4cG9ydCBjbGFzcyBJVmlld0VuZ2luZSB7XHJcbiAgICBleGVjdXRlKGNvbnRleHQpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVZpZXdFbmdpbmUuZXhlY3V0ZVwiKTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gY29tcGxldGUgcmVuZGVyZWQgdmlld1xyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBWaWV3RW5naW5lVmlldyhpdmlld2VkLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB2aWV3O1xyXG4gICAgICAgICAgICB2YXIgdmlld2N0ciA9IGl2aWV3ZWQudmlldygpO1xyXG4gICAgICAgICAgICBjb25zdCBpc1N0cmluZyA9IHR5cGVvZiB2aWV3Y3RyID09PSBcInN0cmluZ1wiO1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcgfHwgISF2aWV3Y3RyW1wiJXNlbGVjdG9yXCJdKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0gW3NlbGVjdG9yXTtcclxuICAgICAgICAgICAgICAgIGlmIChpc1N0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh2aWV3Y3RyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBpbnN0VmlldyA9IEdlcmFuaXVtQXBwLmluc3RhbnRpYXRlKEVtcHR5VmlldywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBpbnN0Vmlldy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHZpZXcgPSBpbnN0VmlldztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZpZXcgPSBHZXJhbml1bUFwcC5pbnN0YW50aWF0ZSh2aWV3Y3RyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2aWV3LmRhdGEgPSBpdmlld2VkO1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBFbXB0eVZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuICAgIGRlY2xhcmUoKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pdmlld2VuZ2luZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3ZW5naW5lL2ludGVyZmFjZXMvaXZpZXdlbmdpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElDb21tdW5pY2F0b3Ige1xyXG4gICAgc2VuZChkYXRhKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklDb21tdW5pY2F0b3Iuc2VuZFwiKTsgfVxyXG4gICAgcmVjaXZlKCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJQ29tbXVuaWNhdG9yLnJlY2l2ZVwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlDb21tdW5pY2F0b3IuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmFja2VuZC9pbnRlcmZhY2VzL0lDb21tdW5pY2F0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIEV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1zZykge1xyXG4gICAgICAgIHN1cGVyKG1zZyk7XHJcbiAgICAgICAgdGhpcy5tc2cgPSBtc2c7XHJcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIEV4Y2VwdGlvbi5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHB1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXNnO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUV4Y2VwdGlvbi5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL0V4Y2VwdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSUhpc3Rvcnkge1xyXG4gICAgZXh0ZW5kKGhpdGVtKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklIaXN0b3J5LmV4dGVuZFwiKTsgfVxyXG4gICAgcmVzdG9yZShzdGF0ZSkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJSGlzdG9yeS5yZXN0b3JlXCIpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SUhpc3RvcnkuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vaGlzdG9yeS9pbnRlcmZhY2VzL0lIaXN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJUm91dGVyIHtcclxuICAgIGdldCByb3V0ZXMoKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklSb3V0ZXIucm91dGVzXCIpOyB9XHJcbiAgICByb3V0ZUJ5VXJsKHVybCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJUm91dGVyLnJvdXRlQnlVcmxcIik7IH1cclxuICAgIHJvdXRlKGN1cnJlbnQpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVJvdXRlci5yb3V0ZVwiKTsgfVxyXG4gICAgcm91dGVhcmVhKCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJUm91dGVyLnJvdXRlYXJlYVwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlSb3V0ZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9pbnRlcmZhY2VzL0lSb3V0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJTG9nZ2VyIHtcclxuICAgIGxvZyhlcnIpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSUxvZ2dlci5sb2dcIik7IH1cclxuICAgIGdldCgpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSUxvZ2dlci5nZXRcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JTG9nZ2VyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvbG9nZ2luZy9pbnRlcmZhY2VzL0lMb2dnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJVmlld0JpbmRlciB7XHJcbiAgICBiaW5kKGNvbnRleHQpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVZpZXdCaW5kZXIuYmluZFwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlWaWV3QmluZGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdiaW5kaW5nL2ludGVyZmFjZXMvSVZpZXdCaW5kZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEV4Y2VwdGlvbiB9IGZyb20gXCIuLi9FeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb25FeGNlcHRpb24gZXh0ZW5kcyBFeGNlcHRpb24ge1xyXG4gICAgY29uc3RydWN0b3IobXNnKSB7XHJcbiAgICAgICAgc3VwZXIoXCJDb21tdW5pY2F0aW9uRXhjZXB0aW9uOlwiICsgbXNnKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db21tdW5pY2F0aW9uRXhjZXB0aW9uLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvYmFja2VuZC9Db21tdW5pY2F0aW9uRXhjZXB0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5pbXBvcnQgeyByb3V0ZWlnbm9yZSB9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL2NvbmNyZXRlL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgQXJyYXlIZWxwZXIgfSBmcm9tIFwiLi4vLi4vLi4vZGVjbGFyZS9hcnJheVwiO1xyXG5sZXQgRXZlbnQgPSBjbGFzcyBFdmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0RXZlbnRzID0gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbiAgICByYWlzZShhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdEV2ZW50cy5mb3JFYWNoKHN1YnNjcmliZXIgPT4ge1xyXG4gICAgICAgICAgICBzdWJzY3JpYmVyKGFyZ3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0IGJpbmQoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0RXZlbnRzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgc2V0IHVuYmluZChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX3JlcXVlc3RFdmVudHMgPSBBcnJheUhlbHBlci5yZW1vdmUodGhpcy5fcmVxdWVzdEV2ZW50cywgY2FsbGJhY2spO1xyXG4gICAgfVxyXG59O1xyXG5FdmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgcm91dGVpZ25vcmVcclxuXSwgRXZlbnQpO1xyXG5leHBvcnQgeyBFdmVudCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1FdmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iZWhhdmlvcnMvZXZlbnRzL2Fic3RyYWN0L0V2ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbk1lbW9yeUNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9jb2hlcmVuY2UvY29uY3JldGUvSW5NZW1vcnlDb250YWluZXJcIjtcclxuZXhwb3J0IGNsYXNzIElTdGF0ZU1hbmFnZXIgZXh0ZW5kcyBJbk1lbW9yeUNvbnRhaW5lciB7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVN0YXRlTWFuYWdlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9zdGF0ZXMvaW50ZXJmYWNlcy9JU3RhdGVNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSVRlbXBsYXRlRW5naW5lIHtcclxuICAgIHBhcnNlKHRlbXBsYXRlKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklUZW1wbGF0ZUVuZ2luZS5wYXJzZVwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlUZW1wbGF0ZUVuZ2luZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS90ZW1wbGF0aW5nL2ludGVyZmFjZXMvSVRlbXBsYXRlRW5naW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSVZhbGlkYXRpbmdSZXBvcnRlciB7XHJcbiAgICByZXBvcnQodmlld0RPTSwgdmFsaWRhdGluZ1Jlc3VsdCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJVmFsaWRhdGluZ1JlcG9ydGVyLnJlcG9ydFwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlWYWxpZGF0YXRpbmdSZXBvcnRlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92YWxpZGF0aW5nL3JlcG9ydGVyL2ludGVyZmFjZXMvSVZhbGlkYXRhdGluZ1JlcG9ydGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuLi9iZWhhdmlvcnMvZXZlbnRzL2Fic3RyYWN0L0V2ZW50XCI7XHJcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlZGVmaW5lcyBwcm9wZXJ0eSB3aXRoIG5ldyBwdWJsaWMgYWNjZXNzb3JzLCBzYWZlXHJcbiAgICAgKlxyXG4gICAgICogQWxzbyBjcmVhdGVzIHByb3BlcnR5IEV2ZW50IGZvciBkZXRlY3Rpb24gZW5kIG9mIGNoYWluOlxyXG4gICAgICpcclxuICAgICAqIHNldHRlciBvYmpbI2V2ZW50OnNldFtuYW1lXV1cclxuICAgICAqXHJcbiAgICAgKiBnZXR0ZXIgb2JqWyNldmVudDpnZXRbbmFtZV1dXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0gbmFtZSBvZiBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGdldCBuZXcgcHVibGljIHNldHRlclxyXG4gICAgICogQHBhcmFtIHNldCBuZXcgcHVibGljIGdldHRlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmVkZWZpbmUodGFyZ2V0LCBuYW1lLCBnZXQsIHNldCkge1xyXG4gICAgICAgIHZhciBwcm90b1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCksIG5hbWUpO1xyXG4gICAgICAgIHZhciBvd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbmFtZSk7XHJcbiAgICAgICAgdmFyIHNldHRlckV2ZW50ID0gbmV3IFByb3BlcnR5RXZlbnQoKTtcclxuICAgICAgICB2YXIgZ2V0dGVyRXZlbnQgPSBuZXcgUHJvcGVydHlFdmVudCgpO1xyXG4gICAgICAgIC8vYWNjZXNzb3JzIGRvZXNuJ3QgZXhpc3RzXHJcbiAgICAgICAgaWYgKG93blByb3BlcnR5RGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkICYmIHByb3RvUHJvcGVydHlEZXNjcmlwdG9yID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3Byb3RvdHlwZSBhY2Nlc3NvclxyXG4gICAgICAgIGlmIChvd25Qcm9wZXJ0eURlc2NyaXB0b3IgPT0gdW5kZWZpbmVkICYmIHByb3RvUHJvcGVydHlEZXNjcmlwdG9yICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHByb3RvUHJvcGVydHlEZXNjcmlwdG9yLmdldC5jYWxsKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF92YWwgPSBnZXQodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBnZXR0ZXJFdmVudC5yYWlzZSh7IHZhbCwgX3ZhbCB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZhbDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXQodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF92YWwgPSBzZXQuY2FsbCh0aGlzLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdmFsICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG9Qcm9wZXJ0eURlc2NyaXB0b3Iuc2V0LmNhbGwodGFyZ2V0LCBfdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0ZXJFdmVudC5yYWlzZSh7IHZhbCwgX3ZhbCB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRhcmdldFtcIiNldmVudDpzZXRbXCIgKyBuYW1lICsgXCJdXCJdID0gc2V0dGVyRXZlbnQ7XHJcbiAgICAgICAgICAgIHRhcmdldFtcIiNldmVudDpnZXRbXCIgKyBuYW1lICsgXCJdXCJdID0gZ2V0dGVyRXZlbnQ7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy9vd24gYWNjZXNzb3IgZXhpc3RzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG93blByb3BlcnR5RGVzY3JpcHRvci52YWx1ZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gZ2V0KG93blByb3BlcnR5RGVzY3JpcHRvci5nZXQuY2FsbCh0YXJnZXQpKTsgfSxcclxuICAgICAgICAgICAgICAgIHNldCh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3ZhbCA9IHNldC5jYWxsKHRoaXMsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF92YWwgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25Qcm9wZXJ0eURlc2NyaXB0b3Iuc2V0LmNhbGwodGFyZ2V0LCBfdmFsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vYWNjZXNzb3IgZG9lc24ndCBleGlzdHNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleGVyID0gU3ltYm9sKG5hbWUpO1xyXG4gICAgICAgICAgICB0YXJnZXRbaW5kZXhlcl0gPSB0YXJnZXRbbmFtZV07XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcclxuICAgICAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gdGFyZ2V0W2luZGV4ZXJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfdmFsID0gZ2V0KHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0dGVyRXZlbnQucmFpc2UoeyB2YWwsIF92YWwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92YWw7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0KHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdmFsID0gc2V0LmNhbGwodGhpcywgdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3ZhbCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtpbmRleGVyXSA9IHNldChfdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0ZXJFdmVudC5yYWlzZSh7IHZhbCwgX3ZhbCB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRhcmdldFtcIiNldmVudDpzZXRbXCIgKyBuYW1lICsgXCJdXCJdID0gc2V0dGVyRXZlbnQ7XHJcbiAgICAgICAgICAgIHRhcmdldFtcIiNldmVudDpnZXRbXCIgKyBuYW1lICsgXCJdXCJdID0gZ2V0dGVyRXZlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUV2ZW50IGV4dGVuZHMgRXZlbnQge1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUFjY2Vzc29yIHtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9wZXJ0eS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yZWZsZWN0aW9uL1Byb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBCYXNlQmluZGluZyB9IGZyb20gXCIuL0Jhc2VCaW5kaW5nXCI7XHJcbmltcG9ydCB7IGZpbmRBbmRGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vZXh0ZW5zaW9ucy9IdG1sRWxlbWVudEV4dGVuc2lvbnNcIjtcclxuZXhwb3J0IGNsYXNzIEJhc2VCeUF0dHJpYnV0ZUJpbmRpbmcgZXh0ZW5kcyBCYXNlQmluZGluZyB7XHJcbiAgICBjbGVhcihET01PYmplY3QpIHtcclxuICAgICAgICBET01PYmplY3QucmVtb3ZlQXR0cmlidXRlKHRoaXMuYXR0cmlidXRlKTtcclxuICAgIH1cclxuICAgIGRldGVjdGlvbihET00pIHtcclxuICAgICAgICByZXR1cm4gZmluZEFuZEZpbHRlcihET00sICdbJyArIHRoaXMuYXR0cmlidXRlICsgJ10nKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlQnlBdHRyaWJ1dGVCaW5kaW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvYmFzZS9CYXNlQnlBdHRyaWJ1dGVCaW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSVJlcXVlc3Qge1xyXG4gICAgc2VuZChkYXRhKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklSZXF1ZXN0LnNlbmRcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JUmVxdWVzdC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iYWNrZW5kL2ludGVyZmFjZXMvSVJlcXVlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBSb3V0ZSB7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Um91dGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb250cmFjdHMvUm91dGUuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEFycmF5SGVscGVyIH0gZnJvbSBcIi4uLy4uL2RlY2xhcmUvYXJyYXlcIjtcclxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29udGFpbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gW107XHJcbiAgICB9XHJcbiAgICByZWdpc3Rlcih0eXBlLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnB1c2goe1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVzb2x2ZSh0eXBlKSB7XHJcbiAgICAgICAgY29uc3QgZmluZGVkID0gdGhpcy5leGVjdXRlKHR5cGUpO1xyXG4gICAgICAgIGlmIChmaW5kZWQubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY29tcG9uZW50IGlzIG5vdCByZWdpc3RlcmVkOiBcIiArIHR5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5iaW5kQ29udGFpbmVyKGZpbmRlZFswXSk7XHJcbiAgICB9XHJcbiAgICByZXNvbHZlQWxsKHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlKHR5cGUpLm1hcChjb21wb25lbnQgPT4gdGhpcy5iaW5kQ29udGFpbmVyKGNvbXBvbmVudCkpO1xyXG4gICAgfVxyXG4gICAgcmVsZWFzZSh0eXBlKSB7XHJcbiAgICAgICAgY29uc3QgcGF0dGVybiA9ICh0b2tlbikgPT4geyByZXR1cm4gdG9rZW4udHlwZSA9PSB0eXBlLm5hbWU7IH07XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuZmluZChwYXR0ZXJuKTtcclxuICAgICAgICBpZiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gQXJyYXlIZWxwZXIucmVtb3ZlKHRoaXMuY29udGFpbmVyLCBjb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFsbCgpIHtcclxuICAgICAgICBjb25zdCB0b2tlbkV4dHJhY3QgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuLnZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLm1hcCh0b2tlbkV4dHJhY3QpO1xyXG4gICAgfVxyXG4gICAgaW5zdGFudGlhdGUodHlwZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IHR5cGUoLi4uKHBhcmFtcyB8fCBbXSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJpbmRDb250YWluZXIoaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgYmluZENvbnRhaW5lcihjb21wb25lbnQpIHtcclxuICAgICAgICBjb21wb25lbnRbXCJgY29udGFpbmVyXCJdID0gdGhpcztcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG4gICAgZXhlY3V0ZSh0eXBlKSB7XHJcbiAgICAgICAgY29uc3QgcGF0dGVybiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW4udHlwZSA9PT0gdHlwZS5uYW1lO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdG9rZW5FeHRyYWN0ID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbi52YWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1hcCA9ICdtYXAnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5maWx0ZXIocGF0dGVybikubWFwKHRva2VuRXh0cmFjdCk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW5NZW1vcnlDb250YWluZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vY29oZXJlbmNlL2NvbmNyZXRlL0luTWVtb3J5Q29udGFpbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgSGlzdG9yeUl0ZW0ge1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUhpc3RvcnlJdGVtLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2hpc3RvcnkvY29udHJhY3RzL0hpc3RvcnlJdGVtLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSVN0b3JhZ2Uge1xyXG4gICAgYWRkKG1vZGVsKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklTdG9yYWdlLmFkZFwiKTsgfVxyXG4gICAgcmVtb3ZlKGlkKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklTdG9yYWdlLnJlbW92ZVwiKTsgfVxyXG4gICAgZ2V0KGlkKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklTdG9yYWdlLmdldFwiKTsgfVxyXG4gICAgYWxsKCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJU3RvcmFnZS5hbGxcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JU3RvcmFnZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9zdG9yYWdlL2ludGVyZmFjZXMvSVN0b3JhZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGZpbmRBbmRGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vZXh0ZW5zaW9ucy9IdG1sRWxlbWVudEV4dGVuc2lvbnNcIjtcclxuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdC9iaW5kaW5nXCI7XHJcbmV4cG9ydCBjbGFzcyBCYXNlQmluZGluZyBleHRlbmRzIEJpbmRpbmcge1xyXG4gICAgZGV0ZWN0aW9uKERPTSkge1xyXG4gICAgICAgIHJldHVybiBmaW5kQW5kRmlsdGVyKERPTSwgdGhpcy5hdHRyaWJ1dGUpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2VCaW5kaW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvYmFzZS9CYXNlQmluZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGZpbmRBbmRGaWx0ZXIocm9vdCwgcXVlcnkpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChyb290LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpLCAwKTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IdG1sRWxlbWVudEV4dGVuc2lvbnMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXh0ZW5zaW9ucy9IdG1sRWxlbWVudEV4dGVuc2lvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBTdHJpbmdIZWxwZXIge1xyXG4gICAgc3RhdGljIHJlcGxhY2VBbGwoc3RyLCBzZWFyY2gsIHJlcGxhY2VtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoc2VhcmNoLCAnZycpLCByZXBsYWNlbWVudCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmFuZG9tKGxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaGFycyA9ICdhYmNkZWZnaGlqa2wwMTIzNDU2Nzg5bW5vcHFyc3R1dnd4eXonO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcclxuICAgICAgICBmb3IgKHZhciBpID0gbGVuZ3RoOyBpID4gMDsgLS1pKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gY2hhcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKV07XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHN0YXRpYyByYW5kb21pemUoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ciArIHRoaXMucmFuZG9tKDYpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cmluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9kZWNsYXJlL3N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5pbXBvcnQgeyBJQmluZGluZyB9IGZyb20gXCIuLi8uLi9iaW5kaW5nL2ludGVyZmFjZXMvaWJpbmRpbmdcIjtcclxuZXhwb3J0IGNsYXNzIEJpbmRDb250ZXh0IHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXdET00sIGJpbmRpbmdGbGFncykge1xyXG4gICAgICAgIHRoaXMudmlld0RPTSA9IHZpZXdET007XHJcbiAgICAgICAgaWYgKCFiaW5kaW5nRmxhZ3MpIHtcclxuICAgICAgICAgICAgYmluZGluZ0ZsYWdzID0gR2VyYW5pdW1BcHAucmVzb2x2ZUFsbChJQmluZGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmluZGluZ0ZsYWdzID0gYmluZGluZ0ZsYWdzO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJpbmRDb250ZXh0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdiaW5kaW5nL2NvbnRyYWN0cy9CaW5kQ29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHBcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuR2VyYW5pdW1BcHAuc3RhcnQoe30pO1xyXG5uZXcgQXBwKCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5pbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvYWJzdHJhY3QvVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IHJvdXRlcm9vdCB9IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb25jcmV0ZS9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IHByb21pc2VkIH0gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9zdHJ1Y3R1cmVzL1Byb21pc2VkXCI7XHJcbmltcG9ydCB7IFZpZXdET00gfSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdET00vYWJzdHJhY3QvVmlld0RPTVwiO1xyXG5sZXQgQXBwID0gY2xhc3MgQXBwIGV4dGVuZHMgVmlld01vZGVsIHtcclxuICAgIHZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIEhlYWRlcjtcclxuICAgIH1cclxuICAgIGRvY3VtZW50VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdDaG9jb2xhdGl1bSB8IEhvbWUnO1xyXG4gICAgfVxyXG59O1xyXG5BcHAgPSBfX2RlY29yYXRlKFtcclxuICAgIHJvdXRlcm9vdFxyXG5dLCBBcHApO1xyXG5leHBvcnQgeyBBcHAgfTtcclxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgVmlld0RPTSB7XHJcbiAgICBET00oKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2VkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZTFcIikpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgcm91dGVpZ25vcmUgfSBmcm9tIFwiLi4vLi4vcm91dGluZy9jb25jcmV0ZS9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IFZpZXdTdGF0ZSB9IGZyb20gXCIuL1ZpZXdTdGF0ZVwiO1xyXG5pbXBvcnQgeyBJVmlld0VuZ2luZSB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2ludGVyZmFjZXMvaXZpZXdlbmdpbmVcIjtcclxuaW1wb3J0IHsgaXMgfSBmcm9tIFwiLi4vLi4vaGlzdG9yeS9kZWNvcmF0b3JzL2hpc3RvcnlcIjtcclxuaW1wb3J0IHsgSGlzdG9yeUl0ZW0gfSBmcm9tIFwiLi4vLi4vaGlzdG9yeS9jb250cmFjdHMvSGlzdG9yeUl0ZW1cIjtcclxuaW1wb3J0IHsgSUhpc3RvcnkgfSBmcm9tIFwiLi4vLi4vaGlzdG9yeS9pbnRlcmZhY2VzL0lIaXN0b3J5XCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxubGV0IFZpZXdNb2RlbCA9IGNsYXNzIFZpZXdNb2RlbCBleHRlbmRzIFZpZXdTdGF0ZSB7XHJcbiAgICBzaG93KHNlbGVjdG9yKSB7XHJcbiAgICAgICAgY29uc3QgX3N1cGVyID0gbmFtZSA9PiBzdXBlcltuYW1lXTtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERvY3VtZW50VGl0bGUoKTtcclxuICAgICAgICAgICAgaWYgKGlzKHRoaXMuY29uc3RydWN0b3IpICYmICF0aGlzWycjcm91dGVkJ10pIHtcclxuICAgICAgICAgICAgICAgIHZhciBfcm91dGVkID0gdGhpc1tcIkByb3V0ZWRcIl07XHJcbiAgICAgICAgICAgICAgICBfcm91dGVkLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2hpc3RvcnkgPSBuZXcgSGlzdG9yeUl0ZW0oKTtcclxuICAgICAgICAgICAgICAgIF9oaXN0b3J5LnVybCA9IF9yb3V0ZWQudXJsO1xyXG4gICAgICAgICAgICAgICAgX2hpc3RvcnkudGl0bGUgPSBkb2N1bWVudC50aXRsZTtcclxuICAgICAgICAgICAgICAgIF9oaXN0b3J5LnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN0b3I6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBHZXJhbml1bUFwcC5yZXNvbHZlKElIaXN0b3J5KS5leHRlbmQoX2hpc3RvcnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzWycjcm91dGVkJ107XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlZnVsbCkge1xyXG4gICAgICAgICAgICAgICAgX3N1cGVyKFwic2hvd1wiKS5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIEdlcmFuaXVtQXBwLnJlc29sdmUoSVZpZXdFbmdpbmUpLmV4ZWN1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlWaWV3ZWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0RG9jdW1lbnRUaXRsZSgpIHtcclxuICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLmRvY3VtZW50VGl0bGUoKTtcclxuICAgICAgICBpZiAodGl0bGUgIT0gbnVsbClcclxuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50VGl0bGUoKSB7IHJldHVybiBudWxsOyB9XHJcbiAgICB0b1N0cmluZyhzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNob3coc2VsZWN0b3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5WaWV3TW9kZWwgPSBfX2RlY29yYXRlKFtcclxuICAgIHJvdXRlaWdub3JlXHJcbl0sIFZpZXdNb2RlbCk7XHJcbmV4cG9ydCB7IFZpZXdNb2RlbCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1WaWV3TW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld21vZGVscy9hYnN0cmFjdC9WaWV3TW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBSb3V0ZUNvbnRleHQge1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJvdXRlQ29udGV4dC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2NvbnRyYWN0cy9Sb3V0ZUNvbnRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IElDb21tdW5pY2F0b3IgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JQ29tbXVuaWNhdG9yXCI7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25FeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vLi4vZXhjZXB0aW9ucy9iYWNrZW5kL0NvbW11bmljYXRpb25FeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIEFqYXhDb21tdW5pY2F0b3IgZXh0ZW5kcyBJQ29tbXVuaWNhdG9yIHtcclxuICAgIHNlbmQoZGF0YSkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGUoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lclByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbnRlbnRUeXBlKGRhdGEsIHhocik7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9wZW4oZGF0YS5tZXRob2QsIGRhdGEudXJsLCBkYXRhLmFzeW5jLCBkYXRhLnVzZXIsIGRhdGEucGFzdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoYCR7eGhyLnN0YXR1c306ICR7eGhyLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoYCR7eGhyLnN0YXR1c306ICR7eGhyLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBDb21tdW5pY2F0aW9uRXhjZXB0aW9uKGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWNpdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJQcm9taXNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFsaWRhdGUoZGF0YSkge1xyXG4gICAgICAgIGlmICghZGF0YS5tZXRob2QgfHwgIWRhdGEudXJsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBDb21tdW5pY2F0aW9uRXhjZXB0aW9uKFwiWEhSIHJlcXVlc3QgbXVzdCBkZWNsYXJlIG1ldGhvZCBhbmQgdXJsIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRDb250ZW50VHlwZShvcHQsIHhocikge1xyXG4gICAgICAgIGlmIChvcHQubWV0aG9kICE9IFwiR0VUXCIpIHtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1BamF4Q29tbXVuaWNhdG9yLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvY29uY3JldGUvYWpheC9BamF4Q29tbXVuaWNhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFeGNlcHRpb24gfSBmcm9tIFwiLi4vRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJbnN0YW50aWF0ZWRFeGNlcHRpb24gZXh0ZW5kcyBFeGNlcHRpb24ge1xyXG4gICAgY29uc3RydWN0b3IobXNnKSB7XHJcbiAgICAgICAgc3VwZXIoXCJJbnN0YW50aWF0ZWRFeGNlcHRpb246IGluc3RhbmNlIGFscmVhZHkgaW5zdGFudGlhdGVkLCB5b3UgY2FuIGNoYW5nZSBpbnN0YW5jZSBvcHRpb25zIG9ubHkgYXQgYXBwbGljYXRpb24gc3RhcnRcXG5cIiArIG1zZyk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW5zdGFudGlhdGVkRXhjZXB0aW9uLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvcnVudGltZS9JbnN0YW50aWF0ZWRFeGNlcHRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IElIaXN0b3J5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUhpc3RvcnlcIjtcclxuaW1wb3J0IHsgSVJvdXRlciB9IGZyb20gXCIuLi8uLi9yb3V0aW5nL2ludGVyZmFjZXMvSVJvdXRlclwiO1xyXG5pbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmV4cG9ydCBjbGFzcyBIdG1sNUhpc3RvcnlBUEkgZXh0ZW5kcyBJSGlzdG9yeSB7XHJcbiAgICBleHRlbmQoaGl0ZW0pIHtcclxuICAgICAgICBpZiAod2luZG93Lmhpc3Rvcnkuc3RhdGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoaGl0ZW0uc3RhdGUsIGhpdGVtLnRpdGxlLCBoaXRlbS51cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKGhpdGVtLnN0YXRlLCBoaXRlbS50aXRsZSwgaGl0ZW0udXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN0b3JlKHN0YXRlKSB7XHJcbiAgICAgICAgdmFyIHJvdXRlciA9IHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSVJvdXRlcik7XHJcbiAgICAgICAgdmFyIHJvdXRlID0gcm91dGVyLnJvdXRlcy5maWx0ZXIoeCA9PiB7XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyB4LmN0b3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWUgPT0gc3RhdGUuY3RvcjtcclxuICAgICAgICB9KVswXTtcclxuICAgICAgICByb3V0ZS5zZWxlY3RvciA9IHN0YXRlLnNlbGVjdG9yO1xyXG4gICAgICAgIHJvdXRlLnJlc3RvcmUgPSB0cnVlO1xyXG4gICAgICAgIHJvdXRlci5yb3V0ZShyb3V0ZSk7XHJcbiAgICB9XHJcbn1cclxuaWYgKHdpbmRvdykge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKGV2ZW50U3RhdGUpID0+IHtcclxuICAgICAgICBHZXJhbml1bUFwcC5yZXNvbHZlKElIaXN0b3J5KS5yZXN0b3JlKGV2ZW50U3RhdGUuc3RhdGUpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SHRtbDVIaXN0b3J5QVBJLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2hpc3RvcnkvY29uY3JldGUvSHRtbDVIaXN0b3J5QVBJLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUxvZ2dlclwiO1xyXG5leHBvcnQgY2xhc3MgQ29uc29sZUxvZ2dlciBleHRlbmRzIElMb2dnZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLmxvZ09mbG9nID0gXCJcIjtcclxuICAgIH1cclxuICAgIGxvZyhlcnIpIHtcclxuICAgICAgICB0aGlzLmxvZ09mbG9nICs9IGVyci5tZXNzYWdlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gZXJyb3I6IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ09mbG9nO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbnNvbGVMb2dnZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXhjZXB0aW9ucy9sb2dnaW5nL2NvbmNyZXRlL0NvbnNvbGVMb2dnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFN0YXRlZnVsbFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3QvU3RhdGVmdWxsUmVxdWVzdFwiO1xyXG5leHBvcnQgY2xhc3MgQWpheFJlcXVlc3QgZXh0ZW5kcyBTdGF0ZWZ1bGxSZXF1ZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNhdGNoUHJvbWlzZSA9IGVycm9yO1xyXG4gICAgfVxyXG4gICAgY2F0Y2hQcm9taXNlKGVycikgeyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWpheFJlcXVlc3QuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmFja2VuZC9jb25jcmV0ZS9hamF4L0FqYXhSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFdmVudFJlcXVlc3QgfSBmcm9tIFwiLi9FdmVudFJlcXVlc3RcIjtcclxuaW1wb3J0IHsgSVN0YXRlTWFuYWdlciB9IGZyb20gXCIuLi8uLi9zdGF0ZXMvaW50ZXJmYWNlcy9JU3RhdGVNYW5hZ2VyXCI7XHJcbmV4cG9ydCBjbGFzcyBTdGF0ZWZ1bGxSZXF1ZXN0IGV4dGVuZHMgRXZlbnRSZXF1ZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kID0gKHN1cGVyX3NlbmQpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGVzID0gdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZShJU3RhdGVNYW5hZ2VyKS5hbGwoKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlcyAhPSBudWxsIHx8IHN0YXRlcy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXRlcy5maWx0ZXIoeCA9PiB7IGlmICh4LnN5bmNocm9uaXplcilcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IH0pXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcl9zZW5kKHN0YXRlLnN5bmNocm9uaXplcilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbih4ID0+IHsgc3RhdGUub2J0YWluKHgpOyB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdGF0ZWZ1bGxSZXF1ZXN0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvYWJzdHJhY3QvU3RhdGVmdWxsUmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gXCIuL1JlcXVlc3RcIjtcclxuaW1wb3J0IHsgSUNvbW11bmljYXRvciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lDb21tdW5pY2F0b3JcIjtcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvbkV4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2JhY2tlbmQvQ29tbXVuaWNhdGlvbkV4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgRXZlbnRSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdCB7XHJcbiAgICAvKipcclxuICAgICAqIHNlbmQgcmVxdWVzdCB0byBzZXJ2ZXJcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVsZXNzIHlvdXIgcmVxdWVzdCBub3QgcmFpc2Ugc3RhdGUtc3luYyBldmVudFxyXG4gICAgICovXHJcbiAgICBzZW5kKGRhdGEsIHN0YXRlbGVzcyA9IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW11bmljYXRvciA9IHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSUNvbW11bmljYXRvcik7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBjb21tdW5pY2F0b3Iuc2VuZChkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gY29tbXVuaWNhdG9yLnJlY2l2ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0ZWxlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhaXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGNoKG5ldyBDb21tdW5pY2F0aW9uRXhjZXB0aW9uKGV4KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJhaXNlKCkge1xyXG4gICAgICAgIHN1cGVyLnJhaXNlKHN1cGVyLnNlbmQpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUV2ZW50UmVxdWVzdC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iYWNrZW5kL2Fic3RyYWN0L0V2ZW50UmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgSUNvbW11bmljYXRvciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lDb21tdW5pY2F0b3JcIjtcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi4vLi4vYmVoYXZpb3JzL2V2ZW50cy9hYnN0cmFjdC9FdmVudFwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvbG9nZ2luZy9pbnRlcmZhY2VzL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvbkV4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2JhY2tlbmQvQ29tbXVuaWNhdGlvbkV4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgUmVxdWVzdCBleHRlbmRzIEV2ZW50IHtcclxuICAgIHNlbmQoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW11bmljYXRvciA9IHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSUNvbW11bmljYXRvcik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBjb21tdW5pY2F0b3Iuc2VuZChkYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21tdW5pY2F0b3IucmVjaXZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGNoKG5ldyBDb21tdW5pY2F0aW9uRXhjZXB0aW9uKGV4KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNhdGNoKGVycikge1xyXG4gICAgICAgIGlmICh0aGlzLmNhdGNoUHJvbWlzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhdGNoUHJvbWlzZShlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2dnZXIgPSB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlKElMb2dnZXIpO1xyXG4gICAgICAgIGlmIChsb2dnZXIpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZXF1ZXN0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvYWJzdHJhY3QvUmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0L1JvdXRlclwiO1xyXG5pbXBvcnQgeyBIaXN0b3J5SXRlbSB9IGZyb20gXCIuLi8uLi9oaXN0b3J5L2NvbnRyYWN0cy9IaXN0b3J5SXRlbVwiO1xyXG5pbXBvcnQgeyBJSGlzdG9yeSB9IGZyb20gXCIuLi8uLi9oaXN0b3J5L2ludGVyZmFjZXMvSUhpc3RvcnlcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5leHBvcnQgY2xhc3MgQmFzaWNSb3V0ZXIgZXh0ZW5kcyBSb3V0ZXIge1xyXG4gICAgQ3VycmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudDtcclxuICAgIH1cclxuICAgIHJvdXRlYXJlYSgpIHtcclxuICAgICAgICByZXR1cm4gJy5hcHAnO1xyXG4gICAgfVxyXG4gICAgcm91dGUoY3VycmVudCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50ID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBjdXJyZW50LnJlc3RvcmUgPyBjdXJyZW50LnNlbGVjdG9yIDogdGhpcy5yb3V0ZWFyZWEoKTtcclxuICAgICAgICB2YXIgcm91dGVkID0gR2VyYW5pdW1BcHAuaW5zdGFudGlhdGUoY3VycmVudC5jdG9yLCBjdXJyZW50LnBhcmFtcyk7XHJcbiAgICAgICAgdmFyIGV4ZWN1dGluZyA9IGN1cnJlbnQuZXhlY3V0YWJsZSA/IGN1cnJlbnQuZXhlY3V0YWJsZSA6ICd0b1N0cmluZyc7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50LnJlc3RvcmUpIHtcclxuICAgICAgICAgICAgdmFyIF9oaXN0b3J5ID0gbmV3IEhpc3RvcnlJdGVtKCk7XHJcbiAgICAgICAgICAgIF9oaXN0b3J5LnVybCA9IGN1cnJlbnQudXJsO1xyXG4gICAgICAgICAgICBfaGlzdG9yeS50aXRsZSA9IGRvY3VtZW50LnRpdGxlO1xyXG4gICAgICAgICAgICBfaGlzdG9yeS5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIGN0b3I6IGN1cnJlbnQuY3Rvci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSUhpc3RvcnkpLmV4dGVuZChfaGlzdG9yeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvdXRlZFtcIiNyb3V0ZWRcIl0gPSB7XHJcbiAgICAgICAgICAgIHBhcmFtczogY3VycmVudC5wYXJhbXMsXHJcbiAgICAgICAgICAgIHJlc3RvcmU6IGN1cnJlbnQucmVzdG9yZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcm91dGVkW2V4ZWN1dGluZ10oc2VsZWN0b3IpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2ljUm91dGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvY29uY3JldGUvQmFzaWNSb3V0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IElSb3V0ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JUm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlTWF0Y2ggfSBmcm9tIFwiLi4vY29udHJhY3RzL1JvdXRlTWF0Y2hcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tIFwiLi4vY29uY3JldGUvZGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgeyBBcnJheUhlbHBlciB9IGZyb20gXCIuLi8uLi9kZWNsYXJlL2FycmF5XCI7XHJcbmV4cG9ydCBjbGFzcyBSb3V0ZXIgZXh0ZW5kcyBJUm91dGVyIHtcclxuICAgIGdldCByb3V0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlcygpO1xyXG4gICAgfVxyXG4gICAgcm91dGVCeVVybCh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXRjaCh1cmwpO1xyXG4gICAgfVxyXG4gICAgbWF0Y2godXJsLCBwYXJhbXMpIHtcclxuICAgICAgICBpZiAodGhpcy5yb3V0ZXMubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIHZhciBjdG9yQ29sbGVjdGlvbiA9IHRoaXMucm91dGVzLmZpbHRlcih4ID0+IHgudXJsID09IHVybCk7XHJcbiAgICAgICAgaWYgKHVybCA9PSAnLycgJiYgY3RvckNvbGxlY3Rpb24ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdmFyIHNob3J0ZXN0Um91dGUgPSB0aGlzLnJvdXRlcy5yZWR1Y2UoKGEsIGIpID0+IGEudXJsLmxlbmd0aCA8IGIudXJsLmxlbmd0aCA/IGEgOiBiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNob3J0ZXN0Um91dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdG9yQ29sbGVjdGlvbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgc2VnbWVudHMgPSBBcnJheUhlbHBlci5yZW1vdmUodXJsLnNwbGl0KCcvJyksICgnJykpO1xyXG4gICAgICAgICAgICB2YXIgY3V0U2VnbWVudHMgPSBzZWdtZW50cy5maWx0ZXIoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpICE9IHNlZ21lbnRzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgcm91dGUgPSB0aGlzLm1hdGNoKCcvJyArIGN1dFNlZ21lbnRzLmpvaW4oJy8nKSk7XHJcbiAgICAgICAgICAgIGlmICghcm91dGUucGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgcm91dGUucGFyYW1zID0gW107XHJcbiAgICAgICAgICAgIHJvdXRlLnBhcmFtcy5wdXNoKHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWF0Y2ggPSBuZXcgUm91dGVNYXRjaCgpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWF0Y2gsIGN0b3JDb2xsZWN0aW9uWzBdKTtcclxuICAgICAgICBtYXRjaC5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgfVxyXG59XHJcbmlmICh3aW5kb3cpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgIHZhciByb3V0ZXIgPSBHZXJhbml1bUFwcC5yZXNvbHZlKElSb3V0ZXIpO1xyXG4gICAgICAgIHZhciByb3V0ZSA9IHJvdXRlci5yb3V0ZUJ5VXJsKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgcm91dGVyLnJvdXRlKHJvdXRlKTtcclxuICAgIH0pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJvdXRlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2Fic3RyYWN0L1JvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tIFwiLi9Sb3V0ZVwiO1xyXG5leHBvcnQgY2xhc3MgUm91dGVNYXRjaCBleHRlbmRzIFJvdXRlIHtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Sb3V0ZU1hdGNoLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvY29udHJhY3RzL1JvdXRlTWF0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEJhc2VTdG9yYWdlIH0gZnJvbSBcIi4uL2Fic3RyYWN0L0Jhc2VTdG9yYWdlXCI7XHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2UgZXh0ZW5kcyBCYXNlU3RvcmFnZSB7XHJcbiAgICB3cml0ZShkYXRhLCBzdG9yYWdlTmFtZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VOYW1lLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICB9XHJcbiAgICByZWFkKHN0b3JhZ2VOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZU5hbWUpKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Mb2NhbFN0b3JhZ2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vc3RvcmFnZS9jb25jcmV0ZS9Mb2NhbFN0b3JhZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IElTdG9yYWdlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSVN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgQXJyYXlIZWxwZXIgfSBmcm9tIFwiLi4vLi4vZGVjbGFyZS9hcnJheVwiO1xyXG5leHBvcnQgY2xhc3MgQmFzZVN0b3JhZ2UgZXh0ZW5kcyBJU3RvcmFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2VOYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIGFkZChtb2RlbCkge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG1vZGVsKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlbW92ZShpZCkge1xyXG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuc2VhcmNoRm9yKGlkKTtcclxuICAgICAgICBpZiAobW9kZWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlKEFycmF5SGVscGVyLnJlbW92ZSh0aGlzLmNvbGxlY3Rpb24sIG1vZGVsKSwgdGhpcy5zdG9yYWdlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZ2V0KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoRm9yKGlkKTtcclxuICAgIH1cclxuICAgIGFsbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkKHRoaXMuc3RvcmFnZU5hbWUpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbGxlY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlYWQodGhpcy5zdG9yYWdlTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZShuZXcgQXJyYXkoKSwgdGhpcy5zdG9yYWdlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQodGhpcy5zdG9yYWdlTmFtZSk7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hGb3IoaWQpIHtcclxuICAgICAgICB2YXIgZW51bWVyYWJsZSA9IHRoaXMuY29sbGVjdGlvblxyXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geC5pZCA9PSBpZCk7XHJcbiAgICAgICAgaWYgKGVudW1lcmFibGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZW51bWVyYWJsZVswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmFzZVN0b3JhZ2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vc3RvcmFnZS9hYnN0cmFjdC9CYXNlU3RvcmFnZS5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSVRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVRlbXBsYXRlRW5naW5lXCI7XHJcbmV4cG9ydCBjbGFzcyBDbGllbnRUZW1wbGF0ZUVuZ2luZSBleHRlbmRzIElUZW1wbGF0ZUVuZ2luZSB7XHJcbiAgICBwYXJzZSh0ZW1wbGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZSh0ZW1wbGF0ZS50ZW1wbGF0ZSkpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsaWVudFRlbXBsYXRlRW5naW5lLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3RlbXBsYXRpbmcvY29uY3JldGUvbXVzdGFjaGUvQ2xpZW50VGVtcGxhdGVFbmdpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IElWYWxpZGF0aW5nUmVwb3J0ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JVmFsaWRhdGF0aW5nUmVwb3J0ZXJcIjtcclxuZXhwb3J0IGNsYXNzIE5vdGlmeVZhbGlkYXRpbmdSZXBvcnRlciBleHRlbmRzIElWYWxpZGF0aW5nUmVwb3J0ZXIge1xyXG4gICAgcmVwb3J0KHZpZXdET00sIHZhbGlkYXRpbmdSZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB2YWxpZGF0aW5nUmVzdWx0LmVycm9ycy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVkFMTElEQVRJTkdfRVJSIFsnICsgeC5uYW1lICsgJ106JyArIHgubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5vdGlmeVZhbGlkYXRpbmdSZXBvcnRlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92YWxpZGF0aW5nL3JlcG9ydGVyL2NvbmNyZXRlL05vdGlmeVZhbGlkYXRpbmdSZXBvcnRlci5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgVmlld0JpbmRlciB9IGZyb20gXCIuLi9hYnN0cmFjdC9WaWV3QmluZGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBCYXNlVmlld0JpbmRlciBleHRlbmRzIFZpZXdCaW5kZXIge1xyXG4gICAgYmluZGluZyh2aWV3LCBiaW5kaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmcuYmluZCh5aWVsZCB2aWV3LkRPTSgpLCB2aWV3LmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2VWaWV3QmluZGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdiaW5kaW5nL2NvbmNyZXRlL0Jhc2VWaWV3QmluZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBJVmlld0JpbmRlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lWaWV3QmluZGVyXCI7XHJcbmltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3JlZmxlY3Rpb24vUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgSVZhbGlkYXRpbmdSZXBvcnRlciB9IGZyb20gXCIuLi8uLi92YWxpZGF0aW5nL3JlcG9ydGVyL2ludGVyZmFjZXMvSVZhbGlkYXRhdGluZ1JlcG9ydGVyXCI7XHJcbmltcG9ydCB7IEFycmF5SGVscGVyIH0gZnJvbSBcIi4uLy4uL2RlY2xhcmUvYXJyYXlcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5leHBvcnQgY2xhc3MgVmlld0JpbmRlciBleHRlbmRzIElWaWV3QmluZGVyIHtcclxuICAgIGJpbmQoY29udGV4dCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHRoaXMuZXhlYyhjb250ZXh0LnZpZXdET00sIGNvbnRleHQuYmluZGluZ0ZsYWdzKTtcclxuICAgICAgICAgICAgdGhpcy52YWxpZChjb250ZXh0LnZpZXdET00pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC52aWV3RE9NO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFsaWQodmlldykge1xyXG4gICAgICAgIHZhciB2bSA9IHZpZXcuZGF0YTtcclxuICAgICAgICBpZiAodm0udmFsaWRhdG9ycykge1xyXG4gICAgICAgICAgICB2YXIgdmFsaWRhdGVkUHJvcGVydGllcyA9IEFycmF5SGVscGVyLmdyb3VwQnkodm0udmFsaWRhdG9ycywgJ3ZhbGlkYXRlZFByb3BlcnR5TmFtZScpO1xyXG4gICAgICAgICAgICB2YWxpZGF0ZWRQcm9wZXJ0aWVzLmZvckVhY2godmFsaWRhdG9ycyA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWRQcm9wID0gdmFsaWRhdG9yc1swXS52YWxpZGF0ZWRQcm9wZXJ0eU5hbWU7XHJcbiAgICAgICAgICAgICAgICBQcm9wZXJ0eS5yZWRlZmluZSh2aWV3LmRhdGEsIHZhbGlkUHJvcCwgKHZhbCkgPT4geyByZXR1cm4gdmFsOyB9LCBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25GYXVsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdG9ycy5maWx0ZXIoeCA9PiB4LnZhbGlkYXRlZFByb3BlcnR5TmFtZSA9PT0gdmFsaWRQcm9wKS5mb3JFYWNoKHZhbGlkYXRvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbCwgdGhpcy5jbG9uZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25GYXVsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXJhbml1bUFwcC5yZXNvbHZlKElWYWxpZGF0aW5nUmVwb3J0ZXIpLnJlcG9ydCh2aWV3LCB2YWxpZGF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0aW9uRmF1bHQgPyB1bmRlZmluZWQgOiB2YWw7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhlYyhWaWV3RE9NLCBiaW5kaW5ncykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmluZGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuYmluZGluZyhWaWV3RE9NLCBiaW5kaW5nc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1WaWV3QmluZGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdiaW5kaW5nL2Fic3RyYWN0L1ZpZXdCaW5kZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEJhc2VCeUF0dHJpYnV0ZUJpbmRpbmcgfSBmcm9tIFwiLi9iYXNlL0Jhc2VCeUF0dHJpYnV0ZUJpbmRpbmdcIjtcclxuaW1wb3J0IHsgUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vcmVmbGVjdGlvbi9Qcm9wZXJ0eVwiO1xyXG5leHBvcnQgY2xhc3MgQmFzZUZpZWxkQmluZGluZyBleHRlbmRzIEJhc2VCeUF0dHJpYnV0ZUJpbmRpbmcge1xyXG4gICAgZ2V0IGF0dHJpYnV0ZSgpIHsgcmV0dXJuICdkYXRhLWZpZWxkJzsgfVxyXG4gICAgYmluZGluZyhET01PYmplY3QsIG1vZGVsKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gRE9NT2JqZWN0LmdldEF0dHJpYnV0ZSh0aGlzLmF0dHJpYnV0ZSk7XHJcbiAgICAgICAgUHJvcGVydHkucmVkZWZpbmUobW9kZWwsIHZhbHVlLCAodmFsKSA9PiB2YWwsICh2YWwpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgZXZlbnQgPSBcIiNldmVudDpzZXRbXCIgKyB2YWx1ZSArIFwiXVwiO1xyXG4gICAgICAgIGlmIChtb2RlbFtldmVudF0pIHtcclxuICAgICAgICAgICAgbW9kZWxbZXZlbnRdLmJpbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBET01PYmplY3QuaW5uZXJIVE1MID0gbW9kZWxbdmFsdWVdO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlRmllbGRCaW5kaW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvQmFzZUZpZWxkQmluZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgSUJpbmRpbmcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pYmluZGluZ1wiO1xyXG5leHBvcnQgY2xhc3MgQmluZGluZyBleHRlbmRzIElCaW5kaW5nIHtcclxuICAgIGJpbmQoRE9NLCBtb2RlbCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBET01PYmplY3RzID0gdGhpcy5kZXRlY3Rpb24oRE9NKTtcclxuICAgICAgICAgICAgRE9NT2JqZWN0cy5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kaW5nKHYsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIodik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJpbmRpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9hYnN0cmFjdC9iaW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBCYXNlQnlBdHRyaWJ1dGVCaW5kaW5nIH0gZnJvbSBcIi4vYmFzZS9CYXNlQnlBdHRyaWJ1dGVCaW5kaW5nXCI7XHJcbmltcG9ydCB7IFN0cmluZ0hlbHBlciB9IGZyb20gXCIuLi8uLi9kZWNsYXJlL3N0cmluZ1wiO1xyXG5leHBvcnQgY2xhc3MgQmFzZUNsaWNrQmluZGluZyBleHRlbmRzIEJhc2VCeUF0dHJpYnV0ZUJpbmRpbmcge1xyXG4gICAgZ2V0IGF0dHJpYnV0ZSgpIHsgcmV0dXJuICdvbmNsaWNrJzsgfVxyXG4gICAgYmluZGluZyhET01PYmplY3QsIG1vZGVsKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gRE9NT2JqZWN0LmdldEF0dHJpYnV0ZSh0aGlzLmF0dHJpYnV0ZSk7XHJcbiAgICAgICAgdmFyIHByb2Nlc3NlZCA9IHRoaXMuc3BsaXRNZXRob2RBbmRQYXJhbXModmFsdWUpO1xyXG4gICAgICAgIHZhciBtZXRob2QgPSBtb2RlbFtwcm9jZXNzZWQubWV0aG9kXTtcclxuICAgICAgICBpZiAobWV0aG9kICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgRE9NT2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IG1ldGhvZC5hcHBseShtb2RlbCwgcHJvY2Vzc2VkLnBhcmFtcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3BsaXRNZXRob2RBbmRQYXJhbXModmFsdWUpIHtcclxuICAgICAgICB2YWx1ZSA9IFN0cmluZ0hlbHBlci5yZXBsYWNlQWxsKHZhbHVlLCAnOycsICcnKTtcclxuICAgICAgICB2YXIgaW5kZXhPZkJyYWNrZXQgPSB2YWx1ZS5pbmRleE9mKCcoJyk7XHJcbiAgICAgICAgaWYgKGluZGV4T2ZCcmFja2V0ID09IC0xKVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogbnVsbFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB0aGlzLnBhcnNlUGFyYW1zKHZhbHVlLnN1YnN0cmluZyhpbmRleE9mQnJhY2tldCkpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogdmFsdWUuc3Vic3RyaW5nKDAsIGluZGV4T2ZCcmFja2V0KSxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcGFyc2VQYXJhbXMocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtcyA9PSBcIigpXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIHZhciB3aXRob3V0QnJhY2tldHMgPSBTdHJpbmdIZWxwZXIucmVwbGFjZUFsbChTdHJpbmdIZWxwZXIucmVwbGFjZUFsbChwYXJhbXMsICdcXFxcKCcsICcnKSwgJ1xcXFwpJywgJycpO1xyXG4gICAgICAgIHZhciBfYXJndW1lbnRzID0gW107XHJcbiAgICAgICAgd2l0aG91dEJyYWNrZXRzLnNwbGl0KCcsJykuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHZhciBvYmplY3QgPSBKU09OLnBhcnNlKHgpO1xyXG4gICAgICAgICAgICAgICAgX2FyZ3VtZW50cy5wdXNoKG9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIF9hcmd1bWVudHMucHVzaCh4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBfYXJndW1lbnRzO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2VDbGlja0JpbmRpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9jb25jcmV0ZS9CYXNlQ2xpY2tCaW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBCYXNlQmluZGluZyB9IGZyb20gXCIuL2Jhc2UvQmFzZUJpbmRpbmdcIjtcclxuaW1wb3J0IHsgUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vcmVmbGVjdGlvbi9Qcm9wZXJ0eVwiO1xyXG5leHBvcnQgY2xhc3MgQmFzZUlucHV0QmluZGluZyBleHRlbmRzIEJhc2VCaW5kaW5nIHtcclxuICAgIGdldCBhdHRyaWJ1dGUoKSB7IHJldHVybiAnaW5wdXQnOyB9XHJcbiAgICBiaW5kaW5nKERPTU9iamVjdCwgbW9kZWwpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBET01PYmplY3QuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICAgICAgUHJvcGVydHkucmVkZWZpbmUobW9kZWwsIHZhbHVlLCAodmFsKSA9PiB2YWwsICh2YWwpID0+IHtcclxuICAgICAgICAgICAgRE9NT2JqZWN0LmlubmVySFRNTCA9IHZhbDtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgZXZlbnQgPSBcIiNldmVudDpzZXRbXCIgKyB2YWx1ZSArIFwiXVwiO1xyXG4gICAgICAgIGlmIChtb2RlbFtldmVudF0pIHtcclxuICAgICAgICAgICAgbW9kZWxbZXZlbnRdLmJpbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBET01PYmplY3Qubm9kZVZhbHVlID0gbW9kZWxbdmFsdWVdO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBET01PYmplY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcclxuICAgICAgICAgICAgbW9kZWxbdmFsdWVdID0gRE9NT2JqZWN0Lm5vZGVWYWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNsZWFyKCkgeyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmFzZUlucHV0QmluZGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2NvbmNyZXRlL0Jhc2VJbnB1dEJpbmRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IEJhc2VCeUF0dHJpYnV0ZUJpbmRpbmcgfSBmcm9tIFwiLi9iYXNlL0Jhc2VCeUF0dHJpYnV0ZUJpbmRpbmdcIjtcclxuaW1wb3J0IHsgSUJpbmRpbmcgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pYmluZGluZ1wiO1xyXG5pbXBvcnQgeyBJVmlld0VuZ2luZSB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2ludGVyZmFjZXMvaXZpZXdlbmdpbmVcIjtcclxuaW1wb3J0IHsgQmluZENvbnRleHQgfSBmcm9tIFwiLi4vLi4vdmlld2JpbmRpbmcvY29udHJhY3RzL0JpbmRDb250ZXh0XCI7XHJcbmltcG9ydCB7IElWaWV3QmluZGVyIH0gZnJvbSBcIi4uLy4uL3ZpZXdiaW5kaW5nL2ludGVyZmFjZXMvSVZpZXdCaW5kZXJcIjtcclxuaW1wb3J0IHsgU3RyaW5nSGVscGVyIH0gZnJvbSBcIi4uLy4uL2RlY2xhcmUvc3RyaW5nXCI7XHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29sbGVjdGlvbkJpbmRpbmcgZXh0ZW5kcyBCYXNlQnlBdHRyaWJ1dGVCaW5kaW5nIHtcclxuICAgIGdldCBhdHRyaWJ1dGUoKSB7IHJldHVybiAnZGF0YS1tdWx0aXBsZSc7IH1cclxuICAgIGJpbmRpbmcoRE9NT2JqZWN0LCBtb2RlbCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gbW9kZWxbRE9NT2JqZWN0LmdldEF0dHJpYnV0ZSh0aGlzLmF0dHJpYnV0ZSldO1xyXG4gICAgICAgICAgICBET01PYmplY3QucmVtb3ZlQXR0cmlidXRlKHRoaXMuYXR0cmlidXRlKTtcclxuICAgICAgICAgICAgY29uc3QgRE9NQ29sbGVjdGlvbiA9IG5ldyBIVE1MRWxlbWVudCgpO1xyXG4gICAgICAgICAgICBpZiAoY29sbGVjdGlvbiA9PSB1bmRlZmluZWQgfHwgY29sbGVjdGlvbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgRE9NT2JqZWN0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0cGwgPSBTdHJpbmdIZWxwZXIucmVwbGFjZUFsbChTdHJpbmdIZWxwZXIucmVwbGFjZUFsbChET01PYmplY3Qub3V0ZXJIVE1MLCAnXFxcXFtcXFxcWycsICd7eycpLCAnXFxcXF1cXFxcXScsICd9fScpO1xyXG4gICAgICAgICAgICBsZXQgYmluZGluZ3MgPSB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlQWxsKElCaW5kaW5nKS5maWx0ZXIoeCA9PiB4LmNvbnN0cnVjdG9yLm5hbWUgIT0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG1vZGVsLCBjb2xsZWN0aW9uW2ldKTtcclxuICAgICAgICAgICAgICAgIG1vZGVsLnZpZXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRwbDtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsZXQgX3ZpZXcgPSB5aWVsZCBJVmlld0VuZ2luZS5WaWV3RW5naW5lVmlldyhtb2RlbCwgJycpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN0eCA9IG5ldyBCaW5kQ29udGV4dChfdmlldywgYmluZGluZ3MpO1xyXG4gICAgICAgICAgICAgICAgeWllbGQgdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZShJVmlld0JpbmRlcikuYmluZChjdHgpO1xyXG4gICAgICAgICAgICAgICAgRE9NQ29sbGVjdGlvbi5hcHBlbmRDaGlsZCh5aWVsZCBfdmlldy5ET00oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRE9NT2JqZWN0LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKERPTUNvbGxlY3Rpb24sIERPTU9iamVjdCk7XHJcbiAgICAgICAgICAgIERPTU9iamVjdCA9IERPTUNvbGxlY3Rpb247XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmFzZUNvbGxlY3Rpb25CaW5kaW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvQmFzZUNvbGxlY3Rpb25CaW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gXCIuLi8uLi90ZW1wbGF0aW5nL2NvbnRyYWN0cy9UZW1wbGF0ZVwiO1xyXG5pbXBvcnQgeyBFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9FeGNlcHRpb25cIjtcclxuaW1wb3J0IHsgSVRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4uLy4uL3RlbXBsYXRpbmcvaW50ZXJmYWNlcy9JVGVtcGxhdGVFbmdpbmVcIjtcclxuZXhwb3J0IGNsYXNzIFZpZXcgZXh0ZW5kcyBUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucHJvdGVjdFJlbmRlcihhcmd1bWVudHNbMV0pO1xyXG4gICAgICAgIHRoaXNbXCIlc2VsZWN0b3JcIl0gPSBhcmd1bWVudHNbMF07XHJcbiAgICB9XHJcbiAgICBET00oKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgbGV0IHZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3JlbmRlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB2aWV3ID0geWllbGQgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gdmlldy50ZW1wbGF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldCBzZWxlY3RvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tcIiVzZWxlY3RvclwiXTtcclxuICAgIH1cclxuICAgIHByb3RlY3RSZW5kZXIoaHRtbCkge1xyXG4gICAgICAgIGlmICghdGhpcy50ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gaHRtbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ3ZpZXcgdGVtcGxhdGUgaXMgZW1wdHkhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbigndmlldyBkYXRhIGlzIG5vdCBhc3NpZ25lZCEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVuZGVyZWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ3ZpZXcgYWxyZWFkeSByZW5kZXJlZCEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZW5naW5lID0gdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZShJVGVtcGxhdGVFbmdpbmUpO1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0geWllbGQgZW5naW5lLnBhcnNlKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHJlc29sdmUodGhpcykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZpZXcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlldy9hYnN0cmFjdC9WaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgVGVtcGxhdGUge1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRlbXBsYXRlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3RlbXBsYXRpbmcvY29udHJhY3RzL1RlbXBsYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBWaWV3RW5naW5lIH0gZnJvbSBcIi4uL2Fic3RyYWN0L1ZpZXdFbmdpbmVcIjtcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2xvZ2dpbmcvaW50ZXJmYWNlcy9JTG9nZ2VyXCI7XHJcbmV4cG9ydCBjbGFzcyBCYXNlVmlld0VuZ2luZSBleHRlbmRzIFZpZXdFbmdpbmUge1xyXG4gICAgcHVibGlzaCh2aWV3KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSB2aWV3LnNlbGVjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvbUxvYWRlZCA9IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnQgJiYgIWRvbUxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmRvbUxvYWRlZChzZWxlY3Rvciwgdmlldy5kb20pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkb21Mb2FkZWQgJiYgIWVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VsZWN0b3IgZG9lcyBub3QgZXhpc3RzOiBcIiArIHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQodmlldy5kb20sIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlKElMb2dnZXIpLmxvZyhleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZG9tTG9hZGVkKHNlbGVjdG9yLCB2aWV3KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQodmlldywgZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlVmlld0VuZ2luZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3ZW5naW5lL2NvbmNyZXRlL0Jhc2VWaWV3RW5naW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBJVmlld0VuZ2luZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2l2aWV3ZW5naW5lXCI7XHJcbmltcG9ydCB7IEV4ZWN1dGVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRyYWN0cy9leGVjdXRlY29udGV4dFwiO1xyXG5pbXBvcnQgeyBCaW5kQ29udGV4dCB9IGZyb20gXCIuLi8uLi92aWV3YmluZGluZy9jb250cmFjdHMvQmluZENvbnRleHRcIjtcclxuaW1wb3J0IHsgSVZpZXdCaW5kZXIgfSBmcm9tIFwiLi4vLi4vdmlld2JpbmRpbmcvaW50ZXJmYWNlcy9JVmlld0JpbmRlclwiO1xyXG5leHBvcnQgY2xhc3MgVmlld0VuZ2luZSB7XHJcbiAgICBleGVjdXRlKGNvbnRleHQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB2YXIgdmlldyA9IHlpZWxkIElWaWV3RW5naW5lLlZpZXdFbmdpbmVWaWV3KGNvbnRleHQuaVZpZXdlZCwgY29udGV4dC5zZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIHZhciBleGVjQ3R4ID0gbmV3IEV4ZWN1dGVDb250ZXh0KGNvbnRleHQpO1xyXG4gICAgICAgICAgICB2YXIgYmluZGluZ0NvbnRleHQgPSBuZXcgQmluZENvbnRleHQodmlldywgZXhlY0N0eC5iaW5kaW5nRmxhZ3MpO1xyXG4gICAgICAgICAgICB2YXIgdmlld2JpbmRlciA9IHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSVZpZXdCaW5kZXIpO1xyXG4gICAgICAgICAgICB5aWVsZCB2aWV3YmluZGVyLmJpbmQoYmluZGluZ0NvbnRleHQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgIGRvbTogeWllbGQgdmlldy5ET00oKSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBjb250ZXh0LnNlbGVjdG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZpZXdFbmdpbmUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9hYnN0cmFjdC9WaWV3RW5naW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJQmluZGluZyB9IGZyb20gXCIuLi8uLi9iaW5kaW5nL2ludGVyZmFjZXMvaWJpbmRpbmdcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5leHBvcnQgY2xhc3MgRXhlY3V0ZUNvbnRleHQge1xyXG4gICAgY29uc3RydWN0b3Iodmlld0N0eCwgYmluZGluZ0ZsYWdzKSB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gdmlld0N0eC5pVmlld2VkO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgPSB2aWV3Q3R4LnNlbGVjdG9yO1xyXG4gICAgICAgIGlmICghYmluZGluZ0ZsYWdzKSB7XHJcbiAgICAgICAgICAgIGJpbmRpbmdGbGFncyA9IEdlcmFuaXVtQXBwLnJlc29sdmVBbGwoSUJpbmRpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJpbmRpbmdGbGFncyA9IGJpbmRpbmdGbGFncztcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1leGVjdXRlY29udGV4dC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3ZW5naW5lL2NvbnRyYWN0cy9leGVjdXRlY29udGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGVzL1N0YXRlXCI7XHJcbmltcG9ydCB7IHJvdXRlaWdub3JlIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmcvY29uY3JldGUvZGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgeyBJVmlld0VuZ2luZSB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2ludGVyZmFjZXMvaXZpZXdlbmdpbmVcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5sZXQgVmlld1N0YXRlID0gY2xhc3MgVmlld1N0YXRlIGV4dGVuZHMgU3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlZnVsbClcclxuICAgICAgICAgICAgdGhpcy5maWxsU3RhdGUoKTtcclxuICAgIH1cclxuICAgIGdldCBzdGF0ZWZ1bGwoKSB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgc2hvdyhzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpc1tcIiNWaWV3U3RhdGVcIl0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBteVN0YXRlID0geWllbGQgU3RhdGUuZ2V0KHRoaXMuY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgbXlTdGF0ZVtcIiNWaWV3U3RhdGVcIl0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbXlTdGF0ZVtcInNob3dcIl0oc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXNbXCIjVmlld1N0YXRlXCJdO1xyXG4gICAgICAgICAgICAgICAgR2VyYW5pdW1BcHAucmVzb2x2ZShJVmlld0VuZ2luZSkuZXhlY3V0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaVZpZXdlZDogdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblZpZXdTdGF0ZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgcm91dGVpZ25vcmVcclxuXSwgVmlld1N0YXRlKTtcclxuZXhwb3J0IHsgVmlld1N0YXRlIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZpZXdTdGF0ZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3bW9kZWxzL2Fic3RyYWN0L1ZpZXdTdGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgcm91dGVpZ25vcmUgfSBmcm9tIFwiLi4vcm91dGluZy9jb25jcmV0ZS9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSBcIi4uL21vZGVscy9Nb2RlbFwiO1xyXG5pbXBvcnQgeyBJU3RhdGVNYW5hZ2VyIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9JU3RhdGVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IElSZXF1ZXN0IH0gZnJvbSBcIi4uL2JhY2tlbmQvaW50ZXJmYWNlcy9JUmVxdWVzdFwiO1xyXG5pbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmxldCBTdGF0ZSA9IGNsYXNzIFN0YXRlIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhdGVmdWxsID0gdHJ1ZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgaWYgKHN0YXRlZnVsbClcclxuICAgICAgICAgICAgdGhpcy5maWxsU3RhdGUoKTtcclxuICAgIH1cclxuICAgIGZpbGxTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5uYW1lICE9IFwiVmlld1N0YXRlXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlTWFuYWdlciA9IEdlcmFuaXVtQXBwLnJlc29sdmUoSVN0YXRlTWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHN0YXRlTWFuYWdlci5yZXNvbHZlKHRoaXMuY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlTWFuYWdlci5yZWdpc3Rlcih0aGlzLmNvbnN0cnVjdG9yLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldCh0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRlID0gR2VyYW5pdW1BcHAucmVzb2x2ZShJU3RhdGVNYW5hZ2VyKS5yZXNvbHZlKHR5cGUpO1xyXG4gICAgICAgICAgICBpZiAoIXN0YXRlKVxyXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBuZXcgdHlwZSgpO1xyXG4gICAgICAgICAgICB5aWVsZCBzdGF0ZS5zeW5jKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzW1wiYGNvbnRhaW5lclwiXTtcclxuICAgICAgICBjb25zdCBzdGF0ZU1hbmFnZXIgPSBjb250YWluZXIucmVzb2x2ZShJU3RhdGVNYW5hZ2VyKTtcclxuICAgICAgICBzdGF0ZU1hbmFnZXIucmVsZWFzZSh0aGlzLmNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuICAgIHN5bmMoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3luY2hyb25pemVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdCA9IHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB5aWVsZCByZXF1ZXN0LnNlbmQodGhpcy5zeW5jaHJvbml6ZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnRhaW4oZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuU3RhdGUgPSBfX2RlY29yYXRlKFtcclxuICAgIHJvdXRlaWdub3JlXHJcbl0sIFN0YXRlKTtcclxuZXhwb3J0IHsgU3RhdGUgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3RhdGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vc3RhdGVzL1N0YXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyByb3V0ZWlnbm9yZSB9IGZyb20gXCIuLi9yb3V0aW5nL2NvbmNyZXRlL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgSUNsb25lYWJsZSB9IGZyb20gXCIuLi9yZWZsZWN0aW9uL2Nsb25pbmcvZGVjb3JhdG9ycy9JQ2xvbmVhYmxlXCI7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4uL2JlaGF2aW9ycy9ldmVudHMvYWJzdHJhY3QvRXZlbnRcIjtcclxuaW1wb3J0IHsgSVJlcXVlc3QgfSBmcm9tIFwiLi4vYmFja2VuZC9pbnRlcmZhY2VzL0lSZXF1ZXN0XCI7XHJcbmxldCBNb2RlbCA9IGNsYXNzIE1vZGVsIGV4dGVuZHMgRXZlbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXTtcclxuICAgIH1cclxuICAgIG9idGFpbihkYXRhKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gICAgICAgIHRoaXMucmFpc2UodGhpcyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHN5bmNocm9uaXplIG1vZGVsIHdpdGggc2VydmVyIHN0YXRlXHJcbiAgICAgKi9cclxuICAgIHN5bmMoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3luY2hyb25pemVyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdCA9IHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB5aWVsZCByZXF1ZXN0LnNlbmQodGhpcy5zeW5jaHJvbml6ZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYnRhaW4oZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogb2JqZWN0IHVzZWQgYXMgc3luY2hyb25pemF0b3JcclxuICAgICAqL1xyXG4gICAgZ2V0IHN5bmNocm9uaXplcigpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfVxyXG59O1xyXG5Nb2RlbCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgcm91dGVpZ25vcmUsXHJcbiAgICBJQ2xvbmVhYmxlXHJcbl0sIE1vZGVsKTtcclxuZXhwb3J0IHsgTW9kZWwgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TW9kZWwuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vbW9kZWxzL01vZGVsLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmltcG9ydCB7IElDbG9uZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JQ2xvbmVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBJQ2xvbmVhYmxlKGNvbnN0cnVjdG9yKSB7XHJcbiAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIEdlcmFuaXVtQXBwLnJlc29sdmUoSUNsb25lcikuY2xvbmUodGhpcyk7XHJcbiAgICB9O1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlDbG9uZWFibGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcmVmbGVjdGlvbi9jbG9uaW5nL2RlY29yYXRvcnMvSUNsb25lYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElDbG9uZXIge1xyXG4gICAgY2xvbmUoc2FtcGxlKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklDbG9uZXIuY2xvbmVcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JQ2xvbmVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JlZmxlY3Rpb24vY2xvbmluZy9pbnRlcmZhY2VzL0lDbG9uZXIuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuaW1wb3J0IHsgSVJvdXRlciB9IGZyb20gXCIuLi8uLi9yb3V0aW5nL2ludGVyZmFjZXMvSVJvdXRlclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gaXMoY29uc3RydWN0b3IpIHtcclxuICAgIHZhciByb3V0ZXIgPSBHZXJhbml1bUFwcC5yZXNvbHZlKElSb3V0ZXIpO1xyXG4gICAgcmV0dXJuIHJvdXRlci5yb3V0ZXMuZmlsdGVyKHggPT4ge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyB4LmN0b3IoKTtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSA9PSBjb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgfSkubGVuZ3RoID4gMDtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oaXN0b3J5LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2hpc3RvcnkvZGVjb3JhdG9ycy9oaXN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gcHJvbWlzZWQodmFsdWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByb21pc2VkLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0cnVjdHVyZXMvUHJvbWlzZWQuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IElWaWV3RE9NIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSVZpZXdET01cIjtcclxuZXhwb3J0IGNsYXNzIFZpZXdET00gZXh0ZW5kcyBJVmlld0RPTSB7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Vmlld0RPTS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3RE9NL2Fic3RyYWN0L1ZpZXdET00uanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJVmlld0RPTSB7XHJcbiAgICBET00oKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklWaWV3RE9NLmdldFZpZXdET01cIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JVmlld0RPTS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3RE9NL2ludGVyZmFjZXMvSVZpZXdET00uanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
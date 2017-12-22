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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coherence_interfaces_ICoherenceContainer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coherence_concrete_InMemoryContainer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backend_concrete_ajax_AjaxCommunicator__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exceptions_runtime_InstantiatedException__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_concrete_Html5HistoryAPI__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exceptions_logging_concrete_ConsoleLogger__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__backend_concrete_ajax_AjaxRequest__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routing_concrete_BasicRouter__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__states_interfaces_IStateManager__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__storage_concrete_LocalStorage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__templating_concrete_mustache_ClientTemplateEngine__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__validating_reporter_concrete_NotifyValidatingReporter__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__viewbinding_concrete_BaseViewBinder__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__binding_concrete_BaseFieldBinding__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__binding_concrete_EventBinding__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__binding_concrete_BaseInputBinding__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__binding_concrete_BaseCollectionBinding__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__backend_interfaces_ICommunicator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__history_interfaces_IHistory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__exceptions_logging_interfaces_ILogger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__backend_interfaces_IRequest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__routing_interfaces_IRouter__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__storage_interfaces_IStorage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__templating_interfaces_ITemplateEngine__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__validating_reporter_interfaces_IValidatatingReporter__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__viewbinding_interfaces_IViewBinder__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__binding_interfaces_IBinding__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__viewengine_interfaces_IViewEngine__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__viewengine_concrete_BaseViewEngine__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__viewengine_concrete_BaseViewPublisher__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__viewengine_interfaces_IViewPublisher__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__binding_concrete_PropertyBinding__ = __webpack_require__(69);
































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
    isregistered(type) {
        return this["`container"].isregistered(type);
    }
    start(geranium) {
        if (this.instantiated) {
            throw new __WEBPACK_IMPORTED_MODULE_3__exceptions_runtime_InstantiatedException__["a" /* InstantiatedException */]("GeraniumApp.instantiate");
        }
        /** apply settings */
        Object.assign(geranium, geraniumDefault);
        /** apply container */
        this["`container"] = geranium.container ? new geranium.container() : new __WEBPACK_IMPORTED_MODULE_1__coherence_concrete_InMemoryContainer__["a" /* InMemoryContainer */]();
        /** register all settings */
        this.internalRegister(geranium);
        this.instantiated = true;
    }
    internalRegister(geranium) {
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_17__backend_interfaces_ICommunicator__["a" /* ICommunicator */], geranium.communicator, __WEBPACK_IMPORTED_MODULE_0__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Transient);
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_18__history_interfaces_IHistory__["a" /* IHistory */], geranium.historyprovider, __WEBPACK_IMPORTED_MODULE_0__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Singleton);
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_19__exceptions_logging_interfaces_ILogger__["a" /* ILogger */], geranium.logger, __WEBPACK_IMPORTED_MODULE_0__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Transient);
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_20__backend_interfaces_IRequest__["a" /* IRequest */], geranium.request, __WEBPACK_IMPORTED_MODULE_0__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Transient);
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_21__routing_interfaces_IRouter__["a" /* IRouter */], geranium.router, __WEBPACK_IMPORTED_MODULE_0__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Singleton);
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_8__states_interfaces_IStateManager__["a" /* IStateManager */], geranium.statemanager, __WEBPACK_IMPORTED_MODULE_0__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Singleton);
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_22__storage_interfaces_IStorage__["a" /* IStorage */], geranium.storage, __WEBPACK_IMPORTED_MODULE_0__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Singleton);
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_23__templating_interfaces_ITemplateEngine__["a" /* ITemplateEngine */], geranium.templating, __WEBPACK_IMPORTED_MODULE_0__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Transient);
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_24__validating_reporter_interfaces_IValidatatingReporter__["a" /* IValidatingReporter */], geranium.validationreporter, __WEBPACK_IMPORTED_MODULE_0__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Transient);
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_25__viewbinding_interfaces_IViewBinder__["a" /* IViewBinder */], geranium.viewbinder, __WEBPACK_IMPORTED_MODULE_0__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Singleton);
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_27__viewengine_interfaces_IViewEngine__["a" /* IViewEngine */], geranium.viewengine, __WEBPACK_IMPORTED_MODULE_0__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Singleton);
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_30__viewengine_interfaces_IViewPublisher__["a" /* IViewPublisher */], geranium.viewpublisher, __WEBPACK_IMPORTED_MODULE_0__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Singleton);
        geranium.bindings.forEach(binding => {
            this["`container"].register(__WEBPACK_IMPORTED_MODULE_26__binding_interfaces_IBinding__["a" /* IBinding */], binding, __WEBPACK_IMPORTED_MODULE_0__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Transient);
        });
    }
}
App.containerProperty = "`GeraniumApp";
const geraniumDefault = {
    communicator: __WEBPACK_IMPORTED_MODULE_2__backend_concrete_ajax_AjaxCommunicator__["a" /* AjaxCommunicator */],
    historyprovider: __WEBPACK_IMPORTED_MODULE_4__history_concrete_Html5HistoryAPI__["a" /* Html5HistoryAPI */],
    logger: __WEBPACK_IMPORTED_MODULE_5__exceptions_logging_concrete_ConsoleLogger__["a" /* ConsoleLogger */],
    request: __WEBPACK_IMPORTED_MODULE_6__backend_concrete_ajax_AjaxRequest__["a" /* AjaxRequest */],
    router: __WEBPACK_IMPORTED_MODULE_7__routing_concrete_BasicRouter__["a" /* BasicRouter */],
    statemanager: __WEBPACK_IMPORTED_MODULE_1__coherence_concrete_InMemoryContainer__["a" /* InMemoryContainer */],
    storage: __WEBPACK_IMPORTED_MODULE_9__storage_concrete_LocalStorage__["a" /* LocalStorage */],
    templating: __WEBPACK_IMPORTED_MODULE_10__templating_concrete_mustache_ClientTemplateEngine__["a" /* ClientTemplateEngine */],
    validationreporter: __WEBPACK_IMPORTED_MODULE_11__validating_reporter_concrete_NotifyValidatingReporter__["a" /* NotifyValidatingReporter */],
    viewbinder: __WEBPACK_IMPORTED_MODULE_12__viewbinding_concrete_BaseViewBinder__["a" /* BaseViewBinder */],
    viewengine: __WEBPACK_IMPORTED_MODULE_28__viewengine_concrete_BaseViewEngine__["a" /* BaseViewEngine */],
    viewpublisher: __WEBPACK_IMPORTED_MODULE_29__viewengine_concrete_BaseViewPublisher__["a" /* BaseViewPublisher */],
    bindings: [
        __WEBPACK_IMPORTED_MODULE_13__binding_concrete_BaseFieldBinding__["a" /* BaseFieldBinding */],
        __WEBPACK_IMPORTED_MODULE_15__binding_concrete_BaseInputBinding__["a" /* BaseInputBinding */],
        __WEBPACK_IMPORTED_MODULE_14__binding_concrete_EventBinding__["a" /* EventBinding */],
        __WEBPACK_IMPORTED_MODULE_16__binding_concrete_BaseCollectionBinding__["a" /* BaseCollectionBinding */],
        __WEBPACK_IMPORTED_MODULE_31__binding_concrete_PropertyBinding__["a" /* PropertyBinding */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Exception__ = __webpack_require__(9);

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
/* harmony export (immutable) */ __webpack_exports__["b"] = routes;
/* unused harmony export urlFromCtor */
/* unused harmony export routed */
/* harmony export (immutable) */ __webpack_exports__["a"] = routeignore;
/* unused harmony export routeroot */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contracts_Route__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contracts_RouteContext__ = __webpack_require__(42);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_abstract_View__ = __webpack_require__(16);
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
            if (isString || !!viewctr["declare"]) {
                const args = [selector];
                if (isString) {
                    args.push(viewctr);
                }
                let instView = __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__["a" /* default */].instantiate(EmptyView, args);
                instView.data = iviewed;
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
//# sourceMappingURL=IViewEngine.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = findAndFilter;
/* harmony export (immutable) */ __webpack_exports__["c"] = toHtmlArray;
/* harmony export (immutable) */ __webpack_exports__["b"] = nodeToArray;
function findAndFilter(set, query) {
    return set.map(root => {
        const parent = root.parentElement || root;
        return toHtmlArray(parent.querySelectorAll(query));
    }).reduce((p, n) => p.concat(n));
}
function toHtmlArray(nodes) {
    return nodeToArray(nodes);
}
function nodeToArray(nodes) {
    return Array.prototype.slice.call(nodes, 0);
}
//# sourceMappingURL=HtmlElementExtensions.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IBinding {
    bind(objectDOM, model) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IBinding.bind"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IBinding;

//# sourceMappingURL=IBinding.js.map

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewState__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_IViewEngine__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_decorators_history__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_contracts_HistoryItem__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_interfaces_IHistory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viewengine_interfaces_IViewPublisher__ = __webpack_require__(18);
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
                const dom = yield __WEBPACK_IMPORTED_MODULE_6__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_IViewEngine__["a" /* IViewEngine */]).execute({
                    iViewed: this,
                    selector: selector
                });
                yield __WEBPACK_IMPORTED_MODULE_6__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_7__viewengine_interfaces_IViewPublisher__["a" /* IViewPublisher */]).publish({
                    dom: dom,
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
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Life; });
var Life;
(function (Life) {
    Life[Life["Singleton"] = 0] = "Singleton";
    Life[Life["Transient"] = 1] = "Transient";
})(Life || (Life = {}));
//# sourceMappingURL=ICoherenceContainer.js.map

/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IViewBinder {
    bind(context) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IViewBinder.bind"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IViewBinder;

//# sourceMappingURL=IViewBinder.js.map

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templating_contracts_Template__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exceptions_Exception__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templating_interfaces_ITemplateEngine__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extensions_HtmlElementExtensions__ = __webpack_require__(5);
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
            return Object(__WEBPACK_IMPORTED_MODULE_3__extensions_HtmlElementExtensions__["c" /* toHtmlArray */])(div.childNodes);
        });
    }
    get selector() {
        return this["%selector"];
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
    protectRender(html) {
        this.template = this.declare();
        if (!this.template) {
            this.template = html;
        }
        if (!this.template) {
            throw new __WEBPACK_IMPORTED_MODULE_1__exceptions_Exception__["a" /* Exception */]('view template is empty!');
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = View;

//# sourceMappingURL=view.js.map

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IRequest {
    send(data) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IRequest.send"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IRequest;

//# sourceMappingURL=IRequest.js.map

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IViewPublisher {
    publish(viewDOM) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IViewPublisher.publish"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IViewPublisher;

//# sourceMappingURL=IViewPublisher.js.map

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewDOM__ = __webpack_require__(40);

class ViewDOM extends __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewDOM__["a" /* IViewDOM */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewDOM;

//# sourceMappingURL=ViewDOM.js.map

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Exception__ = __webpack_require__(9);

class CommunicationException extends __WEBPACK_IMPORTED_MODULE_0__Exception__["a" /* Exception */] {
    constructor(msg) {
        super("CommunicationException:" + msg);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CommunicationException;

//# sourceMappingURL=CommunicationException.js.map

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coherence_concrete_InMemoryContainer__ = __webpack_require__(32);

class IStateManager extends __WEBPACK_IMPORTED_MODULE_0__coherence_concrete_InMemoryContainer__["a" /* InMemoryContainer */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IStateManager;

//# sourceMappingURL=IStateManager.js.map

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class ITemplateEngine {
    parse(template) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ITemplateEngine.parse"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ITemplateEngine;

//# sourceMappingURL=ITemplateEngine.js.map

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IValidatingReporter {
    report(DOM, validatingResult) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IValidatingReporter.report"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IValidatingReporter;

//# sourceMappingURL=IValidatatingReporter.js.map

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__behaviors_events_abstract_Event__ = __webpack_require__(22);

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

class PropertyInfo {
}
/* unused harmony export PropertyInfo */

//# sourceMappingURL=Property.js.map

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseBinding__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extensions_HtmlElementExtensions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__structures_Promised__ = __webpack_require__(19);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class BaseByAttributeBinding extends __WEBPACK_IMPORTED_MODULE_0__BaseBinding__["a" /* BaseBinding */] {
    clear(DOMObject) {
        return __awaiter(this, void 0, void 0, function* () {
            DOMObject.removeAttribute(this.attribute);
        });
    }
    detection(DOM) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__structures_Promised__["a" /* promised */])(Object(__WEBPACK_IMPORTED_MODULE_1__extensions_HtmlElementExtensions__["a" /* findAndFilter */])(DOM, '[' + this.attribute + ']'));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseByAttributeBinding;

//# sourceMappingURL=BaseByAttributeBinding.js.map

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IBinding__ = __webpack_require__(6);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Binding extends __WEBPACK_IMPORTED_MODULE_0__interfaces_IBinding__["a" /* IBinding */] {
    bind(DOM, model) {
        return __awaiter(this, void 0, void 0, function* () {
            var DOMObjects = yield this.detection(DOM);
            DOMObjects.forEach((v) => __awaiter(this, void 0, void 0, function* () {
                yield this.binding(v, model);
                yield this.clear(v);
            }));
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Binding;

//# sourceMappingURL=Binding.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(96);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_abstract_ViewModel__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categoryButtonView__ = __webpack_require__(78);


class CategoryButton extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_abstract_ViewModel__["a" /* ViewModel */] {
    constructor(text) {
        super();
        this.text = text;
    }
    view() {
        return __WEBPACK_IMPORTED_MODULE_1__categoryButtonView__["a" /* CategoryButtonView */];
    }
}
/* harmony export (immutable) */ __webpack_exports__["CategoryButton"] = CategoryButton;

//# sourceMappingURL=categoryButton.js.map

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Route {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Route;

//# sourceMappingURL=Route.js.map

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ICoherenceContainer__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declare_array__ = __webpack_require__(3);


class InMemoryContainer {
    constructor() {
        this.container = [];
    }
    isregistered(type) {
        return this.search(type).length > 0;
    }
    register(type, value, lifestyle) {
        this.container.push({
            interface: type.name,
            type: value,
            value: null,
            lifestyle: lifestyle || __WEBPACK_IMPORTED_MODULE_0__interfaces_ICoherenceContainer__["a" /* Life */].Singleton
        });
    }
    resolve(type) {
        const finded = this.search(type);
        if (finded.length == 0) {
            throw new Error("component is not registered: " + type);
        }
        return this.bindContainer(finded[0]);
    }
    resolveAll(type) {
        return this.search(type).map(component => this.bindContainer(component));
    }
    release(type) {
        const pattern = (token) => { return token.interface == type.name; };
        const component = this.container.find(pattern);
        if (component) {
            this.container = __WEBPACK_IMPORTED_MODULE_1__declare_array__["a" /* ArrayHelper */].remove(this.container, component);
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
    search(type) {
        const pattern = function (token) {
            return token.interface === type.name;
        };
        const map = 'map';
        return this.container.filter(pattern).map(this.extract);
    }
    extract(token) {
        if (token.lifestyle == __WEBPACK_IMPORTED_MODULE_0__interfaces_ICoherenceContainer__["a" /* Life */].Transient) {
            return new token.type();
        }
        if (token.lifestyle == __WEBPACK_IMPORTED_MODULE_0__interfaces_ICoherenceContainer__["a" /* Life */].Singleton) {
            if (!token.value) {
                token.value = new token.type();
            }
            return token.value;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InMemoryContainer;

//# sourceMappingURL=InMemoryContainer.js.map

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class HistoryItem {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HistoryItem;

//# sourceMappingURL=HistoryItem.js.map

/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extensions_HtmlElementExtensions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_Binding__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__structures_Promised__ = __webpack_require__(19);



class BaseBinding extends __WEBPACK_IMPORTED_MODULE_1__abstract_Binding__["a" /* Binding */] {
    detection(DOM) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__structures_Promised__["a" /* promised */])(Object(__WEBPACK_IMPORTED_MODULE_0__extensions_HtmlElementExtensions__["a" /* findAndFilter */])(DOM, this.attribute));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseBinding;

//# sourceMappingURL=BaseBinding.js.map

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__binding_interfaces_IBinding__ = __webpack_require__(6);


class BindContext {
    constructor(viewDOM, bindingFlags) {
        this.viewDOM = viewDOM;
        if (!bindingFlags) {
            bindingFlags = __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__["a" /* default */].resolveAll(__WEBPACK_IMPORTED_MODULE_1__binding_interfaces_IBinding__["a" /* IBinding */]);
        }
        this.bindingFlags = bindingFlags;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BindContext;

//# sourceMappingURL=BindContext.js.map

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewModelExisted; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewengine_interfaces_IViewEngine__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_concrete_decorators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_ViewModel__ = __webpack_require__(7);
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




let ViewModelExisted = class ViewModelExisted extends __WEBPACK_IMPORTED_MODULE_2__abstract_ViewModel__["a" /* ViewModel */] {
    show() {
        return __awaiter(this, void 0, void 0, function* () {
            yield __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_0__viewengine_interfaces_IViewEngine__["a" /* IViewEngine */]).execute({
                iViewed: this,
                selector: ''
            });
        });
    }
};
ViewModelExisted = __decorate([
    __WEBPACK_IMPORTED_MODULE_1__routing_concrete_decorators__["a" /* routeignore */]
], ViewModelExisted);

//# sourceMappingURL=ViewModelExisted.js.map

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_app__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_timers__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_geranium_binding_interfaces_IBinding__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__binders_MustacheBind__ = __webpack_require__(91);





__webpack_require__(93);
__webpack_require__(94);
__webpack_require__(97);
__webpack_require__(99);
__WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__["a" /* default */].start({});
__WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__["a" /* default */].register(__WEBPACK_IMPORTED_MODULE_3__node_modules_geranium_binding_interfaces_IBinding__["a" /* IBinding */], __WEBPACK_IMPORTED_MODULE_4__binders_MustacheBind__["a" /* MustacheBind */]);
new __WEBPACK_IMPORTED_MODULE_0__components_app__["a" /* App */]().show();
Object(__WEBPACK_IMPORTED_MODULE_2_timers__["setTimeout"])(() => document.querySelector("#preloader").remove(), 1);
//# sourceMappingURL=index.js.map

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_structures_Promised__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_viewDOM_abstract_ViewDOM__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_tstoast_Toast__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoryButton_categoryButton__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_geranium_viewmodels_concrete_ViewModelExisted__ = __webpack_require__(37);






// @routeroot
class App extends __WEBPACK_IMPORTED_MODULE_5__node_modules_geranium_viewmodels_concrete_ViewModelExisted__["a" /* ViewModelExisted */] {
    constructor() {
        super();
        this.nowYear = (new Date()).getFullYear();
        this.btns = [];
        this.header = new __WEBPACK_IMPORTED_MODULE_4__header_header__["a" /* Header */]();
        this.btns.push(...[
            new __WEBPACK_IMPORTED_MODULE_3__categoryButton_categoryButton__["CategoryButton"]("Темный"),
            new __WEBPACK_IMPORTED_MODULE_3__categoryButton_categoryButton__["CategoryButton"]("Молочный"),
            new __WEBPACK_IMPORTED_MODULE_3__categoryButton_categoryButton__["CategoryButton"]("Белый"),
        ]);
        // this.header.show();
    }
    view() {
        return AppView;
    }
    toast() {
        new __WEBPACK_IMPORTED_MODULE_2__node_modules_tstoast_Toast__["a" /* Toast */]({
            text: 'toast body'
        });
    }
    documentTitle() {
        return 'Chocolatium | Home';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = App;

class AppView extends __WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_viewDOM_abstract_ViewDOM__["a" /* ViewDOM */] {
    DOM() {
        return Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_structures_Promised__["a" /* promised */])([document.querySelector(".page1")]);
    }
}
//# sourceMappingURL=app.js.map

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IViewDOM {
    DOM() { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IViewDOM.getViewDOM"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IViewDOM;

//# sourceMappingURL=IViewDOM.js.map

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Toast {
    constructor(opts) {
        Object.assign(opts, {
            time: 3000,
            targetSelector: "body"
        });
        let div = document.createElement("div");
        this.applyStyle(div);
        div.innerHTML = opts.text;
        document.querySelector(opts.targetSelector).appendChild(div);
        this.setOffset();
        this.show(div, opts.time);
    }
    applyStyle(element) {
        element.classList.add("toast");
        element.style.padding = "15px 20px";
        element.style.color = "#fff";
        element.style.background = "rgba(0, 0, 10, 0.7)";
        element.style.display = "inline-block";
        element.style.position = "fixed";
        element.style.top = "-100px";
        element.style.right = "15px";
        element.style.opacity = "1";
        element.style.transition = "all 0.4s ease-out";
        element.style.zIndex = "2500";
    }
    setOffset() {
        const betweenOffset = 15;
        let topOffset = betweenOffset;
        const toasts = Array.prototype.slice.call(document.querySelectorAll(".toast"), 0).reverse();
        for (let index = 0; index < toasts.length; index++) {
            const element = toasts[index];
            const height = element.offsetHeight;
            element.style.top = topOffset + "px";
            topOffset += height + betweenOffset;
        }
    }
    show(element, time) {
        setTimeout(() => {
            const width = element.offsetWidth + 20;
            element.style.opacity = "0";
            element.style.right = "-" + width + "px";
            setTimeout(() => element.remove(), 600);
        }, time);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Toast;

//# sourceMappingURL=Toast.js.map

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class RouteContext {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RouteContext;

//# sourceMappingURL=RouteContext.js.map

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ICommunicator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exceptions_backend_CommunicationException__ = __webpack_require__(21);
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
        return __awaiter(this, void 0, void 0, function* () {
            this.validate(data);
            this.data = data;
        });
    }
    recive() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.responseType = "text";
                this.setContentType(this.data, xhr);
                xhr.onload = function () {
                    if (xhr.status >= 200 && xhr.status < 400) {
                        resolve(xhr.response);
                    }
                    else if (xhr.status == 0 && xhr.response) {
                        resolve(xhr.response);
                    }
                    {
                        reject(`${xhr.status}: ${xhr.statusText}`);
                    }
                };
                xhr.onerror = function () {
                    reject(`${xhr.status}: ${xhr.statusText}`);
                };
                xhr.open(this.data.method, this.data.url, this.data.async, this.data.user, this.data.pasw);
                xhr.send(this.data.data);
            });
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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Exception__ = __webpack_require__(9);

class InstantiatedException extends __WEBPACK_IMPORTED_MODULE_0__Exception__["a" /* Exception */] {
    constructor(msg) {
        super("InstantiatedException: instance already instantiated, you can change instance options only at application start\n" + msg);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InstantiatedException;

//# sourceMappingURL=InstantiatedException.js.map

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IHistory__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_interfaces_IRouter__ = __webpack_require__(13);
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
        if (state) {
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
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Html5HistoryAPI;

if (window) {
    window.addEventListener('popstate', (eventState) => {
        __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_0__interfaces_IHistory__["a" /* IHistory */]).restore(eventState.state);
    });
}
//# sourceMappingURL=Html5HistoryAPI.js.map

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ILogger__ = __webpack_require__(14);

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
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_StatefullRequest__ = __webpack_require__(48);

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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventRequest__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_interfaces_IStateManager__ = __webpack_require__(23);


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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Request__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ICommunicator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exceptions_backend_CommunicationException__ = __webpack_require__(21);
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
                const response = yield communicator.recive();
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
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ICommunicator__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__behaviors_events_abstract_Event__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exceptions_logging_interfaces_ILogger__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exceptions_backend_CommunicationException__ = __webpack_require__(21);
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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_Router__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_contracts_HistoryItem__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_interfaces_IHistory__ = __webpack_require__(12);
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
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IRouter__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contracts_RouteMatch__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__concrete_decorators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__declare_array__ = __webpack_require__(3);





class Router extends __WEBPACK_IMPORTED_MODULE_0__interfaces_IRouter__["a" /* IRouter */] {
    get routes() {
        return Object(__WEBPACK_IMPORTED_MODULE_3__concrete_decorators__["b" /* routes */])();
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Route__ = __webpack_require__(31);

class RouteMatch extends __WEBPACK_IMPORTED_MODULE_0__Route__["a" /* Route */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RouteMatch;

//# sourceMappingURL=RouteMatch.js.map

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_BaseStorage__ = __webpack_require__(55);

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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IStorage__ = __webpack_require__(34);
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITemplateEngine__ = __webpack_require__(24);

class ClientTemplateEngine extends __WEBPACK_IMPORTED_MODULE_0__interfaces_ITemplateEngine__["a" /* ITemplateEngine */] {
    parse(template) {
        return new Promise((resolve) => resolve(template.template));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClientTemplateEngine;

//# sourceMappingURL=ClientTemplateEngine.js.map

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IValidatatingReporter__ = __webpack_require__(25);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class NotifyValidatingReporter extends __WEBPACK_IMPORTED_MODULE_0__interfaces_IValidatatingReporter__["a" /* IValidatingReporter */] {
    report(DOM, validatingResult) {
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_ViewBinder__ = __webpack_require__(59);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class BaseViewBinder extends __WEBPACK_IMPORTED_MODULE_0__abstract_ViewBinder__["a" /* ViewBinder */] {
    binding(DOM, data, binding) {
        return __awaiter(this, void 0, void 0, function* () {
            return binding.bind(DOM, data);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseViewBinder;

//# sourceMappingURL=BaseViewBinder.js.map

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewBinder__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_Property__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validating_reporter_interfaces_IValidatatingReporter__ = __webpack_require__(25);
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
            const bindedDOM = yield this.exec(context.viewDOM, context.bindingFlags);
            this.valid(bindedDOM, context.viewDOM.data);
            return bindedDOM;
        });
    }
    valid(DOM, data) {
        var vm = data;
        if (vm.validators) {
            var validatedProperties = __WEBPACK_IMPORTED_MODULE_3__declare_array__["a" /* ArrayHelper */].groupBy(vm.validators, 'validatedPropertyName');
            validatedProperties.forEach(validators => {
                var validProp = validators[0].validatedPropertyName;
                __WEBPACK_IMPORTED_MODULE_1__reflection_Property__["a" /* Property */].redefine(data, validProp, (val) => { return val; }, function (val) {
                    let validationFault = false;
                    this.validators.filter(x => x.validatedPropertyName === validProp).forEach(validator => {
                        var validation = validator.validate(val, this.clone());
                        if (!validation.success) {
                            validationFault = true;
                            __WEBPACK_IMPORTED_MODULE_4__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_2__validating_reporter_interfaces_IValidatatingReporter__["a" /* IValidatingReporter */]).report(DOM, validation);
                        }
                    });
                    return validationFault ? undefined : val;
                });
            });
        }
    }
    exec(ViewDOM, bindings) {
        return __awaiter(this, void 0, void 0, function* () {
            let dom = yield ViewDOM.DOM();
            for (var i = 0; i < bindings.length; i++) {
                yield this.binding(dom, ViewDOM.data, bindings[i]);
            }
            return dom;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewBinder;

//# sourceMappingURL=ViewBinder.js.map

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_BaseByAttributeBinding__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_Property__ = __webpack_require__(26);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class BaseFieldBinding extends __WEBPACK_IMPORTED_MODULE_0__base_BaseByAttributeBinding__["a" /* BaseByAttributeBinding */] {
    get attribute() { return 'data-field'; }
    binding(DOMObject, model) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseFieldBinding;

//# sourceMappingURL=BaseFieldBinding.js.map

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_Binding__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extensions_HtmlElementExtensions__ = __webpack_require__(5);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class EventBinding extends __WEBPACK_IMPORTED_MODULE_0__abstract_Binding__["a" /* Binding */] {
    detection(DOMObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryableNodes = this.queryable(DOMObject);
            const all = queryableNodes.map(node => Object(__WEBPACK_IMPORTED_MODULE_1__extensions_HtmlElementExtensions__["c" /* toHtmlArray */])(node.querySelectorAll(eventSelectors.join())));
            return all.reduce((p, n) => p.concat(n));
        });
    }
    binding(DOMObject, model) {
        return __awaiter(this, void 0, void 0, function* () {
            const attributes = Object(__WEBPACK_IMPORTED_MODULE_1__extensions_HtmlElementExtensions__["b" /* nodeToArray */])(DOMObject.attributes);
            const events = attributes.filter(attr => eventsAttr.includes(attr.name));
            this.funcBinded(events, model).forEach(bind => {
                DOMObject.addEventListener(bind.event, function () {
                    bind.func.apply(model, arguments);
                });
            });
            events.forEach(event => DOMObject.removeAttribute(event.name));
        });
    }
    clear(DOMObject) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    queryable(DOMObjects) {
        if (!DOMObjects || DOMObjects.length == 0) {
            return [];
        }
        const parent = DOMObjects[0].parentElement;
        if (parent) {
            return [parent];
        }
        else {
            return DOMObjects;
        }
    }
    funcBinded(events, model) {
        return events.map(event => {
            return {
                event: event.name,
                func: model[event.value]
            };
        }).filter(bind => {
            return !!bind.func && typeof bind.func === 'function';
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = EventBinding;

const allEvents = [
    "abort",
    "activate",
    "beforeactivate",
    "beforecopy",
    "beforecut",
    "beforedeactivate",
    "beforepaste",
    "blur",
    "canplay",
    "canplaythrough",
    "change",
    "click",
    "contextmenu",
    "copy",
    "cuechange",
    "cut",
    "dblclick",
    "deactivate",
    "drag",
    "dragend",
    "dragenter",
    "dragleave",
    "dragover",
    "dragstart",
    "drop",
    "durationchange",
    "emptied",
    "ended",
    "error",
    "focus",
    "input",
    "invalid",
    "keydown",
    "keypress",
    "keyup",
    "load",
    "loadeddata",
    "loadedmetadata",
    "loadstart",
    "mousedown",
    "mouseenter",
    "mouseleave",
    "mousemove",
    "mouseout",
    "mouseover",
    "mouseup",
    "mousewheel",
    "MSContentZoom",
    "MSManipulationStateChanged",
    "paste",
    "pause",
    "play",
    "playing",
    "progress",
    "ratechange",
    "reset",
    "scroll",
    "seeked",
    "seeking",
    "select",
    "selectstart",
    "stalled",
    "submit",
    "suspend",
    "timeupdate",
    "volumechange",
    "waiting",
    "ariarequest",
    "command",
    "gotpointercapture",
    "lostpointercapture",
    "MSGestureChange",
    "MSGestureDoubleTap",
    "MSGestureEnd",
    "MSGestureHold",
    "MSGestureStart",
    "MSGestureTap",
    "MSGotPointerCapture",
    "MSInertiaStart",
    "MSLostPointerCapture",
    "MSPointerCancel",
    "MSPointerDown",
    "MSPointerEnter",
    "MSPointerLeave",
    "MSPointerMove",
    "MSPointerOut",
    "MSPointerOver",
    "MSPointerUp",
    "touchcancel",
    "touchend",
    "touchmove",
    "touchstart",
    "webkitfullscreenchange",
    "webkitfullscreenerror",
    "pointercancel",
    "pointerdown",
    "pointerenter",
    "pointerleave",
    "pointermove",
    "pointerout",
    "pointerover",
    "pointerup",
    "wheel"
];
const eventsAttr = allEvents.map(eventName => "on" + eventName);
const eventSelectors = allEvents.map(eventName => "[on" + eventName + "]");
//# sourceMappingURL=EventBinding.js.map

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_BaseBinding__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_Property__ = __webpack_require__(26);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class BaseInputBinding extends __WEBPACK_IMPORTED_MODULE_0__base_BaseBinding__["a" /* BaseBinding */] {
    get attribute() { return 'input'; }
    binding(DOMObject, model) {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseInputBinding;

//# sourceMappingURL=BaseInputBinding.js.map

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_BaseByAttributeBinding__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_IBinding__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_IViewEngine__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewbinding_contracts_BindContext__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewbinding_interfaces_IViewBinder__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__declare_string__ = __webpack_require__(65);
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
            let bindings = this["`container"].resolveAll(__WEBPACK_IMPORTED_MODULE_1__interfaces_IBinding__["a" /* IBinding */]).filter(x => x.constructor.name != this.constructor.name);
            for (var i = 0; i < collection.length; i++) {
                Object.assign(model, collection[i]);
                model.view = function () {
                    return tpl;
                };
                let _view = yield __WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_IViewEngine__["a" /* IViewEngine */].ViewEngineView(model, '');
                let ctx = new __WEBPACK_IMPORTED_MODULE_3__viewbinding_contracts_BindContext__["a" /* BindContext */](_view, bindings);
                yield this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_4__viewbinding_interfaces_IViewBinder__["a" /* IViewBinder */]).bind(ctx);
                const dom = yield _view.DOM();
                dom.forEach(element => {
                    DOMCollection.appendChild(element);
                });
            }
            DOMObject.parentNode.replaceChild(DOMCollection, DOMObject);
            DOMObject = DOMCollection;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseCollectionBinding;

//# sourceMappingURL=BaseCollectionBinding.js.map

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Template {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Template;

//# sourceMappingURL=template.js.map

/***/ }),
/* 65 */
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
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewEngine__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contracts_ExecuteContext__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewbinding_contracts_BindContext__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewbinding_interfaces_IViewBinder__ = __webpack_require__(15);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class BaseViewEngine {
    execute(context) {
        return __awaiter(this, void 0, void 0, function* () {
            var view = yield __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewEngine__["a" /* IViewEngine */].ViewEngineView(context.iViewed, context.selector);
            var execCtx = new __WEBPACK_IMPORTED_MODULE_1__contracts_ExecuteContext__["a" /* ExecuteContext */](context);
            var bindingContext = new __WEBPACK_IMPORTED_MODULE_2__viewbinding_contracts_BindContext__["a" /* BindContext */](view, execCtx.bindingFlags);
            var viewbinder = this["`container"].resolve(__WEBPACK_IMPORTED_MODULE_3__viewbinding_interfaces_IViewBinder__["a" /* IViewBinder */]);
            return yield viewbinder.bind(bindingContext);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseViewEngine;

//# sourceMappingURL=BaseViewEngine.js.map

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__binding_interfaces_IBinding__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__runtime_concrete_App__ = __webpack_require__(0);


class ExecuteContext {
    constructor(viewCtx, bindingFlags) {
        this.view = viewCtx.iViewed;
        this.selector = viewCtx.selector;
        if (!bindingFlags) {
            bindingFlags = __WEBPACK_IMPORTED_MODULE_1__runtime_concrete_App__["a" /* default */].resolveAll(__WEBPACK_IMPORTED_MODULE_0__binding_interfaces_IBinding__["a" /* IBinding */]);
        }
        this.bindingFlags = bindingFlags;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ExecuteContext;

//# sourceMappingURL=ExecuteContext.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewPublisher__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exceptions_logging_interfaces_ILogger__ = __webpack_require__(14);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class BaseViewPublisher extends __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewPublisher__["a" /* IViewPublisher */] {
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
                        view.dom.forEach(view => {
                            element.parentElement.replaceChild(view, element);
                        });
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
    domLoaded(selector, views) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                document.addEventListener("DOMContentLoaded", () => {
                    views.forEach(view => {
                        let element = document.querySelector(selector);
                        element.parentElement.replaceChild(view, element);
                    });
                    resolve(true);
                });
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseViewPublisher;

//# sourceMappingURL=BaseViewPublisher.js.map

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_Binding__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_Class__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extensions_HtmlElementExtensions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__declare_array__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewengine_interfaces_IViewEngine__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_interfaces_IViewable__ = __webpack_require__(71);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class PropertyBinding extends __WEBPACK_IMPORTED_MODULE_0__abstract_Binding__["a" /* Binding */] {
    constructor() {
        super(...arguments);
        this.propertyRegex = /\[.*?\]/g;
        this.fields = [];
    }
    detection(DOMObjects) {
        return __awaiter(this, void 0, void 0, function* () {
            DOMObjects.forEach(DOMObject => {
                this.fields.push(...(DOMObject.innerHTML.match(/\[.*?\]/g) || []));
            });
            if (this.fields.length == 0) {
                return new Array();
            }
            this.fields = __WEBPACK_IMPORTED_MODULE_3__declare_array__["a" /* ArrayHelper */].removeSame(this.fields);
            const elements = [];
            this.fields.forEach(field => {
                DOMObjects.forEach(DOMObject => {
                    elements.push(...this.queryXPath(DOMObject, field));
                });
            });
            return elements;
        });
    }
    binding(DOMObject, model) {
        return __awaiter(this, void 0, void 0, function* () {
            const fields = DOMObject.innerText.match(this.propertyRegex);
            fields.forEach((field) => __awaiter(this, void 0, void 0, function* () {
                const property = model[field.substring(1, field.length - 1)];
                if (property instanceof Array) {
                    yield this.renderArray(property, DOMObject, field);
                }
                else if (property) {
                    yield this.render(property, DOMObject, field);
                }
            }));
        });
    }
    clear(DOMObject) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    renderArray(property, DOMObject, field) {
        return __awaiter(this, void 0, void 0, function* () {
            let fieldsExpanded = "";
            for (let index = 0; index < property.length; index++) {
                fieldsExpanded += "[" + index + "]";
            }
            this.replaceTextNode(DOMObject, field, [document.createTextNode(fieldsExpanded)]);
            property.forEach((prop, index) => __awaiter(this, void 0, void 0, function* () { yield this.render(prop, DOMObject, "[" + index + "]"); }));
        });
    }
    render(property, DOMObject, field) {
        return __awaiter(this, void 0, void 0, function* () {
            if (__WEBPACK_IMPORTED_MODULE_1__reflection_Class__["a" /* Class */].isAssignableFrom(ViewModel, property.constructor)) {
                yield this.publish(DOMObject, property, field);
            }
            else {
                yield this.replaceTextNode(DOMObject, field, [document.createTextNode(property)]);
            }
        });
    }
    publish(DOMObject, property, field) {
        return __awaiter(this, void 0, void 0, function* () {
            const dom = yield __WEBPACK_IMPORTED_MODULE_5__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_4__viewengine_interfaces_IViewEngine__["a" /* IViewEngine */]).execute({
                iViewed: property,
                selector: ''
            });
            this.replaceTextNode(DOMObject, field, dom);
        });
    }
    replaceTextNode(root, text, target) {
        const allNodes = Object(__WEBPACK_IMPORTED_MODULE_2__extensions_HtmlElementExtensions__["c" /* toHtmlArray */])(root.childNodes);
        const textNode = allNodes.find(x => {
            return x.nodeType == 3 && (x.textContent.trim() == text || x.textContent.includes(text));
        });
        if (textNode)
            target.forEach(targetNode => {
                if (textNode.textContent.trim() == text) {
                    root.replaceChild(targetNode, textNode);
                }
                else {
                    const propsStrings = textNode.textContent.match(this.propertyRegex);
                    if (propsStrings.length > 1) {
                        textNode.textContent = textNode.textContent.replace(text, "");
                        if (textNode.nextSibling) {
                            debugger;
                            textNode.parentNode.insertBefore(targetNode, textNode.nextSibling);
                        }
                        else {
                            textNode.parentNode.insertBefore(targetNode, textNode);
                        }
                    }
                    else {
                        textNode.textContent = textNode.textContent.replace(text, targetNode.innerHTML || targetNode.textContent);
                    }
                }
            });
    }
    shatterNodes(node) {
    }
    queryXPath(node, field) {
        const elements = [];
        const xpath = document.evaluate("//*[text()[contains(.,'" + field + "')]]", node, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (let index = 0; index < xpath.snapshotLength; index++) {
            elements.push(xpath.snapshotItem(index));
        }
        ;
        return elements;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PropertyBinding;

class ViewModel extends __WEBPACK_IMPORTED_MODULE_6__view_interfaces_IViewable__["a" /* IViewable */] {
}
//# sourceMappingURL=PropertyBinding.js.map

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Class {
    static isAssignableFrom(from, target) {
        const now = (target || { name: '' }).name;
        if (from.name == now) {
            return true;
        }
        else if (now !== "" && now !== undefined) {
            return Class.isAssignableFrom(from, Object.getPrototypeOf(target));
        }
        else {
            return false;
        }
    }
    static getProperties(targetObject) {
        var properties = [];
        for (; targetObject != null; targetObject = Object.getPrototypeOf(targetObject)) {
            var ownPropertiesName = Object.getOwnPropertyNames(targetObject);
            for (var i = 0; i < ownPropertiesName.length; i++) {
                const propName = ownPropertiesName[i];
                if (!Class.notCoreFunc.includes(propName) && !properties.includes(propName)) {
                    properties.push(propName);
                }
            }
        }
        return properties.map(x => {
            return {
                name: x,
                property: targetObject[x]
            };
        });
    }
    static get notCoreFunc() {
        return [
            "constructor",
            "clone",
            "__defineGetter__",
            "__defineSetter__",
            "hasOwnProperty",
            "__lookupGetter__",
            "__lookupSetter__",
            "propertyIsEnumerable",
            "__proto__",
            "toString",
            "toLocaleString",
            "valueOf",
            "isPrototypeOf"
        ];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Class;

//# sourceMappingURL=Class.js.map

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IViewable {
    view() { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IViewable.view"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IViewable;

//# sourceMappingURL=IViewable.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_State__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_concrete_decorators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_IViewEngine__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewengine_interfaces_IViewPublisher__ = __webpack_require__(18);
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
                const dom = yield __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_IViewEngine__["a" /* IViewEngine */]).execute({
                    iViewed: this,
                    selector: selector
                });
                yield __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_4__viewengine_interfaces_IViewPublisher__["a" /* IViewPublisher */]).publish({
                    dom: dom,
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
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Model__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_IStateManager__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_interfaces_IRequest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coherence_interfaces_ICoherenceContainer__ = __webpack_require__(10);
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
                    stateManager.register(this.constructor, this.constructor, __WEBPACK_IMPORTED_MODULE_5__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Singleton);
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
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_cloning_decorators_ICloneable__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__behaviors_events_abstract_Event__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_interfaces_IRequest__ = __webpack_require__(17);
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
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ICloneable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ICloner__ = __webpack_require__(76);


function ICloneable(constructor) {
    constructor.prototype.clone = function () {
        return __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_1__interfaces_ICloner__["a" /* ICloner */]).clone(this);
    };
}
//# sourceMappingURL=ICloneable.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class ICloner {
    clone(sample) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ICloner.clone"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ICloner;

//# sourceMappingURL=ICloner.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = is;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_interfaces_IRouter__ = __webpack_require__(13);


function is(constructor) {
    var router = __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_1__routing_interfaces_IRouter__["a" /* IRouter */]);
    return router.routes.filter(x => {
        var instance = new x.ctor();
        return instance.constructor.name == constructor.name;
    }).length > 0;
}
//# sourceMappingURL=history.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_view_abstract_View__ = __webpack_require__(16);

__webpack_require__(30);
class CategoryButtonView extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_view_abstract_View__["a" /* View */] {
    declare() {
        return "<button class='button category' onclick='onClick' data-templating-content=''>[text]</button>";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoryButtonView;

//# sourceMappingURL=categoryButtonView.js.map

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__socialsPanel_socialsPanel__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_geranium_viewmodels_concrete_ViewModelFile__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoryButton_categoryButton__ = __webpack_require__(30);




class Header extends __WEBPACK_IMPORTED_MODULE_2__node_modules_geranium_viewmodels_concrete_ViewModelFile__["a" /* ViewModelFile */] {
    constructor() {
        super(...arguments);
        this.htmlFileUrl = "./src/components/header/header.html";
        this.socials = new __WEBPACK_IMPORTED_MODULE_0__socialsPanel_socialsPanel__["a" /* SocialsPanel */]();
        this.search = new __WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* Search */]();
        this.btn = new __WEBPACK_IMPORTED_MODULE_3__categoryButton_categoryButton__["CategoryButton"]("wtf");
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;

//# sourceMappingURL=header.js.map

/***/ }),
/* 80 */,
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_abstract_ViewModel__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socialsPanelView__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socialButton_socialButton__ = __webpack_require__(83);



class SocialsPanel extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_abstract_ViewModel__["a" /* ViewModel */] {
    constructor() {
        super();
        this.buttons = [
            new __WEBPACK_IMPORTED_MODULE_2__socialButton_socialButton__["a" /* SocialButton */]("fa fa-vk"),
            new __WEBPACK_IMPORTED_MODULE_2__socialButton_socialButton__["a" /* SocialButton */]("fa fa-vk"),
            new __WEBPACK_IMPORTED_MODULE_2__socialButton_socialButton__["a" /* SocialButton */]("fa fa-vk"),
            new __WEBPACK_IMPORTED_MODULE_2__socialButton_socialButton__["a" /* SocialButton */]("fa fa-vk")
        ];
    }
    view() {
        return __WEBPACK_IMPORTED_MODULE_1__socialsPanelView__["a" /* SocialsPanelView */];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SocialsPanel;

//# sourceMappingURL=socialsPanel.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_view_abstract_View__ = __webpack_require__(16);

class SocialsPanelView extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_view_abstract_View__["a" /* View */] {
    declare() {
        return "<div class='socials'>[buttons]</div>";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SocialsPanelView;

//# sourceMappingURL=socialsPanelView.js.map

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_abstract_ViewModel__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socialButtonView__ = __webpack_require__(84);


class SocialButton extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_abstract_ViewModel__["a" /* ViewModel */] {
    constructor(icon) {
        super();
        this.icon = icon;
    }
    view() {
        return __WEBPACK_IMPORTED_MODULE_1__socialButtonView__["a" /* SocialButtonView */];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SocialButton;

//# sourceMappingURL=socialButton.js.map

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_view_abstract_View__ = __webpack_require__(16);

class SocialButtonView extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_view_abstract_View__["a" /* View */] {
    declare() {
        return "<a class='' href='#'></a>";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SocialButtonView;

//# sourceMappingURL=socialButtonView.js.map

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_concrete_ViewModelFile__ = __webpack_require__(86);

class Search extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_concrete_ViewModelFile__["a" /* ViewModelFile */] {
    constructor() {
        super(...arguments);
        this.htmlFileUrl = "./src/components/search/search.html";
    }
    click() {
        console.log('SearchView.click');
    }
    change() {
        console.log('SearchView.change');
    }
    blur() {
        console.log('SearchView.blur');
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Search;

//# sourceMappingURL=search.js.map

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_ViewModel__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backend_interfaces_IRequest__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewDOM_abstract_ViewDOM__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__extensions_HtmlElementExtensions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__coherence_interfaces_ICoherenceContainer__ = __webpack_require__(10);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class ViewModelFile extends __WEBPACK_IMPORTED_MODULE_0__abstract_ViewModel__["a" /* ViewModel */] {
    view() {
        const url = this.htmlFileUrl;
        return class extends FileViewDOM {
            constructor() {
                super();
                if (!__WEBPACK_IMPORTED_MODULE_1__runtime_concrete_App__["a" /* default */].isregistered(TemplateCache)) {
                    __WEBPACK_IMPORTED_MODULE_1__runtime_concrete_App__["a" /* default */].register(TemplateCache, TemplateCache, __WEBPACK_IMPORTED_MODULE_5__coherence_interfaces_ICoherenceContainer__["a" /* Life */].Singleton);
                }
                const cache = __WEBPACK_IMPORTED_MODULE_1__runtime_concrete_App__["a" /* default */].resolve(TemplateCache);
                const cacheItem = cache.items.find(c => c.url == url);
                if (cacheItem) {
                    this.html = cacheItem.value;
                }
                else {
                    this.url = url;
                }
            }
        };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewModelFile;

class FileViewDOM extends __WEBPACK_IMPORTED_MODULE_3__viewDOM_abstract_ViewDOM__["a" /* ViewDOM */] {
    DOM() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.prepare();
            const wrapper = document.createElement("div");
            wrapper.innerHTML = this.html;
            return Object(__WEBPACK_IMPORTED_MODULE_4__extensions_HtmlElementExtensions__["c" /* toHtmlArray */])(wrapper.childNodes);
        });
    }
    prepare() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.loaded) {
                yield this.loadTemplate();
                this.cache();
            }
        });
    }
    get loaded() {
        return !!this.html;
    }
    loadTemplate() {
        return __awaiter(this, void 0, void 0, function* () {
            const request = __WEBPACK_IMPORTED_MODULE_1__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_2__backend_interfaces_IRequest__["a" /* IRequest */]);
            this.html = yield request.send({ method: "GET", url: this.url, async: true });
        });
    }
    cache() {
        const cache = __WEBPACK_IMPORTED_MODULE_1__runtime_concrete_App__["a" /* default */].resolve(TemplateCache);
        cache.items.push({
            url: this.url,
            value: this.html,
        });
    }
}
class TemplateCache {
    constructor() {
        this.items = [];
    }
}
class TemplateCacheItem {
}
//# sourceMappingURL=ViewModelFile.js.map

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(88);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(89), __webpack_require__(90)))

/***/ }),
/* 89 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_binding_concrete_base_BaseByAttributeBinding__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mustache__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mustache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mustache__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


class MustacheBind extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_binding_concrete_base_BaseByAttributeBinding__["a" /* BaseByAttributeBinding */] {
    constructor() {
        super(...arguments);
        this.attribute = "data-templating-content";
    }
    binding(DOMObject, model) {
        return __awaiter(this, void 0, void 0, function* () {
            const parsed = __WEBPACK_IMPORTED_MODULE_1_mustache__["render"](DOMObject.innerHTML, model);
            DOMObject.innerHTML = parsed;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MustacheBind;

//# sourceMappingURL=MustacheBind.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
  } else {
    global.Mustache = {};
    factory(global.Mustache); // script, wsh, asp
  }
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.3.0';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;
}));


/***/ }),
/* 93 */
/***/ (function(module, exports) {

class Carousel {
  constructor(element) {
    this.element = element;

    this.init();
  }

  init() {
    this.carouselContent = this.element.querySelector('.carousel-content');
    this.items = this.carouselContent.querySelectorAll('.carousel-item');

    this.element.querySelector('.carousel-nav-left').addEventListener('click', (e) => {
      this.prevSlide();
    }, false);
    this.element.querySelector('.carousel-nav-right').addEventListener('click', (e) => {
      this.nextSlide();
    }, false);

    this.setOrder();
  }

  setOrder(direction){
    // initialize direction to change order
    if (direction === 'previous') {
      direction = 1;
    } else if (direction === 'next') {
      direction = -1;
    }

    let nbItems = this.items.length;
    if (nbItems) {
      this.items.forEach((item, index) => {
        let newValue;
        if (item.style.order) {
          newValue = (parseInt(item.style.order, 10) + direction) % nbItems;
        } else {
          newValue = ((index + 2) % nbItems);
        }
        if (!newValue || newValue !== 2) {
          item.style['z-index'] = '0';
          item.classList.remove('is-active');
        } else {
          item.style['z-index'] = '1';
          item.classList.add('is-active');
        }
        item.style.order = newValue ? newValue : nbItems;
      });
    }
  }

  prevSlide(evt) {
    // add reverse
    this.carouselContent.classList.add('carousel-reverse');
    // Disable transition to instant change order
    this.carouselContent.classList.toggle('carousel-animate');
    // Change order of element
    // Current order 2 visible become order 1
    this.setOrder('previous');

    // Enable transition to animate order 1 to order 2
    setTimeout(() => {
      this.carouselContent.classList.toggle('carousel-animate');
    }, 50);
  }

  nextSlide(evt) {
    // remove reverse
    this.carouselContent.classList.remove('carousel-reverse');

    // Disable transition to instant change order
    this.carouselContent.classList.toggle('carousel-animate');
    // Change order of element
    // Current order 2 visible become order 3
    this.setOrder('next');
    // Enable transition to animate order 3 to order 2
    setTimeout(() => {
      this.carouselContent.classList.toggle('carousel-animate');
    }, 50);
  };
}

window.onload = function() {
  let carousels = document.querySelectorAll('.carousel, .hero-carousel');
  if (carousels) {
    carousels.forEach(element => {
      new Carousel(element);
    })
  }
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(29)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../css-loader/index.js??ref--0-1!./bulma-carousel.css", function() {
			var newContent = require("!!../css-loader/index.js??ref--0-1!./bulma-carousel.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "@keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.carousel{width:100%;height:auto;min-height:4em;border:none;margin:auto;display:flex}.carousel,.hero{position:relative}.hero+.hero-body,.hero+.hero-footer,.hero+.hero-head{z-index:1}.hero-carousel{display:flex;position:absolute;top:0;left:0;bottom:0;right:0;height:auto;border:none;margin:auto;padding:0;z-index:0}.carousel-navigation{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:22px;z-index:99}.carousel-container{flex:1;background:#f5f5f5;display:flex;overflow:hidden}.carousel-container .carousel-nav-left,.carousel-container .carousel-nav-right{position:absolute;top:calc(50% - 11px);height:2.2em;width:2em;background:hsla(0,0%,100%,.7);left:0;display:flex;justify-content:center;align-items:center;color:#4a4a4a;z-index:99}.carousel-container .carousel-nav-left:hover,.carousel-container .carousel-nav-right:hover{cursor:pointer}.carousel-container .carousel-nav-right{left:auto;right:0}.carousel-item{flex-shrink:0;flex-grow:1;display:flex;align-items:center;justify-content:center;border:none;box-sizing:border-box;min-width:100%;background-size:cover;background-position:50%;position:relative;max-height:100%;max-width:100%;overflow:hidden}.carousel-item .is-background{position:relative;display:inline-block;padding:0;margin:0;min-width:100%}.carousel-item .title{position:absolute;left:0;right:0;bottom:0;padding:1.5em;margin:0;text-align:center;background:hsla(0,0%,100%,.6);font-size:.75rem}.carousel-content{display:flex;flex:1;position:relative}.carousel-content.carousel-animate-slide{left:-100%;-webkit-transform:translate3d(100%,0,0);-moz-transform:translate3d(100%,0,0);-ms-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-content.carousel-animate-fade .carousel-item{-webkit-transition:opacity 1s ease-in-out;-moz-transition:opacity 1s ease-in-out;-ms-transition:opacity 1s ease-in-out;transition:opacity 1s ease-in-out;position:absolute}.carousel-content.carousel-animate.carousel-animate-slide{transition:all 1s ease-in-out;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none}.carousel-content.carousel-animate.carousel-animate-fade .carousel-item.is-active{opacity:1}.carousel-content.carousel-animate.carousel-animate-fade .carousel-item:not(.is-active){opacity:0}.carousel-reverse.carousel-animate-slide{-webkit-transform:translate3d(-100%,0,0);-moz-transform:translate3d(-100%,0,0);-ms-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}", ""]);

// exports


/***/ }),
/* 96 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(29)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js??ref--0-1!./bulma.css", function() {
			var newContent = require("!!../../css-loader/index.js??ref--0-1!./bulma.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "/*! bulma.io v0.6.1 | MIT License | github.com/jgthms/bulma */@-webkit-keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\n\n/*! minireset.css v0.0.2 | MIT License | github.com/jgthms/minireset.css */blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select,textarea{margin:0}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}audio,embed,img,object,video{max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}html{background-color:#fff;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}article,aside,figure,footer,header,hgroup,section{display:block}body,button,input,select,textarea{font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif}code,pre{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;font-family:monospace}body{color:#4a4a4a;font-size:1rem;font-weight:400;line-height:1.5}a{color:#3273dc;cursor:pointer;text-decoration:none}a strong{color:currentColor}a:hover{color:#363636}code{background-color:#f5f5f5;color:#ff3860;font-size:.875em;font-weight:400;padding:.25em .5em}hr{background-color:#dbdbdb;border:none;display:block;height:1px;margin:1.5rem 0}img{height:auto;max-width:100%}input[type=checkbox],input[type=radio]{vertical-align:baseline}small{font-size:.875em}span{font-style:inherit;font-weight:inherit}strong{color:#363636;font-weight:700}pre{-webkit-overflow-scrolling:touch;background-color:#f5f5f5;color:#4a4a4a;font-size:.875em;overflow-x:auto;padding:1.25rem 1.5rem;white-space:pre;word-wrap:normal}pre code{background-color:transparent;color:currentColor;font-size:1em;padding:0}table td,table th{text-align:left;vertical-align:top}table th{color:#363636}.is-clearfix:after{clear:both;content:\" \";display:table}.is-pulled-left{float:left!important}.is-pulled-right{float:right!important}.is-clipped{overflow:hidden!important}.is-overlay{bottom:0;left:0;position:absolute;right:0;top:0}.is-size-1{font-size:3rem!important}.is-size-2{font-size:2.5rem!important}.is-size-3{font-size:2rem!important}.is-size-4{font-size:1.5rem!important}.is-size-5{font-size:1.25rem!important}.is-size-6{font-size:1rem!important}.is-size-7{font-size:.75rem!important}@media screen and (max-width:768px){.is-size-1-mobile{font-size:3rem!important}.is-size-2-mobile{font-size:2.5rem!important}.is-size-3-mobile{font-size:2rem!important}.is-size-4-mobile{font-size:1.5rem!important}.is-size-5-mobile{font-size:1.25rem!important}.is-size-6-mobile{font-size:1rem!important}.is-size-7-mobile{font-size:.75rem!important}}@media print,screen and (min-width:769px){.is-size-1-tablet{font-size:3rem!important}.is-size-2-tablet{font-size:2.5rem!important}.is-size-3-tablet{font-size:2rem!important}.is-size-4-tablet{font-size:1.5rem!important}.is-size-5-tablet{font-size:1.25rem!important}.is-size-6-tablet{font-size:1rem!important}.is-size-7-tablet{font-size:.75rem!important}}@media screen and (max-width:1023px){.is-size-1-touch{font-size:3rem!important}.is-size-2-touch{font-size:2.5rem!important}.is-size-3-touch{font-size:2rem!important}.is-size-4-touch{font-size:1.5rem!important}.is-size-5-touch{font-size:1.25rem!important}.is-size-6-touch{font-size:1rem!important}.is-size-7-touch{font-size:.75rem!important}}@media screen and (min-width:1024px){.is-size-1-desktop{font-size:3rem!important}.is-size-2-desktop{font-size:2.5rem!important}.is-size-3-desktop{font-size:2rem!important}.is-size-4-desktop{font-size:1.5rem!important}.is-size-5-desktop{font-size:1.25rem!important}.is-size-6-desktop{font-size:1rem!important}.is-size-7-desktop{font-size:.75rem!important}}@media screen and (min-width:1216px){.is-size-1-widescreen{font-size:3rem!important}.is-size-2-widescreen{font-size:2.5rem!important}.is-size-3-widescreen{font-size:2rem!important}.is-size-4-widescreen{font-size:1.5rem!important}.is-size-5-widescreen{font-size:1.25rem!important}.is-size-6-widescreen{font-size:1rem!important}.is-size-7-widescreen{font-size:.75rem!important}}@media screen and (min-width:1408px){.is-size-1-fullhd{font-size:3rem!important}.is-size-2-fullhd{font-size:2.5rem!important}.is-size-3-fullhd{font-size:2rem!important}.is-size-4-fullhd{font-size:1.5rem!important}.is-size-5-fullhd{font-size:1.25rem!important}.is-size-6-fullhd{font-size:1rem!important}.is-size-7-fullhd{font-size:.75rem!important}}.has-text-centered{text-align:center!important}@media screen and (max-width:768px){.has-text-centered-mobile{text-align:center!important}}@media print,screen and (min-width:769px){.has-text-centered-tablet{text-align:center!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-centered-tablet-only{text-align:center!important}}@media screen and (max-width:1023px){.has-text-centered-touch{text-align:center!important}}@media screen and (min-width:1024px){.has-text-centered-desktop{text-align:center!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-centered-desktop-only{text-align:center!important}}@media screen and (min-width:1216px){.has-text-centered-widescreen{text-align:center!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-centered-widescreen-only{text-align:center!important}}@media screen and (min-width:1408px){.has-text-centered-fullhd{text-align:center!important}}.has-text-justified{text-align:justify!important}@media screen and (max-width:768px){.has-text-justified-mobile{text-align:justify!important}}@media print,screen and (min-width:769px){.has-text-justified-tablet{text-align:justify!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-justified-tablet-only{text-align:justify!important}}@media screen and (max-width:1023px){.has-text-justified-touch{text-align:justify!important}}@media screen and (min-width:1024px){.has-text-justified-desktop{text-align:justify!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-justified-desktop-only{text-align:justify!important}}@media screen and (min-width:1216px){.has-text-justified-widescreen{text-align:justify!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-justified-widescreen-only{text-align:justify!important}}@media screen and (min-width:1408px){.has-text-justified-fullhd{text-align:justify!important}}.has-text-left{text-align:left!important}@media screen and (max-width:768px){.has-text-left-mobile{text-align:left!important}}@media print,screen and (min-width:769px){.has-text-left-tablet{text-align:left!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-left-tablet-only{text-align:left!important}}@media screen and (max-width:1023px){.has-text-left-touch{text-align:left!important}}@media screen and (min-width:1024px){.has-text-left-desktop{text-align:left!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-left-desktop-only{text-align:left!important}}@media screen and (min-width:1216px){.has-text-left-widescreen{text-align:left!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-left-widescreen-only{text-align:left!important}}@media screen and (min-width:1408px){.has-text-left-fullhd{text-align:left!important}}.has-text-right{text-align:right!important}@media screen and (max-width:768px){.has-text-right-mobile{text-align:right!important}}@media print,screen and (min-width:769px){.has-text-right-tablet{text-align:right!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-right-tablet-only{text-align:right!important}}@media screen and (max-width:1023px){.has-text-right-touch{text-align:right!important}}@media screen and (min-width:1024px){.has-text-right-desktop{text-align:right!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-right-desktop-only{text-align:right!important}}@media screen and (min-width:1216px){.has-text-right-widescreen{text-align:right!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-right-widescreen-only{text-align:right!important}}@media screen and (min-width:1408px){.has-text-right-fullhd{text-align:right!important}}.is-capitalized{text-transform:capitalize!important}.is-lowercase{text-transform:lowercase!important}.is-uppercase{text-transform:uppercase!important}.has-text-white{color:#fff!important}a.has-text-white:focus,a.has-text-white:hover{color:#e6e6e6!important}.has-text-black{color:#0a0a0a!important}a.has-text-black:focus,a.has-text-black:hover{color:#000!important}.has-text-light{color:#f5f5f5!important}a.has-text-light:focus,a.has-text-light:hover{color:#dbdbdb!important}.has-text-dark{color:#363636!important}a.has-text-dark:focus,a.has-text-dark:hover{color:#1c1c1c!important}.has-text-primary{color:#00d1b2!important}a.has-text-primary:focus,a.has-text-primary:hover{color:#009e86!important}.has-text-link{color:#3273dc!important}a.has-text-link:focus,a.has-text-link:hover{color:#205bbc!important}.has-text-info{color:#209cee!important}a.has-text-info:focus,a.has-text-info:hover{color:#0f81cc!important}.has-text-success{color:#23d160!important}a.has-text-success:focus,a.has-text-success:hover{color:#1ca64c!important}.has-text-warning{color:#ffdd57!important}a.has-text-warning:focus,a.has-text-warning:hover{color:#ffd324!important}.has-text-danger{color:#ff3860!important}a.has-text-danger:focus,a.has-text-danger:hover{color:#ff0537!important}.has-text-black-bis{color:#121212!important}.has-text-black-ter{color:#242424!important}.has-text-grey-darker{color:#363636!important}.has-text-grey-dark{color:#4a4a4a!important}.has-text-grey{color:#7a7a7a!important}.has-text-grey-light{color:#b5b5b5!important}.has-text-grey-lighter{color:#dbdbdb!important}.has-text-white-ter{color:#f5f5f5!important}.has-text-white-bis{color:#fafafa!important}.has-text-weight-light{font-weight:300!important}.has-text-weight-normal{font-weight:400!important}.has-text-weight-semibold{font-weight:600!important}.has-text-weight-bold{font-weight:700!important}.is-block{display:block!important}@media screen and (max-width:768px){.is-block-mobile{display:block!important}}@media print,screen and (min-width:769px){.is-block-tablet{display:block!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-block-tablet-only{display:block!important}}@media screen and (max-width:1023px){.is-block-touch{display:block!important}}@media screen and (min-width:1024px){.is-block-desktop{display:block!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-block-desktop-only{display:block!important}}@media screen and (min-width:1216px){.is-block-widescreen{display:block!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-block-widescreen-only{display:block!important}}@media screen and (min-width:1408px){.is-block-fullhd{display:block!important}}.is-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}@media screen and (max-width:768px){.is-flex-mobile{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media print,screen and (min-width:769px){.is-flex-tablet{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-flex-tablet-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (max-width:1023px){.is-flex-touch{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1024px){.is-flex-desktop{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-flex-desktop-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1216px){.is-flex-widescreen{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-flex-widescreen-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1408px){.is-flex-fullhd{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}.is-inline{display:inline!important}@media screen and (max-width:768px){.is-inline-mobile{display:inline!important}}@media print,screen and (min-width:769px){.is-inline-tablet{display:inline!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-tablet-only{display:inline!important}}@media screen and (max-width:1023px){.is-inline-touch{display:inline!important}}@media screen and (min-width:1024px){.is-inline-desktop{display:inline!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-desktop-only{display:inline!important}}@media screen and (min-width:1216px){.is-inline-widescreen{display:inline!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-widescreen-only{display:inline!important}}@media screen and (min-width:1408px){.is-inline-fullhd{display:inline!important}}.is-inline-block{display:inline-block!important}@media screen and (max-width:768px){.is-inline-block-mobile{display:inline-block!important}}@media print,screen and (min-width:769px){.is-inline-block-tablet{display:inline-block!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-block-tablet-only{display:inline-block!important}}@media screen and (max-width:1023px){.is-inline-block-touch{display:inline-block!important}}@media screen and (min-width:1024px){.is-inline-block-desktop{display:inline-block!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-block-desktop-only{display:inline-block!important}}@media screen and (min-width:1216px){.is-inline-block-widescreen{display:inline-block!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-block-widescreen-only{display:inline-block!important}}@media screen and (min-width:1408px){.is-inline-block-fullhd{display:inline-block!important}}.is-inline-flex{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}@media screen and (max-width:768px){.is-inline-flex-mobile{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print,screen and (min-width:769px){.is-inline-flex-tablet{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-flex-tablet-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (max-width:1023px){.is-inline-flex-touch{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1024px){.is-inline-flex-desktop{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-flex-desktop-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1216px){.is-inline-flex-widescreen{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-flex-widescreen-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1408px){.is-inline-flex-fullhd{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}.is-hidden{display:none!important}@media screen and (max-width:768px){.is-hidden-mobile{display:none!important}}@media print,screen and (min-width:769px){.is-hidden-tablet{display:none!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-hidden-tablet-only{display:none!important}}@media screen and (max-width:1023px){.is-hidden-touch{display:none!important}}@media screen and (min-width:1024px){.is-hidden-desktop{display:none!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-hidden-desktop-only{display:none!important}}@media screen and (min-width:1216px){.is-hidden-widescreen{display:none!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-hidden-widescreen-only{display:none!important}}@media screen and (min-width:1408px){.is-hidden-fullhd{display:none!important}}.is-invisible{visibility:hidden!important}@media screen and (max-width:768px){.is-invisible-mobile{visibility:hidden!important}}@media print,screen and (min-width:769px){.is-invisible-tablet{visibility:hidden!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-invisible-tablet-only{visibility:hidden!important}}@media screen and (max-width:1023px){.is-invisible-touch{visibility:hidden!important}}@media screen and (min-width:1024px){.is-invisible-desktop{visibility:hidden!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-invisible-desktop-only{visibility:hidden!important}}@media screen and (min-width:1216px){.is-invisible-widescreen{visibility:hidden!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-invisible-widescreen-only{visibility:hidden!important}}@media screen and (min-width:1408px){.is-invisible-fullhd{visibility:hidden!important}}.is-marginless{margin:0!important}.is-paddingless{padding:0!important}.is-radiusless{border-radius:0!important}.is-shadowless{-webkit-box-shadow:none!important;box-shadow:none!important}.is-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.box{background-color:#fff;border-radius:5px;-webkit-box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);color:#4a4a4a;display:block;padding:1.25rem}.box:not(:last-child){margin-bottom:1.5rem}a.box:focus,a.box:hover{-webkit-box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px #3273dc;box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px #3273dc}a.box:active{-webkit-box-shadow:inset 0 1px 2px hsla(0,0%,4%,.2),0 0 0 1px #3273dc;box-shadow:inset 0 1px 2px hsla(0,0%,4%,.2),0 0 0 1px #3273dc}.button{-moz-appearance:none;-webkit-appearance:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;height:2.25em;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding-left:calc(.625em - 1px);padding-right:calc(.625em - 1px);position:relative;vertical-align:top;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;border-color:#dbdbdb;color:#363636;cursor:pointer;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:calc(.375em - 1px) .75em;text-align:center;white-space:nowrap}.button.is-active,.button.is-focused,.button:active,.button:focus{outline:none}.button[disabled]{cursor:not-allowed}.button strong{color:inherit}.button .icon,.button .icon.is-large,.button .icon.is-medium,.button .icon.is-small{height:1.5em;width:1.5em}.button .icon:first-child:not(:last-child){margin-left:calc(-.375em - 1px);margin-right:.1875em}.button .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:calc(-.375em - 1px)}.button .icon:first-child:last-child{margin-left:calc(-.375em - 1px);margin-right:calc(-.375em - 1px)}.button.is-hovered,.button:hover{border-color:#b5b5b5;color:#363636}.button.is-focused,.button:focus{border-color:#3273dc;color:#363636}.button.is-focused:not(:active),.button:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(50,115,220,.25);box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.button.is-active,.button:active{border-color:#4a4a4a;color:#363636}.button.is-text{background-color:transparent;border-color:transparent;color:#4a4a4a;text-decoration:underline}.button.is-text.is-focused,.button.is-text.is-hovered,.button.is-text:focus,.button.is-text:hover{background-color:#f5f5f5;color:#363636}.button.is-text.is-active,.button.is-text:active{background-color:#e8e8e8;color:#363636}.button.is-text[disabled]{background-color:transparent;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-white{background-color:#fff;border-color:transparent;color:#0a0a0a}.button.is-white.is-hovered,.button.is-white:hover{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.button.is-white.is-focused,.button.is-white:focus{border-color:transparent;color:#0a0a0a}.button.is-white.is-focused:not(:active),.button.is-white:focus:not(:active){-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.button.is-white.is-active,.button.is-white:active{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.button.is-white[disabled]{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-white.is-inverted{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted:hover{background-color:#000}.button.is-white.is-inverted[disabled]{background-color:#0a0a0a;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-white.is-loading:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-white.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-white.is-outlined:focus,.button.is-white.is-outlined:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.button.is-white.is-outlined.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-white.is-outlined[disabled]{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-white.is-inverted.is-outlined:focus,.button.is-white.is-inverted.is-outlined:hover{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#0a0a0a;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black{background-color:#0a0a0a;border-color:transparent;color:#fff}.button.is-black.is-hovered,.button.is-black:hover{background-color:#040404;border-color:transparent;color:#fff}.button.is-black.is-focused,.button.is-black:focus{border-color:transparent;color:#fff}.button.is-black.is-focused:not(:active),.button.is-black:focus:not(:active){-webkit-box-shadow:0 0 0 .125em hsla(0,0%,4%,.25);box-shadow:0 0 0 .125em hsla(0,0%,4%,.25)}.button.is-black.is-active,.button.is-black:active{background-color:#000;border-color:transparent;color:#fff}.button.is-black[disabled]{background-color:#0a0a0a;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-black.is-inverted{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted:hover{background-color:#f2f2f2}.button.is-black.is-inverted[disabled]{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-black.is-outlined:focus,.button.is-black.is-outlined:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.button.is-black.is-outlined.is-loading:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-black.is-outlined[disabled]{background-color:transparent;border-color:#0a0a0a;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-black.is-inverted.is-outlined:focus,.button.is-black.is-inverted.is-outlined:hover{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-light{background-color:#f5f5f5;border-color:transparent;color:#363636}.button.is-light.is-hovered,.button.is-light:hover{background-color:#eee;border-color:transparent;color:#363636}.button.is-light.is-focused,.button.is-light:focus{border-color:transparent;color:#363636}.button.is-light.is-focused:not(:active),.button.is-light:focus:not(:active){-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96%,.25)}.button.is-light.is-active,.button.is-light:active{background-color:#e8e8e8;border-color:transparent;color:#363636}.button.is-light[disabled]{background-color:#f5f5f5;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-light.is-inverted{background-color:#363636;color:#f5f5f5}.button.is-light.is-inverted:hover{background-color:#292929}.button.is-light.is-inverted[disabled]{background-color:#363636;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#f5f5f5}.button.is-light.is-loading:after{border-color:transparent transparent #363636 #363636!important}.button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-light.is-outlined:focus,.button.is-light.is-outlined:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.button.is-light.is-outlined.is-loading:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-light.is-outlined[disabled]{background-color:transparent;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#f5f5f5}.button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-light.is-inverted.is-outlined:focus,.button.is-light.is-inverted.is-outlined:hover{background-color:#363636;color:#f5f5f5}.button.is-light.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#363636;-webkit-box-shadow:none;box-shadow:none;color:#363636}.button.is-dark{background-color:#363636;border-color:transparent;color:#f5f5f5}.button.is-dark.is-hovered,.button.is-dark:hover{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}.button.is-dark.is-focused,.button.is-dark:focus{border-color:transparent;color:#f5f5f5}.button.is-dark.is-focused:not(:active),.button.is-dark:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.button.is-dark.is-active,.button.is-dark:active{background-color:#292929;border-color:transparent;color:#f5f5f5}.button.is-dark[disabled]{background-color:#363636;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-dark.is-inverted{background-color:#f5f5f5;color:#363636}.button.is-dark.is-inverted:hover{background-color:#e8e8e8}.button.is-dark.is-inverted[disabled]{background-color:#f5f5f5;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#363636}.button.is-dark.is-loading:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-dark.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-dark.is-outlined:focus,.button.is-dark.is-outlined:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}.button.is-dark.is-outlined.is-loading:after{border-color:transparent transparent #363636 #363636!important}.button.is-dark.is-outlined[disabled]{background-color:transparent;border-color:#363636;-webkit-box-shadow:none;box-shadow:none;color:#363636}.button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-dark.is-inverted.is-outlined:focus,.button.is-dark.is-inverted.is-outlined:hover{background-color:#f5f5f5;color:#363636}.button.is-dark.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#f5f5f5}.button.is-primary{background-color:#00d1b2;border-color:transparent;color:#fff}.button.is-primary.is-hovered,.button.is-primary:hover{background-color:#00c4a7;border-color:transparent;color:#fff}.button.is-primary.is-focused,.button.is-primary:focus{border-color:transparent;color:#fff}.button.is-primary.is-focused:not(:active),.button.is-primary:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(0,209,178,.25);box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.button.is-primary.is-active,.button.is-primary:active{background-color:#00b89c;border-color:transparent;color:#fff}.button.is-primary[disabled]{background-color:#00d1b2;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-primary.is-inverted{background-color:#fff;color:#00d1b2}.button.is-primary.is-inverted:hover{background-color:#f2f2f2}.button.is-primary.is-inverted[disabled]{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#00d1b2}.button.is-primary.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-primary.is-outlined{background-color:transparent;border-color:#00d1b2;color:#00d1b2}.button.is-primary.is-outlined:focus,.button.is-primary.is-outlined:hover{background-color:#00d1b2;border-color:#00d1b2;color:#fff}.button.is-primary.is-outlined.is-loading:after{border-color:transparent transparent #00d1b2 #00d1b2!important}.button.is-primary.is-outlined[disabled]{background-color:transparent;border-color:#00d1b2;-webkit-box-shadow:none;box-shadow:none;color:#00d1b2}.button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-primary.is-inverted.is-outlined:focus,.button.is-primary.is-inverted.is-outlined:hover{background-color:#fff;color:#00d1b2}.button.is-primary.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-link{background-color:#3273dc;border-color:transparent;color:#fff}.button.is-link.is-hovered,.button.is-link:hover{background-color:#276cda;border-color:transparent;color:#fff}.button.is-link.is-focused,.button.is-link:focus{border-color:transparent;color:#fff}.button.is-link.is-focused:not(:active),.button.is-link:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(50,115,220,.25);box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.button.is-link.is-active,.button.is-link:active{background-color:#2366d1;border-color:transparent;color:#fff}.button.is-link[disabled]{background-color:#3273dc;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-link.is-inverted{background-color:#fff;color:#3273dc}.button.is-link.is-inverted:hover{background-color:#f2f2f2}.button.is-link.is-inverted[disabled]{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#3273dc}.button.is-link.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-link.is-outlined{background-color:transparent;border-color:#3273dc;color:#3273dc}.button.is-link.is-outlined:focus,.button.is-link.is-outlined:hover{background-color:#3273dc;border-color:#3273dc;color:#fff}.button.is-link.is-outlined.is-loading:after{border-color:transparent transparent #3273dc #3273dc!important}.button.is-link.is-outlined[disabled]{background-color:transparent;border-color:#3273dc;-webkit-box-shadow:none;box-shadow:none;color:#3273dc}.button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-link.is-inverted.is-outlined:focus,.button.is-link.is-inverted.is-outlined:hover{background-color:#fff;color:#3273dc}.button.is-link.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-info{background-color:#209cee;border-color:transparent;color:#fff}.button.is-info.is-hovered,.button.is-info:hover{background-color:#1496ed;border-color:transparent;color:#fff}.button.is-info.is-focused,.button.is-info:focus{border-color:transparent;color:#fff}.button.is-info.is-focused:not(:active),.button.is-info:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(32,156,238,.25);box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.button.is-info.is-active,.button.is-info:active{background-color:#118fe4;border-color:transparent;color:#fff}.button.is-info[disabled]{background-color:#209cee;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-info.is-inverted{background-color:#fff;color:#209cee}.button.is-info.is-inverted:hover{background-color:#f2f2f2}.button.is-info.is-inverted[disabled]{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#209cee}.button.is-info.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-info.is-outlined{background-color:transparent;border-color:#209cee;color:#209cee}.button.is-info.is-outlined:focus,.button.is-info.is-outlined:hover{background-color:#209cee;border-color:#209cee;color:#fff}.button.is-info.is-outlined.is-loading:after{border-color:transparent transparent #209cee #209cee!important}.button.is-info.is-outlined[disabled]{background-color:transparent;border-color:#209cee;-webkit-box-shadow:none;box-shadow:none;color:#209cee}.button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-info.is-inverted.is-outlined:focus,.button.is-info.is-inverted.is-outlined:hover{background-color:#fff;color:#209cee}.button.is-info.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-success{background-color:#23d160;border-color:transparent;color:#fff}.button.is-success.is-hovered,.button.is-success:hover{background-color:#22c65b;border-color:transparent;color:#fff}.button.is-success.is-focused,.button.is-success:focus{border-color:transparent;color:#fff}.button.is-success.is-focused:not(:active),.button.is-success:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(35,209,96,.25);box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.button.is-success.is-active,.button.is-success:active{background-color:#20bc56;border-color:transparent;color:#fff}.button.is-success[disabled]{background-color:#23d160;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-success.is-inverted{background-color:#fff;color:#23d160}.button.is-success.is-inverted:hover{background-color:#f2f2f2}.button.is-success.is-inverted[disabled]{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#23d160}.button.is-success.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-success.is-outlined{background-color:transparent;border-color:#23d160;color:#23d160}.button.is-success.is-outlined:focus,.button.is-success.is-outlined:hover{background-color:#23d160;border-color:#23d160;color:#fff}.button.is-success.is-outlined.is-loading:after{border-color:transparent transparent #23d160 #23d160!important}.button.is-success.is-outlined[disabled]{background-color:transparent;border-color:#23d160;-webkit-box-shadow:none;box-shadow:none;color:#23d160}.button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-success.is-inverted.is-outlined:focus,.button.is-success.is-inverted.is-outlined:hover{background-color:#fff;color:#23d160}.button.is-success.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-warning{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-hovered,.button.is-warning:hover{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused,.button.is-warning:focus{border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused:not(:active),.button.is-warning:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(255,221,87,.25);box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.button.is-warning.is-active,.button.is-warning:active{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning[disabled]{background-color:#ffdd57;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-warning.is-inverted{color:#ffdd57}.button.is-warning.is-inverted,.button.is-warning.is-inverted:hover{background-color:rgba(0,0,0,.7)}.button.is-warning.is-inverted[disabled]{background-color:rgba(0,0,0,.7);border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#ffdd57}.button.is-warning.is-loading:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-warning.is-outlined{background-color:transparent;border-color:#ffdd57;color:#ffdd57}.button.is-warning.is-outlined:focus,.button.is-warning.is-outlined:hover{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.button.is-warning.is-outlined.is-loading:after{border-color:transparent transparent #ffdd57 #ffdd57!important}.button.is-warning.is-outlined[disabled]{background-color:transparent;border-color:#ffdd57;-webkit-box-shadow:none;box-shadow:none;color:#ffdd57}.button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-warning.is-inverted.is-outlined:focus,.button.is-warning.is-inverted.is-outlined:hover{background-color:rgba(0,0,0,.7);color:#ffdd57}.button.is-warning.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:rgba(0,0,0,.7);-webkit-box-shadow:none;box-shadow:none;color:rgba(0,0,0,.7)}.button.is-danger{background-color:#ff3860;border-color:transparent;color:#fff}.button.is-danger.is-hovered,.button.is-danger:hover{background-color:#ff2b56;border-color:transparent;color:#fff}.button.is-danger.is-focused,.button.is-danger:focus{border-color:transparent;color:#fff}.button.is-danger.is-focused:not(:active),.button.is-danger:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(255,56,96,.25);box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.button.is-danger.is-active,.button.is-danger:active{background-color:#ff1f4b;border-color:transparent;color:#fff}.button.is-danger[disabled]{background-color:#ff3860;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-danger.is-inverted{background-color:#fff;color:#ff3860}.button.is-danger.is-inverted:hover{background-color:#f2f2f2}.button.is-danger.is-inverted[disabled]{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#ff3860}.button.is-danger.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-danger.is-outlined{background-color:transparent;border-color:#ff3860;color:#ff3860}.button.is-danger.is-outlined:focus,.button.is-danger.is-outlined:hover{background-color:#ff3860;border-color:#ff3860;color:#fff}.button.is-danger.is-outlined.is-loading:after{border-color:transparent transparent #ff3860 #ff3860!important}.button.is-danger.is-outlined[disabled]{background-color:transparent;border-color:#ff3860;-webkit-box-shadow:none;box-shadow:none;color:#ff3860}.button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-danger.is-inverted.is-outlined:focus,.button.is-danger.is-inverted.is-outlined:hover{background-color:#fff;color:#ff3860}.button.is-danger.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-small{border-radius:2px;font-size:.75rem}.button.is-medium{font-size:1.25rem}.button.is-large{font-size:1.5rem}.button[disabled]{background-color:#fff;border-color:#dbdbdb;-webkit-box-shadow:none;box-shadow:none;opacity:.5}.button.is-fullwidth{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.button.is-loading{color:transparent!important;pointer-events:none}.button.is-loading:after{-webkit-animation:spinAround .5s infinite linear;animation:spinAround .5s infinite linear;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;position:relative;width:1em;position:absolute;left:calc(50% - 0.5em);top:calc(50% - 0.5em);position:absolute!important}.button.is-static{background-color:#f5f5f5;border-color:#dbdbdb;color:#7a7a7a;-webkit-box-shadow:none;box-shadow:none;pointer-events:none}.buttons{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.buttons .button{margin-bottom:.5rem}.buttons .button:not(:last-child){margin-right:.5rem}.buttons:last-child{margin-bottom:-.5rem}.buttons:not(:last-child){margin-bottom:1rem}.buttons.has-addons .button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.buttons.has-addons .button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.buttons.has-addons .button:last-child{margin-right:0}.buttons.has-addons .button.is-hovered,.buttons.has-addons .button:hover{z-index:2}.buttons.has-addons .button.is-active,.buttons.has-addons .button.is-focused,.buttons.has-addons .button.is-selected,.buttons.has-addons .button:active,.buttons.has-addons .button:focus{z-index:3}.buttons.has-addons .button.is-active:hover,.buttons.has-addons .button.is-focused:hover,.buttons.has-addons .button.is-selected:hover,.buttons.has-addons .button:active:hover,.buttons.has-addons .button:focus:hover{z-index:4}.buttons.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.buttons.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.container{margin:0 auto;position:relative}@media screen and (min-width:1024px){.container{max-width:960px;width:960px}.container.is-fluid{margin-left:32px;margin-right:32px;max-width:none;width:auto}}@media screen and (max-width:1215px){.container.is-widescreen{max-width:1152px;width:auto}}@media screen and (max-width:1407px){.container.is-fullhd{max-width:1344px;width:auto}}@media screen and (min-width:1216px){.container{max-width:1152px;width:1152px}}@media screen and (min-width:1408px){.container{max-width:1344px;width:1344px}}.content:not(:last-child){margin-bottom:1.5rem}.content li+li{margin-top:.25em}.content blockquote:not(:last-child),.content dl:not(:last-child),.content ol:not(:last-child),.content p:not(:last-child),.content pre:not(:last-child),.content table:not(:last-child),.content ul:not(:last-child){margin-bottom:1em}.content h1,.content h2,.content h3,.content h4,.content h5,.content h6{color:#363636;font-weight:400;line-height:1.125}.content h1{font-size:2em;margin-bottom:.5em}.content h1:not(:first-child){margin-top:1em}.content h2{font-size:1.75em;margin-bottom:.5714em}.content h2:not(:first-child){margin-top:1.1428em}.content h3{font-size:1.5em;margin-bottom:.6666em}.content h3:not(:first-child){margin-top:1.3333em}.content h4{font-size:1.25em;margin-bottom:.8em}.content h5{font-size:1.125em;margin-bottom:.8888em}.content h6{font-size:1em;margin-bottom:1em}.content blockquote{background-color:#f5f5f5;border-left:5px solid #dbdbdb;padding:1.25em 1.5em}.content ol{list-style:decimal outside}.content ol,.content ul{margin-left:2em;margin-top:1em}.content ul{list-style:disc outside}.content ul ul{list-style-type:circle;margin-top:.5em}.content ul ul ul{list-style-type:square}.content dd{margin-left:2em}.content figure{margin-left:2em;margin-right:2em;text-align:center}.content figure:not(:first-child){margin-top:2em}.content figure:not(:last-child){margin-bottom:2em}.content figure img{display:inline-block}.content figure figcaption{font-style:italic}.content pre{-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal}.content sub,.content sup{font-size:75%}.content table{width:100%}.content table td,.content table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.content table th{color:#363636;text-align:left}.content table tr:hover{background-color:#f5f5f5}.content table thead td,.content table thead th{border-width:0 0 2px;color:#363636}.content table tfoot td,.content table tfoot th{border-width:2px 0 0;color:#363636}.content table tbody tr:last-child td,.content table tbody tr:last-child th{border-bottom-width:0}.content.is-small{font-size:.75rem}.content.is-medium{font-size:1.25rem}.content.is-large{font-size:1.5rem}.input,.textarea{-moz-appearance:none;-webkit-appearance:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;height:2.25em;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding:calc(.375em - 1px) calc(.625em - 1px);position:relative;vertical-align:top;background-color:#fff;border-color:#dbdbdb;color:#363636;-webkit-box-shadow:inset 0 1px 2px hsla(0,0%,4%,.1);box-shadow:inset 0 1px 2px hsla(0,0%,4%,.1);max-width:100%;width:100%}.input.is-active,.input.is-focused,.input:active,.input:focus,.textarea.is-active,.textarea.is-focused,.textarea:active,.textarea:focus{outline:none}.input[disabled],.textarea[disabled]{cursor:not-allowed}.input::-moz-placeholder,.textarea::-moz-placeholder{color:rgba(54,54,54,.3)}.input::-webkit-input-placeholder,.textarea::-webkit-input-placeholder{color:rgba(54,54,54,.3)}.input:-moz-placeholder,.textarea:-moz-placeholder{color:rgba(54,54,54,.3)}.input:-ms-input-placeholder,.textarea:-ms-input-placeholder{color:rgba(54,54,54,.3)}.input.is-hovered,.input:hover,.textarea.is-hovered,.textarea:hover{border-color:#b5b5b5}.input.is-active,.input.is-focused,.input:active,.input:focus,.textarea.is-active,.textarea.is-focused,.textarea:active,.textarea:focus{border-color:#3273dc;-webkit-box-shadow:0 0 0 .125em rgba(50,115,220,.25);box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.input[disabled],.textarea[disabled]{background-color:#f5f5f5;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#7a7a7a}.input[disabled]::-moz-placeholder,.textarea[disabled]::-moz-placeholder{color:hsla(0,0%,48%,.3)}.input[disabled]::-webkit-input-placeholder,.textarea[disabled]::-webkit-input-placeholder{color:hsla(0,0%,48%,.3)}.input[disabled]:-moz-placeholder,.textarea[disabled]:-moz-placeholder{color:hsla(0,0%,48%,.3)}.input[disabled]:-ms-input-placeholder,.textarea[disabled]:-ms-input-placeholder{color:hsla(0,0%,48%,.3)}.input[type=search],.textarea[type=search]{border-radius:290486px}.input[readonly],.textarea[readonly]{-webkit-box-shadow:none;box-shadow:none}.input.is-white,.textarea.is-white{border-color:#fff}.input.is-white.is-active,.input.is-white.is-focused,.input.is-white:active,.input.is-white:focus,.textarea.is-white.is-active,.textarea.is-white.is-focused,.textarea.is-white:active,.textarea.is-white:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.input.is-black,.textarea.is-black{border-color:#0a0a0a}.input.is-black.is-active,.input.is-black.is-focused,.input.is-black:active,.input.is-black:focus,.textarea.is-black.is-active,.textarea.is-black.is-focused,.textarea.is-black:active,.textarea.is-black:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,4%,.25);box-shadow:0 0 0 .125em hsla(0,0%,4%,.25)}.input.is-light,.textarea.is-light{border-color:#f5f5f5}.input.is-light.is-active,.input.is-light.is-focused,.input.is-light:active,.input.is-light:focus,.textarea.is-light.is-active,.textarea.is-light.is-focused,.textarea.is-light:active,.textarea.is-light:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96%,.25)}.input.is-dark,.textarea.is-dark{border-color:#363636}.input.is-dark.is-active,.input.is-dark.is-focused,.input.is-dark:active,.input.is-dark:focus,.textarea.is-dark.is-active,.textarea.is-dark.is-focused,.textarea.is-dark:active,.textarea.is-dark:focus{-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.input.is-primary,.textarea.is-primary{border-color:#00d1b2}.input.is-primary.is-active,.input.is-primary.is-focused,.input.is-primary:active,.input.is-primary:focus,.textarea.is-primary.is-active,.textarea.is-primary.is-focused,.textarea.is-primary:active,.textarea.is-primary:focus{-webkit-box-shadow:0 0 0 .125em rgba(0,209,178,.25);box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.input.is-link,.textarea.is-link{border-color:#3273dc}.input.is-link.is-active,.input.is-link.is-focused,.input.is-link:active,.input.is-link:focus,.textarea.is-link.is-active,.textarea.is-link.is-focused,.textarea.is-link:active,.textarea.is-link:focus{-webkit-box-shadow:0 0 0 .125em rgba(50,115,220,.25);box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.input.is-info,.textarea.is-info{border-color:#209cee}.input.is-info.is-active,.input.is-info.is-focused,.input.is-info:active,.input.is-info:focus,.textarea.is-info.is-active,.textarea.is-info.is-focused,.textarea.is-info:active,.textarea.is-info:focus{-webkit-box-shadow:0 0 0 .125em rgba(32,156,238,.25);box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.input.is-success,.textarea.is-success{border-color:#23d160}.input.is-success.is-active,.input.is-success.is-focused,.input.is-success:active,.input.is-success:focus,.textarea.is-success.is-active,.textarea.is-success.is-focused,.textarea.is-success:active,.textarea.is-success:focus{-webkit-box-shadow:0 0 0 .125em rgba(35,209,96,.25);box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.input.is-warning,.textarea.is-warning{border-color:#ffdd57}.input.is-warning.is-active,.input.is-warning.is-focused,.input.is-warning:active,.input.is-warning:focus,.textarea.is-warning.is-active,.textarea.is-warning.is-focused,.textarea.is-warning:active,.textarea.is-warning:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,221,87,.25);box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.input.is-danger,.textarea.is-danger{border-color:#ff3860}.input.is-danger.is-active,.input.is-danger.is-focused,.input.is-danger:active,.input.is-danger:focus,.textarea.is-danger.is-active,.textarea.is-danger.is-focused,.textarea.is-danger:active,.textarea.is-danger:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,56,96,.25);box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.input.is-small,.textarea.is-small{border-radius:2px;font-size:.75rem}.input.is-medium,.textarea.is-medium{font-size:1.25rem}.input.is-large,.textarea.is-large{font-size:1.5rem}.input.is-fullwidth,.textarea.is-fullwidth{display:block;width:100%}.input.is-inline,.textarea.is-inline{display:inline;width:auto}.input.is-static{background-color:transparent;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;padding-left:0;padding-right:0}.textarea{display:block;max-width:100%;min-width:100%;padding:.625em;resize:vertical}.textarea:not([rows]){max-height:600px;min-height:120px}.textarea[rows]{height:unset}.textarea.has-fixed-size{resize:none}.checkbox,.radio{cursor:pointer;display:inline-block;line-height:1.25;position:relative}.checkbox input,.radio input{cursor:pointer}.checkbox:hover,.radio:hover{color:#363636}.checkbox[disabled],.radio[disabled]{color:#7a7a7a;cursor:not-allowed}.radio+.radio{margin-left:.5em}.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}.select:not(.is-multiple){height:2.25em}.select:not(.is-multiple):after{border:1px solid #3273dc;border-right:0;border-top:0;content:\" \";display:block;height:.5em;pointer-events:none;position:absolute;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;transform-origin:center;width:.5em;margin-top:-.375em;right:1.125em;top:50%;z-index:4}.select select{-moz-appearance:none;-webkit-appearance:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;height:2.25em;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding:calc(.375em - 1px) calc(.625em - 1px);position:relative;vertical-align:top;background-color:#fff;border-color:#dbdbdb;color:#363636;cursor:pointer;display:block;font-size:1em;max-width:100%;outline:none}.select select.is-active,.select select.is-focused,.select select:active,.select select:focus{outline:none}.select select[disabled]{cursor:not-allowed}.select select::-moz-placeholder{color:rgba(54,54,54,.3)}.select select::-webkit-input-placeholder{color:rgba(54,54,54,.3)}.select select:-moz-placeholder{color:rgba(54,54,54,.3)}.select select:-ms-input-placeholder{color:rgba(54,54,54,.3)}.select select.is-hovered,.select select:hover{border-color:#b5b5b5}.select select.is-active,.select select.is-focused,.select select:active,.select select:focus{border-color:#3273dc;-webkit-box-shadow:0 0 0 .125em rgba(50,115,220,.25);box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.select select[disabled]{background-color:#f5f5f5;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#7a7a7a}.select select[disabled]::-moz-placeholder{color:hsla(0,0%,48%,.3)}.select select[disabled]::-webkit-input-placeholder{color:hsla(0,0%,48%,.3)}.select select[disabled]:-moz-placeholder{color:hsla(0,0%,48%,.3)}.select select[disabled]:-ms-input-placeholder{color:hsla(0,0%,48%,.3)}.select select::-ms-expand{display:none}.select select[disabled]:hover{border-color:#f5f5f5}.select select:not([multiple]){padding-right:2.5em}.select select[multiple]{height:unset;padding:0}.select select[multiple] option{padding:.5em 1em}.select:hover:after{border-color:#363636}.select.is-white select{border-color:#fff}.select.is-white select.is-active,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.select.is-black select{border-color:#0a0a0a}.select.is-black select.is-active,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,4%,.25);box-shadow:0 0 0 .125em hsla(0,0%,4%,.25)}.select.is-light select{border-color:#f5f5f5}.select.is-light select.is-active,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96%,.25)}.select.is-dark select{border-color:#363636}.select.is-dark select.is-active,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select:focus{-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.select.is-primary select{border-color:#00d1b2}.select.is-primary select.is-active,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select:focus{-webkit-box-shadow:0 0 0 .125em rgba(0,209,178,.25);box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.select.is-link select{border-color:#3273dc}.select.is-link select.is-active,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select:focus{-webkit-box-shadow:0 0 0 .125em rgba(50,115,220,.25);box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.select.is-info select{border-color:#209cee}.select.is-info select.is-active,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select:focus{-webkit-box-shadow:0 0 0 .125em rgba(32,156,238,.25);box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.select.is-success select{border-color:#23d160}.select.is-success select.is-active,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select:focus{-webkit-box-shadow:0 0 0 .125em rgba(35,209,96,.25);box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.select.is-warning select{border-color:#ffdd57}.select.is-warning select.is-active,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,221,87,.25);box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.select.is-danger select{border-color:#ff3860}.select.is-danger select.is-active,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,56,96,.25);box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.select.is-small{border-radius:2px;font-size:.75rem}.select.is-medium{font-size:1.25rem}.select.is-large{font-size:1.5rem}.select.is-disabled:after{border-color:#7a7a7a}.select.is-fullwidth,.select.is-fullwidth select{width:100%}.select.is-loading:after{-webkit-animation:spinAround .5s infinite linear;animation:spinAround .5s infinite linear;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;position:relative;width:1em;margin-top:0;position:absolute;right:.625em;top:.625em;-webkit-transform:none;transform:none}.select.is-loading.is-small:after{font-size:.75rem}.select.is-loading.is-medium:after{font-size:1.25rem}.select.is-loading.is-large:after{font-size:1.5rem}.file{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#fff;border-color:transparent;color:#0a0a0a}.file.is-white.is-hovered .file-cta,.file.is-white:hover .file-cta{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.file.is-white.is-focused .file-cta,.file.is-white:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.25);box-shadow:0 0 .5em hsla(0,0%,100%,.25);color:#0a0a0a}.file.is-white.is-active .file-cta,.file.is-white:active .file-cta{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.file.is-black .file-cta{background-color:#0a0a0a;border-color:transparent;color:#fff}.file.is-black.is-hovered .file-cta,.file.is-black:hover .file-cta{background-color:#040404;border-color:transparent;color:#fff}.file.is-black.is-focused .file-cta,.file.is-black:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em hsla(0,0%,4%,.25);box-shadow:0 0 .5em hsla(0,0%,4%,.25);color:#fff}.file.is-black.is-active .file-cta,.file.is-black:active .file-cta{background-color:#000;border-color:transparent;color:#fff}.file.is-light .file-cta{background-color:#f5f5f5;border-color:transparent;color:#363636}.file.is-light.is-hovered .file-cta,.file.is-light:hover .file-cta{background-color:#eee;border-color:transparent;color:#363636}.file.is-light.is-focused .file-cta,.file.is-light:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em hsla(0,0%,96%,.25);box-shadow:0 0 .5em hsla(0,0%,96%,.25);color:#363636}.file.is-light.is-active .file-cta,.file.is-light:active .file-cta{background-color:#e8e8e8;border-color:transparent;color:#363636}.file.is-dark .file-cta{background-color:#363636;border-color:transparent;color:#f5f5f5}.file.is-dark.is-hovered .file-cta,.file.is-dark:hover .file-cta{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}.file.is-dark.is-focused .file-cta,.file.is-dark:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(54,54,54,.25);box-shadow:0 0 .5em rgba(54,54,54,.25);color:#f5f5f5}.file.is-dark.is-active .file-cta,.file.is-dark:active .file-cta{background-color:#292929;border-color:transparent;color:#f5f5f5}.file.is-primary .file-cta{background-color:#00d1b2;border-color:transparent;color:#fff}.file.is-primary.is-hovered .file-cta,.file.is-primary:hover .file-cta{background-color:#00c4a7;border-color:transparent;color:#fff}.file.is-primary.is-focused .file-cta,.file.is-primary:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(0,209,178,.25);box-shadow:0 0 .5em rgba(0,209,178,.25);color:#fff}.file.is-primary.is-active .file-cta,.file.is-primary:active .file-cta{background-color:#00b89c;border-color:transparent;color:#fff}.file.is-link .file-cta{background-color:#3273dc;border-color:transparent;color:#fff}.file.is-link.is-hovered .file-cta,.file.is-link:hover .file-cta{background-color:#276cda;border-color:transparent;color:#fff}.file.is-link.is-focused .file-cta,.file.is-link:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(50,115,220,.25);box-shadow:0 0 .5em rgba(50,115,220,.25);color:#fff}.file.is-link.is-active .file-cta,.file.is-link:active .file-cta{background-color:#2366d1;border-color:transparent;color:#fff}.file.is-info .file-cta{background-color:#209cee;border-color:transparent;color:#fff}.file.is-info.is-hovered .file-cta,.file.is-info:hover .file-cta{background-color:#1496ed;border-color:transparent;color:#fff}.file.is-info.is-focused .file-cta,.file.is-info:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(32,156,238,.25);box-shadow:0 0 .5em rgba(32,156,238,.25);color:#fff}.file.is-info.is-active .file-cta,.file.is-info:active .file-cta{background-color:#118fe4;border-color:transparent;color:#fff}.file.is-success .file-cta{background-color:#23d160;border-color:transparent;color:#fff}.file.is-success.is-hovered .file-cta,.file.is-success:hover .file-cta{background-color:#22c65b;border-color:transparent;color:#fff}.file.is-success.is-focused .file-cta,.file.is-success:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(35,209,96,.25);box-shadow:0 0 .5em rgba(35,209,96,.25);color:#fff}.file.is-success.is-active .file-cta,.file.is-success:active .file-cta{background-color:#20bc56;border-color:transparent;color:#fff}.file.is-warning .file-cta{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-hovered .file-cta,.file.is-warning:hover .file-cta{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-focused .file-cta,.file.is-warning:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(255,221,87,.25);box-shadow:0 0 .5em rgba(255,221,87,.25);color:rgba(0,0,0,.7)}.file.is-warning.is-active .file-cta,.file.is-warning:active .file-cta{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-danger .file-cta{background-color:#ff3860;border-color:transparent;color:#fff}.file.is-danger.is-hovered .file-cta,.file.is-danger:hover .file-cta{background-color:#ff2b56;border-color:transparent;color:#fff}.file.is-danger.is-focused .file-cta,.file.is-danger:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(255,56,96,.25);box-shadow:0 0 .5em rgba(255,56,96,.25);color:#fff}.file.is-danger.is-active .file-cta,.file.is-danger:active .file-cta{background-color:#ff1f4b;border-color:transparent;color:#fff}.file.is-small{font-size:.75rem}.file.is-medium{font-size:1.25rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.5rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:3px}.file.has-name.is-empty .file-name{display:none}.file.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.file.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.file.is-boxed .file-cta,.file.is-boxed .file-label{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.file.is-boxed .file-cta{height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:3px 3px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 3px 3px;border-width:0 1px 1px}.file.is-right .file-cta{border-radius:0 3px 3px 0}.file.is-right .file-name{border-radius:3px 0 0 3px;border-width:1px 0 1px 1px;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:none}.file-label{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#eee;color:#363636}.file-label:hover .file-name{border-color:#d5d5d5}.file-label:active .file-cta{background-color:#e8e8e8;color:#363636}.file-label:active .file-name{border-color:#cfcfcf}.file-input{height:.01em;left:0;outline:none;position:absolute;top:0;width:.01em}.file-cta,.file-name{-moz-appearance:none;-webkit-appearance:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;-webkit-box-shadow:none;box-shadow:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;height:2.25em;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding-left:calc(.625em - 1px);padding-right:calc(.625em - 1px);position:relative;vertical-align:top;border-color:#dbdbdb;border-radius:3px;font-size:1em;padding:calc(.375em - 1px) 1em;white-space:nowrap}.file-cta.is-active,.file-cta.is-focused,.file-cta:active,.file-cta:focus,.file-name.is-active,.file-name.is-focused,.file-name:active,.file-name:focus{outline:none}.file-cta[disabled],.file-name[disabled]{cursor:not-allowed}.file-cta{background-color:#f5f5f5;color:#4a4a4a}.file-name{border-color:#dbdbdb;border-style:solid;border-width:1px 1px 1px 0;display:block;max-width:16em;overflow:hidden;text-align:left;text-overflow:ellipsis}.file-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:1em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:.5em;width:1em}.file-icon .fa{font-size:14px}.label{color:#363636;display:block;font-size:1rem;font-weight:700}.label:not(:last-child){margin-bottom:.5em}.label.is-small{font-size:.75rem}.label.is-medium{font-size:1.25rem}.label.is-large{font-size:1.5rem}.help{display:block;font-size:.75rem;margin-top:.25rem}.help.is-white{color:#fff}.help.is-black{color:#0a0a0a}.help.is-light{color:#f5f5f5}.help.is-dark{color:#363636}.help.is-primary{color:#00d1b2}.help.is-link{color:#3273dc}.help.is-info{color:#209cee}.help.is-success{color:#23d160}.help.is-warning{color:#ffdd57}.help.is-danger{color:#ff3860}.field:not(:last-child){margin-bottom:.75rem}.field.has-addons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.field.has-addons .control:not(:last-child){margin-right:-1px}.field.has-addons .control:first-child .button,.field.has-addons .control:first-child .input,.field.has-addons .control:first-child .select select{border-bottom-left-radius:3px;border-top-left-radius:3px}.field.has-addons .control:last-child .button,.field.has-addons .control:last-child .input,.field.has-addons .control:last-child .select select{border-bottom-right-radius:3px;border-top-right-radius:3px}.field.has-addons .control .button,.field.has-addons .control .input,.field.has-addons .control .select select{border-radius:0}.field.has-addons .control .button.is-hovered,.field.has-addons .control .button:hover,.field.has-addons .control .input.is-hovered,.field.has-addons .control .input:hover,.field.has-addons .control .select select.is-hovered,.field.has-addons .control .select select:hover{z-index:2}.field.has-addons .control .button.is-active,.field.has-addons .control .button.is-focused,.field.has-addons .control .button:active,.field.has-addons .control .button:focus,.field.has-addons .control .input.is-active,.field.has-addons .control .input.is-focused,.field.has-addons .control .input:active,.field.has-addons .control .input:focus,.field.has-addons .control .select select.is-active,.field.has-addons .control .select select.is-focused,.field.has-addons .control .select select:active,.field.has-addons .control .select select:focus{z-index:3}.field.has-addons .control .button.is-active:hover,.field.has-addons .control .button.is-focused:hover,.field.has-addons .control .button:active:hover,.field.has-addons .control .button:focus:hover,.field.has-addons .control .input.is-active:hover,.field.has-addons .control .input.is-focused:hover,.field.has-addons .control .input:active:hover,.field.has-addons .control .input:focus:hover,.field.has-addons .control .select select.is-active:hover,.field.has-addons .control .select select.is-focused:hover,.field.has-addons .control .select select:active:hover,.field.has-addons .control .select select:focus:hover{z-index:4}.field.has-addons .control.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.field.has-addons.has-addons-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.field.has-addons.has-addons-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.field.has-addons.has-addons-fullwidth .control{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.field.is-grouped{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.field.is-grouped>.control{-ms-flex-negative:0;flex-shrink:0}.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:.75rem}.field.is-grouped>.control.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.is-grouped.is-grouped-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.field.is-grouped.is-grouped-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.field.is-grouped.is-grouped-multiline{-ms-flex-wrap:wrap;flex-wrap:wrap}.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:.75rem}.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-.75rem}.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}@media print,screen and (min-width:769px){.field.is-horizontal{display:-webkit-box;display:-ms-flexbox;display:flex}}.field-label .label{font-size:inherit}@media screen and (max-width:768px){.field-label{margin-bottom:.5rem}}@media print,screen and (min-width:769px){.field-label{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:.75rem;padding-top:.375em}.field-label.is-normal{padding-top:.375em}.field-label.is-medium{font-size:1.25rem;padding-top:.375em}.field-label.is-large{font-size:1.5rem;padding-top:.375em}}.field-body .field .field{margin-bottom:0}@media print,screen and (min-width:769px){.field-body{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:5;-ms-flex-positive:5;flex-grow:5;-ms-flex-negative:1;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{-ms-flex-negative:1;flex-shrink:1}.field-body>.field:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.field-body>.field:not(:last-child){margin-right:.75rem}}.control{font-size:1rem;position:relative;text-align:left}.control.has-icon .icon{color:#dbdbdb;height:2.25em;pointer-events:none;position:absolute;top:0;width:2.25em;z-index:4}.control.has-icon .input:focus+.icon{color:#7a7a7a}.control.has-icon .input.is-small+.icon{font-size:.75rem}.control.has-icon .input.is-medium+.icon{font-size:1.25rem}.control.has-icon .input.is-large+.icon{font-size:1.5rem}.control.has-icon:not(.has-icon-right) .icon{left:0}.control.has-icon:not(.has-icon-right) .input{padding-left:2.25em}.control.has-icon.has-icon-right .icon{right:0}.control.has-icon.has-icon-right .input{padding-right:2.25em}.control.has-icons-left .input:focus~.icon,.control.has-icons-left .select:focus~.icon,.control.has-icons-right .input:focus~.icon,.control.has-icons-right .select:focus~.icon{color:#7a7a7a}.control.has-icons-left .input.is-small~.icon,.control.has-icons-left .select.is-small~.icon,.control.has-icons-right .input.is-small~.icon,.control.has-icons-right .select.is-small~.icon{font-size:.75rem}.control.has-icons-left .input.is-medium~.icon,.control.has-icons-left .select.is-medium~.icon,.control.has-icons-right .input.is-medium~.icon,.control.has-icons-right .select.is-medium~.icon{font-size:1.25rem}.control.has-icons-left .input.is-large~.icon,.control.has-icons-left .select.is-large~.icon,.control.has-icons-right .input.is-large~.icon,.control.has-icons-right .select.is-large~.icon{font-size:1.5rem}.control.has-icons-left .icon,.control.has-icons-right .icon{color:#dbdbdb;height:2.25em;pointer-events:none;position:absolute;top:0;width:2.25em;z-index:4}.control.has-icons-left .input,.control.has-icons-left .select select{padding-left:2.25em}.control.has-icons-left .icon.is-left{left:0}.control.has-icons-right .input,.control.has-icons-right .select select{padding-right:2.25em}.control.has-icons-right .icon.is-right{right:0}.control.is-loading:after{-webkit-animation:spinAround .5s infinite linear;animation:spinAround .5s infinite linear;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;position:relative;width:1em;position:absolute!important;right:.625em;top:.625em}.control.is-loading.is-small:after{font-size:.75rem}.control.is-loading.is-medium:after{font-size:1.25rem}.control.is-loading.is-large:after{font-size:1.5rem}.icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:1.5rem;width:1.5rem}.icon.is-small{height:1rem;width:1rem}.icon.is-medium{height:2rem;width:2rem}.icon.is-large{height:3rem;width:3rem}.image{display:block;position:relative}.image img{display:block;height:auto;width:100%}.image.is-1by1 img,.image.is-2by1 img,.image.is-3by2 img,.image.is-4by3 img,.image.is-16by9 img,.image.is-square img{bottom:0;left:0;position:absolute;right:0;top:0;height:100%;width:100%}.image.is-1by1,.image.is-square{padding-top:100%}.image.is-4by3{padding-top:75%}.image.is-3by2{padding-top:66.6666%}.image.is-16by9{padding-top:56.25%}.image.is-2by1{padding-top:50%}.image.is-16x16{height:16px;width:16px}.image.is-24x24{height:24px;width:24px}.image.is-32x32{height:32px;width:32px}.image.is-48x48{height:48px;width:48px}.image.is-64x64{height:64px;width:64px}.image.is-96x96{height:96px;width:96px}.image.is-128x128{height:128px;width:128px}.notification{background-color:#f5f5f5;border-radius:3px;padding:1.25rem 2.5rem 1.25rem 1.5rem;position:relative}.notification:not(:last-child){margin-bottom:1.5rem}.notification a:not(.button){color:currentColor;text-decoration:underline}.notification strong{color:currentColor}.notification code,.notification pre{background:#fff}.notification pre code{background:transparent}.notification>.delete{position:absolute;right:.5em;top:.5em}.notification .content,.notification .subtitle,.notification .title{color:currentColor}.notification.is-white{background-color:#fff;color:#0a0a0a}.notification.is-black{background-color:#0a0a0a;color:#fff}.notification.is-light{background-color:#f5f5f5;color:#363636}.notification.is-dark{background-color:#363636;color:#f5f5f5}.notification.is-primary{background-color:#00d1b2;color:#fff}.notification.is-link{background-color:#3273dc;color:#fff}.notification.is-info{background-color:#209cee;color:#fff}.notification.is-success{background-color:#23d160;color:#fff}.notification.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.notification.is-danger{background-color:#ff3860;color:#fff}.progress{-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:290486px;display:block;height:1rem;overflow:hidden;padding:0;width:100%}.progress:not(:last-child){margin-bottom:1.5rem}.progress::-webkit-progress-bar{background-color:#dbdbdb}.progress::-webkit-progress-value{background-color:#4a4a4a}.progress::-moz-progress-bar{background-color:#4a4a4a}.progress::-ms-fill{background-color:#4a4a4a;border:none}.progress.is-white::-webkit-progress-value{background-color:#fff}.progress.is-white::-moz-progress-bar{background-color:#fff}.progress.is-white::-ms-fill{background-color:#fff}.progress.is-black::-webkit-progress-value{background-color:#0a0a0a}.progress.is-black::-moz-progress-bar{background-color:#0a0a0a}.progress.is-black::-ms-fill{background-color:#0a0a0a}.progress.is-light::-webkit-progress-value{background-color:#f5f5f5}.progress.is-light::-moz-progress-bar{background-color:#f5f5f5}.progress.is-light::-ms-fill{background-color:#f5f5f5}.progress.is-dark::-webkit-progress-value{background-color:#363636}.progress.is-dark::-moz-progress-bar{background-color:#363636}.progress.is-dark::-ms-fill{background-color:#363636}.progress.is-primary::-webkit-progress-value{background-color:#00d1b2}.progress.is-primary::-moz-progress-bar{background-color:#00d1b2}.progress.is-primary::-ms-fill{background-color:#00d1b2}.progress.is-link::-webkit-progress-value{background-color:#3273dc}.progress.is-link::-moz-progress-bar{background-color:#3273dc}.progress.is-link::-ms-fill{background-color:#3273dc}.progress.is-info::-webkit-progress-value{background-color:#209cee}.progress.is-info::-moz-progress-bar{background-color:#209cee}.progress.is-info::-ms-fill{background-color:#209cee}.progress.is-success::-webkit-progress-value{background-color:#23d160}.progress.is-success::-moz-progress-bar{background-color:#23d160}.progress.is-success::-ms-fill{background-color:#23d160}.progress.is-warning::-webkit-progress-value{background-color:#ffdd57}.progress.is-warning::-moz-progress-bar{background-color:#ffdd57}.progress.is-warning::-ms-fill{background-color:#ffdd57}.progress.is-danger::-webkit-progress-value{background-color:#ff3860}.progress.is-danger::-moz-progress-bar{background-color:#ff3860}.progress.is-danger::-ms-fill{background-color:#ff3860}.progress.is-small{height:.75rem}.progress.is-medium{height:1.25rem}.progress.is-large{height:1.5rem}.table{background-color:#fff;color:#363636;margin-bottom:1.5rem}.table td,.table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.table td.is-white,.table th.is-white{background-color:#fff;border-color:#fff;color:#0a0a0a}.table td.is-black,.table th.is-black{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.table td.is-light,.table th.is-light{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.table td.is-dark,.table th.is-dark{background-color:#363636;border-color:#363636;color:#f5f5f5}.table td.is-primary,.table th.is-primary{background-color:#00d1b2;border-color:#00d1b2;color:#fff}.table td.is-link,.table th.is-link{background-color:#3273dc;border-color:#3273dc;color:#fff}.table td.is-info,.table th.is-info{background-color:#209cee;border-color:#209cee;color:#fff}.table td.is-success,.table th.is-success{background-color:#23d160;border-color:#23d160;color:#fff}.table td.is-warning,.table th.is-warning{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.table td.is-danger,.table th.is-danger{background-color:#ff3860;border-color:#ff3860;color:#fff}.table td.is-narrow,.table th.is-narrow{white-space:nowrap;width:1%}.table td.is-selected,.table th.is-selected{background-color:#00d1b2;color:#fff}.table td.is-selected a,.table td.is-selected strong,.table th.is-selected a,.table th.is-selected strong{color:currentColor}.table th{color:#363636;text-align:left}.table tr.is-selected{background-color:#00d1b2;color:#fff}.table tr.is-selected a,.table tr.is-selected strong{color:currentColor}.table tr.is-selected td,.table tr.is-selected th{border-color:#fff;color:currentColor}.table thead td,.table thead th{border-width:0 0 2px;color:#363636}.table tfoot td,.table tfoot th{border-width:2px 0 0;color:#363636}.table tbody tr:last-child td,.table tbody tr:last-child th{border-bottom-width:0}.table.is-bordered td,.table.is-bordered th{border-width:1px}.table.is-bordered tr:last-child td,.table.is-bordered tr:last-child th{border-bottom-width:1px}.table.is-fullwidth{width:100%}.table.is-hoverable tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover{background-color:#f5f5f5}.table.is-narrow td,.table.is-narrow th{padding:.25em .5em}.table.is-striped tbody tr:not(.is-selected):nth-child(2n){background-color:#fafafa}.tags{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.tags .tag{margin-bottom:.5rem}.tags .tag:not(:last-child){margin-right:.5rem}.tags:last-child{margin-bottom:-.5rem}.tags:not(:last-child){margin-bottom:1rem}.tags.has-addons .tag{margin-right:0}.tags.has-addons .tag:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.tags.has-addons .tag:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.tags.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tags.is-centered .tag{margin-right:.25rem;margin-left:.25rem}.tags.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.tags.is-right .tag:not(:first-child){margin-left:.5rem}.tags.is-right .tag:not(:last-child){margin-right:0}.tag:not(body){-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;border-radius:3px;color:#4a4a4a;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:.75rem;height:2em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;line-height:1.5;padding-left:.75em;padding-right:.75em;white-space:nowrap}.tag:not(body) .delete{margin-left:.25em;margin-right:-.375em}.tag:not(body).is-white{background-color:#fff;color:#0a0a0a}.tag:not(body).is-black{background-color:#0a0a0a;color:#fff}.tag:not(body).is-light{background-color:#f5f5f5;color:#363636}.tag:not(body).is-dark{background-color:#363636;color:#f5f5f5}.tag:not(body).is-primary{background-color:#00d1b2;color:#fff}.tag:not(body).is-link{background-color:#3273dc;color:#fff}.tag:not(body).is-info{background-color:#209cee;color:#fff}.tag:not(body).is-success{background-color:#23d160;color:#fff}.tag:not(body).is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.tag:not(body).is-danger{background-color:#ff3860;color:#fff}.tag:not(body).is-medium{font-size:1rem}.tag:not(body).is-large{font-size:1.25rem}.tag:not(body) .icon:first-child:not(:last-child){margin-left:-.375em;margin-right:.1875em}.tag:not(body) .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:-.375em}.tag:not(body) .icon:first-child:last-child{margin-left:-.375em;margin-right:-.375em}.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}.tag:not(body).is-delete:after,.tag:not(body).is-delete:before{background-color:currentColor;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.tag:not(body).is-delete:before{height:1px;width:50%}.tag:not(body).is-delete:after{height:50%;width:1px}.tag:not(body).is-delete:focus,.tag:not(body).is-delete:hover{background-color:#e8e8e8}.tag:not(body).is-delete:active{background-color:#dbdbdb}.tag:not(body).is-rounded{border-radius:290486px}a.tag:hover{text-decoration:underline}.subtitle,.title{word-break:break-word}.subtitle:not(:last-child),.title:not(:last-child){margin-bottom:1.5rem}.subtitle em,.subtitle span,.title em,.title span{font-weight:inherit}.subtitle .tag,.title .tag{vertical-align:middle}.title{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title strong{color:inherit;font-weight:inherit}.title+.highlight{margin-top:-.75rem}.title:not(.is-spaced)+.subtitle{margin-top:-1.5rem}.title.is-1{font-size:3rem}.title.is-2{font-size:2.5rem}.title.is-3{font-size:2rem}.title.is-4{font-size:1.5rem}.title.is-5{font-size:1.25rem}.title.is-6{font-size:1rem}.title.is-7{font-size:.75rem}.subtitle{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle strong{color:#363636;font-weight:600}.subtitle:not(.is-spaced)+.title{margin-top:-1.5rem}.subtitle.is-1{font-size:3rem}.subtitle.is-2{font-size:2.5rem}.subtitle.is-3{font-size:2rem}.subtitle.is-4{font-size:1.5rem}.subtitle.is-5{font-size:1.25rem}.subtitle.is-6{font-size:1rem}.subtitle.is-7{font-size:.75rem}.block:not(:last-child){margin-bottom:1.5rem}.delete{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;background-color:hsla(0,0%,4%,.2);border:none;border-radius:290486px;cursor:pointer;display:inline-block;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:none;position:relative;vertical-align:top;width:20px}.delete:after,.delete:before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.delete:before{height:2px;width:50%}.delete:after{height:50%;width:2px}.delete:focus,.delete:hover{background-color:hsla(0,0%,4%,.3)}.delete:active{background-color:hsla(0,0%,4%,.4)}.delete.is-small{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.delete.is-medium{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.delete.is-large{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.heading{display:block;font-size:11px;letter-spacing:1px;margin-bottom:5px;text-transform:uppercase}.highlight{font-weight:400;max-width:100%;overflow:hidden;padding:0}.highlight:not(:last-child){margin-bottom:1.5rem}.highlight pre{overflow:auto;max-width:100%}.loader{-webkit-animation:spinAround .5s infinite linear;animation:spinAround .5s infinite linear;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;position:relative;width:1em}.number{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;border-radius:290486px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1.25rem;height:2em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:1.5rem;min-width:2.5em;padding:.25rem .5rem;text-align:center;vertical-align:top}.breadcrumb{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1rem;overflow:hidden;overflow-x:auto;white-space:nowrap}.breadcrumb:not(:last-child){margin-bottom:1.5rem}.breadcrumb a{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#3273dc;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.5em .75em}.breadcrumb a:hover{color:#363636}.breadcrumb li{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.breadcrumb li:first-child a{padding-left:0}.breadcrumb li.is-active a{color:#363636;cursor:default;pointer-events:none}.breadcrumb li+li:before{color:#4a4a4a;content:\"/\"}.breadcrumb ol,.breadcrumb ul{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.breadcrumb .icon:first-child{margin-right:.5em}.breadcrumb .icon:last-child{margin-left:.5em}.breadcrumb.is-centered ol,.breadcrumb.is-centered ul{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.breadcrumb.is-right ol,.breadcrumb.is-right ul{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.breadcrumb.is-small{font-size:.75rem}.breadcrumb.is-medium{font-size:1.25rem}.breadcrumb.is-large{font-size:1.5rem}.breadcrumb.has-arrow-separator li+li:before{content:\"\\2192\"}.breadcrumb.has-bullet-separator li+li:before{content:\"\\2022\"}.breadcrumb.has-dot-separator li+li:before{content:\"\\B7\"}.breadcrumb.has-succeeds-separator li+li:before{content:\"\\227B\"}.card{background-color:#fff;-webkit-box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);color:#4a4a4a;max-width:100%;position:relative}.card-header{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-shadow:0 1px 2px hsla(0,0%,4%,.1);box-shadow:0 1px 2px hsla(0,0%,4%,.1)}.card-header,.card-header-title{display:-webkit-box;display:-ms-flexbox;display:flex}.card-header-title{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#363636;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;font-weight:700;padding:.75rem}.card-header-icon,.card-header-title.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.card-header-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;padding:.75rem}.card-image{display:block;position:relative}.card-content{padding:1.5rem}.card-footer{border-top:1px solid #dbdbdb;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.card-footer,.card-footer-item{display:-webkit-box;display:-ms-flexbox;display:flex}.card-footer-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.75rem}.card-footer-item:not(:last-child){border-right:1px solid #dbdbdb}.card .media:not(:last-child){margin-bottom:.75rem}.dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;vertical-align:top}.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}.dropdown.is-right .dropdown-menu{left:auto;right:0}.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:unset;top:auto}.dropdown-menu{display:none;left:0;min-width:12rem;padding-top:4px;position:absolute;top:100%;z-index:20}.dropdown-content{background-color:#fff;border-radius:3px;-webkit-box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);padding-bottom:.5rem;padding-top:.5rem}.dropdown-item{color:#4a4a4a;display:block;font-size:.875rem;line-height:1.5;padding:.375rem 1rem;position:relative}a.dropdown-item{padding-right:3rem;white-space:nowrap}a.dropdown-item:hover{background-color:#f5f5f5;color:#0a0a0a}a.dropdown-item.is-active{background-color:#3273dc;color:#fff}.dropdown-divider{background-color:#dbdbdb;border:none;display:block;height:1px;margin:.5rem 0}.level{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.level:not(:last-child){margin-bottom:1.5rem}.level code{border-radius:3px}.level img{display:inline-block;vertical-align:top}.level.is-mobile,.level.is-mobile .level-left,.level.is-mobile .level-right{display:-webkit-box;display:-ms-flexbox;display:flex}.level.is-mobile .level-left+.level-right{margin-top:0}.level.is-mobile .level-item{margin-right:.75rem}.level.is-mobile .level-item:not(:last-child){margin-bottom:0}.level.is-mobile .level-item:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media print,screen and (min-width:769px){.level{display:-webkit-box;display:-ms-flexbox;display:flex}.level>.level-item:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}}.level-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.level-item .subtitle,.level-item .title{margin-bottom:0}@media screen and (max-width:768px){.level-item:not(:last-child){margin-bottom:.75rem}}.level-left,.level-right{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.level-left .level-item.is-flexible,.level-right .level-item.is-flexible{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media print,screen and (min-width:769px){.level-left .level-item:not(:last-child),.level-right .level-item:not(:last-child){margin-right:.75rem}}.level-left{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}@media screen and (max-width:768px){.level-left+.level-right{margin-top:1.5rem}}@media print,screen and (min-width:769px){.level-left{display:-webkit-box;display:-ms-flexbox;display:flex}}.level-right{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}@media print,screen and (min-width:769px){.level-right{display:-webkit-box;display:-ms-flexbox;display:flex}}.media{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:left}.media .content:not(:last-child){margin-bottom:.75rem}.media .media{border-top:1px solid hsla(0,0%,86%,.5);display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:.75rem}.media .media .content:not(:last-child),.media .media .control:not(:last-child){margin-bottom:.5rem}.media .media .media{padding-top:.5rem}.media .media .media+.media{margin-top:.5rem}.media+.media{border-top:1px solid hsla(0,0%,86%,.5);margin-top:1rem;padding-top:1rem}.media.is-large+.media{margin-top:1.5rem;padding-top:1.5rem}.media-left,.media-right{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.media-left{margin-right:1rem}.media-right{margin-left:1rem}.media-content{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;text-align:left}.menu{font-size:1rem}.menu.is-small{font-size:.75rem}.menu.is-medium{font-size:1.25rem}.menu.is-large{font-size:1.5rem}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:#4a4a4a;display:block;padding:.5em .75em}.menu-list a:hover{background-color:#f5f5f5;color:#363636}.menu-list a.is-active{background-color:#3273dc;color:#fff}.menu-list li ul{border-left:1px solid #dbdbdb;margin:.75em;padding-left:.75em}.menu-label{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}.menu-label:not(:first-child){margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}.message{background-color:#f5f5f5;border-radius:3px;font-size:1rem}.message:not(:last-child){margin-bottom:1.5rem}.message strong{color:currentColor}.message a:not(.button):not(.tag){color:currentColor;text-decoration:underline}.message.is-small{font-size:.75rem}.message.is-medium{font-size:1.25rem}.message.is-large{font-size:1.5rem}.message.is-white{background-color:#fff}.message.is-white .message-header{background-color:#fff;color:#0a0a0a}.message.is-white .message-body{border-color:#fff;color:#4d4d4d}.message.is-black{background-color:#fafafa}.message.is-black .message-header{background-color:#0a0a0a;color:#fff}.message.is-black .message-body{border-color:#0a0a0a;color:#090909}.message.is-light{background-color:#fafafa}.message.is-light .message-header{background-color:#f5f5f5;color:#363636}.message.is-light .message-body{border-color:#f5f5f5;color:#505050}.message.is-dark{background-color:#fafafa}.message.is-dark .message-header{background-color:#363636;color:#f5f5f5}.message.is-dark .message-body{border-color:#363636;color:#2a2a2a}.message.is-primary{background-color:#f5fffd}.message.is-primary .message-header{background-color:#00d1b2;color:#fff}.message.is-primary .message-body{border-color:#00d1b2;color:#021310}.message.is-link{background-color:#f6f9fe}.message.is-link .message-header{background-color:#3273dc;color:#fff}.message.is-link .message-body{border-color:#3273dc;color:#22509a}.message.is-info{background-color:#f6fbfe}.message.is-info .message-header{background-color:#209cee;color:#fff}.message.is-info .message-body{border-color:#209cee;color:#12537e}.message.is-success{background-color:#f6fef9}.message.is-success .message-header{background-color:#23d160;color:#fff}.message.is-success .message-body{border-color:#23d160;color:#0e301a}.message.is-warning{background-color:#fffdf5}.message.is-warning .message-header{background-color:#ffdd57;color:rgba(0,0,0,.7)}.message.is-warning .message-body{border-color:#ffdd57;color:#3b3108}.message.is-danger{background-color:#fff5f7}.message.is-danger .message-header{background-color:#ff3860;color:#fff}.message.is-danger .message-body{border-color:#ff3860;color:#cd0930}.message-header{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#4a4a4a;border-radius:3px 3px 0 0;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;line-height:1.25;padding:.5em .75em;position:relative}.message-header .delete{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;margin-left:.75em}.message-header+.message-body{border-top-left-radius:0;border-top-right-radius:0;border-top:none}.message-body{border:1px solid #dbdbdb;border-radius:3px;color:#4a4a4a;padding:1em 1.25em}.message-body code,.message-body pre{background-color:#fff}.message-body pre code{background-color:transparent}.modal{bottom:0;left:0;position:absolute;right:0;top:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;position:fixed;z-index:20}.modal.is-active{display:-webkit-box;display:-ms-flexbox;display:flex}.modal-background{bottom:0;left:0;position:absolute;right:0;top:0;background-color:hsla(0,0%,4%,.86)}.modal-card,.modal-content{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media print,screen and (min-width:769px){.modal-card,.modal-content{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;background-color:hsla(0,0%,4%,.2);border:none;border-radius:290486px;cursor:pointer;display:inline-block;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:none;position:relative;vertical-align:top;width:20px;background:none;height:40px;position:fixed;right:20px;top:20px;width:40px}.modal-close:after,.modal-close:before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.modal-close:before{height:2px;width:50%}.modal-close:after{height:50%;width:2px}.modal-close:focus,.modal-close:hover{background-color:hsla(0,0%,4%,.3)}.modal-close:active{background-color:hsla(0,0%,4%,.4)}.modal-close.is-small{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.modal-close.is-medium{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.modal-close.is-large{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.modal-card{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden}.modal-card,.modal-card-foot,.modal-card-head{display:-webkit-box;display:-ms-flexbox;display:flex}.modal-card-foot,.modal-card-head{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;position:relative}.modal-card-head{border-bottom:1px solid #dbdbdb;border-top-left-radius:5px;border-top-right-radius:5px}.modal-card-title{color:#363636;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;font-size:1.5rem;line-height:1}.modal-card-foot{border-bottom-left-radius:5px;border-bottom-right-radius:5px;border-top:1px solid #dbdbdb}.modal-card-foot .button:not(:last-child){margin-right:10px}.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#fff;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;overflow:auto;padding:20px}.navbar{background-color:#fff;min-height:3.25rem;position:relative}.navbar.is-white{background-color:#fff;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link,.navbar.is-white .navbar-brand>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link.is-active,.navbar.is-white .navbar-brand .navbar-link:hover,.navbar.is-white .navbar-brand>a.navbar-item.is-active,.navbar.is-white .navbar-brand>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link:after{border-color:#0a0a0a}@media screen and (min-width:1024px){.navbar.is-white .navbar-end .navbar-link,.navbar.is-white .navbar-end>.navbar-item,.navbar.is-white .navbar-start .navbar-link,.navbar.is-white .navbar-start>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link.is-active,.navbar.is-white .navbar-end .navbar-link:hover,.navbar.is-white .navbar-end>a.navbar-item.is-active,.navbar.is-white .navbar-end>a.navbar-item:hover,.navbar.is-white .navbar-start .navbar-link.is-active,.navbar.is-white .navbar-start .navbar-link:hover,.navbar.is-white .navbar-start>a.navbar-item.is-active,.navbar.is-white .navbar-start>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link:after,.navbar.is-white .navbar-start .navbar-link:after{border-color:#0a0a0a}.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-dropdown a.navbar-item.is-active{background-color:#fff;color:#0a0a0a}}.navbar.is-black{background-color:#0a0a0a;color:#fff}.navbar.is-black .navbar-brand .navbar-link,.navbar.is-black .navbar-brand>.navbar-item{color:#fff}.navbar.is-black .navbar-brand .navbar-link.is-active,.navbar.is-black .navbar-brand .navbar-link:hover,.navbar.is-black .navbar-brand>a.navbar-item.is-active,.navbar.is-black .navbar-brand>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-brand .navbar-link:after{border-color:#fff}@media screen and (min-width:1024px){.navbar.is-black .navbar-end .navbar-link,.navbar.is-black .navbar-end>.navbar-item,.navbar.is-black .navbar-start .navbar-link,.navbar.is-black .navbar-start>.navbar-item{color:#fff}.navbar.is-black .navbar-end .navbar-link.is-active,.navbar.is-black .navbar-end .navbar-link:hover,.navbar.is-black .navbar-end>a.navbar-item.is-active,.navbar.is-black .navbar-end>a.navbar-item:hover,.navbar.is-black .navbar-start .navbar-link.is-active,.navbar.is-black .navbar-start .navbar-link:hover,.navbar.is-black .navbar-start>a.navbar-item.is-active,.navbar.is-black .navbar-start>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-end .navbar-link:after,.navbar.is-black .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link{background-color:#000;color:#fff}.navbar.is-black .navbar-dropdown a.navbar-item.is-active{background-color:#0a0a0a;color:#fff}}.navbar.is-light{background-color:#f5f5f5;color:#363636}.navbar.is-light .navbar-brand .navbar-link,.navbar.is-light .navbar-brand>.navbar-item{color:#363636}.navbar.is-light .navbar-brand .navbar-link.is-active,.navbar.is-light .navbar-brand .navbar-link:hover,.navbar.is-light .navbar-brand>a.navbar-item.is-active,.navbar.is-light .navbar-brand>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-brand .navbar-link:after{border-color:#363636}@media screen and (min-width:1024px){.navbar.is-light .navbar-end .navbar-link,.navbar.is-light .navbar-end>.navbar-item,.navbar.is-light .navbar-start .navbar-link,.navbar.is-light .navbar-start>.navbar-item{color:#363636}.navbar.is-light .navbar-end .navbar-link.is-active,.navbar.is-light .navbar-end .navbar-link:hover,.navbar.is-light .navbar-end>a.navbar-item.is-active,.navbar.is-light .navbar-end>a.navbar-item:hover,.navbar.is-light .navbar-start .navbar-link.is-active,.navbar.is-light .navbar-start .navbar-link:hover,.navbar.is-light .navbar-start>a.navbar-item.is-active,.navbar.is-light .navbar-start>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-end .navbar-link:after,.navbar.is-light .navbar-start .navbar-link:after{border-color:#363636}.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#363636}}.navbar.is-dark{background-color:#363636;color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link,.navbar.is-dark .navbar-brand>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link.is-active,.navbar.is-dark .navbar-brand .navbar-link:hover,.navbar.is-dark .navbar-brand>a.navbar-item.is-active,.navbar.is-dark .navbar-brand>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link:after{border-color:#f5f5f5}@media screen and (min-width:1024px){.navbar.is-dark .navbar-end .navbar-link,.navbar.is-dark .navbar-end>.navbar-item,.navbar.is-dark .navbar-start .navbar-link,.navbar.is-dark .navbar-start>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link.is-active,.navbar.is-dark .navbar-end .navbar-link:hover,.navbar.is-dark .navbar-end>a.navbar-item.is-active,.navbar.is-dark .navbar-end>a.navbar-item:hover,.navbar.is-dark .navbar-start .navbar-link.is-active,.navbar.is-dark .navbar-start .navbar-link:hover,.navbar.is-dark .navbar-start>a.navbar-item.is-active,.navbar.is-dark .navbar-start>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link:after,.navbar.is-dark .navbar-start .navbar-link:after{border-color:#f5f5f5}.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-dropdown a.navbar-item.is-active{background-color:#363636;color:#f5f5f5}}.navbar.is-primary{background-color:#00d1b2;color:#fff}.navbar.is-primary .navbar-brand .navbar-link,.navbar.is-primary .navbar-brand>.navbar-item{color:#fff}.navbar.is-primary .navbar-brand .navbar-link.is-active,.navbar.is-primary .navbar-brand .navbar-link:hover,.navbar.is-primary .navbar-brand>a.navbar-item.is-active,.navbar.is-primary .navbar-brand>a.navbar-item:hover{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-brand .navbar-link:after{border-color:#fff}@media screen and (min-width:1024px){.navbar.is-primary .navbar-end .navbar-link,.navbar.is-primary .navbar-end>.navbar-item,.navbar.is-primary .navbar-start .navbar-link,.navbar.is-primary .navbar-start>.navbar-item{color:#fff}.navbar.is-primary .navbar-end .navbar-link.is-active,.navbar.is-primary .navbar-end .navbar-link:hover,.navbar.is-primary .navbar-end>a.navbar-item.is-active,.navbar.is-primary .navbar-end>a.navbar-item:hover,.navbar.is-primary .navbar-start .navbar-link.is-active,.navbar.is-primary .navbar-start .navbar-link:hover,.navbar.is-primary .navbar-start>a.navbar-item.is-active,.navbar.is-primary .navbar-start>a.navbar-item:hover{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-end .navbar-link:after,.navbar.is-primary .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-dropdown a.navbar-item.is-active{background-color:#00d1b2;color:#fff}}.navbar.is-link{background-color:#3273dc;color:#fff}.navbar.is-link .navbar-brand .navbar-link,.navbar.is-link .navbar-brand>.navbar-item{color:#fff}.navbar.is-link .navbar-brand .navbar-link.is-active,.navbar.is-link .navbar-brand .navbar-link:hover,.navbar.is-link .navbar-brand>a.navbar-item.is-active,.navbar.is-link .navbar-brand>a.navbar-item:hover{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-brand .navbar-link:after{border-color:#fff}@media screen and (min-width:1024px){.navbar.is-link .navbar-end .navbar-link,.navbar.is-link .navbar-end>.navbar-item,.navbar.is-link .navbar-start .navbar-link,.navbar.is-link .navbar-start>.navbar-item{color:#fff}.navbar.is-link .navbar-end .navbar-link.is-active,.navbar.is-link .navbar-end .navbar-link:hover,.navbar.is-link .navbar-end>a.navbar-item.is-active,.navbar.is-link .navbar-end>a.navbar-item:hover,.navbar.is-link .navbar-start .navbar-link.is-active,.navbar.is-link .navbar-start .navbar-link:hover,.navbar.is-link .navbar-start>a.navbar-item.is-active,.navbar.is-link .navbar-start>a.navbar-item:hover{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-end .navbar-link:after,.navbar.is-link .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-dropdown a.navbar-item.is-active{background-color:#3273dc;color:#fff}}.navbar.is-info{background-color:#209cee;color:#fff}.navbar.is-info .navbar-brand .navbar-link,.navbar.is-info .navbar-brand>.navbar-item{color:#fff}.navbar.is-info .navbar-brand .navbar-link.is-active,.navbar.is-info .navbar-brand .navbar-link:hover,.navbar.is-info .navbar-brand>a.navbar-item.is-active,.navbar.is-info .navbar-brand>a.navbar-item:hover{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-brand .navbar-link:after{border-color:#fff}@media screen and (min-width:1024px){.navbar.is-info .navbar-end .navbar-link,.navbar.is-info .navbar-end>.navbar-item,.navbar.is-info .navbar-start .navbar-link,.navbar.is-info .navbar-start>.navbar-item{color:#fff}.navbar.is-info .navbar-end .navbar-link.is-active,.navbar.is-info .navbar-end .navbar-link:hover,.navbar.is-info .navbar-end>a.navbar-item.is-active,.navbar.is-info .navbar-end>a.navbar-item:hover,.navbar.is-info .navbar-start .navbar-link.is-active,.navbar.is-info .navbar-start .navbar-link:hover,.navbar.is-info .navbar-start>a.navbar-item.is-active,.navbar.is-info .navbar-start>a.navbar-item:hover{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-end .navbar-link:after,.navbar.is-info .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-dropdown a.navbar-item.is-active{background-color:#209cee;color:#fff}}.navbar.is-success{background-color:#23d160;color:#fff}.navbar.is-success .navbar-brand .navbar-link,.navbar.is-success .navbar-brand>.navbar-item{color:#fff}.navbar.is-success .navbar-brand .navbar-link.is-active,.navbar.is-success .navbar-brand .navbar-link:hover,.navbar.is-success .navbar-brand>a.navbar-item.is-active,.navbar.is-success .navbar-brand>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-brand .navbar-link:after{border-color:#fff}@media screen and (min-width:1024px){.navbar.is-success .navbar-end .navbar-link,.navbar.is-success .navbar-end>.navbar-item,.navbar.is-success .navbar-start .navbar-link,.navbar.is-success .navbar-start>.navbar-item{color:#fff}.navbar.is-success .navbar-end .navbar-link.is-active,.navbar.is-success .navbar-end .navbar-link:hover,.navbar.is-success .navbar-end>a.navbar-item.is-active,.navbar.is-success .navbar-end>a.navbar-item:hover,.navbar.is-success .navbar-start .navbar-link.is-active,.navbar.is-success .navbar-start .navbar-link:hover,.navbar.is-success .navbar-start>a.navbar-item.is-active,.navbar.is-success .navbar-start>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-end .navbar-link:after,.navbar.is-success .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-dropdown a.navbar-item.is-active{background-color:#23d160;color:#fff}}.navbar.is-warning{background-color:#ffdd57}.navbar.is-warning,.navbar.is-warning .navbar-brand .navbar-link,.navbar.is-warning .navbar-brand>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link.is-active,.navbar.is-warning .navbar-brand .navbar-link:hover,.navbar.is-warning .navbar-brand>a.navbar-item.is-active,.navbar.is-warning .navbar-brand>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link:after{border-color:rgba(0,0,0,.7)}@media screen and (min-width:1024px){.navbar.is-warning .navbar-end .navbar-link,.navbar.is-warning .navbar-end>.navbar-item,.navbar.is-warning .navbar-start .navbar-link,.navbar.is-warning .navbar-start>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link.is-active,.navbar.is-warning .navbar-end .navbar-link:hover,.navbar.is-warning .navbar-end>a.navbar-item.is-active,.navbar.is-warning .navbar-end>a.navbar-item:hover,.navbar.is-warning .navbar-start .navbar-link.is-active,.navbar.is-warning .navbar-start .navbar-link:hover,.navbar.is-warning .navbar-start>a.navbar-item.is-active,.navbar.is-warning .navbar-start>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link:after,.navbar.is-warning .navbar-start .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-dropdown a.navbar-item.is-active{background-color:#ffdd57;color:rgba(0,0,0,.7)}}.navbar.is-danger{background-color:#ff3860;color:#fff}.navbar.is-danger .navbar-brand .navbar-link,.navbar.is-danger .navbar-brand>.navbar-item{color:#fff}.navbar.is-danger .navbar-brand .navbar-link.is-active,.navbar.is-danger .navbar-brand .navbar-link:hover,.navbar.is-danger .navbar-brand>a.navbar-item.is-active,.navbar.is-danger .navbar-brand>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-brand .navbar-link:after{border-color:#fff}@media screen and (min-width:1024px){.navbar.is-danger .navbar-end .navbar-link,.navbar.is-danger .navbar-end>.navbar-item,.navbar.is-danger .navbar-start .navbar-link,.navbar.is-danger .navbar-start>.navbar-item{color:#fff}.navbar.is-danger .navbar-end .navbar-link.is-active,.navbar.is-danger .navbar-end .navbar-link:hover,.navbar.is-danger .navbar-end>a.navbar-item.is-active,.navbar.is-danger .navbar-end>a.navbar-item:hover,.navbar.is-danger .navbar-start .navbar-link.is-active,.navbar.is-danger .navbar-start .navbar-link:hover,.navbar.is-danger .navbar-start>a.navbar-item.is-active,.navbar.is-danger .navbar-start>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-end .navbar-link:after,.navbar.is-danger .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-dropdown a.navbar-item.is-active{background-color:#ff3860;color:#fff}}.navbar>.container{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;min-height:3.25rem;width:100%}.navbar.has-shadow{-webkit-box-shadow:0 2px 3px hsla(0,0%,4%,.1);box-shadow:0 2px 3px hsla(0,0%,4%,.1)}.navbar.is-fixed-bottom,.navbar.is-fixed-top{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom{bottom:0}.navbar.is-fixed-bottom.has-shadow{-webkit-box-shadow:0 -2px 3px hsla(0,0%,4%,.1);box-shadow:0 -2px 3px hsla(0,0%,4%,.1)}.navbar.is-fixed-top{top:0}html.has-navbar-fixed-top{padding-top:3.25rem}html.has-navbar-fixed-bottom{padding-bottom:3.25rem}.navbar-brand,.navbar-tabs{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;min-height:3.25rem}.navbar-tabs{-webkit-overflow-scrolling:touch;max-width:100vw;overflow-x:auto;overflow-y:hidden}.navbar-burger{cursor:pointer;display:block;height:3.25rem;position:relative;width:3.25rem;margin-left:auto}.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;-webkit-transform-origin:center;transform-origin:center;-webkit-transition-duration:86ms;transition-duration:86ms;-webkit-transition-property:background-color,opacity,-webkit-transform;transition-property:background-color,opacity,-webkit-transform;transition-property:background-color,opacity,transform;transition-property:background-color,opacity,transform,-webkit-transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;width:16px}.navbar-burger span:first-child{top:calc(50% - 6px)}.navbar-burger span:nth-child(2){top:calc(50% - 1px)}.navbar-burger span:nth-child(3){top:calc(50% + 4px)}.navbar-burger:hover{background-color:rgba(0,0,0,.05)}.navbar-burger.is-active span:first-child{-webkit-transform:translateY(5px) rotate(45deg);transform:translateY(5px) rotate(45deg)}.navbar-burger.is-active span:nth-child(2){opacity:0}.navbar-burger.is-active span:nth-child(3){-webkit-transform:translateY(-5px) rotate(-45deg);transform:translateY(-5px) rotate(-45deg)}.navbar-menu{display:none}.navbar-item,.navbar-link{color:#4a4a4a;display:block;line-height:1.5;padding:.5rem 1rem;position:relative}a.navbar-item.is-active,a.navbar-item:hover,a.navbar-link.is-active,a.navbar-link:hover{background-color:#f5f5f5;color:#3273dc}.navbar-item{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.navbar-item img{max-height:1.75rem}.navbar-item.has-dropdown{padding:0}.navbar-item.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.navbar-item.is-tab{border-bottom:1px solid transparent;min-height:3.25rem;padding-bottom:calc(.5rem - 1px)}.navbar-item.is-tab.is-active,.navbar-item.is-tab:hover{background-color:transparent;border-bottom-color:#3273dc}.navbar-item.is-tab.is-active{border-bottom-style:solid;border-bottom-width:3px;color:#3273dc;padding-bottom:calc(.5rem - 3px)}.navbar-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.navbar-link{padding-right:2.5em}.navbar-dropdown{font-size:.875rem;padding-bottom:.5rem;padding-top:.5rem}.navbar-dropdown .navbar-item{padding-left:1.5rem;padding-right:1.5rem}.navbar-divider{background-color:#dbdbdb;border:none;display:none;height:1px;margin:.5rem 0}@media screen and (max-width:1023px){.navbar>.container{display:block}.navbar-brand .navbar-item,.navbar-tabs .navbar-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.navbar-menu{background-color:#fff;-webkit-box-shadow:0 8px 16px hsla(0,0%,4%,.1);box-shadow:0 8px 16px hsla(0,0%,4%,.1);padding:.5rem 0}.navbar-menu.is-active{display:block}.navbar.is-fixed-bottom-touch,.navbar.is-fixed-top-touch{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-touch{bottom:0}.navbar.is-fixed-bottom-touch.has-shadow{-webkit-box-shadow:0 -2px 3px hsla(0,0%,4%,.1);box-shadow:0 -2px 3px hsla(0,0%,4%,.1)}.navbar.is-fixed-top-touch{top:0}.navbar.is-fixed-top-touch .navbar-menu,.navbar.is-fixed-top .navbar-menu{-webkit-overflow-scrolling:touch;max-height:calc(100vh - 3.25rem);overflow:auto}html.has-navbar-fixed-top-touch{padding-top:3.25rem}html.has-navbar-fixed-bottom-touch{padding-bottom:3.25rem}}@media screen and (min-width:1024px){.navbar,.navbar-end,.navbar-menu,.navbar-start{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex}.navbar{min-height:3.25rem}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link,.navbar.is-transparent a.navbar-item.is-active,.navbar.is-transparent a.navbar-item:hover,.navbar.is-transparent a.navbar-link.is-active,.navbar.is-transparent a.navbar-link:hover{background-color:transparent!important}.navbar.is-transparent .navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#3273dc}.navbar-burger{display:none}.navbar-item,.navbar-link{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.navbar-item.has-dropdown{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.navbar-item.has-dropdown-up .navbar-link:after{-webkit-transform:rotate(135deg) translate(.25em,-.25em);transform:rotate(135deg) translate(.25em,-.25em)}.navbar-item.has-dropdown-up .navbar-dropdown{border-bottom:1px solid #dbdbdb;border-radius:5px 5px 0 0;border-top:none;bottom:100%;-webkit-box-shadow:0 -8px 8px hsla(0,0%,4%,.1);box-shadow:0 -8px 8px hsla(0,0%,4%,.1);top:auto}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed{opacity:1;pointer-events:auto;-webkit-transform:translateY(0);transform:translateY(0)}.navbar-link:after{border:1px solid #3273dc;border-right:0;border-top:0;content:\" \";display:block;height:.5em;pointer-events:none;position:absolute;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;transform-origin:center;width:.5em;margin-top:-.375em;right:1.125em;top:50%}.navbar-menu{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.navbar-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-right:auto}.navbar-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-left:auto}.navbar-dropdown{background-color:#fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px;border-top:1px solid #dbdbdb;-webkit-box-shadow:0 8px 8px hsla(0,0%,4%,.1);box-shadow:0 8px 8px hsla(0,0%,4%,.1);display:none;font-size:.875rem;left:0;min-width:100%;position:absolute;top:100%;z-index:20}.navbar-dropdown .navbar-item{padding:.375rem 1rem;white-space:nowrap}.navbar-dropdown a.navbar-item{padding-right:3rem}.navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#3273dc}.navbar-dropdown.is-boxed{border-radius:5px;border-top:none;-webkit-box-shadow:0 8px 8px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);box-shadow:0 8px 8px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);display:block;opacity:0;pointer-events:none;top:calc(100% + -4px);-webkit-transform:translateY(-5px);transform:translateY(-5px);-webkit-transition-duration:86ms;transition-duration:86ms;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.navbar-dropdown.is-right{left:auto;right:0}.navbar-divider{display:block}.container>.navbar .navbar-brand,.navbar>.container .navbar-brand{margin-left:-1rem}.container>.navbar .navbar-menu,.navbar>.container .navbar-menu{margin-right:-1rem}.navbar.is-fixed-bottom-desktop,.navbar.is-fixed-top-desktop{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-desktop{bottom:0}.navbar.is-fixed-bottom-desktop.has-shadow{-webkit-box-shadow:0 -2px 3px hsla(0,0%,4%,.1);box-shadow:0 -2px 3px hsla(0,0%,4%,.1)}.navbar.is-fixed-top-desktop{top:0}html.has-navbar-fixed-top-desktop{padding-top:3.25rem}html.has-navbar-fixed-bottom-desktop{padding-bottom:3.25rem}a.navbar-item.is-active,a.navbar-link.is-active{color:#0a0a0a}a.navbar-item.is-active:not(:hover),a.navbar-link.is-active:not(:hover){background-color:transparent}.navbar-item.has-dropdown.is-active .navbar-link,.navbar-item.has-dropdown:hover .navbar-link{background-color:#f5f5f5}}.pagination{font-size:1rem;margin:-.25rem}.pagination.is-small{font-size:.75rem}.pagination.is-medium{font-size:1.25rem}.pagination.is-large{font-size:1.5rem}.pagination,.pagination-list{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous{-moz-appearance:none;-webkit-appearance:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;height:2.25em;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding-left:calc(.625em - 1px);padding-right:calc(.625em - 1px);position:relative;vertical-align:top;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:1em;padding:calc(.375em - 1px) .5em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:.25rem;text-align:center}.pagination-ellipsis.is-active,.pagination-ellipsis.is-focused,.pagination-ellipsis:active,.pagination-ellipsis:focus,.pagination-link.is-active,.pagination-link.is-focused,.pagination-link:active,.pagination-link:focus,.pagination-next.is-active,.pagination-next.is-focused,.pagination-next:active,.pagination-next:focus,.pagination-previous.is-active,.pagination-previous.is-focused,.pagination-previous:active,.pagination-previous:focus{outline:none}.pagination-ellipsis[disabled],.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled]{cursor:not-allowed}.pagination-link,.pagination-next,.pagination-previous{border-color:#dbdbdb;min-width:2.25em}.pagination-link:hover,.pagination-next:hover,.pagination-previous:hover{border-color:#b5b5b5;color:#363636}.pagination-link:focus,.pagination-next:focus,.pagination-previous:focus{border-color:#3273dc}.pagination-link:active,.pagination-next:active,.pagination-previous:active{-webkit-box-shadow:inset 0 1px 2px hsla(0,0%,4%,.2);box-shadow:inset 0 1px 2px hsla(0,0%,4%,.2)}.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled]{background-color:#dbdbdb;border-color:#dbdbdb;-webkit-box-shadow:none;box-shadow:none;color:#7a7a7a;opacity:.5}.pagination-next,.pagination-previous{padding-left:.75em;padding-right:.75em;white-space:nowrap}.pagination-link.is-current{background-color:#3273dc;border-color:#3273dc;color:#fff}.pagination-ellipsis{color:#b5b5b5;pointer-events:none}.pagination-list{-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (max-width:768px){.pagination{-ms-flex-wrap:wrap;flex-wrap:wrap}.pagination-list li,.pagination-next,.pagination-previous{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}}@media print,screen and (min-width:769px){.pagination-list{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination-previous{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination-next{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.pagination.is-centered .pagination-previous{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.is-centered .pagination-list{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.is-centered .pagination-next{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination.is-right .pagination-previous{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.is-right .pagination-next{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.is-right .pagination-list{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}}.panel{font-size:1rem}.panel:not(:last-child){margin-bottom:1.5rem}.panel-block,.panel-heading,.panel-tabs{border-bottom:1px solid #dbdbdb;border-left:1px solid #dbdbdb;border-right:1px solid #dbdbdb}.panel-block:first-child,.panel-heading:first-child,.panel-tabs:first-child{border-top:1px solid #dbdbdb}.panel-heading{background-color:#f5f5f5;border-radius:3px 3px 0 0;color:#363636;font-size:1.25em;font-weight:300;line-height:1.25;padding:.5em .75em}.panel-tabs{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:.875em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.panel-tabs a{border-bottom:1px solid #dbdbdb;margin-bottom:-1px;padding:.5em}.panel-tabs a.is-active{border-bottom-color:#4a4a4a;color:#363636}.panel-list a{color:#4a4a4a}.panel-list a:hover{color:#3273dc}.panel-block{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#363636;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:.5em .75em}.panel-block input[type=checkbox]{margin-right:.75em}.panel-block>.control{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;width:100%}.panel-block.is-wrapped{-ms-flex-wrap:wrap;flex-wrap:wrap}.panel-block.is-active{border-left-color:#3273dc;color:#363636}.panel-block.is-active .panel-icon{color:#3273dc}a.panel-block,label.panel-block{cursor:pointer}a.panel-block:hover,label.panel-block:hover{background-color:#f5f5f5}.panel-icon{display:inline-block;font-size:14px;height:1em;line-height:1em;text-align:center;vertical-align:top;width:1em;color:#7a7a7a;margin-right:.75em}.panel-icon .fa{font-size:inherit;line-height:inherit}.tabs{-webkit-overflow-scrolling:touch;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1rem;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs:not(:last-child){margin-bottom:1.5rem}.tabs a{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;color:#4a4a4a;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:-1px;padding:.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:#363636;color:#363636}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:#3273dc;color:#3273dc}.tabs ul{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.tabs ul.is-center,.tabs ul.is-left{padding-right:.75em}.tabs ul.is-center{-webkit-box-flex:0;-ms-flex:none;flex:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:.75em}.tabs ul.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-left:.75em}.tabs .icon:first-child{margin-right:.5em}.tabs .icon:last-child{margin-left:.5em}.tabs.is-centered ul{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tabs.is-right ul{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:3px 3px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f5;border-bottom-color:#dbdbdb}.tabs.is-boxed li.is-active a{background-color:#fff;border-color:#dbdbdb;border-bottom-color:transparent!important}.tabs.is-fullwidth li{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.tabs.is-toggle a{border:1px solid #dbdbdb;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f5;border-color:#b5b5b5;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-radius:3px 0 0 3px}.tabs.is-toggle li:last-child a{border-radius:0 3px 3px 0}.tabs.is-toggle li.is-active a{background-color:#3273dc;border-color:#3273dc;color:#fff;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-small{font-size:.75rem}.tabs.is-medium{font-size:1.25rem}.tabs.is-large{font-size:1.5rem}.column{display:block;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;padding:.75rem}.columns.is-mobile>.column.is-full,.columns.is-mobile>.column.is-narrow{-webkit-box-flex:0;-ms-flex:none;flex:none}.columns.is-mobile>.column.is-full{width:100%}.columns.is-mobile>.column.is-three-quarters{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.columns.is-mobile>.column.is-two-thirds{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.columns.is-mobile>.column.is-half{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.columns.is-mobile>.column.is-one-third{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.columns.is-mobile>.column.is-one-quarter{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.columns.is-mobile>.column.is-one-fifth{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.columns.is-mobile>.column.is-two-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.columns.is-mobile>.column.is-three-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.columns.is-mobile>.column.is-four-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.columns.is-mobile>.column.is-offset-three-quarters{margin-left:75%}.columns.is-mobile>.column.is-offset-two-thirds{margin-left:66.6666%}.columns.is-mobile>.column.is-offset-half{margin-left:50%}.columns.is-mobile>.column.is-offset-one-third{margin-left:33.3333%}.columns.is-mobile>.column.is-offset-one-quarter{margin-left:25%}.columns.is-mobile>.column.is-offset-one-fifth{margin-left:20%}.columns.is-mobile>.column.is-offset-two-fifths{margin-left:40%}.columns.is-mobile>.column.is-offset-three-fifths{margin-left:60%}.columns.is-mobile>.column.is-offset-four-fifths{margin-left:80%}.columns.is-mobile>.column.is-1{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.columns.is-mobile>.column.is-offset-1{margin-left:8.33333%}.columns.is-mobile>.column.is-2{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.columns.is-mobile>.column.is-offset-2{margin-left:16.66667%}.columns.is-mobile>.column.is-3{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.columns.is-mobile>.column.is-offset-3{margin-left:25%}.columns.is-mobile>.column.is-4{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.columns.is-mobile>.column.is-offset-4{margin-left:33.33333%}.columns.is-mobile>.column.is-5{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.columns.is-mobile>.column.is-offset-5{margin-left:41.66667%}.columns.is-mobile>.column.is-6{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.columns.is-mobile>.column.is-offset-6{margin-left:50%}.columns.is-mobile>.column.is-7{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.columns.is-mobile>.column.is-offset-7{margin-left:58.33333%}.columns.is-mobile>.column.is-8{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.columns.is-mobile>.column.is-offset-8{margin-left:66.66667%}.columns.is-mobile>.column.is-9{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.columns.is-mobile>.column.is-offset-9{margin-left:75%}.columns.is-mobile>.column.is-10{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.columns.is-mobile>.column.is-offset-10{margin-left:83.33333%}.columns.is-mobile>.column.is-11{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.columns.is-mobile>.column.is-offset-11{margin-left:91.66667%}.columns.is-mobile>.column.is-12{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.columns.is-mobile>.column.is-offset-12{margin-left:100%}@media screen and (max-width:768px){.column.is-full-mobile,.column.is-narrow-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-mobile{width:100%}.column.is-three-quarters-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-mobile{margin-left:75%}.column.is-offset-two-thirds-mobile{margin-left:66.6666%}.column.is-offset-half-mobile{margin-left:50%}.column.is-offset-one-third-mobile{margin-left:33.3333%}.column.is-offset-one-quarter-mobile{margin-left:25%}.column.is-offset-one-fifth-mobile{margin-left:20%}.column.is-offset-two-fifths-mobile{margin-left:40%}.column.is-offset-three-fifths-mobile{margin-left:60%}.column.is-offset-four-fifths-mobile{margin-left:80%}.column.is-1-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-mobile{margin-left:8.33333%}.column.is-2-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-mobile{margin-left:16.66667%}.column.is-3-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-mobile{margin-left:25%}.column.is-4-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-mobile{margin-left:33.33333%}.column.is-5-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-mobile{margin-left:41.66667%}.column.is-6-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-mobile{margin-left:50%}.column.is-7-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-mobile{margin-left:58.33333%}.column.is-8-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-mobile{margin-left:66.66667%}.column.is-9-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-mobile{margin-left:75%}.column.is-10-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-mobile{margin-left:83.33333%}.column.is-11-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-mobile{margin-left:91.66667%}.column.is-12-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-mobile{margin-left:100%}}@media print,screen and (min-width:769px){.column.is-full,.column.is-full-tablet,.column.is-narrow,.column.is-narrow-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full,.column.is-full-tablet{width:100%}.column.is-three-quarters,.column.is-three-quarters-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds,.column.is-two-thirds-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half,.column.is-half-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third,.column.is-one-third-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter,.column.is-one-quarter-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth,.column.is-one-fifth-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths,.column.is-two-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths,.column.is-three-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths,.column.is-four-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters,.column.is-offset-three-quarters-tablet{margin-left:75%}.column.is-offset-two-thirds,.column.is-offset-two-thirds-tablet{margin-left:66.6666%}.column.is-offset-half,.column.is-offset-half-tablet{margin-left:50%}.column.is-offset-one-third,.column.is-offset-one-third-tablet{margin-left:33.3333%}.column.is-offset-one-quarter,.column.is-offset-one-quarter-tablet{margin-left:25%}.column.is-offset-one-fifth,.column.is-offset-one-fifth-tablet{margin-left:20%}.column.is-offset-two-fifths,.column.is-offset-two-fifths-tablet{margin-left:40%}.column.is-offset-three-fifths,.column.is-offset-three-fifths-tablet{margin-left:60%}.column.is-offset-four-fifths,.column.is-offset-four-fifths-tablet{margin-left:80%}.column.is-1,.column.is-1-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1,.column.is-offset-1-tablet{margin-left:8.33333%}.column.is-2,.column.is-2-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2,.column.is-offset-2-tablet{margin-left:16.66667%}.column.is-3,.column.is-3-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3,.column.is-offset-3-tablet{margin-left:25%}.column.is-4,.column.is-4-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4,.column.is-offset-4-tablet{margin-left:33.33333%}.column.is-5,.column.is-5-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5,.column.is-offset-5-tablet{margin-left:41.66667%}.column.is-6,.column.is-6-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6,.column.is-offset-6-tablet{margin-left:50%}.column.is-7,.column.is-7-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7,.column.is-offset-7-tablet{margin-left:58.33333%}.column.is-8,.column.is-8-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8,.column.is-offset-8-tablet{margin-left:66.66667%}.column.is-9,.column.is-9-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9,.column.is-offset-9-tablet{margin-left:75%}.column.is-10,.column.is-10-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10,.column.is-offset-10-tablet{margin-left:83.33333%}.column.is-11,.column.is-11-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11,.column.is-offset-11-tablet{margin-left:91.66667%}.column.is-12,.column.is-12-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12,.column.is-offset-12-tablet{margin-left:100%}}@media screen and (max-width:1023px){.column.is-full-touch,.column.is-narrow-touch{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-touch{width:100%}.column.is-three-quarters-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-touch{margin-left:75%}.column.is-offset-two-thirds-touch{margin-left:66.6666%}.column.is-offset-half-touch{margin-left:50%}.column.is-offset-one-third-touch{margin-left:33.3333%}.column.is-offset-one-quarter-touch{margin-left:25%}.column.is-offset-one-fifth-touch{margin-left:20%}.column.is-offset-two-fifths-touch{margin-left:40%}.column.is-offset-three-fifths-touch{margin-left:60%}.column.is-offset-four-fifths-touch{margin-left:80%}.column.is-1-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-touch{margin-left:8.33333%}.column.is-2-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-touch{margin-left:16.66667%}.column.is-3-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-touch{margin-left:25%}.column.is-4-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-touch{margin-left:33.33333%}.column.is-5-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-touch{margin-left:41.66667%}.column.is-6-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-touch{margin-left:50%}.column.is-7-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-touch{margin-left:58.33333%}.column.is-8-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-touch{margin-left:66.66667%}.column.is-9-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-touch{margin-left:75%}.column.is-10-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-touch{margin-left:83.33333%}.column.is-11-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-touch{margin-left:91.66667%}.column.is-12-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-touch{margin-left:100%}}@media screen and (min-width:1024px){.column.is-full-desktop,.column.is-narrow-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-desktop{width:100%}.column.is-three-quarters-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-desktop{margin-left:75%}.column.is-offset-two-thirds-desktop{margin-left:66.6666%}.column.is-offset-half-desktop{margin-left:50%}.column.is-offset-one-third-desktop{margin-left:33.3333%}.column.is-offset-one-quarter-desktop{margin-left:25%}.column.is-offset-one-fifth-desktop{margin-left:20%}.column.is-offset-two-fifths-desktop{margin-left:40%}.column.is-offset-three-fifths-desktop{margin-left:60%}.column.is-offset-four-fifths-desktop{margin-left:80%}.column.is-1-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-desktop{margin-left:8.33333%}.column.is-2-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-desktop{margin-left:16.66667%}.column.is-3-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-desktop{margin-left:25%}.column.is-4-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-desktop{margin-left:33.33333%}.column.is-5-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-desktop{margin-left:41.66667%}.column.is-6-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-desktop{margin-left:50%}.column.is-7-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-desktop{margin-left:58.33333%}.column.is-8-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-desktop{margin-left:66.66667%}.column.is-9-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-desktop{margin-left:75%}.column.is-10-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-desktop{margin-left:83.33333%}.column.is-11-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-desktop{margin-left:91.66667%}.column.is-12-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-desktop{margin-left:100%}}@media screen and (min-width:1216px){.column.is-full-widescreen,.column.is-narrow-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-widescreen{width:100%}.column.is-three-quarters-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-widescreen{margin-left:75%}.column.is-offset-two-thirds-widescreen{margin-left:66.6666%}.column.is-offset-half-widescreen{margin-left:50%}.column.is-offset-one-third-widescreen{margin-left:33.3333%}.column.is-offset-one-quarter-widescreen{margin-left:25%}.column.is-offset-one-fifth-widescreen{margin-left:20%}.column.is-offset-two-fifths-widescreen{margin-left:40%}.column.is-offset-three-fifths-widescreen{margin-left:60%}.column.is-offset-four-fifths-widescreen{margin-left:80%}.column.is-1-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-widescreen{margin-left:8.33333%}.column.is-2-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-widescreen{margin-left:16.66667%}.column.is-3-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-widescreen{margin-left:25%}.column.is-4-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-widescreen{margin-left:33.33333%}.column.is-5-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-widescreen{margin-left:41.66667%}.column.is-6-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-widescreen{margin-left:50%}.column.is-7-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-widescreen{margin-left:58.33333%}.column.is-8-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-widescreen{margin-left:66.66667%}.column.is-9-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-widescreen{margin-left:75%}.column.is-10-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-widescreen{margin-left:83.33333%}.column.is-11-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-widescreen{margin-left:91.66667%}.column.is-12-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-widescreen{margin-left:100%}}@media screen and (min-width:1408px){.column.is-full-fullhd,.column.is-narrow-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-fullhd{width:100%}.column.is-three-quarters-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-fullhd{margin-left:75%}.column.is-offset-two-thirds-fullhd{margin-left:66.6666%}.column.is-offset-half-fullhd{margin-left:50%}.column.is-offset-one-third-fullhd{margin-left:33.3333%}.column.is-offset-one-quarter-fullhd{margin-left:25%}.column.is-offset-one-fifth-fullhd{margin-left:20%}.column.is-offset-two-fifths-fullhd{margin-left:40%}.column.is-offset-three-fifths-fullhd{margin-left:60%}.column.is-offset-four-fifths-fullhd{margin-left:80%}.column.is-1-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-fullhd{margin-left:8.33333%}.column.is-2-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-fullhd{margin-left:16.66667%}.column.is-3-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-fullhd{margin-left:25%}.column.is-4-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-fullhd{margin-left:33.33333%}.column.is-5-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-fullhd{margin-left:41.66667%}.column.is-6-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-fullhd{margin-left:50%}.column.is-7-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-fullhd{margin-left:58.33333%}.column.is-8-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-fullhd{margin-left:66.66667%}.column.is-9-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-fullhd{margin-left:75%}.column.is-10-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-fullhd{margin-left:83.33333%}.column.is-11-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-fullhd{margin-left:91.66667%}.column.is-12-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-fullhd{margin-left:100%}}.columns{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.columns:last-child{margin-bottom:-.75rem}.columns:not(:last-child){margin-bottom:0.75rem}.columns.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.columns.is-gapless{margin-left:0;margin-right:0;margin-top:0}.columns.is-gapless>.column{margin:0;padding:0!important}.columns.is-gapless:not(:last-child){margin-bottom:1.5rem}.columns.is-gapless:last-child{margin-bottom:0}.columns.is-mobile{display:-webkit-box;display:-ms-flexbox;display:flex}.columns.is-multiline{-ms-flex-wrap:wrap;flex-wrap:wrap}.columns.is-vcentered{-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media print,screen and (min-width:769px){.columns:not(.is-desktop){display:-webkit-box;display:-ms-flexbox;display:flex}}@media screen and (min-width:1024px){.columns.is-desktop{display:-webkit-box;display:-ms-flexbox;display:flex}}.columns.is-variable{--columnGap:0.75rem;margin-left:calc(-1 * var(--columnGap));margin-right:calc(-1 * var(--columnGap))}.columns.is-variable .column{padding-left:var(--columnGap);padding-right:var(--columnGap)}.columns.is-variable.is-0{--columnGap:0rem}.columns.is-variable.is-1{--columnGap:0.25rem}.columns.is-variable.is-2{--columnGap:0.5rem}.columns.is-variable.is-3{--columnGap:0.75rem}.columns.is-variable.is-4{--columnGap:1rem}.columns.is-variable.is-5{--columnGap:1.25rem}.columns.is-variable.is-6{--columnGap:1.5rem}.columns.is-variable.is-7{--columnGap:1.75rem}.columns.is-variable.is-8{--columnGap:2rem}.tile{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:block;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content}.tile.is-ancestor{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.tile.is-ancestor:last-child{margin-bottom:-.75rem}.tile.is-ancestor:not(:last-child){margin-bottom:.75rem}.tile.is-child{margin:0!important}.tile.is-parent{padding:.75rem}.tile.is-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.tile.is-vertical>.tile.is-child:not(:last-child){margin-bottom:1.5rem!important}@media print,screen and (min-width:769px){.tile:not(.is-child){display:-webkit-box;display:-ms-flexbox;display:flex}.tile.is-1{width:8.33333%}.tile.is-1,.tile.is-2{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-2{width:16.66667%}.tile.is-3{width:25%}.tile.is-3,.tile.is-4{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-4{width:33.33333%}.tile.is-5{width:41.66667%}.tile.is-5,.tile.is-6{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-6{width:50%}.tile.is-7{width:58.33333%}.tile.is-7,.tile.is-8{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-8{width:66.66667%}.tile.is-9{width:75%}.tile.is-9,.tile.is-10{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-10{width:83.33333%}.tile.is-11{width:91.66667%}.tile.is-11,.tile.is-12{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-12{width:100%}}.hero{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.hero .navbar{background:none}.hero .tabs ul{border-bottom:none}.hero.is-white{background-color:#fff;color:#0a0a0a}.hero.is-white a:not(.button),.hero.is-white strong{color:inherit}.hero.is-white .title{color:#0a0a0a}.hero.is-white .subtitle{color:hsla(0,0%,4%,.9)}.hero.is-white .subtitle a:not(.button),.hero.is-white .subtitle strong{color:#0a0a0a}@media screen and (max-width:1023px){.hero.is-white .navbar-menu{background-color:#fff}}.hero.is-white .navbar-item,.hero.is-white .navbar-link{color:hsla(0,0%,4%,.7)}.hero.is-white .navbar-link.is-active,.hero.is-white .navbar-link:hover,.hero.is-white a.navbar-item.is-active,.hero.is-white a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.hero.is-white .tabs a{color:#0a0a0a;opacity:.9}.hero.is-white .tabs a:hover,.hero.is-white .tabs li.is-active a{opacity:1}.hero.is-white .tabs.is-boxed a,.hero.is-white .tabs.is-toggle a{color:#0a0a0a}.hero.is-white .tabs.is-boxed a:hover,.hero.is-white .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-white .tabs.is-boxed li.is-active a,.hero.is-white .tabs.is-boxed li.is-active a:hover,.hero.is-white .tabs.is-toggle li.is-active a,.hero.is-white .tabs.is-toggle li.is-active a:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.hero.is-white.is-bold{background-image:linear-gradient(141deg,#e6e6e6,#fff 71%,#fff)}@media screen and (max-width:768px){.hero.is-white.is-bold .navbar-menu{background-image:linear-gradient(141deg,#e6e6e6,#fff 71%,#fff)}}.hero.is-black{background-color:#0a0a0a;color:#fff}.hero.is-black a:not(.button),.hero.is-black strong{color:inherit}.hero.is-black .title{color:#fff}.hero.is-black .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-black .subtitle a:not(.button),.hero.is-black .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-black .navbar-menu{background-color:#0a0a0a}}.hero.is-black .navbar-item,.hero.is-black .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-black .navbar-link.is-active,.hero.is-black .navbar-link:hover,.hero.is-black a.navbar-item.is-active,.hero.is-black a.navbar-item:hover{background-color:#000;color:#fff}.hero.is-black .tabs a{color:#fff;opacity:.9}.hero.is-black .tabs a:hover,.hero.is-black .tabs li.is-active a{opacity:1}.hero.is-black .tabs.is-boxed a,.hero.is-black .tabs.is-toggle a{color:#fff}.hero.is-black .tabs.is-boxed a:hover,.hero.is-black .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-black .tabs.is-boxed li.is-active a,.hero.is-black .tabs.is-boxed li.is-active a:hover,.hero.is-black .tabs.is-toggle li.is-active a,.hero.is-black .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.hero.is-black.is-bold{background-image:linear-gradient(141deg,#000,#0a0a0a 71%,#181616)}@media screen and (max-width:768px){.hero.is-black.is-bold .navbar-menu{background-image:linear-gradient(141deg,#000,#0a0a0a 71%,#181616)}}.hero.is-light{background-color:#f5f5f5;color:#363636}.hero.is-light a:not(.button),.hero.is-light strong{color:inherit}.hero.is-light .title{color:#363636}.hero.is-light .subtitle{color:rgba(54,54,54,.9)}.hero.is-light .subtitle a:not(.button),.hero.is-light .subtitle strong{color:#363636}@media screen and (max-width:1023px){.hero.is-light .navbar-menu{background-color:#f5f5f5}}.hero.is-light .navbar-item,.hero.is-light .navbar-link{color:rgba(54,54,54,.7)}.hero.is-light .navbar-link.is-active,.hero.is-light .navbar-link:hover,.hero.is-light a.navbar-item.is-active,.hero.is-light a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.hero.is-light .tabs a{color:#363636;opacity:.9}.hero.is-light .tabs a:hover,.hero.is-light .tabs li.is-active a{opacity:1}.hero.is-light .tabs.is-boxed a,.hero.is-light .tabs.is-toggle a{color:#363636}.hero.is-light .tabs.is-boxed a:hover,.hero.is-light .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-light .tabs.is-boxed li.is-active a,.hero.is-light .tabs.is-boxed li.is-active a:hover,.hero.is-light .tabs.is-toggle li.is-active a,.hero.is-light .tabs.is-toggle li.is-active a:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}.hero.is-light.is-bold{background-image:linear-gradient(141deg,#dfd8d9,#f5f5f5 71%,#fff)}@media screen and (max-width:768px){.hero.is-light.is-bold .navbar-menu{background-image:linear-gradient(141deg,#dfd8d9,#f5f5f5 71%,#fff)}}.hero.is-dark{background-color:#363636;color:#f5f5f5}.hero.is-dark a:not(.button),.hero.is-dark strong{color:inherit}.hero.is-dark .title{color:#f5f5f5}.hero.is-dark .subtitle{color:hsla(0,0%,96%,.9)}.hero.is-dark .subtitle a:not(.button),.hero.is-dark .subtitle strong{color:#f5f5f5}@media screen and (max-width:1023px){.hero.is-dark .navbar-menu{background-color:#363636}}.hero.is-dark .navbar-item,.hero.is-dark .navbar-link{color:hsla(0,0%,96%,.7)}.hero.is-dark .navbar-link.is-active,.hero.is-dark .navbar-link:hover,.hero.is-dark a.navbar-item.is-active,.hero.is-dark a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.hero.is-dark .tabs a{color:#f5f5f5;opacity:.9}.hero.is-dark .tabs a:hover,.hero.is-dark .tabs li.is-active a{opacity:1}.hero.is-dark .tabs.is-boxed a,.hero.is-dark .tabs.is-toggle a{color:#f5f5f5}.hero.is-dark .tabs.is-boxed a:hover,.hero.is-dark .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-dark .tabs.is-boxed li.is-active a,.hero.is-dark .tabs.is-boxed li.is-active a:hover,.hero.is-dark .tabs.is-toggle li.is-active a,.hero.is-dark .tabs.is-toggle li.is-active a:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.hero.is-dark.is-bold{background-image:linear-gradient(141deg,#1f191a,#363636 71%,#46403f)}@media screen and (max-width:768px){.hero.is-dark.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1f191a,#363636 71%,#46403f)}}.hero.is-primary{background-color:#00d1b2;color:#fff}.hero.is-primary a:not(.button),.hero.is-primary strong{color:inherit}.hero.is-primary .title{color:#fff}.hero.is-primary .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-primary .subtitle a:not(.button),.hero.is-primary .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-primary .navbar-menu{background-color:#00d1b2}}.hero.is-primary .navbar-item,.hero.is-primary .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-primary .navbar-link.is-active,.hero.is-primary .navbar-link:hover,.hero.is-primary a.navbar-item.is-active,.hero.is-primary a.navbar-item:hover{background-color:#00b89c;color:#fff}.hero.is-primary .tabs a{color:#fff;opacity:.9}.hero.is-primary .tabs a:hover,.hero.is-primary .tabs li.is-active a{opacity:1}.hero.is-primary .tabs.is-boxed a,.hero.is-primary .tabs.is-toggle a{color:#fff}.hero.is-primary .tabs.is-boxed a:hover,.hero.is-primary .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-primary .tabs.is-boxed li.is-active a,.hero.is-primary .tabs.is-boxed li.is-active a:hover,.hero.is-primary .tabs.is-toggle li.is-active a,.hero.is-primary .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#00d1b2}.hero.is-primary.is-bold{background-image:linear-gradient(141deg,#009e6c,#00d1b2 71%,#00e7eb)}@media screen and (max-width:768px){.hero.is-primary.is-bold .navbar-menu{background-image:linear-gradient(141deg,#009e6c,#00d1b2 71%,#00e7eb)}}.hero.is-link{background-color:#3273dc;color:#fff}.hero.is-link a:not(.button),.hero.is-link strong{color:inherit}.hero.is-link .title{color:#fff}.hero.is-link .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-link .subtitle a:not(.button),.hero.is-link .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-link .navbar-menu{background-color:#3273dc}}.hero.is-link .navbar-item,.hero.is-link .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-link .navbar-link.is-active,.hero.is-link .navbar-link:hover,.hero.is-link a.navbar-item.is-active,.hero.is-link a.navbar-item:hover{background-color:#2366d1;color:#fff}.hero.is-link .tabs a{color:#fff;opacity:.9}.hero.is-link .tabs a:hover,.hero.is-link .tabs li.is-active a{opacity:1}.hero.is-link .tabs.is-boxed a,.hero.is-link .tabs.is-toggle a{color:#fff}.hero.is-link .tabs.is-boxed a:hover,.hero.is-link .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-link .tabs.is-boxed li.is-active a,.hero.is-link .tabs.is-boxed li.is-active a:hover,.hero.is-link .tabs.is-toggle li.is-active a,.hero.is-link .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#3273dc}.hero.is-link.is-bold{background-image:linear-gradient(141deg,#1577c6,#3273dc 71%,#4366e5)}@media screen and (max-width:768px){.hero.is-link.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1577c6,#3273dc 71%,#4366e5)}}.hero.is-info{background-color:#209cee;color:#fff}.hero.is-info a:not(.button),.hero.is-info strong{color:inherit}.hero.is-info .title{color:#fff}.hero.is-info .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-info .subtitle a:not(.button),.hero.is-info .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-info .navbar-menu{background-color:#209cee}}.hero.is-info .navbar-item,.hero.is-info .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-info .navbar-link.is-active,.hero.is-info .navbar-link:hover,.hero.is-info a.navbar-item.is-active,.hero.is-info a.navbar-item:hover{background-color:#118fe4;color:#fff}.hero.is-info .tabs a{color:#fff;opacity:.9}.hero.is-info .tabs a:hover,.hero.is-info .tabs li.is-active a{opacity:1}.hero.is-info .tabs.is-boxed a,.hero.is-info .tabs.is-toggle a{color:#fff}.hero.is-info .tabs.is-boxed a:hover,.hero.is-info .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-info .tabs.is-boxed li.is-active a,.hero.is-info .tabs.is-boxed li.is-active a:hover,.hero.is-info .tabs.is-toggle li.is-active a,.hero.is-info .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#209cee}.hero.is-info.is-bold{background-image:linear-gradient(141deg,#04a6d7,#209cee 71%,#3287f5)}@media screen and (max-width:768px){.hero.is-info.is-bold .navbar-menu{background-image:linear-gradient(141deg,#04a6d7,#209cee 71%,#3287f5)}}.hero.is-success{background-color:#23d160;color:#fff}.hero.is-success a:not(.button),.hero.is-success strong{color:inherit}.hero.is-success .title{color:#fff}.hero.is-success .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-success .subtitle a:not(.button),.hero.is-success .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-success .navbar-menu{background-color:#23d160}}.hero.is-success .navbar-item,.hero.is-success .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-success .navbar-link.is-active,.hero.is-success .navbar-link:hover,.hero.is-success a.navbar-item.is-active,.hero.is-success a.navbar-item:hover{background-color:#20bc56;color:#fff}.hero.is-success .tabs a{color:#fff;opacity:.9}.hero.is-success .tabs a:hover,.hero.is-success .tabs li.is-active a{opacity:1}.hero.is-success .tabs.is-boxed a,.hero.is-success .tabs.is-toggle a{color:#fff}.hero.is-success .tabs.is-boxed a:hover,.hero.is-success .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-success .tabs.is-boxed li.is-active a,.hero.is-success .tabs.is-boxed li.is-active a:hover,.hero.is-success .tabs.is-toggle li.is-active a,.hero.is-success .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#23d160}.hero.is-success.is-bold{background-image:linear-gradient(141deg,#12af2f,#23d160 71%,#2ce28a)}@media screen and (max-width:768px){.hero.is-success.is-bold .navbar-menu{background-image:linear-gradient(141deg,#12af2f,#23d160 71%,#2ce28a)}}.hero.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.hero.is-warning a:not(.button),.hero.is-warning strong{color:inherit}.hero.is-warning .title{color:rgba(0,0,0,.7)}.hero.is-warning .subtitle{color:rgba(0,0,0,.9)}.hero.is-warning .subtitle a:not(.button),.hero.is-warning .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width:1023px){.hero.is-warning .navbar-menu{background-color:#ffdd57}}.hero.is-warning .navbar-item,.hero.is-warning .navbar-link{color:rgba(0,0,0,.7)}.hero.is-warning .navbar-link.is-active,.hero.is-warning .navbar-link:hover,.hero.is-warning a.navbar-item.is-active,.hero.is-warning a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.hero.is-warning .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-warning .tabs a:hover,.hero.is-warning .tabs li.is-active a{opacity:1}.hero.is-warning .tabs.is-boxed a,.hero.is-warning .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-warning .tabs.is-boxed a:hover,.hero.is-warning .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-warning .tabs.is-boxed li.is-active a,.hero.is-warning .tabs.is-boxed li.is-active a:hover,.hero.is-warning .tabs.is-toggle li.is-active a,.hero.is-warning .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#ffdd57}.hero.is-warning.is-bold{background-image:linear-gradient(141deg,#ffaf24,#ffdd57 71%,#fffa70)}@media screen and (max-width:768px){.hero.is-warning.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ffaf24,#ffdd57 71%,#fffa70)}}.hero.is-danger{background-color:#ff3860;color:#fff}.hero.is-danger a:not(.button),.hero.is-danger strong{color:inherit}.hero.is-danger .title{color:#fff}.hero.is-danger .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-danger .subtitle a:not(.button),.hero.is-danger .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-danger .navbar-menu{background-color:#ff3860}}.hero.is-danger .navbar-item,.hero.is-danger .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-danger .navbar-link.is-active,.hero.is-danger .navbar-link:hover,.hero.is-danger a.navbar-item.is-active,.hero.is-danger a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.hero.is-danger .tabs a{color:#fff;opacity:.9}.hero.is-danger .tabs a:hover,.hero.is-danger .tabs li.is-active a{opacity:1}.hero.is-danger .tabs.is-boxed a,.hero.is-danger .tabs.is-toggle a{color:#fff}.hero.is-danger .tabs.is-boxed a:hover,.hero.is-danger .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-danger .tabs.is-boxed li.is-active a,.hero.is-danger .tabs.is-boxed li.is-active a:hover,.hero.is-danger .tabs.is-toggle li.is-active a,.hero.is-danger .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#ff3860}.hero.is-danger.is-bold{background-image:linear-gradient(141deg,#ff0561,#ff3860 71%,#ff5257)}@media screen and (max-width:768px){.hero.is-danger.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ff0561,#ff3860 71%,#ff5257)}}.hero.is-small .hero-body{padding-bottom:1.5rem;padding-top:1.5rem}@media print,screen and (min-width:769px){.hero.is-medium .hero-body{padding-bottom:9rem;padding-top:9rem}}@media print,screen and (min-width:769px){.hero.is-large .hero-body{padding-bottom:18rem;padding-top:18rem}}.hero.is-fullheight .hero-body,.hero.is-halfheight .hero-body{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.hero.is-fullheight .hero-body>.container,.hero.is-halfheight .hero-body>.container{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.hero.is-halfheight{min-height:50vh}.hero.is-fullheight{min-height:100vh}.hero-video{bottom:0;left:0;position:absolute;right:0;top:0;overflow:hidden}.hero-video video{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.hero-video.is-transparent{opacity:.3}@media screen and (max-width:768px){.hero-video{display:none}}.hero-buttons{margin-top:1.5rem}@media screen and (max-width:768px){.hero-buttons .button{display:-webkit-box;display:-ms-flexbox;display:flex}.hero-buttons .button:not(:last-child){margin-bottom:.75rem}}@media print,screen and (min-width:769px){.hero-buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.hero-buttons .button:not(:last-child){margin-right:1.5rem}}.hero-foot,.hero-head{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}.hero-body,.hero-foot,.hero-head{-ms-flex-negative:0;flex-shrink:0}.hero-body{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.hero-body,.section{padding:3rem 1.5rem}@media screen and (min-width:1024px){.section.is-medium{padding:9rem 1.5rem}.section.is-large{padding:18rem 1.5rem}}.footer{background-color:#f5f5f5;padding:3rem 1.5rem 6rem}", ""]);

// exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(100);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(29)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--0-1!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--0-1!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports
exports.i(__webpack_require__(101), "");
exports.i(__webpack_require__(102), "");

// module
exports.push([module.i, "input{outline:none!important;border-radius:0!important}html{width:100%;height:100%;overflow-y:auto}body{min-height:100%}a[href^=\"tel:\"]{color:inherit;text-decoration:none}*{-webkit-text-size-adjust:none}.mytainer{max-width:960px;width:960px;margin:auto}body{font:12px/18px Arial,Helvetica,sans-serif;color:#767171;position:relative;min-width:960px;background-size:contain}.ic{border:0;float:right;background:#fff;color:red;width:50%;line-height:10px;font-size:10px;margin:-220% 0 0;overflow:hidden;padding:0}h1,h2,h3,h4,h5,h6{font-weight:400;font-family:Oswald,sans-serif;color:#000}h3{font-size:30px;line-height:24px;top:-3px;margin-bottom:23px}h3,h4{position:relative}h4{font-size:18px;line-height:18px;margin-top:-4px;margin-bottom:14px}p{margin-bottom:18px}img{max-width:100%}address{font-style:normal}ul{padding:0;margin:0;list-style:none}ul.list{overflow:hidden}ul.list li{padding-left:11px}ul.list li+li{margin-top:9px}a{text-decoration:none;color:inherit;outline:none;transition:.5s ease;-o-transition:.5s ease;-webkit-transition:.5s ease}a:hover{color:#14fa46}a.btn{display:inline-block;font:18px/18px Oswald,sans-serif;color:#ac2135;padding-right:15px;margin-right:-49px;margin-top:30px}a.btn:hover{color:#000}.mb0{margin-bottom:0!important}.m0{margin:0!important}.mb1{margin-bottom:25px!important}.ind1{margin-top:11px}.pad0{padding:0!important}.pt0{padding-top:0}.img_inner{max-width:100%;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box;margin-bottom:28px;position:relative}.fleft{float:left;margin-right:20px;margin-top:0;margin-bottom:0;border:1px solid #af293c}.fright{float:right!important}.upp{text-transform:uppercase}.alright{text-align:right}.center{text-align:center}.extra_wrapper,.wrapper{overflow:hidden}.clear{float:none!important;clear:both}header{display:block;position:relative;z-index:999;margin-bottom:60px}header a:hover{color:#000}.page1 h1{position:absolute;right:50%;margin-right:-470px}h1{float:right;z-index:999}h1 a{overflow:hidden;width:164px;height:151px;text-indent:-999px;transition:0s ease;-o-transition:0s ease;-webkit-transition:0s ease}h1 a,h1 a img{display:block}#search{float:right;width:81px;position:relative;overflow:hidden;margin-top:19px}#search input{background-color:#691828;border:none;float:none;height:25px;padding:4px 36px 3px 10px;color:#fff;font:12px/18px Arial,Helvetica,sans-serif;width:100%;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box}#search a{width:40px;height:25px;display:block;position:absolute;right:0;top:0;cursor:pointer}#search a:hover{opacity:.5}.socials{text-align:center;float:right;padding-top:18px;overflow:hidden;padding-right:25px}.socials a{display:block;float:left;width:28px;height:28px}.socials a+a{margin-left:7px;background-position:-35px 0}.socials a+a+a{background-position:-71px 0}.socials a+a+a+a{background-position:right 0}.socials a:hover{opacity:.7}#form+.style1{margin-right:-10px}.content{padding:32px 80px 30px;margin-bottom:223px}.page1 .content{padding-left:32px;padding-right:32px;margin-bottom:0}.page1 .content h3{padding-top:1px;padding-bottom:0;margin-bottom:27px}.page1 .content a.btn{margin-right:0;margin-top:24px}.page1 .content ul span{color:#000;font-weight:600}.page1 .content ul{padding-top:5px}.page1 .content ul li{font-size:16px}.page1 .content ul li+li{margin-top:14px}.page1 .content ul li+li+li+li{margin-top:18px}.page1 .content img{margin-left:16px;float:right}.page1 .content p,.style1{color:#000}.page1 .content p a,.style1 a{color:#ff4a4a}.page1 .content p a:hover,.style1 a:hover{color:#000}.block1 h3{margin-bottom:6px}.block1+.block1{margin-top:51px}.cl1{height:18px}ul.list2{font-size:16px;padding-top:20px}ul.list2 span{color:#000}ul.list2 li{padding-left:11px}ul.list2 li+li{margin-top:10px}h3.head1{position:relative;top:-8px}.block2 .extra_wrapper{padding-top:7px;margin-top:-5px}.block2 a.btn{margin-top:0;margin-left:7px;font-family:Arial,Helvetica,sans-serif;font-size:13px;background-position:right 3px}.block2+.block2{margin-top:26px}.cl2{height:9px}.block2 .fleft{margin-top:6px}.block2 h4{margin-bottom:8px}ul.list3 time{display:block;background-color:#ac2135;width:34px;margin-right:8px;float:left;color:#fff;margin-top:-1px;padding-top:2px;height:36px;text-align:center;font:24px/18px Oswald,sans-serif}ul.list3 h4{margin-bottom:8px}ul.list3 time span{margin-top:-2px;display:block;font-size:14px}ul.list3 li{padding-top:2px}ul.list3 li+li{margin-top:24px}ul.list3 li+li+li{margin-top:25px}.map{padding-top:5px}.map .text1{font-family:Arial,Helvetica,sans-serif;font-size:16px;padding-bottom:19px}.map figure{width:100%;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box;display:block;margin-bottom:26px;border:1px solid #af293c}.map figure iframe{width:100%;height:255px;max-width:100%}.map address{padding-top:10px;overflow:hidden;line-height:20px}address dt{color:#000}address dd span{min-width:85px;display:inline-block;text-align:left}footer{color:#fff;display:block;padding:21px 0;border-top:3px solid #ff4a4a;position:absolute;right:0;bottom:0;left:0;padding:1rem;text-align:center}", ""]);

// exports


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "body{min-width:960px}.container_12{margin-left:auto;margin-right:auto;width:960px}.grid_1,.grid_2,.grid_3,.grid_4,.grid_5,.grid_6,.grid_7,.grid_8,.grid_9,.grid_10,.grid_11,.grid_12{display:inline;float:left;margin-left:10px;margin-right:10px}.pull_1,.pull_2,.pull_3,.pull_4,.pull_5,.pull_6,.pull_7,.pull_8,.pull_9,.pull_10,.pull_11,.push_1,.push_2,.push_3,.push_4,.push_5,.push_6,.push_7,.push_8,.push_9,.push_10,.push_11{position:relative}.alpha{margin-left:0}.omega{margin-right:0}.container_12 .grid_1{width:60px}.container_12 .grid_2{width:140px}.container_12 .grid_3{width:220px}.container_12 .grid_4{width:300px}.container_12 .grid_5{width:380px}.container_12 .grid_6{width:460px}.container_12 .grid_7{width:540px}.container_12 .grid_8{width:620px}.container_12 .grid_9{width:700px}.container_12 .grid_10{width:780px}.container_12 .grid_11{width:860px}.container_12 .grid_12{width:940px}.container_12 .prefix_1{padding-left:80px}.container_12 .prefix_2{padding-left:160px}.container_12 .prefix_3{padding-left:240px}.container_12 .prefix_4{padding-left:320px}.container_12 .prefix_5{padding-left:400px}.container_12 .prefix_6{padding-left:480px}.container_12 .prefix_7{padding-left:560px}.container_12 .prefix_8{padding-left:640px}.container_12 .prefix_9{padding-left:720px}.container_12 .prefix_10{padding-left:800px}.container_12 .prefix_11{padding-left:880px}.container_12 .suffix_1{padding-right:80px}.container_12 .suffix_2{padding-right:160px}.container_12 .suffix_3{padding-right:240px}.container_12 .suffix_4{padding-right:320px}.container_12 .suffix_5{padding-right:400px}.container_12 .suffix_6{padding-right:480px}.container_12 .suffix_7{padding-right:560px}.container_12 .suffix_8{padding-right:640px}.container_12 .suffix_9{padding-right:720px}.container_12 .suffix_10{padding-right:800px}.container_12 .suffix_11{padding-right:880px}.container_12 .push_1{left:80px}.container_12 .push_2{left:160px}.container_12 .push_3{left:240px}.container_12 .push_4{left:320px}.container_12 .push_5{left:400px}.container_12 .push_6{left:480px}.container_12 .push_7{left:560px}.container_12 .push_8{left:640px}.container_12 .push_9{left:720px}.container_12 .push_10{left:800px}.container_12 .push_11{left:880px}.container_12 .pull_1{left:-80px}.container_12 .pull_2{left:-160px}.container_12 .pull_3{left:-240px}.container_12 .pull_4{left:-320px}.container_12 .pull_5{left:-400px}.container_12 .pull_6{left:-480px}.container_12 .pull_7{left:-560px}.container_12 .pull_8{left:-640px}.container_12 .pull_9{left:-720px}.container_12 .pull_10{left:-800px}.container_12 .pull_11{left:-880px}.clear{clear:both;display:block;overflow:hidden;visibility:hidden;width:0;height:0}.clearfix:after,.clearfix:before,.container_12:after,.container_12:before{content:\".\";display:block;overflow:hidden;visibility:hidden;font-size:0;line-height:0;width:0;height:0}.clearfix:after,.container_12:after{clear:both}.clearfix,.container_12{zoom:1}", ""]);

// exports


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".menu_block{position:relative;z-index:999}nav{position:relative;padding:0}.sf-menu ul{position:absolute;top:-999px;display:none}.sf-menu>li,.sf-menu li{float:left;position:relative}.sf-menu>li>a{font-size:20px;font-family:Oswald,sans-serif;color:#fff;display:block;line-height:24px;z-index:999;position:relative;padding:19px 14px 20px}.sf-menu>li.current>a,.sf-menu>li.sfHover>a,.sf-menu>li:hover>a:hover{background-position:0 0;color:#fff;background-color:#752935}.sf-menu li.sfHover>ul,.sf-menu li ul{top:-28px;left:114px;width:141px;z-index:999;padding-top:28px;padding-bottom:23px;background-color:#fff}.sf-menu li ul li{padding-left:18px;float:none!important;margin-bottom:3px}.sf-menu li ul li a{text-transform:uppercase;font:16px/16px Dosis,sans-serif;position:relative;color:#000}.sf-menu li.sfHover li.sfHover>a,.sf-menu li li a:hover{color:#ec0606}", ""]);

// exports


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODNmMzQ4YTFjOTk0NTg4ZWU3MzMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3J1bnRpbWUvY29uY3JldGUvQXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb25jcmV0ZS9kZWNvcmF0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9kZWNsYXJlL2FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3ZW5naW5lL2ludGVyZmFjZXMvSVZpZXdFbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4dGVuc2lvbnMvSHRtbEVsZW1lbnRFeHRlbnNpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2ludGVyZmFjZXMvSUJpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvYWJzdHJhY3QvVmlld01vZGVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXhjZXB0aW9ucy9FeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2NvaGVyZW5jZS9pbnRlcmZhY2VzL0lDb2hlcmVuY2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvaW50ZXJmYWNlcy9JQ29tbXVuaWNhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9oaXN0b3J5L2ludGVyZmFjZXMvSUhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvaW50ZXJmYWNlcy9JUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2xvZ2dpbmcvaW50ZXJmYWNlcy9JTG9nZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3YmluZGluZy9pbnRlcmZhY2VzL0lWaWV3QmluZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3L2Fic3RyYWN0L1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvaW50ZXJmYWNlcy9JUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9pbnRlcmZhY2VzL0lWaWV3UHVibGlzaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9zdHJ1Y3R1cmVzL1Byb21pc2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3RE9NL2Fic3RyYWN0L1ZpZXdET00uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvYmFja2VuZC9Db21tdW5pY2F0aW9uRXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iZWhhdmlvcnMvZXZlbnRzL2Fic3RyYWN0L0V2ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9zdGF0ZXMvaW50ZXJmYWNlcy9JU3RhdGVNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS90ZW1wbGF0aW5nL2ludGVyZmFjZXMvSVRlbXBsYXRlRW5naW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92YWxpZGF0aW5nL3JlcG9ydGVyL2ludGVyZmFjZXMvSVZhbGlkYXRhdGluZ1JlcG9ydGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yZWZsZWN0aW9uL1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2NvbmNyZXRlL2Jhc2UvQmFzZUJ5QXR0cmlidXRlQmluZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9hYnN0cmFjdC9CaW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeUJ1dHRvbi9jYXRlZ29yeUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb250cmFjdHMvUm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2NvaGVyZW5jZS9jb25jcmV0ZS9Jbk1lbW9yeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vaGlzdG9yeS9jb250cmFjdHMvSGlzdG9yeUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0b3JhZ2UvaW50ZXJmYWNlcy9JU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9jb25jcmV0ZS9iYXNlL0Jhc2VCaW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3YmluZGluZy9jb250cmFjdHMvQmluZENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvY29uY3JldGUvVmlld01vZGVsRXhpc3RlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3RE9NL2ludGVyZmFjZXMvSVZpZXdET00uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzdG9hc3QvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvY29udHJhY3RzL1JvdXRlQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmFja2VuZC9jb25jcmV0ZS9hamF4L0FqYXhDb21tdW5pY2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvcnVudGltZS9JbnN0YW50aWF0ZWRFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2hpc3RvcnkvY29uY3JldGUvSHRtbDVIaXN0b3J5QVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2xvZ2dpbmcvY29uY3JldGUvQ29uc29sZUxvZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmFja2VuZC9jb25jcmV0ZS9hamF4L0FqYXhSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iYWNrZW5kL2Fic3RyYWN0L1N0YXRlZnVsbFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvYWJzdHJhY3QvRXZlbnRSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iYWNrZW5kL2Fic3RyYWN0L1JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvY29uY3JldGUvQmFzaWNSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvYWJzdHJhY3QvUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2NvbnRyYWN0cy9Sb3V0ZU1hdGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9zdG9yYWdlL2NvbmNyZXRlL0xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vc3RvcmFnZS9hYnN0cmFjdC9CYXNlU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdGVtcGxhdGluZy9jb25jcmV0ZS9tdXN0YWNoZS9DbGllbnRUZW1wbGF0ZUVuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmFsaWRhdGluZy9yZXBvcnRlci9jb25jcmV0ZS9Ob3RpZnlWYWxpZGF0aW5nUmVwb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdiaW5kaW5nL2NvbmNyZXRlL0Jhc2VWaWV3QmluZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3YmluZGluZy9hYnN0cmFjdC9WaWV3QmluZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2NvbmNyZXRlL0Jhc2VGaWVsZEJpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvRXZlbnRCaW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2NvbmNyZXRlL0Jhc2VJbnB1dEJpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvQmFzZUNvbGxlY3Rpb25CaW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS90ZW1wbGF0aW5nL2NvbnRyYWN0cy9UZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZGVjbGFyZS9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdlbmdpbmUvY29uY3JldGUvQmFzZVZpZXdFbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdlbmdpbmUvY29udHJhY3RzL0V4ZWN1dGVDb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3ZW5naW5lL2NvbmNyZXRlL0Jhc2VWaWV3UHVibGlzaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2NvbmNyZXRlL1Byb3BlcnR5QmluZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcmVmbGVjdGlvbi9DbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlldy9pbnRlcmZhY2VzL0lWaWV3YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld21vZGVscy9hYnN0cmFjdC9WaWV3U3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0YXRlcy9TdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vbW9kZWxzL01vZGVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yZWZsZWN0aW9uL2Nsb25pbmcvZGVjb3JhdG9ycy9JQ2xvbmVhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yZWZsZWN0aW9uL2Nsb25pbmcvaW50ZXJmYWNlcy9JQ2xvbmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9oaXN0b3J5L2RlY29yYXRvcnMvaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeUJ1dHRvbi9jYXRlZ29yeUJ1dHRvblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzUGFuZWwvc29jaWFsc1BhbmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NvY2lhbHNQYW5lbC9zb2NpYWxzUGFuZWxWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NvY2lhbHNQYW5lbC9zb2NpYWxCdXR0b24vc29jaWFsQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NvY2lhbHNQYW5lbC9zb2NpYWxCdXR0b24vc29jaWFsQnV0dG9uVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3bW9kZWxzL2NvbmNyZXRlL1ZpZXdNb2RlbEZpbGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kZXJzL011c3RhY2hlQmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbXVzdGFjaGUvbXVzdGFjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2J1bG1hLWNhcm91c2VsL2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9idWxtYS1jYXJvdXNlbC9idWxtYS1jYXJvdXNlbC5jc3M/NWFlMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnVsbWEtY2Fyb3VzZWwvYnVsbWEtY2Fyb3VzZWwuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2J1bG1hL2Nzcy9idWxtYS5jc3M/NzVmNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnVsbWEvY3NzL2J1bG1hLmNzcyIsIndlYnBhY2s6Ly8vLi9jc3Mvc3R5bGUuY3NzPzU2OTMiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jc3MvZ3JpZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N1cGVyZmlzaC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RlO0FBQ2E7QUFDRDtBQUNLO0FBQ047QUFDRjtBQUNGO0FBQ0E7QUFDRTtBQUNEO0FBQ1E7QUFDSTtBQUNWO0FBQ0U7QUFDSjtBQUNJO0FBQ0s7QUFDUjtBQUNMO0FBQ0Q7QUFDQztBQUNEO0FBQ0M7QUFDTztBQUNJO0FBQ1I7QUFDSDtBQUNHO0FBQ0c7QUFDRztBQUNIO0FBQ0M7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQjs7Ozs7Ozs7QUN2SG9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQZ0I7QUFDTztBQUNEO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7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QUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsbUM7Ozs7Ozs7Ozs7O0FDbkNpQjtBQUNLO0FBQ0g7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsdUM7Ozs7Ozs7Ozs7OztBQ2xDa0I7QUFDRztBQUNyQjtBQUNpQjtBQUNLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0M7Ozs7Ozs7O0FDNUNnQjtBQUNoQjtBQUNBO0FBQUE7QUFBQTtBQUNBLHNDOzs7Ozs7OztBQ0hzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLHdDOzs7Ozs7Ozs7QUNUbUI7QUFDRztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSx1Qzs7Ozs7Ozs7QUN2QzBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsZ0Q7Ozs7Ozs7QUNOQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUM4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQUE7QUFBQTtBQUNBLG9EOzs7Ozs7O0FDbEJBO0FBQUE7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ3FCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsMEM7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ3NCO0FBQ0g7QUFDVztBQUNSO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkhBQTZELFlBQVksRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBO0FBQ0Esc0M7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ2lDO0FBQ2Q7QUFDbkI7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsNEM7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ2tCO0FBQ2lCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNkRBQTZELEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0M7Ozs7Ozs7O0FDbktBO0FBQUE7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ3NCO0FBQ0g7QUFDbkI7QUFDQSxxQkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNkRBQTZELEVBQUU7QUFDL0Q7QUFDQTtBQUFBO0FBQUE7QUFDQSw0Qzs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ2lDO0FBQ2Q7QUFDRztBQUNBO0FBQ0E7QUFDQztBQUN2QjtBQUNBLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsME5BQXdHLGlCQUFpQjtBQUN6SDtBQUNBLDJCQUEyQix1QkFBdUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsaUQ7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxvQzs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0Esa0M7Ozs7Ozs7Ozs7QUNmQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNzQjtBQUNHO0FBQ0g7QUFDQTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsMEM7Ozs7Ozs7OztBQ3ZCbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSwwQzs7Ozs7Ozs7QUNaQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUN5QjtBQUNQO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQUE7QUFBQTtBQUNBLDZDOzs7Ozs7Ozs7Ozs7O0FDcERBO0FBQUE7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ2tCO0FBQ0Y7QUFDTTtBQUNBO0FBQ0E7QUFDdEI7QUFDb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNkRBQTZELEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IseUJBQXlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDRGQUE0Rix1REFBdUQsRUFBRTtBQUNySixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOEJBQThCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsMkM7Ozs7Ozs7QUMvSEE7QUFDQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsc0JBQXNCO0FBQ3BDO0FBQ0EsMkJBQTJCLDhCQUE4QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLGlDOzs7Ozs7OztBQ2pEa0M7QUFDbEM7QUFDQSxZQUFZLDRJQUFxRDtBQUNqRTtBQUFBO0FBQUE7QUFDQSxxQzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ2dCO0FBQ007QUFDQTtBQUN0QjtBQUN5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsY0FBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNSLHFDOzs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNzQjtBQUNOO0FBQ1E7QUFDTDtBQUNuQjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ1IsaUM7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNzQjtBQUNEO0FBQ0w7QUFDRztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ1IsaUM7Ozs7Ozs7Ozs7QUNwREE7QUFDa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDOzs7Ozs7OztBQ1BrQztBQUNsQztBQUNBLG1CQUFtQiwySUFBb0Q7QUFDdkU7QUFBQTtBQUFBO0FBQ0EsbUM7Ozs7Ozs7Ozs7QUNKQTtBQUNrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUM7Ozs7Ozs7O0FDVGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsOEM7Ozs7Ozs7Ozs7O0FDUHVCO0FBQ047QUFDTztBQUNDO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxrQzs7Ozs7Ozs7Ozs7QUNib0I7QUFDTztBQUNKO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0Esd0M7Ozs7Ozs7O0FDakJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSw0Qzs7Ozs7Ozs7O0FDTm9CO0FBQ087QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLHdDOzs7Ozs7OztBQ1hlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSw0Qzs7Ozs7Ozs7QUNOd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLGtDOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDb0I7QUFDcEI7QUFDbUI7QUFDRDtBQUNJO0FBQ1A7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsNENBQTRDO0FBQ3hGLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUM7Ozs7OztBQzVFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxzQkFBc0IsRUFBRTtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7QUN6TEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7QUNwQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHFCQUFxQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLHdDQUF3QztBQUMvQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsZUFBZTtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsZUFBZTtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxlQUFlO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsTUFBTTs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7QUNybkJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7O0FDeEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUN6QkE7QUFDQTs7O0FBR0E7QUFDQSwrQ0FBZ0QsR0FBRyx1QkFBdUIsR0FBRywwQkFBMEIsVUFBVSxXQUFXLFlBQVksZUFBZSxZQUFZLFlBQVksYUFBYSxnQkFBZ0Isa0JBQWtCLHFEQUFxRCxVQUFVLGVBQWUsYUFBYSxrQkFBa0IsTUFBTSxPQUFPLFNBQVMsUUFBUSxZQUFZLFlBQVksWUFBWSxVQUFVLFVBQVUscUJBQXFCLGNBQWMsYUFBYSxtQkFBbUIsdUJBQXVCLFdBQVcsV0FBVyxvQkFBb0IsT0FBTyxtQkFBbUIsYUFBYSxnQkFBZ0IsK0VBQStFLGtCQUFrQixxQkFBcUIsYUFBYSxVQUFVLDhCQUE4QixPQUFPLGFBQWEsdUJBQXVCLG1CQUFtQixjQUFjLFdBQVcsMkZBQTJGLGVBQWUsd0NBQXdDLFVBQVUsUUFBUSxlQUFlLGNBQWMsWUFBWSxhQUFhLG1CQUFtQix1QkFBdUIsWUFBWSxzQkFBc0IsZUFBZSxzQkFBc0Isd0JBQXdCLGtCQUFrQixnQkFBZ0IsZUFBZSxnQkFBZ0IsOEJBQThCLGtCQUFrQixxQkFBcUIsVUFBVSxTQUFTLGVBQWUsc0JBQXNCLGtCQUFrQixPQUFPLFFBQVEsU0FBUyxjQUFjLFNBQVMsa0JBQWtCLDhCQUE4QixpQkFBaUIsa0JBQWtCLGFBQWEsT0FBTyxrQkFBa0IseUNBQXlDLFdBQVcsd0NBQXdDLHFDQUFxQyxvQ0FBb0MsZ0NBQWdDLHVEQUF1RCwwQ0FBMEMsdUNBQXVDLHNDQUFzQyxrQ0FBa0Msa0JBQWtCLDBEQUEwRCw4QkFBOEIsdUJBQXVCLG9CQUFvQixtQkFBbUIsZUFBZSxrRkFBa0YsVUFBVSx3RkFBd0YsVUFBVSx5Q0FBeUMseUNBQXlDLHNDQUFzQyxxQ0FBcUMsaUNBQWlDOztBQUVqZ0Y7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7O0FDeEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUN6QkE7QUFDQTs7O0FBR0E7QUFDQSxxSEFBc0gsR0FBRywrQkFBK0IsdUJBQXVCLEdBQUcsaUNBQWlDLDBCQUEwQixzQkFBc0IsR0FBRywrQkFBK0IsdUJBQXVCLEdBQUcsaUNBQWlDLDBCQUEwQix3TEFBd0wsU0FBUyxVQUFVLGtCQUFrQixlQUFlLGdCQUFnQixHQUFHLGdCQUFnQiw2QkFBNkIsU0FBUyxLQUFLLDhCQUE4QixzQkFBc0IsaUJBQWlCLDJCQUEyQixtQkFBbUIsNkJBQTZCLGVBQWUsT0FBTyxTQUFTLE1BQU0seUJBQXlCLGlCQUFpQixNQUFNLFVBQVUsZ0JBQWdCLEtBQUssc0JBQXNCLGVBQWUsa0NBQWtDLG1DQUFtQyxnQkFBZ0Isa0JBQWtCLGtCQUFrQixrQ0FBa0MsOEJBQThCLDJCQUEyQiwwQkFBMEIsc0JBQXNCLGtEQUFrRCxjQUFjLGtDQUFrQyxvSkFBb0osU0FBUyw2QkFBNkIsNEJBQTRCLHNCQUFzQixLQUFLLGNBQWMsZUFBZSxnQkFBZ0IsZ0JBQWdCLEVBQUUsY0FBYyxlQUFlLHFCQUFxQixTQUFTLG1CQUFtQixRQUFRLGNBQWMsS0FBSyx5QkFBeUIsY0FBYyxpQkFBaUIsZ0JBQWdCLG1CQUFtQixHQUFHLHlCQUF5QixZQUFZLGNBQWMsV0FBVyxnQkFBZ0IsSUFBSSxZQUFZLGVBQWUsdUNBQXVDLHdCQUF3QixNQUFNLGlCQUFpQixLQUFLLG1CQUFtQixvQkFBb0IsT0FBTyxjQUFjLGdCQUFnQixJQUFJLGlDQUFpQyx5QkFBeUIsY0FBYyxpQkFBaUIsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLFNBQVMsNkJBQTZCLG1CQUFtQixjQUFjLFVBQVUsa0JBQWtCLGdCQUFnQixtQkFBbUIsU0FBUyxjQUFjLG1CQUFtQixXQUFXLGNBQWMsY0FBYyxnQkFBZ0IscUJBQXFCLGlCQUFpQixzQkFBc0IsWUFBWSwwQkFBMEIsWUFBWSxTQUFTLE9BQU8sa0JBQWtCLFFBQVEsTUFBTSxXQUFXLHlCQUF5QixXQUFXLDJCQUEyQixXQUFXLHlCQUF5QixXQUFXLDJCQUEyQixXQUFXLDRCQUE0QixXQUFXLHlCQUF5QixXQUFXLDJCQUEyQixvQ0FBb0Msa0JBQWtCLHlCQUF5QixrQkFBa0IsMkJBQTJCLGtCQUFrQix5QkFBeUIsa0JBQWtCLDJCQUEyQixrQkFBa0IsNEJBQTRCLGtCQUFrQix5QkFBeUIsa0JBQWtCLDRCQUE0QiwwQ0FBMEMsa0JBQWtCLHlCQUF5QixrQkFBa0IsMkJBQTJCLGtCQUFrQix5QkFBeUIsa0JBQWtCLDJCQUEyQixrQkFBa0IsNEJBQTRCLGtCQUFrQix5QkFBeUIsa0JBQWtCLDRCQUE0QixxQ0FBcUMsaUJBQWlCLHlCQUF5QixpQkFBaUIsMkJBQTJCLGlCQUFpQix5QkFBeUIsaUJBQWlCLDJCQUEyQixpQkFBaUIsNEJBQTRCLGlCQUFpQix5QkFBeUIsaUJBQWlCLDRCQUE0QixxQ0FBcUMsbUJBQW1CLHlCQUF5QixtQkFBbUIsMkJBQTJCLG1CQUFtQix5QkFBeUIsbUJBQW1CLDJCQUEyQixtQkFBbUIsNEJBQTRCLG1CQUFtQix5QkFBeUIsbUJBQW1CLDRCQUE0QixxQ0FBcUMsc0JBQXNCLHlCQUF5QixzQkFBc0IsMkJBQTJCLHNCQUFzQix5QkFBeUIsc0JBQXNCLDJCQUEyQixzQkFBc0IsNEJBQTRCLHNCQUFzQix5QkFBeUIsc0JBQXNCLDRCQUE0QixxQ0FBcUMsa0JBQWtCLHlCQUF5QixrQkFBa0IsMkJBQTJCLGtCQUFrQix5QkFBeUIsa0JBQWtCLDJCQUEyQixrQkFBa0IsNEJBQTRCLGtCQUFrQix5QkFBeUIsa0JBQWtCLDRCQUE0QixtQkFBbUIsNEJBQTRCLG9DQUFvQywwQkFBMEIsNkJBQTZCLDBDQUEwQywwQkFBMEIsNkJBQTZCLDJEQUEyRCwrQkFBK0IsNkJBQTZCLHFDQUFxQyx5QkFBeUIsNkJBQTZCLHFDQUFxQywyQkFBMkIsNkJBQTZCLDREQUE0RCxnQ0FBZ0MsNkJBQTZCLHFDQUFxQyw4QkFBOEIsNkJBQTZCLDREQUE0RCxtQ0FBbUMsNkJBQTZCLHFDQUFxQywwQkFBMEIsNkJBQTZCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLDJCQUEyQiw4QkFBOEIsMENBQTBDLDJCQUEyQiw4QkFBOEIsMkRBQTJELGdDQUFnQyw4QkFBOEIscUNBQXFDLDBCQUEwQiw4QkFBOEIscUNBQXFDLDRCQUE0Qiw4QkFBOEIsNERBQTRELGlDQUFpQyw4QkFBOEIscUNBQXFDLCtCQUErQiw4QkFBOEIsNERBQTRELG9DQUFvQyw4QkFBOEIscUNBQXFDLDJCQUEyQiw4QkFBOEIsZUFBZSwwQkFBMEIsb0NBQW9DLHNCQUFzQiwyQkFBMkIsMENBQTBDLHNCQUFzQiwyQkFBMkIsMkRBQTJELDJCQUEyQiwyQkFBMkIscUNBQXFDLHFCQUFxQiwyQkFBMkIscUNBQXFDLHVCQUF1QiwyQkFBMkIsNERBQTRELDRCQUE0QiwyQkFBMkIscUNBQXFDLDBCQUEwQiwyQkFBMkIsNERBQTRELCtCQUErQiwyQkFBMkIscUNBQXFDLHNCQUFzQiwyQkFBMkIsZ0JBQWdCLDJCQUEyQixvQ0FBb0MsdUJBQXVCLDRCQUE0QiwwQ0FBMEMsdUJBQXVCLDRCQUE0QiwyREFBMkQsNEJBQTRCLDRCQUE0QixxQ0FBcUMsc0JBQXNCLDRCQUE0QixxQ0FBcUMsd0JBQXdCLDRCQUE0Qiw0REFBNEQsNkJBQTZCLDRCQUE0QixxQ0FBcUMsMkJBQTJCLDRCQUE0Qiw0REFBNEQsZ0NBQWdDLDRCQUE0QixxQ0FBcUMsdUJBQXVCLDRCQUE0QixnQkFBZ0Isb0NBQW9DLGNBQWMsbUNBQW1DLGNBQWMsbUNBQW1DLGdCQUFnQixxQkFBcUIsOENBQThDLHdCQUF3QixnQkFBZ0Isd0JBQXdCLDhDQUE4QyxxQkFBcUIsZ0JBQWdCLHdCQUF3Qiw4Q0FBOEMsd0JBQXdCLGVBQWUsd0JBQXdCLDRDQUE0Qyx3QkFBd0Isa0JBQWtCLHdCQUF3QixrREFBa0Qsd0JBQXdCLGVBQWUsd0JBQXdCLDRDQUE0Qyx3QkFBd0IsZUFBZSx3QkFBd0IsNENBQTRDLHdCQUF3QixrQkFBa0Isd0JBQXdCLGtEQUFrRCx3QkFBd0Isa0JBQWtCLHdCQUF3QixrREFBa0Qsd0JBQXdCLGlCQUFpQix3QkFBd0IsZ0RBQWdELHdCQUF3QixvQkFBb0Isd0JBQXdCLG9CQUFvQix3QkFBd0Isc0JBQXNCLHdCQUF3QixvQkFBb0Isd0JBQXdCLGVBQWUsd0JBQXdCLHFCQUFxQix3QkFBd0IsdUJBQXVCLHdCQUF3QixvQkFBb0Isd0JBQXdCLG9CQUFvQix3QkFBd0IsdUJBQXVCLDBCQUEwQix3QkFBd0IsMEJBQTBCLDBCQUEwQiwwQkFBMEIsc0JBQXNCLDBCQUEwQixVQUFVLHdCQUF3QixvQ0FBb0MsaUJBQWlCLHlCQUF5QiwwQ0FBMEMsaUJBQWlCLHlCQUF5QiwyREFBMkQsc0JBQXNCLHlCQUF5QixxQ0FBcUMsZ0JBQWdCLHlCQUF5QixxQ0FBcUMsa0JBQWtCLHlCQUF5Qiw0REFBNEQsdUJBQXVCLHlCQUF5QixxQ0FBcUMscUJBQXFCLHlCQUF5Qiw0REFBNEQsMEJBQTBCLHlCQUF5QixxQ0FBcUMsaUJBQWlCLHlCQUF5QixTQUFTLDhCQUE4Qiw4QkFBOEIsdUJBQXVCLG9DQUFvQyxnQkFBZ0IsOEJBQThCLDhCQUE4Qix3QkFBd0IsMENBQTBDLGdCQUFnQiw4QkFBOEIsOEJBQThCLHdCQUF3QiwyREFBMkQscUJBQXFCLDhCQUE4Qiw4QkFBOEIsd0JBQXdCLHFDQUFxQyxlQUFlLDhCQUE4Qiw4QkFBOEIsd0JBQXdCLHFDQUFxQyxpQkFBaUIsOEJBQThCLDhCQUE4Qix3QkFBd0IsNERBQTRELHNCQUFzQiw4QkFBOEIsOEJBQThCLHdCQUF3QixxQ0FBcUMsb0JBQW9CLDhCQUE4Qiw4QkFBOEIsd0JBQXdCLDREQUE0RCx5QkFBeUIsOEJBQThCLDhCQUE4Qix3QkFBd0IscUNBQXFDLGdCQUFnQiw4QkFBOEIsOEJBQThCLHdCQUF3QixXQUFXLHlCQUF5QixvQ0FBb0Msa0JBQWtCLDBCQUEwQiwwQ0FBMEMsa0JBQWtCLDBCQUEwQiwyREFBMkQsdUJBQXVCLDBCQUEwQixxQ0FBcUMsaUJBQWlCLDBCQUEwQixxQ0FBcUMsbUJBQW1CLDBCQUEwQiw0REFBNEQsd0JBQXdCLDBCQUEwQixxQ0FBcUMsc0JBQXNCLDBCQUEwQiw0REFBNEQsMkJBQTJCLDBCQUEwQixxQ0FBcUMsa0JBQWtCLDBCQUEwQixpQkFBaUIsK0JBQStCLG9DQUFvQyx3QkFBd0IsZ0NBQWdDLDBDQUEwQyx3QkFBd0IsZ0NBQWdDLDJEQUEyRCw2QkFBNkIsZ0NBQWdDLHFDQUFxQyx1QkFBdUIsZ0NBQWdDLHFDQUFxQyx5QkFBeUIsZ0NBQWdDLDREQUE0RCw4QkFBOEIsZ0NBQWdDLHFDQUFxQyw0QkFBNEIsZ0NBQWdDLDREQUE0RCxpQ0FBaUMsZ0NBQWdDLHFDQUFxQyx3QkFBd0IsZ0NBQWdDLGdCQUFnQixxQ0FBcUMscUNBQXFDLDhCQUE4QixvQ0FBb0MsdUJBQXVCLHFDQUFxQyxxQ0FBcUMsK0JBQStCLDBDQUEwQyx1QkFBdUIscUNBQXFDLHFDQUFxQywrQkFBK0IsMkRBQTJELDRCQUE0QixxQ0FBcUMscUNBQXFDLCtCQUErQixxQ0FBcUMsc0JBQXNCLHFDQUFxQyxxQ0FBcUMsK0JBQStCLHFDQUFxQyx3QkFBd0IscUNBQXFDLHFDQUFxQywrQkFBK0IsNERBQTRELDZCQUE2QixxQ0FBcUMscUNBQXFDLCtCQUErQixxQ0FBcUMsMkJBQTJCLHFDQUFxQyxxQ0FBcUMsK0JBQStCLDREQUE0RCxnQ0FBZ0MscUNBQXFDLHFDQUFxQywrQkFBK0IscUNBQXFDLHVCQUF1QixxQ0FBcUMscUNBQXFDLCtCQUErQixXQUFXLHVCQUF1QixvQ0FBb0Msa0JBQWtCLHdCQUF3QiwwQ0FBMEMsa0JBQWtCLHdCQUF3QiwyREFBMkQsdUJBQXVCLHdCQUF3QixxQ0FBcUMsaUJBQWlCLHdCQUF3QixxQ0FBcUMsbUJBQW1CLHdCQUF3Qiw0REFBNEQsd0JBQXdCLHdCQUF3QixxQ0FBcUMsc0JBQXNCLHdCQUF3Qiw0REFBNEQsMkJBQTJCLHdCQUF3QixxQ0FBcUMsa0JBQWtCLHdCQUF3QixjQUFjLDRCQUE0QixvQ0FBb0MscUJBQXFCLDZCQUE2QiwwQ0FBMEMscUJBQXFCLDZCQUE2QiwyREFBMkQsMEJBQTBCLDZCQUE2QixxQ0FBcUMsb0JBQW9CLDZCQUE2QixxQ0FBcUMsc0JBQXNCLDZCQUE2Qiw0REFBNEQsMkJBQTJCLDZCQUE2QixxQ0FBcUMseUJBQXlCLDZCQUE2Qiw0REFBNEQsOEJBQThCLDZCQUE2QixxQ0FBcUMscUJBQXFCLDZCQUE2QixlQUFlLG1CQUFtQixnQkFBZ0Isb0JBQW9CLGVBQWUsMEJBQTBCLGVBQWUsa0NBQWtDLDBCQUEwQixpQkFBaUIsMkJBQTJCLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQixLQUFLLHNCQUFzQixrQkFBa0IseUVBQXlFLGlFQUFpRSxjQUFjLGNBQWMsZ0JBQWdCLHNCQUFzQixxQkFBcUIsd0JBQXdCLGdFQUFnRSx3REFBd0QsYUFBYSxzRUFBc0UsOERBQThELFFBQVEscUJBQXFCLHdCQUF3Qix5QkFBeUIsc0JBQXNCLG1CQUFtQiw2QkFBNkIsa0JBQWtCLHdCQUF3QixnQkFBZ0IsMkJBQTJCLDJCQUEyQixvQkFBb0IsZUFBZSxjQUFjLHVCQUF1QixvQkFBb0IsMkJBQTJCLGdCQUFnQixnQ0FBZ0MsaUNBQWlDLGtCQUFrQixtQkFBbUIsMkJBQTJCLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQixzQkFBc0IscUJBQXFCLGNBQWMsZUFBZSx3QkFBd0IscUJBQXFCLHVCQUF1QixpQ0FBaUMsa0JBQWtCLG1CQUFtQixrRUFBa0UsYUFBYSxrQkFBa0IsbUJBQW1CLGVBQWUsY0FBYyxvRkFBb0YsYUFBYSxZQUFZLDJDQUEyQyxnQ0FBZ0MscUJBQXFCLDJDQUEyQyxvQkFBb0IsaUNBQWlDLHFDQUFxQyxnQ0FBZ0MsaUNBQWlDLGlDQUFpQyxxQkFBcUIsY0FBYyxpQ0FBaUMscUJBQXFCLGNBQWMsMkRBQTJELHFEQUFxRCw2Q0FBNkMsaUNBQWlDLHFCQUFxQixjQUFjLGdCQUFnQiw2QkFBNkIseUJBQXlCLGNBQWMsMEJBQTBCLGtHQUFrRyx5QkFBeUIsY0FBYyxpREFBaUQseUJBQXlCLGNBQWMsMEJBQTBCLDZCQUE2Qix5QkFBeUIsd0JBQXdCLGdCQUFnQixpQkFBaUIsc0JBQXNCLHlCQUF5QixjQUFjLG1EQUFtRCx5QkFBeUIseUJBQXlCLGNBQWMsbURBQW1ELHlCQUF5QixjQUFjLDZFQUE2RSxvREFBb0QsNENBQTRDLG1EQUFtRCx5QkFBeUIseUJBQXlCLGNBQWMsMkJBQTJCLHNCQUFzQix5QkFBeUIsd0JBQXdCLGdCQUFnQiw2QkFBNkIseUJBQXlCLFdBQVcsbUNBQW1DLHNCQUFzQix1Q0FBdUMseUJBQXlCLHlCQUF5Qix3QkFBd0IsZ0JBQWdCLFdBQVcsa0NBQWtDLCtEQUErRCw2QkFBNkIsNkJBQTZCLGtCQUFrQixXQUFXLHNFQUFzRSxzQkFBc0Isa0JBQWtCLGNBQWMsOENBQThDLHlEQUF5RCx1Q0FBdUMsNkJBQTZCLGtCQUFrQix3QkFBd0IsZ0JBQWdCLFdBQVcseUNBQXlDLDZCQUE2QixxQkFBcUIsY0FBYyw4RkFBOEYseUJBQXlCLFdBQVcsbURBQW1ELDZCQUE2QixxQkFBcUIsd0JBQXdCLGdCQUFnQixjQUFjLGlCQUFpQix5QkFBeUIseUJBQXlCLFdBQVcsbURBQW1ELHlCQUF5Qix5QkFBeUIsV0FBVyxtREFBbUQseUJBQXlCLFdBQVcsNkVBQTZFLGtEQUFrRCwwQ0FBMEMsbURBQW1ELHNCQUFzQix5QkFBeUIsV0FBVywyQkFBMkIseUJBQXlCLHlCQUF5Qix3QkFBd0IsZ0JBQWdCLDZCQUE2QixzQkFBc0IsY0FBYyxtQ0FBbUMseUJBQXlCLHVDQUF1QyxzQkFBc0IseUJBQXlCLHdCQUF3QixnQkFBZ0IsY0FBYyxrQ0FBa0MseURBQXlELDZCQUE2Qiw2QkFBNkIscUJBQXFCLGNBQWMsc0VBQXNFLHlCQUF5QixxQkFBcUIsV0FBVyw4Q0FBOEMsK0RBQStELHVDQUF1Qyw2QkFBNkIscUJBQXFCLHdCQUF3QixnQkFBZ0IsY0FBYyx5Q0FBeUMsNkJBQTZCLGtCQUFrQixXQUFXLDhGQUE4RixzQkFBc0IsY0FBYyxtREFBbUQsNkJBQTZCLGtCQUFrQix3QkFBd0IsZ0JBQWdCLFdBQVcsaUJBQWlCLHlCQUF5Qix5QkFBeUIsY0FBYyxtREFBbUQsc0JBQXNCLHlCQUF5QixjQUFjLG1EQUFtRCx5QkFBeUIsY0FBYyw2RUFBNkUsbURBQW1ELDJDQUEyQyxtREFBbUQseUJBQXlCLHlCQUF5QixjQUFjLDJCQUEyQix5QkFBeUIseUJBQXlCLHdCQUF3QixnQkFBZ0IsNkJBQTZCLHlCQUF5QixjQUFjLG1DQUFtQyx5QkFBeUIsdUNBQXVDLHlCQUF5Qix5QkFBeUIsd0JBQXdCLGdCQUFnQixjQUFjLGtDQUFrQywrREFBK0QsNkJBQTZCLDZCQUE2QixxQkFBcUIsY0FBYyxzRUFBc0UseUJBQXlCLHFCQUFxQixjQUFjLDhDQUE4QywrREFBK0QsdUNBQXVDLDZCQUE2QixxQkFBcUIsd0JBQXdCLGdCQUFnQixjQUFjLHlDQUF5Qyw2QkFBNkIscUJBQXFCLGNBQWMsOEZBQThGLHlCQUF5QixjQUFjLG1EQUFtRCw2QkFBNkIscUJBQXFCLHdCQUF3QixnQkFBZ0IsY0FBYyxnQkFBZ0IseUJBQXlCLHlCQUF5QixjQUFjLGlEQUFpRCx5QkFBeUIseUJBQXlCLGNBQWMsaURBQWlELHlCQUF5QixjQUFjLDJFQUEyRSxtREFBbUQsMkNBQTJDLGlEQUFpRCx5QkFBeUIseUJBQXlCLGNBQWMsMEJBQTBCLHlCQUF5Qix5QkFBeUIsd0JBQXdCLGdCQUFnQiw0QkFBNEIseUJBQXlCLGNBQWMsa0NBQWtDLHlCQUF5QixzQ0FBc0MseUJBQXlCLHlCQUF5Qix3QkFBd0IsZ0JBQWdCLGNBQWMsaUNBQWlDLCtEQUErRCw0QkFBNEIsNkJBQTZCLHFCQUFxQixjQUFjLG9FQUFvRSx5QkFBeUIscUJBQXFCLGNBQWMsNkNBQTZDLCtEQUErRCxzQ0FBc0MsNkJBQTZCLHFCQUFxQix3QkFBd0IsZ0JBQWdCLGNBQWMsd0NBQXdDLDZCQUE2QixxQkFBcUIsY0FBYyw0RkFBNEYseUJBQXlCLGNBQWMsa0RBQWtELDZCQUE2QixxQkFBcUIsd0JBQXdCLGdCQUFnQixjQUFjLG1CQUFtQix5QkFBeUIseUJBQXlCLFdBQVcsdURBQXVELHlCQUF5Qix5QkFBeUIsV0FBVyx1REFBdUQseUJBQXlCLFdBQVcsaUZBQWlGLG9EQUFvRCw0Q0FBNEMsdURBQXVELHlCQUF5Qix5QkFBeUIsV0FBVyw2QkFBNkIseUJBQXlCLHlCQUF5Qix3QkFBd0IsZ0JBQWdCLCtCQUErQixzQkFBc0IsY0FBYyxxQ0FBcUMseUJBQXlCLHlDQUF5QyxzQkFBc0IseUJBQXlCLHdCQUF3QixnQkFBZ0IsY0FBYyxvQ0FBb0MseURBQXlELCtCQUErQiw2QkFBNkIscUJBQXFCLGNBQWMsMEVBQTBFLHlCQUF5QixxQkFBcUIsV0FBVyxnREFBZ0QsK0RBQStELHlDQUF5Qyw2QkFBNkIscUJBQXFCLHdCQUF3QixnQkFBZ0IsY0FBYywyQ0FBMkMsNkJBQTZCLGtCQUFrQixXQUFXLGtHQUFrRyxzQkFBc0IsY0FBYyxxREFBcUQsNkJBQTZCLGtCQUFrQix3QkFBd0IsZ0JBQWdCLFdBQVcsZ0JBQWdCLHlCQUF5Qix5QkFBeUIsV0FBVyxpREFBaUQseUJBQXlCLHlCQUF5QixXQUFXLGlEQUFpRCx5QkFBeUIsV0FBVywyRUFBMkUscURBQXFELDZDQUE2QyxpREFBaUQseUJBQXlCLHlCQUF5QixXQUFXLDBCQUEwQix5QkFBeUIseUJBQXlCLHdCQUF3QixnQkFBZ0IsNEJBQTRCLHNCQUFzQixjQUFjLGtDQUFrQyx5QkFBeUIsc0NBQXNDLHNCQUFzQix5QkFBeUIsd0JBQXdCLGdCQUFnQixjQUFjLGlDQUFpQyx5REFBeUQsNEJBQTRCLDZCQUE2QixxQkFBcUIsY0FBYyxvRUFBb0UseUJBQXlCLHFCQUFxQixXQUFXLDZDQUE2QywrREFBK0Qsc0NBQXNDLDZCQUE2QixxQkFBcUIsd0JBQXdCLGdCQUFnQixjQUFjLHdDQUF3Qyw2QkFBNkIsa0JBQWtCLFdBQVcsNEZBQTRGLHNCQUFzQixjQUFjLGtEQUFrRCw2QkFBNkIsa0JBQWtCLHdCQUF3QixnQkFBZ0IsV0FBVyxnQkFBZ0IseUJBQXlCLHlCQUF5QixXQUFXLGlEQUFpRCx5QkFBeUIseUJBQXlCLFdBQVcsaURBQWlELHlCQUF5QixXQUFXLDJFQUEyRSxxREFBcUQsNkNBQTZDLGlEQUFpRCx5QkFBeUIseUJBQXlCLFdBQVcsMEJBQTBCLHlCQUF5Qix5QkFBeUIsd0JBQXdCLGdCQUFnQiw0QkFBNEIsc0JBQXNCLGNBQWMsa0NBQWtDLHlCQUF5QixzQ0FBc0Msc0JBQXNCLHlCQUF5Qix3QkFBd0IsZ0JBQWdCLGNBQWMsaUNBQWlDLHlEQUF5RCw0QkFBNEIsNkJBQTZCLHFCQUFxQixjQUFjLG9FQUFvRSx5QkFBeUIscUJBQXFCLFdBQVcsNkNBQTZDLCtEQUErRCxzQ0FBc0MsNkJBQTZCLHFCQUFxQix3QkFBd0IsZ0JBQWdCLGNBQWMsd0NBQXdDLDZCQUE2QixrQkFBa0IsV0FBVyw0RkFBNEYsc0JBQXNCLGNBQWMsa0RBQWtELDZCQUE2QixrQkFBa0Isd0JBQXdCLGdCQUFnQixXQUFXLG1CQUFtQix5QkFBeUIseUJBQXlCLFdBQVcsdURBQXVELHlCQUF5Qix5QkFBeUIsV0FBVyx1REFBdUQseUJBQXlCLFdBQVcsaUZBQWlGLG9EQUFvRCw0Q0FBNEMsdURBQXVELHlCQUF5Qix5QkFBeUIsV0FBVyw2QkFBNkIseUJBQXlCLHlCQUF5Qix3QkFBd0IsZ0JBQWdCLCtCQUErQixzQkFBc0IsY0FBYyxxQ0FBcUMseUJBQXlCLHlDQUF5QyxzQkFBc0IseUJBQXlCLHdCQUF3QixnQkFBZ0IsY0FBYyxvQ0FBb0MseURBQXlELCtCQUErQiw2QkFBNkIscUJBQXFCLGNBQWMsMEVBQTBFLHlCQUF5QixxQkFBcUIsV0FBVyxnREFBZ0QsK0RBQStELHlDQUF5Qyw2QkFBNkIscUJBQXFCLHdCQUF3QixnQkFBZ0IsY0FBYywyQ0FBMkMsNkJBQTZCLGtCQUFrQixXQUFXLGtHQUFrRyxzQkFBc0IsY0FBYyxxREFBcUQsNkJBQTZCLGtCQUFrQix3QkFBd0IsZ0JBQWdCLFdBQVcsbUJBQW1CLHlCQUF5Qix5QkFBeUIscUJBQXFCLHVEQUF1RCx5QkFBeUIseUJBQXlCLHFCQUFxQix1REFBdUQseUJBQXlCLHFCQUFxQixpRkFBaUYscURBQXFELDZDQUE2Qyx1REFBdUQseUJBQXlCLHlCQUF5QixxQkFBcUIsNkJBQTZCLHlCQUF5Qix5QkFBeUIsd0JBQXdCLGdCQUFnQiwrQkFBK0IsY0FBYyxvRUFBb0UsZ0NBQWdDLHlDQUF5QyxnQ0FBZ0MseUJBQXlCLHdCQUF3QixnQkFBZ0IsY0FBYyxvQ0FBb0MsNkVBQTZFLCtCQUErQiw2QkFBNkIscUJBQXFCLGNBQWMsMEVBQTBFLHlCQUF5QixxQkFBcUIscUJBQXFCLGdEQUFnRCwrREFBK0QseUNBQXlDLDZCQUE2QixxQkFBcUIsd0JBQXdCLGdCQUFnQixjQUFjLDJDQUEyQyw2QkFBNkIsNEJBQTRCLHFCQUFxQixrR0FBa0csZ0NBQWdDLGNBQWMscURBQXFELDZCQUE2Qiw0QkFBNEIsd0JBQXdCLGdCQUFnQixxQkFBcUIsa0JBQWtCLHlCQUF5Qix5QkFBeUIsV0FBVyxxREFBcUQseUJBQXlCLHlCQUF5QixXQUFXLHFEQUFxRCx5QkFBeUIsV0FBVywrRUFBK0Usb0RBQW9ELDRDQUE0QyxxREFBcUQseUJBQXlCLHlCQUF5QixXQUFXLDRCQUE0Qix5QkFBeUIseUJBQXlCLHdCQUF3QixnQkFBZ0IsOEJBQThCLHNCQUFzQixjQUFjLG9DQUFvQyx5QkFBeUIsd0NBQXdDLHNCQUFzQix5QkFBeUIsd0JBQXdCLGdCQUFnQixjQUFjLG1DQUFtQyx5REFBeUQsOEJBQThCLDZCQUE2QixxQkFBcUIsY0FBYyx3RUFBd0UseUJBQXlCLHFCQUFxQixXQUFXLCtDQUErQywrREFBK0Qsd0NBQXdDLDZCQUE2QixxQkFBcUIsd0JBQXdCLGdCQUFnQixjQUFjLDBDQUEwQyw2QkFBNkIsa0JBQWtCLFdBQVcsZ0dBQWdHLHNCQUFzQixjQUFjLG9EQUFvRCw2QkFBNkIsa0JBQWtCLHdCQUF3QixnQkFBZ0IsV0FBVyxpQkFBaUIsa0JBQWtCLGlCQUFpQixrQkFBa0Isa0JBQWtCLGlCQUFpQixpQkFBaUIsa0JBQWtCLHNCQUFzQixxQkFBcUIsd0JBQXdCLGdCQUFnQixXQUFXLHFCQUFxQixvQkFBb0Isb0JBQW9CLGFBQWEsV0FBVyxtQkFBbUIsNEJBQTRCLG9CQUFvQix5QkFBeUIsaURBQWlELHlDQUF5Qyx5QkFBeUIsdUJBQXVCLCtCQUErQiw2QkFBNkIsYUFBYSxjQUFjLFdBQVcsa0JBQWtCLFVBQVUsa0JBQWtCLHVCQUF1QixzQkFBc0IsNEJBQTRCLGtCQUFrQix5QkFBeUIscUJBQXFCLGNBQWMsd0JBQXdCLGdCQUFnQixvQkFBb0IsU0FBUyx5QkFBeUIsc0JBQXNCLG1CQUFtQixvQkFBb0Isb0JBQW9CLGFBQWEsbUJBQW1CLGVBQWUsdUJBQXVCLG9CQUFvQiwyQkFBMkIsaUJBQWlCLG9CQUFvQixrQ0FBa0MsbUJBQW1CLG9CQUFvQixxQkFBcUIsMEJBQTBCLG1CQUFtQiw4Q0FBOEMsNEJBQTRCLHlCQUF5Qiw2Q0FBNkMsNkJBQTZCLDBCQUEwQixrQkFBa0IsdUNBQXVDLGVBQWUseUVBQXlFLFVBQVUsMExBQTBMLFVBQVUsd05BQXdOLFVBQVUscUJBQXFCLHdCQUF3QixxQkFBcUIsdUJBQXVCLGtCQUFrQixxQkFBcUIsa0JBQWtCLHlCQUF5QixXQUFXLGNBQWMsa0JBQWtCLHFDQUFxQyxXQUFXLGdCQUFnQixZQUFZLG9CQUFvQixpQkFBaUIsa0JBQWtCLGVBQWUsWUFBWSxxQ0FBcUMseUJBQXlCLGlCQUFpQixZQUFZLHFDQUFxQyxxQkFBcUIsaUJBQWlCLFlBQVkscUNBQXFDLFdBQVcsaUJBQWlCLGNBQWMscUNBQXFDLFdBQVcsaUJBQWlCLGNBQWMsMEJBQTBCLHFCQUFxQixlQUFlLGlCQUFpQixzTkFBc04sa0JBQWtCLHdFQUF3RSxjQUFjLGdCQUFnQixrQkFBa0IsWUFBWSxjQUFjLG1CQUFtQiw4QkFBOEIsZUFBZSxZQUFZLGlCQUFpQixzQkFBc0IsOEJBQThCLG9CQUFvQixZQUFZLGdCQUFnQixzQkFBc0IsOEJBQThCLG9CQUFvQixZQUFZLGlCQUFpQixtQkFBbUIsWUFBWSxrQkFBa0Isc0JBQXNCLFlBQVksY0FBYyxrQkFBa0Isb0JBQW9CLHlCQUF5Qiw4QkFBOEIscUJBQXFCLFlBQVksMkJBQTJCLHdCQUF3QixnQkFBZ0IsZUFBZSxZQUFZLHdCQUF3QixlQUFlLHVCQUF1QixnQkFBZ0Isa0JBQWtCLHVCQUF1QixZQUFZLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixrQkFBa0Isa0NBQWtDLGVBQWUsaUNBQWlDLGtCQUFrQixvQkFBb0IscUJBQXFCLDJCQUEyQixrQkFBa0IsYUFBYSxpQ0FBaUMsZ0JBQWdCLHFCQUFxQixnQkFBZ0IsaUJBQWlCLDBCQUEwQixjQUFjLGVBQWUsV0FBVyxvQ0FBb0MseUJBQXlCLHFCQUFxQixtQkFBbUIsbUJBQW1CLGtCQUFrQixjQUFjLGdCQUFnQix3QkFBd0IseUJBQXlCLGdEQUFnRCxxQkFBcUIsY0FBYyxnREFBZ0QscUJBQXFCLGNBQWMsNEVBQTRFLHNCQUFzQixrQkFBa0IsaUJBQWlCLG1CQUFtQixrQkFBa0Isa0JBQWtCLGlCQUFpQixpQkFBaUIscUJBQXFCLHdCQUF3Qix5QkFBeUIsc0JBQXNCLG1CQUFtQiw2QkFBNkIsa0JBQWtCLHdCQUF3QixnQkFBZ0IsMkJBQTJCLDJCQUEyQixvQkFBb0IsZUFBZSxjQUFjLHVCQUF1QixvQkFBb0IsMkJBQTJCLGdCQUFnQiw4Q0FBOEMsa0JBQWtCLG1CQUFtQixzQkFBc0IscUJBQXFCLGNBQWMsb0RBQW9ELDRDQUE0QyxlQUFlLFdBQVcsd0lBQXdJLGFBQWEscUNBQXFDLG1CQUFtQixxREFBcUQsd0JBQXdCLHVFQUF1RSx3QkFBd0IsbURBQW1ELHdCQUF3Qiw2REFBNkQsd0JBQXdCLG9FQUFvRSxxQkFBcUIsd0lBQXdJLHFCQUFxQixxREFBcUQsNkNBQTZDLHFDQUFxQyx5QkFBeUIscUJBQXFCLHdCQUF3QixnQkFBZ0IsY0FBYyx5RUFBeUUsd0JBQXdCLDJGQUEyRix3QkFBd0IsdUVBQXVFLHdCQUF3QixpRkFBaUYsd0JBQXdCLDJDQUEyQyx1QkFBdUIscUNBQXFDLHdCQUF3QixnQkFBZ0IsbUNBQW1DLGtCQUFrQixnTkFBZ04sb0RBQW9ELDRDQUE0QyxtQ0FBbUMscUJBQXFCLGdOQUFnTixrREFBa0QsMENBQTBDLG1DQUFtQyxxQkFBcUIsZ05BQWdOLG1EQUFtRCwyQ0FBMkMsaUNBQWlDLHFCQUFxQix3TUFBd00sbURBQW1ELDJDQUEyQyx1Q0FBdUMscUJBQXFCLGdPQUFnTyxvREFBb0QsNENBQTRDLGlDQUFpQyxxQkFBcUIsd01BQXdNLHFEQUFxRCw2Q0FBNkMsaUNBQWlDLHFCQUFxQix3TUFBd00scURBQXFELDZDQUE2Qyx1Q0FBdUMscUJBQXFCLGdPQUFnTyxvREFBb0QsNENBQTRDLHVDQUF1QyxxQkFBcUIsZ09BQWdPLHFEQUFxRCw2Q0FBNkMscUNBQXFDLHFCQUFxQix3TkFBd04sb0RBQW9ELDRDQUE0QyxtQ0FBbUMsa0JBQWtCLGlCQUFpQixxQ0FBcUMsa0JBQWtCLG1DQUFtQyxpQkFBaUIsMkNBQTJDLGNBQWMsV0FBVyxxQ0FBcUMsZUFBZSxXQUFXLGlCQUFpQiw2QkFBNkIseUJBQXlCLHdCQUF3QixnQkFBZ0IsZUFBZSxnQkFBZ0IsVUFBVSxjQUFjLGVBQWUsZUFBZSxlQUFlLGdCQUFnQixzQkFBc0IsaUJBQWlCLGlCQUFpQixnQkFBZ0IsYUFBYSx5QkFBeUIsWUFBWSxpQkFBaUIsZUFBZSxxQkFBcUIsaUJBQWlCLGtCQUFrQiw2QkFBNkIsZUFBZSw2QkFBNkIsY0FBYyxxQ0FBcUMsY0FBYyxtQkFBbUIsY0FBYyxpQkFBaUIsUUFBUSxxQkFBcUIsZUFBZSxrQkFBa0IsbUJBQW1CLDBCQUEwQixjQUFjLGdDQUFnQyx5QkFBeUIsZUFBZSxhQUFhLGNBQWMsY0FBYyxZQUFZLG9CQUFvQixrQkFBa0IsaUNBQWlDLHlCQUF5QixnQ0FBZ0Msd0JBQXdCLFdBQVcsbUJBQW1CLGNBQWMsUUFBUSxVQUFVLGVBQWUscUJBQXFCLHdCQUF3Qix5QkFBeUIsc0JBQXNCLG1CQUFtQiw2QkFBNkIsa0JBQWtCLHdCQUF3QixnQkFBZ0IsMkJBQTJCLDJCQUEyQixvQkFBb0IsZUFBZSxjQUFjLHVCQUF1QixvQkFBb0IsMkJBQTJCLGdCQUFnQiw4Q0FBOEMsa0JBQWtCLG1CQUFtQixzQkFBc0IscUJBQXFCLGNBQWMsZUFBZSxjQUFjLGNBQWMsZUFBZSxhQUFhLDhGQUE4RixhQUFhLHlCQUF5QixtQkFBbUIsaUNBQWlDLHdCQUF3QiwwQ0FBMEMsd0JBQXdCLGdDQUFnQyx3QkFBd0IscUNBQXFDLHdCQUF3QiwrQ0FBK0MscUJBQXFCLDhGQUE4RixxQkFBcUIscURBQXFELDZDQUE2Qyx5QkFBeUIseUJBQXlCLHFCQUFxQix3QkFBd0IsZ0JBQWdCLGNBQWMsMkNBQTJDLHdCQUF3QixvREFBb0Qsd0JBQXdCLDBDQUEwQyx3QkFBd0IsK0NBQStDLHdCQUF3QiwyQkFBMkIsYUFBYSwrQkFBK0IscUJBQXFCLCtCQUErQixvQkFBb0IseUJBQXlCLGFBQWEsVUFBVSxnQ0FBZ0MsaUJBQWlCLG9CQUFvQixxQkFBcUIsd0JBQXdCLGtCQUFrQixrSUFBa0ksb0RBQW9ELDRDQUE0Qyx3QkFBd0IscUJBQXFCLGtJQUFrSSxrREFBa0QsMENBQTBDLHdCQUF3QixxQkFBcUIsa0lBQWtJLG1EQUFtRCwyQ0FBMkMsdUJBQXVCLHFCQUFxQiw4SEFBOEgsbURBQW1ELDJDQUEyQywwQkFBMEIscUJBQXFCLDBJQUEwSSxvREFBb0QsNENBQTRDLHVCQUF1QixxQkFBcUIsOEhBQThILHFEQUFxRCw2Q0FBNkMsdUJBQXVCLHFCQUFxQiw4SEFBOEgscURBQXFELDZDQUE2QywwQkFBMEIscUJBQXFCLDBJQUEwSSxvREFBb0QsNENBQTRDLDBCQUEwQixxQkFBcUIsMElBQTBJLHFEQUFxRCw2Q0FBNkMseUJBQXlCLHFCQUFxQixzSUFBc0ksb0RBQW9ELDRDQUE0QyxpQkFBaUIsa0JBQWtCLGlCQUFpQixrQkFBa0Isa0JBQWtCLGlCQUFpQixpQkFBaUIsMEJBQTBCLHFCQUFxQixpREFBaUQsV0FBVyx5QkFBeUIsaURBQWlELHlDQUF5Qyx5QkFBeUIsdUJBQXVCLCtCQUErQiw2QkFBNkIsYUFBYSxjQUFjLFdBQVcsa0JBQWtCLFVBQVUsYUFBYSxrQkFBa0IsYUFBYSxXQUFXLHVCQUF1QixlQUFlLGtDQUFrQyxpQkFBaUIsbUNBQW1DLGtCQUFrQixrQ0FBa0MsaUJBQWlCLE1BQU0sMkJBQTJCLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQiwwQkFBMEIsdUJBQXVCLG9CQUFvQixvQkFBb0Isb0JBQW9CLGFBQWEsdUJBQXVCLG9CQUFvQiwyQkFBMkIsa0JBQWtCLHlCQUF5QixzQkFBc0IseUJBQXlCLGNBQWMsbUVBQW1FLHlCQUF5Qix5QkFBeUIsY0FBYyxtRUFBbUUseUJBQXlCLGdEQUFnRCx3Q0FBd0MsY0FBYyxtRUFBbUUseUJBQXlCLHlCQUF5QixjQUFjLHlCQUF5Qix5QkFBeUIseUJBQXlCLFdBQVcsbUVBQW1FLHlCQUF5Qix5QkFBeUIsV0FBVyxtRUFBbUUseUJBQXlCLDhDQUE4QyxzQ0FBc0MsV0FBVyxtRUFBbUUsc0JBQXNCLHlCQUF5QixXQUFXLHlCQUF5Qix5QkFBeUIseUJBQXlCLGNBQWMsbUVBQW1FLHNCQUFzQix5QkFBeUIsY0FBYyxtRUFBbUUseUJBQXlCLCtDQUErQyx1Q0FBdUMsY0FBYyxtRUFBbUUseUJBQXlCLHlCQUF5QixjQUFjLHdCQUF3Qix5QkFBeUIseUJBQXlCLGNBQWMsaUVBQWlFLHlCQUF5Qix5QkFBeUIsY0FBYyxpRUFBaUUseUJBQXlCLCtDQUErQyx1Q0FBdUMsY0FBYyxpRUFBaUUseUJBQXlCLHlCQUF5QixjQUFjLDJCQUEyQix5QkFBeUIseUJBQXlCLFdBQVcsdUVBQXVFLHlCQUF5Qix5QkFBeUIsV0FBVyx1RUFBdUUseUJBQXlCLGdEQUFnRCx3Q0FBd0MsV0FBVyx1RUFBdUUseUJBQXlCLHlCQUF5QixXQUFXLHdCQUF3Qix5QkFBeUIseUJBQXlCLFdBQVcsaUVBQWlFLHlCQUF5Qix5QkFBeUIsV0FBVyxpRUFBaUUseUJBQXlCLGlEQUFpRCx5Q0FBeUMsV0FBVyxpRUFBaUUseUJBQXlCLHlCQUF5QixXQUFXLHdCQUF3Qix5QkFBeUIseUJBQXlCLFdBQVcsaUVBQWlFLHlCQUF5Qix5QkFBeUIsV0FBVyxpRUFBaUUseUJBQXlCLGlEQUFpRCx5Q0FBeUMsV0FBVyxpRUFBaUUseUJBQXlCLHlCQUF5QixXQUFXLDJCQUEyQix5QkFBeUIseUJBQXlCLFdBQVcsdUVBQXVFLHlCQUF5Qix5QkFBeUIsV0FBVyx1RUFBdUUseUJBQXlCLGdEQUFnRCx3Q0FBd0MsV0FBVyx1RUFBdUUseUJBQXlCLHlCQUF5QixXQUFXLDJCQUEyQix5QkFBeUIseUJBQXlCLHFCQUFxQix1RUFBdUUseUJBQXlCLHlCQUF5QixxQkFBcUIsdUVBQXVFLHlCQUF5QixpREFBaUQseUNBQXlDLHFCQUFxQix1RUFBdUUseUJBQXlCLHlCQUF5QixxQkFBcUIsMEJBQTBCLHlCQUF5Qix5QkFBeUIsV0FBVyxxRUFBcUUseUJBQXlCLHlCQUF5QixXQUFXLHFFQUFxRSx5QkFBeUIsZ0RBQWdELHdDQUF3QyxXQUFXLHFFQUFxRSx5QkFBeUIseUJBQXlCLFdBQVcsZUFBZSxpQkFBaUIsZ0JBQWdCLGtCQUFrQiwrQkFBK0IsZUFBZSxlQUFlLGlCQUFpQiw4QkFBOEIsZUFBZSx5QkFBeUIsNkJBQTZCLDBCQUEwQiwwQkFBMEIsNEJBQTRCLHlCQUF5QixrQ0FBa0Msa0JBQWtCLG1DQUFtQyxhQUFhLGtCQUFrQix3QkFBd0IscUJBQXFCLHVCQUF1QixlQUFlLHFCQUFxQixrQkFBa0IseUJBQXlCLG9EQUFvRCw0QkFBNEIsNkJBQTZCLDBCQUEwQixzQkFBc0IseUJBQXlCLFlBQVksZ0JBQWdCLDBCQUEwQix1QkFBdUIsMEJBQTBCLGFBQWEsWUFBWSw4QkFBOEIsZUFBZSx1Q0FBdUMsZUFBZSx3Q0FBd0MsZUFBZSx1Q0FBdUMsZUFBZSxrQ0FBa0MsMEJBQTBCLG1DQUFtQywwQkFBMEIsdUJBQXVCLHlCQUF5QiwwQkFBMEIsMEJBQTBCLDBCQUEwQiwyQkFBMkIsNEJBQTRCLGtCQUFrQixTQUFTLCtCQUErQixXQUFXLDhCQUE4QixtQkFBbUIsb0JBQW9CLFlBQVksZUFBZSxZQUFZLDBCQUEwQix1QkFBdUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsYUFBYSxlQUFlLHVCQUF1QixvQkFBb0IsMkJBQTJCLGdCQUFnQixrQkFBa0IsNEJBQTRCLHNCQUFzQixjQUFjLDZCQUE2QixxQkFBcUIsNkJBQTZCLHlCQUF5QixjQUFjLDhCQUE4QixxQkFBcUIsWUFBWSxhQUFhLE9BQU8sYUFBYSxrQkFBa0IsTUFBTSxZQUFZLHFCQUFxQixxQkFBcUIsd0JBQXdCLHlCQUF5QixzQkFBc0IsbUJBQW1CLDZCQUE2Qix3QkFBd0IsZ0JBQWdCLDJCQUEyQiwyQkFBMkIsb0JBQW9CLGVBQWUsY0FBYyx1QkFBdUIsb0JBQW9CLDJCQUEyQixnQkFBZ0IsZ0NBQWdDLGlDQUFpQyxrQkFBa0IsbUJBQW1CLHFCQUFxQixrQkFBa0IsY0FBYywrQkFBK0IsbUJBQW1CLHdKQUF3SixhQUFhLHlDQUF5QyxtQkFBbUIsVUFBVSx5QkFBeUIsY0FBYyxXQUFXLHFCQUFxQixtQkFBbUIsMkJBQTJCLGNBQWMsZUFBZSxnQkFBZ0IsZ0JBQWdCLHVCQUF1QixXQUFXLHlCQUF5QixzQkFBc0IsbUJBQW1CLG9CQUFvQixvQkFBb0IsYUFBYSxXQUFXLHdCQUF3QixxQkFBcUIsdUJBQXVCLGtCQUFrQixVQUFVLGVBQWUsZUFBZSxPQUFPLGNBQWMsY0FBYyxlQUFlLGdCQUFnQix3QkFBd0IsbUJBQW1CLGdCQUFnQixpQkFBaUIsaUJBQWlCLGtCQUFrQixnQkFBZ0IsaUJBQWlCLE1BQU0sY0FBYyxpQkFBaUIsa0JBQWtCLGVBQWUsV0FBVyxlQUFlLGNBQWMsZUFBZSxjQUFjLGNBQWMsY0FBYyxpQkFBaUIsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGlCQUFpQixjQUFjLGlCQUFpQixjQUFjLGdCQUFnQixjQUFjLHdCQUF3QixxQkFBcUIsa0JBQWtCLG9CQUFvQixvQkFBb0IsYUFBYSx1QkFBdUIsb0JBQW9CLDJCQUEyQiw0Q0FBNEMsa0JBQWtCLG1KQUFtSiw4QkFBOEIsMkJBQTJCLGdKQUFnSiwrQkFBK0IsNEJBQTRCLCtHQUErRyxnQkFBZ0IsaVJBQWlSLFVBQVUsa2lCQUFraUIsVUFBVSwwbUJBQTBtQixVQUFVLHVDQUF1QyxtQkFBbUIsb0JBQW9CLFlBQVksc0NBQXNDLHdCQUF3QixxQkFBcUIsdUJBQXVCLG1DQUFtQyxxQkFBcUIsa0JBQWtCLHlCQUF5QixnREFBZ0QsbUJBQW1CLG9CQUFvQixZQUFZLG9CQUFvQixjQUFjLGtCQUFrQixvQkFBb0Isb0JBQW9CLGFBQWEsdUJBQXVCLG9CQUFvQiwyQkFBMkIsMkJBQTJCLG9CQUFvQixjQUFjLDRDQUE0QyxnQkFBZ0Isb0JBQW9CLHVDQUF1QyxtQkFBbUIsb0JBQW9CLFlBQVksb0JBQW9CLGNBQWMsc0NBQXNDLHdCQUF3QixxQkFBcUIsdUJBQXVCLG1DQUFtQyxxQkFBcUIsa0JBQWtCLHlCQUF5Qix1Q0FBdUMsbUJBQW1CLGVBQWUsNEhBQTRILHFCQUFxQixrREFBa0Qsc0JBQXNCLHdEQUF3RCxnQkFBZ0IsMENBQTBDLHFCQUFxQixvQkFBb0Isb0JBQW9CLGNBQWMsb0JBQW9CLGtCQUFrQixvQ0FBb0MsYUFBYSxxQkFBcUIsMENBQTBDLGFBQWEsMEJBQTBCLGFBQWEsbUJBQW1CLG9CQUFvQixZQUFZLG9CQUFvQixjQUFjLG9CQUFvQixpQkFBaUIsc0JBQXNCLGlCQUFpQixtQkFBbUIsdUJBQXVCLG1CQUFtQix1QkFBdUIsa0JBQWtCLG1CQUFtQixzQkFBc0IsaUJBQWlCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLDBDQUEwQyxZQUFZLG9CQUFvQixvQkFBb0IsYUFBYSwwQkFBMEIsYUFBYSxtQkFBbUIsb0JBQW9CLFlBQVksb0JBQW9CLGNBQWMsbUJBQW1CLGdCQUFnQixtQkFBbUIsb0JBQW9CLGNBQWMsbUNBQW1DLG1CQUFtQixvQkFBb0IsWUFBWSxvQ0FBb0MscUJBQXFCLFNBQVMsZUFBZSxrQkFBa0IsZ0JBQWdCLHdCQUF3QixjQUFjLGNBQWMsb0JBQW9CLGtCQUFrQixNQUFNLGFBQWEsVUFBVSxxQ0FBcUMsY0FBYyx3Q0FBd0MsaUJBQWlCLHlDQUF5QyxrQkFBa0Isd0NBQXdDLGlCQUFpQiw2Q0FBNkMsT0FBTyw4Q0FBOEMsb0JBQW9CLHVDQUF1QyxRQUFRLHdDQUF3QyxxQkFBcUIsZ0xBQWdMLGNBQWMsNExBQTRMLGlCQUFpQixnTUFBZ00sa0JBQWtCLDRMQUE0TCxpQkFBaUIsNkRBQTZELGNBQWMsY0FBYyxvQkFBb0Isa0JBQWtCLE1BQU0sYUFBYSxVQUFVLHNFQUFzRSxvQkFBb0Isc0NBQXNDLE9BQU8sd0VBQXdFLHFCQUFxQix3Q0FBd0MsUUFBUSwwQkFBMEIsaURBQWlELHlDQUF5Qyx5QkFBeUIsdUJBQXVCLCtCQUErQiw2QkFBNkIsYUFBYSxjQUFjLFdBQVcsa0JBQWtCLFVBQVUsNEJBQTRCLGFBQWEsV0FBVyxtQ0FBbUMsaUJBQWlCLG9DQUFvQyxrQkFBa0IsbUNBQW1DLGlCQUFpQixNQUFNLHlCQUF5QixzQkFBc0IsbUJBQW1CLDJCQUEyQiwyQkFBMkIsb0JBQW9CLHdCQUF3QixxQkFBcUIsdUJBQXVCLGNBQWMsYUFBYSxlQUFlLFlBQVksV0FBVyxnQkFBZ0IsWUFBWSxXQUFXLGVBQWUsWUFBWSxXQUFXLE9BQU8sY0FBYyxrQkFBa0IsV0FBVyxjQUFjLFlBQVksV0FBVyxxSEFBcUgsU0FBUyxPQUFPLGtCQUFrQixRQUFRLE1BQU0sWUFBWSxXQUFXLGdDQUFnQyxpQkFBaUIsZUFBZSxnQkFBZ0IsZUFBZSxxQkFBcUIsZ0JBQWdCLG1CQUFtQixlQUFlLGdCQUFnQixnQkFBZ0IsWUFBWSxXQUFXLGdCQUFnQixZQUFZLFdBQVcsZ0JBQWdCLFlBQVksV0FBVyxnQkFBZ0IsWUFBWSxXQUFXLGdCQUFnQixZQUFZLFdBQVcsZ0JBQWdCLFlBQVksV0FBVyxrQkFBa0IsYUFBYSxZQUFZLGNBQWMseUJBQXlCLGtCQUFrQixzQ0FBc0Msa0JBQWtCLCtCQUErQixxQkFBcUIsNkJBQTZCLG1CQUFtQiwwQkFBMEIscUJBQXFCLG1CQUFtQixxQ0FBcUMsZ0JBQWdCLHVCQUF1Qix1QkFBdUIsc0JBQXNCLGtCQUFrQixXQUFXLFNBQVMsb0VBQW9FLG1CQUFtQix1QkFBdUIsc0JBQXNCLGNBQWMsdUJBQXVCLHlCQUF5QixXQUFXLHVCQUF1Qix5QkFBeUIsY0FBYyxzQkFBc0IseUJBQXlCLGNBQWMseUJBQXlCLHlCQUF5QixXQUFXLHNCQUFzQix5QkFBeUIsV0FBVyxzQkFBc0IseUJBQXlCLFdBQVcseUJBQXlCLHlCQUF5QixXQUFXLHlCQUF5Qix5QkFBeUIscUJBQXFCLHdCQUF3Qix5QkFBeUIsV0FBVyxVQUFVLHFCQUFxQix3QkFBd0IsWUFBWSx1QkFBdUIsY0FBYyxZQUFZLGdCQUFnQixVQUFVLFdBQVcsMkJBQTJCLHFCQUFxQixnQ0FBZ0MseUJBQXlCLGtDQUFrQyx5QkFBeUIsNkJBQTZCLHlCQUF5QixvQkFBb0IseUJBQXlCLFlBQVksMkNBQTJDLHNCQUFzQixzQ0FBc0Msc0JBQXNCLDZCQUE2QixzQkFBc0IsMkNBQTJDLHlCQUF5QixzQ0FBc0MseUJBQXlCLDZCQUE2Qix5QkFBeUIsMkNBQTJDLHlCQUF5QixzQ0FBc0MseUJBQXlCLDZCQUE2Qix5QkFBeUIsMENBQTBDLHlCQUF5QixxQ0FBcUMseUJBQXlCLDRCQUE0Qix5QkFBeUIsNkNBQTZDLHlCQUF5Qix3Q0FBd0MseUJBQXlCLCtCQUErQix5QkFBeUIsMENBQTBDLHlCQUF5QixxQ0FBcUMseUJBQXlCLDRCQUE0Qix5QkFBeUIsMENBQTBDLHlCQUF5QixxQ0FBcUMseUJBQXlCLDRCQUE0Qix5QkFBeUIsNkNBQTZDLHlCQUF5Qix3Q0FBd0MseUJBQXlCLCtCQUErQix5QkFBeUIsNkNBQTZDLHlCQUF5Qix3Q0FBd0MseUJBQXlCLCtCQUErQix5QkFBeUIsNENBQTRDLHlCQUF5Qix1Q0FBdUMseUJBQXlCLDhCQUE4Qix5QkFBeUIsbUJBQW1CLGNBQWMsb0JBQW9CLGVBQWUsbUJBQW1CLGNBQWMsT0FBTyxzQkFBc0IsY0FBYyxxQkFBcUIsb0JBQW9CLHlCQUF5QixxQkFBcUIsbUJBQW1CLG1CQUFtQixzQ0FBc0Msc0JBQXNCLGtCQUFrQixjQUFjLHNDQUFzQyx5QkFBeUIscUJBQXFCLFdBQVcsc0NBQXNDLHlCQUF5QixxQkFBcUIsY0FBYyxvQ0FBb0MseUJBQXlCLHFCQUFxQixjQUFjLDBDQUEwQyx5QkFBeUIscUJBQXFCLFdBQVcsb0NBQW9DLHlCQUF5QixxQkFBcUIsV0FBVyxvQ0FBb0MseUJBQXlCLHFCQUFxQixXQUFXLDBDQUEwQyx5QkFBeUIscUJBQXFCLFdBQVcsMENBQTBDLHlCQUF5QixxQkFBcUIscUJBQXFCLHdDQUF3Qyx5QkFBeUIscUJBQXFCLFdBQVcsd0NBQXdDLG1CQUFtQixTQUFTLDRDQUE0Qyx5QkFBeUIsV0FBVywwR0FBMEcsbUJBQW1CLFVBQVUsY0FBYyxnQkFBZ0Isc0JBQXNCLHlCQUF5QixXQUFXLHFEQUFxRCxtQkFBbUIsa0RBQWtELGtCQUFrQixtQkFBbUIsZ0NBQWdDLHFCQUFxQixjQUFjLGdDQUFnQyxxQkFBcUIsY0FBYyw0REFBNEQsc0JBQXNCLDRDQUE0QyxpQkFBaUIsd0VBQXdFLHdCQUF3QixvQkFBb0IsV0FBVyxxREFBcUQseUJBQXlCLGdFQUFnRSx5QkFBeUIsd0NBQXdDLG1CQUFtQiwyREFBMkQseUJBQXlCLE1BQU0seUJBQXlCLHNCQUFzQixtQkFBbUIsb0JBQW9CLG9CQUFvQixhQUFhLG1CQUFtQixlQUFlLHVCQUF1QixvQkFBb0IsMkJBQTJCLFdBQVcsb0JBQW9CLDRCQUE0QixtQkFBbUIsaUJBQWlCLHFCQUFxQix1QkFBdUIsbUJBQW1CLHNCQUFzQixlQUFlLHdDQUF3Qyw0QkFBNEIseUJBQXlCLHVDQUF1Qyw2QkFBNkIsMEJBQTBCLGtCQUFrQix3QkFBd0IscUJBQXFCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLG1CQUFtQixlQUFlLHFCQUFxQixrQkFBa0IseUJBQXlCLHNDQUFzQyxrQkFBa0IscUNBQXFDLGVBQWUsZUFBZSx5QkFBeUIsc0JBQXNCLG1CQUFtQix5QkFBeUIsa0JBQWtCLGNBQWMsMkJBQTJCLDJCQUEyQixvQkFBb0IsaUJBQWlCLFdBQVcsd0JBQXdCLHFCQUFxQix1QkFBdUIsZ0JBQWdCLG1CQUFtQixvQkFBb0IsbUJBQW1CLHVCQUF1QixrQkFBa0IscUJBQXFCLHdCQUF3QixzQkFBc0IsY0FBYyx3QkFBd0IseUJBQXlCLFdBQVcsd0JBQXdCLHlCQUF5QixjQUFjLHVCQUF1Qix5QkFBeUIsY0FBYywwQkFBMEIseUJBQXlCLFdBQVcsdUJBQXVCLHlCQUF5QixXQUFXLHVCQUF1Qix5QkFBeUIsV0FBVywwQkFBMEIseUJBQXlCLFdBQVcsMEJBQTBCLHlCQUF5QixxQkFBcUIseUJBQXlCLHlCQUF5QixXQUFXLHlCQUF5QixlQUFlLHdCQUF3QixrQkFBa0Isa0RBQWtELG9CQUFvQixxQkFBcUIsa0RBQWtELG9CQUFvQixxQkFBcUIsNENBQTRDLG9CQUFvQixxQkFBcUIseUJBQXlCLGdCQUFnQixVQUFVLGtCQUFrQixVQUFVLCtEQUErRCw4QkFBOEIsYUFBYSxjQUFjLFNBQVMsa0JBQWtCLFFBQVEsa0VBQWtFLDBEQUEwRCx1Q0FBdUMsK0JBQStCLGdDQUFnQyxXQUFXLFVBQVUsK0JBQStCLFdBQVcsVUFBVSw4REFBOEQseUJBQXlCLGdDQUFnQyx5QkFBeUIsMEJBQTBCLHVCQUF1QixZQUFZLDBCQUEwQixpQkFBaUIsc0JBQXNCLG1EQUFtRCxxQkFBcUIsa0RBQWtELG9CQUFvQiwyQkFBMkIsc0JBQXNCLE9BQU8sY0FBYyxlQUFlLGdCQUFnQixrQkFBa0IsY0FBYyxjQUFjLG9CQUFvQixrQkFBa0IsbUJBQW1CLGlDQUFpQyxtQkFBbUIsWUFBWSxlQUFlLFlBQVksaUJBQWlCLFlBQVksZUFBZSxZQUFZLGlCQUFpQixZQUFZLGtCQUFrQixZQUFZLGVBQWUsWUFBWSxpQkFBaUIsVUFBVSxjQUFjLGtCQUFrQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixjQUFjLGdCQUFnQixpQ0FBaUMsbUJBQW1CLGVBQWUsZUFBZSxlQUFlLGlCQUFpQixlQUFlLGVBQWUsZUFBZSxpQkFBaUIsZUFBZSxrQkFBa0IsZUFBZSxlQUFlLGVBQWUsaUJBQWlCLHdCQUF3QixxQkFBcUIsUUFBUSwyQkFBMkIseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLHFCQUFxQix3QkFBd0Isa0NBQWtDLFlBQVksdUJBQXVCLGVBQWUscUJBQXFCLG1CQUFtQixvQkFBb0IsWUFBWSxvQkFBb0IsY0FBYyxZQUFZLFlBQVksZ0JBQWdCLGVBQWUsZ0JBQWdCLGVBQWUsYUFBYSxrQkFBa0IsbUJBQW1CLFdBQVcsNkJBQTZCLHNCQUFzQixhQUFhLGNBQWMsU0FBUyxrQkFBa0IsUUFBUSxrRUFBa0UsMERBQTBELHVDQUF1QywrQkFBK0IsZUFBZSxXQUFXLFVBQVUsY0FBYyxXQUFXLFVBQVUsNEJBQTRCLGtDQUFrQyxlQUFlLGtDQUFrQyxpQkFBaUIsWUFBWSxnQkFBZ0IsZUFBZSxnQkFBZ0IsZUFBZSxXQUFXLGtCQUFrQixZQUFZLGdCQUFnQixlQUFlLGdCQUFnQixlQUFlLFdBQVcsaUJBQWlCLFlBQVksZ0JBQWdCLGVBQWUsZ0JBQWdCLGVBQWUsV0FBVyxTQUFTLGNBQWMsZUFBZSxtQkFBbUIsa0JBQWtCLHlCQUF5QixXQUFXLGdCQUFnQixlQUFlLGdCQUFnQixVQUFVLDRCQUE0QixxQkFBcUIsZUFBZSxjQUFjLGVBQWUsUUFBUSxpREFBaUQseUNBQXlDLHlCQUF5Qix1QkFBdUIsK0JBQStCLDZCQUE2QixhQUFhLGNBQWMsV0FBVyxrQkFBa0IsVUFBVSxRQUFRLHlCQUF5QixzQkFBc0IsbUJBQW1CLHlCQUF5Qix1QkFBdUIsMkJBQTJCLDJCQUEyQixvQkFBb0Isa0JBQWtCLFdBQVcsd0JBQXdCLHFCQUFxQix1QkFBdUIsb0JBQW9CLGdCQUFnQixxQkFBcUIsa0JBQWtCLG1CQUFtQixZQUFZLDJCQUEyQix5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsMEJBQTBCLHVCQUF1QixvQkFBb0Isb0JBQW9CLG9CQUFvQixhQUFhLGVBQWUsZ0JBQWdCLGdCQUFnQixtQkFBbUIsNkJBQTZCLHFCQUFxQixjQUFjLHlCQUF5QixzQkFBc0IsbUJBQW1CLGNBQWMsb0JBQW9CLG9CQUFvQixhQUFhLHdCQUF3QixxQkFBcUIsdUJBQXVCLG1CQUFtQixvQkFBb0IsY0FBYyxlQUFlLHlCQUF5QixzQkFBc0IsbUJBQW1CLG9CQUFvQixvQkFBb0IsYUFBYSw2QkFBNkIsZUFBZSwyQkFBMkIsY0FBYyxlQUFlLG9CQUFvQix5QkFBeUIsY0FBYyxjQUFjLDhCQUE4Qix5QkFBeUIsc0JBQXNCLG1CQUFtQixvQkFBb0Isb0JBQW9CLGFBQWEsbUJBQW1CLG9CQUFvQixZQUFZLG9CQUFvQixjQUFjLHVCQUF1QixvQkFBb0IsMkJBQTJCLDhCQUE4QixrQkFBa0IsNkJBQTZCLGlCQUFpQixzREFBc0Qsd0JBQXdCLHFCQUFxQix1QkFBdUIsZ0RBQWdELHFCQUFxQixrQkFBa0IseUJBQXlCLHFCQUFxQixpQkFBaUIsc0JBQXNCLGtCQUFrQixxQkFBcUIsaUJBQWlCLDZDQUE2QyxtQkFBbUIsOENBQThDLG1CQUFtQiwyQ0FBMkMsaUJBQWlCLGdEQUFnRCxtQkFBbUIsTUFBTSxzQkFBc0IseUVBQXlFLGlFQUFpRSxjQUFjLGVBQWUsa0JBQWtCLGFBQWEsMEJBQTBCLHVCQUF1QixvQkFBb0IsOENBQThDLHNDQUFzQyxnQ0FBZ0Msb0JBQW9CLG9CQUFvQixhQUFhLG1CQUFtQix5QkFBeUIsc0JBQXNCLG1CQUFtQixjQUFjLG1CQUFtQixvQkFBb0IsWUFBWSxnQkFBZ0IsZUFBZSxpREFBaUQsd0JBQXdCLHFCQUFxQix1QkFBdUIsa0JBQWtCLHlCQUF5QixzQkFBc0IsbUJBQW1CLGVBQWUsb0JBQW9CLG9CQUFvQixhQUFhLGVBQWUsWUFBWSxjQUFjLGtCQUFrQixjQUFjLGVBQWUsYUFBYSw2QkFBNkIsMEJBQTBCLHVCQUF1QixvQkFBb0IsK0JBQStCLG9CQUFvQixvQkFBb0IsYUFBYSxrQkFBa0IseUJBQXlCLHNCQUFzQixtQkFBbUIsMEJBQTBCLGFBQWEsbUJBQW1CLG9CQUFvQixZQUFZLG9CQUFvQixjQUFjLHdCQUF3QixxQkFBcUIsdUJBQXVCLGVBQWUsbUNBQW1DLCtCQUErQiw4QkFBOEIscUJBQXFCLFVBQVUsMkJBQTJCLDJCQUEyQixvQkFBb0Isa0JBQWtCLG1CQUFtQiwrRUFBK0UsY0FBYyxrQ0FBa0MsVUFBVSxRQUFRLCtCQUErQixZQUFZLG1CQUFtQixrQkFBa0IsU0FBUyxlQUFlLGFBQWEsT0FBTyxnQkFBZ0IsZ0JBQWdCLGtCQUFrQixTQUFTLFdBQVcsa0JBQWtCLHNCQUFzQixrQkFBa0IseUVBQXlFLGlFQUFpRSxxQkFBcUIsa0JBQWtCLGVBQWUsY0FBYyxjQUFjLGtCQUFrQixnQkFBZ0IscUJBQXFCLGtCQUFrQixnQkFBZ0IsbUJBQW1CLG1CQUFtQixzQkFBc0IseUJBQXlCLGNBQWMsMEJBQTBCLHlCQUF5QixXQUFXLGtCQUFrQix5QkFBeUIsWUFBWSxjQUFjLFdBQVcsZUFBZSxPQUFPLHlCQUF5QixzQkFBc0IsbUJBQW1CLHlCQUF5QixzQkFBc0IsOEJBQThCLHdCQUF3QixxQkFBcUIsWUFBWSxrQkFBa0IsV0FBVyxxQkFBcUIsbUJBQW1CLDRFQUE0RSxvQkFBb0Isb0JBQW9CLGFBQWEsMENBQTBDLGFBQWEsNkJBQTZCLG9CQUFvQiw4Q0FBOEMsZ0JBQWdCLDZDQUE2QyxtQkFBbUIsb0JBQW9CLFlBQVksMENBQTBDLE9BQU8sb0JBQW9CLG9CQUFvQixhQUFhLG1DQUFtQyxtQkFBbUIsb0JBQW9CLGFBQWEsWUFBWSx5QkFBeUIsc0JBQXNCLG1CQUFtQixvQkFBb0Isb0JBQW9CLGFBQWEsNkJBQTZCLGdCQUFnQixtQkFBbUIsb0JBQW9CLFlBQVksb0JBQW9CLGNBQWMsd0JBQXdCLHFCQUFxQix1QkFBdUIseUNBQXlDLGdCQUFnQixvQ0FBb0MsNkJBQTZCLHNCQUFzQix5QkFBeUIsNkJBQTZCLGdCQUFnQixtQkFBbUIsb0JBQW9CLFlBQVksb0JBQW9CLGNBQWMseUVBQXlFLG1CQUFtQixvQkFBb0IsWUFBWSwwQ0FBMEMsbUZBQW1GLHFCQUFxQixZQUFZLHlCQUF5QixzQkFBc0IsbUJBQW1CLHVCQUF1QixvQkFBb0IsMkJBQTJCLG9DQUFvQyx5QkFBeUIsbUJBQW1CLDBDQUEwQyxZQUFZLG9CQUFvQixvQkFBb0IsY0FBYyxhQUFhLHlCQUF5QixzQkFBc0IsbUJBQW1CLHFCQUFxQixrQkFBa0IseUJBQXlCLDBDQUEwQyxhQUFhLG9CQUFvQixvQkFBb0IsY0FBYyxPQUFPLHdCQUF3QixxQkFBcUIsdUJBQXVCLG9CQUFvQixvQkFBb0IsYUFBYSxnQkFBZ0IsaUNBQWlDLHFCQUFxQixjQUFjLHVDQUF1QyxvQkFBb0Isb0JBQW9CLGFBQWEsbUJBQW1CLGdGQUFnRixvQkFBb0IscUJBQXFCLGtCQUFrQiw0QkFBNEIsaUJBQWlCLGNBQWMsdUNBQXVDLGdCQUFnQixpQkFBaUIsdUJBQXVCLGtCQUFrQixtQkFBbUIseUJBQXlCLDZCQUE2QixnQkFBZ0IsbUJBQW1CLG9CQUFvQixZQUFZLG9CQUFvQixjQUFjLFlBQVksa0JBQWtCLGFBQWEsaUJBQWlCLGVBQWUsNkJBQTZCLGdCQUFnQixtQkFBbUIsb0JBQW9CLFlBQVksb0JBQW9CLGNBQWMsZ0JBQWdCLE1BQU0sZUFBZSxlQUFlLGlCQUFpQixnQkFBZ0Isa0JBQWtCLGVBQWUsaUJBQWlCLFdBQVcsaUJBQWlCLGFBQWEsa0JBQWtCLGNBQWMsY0FBYyxtQkFBbUIsbUJBQW1CLHlCQUF5QixjQUFjLHVCQUF1Qix5QkFBeUIsV0FBVyxpQkFBaUIsOEJBQThCLGFBQWEsbUJBQW1CLFlBQVksY0FBYyxnQkFBZ0Isb0JBQW9CLHlCQUF5Qiw4QkFBOEIsZUFBZSw2QkFBNkIsa0JBQWtCLFNBQVMseUJBQXlCLGtCQUFrQixlQUFlLDBCQUEwQixxQkFBcUIsZ0JBQWdCLG1CQUFtQixrQ0FBa0MsbUJBQW1CLDBCQUEwQixrQkFBa0IsaUJBQWlCLG1CQUFtQixrQkFBa0Isa0JBQWtCLGlCQUFpQixrQkFBa0Isc0JBQXNCLGtDQUFrQyxzQkFBc0IsY0FBYyxnQ0FBZ0Msa0JBQWtCLGNBQWMsa0JBQWtCLHlCQUF5QixrQ0FBa0MseUJBQXlCLFdBQVcsZ0NBQWdDLHFCQUFxQixjQUFjLGtCQUFrQix5QkFBeUIsa0NBQWtDLHlCQUF5QixjQUFjLGdDQUFnQyxxQkFBcUIsY0FBYyxpQkFBaUIseUJBQXlCLGlDQUFpQyx5QkFBeUIsY0FBYywrQkFBK0IscUJBQXFCLGNBQWMsb0JBQW9CLHlCQUF5QixvQ0FBb0MseUJBQXlCLFdBQVcsa0NBQWtDLHFCQUFxQixjQUFjLGlCQUFpQix5QkFBeUIsaUNBQWlDLHlCQUF5QixXQUFXLCtCQUErQixxQkFBcUIsY0FBYyxpQkFBaUIseUJBQXlCLGlDQUFpQyx5QkFBeUIsV0FBVywrQkFBK0IscUJBQXFCLGNBQWMsb0JBQW9CLHlCQUF5QixvQ0FBb0MseUJBQXlCLFdBQVcsa0NBQWtDLHFCQUFxQixjQUFjLG9CQUFvQix5QkFBeUIsb0NBQW9DLHlCQUF5QixxQkFBcUIsa0NBQWtDLHFCQUFxQixjQUFjLG1CQUFtQix5QkFBeUIsbUNBQW1DLHlCQUF5QixXQUFXLGlDQUFpQyxxQkFBcUIsY0FBYyxnQkFBZ0IseUJBQXlCLHNCQUFzQixtQkFBbUIseUJBQXlCLDBCQUEwQixXQUFXLG9CQUFvQixvQkFBb0IsYUFBYSx5QkFBeUIsc0JBQXNCLDhCQUE4QixpQkFBaUIsbUJBQW1CLGtCQUFrQix3QkFBd0IsbUJBQW1CLG9CQUFvQixZQUFZLG9CQUFvQixjQUFjLGtCQUFrQiw4QkFBOEIseUJBQXlCLDBCQUEwQixnQkFBZ0IsY0FBYyx5QkFBeUIsa0JBQWtCLGNBQWMsbUJBQW1CLHFDQUFxQyxzQkFBc0IsdUJBQXVCLDZCQUE2QixPQUFPLFNBQVMsT0FBTyxrQkFBa0IsUUFBUSxNQUFNLHlCQUF5QixzQkFBc0IsbUJBQW1CLGFBQWEsd0JBQXdCLHFCQUFxQix1QkFBdUIsZ0JBQWdCLGVBQWUsV0FBVyxpQkFBaUIsb0JBQW9CLG9CQUFvQixhQUFhLGtCQUFrQixTQUFTLE9BQU8sa0JBQWtCLFFBQVEsTUFBTSxtQ0FBbUMsMkJBQTJCLGNBQWMsK0JBQStCLGNBQWMsa0JBQWtCLFdBQVcsMENBQTBDLDJCQUEyQixjQUFjLDhCQUE4QixhQUFhLGFBQWEsMkJBQTJCLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQixxQkFBcUIsd0JBQXdCLGtDQUFrQyxZQUFZLHVCQUF1QixlQUFlLHFCQUFxQixtQkFBbUIsb0JBQW9CLFlBQVksb0JBQW9CLGNBQWMsWUFBWSxZQUFZLGdCQUFnQixlQUFlLGdCQUFnQixlQUFlLGFBQWEsa0JBQWtCLG1CQUFtQixXQUFXLGdCQUFnQixZQUFZLGVBQWUsV0FBVyxTQUFTLFdBQVcsdUNBQXVDLHNCQUFzQixhQUFhLGNBQWMsU0FBUyxrQkFBa0IsUUFBUSxrRUFBa0UsMERBQTBELHVDQUF1QywrQkFBK0Isb0JBQW9CLFdBQVcsVUFBVSxtQkFBbUIsV0FBVyxVQUFVLHNDQUFzQyxrQ0FBa0Msb0JBQW9CLGtDQUFrQyxzQkFBc0IsWUFBWSxnQkFBZ0IsZUFBZSxnQkFBZ0IsZUFBZSxXQUFXLHVCQUF1QixZQUFZLGdCQUFnQixlQUFlLGdCQUFnQixlQUFlLFdBQVcsc0JBQXNCLFlBQVksZ0JBQWdCLGVBQWUsZ0JBQWdCLGVBQWUsV0FBVyxZQUFZLDRCQUE0Qiw2QkFBNkIsMEJBQTBCLHNCQUFzQiw4QkFBOEIsZ0JBQWdCLDhDQUE4QyxvQkFBb0Isb0JBQW9CLGFBQWEsa0NBQWtDLHlCQUF5QixzQkFBc0IsbUJBQW1CLHlCQUF5QixvQkFBb0IsY0FBYyx1QkFBdUIsb0JBQW9CLDJCQUEyQixhQUFhLGtCQUFrQixpQkFBaUIsZ0NBQWdDLDJCQUEyQiw0QkFBNEIsa0JBQWtCLGNBQWMsbUJBQW1CLG9CQUFvQixZQUFZLG9CQUFvQixjQUFjLGlCQUFpQixjQUFjLGlCQUFpQiw4QkFBOEIsK0JBQStCLDZCQUE2QiwwQ0FBMEMsa0JBQWtCLGlCQUFpQixpQ0FBaUMsc0JBQXNCLG1CQUFtQixvQkFBb0IsWUFBWSxvQkFBb0IsY0FBYyxjQUFjLGFBQWEsUUFBUSxzQkFBc0IsbUJBQW1CLGtCQUFrQixpQkFBaUIsc0JBQXNCLGNBQWMsd0ZBQXdGLGNBQWMsa05BQWtOLHlCQUF5QixjQUFjLGtEQUFrRCxxQkFBcUIscUNBQXFDLDRLQUE0SyxjQUFjLDRaQUE0Wix5QkFBeUIsY0FBYyxrR0FBa0cscUJBQXFCLGdJQUFnSSx5QkFBeUIsY0FBYywwREFBMEQsc0JBQXNCLGVBQWUsaUJBQWlCLHlCQUF5QixXQUFXLHdGQUF3RixXQUFXLGtOQUFrTixzQkFBc0IsV0FBVyxrREFBa0Qsa0JBQWtCLHFDQUFxQyw0S0FBNEssV0FBVyw0WkFBNFosc0JBQXNCLFdBQVcsa0dBQWtHLGtCQUFrQixnSUFBZ0ksc0JBQXNCLFdBQVcsMERBQTBELHlCQUF5QixZQUFZLGlCQUFpQix5QkFBeUIsY0FBYyx3RkFBd0YsY0FBYyxrTkFBa04seUJBQXlCLGNBQWMsa0RBQWtELHFCQUFxQixxQ0FBcUMsNEtBQTRLLGNBQWMsNFpBQTRaLHlCQUF5QixjQUFjLGtHQUFrRyxxQkFBcUIsZ0lBQWdJLHlCQUF5QixjQUFjLDBEQUEwRCx5QkFBeUIsZUFBZSxnQkFBZ0IseUJBQXlCLGNBQWMsc0ZBQXNGLGNBQWMsOE1BQThNLHlCQUF5QixjQUFjLGlEQUFpRCxxQkFBcUIscUNBQXFDLHdLQUF3SyxjQUFjLG9aQUFvWix5QkFBeUIsY0FBYyxnR0FBZ0cscUJBQXFCLDhIQUE4SCx5QkFBeUIsY0FBYyx5REFBeUQseUJBQXlCLGVBQWUsbUJBQW1CLHlCQUF5QixXQUFXLDRGQUE0RixXQUFXLDBOQUEwTix5QkFBeUIsV0FBVyxvREFBb0Qsa0JBQWtCLHFDQUFxQyxvTEFBb0wsV0FBVyw0YUFBNGEseUJBQXlCLFdBQVcsc0dBQXNHLGtCQUFrQixvSUFBb0kseUJBQXlCLFdBQVcsNERBQTRELHlCQUF5QixZQUFZLGdCQUFnQix5QkFBeUIsV0FBVyxzRkFBc0YsV0FBVyw4TUFBOE0seUJBQXlCLFdBQVcsaURBQWlELGtCQUFrQixxQ0FBcUMsd0tBQXdLLFdBQVcsb1pBQW9aLHlCQUF5QixXQUFXLGdHQUFnRyxrQkFBa0IsOEhBQThILHlCQUF5QixXQUFXLHlEQUF5RCx5QkFBeUIsWUFBWSxnQkFBZ0IseUJBQXlCLFdBQVcsc0ZBQXNGLFdBQVcsOE1BQThNLHlCQUF5QixXQUFXLGlEQUFpRCxrQkFBa0IscUNBQXFDLHdLQUF3SyxXQUFXLG9aQUFvWix5QkFBeUIsV0FBVyxnR0FBZ0csa0JBQWtCLDhIQUE4SCx5QkFBeUIsV0FBVyx5REFBeUQseUJBQXlCLFlBQVksbUJBQW1CLHlCQUF5QixXQUFXLDRGQUE0RixXQUFXLDBOQUEwTix5QkFBeUIsV0FBVyxvREFBb0Qsa0JBQWtCLHFDQUFxQyxvTEFBb0wsV0FBVyw0YUFBNGEseUJBQXlCLFdBQVcsc0dBQXNHLGtCQUFrQixvSUFBb0kseUJBQXlCLFdBQVcsNERBQTRELHlCQUF5QixZQUFZLG1CQUFtQix5QkFBeUIsK0dBQStHLHFCQUFxQiwwTkFBME4seUJBQXlCLHFCQUFxQixvREFBb0QsNEJBQTRCLHFDQUFxQyxvTEFBb0wscUJBQXFCLDRhQUE0YSx5QkFBeUIscUJBQXFCLHNHQUFzRyw0QkFBNEIsb0lBQW9JLHlCQUF5QixxQkFBcUIsNERBQTRELHlCQUF5QixzQkFBc0Isa0JBQWtCLHlCQUF5QixXQUFXLDBGQUEwRixXQUFXLHNOQUFzTix5QkFBeUIsV0FBVyxtREFBbUQsa0JBQWtCLHFDQUFxQyxnTEFBZ0wsV0FBVyxvYUFBb2EseUJBQXlCLFdBQVcsb0dBQW9HLGtCQUFrQixrSUFBa0kseUJBQXlCLFdBQVcsMkRBQTJELHlCQUF5QixZQUFZLG1CQUFtQiwwQkFBMEIsdUJBQXVCLG9CQUFvQixvQkFBb0Isb0JBQW9CLGFBQWEsbUJBQW1CLFdBQVcsbUJBQW1CLDhDQUE4QyxzQ0FBc0MsNkNBQTZDLE9BQU8sZUFBZSxRQUFRLFdBQVcsd0JBQXdCLFNBQVMsbUNBQW1DLCtDQUErQyx1Q0FBdUMscUJBQXFCLE1BQU0sMEJBQTBCLG9CQUFvQiw2QkFBNkIsdUJBQXVCLDJCQUEyQiwwQkFBMEIsdUJBQXVCLG9CQUFvQixvQkFBb0Isb0JBQW9CLGFBQWEsb0JBQW9CLGNBQWMsbUJBQW1CLGFBQWEsaUNBQWlDLGdCQUFnQixnQkFBZ0Isa0JBQWtCLGVBQWUsZUFBZSxjQUFjLGVBQWUsa0JBQWtCLGNBQWMsaUJBQWlCLG9CQUFvQiw4QkFBOEIsY0FBYyxXQUFXLHFCQUFxQixrQkFBa0IsZ0NBQWdDLHdCQUF3QixpQ0FBaUMseUJBQXlCLHVFQUF1RSwrREFBK0QsdURBQXVELHlFQUF5RSw0Q0FBNEMsb0NBQW9DLFdBQVcsZ0NBQWdDLG9CQUFvQixpQ0FBaUMsb0JBQW9CLGlDQUFpQyxvQkFBb0IscUJBQXFCLGlDQUFpQywwQ0FBMEMsZ0RBQWdELHdDQUF3QywyQ0FBMkMsVUFBVSwyQ0FBMkMsa0RBQWtELDBDQUEwQyxhQUFhLGFBQWEsMEJBQTBCLGNBQWMsY0FBYyxnQkFBZ0IsbUJBQW1CLGtCQUFrQix3RkFBd0YseUJBQXlCLGNBQWMsYUFBYSxtQkFBbUIsb0JBQW9CLFlBQVksb0JBQW9CLGNBQWMsaUJBQWlCLG1CQUFtQiwwQkFBMEIsVUFBVSx5QkFBeUIsbUJBQW1CLG9CQUFvQixZQUFZLG9CQUFvQixjQUFjLG9CQUFvQixvQ0FBb0MsbUJBQW1CLGlDQUFpQyx3REFBd0QsNkJBQTZCLDRCQUE0Qiw4QkFBOEIsMEJBQTBCLHdCQUF3QixjQUFjLGlDQUFpQyxnQkFBZ0IsbUJBQW1CLG9CQUFvQixZQUFZLG9CQUFvQixjQUFjLGFBQWEsb0JBQW9CLGlCQUFpQixrQkFBa0IscUJBQXFCLGtCQUFrQiw4QkFBOEIsb0JBQW9CLHFCQUFxQixnQkFBZ0IseUJBQXlCLFlBQVksYUFBYSxXQUFXLGVBQWUscUNBQXFDLG1CQUFtQixjQUFjLHFEQUFxRCx5QkFBeUIsc0JBQXNCLG1CQUFtQixvQkFBb0Isb0JBQW9CLGFBQWEsYUFBYSxzQkFBc0IsK0NBQStDLHVDQUF1QyxnQkFBZ0IsdUJBQXVCLGNBQWMseURBQXlELE9BQU8sZUFBZSxRQUFRLFdBQVcsOEJBQThCLFNBQVMseUNBQXlDLCtDQUErQyx1Q0FBdUMsMkJBQTJCLE1BQU0sMEVBQTBFLGlDQUFpQyxpQ0FBaUMsY0FBYyxnQ0FBZ0Msb0JBQW9CLG1DQUFtQyx3QkFBd0IscUNBQXFDLCtDQUErQywwQkFBMEIsdUJBQXVCLG9CQUFvQixvQkFBb0Isb0JBQW9CLGFBQWEsUUFBUSxtQkFBbUIsNlVBQTZVLHVDQUF1Qyw0REFBNEQseUJBQXlCLGNBQWMsZ0VBQWdFLHlCQUF5QixjQUFjLGVBQWUsYUFBYSwwQkFBMEIseUJBQXlCLHNCQUFzQixtQkFBbUIsb0JBQW9CLG9CQUFvQixhQUFhLDBCQUEwQiwwQkFBMEIsdUJBQXVCLG9CQUFvQixnREFBZ0QseURBQXlELGlEQUFpRCw4Q0FBOEMsZ0NBQWdDLDBCQUEwQixnQkFBZ0IsWUFBWSwrQ0FBK0MsdUNBQXVDLFNBQVMseUZBQXlGLGNBQWMsMkdBQTJHLFVBQVUsb0JBQW9CLGdDQUFnQyx3QkFBd0IsbUJBQW1CLHlCQUF5QixlQUFlLGFBQWEsY0FBYyxjQUFjLFlBQVksb0JBQW9CLGtCQUFrQixpQ0FBaUMseUJBQXlCLGdDQUFnQyx3QkFBd0IsV0FBVyxtQkFBbUIsY0FBYyxRQUFRLGFBQWEsbUJBQW1CLG9CQUFvQixZQUFZLG9CQUFvQixjQUFjLGNBQWMsdUJBQXVCLG9CQUFvQiwyQkFBMkIsa0JBQWtCLFlBQVkscUJBQXFCLGtCQUFrQix5QkFBeUIsaUJBQWlCLGlCQUFpQixzQkFBc0IsOEJBQThCLCtCQUErQiw2QkFBNkIsOENBQThDLHNDQUFzQyxhQUFhLGtCQUFrQixPQUFPLGVBQWUsa0JBQWtCLFNBQVMsV0FBVyw4QkFBOEIscUJBQXFCLG1CQUFtQiwrQkFBK0IsbUJBQW1CLHFDQUFxQyx5QkFBeUIsY0FBYyx5Q0FBeUMseUJBQXlCLGNBQWMsMEJBQTBCLGtCQUFrQixnQkFBZ0IseUVBQXlFLGlFQUFpRSxjQUFjLFVBQVUsb0JBQW9CLHNCQUFzQixtQ0FBbUMsMkJBQTJCLGlDQUFpQyx5QkFBeUIsc0RBQXNELDhDQUE4QyxzQ0FBc0Msd0RBQXdELDBCQUEwQixVQUFVLFFBQVEsZ0JBQWdCLGNBQWMsa0VBQWtFLGtCQUFrQixnRUFBZ0UsbUJBQW1CLDZEQUE2RCxPQUFPLGVBQWUsUUFBUSxXQUFXLGdDQUFnQyxTQUFTLDJDQUEyQywrQ0FBK0MsdUNBQXVDLDZCQUE2QixNQUFNLGtDQUFrQyxvQkFBb0IscUNBQXFDLHVCQUF1QixnREFBZ0QsY0FBYyx3RUFBd0UsNkJBQTZCLDhGQUE4RiwwQkFBMEIsWUFBWSxlQUFlLGVBQWUscUJBQXFCLGlCQUFpQixzQkFBc0Isa0JBQWtCLHFCQUFxQixpQkFBaUIsNkJBQTZCLHlCQUF5QixzQkFBc0IsbUJBQW1CLG9CQUFvQixvQkFBb0IsYUFBYSx3QkFBd0IscUJBQXFCLHVCQUF1QixrQkFBa0IsNEVBQTRFLHFCQUFxQix3QkFBd0IseUJBQXlCLHNCQUFzQixtQkFBbUIsNkJBQTZCLGtCQUFrQix3QkFBd0IsZ0JBQWdCLDJCQUEyQiwyQkFBMkIsb0JBQW9CLGVBQWUsY0FBYyx1QkFBdUIsb0JBQW9CLDJCQUEyQixnQkFBZ0IsZ0NBQWdDLGlDQUFpQyxrQkFBa0IsbUJBQW1CLDJCQUEyQix5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsY0FBYyxnQ0FBZ0Msd0JBQXdCLHFCQUFxQix1QkFBdUIsY0FBYyxrQkFBa0Isd2JBQXdiLGFBQWEsb0hBQW9ILG1CQUFtQix1REFBdUQscUJBQXFCLGlCQUFpQix5RUFBeUUscUJBQXFCLGNBQWMseUVBQXlFLHFCQUFxQiw0RUFBNEUsb0RBQW9ELDRDQUE0QyxxRkFBcUYseUJBQXlCLHFCQUFxQix3QkFBd0IsZ0JBQWdCLGNBQWMsV0FBVyxzQ0FBc0MsbUJBQW1CLG9CQUFvQixtQkFBbUIsNEJBQTRCLHlCQUF5QixxQkFBcUIsV0FBVyxxQkFBcUIsY0FBYyxvQkFBb0IsaUJBQWlCLG1CQUFtQixlQUFlLG9DQUFvQyxZQUFZLG1CQUFtQixlQUFlLDBEQUEwRCxtQkFBbUIsb0JBQW9CLFlBQVksb0JBQW9CLGVBQWUsMENBQTBDLGlCQUFpQixtQkFBbUIsb0JBQW9CLFlBQVksb0JBQW9CLGNBQWMsdUJBQXVCLG9CQUFvQiwyQkFBMkIsNEJBQTRCLGlCQUFpQixRQUFRLHFCQUFxQiw0QkFBNEIsaUJBQWlCLFFBQVEsaUJBQWlCLDRCQUE0QixpQkFBaUIsUUFBUSxZQUFZLHlCQUF5QixzQkFBc0IsOEJBQThCLDZDQUE2Qyw0QkFBNEIsaUJBQWlCLFFBQVEseUNBQXlDLHdCQUF3QixxQkFBcUIsdUJBQXVCLDRCQUE0QixpQkFBaUIsUUFBUSx5Q0FBeUMsNEJBQTRCLGlCQUFpQixRQUFRLDBDQUEwQyw0QkFBNEIsaUJBQWlCLFFBQVEsc0NBQXNDLDRCQUE0QixpQkFBaUIsUUFBUSxzQ0FBc0MscUJBQXFCLGtCQUFrQix5QkFBeUIsNEJBQTRCLGlCQUFpQixTQUFTLE9BQU8sZUFBZSx3QkFBd0IscUJBQXFCLHdDQUF3QyxnQ0FBZ0MsOEJBQThCLCtCQUErQiw0RUFBNEUsNkJBQTZCLGVBQWUseUJBQXlCLDBCQUEwQixjQUFjLGlCQUFpQixnQkFBZ0IsaUJBQWlCLG1CQUFtQixZQUFZLHNCQUFzQixtQkFBbUIscUJBQXFCLG9CQUFvQixvQkFBb0IsYUFBYSxpQkFBaUIsd0JBQXdCLHFCQUFxQix1QkFBdUIsY0FBYyxnQ0FBZ0MsbUJBQW1CLGFBQWEsd0JBQXdCLDRCQUE0QixjQUFjLGNBQWMsY0FBYyxvQkFBb0IsY0FBYyxhQUFhLHlCQUF5QixzQkFBc0IsbUJBQW1CLGNBQWMsb0JBQW9CLG9CQUFvQixhQUFhLHVCQUF1QixvQkFBb0IsMkJBQTJCLG1CQUFtQixrQ0FBa0MsbUJBQW1CLHNCQUFzQixtQkFBbUIsb0JBQW9CLFlBQVksb0JBQW9CLGNBQWMsV0FBVyx3QkFBd0IsbUJBQW1CLGVBQWUsdUJBQXVCLDBCQUEwQixjQUFjLG1DQUFtQyxjQUFjLGdDQUFnQyxlQUFlLDRDQUE0Qyx5QkFBeUIsWUFBWSxxQkFBcUIsZUFBZSxXQUFXLGdCQUFnQixrQkFBa0IsbUJBQW1CLFVBQVUsY0FBYyxtQkFBbUIsZ0JBQWdCLGtCQUFrQixvQkFBb0IsTUFBTSxpQ0FBaUMsMkJBQTJCLHlCQUF5QixzQkFBc0IscUJBQXFCLGlCQUFpQiwwQkFBMEIsdUJBQXVCLG9CQUFvQixvQkFBb0Isb0JBQW9CLGFBQWEsZUFBZSx5QkFBeUIsc0JBQXNCLDhCQUE4QixnQkFBZ0IsZ0JBQWdCLG1CQUFtQix1QkFBdUIscUJBQXFCLFFBQVEseUJBQXlCLHNCQUFzQixtQkFBbUIsNEJBQTRCLDBCQUEwQix3QkFBd0IsY0FBYyxvQkFBb0Isb0JBQW9CLGFBQWEsd0JBQXdCLHFCQUFxQix1QkFBdUIsbUJBQW1CLGlCQUFpQixtQkFBbUIsY0FBYyw0QkFBNEIsY0FBYyxTQUFTLGNBQWMscUJBQXFCLDRCQUE0QixjQUFjLFNBQVMseUJBQXlCLHNCQUFzQixtQkFBbUIsNEJBQTRCLDBCQUEwQix3QkFBd0Isb0JBQW9CLG9CQUFvQixhQUFhLG1CQUFtQixvQkFBb0IsWUFBWSxvQkFBb0IsY0FBYyx1QkFBdUIsb0JBQW9CLDJCQUEyQixvQ0FBb0Msb0JBQW9CLG1CQUFtQixtQkFBbUIsY0FBYyxVQUFVLHdCQUF3QixxQkFBcUIsdUJBQXVCLG1CQUFtQixrQkFBa0IscUJBQXFCLGtCQUFrQix5QkFBeUIsbUJBQW1CLHdCQUF3QixrQkFBa0IsdUJBQXVCLGlCQUFpQixxQkFBcUIsd0JBQXdCLHFCQUFxQix1QkFBdUIsa0JBQWtCLHFCQUFxQixrQkFBa0IseUJBQXlCLGlCQUFpQiw2QkFBNkIsMEJBQTBCLHVCQUF1Qix5QkFBeUIsNEJBQTRCLDhCQUE4QixzQkFBc0IscUJBQXFCLDBDQUEwQyxzQkFBc0IsbUJBQW1CLG9CQUFvQixZQUFZLG9CQUFvQixjQUFjLGtCQUFrQix5QkFBeUIsZ0JBQWdCLGtCQUFrQix3QkFBd0IseUJBQXlCLHFCQUFxQixVQUFVLHNCQUFzQixpQkFBaUIsaUNBQWlDLDBCQUEwQixnQ0FBZ0MsMEJBQTBCLCtCQUErQix5QkFBeUIscUJBQXFCLFdBQVcsVUFBVSxtQkFBbUIsbUJBQW1CLGVBQWUsaUJBQWlCLGdCQUFnQixrQkFBa0IsZUFBZSxpQkFBaUIsUUFBUSxjQUFjLDBCQUEwQixhQUFhLG1CQUFtQixvQkFBb0IsWUFBWSxvQkFBb0IsY0FBYyxlQUFlLHdFQUF3RSxtQkFBbUIsY0FBYyxVQUFVLG1DQUFtQyxXQUFXLDZDQUE2QyxtQkFBbUIsY0FBYyxVQUFVLFVBQVUseUNBQXlDLG1CQUFtQixjQUFjLFVBQVUsZUFBZSxtQ0FBbUMsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLHdDQUF3QyxtQkFBbUIsY0FBYyxVQUFVLGVBQWUsMENBQTBDLG1CQUFtQixjQUFjLFVBQVUsVUFBVSx3Q0FBd0MsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLHlDQUF5QyxtQkFBbUIsY0FBYyxVQUFVLFVBQVUsMkNBQTJDLG1CQUFtQixjQUFjLFVBQVUsVUFBVSwwQ0FBMEMsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLG9EQUFvRCxnQkFBZ0IsZ0RBQWdELHFCQUFxQiwwQ0FBMEMsZ0JBQWdCLCtDQUErQyxxQkFBcUIsaURBQWlELGdCQUFnQiwrQ0FBK0MsZ0JBQWdCLGdEQUFnRCxnQkFBZ0Isa0RBQWtELGdCQUFnQixpREFBaUQsZ0JBQWdCLGdDQUFnQyxtQkFBbUIsY0FBYyxVQUFVLGVBQWUsdUNBQXVDLHFCQUFxQixnQ0FBZ0MsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsdUNBQXVDLHNCQUFzQixnQ0FBZ0MsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLHVDQUF1QyxnQkFBZ0IsZ0NBQWdDLG1CQUFtQixjQUFjLFVBQVUsZ0JBQWdCLHVDQUF1QyxzQkFBc0IsZ0NBQWdDLG1CQUFtQixjQUFjLFVBQVUsZ0JBQWdCLHVDQUF1QyxzQkFBc0IsZ0NBQWdDLG1CQUFtQixjQUFjLFVBQVUsVUFBVSx1Q0FBdUMsZ0JBQWdCLGdDQUFnQyxtQkFBbUIsY0FBYyxVQUFVLGdCQUFnQix1Q0FBdUMsc0JBQXNCLGdDQUFnQyxtQkFBbUIsY0FBYyxVQUFVLGdCQUFnQix1Q0FBdUMsc0JBQXNCLGdDQUFnQyxtQkFBbUIsY0FBYyxVQUFVLFVBQVUsdUNBQXVDLGdCQUFnQixpQ0FBaUMsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0Isd0NBQXdDLHNCQUFzQixpQ0FBaUMsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0Isd0NBQXdDLHNCQUFzQixpQ0FBaUMsbUJBQW1CLGNBQWMsVUFBVSxXQUFXLHdDQUF3QyxpQkFBaUIsb0NBQW9DLGdEQUFnRCxtQkFBbUIsY0FBYyxVQUFVLHVCQUF1QixXQUFXLGlDQUFpQyxtQkFBbUIsY0FBYyxVQUFVLFVBQVUsNkJBQTZCLG1CQUFtQixjQUFjLFVBQVUsZUFBZSx1QkFBdUIsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLDRCQUE0QixtQkFBbUIsY0FBYyxVQUFVLGVBQWUsOEJBQThCLG1CQUFtQixjQUFjLFVBQVUsVUFBVSw0QkFBNEIsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLDZCQUE2QixtQkFBbUIsY0FBYyxVQUFVLFVBQVUsK0JBQStCLG1CQUFtQixjQUFjLFVBQVUsVUFBVSw4QkFBOEIsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLHdDQUF3QyxnQkFBZ0Isb0NBQW9DLHFCQUFxQiw4QkFBOEIsZ0JBQWdCLG1DQUFtQyxxQkFBcUIscUNBQXFDLGdCQUFnQixtQ0FBbUMsZ0JBQWdCLG9DQUFvQyxnQkFBZ0Isc0NBQXNDLGdCQUFnQixxQ0FBcUMsZ0JBQWdCLG9CQUFvQixtQkFBbUIsY0FBYyxVQUFVLGVBQWUsMkJBQTJCLHFCQUFxQixvQkFBb0IsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsMkJBQTJCLHNCQUFzQixvQkFBb0IsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLDJCQUEyQixnQkFBZ0Isb0JBQW9CLG1CQUFtQixjQUFjLFVBQVUsZ0JBQWdCLDJCQUEyQixzQkFBc0Isb0JBQW9CLG1CQUFtQixjQUFjLFVBQVUsZ0JBQWdCLDJCQUEyQixzQkFBc0Isb0JBQW9CLG1CQUFtQixjQUFjLFVBQVUsVUFBVSwyQkFBMkIsZ0JBQWdCLG9CQUFvQixtQkFBbUIsY0FBYyxVQUFVLGdCQUFnQiwyQkFBMkIsc0JBQXNCLG9CQUFvQixtQkFBbUIsY0FBYyxVQUFVLGdCQUFnQiwyQkFBMkIsc0JBQXNCLG9CQUFvQixtQkFBbUIsY0FBYyxVQUFVLFVBQVUsMkJBQTJCLGdCQUFnQixxQkFBcUIsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsNEJBQTRCLHNCQUFzQixxQkFBcUIsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsNEJBQTRCLHNCQUFzQixxQkFBcUIsbUJBQW1CLGNBQWMsVUFBVSxXQUFXLDRCQUE0QixrQkFBa0IsMENBQTBDLGtGQUFrRixtQkFBbUIsY0FBYyxVQUFVLHVDQUF1QyxXQUFXLDJEQUEyRCxtQkFBbUIsY0FBYyxVQUFVLFVBQVUsbURBQW1ELG1CQUFtQixjQUFjLFVBQVUsZUFBZSx1Q0FBdUMsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLGlEQUFpRCxtQkFBbUIsY0FBYyxVQUFVLGVBQWUscURBQXFELG1CQUFtQixjQUFjLFVBQVUsVUFBVSxpREFBaUQsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLG1EQUFtRCxtQkFBbUIsY0FBYyxVQUFVLFVBQVUsdURBQXVELG1CQUFtQixjQUFjLFVBQVUsVUFBVSxxREFBcUQsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLHlFQUF5RSxnQkFBZ0IsaUVBQWlFLHFCQUFxQixxREFBcUQsZ0JBQWdCLCtEQUErRCxxQkFBcUIsbUVBQW1FLGdCQUFnQiwrREFBK0QsZ0JBQWdCLGlFQUFpRSxnQkFBZ0IscUVBQXFFLGdCQUFnQixtRUFBbUUsZ0JBQWdCLGlDQUFpQyxtQkFBbUIsY0FBYyxVQUFVLGVBQWUsK0NBQStDLHFCQUFxQixpQ0FBaUMsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsK0NBQStDLHNCQUFzQixpQ0FBaUMsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLCtDQUErQyxnQkFBZ0IsaUNBQWlDLG1CQUFtQixjQUFjLFVBQVUsZ0JBQWdCLCtDQUErQyxzQkFBc0IsaUNBQWlDLG1CQUFtQixjQUFjLFVBQVUsZ0JBQWdCLCtDQUErQyxzQkFBc0IsaUNBQWlDLG1CQUFtQixjQUFjLFVBQVUsVUFBVSwrQ0FBK0MsZ0JBQWdCLGlDQUFpQyxtQkFBbUIsY0FBYyxVQUFVLGdCQUFnQiwrQ0FBK0Msc0JBQXNCLGlDQUFpQyxtQkFBbUIsY0FBYyxVQUFVLGdCQUFnQiwrQ0FBK0Msc0JBQXNCLGlDQUFpQyxtQkFBbUIsY0FBYyxVQUFVLFVBQVUsK0NBQStDLGdCQUFnQixtQ0FBbUMsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsaURBQWlELHNCQUFzQixtQ0FBbUMsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsaURBQWlELHNCQUFzQixtQ0FBbUMsbUJBQW1CLGNBQWMsVUFBVSxXQUFXLGlEQUFpRCxrQkFBa0IscUNBQXFDLDhDQUE4QyxtQkFBbUIsY0FBYyxVQUFVLHNCQUFzQixXQUFXLGdDQUFnQyxtQkFBbUIsY0FBYyxVQUFVLFVBQVUsNEJBQTRCLG1CQUFtQixjQUFjLFVBQVUsZUFBZSxzQkFBc0IsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLDJCQUEyQixtQkFBbUIsY0FBYyxVQUFVLGVBQWUsNkJBQTZCLG1CQUFtQixjQUFjLFVBQVUsVUFBVSwyQkFBMkIsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLDRCQUE0QixtQkFBbUIsY0FBYyxVQUFVLFVBQVUsOEJBQThCLG1CQUFtQixjQUFjLFVBQVUsVUFBVSw2QkFBNkIsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLHVDQUF1QyxnQkFBZ0IsbUNBQW1DLHFCQUFxQiw2QkFBNkIsZ0JBQWdCLGtDQUFrQyxxQkFBcUIsb0NBQW9DLGdCQUFnQixrQ0FBa0MsZ0JBQWdCLG1DQUFtQyxnQkFBZ0IscUNBQXFDLGdCQUFnQixvQ0FBb0MsZ0JBQWdCLG1CQUFtQixtQkFBbUIsY0FBYyxVQUFVLGVBQWUsMEJBQTBCLHFCQUFxQixtQkFBbUIsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsMEJBQTBCLHNCQUFzQixtQkFBbUIsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLDBCQUEwQixnQkFBZ0IsbUJBQW1CLG1CQUFtQixjQUFjLFVBQVUsZ0JBQWdCLDBCQUEwQixzQkFBc0IsbUJBQW1CLG1CQUFtQixjQUFjLFVBQVUsZ0JBQWdCLDBCQUEwQixzQkFBc0IsbUJBQW1CLG1CQUFtQixjQUFjLFVBQVUsVUFBVSwwQkFBMEIsZ0JBQWdCLG1CQUFtQixtQkFBbUIsY0FBYyxVQUFVLGdCQUFnQiwwQkFBMEIsc0JBQXNCLG1CQUFtQixtQkFBbUIsY0FBYyxVQUFVLGdCQUFnQiwwQkFBMEIsc0JBQXNCLG1CQUFtQixtQkFBbUIsY0FBYyxVQUFVLFVBQVUsMEJBQTBCLGdCQUFnQixvQkFBb0IsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsMkJBQTJCLHNCQUFzQixvQkFBb0IsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsMkJBQTJCLHNCQUFzQixvQkFBb0IsbUJBQW1CLGNBQWMsVUFBVSxXQUFXLDJCQUEyQixrQkFBa0IscUNBQXFDLGtEQUFrRCxtQkFBbUIsY0FBYyxVQUFVLHdCQUF3QixXQUFXLGtDQUFrQyxtQkFBbUIsY0FBYyxVQUFVLFVBQVUsOEJBQThCLG1CQUFtQixjQUFjLFVBQVUsZUFBZSx3QkFBd0IsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLDZCQUE2QixtQkFBbUIsY0FBYyxVQUFVLGVBQWUsK0JBQStCLG1CQUFtQixjQUFjLFVBQVUsVUFBVSw2QkFBNkIsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLDhCQUE4QixtQkFBbUIsY0FBYyxVQUFVLFVBQVUsZ0NBQWdDLG1CQUFtQixjQUFjLFVBQVUsVUFBVSwrQkFBK0IsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLHlDQUF5QyxnQkFBZ0IscUNBQXFDLHFCQUFxQiwrQkFBK0IsZ0JBQWdCLG9DQUFvQyxxQkFBcUIsc0NBQXNDLGdCQUFnQixvQ0FBb0MsZ0JBQWdCLHFDQUFxQyxnQkFBZ0IsdUNBQXVDLGdCQUFnQixzQ0FBc0MsZ0JBQWdCLHFCQUFxQixtQkFBbUIsY0FBYyxVQUFVLGVBQWUsNEJBQTRCLHFCQUFxQixxQkFBcUIsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsNEJBQTRCLHNCQUFzQixxQkFBcUIsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLDRCQUE0QixnQkFBZ0IscUJBQXFCLG1CQUFtQixjQUFjLFVBQVUsZ0JBQWdCLDRCQUE0QixzQkFBc0IscUJBQXFCLG1CQUFtQixjQUFjLFVBQVUsZ0JBQWdCLDRCQUE0QixzQkFBc0IscUJBQXFCLG1CQUFtQixjQUFjLFVBQVUsVUFBVSw0QkFBNEIsZ0JBQWdCLHFCQUFxQixtQkFBbUIsY0FBYyxVQUFVLGdCQUFnQiw0QkFBNEIsc0JBQXNCLHFCQUFxQixtQkFBbUIsY0FBYyxVQUFVLGdCQUFnQiw0QkFBNEIsc0JBQXNCLHFCQUFxQixtQkFBbUIsY0FBYyxVQUFVLFVBQVUsNEJBQTRCLGdCQUFnQixzQkFBc0IsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsNkJBQTZCLHNCQUFzQixzQkFBc0IsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsNkJBQTZCLHNCQUFzQixzQkFBc0IsbUJBQW1CLGNBQWMsVUFBVSxXQUFXLDZCQUE2QixrQkFBa0IscUNBQXFDLHdEQUF3RCxtQkFBbUIsY0FBYyxVQUFVLDJCQUEyQixXQUFXLHFDQUFxQyxtQkFBbUIsY0FBYyxVQUFVLFVBQVUsaUNBQWlDLG1CQUFtQixjQUFjLFVBQVUsZUFBZSwyQkFBMkIsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLGdDQUFnQyxtQkFBbUIsY0FBYyxVQUFVLGVBQWUsa0NBQWtDLG1CQUFtQixjQUFjLFVBQVUsVUFBVSxnQ0FBZ0MsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLGlDQUFpQyxtQkFBbUIsY0FBYyxVQUFVLFVBQVUsbUNBQW1DLG1CQUFtQixjQUFjLFVBQVUsVUFBVSxrQ0FBa0MsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLDRDQUE0QyxnQkFBZ0Isd0NBQXdDLHFCQUFxQixrQ0FBa0MsZ0JBQWdCLHVDQUF1QyxxQkFBcUIseUNBQXlDLGdCQUFnQix1Q0FBdUMsZ0JBQWdCLHdDQUF3QyxnQkFBZ0IsMENBQTBDLGdCQUFnQix5Q0FBeUMsZ0JBQWdCLHdCQUF3QixtQkFBbUIsY0FBYyxVQUFVLGVBQWUsK0JBQStCLHFCQUFxQix3QkFBd0IsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsK0JBQStCLHNCQUFzQix3QkFBd0IsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLCtCQUErQixnQkFBZ0Isd0JBQXdCLG1CQUFtQixjQUFjLFVBQVUsZ0JBQWdCLCtCQUErQixzQkFBc0Isd0JBQXdCLG1CQUFtQixjQUFjLFVBQVUsZ0JBQWdCLCtCQUErQixzQkFBc0Isd0JBQXdCLG1CQUFtQixjQUFjLFVBQVUsVUFBVSwrQkFBK0IsZ0JBQWdCLHdCQUF3QixtQkFBbUIsY0FBYyxVQUFVLGdCQUFnQiwrQkFBK0Isc0JBQXNCLHdCQUF3QixtQkFBbUIsY0FBYyxVQUFVLGdCQUFnQiwrQkFBK0Isc0JBQXNCLHdCQUF3QixtQkFBbUIsY0FBYyxVQUFVLFVBQVUsK0JBQStCLGdCQUFnQix5QkFBeUIsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsZ0NBQWdDLHNCQUFzQix5QkFBeUIsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsZ0NBQWdDLHNCQUFzQix5QkFBeUIsbUJBQW1CLGNBQWMsVUFBVSxXQUFXLGdDQUFnQyxrQkFBa0IscUNBQXFDLGdEQUFnRCxtQkFBbUIsY0FBYyxVQUFVLHVCQUF1QixXQUFXLGlDQUFpQyxtQkFBbUIsY0FBYyxVQUFVLFVBQVUsNkJBQTZCLG1CQUFtQixjQUFjLFVBQVUsZUFBZSx1QkFBdUIsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLDRCQUE0QixtQkFBbUIsY0FBYyxVQUFVLGVBQWUsOEJBQThCLG1CQUFtQixjQUFjLFVBQVUsVUFBVSw0QkFBNEIsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLDZCQUE2QixtQkFBbUIsY0FBYyxVQUFVLFVBQVUsK0JBQStCLG1CQUFtQixjQUFjLFVBQVUsVUFBVSw4QkFBOEIsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLHdDQUF3QyxnQkFBZ0Isb0NBQW9DLHFCQUFxQiw4QkFBOEIsZ0JBQWdCLG1DQUFtQyxxQkFBcUIscUNBQXFDLGdCQUFnQixtQ0FBbUMsZ0JBQWdCLG9DQUFvQyxnQkFBZ0Isc0NBQXNDLGdCQUFnQixxQ0FBcUMsZ0JBQWdCLG9CQUFvQixtQkFBbUIsY0FBYyxVQUFVLGVBQWUsMkJBQTJCLHFCQUFxQixvQkFBb0IsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsMkJBQTJCLHNCQUFzQixvQkFBb0IsbUJBQW1CLGNBQWMsVUFBVSxVQUFVLDJCQUEyQixnQkFBZ0Isb0JBQW9CLG1CQUFtQixjQUFjLFVBQVUsZ0JBQWdCLDJCQUEyQixzQkFBc0Isb0JBQW9CLG1CQUFtQixjQUFjLFVBQVUsZ0JBQWdCLDJCQUEyQixzQkFBc0Isb0JBQW9CLG1CQUFtQixjQUFjLFVBQVUsVUFBVSwyQkFBMkIsZ0JBQWdCLG9CQUFvQixtQkFBbUIsY0FBYyxVQUFVLGdCQUFnQiwyQkFBMkIsc0JBQXNCLG9CQUFvQixtQkFBbUIsY0FBYyxVQUFVLGdCQUFnQiwyQkFBMkIsc0JBQXNCLG9CQUFvQixtQkFBbUIsY0FBYyxVQUFVLFVBQVUsMkJBQTJCLGdCQUFnQixxQkFBcUIsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsNEJBQTRCLHNCQUFzQixxQkFBcUIsbUJBQW1CLGNBQWMsVUFBVSxnQkFBZ0IsNEJBQTRCLHNCQUFzQixxQkFBcUIsbUJBQW1CLGNBQWMsVUFBVSxXQUFXLDRCQUE0QixrQkFBa0IsU0FBUyxvQkFBb0IscUJBQXFCLG1CQUFtQixvQkFBb0Isc0JBQXNCLDBCQUEwQixzQkFBc0IscUJBQXFCLHdCQUF3QixxQkFBcUIsdUJBQXVCLG9CQUFvQixjQUFjLGVBQWUsYUFBYSw0QkFBNEIsU0FBUyxvQkFBb0IscUNBQXFDLHFCQUFxQiwrQkFBK0IsZ0JBQWdCLG1CQUFtQixvQkFBb0Isb0JBQW9CLGFBQWEsc0JBQXNCLG1CQUFtQixlQUFlLHNCQUFzQix5QkFBeUIsc0JBQXNCLG1CQUFtQiwwQ0FBMEMsMEJBQTBCLG9CQUFvQixvQkFBb0IsY0FBYyxxQ0FBcUMsb0JBQW9CLG9CQUFvQixvQkFBb0IsY0FBYyxxQkFBcUIsb0JBQW9CLHdDQUF3Qyx5Q0FBeUMsNkJBQTZCLDhCQUE4QiwrQkFBK0IsMEJBQTBCLGlCQUFpQiwwQkFBMEIsb0JBQW9CLDBCQUEwQixtQkFBbUIsMEJBQTBCLG9CQUFvQiwwQkFBMEIsaUJBQWlCLDBCQUEwQixvQkFBb0IsMEJBQTBCLG1CQUFtQiwwQkFBMEIsb0JBQW9CLDBCQUEwQixpQkFBaUIsTUFBTSwwQkFBMEIsdUJBQXVCLG9CQUFvQixjQUFjLDBCQUEwQixhQUFhLG1CQUFtQixvQkFBb0IsWUFBWSxvQkFBb0IsY0FBYywrQkFBK0IsNEJBQTRCLHVCQUF1QixrQkFBa0Isb0JBQW9CLHFCQUFxQixtQkFBbUIsNkJBQTZCLHNCQUFzQixtQ0FBbUMscUJBQXFCLGVBQWUsbUJBQW1CLGdCQUFnQixlQUFlLGtCQUFrQiw0QkFBNEIsNkJBQTZCLDBCQUEwQixzQkFBc0Isa0RBQWtELCtCQUErQiwwQ0FBMEMscUJBQXFCLG9CQUFvQixvQkFBb0IsYUFBYSxXQUFXLGVBQWUsc0JBQXNCLG1CQUFtQixjQUFjLFVBQVUsV0FBVyxnQkFBZ0IsV0FBVyxVQUFVLHNCQUFzQixtQkFBbUIsY0FBYyxVQUFVLFdBQVcsZ0JBQWdCLFdBQVcsZ0JBQWdCLHNCQUFzQixtQkFBbUIsY0FBYyxVQUFVLFdBQVcsVUFBVSxXQUFXLGdCQUFnQixzQkFBc0IsbUJBQW1CLGNBQWMsVUFBVSxXQUFXLGdCQUFnQixXQUFXLFVBQVUsdUJBQXVCLG1CQUFtQixjQUFjLFVBQVUsWUFBWSxnQkFBZ0IsWUFBWSxnQkFBZ0Isd0JBQXdCLG1CQUFtQixjQUFjLFVBQVUsWUFBWSxZQUFZLE1BQU0sMEJBQTBCLHVCQUF1QixvQkFBb0Isb0JBQW9CLG9CQUFvQixhQUFhLDRCQUE0Qiw2QkFBNkIsMEJBQTBCLHNCQUFzQix5QkFBeUIsc0JBQXNCLDhCQUE4QixjQUFjLGdCQUFnQixlQUFlLG1CQUFtQixlQUFlLHNCQUFzQixjQUFjLG9EQUFvRCxjQUFjLHNCQUFzQixjQUFjLHlCQUF5Qix1QkFBdUIsd0VBQXdFLGNBQWMscUNBQXFDLDRCQUE0Qix1QkFBdUIsd0RBQXdELHVCQUF1QixrSkFBa0oseUJBQXlCLGNBQWMsdUJBQXVCLGNBQWMsV0FBVyxpRUFBaUUsVUFBVSxpRUFBaUUsY0FBYyw2RUFBNkUsa0NBQWtDLGtNQUFrTSx5QkFBeUIscUJBQXFCLFdBQVcsdUJBQXVCLCtEQUErRCxvQ0FBb0Msb0NBQW9DLGdFQUFnRSxlQUFlLHlCQUF5QixXQUFXLG9EQUFvRCxjQUFjLHNCQUFzQixXQUFXLHlCQUF5Qix5QkFBeUIsd0VBQXdFLFdBQVcscUNBQXFDLDRCQUE0QiwwQkFBMEIsd0RBQXdELHlCQUF5QixrSkFBa0osc0JBQXNCLFdBQVcsdUJBQXVCLFdBQVcsV0FBVyxpRUFBaUUsVUFBVSxpRUFBaUUsV0FBVyw2RUFBNkUsa0NBQWtDLGtNQUFrTSxzQkFBc0Isa0JBQWtCLGNBQWMsdUJBQXVCLGtFQUFrRSxvQ0FBb0Msb0NBQW9DLG1FQUFtRSxlQUFlLHlCQUF5QixjQUFjLG9EQUFvRCxjQUFjLHNCQUFzQixjQUFjLHlCQUF5Qix3QkFBd0Isd0VBQXdFLGNBQWMscUNBQXFDLDRCQUE0QiwwQkFBMEIsd0RBQXdELHdCQUF3QixrSkFBa0oseUJBQXlCLGNBQWMsdUJBQXVCLGNBQWMsV0FBVyxpRUFBaUUsVUFBVSxpRUFBaUUsY0FBYyw2RUFBNkUsa0NBQWtDLGtNQUFrTSx5QkFBeUIscUJBQXFCLGNBQWMsdUJBQXVCLGtFQUFrRSxvQ0FBb0Msb0NBQW9DLG1FQUFtRSxjQUFjLHlCQUF5QixjQUFjLGtEQUFrRCxjQUFjLHFCQUFxQixjQUFjLHdCQUF3Qix3QkFBd0Isc0VBQXNFLGNBQWMscUNBQXFDLDJCQUEyQiwwQkFBMEIsc0RBQXNELHdCQUF3Qiw4SUFBOEkseUJBQXlCLGNBQWMsc0JBQXNCLGNBQWMsV0FBVywrREFBK0QsVUFBVSwrREFBK0QsY0FBYywyRUFBMkUsa0NBQWtDLDhMQUE4TCx5QkFBeUIscUJBQXFCLGNBQWMsc0JBQXNCLHFFQUFxRSxvQ0FBb0MsbUNBQW1DLHNFQUFzRSxpQkFBaUIseUJBQXlCLFdBQVcsd0RBQXdELGNBQWMsd0JBQXdCLFdBQVcsMkJBQTJCLHlCQUF5Qiw0RUFBNEUsV0FBVyxxQ0FBcUMsOEJBQThCLDBCQUEwQiw0REFBNEQseUJBQXlCLDBKQUEwSix5QkFBeUIsV0FBVyx5QkFBeUIsV0FBVyxXQUFXLHFFQUFxRSxVQUFVLHFFQUFxRSxXQUFXLGlGQUFpRixrQ0FBa0MsME1BQTBNLHNCQUFzQixrQkFBa0IsY0FBYyx5QkFBeUIscUVBQXFFLG9DQUFvQyxzQ0FBc0Msc0VBQXNFLGNBQWMseUJBQXlCLFdBQVcsa0RBQWtELGNBQWMscUJBQXFCLFdBQVcsd0JBQXdCLHlCQUF5QixzRUFBc0UsV0FBVyxxQ0FBcUMsMkJBQTJCLDBCQUEwQixzREFBc0QseUJBQXlCLDhJQUE4SSx5QkFBeUIsV0FBVyxzQkFBc0IsV0FBVyxXQUFXLCtEQUErRCxVQUFVLCtEQUErRCxXQUFXLDJFQUEyRSxrQ0FBa0MsOExBQThMLHNCQUFzQixrQkFBa0IsY0FBYyxzQkFBc0IscUVBQXFFLG9DQUFvQyxtQ0FBbUMsc0VBQXNFLGNBQWMseUJBQXlCLFdBQVcsa0RBQWtELGNBQWMscUJBQXFCLFdBQVcsd0JBQXdCLHlCQUF5QixzRUFBc0UsV0FBVyxxQ0FBcUMsMkJBQTJCLDBCQUEwQixzREFBc0QseUJBQXlCLDhJQUE4SSx5QkFBeUIsV0FBVyxzQkFBc0IsV0FBVyxXQUFXLCtEQUErRCxVQUFVLCtEQUErRCxXQUFXLDJFQUEyRSxrQ0FBa0MsOExBQThMLHNCQUFzQixrQkFBa0IsY0FBYyxzQkFBc0IscUVBQXFFLG9DQUFvQyxtQ0FBbUMsc0VBQXNFLGlCQUFpQix5QkFBeUIsV0FBVyx3REFBd0QsY0FBYyx3QkFBd0IsV0FBVywyQkFBMkIseUJBQXlCLDRFQUE0RSxXQUFXLHFDQUFxQyw4QkFBOEIsMEJBQTBCLDREQUE0RCx5QkFBeUIsMEpBQTBKLHlCQUF5QixXQUFXLHlCQUF5QixXQUFXLFdBQVcscUVBQXFFLFVBQVUscUVBQXFFLFdBQVcsaUZBQWlGLGtDQUFrQywwTUFBME0sc0JBQXNCLGtCQUFrQixjQUFjLHlCQUF5QixxRUFBcUUsb0NBQW9DLHNDQUFzQyxzRUFBc0UsaUJBQWlCLHlCQUF5QixxQkFBcUIsd0RBQXdELGNBQWMsd0JBQXdCLHFCQUFxQiwyQkFBMkIscUJBQXFCLDRFQUE0RSxxQkFBcUIscUNBQXFDLDhCQUE4QiwwQkFBMEIsNERBQTRELHFCQUFxQiwwSkFBMEoseUJBQXlCLHFCQUFxQix5QkFBeUIscUJBQXFCLFdBQVcscUVBQXFFLFVBQVUscUVBQXFFLHFCQUFxQixpRkFBaUYsa0NBQWtDLDBNQUEwTSxnQ0FBZ0MsNEJBQTRCLGNBQWMseUJBQXlCLHFFQUFxRSxvQ0FBb0Msc0NBQXNDLHNFQUFzRSxnQkFBZ0IseUJBQXlCLFdBQVcsc0RBQXNELGNBQWMsdUJBQXVCLFdBQVcsMEJBQTBCLHlCQUF5QiwwRUFBMEUsV0FBVyxxQ0FBcUMsNkJBQTZCLDBCQUEwQiwwREFBMEQseUJBQXlCLHNKQUFzSix5QkFBeUIsV0FBVyx3QkFBd0IsV0FBVyxXQUFXLG1FQUFtRSxVQUFVLG1FQUFtRSxXQUFXLCtFQUErRSxrQ0FBa0Msc01BQXNNLHNCQUFzQixrQkFBa0IsY0FBYyx3QkFBd0IscUVBQXFFLG9DQUFvQyxxQ0FBcUMsc0VBQXNFLDBCQUEwQixzQkFBc0IsbUJBQW1CLDBDQUEwQywyQkFBMkIsb0JBQW9CLGtCQUFrQiwwQ0FBMEMsMEJBQTBCLHFCQUFxQixtQkFBbUIsOERBQThELHlCQUF5QixzQkFBc0IsbUJBQW1CLG9CQUFvQixvQkFBb0IsYUFBYSxvRkFBb0YsbUJBQW1CLG9CQUFvQixZQUFZLG9CQUFvQixjQUFjLG9CQUFvQixnQkFBZ0Isb0JBQW9CLGlCQUFpQixZQUFZLFNBQVMsT0FBTyxrQkFBa0IsUUFBUSxNQUFNLGdCQUFnQixrQkFBa0IsU0FBUyxnQkFBZ0IsZUFBZSxrQkFBa0IsUUFBUSwyQ0FBMkMsbUNBQW1DLDJCQUEyQixXQUFXLG9DQUFvQyxZQUFZLGNBQWMsY0FBYyxrQkFBa0Isb0NBQW9DLHNCQUFzQixvQkFBb0Isb0JBQW9CLGFBQWEsdUNBQXVDLHNCQUFzQiwwQ0FBMEMsY0FBYyxvQkFBb0Isb0JBQW9CLGFBQWEsd0JBQXdCLHFCQUFxQix1QkFBdUIsdUNBQXVDLHFCQUFxQixzQkFBc0IsbUJBQW1CLG9CQUFvQixZQUFZLGlDQUFpQyxvQkFBb0IsY0FBYyxXQUFXLG1CQUFtQixvQkFBb0IsWUFBWSxvQkFBb0Isb0JBQW9CLHFDQUFxQyxtQkFBbUIsb0JBQW9CLGtCQUFrQixzQkFBc0IsUUFBUSx5QkFBeUIseUJBQXlCOztBQUV2ODdLOzs7Ozs7O0FDUEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3pCQTtBQUNBO0FBQ0EsaUNBQTRFO0FBQzVFLGlDQUE0RTs7QUFFNUU7QUFDQSwrQkFBZ0MsdUJBQXVCLDBCQUEwQixLQUFLLFdBQVcsWUFBWSxnQkFBZ0IsS0FBSyxnQkFBZ0Isa0JBQWtCLGNBQWMscUJBQXFCLEVBQUUsOEJBQThCLFVBQVUsZ0JBQWdCLFlBQVksWUFBWSxLQUFLLDBDQUEwQyxjQUFjLGtCQUFrQixnQkFBZ0Isd0JBQXdCLElBQUksU0FBUyxZQUFZLGdCQUFnQixVQUFVLFVBQVUsaUJBQWlCLGVBQWUsaUJBQWlCLGdCQUFnQixVQUFVLGtCQUFrQixnQkFBZ0IsOEJBQThCLFdBQVcsR0FBRyxlQUFlLGlCQUFpQixTQUFTLG1CQUFtQixNQUFNLGtCQUFrQixHQUFHLGVBQWUsaUJBQWlCLGdCQUFnQixtQkFBbUIsRUFBRSxtQkFBbUIsSUFBSSxlQUFlLFFBQVEsa0JBQWtCLEdBQUcsVUFBVSxTQUFTLGdCQUFnQixRQUFRLGdCQUFnQixXQUFXLGtCQUFrQixjQUFjLGVBQWUsRUFBRSxxQkFBcUIsY0FBYyxhQUFhLG9CQUFvQix1QkFBdUIsNEJBQTRCLFFBQVEsY0FBYyxNQUFNLHFCQUFxQixpQ0FBaUMsY0FBYyxtQkFBbUIsbUJBQW1CLGdCQUFnQixZQUFZLFdBQVcsS0FBSywwQkFBMEIsSUFBSSxtQkFBbUIsS0FBSyw2QkFBNkIsTUFBTSxnQkFBZ0IsTUFBTSxvQkFBb0IsS0FBSyxjQUFjLFdBQVcsZUFBZSwyQkFBMkIsOEJBQThCLHlCQUF5QixzQkFBc0IsbUJBQW1CLGtCQUFrQixPQUFPLFdBQVcsa0JBQWtCLGFBQWEsZ0JBQWdCLHlCQUF5QixRQUFRLHNCQUFzQixLQUFLLHlCQUF5QixTQUFTLGlCQUFpQixRQUFRLGtCQUFrQix3QkFBd0IsZ0JBQWdCLE9BQU8scUJBQXFCLFdBQVcsT0FBTyxjQUFjLGtCQUFrQixZQUFZLG1CQUFtQixlQUFlLFdBQVcsVUFBVSxrQkFBa0IsVUFBVSxvQkFBb0IsR0FBRyxZQUFZLFlBQVksS0FBSyxnQkFBZ0IsWUFBWSxhQUFhLG1CQUFtQixtQkFBbUIsc0JBQXNCLDJCQUEyQixjQUFjLGNBQWMsUUFBUSxZQUFZLFdBQVcsa0JBQWtCLGdCQUFnQixnQkFBZ0IsY0FBYyx5QkFBeUIsWUFBWSxXQUFXLFlBQVksMEJBQTBCLFdBQVcsMENBQTBDLFdBQVcsMkJBQTJCLDhCQUE4Qix5QkFBeUIsc0JBQXNCLFVBQVUsV0FBVyxZQUFZLGNBQWMsa0JBQWtCLFFBQVEsTUFBTSxlQUFlLGdCQUFnQixXQUFXLFNBQVMsa0JBQWtCLFlBQVksaUJBQWlCLGdCQUFnQixtQkFBbUIsV0FBVyxjQUFjLFdBQVcsV0FBVyxZQUFZLGFBQWEsZ0JBQWdCLDRCQUE0QixlQUFlLDRCQUE0QixpQkFBaUIsNEJBQTRCLGlCQUFpQixXQUFXLGNBQWMsbUJBQW1CLFNBQVMsdUJBQXVCLG9CQUFvQixnQkFBZ0Isa0JBQWtCLG1CQUFtQixnQkFBZ0IsbUJBQW1CLGdCQUFnQixpQkFBaUIsbUJBQW1CLHNCQUFzQixlQUFlLGdCQUFnQix3QkFBd0IsV0FBVyxnQkFBZ0IsbUJBQW1CLGdCQUFnQixzQkFBc0IsZUFBZSx5QkFBeUIsZ0JBQWdCLCtCQUErQixnQkFBZ0Isb0JBQW9CLGlCQUFpQixZQUFZLDBCQUEwQixXQUFXLDhCQUE4QixjQUFjLDBDQUEwQyxXQUFXLFdBQVcsa0JBQWtCLGdCQUFnQixnQkFBZ0IsS0FBSyxZQUFZLFNBQVMsZUFBZSxpQkFBaUIsY0FBYyxXQUFXLFlBQVksa0JBQWtCLGVBQWUsZ0JBQWdCLFNBQVMsa0JBQWtCLFNBQVMsdUJBQXVCLGdCQUFnQixnQkFBZ0IsY0FBYyxhQUFhLGdCQUFnQix1Q0FBdUMsZUFBZSw4QkFBOEIsZ0JBQWdCLGdCQUFnQixLQUFLLFdBQVcsZUFBZSxlQUFlLFdBQVcsa0JBQWtCLGNBQWMsY0FBYyx5QkFBeUIsV0FBVyxpQkFBaUIsV0FBVyxXQUFXLGdCQUFnQixnQkFBZ0IsWUFBWSxrQkFBa0IsaUNBQWlDLFlBQVksa0JBQWtCLG1CQUFtQixnQkFBZ0IsY0FBYyxlQUFlLFlBQVksZ0JBQWdCLGVBQWUsZ0JBQWdCLGtCQUFrQixnQkFBZ0IsS0FBSyxnQkFBZ0IsWUFBWSx1Q0FBdUMsZUFBZSxvQkFBb0IsWUFBWSxXQUFXLDJCQUEyQiw4QkFBOEIseUJBQXlCLHNCQUFzQixjQUFjLG1CQUFtQix5QkFBeUIsbUJBQW1CLFdBQVcsYUFBYSxlQUFlLGFBQWEsaUJBQWlCLGdCQUFnQixpQkFBaUIsV0FBVyxXQUFXLGdCQUFnQixlQUFlLHFCQUFxQixnQkFBZ0IsT0FBTyxXQUFXLGNBQWMsZUFBZSw2QkFBNkIsa0JBQWtCLFFBQVEsU0FBUyxPQUFPLGFBQWEsa0JBQWtCOztBQUV6bUs7Ozs7Ozs7QUNSQTtBQUNBOzs7QUFHQTtBQUNBLDhCQUErQixnQkFBZ0IsY0FBYyxpQkFBaUIsa0JBQWtCLFlBQVksbUdBQW1HLGVBQWUsV0FBVyxpQkFBaUIsa0JBQWtCLG9MQUFvTCxrQkFBa0IsT0FBTyxjQUFjLE9BQU8sZUFBZSxzQkFBc0IsV0FBVyxzQkFBc0IsWUFBWSxzQkFBc0IsWUFBWSxzQkFBc0IsWUFBWSxzQkFBc0IsWUFBWSxzQkFBc0IsWUFBWSxzQkFBc0IsWUFBWSxzQkFBc0IsWUFBWSxzQkFBc0IsWUFBWSx1QkFBdUIsWUFBWSx1QkFBdUIsWUFBWSx1QkFBdUIsWUFBWSx3QkFBd0Isa0JBQWtCLHdCQUF3QixtQkFBbUIsd0JBQXdCLG1CQUFtQix3QkFBd0IsbUJBQW1CLHdCQUF3QixtQkFBbUIsd0JBQXdCLG1CQUFtQix3QkFBd0IsbUJBQW1CLHdCQUF3QixtQkFBbUIsd0JBQXdCLG1CQUFtQix5QkFBeUIsbUJBQW1CLHlCQUF5QixtQkFBbUIsd0JBQXdCLG1CQUFtQix3QkFBd0Isb0JBQW9CLHdCQUF3QixvQkFBb0Isd0JBQXdCLG9CQUFvQix3QkFBd0Isb0JBQW9CLHdCQUF3QixvQkFBb0Isd0JBQXdCLG9CQUFvQix3QkFBd0Isb0JBQW9CLHdCQUF3QixvQkFBb0IseUJBQXlCLG9CQUFvQix5QkFBeUIsb0JBQW9CLHNCQUFzQixVQUFVLHNCQUFzQixXQUFXLHNCQUFzQixXQUFXLHNCQUFzQixXQUFXLHNCQUFzQixXQUFXLHNCQUFzQixXQUFXLHNCQUFzQixXQUFXLHNCQUFzQixXQUFXLHNCQUFzQixXQUFXLHVCQUF1QixXQUFXLHVCQUF1QixXQUFXLHNCQUFzQixXQUFXLHNCQUFzQixZQUFZLHNCQUFzQixZQUFZLHNCQUFzQixZQUFZLHNCQUFzQixZQUFZLHNCQUFzQixZQUFZLHNCQUFzQixZQUFZLHNCQUFzQixZQUFZLHNCQUFzQixZQUFZLHVCQUF1QixZQUFZLHVCQUF1QixZQUFZLE9BQU8sV0FBVyxjQUFjLGdCQUFnQixrQkFBa0IsUUFBUSxTQUFTLDBFQUEwRSxjQUFjLGNBQWMsZ0JBQWdCLGtCQUFrQixZQUFZLGNBQWMsUUFBUSxTQUFTLG9DQUFvQyxXQUFXLHdCQUF3QixPQUFPOztBQUU3NEY7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLHFDQUFzQyxrQkFBa0IsWUFBWSxJQUFJLGtCQUFrQixVQUFVLFlBQVksa0JBQWtCLFdBQVcsYUFBYSx3QkFBd0IsV0FBVyxrQkFBa0IsY0FBYyxlQUFlLDhCQUE4QixXQUFXLGNBQWMsaUJBQWlCLFlBQVksa0JBQWtCLHVCQUF1QixzRUFBc0Usd0JBQXdCLFdBQVcseUJBQXlCLHNDQUFzQyxVQUFVLFdBQVcsWUFBWSxZQUFZLGlCQUFpQixvQkFBb0Isc0JBQXNCLGtCQUFrQixrQkFBa0IscUJBQXFCLGtCQUFrQixvQkFBb0IseUJBQXlCLGdDQUFnQyxrQkFBa0IsV0FBVyx3REFBd0QsY0FBYzs7QUFFcDNCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4M2YzNDhhMWM5OTQ1ODhlZTczMyIsImltcG9ydCB7IExpZmUgfSBmcm9tIFwiLi4vLi4vY29oZXJlbmNlL2ludGVyZmFjZXMvSUNvaGVyZW5jZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBJbk1lbW9yeUNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9jb2hlcmVuY2UvY29uY3JldGUvSW5NZW1vcnlDb250YWluZXJcIjtcclxuaW1wb3J0IHsgQWpheENvbW11bmljYXRvciB9IGZyb20gXCIuLi8uLi9iYWNrZW5kL2NvbmNyZXRlL2FqYXgvQWpheENvbW11bmljYXRvclwiO1xyXG5pbXBvcnQgeyBJbnN0YW50aWF0ZWRFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9ydW50aW1lL0luc3RhbnRpYXRlZEV4Y2VwdGlvblwiO1xyXG5pbXBvcnQgeyBIdG1sNUhpc3RvcnlBUEkgfSBmcm9tIFwiLi4vLi4vaGlzdG9yeS9jb25jcmV0ZS9IdG1sNUhpc3RvcnlBUElcIjtcclxuaW1wb3J0IHsgQ29uc29sZUxvZ2dlciB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2xvZ2dpbmcvY29uY3JldGUvQ29uc29sZUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBBamF4UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9iYWNrZW5kL2NvbmNyZXRlL2FqYXgvQWpheFJlcXVlc3RcIjtcclxuaW1wb3J0IHsgQmFzaWNSb3V0ZXIgfSBmcm9tIFwiLi4vLi4vcm91dGluZy9jb25jcmV0ZS9CYXNpY1JvdXRlclwiO1xyXG5pbXBvcnQgeyBJU3RhdGVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL3N0YXRlcy9pbnRlcmZhY2VzL0lTdGF0ZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL3N0b3JhZ2UvY29uY3JldGUvTG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCB7IENsaWVudFRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4uLy4uL3RlbXBsYXRpbmcvY29uY3JldGUvbXVzdGFjaGUvQ2xpZW50VGVtcGxhdGVFbmdpbmVcIjtcclxuaW1wb3J0IHsgTm90aWZ5VmFsaWRhdGluZ1JlcG9ydGVyIH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRpbmcvcmVwb3J0ZXIvY29uY3JldGUvTm90aWZ5VmFsaWRhdGluZ1JlcG9ydGVyXCI7XHJcbmltcG9ydCB7IEJhc2VWaWV3QmluZGVyIH0gZnJvbSBcIi4uLy4uL3ZpZXdiaW5kaW5nL2NvbmNyZXRlL0Jhc2VWaWV3QmluZGVyXCI7XHJcbmltcG9ydCB7IEJhc2VGaWVsZEJpbmRpbmcgfSBmcm9tIFwiLi4vLi4vYmluZGluZy9jb25jcmV0ZS9CYXNlRmllbGRCaW5kaW5nXCI7XHJcbmltcG9ydCB7IEV2ZW50QmluZGluZyB9IGZyb20gXCIuLi8uLi9iaW5kaW5nL2NvbmNyZXRlL0V2ZW50QmluZGluZ1wiO1xyXG5pbXBvcnQgeyBCYXNlSW5wdXRCaW5kaW5nIH0gZnJvbSBcIi4uLy4uL2JpbmRpbmcvY29uY3JldGUvQmFzZUlucHV0QmluZGluZ1wiO1xyXG5pbXBvcnQgeyBCYXNlQ29sbGVjdGlvbkJpbmRpbmcgfSBmcm9tIFwiLi4vLi4vYmluZGluZy9jb25jcmV0ZS9CYXNlQ29sbGVjdGlvbkJpbmRpbmdcIjtcclxuaW1wb3J0IHsgSUNvbW11bmljYXRvciB9IGZyb20gXCIuLi8uLi9iYWNrZW5kL2ludGVyZmFjZXMvSUNvbW11bmljYXRvclwiO1xyXG5pbXBvcnQgeyBJSGlzdG9yeSB9IGZyb20gXCIuLi8uLi9oaXN0b3J5L2ludGVyZmFjZXMvSUhpc3RvcnlcIjtcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2xvZ2dpbmcvaW50ZXJmYWNlcy9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IElSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL2JhY2tlbmQvaW50ZXJmYWNlcy9JUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBJUm91dGVyIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmcvaW50ZXJmYWNlcy9JUm91dGVyXCI7XHJcbmltcG9ydCB7IElTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL3N0b3JhZ2UvaW50ZXJmYWNlcy9JU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBJVGVtcGxhdGVFbmdpbmUgfSBmcm9tIFwiLi4vLi4vdGVtcGxhdGluZy9pbnRlcmZhY2VzL0lUZW1wbGF0ZUVuZ2luZVwiO1xyXG5pbXBvcnQgeyBJVmFsaWRhdGluZ1JlcG9ydGVyIH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRpbmcvcmVwb3J0ZXIvaW50ZXJmYWNlcy9JVmFsaWRhdGF0aW5nUmVwb3J0ZXJcIjtcclxuaW1wb3J0IHsgSVZpZXdCaW5kZXIgfSBmcm9tIFwiLi4vLi4vdmlld2JpbmRpbmcvaW50ZXJmYWNlcy9JVmlld0JpbmRlclwiO1xyXG5pbXBvcnQgeyBJQmluZGluZyB9IGZyb20gXCIuLi8uLi9iaW5kaW5nL2ludGVyZmFjZXMvSUJpbmRpbmdcIjtcclxuaW1wb3J0IHsgSVZpZXdFbmdpbmUgfSBmcm9tIFwiLi4vLi4vdmlld2VuZ2luZS9pbnRlcmZhY2VzL0lWaWV3RW5naW5lXCI7XHJcbmltcG9ydCB7IEJhc2VWaWV3RW5naW5lIH0gZnJvbSBcIi4uLy4uL3ZpZXdlbmdpbmUvY29uY3JldGUvQmFzZVZpZXdFbmdpbmVcIjtcclxuaW1wb3J0IHsgQmFzZVZpZXdQdWJsaXNoZXIgfSBmcm9tIFwiLi4vLi4vdmlld2VuZ2luZS9jb25jcmV0ZS9CYXNlVmlld1B1Ymxpc2hlclwiO1xyXG5pbXBvcnQgeyBJVmlld1B1Ymxpc2hlciB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2ludGVyZmFjZXMvSVZpZXdQdWJsaXNoZXJcIjtcclxuaW1wb3J0IHsgUHJvcGVydHlCaW5kaW5nIH0gZnJvbSBcIi4uLy4uL2JpbmRpbmcvY29uY3JldGUvUHJvcGVydHlCaW5kaW5nXCI7XHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluc3RhbnRpYXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXIodHlwZSwgdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tcImBjb250YWluZXJcIl0ucmVnaXN0ZXIodHlwZSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmVzb2x2ZSh0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUodHlwZSk7XHJcbiAgICB9XHJcbiAgICByZXNvbHZlQWxsKHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZUFsbCh0eXBlKTtcclxuICAgIH1cclxuICAgIHJlbGVhc2UodHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWxlYXNlKHR5cGUpO1xyXG4gICAgfVxyXG4gICAgaW5zdGFudGlhdGUodHlwZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbXCJgY29udGFpbmVyXCJdLmluc3RhbnRpYXRlKHR5cGUsIHBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBhbGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbXCJgY29udGFpbmVyXCJdLmFsbCgpO1xyXG4gICAgfVxyXG4gICAgaXNyZWdpc3RlcmVkKHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tcImBjb250YWluZXJcIl0uaXNyZWdpc3RlcmVkKHR5cGUpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoZ2VyYW5pdW0pIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW50aWF0ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEluc3RhbnRpYXRlZEV4Y2VwdGlvbihcIkdlcmFuaXVtQXBwLmluc3RhbnRpYXRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiogYXBwbHkgc2V0dGluZ3MgKi9cclxuICAgICAgICBPYmplY3QuYXNzaWduKGdlcmFuaXVtLCBnZXJhbml1bURlZmF1bHQpO1xyXG4gICAgICAgIC8qKiBhcHBseSBjb250YWluZXIgKi9cclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXSA9IGdlcmFuaXVtLmNvbnRhaW5lciA/IG5ldyBnZXJhbml1bS5jb250YWluZXIoKSA6IG5ldyBJbk1lbW9yeUNvbnRhaW5lcigpO1xyXG4gICAgICAgIC8qKiByZWdpc3RlciBhbGwgc2V0dGluZ3MgKi9cclxuICAgICAgICB0aGlzLmludGVybmFsUmVnaXN0ZXIoZ2VyYW5pdW0pO1xyXG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGludGVybmFsUmVnaXN0ZXIoZ2VyYW5pdW0pIHtcclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWdpc3RlcihJQ29tbXVuaWNhdG9yLCBnZXJhbml1bS5jb21tdW5pY2F0b3IsIExpZmUuVHJhbnNpZW50KTtcclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWdpc3RlcihJSGlzdG9yeSwgZ2VyYW5pdW0uaGlzdG9yeXByb3ZpZGVyLCBMaWZlLlNpbmdsZXRvbik7XHJcbiAgICAgICAgdGhpc1tcImBjb250YWluZXJcIl0ucmVnaXN0ZXIoSUxvZ2dlciwgZ2VyYW5pdW0ubG9nZ2VyLCBMaWZlLlRyYW5zaWVudCk7XHJcbiAgICAgICAgdGhpc1tcImBjb250YWluZXJcIl0ucmVnaXN0ZXIoSVJlcXVlc3QsIGdlcmFuaXVtLnJlcXVlc3QsIExpZmUuVHJhbnNpZW50KTtcclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWdpc3RlcihJUm91dGVyLCBnZXJhbml1bS5yb3V0ZXIsIExpZmUuU2luZ2xldG9uKTtcclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWdpc3RlcihJU3RhdGVNYW5hZ2VyLCBnZXJhbml1bS5zdGF0ZW1hbmFnZXIsIExpZmUuU2luZ2xldG9uKTtcclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWdpc3RlcihJU3RvcmFnZSwgZ2VyYW5pdW0uc3RvcmFnZSwgTGlmZS5TaW5nbGV0b24pO1xyXG4gICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlZ2lzdGVyKElUZW1wbGF0ZUVuZ2luZSwgZ2VyYW5pdW0udGVtcGxhdGluZywgTGlmZS5UcmFuc2llbnQpO1xyXG4gICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlZ2lzdGVyKElWYWxpZGF0aW5nUmVwb3J0ZXIsIGdlcmFuaXVtLnZhbGlkYXRpb25yZXBvcnRlciwgTGlmZS5UcmFuc2llbnQpO1xyXG4gICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlZ2lzdGVyKElWaWV3QmluZGVyLCBnZXJhbml1bS52aWV3YmluZGVyLCBMaWZlLlNpbmdsZXRvbik7XHJcbiAgICAgICAgdGhpc1tcImBjb250YWluZXJcIl0ucmVnaXN0ZXIoSVZpZXdFbmdpbmUsIGdlcmFuaXVtLnZpZXdlbmdpbmUsIExpZmUuU2luZ2xldG9uKTtcclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWdpc3RlcihJVmlld1B1Ymxpc2hlciwgZ2VyYW5pdW0udmlld3B1Ymxpc2hlciwgTGlmZS5TaW5nbGV0b24pO1xyXG4gICAgICAgIGdlcmFuaXVtLmJpbmRpbmdzLmZvckVhY2goYmluZGluZyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlZ2lzdGVyKElCaW5kaW5nLCBiaW5kaW5nLCBMaWZlLlRyYW5zaWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuQXBwLmNvbnRhaW5lclByb3BlcnR5ID0gXCJgR2VyYW5pdW1BcHBcIjtcclxuY29uc3QgZ2VyYW5pdW1EZWZhdWx0ID0ge1xyXG4gICAgY29tbXVuaWNhdG9yOiBBamF4Q29tbXVuaWNhdG9yLFxyXG4gICAgaGlzdG9yeXByb3ZpZGVyOiBIdG1sNUhpc3RvcnlBUEksXHJcbiAgICBsb2dnZXI6IENvbnNvbGVMb2dnZXIsXHJcbiAgICByZXF1ZXN0OiBBamF4UmVxdWVzdCxcclxuICAgIHJvdXRlcjogQmFzaWNSb3V0ZXIsXHJcbiAgICBzdGF0ZW1hbmFnZXI6IEluTWVtb3J5Q29udGFpbmVyLFxyXG4gICAgc3RvcmFnZTogTG9jYWxTdG9yYWdlLFxyXG4gICAgdGVtcGxhdGluZzogQ2xpZW50VGVtcGxhdGVFbmdpbmUsXHJcbiAgICB2YWxpZGF0aW9ucmVwb3J0ZXI6IE5vdGlmeVZhbGlkYXRpbmdSZXBvcnRlcixcclxuICAgIHZpZXdiaW5kZXI6IEJhc2VWaWV3QmluZGVyLFxyXG4gICAgdmlld2VuZ2luZTogQmFzZVZpZXdFbmdpbmUsXHJcbiAgICB2aWV3cHVibGlzaGVyOiBCYXNlVmlld1B1Ymxpc2hlcixcclxuICAgIGJpbmRpbmdzOiBbXHJcbiAgICAgICAgQmFzZUZpZWxkQmluZGluZyxcclxuICAgICAgICBCYXNlSW5wdXRCaW5kaW5nLFxyXG4gICAgICAgIEV2ZW50QmluZGluZyxcclxuICAgICAgICBCYXNlQ29sbGVjdGlvbkJpbmRpbmcsXHJcbiAgICAgICAgUHJvcGVydHlCaW5kaW5nXHJcbiAgICBdXHJcbn07XHJcbmZ1bmN0aW9uIGdldEFwcCgpIHtcclxuICAgIGlmICghd2luZG93W0FwcC5jb250YWluZXJQcm9wZXJ0eV0pIHtcclxuICAgICAgICB3aW5kb3dbQXBwLmNvbnRhaW5lclByb3BlcnR5XSA9IG5ldyBBcHAoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB3aW5kb3dbQXBwLmNvbnRhaW5lclByb3BlcnR5XTtcclxufVxyXG4vKiogQXBwbGljYXRpb24gaW50YW5jZSB3aXRoIGluLWJ1aWxkIGNvbnRhaW5lciAqL1xyXG52YXIgR2VyYW5pdW1BcHAgPSBnZXRBcHAoKTtcclxuLyoqIEFwcGxpY2F0aW9uIGludGFuY2Ugd2l0aCBpbi1idWlsZCBjb250YWluZXIgKi9cclxuZXhwb3J0IGRlZmF1bHQgR2VyYW5pdW1BcHA7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFwcC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9ydW50aW1lL2NvbmNyZXRlL0FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFeGNlcHRpb24gfSBmcm9tIFwiLi4vRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiBleHRlbmRzIEV4Y2VwdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcclxuICAgICAgICBtc2cgKz0gXCJJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbjogeW91IGNhbiBub3QgdXNlIGludGVyZmFjZS1saWtlIGNsYXNzIVwiO1xyXG4gICAgICAgIHN1cGVyKG1zZyk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW50ZXJmYWNlVXNpbmdFeGNlcHRpb24uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tIFwiLi4vY29udHJhY3RzL1JvdXRlXCI7XHJcbmltcG9ydCB7IFJvdXRlQ29udGV4dCB9IGZyb20gXCIuLi9jb250cmFjdHMvUm91dGVDb250ZXh0XCI7XHJcbmltcG9ydCB7IEFycmF5SGVscGVyIH0gZnJvbSBcIi4uLy4uL2RlY2xhcmUvYXJyYXlcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG52YXIgX2lnbm9yZWRSb3V0ZXMgPSBbXTtcclxudmFyIF9yb3V0ZXMgPSBbXTtcclxuZXhwb3J0IHZhciBzZXR0aW5ncyA9IHsgcGFyYW1ldGVyRnVsbFVybDogZmFsc2UgfTtcclxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlcygpIHtcclxuICAgIHJldHVybiBfcm91dGVzLnNsaWNlKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHVybEZyb21DdG9yKGN0b3IsIHBhcmFtcykge1xyXG4gICAgdmFyIGluc3RhbmNlID0gR2VyYW5pdW1BcHAuaW5zdGFudGlhdGUoY3Rvcik7XHJcbiAgICBsZXQgY2hhaW4gPSBjaGFpbk9mQ3Rvck5hbWVzKGluc3RhbmNlLCBudWxsKTtcclxuICAgIHZhciByb3V0ZVVybCA9IEFycmF5SGVscGVyLnJlbW92ZVNhbWUoY2hhaW4pXHJcbiAgICAgICAgLnJldmVyc2UoKTtcclxuICAgIGlmIChwYXJhbXMgJiYgc2V0dGluZ3MucGFyYW1ldGVyRnVsbFVybClcclxuICAgICAgICByb3V0ZVVybC5wdXNoLmFwcGx5KHJvdXRlVXJsLCBwYXJhbXMpO1xyXG4gICAgcmV0dXJuICcvJyArIHJvdXRlVXJsLmpvaW4oXCIvXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlZChwYXJhbSwgYWJzb3JiKSB7XHJcbiAgICAvL2NsZWFuIHJvdXRlIG92ZXJsb2FkXHJcbiAgICBpZiAodHlwZW9mIHBhcmFtICE9PSAnc3RyaW5nJ1xyXG4gICAgICAgIC8vY29udGV4dCBvdmVybG9hZFxyXG4gICAgICAgICYmICEocGFyYW0gaW5zdGFuY2VvZiBSb3V0ZUNvbnRleHQpXHJcbiAgICAgICAgLy9wYXJlbnQgb3ZlcmxvYWRcclxuICAgICAgICAmJiAhYWJzb3JiKVxyXG4gICAgICAgIC8vY2xlYW4gZGVjb3JhdGVcclxuICAgICAgICBfcm91dGVkKHBhcmFtLCB1cmxGcm9tQ3RvcihwYXJhbSkpO1xyXG4gICAgZWxzZVxyXG4gICAgICAgIHJldHVybiAoY29uc3RydWN0b3IpID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgICAgICBfcm91dGVkKGNvbnN0cnVjdG9yLCBwYXJhbSk7XHJcbiAgICAgICAgICAgIGlmIChhYnNvcmIpXHJcbiAgICAgICAgICAgICAgICBfcm91dGVkKGNvbnN0cnVjdG9yLCB1cmxGcm9tQ3RvcihwYXJhbSkgKyB1cmxGcm9tQ3Rvcihjb25zdHJ1Y3RvcikpO1xyXG4gICAgICAgICAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBSb3V0ZUNvbnRleHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSB1cmxGcm9tQ3Rvcihjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW0ucGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHVybEZyb21DdG9yKHBhcmFtLnBhcmVudCkgKyB1cmw7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW0ucHJlcGF0aClcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBwYXJhbS5wcmVwYXRoICsgdXJsO1xyXG4gICAgICAgICAgICAgICAgX3JvdXRlZChjb25zdHJ1Y3RvciwgdXJsLCBwYXJhbS5leGVjdXRhYmxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlaWdub3JlKGNvbnN0cnVjdG9yKSB7XHJcbiAgICBpZiAoIV9pZ25vcmVkUm91dGVzKSB7XHJcbiAgICAgICAgX2lnbm9yZWRSb3V0ZXMgPSBbXTtcclxuICAgIH1cclxuICAgIF9pZ25vcmVkUm91dGVzLnB1c2goY29uc3RydWN0b3IubmFtZSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlcm9vdChjb25zdHJ1Y3Rvcikge1xyXG4gICAgX3JvdXRlZChjb25zdHJ1Y3RvciwgJy4vJyk7XHJcbn1cclxuZnVuY3Rpb24gX3JvdXRlZChjdG9yLCB1cmwsIGV4ZWN1dGFibGUpIHtcclxuICAgIHZhciByb3V0ZSA9IG5ldyBSb3V0ZSgpO1xyXG4gICAgcm91dGUudXJsID0gdXJsLFxyXG4gICAgICAgIHJvdXRlLmN0b3IgPSBjdG9yO1xyXG4gICAgcm91dGUuZXhlY3V0YWJsZSA9IGV4ZWN1dGFibGU7XHJcbiAgICBjdG9yLnByb3RvdHlwZVtcIkByb3V0ZWRcIl0gPSByb3V0ZTtcclxuICAgIF9yb3V0ZXMucHVzaChyb3V0ZSk7XHJcbn1cclxuZnVuY3Rpb24gY2hhaW5PZkN0b3JOYW1lcyhvYmosIG5hbWVzKSB7XHJcbiAgICBpZiAobmFtZXMgPT0gbnVsbClcclxuICAgICAgICBuYW1lcyA9IFtdO1xyXG4gICAgaWYgKG9iaiA9PSBudWxsKVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgdmFyIHJvdXRlID0gb2JqLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICBpZiAocm91dGUgPT0gXCJPYmplY3RcIilcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIGlmIChfaWdub3JlZFJvdXRlcy5pbmRleE9mKHJvdXRlKSA9PSAtMSlcclxuICAgICAgICBuYW1lcy5wdXNoKHJvdXRlKTtcclxuICAgIG9iaiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xyXG4gICAgbmFtZXMuY29uY2F0KGNoYWluT2ZDdG9yTmFtZXMob2JqLCBuYW1lcykpO1xyXG4gICAgcmV0dXJuIG5hbWVzO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlY29yYXRvcnMuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb25jcmV0ZS9kZWNvcmF0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBBcnJheUhlbHBlciB7XHJcbiAgICBzdGF0aWMgcmVtb3ZlKGFycmF5LCBpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihlID0+IGUgIT09IGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlbW92ZVNhbWUoYXJyYXkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkuZmlsdGVyKGZ1bmN0aW9uIChlbGVtLCBpbmRleCwgc2VsZikge1xyXG4gICAgICAgICAgICByZXR1cm4gaW5kZXggPT0gc2VsZi5pbmRleE9mKGVsZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGdyb3VwQnkoYXJyYXksIGtleSkge1xyXG4gICAgICAgIHZhciBncm91cHMgPSBbXTtcclxuICAgICAgICB2YXIgdGFyZ2V0S2V5cyA9IGFycmF5Lm1hcCh4ID0+IHhba2V5XSk7XHJcbiAgICAgICAgdmFyIHVuaXF1ZSA9IHRhcmdldEtleXMuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIGFycmF5KSA9PiBhcnJheS5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpO1xyXG4gICAgICAgIHVuaXF1ZS5mb3JFYWNoKHogPT4ge1xyXG4gICAgICAgICAgICBncm91cHMucHVzaChhcnJheS5maWx0ZXIoeCA9PiB4W2tleV0gPT0geikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBncm91cHM7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXJyYXkuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZGVjbGFyZS9hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4uLy4uL3ZpZXcvYWJzdHJhY3QvVmlld1wiO1xyXG5pbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmV4cG9ydCBjbGFzcyBJVmlld0VuZ2luZSB7XHJcbiAgICBleGVjdXRlKGNvbnRleHQpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVZpZXdFbmdpbmUuZXhlY3V0ZVwiKTsgfVxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gY29tcGxldGUgcmVuZGVyZWQgdmlld1xyXG4gICAgICogQHBhcmFtIHNlbGVjdG9yXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBWaWV3RW5naW5lVmlldyhpdmlld2VkLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB2aWV3O1xyXG4gICAgICAgICAgICB2YXIgdmlld2N0ciA9IGl2aWV3ZWQudmlldygpO1xyXG4gICAgICAgICAgICBjb25zdCBpc1N0cmluZyA9IHR5cGVvZiB2aWV3Y3RyID09PSBcInN0cmluZ1wiO1xyXG4gICAgICAgICAgICBpZiAoaXNTdHJpbmcgfHwgISF2aWV3Y3RyW1wiZGVjbGFyZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IFtzZWxlY3Rvcl07XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzLnB1c2godmlld2N0cik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5zdFZpZXcgPSBHZXJhbml1bUFwcC5pbnN0YW50aWF0ZShFbXB0eVZpZXcsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgaW5zdFZpZXcuZGF0YSA9IGl2aWV3ZWQ7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBpbnN0Vmlldy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIHZpZXcgPSBpbnN0VmlldztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZpZXcgPSBHZXJhbml1bUFwcC5pbnN0YW50aWF0ZSh2aWV3Y3RyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2aWV3LmRhdGEgPSBpdmlld2VkO1xyXG4gICAgICAgICAgICByZXR1cm4gdmlldztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBFbXB0eVZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuICAgIGRlY2xhcmUoKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JVmlld0VuZ2luZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3ZW5naW5lL2ludGVyZmFjZXMvSVZpZXdFbmdpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGZ1bmN0aW9uIGZpbmRBbmRGaWx0ZXIoc2V0LCBxdWVyeSkge1xyXG4gICAgcmV0dXJuIHNldC5tYXAocm9vdCA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcm9vdC5wYXJlbnRFbGVtZW50IHx8IHJvb3Q7XHJcbiAgICAgICAgcmV0dXJuIHRvSHRtbEFycmF5KHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XHJcbiAgICB9KS5yZWR1Y2UoKHAsIG4pID0+IHAuY29uY2F0KG4pKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdG9IdG1sQXJyYXkobm9kZXMpIHtcclxuICAgIHJldHVybiBub2RlVG9BcnJheShub2Rlcyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG5vZGVUb0FycmF5KG5vZGVzKSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZXMsIDApO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUh0bWxFbGVtZW50RXh0ZW5zaW9ucy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leHRlbnNpb25zL0h0bWxFbGVtZW50RXh0ZW5zaW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSUJpbmRpbmcge1xyXG4gICAgYmluZChvYmplY3RET00sIG1vZGVsKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklCaW5kaW5nLmJpbmRcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JQmluZGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2ludGVyZmFjZXMvSUJpbmRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgcm91dGVpZ25vcmUgfSBmcm9tIFwiLi4vLi4vcm91dGluZy9jb25jcmV0ZS9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IFZpZXdTdGF0ZSB9IGZyb20gXCIuL1ZpZXdTdGF0ZVwiO1xyXG5pbXBvcnQgeyBJVmlld0VuZ2luZSB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2ludGVyZmFjZXMvSVZpZXdFbmdpbmVcIjtcclxuaW1wb3J0IHsgaXMgfSBmcm9tIFwiLi4vLi4vaGlzdG9yeS9kZWNvcmF0b3JzL2hpc3RvcnlcIjtcclxuaW1wb3J0IHsgSGlzdG9yeUl0ZW0gfSBmcm9tIFwiLi4vLi4vaGlzdG9yeS9jb250cmFjdHMvSGlzdG9yeUl0ZW1cIjtcclxuaW1wb3J0IHsgSUhpc3RvcnkgfSBmcm9tIFwiLi4vLi4vaGlzdG9yeS9pbnRlcmZhY2VzL0lIaXN0b3J5XCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuaW1wb3J0IHsgSVZpZXdQdWJsaXNoZXIgfSBmcm9tIFwiLi4vLi4vdmlld2VuZ2luZS9pbnRlcmZhY2VzL0lWaWV3UHVibGlzaGVyXCI7XHJcbmxldCBWaWV3TW9kZWwgPSBjbGFzcyBWaWV3TW9kZWwgZXh0ZW5kcyBWaWV3U3RhdGUge1xyXG4gICAgc2hvdyhzZWxlY3Rvcikge1xyXG4gICAgICAgIGNvbnN0IF9zdXBlciA9IG5hbWUgPT4gc3VwZXJbbmFtZV07XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREb2N1bWVudFRpdGxlKCk7XHJcbiAgICAgICAgICAgIGlmIChpcyh0aGlzLmNvbnN0cnVjdG9yKSAmJiAhdGhpc1snI3JvdXRlZCddKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3JvdXRlZCA9IHRoaXNbXCJAcm91dGVkXCJdO1xyXG4gICAgICAgICAgICAgICAgX3JvdXRlZC5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9oaXN0b3J5ID0gbmV3IEhpc3RvcnlJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICBfaGlzdG9yeS51cmwgPSBfcm91dGVkLnVybDtcclxuICAgICAgICAgICAgICAgIF9oaXN0b3J5LnRpdGxlID0gZG9jdW1lbnQudGl0bGU7XHJcbiAgICAgICAgICAgICAgICBfaGlzdG9yeS5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjdG9yOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgR2VyYW5pdW1BcHAucmVzb2x2ZShJSGlzdG9yeSkuZXh0ZW5kKF9oaXN0b3J5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1snI3JvdXRlZCddO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZWZ1bGwpIHtcclxuICAgICAgICAgICAgICAgIF9zdXBlcihcInNob3dcIikuY2FsbCh0aGlzLCBzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb20gPSB5aWVsZCBHZXJhbml1bUFwcC5yZXNvbHZlKElWaWV3RW5naW5lKS5leGVjdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpVmlld2VkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBHZXJhbml1bUFwcC5yZXNvbHZlKElWaWV3UHVibGlzaGVyKS5wdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBkb206IGRvbSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXREb2N1bWVudFRpdGxlKCkge1xyXG4gICAgICAgIHZhciB0aXRsZSA9IHRoaXMuZG9jdW1lbnRUaXRsZSgpO1xyXG4gICAgICAgIGlmICh0aXRsZSAhPSBudWxsKVxyXG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnRUaXRsZSgpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgIHRvU3RyaW5nKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvdyhzZWxlY3Rvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblZpZXdNb2RlbCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgcm91dGVpZ25vcmVcclxuXSwgVmlld01vZGVsKTtcclxuZXhwb3J0IHsgVmlld01vZGVsIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZpZXdNb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3bW9kZWxzL2Fic3RyYWN0L1ZpZXdNb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IobXNnKSB7XHJcbiAgICAgICAgc3VwZXIobXNnKTtcclxuICAgICAgICB0aGlzLm1zZyA9IG1zZztcclxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YodGhpcywgRXhjZXB0aW9uLnByb3RvdHlwZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgcHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tc2c7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXhjZXB0aW9uLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvRXhjZXB0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgTGlmZTtcclxuKGZ1bmN0aW9uIChMaWZlKSB7XHJcbiAgICBMaWZlW0xpZmVbXCJTaW5nbGV0b25cIl0gPSAwXSA9IFwiU2luZ2xldG9uXCI7XHJcbiAgICBMaWZlW0xpZmVbXCJUcmFuc2llbnRcIl0gPSAxXSA9IFwiVHJhbnNpZW50XCI7XHJcbn0pKExpZmUgfHwgKExpZmUgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JQ29oZXJlbmNlQ29udGFpbmVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2NvaGVyZW5jZS9pbnRlcmZhY2VzL0lDb2hlcmVuY2VDb250YWluZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJQ29tbXVuaWNhdG9yIHtcclxuICAgIHNlbmQoZGF0YSkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJQ29tbXVuaWNhdG9yLnNlbmRcIik7IH1cclxuICAgIHJlY2l2ZSgpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSUNvbW11bmljYXRvci5yZWNpdmVcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JQ29tbXVuaWNhdG9yLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvaW50ZXJmYWNlcy9JQ29tbXVuaWNhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSUhpc3Rvcnkge1xyXG4gICAgZXh0ZW5kKGhpdGVtKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklIaXN0b3J5LmV4dGVuZFwiKTsgfVxyXG4gICAgcmVzdG9yZShzdGF0ZSkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJSGlzdG9yeS5yZXN0b3JlXCIpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SUhpc3RvcnkuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vaGlzdG9yeS9pbnRlcmZhY2VzL0lIaXN0b3J5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSVJvdXRlciB7XHJcbiAgICBnZXQgcm91dGVzKCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJUm91dGVyLnJvdXRlc1wiKTsgfVxyXG4gICAgcm91dGVCeVVybCh1cmwpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVJvdXRlci5yb3V0ZUJ5VXJsXCIpOyB9XHJcbiAgICByb3V0ZShjdXJyZW50KSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklSb3V0ZXIucm91dGVcIik7IH1cclxuICAgIHJvdXRlYXJlYSgpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVJvdXRlci5yb3V0ZWFyZWFcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JUm91dGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvaW50ZXJmYWNlcy9JUm91dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElMb2dnZXIge1xyXG4gICAgbG9nKGVycikgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJTG9nZ2VyLmxvZ1wiKTsgfVxyXG4gICAgZ2V0KCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJTG9nZ2VyLmdldFwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlMb2dnZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXhjZXB0aW9ucy9sb2dnaW5nL2ludGVyZmFjZXMvSUxvZ2dlci5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElWaWV3QmluZGVyIHtcclxuICAgIGJpbmQoY29udGV4dCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJVmlld0JpbmRlci5iaW5kXCIpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVZpZXdCaW5kZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2JpbmRpbmcvaW50ZXJmYWNlcy9JVmlld0JpbmRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tIFwiLi4vLi4vdGVtcGxhdGluZy9jb250cmFjdHMvVGVtcGxhdGVcIjtcclxuaW1wb3J0IHsgRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvRXhjZXB0aW9uXCI7XHJcbmltcG9ydCB7IElUZW1wbGF0ZUVuZ2luZSB9IGZyb20gXCIuLi8uLi90ZW1wbGF0aW5nL2ludGVyZmFjZXMvSVRlbXBsYXRlRW5naW5lXCI7XHJcbmltcG9ydCB7IHRvSHRtbEFycmF5IH0gZnJvbSBcIi4uLy4uL2V4dGVuc2lvbnMvSHRtbEVsZW1lbnRFeHRlbnNpb25zXCI7XHJcbmV4cG9ydCBjbGFzcyBWaWV3IGV4dGVuZHMgVGVtcGxhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnByb3RlY3RSZW5kZXIoYXJndW1lbnRzWzFdKTtcclxuICAgICAgICB0aGlzW1wiJXNlbGVjdG9yXCJdID0gYXJndW1lbnRzWzBdO1xyXG4gICAgfVxyXG4gICAgRE9NKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGxldCB2aWV3ID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9yZW5kZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdmlldyA9IHlpZWxkIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZGl2LmlubmVySFRNTCA9IHZpZXcudGVtcGxhdGU7XHJcbiAgICAgICAgICAgIHJldHVybiB0b0h0bWxBcnJheShkaXYuY2hpbGROb2Rlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQgc2VsZWN0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbXCIlc2VsZWN0b3JcIl07XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCd2aWV3IGRhdGEgaXMgbm90IGFzc2lnbmVkIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZW5kZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbigndmlldyBhbHJlYWR5IHJlbmRlcmVkIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBlbmdpbmUgPSB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlKElUZW1wbGF0ZUVuZ2luZSk7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSB5aWVsZCBlbmdpbmUucGFyc2UodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gcmVzb2x2ZSh0aGlzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0UmVuZGVyKGh0bWwpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5kZWNsYXJlKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSBodG1sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMudGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbigndmlldyB0ZW1wbGF0ZSBpcyBlbXB0eSEnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmlldy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3L2Fic3RyYWN0L1ZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJUmVxdWVzdCB7XHJcbiAgICBzZW5kKGRhdGEpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVJlcXVlc3Quc2VuZFwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlSZXF1ZXN0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvaW50ZXJmYWNlcy9JUmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElWaWV3UHVibGlzaGVyIHtcclxuICAgIHB1Ymxpc2godmlld0RPTSkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJVmlld1B1Ymxpc2hlci5wdWJsaXNoXCIpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVZpZXdQdWJsaXNoZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9pbnRlcmZhY2VzL0lWaWV3UHVibGlzaGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gcHJvbWlzZWQodmFsdWUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByb21pc2VkLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0cnVjdHVyZXMvUHJvbWlzZWQuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IElWaWV3RE9NIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSVZpZXdET01cIjtcclxuZXhwb3J0IGNsYXNzIFZpZXdET00gZXh0ZW5kcyBJVmlld0RPTSB7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Vmlld0RPTS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3RE9NL2Fic3RyYWN0L1ZpZXdET00uanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEV4Y2VwdGlvbiB9IGZyb20gXCIuLi9FeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIENvbW11bmljYXRpb25FeGNlcHRpb24gZXh0ZW5kcyBFeGNlcHRpb24ge1xyXG4gICAgY29uc3RydWN0b3IobXNnKSB7XHJcbiAgICAgICAgc3VwZXIoXCJDb21tdW5pY2F0aW9uRXhjZXB0aW9uOlwiICsgbXNnKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db21tdW5pY2F0aW9uRXhjZXB0aW9uLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvYmFja2VuZC9Db21tdW5pY2F0aW9uRXhjZXB0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG5pbXBvcnQgeyByb3V0ZWlnbm9yZSB9IGZyb20gXCIuLi8uLi8uLi9yb3V0aW5nL2NvbmNyZXRlL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgQXJyYXlIZWxwZXIgfSBmcm9tIFwiLi4vLi4vLi4vZGVjbGFyZS9hcnJheVwiO1xyXG5sZXQgRXZlbnQgPSBjbGFzcyBFdmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0RXZlbnRzID0gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbiAgICByYWlzZShhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdEV2ZW50cy5mb3JFYWNoKHN1YnNjcmliZXIgPT4ge1xyXG4gICAgICAgICAgICBzdWJzY3JpYmVyKGFyZ3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0IGJpbmQoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0RXZlbnRzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG4gICAgc2V0IHVuYmluZChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuX3JlcXVlc3RFdmVudHMgPSBBcnJheUhlbHBlci5yZW1vdmUodGhpcy5fcmVxdWVzdEV2ZW50cywgY2FsbGJhY2spO1xyXG4gICAgfVxyXG59O1xyXG5FdmVudCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgcm91dGVpZ25vcmVcclxuXSwgRXZlbnQpO1xyXG5leHBvcnQgeyBFdmVudCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1FdmVudC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iZWhhdmlvcnMvZXZlbnRzL2Fic3RyYWN0L0V2ZW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbk1lbW9yeUNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9jb2hlcmVuY2UvY29uY3JldGUvSW5NZW1vcnlDb250YWluZXJcIjtcclxuZXhwb3J0IGNsYXNzIElTdGF0ZU1hbmFnZXIgZXh0ZW5kcyBJbk1lbW9yeUNvbnRhaW5lciB7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVN0YXRlTWFuYWdlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9zdGF0ZXMvaW50ZXJmYWNlcy9JU3RhdGVNYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSVRlbXBsYXRlRW5naW5lIHtcclxuICAgIHBhcnNlKHRlbXBsYXRlKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklUZW1wbGF0ZUVuZ2luZS5wYXJzZVwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlUZW1wbGF0ZUVuZ2luZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS90ZW1wbGF0aW5nL2ludGVyZmFjZXMvSVRlbXBsYXRlRW5naW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSVZhbGlkYXRpbmdSZXBvcnRlciB7XHJcbiAgICByZXBvcnQoRE9NLCB2YWxpZGF0aW5nUmVzdWx0KSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklWYWxpZGF0aW5nUmVwb3J0ZXIucmVwb3J0XCIpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVZhbGlkYXRhdGluZ1JlcG9ydGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZhbGlkYXRpbmcvcmVwb3J0ZXIvaW50ZXJmYWNlcy9JVmFsaWRhdGF0aW5nUmVwb3J0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4uL2JlaGF2aW9ycy9ldmVudHMvYWJzdHJhY3QvRXZlbnRcIjtcclxuZXhwb3J0IGNsYXNzIFByb3BlcnR5IHtcclxuICAgIC8qKlxyXG4gICAgICogUmVkZWZpbmVzIHByb3BlcnR5IHdpdGggbmV3IHB1YmxpYyBhY2Nlc3NvcnMsIHNhZmVcclxuICAgICAqXHJcbiAgICAgKiBBbHNvIGNyZWF0ZXMgcHJvcGVydHkgRXZlbnQgZm9yIGRldGVjdGlvbiBlbmQgb2YgY2hhaW46XHJcbiAgICAgKlxyXG4gICAgICogc2V0dGVyIG9ialsjZXZlbnQ6c2V0W25hbWVdXVxyXG4gICAgICpcclxuICAgICAqIGdldHRlciBvYmpbI2V2ZW50OmdldFtuYW1lXV1cclxuICAgICAqIEBwYXJhbSB0YXJnZXRcclxuICAgICAqIEBwYXJhbSBuYW1lIG9mIHByb3BlcnR5XHJcbiAgICAgKiBAcGFyYW0gZ2V0IG5ldyBwdWJsaWMgc2V0dGVyXHJcbiAgICAgKiBAcGFyYW0gc2V0IG5ldyBwdWJsaWMgZ2V0dGVyXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZWRlZmluZSh0YXJnZXQsIG5hbWUsIGdldCwgc2V0KSB7XHJcbiAgICAgICAgdmFyIHByb3RvUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSwgbmFtZSk7XHJcbiAgICAgICAgdmFyIG93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBuYW1lKTtcclxuICAgICAgICB2YXIgc2V0dGVyRXZlbnQgPSBuZXcgUHJvcGVydHlFdmVudCgpO1xyXG4gICAgICAgIHZhciBnZXR0ZXJFdmVudCA9IG5ldyBQcm9wZXJ0eUV2ZW50KCk7XHJcbiAgICAgICAgLy9hY2Nlc3NvcnMgZG9lc24ndCBleGlzdHNcclxuICAgICAgICBpZiAob3duUHJvcGVydHlEZXNjcmlwdG9yID09PSB1bmRlZmluZWQgJiYgcHJvdG9Qcm9wZXJ0eURlc2NyaXB0b3IgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vcHJvdG90eXBlIGFjY2Vzc29yXHJcbiAgICAgICAgaWYgKG93blByb3BlcnR5RGVzY3JpcHRvciA9PSB1bmRlZmluZWQgJiYgcHJvdG9Qcm9wZXJ0eURlc2NyaXB0b3IgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcclxuICAgICAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gcHJvdG9Qcm9wZXJ0eURlc2NyaXB0b3IuZ2V0LmNhbGwodGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3ZhbCA9IGdldCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdldHRlckV2ZW50LnJhaXNlKHsgdmFsLCBfdmFsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdmFsO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNldCh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3ZhbCA9IHNldC5jYWxsKHRoaXMsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF92YWwgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm90b1Byb3BlcnR5RGVzY3JpcHRvci5zZXQuY2FsbCh0YXJnZXQsIF92YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRlckV2ZW50LnJhaXNlKHsgdmFsLCBfdmFsIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGFyZ2V0W1wiI2V2ZW50OnNldFtcIiArIG5hbWUgKyBcIl1cIl0gPSBzZXR0ZXJFdmVudDtcclxuICAgICAgICAgICAgdGFyZ2V0W1wiI2V2ZW50OmdldFtcIiArIG5hbWUgKyBcIl1cIl0gPSBnZXR0ZXJFdmVudDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvL293biBhY2Nlc3NvciBleGlzdHNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3duUHJvcGVydHlEZXNjcmlwdG9yLnZhbHVlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQoKSB7IHJldHVybiBnZXQob3duUHJvcGVydHlEZXNjcmlwdG9yLmdldC5jYWxsKHRhcmdldCkpOyB9LFxyXG4gICAgICAgICAgICAgICAgc2V0KHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdmFsID0gc2V0LmNhbGwodGhpcywgdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3ZhbCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG93blByb3BlcnR5RGVzY3JpcHRvci5zZXQuY2FsbCh0YXJnZXQsIF92YWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy9hY2Nlc3NvciBkb2Vzbid0IGV4aXN0c1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ZXIgPSBTeW1ib2wobmFtZSk7XHJcbiAgICAgICAgICAgIHRhcmdldFtpbmRleGVyXSA9IHRhcmdldFtuYW1lXTtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSB0YXJnZXRbaW5kZXhlcl07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF92YWwgPSBnZXQodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBnZXR0ZXJFdmVudC5yYWlzZSh7IHZhbCwgX3ZhbCB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZhbDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXQodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF92YWwgPSBzZXQuY2FsbCh0aGlzLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdmFsICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2luZGV4ZXJdID0gc2V0KF92YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldHRlckV2ZW50LnJhaXNlKHsgdmFsLCBfdmFsIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGFyZ2V0W1wiI2V2ZW50OnNldFtcIiArIG5hbWUgKyBcIl1cIl0gPSBzZXR0ZXJFdmVudDtcclxuICAgICAgICAgICAgdGFyZ2V0W1wiI2V2ZW50OmdldFtcIiArIG5hbWUgKyBcIl1cIl0gPSBnZXR0ZXJFdmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFByb3BlcnR5RXZlbnQgZXh0ZW5kcyBFdmVudCB7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFByb3BlcnR5QWNjZXNzb3Ige1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUluZm8ge1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVByb3BlcnR5LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JlZmxlY3Rpb24vUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IEJhc2VCaW5kaW5nIH0gZnJvbSBcIi4vQmFzZUJpbmRpbmdcIjtcclxuaW1wb3J0IHsgZmluZEFuZEZpbHRlciB9IGZyb20gXCIuLi8uLi8uLi9leHRlbnNpb25zL0h0bWxFbGVtZW50RXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBwcm9taXNlZCB9IGZyb20gXCIuLi8uLi8uLi9zdHJ1Y3R1cmVzL1Byb21pc2VkXCI7XHJcbmV4cG9ydCBjbGFzcyBCYXNlQnlBdHRyaWJ1dGVCaW5kaW5nIGV4dGVuZHMgQmFzZUJpbmRpbmcge1xyXG4gICAgY2xlYXIoRE9NT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgRE9NT2JqZWN0LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmF0dHJpYnV0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkZXRlY3Rpb24oRE9NKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2VkKGZpbmRBbmRGaWx0ZXIoRE9NLCAnWycgKyB0aGlzLmF0dHJpYnV0ZSArICddJykpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2VCeUF0dHJpYnV0ZUJpbmRpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9jb25jcmV0ZS9iYXNlL0Jhc2VCeUF0dHJpYnV0ZUJpbmRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IElCaW5kaW5nIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUJpbmRpbmdcIjtcclxuZXhwb3J0IGNsYXNzIEJpbmRpbmcgZXh0ZW5kcyBJQmluZGluZyB7XHJcbiAgICBiaW5kKERPTSwgbW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB2YXIgRE9NT2JqZWN0cyA9IHlpZWxkIHRoaXMuZGV0ZWN0aW9uKERPTSk7XHJcbiAgICAgICAgICAgIERPTU9iamVjdHMuZm9yRWFjaCgodikgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5iaW5kaW5nKHYsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuY2xlYXIodik7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CaW5kaW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvYWJzdHJhY3QvQmluZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld21vZGVscy9hYnN0cmFjdC9WaWV3TW9kZWxcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcnlCdXR0b25WaWV3IH0gZnJvbSBcIi4vY2F0ZWdvcnlCdXR0b25WaWV3XCI7XHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUJ1dHRvbiBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG4gICAgdmlldygpIHtcclxuICAgICAgICByZXR1cm4gQ2F0ZWdvcnlCdXR0b25WaWV3O1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhdGVnb3J5QnV0dG9uLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnlCdXR0b24vY2F0ZWdvcnlCdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBSb3V0ZSB7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Um91dGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb250cmFjdHMvUm91dGUuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IExpZmUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JQ29oZXJlbmNlQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEFycmF5SGVscGVyIH0gZnJvbSBcIi4uLy4uL2RlY2xhcmUvYXJyYXlcIjtcclxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29udGFpbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gW107XHJcbiAgICB9XHJcbiAgICBpc3JlZ2lzdGVyZWQodHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaCh0eXBlKS5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXIodHlwZSwgdmFsdWUsIGxpZmVzdHlsZSkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnB1c2goe1xyXG4gICAgICAgICAgICBpbnRlcmZhY2U6IHR5cGUubmFtZSxcclxuICAgICAgICAgICAgdHlwZTogdmFsdWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgICBsaWZlc3R5bGU6IGxpZmVzdHlsZSB8fCBMaWZlLlNpbmdsZXRvblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVzb2x2ZSh0eXBlKSB7XHJcbiAgICAgICAgY29uc3QgZmluZGVkID0gdGhpcy5zZWFyY2godHlwZSk7XHJcbiAgICAgICAgaWYgKGZpbmRlZC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJjb21wb25lbnQgaXMgbm90IHJlZ2lzdGVyZWQ6IFwiICsgdHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJpbmRDb250YWluZXIoZmluZGVkWzBdKTtcclxuICAgIH1cclxuICAgIHJlc29sdmVBbGwodHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaCh0eXBlKS5tYXAoY29tcG9uZW50ID0+IHRoaXMuYmluZENvbnRhaW5lcihjb21wb25lbnQpKTtcclxuICAgIH1cclxuICAgIHJlbGVhc2UodHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSAodG9rZW4pID0+IHsgcmV0dXJuIHRva2VuLmludGVyZmFjZSA9PSB0eXBlLm5hbWU7IH07XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb250YWluZXIuZmluZChwYXR0ZXJuKTtcclxuICAgICAgICBpZiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gQXJyYXlIZWxwZXIucmVtb3ZlKHRoaXMuY29udGFpbmVyLCBjb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFsbCgpIHtcclxuICAgICAgICBjb25zdCB0b2tlbkV4dHJhY3QgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuLnZhbHVlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLm1hcCh0b2tlbkV4dHJhY3QpO1xyXG4gICAgfVxyXG4gICAgaW5zdGFudGlhdGUodHlwZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IHR5cGUoLi4uKHBhcmFtcyB8fCBbXSkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJpbmRDb250YWluZXIoaW5zdGFuY2UpO1xyXG4gICAgfVxyXG4gICAgYmluZENvbnRhaW5lcihjb21wb25lbnQpIHtcclxuICAgICAgICBjb21wb25lbnRbXCJgY29udGFpbmVyXCJdID0gdGhpcztcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG4gICAgc2VhcmNoKHR5cGUpIHtcclxuICAgICAgICBjb25zdCBwYXR0ZXJuID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbi5pbnRlcmZhY2UgPT09IHR5cGUubmFtZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IG1hcCA9ICdtYXAnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5maWx0ZXIocGF0dGVybikubWFwKHRoaXMuZXh0cmFjdCk7XHJcbiAgICB9XHJcbiAgICBleHRyYWN0KHRva2VuKSB7XHJcbiAgICAgICAgaWYgKHRva2VuLmxpZmVzdHlsZSA9PSBMaWZlLlRyYW5zaWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHRva2VuLnR5cGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRva2VuLmxpZmVzdHlsZSA9PSBMaWZlLlNpbmdsZXRvbikge1xyXG4gICAgICAgICAgICBpZiAoIXRva2VuLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbi52YWx1ZSA9IG5ldyB0b2tlbi50eXBlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Jbk1lbW9yeUNvbnRhaW5lci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9jb2hlcmVuY2UvY29uY3JldGUvSW5NZW1vcnlDb250YWluZXIuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBIaXN0b3J5SXRlbSB7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SGlzdG9yeUl0ZW0uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vaGlzdG9yeS9jb250cmFjdHMvSGlzdG9yeUl0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJU3RvcmFnZSB7XHJcbiAgICBhZGQobW9kZWwpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVN0b3JhZ2UuYWRkXCIpOyB9XHJcbiAgICByZW1vdmUoaWQpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVN0b3JhZ2UucmVtb3ZlXCIpOyB9XHJcbiAgICBnZXQoaWQpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVN0b3JhZ2UuZ2V0XCIpOyB9XHJcbiAgICBhbGwoKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklTdG9yYWdlLmFsbFwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlTdG9yYWdlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0b3JhZ2UvaW50ZXJmYWNlcy9JU3RvcmFnZS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZmluZEFuZEZpbHRlciB9IGZyb20gXCIuLi8uLi8uLi9leHRlbnNpb25zL0h0bWxFbGVtZW50RXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSBcIi4uLy4uL2Fic3RyYWN0L0JpbmRpbmdcIjtcclxuaW1wb3J0IHsgcHJvbWlzZWQgfSBmcm9tIFwiLi4vLi4vLi4vc3RydWN0dXJlcy9Qcm9taXNlZFwiO1xyXG5leHBvcnQgY2xhc3MgQmFzZUJpbmRpbmcgZXh0ZW5kcyBCaW5kaW5nIHtcclxuICAgIGRldGVjdGlvbihET00pIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZWQoZmluZEFuZEZpbHRlcihET00sIHRoaXMuYXR0cmlidXRlKSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmFzZUJpbmRpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9jb25jcmV0ZS9iYXNlL0Jhc2VCaW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmltcG9ydCB7IElCaW5kaW5nIH0gZnJvbSBcIi4uLy4uL2JpbmRpbmcvaW50ZXJmYWNlcy9JQmluZGluZ1wiO1xyXG5leHBvcnQgY2xhc3MgQmluZENvbnRleHQge1xyXG4gICAgY29uc3RydWN0b3Iodmlld0RPTSwgYmluZGluZ0ZsYWdzKSB7XHJcbiAgICAgICAgdGhpcy52aWV3RE9NID0gdmlld0RPTTtcclxuICAgICAgICBpZiAoIWJpbmRpbmdGbGFncykge1xyXG4gICAgICAgICAgICBiaW5kaW5nRmxhZ3MgPSBHZXJhbml1bUFwcC5yZXNvbHZlQWxsKElCaW5kaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nRmxhZ3MgPSBiaW5kaW5nRmxhZ3M7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmluZENvbnRleHQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2JpbmRpbmcvY29udHJhY3RzL0JpbmRDb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBJVmlld0VuZ2luZSB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2ludGVyZmFjZXMvSVZpZXdFbmdpbmVcIjtcclxuaW1wb3J0IHsgcm91dGVpZ25vcmUgfSBmcm9tIFwiLi4vLi4vcm91dGluZy9jb25jcmV0ZS9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9hYnN0cmFjdC9WaWV3TW9kZWxcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gJy4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwJztcclxubGV0IFZpZXdNb2RlbEV4aXN0ZWQgPSBjbGFzcyBWaWV3TW9kZWxFeGlzdGVkIGV4dGVuZHMgVmlld01vZGVsIHtcclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgeWllbGQgR2VyYW5pdW1BcHAucmVzb2x2ZShJVmlld0VuZ2luZSkuZXhlY3V0ZSh7XHJcbiAgICAgICAgICAgICAgICBpVmlld2VkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5WaWV3TW9kZWxFeGlzdGVkID0gX19kZWNvcmF0ZShbXHJcbiAgICByb3V0ZWlnbm9yZVxyXG5dLCBWaWV3TW9kZWxFeGlzdGVkKTtcclxuZXhwb3J0IHsgVmlld01vZGVsRXhpc3RlZCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1WaWV3TW9kZWxFeGlzdGVkLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvY29uY3JldGUvVmlld01vZGVsRXhpc3RlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vY29tcG9uZW50cy9hcHBcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuaW1wb3J0IHsgc2V0VGltZW91dCB9IGZyb20gXCJ0aW1lcnNcIjtcclxuaW1wb3J0IHsgSUJpbmRpbmcgfSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvaW50ZXJmYWNlcy9JQmluZGluZ1wiO1xyXG5pbXBvcnQgeyBNdXN0YWNoZUJpbmQgfSBmcm9tIFwiLi9iaW5kZXJzL011c3RhY2hlQmluZFwiO1xyXG5yZXF1aXJlKFwiYnVsbWEtY2Fyb3VzZWwvY2Fyb3VzZWwuanNcIik7XHJcbnJlcXVpcmUoXCJidWxtYS1jYXJvdXNlbC9idWxtYS1jYXJvdXNlbC5jc3NcIik7XHJcbnJlcXVpcmUoXCJidWxtYS9jc3MvYnVsbWEuY3NzXCIpO1xyXG5yZXF1aXJlKFwiLi4vY3NzL3N0eWxlLmNzc1wiKTtcclxuR2VyYW5pdW1BcHAuc3RhcnQoe30pO1xyXG5HZXJhbml1bUFwcC5yZWdpc3RlcihJQmluZGluZywgTXVzdGFjaGVCaW5kKTtcclxubmV3IEFwcCgpLnNob3coKTtcclxuc2V0VGltZW91dCgoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZWxvYWRlclwiKS5yZW1vdmUoKSwgMSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBwcm9taXNlZCB9IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vc3RydWN0dXJlcy9Qcm9taXNlZFwiO1xyXG5pbXBvcnQgeyBWaWV3RE9NIH0gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3RE9NL2Fic3RyYWN0L1ZpZXdET01cIjtcclxuaW1wb3J0IHsgVG9hc3QgfSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3RzdG9hc3QvVG9hc3RcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcnlCdXR0b24gfSBmcm9tIFwiLi9jYXRlZ29yeUJ1dHRvbi9jYXRlZ29yeUJ1dHRvblwiO1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXIvaGVhZGVyXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbEV4aXN0ZWQgfSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvY29uY3JldGUvVmlld01vZGVsRXhpc3RlZFwiO1xyXG4vLyBAcm91dGVyb290XHJcbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBWaWV3TW9kZWxFeGlzdGVkIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5ub3dZZWFyID0gKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgdGhpcy5idG5zID0gW107XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcbiAgICAgICAgdGhpcy5idG5zLnB1c2goLi4uW1xyXG4gICAgICAgICAgICBuZXcgQ2F0ZWdvcnlCdXR0b24oXCLQotC10LzQvdGL0LlcIiksXHJcbiAgICAgICAgICAgIG5ldyBDYXRlZ29yeUJ1dHRvbihcItCc0L7Qu9C+0YfQvdGL0LlcIiksXHJcbiAgICAgICAgICAgIG5ldyBDYXRlZ29yeUJ1dHRvbihcItCR0LXQu9GL0LlcIiksXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgLy8gdGhpcy5oZWFkZXIuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgdmlldygpIHtcclxuICAgICAgICByZXR1cm4gQXBwVmlldztcclxuICAgIH1cclxuICAgIHRvYXN0KCkge1xyXG4gICAgICAgIG5ldyBUb2FzdCh7XHJcbiAgICAgICAgICAgIHRleHQ6ICd0b2FzdCBib2R5J1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnRUaXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gJ0Nob2NvbGF0aXVtIHwgSG9tZSc7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgQXBwVmlldyBleHRlbmRzIFZpZXdET00ge1xyXG4gICAgRE9NKCkge1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlZChbZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlMVwiKV0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElWaWV3RE9NIHtcclxuICAgIERPTSgpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVZpZXdET00uZ2V0Vmlld0RPTVwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlWaWV3RE9NLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdET00vaW50ZXJmYWNlcy9JVmlld0RPTS5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFRvYXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKG9wdHMsIHtcclxuICAgICAgICAgICAgdGltZTogMzAwMCxcclxuICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3I6IFwiYm9keVwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5hcHBseVN0eWxlKGRpdik7XHJcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IG9wdHMudGV4dDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdHMudGFyZ2V0U2VsZWN0b3IpLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgdGhpcy5zZXRPZmZzZXQoKTtcclxuICAgICAgICB0aGlzLnNob3coZGl2LCBvcHRzLnRpbWUpO1xyXG4gICAgfVxyXG4gICAgYXBwbHlTdHlsZShlbGVtZW50KSB7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9hc3RcIik7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nID0gXCIxNXB4IDIwcHhcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gXCIjZmZmXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsIDAsIDEwLCAwLjcpXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gXCItMTAwcHhcIjtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gXCIxNXB4XCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC40cyBlYXNlLW91dFwiO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuekluZGV4ID0gXCIyNTAwXCI7XHJcbiAgICB9XHJcbiAgICBzZXRPZmZzZXQoKSB7XHJcbiAgICAgICAgY29uc3QgYmV0d2Vlbk9mZnNldCA9IDE1O1xyXG4gICAgICAgIGxldCB0b3BPZmZzZXQgPSBiZXR3ZWVuT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IHRvYXN0cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9hc3RcIiksIDApLnJldmVyc2UoKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9hc3RzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdG9hc3RzW2luZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gdG9wT2Zmc2V0ICsgXCJweFwiO1xyXG4gICAgICAgICAgICB0b3BPZmZzZXQgKz0gaGVpZ2h0ICsgYmV0d2Vlbk9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG93KGVsZW1lbnQsIHRpbWUpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoICsgMjA7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJpZ2h0ID0gXCItXCIgKyB3aWR0aCArIFwicHhcIjtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBlbGVtZW50LnJlbW92ZSgpLCA2MDApO1xyXG4gICAgICAgIH0sIHRpbWUpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRvYXN0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RzdG9hc3QvVG9hc3QuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBSb3V0ZUNvbnRleHQge1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJvdXRlQ29udGV4dC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2NvbnRyYWN0cy9Sb3V0ZUNvbnRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IElDb21tdW5pY2F0b3IgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JQ29tbXVuaWNhdG9yXCI7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25FeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vLi4vZXhjZXB0aW9ucy9iYWNrZW5kL0NvbW11bmljYXRpb25FeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIEFqYXhDb21tdW5pY2F0b3IgZXh0ZW5kcyBJQ29tbXVuaWNhdG9yIHtcclxuICAgIHNlbmQoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGUoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWNpdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29udGVudFR5cGUodGhpcy5kYXRhLCB4aHIpO1xyXG4gICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHhoci5yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHhoci5zdGF0dXMgPT0gMCAmJiB4aHIucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChgJHt4aHIuc3RhdHVzfTogJHt4aHIuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGAke3hoci5zdGF0dXN9OiAke3hoci5zdGF0dXNUZXh0fWApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHhoci5vcGVuKHRoaXMuZGF0YS5tZXRob2QsIHRoaXMuZGF0YS51cmwsIHRoaXMuZGF0YS5hc3luYywgdGhpcy5kYXRhLnVzZXIsIHRoaXMuZGF0YS5wYXN3KTtcclxuICAgICAgICAgICAgICAgIHhoci5zZW5kKHRoaXMuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YWxpZGF0ZShkYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhLm1ldGhvZCB8fCAhZGF0YS51cmwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IENvbW11bmljYXRpb25FeGNlcHRpb24oXCJYSFIgcmVxdWVzdCBtdXN0IGRlY2xhcmUgbWV0aG9kIGFuZCB1cmwhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldENvbnRlbnRUeXBlKG9wdCwgeGhyKSB7XHJcbiAgICAgICAgaWYgKG9wdC5tZXRob2QgIT0gXCJHRVRcIikge1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFqYXhDb21tdW5pY2F0b3IuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmFja2VuZC9jb25jcmV0ZS9hamF4L0FqYXhDb21tdW5pY2F0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEV4Y2VwdGlvbiB9IGZyb20gXCIuLi9FeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIEluc3RhbnRpYXRlZEV4Y2VwdGlvbiBleHRlbmRzIEV4Y2VwdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcclxuICAgICAgICBzdXBlcihcIkluc3RhbnRpYXRlZEV4Y2VwdGlvbjogaW5zdGFuY2UgYWxyZWFkeSBpbnN0YW50aWF0ZWQsIHlvdSBjYW4gY2hhbmdlIGluc3RhbmNlIG9wdGlvbnMgb25seSBhdCBhcHBsaWNhdGlvbiBzdGFydFxcblwiICsgbXNnKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JbnN0YW50aWF0ZWRFeGNlcHRpb24uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXhjZXB0aW9ucy9ydW50aW1lL0luc3RhbnRpYXRlZEV4Y2VwdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSUhpc3RvcnkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JSGlzdG9yeVwiO1xyXG5pbXBvcnQgeyBJUm91dGVyIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmcvaW50ZXJmYWNlcy9JUm91dGVyXCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuZXhwb3J0IGNsYXNzIEh0bWw1SGlzdG9yeUFQSSBleHRlbmRzIElIaXN0b3J5IHtcclxuICAgIGV4dGVuZChoaXRlbSkge1xyXG4gICAgICAgIGlmICh3aW5kb3cuaGlzdG9yeS5zdGF0ZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXRlbS5zdGF0ZSwgaGl0ZW0udGl0bGUsIGhpdGVtLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoaGl0ZW0uc3RhdGUsIGhpdGVtLnRpdGxlLCBoaXRlbS51cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlc3RvcmUoc3RhdGUpIHtcclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgdmFyIHJvdXRlciA9IHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSVJvdXRlcik7XHJcbiAgICAgICAgICAgIHZhciByb3V0ZSA9IHJvdXRlci5yb3V0ZXMuZmlsdGVyKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IHguY3RvcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWUgPT0gc3RhdGUuY3RvcjtcclxuICAgICAgICAgICAgfSlbMF07XHJcbiAgICAgICAgICAgIHJvdXRlLnNlbGVjdG9yID0gc3RhdGUuc2VsZWN0b3I7XHJcbiAgICAgICAgICAgIHJvdXRlLnJlc3RvcmUgPSB0cnVlO1xyXG4gICAgICAgICAgICByb3V0ZXIucm91dGUocm91dGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5pZiAod2luZG93KSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCAoZXZlbnRTdGF0ZSkgPT4ge1xyXG4gICAgICAgIEdlcmFuaXVtQXBwLnJlc29sdmUoSUhpc3RvcnkpLnJlc3RvcmUoZXZlbnRTdGF0ZS5zdGF0ZSk7XHJcbiAgICB9KTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IdG1sNUhpc3RvcnlBUEkuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vaGlzdG9yeS9jb25jcmV0ZS9IdG1sNUhpc3RvcnlBUEkuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JTG9nZ2VyXCI7XHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlTG9nZ2VyIGV4dGVuZHMgSUxvZ2dlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMubG9nT2Zsb2cgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgbG9nKGVycikge1xyXG4gICAgICAgIHRoaXMubG9nT2Zsb2cgKz0gZXJyLm1lc3NhZ2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBcHBsaWNhdGlvbiBlcnJvcjogXCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nT2Zsb2c7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29uc29sZUxvZ2dlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2xvZ2dpbmcvY29uY3JldGUvQ29uc29sZUxvZ2dlci5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgU3RhdGVmdWxsUmVxdWVzdCB9IGZyb20gXCIuLi8uLi9hYnN0cmFjdC9TdGF0ZWZ1bGxSZXF1ZXN0XCI7XHJcbmV4cG9ydCBjbGFzcyBBamF4UmVxdWVzdCBleHRlbmRzIFN0YXRlZnVsbFJlcXVlc3Qge1xyXG4gICAgY29uc3RydWN0b3IoZXJyb3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY2F0Y2hQcm9taXNlID0gZXJyb3I7XHJcbiAgICB9XHJcbiAgICBjYXRjaFByb21pc2UoZXJyKSB7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1BamF4UmVxdWVzdC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iYWNrZW5kL2NvbmNyZXRlL2FqYXgvQWpheFJlcXVlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEV2ZW50UmVxdWVzdCB9IGZyb20gXCIuL0V2ZW50UmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBJU3RhdGVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL3N0YXRlcy9pbnRlcmZhY2VzL0lTdGF0ZU1hbmFnZXJcIjtcclxuZXhwb3J0IGNsYXNzIFN0YXRlZnVsbFJlcXVlc3QgZXh0ZW5kcyBFdmVudFJlcXVlc3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmJpbmQgPSAoc3VwZXJfc2VuZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZXMgPSB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlKElTdGF0ZU1hbmFnZXIpLmFsbCgpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVzICE9IG51bGwgfHwgc3RhdGVzLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdGVzLmZpbHRlcih4ID0+IHsgaWYgKHguc3luY2hyb25pemVyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgfSlcclxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKHN0YXRlID0+IHtcclxuICAgICAgICAgICAgICAgIHN1cGVyX3NlbmQoc3RhdGUuc3luY2hyb25pemVyKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHggPT4geyBzdGF0ZS5vYnRhaW4oeCk7IH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0YXRlZnVsbFJlcXVlc3QuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmFja2VuZC9hYnN0cmFjdC9TdGF0ZWZ1bGxSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSBcIi4vUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBJQ29tbXVuaWNhdG9yIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUNvbW11bmljYXRvclwiO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvYmFja2VuZC9Db21tdW5pY2F0aW9uRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBFdmVudFJlcXVlc3QgZXh0ZW5kcyBSZXF1ZXN0IHtcclxuICAgIC8qKlxyXG4gICAgICogc2VuZCByZXF1ZXN0IHRvIHNlcnZlclxyXG4gICAgICogQHBhcmFtIGRhdGFcclxuICAgICAqIEBwYXJhbSBzdGF0ZWxlc3MgeW91ciByZXF1ZXN0IG5vdCByYWlzZSBzdGF0ZS1zeW5jIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHNlbmQoZGF0YSwgc3RhdGVsZXNzID0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29tbXVuaWNhdG9yID0gdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZShJQ29tbXVuaWNhdG9yKTtcclxuICAgICAgICAgICAgICAgIHlpZWxkIGNvbW11bmljYXRvci5zZW5kKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjb21tdW5pY2F0b3IucmVjaXZlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlbGVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFpc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0Y2gobmV3IENvbW11bmljYXRpb25FeGNlcHRpb24oZXgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmFpc2UoKSB7XHJcbiAgICAgICAgc3VwZXIucmFpc2Uoc3VwZXIuc2VuZCk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXZlbnRSZXF1ZXN0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvYWJzdHJhY3QvRXZlbnRSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBJQ29tbXVuaWNhdG9yIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUNvbW11bmljYXRvclwiO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuLi8uLi9iZWhhdmlvcnMvZXZlbnRzL2Fic3RyYWN0L0V2ZW50XCI7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9sb2dnaW5nL2ludGVyZmFjZXMvSUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBDb21tdW5pY2F0aW9uRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvYmFja2VuZC9Db21tdW5pY2F0aW9uRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0IGV4dGVuZHMgRXZlbnQge1xyXG4gICAgc2VuZChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgY29tbXVuaWNhdG9yID0gdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZShJQ29tbXVuaWNhdG9yKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIGNvbW11bmljYXRvci5zZW5kKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbW11bmljYXRvci5yZWNpdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2F0Y2gobmV3IENvbW11bmljYXRpb25FeGNlcHRpb24oZXgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2F0Y2hQcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0Y2hQcm9taXNlKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxvZ2dlciA9IHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSUxvZ2dlcik7XHJcbiAgICAgICAgaWYgKGxvZ2dlcikge1xyXG4gICAgICAgICAgICBsb2dnZXIubG9nKGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJlcXVlc3QuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmFja2VuZC9hYnN0cmFjdC9SZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3QvUm91dGVyXCI7XHJcbmltcG9ydCB7IEhpc3RvcnlJdGVtIH0gZnJvbSBcIi4uLy4uL2hpc3RvcnkvY29udHJhY3RzL0hpc3RvcnlJdGVtXCI7XHJcbmltcG9ydCB7IElIaXN0b3J5IH0gZnJvbSBcIi4uLy4uL2hpc3RvcnkvaW50ZXJmYWNlcy9JSGlzdG9yeVwiO1xyXG5pbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmV4cG9ydCBjbGFzcyBCYXNpY1JvdXRlciBleHRlbmRzIFJvdXRlciB7XHJcbiAgICBDdXJyZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50O1xyXG4gICAgfVxyXG4gICAgcm91dGVhcmVhKCkge1xyXG4gICAgICAgIHJldHVybiAnLmFwcCc7XHJcbiAgICB9XHJcbiAgICByb3V0ZShjdXJyZW50KSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnQgPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzZWxlY3RvciA9IGN1cnJlbnQucmVzdG9yZSA/IGN1cnJlbnQuc2VsZWN0b3IgOiB0aGlzLnJvdXRlYXJlYSgpO1xyXG4gICAgICAgIHZhciByb3V0ZWQgPSBHZXJhbml1bUFwcC5pbnN0YW50aWF0ZShjdXJyZW50LmN0b3IsIGN1cnJlbnQucGFyYW1zKTtcclxuICAgICAgICB2YXIgZXhlY3V0aW5nID0gY3VycmVudC5leGVjdXRhYmxlID8gY3VycmVudC5leGVjdXRhYmxlIDogJ3RvU3RyaW5nJztcclxuICAgICAgICBpZiAoIWN1cnJlbnQucmVzdG9yZSkge1xyXG4gICAgICAgICAgICB2YXIgX2hpc3RvcnkgPSBuZXcgSGlzdG9yeUl0ZW0oKTtcclxuICAgICAgICAgICAgX2hpc3RvcnkudXJsID0gY3VycmVudC51cmw7XHJcbiAgICAgICAgICAgIF9oaXN0b3J5LnRpdGxlID0gZG9jdW1lbnQudGl0bGU7XHJcbiAgICAgICAgICAgIF9oaXN0b3J5LnN0YXRlID0ge1xyXG4gICAgICAgICAgICAgICAgY3RvcjogY3VycmVudC5jdG9yLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZShJSGlzdG9yeSkuZXh0ZW5kKF9oaXN0b3J5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcm91dGVkW1wiI3JvdXRlZFwiXSA9IHtcclxuICAgICAgICAgICAgcGFyYW1zOiBjdXJyZW50LnBhcmFtcyxcclxuICAgICAgICAgICAgcmVzdG9yZTogY3VycmVudC5yZXN0b3JlXHJcbiAgICAgICAgfTtcclxuICAgICAgICByb3V0ZWRbZXhlY3V0aW5nXShzZWxlY3Rvcik7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmFzaWNSb3V0ZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb25jcmV0ZS9CYXNpY1JvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSVJvdXRlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lSb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVNYXRjaCB9IGZyb20gXCIuLi9jb250cmFjdHMvUm91dGVNYXRjaFwiO1xyXG5pbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gXCIuLi9jb25jcmV0ZS9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IEFycmF5SGVscGVyIH0gZnJvbSBcIi4uLy4uL2RlY2xhcmUvYXJyYXlcIjtcclxuZXhwb3J0IGNsYXNzIFJvdXRlciBleHRlbmRzIElSb3V0ZXIge1xyXG4gICAgZ2V0IHJvdXRlcygpIHtcclxuICAgICAgICByZXR1cm4gcm91dGVzKCk7XHJcbiAgICB9XHJcbiAgICByb3V0ZUJ5VXJsKHVybCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hdGNoKHVybCk7XHJcbiAgICB9XHJcbiAgICBtYXRjaCh1cmwsIHBhcmFtcykge1xyXG4gICAgICAgIGlmICh0aGlzLnJvdXRlcy5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgdmFyIGN0b3JDb2xsZWN0aW9uID0gdGhpcy5yb3V0ZXMuZmlsdGVyKHggPT4geC51cmwgPT0gdXJsKTtcclxuICAgICAgICBpZiAodXJsID09ICcvJyAmJiBjdG9yQ29sbGVjdGlvbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgc2hvcnRlc3RSb3V0ZSA9IHRoaXMucm91dGVzLnJlZHVjZSgoYSwgYikgPT4gYS51cmwubGVuZ3RoIDwgYi51cmwubGVuZ3RoID8gYSA6IGIpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2hvcnRlc3RSb3V0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN0b3JDb2xsZWN0aW9uLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWdtZW50cyA9IEFycmF5SGVscGVyLnJlbW92ZSh1cmwuc3BsaXQoJy8nKSwgKCcnKSk7XHJcbiAgICAgICAgICAgIHZhciBjdXRTZWdtZW50cyA9IHNlZ21lbnRzLmZpbHRlcigodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgIT0gc2VnbWVudHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciByb3V0ZSA9IHRoaXMubWF0Y2goJy8nICsgY3V0U2VnbWVudHMuam9pbignLycpKTtcclxuICAgICAgICAgICAgaWYgKCFyb3V0ZS5wYXJhbXMpXHJcbiAgICAgICAgICAgICAgICByb3V0ZS5wYXJhbXMgPSBbXTtcclxuICAgICAgICAgICAgcm91dGUucGFyYW1zLnB1c2goc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBtYXRjaCA9IG5ldyBSb3V0ZU1hdGNoKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihtYXRjaCwgY3RvckNvbGxlY3Rpb25bMF0pO1xyXG4gICAgICAgIG1hdGNoLnBhcmFtcyA9IHBhcmFtcztcclxuICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICB9XHJcbn1cclxuaWYgKHdpbmRvdykge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgICAgICAgdmFyIHJvdXRlciA9IEdlcmFuaXVtQXBwLnJlc29sdmUoSVJvdXRlcik7XHJcbiAgICAgICAgdmFyIHJvdXRlID0gcm91dGVyLnJvdXRlQnlVcmwod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICByb3V0ZXIucm91dGUocm91dGUpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Um91dGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvYWJzdHJhY3QvUm91dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBSb3V0ZSB9IGZyb20gXCIuL1JvdXRlXCI7XHJcbmV4cG9ydCBjbGFzcyBSb3V0ZU1hdGNoIGV4dGVuZHMgUm91dGUge1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJvdXRlTWF0Y2guanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb250cmFjdHMvUm91dGVNYXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQmFzZVN0b3JhZ2UgfSBmcm9tIFwiLi4vYWJzdHJhY3QvQmFzZVN0b3JhZ2VcIjtcclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZSBleHRlbmRzIEJhc2VTdG9yYWdlIHtcclxuICAgIHdyaXRlKGRhdGEsIHN0b3JhZ2VOYW1lKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc3RvcmFnZU5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIH1cclxuICAgIHJlYWQoc3RvcmFnZU5hbWUpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlTmFtZSkpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxvY2FsU3RvcmFnZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9zdG9yYWdlL2NvbmNyZXRlL0xvY2FsU3RvcmFnZS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSVN0b3JhZ2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBBcnJheUhlbHBlciB9IGZyb20gXCIuLi8uLi9kZWNsYXJlL2FycmF5XCI7XHJcbmV4cG9ydCBjbGFzcyBCYXNlU3RvcmFnZSBleHRlbmRzIElTdG9yYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZU5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG4gICAgYWRkKG1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uLnB1c2gobW9kZWwpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKGlkKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5zZWFyY2hGb3IoaWQpO1xyXG4gICAgICAgIGlmIChtb2RlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGUoQXJyYXlIZWxwZXIucmVtb3ZlKHRoaXMuY29sbGVjdGlvbiwgbW9kZWwpLCB0aGlzLnN0b3JhZ2VOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBnZXQoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hGb3IoaWQpO1xyXG4gICAgfVxyXG4gICAgYWxsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQodGhpcy5zdG9yYWdlTmFtZSk7XHJcbiAgICB9XHJcbiAgICBnZXQgY29sbGVjdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMucmVhZCh0aGlzLnN0b3JhZ2VOYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlKG5ldyBBcnJheSgpLCB0aGlzLnN0b3JhZ2VOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhZCh0aGlzLnN0b3JhZ2VOYW1lKTtcclxuICAgIH1cclxuICAgIHNlYXJjaEZvcihpZCkge1xyXG4gICAgICAgIHZhciBlbnVtZXJhYmxlID0gdGhpcy5jb2xsZWN0aW9uXHJcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LmlkID09IGlkKTtcclxuICAgICAgICBpZiAoZW51bWVyYWJsZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbnVtZXJhYmxlWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlU3RvcmFnZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9zdG9yYWdlL2Fic3RyYWN0L0Jhc2VTdG9yYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJVGVtcGxhdGVFbmdpbmUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JVGVtcGxhdGVFbmdpbmVcIjtcclxuZXhwb3J0IGNsYXNzIENsaWVudFRlbXBsYXRlRW5naW5lIGV4dGVuZHMgSVRlbXBsYXRlRW5naW5lIHtcclxuICAgIHBhcnNlKHRlbXBsYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKHRlbXBsYXRlLnRlbXBsYXRlKSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2xpZW50VGVtcGxhdGVFbmdpbmUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdGVtcGxhdGluZy9jb25jcmV0ZS9tdXN0YWNoZS9DbGllbnRUZW1wbGF0ZUVuZ2luZS5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgSVZhbGlkYXRpbmdSZXBvcnRlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lWYWxpZGF0YXRpbmdSZXBvcnRlclwiO1xyXG5leHBvcnQgY2xhc3MgTm90aWZ5VmFsaWRhdGluZ1JlcG9ydGVyIGV4dGVuZHMgSVZhbGlkYXRpbmdSZXBvcnRlciB7XHJcbiAgICByZXBvcnQoRE9NLCB2YWxpZGF0aW5nUmVzdWx0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGluZ1Jlc3VsdC5lcnJvcnMuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZBTExJREFUSU5HX0VSUiBbJyArIHgubmFtZSArICddOicgKyB4Lm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob3RpZnlWYWxpZGF0aW5nUmVwb3J0ZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmFsaWRhdGluZy9yZXBvcnRlci9jb25jcmV0ZS9Ob3RpZnlWYWxpZGF0aW5nUmVwb3J0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IFZpZXdCaW5kZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3QvVmlld0JpbmRlclwiO1xyXG5leHBvcnQgY2xhc3MgQmFzZVZpZXdCaW5kZXIgZXh0ZW5kcyBWaWV3QmluZGVyIHtcclxuICAgIGJpbmRpbmcoRE9NLCBkYXRhLCBiaW5kaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmcuYmluZChET00sIGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2VWaWV3QmluZGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdiaW5kaW5nL2NvbmNyZXRlL0Jhc2VWaWV3QmluZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBJVmlld0JpbmRlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lWaWV3QmluZGVyXCI7XHJcbmltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3JlZmxlY3Rpb24vUHJvcGVydHlcIjtcclxuaW1wb3J0IHsgSVZhbGlkYXRpbmdSZXBvcnRlciB9IGZyb20gXCIuLi8uLi92YWxpZGF0aW5nL3JlcG9ydGVyL2ludGVyZmFjZXMvSVZhbGlkYXRhdGluZ1JlcG9ydGVyXCI7XHJcbmltcG9ydCB7IEFycmF5SGVscGVyIH0gZnJvbSBcIi4uLy4uL2RlY2xhcmUvYXJyYXlcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5leHBvcnQgY2xhc3MgVmlld0JpbmRlciBleHRlbmRzIElWaWV3QmluZGVyIHtcclxuICAgIGJpbmQoY29udGV4dCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpbmRlZERPTSA9IHlpZWxkIHRoaXMuZXhlYyhjb250ZXh0LnZpZXdET00sIGNvbnRleHQuYmluZGluZ0ZsYWdzKTtcclxuICAgICAgICAgICAgdGhpcy52YWxpZChiaW5kZWRET00sIGNvbnRleHQudmlld0RPTS5kYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJpbmRlZERPTTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHZhbGlkKERPTSwgZGF0YSkge1xyXG4gICAgICAgIHZhciB2bSA9IGRhdGE7XHJcbiAgICAgICAgaWYgKHZtLnZhbGlkYXRvcnMpIHtcclxuICAgICAgICAgICAgdmFyIHZhbGlkYXRlZFByb3BlcnRpZXMgPSBBcnJheUhlbHBlci5ncm91cEJ5KHZtLnZhbGlkYXRvcnMsICd2YWxpZGF0ZWRQcm9wZXJ0eU5hbWUnKTtcclxuICAgICAgICAgICAgdmFsaWRhdGVkUHJvcGVydGllcy5mb3JFYWNoKHZhbGlkYXRvcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkUHJvcCA9IHZhbGlkYXRvcnNbMF0udmFsaWRhdGVkUHJvcGVydHlOYW1lO1xyXG4gICAgICAgICAgICAgICAgUHJvcGVydHkucmVkZWZpbmUoZGF0YSwgdmFsaWRQcm9wLCAodmFsKSA9PiB7IHJldHVybiB2YWw7IH0sIGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGlvbkZhdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZpbHRlcih4ID0+IHgudmFsaWRhdGVkUHJvcGVydHlOYW1lID09PSB2YWxpZFByb3ApLmZvckVhY2godmFsaWRhdG9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRpb24gPSB2YWxpZGF0b3IudmFsaWRhdGUodmFsLCB0aGlzLmNsb25lKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRpb24uc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkZhdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlcmFuaXVtQXBwLnJlc29sdmUoSVZhbGlkYXRpbmdSZXBvcnRlcikucmVwb3J0KERPTSwgdmFsaWRhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGlvbkZhdWx0ID8gdW5kZWZpbmVkIDogdmFsO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4ZWMoVmlld0RPTSwgYmluZGluZ3MpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBsZXQgZG9tID0geWllbGQgVmlld0RPTS5ET00oKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiaW5kaW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5iaW5kaW5nKGRvbSwgVmlld0RPTS5kYXRhLCBiaW5kaW5nc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRvbTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1WaWV3QmluZGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdiaW5kaW5nL2Fic3RyYWN0L1ZpZXdCaW5kZXIuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IEJhc2VCeUF0dHJpYnV0ZUJpbmRpbmcgfSBmcm9tIFwiLi9iYXNlL0Jhc2VCeUF0dHJpYnV0ZUJpbmRpbmdcIjtcclxuaW1wb3J0IHsgUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vcmVmbGVjdGlvbi9Qcm9wZXJ0eVwiO1xyXG5leHBvcnQgY2xhc3MgQmFzZUZpZWxkQmluZGluZyBleHRlbmRzIEJhc2VCeUF0dHJpYnV0ZUJpbmRpbmcge1xyXG4gICAgZ2V0IGF0dHJpYnV0ZSgpIHsgcmV0dXJuICdkYXRhLWZpZWxkJzsgfVxyXG4gICAgYmluZGluZyhET01PYmplY3QsIG1vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gRE9NT2JqZWN0LmdldEF0dHJpYnV0ZSh0aGlzLmF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgIFByb3BlcnR5LnJlZGVmaW5lKG1vZGVsLCB2YWx1ZSwgKHZhbCkgPT4gdmFsLCAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIGV2ZW50ID0gXCIjZXZlbnQ6c2V0W1wiICsgdmFsdWUgKyBcIl1cIjtcclxuICAgICAgICAgICAgaWYgKG1vZGVsW2V2ZW50XSkge1xyXG4gICAgICAgICAgICAgICAgbW9kZWxbZXZlbnRdLmJpbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRE9NT2JqZWN0LmlubmVySFRNTCA9IG1vZGVsW3ZhbHVlXTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlRmllbGRCaW5kaW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvQmFzZUZpZWxkQmluZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gXCIuLi9hYnN0cmFjdC9CaW5kaW5nXCI7XHJcbmltcG9ydCB7IHRvSHRtbEFycmF5LCBub2RlVG9BcnJheSB9IGZyb20gXCIuLi8uLi9leHRlbnNpb25zL0h0bWxFbGVtZW50RXh0ZW5zaW9uc1wiO1xyXG5leHBvcnQgY2xhc3MgRXZlbnRCaW5kaW5nIGV4dGVuZHMgQmluZGluZyB7XHJcbiAgICBkZXRlY3Rpb24oRE9NT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlhYmxlTm9kZXMgPSB0aGlzLnF1ZXJ5YWJsZShET01PYmplY3QpO1xyXG4gICAgICAgICAgICBjb25zdCBhbGwgPSBxdWVyeWFibGVOb2Rlcy5tYXAobm9kZSA9PiB0b0h0bWxBcnJheShub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoZXZlbnRTZWxlY3RvcnMuam9pbigpKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gYWxsLnJlZHVjZSgocCwgbikgPT4gcC5jb25jYXQobikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYmluZGluZyhET01PYmplY3QsIG1vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlcyA9IG5vZGVUb0FycmF5KERPTU9iamVjdC5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnRzID0gYXR0cmlidXRlcy5maWx0ZXIoYXR0ciA9PiBldmVudHNBdHRyLmluY2x1ZGVzKGF0dHIubmFtZSkpO1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmNCaW5kZWQoZXZlbnRzLCBtb2RlbCkuZm9yRWFjaChiaW5kID0+IHtcclxuICAgICAgICAgICAgICAgIERPTU9iamVjdC5hZGRFdmVudExpc3RlbmVyKGJpbmQuZXZlbnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBiaW5kLmZ1bmMuYXBwbHkobW9kZWwsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IERPTU9iamVjdC5yZW1vdmVBdHRyaWJ1dGUoZXZlbnQubmFtZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2xlYXIoRE9NT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgfSk7XHJcbiAgICB9XHJcbiAgICBxdWVyeWFibGUoRE9NT2JqZWN0cykge1xyXG4gICAgICAgIGlmICghRE9NT2JqZWN0cyB8fCBET01PYmplY3RzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gRE9NT2JqZWN0c1swXS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtwYXJlbnRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIERPTU9iamVjdHM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY0JpbmRlZChldmVudHMsIG1vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50cy5tYXAoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBmdW5jOiBtb2RlbFtldmVudC52YWx1ZV1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KS5maWx0ZXIoYmluZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAhIWJpbmQuZnVuYyAmJiB0eXBlb2YgYmluZC5mdW5jID09PSAnZnVuY3Rpb24nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGFsbEV2ZW50cyA9IFtcclxuICAgIFwiYWJvcnRcIixcclxuICAgIFwiYWN0aXZhdGVcIixcclxuICAgIFwiYmVmb3JlYWN0aXZhdGVcIixcclxuICAgIFwiYmVmb3JlY29weVwiLFxyXG4gICAgXCJiZWZvcmVjdXRcIixcclxuICAgIFwiYmVmb3JlZGVhY3RpdmF0ZVwiLFxyXG4gICAgXCJiZWZvcmVwYXN0ZVwiLFxyXG4gICAgXCJibHVyXCIsXHJcbiAgICBcImNhbnBsYXlcIixcclxuICAgIFwiY2FucGxheXRocm91Z2hcIixcclxuICAgIFwiY2hhbmdlXCIsXHJcbiAgICBcImNsaWNrXCIsXHJcbiAgICBcImNvbnRleHRtZW51XCIsXHJcbiAgICBcImNvcHlcIixcclxuICAgIFwiY3VlY2hhbmdlXCIsXHJcbiAgICBcImN1dFwiLFxyXG4gICAgXCJkYmxjbGlja1wiLFxyXG4gICAgXCJkZWFjdGl2YXRlXCIsXHJcbiAgICBcImRyYWdcIixcclxuICAgIFwiZHJhZ2VuZFwiLFxyXG4gICAgXCJkcmFnZW50ZXJcIixcclxuICAgIFwiZHJhZ2xlYXZlXCIsXHJcbiAgICBcImRyYWdvdmVyXCIsXHJcbiAgICBcImRyYWdzdGFydFwiLFxyXG4gICAgXCJkcm9wXCIsXHJcbiAgICBcImR1cmF0aW9uY2hhbmdlXCIsXHJcbiAgICBcImVtcHRpZWRcIixcclxuICAgIFwiZW5kZWRcIixcclxuICAgIFwiZXJyb3JcIixcclxuICAgIFwiZm9jdXNcIixcclxuICAgIFwiaW5wdXRcIixcclxuICAgIFwiaW52YWxpZFwiLFxyXG4gICAgXCJrZXlkb3duXCIsXHJcbiAgICBcImtleXByZXNzXCIsXHJcbiAgICBcImtleXVwXCIsXHJcbiAgICBcImxvYWRcIixcclxuICAgIFwibG9hZGVkZGF0YVwiLFxyXG4gICAgXCJsb2FkZWRtZXRhZGF0YVwiLFxyXG4gICAgXCJsb2Fkc3RhcnRcIixcclxuICAgIFwibW91c2Vkb3duXCIsXHJcbiAgICBcIm1vdXNlZW50ZXJcIixcclxuICAgIFwibW91c2VsZWF2ZVwiLFxyXG4gICAgXCJtb3VzZW1vdmVcIixcclxuICAgIFwibW91c2VvdXRcIixcclxuICAgIFwibW91c2VvdmVyXCIsXHJcbiAgICBcIm1vdXNldXBcIixcclxuICAgIFwibW91c2V3aGVlbFwiLFxyXG4gICAgXCJNU0NvbnRlbnRab29tXCIsXHJcbiAgICBcIk1TTWFuaXB1bGF0aW9uU3RhdGVDaGFuZ2VkXCIsXHJcbiAgICBcInBhc3RlXCIsXHJcbiAgICBcInBhdXNlXCIsXHJcbiAgICBcInBsYXlcIixcclxuICAgIFwicGxheWluZ1wiLFxyXG4gICAgXCJwcm9ncmVzc1wiLFxyXG4gICAgXCJyYXRlY2hhbmdlXCIsXHJcbiAgICBcInJlc2V0XCIsXHJcbiAgICBcInNjcm9sbFwiLFxyXG4gICAgXCJzZWVrZWRcIixcclxuICAgIFwic2Vla2luZ1wiLFxyXG4gICAgXCJzZWxlY3RcIixcclxuICAgIFwic2VsZWN0c3RhcnRcIixcclxuICAgIFwic3RhbGxlZFwiLFxyXG4gICAgXCJzdWJtaXRcIixcclxuICAgIFwic3VzcGVuZFwiLFxyXG4gICAgXCJ0aW1ldXBkYXRlXCIsXHJcbiAgICBcInZvbHVtZWNoYW5nZVwiLFxyXG4gICAgXCJ3YWl0aW5nXCIsXHJcbiAgICBcImFyaWFyZXF1ZXN0XCIsXHJcbiAgICBcImNvbW1hbmRcIixcclxuICAgIFwiZ290cG9pbnRlcmNhcHR1cmVcIixcclxuICAgIFwibG9zdHBvaW50ZXJjYXB0dXJlXCIsXHJcbiAgICBcIk1TR2VzdHVyZUNoYW5nZVwiLFxyXG4gICAgXCJNU0dlc3R1cmVEb3VibGVUYXBcIixcclxuICAgIFwiTVNHZXN0dXJlRW5kXCIsXHJcbiAgICBcIk1TR2VzdHVyZUhvbGRcIixcclxuICAgIFwiTVNHZXN0dXJlU3RhcnRcIixcclxuICAgIFwiTVNHZXN0dXJlVGFwXCIsXHJcbiAgICBcIk1TR290UG9pbnRlckNhcHR1cmVcIixcclxuICAgIFwiTVNJbmVydGlhU3RhcnRcIixcclxuICAgIFwiTVNMb3N0UG9pbnRlckNhcHR1cmVcIixcclxuICAgIFwiTVNQb2ludGVyQ2FuY2VsXCIsXHJcbiAgICBcIk1TUG9pbnRlckRvd25cIixcclxuICAgIFwiTVNQb2ludGVyRW50ZXJcIixcclxuICAgIFwiTVNQb2ludGVyTGVhdmVcIixcclxuICAgIFwiTVNQb2ludGVyTW92ZVwiLFxyXG4gICAgXCJNU1BvaW50ZXJPdXRcIixcclxuICAgIFwiTVNQb2ludGVyT3ZlclwiLFxyXG4gICAgXCJNU1BvaW50ZXJVcFwiLFxyXG4gICAgXCJ0b3VjaGNhbmNlbFwiLFxyXG4gICAgXCJ0b3VjaGVuZFwiLFxyXG4gICAgXCJ0b3VjaG1vdmVcIixcclxuICAgIFwidG91Y2hzdGFydFwiLFxyXG4gICAgXCJ3ZWJraXRmdWxsc2NyZWVuY2hhbmdlXCIsXHJcbiAgICBcIndlYmtpdGZ1bGxzY3JlZW5lcnJvclwiLFxyXG4gICAgXCJwb2ludGVyY2FuY2VsXCIsXHJcbiAgICBcInBvaW50ZXJkb3duXCIsXHJcbiAgICBcInBvaW50ZXJlbnRlclwiLFxyXG4gICAgXCJwb2ludGVybGVhdmVcIixcclxuICAgIFwicG9pbnRlcm1vdmVcIixcclxuICAgIFwicG9pbnRlcm91dFwiLFxyXG4gICAgXCJwb2ludGVyb3ZlclwiLFxyXG4gICAgXCJwb2ludGVydXBcIixcclxuICAgIFwid2hlZWxcIlxyXG5dO1xyXG5jb25zdCBldmVudHNBdHRyID0gYWxsRXZlbnRzLm1hcChldmVudE5hbWUgPT4gXCJvblwiICsgZXZlbnROYW1lKTtcclxuY29uc3QgZXZlbnRTZWxlY3RvcnMgPSBhbGxFdmVudHMubWFwKGV2ZW50TmFtZSA9PiBcIltvblwiICsgZXZlbnROYW1lICsgXCJdXCIpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1FdmVudEJpbmRpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9jb25jcmV0ZS9FdmVudEJpbmRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IEJhc2VCaW5kaW5nIH0gZnJvbSBcIi4vYmFzZS9CYXNlQmluZGluZ1wiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi9yZWZsZWN0aW9uL1Byb3BlcnR5XCI7XHJcbmV4cG9ydCBjbGFzcyBCYXNlSW5wdXRCaW5kaW5nIGV4dGVuZHMgQmFzZUJpbmRpbmcge1xyXG4gICAgZ2V0IGF0dHJpYnV0ZSgpIHsgcmV0dXJuICdpbnB1dCc7IH1cclxuICAgIGJpbmRpbmcoRE9NT2JqZWN0LCBtb2RlbCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IERPTU9iamVjdC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcclxuICAgICAgICAgICAgUHJvcGVydHkucmVkZWZpbmUobW9kZWwsIHZhbHVlLCAodmFsKSA9PiB2YWwsICh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgIERPTU9iamVjdC5pbm5lckhUTUwgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdmFyIGV2ZW50ID0gXCIjZXZlbnQ6c2V0W1wiICsgdmFsdWUgKyBcIl1cIjtcclxuICAgICAgICAgICAgaWYgKG1vZGVsW2V2ZW50XSkge1xyXG4gICAgICAgICAgICAgICAgbW9kZWxbZXZlbnRdLmJpbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRE9NT2JqZWN0Lm5vZGVWYWx1ZSA9IG1vZGVsW3ZhbHVlXTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRE9NT2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RlbFt2YWx1ZV0gPSBET01PYmplY3Qubm9kZVZhbHVlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2VJbnB1dEJpbmRpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9jb25jcmV0ZS9CYXNlSW5wdXRCaW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBCYXNlQnlBdHRyaWJ1dGVCaW5kaW5nIH0gZnJvbSBcIi4vYmFzZS9CYXNlQnlBdHRyaWJ1dGVCaW5kaW5nXCI7XHJcbmltcG9ydCB7IElCaW5kaW5nIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUJpbmRpbmdcIjtcclxuaW1wb3J0IHsgSVZpZXdFbmdpbmUgfSBmcm9tIFwiLi4vLi4vdmlld2VuZ2luZS9pbnRlcmZhY2VzL0lWaWV3RW5naW5lXCI7XHJcbmltcG9ydCB7IEJpbmRDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3ZpZXdiaW5kaW5nL2NvbnRyYWN0cy9CaW5kQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBJVmlld0JpbmRlciB9IGZyb20gXCIuLi8uLi92aWV3YmluZGluZy9pbnRlcmZhY2VzL0lWaWV3QmluZGVyXCI7XHJcbmltcG9ydCB7IFN0cmluZ0hlbHBlciB9IGZyb20gXCIuLi8uLi9kZWNsYXJlL3N0cmluZ1wiO1xyXG5leHBvcnQgY2xhc3MgQmFzZUNvbGxlY3Rpb25CaW5kaW5nIGV4dGVuZHMgQmFzZUJ5QXR0cmlidXRlQmluZGluZyB7XHJcbiAgICBnZXQgYXR0cmlidXRlKCkgeyByZXR1cm4gJ2RhdGEtbXVsdGlwbGUnOyB9XHJcbiAgICBiaW5kaW5nKERPTU9iamVjdCwgbW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IG1vZGVsW0RPTU9iamVjdC5nZXRBdHRyaWJ1dGUodGhpcy5hdHRyaWJ1dGUpXTtcclxuICAgICAgICAgICAgRE9NT2JqZWN0LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmF0dHJpYnV0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IERPTUNvbGxlY3Rpb24gPSBuZXcgSFRNTEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb24gPT0gdW5kZWZpbmVkIHx8IGNvbGxlY3Rpb24ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIERPTU9iamVjdC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdHBsID0gU3RyaW5nSGVscGVyLnJlcGxhY2VBbGwoU3RyaW5nSGVscGVyLnJlcGxhY2VBbGwoRE9NT2JqZWN0Lm91dGVySFRNTCwgJ1xcXFxbXFxcXFsnLCAne3snKSwgJ1xcXFxdXFxcXF0nLCAnfX0nKTtcclxuICAgICAgICAgICAgbGV0IGJpbmRpbmdzID0gdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZUFsbChJQmluZGluZykuZmlsdGVyKHggPT4geC5jb25zdHJ1Y3Rvci5uYW1lICE9IHRoaXMuY29uc3RydWN0b3IubmFtZSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihtb2RlbCwgY29sbGVjdGlvbltpXSk7XHJcbiAgICAgICAgICAgICAgICBtb2RlbC52aWV3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cGw7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgbGV0IF92aWV3ID0geWllbGQgSVZpZXdFbmdpbmUuVmlld0VuZ2luZVZpZXcobW9kZWwsICcnKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdHggPSBuZXcgQmluZENvbnRleHQoX3ZpZXcsIGJpbmRpbmdzKTtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSVZpZXdCaW5kZXIpLmJpbmQoY3R4KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvbSA9IHlpZWxkIF92aWV3LkRPTSgpO1xyXG4gICAgICAgICAgICAgICAgZG9tLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRE9NQ29sbGVjdGlvbi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIERPTU9iamVjdC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChET01Db2xsZWN0aW9uLCBET01PYmplY3QpO1xyXG4gICAgICAgICAgICBET01PYmplY3QgPSBET01Db2xsZWN0aW9uO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2VDb2xsZWN0aW9uQmluZGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2NvbmNyZXRlL0Jhc2VDb2xsZWN0aW9uQmluZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFRlbXBsYXRlIHtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD10ZW1wbGF0ZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS90ZW1wbGF0aW5nL2NvbnRyYWN0cy9UZW1wbGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFN0cmluZ0hlbHBlciB7XHJcbiAgICBzdGF0aWMgcmVwbGFjZUFsbChzdHIsIHNlYXJjaCwgcmVwbGFjZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChzZWFyY2gsICdnJyksIHJlcGxhY2VtZW50KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByYW5kb20obGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNoYXJzID0gJ2FiY2RlZmdoaWprbDAxMjM0NTY3ODltbm9wcXJzdHV2d3h5eic7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBsZW5ndGg7IGkgPiAwOyAtLWkpXHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBjaGFyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFycy5sZW5ndGgpXTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJhbmRvbWl6ZShzdHIpIHtcclxuICAgICAgICByZXR1cm4gc3RyICsgdGhpcy5yYW5kb20oNik7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RyaW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2RlY2xhcmUvc3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBJVmlld0VuZ2luZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lWaWV3RW5naW5lXCI7XHJcbmltcG9ydCB7IEV4ZWN1dGVDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRyYWN0cy9FeGVjdXRlQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBCaW5kQ29udGV4dCB9IGZyb20gXCIuLi8uLi92aWV3YmluZGluZy9jb250cmFjdHMvQmluZENvbnRleHRcIjtcclxuaW1wb3J0IHsgSVZpZXdCaW5kZXIgfSBmcm9tIFwiLi4vLi4vdmlld2JpbmRpbmcvaW50ZXJmYWNlcy9JVmlld0JpbmRlclwiO1xyXG5leHBvcnQgY2xhc3MgQmFzZVZpZXdFbmdpbmUge1xyXG4gICAgZXhlY3V0ZShjb250ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdmFyIHZpZXcgPSB5aWVsZCBJVmlld0VuZ2luZS5WaWV3RW5naW5lVmlldyhjb250ZXh0LmlWaWV3ZWQsIGNvbnRleHQuc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICB2YXIgZXhlY0N0eCA9IG5ldyBFeGVjdXRlQ29udGV4dChjb250ZXh0KTtcclxuICAgICAgICAgICAgdmFyIGJpbmRpbmdDb250ZXh0ID0gbmV3IEJpbmRDb250ZXh0KHZpZXcsIGV4ZWNDdHguYmluZGluZ0ZsYWdzKTtcclxuICAgICAgICAgICAgdmFyIHZpZXdiaW5kZXIgPSB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlKElWaWV3QmluZGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIHZpZXdiaW5kZXIuYmluZChiaW5kaW5nQ29udGV4dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmFzZVZpZXdFbmdpbmUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9jb25jcmV0ZS9CYXNlVmlld0VuZ2luZS5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSUJpbmRpbmcgfSBmcm9tIFwiLi4vLi4vYmluZGluZy9pbnRlcmZhY2VzL0lCaW5kaW5nXCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuZXhwb3J0IGNsYXNzIEV4ZWN1dGVDb250ZXh0IHtcclxuICAgIGNvbnN0cnVjdG9yKHZpZXdDdHgsIGJpbmRpbmdGbGFncykge1xyXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdDdHguaVZpZXdlZDtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yID0gdmlld0N0eC5zZWxlY3RvcjtcclxuICAgICAgICBpZiAoIWJpbmRpbmdGbGFncykge1xyXG4gICAgICAgICAgICBiaW5kaW5nRmxhZ3MgPSBHZXJhbml1bUFwcC5yZXNvbHZlQWxsKElCaW5kaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iaW5kaW5nRmxhZ3MgPSBiaW5kaW5nRmxhZ3M7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXhlY3V0ZUNvbnRleHQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9jb250cmFjdHMvRXhlY3V0ZUNvbnRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IElWaWV3UHVibGlzaGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSVZpZXdQdWJsaXNoZXJcIjtcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2xvZ2dpbmcvaW50ZXJmYWNlcy9JTG9nZ2VyXCI7XHJcbmV4cG9ydCBjbGFzcyBCYXNlVmlld1B1Ymxpc2hlciBleHRlbmRzIElWaWV3UHVibGlzaGVyIHtcclxuICAgIHB1Ymxpc2godmlldykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gdmlldy5zZWxlY3RvcjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb21Mb2FkZWQgPSBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50ICYmICFkb21Mb2FkZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5kb21Mb2FkZWQoc2VsZWN0b3IsIHZpZXcuZG9tKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZG9tTG9hZGVkICYmICFlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNlbGVjdG9yIGRvZXMgbm90IGV4aXN0czogXCIgKyBzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3LmRvbS5mb3JFYWNoKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZCh2aWV3LCBlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSUxvZ2dlcikubG9nKGV4KTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkb21Mb2FkZWQoc2VsZWN0b3IsIHZpZXdzKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2aWV3cy5mb3JFYWNoKHZpZXcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKHZpZXcsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmFzZVZpZXdQdWJsaXNoZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9jb25jcmV0ZS9CYXNlVmlld1B1Ymxpc2hlci5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gXCIuLi9hYnN0cmFjdC9CaW5kaW5nXCI7XHJcbmltcG9ydCB7IENsYXNzIH0gZnJvbSBcIi4uLy4uL3JlZmxlY3Rpb24vQ2xhc3NcIjtcclxuaW1wb3J0IHsgdG9IdG1sQXJyYXkgfSBmcm9tIFwiLi4vLi4vZXh0ZW5zaW9ucy9IdG1sRWxlbWVudEV4dGVuc2lvbnNcIjtcclxuaW1wb3J0IHsgQXJyYXlIZWxwZXIgfSBmcm9tIFwiLi4vLi4vZGVjbGFyZS9hcnJheVwiO1xyXG5pbXBvcnQgeyBJVmlld0VuZ2luZSB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2ludGVyZmFjZXMvSVZpZXdFbmdpbmVcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5pbXBvcnQgeyBJVmlld2FibGUgfSBmcm9tIFwiLi4vLi4vdmlldy9pbnRlcmZhY2VzL0lWaWV3YWJsZVwiO1xyXG5leHBvcnQgY2xhc3MgUHJvcGVydHlCaW5kaW5nIGV4dGVuZHMgQmluZGluZyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMucHJvcGVydHlSZWdleCA9IC9cXFsuKj9cXF0vZztcclxuICAgICAgICB0aGlzLmZpZWxkcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgZGV0ZWN0aW9uKERPTU9iamVjdHMpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBET01PYmplY3RzLmZvckVhY2goRE9NT2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRzLnB1c2goLi4uKERPTU9iamVjdC5pbm5lckhUTUwubWF0Y2goL1xcWy4qP1xcXS9nKSB8fCBbXSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5maWVsZHMgPSBBcnJheUhlbHBlci5yZW1vdmVTYW1lKHRoaXMuZmllbGRzKTtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBET01PYmplY3RzLmZvckVhY2goRE9NT2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5wdXNoKC4uLnRoaXMucXVlcnlYUGF0aChET01PYmplY3QsIGZpZWxkKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50cztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGJpbmRpbmcoRE9NT2JqZWN0LCBtb2RlbCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IERPTU9iamVjdC5pbm5lclRleHQubWF0Y2godGhpcy5wcm9wZXJ0eVJlZ2V4KTtcclxuICAgICAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IG1vZGVsW2ZpZWxkLnN1YnN0cmluZygxLCBmaWVsZC5sZW5ndGggLSAxKV07XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMucmVuZGVyQXJyYXkocHJvcGVydHksIERPTU9iamVjdCwgZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnJlbmRlcihwcm9wZXJ0eSwgRE9NT2JqZWN0LCBmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNsZWFyKERPTU9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQXJyYXkocHJvcGVydHksIERPTU9iamVjdCwgZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBsZXQgZmllbGRzRXhwYW5kZWQgPSBcIlwiO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJvcGVydHkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHNFeHBhbmRlZCArPSBcIltcIiArIGluZGV4ICsgXCJdXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlVGV4dE5vZGUoRE9NT2JqZWN0LCBmaWVsZCwgW2RvY3VtZW50LmNyZWF0ZVRleHROb2RlKGZpZWxkc0V4cGFuZGVkKV0pO1xyXG4gICAgICAgICAgICBwcm9wZXJ0eS5mb3JFYWNoKChwcm9wLCBpbmRleCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyB5aWVsZCB0aGlzLnJlbmRlcihwcm9wLCBET01PYmplY3QsIFwiW1wiICsgaW5kZXggKyBcIl1cIik7IH0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcihwcm9wZXJ0eSwgRE9NT2JqZWN0LCBmaWVsZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChDbGFzcy5pc0Fzc2lnbmFibGVGcm9tKFZpZXdNb2RlbCwgcHJvcGVydHkuY29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnB1Ymxpc2goRE9NT2JqZWN0LCBwcm9wZXJ0eSwgZmllbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5yZXBsYWNlVGV4dE5vZGUoRE9NT2JqZWN0LCBmaWVsZCwgW2RvY3VtZW50LmNyZWF0ZVRleHROb2RlKHByb3BlcnR5KV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaXNoKERPTU9iamVjdCwgcHJvcGVydHksIGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgZG9tID0geWllbGQgR2VyYW5pdW1BcHAucmVzb2x2ZShJVmlld0VuZ2luZSkuZXhlY3V0ZSh7XHJcbiAgICAgICAgICAgICAgICBpVmlld2VkOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlVGV4dE5vZGUoRE9NT2JqZWN0LCBmaWVsZCwgZG9tKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlcGxhY2VUZXh0Tm9kZShyb290LCB0ZXh0LCB0YXJnZXQpIHtcclxuICAgICAgICBjb25zdCBhbGxOb2RlcyA9IHRvSHRtbEFycmF5KHJvb3QuY2hpbGROb2Rlcyk7XHJcbiAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBhbGxOb2Rlcy5maW5kKHggPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4geC5ub2RlVHlwZSA9PSAzICYmICh4LnRleHRDb250ZW50LnRyaW0oKSA9PSB0ZXh0IHx8IHgudGV4dENvbnRlbnQuaW5jbHVkZXModGV4dCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0ZXh0Tm9kZSlcclxuICAgICAgICAgICAgdGFyZ2V0LmZvckVhY2godGFyZ2V0Tm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGV4dE5vZGUudGV4dENvbnRlbnQudHJpbSgpID09IHRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByb290LnJlcGxhY2VDaGlsZCh0YXJnZXROb2RlLCB0ZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wc1N0cmluZ3MgPSB0ZXh0Tm9kZS50ZXh0Q29udGVudC5tYXRjaCh0aGlzLnByb3BlcnR5UmVnZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wc1N0cmluZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IHRleHROb2RlLnRleHRDb250ZW50LnJlcGxhY2UodGV4dCwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0Tm9kZS5uZXh0U2libGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXJnZXROb2RlLCB0ZXh0Tm9kZS5uZXh0U2libGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXJnZXROb2RlLCB0ZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHROb2RlLnRleHRDb250ZW50ID0gdGV4dE5vZGUudGV4dENvbnRlbnQucmVwbGFjZSh0ZXh0LCB0YXJnZXROb2RlLmlubmVySFRNTCB8fCB0YXJnZXROb2RlLnRleHRDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2hhdHRlck5vZGVzKG5vZGUpIHtcclxuICAgIH1cclxuICAgIHF1ZXJ5WFBhdGgobm9kZSwgZmllbGQpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHhwYXRoID0gZG9jdW1lbnQuZXZhbHVhdGUoXCIvLypbdGV4dCgpW2NvbnRhaW5zKC4sJ1wiICsgZmllbGQgKyBcIicpXV1cIiwgbm9kZSwgbnVsbCwgWFBhdGhSZXN1bHQuT1JERVJFRF9OT0RFX1NOQVBTSE9UX1RZUEUsIG51bGwpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB4cGF0aC5zbmFwc2hvdExlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKHhwYXRoLnNuYXBzaG90SXRlbShpbmRleCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFZpZXdNb2RlbCBleHRlbmRzIElWaWV3YWJsZSB7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHJvcGVydHlCaW5kaW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvUHJvcGVydHlCaW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgQ2xhc3Mge1xyXG4gICAgc3RhdGljIGlzQXNzaWduYWJsZUZyb20oZnJvbSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gKHRhcmdldCB8fCB7IG5hbWU6ICcnIH0pLm5hbWU7XHJcbiAgICAgICAgaWYgKGZyb20ubmFtZSA9PSBub3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG5vdyAhPT0gXCJcIiAmJiBub3cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ2xhc3MuaXNBc3NpZ25hYmxlRnJvbShmcm9tLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldFByb3BlcnRpZXModGFyZ2V0T2JqZWN0KSB7XHJcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBbXTtcclxuICAgICAgICBmb3IgKDsgdGFyZ2V0T2JqZWN0ICE9IG51bGw7IHRhcmdldE9iamVjdCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXRPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHZhciBvd25Qcm9wZXJ0aWVzTmFtZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldE9iamVjdCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3duUHJvcGVydGllc05hbWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gb3duUHJvcGVydGllc05hbWVbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIUNsYXNzLm5vdENvcmVGdW5jLmluY2x1ZGVzKHByb3BOYW1lKSAmJiAhcHJvcGVydGllcy5pbmNsdWRlcyhwcm9wTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHgsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogdGFyZ2V0T2JqZWN0W3hdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0IG5vdENvcmVGdW5jKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIFwiY29uc3RydWN0b3JcIixcclxuICAgICAgICAgICAgXCJjbG9uZVwiLFxyXG4gICAgICAgICAgICBcIl9fZGVmaW5lR2V0dGVyX19cIixcclxuICAgICAgICAgICAgXCJfX2RlZmluZVNldHRlcl9fXCIsXHJcbiAgICAgICAgICAgIFwiaGFzT3duUHJvcGVydHlcIixcclxuICAgICAgICAgICAgXCJfX2xvb2t1cEdldHRlcl9fXCIsXHJcbiAgICAgICAgICAgIFwiX19sb29rdXBTZXR0ZXJfX1wiLFxyXG4gICAgICAgICAgICBcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsXHJcbiAgICAgICAgICAgIFwiX19wcm90b19fXCIsXHJcbiAgICAgICAgICAgIFwidG9TdHJpbmdcIixcclxuICAgICAgICAgICAgXCJ0b0xvY2FsZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICBcInZhbHVlT2ZcIixcclxuICAgICAgICAgICAgXCJpc1Byb3RvdHlwZU9mXCJcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsYXNzLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JlZmxlY3Rpb24vQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJVmlld2FibGUge1xyXG4gICAgdmlldygpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVZpZXdhYmxlLnZpZXdcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JVmlld2FibGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlldy9pbnRlcmZhY2VzL0lWaWV3YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGVzL1N0YXRlXCI7XHJcbmltcG9ydCB7IHJvdXRlaWdub3JlIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmcvY29uY3JldGUvZGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgeyBJVmlld0VuZ2luZSB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2ludGVyZmFjZXMvSVZpZXdFbmdpbmVcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5pbXBvcnQgeyBJVmlld1B1Ymxpc2hlciB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2ludGVyZmFjZXMvSVZpZXdQdWJsaXNoZXJcIjtcclxubGV0IFZpZXdTdGF0ZSA9IGNsYXNzIFZpZXdTdGF0ZSBleHRlbmRzIFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZWZ1bGwpXHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgc3RhdGVmdWxsKCkgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgIHNob3coc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXNbXCIjVmlld1N0YXRlXCJdKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXlTdGF0ZSA9IHlpZWxkIFN0YXRlLmdldCh0aGlzLmNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgICAgIG15U3RhdGVbXCIjVmlld1N0YXRlXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG15U3RhdGVbXCJzaG93XCJdKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzW1wiI1ZpZXdTdGF0ZVwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvbSA9IHlpZWxkIEdlcmFuaXVtQXBwLnJlc29sdmUoSVZpZXdFbmdpbmUpLmV4ZWN1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlWaWV3ZWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHlpZWxkIEdlcmFuaXVtQXBwLnJlc29sdmUoSVZpZXdQdWJsaXNoZXIpLnB1Ymxpc2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbTogZG9tLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuVmlld1N0YXRlID0gX19kZWNvcmF0ZShbXHJcbiAgICByb3V0ZWlnbm9yZVxyXG5dLCBWaWV3U3RhdGUpO1xyXG5leHBvcnQgeyBWaWV3U3RhdGUgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Vmlld1N0YXRlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvYWJzdHJhY3QvVmlld1N0YXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyByb3V0ZWlnbm9yZSB9IGZyb20gXCIuLi9yb3V0aW5nL2NvbmNyZXRlL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL01vZGVsXCI7XHJcbmltcG9ydCB7IElTdGF0ZU1hbmFnZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL0lTdGF0ZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSVJlcXVlc3QgfSBmcm9tIFwiLi4vYmFja2VuZC9pbnRlcmZhY2VzL0lSZXF1ZXN0XCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuaW1wb3J0IHsgTGlmZSB9IGZyb20gXCIuLi9jb2hlcmVuY2UvaW50ZXJmYWNlcy9JQ29oZXJlbmNlQ29udGFpbmVyXCI7XHJcbmxldCBTdGF0ZSA9IGNsYXNzIFN0YXRlIGV4dGVuZHMgTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhdGVmdWxsID0gdHJ1ZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgaWYgKHN0YXRlZnVsbClcclxuICAgICAgICAgICAgdGhpcy5maWxsU3RhdGUoKTtcclxuICAgIH1cclxuICAgIGZpbGxTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3Rvci5uYW1lICE9IFwiVmlld1N0YXRlXCIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlTWFuYWdlciA9IEdlcmFuaXVtQXBwLnJlc29sdmUoSVN0YXRlTWFuYWdlcik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHN0YXRlTWFuYWdlci5yZXNvbHZlKHRoaXMuY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlTWFuYWdlci5yZWdpc3Rlcih0aGlzLmNvbnN0cnVjdG9yLCB0aGlzLmNvbnN0cnVjdG9yLCBMaWZlLlNpbmdsZXRvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXQodHlwZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0ZSA9IEdlcmFuaXVtQXBwLnJlc29sdmUoSVN0YXRlTWFuYWdlcikucmVzb2x2ZSh0eXBlKTtcclxuICAgICAgICAgICAgaWYgKCFzdGF0ZSlcclxuICAgICAgICAgICAgICAgIHN0YXRlID0gbmV3IHR5cGUoKTtcclxuICAgICAgICAgICAgeWllbGQgc3RhdGUuc3luYygpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpc1tcImBjb250YWluZXJcIl07XHJcbiAgICAgICAgY29uc3Qgc3RhdGVNYW5hZ2VyID0gY29udGFpbmVyLnJlc29sdmUoSVN0YXRlTWFuYWdlcik7XHJcbiAgICAgICAgc3RhdGVNYW5hZ2VyLnJlbGVhc2UodGhpcy5jb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbiAgICBzeW5jKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN5bmNocm9uaXplcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlKElSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0geWllbGQgcmVxdWVzdC5zZW5kKHRoaXMuc3luY2hyb25pemVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2J0YWluKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblN0YXRlID0gX19kZWNvcmF0ZShbXHJcbiAgICByb3V0ZWlnbm9yZVxyXG5dLCBTdGF0ZSk7XHJcbmV4cG9ydCB7IFN0YXRlIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0YXRlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0YXRlcy9TdGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgcm91dGVpZ25vcmUgfSBmcm9tIFwiLi4vcm91dGluZy9jb25jcmV0ZS9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IElDbG9uZWFibGUgfSBmcm9tIFwiLi4vcmVmbGVjdGlvbi9jbG9uaW5nL2RlY29yYXRvcnMvSUNsb25lYWJsZVwiO1xyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuLi9iZWhhdmlvcnMvZXZlbnRzL2Fic3RyYWN0L0V2ZW50XCI7XHJcbmltcG9ydCB7IElSZXF1ZXN0IH0gZnJvbSBcIi4uL2JhY2tlbmQvaW50ZXJmYWNlcy9JUmVxdWVzdFwiO1xyXG5sZXQgTW9kZWwgPSBjbGFzcyBNb2RlbCBleHRlbmRzIEV2ZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzID0gW107XHJcbiAgICB9XHJcbiAgICBvYnRhaW4oZGF0YSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuICAgICAgICB0aGlzLnJhaXNlKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzeW5jaHJvbml6ZSBtb2RlbCB3aXRoIHNlcnZlciBzdGF0ZVxyXG4gICAgICovXHJcbiAgICBzeW5jKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN5bmNocm9uaXplcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlKElSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0geWllbGQgcmVxdWVzdC5zZW5kKHRoaXMuc3luY2hyb25pemVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2J0YWluKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIG9iamVjdCB1c2VkIGFzIHN5bmNocm9uaXphdG9yXHJcbiAgICAgKi9cclxuICAgIGdldCBzeW5jaHJvbml6ZXIoKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cclxufTtcclxuTW9kZWwgPSBfX2RlY29yYXRlKFtcclxuICAgIHJvdXRlaWdub3JlLFxyXG4gICAgSUNsb25lYWJsZVxyXG5dLCBNb2RlbCk7XHJcbmV4cG9ydCB7IE1vZGVsIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1vZGVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL21vZGVscy9Nb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5pbXBvcnQgeyBJQ2xvbmVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUNsb25lclwiO1xyXG5leHBvcnQgZnVuY3Rpb24gSUNsb25lYWJsZShjb25zdHJ1Y3Rvcikge1xyXG4gICAgY29uc3RydWN0b3IucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBHZXJhbml1bUFwcC5yZXNvbHZlKElDbG9uZXIpLmNsb25lKHRoaXMpO1xyXG4gICAgfTtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JQ2xvbmVhYmxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JlZmxlY3Rpb24vY2xvbmluZy9kZWNvcmF0b3JzL0lDbG9uZWFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJQ2xvbmVyIHtcclxuICAgIGNsb25lKHNhbXBsZSkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJQ2xvbmVyLmNsb25lXCIpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SUNsb25lci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yZWZsZWN0aW9uL2Nsb25pbmcvaW50ZXJmYWNlcy9JQ2xvbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmltcG9ydCB7IElSb3V0ZXIgfSBmcm9tIFwiLi4vLi4vcm91dGluZy9pbnRlcmZhY2VzL0lSb3V0ZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIGlzKGNvbnN0cnVjdG9yKSB7XHJcbiAgICB2YXIgcm91dGVyID0gR2VyYW5pdW1BcHAucmVzb2x2ZShJUm91dGVyKTtcclxuICAgIHJldHVybiByb3V0ZXIucm91dGVzLmZpbHRlcih4ID0+IHtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgeC5jdG9yKCk7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmNvbnN0cnVjdG9yLm5hbWUgPT0gY29uc3RydWN0b3IubmFtZTtcclxuICAgIH0pLmxlbmd0aCA+IDA7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGlzdG9yeS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9oaXN0b3J5L2RlY29yYXRvcnMvaGlzdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlldy9hYnN0cmFjdC9WaWV3XCI7XHJcbnJlcXVpcmUoXCIuL2NhdGVnb3J5QnV0dG9uXCIpO1xyXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlCdXR0b25WaWV3IGV4dGVuZHMgVmlldyB7XHJcbiAgICBkZWNsYXJlKCkge1xyXG4gICAgICAgIHJldHVybiBcIjxidXR0b24gY2xhc3M9J2J1dHRvbiBjYXRlZ29yeScgb25jbGljaz0nb25DbGljaycgZGF0YS10ZW1wbGF0aW5nLWNvbnRlbnQ9Jyc+W3RleHRdPC9idXR0b24+XCI7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2F0ZWdvcnlCdXR0b25WaWV3LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnlCdXR0b24vY2F0ZWdvcnlCdXR0b25WaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBTb2NpYWxzUGFuZWwgfSBmcm9tIFwiLi4vc29jaWFsc1BhbmVsL3NvY2lhbHNQYW5lbFwiO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tIFwiLi4vc2VhcmNoL3NlYXJjaFwiO1xyXG5pbXBvcnQgeyBWaWV3TW9kZWxGaWxlIH0gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3bW9kZWxzL2NvbmNyZXRlL1ZpZXdNb2RlbEZpbGVcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcnlCdXR0b24gfSBmcm9tIFwiLi4vY2F0ZWdvcnlCdXR0b24vY2F0ZWdvcnlCdXR0b25cIjtcclxuZXhwb3J0IGNsYXNzIEhlYWRlciBleHRlbmRzIFZpZXdNb2RlbEZpbGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLmh0bWxGaWxlVXJsID0gXCIuL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuaHRtbFwiO1xyXG4gICAgICAgIHRoaXMuc29jaWFscyA9IG5ldyBTb2NpYWxzUGFuZWwoKTtcclxuICAgICAgICB0aGlzLnNlYXJjaCA9IG5ldyBTZWFyY2goKTtcclxuICAgICAgICB0aGlzLmJ0biA9IG5ldyBDYXRlZ29yeUJ1dHRvbihcInd0ZlwiKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBWaWV3TW9kZWwgfSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvYWJzdHJhY3QvVmlld01vZGVsXCI7XHJcbmltcG9ydCB7IFNvY2lhbHNQYW5lbFZpZXcgfSBmcm9tIFwiLi9zb2NpYWxzUGFuZWxWaWV3XCI7XHJcbmltcG9ydCB7IFNvY2lhbEJ1dHRvbiB9IGZyb20gXCIuL3NvY2lhbEJ1dHRvbi9zb2NpYWxCdXR0b25cIjtcclxuZXhwb3J0IGNsYXNzIFNvY2lhbHNQYW5lbCBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgbmV3IFNvY2lhbEJ1dHRvbihcImZhIGZhLXZrXCIpLFxyXG4gICAgICAgICAgICBuZXcgU29jaWFsQnV0dG9uKFwiZmEgZmEtdmtcIiksXHJcbiAgICAgICAgICAgIG5ldyBTb2NpYWxCdXR0b24oXCJmYSBmYS12a1wiKSxcclxuICAgICAgICAgICAgbmV3IFNvY2lhbEJ1dHRvbihcImZhIGZhLXZrXCIpXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuICAgIHZpZXcoKSB7XHJcbiAgICAgICAgcmV0dXJuIFNvY2lhbHNQYW5lbFZpZXc7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c29jaWFsc1BhbmVsLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvc29jaWFsc1BhbmVsL3NvY2lhbHNQYW5lbC5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlldy9hYnN0cmFjdC9WaWV3XCI7XHJcbmV4cG9ydCBjbGFzcyBTb2NpYWxzUGFuZWxWaWV3IGV4dGVuZHMgVmlldyB7XHJcbiAgICBkZWNsYXJlKCkge1xyXG4gICAgICAgIHJldHVybiBcIjxkaXYgY2xhc3M9J3NvY2lhbHMnPltidXR0b25zXTwvZGl2PlwiO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNvY2lhbHNQYW5lbFZpZXcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzUGFuZWwvc29jaWFsc1BhbmVsVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3bW9kZWxzL2Fic3RyYWN0L1ZpZXdNb2RlbFwiO1xyXG5pbXBvcnQgeyBTb2NpYWxCdXR0b25WaWV3IH0gZnJvbSBcIi4vc29jaWFsQnV0dG9uVmlld1wiO1xyXG5leHBvcnQgY2xhc3MgU29jaWFsQnV0dG9uIGV4dGVuZHMgVmlld01vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yKGljb24pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XHJcbiAgICB9XHJcbiAgICB2aWV3KCkge1xyXG4gICAgICAgIHJldHVybiBTb2NpYWxCdXR0b25WaWV3O1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNvY2lhbEJ1dHRvbi5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3NvY2lhbHNQYW5lbC9zb2NpYWxCdXR0b24vc29jaWFsQnV0dG9uLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3L2Fic3RyYWN0L1ZpZXdcIjtcclxuZXhwb3J0IGNsYXNzIFNvY2lhbEJ1dHRvblZpZXcgZXh0ZW5kcyBWaWV3IHtcclxuICAgIGRlY2xhcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGEgY2xhc3M9JycgaHJlZj0nIyc+PC9hPlwiO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNvY2lhbEJ1dHRvblZpZXcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzUGFuZWwvc29jaWFsQnV0dG9uL3NvY2lhbEJ1dHRvblZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFZpZXdNb2RlbEZpbGUgfSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvY29uY3JldGUvVmlld01vZGVsRmlsZVwiO1xyXG5leHBvcnQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgVmlld01vZGVsRmlsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuaHRtbEZpbGVVcmwgPSBcIi4vc3JjL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5odG1sXCI7XHJcbiAgICB9XHJcbiAgICBjbGljaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoVmlldy5jbGljaycpO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hWaWV3LmNoYW5nZScpO1xyXG4gICAgfVxyXG4gICAgYmx1cigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoVmlldy5ibHVyJyk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2VhcmNoLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL2Fic3RyYWN0L1ZpZXdNb2RlbFwiO1xyXG5pbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmltcG9ydCB7IElSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL2JhY2tlbmQvaW50ZXJmYWNlcy9JUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBWaWV3RE9NIH0gZnJvbSBcIi4uLy4uL3ZpZXdET00vYWJzdHJhY3QvVmlld0RPTVwiO1xyXG5pbXBvcnQgeyB0b0h0bWxBcnJheSB9IGZyb20gXCIuLi8uLi9leHRlbnNpb25zL0h0bWxFbGVtZW50RXh0ZW5zaW9uc1wiO1xyXG5pbXBvcnQgeyBMaWZlIH0gZnJvbSBcIi4uLy4uL2NvaGVyZW5jZS9pbnRlcmZhY2VzL0lDb2hlcmVuY2VDb250YWluZXJcIjtcclxuZXhwb3J0IGNsYXNzIFZpZXdNb2RlbEZpbGUgZXh0ZW5kcyBWaWV3TW9kZWwge1xyXG4gICAgdmlldygpIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLmh0bWxGaWxlVXJsO1xyXG4gICAgICAgIHJldHVybiBjbGFzcyBleHRlbmRzIEZpbGVWaWV3RE9NIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFHZXJhbml1bUFwcC5pc3JlZ2lzdGVyZWQoVGVtcGxhdGVDYWNoZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBHZXJhbml1bUFwcC5yZWdpc3RlcihUZW1wbGF0ZUNhY2hlLCBUZW1wbGF0ZUNhY2hlLCBMaWZlLlNpbmdsZXRvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZSA9IEdlcmFuaXVtQXBwLnJlc29sdmUoVGVtcGxhdGVDYWNoZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZUl0ZW0gPSBjYWNoZS5pdGVtcy5maW5kKGMgPT4gYy51cmwgPT0gdXJsKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWNoZUl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0bWwgPSBjYWNoZUl0ZW0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgRmlsZVZpZXdET00gZXh0ZW5kcyBWaWV3RE9NIHtcclxuICAgIERPTSgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB5aWVsZCB0aGlzLnByZXBhcmUoKTtcclxuICAgICAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gdGhpcy5odG1sO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9IdG1sQXJyYXkod3JhcHBlci5jaGlsZE5vZGVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHByZXBhcmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgeWllbGQgdGhpcy5sb2FkVGVtcGxhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0IGxvYWRlZCgpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmh0bWw7XHJcbiAgICB9XHJcbiAgICBsb2FkVGVtcGxhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IEdlcmFuaXVtQXBwLnJlc29sdmUoSVJlcXVlc3QpO1xyXG4gICAgICAgICAgICB0aGlzLmh0bWwgPSB5aWVsZCByZXF1ZXN0LnNlbmQoeyBtZXRob2Q6IFwiR0VUXCIsIHVybDogdGhpcy51cmwsIGFzeW5jOiB0cnVlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FjaGUoKSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGUgPSBHZXJhbml1bUFwcC5yZXNvbHZlKFRlbXBsYXRlQ2FjaGUpO1xyXG4gICAgICAgIGNhY2hlLml0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICB1cmw6IHRoaXMudXJsLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5odG1sLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFRlbXBsYXRlQ2FjaGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFRlbXBsYXRlQ2FjaGVJdGVtIHtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1WaWV3TW9kZWxGaWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvY29uY3JldGUvVmlld01vZGVsRmlsZS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IEJhc2VCeUF0dHJpYnV0ZUJpbmRpbmcgfSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvYmFzZS9CYXNlQnlBdHRyaWJ1dGVCaW5kaW5nXCI7XHJcbmltcG9ydCAqIGFzIE11c3RhY2hlIGZyb20gXCJtdXN0YWNoZVwiO1xyXG5leHBvcnQgY2xhc3MgTXVzdGFjaGVCaW5kIGV4dGVuZHMgQmFzZUJ5QXR0cmlidXRlQmluZGluZyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMuYXR0cmlidXRlID0gXCJkYXRhLXRlbXBsYXRpbmctY29udGVudFwiO1xyXG4gICAgfVxyXG4gICAgYmluZGluZyhET01PYmplY3QsIG1vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gTXVzdGFjaGUucmVuZGVyKERPTU9iamVjdC5pbm5lckhUTUwsIG1vZGVsKTtcclxuICAgICAgICAgICAgRE9NT2JqZWN0LmlubmVySFRNTCA9IHBhcnNlZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1NdXN0YWNoZUJpbmQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmluZGVycy9NdXN0YWNoZUJpbmQuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogbXVzdGFjaGUuanMgLSBMb2dpYy1sZXNzIHt7bXVzdGFjaGV9fSB0ZW1wbGF0ZXMgd2l0aCBKYXZhU2NyaXB0XG4gKiBodHRwOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzXG4gKi9cblxuLypnbG9iYWwgZGVmaW5lOiBmYWxzZSBNdXN0YWNoZTogdHJ1ZSovXG5cbihmdW5jdGlvbiBkZWZpbmVNdXN0YWNoZSAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiB0eXBlb2YgZXhwb3J0cy5ub2RlTmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMpOyAvLyBDb21tb25KU1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSk7IC8vIEFNRFxuICB9IGVsc2Uge1xuICAgIGdsb2JhbC5NdXN0YWNoZSA9IHt9O1xuICAgIGZhY3RvcnkoZ2xvYmFsLk11c3RhY2hlKTsgLy8gc2NyaXB0LCB3c2gsIGFzcFxuICB9XG59KHRoaXMsIGZ1bmN0aW9uIG11c3RhY2hlRmFjdG9yeSAobXVzdGFjaGUpIHtcblxuICB2YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheVBvbHlmaWxsIChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbChvYmplY3QpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vcmUgY29ycmVjdCB0eXBlb2Ygc3RyaW5nIGhhbmRsaW5nIGFycmF5XG4gICAqIHdoaWNoIG5vcm1hbGx5IHJldHVybnMgdHlwZW9mICdvYmplY3QnXG4gICAqL1xuICBmdW5jdGlvbiB0eXBlU3RyIChvYmopIHtcbiAgICByZXR1cm4gaXNBcnJheShvYmopID8gJ2FycmF5JyA6IHR5cGVvZiBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAgKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW1xcLVxcW1xcXXt9KCkqKz8uLFxcXFxcXF4kfCNcXHNdL2csICdcXFxcJCYnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOdWxsIHNhZmUgd2F5IG9mIGNoZWNraW5nIHdoZXRoZXIgb3Igbm90IGFuIG9iamVjdCxcbiAgICogaW5jbHVkaW5nIGl0cyBwcm90b3R5cGUsIGhhcyBhIGdpdmVuIHByb3BlcnR5XG4gICAqL1xuICBmdW5jdGlvbiBoYXNQcm9wZXJ0eSAob2JqLCBwcm9wTmFtZSkge1xuICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAocHJvcE5hbWUgaW4gb2JqKTtcbiAgfVxuXG4gIC8vIFdvcmthcm91bmQgZm9yIGh0dHBzOi8vaXNzdWVzLmFwYWNoZS5vcmcvamlyYS9icm93c2UvQ09VQ0hEQi01NzdcbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzL2lzc3Vlcy8xODlcbiAgdmFyIHJlZ0V4cFRlc3QgPSBSZWdFeHAucHJvdG90eXBlLnRlc3Q7XG4gIGZ1bmN0aW9uIHRlc3RSZWdFeHAgKHJlLCBzdHJpbmcpIHtcbiAgICByZXR1cm4gcmVnRXhwVGVzdC5jYWxsKHJlLCBzdHJpbmcpO1xuICB9XG5cbiAgdmFyIG5vblNwYWNlUmUgPSAvXFxTLztcbiAgZnVuY3Rpb24gaXNXaGl0ZXNwYWNlIChzdHJpbmcpIHtcbiAgICByZXR1cm4gIXRlc3RSZWdFeHAobm9uU3BhY2VSZSwgc3RyaW5nKTtcbiAgfVxuXG4gIHZhciBlbnRpdHlNYXAgPSB7XG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnLFxuICAgICdcIic6ICcmcXVvdDsnLFxuICAgIFwiJ1wiOiAnJiMzOTsnLFxuICAgICcvJzogJyYjeDJGOycsXG4gICAgJ2AnOiAnJiN4NjA7JyxcbiAgICAnPSc6ICcmI3gzRDsnXG4gIH07XG5cbiAgZnVuY3Rpb24gZXNjYXBlSHRtbCAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZywgZnVuY3Rpb24gZnJvbUVudGl0eU1hcCAocykge1xuICAgICAgcmV0dXJuIGVudGl0eU1hcFtzXTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciB3aGl0ZVJlID0gL1xccyovO1xuICB2YXIgc3BhY2VSZSA9IC9cXHMrLztcbiAgdmFyIGVxdWFsc1JlID0gL1xccyo9LztcbiAgdmFyIGN1cmx5UmUgPSAvXFxzKlxcfS87XG4gIHZhciB0YWdSZSA9IC8jfFxcXnxcXC98PnxcXHt8Jnw9fCEvO1xuXG4gIC8qKlxuICAgKiBCcmVha3MgdXAgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgc3RyaW5nIGludG8gYSB0cmVlIG9mIHRva2Vucy4gSWYgdGhlIGB0YWdzYFxuICAgKiBhcmd1bWVudCBpcyBnaXZlbiBoZXJlIGl0IG11c3QgYmUgYW4gYXJyYXkgd2l0aCB0d28gc3RyaW5nIHZhbHVlczogdGhlXG4gICAqIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGFncyB1c2VkIGluIHRoZSB0ZW1wbGF0ZSAoZS5nLiBbIFwiPCVcIiwgXCIlPlwiIF0pLiBPZlxuICAgKiBjb3Vyc2UsIHRoZSBkZWZhdWx0IGlzIHRvIHVzZSBtdXN0YWNoZXMgKGkuZS4gbXVzdGFjaGUudGFncykuXG4gICAqXG4gICAqIEEgdG9rZW4gaXMgYW4gYXJyYXkgd2l0aCBhdCBsZWFzdCA0IGVsZW1lbnRzLiBUaGUgZmlyc3QgZWxlbWVudCBpcyB0aGVcbiAgICogbXVzdGFjaGUgc3ltYm9sIHRoYXQgd2FzIHVzZWQgaW5zaWRlIHRoZSB0YWcsIGUuZy4gXCIjXCIgb3IgXCImXCIuIElmIHRoZSB0YWdcbiAgICogZGlkIG5vdCBjb250YWluIGEgc3ltYm9sIChpLmUuIHt7bXlWYWx1ZX19KSB0aGlzIGVsZW1lbnQgaXMgXCJuYW1lXCIuIEZvclxuICAgKiBhbGwgdGV4dCB0aGF0IGFwcGVhcnMgb3V0c2lkZSBhIHN5bWJvbCB0aGlzIGVsZW1lbnQgaXMgXCJ0ZXh0XCIuXG4gICAqXG4gICAqIFRoZSBzZWNvbmQgZWxlbWVudCBvZiBhIHRva2VuIGlzIGl0cyBcInZhbHVlXCIuIEZvciBtdXN0YWNoZSB0YWdzIHRoaXMgaXNcbiAgICogd2hhdGV2ZXIgZWxzZSB3YXMgaW5zaWRlIHRoZSB0YWcgYmVzaWRlcyB0aGUgb3BlbmluZyBzeW1ib2wuIEZvciB0ZXh0IHRva2Vuc1xuICAgKiB0aGlzIGlzIHRoZSB0ZXh0IGl0c2VsZi5cbiAgICpcbiAgICogVGhlIHRoaXJkIGFuZCBmb3VydGggZWxlbWVudHMgb2YgdGhlIHRva2VuIGFyZSB0aGUgc3RhcnQgYW5kIGVuZCBpbmRpY2VzLFxuICAgKiByZXNwZWN0aXZlbHksIG9mIHRoZSB0b2tlbiBpbiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUuXG4gICAqXG4gICAqIFRva2VucyB0aGF0IGFyZSB0aGUgcm9vdCBub2RlIG9mIGEgc3VidHJlZSBjb250YWluIHR3byBtb3JlIGVsZW1lbnRzOiAxKSBhblxuICAgKiBhcnJheSBvZiB0b2tlbnMgaW4gdGhlIHN1YnRyZWUgYW5kIDIpIHRoZSBpbmRleCBpbiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgYXRcbiAgICogd2hpY2ggdGhlIGNsb3NpbmcgdGFnIGZvciB0aGF0IHNlY3Rpb24gYmVnaW5zLlxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2VUZW1wbGF0ZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICBpZiAoIXRlbXBsYXRlKVxuICAgICAgcmV0dXJuIFtdO1xuXG4gICAgdmFyIHNlY3Rpb25zID0gW107ICAgICAvLyBTdGFjayB0byBob2xkIHNlY3Rpb24gdG9rZW5zXG4gICAgdmFyIHRva2VucyA9IFtdOyAgICAgICAvLyBCdWZmZXIgdG8gaG9sZCB0aGUgdG9rZW5zXG4gICAgdmFyIHNwYWNlcyA9IFtdOyAgICAgICAvLyBJbmRpY2VzIG9mIHdoaXRlc3BhY2UgdG9rZW5zIG9uIHRoZSBjdXJyZW50IGxpbmVcbiAgICB2YXIgaGFzVGFnID0gZmFsc2U7ICAgIC8vIElzIHRoZXJlIGEge3t0YWd9fSBvbiB0aGUgY3VycmVudCBsaW5lP1xuICAgIHZhciBub25TcGFjZSA9IGZhbHNlOyAgLy8gSXMgdGhlcmUgYSBub24tc3BhY2UgY2hhciBvbiB0aGUgY3VycmVudCBsaW5lP1xuXG4gICAgLy8gU3RyaXBzIGFsbCB3aGl0ZXNwYWNlIHRva2VucyBhcnJheSBmb3IgdGhlIGN1cnJlbnQgbGluZVxuICAgIC8vIGlmIHRoZXJlIHdhcyBhIHt7I3RhZ319IG9uIGl0IGFuZCBvdGhlcndpc2Ugb25seSBzcGFjZS5cbiAgICBmdW5jdGlvbiBzdHJpcFNwYWNlICgpIHtcbiAgICAgIGlmIChoYXNUYWcgJiYgIW5vblNwYWNlKSB7XG4gICAgICAgIHdoaWxlIChzcGFjZXMubGVuZ3RoKVxuICAgICAgICAgIGRlbGV0ZSB0b2tlbnNbc3BhY2VzLnBvcCgpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwYWNlcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBoYXNUYWcgPSBmYWxzZTtcbiAgICAgIG5vblNwYWNlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIG9wZW5pbmdUYWdSZSwgY2xvc2luZ1RhZ1JlLCBjbG9zaW5nQ3VybHlSZTtcbiAgICBmdW5jdGlvbiBjb21waWxlVGFncyAodGFnc1RvQ29tcGlsZSkge1xuICAgICAgaWYgKHR5cGVvZiB0YWdzVG9Db21waWxlID09PSAnc3RyaW5nJylcbiAgICAgICAgdGFnc1RvQ29tcGlsZSA9IHRhZ3NUb0NvbXBpbGUuc3BsaXQoc3BhY2VSZSwgMik7XG5cbiAgICAgIGlmICghaXNBcnJheSh0YWdzVG9Db21waWxlKSB8fCB0YWdzVG9Db21waWxlLmxlbmd0aCAhPT0gMilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRhZ3M6ICcgKyB0YWdzVG9Db21waWxlKTtcblxuICAgICAgb3BlbmluZ1RhZ1JlID0gbmV3IFJlZ0V4cChlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVswXSkgKyAnXFxcXHMqJyk7XG4gICAgICBjbG9zaW5nVGFnUmUgPSBuZXcgUmVnRXhwKCdcXFxccyonICsgZXNjYXBlUmVnRXhwKHRhZ3NUb0NvbXBpbGVbMV0pKTtcbiAgICAgIGNsb3NpbmdDdXJseVJlID0gbmV3IFJlZ0V4cCgnXFxcXHMqJyArIGVzY2FwZVJlZ0V4cCgnfScgKyB0YWdzVG9Db21waWxlWzFdKSk7XG4gICAgfVxuXG4gICAgY29tcGlsZVRhZ3ModGFncyB8fCBtdXN0YWNoZS50YWdzKTtcblxuICAgIHZhciBzY2FubmVyID0gbmV3IFNjYW5uZXIodGVtcGxhdGUpO1xuXG4gICAgdmFyIHN0YXJ0LCB0eXBlLCB2YWx1ZSwgY2hyLCB0b2tlbiwgb3BlblNlY3Rpb247XG4gICAgd2hpbGUgKCFzY2FubmVyLmVvcygpKSB7XG4gICAgICBzdGFydCA9IHNjYW5uZXIucG9zO1xuXG4gICAgICAvLyBNYXRjaCBhbnkgdGV4dCBiZXR3ZWVuIHRhZ3MuXG4gICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKG9wZW5pbmdUYWdSZSk7XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGkgPCB2YWx1ZUxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgY2hyID0gdmFsdWUuY2hhckF0KGkpO1xuXG4gICAgICAgICAgaWYgKGlzV2hpdGVzcGFjZShjaHIpKSB7XG4gICAgICAgICAgICBzcGFjZXMucHVzaCh0b2tlbnMubGVuZ3RoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9uU3BhY2UgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRva2Vucy5wdXNoKFsgJ3RleHQnLCBjaHIsIHN0YXJ0LCBzdGFydCArIDEgXSk7XG4gICAgICAgICAgc3RhcnQgKz0gMTtcblxuICAgICAgICAgIC8vIENoZWNrIGZvciB3aGl0ZXNwYWNlIG9uIHRoZSBjdXJyZW50IGxpbmUuXG4gICAgICAgICAgaWYgKGNociA9PT0gJ1xcbicpXG4gICAgICAgICAgICBzdHJpcFNwYWNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTWF0Y2ggdGhlIG9wZW5pbmcgdGFnLlxuICAgICAgaWYgKCFzY2FubmVyLnNjYW4ob3BlbmluZ1RhZ1JlKSlcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGhhc1RhZyA9IHRydWU7XG5cbiAgICAgIC8vIEdldCB0aGUgdGFnIHR5cGUuXG4gICAgICB0eXBlID0gc2Nhbm5lci5zY2FuKHRhZ1JlKSB8fCAnbmFtZSc7XG4gICAgICBzY2FubmVyLnNjYW4od2hpdGVSZSk7XG5cbiAgICAgIC8vIEdldCB0aGUgdGFnIHZhbHVlLlxuICAgICAgaWYgKHR5cGUgPT09ICc9Jykge1xuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGVxdWFsc1JlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuKGVxdWFsc1JlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3snKSB7XG4gICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ0N1cmx5UmUpO1xuICAgICAgICBzY2FubmVyLnNjYW4oY3VybHlSZSk7XG4gICAgICAgIHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgICAgIHR5cGUgPSAnJic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHNjYW5uZXIuc2NhblVudGlsKGNsb3NpbmdUYWdSZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1hdGNoIHRoZSBjbG9zaW5nIHRhZy5cbiAgICAgIGlmICghc2Nhbm5lci5zY2FuKGNsb3NpbmdUYWdSZSkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgdGFnIGF0ICcgKyBzY2FubmVyLnBvcyk7XG5cbiAgICAgIHRva2VuID0gWyB0eXBlLCB2YWx1ZSwgc3RhcnQsIHNjYW5uZXIucG9zIF07XG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG5cbiAgICAgIGlmICh0eXBlID09PSAnIycgfHwgdHlwZSA9PT0gJ14nKSB7XG4gICAgICAgIHNlY3Rpb25zLnB1c2godG9rZW4pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnLycpIHtcbiAgICAgICAgLy8gQ2hlY2sgc2VjdGlvbiBuZXN0aW5nLlxuICAgICAgICBvcGVuU2VjdGlvbiA9IHNlY3Rpb25zLnBvcCgpO1xuXG4gICAgICAgIGlmICghb3BlblNlY3Rpb24pXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbm9wZW5lZCBzZWN0aW9uIFwiJyArIHZhbHVlICsgJ1wiIGF0ICcgKyBzdGFydCk7XG5cbiAgICAgICAgaWYgKG9wZW5TZWN0aW9uWzFdICE9PSB2YWx1ZSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuY2xvc2VkIHNlY3Rpb24gXCInICsgb3BlblNlY3Rpb25bMV0gKyAnXCIgYXQgJyArIHN0YXJ0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25hbWUnIHx8IHR5cGUgPT09ICd7JyB8fCB0eXBlID09PSAnJicpIHtcbiAgICAgICAgbm9uU3BhY2UgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnPScpIHtcbiAgICAgICAgLy8gU2V0IHRoZSB0YWdzIGZvciB0aGUgbmV4dCB0aW1lIGFyb3VuZC5cbiAgICAgICAgY29tcGlsZVRhZ3ModmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gb3BlbiBzZWN0aW9ucyB3aGVuIHdlJ3JlIGRvbmUuXG4gICAgb3BlblNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcblxuICAgIGlmIChvcGVuU2VjdGlvbilcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicgKyBvcGVuU2VjdGlvblsxXSArICdcIiBhdCAnICsgc2Nhbm5lci5wb3MpO1xuXG4gICAgcmV0dXJuIG5lc3RUb2tlbnMoc3F1YXNoVG9rZW5zKHRva2VucykpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbWJpbmVzIHRoZSB2YWx1ZXMgb2YgY29uc2VjdXRpdmUgdGV4dCB0b2tlbnMgaW4gdGhlIGdpdmVuIGB0b2tlbnNgIGFycmF5XG4gICAqIHRvIGEgc2luZ2xlIHRva2VuLlxuICAgKi9cbiAgZnVuY3Rpb24gc3F1YXNoVG9rZW5zICh0b2tlbnMpIHtcbiAgICB2YXIgc3F1YXNoZWRUb2tlbnMgPSBbXTtcblxuICAgIHZhciB0b2tlbiwgbGFzdFRva2VuO1xuICAgIGZvciAodmFyIGkgPSAwLCBudW1Ub2tlbnMgPSB0b2tlbnMubGVuZ3RoOyBpIDwgbnVtVG9rZW5zOyArK2kpIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHRva2VuWzBdID09PSAndGV4dCcgJiYgbGFzdFRva2VuICYmIGxhc3RUb2tlblswXSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgbGFzdFRva2VuWzFdICs9IHRva2VuWzFdO1xuICAgICAgICAgIGxhc3RUb2tlblszXSA9IHRva2VuWzNdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNxdWFzaGVkVG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgICAgIGxhc3RUb2tlbiA9IHRva2VuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNxdWFzaGVkVG9rZW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1zIHRoZSBnaXZlbiBhcnJheSBvZiBgdG9rZW5zYCBpbnRvIGEgbmVzdGVkIHRyZWUgc3RydWN0dXJlIHdoZXJlXG4gICAqIHRva2VucyB0aGF0IHJlcHJlc2VudCBhIHNlY3Rpb24gaGF2ZSB0d28gYWRkaXRpb25hbCBpdGVtczogMSkgYW4gYXJyYXkgb2ZcbiAgICogYWxsIHRva2VucyB0aGF0IGFwcGVhciBpbiB0aGF0IHNlY3Rpb24gYW5kIDIpIHRoZSBpbmRleCBpbiB0aGUgb3JpZ2luYWxcbiAgICogdGVtcGxhdGUgdGhhdCByZXByZXNlbnRzIHRoZSBlbmQgb2YgdGhhdCBzZWN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gbmVzdFRva2VucyAodG9rZW5zKSB7XG4gICAgdmFyIG5lc3RlZFRva2VucyA9IFtdO1xuICAgIHZhciBjb2xsZWN0b3IgPSBuZXN0ZWRUb2tlbnM7XG4gICAgdmFyIHNlY3Rpb25zID0gW107XG5cbiAgICB2YXIgdG9rZW4sIHNlY3Rpb247XG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIHN3aXRjaCAodG9rZW5bMF0pIHtcbiAgICAgICAgY2FzZSAnIyc6XG4gICAgICAgIGNhc2UgJ14nOlxuICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHRva2VuKTtcbiAgICAgICAgICBzZWN0aW9ucy5wdXNoKHRva2VuKTtcbiAgICAgICAgICBjb2xsZWN0b3IgPSB0b2tlbls0XSA9IFtdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICBzZWN0aW9uID0gc2VjdGlvbnMucG9wKCk7XG4gICAgICAgICAgc2VjdGlvbls1XSA9IHRva2VuWzJdO1xuICAgICAgICAgIGNvbGxlY3RvciA9IHNlY3Rpb25zLmxlbmd0aCA+IDAgPyBzZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGggLSAxXVs0XSA6IG5lc3RlZFRva2VucztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb2xsZWN0b3IucHVzaCh0b2tlbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5lc3RlZFRva2VucztcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNpbXBsZSBzdHJpbmcgc2Nhbm5lciB0aGF0IGlzIHVzZWQgYnkgdGhlIHRlbXBsYXRlIHBhcnNlciB0byBmaW5kXG4gICAqIHRva2VucyBpbiB0ZW1wbGF0ZSBzdHJpbmdzLlxuICAgKi9cbiAgZnVuY3Rpb24gU2Nhbm5lciAoc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50YWlsID0gc3RyaW5nO1xuICAgIHRoaXMucG9zID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdGFpbCBpcyBlbXB0eSAoZW5kIG9mIHN0cmluZykuXG4gICAqL1xuICBTY2FubmVyLnByb3RvdHlwZS5lb3MgPSBmdW5jdGlvbiBlb3MgKCkge1xuICAgIHJldHVybiB0aGlzLnRhaWwgPT09ICcnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUcmllcyB0byBtYXRjaCB0aGUgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgKiBSZXR1cm5zIHRoZSBtYXRjaGVkIHRleHQgaWYgaXQgY2FuIG1hdGNoLCB0aGUgZW1wdHkgc3RyaW5nIG90aGVyd2lzZS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLnNjYW4gPSBmdW5jdGlvbiBzY2FuIChyZSkge1xuICAgIHZhciBtYXRjaCA9IHRoaXMudGFpbC5tYXRjaChyZSk7XG5cbiAgICBpZiAoIW1hdGNoIHx8IG1hdGNoLmluZGV4ICE9PSAwKVxuICAgICAgcmV0dXJuICcnO1xuXG4gICAgdmFyIHN0cmluZyA9IG1hdGNoWzBdO1xuXG4gICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnN1YnN0cmluZyhzdHJpbmcubGVuZ3RoKTtcbiAgICB0aGlzLnBvcyArPSBzdHJpbmcubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcblxuICAvKipcbiAgICogU2tpcHMgYWxsIHRleHQgdW50aWwgdGhlIGdpdmVuIHJlZ3VsYXIgZXhwcmVzc2lvbiBjYW4gYmUgbWF0Y2hlZC4gUmV0dXJuc1xuICAgKiB0aGUgc2tpcHBlZCBzdHJpbmcsIHdoaWNoIGlzIHRoZSBlbnRpcmUgdGFpbCBpZiBubyBtYXRjaCBjYW4gYmUgbWFkZS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLnNjYW5VbnRpbCA9IGZ1bmN0aW9uIHNjYW5VbnRpbCAocmUpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLnRhaWwuc2VhcmNoKHJlKSwgbWF0Y2g7XG5cbiAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICBjYXNlIC0xOlxuICAgICAgICBtYXRjaCA9IHRoaXMudGFpbDtcbiAgICAgICAgdGhpcy50YWlsID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAwOlxuICAgICAgICBtYXRjaCA9ICcnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG1hdGNoID0gdGhpcy50YWlsLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5zdWJzdHJpbmcoaW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMucG9zICs9IG1hdGNoLmxlbmd0aDtcblxuICAgIHJldHVybiBtYXRjaDtcbiAgfTtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhIHJlbmRlcmluZyBjb250ZXh0IGJ5IHdyYXBwaW5nIGEgdmlldyBvYmplY3QgYW5kXG4gICAqIG1haW50YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBwYXJlbnQgY29udGV4dC5cbiAgICovXG4gIGZ1bmN0aW9uIENvbnRleHQgKHZpZXcsIHBhcmVudENvbnRleHQpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIHRoaXMuY2FjaGUgPSB7ICcuJzogdGhpcy52aWV3IH07XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnRDb250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgY29udGV4dCB1c2luZyB0aGUgZ2l2ZW4gdmlldyB3aXRoIHRoaXMgY29udGV4dFxuICAgKiBhcyB0aGUgcGFyZW50LlxuICAgKi9cbiAgQ29udGV4dC5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIHB1c2ggKHZpZXcpIHtcbiAgICByZXR1cm4gbmV3IENvbnRleHQodmlldywgdGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIHRoZSBnaXZlbiBuYW1lIGluIHRoaXMgY29udGV4dCwgdHJhdmVyc2luZ1xuICAgKiB1cCB0aGUgY29udGV4dCBoaWVyYXJjaHkgaWYgdGhlIHZhbHVlIGlzIGFic2VudCBpbiB0aGlzIGNvbnRleHQncyB2aWV3LlxuICAgKi9cbiAgQ29udGV4dC5wcm90b3R5cGUubG9va3VwID0gZnVuY3Rpb24gbG9va3VwIChuYW1lKSB7XG4gICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZTtcblxuICAgIHZhciB2YWx1ZTtcbiAgICBpZiAoY2FjaGUuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgIHZhbHVlID0gY2FjaGVbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgbmFtZXMsIGluZGV4LCBsb29rdXBIaXQgPSBmYWxzZTtcblxuICAgICAgd2hpbGUgKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKG5hbWUuaW5kZXhPZignLicpID4gMCkge1xuICAgICAgICAgIHZhbHVlID0gY29udGV4dC52aWV3O1xuICAgICAgICAgIG5hbWVzID0gbmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgIGluZGV4ID0gMDtcblxuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIFVzaW5nIHRoZSBkb3Qgbm90aW9uIHBhdGggaW4gYG5hbWVgLCB3ZSBkZXNjZW5kIHRocm91Z2ggdGhlXG4gICAgICAgICAgICogbmVzdGVkIG9iamVjdHMuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUbyBiZSBjZXJ0YWluIHRoYXQgdGhlIGxvb2t1cCBoYXMgYmVlbiBzdWNjZXNzZnVsLCB3ZSBoYXZlIHRvXG4gICAgICAgICAgICogY2hlY2sgaWYgdGhlIGxhc3Qgb2JqZWN0IGluIHRoZSBwYXRoIGFjdHVhbGx5IGhhcyB0aGUgcHJvcGVydHlcbiAgICAgICAgICAgKiB3ZSBhcmUgbG9va2luZyBmb3IuIFdlIHN0b3JlIHRoZSByZXN1bHQgaW4gYGxvb2t1cEhpdGAuXG4gICAgICAgICAgICpcbiAgICAgICAgICAgKiBUaGlzIGlzIHNwZWNpYWxseSBuZWNlc3NhcnkgZm9yIHdoZW4gdGhlIHZhbHVlIGhhcyBiZWVuIHNldCB0b1xuICAgICAgICAgICAqIGB1bmRlZmluZWRgIGFuZCB3ZSB3YW50IHRvIGF2b2lkIGxvb2tpbmcgdXAgcGFyZW50IGNvbnRleHRzLlxuICAgICAgICAgICAqKi9cbiAgICAgICAgICB3aGlsZSAodmFsdWUgIT0gbnVsbCAmJiBpbmRleCA8IG5hbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSBuYW1lcy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICBsb29rdXBIaXQgPSBoYXNQcm9wZXJ0eSh2YWx1ZSwgbmFtZXNbaW5kZXhdKTtcblxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVtuYW1lc1tpbmRleCsrXV07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gY29udGV4dC52aWV3W25hbWVdO1xuICAgICAgICAgIGxvb2t1cEhpdCA9IGhhc1Byb3BlcnR5KGNvbnRleHQudmlldywgbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9va3VwSGl0KVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0LnBhcmVudDtcbiAgICAgIH1cblxuICAgICAgY2FjaGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpXG4gICAgICB2YWx1ZSA9IHZhbHVlLmNhbGwodGhpcy52aWV3KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQSBXcml0ZXIga25vd3MgaG93IHRvIHRha2UgYSBzdHJlYW0gb2YgdG9rZW5zIGFuZCByZW5kZXIgdGhlbSB0byBhXG4gICAqIHN0cmluZywgZ2l2ZW4gYSBjb250ZXh0LiBJdCBhbHNvIG1haW50YWlucyBhIGNhY2hlIG9mIHRlbXBsYXRlcyB0b1xuICAgKiBhdm9pZCB0aGUgbmVlZCB0byBwYXJzZSB0aGUgc2FtZSB0ZW1wbGF0ZSB0d2ljZS5cbiAgICovXG4gIGZ1bmN0aW9uIFdyaXRlciAoKSB7XG4gICAgdGhpcy5jYWNoZSA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgY2FjaGVkIHRlbXBsYXRlcyBpbiB0aGlzIHdyaXRlci5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uIGNsZWFyQ2FjaGUgKCkge1xuICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgfTtcblxuICAvKipcbiAgICogUGFyc2VzIGFuZCBjYWNoZXMgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgYW5kIHJldHVybnMgdGhlIGFycmF5IG9mIHRva2Vuc1xuICAgKiB0aGF0IGlzIGdlbmVyYXRlZCBmcm9tIHRoZSBwYXJzZS5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlO1xuICAgIHZhciB0b2tlbnMgPSBjYWNoZVt0ZW1wbGF0ZV07XG5cbiAgICBpZiAodG9rZW5zID09IG51bGwpXG4gICAgICB0b2tlbnMgPSBjYWNoZVt0ZW1wbGF0ZV0gPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlLCB0YWdzKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZ2gtbGV2ZWwgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byByZW5kZXIgdGhlIGdpdmVuIGB0ZW1wbGF0ZWAgd2l0aFxuICAgKiB0aGUgZ2l2ZW4gYHZpZXdgLlxuICAgKlxuICAgKiBUaGUgb3B0aW9uYWwgYHBhcnRpYWxzYCBhcmd1bWVudCBtYXkgYmUgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlXG4gICAqIG5hbWVzIGFuZCB0ZW1wbGF0ZXMgb2YgcGFydGlhbHMgdGhhdCBhcmUgdXNlZCBpbiB0aGUgdGVtcGxhdGUuIEl0IG1heVxuICAgKiBhbHNvIGJlIGEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIGxvYWQgcGFydGlhbCB0ZW1wbGF0ZXMgb24gdGhlIGZseVxuICAgKiB0aGF0IHRha2VzIGEgc2luZ2xlIGFyZ3VtZW50OiB0aGUgbmFtZSBvZiB0aGUgcGFydGlhbC5cbiAgICovXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICh0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpIHtcbiAgICB2YXIgdG9rZW5zID0gdGhpcy5wYXJzZSh0ZW1wbGF0ZSk7XG4gICAgdmFyIGNvbnRleHQgPSAodmlldyBpbnN0YW5jZW9mIENvbnRleHQpID8gdmlldyA6IG5ldyBDb250ZXh0KHZpZXcpO1xuICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbnMsIGNvbnRleHQsIHBhcnRpYWxzLCB0ZW1wbGF0ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIExvdy1sZXZlbCBtZXRob2QgdGhhdCByZW5kZXJzIHRoZSBnaXZlbiBhcnJheSBvZiBgdG9rZW5zYCB1c2luZ1xuICAgKiB0aGUgZ2l2ZW4gYGNvbnRleHRgIGFuZCBgcGFydGlhbHNgLlxuICAgKlxuICAgKiBOb3RlOiBUaGUgYG9yaWdpbmFsVGVtcGxhdGVgIGlzIG9ubHkgZXZlciB1c2VkIHRvIGV4dHJhY3QgdGhlIHBvcnRpb25cbiAgICogb2YgdGhlIG9yaWdpbmFsIHRlbXBsYXRlIHRoYXQgd2FzIGNvbnRhaW5lZCBpbiBhIGhpZ2hlci1vcmRlciBzZWN0aW9uLlxuICAgKiBJZiB0aGUgdGVtcGxhdGUgZG9lc24ndCB1c2UgaGlnaGVyLW9yZGVyIHNlY3Rpb25zLCB0aGlzIGFyZ3VtZW50IG1heVxuICAgKiBiZSBvbWl0dGVkLlxuICAgKi9cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJUb2tlbnMgPSBmdW5jdGlvbiByZW5kZXJUb2tlbnMgKHRva2VucywgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgYnVmZmVyID0gJyc7XG5cbiAgICB2YXIgdG9rZW4sIHN5bWJvbCwgdmFsdWU7XG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgIHN5bWJvbCA9IHRva2VuWzBdO1xuXG4gICAgICBpZiAoc3ltYm9sID09PSAnIycpIHZhbHVlID0gdGhpcy5yZW5kZXJTZWN0aW9uKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICdeJykgdmFsdWUgPSB0aGlzLnJlbmRlckludmVydGVkKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICc+JykgdmFsdWUgPSB0aGlzLnJlbmRlclBhcnRpYWwodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKTtcbiAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJyYnKSB2YWx1ZSA9IHRoaXMudW5lc2NhcGVkVmFsdWUodG9rZW4sIGNvbnRleHQpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAnbmFtZScpIHZhbHVlID0gdGhpcy5lc2NhcGVkVmFsdWUodG9rZW4sIGNvbnRleHQpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAndGV4dCcpIHZhbHVlID0gdGhpcy5yYXdWYWx1ZSh0b2tlbik7XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBidWZmZXIgKz0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlclNlY3Rpb24gPSBmdW5jdGlvbiByZW5kZXJTZWN0aW9uICh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGJ1ZmZlciA9ICcnO1xuICAgIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZW5kZXIgYW4gYXJiaXRyYXJ5IHRlbXBsYXRlXG4gICAgLy8gaW4gdGhlIGN1cnJlbnQgY29udGV4dCBieSBoaWdoZXItb3JkZXIgc2VjdGlvbnMuXG4gICAgZnVuY3Rpb24gc3ViUmVuZGVyICh0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIHNlbGYucmVuZGVyKHRlbXBsYXRlLCBjb250ZXh0LCBwYXJ0aWFscyk7XG4gICAgfVxuXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuXG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICBmb3IgKHZhciBqID0gMCwgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGogPCB2YWx1ZUxlbmd0aDsgKytqKSB7XG4gICAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlW2pdKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGJ1ZmZlciArPSB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dC5wdXNoKHZhbHVlKSwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUZW1wbGF0ZSAhPT0gJ3N0cmluZycpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSBoaWdoZXItb3JkZXIgc2VjdGlvbnMgd2l0aG91dCB0aGUgb3JpZ2luYWwgdGVtcGxhdGUnKTtcblxuICAgICAgLy8gRXh0cmFjdCB0aGUgcG9ydGlvbiBvZiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgdGhhdCB0aGUgc2VjdGlvbiBjb250YWlucy5cbiAgICAgIHZhbHVlID0gdmFsdWUuY2FsbChjb250ZXh0LnZpZXcsIG9yaWdpbmFsVGVtcGxhdGUuc2xpY2UodG9rZW5bM10sIHRva2VuWzVdKSwgc3ViUmVuZGVyKTtcblxuICAgICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICAgIGJ1ZmZlciArPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmZmVyICs9IHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXI7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJJbnZlcnRlZCA9IGZ1bmN0aW9uIHJlbmRlckludmVydGVkICh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpIHtcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG5cbiAgICAvLyBVc2UgSmF2YVNjcmlwdCdzIGRlZmluaXRpb24gb2YgZmFsc3kuIEluY2x1ZGUgZW1wdHkgYXJyYXlzLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vamFubC9tdXN0YWNoZS5qcy9pc3N1ZXMvMTg2XG4gICAgaWYgKCF2YWx1ZSB8fCAoaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKSlcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclRva2Vucyh0b2tlbls0XSwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVyUGFydGlhbCA9IGZ1bmN0aW9uIHJlbmRlclBhcnRpYWwgKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscykge1xuICAgIGlmICghcGFydGlhbHMpIHJldHVybjtcblxuICAgIHZhciB2YWx1ZSA9IGlzRnVuY3Rpb24ocGFydGlhbHMpID8gcGFydGlhbHModG9rZW5bMV0pIDogcGFydGlhbHNbdG9rZW5bMV1dO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRoaXMucGFyc2UodmFsdWUpLCBjb250ZXh0LCBwYXJ0aWFscywgdmFsdWUpO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUudW5lc2NhcGVkVmFsdWUgPSBmdW5jdGlvbiB1bmVzY2FwZWRWYWx1ZSAodG9rZW4sIGNvbnRleHQpIHtcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5lc2NhcGVkVmFsdWUgPSBmdW5jdGlvbiBlc2NhcGVkVmFsdWUgKHRva2VuLCBjb250ZXh0KSB7XG4gICAgdmFyIHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKVxuICAgICAgcmV0dXJuIG11c3RhY2hlLmVzY2FwZSh2YWx1ZSk7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yYXdWYWx1ZSA9IGZ1bmN0aW9uIHJhd1ZhbHVlICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlblsxXTtcbiAgfTtcblxuICBtdXN0YWNoZS5uYW1lID0gJ211c3RhY2hlLmpzJztcbiAgbXVzdGFjaGUudmVyc2lvbiA9ICcyLjMuMCc7XG4gIG11c3RhY2hlLnRhZ3MgPSBbICd7eycsICd9fScgXTtcblxuICAvLyBBbGwgaGlnaC1sZXZlbCBtdXN0YWNoZS4qIGZ1bmN0aW9ucyB1c2UgdGhpcyB3cml0ZXIuXG4gIHZhciBkZWZhdWx0V3JpdGVyID0gbmV3IFdyaXRlcigpO1xuXG4gIC8qKlxuICAgKiBDbGVhcnMgYWxsIGNhY2hlZCB0ZW1wbGF0ZXMgaW4gdGhlIGRlZmF1bHQgd3JpdGVyLlxuICAgKi9cbiAgbXVzdGFjaGUuY2xlYXJDYWNoZSA9IGZ1bmN0aW9uIGNsZWFyQ2FjaGUgKCkge1xuICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLmNsZWFyQ2FjaGUoKTtcbiAgfTtcblxuICAvKipcbiAgICogUGFyc2VzIGFuZCBjYWNoZXMgdGhlIGdpdmVuIHRlbXBsYXRlIGluIHRoZSBkZWZhdWx0IHdyaXRlciBhbmQgcmV0dXJucyB0aGVcbiAgICogYXJyYXkgb2YgdG9rZW5zIGl0IGNvbnRhaW5zLiBEb2luZyB0aGlzIGFoZWFkIG9mIHRpbWUgYXZvaWRzIHRoZSBuZWVkIHRvXG4gICAqIHBhcnNlIHRlbXBsYXRlcyBvbiB0aGUgZmx5IGFzIHRoZXkgYXJlIHJlbmRlcmVkLlxuICAgKi9cbiAgbXVzdGFjaGUucGFyc2UgPSBmdW5jdGlvbiBwYXJzZSAodGVtcGxhdGUsIHRhZ3MpIHtcbiAgICByZXR1cm4gZGVmYXVsdFdyaXRlci5wYXJzZSh0ZW1wbGF0ZSwgdGFncyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGB0ZW1wbGF0ZWAgd2l0aCB0aGUgZ2l2ZW4gYHZpZXdgIGFuZCBgcGFydGlhbHNgIHVzaW5nIHRoZVxuICAgKiBkZWZhdWx0IHdyaXRlci5cbiAgICovXG4gIG11c3RhY2hlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlciAodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKSB7XG4gICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgdGVtcGxhdGUhIFRlbXBsYXRlIHNob3VsZCBiZSBhIFwic3RyaW5nXCIgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICdidXQgXCInICsgdHlwZVN0cih0ZW1wbGF0ZSkgKyAnXCIgd2FzIGdpdmVuIGFzIHRoZSBmaXJzdCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyZ3VtZW50IGZvciBtdXN0YWNoZSNyZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKScpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLnJlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpO1xuICB9O1xuXG4gIC8vIFRoaXMgaXMgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCAwLjQueC4sXG4gIC8qZXNsaW50LWRpc2FibGUgKi8gLy8gZXNsaW50IHdhbnRzIGNhbWVsIGNhc2VkIGZ1bmN0aW9uIG5hbWVcbiAgbXVzdGFjaGUudG9faHRtbCA9IGZ1bmN0aW9uIHRvX2h0bWwgKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscywgc2VuZCkge1xuICAgIC8qZXNsaW50LWVuYWJsZSovXG5cbiAgICB2YXIgcmVzdWx0ID0gbXVzdGFjaGUucmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscyk7XG5cbiAgICBpZiAoaXNGdW5jdGlvbihzZW5kKSkge1xuICAgICAgc2VuZChyZXN1bHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfTtcblxuICAvLyBFeHBvcnQgdGhlIGVzY2FwaW5nIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIHVzZXIgbWF5IG92ZXJyaWRlIGl0LlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanMvaXNzdWVzLzI0NFxuICBtdXN0YWNoZS5lc2NhcGUgPSBlc2NhcGVIdG1sO1xuXG4gIC8vIEV4cG9ydCB0aGVzZSBtYWlubHkgZm9yIHRlc3RpbmcsIGJ1dCBhbHNvIGZvciBhZHZhbmNlZCB1c2FnZS5cbiAgbXVzdGFjaGUuU2Nhbm5lciA9IFNjYW5uZXI7XG4gIG11c3RhY2hlLkNvbnRleHQgPSBDb250ZXh0O1xuICBtdXN0YWNoZS5Xcml0ZXIgPSBXcml0ZXI7XG5cbiAgcmV0dXJuIG11c3RhY2hlO1xufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbXVzdGFjaGUvbXVzdGFjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIENhcm91c2VsIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1jb250ZW50Jyk7XHJcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5jYXJvdXNlbENvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLWl0ZW0nKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLW5hdi1sZWZ0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnByZXZTbGlkZSgpO1xyXG4gICAgfSwgZmFsc2UpO1xyXG4gICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1uYXYtcmlnaHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMubmV4dFNsaWRlKCk7XHJcbiAgICB9LCBmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5zZXRPcmRlcigpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3JkZXIoZGlyZWN0aW9uKXtcclxuICAgIC8vIGluaXRpYWxpemUgZGlyZWN0aW9uIHRvIGNoYW5nZSBvcmRlclxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXZpb3VzJykge1xyXG4gICAgICBkaXJlY3Rpb24gPSAxO1xyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jykge1xyXG4gICAgICBkaXJlY3Rpb24gPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmJJdGVtcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xyXG4gICAgaWYgKG5iSXRlbXMpIHtcclxuICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBuZXdWYWx1ZTtcclxuICAgICAgICBpZiAoaXRlbS5zdHlsZS5vcmRlcikge1xyXG4gICAgICAgICAgbmV3VmFsdWUgPSAocGFyc2VJbnQoaXRlbS5zdHlsZS5vcmRlciwgMTApICsgZGlyZWN0aW9uKSAlIG5iSXRlbXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld1ZhbHVlID0gKChpbmRleCArIDIpICUgbmJJdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbmV3VmFsdWUgfHwgbmV3VmFsdWUgIT09IDIpIHtcclxuICAgICAgICAgIGl0ZW0uc3R5bGVbJ3otaW5kZXgnXSA9ICcwJztcclxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGl0ZW0uc3R5bGVbJ3otaW5kZXgnXSA9ICcxJztcclxuICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZW0uc3R5bGUub3JkZXIgPSBuZXdWYWx1ZSA/IG5ld1ZhbHVlIDogbmJJdGVtcztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2U2xpZGUoZXZ0KSB7XHJcbiAgICAvLyBhZGQgcmV2ZXJzZVxyXG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWwtcmV2ZXJzZScpO1xyXG4gICAgLy8gRGlzYWJsZSB0cmFuc2l0aW9uIHRvIGluc3RhbnQgY2hhbmdlIG9yZGVyXHJcbiAgICB0aGlzLmNhcm91c2VsQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdjYXJvdXNlbC1hbmltYXRlJyk7XHJcbiAgICAvLyBDaGFuZ2Ugb3JkZXIgb2YgZWxlbWVudFxyXG4gICAgLy8gQ3VycmVudCBvcmRlciAyIHZpc2libGUgYmVjb21lIG9yZGVyIDFcclxuICAgIHRoaXMuc2V0T3JkZXIoJ3ByZXZpb3VzJyk7XHJcblxyXG4gICAgLy8gRW5hYmxlIHRyYW5zaXRpb24gdG8gYW5pbWF0ZSBvcmRlciAxIHRvIG9yZGVyIDJcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNhcm91c2VsQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdjYXJvdXNlbC1hbmltYXRlJyk7XHJcbiAgICB9LCA1MCk7XHJcbiAgfVxyXG5cclxuICBuZXh0U2xpZGUoZXZ0KSB7XHJcbiAgICAvLyByZW1vdmUgcmV2ZXJzZVxyXG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWwtcmV2ZXJzZScpO1xyXG5cclxuICAgIC8vIERpc2FibGUgdHJhbnNpdGlvbiB0byBpbnN0YW50IGNoYW5nZSBvcmRlclxyXG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2Fyb3VzZWwtYW5pbWF0ZScpO1xyXG4gICAgLy8gQ2hhbmdlIG9yZGVyIG9mIGVsZW1lbnRcclxuICAgIC8vIEN1cnJlbnQgb3JkZXIgMiB2aXNpYmxlIGJlY29tZSBvcmRlciAzXHJcbiAgICB0aGlzLnNldE9yZGVyKCduZXh0Jyk7XHJcbiAgICAvLyBFbmFibGUgdHJhbnNpdGlvbiB0byBhbmltYXRlIG9yZGVyIDMgdG8gb3JkZXIgMlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2Nhcm91c2VsLWFuaW1hdGUnKTtcclxuICAgIH0sIDUwKTtcclxuICB9O1xyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgbGV0IGNhcm91c2VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbCwgLmhlcm8tY2Fyb3VzZWwnKTtcclxuICBpZiAoY2Fyb3VzZWxzKSB7XHJcbiAgICBjYXJvdXNlbHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgbmV3IENhcm91c2VsKGVsZW1lbnQpO1xyXG4gICAgfSlcclxuICB9XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2J1bG1hLWNhcm91c2VsL2Nhcm91c2VsLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9idWxtYS1jYXJvdXNlbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9idWxtYS1jYXJvdXNlbC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vYnVsbWEtY2Fyb3VzZWwuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9idWxtYS1jYXJvdXNlbC9idWxtYS1jYXJvdXNlbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGtleWZyYW1lcyBzcGluQXJvdW5kezAle3RyYW5zZm9ybTpyb3RhdGUoMGRlZyl9dG97dHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpfX0uY2Fyb3VzZWx7d2lkdGg6MTAwJTtoZWlnaHQ6YXV0bzttaW4taGVpZ2h0OjRlbTtib3JkZXI6bm9uZTttYXJnaW46YXV0bztkaXNwbGF5OmZsZXh9LmNhcm91c2VsLC5oZXJve3Bvc2l0aW9uOnJlbGF0aXZlfS5oZXJvKy5oZXJvLWJvZHksLmhlcm8rLmhlcm8tZm9vdGVyLC5oZXJvKy5oZXJvLWhlYWR7ei1pbmRleDoxfS5oZXJvLWNhcm91c2Vse2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7Ym90dG9tOjA7cmlnaHQ6MDtoZWlnaHQ6YXV0bztib3JkZXI6bm9uZTttYXJnaW46YXV0bztwYWRkaW5nOjA7ei1pbmRleDowfS5jYXJvdXNlbC1uYXZpZ2F0aW9ue2ZsZXgtc2hyaW5rOjA7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjIycHg7ei1pbmRleDo5OX0uY2Fyb3VzZWwtY29udGFpbmVye2ZsZXg6MTtiYWNrZ3JvdW5kOiNmNWY1ZjU7ZGlzcGxheTpmbGV4O292ZXJmbG93OmhpZGRlbn0uY2Fyb3VzZWwtY29udGFpbmVyIC5jYXJvdXNlbC1uYXYtbGVmdCwuY2Fyb3VzZWwtY29udGFpbmVyIC5jYXJvdXNlbC1uYXYtcmlnaHR7cG9zaXRpb246YWJzb2x1dGU7dG9wOmNhbGMoNTAlIC0gMTFweCk7aGVpZ2h0OjIuMmVtO3dpZHRoOjJlbTtiYWNrZ3JvdW5kOmhzbGEoMCwwJSwxMDAlLC43KTtsZWZ0OjA7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOiM0YTRhNGE7ei1pbmRleDo5OX0uY2Fyb3VzZWwtY29udGFpbmVyIC5jYXJvdXNlbC1uYXYtbGVmdDpob3ZlciwuY2Fyb3VzZWwtY29udGFpbmVyIC5jYXJvdXNlbC1uYXYtcmlnaHQ6aG92ZXJ7Y3Vyc29yOnBvaW50ZXJ9LmNhcm91c2VsLWNvbnRhaW5lciAuY2Fyb3VzZWwtbmF2LXJpZ2h0e2xlZnQ6YXV0bztyaWdodDowfS5jYXJvdXNlbC1pdGVte2ZsZXgtc2hyaW5rOjA7ZmxleC1ncm93OjE7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JvcmRlcjpub25lO2JveC1zaXppbmc6Ym9yZGVyLWJveDttaW4td2lkdGg6MTAwJTtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7cG9zaXRpb246cmVsYXRpdmU7bWF4LWhlaWdodDoxMDAlO21heC13aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbn0uY2Fyb3VzZWwtaXRlbSAuaXMtYmFja2dyb3VuZHtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjA7bWFyZ2luOjA7bWluLXdpZHRoOjEwMCV9LmNhcm91c2VsLWl0ZW0gLnRpdGxle3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDtyaWdodDowO2JvdHRvbTowO3BhZGRpbmc6MS41ZW07bWFyZ2luOjA7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZDpoc2xhKDAsMCUsMTAwJSwuNik7Zm9udC1zaXplOi43NXJlbX0uY2Fyb3VzZWwtY29udGVudHtkaXNwbGF5OmZsZXg7ZmxleDoxO3Bvc2l0aW9uOnJlbGF0aXZlfS5jYXJvdXNlbC1jb250ZW50LmNhcm91c2VsLWFuaW1hdGUtc2xpZGV7bGVmdDotMTAwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlM2QoMTAwJSwwLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCl9LmNhcm91c2VsLWNvbnRlbnQuY2Fyb3VzZWwtYW5pbWF0ZS1mYWRlIC5jYXJvdXNlbC1pdGVtey13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IDFzIGVhc2UtaW4tb3V0Oy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IDFzIGVhc2UtaW4tb3V0Oy1tcy10cmFuc2l0aW9uOm9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7dHJhbnNpdGlvbjpvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O3Bvc2l0aW9uOmFic29sdXRlfS5jYXJvdXNlbC1jb250ZW50LmNhcm91c2VsLWFuaW1hdGUuY2Fyb3VzZWwtYW5pbWF0ZS1zbGlkZXt0cmFuc2l0aW9uOmFsbCAxcyBlYXNlLWluLW91dDstd2Via2l0LXRyYW5zZm9ybTpub25lOy1tb3otdHJhbnNmb3JtOm5vbmU7LW1zLXRyYW5zZm9ybTpub25lO3RyYW5zZm9ybTpub25lfS5jYXJvdXNlbC1jb250ZW50LmNhcm91c2VsLWFuaW1hdGUuY2Fyb3VzZWwtYW5pbWF0ZS1mYWRlIC5jYXJvdXNlbC1pdGVtLmlzLWFjdGl2ZXtvcGFjaXR5OjF9LmNhcm91c2VsLWNvbnRlbnQuY2Fyb3VzZWwtYW5pbWF0ZS5jYXJvdXNlbC1hbmltYXRlLWZhZGUgLmNhcm91c2VsLWl0ZW06bm90KC5pcy1hY3RpdmUpe29wYWNpdHk6MH0uY2Fyb3VzZWwtcmV2ZXJzZS5jYXJvdXNlbC1hbmltYXRlLXNsaWRley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7LW1vei10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC0xMDAlLDAsMCl9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj97XCJtaW5pbWl6ZVwiOnRydWV9IS4vbm9kZV9tb2R1bGVzL2J1bG1hLWNhcm91c2VsL2J1bG1hLWNhcm91c2VsLmNzc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2J1bG1hLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2J1bG1hLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9idWxtYS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2J1bG1hL2Nzcy9idWxtYS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIGJ1bG1hLmlvIHYwLjYuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9qZ3RobXMvYnVsbWEgKi9ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbkFyb3VuZHswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM1OWRlZyl9fUBrZXlmcmFtZXMgc3BpbkFyb3VuZHswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX10b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM1OWRlZyl9fVxcblxcbi8qISBtaW5pcmVzZXQuY3NzIHYwLjAuMiB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9qZ3RobXMvbWluaXJlc2V0LmNzcyAqL2Jsb2NrcXVvdGUsYm9keSxkZCxkbCxkdCxmaWVsZHNldCxmaWd1cmUsaDEsaDIsaDMsaDQsaDUsaDYsaHIsaHRtbCxpZnJhbWUsbGVnZW5kLGxpLG9sLHAscHJlLHRleHRhcmVhLHVse21hcmdpbjowO3BhZGRpbmc6MH1oMSxoMixoMyxoNCxoNSxoNntmb250LXNpemU6MTAwJTtmb250LXdlaWdodDo0MDB9dWx7bGlzdC1zdHlsZTpub25lfWJ1dHRvbixpbnB1dCxzZWxlY3QsdGV4dGFyZWF7bWFyZ2luOjB9aHRtbHstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9Kiw6YWZ0ZXIsOmJlZm9yZXstd2Via2l0LWJveC1zaXppbmc6aW5oZXJpdDtib3gtc2l6aW5nOmluaGVyaXR9YXVkaW8sZW1iZWQsaW1nLG9iamVjdCx2aWRlb3ttYXgtd2lkdGg6MTAwJX1pZnJhbWV7Ym9yZGVyOjB9dGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjB9dGQsdGh7cGFkZGluZzowO3RleHQtYWxpZ246bGVmdH1odG1se2JhY2tncm91bmQtY29sb3I6I2ZmZjtmb250LXNpemU6MTZweDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDttaW4td2lkdGg6MzAwcHg7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTpzY3JvbGw7dGV4dC1yZW5kZXJpbmc6b3B0aW1pemVMZWdpYmlsaXR5Oy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlOy1tb3otdGV4dC1zaXplLWFkanVzdDoxMDAlOy1tcy10ZXh0LXNpemUtYWRqdXN0OjEwMCU7dGV4dC1zaXplLWFkanVzdDoxMDAlfWFydGljbGUsYXNpZGUsZmlndXJlLGZvb3RlcixoZWFkZXIsaGdyb3VwLHNlY3Rpb257ZGlzcGxheTpibG9ja31ib2R5LGJ1dHRvbixpbnB1dCxzZWxlY3QsdGV4dGFyZWF7Zm9udC1mYW1pbHk6QmxpbmtNYWNTeXN0ZW1Gb250LC1hcHBsZS1zeXN0ZW0sU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmfWNvZGUscHJley1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmF1dG87LXdlYmtpdC1mb250LXNtb290aGluZzphdXRvO2ZvbnQtZmFtaWx5Om1vbm9zcGFjZX1ib2R5e2NvbG9yOiM0YTRhNGE7Zm9udC1zaXplOjFyZW07Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuNX1he2NvbG9yOiMzMjczZGM7Y3Vyc29yOnBvaW50ZXI7dGV4dC1kZWNvcmF0aW9uOm5vbmV9YSBzdHJvbmd7Y29sb3I6Y3VycmVudENvbG9yfWE6aG92ZXJ7Y29sb3I6IzM2MzYzNn1jb2Rle2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojZmYzODYwO2ZvbnQtc2l6ZTouODc1ZW07Zm9udC13ZWlnaHQ6NDAwO3BhZGRpbmc6LjI1ZW0gLjVlbX1ocntiYWNrZ3JvdW5kLWNvbG9yOiNkYmRiZGI7Ym9yZGVyOm5vbmU7ZGlzcGxheTpibG9jaztoZWlnaHQ6MXB4O21hcmdpbjoxLjVyZW0gMH1pbWd7aGVpZ2h0OmF1dG87bWF4LXdpZHRoOjEwMCV9aW5wdXRbdHlwZT1jaGVja2JveF0saW5wdXRbdHlwZT1yYWRpb117dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c21hbGx7Zm9udC1zaXplOi44NzVlbX1zcGFue2ZvbnQtc3R5bGU6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fXN0cm9uZ3tjb2xvcjojMzYzNjM2O2ZvbnQtd2VpZ2h0OjcwMH1wcmV7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiM0YTRhNGE7Zm9udC1zaXplOi44NzVlbTtvdmVyZmxvdy14OmF1dG87cGFkZGluZzoxLjI1cmVtIDEuNXJlbTt3aGl0ZS1zcGFjZTpwcmU7d29yZC13cmFwOm5vcm1hbH1wcmUgY29kZXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOmN1cnJlbnRDb2xvcjtmb250LXNpemU6MWVtO3BhZGRpbmc6MH10YWJsZSB0ZCx0YWJsZSB0aHt0ZXh0LWFsaWduOmxlZnQ7dmVydGljYWwtYWxpZ246dG9wfXRhYmxlIHRoe2NvbG9yOiMzNjM2MzZ9LmlzLWNsZWFyZml4OmFmdGVye2NsZWFyOmJvdGg7Y29udGVudDpcXFwiIFxcXCI7ZGlzcGxheTp0YWJsZX0uaXMtcHVsbGVkLWxlZnR7ZmxvYXQ6bGVmdCFpbXBvcnRhbnR9LmlzLXB1bGxlZC1yaWdodHtmbG9hdDpyaWdodCFpbXBvcnRhbnR9LmlzLWNsaXBwZWR7b3ZlcmZsb3c6aGlkZGVuIWltcG9ydGFudH0uaXMtb3ZlcmxheXtib3R0b206MDtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MH0uaXMtc2l6ZS0xe2ZvbnQtc2l6ZTozcmVtIWltcG9ydGFudH0uaXMtc2l6ZS0ye2ZvbnQtc2l6ZToyLjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTN7Zm9udC1zaXplOjJyZW0haW1wb3J0YW50fS5pcy1zaXplLTR7Zm9udC1zaXplOjEuNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNXtmb250LXNpemU6MS4yNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNntmb250LXNpemU6MXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtN3tmb250LXNpemU6Ljc1cmVtIWltcG9ydGFudH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaXMtc2l6ZS0xLW1vYmlsZXtmb250LXNpemU6M3JlbSFpbXBvcnRhbnR9LmlzLXNpemUtMi1tb2JpbGV7Zm9udC1zaXplOjIuNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtMy1tb2JpbGV7Zm9udC1zaXplOjJyZW0haW1wb3J0YW50fS5pcy1zaXplLTQtbW9iaWxle2ZvbnQtc2l6ZToxLjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTUtbW9iaWxle2ZvbnQtc2l6ZToxLjI1cmVtIWltcG9ydGFudH0uaXMtc2l6ZS02LW1vYmlsZXtmb250LXNpemU6MXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNy1tb2JpbGV7Zm9udC1zaXplOi43NXJlbSFpbXBvcnRhbnR9fUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5pcy1zaXplLTEtdGFibGV0e2ZvbnQtc2l6ZTozcmVtIWltcG9ydGFudH0uaXMtc2l6ZS0yLXRhYmxldHtmb250LXNpemU6Mi41cmVtIWltcG9ydGFudH0uaXMtc2l6ZS0zLXRhYmxldHtmb250LXNpemU6MnJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNC10YWJsZXR7Zm9udC1zaXplOjEuNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNS10YWJsZXR7Zm9udC1zaXplOjEuMjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTYtdGFibGV0e2ZvbnQtc2l6ZToxcmVtIWltcG9ydGFudH0uaXMtc2l6ZS03LXRhYmxldHtmb250LXNpemU6Ljc1cmVtIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5pcy1zaXplLTEtdG91Y2h7Zm9udC1zaXplOjNyZW0haW1wb3J0YW50fS5pcy1zaXplLTItdG91Y2h7Zm9udC1zaXplOjIuNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtMy10b3VjaHtmb250LXNpemU6MnJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNC10b3VjaHtmb250LXNpemU6MS41cmVtIWltcG9ydGFudH0uaXMtc2l6ZS01LXRvdWNoe2ZvbnQtc2l6ZToxLjI1cmVtIWltcG9ydGFudH0uaXMtc2l6ZS02LXRvdWNoe2ZvbnQtc2l6ZToxcmVtIWltcG9ydGFudH0uaXMtc2l6ZS03LXRvdWNoe2ZvbnQtc2l6ZTouNzVyZW0haW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7LmlzLXNpemUtMS1kZXNrdG9we2ZvbnQtc2l6ZTozcmVtIWltcG9ydGFudH0uaXMtc2l6ZS0yLWRlc2t0b3B7Zm9udC1zaXplOjIuNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtMy1kZXNrdG9we2ZvbnQtc2l6ZToycmVtIWltcG9ydGFudH0uaXMtc2l6ZS00LWRlc2t0b3B7Zm9udC1zaXplOjEuNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNS1kZXNrdG9we2ZvbnQtc2l6ZToxLjI1cmVtIWltcG9ydGFudH0uaXMtc2l6ZS02LWRlc2t0b3B7Zm9udC1zaXplOjFyZW0haW1wb3J0YW50fS5pcy1zaXplLTctZGVza3RvcHtmb250LXNpemU6Ljc1cmVtIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpey5pcy1zaXplLTEtd2lkZXNjcmVlbntmb250LXNpemU6M3JlbSFpbXBvcnRhbnR9LmlzLXNpemUtMi13aWRlc2NyZWVue2ZvbnQtc2l6ZToyLjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTMtd2lkZXNjcmVlbntmb250LXNpemU6MnJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNC13aWRlc2NyZWVue2ZvbnQtc2l6ZToxLjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTUtd2lkZXNjcmVlbntmb250LXNpemU6MS4yNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNi13aWRlc2NyZWVue2ZvbnQtc2l6ZToxcmVtIWltcG9ydGFudH0uaXMtc2l6ZS03LXdpZGVzY3JlZW57Zm9udC1zaXplOi43NXJlbSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQwOHB4KXsuaXMtc2l6ZS0xLWZ1bGxoZHtmb250LXNpemU6M3JlbSFpbXBvcnRhbnR9LmlzLXNpemUtMi1mdWxsaGR7Zm9udC1zaXplOjIuNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtMy1mdWxsaGR7Zm9udC1zaXplOjJyZW0haW1wb3J0YW50fS5pcy1zaXplLTQtZnVsbGhke2ZvbnQtc2l6ZToxLjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTUtZnVsbGhke2ZvbnQtc2l6ZToxLjI1cmVtIWltcG9ydGFudH0uaXMtc2l6ZS02LWZ1bGxoZHtmb250LXNpemU6MXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNy1mdWxsaGR7Zm9udC1zaXplOi43NXJlbSFpbXBvcnRhbnR9fS5oYXMtdGV4dC1jZW50ZXJlZHt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7Lmhhcy10ZXh0LWNlbnRlcmVkLW1vYmlsZXt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9fUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5oYXMtdGV4dC1jZW50ZXJlZC10YWJsZXR7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5oYXMtdGV4dC1jZW50ZXJlZC10YWJsZXQtb25seXt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaGFzLXRleHQtY2VudGVyZWQtdG91Y2h7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7Lmhhcy10ZXh0LWNlbnRlcmVkLWRlc2t0b3B7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTIxNXB4KXsuaGFzLXRleHQtY2VudGVyZWQtZGVza3RvcC1vbmx5e3RleHQtYWxpZ246Y2VudGVyIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpey5oYXMtdGV4dC1jZW50ZXJlZC13aWRlc2NyZWVue3RleHQtYWxpZ246Y2VudGVyIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpIGFuZCAobWF4LXdpZHRoOjE0MDdweCl7Lmhhcy10ZXh0LWNlbnRlcmVkLXdpZGVzY3JlZW4tb25seXt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQwOHB4KXsuaGFzLXRleHQtY2VudGVyZWQtZnVsbGhke3RleHQtYWxpZ246Y2VudGVyIWltcG9ydGFudH19Lmhhcy10ZXh0LWp1c3RpZmllZHt0ZXh0LWFsaWduOmp1c3RpZnkhaW1wb3J0YW50fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oYXMtdGV4dC1qdXN0aWZpZWQtbW9iaWxle3RleHQtYWxpZ246anVzdGlmeSFpbXBvcnRhbnR9fUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5oYXMtdGV4dC1qdXN0aWZpZWQtdGFibGV0e3RleHQtYWxpZ246anVzdGlmeSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7Lmhhcy10ZXh0LWp1c3RpZmllZC10YWJsZXQtb25seXt0ZXh0LWFsaWduOmp1c3RpZnkhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7Lmhhcy10ZXh0LWp1c3RpZmllZC10b3VjaHt0ZXh0LWFsaWduOmp1c3RpZnkhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7Lmhhcy10ZXh0LWp1c3RpZmllZC1kZXNrdG9we3RleHQtYWxpZ246anVzdGlmeSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KSBhbmQgKG1heC13aWR0aDoxMjE1cHgpey5oYXMtdGV4dC1qdXN0aWZpZWQtZGVza3RvcC1vbmx5e3RleHQtYWxpZ246anVzdGlmeSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIxNnB4KXsuaGFzLXRleHQtanVzdGlmaWVkLXdpZGVzY3JlZW57dGV4dC1hbGlnbjpqdXN0aWZ5IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpIGFuZCAobWF4LXdpZHRoOjE0MDdweCl7Lmhhcy10ZXh0LWp1c3RpZmllZC13aWRlc2NyZWVuLW9ubHl7dGV4dC1hbGlnbjpqdXN0aWZ5IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDA4cHgpey5oYXMtdGV4dC1qdXN0aWZpZWQtZnVsbGhke3RleHQtYWxpZ246anVzdGlmeSFpbXBvcnRhbnR9fS5oYXMtdGV4dC1sZWZ0e3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7Lmhhcy10ZXh0LWxlZnQtbW9iaWxle3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9fUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5oYXMtdGV4dC1sZWZ0LXRhYmxldHt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5oYXMtdGV4dC1sZWZ0LXRhYmxldC1vbmx5e3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaGFzLXRleHQtbGVmdC10b3VjaHt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7Lmhhcy10ZXh0LWxlZnQtZGVza3RvcHt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTIxNXB4KXsuaGFzLXRleHQtbGVmdC1kZXNrdG9wLW9ubHl7dGV4dC1hbGlnbjpsZWZ0IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpey5oYXMtdGV4dC1sZWZ0LXdpZGVzY3JlZW57dGV4dC1hbGlnbjpsZWZ0IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpIGFuZCAobWF4LXdpZHRoOjE0MDdweCl7Lmhhcy10ZXh0LWxlZnQtd2lkZXNjcmVlbi1vbmx5e3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQwOHB4KXsuaGFzLXRleHQtbGVmdC1mdWxsaGR7dGV4dC1hbGlnbjpsZWZ0IWltcG9ydGFudH19Lmhhcy10ZXh0LXJpZ2h0e3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oYXMtdGV4dC1yaWdodC1tb2JpbGV7dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9fUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5oYXMtdGV4dC1yaWdodC10YWJsZXR7dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7Lmhhcy10ZXh0LXJpZ2h0LXRhYmxldC1vbmx5e3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7Lmhhcy10ZXh0LXJpZ2h0LXRvdWNoe3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7Lmhhcy10ZXh0LXJpZ2h0LWRlc2t0b3B7dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KSBhbmQgKG1heC13aWR0aDoxMjE1cHgpey5oYXMtdGV4dC1yaWdodC1kZXNrdG9wLW9ubHl7dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIxNnB4KXsuaGFzLXRleHQtcmlnaHQtd2lkZXNjcmVlbnt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpIGFuZCAobWF4LXdpZHRoOjE0MDdweCl7Lmhhcy10ZXh0LXJpZ2h0LXdpZGVzY3JlZW4tb25seXt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDA4cHgpey5oYXMtdGV4dC1yaWdodC1mdWxsaGR7dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9fS5pcy1jYXBpdGFsaXplZHt0ZXh0LXRyYW5zZm9ybTpjYXBpdGFsaXplIWltcG9ydGFudH0uaXMtbG93ZXJjYXNle3RleHQtdHJhbnNmb3JtOmxvd2VyY2FzZSFpbXBvcnRhbnR9LmlzLXVwcGVyY2FzZXt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2UhaW1wb3J0YW50fS5oYXMtdGV4dC13aGl0ZXtjb2xvcjojZmZmIWltcG9ydGFudH1hLmhhcy10ZXh0LXdoaXRlOmZvY3VzLGEuaGFzLXRleHQtd2hpdGU6aG92ZXJ7Y29sb3I6I2U2ZTZlNiFpbXBvcnRhbnR9Lmhhcy10ZXh0LWJsYWNre2NvbG9yOiMwYTBhMGEhaW1wb3J0YW50fWEuaGFzLXRleHQtYmxhY2s6Zm9jdXMsYS5oYXMtdGV4dC1ibGFjazpob3Zlcntjb2xvcjojMDAwIWltcG9ydGFudH0uaGFzLXRleHQtbGlnaHR7Y29sb3I6I2Y1ZjVmNSFpbXBvcnRhbnR9YS5oYXMtdGV4dC1saWdodDpmb2N1cyxhLmhhcy10ZXh0LWxpZ2h0OmhvdmVye2NvbG9yOiNkYmRiZGIhaW1wb3J0YW50fS5oYXMtdGV4dC1kYXJre2NvbG9yOiMzNjM2MzYhaW1wb3J0YW50fWEuaGFzLXRleHQtZGFyazpmb2N1cyxhLmhhcy10ZXh0LWRhcms6aG92ZXJ7Y29sb3I6IzFjMWMxYyFpbXBvcnRhbnR9Lmhhcy10ZXh0LXByaW1hcnl7Y29sb3I6IzAwZDFiMiFpbXBvcnRhbnR9YS5oYXMtdGV4dC1wcmltYXJ5OmZvY3VzLGEuaGFzLXRleHQtcHJpbWFyeTpob3Zlcntjb2xvcjojMDA5ZTg2IWltcG9ydGFudH0uaGFzLXRleHQtbGlua3tjb2xvcjojMzI3M2RjIWltcG9ydGFudH1hLmhhcy10ZXh0LWxpbms6Zm9jdXMsYS5oYXMtdGV4dC1saW5rOmhvdmVye2NvbG9yOiMyMDViYmMhaW1wb3J0YW50fS5oYXMtdGV4dC1pbmZve2NvbG9yOiMyMDljZWUhaW1wb3J0YW50fWEuaGFzLXRleHQtaW5mbzpmb2N1cyxhLmhhcy10ZXh0LWluZm86aG92ZXJ7Y29sb3I6IzBmODFjYyFpbXBvcnRhbnR9Lmhhcy10ZXh0LXN1Y2Nlc3N7Y29sb3I6IzIzZDE2MCFpbXBvcnRhbnR9YS5oYXMtdGV4dC1zdWNjZXNzOmZvY3VzLGEuaGFzLXRleHQtc3VjY2Vzczpob3Zlcntjb2xvcjojMWNhNjRjIWltcG9ydGFudH0uaGFzLXRleHQtd2FybmluZ3tjb2xvcjojZmZkZDU3IWltcG9ydGFudH1hLmhhcy10ZXh0LXdhcm5pbmc6Zm9jdXMsYS5oYXMtdGV4dC13YXJuaW5nOmhvdmVye2NvbG9yOiNmZmQzMjQhaW1wb3J0YW50fS5oYXMtdGV4dC1kYW5nZXJ7Y29sb3I6I2ZmMzg2MCFpbXBvcnRhbnR9YS5oYXMtdGV4dC1kYW5nZXI6Zm9jdXMsYS5oYXMtdGV4dC1kYW5nZXI6aG92ZXJ7Y29sb3I6I2ZmMDUzNyFpbXBvcnRhbnR9Lmhhcy10ZXh0LWJsYWNrLWJpc3tjb2xvcjojMTIxMjEyIWltcG9ydGFudH0uaGFzLXRleHQtYmxhY2stdGVye2NvbG9yOiMyNDI0MjQhaW1wb3J0YW50fS5oYXMtdGV4dC1ncmV5LWRhcmtlcntjb2xvcjojMzYzNjM2IWltcG9ydGFudH0uaGFzLXRleHQtZ3JleS1kYXJre2NvbG9yOiM0YTRhNGEhaW1wb3J0YW50fS5oYXMtdGV4dC1ncmV5e2NvbG9yOiM3YTdhN2EhaW1wb3J0YW50fS5oYXMtdGV4dC1ncmV5LWxpZ2h0e2NvbG9yOiNiNWI1YjUhaW1wb3J0YW50fS5oYXMtdGV4dC1ncmV5LWxpZ2h0ZXJ7Y29sb3I6I2RiZGJkYiFpbXBvcnRhbnR9Lmhhcy10ZXh0LXdoaXRlLXRlcntjb2xvcjojZjVmNWY1IWltcG9ydGFudH0uaGFzLXRleHQtd2hpdGUtYmlze2NvbG9yOiNmYWZhZmEhaW1wb3J0YW50fS5oYXMtdGV4dC13ZWlnaHQtbGlnaHR7Zm9udC13ZWlnaHQ6MzAwIWltcG9ydGFudH0uaGFzLXRleHQtd2VpZ2h0LW5vcm1hbHtmb250LXdlaWdodDo0MDAhaW1wb3J0YW50fS5oYXMtdGV4dC13ZWlnaHQtc2VtaWJvbGR7Zm9udC13ZWlnaHQ6NjAwIWltcG9ydGFudH0uaGFzLXRleHQtd2VpZ2h0LWJvbGR7Zm9udC13ZWlnaHQ6NzAwIWltcG9ydGFudH0uaXMtYmxvY2t7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmlzLWJsb2NrLW1vYmlsZXtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LmlzLWJsb2NrLXRhYmxldHtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaXMtYmxvY2stdGFibGV0LW9ubHl7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaXMtYmxvY2stdG91Y2h7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuaXMtYmxvY2stZGVza3RvcHtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEyMTVweCl7LmlzLWJsb2NrLWRlc2t0b3Atb25seXtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpey5pcy1ibG9jay13aWRlc2NyZWVue2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCkgYW5kIChtYXgtd2lkdGg6MTQwN3B4KXsuaXMtYmxvY2std2lkZXNjcmVlbi1vbmx5e2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0MDhweCl7LmlzLWJsb2NrLWZ1bGxoZHtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH19LmlzLWZsZXh7ZGlzcGxheTotd2Via2l0LWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTpmbGV4IWltcG9ydGFudH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaXMtZmxleC1tb2JpbGV7ZGlzcGxheTotd2Via2l0LWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTpmbGV4IWltcG9ydGFudH19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LmlzLWZsZXgtdGFibGV0e2Rpc3BsYXk6LXdlYmtpdC1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6LW1zLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7LmlzLWZsZXgtdGFibGV0LW9ubHl7ZGlzcGxheTotd2Via2l0LWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTpmbGV4IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5pcy1mbGV4LXRvdWNoe2Rpc3BsYXk6LXdlYmtpdC1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6LW1zLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuaXMtZmxleC1kZXNrdG9we2Rpc3BsYXk6LXdlYmtpdC1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6LW1zLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KSBhbmQgKG1heC13aWR0aDoxMjE1cHgpey5pcy1mbGV4LWRlc2t0b3Atb25seXtkaXNwbGF5Oi13ZWJraXQtYm94IWltcG9ydGFudDtkaXNwbGF5Oi1tcy1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCl7LmlzLWZsZXgtd2lkZXNjcmVlbntkaXNwbGF5Oi13ZWJraXQtYm94IWltcG9ydGFudDtkaXNwbGF5Oi1tcy1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCkgYW5kIChtYXgtd2lkdGg6MTQwN3B4KXsuaXMtZmxleC13aWRlc2NyZWVuLW9ubHl7ZGlzcGxheTotd2Via2l0LWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTpmbGV4IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDA4cHgpey5pcy1mbGV4LWZ1bGxoZHtkaXNwbGF5Oi13ZWJraXQtYm94IWltcG9ydGFudDtkaXNwbGF5Oi1tcy1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmZsZXghaW1wb3J0YW50fX0uaXMtaW5saW5le2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaXMtaW5saW5lLW1vYmlsZXtkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9fUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5pcy1pbmxpbmUtdGFibGV0e2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaXMtaW5saW5lLXRhYmxldC1vbmx5e2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5pcy1pbmxpbmUtdG91Y2h7ZGlzcGxheTppbmxpbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7LmlzLWlubGluZS1kZXNrdG9we2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEyMTVweCl7LmlzLWlubGluZS1kZXNrdG9wLW9ubHl7ZGlzcGxheTppbmxpbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCl7LmlzLWlubGluZS13aWRlc2NyZWVue2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpIGFuZCAobWF4LXdpZHRoOjE0MDdweCl7LmlzLWlubGluZS13aWRlc2NyZWVuLW9ubHl7ZGlzcGxheTppbmxpbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0MDhweCl7LmlzLWlubGluZS1mdWxsaGR7ZGlzcGxheTppbmxpbmUhaW1wb3J0YW50fX0uaXMtaW5saW5lLWJsb2Nre2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaXMtaW5saW5lLWJsb2NrLW1vYmlsZXtkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5pcy1pbmxpbmUtYmxvY2stdGFibGV0e2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaXMtaW5saW5lLWJsb2NrLXRhYmxldC1vbmx5e2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5pcy1pbmxpbmUtYmxvY2stdG91Y2h7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7LmlzLWlubGluZS1ibG9jay1kZXNrdG9we2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEyMTVweCl7LmlzLWlubGluZS1ibG9jay1kZXNrdG9wLW9ubHl7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCl7LmlzLWlubGluZS1ibG9jay13aWRlc2NyZWVue2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpIGFuZCAobWF4LXdpZHRoOjE0MDdweCl7LmlzLWlubGluZS1ibG9jay13aWRlc2NyZWVuLW9ubHl7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0MDhweCl7LmlzLWlubGluZS1ibG9jay1mdWxsaGR7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fX0uaXMtaW5saW5lLWZsZXh7ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmlubGluZS1mbGV4IWltcG9ydGFudH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaXMtaW5saW5lLWZsZXgtbW9iaWxle2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtYm94IWltcG9ydGFudDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTppbmxpbmUtZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5pcy1pbmxpbmUtZmxleC10YWJsZXR7ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmlubGluZS1mbGV4IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaXMtaW5saW5lLWZsZXgtdGFibGV0LW9ubHl7ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmlubGluZS1mbGV4IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5pcy1pbmxpbmUtZmxleC10b3VjaHtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7LmlzLWlubGluZS1mbGV4LWRlc2t0b3B7ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmlubGluZS1mbGV4IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEyMTVweCl7LmlzLWlubGluZS1mbGV4LWRlc2t0b3Atb25seXtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCl7LmlzLWlubGluZS1mbGV4LXdpZGVzY3JlZW57ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmlubGluZS1mbGV4IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpIGFuZCAobWF4LXdpZHRoOjE0MDdweCl7LmlzLWlubGluZS1mbGV4LXdpZGVzY3JlZW4tb25seXtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0MDhweCl7LmlzLWlubGluZS1mbGV4LWZ1bGxoZHtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fX0uaXMtaGlkZGVue2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmlzLWhpZGRlbi1tb2JpbGV7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LmlzLWhpZGRlbi10YWJsZXR7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaXMtaGlkZGVuLXRhYmxldC1vbmx5e2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaXMtaGlkZGVuLXRvdWNoe2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuaXMtaGlkZGVuLWRlc2t0b3B7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEyMTVweCl7LmlzLWhpZGRlbi1kZXNrdG9wLW9ubHl7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpey5pcy1oaWRkZW4td2lkZXNjcmVlbntkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCkgYW5kIChtYXgtd2lkdGg6MTQwN3B4KXsuaXMtaGlkZGVuLXdpZGVzY3JlZW4tb25seXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0MDhweCl7LmlzLWhpZGRlbi1mdWxsaGR7ZGlzcGxheTpub25lIWltcG9ydGFudH19LmlzLWludmlzaWJsZXt2aXNpYmlsaXR5OmhpZGRlbiFpbXBvcnRhbnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmlzLWludmlzaWJsZS1tb2JpbGV7dmlzaWJpbGl0eTpoaWRkZW4haW1wb3J0YW50fX1AbWVkaWEgcHJpbnQsc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsuaXMtaW52aXNpYmxlLXRhYmxldHt2aXNpYmlsaXR5OmhpZGRlbiFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7LmlzLWludmlzaWJsZS10YWJsZXQtb25seXt2aXNpYmlsaXR5OmhpZGRlbiFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaXMtaW52aXNpYmxlLXRvdWNoe3Zpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpey5pcy1pbnZpc2libGUtZGVza3RvcHt2aXNpYmlsaXR5OmhpZGRlbiFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KSBhbmQgKG1heC13aWR0aDoxMjE1cHgpey5pcy1pbnZpc2libGUtZGVza3RvcC1vbmx5e3Zpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpey5pcy1pbnZpc2libGUtd2lkZXNjcmVlbnt2aXNpYmlsaXR5OmhpZGRlbiFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIxNnB4KSBhbmQgKG1heC13aWR0aDoxNDA3cHgpey5pcy1pbnZpc2libGUtd2lkZXNjcmVlbi1vbmx5e3Zpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDA4cHgpey5pcy1pbnZpc2libGUtZnVsbGhke3Zpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudH19LmlzLW1hcmdpbmxlc3N7bWFyZ2luOjAhaW1wb3J0YW50fS5pcy1wYWRkaW5nbGVzc3twYWRkaW5nOjAhaW1wb3J0YW50fS5pcy1yYWRpdXNsZXNze2JvcmRlci1yYWRpdXM6MCFpbXBvcnRhbnR9LmlzLXNoYWRvd2xlc3N7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmUhaW1wb3J0YW50O2JveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnR9LmlzLXVuc2VsZWN0YWJsZXstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LmJveHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo1cHg7LXdlYmtpdC1ib3gtc2hhZG93OjAgMnB4IDNweCBoc2xhKDAsMCUsNCUsLjEpLDAgMCAwIDFweCBoc2xhKDAsMCUsNCUsLjEpO2JveC1zaGFkb3c6MCAycHggM3B4IGhzbGEoMCwwJSw0JSwuMSksMCAwIDAgMXB4IGhzbGEoMCwwJSw0JSwuMSk7Y29sb3I6IzRhNGE0YTtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MS4yNXJlbX0uYm94Om5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxLjVyZW19YS5ib3g6Zm9jdXMsYS5ib3g6aG92ZXJ7LXdlYmtpdC1ib3gtc2hhZG93OjAgMnB4IDNweCBoc2xhKDAsMCUsNCUsLjEpLDAgMCAwIDFweCAjMzI3M2RjO2JveC1zaGFkb3c6MCAycHggM3B4IGhzbGEoMCwwJSw0JSwuMSksMCAwIDAgMXB4ICMzMjczZGN9YS5ib3g6YWN0aXZley13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAycHggaHNsYSgwLDAlLDQlLC4yKSwwIDAgMCAxcHggIzMyNzNkYztib3gtc2hhZG93Omluc2V0IDAgMXB4IDJweCBoc2xhKDAsMCUsNCUsLjIpLDAgMCAwIDFweCAjMzI3M2RjfS5idXR0b257LW1vei1hcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjNweDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3g7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDtmb250LXNpemU6MXJlbTtoZWlnaHQ6Mi4yNWVtOy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtsaW5lLWhlaWdodDoxLjU7cGFkZGluZy1sZWZ0OmNhbGMoLjYyNWVtIC0gMXB4KTtwYWRkaW5nLXJpZ2h0OmNhbGMoLjYyNWVtIC0gMXB4KTtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjp0b3A7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2RiZGJkYjtjb2xvcjojMzYzNjM2O2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzpjYWxjKC4zNzVlbSAtIDFweCkgLjc1ZW07dGV4dC1hbGlnbjpjZW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwfS5idXR0b24uaXMtYWN0aXZlLC5idXR0b24uaXMtZm9jdXNlZCwuYnV0dG9uOmFjdGl2ZSwuYnV0dG9uOmZvY3Vze291dGxpbmU6bm9uZX0uYnV0dG9uW2Rpc2FibGVkXXtjdXJzb3I6bm90LWFsbG93ZWR9LmJ1dHRvbiBzdHJvbmd7Y29sb3I6aW5oZXJpdH0uYnV0dG9uIC5pY29uLC5idXR0b24gLmljb24uaXMtbGFyZ2UsLmJ1dHRvbiAuaWNvbi5pcy1tZWRpdW0sLmJ1dHRvbiAuaWNvbi5pcy1zbWFsbHtoZWlnaHQ6MS41ZW07d2lkdGg6MS41ZW19LmJ1dHRvbiAuaWNvbjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1sZWZ0OmNhbGMoLS4zNzVlbSAtIDFweCk7bWFyZ2luLXJpZ2h0Oi4xODc1ZW19LmJ1dHRvbiAuaWNvbjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpe21hcmdpbi1sZWZ0Oi4xODc1ZW07bWFyZ2luLXJpZ2h0OmNhbGMoLS4zNzVlbSAtIDFweCl9LmJ1dHRvbiAuaWNvbjpmaXJzdC1jaGlsZDpsYXN0LWNoaWxke21hcmdpbi1sZWZ0OmNhbGMoLS4zNzVlbSAtIDFweCk7bWFyZ2luLXJpZ2h0OmNhbGMoLS4zNzVlbSAtIDFweCl9LmJ1dHRvbi5pcy1ob3ZlcmVkLC5idXR0b246aG92ZXJ7Ym9yZGVyLWNvbG9yOiNiNWI1YjU7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLWZvY3VzZWQsLmJ1dHRvbjpmb2N1c3tib3JkZXItY29sb3I6IzMyNzNkYztjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbjpmb2N1czpub3QoOmFjdGl2ZSl7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDUwLDExNSwyMjAsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDUwLDExNSwyMjAsLjI1KX0uYnV0dG9uLmlzLWFjdGl2ZSwuYnV0dG9uOmFjdGl2ZXtib3JkZXItY29sb3I6IzRhNGE0YTtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtdGV4dHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojNGE0YTRhO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9LmJ1dHRvbi5pcy10ZXh0LmlzLWZvY3VzZWQsLmJ1dHRvbi5pcy10ZXh0LmlzLWhvdmVyZWQsLmJ1dHRvbi5pcy10ZXh0OmZvY3VzLC5idXR0b24uaXMtdGV4dDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLXRleHQuaXMtYWN0aXZlLC5idXR0b24uaXMtdGV4dDphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZThlOGU4O2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy10ZXh0W2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmJ1dHRvbi5pcy13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMwYTBhMGF9LmJ1dHRvbi5pcy13aGl0ZS5pcy1ob3ZlcmVkLC5idXR0b24uaXMtd2hpdGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMGEwYTBhfS5idXR0b24uaXMtd2hpdGUuaXMtZm9jdXNlZCwuYnV0dG9uLmlzLXdoaXRlOmZvY3Vze2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMGEwYTBhfS5idXR0b24uaXMtd2hpdGUuaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbi5pcy13aGl0ZTpmb2N1czpub3QoOmFjdGl2ZSl7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSBoc2xhKDAsMCUsMTAwJSwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIGhzbGEoMCwwJSwxMDAlLC4yNSl9LmJ1dHRvbi5pcy13aGl0ZS5pcy1hY3RpdmUsLmJ1dHRvbi5pcy13aGl0ZTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZjJmMmYyO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMGEwYTBhfS5idXR0b24uaXMtd2hpdGVbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5idXR0b24uaXMtd2hpdGUuaXMtaW52ZXJ0ZWR7YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy13aGl0ZS5pcy1pbnZlcnRlZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDB9LmJ1dHRvbi5pcy13aGl0ZS5pcy1pbnZlcnRlZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXdoaXRlLmlzLWxvYWRpbmc6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMwYTBhMGEgIzBhMGEwYSFpbXBvcnRhbnR9LmJ1dHRvbi5pcy13aGl0ZS5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy13aGl0ZS5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLXdoaXRlLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojMGEwYTBhfS5idXR0b24uaXMtd2hpdGUuaXMtb3V0bGluZWQuaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZiAjZmZmIWltcG9ydGFudH0uYnV0dG9uLmlzLXdoaXRlLmlzLW91dGxpbmVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZmOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojZmZmfS5idXR0b24uaXMtd2hpdGUuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6IzBhMGEwYTtjb2xvcjojMGEwYTBhfS5idXR0b24uaXMtd2hpdGUuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy13aGl0ZS5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGE7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXdoaXRlLmlzLWludmVydGVkLmlzLW91dGxpbmVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMGEwYTBhOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMGEwYTBhfS5idXR0b24uaXMtYmxhY2t7YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtYmxhY2suaXMtaG92ZXJlZCwuYnV0dG9uLmlzLWJsYWNrOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzA0MDQwNDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWJsYWNrLmlzLWZvY3VzZWQsLmJ1dHRvbi5pcy1ibGFjazpmb2N1c3tib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWJsYWNrLmlzLWZvY3VzZWQ6bm90KDphY3RpdmUpLC5idXR0b24uaXMtYmxhY2s6Zm9jdXM6bm90KDphY3RpdmUpey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDQlLC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDQlLC4yNSl9LmJ1dHRvbi5pcy1ibGFjay5pcy1hY3RpdmUsLmJ1dHRvbi5pcy1ibGFjazphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMDAwO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtYmxhY2tbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5idXR0b24uaXMtYmxhY2suaXMtaW52ZXJ0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMwYTBhMGF9LmJ1dHRvbi5pcy1ibGFjay5pcy1pbnZlcnRlZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjJ9LmJ1dHRvbi5pcy1ibGFjay5pcy1pbnZlcnRlZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzBhMGEwYX0uYnV0dG9uLmlzLWJsYWNrLmlzLWxvYWRpbmc6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmYgI2ZmZiFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1ibGFjay5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMGEwYTBhO2NvbG9yOiMwYTBhMGF9LmJ1dHRvbi5pcy1ibGFjay5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLWJsYWNrLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtib3JkZXItY29sb3I6IzBhMGEwYTtjb2xvcjojZmZmfS5idXR0b24uaXMtYmxhY2suaXMtb3V0bGluZWQuaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzBhMGEwYSAjMGEwYTBhIWltcG9ydGFudH0uYnV0dG9uLmlzLWJsYWNrLmlzLW91dGxpbmVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMGEwYTBhOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMGEwYTBhfS5idXR0b24uaXMtYmxhY2suaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojZmZmfS5idXR0b24uaXMtYmxhY2suaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1ibGFjay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX0uYnV0dG9uLmlzLWJsYWNrLmlzLWludmVydGVkLmlzLW91dGxpbmVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZmOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojZmZmfS5idXR0b24uaXMtbGlnaHR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtbGlnaHQuaXMtaG92ZXJlZCwuYnV0dG9uLmlzLWxpZ2h0OmhvdmVye2JhY2tncm91bmQtY29sb3I6I2VlZTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLWxpZ2h0LmlzLWZvY3VzZWQsLmJ1dHRvbi5pcy1saWdodDpmb2N1c3tib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLWxpZ2h0LmlzLWZvY3VzZWQ6bm90KDphY3RpdmUpLC5idXR0b24uaXMtbGlnaHQ6Zm9jdXM6bm90KDphY3RpdmUpey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDk2JSwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIGhzbGEoMCwwJSw5NiUsLjI1KX0uYnV0dG9uLmlzLWxpZ2h0LmlzLWFjdGl2ZSwuYnV0dG9uLmlzLWxpZ2h0OmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1saWdodFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmJ1dHRvbi5pcy1saWdodC5pcy1pbnZlcnRlZHtiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzY7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLWxpZ2h0LmlzLWludmVydGVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzI5MjkyOX0uYnV0dG9uLmlzLWxpZ2h0LmlzLWludmVydGVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojZjVmNWY1fS5idXR0b24uaXMtbGlnaHQuaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzM2MzYzNiAjMzYzNjM2IWltcG9ydGFudH0uYnV0dG9uLmlzLWxpZ2h0LmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmNWY1ZjU7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLWxpZ2h0LmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtbGlnaHQuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1jb2xvcjojZjVmNWY1O2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1saWdodC5pcy1vdXRsaW5lZC5pcy1sb2FkaW5nOmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZjVmNWY1ICNmNWY1ZjUhaW1wb3J0YW50fS5idXR0b24uaXMtbGlnaHQuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmNWY1ZjU7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmNWY1ZjV9LmJ1dHRvbi5pcy1saWdodC5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMzYzNjM2O2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1saWdodC5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLWxpZ2h0LmlzLWludmVydGVkLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fS5idXR0b24uaXMtbGlnaHQuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMzNjM2MzY7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1kYXJre2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLWRhcmsuaXMtaG92ZXJlZCwuYnV0dG9uLmlzLWRhcms6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMmYyZjJmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZjVmNWY1fS5idXR0b24uaXMtZGFyay5pcy1mb2N1c2VkLC5idXR0b24uaXMtZGFyazpmb2N1c3tib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLWRhcmsuaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbi5pcy1kYXJrOmZvY3VzOm5vdCg6YWN0aXZlKXstd2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoNTQsNTQsNTQsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDU0LDU0LDU0LC4yNSl9LmJ1dHRvbi5pcy1kYXJrLmlzLWFjdGl2ZSwuYnV0dG9uLmlzLWRhcms6YWN0aXZle2JhY2tncm91bmQtY29sb3I6IzI5MjkyOTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLWRhcmtbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5idXR0b24uaXMtZGFyay5pcy1pbnZlcnRlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLWRhcmsuaXMtaW52ZXJ0ZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZThlOGU4fS5idXR0b24uaXMtZGFyay5pcy1pbnZlcnRlZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLWRhcmsuaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2Y1ZjVmNSAjZjVmNWY1IWltcG9ydGFudH0uYnV0dG9uLmlzLWRhcmsuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6IzM2MzYzNjtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtZGFyay5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLWRhcmsuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2JvcmRlci1jb2xvcjojMzYzNjM2O2NvbG9yOiNmNWY1ZjV9LmJ1dHRvbi5pcy1kYXJrLmlzLW91dGxpbmVkLmlzLWxvYWRpbmc6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMzNjM2MzYgIzM2MzYzNiFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1kYXJrLmlzLW91dGxpbmVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMzYzNjM2Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtZGFyay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZjVmNWY1O2NvbG9yOiNmNWY1ZjV9LmJ1dHRvbi5pcy1kYXJrLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtZGFyay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLWRhcmsuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmNWY1ZjU7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmNWY1ZjV9LmJ1dHRvbi5pcy1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzAwZDFiMjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXByaW1hcnkuaXMtaG92ZXJlZCwuYnV0dG9uLmlzLXByaW1hcnk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDBjNGE3O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtcHJpbWFyeS5pcy1mb2N1c2VkLC5idXR0b24uaXMtcHJpbWFyeTpmb2N1c3tib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXByaW1hcnkuaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbi5pcy1wcmltYXJ5OmZvY3VzOm5vdCg6YWN0aXZlKXstd2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMCwyMDksMTc4LC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgwLDIwOSwxNzgsLjI1KX0uYnV0dG9uLmlzLXByaW1hcnkuaXMtYWN0aXZlLC5idXR0b24uaXMtcHJpbWFyeTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMDBiODljO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtcHJpbWFyeVtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmJ1dHRvbi5pcy1wcmltYXJ5LmlzLWludmVydGVke2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMDBkMWIyfS5idXR0b24uaXMtcHJpbWFyeS5pcy1pbnZlcnRlZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjJ9LmJ1dHRvbi5pcy1wcmltYXJ5LmlzLWludmVydGVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMDBkMWIyfS5idXR0b24uaXMtcHJpbWFyeS5pcy1sb2FkaW5nOmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmICNmZmYhaW1wb3J0YW50fS5idXR0b24uaXMtcHJpbWFyeS5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMDBkMWIyO2NvbG9yOiMwMGQxYjJ9LmJ1dHRvbi5pcy1wcmltYXJ5LmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtcHJpbWFyeS5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjI7Ym9yZGVyLWNvbG9yOiMwMGQxYjI7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXByaW1hcnkuaXMtb3V0bGluZWQuaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzAwZDFiMiAjMDBkMWIyIWltcG9ydGFudH0uYnV0dG9uLmlzLXByaW1hcnkuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMwMGQxYjI7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiMwMGQxYjJ9LmJ1dHRvbi5pcy1wcmltYXJ5LmlzLWludmVydGVkLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXByaW1hcnkuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1wcmltYXJ5LmlzLWludmVydGVkLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMDBkMWIyfS5idXR0b24uaXMtcHJpbWFyeS5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtbGluay5pcy1ob3ZlcmVkLC5idXR0b24uaXMtbGluazpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyNzZjZGE7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1saW5rLmlzLWZvY3VzZWQsLmJ1dHRvbi5pcy1saW5rOmZvY3Vze2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtbGluay5pcy1mb2N1c2VkOm5vdCg6YWN0aXZlKSwuYnV0dG9uLmlzLWxpbms6Zm9jdXM6bm90KDphY3RpdmUpey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1MCwxMTUsMjIwLC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1MCwxMTUsMjIwLC4yNSl9LmJ1dHRvbi5pcy1saW5rLmlzLWFjdGl2ZSwuYnV0dG9uLmlzLWxpbms6YWN0aXZle2JhY2tncm91bmQtY29sb3I6IzIzNjZkMTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWxpbmtbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6IzMyNzNkYztib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5idXR0b24uaXMtbGluay5pcy1pbnZlcnRlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzMyNzNkY30uYnV0dG9uLmlzLWxpbmsuaXMtaW52ZXJ0ZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjJmMmYyfS5idXR0b24uaXMtbGluay5pcy1pbnZlcnRlZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzMyNzNkY30uYnV0dG9uLmlzLWxpbmsuaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZiAjZmZmIWltcG9ydGFudH0uYnV0dG9uLmlzLWxpbmsuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6IzMyNzNkYztjb2xvcjojMzI3M2RjfS5idXR0b24uaXMtbGluay5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLWxpbmsuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2JvcmRlci1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1saW5rLmlzLW91dGxpbmVkLmlzLWxvYWRpbmc6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMzMjczZGMgIzMyNzNkYyFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1saW5rLmlzLW91dGxpbmVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMzI3M2RjOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMzI3M2RjfS5idXR0b24uaXMtbGluay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1saW5rLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtbGluay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzMyNzNkY30uYnV0dG9uLmlzLWxpbmsuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1pbmZve2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWluZm8uaXMtaG92ZXJlZCwuYnV0dG9uLmlzLWluZm86aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMTQ5NmVkO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtaW5mby5pcy1mb2N1c2VkLC5idXR0b24uaXMtaW5mbzpmb2N1c3tib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWluZm8uaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbi5pcy1pbmZvOmZvY3VzOm5vdCg6YWN0aXZlKXstd2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMzIsMTU2LDIzOCwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMzIsMTU2LDIzOCwuMjUpfS5idXR0b24uaXMtaW5mby5pcy1hY3RpdmUsLmJ1dHRvbi5pcy1pbmZvOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMxMThmZTQ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1pbmZvW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiMyMDljZWU7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX0uYnV0dG9uLmlzLWluZm8uaXMtaW52ZXJ0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMyMDljZWV9LmJ1dHRvbi5pcy1pbmZvLmlzLWludmVydGVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0uYnV0dG9uLmlzLWluZm8uaXMtaW52ZXJ0ZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiMyMDljZWV9LmJ1dHRvbi5pcy1pbmZvLmlzLWxvYWRpbmc6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmYgI2ZmZiFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1pbmZvLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMyMDljZWU7Y29sb3I6IzIwOWNlZX0uYnV0dG9uLmlzLWluZm8uaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1pbmZvLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtib3JkZXItY29sb3I6IzIwOWNlZTtjb2xvcjojZmZmfS5idXR0b24uaXMtaW5mby5pcy1vdXRsaW5lZC5pcy1sb2FkaW5nOmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMjA5Y2VlICMyMDljZWUhaW1wb3J0YW50fS5idXR0b24uaXMtaW5mby5pcy1vdXRsaW5lZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6IzIwOWNlZTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzIwOWNlZX0uYnV0dG9uLmlzLWluZm8uaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojZmZmfS5idXR0b24uaXMtaW5mby5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLWluZm8uaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMyMDljZWV9LmJ1dHRvbi5pcy1pbmZvLmlzLWludmVydGVkLmlzLW91dGxpbmVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZmOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojZmZmfS5idXR0b24uaXMtc3VjY2Vzc3tiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1zdWNjZXNzLmlzLWhvdmVyZWQsLmJ1dHRvbi5pcy1zdWNjZXNzOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzIyYzY1Yjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtZm9jdXNlZCwuYnV0dG9uLmlzLXN1Y2Nlc3M6Zm9jdXN7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1zdWNjZXNzLmlzLWZvY3VzZWQ6bm90KDphY3RpdmUpLC5idXR0b24uaXMtc3VjY2Vzczpmb2N1czpub3QoOmFjdGl2ZSl7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDM1LDIwOSw5NiwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMzUsMjA5LDk2LC4yNSl9LmJ1dHRvbi5pcy1zdWNjZXNzLmlzLWFjdGl2ZSwuYnV0dG9uLmlzLXN1Y2Nlc3M6YWN0aXZle2JhY2tncm91bmQtY29sb3I6IzIwYmM1Njtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXN1Y2Nlc3NbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6IzIzZDE2MDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1pbnZlcnRlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzIzZDE2MH0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtaW52ZXJ0ZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjJmMmYyfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1pbnZlcnRlZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzIzZDE2MH0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZiAjZmZmIWltcG9ydGFudH0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6IzIzZDE2MDtjb2xvcjojMjNkMTYwfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2JvcmRlci1jb2xvcjojMjNkMTYwO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1zdWNjZXNzLmlzLW91dGxpbmVkLmlzLWxvYWRpbmc6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMyM2QxNjAgIzIzZDE2MCFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1zdWNjZXNzLmlzLW91dGxpbmVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMjNkMTYwOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMjNkMTYwfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1zdWNjZXNzLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtc3VjY2Vzcy5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzIzZDE2MH0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy13YXJuaW5ne2JhY2tncm91bmQtY29sb3I6I2ZmZGQ1Nztib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6cmdiYSgwLDAsMCwuNyl9LmJ1dHRvbi5pcy13YXJuaW5nLmlzLWhvdmVyZWQsLmJ1dHRvbi5pcy13YXJuaW5nOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZGI0YTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6cmdiYSgwLDAsMCwuNyl9LmJ1dHRvbi5pcy13YXJuaW5nLmlzLWZvY3VzZWQsLmJ1dHRvbi5pcy13YXJuaW5nOmZvY3Vze2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uYnV0dG9uLmlzLXdhcm5pbmcuaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbi5pcy13YXJuaW5nOmZvY3VzOm5vdCg6YWN0aXZlKXstd2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMjU1LDIyMSw4NywuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMjU1LDIyMSw4NywuMjUpfS5idXR0b24uaXMtd2FybmluZy5pcy1hY3RpdmUsLmJ1dHRvbi5pcy13YXJuaW5nOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ4M2Q7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5idXR0b24uaXMtd2FybmluZ1tkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmJ1dHRvbi5pcy13YXJuaW5nLmlzLWludmVydGVke2NvbG9yOiNmZmRkNTd9LmJ1dHRvbi5pcy13YXJuaW5nLmlzLWludmVydGVkLC5idXR0b24uaXMtd2FybmluZy5pcy1pbnZlcnRlZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjcpfS5idXR0b24uaXMtd2FybmluZy5pcy1pbnZlcnRlZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC43KTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmZmRkNTd9LmJ1dHRvbi5pcy13YXJuaW5nLmlzLWxvYWRpbmc6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoMCwwLDAsLjcpIHJnYmEoMCwwLDAsLjcpIWltcG9ydGFudH0uYnV0dG9uLmlzLXdhcm5pbmcuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZGQ1Nztjb2xvcjojZmZkZDU3fS5idXR0b24uaXMtd2FybmluZy5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLXdhcm5pbmcuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3O2JvcmRlci1jb2xvcjojZmZkZDU3O2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5idXR0b24uaXMtd2FybmluZy5pcy1vdXRsaW5lZC5pcy1sb2FkaW5nOmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZkZDU3ICNmZmRkNTchaW1wb3J0YW50fS5idXR0b24uaXMtd2FybmluZy5pcy1vdXRsaW5lZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZGQ1Nzstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmZGQ1N30uYnV0dG9uLmlzLXdhcm5pbmcuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNyk7Y29sb3I6cmdiYSgwLDAsMCwuNyl9LmJ1dHRvbi5pcy13YXJuaW5nLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtd2FybmluZy5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjcpO2NvbG9yOiNmZmRkNTd9LmJ1dHRvbi5pcy13YXJuaW5nLmlzLWludmVydGVkLmlzLW91dGxpbmVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC43KTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6cmdiYSgwLDAsMCwuNyl9LmJ1dHRvbi5pcy1kYW5nZXJ7YmFja2dyb3VuZC1jb2xvcjojZmYzODYwO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtZGFuZ2VyLmlzLWhvdmVyZWQsLmJ1dHRvbi5pcy1kYW5nZXI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmYyYjU2O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtZGFuZ2VyLmlzLWZvY3VzZWQsLmJ1dHRvbi5pcy1kYW5nZXI6Zm9jdXN7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbi5pcy1kYW5nZXI6Zm9jdXM6bm90KDphY3RpdmUpey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNTUsNTYsOTYsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDI1NSw1Niw5NiwuMjUpfS5idXR0b24uaXMtZGFuZ2VyLmlzLWFjdGl2ZSwuYnV0dG9uLmlzLWRhbmdlcjphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZmYxZjRiO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtZGFuZ2VyW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX0uYnV0dG9uLmlzLWRhbmdlci5pcy1pbnZlcnRlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6I2ZmMzg2MH0uYnV0dG9uLmlzLWRhbmdlci5pcy1pbnZlcnRlZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjJ9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtaW52ZXJ0ZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmZjM4NjB9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZiAjZmZmIWltcG9ydGFudH0uYnV0dG9uLmlzLWRhbmdlci5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmYzODYwO2NvbG9yOiNmZjM4NjB9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1kYW5nZXIuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmYzODYwO2JvcmRlci1jb2xvcjojZmYzODYwO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtb3V0bGluZWQuaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmMzg2MCAjZmYzODYwIWltcG9ydGFudH0uYnV0dG9uLmlzLWRhbmdlci5pcy1vdXRsaW5lZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmMzg2MDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmMzg2MH0uYnV0dG9uLmlzLWRhbmdlci5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1kYW5nZXIuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiNmZjM4NjB9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1zbWFsbHtib3JkZXItcmFkaXVzOjJweDtmb250LXNpemU6Ljc1cmVtfS5idXR0b24uaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtfS5idXR0b24uaXMtbGFyZ2V7Zm9udC1zaXplOjEuNXJlbX0uYnV0dG9uW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNkYmRiZGI7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO29wYWNpdHk6LjV9LmJ1dHRvbi5pcy1mdWxsd2lkdGh7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlfS5idXR0b24uaXMtbG9hZGluZ3tjb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZX0uYnV0dG9uLmlzLWxvYWRpbmc6YWZ0ZXJ7LXdlYmtpdC1hbmltYXRpb246c3BpbkFyb3VuZCAuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpzcGluQXJvdW5kIC41cyBpbmZpbml0ZSBsaW5lYXI7Ym9yZGVyOjJweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6MjkwNDg2cHg7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci10b3AtY29sb3I6dHJhbnNwYXJlbnQ7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrO2hlaWdodDoxZW07cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MWVtO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6Y2FsYyg1MCUgLSAwLjVlbSk7dG9wOmNhbGMoNTAlIC0gMC41ZW0pO3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudH0uYnV0dG9uLmlzLXN0YXRpY3tiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNkYmRiZGI7Y29sb3I6IzdhN2E3YTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7cG9pbnRlci1ldmVudHM6bm9uZX0uYnV0dG9uc3std2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcDstd2Via2l0LWJveC1wYWNrOnN0YXJ0Oy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LmJ1dHRvbnMgLmJ1dHRvbnttYXJnaW4tYm90dG9tOi41cmVtfS5idXR0b25zIC5idXR0b246bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tcmlnaHQ6LjVyZW19LmJ1dHRvbnM6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOi0uNXJlbX0uYnV0dG9uczpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MXJlbX0uYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b246bm90KDpmaXJzdC1jaGlsZCl7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MH0uYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b246bm90KDpsYXN0LWNoaWxkKXtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7bWFyZ2luLXJpZ2h0Oi0xcHh9LmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uOmxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjB9LmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uLmlzLWhvdmVyZWQsLmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uOmhvdmVye3otaW5kZXg6Mn0uYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b24uaXMtYWN0aXZlLC5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbi5pcy1mb2N1c2VkLC5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbi5pcy1zZWxlY3RlZCwuYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b246YWN0aXZlLC5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbjpmb2N1c3t6LWluZGV4OjN9LmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uLmlzLWFjdGl2ZTpob3ZlciwuYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b24uaXMtZm9jdXNlZDpob3ZlciwuYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b24uaXMtc2VsZWN0ZWQ6aG92ZXIsLmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uOmFjdGl2ZTpob3ZlciwuYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b246Zm9jdXM6aG92ZXJ7ei1pbmRleDo0fS5idXR0b25zLmlzLWNlbnRlcmVkey13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmJ1dHRvbnMuaXMtcmlnaHR7LXdlYmtpdC1ib3gtcGFjazplbmQ7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5jb250YWluZXJ7bWFyZ2luOjAgYXV0bztwb3NpdGlvbjpyZWxhdGl2ZX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7LmNvbnRhaW5lcnttYXgtd2lkdGg6OTYwcHg7d2lkdGg6OTYwcHh9LmNvbnRhaW5lci5pcy1mbHVpZHttYXJnaW4tbGVmdDozMnB4O21hcmdpbi1yaWdodDozMnB4O21heC13aWR0aDpub25lO3dpZHRoOmF1dG99fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIxNXB4KXsuY29udGFpbmVyLmlzLXdpZGVzY3JlZW57bWF4LXdpZHRoOjExNTJweDt3aWR0aDphdXRvfX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjE0MDdweCl7LmNvbnRhaW5lci5pcy1mdWxsaGR7bWF4LXdpZHRoOjEzNDRweDt3aWR0aDphdXRvfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCl7LmNvbnRhaW5lcnttYXgtd2lkdGg6MTE1MnB4O3dpZHRoOjExNTJweH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDA4cHgpey5jb250YWluZXJ7bWF4LXdpZHRoOjEzNDRweDt3aWR0aDoxMzQ0cHh9fS5jb250ZW50Om5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxLjVyZW19LmNvbnRlbnQgbGkrbGl7bWFyZ2luLXRvcDouMjVlbX0uY29udGVudCBibG9ja3F1b3RlOm5vdCg6bGFzdC1jaGlsZCksLmNvbnRlbnQgZGw6bm90KDpsYXN0LWNoaWxkKSwuY29udGVudCBvbDpub3QoOmxhc3QtY2hpbGQpLC5jb250ZW50IHA6bm90KDpsYXN0LWNoaWxkKSwuY29udGVudCBwcmU6bm90KDpsYXN0LWNoaWxkKSwuY29udGVudCB0YWJsZTpub3QoOmxhc3QtY2hpbGQpLC5jb250ZW50IHVsOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxZW19LmNvbnRlbnQgaDEsLmNvbnRlbnQgaDIsLmNvbnRlbnQgaDMsLmNvbnRlbnQgaDQsLmNvbnRlbnQgaDUsLmNvbnRlbnQgaDZ7Y29sb3I6IzM2MzYzNjtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS4xMjV9LmNvbnRlbnQgaDF7Zm9udC1zaXplOjJlbTttYXJnaW4tYm90dG9tOi41ZW19LmNvbnRlbnQgaDE6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLXRvcDoxZW19LmNvbnRlbnQgaDJ7Zm9udC1zaXplOjEuNzVlbTttYXJnaW4tYm90dG9tOi41NzE0ZW19LmNvbnRlbnQgaDI6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLXRvcDoxLjE0MjhlbX0uY29udGVudCBoM3tmb250LXNpemU6MS41ZW07bWFyZ2luLWJvdHRvbTouNjY2NmVtfS5jb250ZW50IGgzOm5vdCg6Zmlyc3QtY2hpbGQpe21hcmdpbi10b3A6MS4zMzMzZW19LmNvbnRlbnQgaDR7Zm9udC1zaXplOjEuMjVlbTttYXJnaW4tYm90dG9tOi44ZW19LmNvbnRlbnQgaDV7Zm9udC1zaXplOjEuMTI1ZW07bWFyZ2luLWJvdHRvbTouODg4OGVtfS5jb250ZW50IGg2e2ZvbnQtc2l6ZToxZW07bWFyZ2luLWJvdHRvbToxZW19LmNvbnRlbnQgYmxvY2txdW90ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWxlZnQ6NXB4IHNvbGlkICNkYmRiZGI7cGFkZGluZzoxLjI1ZW0gMS41ZW19LmNvbnRlbnQgb2x7bGlzdC1zdHlsZTpkZWNpbWFsIG91dHNpZGV9LmNvbnRlbnQgb2wsLmNvbnRlbnQgdWx7bWFyZ2luLWxlZnQ6MmVtO21hcmdpbi10b3A6MWVtfS5jb250ZW50IHVse2xpc3Qtc3R5bGU6ZGlzYyBvdXRzaWRlfS5jb250ZW50IHVsIHVse2xpc3Qtc3R5bGUtdHlwZTpjaXJjbGU7bWFyZ2luLXRvcDouNWVtfS5jb250ZW50IHVsIHVsIHVse2xpc3Qtc3R5bGUtdHlwZTpzcXVhcmV9LmNvbnRlbnQgZGR7bWFyZ2luLWxlZnQ6MmVtfS5jb250ZW50IGZpZ3VyZXttYXJnaW4tbGVmdDoyZW07bWFyZ2luLXJpZ2h0OjJlbTt0ZXh0LWFsaWduOmNlbnRlcn0uY29udGVudCBmaWd1cmU6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLXRvcDoyZW19LmNvbnRlbnQgZmlndXJlOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToyZW19LmNvbnRlbnQgZmlndXJlIGltZ3tkaXNwbGF5OmlubGluZS1ibG9ja30uY29udGVudCBmaWd1cmUgZmlnY2FwdGlvbntmb250LXN0eWxlOml0YWxpY30uY29udGVudCBwcmV7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7b3ZlcmZsb3cteDphdXRvO3BhZGRpbmc6MS4yNWVtIDEuNWVtO3doaXRlLXNwYWNlOnByZTt3b3JkLXdyYXA6bm9ybWFsfS5jb250ZW50IHN1YiwuY29udGVudCBzdXB7Zm9udC1zaXplOjc1JX0uY29udGVudCB0YWJsZXt3aWR0aDoxMDAlfS5jb250ZW50IHRhYmxlIHRkLC5jb250ZW50IHRhYmxlIHRoe2JvcmRlcjoxcHggc29saWQgI2RiZGJkYjtib3JkZXItd2lkdGg6MCAwIDFweDtwYWRkaW5nOi41ZW0gLjc1ZW07dmVydGljYWwtYWxpZ246dG9wfS5jb250ZW50IHRhYmxlIHRoe2NvbG9yOiMzNjM2MzY7dGV4dC1hbGlnbjpsZWZ0fS5jb250ZW50IHRhYmxlIHRyOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNX0uY29udGVudCB0YWJsZSB0aGVhZCB0ZCwuY29udGVudCB0YWJsZSB0aGVhZCB0aHtib3JkZXItd2lkdGg6MCAwIDJweDtjb2xvcjojMzYzNjM2fS5jb250ZW50IHRhYmxlIHRmb290IHRkLC5jb250ZW50IHRhYmxlIHRmb290IHRoe2JvcmRlci13aWR0aDoycHggMCAwO2NvbG9yOiMzNjM2MzZ9LmNvbnRlbnQgdGFibGUgdGJvZHkgdHI6bGFzdC1jaGlsZCB0ZCwuY29udGVudCB0YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHRoe2JvcmRlci1ib3R0b20td2lkdGg6MH0uY29udGVudC5pcy1zbWFsbHtmb250LXNpemU6Ljc1cmVtfS5jb250ZW50LmlzLW1lZGl1bXtmb250LXNpemU6MS4yNXJlbX0uY29udGVudC5pcy1sYXJnZXtmb250LXNpemU6MS41cmVtfS5pbnB1dCwudGV4dGFyZWF7LW1vei1hcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjNweDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3g7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDtmb250LXNpemU6MXJlbTtoZWlnaHQ6Mi4yNWVtOy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtsaW5lLWhlaWdodDoxLjU7cGFkZGluZzpjYWxjKC4zNzVlbSAtIDFweCkgY2FsYyguNjI1ZW0gLSAxcHgpO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOnRvcDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNkYmRiZGI7Y29sb3I6IzM2MzYzNjstd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMCAxcHggMnB4IGhzbGEoMCwwJSw0JSwuMSk7Ym94LXNoYWRvdzppbnNldCAwIDFweCAycHggaHNsYSgwLDAlLDQlLC4xKTttYXgtd2lkdGg6MTAwJTt3aWR0aDoxMDAlfS5pbnB1dC5pcy1hY3RpdmUsLmlucHV0LmlzLWZvY3VzZWQsLmlucHV0OmFjdGl2ZSwuaW5wdXQ6Zm9jdXMsLnRleHRhcmVhLmlzLWFjdGl2ZSwudGV4dGFyZWEuaXMtZm9jdXNlZCwudGV4dGFyZWE6YWN0aXZlLC50ZXh0YXJlYTpmb2N1c3tvdXRsaW5lOm5vbmV9LmlucHV0W2Rpc2FibGVkXSwudGV4dGFyZWFbZGlzYWJsZWRde2N1cnNvcjpub3QtYWxsb3dlZH0uaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsLnRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoNTQsNTQsNTQsLjMpfS5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwudGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSg1NCw1NCw1NCwuMyl9LmlucHV0Oi1tb3otcGxhY2Vob2xkZXIsLnRleHRhcmVhOi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSg1NCw1NCw1NCwuMyl9LmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwudGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoNTQsNTQsNTQsLjMpfS5pbnB1dC5pcy1ob3ZlcmVkLC5pbnB1dDpob3ZlciwudGV4dGFyZWEuaXMtaG92ZXJlZCwudGV4dGFyZWE6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNiNWI1YjV9LmlucHV0LmlzLWFjdGl2ZSwuaW5wdXQuaXMtZm9jdXNlZCwuaW5wdXQ6YWN0aXZlLC5pbnB1dDpmb2N1cywudGV4dGFyZWEuaXMtYWN0aXZlLC50ZXh0YXJlYS5pcy1mb2N1c2VkLC50ZXh0YXJlYTphY3RpdmUsLnRleHRhcmVhOmZvY3Vze2JvcmRlci1jb2xvcjojMzI3M2RjOy13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1MCwxMTUsMjIwLC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1MCwxMTUsMjIwLC4yNSl9LmlucHV0W2Rpc2FibGVkXSwudGV4dGFyZWFbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItY29sb3I6I2Y1ZjVmNTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzdhN2E3YX0uaW5wdXRbZGlzYWJsZWRdOjotbW96LXBsYWNlaG9sZGVyLC50ZXh0YXJlYVtkaXNhYmxlZF06Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6aHNsYSgwLDAlLDQ4JSwuMyl9LmlucHV0W2Rpc2FibGVkXTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwudGV4dGFyZWFbZGlzYWJsZWRdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOmhzbGEoMCwwJSw0OCUsLjMpfS5pbnB1dFtkaXNhYmxlZF06LW1vei1wbGFjZWhvbGRlciwudGV4dGFyZWFbZGlzYWJsZWRdOi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6aHNsYSgwLDAlLDQ4JSwuMyl9LmlucHV0W2Rpc2FibGVkXTotbXMtaW5wdXQtcGxhY2Vob2xkZXIsLnRleHRhcmVhW2Rpc2FibGVkXTotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6aHNsYSgwLDAlLDQ4JSwuMyl9LmlucHV0W3R5cGU9c2VhcmNoXSwudGV4dGFyZWFbdHlwZT1zZWFyY2hde2JvcmRlci1yYWRpdXM6MjkwNDg2cHh9LmlucHV0W3JlYWRvbmx5XSwudGV4dGFyZWFbcmVhZG9ubHldey13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX0uaW5wdXQuaXMtd2hpdGUsLnRleHRhcmVhLmlzLXdoaXRle2JvcmRlci1jb2xvcjojZmZmfS5pbnB1dC5pcy13aGl0ZS5pcy1hY3RpdmUsLmlucHV0LmlzLXdoaXRlLmlzLWZvY3VzZWQsLmlucHV0LmlzLXdoaXRlOmFjdGl2ZSwuaW5wdXQuaXMtd2hpdGU6Zm9jdXMsLnRleHRhcmVhLmlzLXdoaXRlLmlzLWFjdGl2ZSwudGV4dGFyZWEuaXMtd2hpdGUuaXMtZm9jdXNlZCwudGV4dGFyZWEuaXMtd2hpdGU6YWN0aXZlLC50ZXh0YXJlYS5pcy13aGl0ZTpmb2N1c3std2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIGhzbGEoMCwwJSwxMDAlLC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDEwMCUsLjI1KX0uaW5wdXQuaXMtYmxhY2ssLnRleHRhcmVhLmlzLWJsYWNre2JvcmRlci1jb2xvcjojMGEwYTBhfS5pbnB1dC5pcy1ibGFjay5pcy1hY3RpdmUsLmlucHV0LmlzLWJsYWNrLmlzLWZvY3VzZWQsLmlucHV0LmlzLWJsYWNrOmFjdGl2ZSwuaW5wdXQuaXMtYmxhY2s6Zm9jdXMsLnRleHRhcmVhLmlzLWJsYWNrLmlzLWFjdGl2ZSwudGV4dGFyZWEuaXMtYmxhY2suaXMtZm9jdXNlZCwudGV4dGFyZWEuaXMtYmxhY2s6YWN0aXZlLC50ZXh0YXJlYS5pcy1ibGFjazpmb2N1c3std2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIGhzbGEoMCwwJSw0JSwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIGhzbGEoMCwwJSw0JSwuMjUpfS5pbnB1dC5pcy1saWdodCwudGV4dGFyZWEuaXMtbGlnaHR7Ym9yZGVyLWNvbG9yOiNmNWY1ZjV9LmlucHV0LmlzLWxpZ2h0LmlzLWFjdGl2ZSwuaW5wdXQuaXMtbGlnaHQuaXMtZm9jdXNlZCwuaW5wdXQuaXMtbGlnaHQ6YWN0aXZlLC5pbnB1dC5pcy1saWdodDpmb2N1cywudGV4dGFyZWEuaXMtbGlnaHQuaXMtYWN0aXZlLC50ZXh0YXJlYS5pcy1saWdodC5pcy1mb2N1c2VkLC50ZXh0YXJlYS5pcy1saWdodDphY3RpdmUsLnRleHRhcmVhLmlzLWxpZ2h0OmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDk2JSwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIGhzbGEoMCwwJSw5NiUsLjI1KX0uaW5wdXQuaXMtZGFyaywudGV4dGFyZWEuaXMtZGFya3tib3JkZXItY29sb3I6IzM2MzYzNn0uaW5wdXQuaXMtZGFyay5pcy1hY3RpdmUsLmlucHV0LmlzLWRhcmsuaXMtZm9jdXNlZCwuaW5wdXQuaXMtZGFyazphY3RpdmUsLmlucHV0LmlzLWRhcms6Zm9jdXMsLnRleHRhcmVhLmlzLWRhcmsuaXMtYWN0aXZlLC50ZXh0YXJlYS5pcy1kYXJrLmlzLWZvY3VzZWQsLnRleHRhcmVhLmlzLWRhcms6YWN0aXZlLC50ZXh0YXJlYS5pcy1kYXJrOmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1NCw1NCw1NCwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoNTQsNTQsNTQsLjI1KX0uaW5wdXQuaXMtcHJpbWFyeSwudGV4dGFyZWEuaXMtcHJpbWFyeXtib3JkZXItY29sb3I6IzAwZDFiMn0uaW5wdXQuaXMtcHJpbWFyeS5pcy1hY3RpdmUsLmlucHV0LmlzLXByaW1hcnkuaXMtZm9jdXNlZCwuaW5wdXQuaXMtcHJpbWFyeTphY3RpdmUsLmlucHV0LmlzLXByaW1hcnk6Zm9jdXMsLnRleHRhcmVhLmlzLXByaW1hcnkuaXMtYWN0aXZlLC50ZXh0YXJlYS5pcy1wcmltYXJ5LmlzLWZvY3VzZWQsLnRleHRhcmVhLmlzLXByaW1hcnk6YWN0aXZlLC50ZXh0YXJlYS5pcy1wcmltYXJ5OmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgwLDIwOSwxNzgsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDAsMjA5LDE3OCwuMjUpfS5pbnB1dC5pcy1saW5rLC50ZXh0YXJlYS5pcy1saW5re2JvcmRlci1jb2xvcjojMzI3M2RjfS5pbnB1dC5pcy1saW5rLmlzLWFjdGl2ZSwuaW5wdXQuaXMtbGluay5pcy1mb2N1c2VkLC5pbnB1dC5pcy1saW5rOmFjdGl2ZSwuaW5wdXQuaXMtbGluazpmb2N1cywudGV4dGFyZWEuaXMtbGluay5pcy1hY3RpdmUsLnRleHRhcmVhLmlzLWxpbmsuaXMtZm9jdXNlZCwudGV4dGFyZWEuaXMtbGluazphY3RpdmUsLnRleHRhcmVhLmlzLWxpbms6Zm9jdXN7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDUwLDExNSwyMjAsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDUwLDExNSwyMjAsLjI1KX0uaW5wdXQuaXMtaW5mbywudGV4dGFyZWEuaXMtaW5mb3tib3JkZXItY29sb3I6IzIwOWNlZX0uaW5wdXQuaXMtaW5mby5pcy1hY3RpdmUsLmlucHV0LmlzLWluZm8uaXMtZm9jdXNlZCwuaW5wdXQuaXMtaW5mbzphY3RpdmUsLmlucHV0LmlzLWluZm86Zm9jdXMsLnRleHRhcmVhLmlzLWluZm8uaXMtYWN0aXZlLC50ZXh0YXJlYS5pcy1pbmZvLmlzLWZvY3VzZWQsLnRleHRhcmVhLmlzLWluZm86YWN0aXZlLC50ZXh0YXJlYS5pcy1pbmZvOmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgzMiwxNTYsMjM4LC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgzMiwxNTYsMjM4LC4yNSl9LmlucHV0LmlzLXN1Y2Nlc3MsLnRleHRhcmVhLmlzLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiMyM2QxNjB9LmlucHV0LmlzLXN1Y2Nlc3MuaXMtYWN0aXZlLC5pbnB1dC5pcy1zdWNjZXNzLmlzLWZvY3VzZWQsLmlucHV0LmlzLXN1Y2Nlc3M6YWN0aXZlLC5pbnB1dC5pcy1zdWNjZXNzOmZvY3VzLC50ZXh0YXJlYS5pcy1zdWNjZXNzLmlzLWFjdGl2ZSwudGV4dGFyZWEuaXMtc3VjY2Vzcy5pcy1mb2N1c2VkLC50ZXh0YXJlYS5pcy1zdWNjZXNzOmFjdGl2ZSwudGV4dGFyZWEuaXMtc3VjY2Vzczpmb2N1c3std2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMzUsMjA5LDk2LC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgzNSwyMDksOTYsLjI1KX0uaW5wdXQuaXMtd2FybmluZywudGV4dGFyZWEuaXMtd2FybmluZ3tib3JkZXItY29sb3I6I2ZmZGQ1N30uaW5wdXQuaXMtd2FybmluZy5pcy1hY3RpdmUsLmlucHV0LmlzLXdhcm5pbmcuaXMtZm9jdXNlZCwuaW5wdXQuaXMtd2FybmluZzphY3RpdmUsLmlucHV0LmlzLXdhcm5pbmc6Zm9jdXMsLnRleHRhcmVhLmlzLXdhcm5pbmcuaXMtYWN0aXZlLC50ZXh0YXJlYS5pcy13YXJuaW5nLmlzLWZvY3VzZWQsLnRleHRhcmVhLmlzLXdhcm5pbmc6YWN0aXZlLC50ZXh0YXJlYS5pcy13YXJuaW5nOmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNTUsMjIxLDg3LC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNTUsMjIxLDg3LC4yNSl9LmlucHV0LmlzLWRhbmdlciwudGV4dGFyZWEuaXMtZGFuZ2Vye2JvcmRlci1jb2xvcjojZmYzODYwfS5pbnB1dC5pcy1kYW5nZXIuaXMtYWN0aXZlLC5pbnB1dC5pcy1kYW5nZXIuaXMtZm9jdXNlZCwuaW5wdXQuaXMtZGFuZ2VyOmFjdGl2ZSwuaW5wdXQuaXMtZGFuZ2VyOmZvY3VzLC50ZXh0YXJlYS5pcy1kYW5nZXIuaXMtYWN0aXZlLC50ZXh0YXJlYS5pcy1kYW5nZXIuaXMtZm9jdXNlZCwudGV4dGFyZWEuaXMtZGFuZ2VyOmFjdGl2ZSwudGV4dGFyZWEuaXMtZGFuZ2VyOmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNTUsNTYsOTYsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDI1NSw1Niw5NiwuMjUpfS5pbnB1dC5pcy1zbWFsbCwudGV4dGFyZWEuaXMtc21hbGx7Ym9yZGVyLXJhZGl1czoycHg7Zm9udC1zaXplOi43NXJlbX0uaW5wdXQuaXMtbWVkaXVtLC50ZXh0YXJlYS5pcy1tZWRpdW17Zm9udC1zaXplOjEuMjVyZW19LmlucHV0LmlzLWxhcmdlLC50ZXh0YXJlYS5pcy1sYXJnZXtmb250LXNpemU6MS41cmVtfS5pbnB1dC5pcy1mdWxsd2lkdGgsLnRleHRhcmVhLmlzLWZ1bGx3aWR0aHtkaXNwbGF5OmJsb2NrO3dpZHRoOjEwMCV9LmlucHV0LmlzLWlubGluZSwudGV4dGFyZWEuaXMtaW5saW5le2Rpc3BsYXk6aW5saW5lO3dpZHRoOmF1dG99LmlucHV0LmlzLXN0YXRpY3tiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7cGFkZGluZy1sZWZ0OjA7cGFkZGluZy1yaWdodDowfS50ZXh0YXJlYXtkaXNwbGF5OmJsb2NrO21heC13aWR0aDoxMDAlO21pbi13aWR0aDoxMDAlO3BhZGRpbmc6LjYyNWVtO3Jlc2l6ZTp2ZXJ0aWNhbH0udGV4dGFyZWE6bm90KFtyb3dzXSl7bWF4LWhlaWdodDo2MDBweDttaW4taGVpZ2h0OjEyMHB4fS50ZXh0YXJlYVtyb3dzXXtoZWlnaHQ6dW5zZXR9LnRleHRhcmVhLmhhcy1maXhlZC1zaXple3Jlc2l6ZTpub25lfS5jaGVja2JveCwucmFkaW97Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7bGluZS1oZWlnaHQ6MS4yNTtwb3NpdGlvbjpyZWxhdGl2ZX0uY2hlY2tib3ggaW5wdXQsLnJhZGlvIGlucHV0e2N1cnNvcjpwb2ludGVyfS5jaGVja2JveDpob3ZlciwucmFkaW86aG92ZXJ7Y29sb3I6IzM2MzYzNn0uY2hlY2tib3hbZGlzYWJsZWRdLC5yYWRpb1tkaXNhYmxlZF17Y29sb3I6IzdhN2E3YTtjdXJzb3I6bm90LWFsbG93ZWR9LnJhZGlvKy5yYWRpb3ttYXJnaW4tbGVmdDouNWVtfS5zZWxlY3R7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWF4LXdpZHRoOjEwMCU7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246dG9wfS5zZWxlY3Q6bm90KC5pcy1tdWx0aXBsZSl7aGVpZ2h0OjIuMjVlbX0uc2VsZWN0Om5vdCguaXMtbXVsdGlwbGUpOmFmdGVye2JvcmRlcjoxcHggc29saWQgIzMyNzNkYztib3JkZXItcmlnaHQ6MDtib3JkZXItdG9wOjA7Y29udGVudDpcXFwiIFxcXCI7ZGlzcGxheTpibG9jaztoZWlnaHQ6LjVlbTtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3dpZHRoOi41ZW07bWFyZ2luLXRvcDotLjM3NWVtO3JpZ2h0OjEuMTI1ZW07dG9wOjUwJTt6LWluZGV4OjR9LnNlbGVjdCBzZWxlY3R7LW1vei1hcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjNweDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3g7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDtmb250LXNpemU6MXJlbTtoZWlnaHQ6Mi4yNWVtOy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtsaW5lLWhlaWdodDoxLjU7cGFkZGluZzpjYWxjKC4zNzVlbSAtIDFweCkgY2FsYyguNjI1ZW0gLSAxcHgpO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOnRvcDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNkYmRiZGI7Y29sb3I6IzM2MzYzNjtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToxZW07bWF4LXdpZHRoOjEwMCU7b3V0bGluZTpub25lfS5zZWxlY3Qgc2VsZWN0LmlzLWFjdGl2ZSwuc2VsZWN0IHNlbGVjdC5pcy1mb2N1c2VkLC5zZWxlY3Qgc2VsZWN0OmFjdGl2ZSwuc2VsZWN0IHNlbGVjdDpmb2N1c3tvdXRsaW5lOm5vbmV9LnNlbGVjdCBzZWxlY3RbZGlzYWJsZWRde2N1cnNvcjpub3QtYWxsb3dlZH0uc2VsZWN0IHNlbGVjdDo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDU0LDU0LDU0LC4zKX0uc2VsZWN0IHNlbGVjdDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDU0LDU0LDU0LC4zKX0uc2VsZWN0IHNlbGVjdDotbW96LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoNTQsNTQsNTQsLjMpfS5zZWxlY3Qgc2VsZWN0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDU0LDU0LDU0LC4zKX0uc2VsZWN0IHNlbGVjdC5pcy1ob3ZlcmVkLC5zZWxlY3Qgc2VsZWN0OmhvdmVye2JvcmRlci1jb2xvcjojYjViNWI1fS5zZWxlY3Qgc2VsZWN0LmlzLWFjdGl2ZSwuc2VsZWN0IHNlbGVjdC5pcy1mb2N1c2VkLC5zZWxlY3Qgc2VsZWN0OmFjdGl2ZSwuc2VsZWN0IHNlbGVjdDpmb2N1c3tib3JkZXItY29sb3I6IzMyNzNkYzstd2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoNTAsMTE1LDIyMCwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoNTAsMTE1LDIyMCwuMjUpfS5zZWxlY3Qgc2VsZWN0W2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNmNWY1ZjU7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiM3YTdhN2F9LnNlbGVjdCBzZWxlY3RbZGlzYWJsZWRdOjotbW96LXBsYWNlaG9sZGVye2NvbG9yOmhzbGEoMCwwJSw0OCUsLjMpfS5zZWxlY3Qgc2VsZWN0W2Rpc2FibGVkXTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpoc2xhKDAsMCUsNDglLC4zKX0uc2VsZWN0IHNlbGVjdFtkaXNhYmxlZF06LW1vei1wbGFjZWhvbGRlcntjb2xvcjpoc2xhKDAsMCUsNDglLC4zKX0uc2VsZWN0IHNlbGVjdFtkaXNhYmxlZF06LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOmhzbGEoMCwwJSw0OCUsLjMpfS5zZWxlY3Qgc2VsZWN0OjotbXMtZXhwYW5ke2Rpc3BsYXk6bm9uZX0uc2VsZWN0IHNlbGVjdFtkaXNhYmxlZF06aG92ZXJ7Ym9yZGVyLWNvbG9yOiNmNWY1ZjV9LnNlbGVjdCBzZWxlY3Q6bm90KFttdWx0aXBsZV0pe3BhZGRpbmctcmlnaHQ6Mi41ZW19LnNlbGVjdCBzZWxlY3RbbXVsdGlwbGVde2hlaWdodDp1bnNldDtwYWRkaW5nOjB9LnNlbGVjdCBzZWxlY3RbbXVsdGlwbGVdIG9wdGlvbntwYWRkaW5nOi41ZW0gMWVtfS5zZWxlY3Q6aG92ZXI6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiMzNjM2MzZ9LnNlbGVjdC5pcy13aGl0ZSBzZWxlY3R7Ym9yZGVyLWNvbG9yOiNmZmZ9LnNlbGVjdC5pcy13aGl0ZSBzZWxlY3QuaXMtYWN0aXZlLC5zZWxlY3QuaXMtd2hpdGUgc2VsZWN0LmlzLWZvY3VzZWQsLnNlbGVjdC5pcy13aGl0ZSBzZWxlY3Q6YWN0aXZlLC5zZWxlY3QuaXMtd2hpdGUgc2VsZWN0OmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDEwMCUsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSBoc2xhKDAsMCUsMTAwJSwuMjUpfS5zZWxlY3QuaXMtYmxhY2sgc2VsZWN0e2JvcmRlci1jb2xvcjojMGEwYTBhfS5zZWxlY3QuaXMtYmxhY2sgc2VsZWN0LmlzLWFjdGl2ZSwuc2VsZWN0LmlzLWJsYWNrIHNlbGVjdC5pcy1mb2N1c2VkLC5zZWxlY3QuaXMtYmxhY2sgc2VsZWN0OmFjdGl2ZSwuc2VsZWN0LmlzLWJsYWNrIHNlbGVjdDpmb2N1c3std2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIGhzbGEoMCwwJSw0JSwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIGhzbGEoMCwwJSw0JSwuMjUpfS5zZWxlY3QuaXMtbGlnaHQgc2VsZWN0e2JvcmRlci1jb2xvcjojZjVmNWY1fS5zZWxlY3QuaXMtbGlnaHQgc2VsZWN0LmlzLWFjdGl2ZSwuc2VsZWN0LmlzLWxpZ2h0IHNlbGVjdC5pcy1mb2N1c2VkLC5zZWxlY3QuaXMtbGlnaHQgc2VsZWN0OmFjdGl2ZSwuc2VsZWN0LmlzLWxpZ2h0IHNlbGVjdDpmb2N1c3std2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIGhzbGEoMCwwJSw5NiUsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSBoc2xhKDAsMCUsOTYlLC4yNSl9LnNlbGVjdC5pcy1kYXJrIHNlbGVjdHtib3JkZXItY29sb3I6IzM2MzYzNn0uc2VsZWN0LmlzLWRhcmsgc2VsZWN0LmlzLWFjdGl2ZSwuc2VsZWN0LmlzLWRhcmsgc2VsZWN0LmlzLWZvY3VzZWQsLnNlbGVjdC5pcy1kYXJrIHNlbGVjdDphY3RpdmUsLnNlbGVjdC5pcy1kYXJrIHNlbGVjdDpmb2N1c3std2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoNTQsNTQsNTQsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDU0LDU0LDU0LC4yNSl9LnNlbGVjdC5pcy1wcmltYXJ5IHNlbGVjdHtib3JkZXItY29sb3I6IzAwZDFiMn0uc2VsZWN0LmlzLXByaW1hcnkgc2VsZWN0LmlzLWFjdGl2ZSwuc2VsZWN0LmlzLXByaW1hcnkgc2VsZWN0LmlzLWZvY3VzZWQsLnNlbGVjdC5pcy1wcmltYXJ5IHNlbGVjdDphY3RpdmUsLnNlbGVjdC5pcy1wcmltYXJ5IHNlbGVjdDpmb2N1c3std2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMCwyMDksMTc4LC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgwLDIwOSwxNzgsLjI1KX0uc2VsZWN0LmlzLWxpbmsgc2VsZWN0e2JvcmRlci1jb2xvcjojMzI3M2RjfS5zZWxlY3QuaXMtbGluayBzZWxlY3QuaXMtYWN0aXZlLC5zZWxlY3QuaXMtbGluayBzZWxlY3QuaXMtZm9jdXNlZCwuc2VsZWN0LmlzLWxpbmsgc2VsZWN0OmFjdGl2ZSwuc2VsZWN0LmlzLWxpbmsgc2VsZWN0OmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1MCwxMTUsMjIwLC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1MCwxMTUsMjIwLC4yNSl9LnNlbGVjdC5pcy1pbmZvIHNlbGVjdHtib3JkZXItY29sb3I6IzIwOWNlZX0uc2VsZWN0LmlzLWluZm8gc2VsZWN0LmlzLWFjdGl2ZSwuc2VsZWN0LmlzLWluZm8gc2VsZWN0LmlzLWZvY3VzZWQsLnNlbGVjdC5pcy1pbmZvIHNlbGVjdDphY3RpdmUsLnNlbGVjdC5pcy1pbmZvIHNlbGVjdDpmb2N1c3std2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMzIsMTU2LDIzOCwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMzIsMTU2LDIzOCwuMjUpfS5zZWxlY3QuaXMtc3VjY2VzcyBzZWxlY3R7Ym9yZGVyLWNvbG9yOiMyM2QxNjB9LnNlbGVjdC5pcy1zdWNjZXNzIHNlbGVjdC5pcy1hY3RpdmUsLnNlbGVjdC5pcy1zdWNjZXNzIHNlbGVjdC5pcy1mb2N1c2VkLC5zZWxlY3QuaXMtc3VjY2VzcyBzZWxlY3Q6YWN0aXZlLC5zZWxlY3QuaXMtc3VjY2VzcyBzZWxlY3Q6Zm9jdXN7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDM1LDIwOSw5NiwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMzUsMjA5LDk2LC4yNSl9LnNlbGVjdC5pcy13YXJuaW5nIHNlbGVjdHtib3JkZXItY29sb3I6I2ZmZGQ1N30uc2VsZWN0LmlzLXdhcm5pbmcgc2VsZWN0LmlzLWFjdGl2ZSwuc2VsZWN0LmlzLXdhcm5pbmcgc2VsZWN0LmlzLWZvY3VzZWQsLnNlbGVjdC5pcy13YXJuaW5nIHNlbGVjdDphY3RpdmUsLnNlbGVjdC5pcy13YXJuaW5nIHNlbGVjdDpmb2N1c3std2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMjU1LDIyMSw4NywuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMjU1LDIyMSw4NywuMjUpfS5zZWxlY3QuaXMtZGFuZ2VyIHNlbGVjdHtib3JkZXItY29sb3I6I2ZmMzg2MH0uc2VsZWN0LmlzLWRhbmdlciBzZWxlY3QuaXMtYWN0aXZlLC5zZWxlY3QuaXMtZGFuZ2VyIHNlbGVjdC5pcy1mb2N1c2VkLC5zZWxlY3QuaXMtZGFuZ2VyIHNlbGVjdDphY3RpdmUsLnNlbGVjdC5pcy1kYW5nZXIgc2VsZWN0OmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNTUsNTYsOTYsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDI1NSw1Niw5NiwuMjUpfS5zZWxlY3QuaXMtc21hbGx7Ym9yZGVyLXJhZGl1czoycHg7Zm9udC1zaXplOi43NXJlbX0uc2VsZWN0LmlzLW1lZGl1bXtmb250LXNpemU6MS4yNXJlbX0uc2VsZWN0LmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LnNlbGVjdC5pcy1kaXNhYmxlZDphZnRlcntib3JkZXItY29sb3I6IzdhN2E3YX0uc2VsZWN0LmlzLWZ1bGx3aWR0aCwuc2VsZWN0LmlzLWZ1bGx3aWR0aCBzZWxlY3R7d2lkdGg6MTAwJX0uc2VsZWN0LmlzLWxvYWRpbmc6YWZ0ZXJ7LXdlYmtpdC1hbmltYXRpb246c3BpbkFyb3VuZCAuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpzcGluQXJvdW5kIC41cyBpbmZpbml0ZSBsaW5lYXI7Ym9yZGVyOjJweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6MjkwNDg2cHg7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci10b3AtY29sb3I6dHJhbnNwYXJlbnQ7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrO2hlaWdodDoxZW07cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MWVtO21hcmdpbi10b3A6MDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDouNjI1ZW07dG9wOi42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpub25lO3RyYW5zZm9ybTpub25lfS5zZWxlY3QuaXMtbG9hZGluZy5pcy1zbWFsbDphZnRlcntmb250LXNpemU6Ljc1cmVtfS5zZWxlY3QuaXMtbG9hZGluZy5pcy1tZWRpdW06YWZ0ZXJ7Zm9udC1zaXplOjEuMjVyZW19LnNlbGVjdC5pcy1sb2FkaW5nLmlzLWxhcmdlOmFmdGVye2ZvbnQtc2l6ZToxLjVyZW19LmZpbGV7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtYm94LWFsaWduOnN0cmV0Y2g7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNoO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3Bvc2l0aW9uOnJlbGF0aXZlfS5maWxlLmlzLXdoaXRlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMwYTBhMGF9LmZpbGUuaXMtd2hpdGUuaXMtaG92ZXJlZCAuZmlsZS1jdGEsLmZpbGUuaXMtd2hpdGU6aG92ZXIgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzBhMGEwYX0uZmlsZS5pcy13aGl0ZS5pcy1mb2N1c2VkIC5maWxlLWN0YSwuZmlsZS5pcy13aGl0ZTpmb2N1cyAuZmlsZS1jdGF7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzowIDAgLjVlbSBoc2xhKDAsMCUsMTAwJSwuMjUpO2JveC1zaGFkb3c6MCAwIC41ZW0gaHNsYSgwLDAlLDEwMCUsLjI1KTtjb2xvcjojMGEwYTBhfS5maWxlLmlzLXdoaXRlLmlzLWFjdGl2ZSAuZmlsZS1jdGEsLmZpbGUuaXMtd2hpdGU6YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMwYTBhMGF9LmZpbGUuaXMtYmxhY2sgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy1ibGFjay5pcy1ob3ZlcmVkIC5maWxlLWN0YSwuZmlsZS5pcy1ibGFjazpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMDQwNDA0O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLWJsYWNrLmlzLWZvY3VzZWQgLmZpbGUtY3RhLC5maWxlLmlzLWJsYWNrOmZvY3VzIC5maWxlLWN0YXtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAuNWVtIGhzbGEoMCwwJSw0JSwuMjUpO2JveC1zaGFkb3c6MCAwIC41ZW0gaHNsYSgwLDAlLDQlLC4yNSk7Y29sb3I6I2ZmZn0uZmlsZS5pcy1ibGFjay5pcy1hY3RpdmUgLmZpbGUtY3RhLC5maWxlLmlzLWJsYWNrOmFjdGl2ZSAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMDAwO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLWxpZ2h0IC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMzNjM2MzZ9LmZpbGUuaXMtbGlnaHQuaXMtaG92ZXJlZCAuZmlsZS1jdGEsLmZpbGUuaXMtbGlnaHQ6aG92ZXIgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2VlZTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzM2MzYzNn0uZmlsZS5pcy1saWdodC5pcy1mb2N1c2VkIC5maWxlLWN0YSwuZmlsZS5pcy1saWdodDpmb2N1cyAuZmlsZS1jdGF7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzowIDAgLjVlbSBoc2xhKDAsMCUsOTYlLC4yNSk7Ym94LXNoYWRvdzowIDAgLjVlbSBoc2xhKDAsMCUsOTYlLC4yNSk7Y29sb3I6IzM2MzYzNn0uZmlsZS5pcy1saWdodC5pcy1hY3RpdmUgLmZpbGUtY3RhLC5maWxlLmlzLWxpZ2h0OmFjdGl2ZSAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojZThlOGU4O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMzYzNjM2fS5maWxlLmlzLWRhcmsgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2Y1ZjVmNX0uZmlsZS5pcy1kYXJrLmlzLWhvdmVyZWQgLmZpbGUtY3RhLC5maWxlLmlzLWRhcms6aG92ZXIgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzJmMmYyZjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2Y1ZjVmNX0uZmlsZS5pcy1kYXJrLmlzLWZvY3VzZWQgLmZpbGUtY3RhLC5maWxlLmlzLWRhcms6Zm9jdXMgLmZpbGUtY3Rhe2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6MCAwIC41ZW0gcmdiYSg1NCw1NCw1NCwuMjUpO2JveC1zaGFkb3c6MCAwIC41ZW0gcmdiYSg1NCw1NCw1NCwuMjUpO2NvbG9yOiNmNWY1ZjV9LmZpbGUuaXMtZGFyay5pcy1hY3RpdmUgLmZpbGUtY3RhLC5maWxlLmlzLWRhcms6YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiMyOTI5Mjk7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmNWY1ZjV9LmZpbGUuaXMtcHJpbWFyeSAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLXByaW1hcnkuaXMtaG92ZXJlZCAuZmlsZS1jdGEsLmZpbGUuaXMtcHJpbWFyeTpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMDBjNGE3O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLXByaW1hcnkuaXMtZm9jdXNlZCAuZmlsZS1jdGEsLmZpbGUuaXMtcHJpbWFyeTpmb2N1cyAuZmlsZS1jdGF7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDAsMjA5LDE3OCwuMjUpO2JveC1zaGFkb3c6MCAwIC41ZW0gcmdiYSgwLDIwOSwxNzgsLjI1KTtjb2xvcjojZmZmfS5maWxlLmlzLXByaW1hcnkuaXMtYWN0aXZlIC5maWxlLWN0YSwuZmlsZS5pcy1wcmltYXJ5OmFjdGl2ZSAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMDBiODljO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLWxpbmsgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzMyNzNkYztib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy1saW5rLmlzLWhvdmVyZWQgLmZpbGUtY3RhLC5maWxlLmlzLWxpbms6aG92ZXIgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzI3NmNkYTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy1saW5rLmlzLWZvY3VzZWQgLmZpbGUtY3RhLC5maWxlLmlzLWxpbms6Zm9jdXMgLmZpbGUtY3Rhe2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6MCAwIC41ZW0gcmdiYSg1MCwxMTUsMjIwLC4yNSk7Ym94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDUwLDExNSwyMjAsLjI1KTtjb2xvcjojZmZmfS5maWxlLmlzLWxpbmsuaXMtYWN0aXZlIC5maWxlLWN0YSwuZmlsZS5pcy1saW5rOmFjdGl2ZSAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMjM2NmQxO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLWluZm8gLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy1pbmZvLmlzLWhvdmVyZWQgLmZpbGUtY3RhLC5maWxlLmlzLWluZm86aG92ZXIgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzE0OTZlZDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy1pbmZvLmlzLWZvY3VzZWQgLmZpbGUtY3RhLC5maWxlLmlzLWluZm86Zm9jdXMgLmZpbGUtY3Rhe2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6MCAwIC41ZW0gcmdiYSgzMiwxNTYsMjM4LC4yNSk7Ym94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDMyLDE1NiwyMzgsLjI1KTtjb2xvcjojZmZmfS5maWxlLmlzLWluZm8uaXMtYWN0aXZlIC5maWxlLWN0YSwuZmlsZS5pcy1pbmZvOmFjdGl2ZSAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMTE4ZmU0O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLXN1Y2Nlc3MgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzIzZDE2MDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy1zdWNjZXNzLmlzLWhvdmVyZWQgLmZpbGUtY3RhLC5maWxlLmlzLXN1Y2Nlc3M6aG92ZXIgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzIyYzY1Yjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy1zdWNjZXNzLmlzLWZvY3VzZWQgLmZpbGUtY3RhLC5maWxlLmlzLXN1Y2Nlc3M6Zm9jdXMgLmZpbGUtY3Rhe2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6MCAwIC41ZW0gcmdiYSgzNSwyMDksOTYsLjI1KTtib3gtc2hhZG93OjAgMCAuNWVtIHJnYmEoMzUsMjA5LDk2LC4yNSk7Y29sb3I6I2ZmZn0uZmlsZS5pcy1zdWNjZXNzLmlzLWFjdGl2ZSAuZmlsZS1jdGEsLmZpbGUuaXMtc3VjY2VzczphY3RpdmUgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzIwYmM1Njtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy13YXJuaW5nIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTc7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5maWxlLmlzLXdhcm5pbmcuaXMtaG92ZXJlZCAuZmlsZS1jdGEsLmZpbGUuaXMtd2FybmluZzpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojZmZkYjRhO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uZmlsZS5pcy13YXJuaW5nLmlzLWZvY3VzZWQgLmZpbGUtY3RhLC5maWxlLmlzLXdhcm5pbmc6Zm9jdXMgLmZpbGUtY3Rhe2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6MCAwIC41ZW0gcmdiYSgyNTUsMjIxLDg3LC4yNSk7Ym94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDI1NSwyMjEsODcsLjI1KTtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uZmlsZS5pcy13YXJuaW5nLmlzLWFjdGl2ZSAuZmlsZS1jdGEsLmZpbGUuaXMtd2FybmluZzphY3RpdmUgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2ZmZDgzZDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6cmdiYSgwLDAsMCwuNyl9LmZpbGUuaXMtZGFuZ2VyIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtZGFuZ2VyLmlzLWhvdmVyZWQgLmZpbGUtY3RhLC5maWxlLmlzLWRhbmdlcjpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojZmYyYjU2O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLWRhbmdlci5pcy1mb2N1c2VkIC5maWxlLWN0YSwuZmlsZS5pcy1kYW5nZXI6Zm9jdXMgLmZpbGUtY3Rhe2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6MCAwIC41ZW0gcmdiYSgyNTUsNTYsOTYsLjI1KTtib3gtc2hhZG93OjAgMCAuNWVtIHJnYmEoMjU1LDU2LDk2LC4yNSk7Y29sb3I6I2ZmZn0uZmlsZS5pcy1kYW5nZXIuaXMtYWN0aXZlIC5maWxlLWN0YSwuZmlsZS5pcy1kYW5nZXI6YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjFmNGI7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtc21hbGx7Zm9udC1zaXplOi43NXJlbX0uZmlsZS5pcy1tZWRpdW17Zm9udC1zaXplOjEuMjVyZW19LmZpbGUuaXMtbWVkaXVtIC5maWxlLWljb24gLmZhe2ZvbnQtc2l6ZToyMXB4fS5maWxlLmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LmZpbGUuaXMtbGFyZ2UgLmZpbGUtaWNvbiAuZmF7Zm9udC1zaXplOjI4cHh9LmZpbGUuaGFzLW5hbWUgLmZpbGUtY3Rhe2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0uZmlsZS5oYXMtbmFtZSAuZmlsZS1uYW1le2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjB9LmZpbGUuaGFzLW5hbWUuaXMtZW1wdHkgLmZpbGUtY3Rhe2JvcmRlci1yYWRpdXM6M3B4fS5maWxlLmhhcy1uYW1lLmlzLWVtcHR5IC5maWxlLW5hbWV7ZGlzcGxheTpub25lfS5maWxlLmlzLWNlbnRlcmVkey13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmZpbGUuaXMtcmlnaHR7LXdlYmtpdC1ib3gtcGFjazplbmQ7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5maWxlLmlzLWJveGVkIC5maWxlLWN0YSwuZmlsZS5pcy1ib3hlZCAuZmlsZS1sYWJlbHstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0uZmlsZS5pcy1ib3hlZCAuZmlsZS1jdGF7aGVpZ2h0OmF1dG87cGFkZGluZzoxZW0gM2VtfS5maWxlLmlzLWJveGVkIC5maWxlLW5hbWV7Ym9yZGVyLXdpZHRoOjAgMXB4IDFweH0uZmlsZS5pcy1ib3hlZCAuZmlsZS1pY29ue2hlaWdodDoxLjVlbTt3aWR0aDoxLjVlbX0uZmlsZS5pcy1ib3hlZCAuZmlsZS1pY29uIC5mYXtmb250LXNpemU6MjFweH0uZmlsZS5pcy1ib3hlZC5pcy1zbWFsbCAuZmlsZS1pY29uIC5mYXtmb250LXNpemU6MTRweH0uZmlsZS5pcy1ib3hlZC5pcy1tZWRpdW0gLmZpbGUtaWNvbiAuZmF7Zm9udC1zaXplOjI4cHh9LmZpbGUuaXMtYm94ZWQuaXMtbGFyZ2UgLmZpbGUtaWNvbiAuZmF7Zm9udC1zaXplOjM1cHh9LmZpbGUuaXMtYm94ZWQuaGFzLW5hbWUgLmZpbGUtY3Rhe2JvcmRlci1yYWRpdXM6M3B4IDNweCAwIDB9LmZpbGUuaXMtYm94ZWQuaGFzLW5hbWUgLmZpbGUtbmFtZXtib3JkZXItcmFkaXVzOjAgMCAzcHggM3B4O2JvcmRlci13aWR0aDowIDFweCAxcHh9LmZpbGUuaXMtcmlnaHQgLmZpbGUtY3Rhe2JvcmRlci1yYWRpdXM6MCAzcHggM3B4IDB9LmZpbGUuaXMtcmlnaHQgLmZpbGUtbmFtZXtib3JkZXItcmFkaXVzOjNweCAwIDAgM3B4O2JvcmRlci13aWR0aDoxcHggMCAxcHggMXB4Oy13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6MDstbXMtZmxleC1vcmRlcjotMTtvcmRlcjotMX0uZmlsZS5pcy1mdWxsd2lkdGggLmZpbGUtbGFiZWx7d2lkdGg6MTAwJX0uZmlsZS5pcy1mdWxsd2lkdGggLmZpbGUtbmFtZXstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTttYXgtd2lkdGg6bm9uZX0uZmlsZS1sYWJlbHstd2Via2l0LWJveC1hbGlnbjpzdHJldGNoOy1tcy1mbGV4LWFsaWduOnN0cmV0Y2g7YWxpZ24taXRlbXM6c3RyZXRjaDtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmV9LmZpbGUtbGFiZWw6aG92ZXIgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2VlZTtjb2xvcjojMzYzNjM2fS5maWxlLWxhYmVsOmhvdmVyIC5maWxlLW5hbWV7Ym9yZGVyLWNvbG9yOiNkNWQ1ZDV9LmZpbGUtbGFiZWw6YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTg7Y29sb3I6IzM2MzYzNn0uZmlsZS1sYWJlbDphY3RpdmUgLmZpbGUtbmFtZXtib3JkZXItY29sb3I6I2NmY2ZjZn0uZmlsZS1pbnB1dHtoZWlnaHQ6LjAxZW07bGVmdDowO291dGxpbmU6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDt3aWR0aDouMDFlbX0uZmlsZS1jdGEsLmZpbGUtbmFtZXstbW96LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O2ZvbnQtc2l6ZToxcmVtO2hlaWdodDoyLjI1ZW07LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2xpbmUtaGVpZ2h0OjEuNTtwYWRkaW5nLWxlZnQ6Y2FsYyguNjI1ZW0gLSAxcHgpO3BhZGRpbmctcmlnaHQ6Y2FsYyguNjI1ZW0gLSAxcHgpO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOnRvcDtib3JkZXItY29sb3I6I2RiZGJkYjtib3JkZXItcmFkaXVzOjNweDtmb250LXNpemU6MWVtO3BhZGRpbmc6Y2FsYyguMzc1ZW0gLSAxcHgpIDFlbTt3aGl0ZS1zcGFjZTpub3dyYXB9LmZpbGUtY3RhLmlzLWFjdGl2ZSwuZmlsZS1jdGEuaXMtZm9jdXNlZCwuZmlsZS1jdGE6YWN0aXZlLC5maWxlLWN0YTpmb2N1cywuZmlsZS1uYW1lLmlzLWFjdGl2ZSwuZmlsZS1uYW1lLmlzLWZvY3VzZWQsLmZpbGUtbmFtZTphY3RpdmUsLmZpbGUtbmFtZTpmb2N1c3tvdXRsaW5lOm5vbmV9LmZpbGUtY3RhW2Rpc2FibGVkXSwuZmlsZS1uYW1lW2Rpc2FibGVkXXtjdXJzb3I6bm90LWFsbG93ZWR9LmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojNGE0YTRhfS5maWxlLW5hbWV7Ym9yZGVyLWNvbG9yOiNkYmRiZGI7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoxcHggMXB4IDFweCAwO2Rpc3BsYXk6YmxvY2s7bWF4LXdpZHRoOjE2ZW07b3ZlcmZsb3c6aGlkZGVuO3RleHQtYWxpZ246bGVmdDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS5maWxlLWljb257LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtoZWlnaHQ6MWVtOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luLXJpZ2h0Oi41ZW07d2lkdGg6MWVtfS5maWxlLWljb24gLmZhe2ZvbnQtc2l6ZToxNHB4fS5sYWJlbHtjb2xvcjojMzYzNjM2O2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjFyZW07Zm9udC13ZWlnaHQ6NzAwfS5sYWJlbDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206LjVlbX0ubGFiZWwuaXMtc21hbGx7Zm9udC1zaXplOi43NXJlbX0ubGFiZWwuaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtfS5sYWJlbC5pcy1sYXJnZXtmb250LXNpemU6MS41cmVtfS5oZWxwe2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOi43NXJlbTttYXJnaW4tdG9wOi4yNXJlbX0uaGVscC5pcy13aGl0ZXtjb2xvcjojZmZmfS5oZWxwLmlzLWJsYWNre2NvbG9yOiMwYTBhMGF9LmhlbHAuaXMtbGlnaHR7Y29sb3I6I2Y1ZjVmNX0uaGVscC5pcy1kYXJre2NvbG9yOiMzNjM2MzZ9LmhlbHAuaXMtcHJpbWFyeXtjb2xvcjojMDBkMWIyfS5oZWxwLmlzLWxpbmt7Y29sb3I6IzMyNzNkY30uaGVscC5pcy1pbmZve2NvbG9yOiMyMDljZWV9LmhlbHAuaXMtc3VjY2Vzc3tjb2xvcjojMjNkMTYwfS5oZWxwLmlzLXdhcm5pbmd7Y29sb3I6I2ZmZGQ1N30uaGVscC5pcy1kYW5nZXJ7Y29sb3I6I2ZmMzg2MH0uZmllbGQ6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOi43NXJlbX0uZmllbGQuaGFzLWFkZG9uc3tkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1yaWdodDotMXB4fS5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sOmZpcnN0LWNoaWxkIC5idXR0b24sLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2w6Zmlyc3QtY2hpbGQgLmlucHV0LC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sOmZpcnN0LWNoaWxkIC5zZWxlY3Qgc2VsZWN0e2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6M3B4O2JvcmRlci10b3AtbGVmdC1yYWRpdXM6M3B4fS5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sOmxhc3QtY2hpbGQgLmJ1dHRvbiwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbDpsYXN0LWNoaWxkIC5pbnB1dCwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbDpsYXN0LWNoaWxkIC5zZWxlY3Qgc2VsZWN0e2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjNweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czozcHh9LmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmJ1dHRvbiwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuaW5wdXQsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLnNlbGVjdCBzZWxlY3R7Ym9yZGVyLXJhZGl1czowfS5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5idXR0b24uaXMtaG92ZXJlZCwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuYnV0dG9uOmhvdmVyLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5pbnB1dC5pcy1ob3ZlcmVkLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5pbnB1dDpob3ZlciwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuc2VsZWN0IHNlbGVjdC5pcy1ob3ZlcmVkLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5zZWxlY3Qgc2VsZWN0OmhvdmVye3otaW5kZXg6Mn0uZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuYnV0dG9uLmlzLWFjdGl2ZSwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuYnV0dG9uLmlzLWZvY3VzZWQsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmJ1dHRvbjphY3RpdmUsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmJ1dHRvbjpmb2N1cywuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuaW5wdXQuaXMtYWN0aXZlLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5pbnB1dC5pcy1mb2N1c2VkLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5pbnB1dDphY3RpdmUsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmlucHV0OmZvY3VzLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5zZWxlY3Qgc2VsZWN0LmlzLWFjdGl2ZSwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuc2VsZWN0IHNlbGVjdC5pcy1mb2N1c2VkLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5zZWxlY3Qgc2VsZWN0OmFjdGl2ZSwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuc2VsZWN0IHNlbGVjdDpmb2N1c3t6LWluZGV4OjN9LmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmJ1dHRvbi5pcy1hY3RpdmU6aG92ZXIsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmJ1dHRvbi5pcy1mb2N1c2VkOmhvdmVyLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5idXR0b246YWN0aXZlOmhvdmVyLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5idXR0b246Zm9jdXM6aG92ZXIsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmlucHV0LmlzLWFjdGl2ZTpob3ZlciwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuaW5wdXQuaXMtZm9jdXNlZDpob3ZlciwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuaW5wdXQ6YWN0aXZlOmhvdmVyLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5pbnB1dDpmb2N1czpob3ZlciwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuc2VsZWN0IHNlbGVjdC5pcy1hY3RpdmU6aG92ZXIsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLnNlbGVjdCBzZWxlY3QuaXMtZm9jdXNlZDpob3ZlciwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuc2VsZWN0IHNlbGVjdDphY3RpdmU6aG92ZXIsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLnNlbGVjdCBzZWxlY3Q6Zm9jdXM6aG92ZXJ7ei1pbmRleDo0fS5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sLmlzLWV4cGFuZGVkey13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxfS5maWVsZC5oYXMtYWRkb25zLmhhcy1hZGRvbnMtY2VudGVyZWR7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uZmllbGQuaGFzLWFkZG9ucy5oYXMtYWRkb25zLXJpZ2h0ey13ZWJraXQtYm94LXBhY2s6ZW5kOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uZmllbGQuaGFzLWFkZG9ucy5oYXMtYWRkb25zLWZ1bGx3aWR0aCAuY29udHJvbHstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9LmZpZWxkLmlzLWdyb3VwZWR7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1wYWNrOnN0YXJ0Oy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LmZpZWxkLmlzLWdyb3VwZWQ+LmNvbnRyb2x7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowfS5maWVsZC5pcy1ncm91cGVkPi5jb250cm9sOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTowO21hcmdpbi1yaWdodDouNzVyZW19LmZpZWxkLmlzLWdyb3VwZWQ+LmNvbnRyb2wuaXMtZXhwYW5kZWR7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtbmVnYXRpdmU6MTtmbGV4LXNocmluazoxfS5maWVsZC5pcy1ncm91cGVkLmlzLWdyb3VwZWQtY2VudGVyZWR7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uZmllbGQuaXMtZ3JvdXBlZC5pcy1ncm91cGVkLXJpZ2h0ey13ZWJraXQtYm94LXBhY2s6ZW5kOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uZmllbGQuaXMtZ3JvdXBlZC5pcy1ncm91cGVkLW11bHRpbGluZXstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9LmZpZWxkLmlzLWdyb3VwZWQuaXMtZ3JvdXBlZC1tdWx0aWxpbmU+LmNvbnRyb2w6bGFzdC1jaGlsZCwuZmllbGQuaXMtZ3JvdXBlZC5pcy1ncm91cGVkLW11bHRpbGluZT4uY29udHJvbDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206Ljc1cmVtfS5maWVsZC5pcy1ncm91cGVkLmlzLWdyb3VwZWQtbXVsdGlsaW5lOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTotLjc1cmVtfS5maWVsZC5pcy1ncm91cGVkLmlzLWdyb3VwZWQtbXVsdGlsaW5lOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTowfUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5maWVsZC5pcy1ob3Jpem9udGFse2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9fS5maWVsZC1sYWJlbCAubGFiZWx7Zm9udC1zaXplOmluaGVyaXR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmZpZWxkLWxhYmVse21hcmdpbi1ib3R0b206LjVyZW19fUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5maWVsZC1sYWJlbHstbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTowO2ZsZXgtYmFzaXM6MDstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7bWFyZ2luLXJpZ2h0OjEuNXJlbTt0ZXh0LWFsaWduOnJpZ2h0fS5maWVsZC1sYWJlbC5pcy1zbWFsbHtmb250LXNpemU6Ljc1cmVtO3BhZGRpbmctdG9wOi4zNzVlbX0uZmllbGQtbGFiZWwuaXMtbm9ybWFse3BhZGRpbmctdG9wOi4zNzVlbX0uZmllbGQtbGFiZWwuaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtO3BhZGRpbmctdG9wOi4zNzVlbX0uZmllbGQtbGFiZWwuaXMtbGFyZ2V7Zm9udC1zaXplOjEuNXJlbTtwYWRkaW5nLXRvcDouMzc1ZW19fS5maWVsZC1ib2R5IC5maWVsZCAuZmllbGR7bWFyZ2luLWJvdHRvbTowfUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5maWVsZC1ib2R5e2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6MDtmbGV4LWJhc2lzOjA7LXdlYmtpdC1ib3gtZmxleDo1Oy1tcy1mbGV4LXBvc2l0aXZlOjU7ZmxleC1ncm93OjU7LW1zLWZsZXgtbmVnYXRpdmU6MTtmbGV4LXNocmluazoxfS5maWVsZC1ib2R5IC5maWVsZHttYXJnaW4tYm90dG9tOjB9LmZpZWxkLWJvZHk+LmZpZWxkey1tcy1mbGV4LW5lZ2F0aXZlOjE7ZmxleC1zaHJpbms6MX0uZmllbGQtYm9keT4uZmllbGQ6bm90KC5pcy1uYXJyb3cpey13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxfS5maWVsZC1ib2R5Pi5maWVsZDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1yaWdodDouNzVyZW19fS5jb250cm9se2ZvbnQtc2l6ZToxcmVtO3Bvc2l0aW9uOnJlbGF0aXZlO3RleHQtYWxpZ246bGVmdH0uY29udHJvbC5oYXMtaWNvbiAuaWNvbntjb2xvcjojZGJkYmRiO2hlaWdodDoyLjI1ZW07cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDt3aWR0aDoyLjI1ZW07ei1pbmRleDo0fS5jb250cm9sLmhhcy1pY29uIC5pbnB1dDpmb2N1cysuaWNvbntjb2xvcjojN2E3YTdhfS5jb250cm9sLmhhcy1pY29uIC5pbnB1dC5pcy1zbWFsbCsuaWNvbntmb250LXNpemU6Ljc1cmVtfS5jb250cm9sLmhhcy1pY29uIC5pbnB1dC5pcy1tZWRpdW0rLmljb257Zm9udC1zaXplOjEuMjVyZW19LmNvbnRyb2wuaGFzLWljb24gLmlucHV0LmlzLWxhcmdlKy5pY29ue2ZvbnQtc2l6ZToxLjVyZW19LmNvbnRyb2wuaGFzLWljb246bm90KC5oYXMtaWNvbi1yaWdodCkgLmljb257bGVmdDowfS5jb250cm9sLmhhcy1pY29uOm5vdCguaGFzLWljb24tcmlnaHQpIC5pbnB1dHtwYWRkaW5nLWxlZnQ6Mi4yNWVtfS5jb250cm9sLmhhcy1pY29uLmhhcy1pY29uLXJpZ2h0IC5pY29ue3JpZ2h0OjB9LmNvbnRyb2wuaGFzLWljb24uaGFzLWljb24tcmlnaHQgLmlucHV0e3BhZGRpbmctcmlnaHQ6Mi4yNWVtfS5jb250cm9sLmhhcy1pY29ucy1sZWZ0IC5pbnB1dDpmb2N1c34uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtbGVmdCAuc2VsZWN0OmZvY3Vzfi5pY29uLC5jb250cm9sLmhhcy1pY29ucy1yaWdodCAuaW5wdXQ6Zm9jdXN+Lmljb24sLmNvbnRyb2wuaGFzLWljb25zLXJpZ2h0IC5zZWxlY3Q6Zm9jdXN+Lmljb257Y29sb3I6IzdhN2E3YX0uY29udHJvbC5oYXMtaWNvbnMtbGVmdCAuaW5wdXQuaXMtc21hbGx+Lmljb24sLmNvbnRyb2wuaGFzLWljb25zLWxlZnQgLnNlbGVjdC5pcy1zbWFsbH4uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtcmlnaHQgLmlucHV0LmlzLXNtYWxsfi5pY29uLC5jb250cm9sLmhhcy1pY29ucy1yaWdodCAuc2VsZWN0LmlzLXNtYWxsfi5pY29ue2ZvbnQtc2l6ZTouNzVyZW19LmNvbnRyb2wuaGFzLWljb25zLWxlZnQgLmlucHV0LmlzLW1lZGl1bX4uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtbGVmdCAuc2VsZWN0LmlzLW1lZGl1bX4uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtcmlnaHQgLmlucHV0LmlzLW1lZGl1bX4uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtcmlnaHQgLnNlbGVjdC5pcy1tZWRpdW1+Lmljb257Zm9udC1zaXplOjEuMjVyZW19LmNvbnRyb2wuaGFzLWljb25zLWxlZnQgLmlucHV0LmlzLWxhcmdlfi5pY29uLC5jb250cm9sLmhhcy1pY29ucy1sZWZ0IC5zZWxlY3QuaXMtbGFyZ2V+Lmljb24sLmNvbnRyb2wuaGFzLWljb25zLXJpZ2h0IC5pbnB1dC5pcy1sYXJnZX4uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtcmlnaHQgLnNlbGVjdC5pcy1sYXJnZX4uaWNvbntmb250LXNpemU6MS41cmVtfS5jb250cm9sLmhhcy1pY29ucy1sZWZ0IC5pY29uLC5jb250cm9sLmhhcy1pY29ucy1yaWdodCAuaWNvbntjb2xvcjojZGJkYmRiO2hlaWdodDoyLjI1ZW07cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDt3aWR0aDoyLjI1ZW07ei1pbmRleDo0fS5jb250cm9sLmhhcy1pY29ucy1sZWZ0IC5pbnB1dCwuY29udHJvbC5oYXMtaWNvbnMtbGVmdCAuc2VsZWN0IHNlbGVjdHtwYWRkaW5nLWxlZnQ6Mi4yNWVtfS5jb250cm9sLmhhcy1pY29ucy1sZWZ0IC5pY29uLmlzLWxlZnR7bGVmdDowfS5jb250cm9sLmhhcy1pY29ucy1yaWdodCAuaW5wdXQsLmNvbnRyb2wuaGFzLWljb25zLXJpZ2h0IC5zZWxlY3Qgc2VsZWN0e3BhZGRpbmctcmlnaHQ6Mi4yNWVtfS5jb250cm9sLmhhcy1pY29ucy1yaWdodCAuaWNvbi5pcy1yaWdodHtyaWdodDowfS5jb250cm9sLmlzLWxvYWRpbmc6YWZ0ZXJ7LXdlYmtpdC1hbmltYXRpb246c3BpbkFyb3VuZCAuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpzcGluQXJvdW5kIC41cyBpbmZpbml0ZSBsaW5lYXI7Ym9yZGVyOjJweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6MjkwNDg2cHg7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci10b3AtY29sb3I6dHJhbnNwYXJlbnQ7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrO2hlaWdodDoxZW07cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MWVtO3Bvc2l0aW9uOmFic29sdXRlIWltcG9ydGFudDtyaWdodDouNjI1ZW07dG9wOi42MjVlbX0uY29udHJvbC5pcy1sb2FkaW5nLmlzLXNtYWxsOmFmdGVye2ZvbnQtc2l6ZTouNzVyZW19LmNvbnRyb2wuaXMtbG9hZGluZy5pcy1tZWRpdW06YWZ0ZXJ7Zm9udC1zaXplOjEuMjVyZW19LmNvbnRyb2wuaXMtbG9hZGluZy5pcy1sYXJnZTphZnRlcntmb250LXNpemU6MS41cmVtfS5pY29uey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtYm94O2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6aW5saW5lLWZsZXg7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6MS41cmVtO3dpZHRoOjEuNXJlbX0uaWNvbi5pcy1zbWFsbHtoZWlnaHQ6MXJlbTt3aWR0aDoxcmVtfS5pY29uLmlzLW1lZGl1bXtoZWlnaHQ6MnJlbTt3aWR0aDoycmVtfS5pY29uLmlzLWxhcmdle2hlaWdodDozcmVtO3dpZHRoOjNyZW19LmltYWdle2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmV9LmltYWdlIGltZ3tkaXNwbGF5OmJsb2NrO2hlaWdodDphdXRvO3dpZHRoOjEwMCV9LmltYWdlLmlzLTFieTEgaW1nLC5pbWFnZS5pcy0yYnkxIGltZywuaW1hZ2UuaXMtM2J5MiBpbWcsLmltYWdlLmlzLTRieTMgaW1nLC5pbWFnZS5pcy0xNmJ5OSBpbWcsLmltYWdlLmlzLXNxdWFyZSBpbWd7Ym90dG9tOjA7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJX0uaW1hZ2UuaXMtMWJ5MSwuaW1hZ2UuaXMtc3F1YXJle3BhZGRpbmctdG9wOjEwMCV9LmltYWdlLmlzLTRieTN7cGFkZGluZy10b3A6NzUlfS5pbWFnZS5pcy0zYnkye3BhZGRpbmctdG9wOjY2LjY2NjYlfS5pbWFnZS5pcy0xNmJ5OXtwYWRkaW5nLXRvcDo1Ni4yNSV9LmltYWdlLmlzLTJieTF7cGFkZGluZy10b3A6NTAlfS5pbWFnZS5pcy0xNngxNntoZWlnaHQ6MTZweDt3aWR0aDoxNnB4fS5pbWFnZS5pcy0yNHgyNHtoZWlnaHQ6MjRweDt3aWR0aDoyNHB4fS5pbWFnZS5pcy0zMngzMntoZWlnaHQ6MzJweDt3aWR0aDozMnB4fS5pbWFnZS5pcy00OHg0OHtoZWlnaHQ6NDhweDt3aWR0aDo0OHB4fS5pbWFnZS5pcy02NHg2NHtoZWlnaHQ6NjRweDt3aWR0aDo2NHB4fS5pbWFnZS5pcy05Nng5NntoZWlnaHQ6OTZweDt3aWR0aDo5NnB4fS5pbWFnZS5pcy0xMjh4MTI4e2hlaWdodDoxMjhweDt3aWR0aDoxMjhweH0ubm90aWZpY2F0aW9ue2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItcmFkaXVzOjNweDtwYWRkaW5nOjEuMjVyZW0gMi41cmVtIDEuMjVyZW0gMS41cmVtO3Bvc2l0aW9uOnJlbGF0aXZlfS5ub3RpZmljYXRpb246bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEuNXJlbX0ubm90aWZpY2F0aW9uIGE6bm90KC5idXR0b24pe2NvbG9yOmN1cnJlbnRDb2xvcjt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5ub3RpZmljYXRpb24gc3Ryb25ne2NvbG9yOmN1cnJlbnRDb2xvcn0ubm90aWZpY2F0aW9uIGNvZGUsLm5vdGlmaWNhdGlvbiBwcmV7YmFja2dyb3VuZDojZmZmfS5ub3RpZmljYXRpb24gcHJlIGNvZGV7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0ubm90aWZpY2F0aW9uPi5kZWxldGV7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6LjVlbTt0b3A6LjVlbX0ubm90aWZpY2F0aW9uIC5jb250ZW50LC5ub3RpZmljYXRpb24gLnN1YnRpdGxlLC5ub3RpZmljYXRpb24gLnRpdGxle2NvbG9yOmN1cnJlbnRDb2xvcn0ubm90aWZpY2F0aW9uLmlzLXdoaXRle2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMGEwYTBhfS5ub3RpZmljYXRpb24uaXMtYmxhY2t7YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2NvbG9yOiNmZmZ9Lm5vdGlmaWNhdGlvbi5pcy1saWdodHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn0ubm90aWZpY2F0aW9uLmlzLWRhcmt7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2NvbG9yOiNmNWY1ZjV9Lm5vdGlmaWNhdGlvbi5pcy1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzAwZDFiMjtjb2xvcjojZmZmfS5ub3RpZmljYXRpb24uaXMtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZn0ubm90aWZpY2F0aW9uLmlzLWluZm97YmFja2dyb3VuZC1jb2xvcjojMjA5Y2VlO2NvbG9yOiNmZmZ9Lm5vdGlmaWNhdGlvbi5pcy1zdWNjZXNze2JhY2tncm91bmQtY29sb3I6IzIzZDE2MDtjb2xvcjojZmZmfS5ub3RpZmljYXRpb24uaXMtd2FybmluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTc7Y29sb3I6cmdiYSgwLDAsMCwuNyl9Lm5vdGlmaWNhdGlvbi5pcy1kYW5nZXJ7YmFja2dyb3VuZC1jb2xvcjojZmYzODYwO2NvbG9yOiNmZmZ9LnByb2dyZXNzey1tb3otYXBwZWFyYW5jZTpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MjkwNDg2cHg7ZGlzcGxheTpibG9jaztoZWlnaHQ6MXJlbTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowO3dpZHRoOjEwMCV9LnByb2dyZXNzOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxLjVyZW19LnByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNkYmRiZGJ9LnByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVle2JhY2tncm91bmQtY29sb3I6IzRhNGE0YX0ucHJvZ3Jlc3M6Oi1tb3otcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQtY29sb3I6IzRhNGE0YX0ucHJvZ3Jlc3M6Oi1tcy1maWxse2JhY2tncm91bmQtY29sb3I6IzRhNGE0YTtib3JkZXI6bm9uZX0ucHJvZ3Jlc3MuaXMtd2hpdGU6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5wcm9ncmVzcy5pcy13aGl0ZTo6LW1vei1wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5wcm9ncmVzcy5pcy13aGl0ZTo6LW1zLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5wcm9ncmVzcy5pcy1ibGFjazo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGF9LnByb2dyZXNzLmlzLWJsYWNrOjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGF9LnByb2dyZXNzLmlzLWJsYWNrOjotbXMtZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGF9LnByb2dyZXNzLmlzLWxpZ2h0Ojotd2Via2l0LXByb2dyZXNzLXZhbHVle2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNX0ucHJvZ3Jlc3MuaXMtbGlnaHQ6Oi1tb3otcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNX0ucHJvZ3Jlc3MuaXMtbGlnaHQ6Oi1tcy1maWxse2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNX0ucHJvZ3Jlc3MuaXMtZGFyazo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzZ9LnByb2dyZXNzLmlzLWRhcms6Oi1tb3otcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQtY29sb3I6IzM2MzYzNn0ucHJvZ3Jlc3MuaXMtZGFyazo6LW1zLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2fS5wcm9ncmVzcy5pcy1wcmltYXJ5Ojotd2Via2l0LXByb2dyZXNzLXZhbHVle2JhY2tncm91bmQtY29sb3I6IzAwZDFiMn0ucHJvZ3Jlc3MuaXMtcHJpbWFyeTo6LW1vei1wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyfS5wcm9ncmVzcy5pcy1wcmltYXJ5OjotbXMtZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjJ9LnByb2dyZXNzLmlzLWxpbms6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjfS5wcm9ncmVzcy5pcy1saW5rOjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGN9LnByb2dyZXNzLmlzLWxpbms6Oi1tcy1maWxse2JhY2tncm91bmQtY29sb3I6IzMyNzNkY30ucHJvZ3Jlc3MuaXMtaW5mbzo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiMyMDljZWV9LnByb2dyZXNzLmlzLWluZm86Oi1tb3otcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQtY29sb3I6IzIwOWNlZX0ucHJvZ3Jlc3MuaXMtaW5mbzo6LW1zLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojMjA5Y2VlfS5wcm9ncmVzcy5pcy1zdWNjZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVle2JhY2tncm91bmQtY29sb3I6IzIzZDE2MH0ucHJvZ3Jlc3MuaXMtc3VjY2Vzczo6LW1vei1wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwfS5wcm9ncmVzcy5pcy1zdWNjZXNzOjotbXMtZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjB9LnByb2dyZXNzLmlzLXdhcm5pbmc6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3fS5wcm9ncmVzcy5pcy13YXJuaW5nOjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTd9LnByb2dyZXNzLmlzLXdhcm5pbmc6Oi1tcy1maWxse2JhY2tncm91bmQtY29sb3I6I2ZmZGQ1N30ucHJvZ3Jlc3MuaXMtZGFuZ2VyOjotd2Via2l0LXByb2dyZXNzLXZhbHVle2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MH0ucHJvZ3Jlc3MuaXMtZGFuZ2VyOjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjB9LnByb2dyZXNzLmlzLWRhbmdlcjo6LW1zLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojZmYzODYwfS5wcm9ncmVzcy5pcy1zbWFsbHtoZWlnaHQ6Ljc1cmVtfS5wcm9ncmVzcy5pcy1tZWRpdW17aGVpZ2h0OjEuMjVyZW19LnByb2dyZXNzLmlzLWxhcmdle2hlaWdodDoxLjVyZW19LnRhYmxle2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMzYzNjM2O21hcmdpbi1ib3R0b206MS41cmVtfS50YWJsZSB0ZCwudGFibGUgdGh7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci13aWR0aDowIDAgMXB4O3BhZGRpbmc6LjVlbSAuNzVlbTt2ZXJ0aWNhbC1hbGlnbjp0b3B9LnRhYmxlIHRkLmlzLXdoaXRlLC50YWJsZSB0aC5pcy13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX0udGFibGUgdGQuaXMtYmxhY2ssLnRhYmxlIHRoLmlzLWJsYWNre2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtib3JkZXItY29sb3I6IzBhMGEwYTtjb2xvcjojZmZmfS50YWJsZSB0ZC5pcy1saWdodCwudGFibGUgdGguaXMtbGlnaHR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1jb2xvcjojZjVmNWY1O2NvbG9yOiMzNjM2MzZ9LnRhYmxlIHRkLmlzLWRhcmssLnRhYmxlIHRoLmlzLWRhcmt7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2JvcmRlci1jb2xvcjojMzYzNjM2O2NvbG9yOiNmNWY1ZjV9LnRhYmxlIHRkLmlzLXByaW1hcnksLnRhYmxlIHRoLmlzLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2JvcmRlci1jb2xvcjojMDBkMWIyO2NvbG9yOiNmZmZ9LnRhYmxlIHRkLmlzLWxpbmssLnRhYmxlIHRoLmlzLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2JvcmRlci1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9LnRhYmxlIHRkLmlzLWluZm8sLnRhYmxlIHRoLmlzLWluZm97YmFja2dyb3VuZC1jb2xvcjojMjA5Y2VlO2JvcmRlci1jb2xvcjojMjA5Y2VlO2NvbG9yOiNmZmZ9LnRhYmxlIHRkLmlzLXN1Y2Nlc3MsLnRhYmxlIHRoLmlzLXN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2JvcmRlci1jb2xvcjojMjNkMTYwO2NvbG9yOiNmZmZ9LnRhYmxlIHRkLmlzLXdhcm5pbmcsLnRhYmxlIHRoLmlzLXdhcm5pbmd7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3O2JvcmRlci1jb2xvcjojZmZkZDU3O2NvbG9yOnJnYmEoMCwwLDAsLjcpfS50YWJsZSB0ZC5pcy1kYW5nZXIsLnRhYmxlIHRoLmlzLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjA7Ym9yZGVyLWNvbG9yOiNmZjM4NjA7Y29sb3I6I2ZmZn0udGFibGUgdGQuaXMtbmFycm93LC50YWJsZSB0aC5pcy1uYXJyb3d7d2hpdGUtc3BhY2U6bm93cmFwO3dpZHRoOjElfS50YWJsZSB0ZC5pcy1zZWxlY3RlZCwudGFibGUgdGguaXMtc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2NvbG9yOiNmZmZ9LnRhYmxlIHRkLmlzLXNlbGVjdGVkIGEsLnRhYmxlIHRkLmlzLXNlbGVjdGVkIHN0cm9uZywudGFibGUgdGguaXMtc2VsZWN0ZWQgYSwudGFibGUgdGguaXMtc2VsZWN0ZWQgc3Ryb25ne2NvbG9yOmN1cnJlbnRDb2xvcn0udGFibGUgdGh7Y29sb3I6IzM2MzYzNjt0ZXh0LWFsaWduOmxlZnR9LnRhYmxlIHRyLmlzLXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6IzAwZDFiMjtjb2xvcjojZmZmfS50YWJsZSB0ci5pcy1zZWxlY3RlZCBhLC50YWJsZSB0ci5pcy1zZWxlY3RlZCBzdHJvbmd7Y29sb3I6Y3VycmVudENvbG9yfS50YWJsZSB0ci5pcy1zZWxlY3RlZCB0ZCwudGFibGUgdHIuaXMtc2VsZWN0ZWQgdGh7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6Y3VycmVudENvbG9yfS50YWJsZSB0aGVhZCB0ZCwudGFibGUgdGhlYWQgdGh7Ym9yZGVyLXdpZHRoOjAgMCAycHg7Y29sb3I6IzM2MzYzNn0udGFibGUgdGZvb3QgdGQsLnRhYmxlIHRmb290IHRoe2JvcmRlci13aWR0aDoycHggMCAwO2NvbG9yOiMzNjM2MzZ9LnRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQgdGQsLnRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQgdGh7Ym9yZGVyLWJvdHRvbS13aWR0aDowfS50YWJsZS5pcy1ib3JkZXJlZCB0ZCwudGFibGUuaXMtYm9yZGVyZWQgdGh7Ym9yZGVyLXdpZHRoOjFweH0udGFibGUuaXMtYm9yZGVyZWQgdHI6bGFzdC1jaGlsZCB0ZCwudGFibGUuaXMtYm9yZGVyZWQgdHI6bGFzdC1jaGlsZCB0aHtib3JkZXItYm90dG9tLXdpZHRoOjFweH0udGFibGUuaXMtZnVsbHdpZHRoe3dpZHRoOjEwMCV9LnRhYmxlLmlzLWhvdmVyYWJsZSB0Ym9keSB0cjpub3QoLmlzLXNlbGVjdGVkKTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9LnRhYmxlLmlzLWhvdmVyYWJsZS5pcy1zdHJpcGVkIHRib2R5IHRyOm5vdCguaXMtc2VsZWN0ZWQpOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNX0udGFibGUuaXMtbmFycm93IHRkLC50YWJsZS5pcy1uYXJyb3cgdGh7cGFkZGluZzouMjVlbSAuNWVtfS50YWJsZS5pcy1zdHJpcGVkIHRib2R5IHRyOm5vdCguaXMtc2VsZWN0ZWQpOm50aC1jaGlsZCgybil7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS50YWdzey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0udGFncyAudGFne21hcmdpbi1ib3R0b206LjVyZW19LnRhZ3MgLnRhZzpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1yaWdodDouNXJlbX0udGFnczpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206LS41cmVtfS50YWdzOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxcmVtfS50YWdzLmhhcy1hZGRvbnMgLnRhZ3ttYXJnaW4tcmlnaHQ6MH0udGFncy5oYXMtYWRkb25zIC50YWc6bm90KDpmaXJzdC1jaGlsZCl7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MH0udGFncy5oYXMtYWRkb25zIC50YWc6bm90KDpsYXN0LWNoaWxkKXtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9LnRhZ3MuaXMtY2VudGVyZWR7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0udGFncy5pcy1jZW50ZXJlZCAudGFne21hcmdpbi1yaWdodDouMjVyZW07bWFyZ2luLWxlZnQ6LjI1cmVtfS50YWdzLmlzLXJpZ2h0ey13ZWJraXQtYm94LXBhY2s6ZW5kOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0udGFncy5pcy1yaWdodCAudGFnOm5vdCg6Zmlyc3QtY2hpbGQpe21hcmdpbi1sZWZ0Oi41cmVtfS50YWdzLmlzLXJpZ2h0IC50YWc6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tcmlnaHQ6MH0udGFnOm5vdChib2R5KXstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLXJhZGl1czozcHg7Y29sb3I6IzRhNGE0YTtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O2ZvbnQtc2l6ZTouNzVyZW07aGVpZ2h0OjJlbTstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2xpbmUtaGVpZ2h0OjEuNTtwYWRkaW5nLWxlZnQ6Ljc1ZW07cGFkZGluZy1yaWdodDouNzVlbTt3aGl0ZS1zcGFjZTpub3dyYXB9LnRhZzpub3QoYm9keSkgLmRlbGV0ZXttYXJnaW4tbGVmdDouMjVlbTttYXJnaW4tcmlnaHQ6LS4zNzVlbX0udGFnOm5vdChib2R5KS5pcy13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX0udGFnOm5vdChib2R5KS5pcy1ibGFja3tiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGE7Y29sb3I6I2ZmZn0udGFnOm5vdChib2R5KS5pcy1saWdodHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn0udGFnOm5vdChib2R5KS5pcy1kYXJre2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fS50YWc6bm90KGJvZHkpLmlzLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2NvbG9yOiNmZmZ9LnRhZzpub3QoYm9keSkuaXMtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZn0udGFnOm5vdChib2R5KS5pcy1pbmZve2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtjb2xvcjojZmZmfS50YWc6bm90KGJvZHkpLmlzLXN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2NvbG9yOiNmZmZ9LnRhZzpub3QoYm9keSkuaXMtd2FybmluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTc7Y29sb3I6cmdiYSgwLDAsMCwuNyl9LnRhZzpub3QoYm9keSkuaXMtZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MDtjb2xvcjojZmZmfS50YWc6bm90KGJvZHkpLmlzLW1lZGl1bXtmb250LXNpemU6MXJlbX0udGFnOm5vdChib2R5KS5pcy1sYXJnZXtmb250LXNpemU6MS4yNXJlbX0udGFnOm5vdChib2R5KSAuaWNvbjpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1sZWZ0Oi0uMzc1ZW07bWFyZ2luLXJpZ2h0Oi4xODc1ZW19LnRhZzpub3QoYm9keSkgLmljb246bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKXttYXJnaW4tbGVmdDouMTg3NWVtO21hcmdpbi1yaWdodDotLjM3NWVtfS50YWc6bm90KGJvZHkpIC5pY29uOmZpcnN0LWNoaWxkOmxhc3QtY2hpbGR7bWFyZ2luLWxlZnQ6LS4zNzVlbTttYXJnaW4tcmlnaHQ6LS4zNzVlbX0udGFnOm5vdChib2R5KS5pcy1kZWxldGV7bWFyZ2luLWxlZnQ6MXB4O3BhZGRpbmc6MDtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoyZW19LnRhZzpub3QoYm9keSkuaXMtZGVsZXRlOmFmdGVyLC50YWc6bm90KGJvZHkpLmlzLWRlbGV0ZTpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrO2xlZnQ6NTAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcn0udGFnOm5vdChib2R5KS5pcy1kZWxldGU6YmVmb3Jle2hlaWdodDoxcHg7d2lkdGg6NTAlfS50YWc6bm90KGJvZHkpLmlzLWRlbGV0ZTphZnRlcntoZWlnaHQ6NTAlO3dpZHRoOjFweH0udGFnOm5vdChib2R5KS5pcy1kZWxldGU6Zm9jdXMsLnRhZzpub3QoYm9keSkuaXMtZGVsZXRlOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2U4ZThlOH0udGFnOm5vdChib2R5KS5pcy1kZWxldGU6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2RiZGJkYn0udGFnOm5vdChib2R5KS5pcy1yb3VuZGVke2JvcmRlci1yYWRpdXM6MjkwNDg2cHh9YS50YWc6aG92ZXJ7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0uc3VidGl0bGUsLnRpdGxle3dvcmQtYnJlYWs6YnJlYWstd29yZH0uc3VidGl0bGU6bm90KDpsYXN0LWNoaWxkKSwudGl0bGU6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEuNXJlbX0uc3VidGl0bGUgZW0sLnN1YnRpdGxlIHNwYW4sLnRpdGxlIGVtLC50aXRsZSBzcGFue2ZvbnQtd2VpZ2h0OmluaGVyaXR9LnN1YnRpdGxlIC50YWcsLnRpdGxlIC50YWd7dmVydGljYWwtYWxpZ246bWlkZGxlfS50aXRsZXtjb2xvcjojMzYzNjM2O2ZvbnQtc2l6ZToycmVtO2ZvbnQtd2VpZ2h0OjYwMDtsaW5lLWhlaWdodDoxLjEyNX0udGl0bGUgc3Ryb25ne2NvbG9yOmluaGVyaXQ7Zm9udC13ZWlnaHQ6aW5oZXJpdH0udGl0bGUrLmhpZ2hsaWdodHttYXJnaW4tdG9wOi0uNzVyZW19LnRpdGxlOm5vdCguaXMtc3BhY2VkKSsuc3VidGl0bGV7bWFyZ2luLXRvcDotMS41cmVtfS50aXRsZS5pcy0xe2ZvbnQtc2l6ZTozcmVtfS50aXRsZS5pcy0ye2ZvbnQtc2l6ZToyLjVyZW19LnRpdGxlLmlzLTN7Zm9udC1zaXplOjJyZW19LnRpdGxlLmlzLTR7Zm9udC1zaXplOjEuNXJlbX0udGl0bGUuaXMtNXtmb250LXNpemU6MS4yNXJlbX0udGl0bGUuaXMtNntmb250LXNpemU6MXJlbX0udGl0bGUuaXMtN3tmb250LXNpemU6Ljc1cmVtfS5zdWJ0aXRsZXtjb2xvcjojNGE0YTRhO2ZvbnQtc2l6ZToxLjI1cmVtO2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjI1fS5zdWJ0aXRsZSBzdHJvbmd7Y29sb3I6IzM2MzYzNjtmb250LXdlaWdodDo2MDB9LnN1YnRpdGxlOm5vdCguaXMtc3BhY2VkKSsudGl0bGV7bWFyZ2luLXRvcDotMS41cmVtfS5zdWJ0aXRsZS5pcy0xe2ZvbnQtc2l6ZTozcmVtfS5zdWJ0aXRsZS5pcy0ye2ZvbnQtc2l6ZToyLjVyZW19LnN1YnRpdGxlLmlzLTN7Zm9udC1zaXplOjJyZW19LnN1YnRpdGxlLmlzLTR7Zm9udC1zaXplOjEuNXJlbX0uc3VidGl0bGUuaXMtNXtmb250LXNpemU6MS4yNXJlbX0uc3VidGl0bGUuaXMtNntmb250LXNpemU6MXJlbX0uc3VidGl0bGUuaXMtN3tmb250LXNpemU6Ljc1cmVtfS5ibG9jazpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MS41cmVtfS5kZWxldGV7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy1tb3otYXBwZWFyYW5jZTpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDQlLC4yKTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjI5MDQ4NnB4O2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrOy13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleC1wb3NpdGl2ZTowO2ZsZXgtZ3JvdzowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDtmb250LXNpemU6MDtoZWlnaHQ6MjBweDttYXgtaGVpZ2h0OjIwcHg7bWF4LXdpZHRoOjIwcHg7bWluLWhlaWdodDoyMHB4O21pbi13aWR0aDoyMHB4O291dGxpbmU6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjp0b3A7d2lkdGg6MjBweH0uZGVsZXRlOmFmdGVyLC5kZWxldGU6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7bGVmdDo1MCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfS5kZWxldGU6YmVmb3Jle2hlaWdodDoycHg7d2lkdGg6NTAlfS5kZWxldGU6YWZ0ZXJ7aGVpZ2h0OjUwJTt3aWR0aDoycHh9LmRlbGV0ZTpmb2N1cywuZGVsZXRlOmhvdmVye2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDQlLC4zKX0uZGVsZXRlOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw0JSwuNCl9LmRlbGV0ZS5pcy1zbWFsbHtoZWlnaHQ6MTZweDttYXgtaGVpZ2h0OjE2cHg7bWF4LXdpZHRoOjE2cHg7bWluLWhlaWdodDoxNnB4O21pbi13aWR0aDoxNnB4O3dpZHRoOjE2cHh9LmRlbGV0ZS5pcy1tZWRpdW17aGVpZ2h0OjI0cHg7bWF4LWhlaWdodDoyNHB4O21heC13aWR0aDoyNHB4O21pbi1oZWlnaHQ6MjRweDttaW4td2lkdGg6MjRweDt3aWR0aDoyNHB4fS5kZWxldGUuaXMtbGFyZ2V7aGVpZ2h0OjMycHg7bWF4LWhlaWdodDozMnB4O21heC13aWR0aDozMnB4O21pbi1oZWlnaHQ6MzJweDttaW4td2lkdGg6MzJweDt3aWR0aDozMnB4fS5oZWFkaW5ne2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjExcHg7bGV0dGVyLXNwYWNpbmc6MXB4O21hcmdpbi1ib3R0b206NXB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0uaGlnaGxpZ2h0e2ZvbnQtd2VpZ2h0OjQwMDttYXgtd2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowfS5oaWdobGlnaHQ6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEuNXJlbX0uaGlnaGxpZ2h0IHByZXtvdmVyZmxvdzphdXRvO21heC13aWR0aDoxMDAlfS5sb2FkZXJ7LXdlYmtpdC1hbmltYXRpb246c3BpbkFyb3VuZCAuNXMgaW5maW5pdGUgbGluZWFyO2FuaW1hdGlvbjpzcGluQXJvdW5kIC41cyBpbmZpbml0ZSBsaW5lYXI7Ym9yZGVyOjJweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6MjkwNDg2cHg7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci10b3AtY29sb3I6dHJhbnNwYXJlbnQ7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrO2hlaWdodDoxZW07cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MWVtfS5udW1iZXJ7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1yYWRpdXM6MjkwNDg2cHg7ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3g7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDtmb250LXNpemU6MS4yNXJlbTtoZWlnaHQ6MmVtOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luLXJpZ2h0OjEuNXJlbTttaW4td2lkdGg6Mi41ZW07cGFkZGluZzouMjVyZW0gLjVyZW07dGV4dC1hbGlnbjpjZW50ZXI7dmVydGljYWwtYWxpZ246dG9wfS5icmVhZGNydW1iey13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LWJveC1hbGlnbjpzdHJldGNoOy1tcy1mbGV4LWFsaWduOnN0cmV0Y2g7YWxpZ24taXRlbXM6c3RyZXRjaDtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O2ZvbnQtc2l6ZToxcmVtO292ZXJmbG93OmhpZGRlbjtvdmVyZmxvdy14OmF1dG87d2hpdGUtc3BhY2U6bm93cmFwfS5icmVhZGNydW1iOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxLjVyZW19LmJyZWFkY3J1bWIgYXstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjojMzI3M2RjO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOi41ZW0gLjc1ZW19LmJyZWFkY3J1bWIgYTpob3Zlcntjb2xvcjojMzYzNjM2fS5icmVhZGNydW1iIGxpey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9LmJyZWFkY3J1bWIgbGk6Zmlyc3QtY2hpbGQgYXtwYWRkaW5nLWxlZnQ6MH0uYnJlYWRjcnVtYiBsaS5pcy1hY3RpdmUgYXtjb2xvcjojMzYzNjM2O2N1cnNvcjpkZWZhdWx0O3BvaW50ZXItZXZlbnRzOm5vbmV9LmJyZWFkY3J1bWIgbGkrbGk6YmVmb3Jle2NvbG9yOiM0YTRhNGE7Y29udGVudDpcXFwiL1xcXCJ9LmJyZWFkY3J1bWIgb2wsLmJyZWFkY3J1bWIgdWx7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5icmVhZGNydW1iIC5pY29uOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDouNWVtfS5icmVhZGNydW1iIC5pY29uOmxhc3QtY2hpbGR7bWFyZ2luLWxlZnQ6LjVlbX0uYnJlYWRjcnVtYi5pcy1jZW50ZXJlZCBvbCwuYnJlYWRjcnVtYi5pcy1jZW50ZXJlZCB1bHstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5icmVhZGNydW1iLmlzLXJpZ2h0IG9sLC5icmVhZGNydW1iLmlzLXJpZ2h0IHVsey13ZWJraXQtYm94LXBhY2s6ZW5kOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uYnJlYWRjcnVtYi5pcy1zbWFsbHtmb250LXNpemU6Ljc1cmVtfS5icmVhZGNydW1iLmlzLW1lZGl1bXtmb250LXNpemU6MS4yNXJlbX0uYnJlYWRjcnVtYi5pcy1sYXJnZXtmb250LXNpemU6MS41cmVtfS5icmVhZGNydW1iLmhhcy1hcnJvdy1zZXBhcmF0b3IgbGkrbGk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFwyMTkyXFxcIn0uYnJlYWRjcnVtYi5oYXMtYnVsbGV0LXNlcGFyYXRvciBsaStsaTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXDIwMjJcXFwifS5icmVhZGNydW1iLmhhcy1kb3Qtc2VwYXJhdG9yIGxpK2xpOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcQjdcXFwifS5icmVhZGNydW1iLmhhcy1zdWNjZWVkcy1zZXBhcmF0b3IgbGkrbGk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFwyMjdCXFxcIn0uY2FyZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7LXdlYmtpdC1ib3gtc2hhZG93OjAgMnB4IDNweCBoc2xhKDAsMCUsNCUsLjEpLDAgMCAwIDFweCBoc2xhKDAsMCUsNCUsLjEpO2JveC1zaGFkb3c6MCAycHggM3B4IGhzbGEoMCwwJSw0JSwuMSksMCAwIDAgMXB4IGhzbGEoMCwwJSw0JSwuMSk7Y29sb3I6IzRhNGE0YTttYXgtd2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZX0uY2FyZC1oZWFkZXJ7LXdlYmtpdC1ib3gtYWxpZ246c3RyZXRjaDstbXMtZmxleC1hbGlnbjpzdHJldGNoO2FsaWduLWl0ZW1zOnN0cmV0Y2g7LXdlYmtpdC1ib3gtc2hhZG93OjAgMXB4IDJweCBoc2xhKDAsMCUsNCUsLjEpO2JveC1zaGFkb3c6MCAxcHggMnB4IGhzbGEoMCwwJSw0JSwuMSl9LmNhcmQtaGVhZGVyLC5jYXJkLWhlYWRlci10aXRsZXtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS5jYXJkLWhlYWRlci10aXRsZXstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjb2xvcjojMzYzNjM2Oy13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxO2ZvbnQtd2VpZ2h0OjcwMDtwYWRkaW5nOi43NXJlbX0uY2FyZC1oZWFkZXItaWNvbiwuY2FyZC1oZWFkZXItdGl0bGUuaXMtY2VudGVyZWR7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uY2FyZC1oZWFkZXItaWNvbnstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3BhZGRpbmc6Ljc1cmVtfS5jYXJkLWltYWdle2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmV9LmNhcmQtY29udGVudHtwYWRkaW5nOjEuNXJlbX0uY2FyZC1mb290ZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RiZGJkYjstd2Via2l0LWJveC1hbGlnbjpzdHJldGNoOy1tcy1mbGV4LWFsaWduOnN0cmV0Y2g7YWxpZ24taXRlbXM6c3RyZXRjaH0uY2FyZC1mb290ZXIsLmNhcmQtZm9vdGVyLWl0ZW17ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0uY2FyZC1mb290ZXItaXRlbXstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTowO2ZsZXgtYmFzaXM6MDstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOi43NXJlbX0uY2FyZC1mb290ZXItaXRlbTpub3QoOmxhc3QtY2hpbGQpe2JvcmRlci1yaWdodDoxcHggc29saWQgI2RiZGJkYn0uY2FyZCAubWVkaWE6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOi43NXJlbX0uZHJvcGRvd257ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3g7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjp0b3B9LmRyb3Bkb3duLmlzLWFjdGl2ZSAuZHJvcGRvd24tbWVudSwuZHJvcGRvd24uaXMtaG92ZXJhYmxlOmhvdmVyIC5kcm9wZG93bi1tZW51e2Rpc3BsYXk6YmxvY2t9LmRyb3Bkb3duLmlzLXJpZ2h0IC5kcm9wZG93bi1tZW51e2xlZnQ6YXV0bztyaWdodDowfS5kcm9wZG93bi5pcy11cCAuZHJvcGRvd24tbWVudXtib3R0b206MTAwJTtwYWRkaW5nLWJvdHRvbTo0cHg7cGFkZGluZy10b3A6dW5zZXQ7dG9wOmF1dG99LmRyb3Bkb3duLW1lbnV7ZGlzcGxheTpub25lO2xlZnQ6MDttaW4td2lkdGg6MTJyZW07cGFkZGluZy10b3A6NHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMDAlO3otaW5kZXg6MjB9LmRyb3Bkb3duLWNvbnRlbnR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6M3B4Oy13ZWJraXQtYm94LXNoYWRvdzowIDJweCAzcHggaHNsYSgwLDAlLDQlLC4xKSwwIDAgMCAxcHggaHNsYSgwLDAlLDQlLC4xKTtib3gtc2hhZG93OjAgMnB4IDNweCBoc2xhKDAsMCUsNCUsLjEpLDAgMCAwIDFweCBoc2xhKDAsMCUsNCUsLjEpO3BhZGRpbmctYm90dG9tOi41cmVtO3BhZGRpbmctdG9wOi41cmVtfS5kcm9wZG93bi1pdGVte2NvbG9yOiM0YTRhNGE7ZGlzcGxheTpibG9jaztmb250LXNpemU6Ljg3NXJlbTtsaW5lLWhlaWdodDoxLjU7cGFkZGluZzouMzc1cmVtIDFyZW07cG9zaXRpb246cmVsYXRpdmV9YS5kcm9wZG93bi1pdGVte3BhZGRpbmctcmlnaHQ6M3JlbTt3aGl0ZS1zcGFjZTpub3dyYXB9YS5kcm9wZG93bi1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMGEwYTBhfWEuZHJvcGRvd24taXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9LmRyb3Bkb3duLWRpdmlkZXJ7YmFja2dyb3VuZC1jb2xvcjojZGJkYmRiO2JvcmRlcjpub25lO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjFweDttYXJnaW46LjVyZW0gMH0ubGV2ZWx7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC1ib3gtcGFjazpqdXN0aWZ5Oy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbn0ubGV2ZWw6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEuNXJlbX0ubGV2ZWwgY29kZXtib3JkZXItcmFkaXVzOjNweH0ubGV2ZWwgaW1ne2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcH0ubGV2ZWwuaXMtbW9iaWxlLC5sZXZlbC5pcy1tb2JpbGUgLmxldmVsLWxlZnQsLmxldmVsLmlzLW1vYmlsZSAubGV2ZWwtcmlnaHR7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0ubGV2ZWwuaXMtbW9iaWxlIC5sZXZlbC1sZWZ0Ky5sZXZlbC1yaWdodHttYXJnaW4tdG9wOjB9LmxldmVsLmlzLW1vYmlsZSAubGV2ZWwtaXRlbXttYXJnaW4tcmlnaHQ6Ljc1cmVtfS5sZXZlbC5pcy1tb2JpbGUgLmxldmVsLWl0ZW06bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjB9LmxldmVsLmlzLW1vYmlsZSAubGV2ZWwtaXRlbTpub3QoLmlzLW5hcnJvdyl7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjF9QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LmxldmVse2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9LmxldmVsPi5sZXZlbC1pdGVtOm5vdCguaXMtbmFycm93KXstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MX19LmxldmVsLWl0ZW17LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTphdXRvO2ZsZXgtYmFzaXM6YXV0bzstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXgtcG9zaXRpdmU6MDtmbGV4LWdyb3c6MDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubGV2ZWwtaXRlbSAuc3VidGl0bGUsLmxldmVsLWl0ZW0gLnRpdGxle21hcmdpbi1ib3R0b206MH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsubGV2ZWwtaXRlbTpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206Ljc1cmVtfX0ubGV2ZWwtbGVmdCwubGV2ZWwtcmlnaHR7LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6YXV0bztmbGV4LWJhc2lzOmF1dG87LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4LXBvc2l0aXZlOjA7ZmxleC1ncm93OjA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowfS5sZXZlbC1sZWZ0IC5sZXZlbC1pdGVtLmlzLWZsZXhpYmxlLC5sZXZlbC1yaWdodCAubGV2ZWwtaXRlbS5pcy1mbGV4aWJsZXstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MX1AbWVkaWEgcHJpbnQsc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsubGV2ZWwtbGVmdCAubGV2ZWwtaXRlbTpub3QoOmxhc3QtY2hpbGQpLC5sZXZlbC1yaWdodCAubGV2ZWwtaXRlbTpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1yaWdodDouNzVyZW19fS5sZXZlbC1sZWZ0ey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsubGV2ZWwtbGVmdCsubGV2ZWwtcmlnaHR7bWFyZ2luLXRvcDoxLjVyZW19fUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5sZXZlbC1sZWZ0e2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9fS5sZXZlbC1yaWdodHstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LWJveC1wYWNrOmVuZDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LmxldmVsLXJpZ2h0e2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9fS5tZWRpYXstd2Via2l0LWJveC1hbGlnbjpzdGFydDstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7dGV4dC1hbGlnbjpsZWZ0fS5tZWRpYSAuY29udGVudDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206Ljc1cmVtfS5tZWRpYSAubWVkaWF7Ym9yZGVyLXRvcDoxcHggc29saWQgaHNsYSgwLDAlLDg2JSwuNSk7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtwYWRkaW5nLXRvcDouNzVyZW19Lm1lZGlhIC5tZWRpYSAuY29udGVudDpub3QoOmxhc3QtY2hpbGQpLC5tZWRpYSAubWVkaWEgLmNvbnRyb2w6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOi41cmVtfS5tZWRpYSAubWVkaWEgLm1lZGlhe3BhZGRpbmctdG9wOi41cmVtfS5tZWRpYSAubWVkaWEgLm1lZGlhKy5tZWRpYXttYXJnaW4tdG9wOi41cmVtfS5tZWRpYSsubWVkaWF7Ym9yZGVyLXRvcDoxcHggc29saWQgaHNsYSgwLDAlLDg2JSwuNSk7bWFyZ2luLXRvcDoxcmVtO3BhZGRpbmctdG9wOjFyZW19Lm1lZGlhLmlzLWxhcmdlKy5tZWRpYXttYXJnaW4tdG9wOjEuNXJlbTtwYWRkaW5nLXRvcDoxLjVyZW19Lm1lZGlhLWxlZnQsLm1lZGlhLXJpZ2h0ey1tcy1mbGV4LXByZWZlcnJlZC1zaXplOmF1dG87ZmxleC1iYXNpczphdXRvOy13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleC1wb3NpdGl2ZTowO2ZsZXgtZ3JvdzowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MH0ubWVkaWEtbGVmdHttYXJnaW4tcmlnaHQ6MXJlbX0ubWVkaWEtcmlnaHR7bWFyZ2luLWxlZnQ6MXJlbX0ubWVkaWEtY29udGVudHstbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTphdXRvO2ZsZXgtYmFzaXM6YXV0bzstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1uZWdhdGl2ZToxO2ZsZXgtc2hyaW5rOjE7dGV4dC1hbGlnbjpsZWZ0fS5tZW51e2ZvbnQtc2l6ZToxcmVtfS5tZW51LmlzLXNtYWxse2ZvbnQtc2l6ZTouNzVyZW19Lm1lbnUuaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtfS5tZW51LmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19Lm1lbnUtbGlzdHtsaW5lLWhlaWdodDoxLjI1fS5tZW51LWxpc3QgYXtib3JkZXItcmFkaXVzOjJweDtjb2xvcjojNGE0YTRhO2Rpc3BsYXk6YmxvY2s7cGFkZGluZzouNWVtIC43NWVtfS5tZW51LWxpc3QgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn0ubWVudS1saXN0IGEuaXMtYWN0aXZle2JhY2tncm91bmQtY29sb3I6IzMyNzNkYztjb2xvcjojZmZmfS5tZW51LWxpc3QgbGkgdWx7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNkYmRiZGI7bWFyZ2luOi43NWVtO3BhZGRpbmctbGVmdDouNzVlbX0ubWVudS1sYWJlbHtjb2xvcjojN2E3YTdhO2ZvbnQtc2l6ZTouNzVlbTtsZXR0ZXItc3BhY2luZzouMWVtO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0ubWVudS1sYWJlbDpub3QoOmZpcnN0LWNoaWxkKXttYXJnaW4tdG9wOjFlbX0ubWVudS1sYWJlbDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MWVtfS5tZXNzYWdle2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItcmFkaXVzOjNweDtmb250LXNpemU6MXJlbX0ubWVzc2FnZTpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MS41cmVtfS5tZXNzYWdlIHN0cm9uZ3tjb2xvcjpjdXJyZW50Q29sb3J9Lm1lc3NhZ2UgYTpub3QoLmJ1dHRvbik6bm90KC50YWcpe2NvbG9yOmN1cnJlbnRDb2xvcjt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5tZXNzYWdlLmlzLXNtYWxse2ZvbnQtc2l6ZTouNzVyZW19Lm1lc3NhZ2UuaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtfS5tZXNzYWdlLmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19Lm1lc3NhZ2UuaXMtd2hpdGV7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tZXNzYWdlLmlzLXdoaXRlIC5tZXNzYWdlLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX0ubWVzc2FnZS5pcy13aGl0ZSAubWVzc2FnZS1ib2R5e2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiM0ZDRkNGR9Lm1lc3NhZ2UuaXMtYmxhY2t7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tZXNzYWdlLmlzLWJsYWNrIC5tZXNzYWdlLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGE7Y29sb3I6I2ZmZn0ubWVzc2FnZS5pcy1ibGFjayAubWVzc2FnZS1ib2R5e2JvcmRlci1jb2xvcjojMGEwYTBhO2NvbG9yOiMwOTA5MDl9Lm1lc3NhZ2UuaXMtbGlnaHR7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhfS5tZXNzYWdlLmlzLWxpZ2h0IC5tZXNzYWdlLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn0ubWVzc2FnZS5pcy1saWdodCAubWVzc2FnZS1ib2R5e2JvcmRlci1jb2xvcjojZjVmNWY1O2NvbG9yOiM1MDUwNTB9Lm1lc3NhZ2UuaXMtZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9Lm1lc3NhZ2UuaXMtZGFyayAubWVzc2FnZS1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2NvbG9yOiNmNWY1ZjV9Lm1lc3NhZ2UuaXMtZGFyayAubWVzc2FnZS1ib2R5e2JvcmRlci1jb2xvcjojMzYzNjM2O2NvbG9yOiMyYTJhMmF9Lm1lc3NhZ2UuaXMtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWZmZmR9Lm1lc3NhZ2UuaXMtcHJpbWFyeSAubWVzc2FnZS1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2NvbG9yOiNmZmZ9Lm1lc3NhZ2UuaXMtcHJpbWFyeSAubWVzc2FnZS1ib2R5e2JvcmRlci1jb2xvcjojMDBkMWIyO2NvbG9yOiMwMjEzMTB9Lm1lc3NhZ2UuaXMtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiNmNmY5ZmV9Lm1lc3NhZ2UuaXMtbGluayAubWVzc2FnZS1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9Lm1lc3NhZ2UuaXMtbGluayAubWVzc2FnZS1ib2R5e2JvcmRlci1jb2xvcjojMzI3M2RjO2NvbG9yOiMyMjUwOWF9Lm1lc3NhZ2UuaXMtaW5mb3tiYWNrZ3JvdW5kLWNvbG9yOiNmNmZiZmV9Lm1lc3NhZ2UuaXMtaW5mbyAubWVzc2FnZS1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojMjA5Y2VlO2NvbG9yOiNmZmZ9Lm1lc3NhZ2UuaXMtaW5mbyAubWVzc2FnZS1ib2R5e2JvcmRlci1jb2xvcjojMjA5Y2VlO2NvbG9yOiMxMjUzN2V9Lm1lc3NhZ2UuaXMtc3VjY2Vzc3tiYWNrZ3JvdW5kLWNvbG9yOiNmNmZlZjl9Lm1lc3NhZ2UuaXMtc3VjY2VzcyAubWVzc2FnZS1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2NvbG9yOiNmZmZ9Lm1lc3NhZ2UuaXMtc3VjY2VzcyAubWVzc2FnZS1ib2R5e2JvcmRlci1jb2xvcjojMjNkMTYwO2NvbG9yOiMwZTMwMWF9Lm1lc3NhZ2UuaXMtd2FybmluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmZkZjV9Lm1lc3NhZ2UuaXMtd2FybmluZyAubWVzc2FnZS1oZWFkZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3O2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5tZXNzYWdlLmlzLXdhcm5pbmcgLm1lc3NhZ2UtYm9keXtib3JkZXItY29sb3I6I2ZmZGQ1Nztjb2xvcjojM2IzMTA4fS5tZXNzYWdlLmlzLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY1Zjd9Lm1lc3NhZ2UuaXMtZGFuZ2VyIC5tZXNzYWdlLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjA7Y29sb3I6I2ZmZn0ubWVzc2FnZS5pcy1kYW5nZXIgLm1lc3NhZ2UtYm9keXtib3JkZXItY29sb3I6I2ZmMzg2MDtjb2xvcjojY2QwOTMwfS5tZXNzYWdlLWhlYWRlcnstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiM0YTRhNGE7Ym9yZGVyLXJhZGl1czozcHggM3B4IDAgMDtjb2xvcjojZmZmO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtcGFjazpqdXN0aWZ5Oy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtsaW5lLWhlaWdodDoxLjI1O3BhZGRpbmc6LjVlbSAuNzVlbTtwb3NpdGlvbjpyZWxhdGl2ZX0ubWVzc2FnZS1oZWFkZXIgLmRlbGV0ZXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXgtcG9zaXRpdmU6MDtmbGV4LWdyb3c6MDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7bWFyZ2luLWxlZnQ6Ljc1ZW19Lm1lc3NhZ2UtaGVhZGVyKy5tZXNzYWdlLWJvZHl7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcDpub25lfS5tZXNzYWdlLWJvZHl7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yYWRpdXM6M3B4O2NvbG9yOiM0YTRhNGE7cGFkZGluZzoxZW0gMS4yNWVtfS5tZXNzYWdlLWJvZHkgY29kZSwubWVzc2FnZS1ib2R5IHByZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1lc3NhZ2UtYm9keSBwcmUgY29kZXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5tb2RhbHtib3R0b206MDtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MDstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5Om5vbmU7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoyMH0ubW9kYWwuaXMtYWN0aXZle2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9Lm1vZGFsLWJhY2tncm91bmR7Ym90dG9tOjA7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsNCUsLjg2KX0ubW9kYWwtY2FyZCwubW9kYWwtY29udGVudHttYXJnaW46MCAyMHB4O21heC1oZWlnaHQ6Y2FsYygxMDB2aCAtIDE2MHB4KTtvdmVyZmxvdzphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCV9QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7Lm1vZGFsLWNhcmQsLm1vZGFsLWNvbnRlbnR7bWFyZ2luOjAgYXV0bzttYXgtaGVpZ2h0OmNhbGMoMTAwdmggLSA0MHB4KTt3aWR0aDo2NDBweH19Lm1vZGFsLWNsb3Nley13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTstbW96LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw0JSwuMik7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czoyOTA0ODZweDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jazstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXgtcG9zaXRpdmU6MDtmbGV4LWdyb3c6MDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7Zm9udC1zaXplOjA7aGVpZ2h0OjIwcHg7bWF4LWhlaWdodDoyMHB4O21heC13aWR0aDoyMHB4O21pbi1oZWlnaHQ6MjBweDttaW4td2lkdGg6MjBweDtvdXRsaW5lOm5vbmU7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246dG9wO3dpZHRoOjIwcHg7YmFja2dyb3VuZDpub25lO2hlaWdodDo0MHB4O3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjIwcHg7dG9wOjIwcHg7d2lkdGg6NDBweH0ubW9kYWwtY2xvc2U6YWZ0ZXIsLm1vZGFsLWNsb3NlOmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29udGVudDpcXFwiXFxcIjtkaXNwbGF5OmJsb2NrO2xlZnQ6NTAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcn0ubW9kYWwtY2xvc2U6YmVmb3Jle2hlaWdodDoycHg7d2lkdGg6NTAlfS5tb2RhbC1jbG9zZTphZnRlcntoZWlnaHQ6NTAlO3dpZHRoOjJweH0ubW9kYWwtY2xvc2U6Zm9jdXMsLm1vZGFsLWNsb3NlOmhvdmVye2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDQlLC4zKX0ubW9kYWwtY2xvc2U6YWN0aXZle2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDQlLC40KX0ubW9kYWwtY2xvc2UuaXMtc21hbGx7aGVpZ2h0OjE2cHg7bWF4LWhlaWdodDoxNnB4O21heC13aWR0aDoxNnB4O21pbi1oZWlnaHQ6MTZweDttaW4td2lkdGg6MTZweDt3aWR0aDoxNnB4fS5tb2RhbC1jbG9zZS5pcy1tZWRpdW17aGVpZ2h0OjI0cHg7bWF4LWhlaWdodDoyNHB4O21heC13aWR0aDoyNHB4O21pbi1oZWlnaHQ6MjRweDttaW4td2lkdGg6MjRweDt3aWR0aDoyNHB4fS5tb2RhbC1jbG9zZS5pcy1sYXJnZXtoZWlnaHQ6MzJweDttYXgtaGVpZ2h0OjMycHg7bWF4LXdpZHRoOjMycHg7bWluLWhlaWdodDozMnB4O21pbi13aWR0aDozMnB4O3dpZHRoOjMycHh9Lm1vZGFsLWNhcmR7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gNDBweCk7b3ZlcmZsb3c6aGlkZGVufS5tb2RhbC1jYXJkLC5tb2RhbC1jYXJkLWZvb3QsLm1vZGFsLWNhcmQtaGVhZHtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS5tb2RhbC1jYXJkLWZvb3QsLm1vZGFsLWNhcmQtaGVhZHstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowOy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtwYWRkaW5nOjIwcHg7cG9zaXRpb246cmVsYXRpdmV9Lm1vZGFsLWNhcmQtaGVhZHtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjVweH0ubW9kYWwtY2FyZC10aXRsZXtjb2xvcjojMzYzNjM2Oy13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDtmb250LXNpemU6MS41cmVtO2xpbmUtaGVpZ2h0OjF9Lm1vZGFsLWNhcmQtZm9vdHtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RiZGJkYn0ubW9kYWwtY2FyZC1mb290IC5idXR0b246bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tcmlnaHQ6MTBweH0ubW9kYWwtY2FyZC1ib2R5ey13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO2JhY2tncm91bmQtY29sb3I6I2ZmZjstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1uZWdhdGl2ZToxO2ZsZXgtc2hyaW5rOjE7b3ZlcmZsb3c6YXV0bztwYWRkaW5nOjIwcHh9Lm5hdmJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bWluLWhlaWdodDozLjI1cmVtO3Bvc2l0aW9uOnJlbGF0aXZlfS5uYXZiYXIuaXMtd2hpdGV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMwYTBhMGF9Lm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItYnJhbmQ+Lm5hdmJhci1pdGVte2NvbG9yOiMwYTBhMGF9Lm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjJmMmYyO2NvbG9yOiMwYTBhMGF9Lm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6IzBhMGEwYX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7Lm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWVuZD4ubmF2YmFyLWl0ZW0sLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluaywubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItc3RhcnQ+Lm5hdmJhci1pdGVte2NvbG9yOiMwYTBhMGF9Lm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtOmhvdmVyLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMjtjb2xvcjojMGEwYTBhfS5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmFmdGVyLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiMwYTBhMGF9Lm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duOmhvdmVyIC5uYXZiYXItbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7Y29sb3I6IzBhMGEwYX0ubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMwYTBhMGF9fS5uYXZiYXIuaXMtYmxhY2t7YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItYnJhbmQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7Lm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWVuZD4ubmF2YmFyLWl0ZW0sLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluaywubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItc3RhcnQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtOmhvdmVyLC5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwMDtjb2xvcjojZmZmfS5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmFmdGVyLC5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiNmZmZ9Lm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duOmhvdmVyIC5uYXZiYXItbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2NvbG9yOiNmZmZ9fS5uYXZiYXIuaXMtbGlnaHR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMzNjM2MzZ9Lm5hdmJhci5pcy1saWdodCAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItYnJhbmQ+Lm5hdmJhci1pdGVte2NvbG9yOiMzNjM2MzZ9Lm5hdmJhci5pcy1saWdodCAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1saWdodCAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1saWdodCAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZThlOGU4O2NvbG9yOiMzNjM2MzZ9Lm5hdmJhci5pcy1saWdodCAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6IzM2MzYzNn1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7Lm5hdmJhci5pcy1saWdodCAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1saWdodCAubmF2YmFyLWVuZD4ubmF2YmFyLWl0ZW0sLm5hdmJhci5pcy1saWdodCAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluaywubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItc3RhcnQ+Lm5hdmJhci1pdGVte2NvbG9yOiMzNjM2MzZ9Lm5hdmJhci5pcy1saWdodCAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1saWdodCAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtOmhvdmVyLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1saWdodCAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2U4ZThlODtjb2xvcjojMzYzNjM2fS5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmFmdGVyLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiMzNjM2MzZ9Lm5hdmJhci5pcy1saWdodCAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1saWdodCAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duOmhvdmVyIC5uYXZiYXItbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTg7Y29sb3I6IzM2MzYzNn0ubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMzNjM2MzZ9fS5uYXZiYXIuaXMtZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzY7Y29sb3I6I2Y1ZjVmNX0ubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItYnJhbmQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmNWY1ZjV9Lm5hdmJhci5pcy1kYXJrIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyOTI5Mjk7Y29sb3I6I2Y1ZjVmNX0ubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbms6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiNmNWY1ZjV9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpey5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItZW5kPi5uYXZiYXItaXRlbSwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItc3RhcnQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmNWY1ZjV9Lm5hdmJhci5pcy1kYXJrIC5uYXZiYXItZW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItZW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW06aG92ZXIsLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyOTI5Mjk7Y29sb3I6I2Y1ZjVmNX0ubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmFmdGVyLC5uYXZiYXIuaXMtZGFyayAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6I2Y1ZjVmNX0ubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bi5pcy1hY3RpdmUgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duOmhvdmVyIC5uYXZiYXItbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMyOTI5Mjk7Y29sb3I6I2Y1ZjVmNX0ubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzY7Y29sb3I6I2Y1ZjVmNX19Lm5hdmJhci5pcy1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6IzAwZDFiMjtjb2xvcjojZmZmfS5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1icmFuZD4ubmF2YmFyLWl0ZW17Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwYjg5Yztjb2xvcjojZmZmfS5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7Lm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItZW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1lbmQ+Lm5hdmJhci1pdGVtLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluaywubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1zdGFydD4ubmF2YmFyLWl0ZW17Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbTpob3ZlciwubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwYjg5Yztjb2xvcjojZmZmfS5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6YWZ0ZXIsLm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOmFmdGVye2JvcmRlci1jb2xvcjojZmZmfS5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd246aG92ZXIgLm5hdmJhci1saW5re2JhY2tncm91bmQtY29sb3I6IzAwYjg5Yztjb2xvcjojZmZmfS5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWRyb3Bkb3duIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZle2JhY2tncm91bmQtY29sb3I6IzAwZDFiMjtjb2xvcjojZmZmfX0ubmF2YmFyLmlzLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1saW5rIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLWJyYW5kPi5uYXZiYXItaXRlbXtjb2xvcjojZmZmfS5uYXZiYXIuaXMtbGluayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjM2NmQxO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1saW5rIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmFmdGVye2JvcmRlci1jb2xvcjojZmZmfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLWVuZD4ubmF2YmFyLWl0ZW0sLm5hdmJhci5pcy1saW5rIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLXN0YXJ0Pi5uYXZiYXItaXRlbXtjb2xvcjojZmZmfS5uYXZiYXIuaXMtbGluayAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtOmhvdmVyLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjM2NmQxO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1saW5rIC5uYXZiYXItZW5kIC5uYXZiYXItbGluazphZnRlciwubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiNmZmZ9Lm5hdmJhci5pcy1saW5rIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtYWN0aXZlIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bjpob3ZlciAubmF2YmFyLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojMjM2NmQxO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1saW5rIC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9fS5uYXZiYXIuaXMtaW5mb3tiYWNrZ3JvdW5kLWNvbG9yOiMyMDljZWU7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWluZm8gLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItYnJhbmQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1pbmZvIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMxMThmZTQ7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWluZm8gLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbms6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiNmZmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpey5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItZW5kPi5uYXZiYXItaXRlbSwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItc3RhcnQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1pbmZvIC5uYXZiYXItZW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItZW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW06aG92ZXIsLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMxMThmZTQ7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWluZm8gLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmFmdGVyLC5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6I2ZmZn0ubmF2YmFyLmlzLWluZm8gLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bi5pcy1hY3RpdmUgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duOmhvdmVyIC5uYXZiYXItbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMxMThmZTQ7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWluZm8gLm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMyMDljZWU7Y29sb3I6I2ZmZn19Lm5hdmJhci5pcy1zdWNjZXNze2JhY2tncm91bmQtY29sb3I6IzIzZDE2MDtjb2xvcjojZmZmfS5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1icmFuZD4ubmF2YmFyLWl0ZW17Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzIwYmM1Njtjb2xvcjojZmZmfS5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7Lm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItZW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1lbmQ+Lm5hdmJhci1pdGVtLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluaywubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1zdGFydD4ubmF2YmFyLWl0ZW17Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbTpob3ZlciwubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzIwYmM1Njtjb2xvcjojZmZmfS5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6YWZ0ZXIsLm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOmFmdGVye2JvcmRlci1jb2xvcjojZmZmfS5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd246aG92ZXIgLm5hdmJhci1saW5re2JhY2tncm91bmQtY29sb3I6IzIwYmM1Njtjb2xvcjojZmZmfS5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWRyb3Bkb3duIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZle2JhY2tncm91bmQtY29sb3I6IzIzZDE2MDtjb2xvcjojZmZmfX0ubmF2YmFyLmlzLXdhcm5pbmd7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3fS5uYXZiYXIuaXMtd2FybmluZywubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItYnJhbmQ+Lm5hdmJhci1pdGVte2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZkODNkO2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNyl9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpey5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItZW5kPi5uYXZiYXItaXRlbSwubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItc3RhcnQ+Lm5hdmJhci1pdGVte2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtOmhvdmVyLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZkODNkO2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6YWZ0ZXIsLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOmFmdGVye2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC43KX0ubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bi5pcy1hY3RpdmUgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duOmhvdmVyIC5uYXZiYXItbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ4M2Q7Y29sb3I6cmdiYSgwLDAsMCwuNyl9Lm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3O2NvbG9yOnJnYmEoMCwwLDAsLjcpfX0ubmF2YmFyLmlzLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjA7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLWJyYW5kPi5uYXZiYXItaXRlbXtjb2xvcjojZmZmfS5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjFmNGI7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7Lm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItZW5kPi5uYXZiYXItaXRlbSwubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluaywubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLXN0YXJ0Pi5uYXZiYXItaXRlbXtjb2xvcjojZmZmfS5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItZW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW06aG92ZXIsLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmMWY0Yjtjb2xvcjojZmZmfS5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItZW5kIC5uYXZiYXItbGluazphZnRlciwubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6I2ZmZn0ubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bjpob3ZlciAubmF2YmFyLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojZmYxZjRiO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjA7Y29sb3I6I2ZmZn19Lm5hdmJhcj4uY29udGFpbmVyey13ZWJraXQtYm94LWFsaWduOnN0cmV0Y2g7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNoO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7bWluLWhlaWdodDozLjI1cmVtO3dpZHRoOjEwMCV9Lm5hdmJhci5oYXMtc2hhZG93ey13ZWJraXQtYm94LXNoYWRvdzowIDJweCAzcHggaHNsYSgwLDAlLDQlLC4xKTtib3gtc2hhZG93OjAgMnB4IDNweCBoc2xhKDAsMCUsNCUsLjEpfS5uYXZiYXIuaXMtZml4ZWQtYm90dG9tLC5uYXZiYXIuaXMtZml4ZWQtdG9we2xlZnQ6MDtwb3NpdGlvbjpmaXhlZDtyaWdodDowO3otaW5kZXg6MzB9Lm5hdmJhci5pcy1maXhlZC1ib3R0b217Ym90dG9tOjB9Lm5hdmJhci5pcy1maXhlZC1ib3R0b20uaGFzLXNoYWRvd3std2Via2l0LWJveC1zaGFkb3c6MCAtMnB4IDNweCBoc2xhKDAsMCUsNCUsLjEpO2JveC1zaGFkb3c6MCAtMnB4IDNweCBoc2xhKDAsMCUsNCUsLjEpfS5uYXZiYXIuaXMtZml4ZWQtdG9we3RvcDowfWh0bWwuaGFzLW5hdmJhci1maXhlZC10b3B7cGFkZGluZy10b3A6My4yNXJlbX1odG1sLmhhcy1uYXZiYXItZml4ZWQtYm90dG9te3BhZGRpbmctYm90dG9tOjMuMjVyZW19Lm5hdmJhci1icmFuZCwubmF2YmFyLXRhYnN7LXdlYmtpdC1ib3gtYWxpZ246c3RyZXRjaDstbXMtZmxleC1hbGlnbjpzdHJldGNoO2FsaWduLWl0ZW1zOnN0cmV0Y2g7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7bWluLWhlaWdodDozLjI1cmVtfS5uYXZiYXItdGFic3std2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDttYXgtd2lkdGg6MTAwdnc7b3ZlcmZsb3cteDphdXRvO292ZXJmbG93LXk6aGlkZGVufS5uYXZiYXItYnVyZ2Vye2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjMuMjVyZW07cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6My4yNXJlbTttYXJnaW4tbGVmdDphdXRvfS5uYXZiYXItYnVyZ2VyIHNwYW57YmFja2dyb3VuZC1jb2xvcjpjdXJyZW50Q29sb3I7ZGlzcGxheTpibG9jaztoZWlnaHQ6MXB4O2xlZnQ6Y2FsYyg1MCUgLSA4cHgpO3Bvc2l0aW9uOmFic29sdXRlOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7LXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOjg2bXM7dHJhbnNpdGlvbi1kdXJhdGlvbjo4Nm1zOy13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yLG9wYWNpdHksLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yLG9wYWNpdHksLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yLG9wYWNpdHksdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvcixvcGFjaXR5LHRyYW5zZm9ybSwtd2Via2l0LXRyYW5zZm9ybTstd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2Utb3V0O3dpZHRoOjE2cHh9Lm5hdmJhci1idXJnZXIgc3BhbjpmaXJzdC1jaGlsZHt0b3A6Y2FsYyg1MCUgLSA2cHgpfS5uYXZiYXItYnVyZ2VyIHNwYW46bnRoLWNoaWxkKDIpe3RvcDpjYWxjKDUwJSAtIDFweCl9Lm5hdmJhci1idXJnZXIgc3BhbjpudGgtY2hpbGQoMyl7dG9wOmNhbGMoNTAlICsgNHB4KX0ubmF2YmFyLWJ1cmdlcjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjA1KX0ubmF2YmFyLWJ1cmdlci5pcy1hY3RpdmUgc3BhbjpmaXJzdC1jaGlsZHstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDVweCkgcm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1cHgpIHJvdGF0ZSg0NWRlZyl9Lm5hdmJhci1idXJnZXIuaXMtYWN0aXZlIHNwYW46bnRoLWNoaWxkKDIpe29wYWNpdHk6MH0ubmF2YmFyLWJ1cmdlci5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMyl7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNXB4KSByb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNXB4KSByb3RhdGUoLTQ1ZGVnKX0ubmF2YmFyLW1lbnV7ZGlzcGxheTpub25lfS5uYXZiYXItaXRlbSwubmF2YmFyLWxpbmt7Y29sb3I6IzRhNGE0YTtkaXNwbGF5OmJsb2NrO2xpbmUtaGVpZ2h0OjEuNTtwYWRkaW5nOi41cmVtIDFyZW07cG9zaXRpb246cmVsYXRpdmV9YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsYS5uYXZiYXItaXRlbTpob3ZlcixhLm5hdmJhci1saW5rLmlzLWFjdGl2ZSxhLm5hdmJhci1saW5rOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMzI3M2RjfS5uYXZiYXItaXRlbXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXgtcG9zaXRpdmU6MDtmbGV4LWdyb3c6MDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9Lm5hdmJhci1pdGVtIGltZ3ttYXgtaGVpZ2h0OjEuNzVyZW19Lm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bntwYWRkaW5nOjB9Lm5hdmJhci1pdGVtLmlzLWV4cGFuZGVkey13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjE7ZmxleC1zaHJpbms6MX0ubmF2YmFyLWl0ZW0uaXMtdGFie2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHRyYW5zcGFyZW50O21pbi1oZWlnaHQ6My4yNXJlbTtwYWRkaW5nLWJvdHRvbTpjYWxjKC41cmVtIC0gMXB4KX0ubmF2YmFyLWl0ZW0uaXMtdGFiLmlzLWFjdGl2ZSwubmF2YmFyLWl0ZW0uaXMtdGFiOmhvdmVye2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWJvdHRvbS1jb2xvcjojMzI3M2RjfS5uYXZiYXItaXRlbS5pcy10YWIuaXMtYWN0aXZle2JvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7Ym9yZGVyLWJvdHRvbS13aWR0aDozcHg7Y29sb3I6IzMyNzNkYztwYWRkaW5nLWJvdHRvbTpjYWxjKC41cmVtIC0gM3B4KX0ubmF2YmFyLWNvbnRlbnR7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtbmVnYXRpdmU6MTtmbGV4LXNocmluazoxfS5uYXZiYXItbGlua3twYWRkaW5nLXJpZ2h0OjIuNWVtfS5uYXZiYXItZHJvcGRvd257Zm9udC1zaXplOi44NzVyZW07cGFkZGluZy1ib3R0b206LjVyZW07cGFkZGluZy10b3A6LjVyZW19Lm5hdmJhci1kcm9wZG93biAubmF2YmFyLWl0ZW17cGFkZGluZy1sZWZ0OjEuNXJlbTtwYWRkaW5nLXJpZ2h0OjEuNXJlbX0ubmF2YmFyLWRpdmlkZXJ7YmFja2dyb3VuZC1jb2xvcjojZGJkYmRiO2JvcmRlcjpub25lO2Rpc3BsYXk6bm9uZTtoZWlnaHQ6MXB4O21hcmdpbjouNXJlbSAwfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsubmF2YmFyPi5jb250YWluZXJ7ZGlzcGxheTpibG9ja30ubmF2YmFyLWJyYW5kIC5uYXZiYXItaXRlbSwubmF2YmFyLXRhYnMgLm5hdmJhci1pdGVtey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9Lm5hdmJhci1tZW51e2JhY2tncm91bmQtY29sb3I6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6MCA4cHggMTZweCBoc2xhKDAsMCUsNCUsLjEpO2JveC1zaGFkb3c6MCA4cHggMTZweCBoc2xhKDAsMCUsNCUsLjEpO3BhZGRpbmc6LjVyZW0gMH0ubmF2YmFyLW1lbnUuaXMtYWN0aXZle2Rpc3BsYXk6YmxvY2t9Lm5hdmJhci5pcy1maXhlZC1ib3R0b20tdG91Y2gsLm5hdmJhci5pcy1maXhlZC10b3AtdG91Y2h7bGVmdDowO3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7ei1pbmRleDozMH0ubmF2YmFyLmlzLWZpeGVkLWJvdHRvbS10b3VjaHtib3R0b206MH0ubmF2YmFyLmlzLWZpeGVkLWJvdHRvbS10b3VjaC5oYXMtc2hhZG93ey13ZWJraXQtYm94LXNoYWRvdzowIC0ycHggM3B4IGhzbGEoMCwwJSw0JSwuMSk7Ym94LXNoYWRvdzowIC0ycHggM3B4IGhzbGEoMCwwJSw0JSwuMSl9Lm5hdmJhci5pcy1maXhlZC10b3AtdG91Y2h7dG9wOjB9Lm5hdmJhci5pcy1maXhlZC10b3AtdG91Y2ggLm5hdmJhci1tZW51LC5uYXZiYXIuaXMtZml4ZWQtdG9wIC5uYXZiYXItbWVudXstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDttYXgtaGVpZ2h0OmNhbGMoMTAwdmggLSAzLjI1cmVtKTtvdmVyZmxvdzphdXRvfWh0bWwuaGFzLW5hdmJhci1maXhlZC10b3AtdG91Y2h7cGFkZGluZy10b3A6My4yNXJlbX1odG1sLmhhcy1uYXZiYXItZml4ZWQtYm90dG9tLXRvdWNoe3BhZGRpbmctYm90dG9tOjMuMjVyZW19fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsubmF2YmFyLC5uYXZiYXItZW5kLC5uYXZiYXItbWVudSwubmF2YmFyLXN0YXJ0ey13ZWJraXQtYm94LWFsaWduOnN0cmV0Y2g7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNoO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9Lm5hdmJhcnttaW4taGVpZ2h0OjMuMjVyZW19Lm5hdmJhci5pcy10cmFuc3BhcmVudCAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci5pcy10cmFuc3BhcmVudCAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWhvdmVyYWJsZTpob3ZlciAubmF2YmFyLWxpbmssLm5hdmJhci5pcy10cmFuc3BhcmVudCBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXRyYW5zcGFyZW50IGEubmF2YmFyLWl0ZW06aG92ZXIsLm5hdmJhci5pcy10cmFuc3BhcmVudCBhLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXRyYW5zcGFyZW50IGEubmF2YmFyLWxpbms6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnR9Lm5hdmJhci5pcy10cmFuc3BhcmVudCAubmF2YmFyLWRyb3Bkb3duIGEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMwYTBhMGF9Lm5hdmJhci5pcy10cmFuc3BhcmVudCAubmF2YmFyLWRyb3Bkb3duIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZle2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMzI3M2RjfS5uYXZiYXItYnVyZ2Vye2Rpc3BsYXk6bm9uZX0ubmF2YmFyLWl0ZW0sLm5hdmJhci1saW5rey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9Lm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bnstd2Via2l0LWJveC1hbGlnbjpzdHJldGNoOy1tcy1mbGV4LWFsaWduOnN0cmV0Y2g7YWxpZ24taXRlbXM6c3RyZXRjaH0ubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLXVwIC5uYXZiYXItbGluazphZnRlcnstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKSB0cmFuc2xhdGUoLjI1ZW0sLS4yNWVtKTt0cmFuc2Zvcm06cm90YXRlKDEzNWRlZykgdHJhbnNsYXRlKC4yNWVtLC0uMjVlbSl9Lm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bi11cCAubmF2YmFyLWRyb3Bkb3due2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXJhZGl1czo1cHggNXB4IDAgMDtib3JkZXItdG9wOm5vbmU7Ym90dG9tOjEwMCU7LXdlYmtpdC1ib3gtc2hhZG93OjAgLThweCA4cHggaHNsYSgwLDAlLDQlLC4xKTtib3gtc2hhZG93OjAgLThweCA4cHggaHNsYSgwLDAlLDQlLC4xKTt0b3A6YXV0b30ubmF2YmFyLWl0ZW0uaXMtYWN0aXZlIC5uYXZiYXItZHJvcGRvd24sLm5hdmJhci1pdGVtLmlzLWhvdmVyYWJsZTpob3ZlciAubmF2YmFyLWRyb3Bkb3due2Rpc3BsYXk6YmxvY2t9Lm5hdmJhci1pdGVtLmlzLWFjdGl2ZSAubmF2YmFyLWRyb3Bkb3duLmlzLWJveGVkLC5uYXZiYXItaXRlbS5pcy1ob3ZlcmFibGU6aG92ZXIgLm5hdmJhci1kcm9wZG93bi5pcy1ib3hlZHtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApfS5uYXZiYXItbGluazphZnRlcntib3JkZXI6MXB4IHNvbGlkICMzMjczZGM7Ym9yZGVyLXJpZ2h0OjA7Ym9yZGVyLXRvcDowO2NvbnRlbnQ6XFxcIiBcXFwiO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0Oi41ZW07cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt3aWR0aDouNWVtO21hcmdpbi10b3A6LS4zNzVlbTtyaWdodDoxLjEyNWVtO3RvcDo1MCV9Lm5hdmJhci1tZW51ey13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MH0ubmF2YmFyLXN0YXJ0ey13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDttYXJnaW4tcmlnaHQ6YXV0b30ubmF2YmFyLWVuZHstd2Via2l0LWJveC1wYWNrOmVuZDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7bWFyZ2luLWxlZnQ6YXV0b30ubmF2YmFyLWRyb3Bkb3due2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RiZGJkYjstd2Via2l0LWJveC1zaGFkb3c6MCA4cHggOHB4IGhzbGEoMCwwJSw0JSwuMSk7Ym94LXNoYWRvdzowIDhweCA4cHggaHNsYSgwLDAlLDQlLC4xKTtkaXNwbGF5Om5vbmU7Zm9udC1zaXplOi44NzVyZW07bGVmdDowO21pbi13aWR0aDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMDAlO3otaW5kZXg6MjB9Lm5hdmJhci1kcm9wZG93biAubmF2YmFyLWl0ZW17cGFkZGluZzouMzc1cmVtIDFyZW07d2hpdGUtc3BhY2U6bm93cmFwfS5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbXtwYWRkaW5nLXJpZ2h0OjNyZW19Lm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMGEwYTBhfS5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMzMjczZGN9Lm5hdmJhci1kcm9wZG93bi5pcy1ib3hlZHtib3JkZXItcmFkaXVzOjVweDtib3JkZXItdG9wOm5vbmU7LXdlYmtpdC1ib3gtc2hhZG93OjAgOHB4IDhweCBoc2xhKDAsMCUsNCUsLjEpLDAgMCAwIDFweCBoc2xhKDAsMCUsNCUsLjEpO2JveC1zaGFkb3c6MCA4cHggOHB4IGhzbGEoMCwwJSw0JSwuMSksMCAwIDAgMXB4IGhzbGEoMCwwJSw0JSwuMSk7ZGlzcGxheTpibG9jaztvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTt0b3A6Y2FsYygxMDAlICsgLTRweCk7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNXB4KTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNXB4KTstd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246ODZtczt0cmFuc2l0aW9uLWR1cmF0aW9uOjg2bXM7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LC13ZWJraXQtdHJhbnNmb3JtO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSx0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LHRyYW5zZm9ybSwtd2Via2l0LXRyYW5zZm9ybX0ubmF2YmFyLWRyb3Bkb3duLmlzLXJpZ2h0e2xlZnQ6YXV0bztyaWdodDowfS5uYXZiYXItZGl2aWRlcntkaXNwbGF5OmJsb2NrfS5jb250YWluZXI+Lm5hdmJhciAubmF2YmFyLWJyYW5kLC5uYXZiYXI+LmNvbnRhaW5lciAubmF2YmFyLWJyYW5ke21hcmdpbi1sZWZ0Oi0xcmVtfS5jb250YWluZXI+Lm5hdmJhciAubmF2YmFyLW1lbnUsLm5hdmJhcj4uY29udGFpbmVyIC5uYXZiYXItbWVudXttYXJnaW4tcmlnaHQ6LTFyZW19Lm5hdmJhci5pcy1maXhlZC1ib3R0b20tZGVza3RvcCwubmF2YmFyLmlzLWZpeGVkLXRvcC1kZXNrdG9we2xlZnQ6MDtwb3NpdGlvbjpmaXhlZDtyaWdodDowO3otaW5kZXg6MzB9Lm5hdmJhci5pcy1maXhlZC1ib3R0b20tZGVza3RvcHtib3R0b206MH0ubmF2YmFyLmlzLWZpeGVkLWJvdHRvbS1kZXNrdG9wLmhhcy1zaGFkb3d7LXdlYmtpdC1ib3gtc2hhZG93OjAgLTJweCAzcHggaHNsYSgwLDAlLDQlLC4xKTtib3gtc2hhZG93OjAgLTJweCAzcHggaHNsYSgwLDAlLDQlLC4xKX0ubmF2YmFyLmlzLWZpeGVkLXRvcC1kZXNrdG9we3RvcDowfWh0bWwuaGFzLW5hdmJhci1maXhlZC10b3AtZGVza3RvcHtwYWRkaW5nLXRvcDozLjI1cmVtfWh0bWwuaGFzLW5hdmJhci1maXhlZC1ib3R0b20tZGVza3RvcHtwYWRkaW5nLWJvdHRvbTozLjI1cmVtfWEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLGEubmF2YmFyLWxpbmsuaXMtYWN0aXZle2NvbG9yOiMwYTBhMGF9YS5uYXZiYXItaXRlbS5pcy1hY3RpdmU6bm90KDpob3ZlciksYS5uYXZiYXItbGluay5pcy1hY3RpdmU6bm90KDpob3Zlcil7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH0ubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bjpob3ZlciAubmF2YmFyLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fX0ucGFnaW5hdGlvbntmb250LXNpemU6MXJlbTttYXJnaW46LS4yNXJlbX0ucGFnaW5hdGlvbi5pcy1zbWFsbHtmb250LXNpemU6Ljc1cmVtfS5wYWdpbmF0aW9uLmlzLW1lZGl1bXtmb250LXNpemU6MS4yNXJlbX0ucGFnaW5hdGlvbi5pcy1sYXJnZXtmb250LXNpemU6MS41cmVtfS5wYWdpbmF0aW9uLC5wYWdpbmF0aW9uLWxpc3R7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3RleHQtYWxpZ246Y2VudGVyfS5wYWdpbmF0aW9uLWVsbGlwc2lzLC5wYWdpbmF0aW9uLWxpbmssLnBhZ2luYXRpb24tbmV4dCwucGFnaW5hdGlvbi1wcmV2aW91c3stbW96LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6M3B4Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O2ZvbnQtc2l6ZToxcmVtO2hlaWdodDoyLjI1ZW07LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2xpbmUtaGVpZ2h0OjEuNTtwYWRkaW5nLWxlZnQ6Y2FsYyguNjI1ZW0gLSAxcHgpO3BhZGRpbmctcmlnaHQ6Y2FsYyguNjI1ZW0gLSAxcHgpO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOnRvcDstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Zm9udC1zaXplOjFlbTtwYWRkaW5nOmNhbGMoLjM3NWVtIC0gMXB4KSAuNWVtOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOi4yNXJlbTt0ZXh0LWFsaWduOmNlbnRlcn0ucGFnaW5hdGlvbi1lbGxpcHNpcy5pcy1hY3RpdmUsLnBhZ2luYXRpb24tZWxsaXBzaXMuaXMtZm9jdXNlZCwucGFnaW5hdGlvbi1lbGxpcHNpczphY3RpdmUsLnBhZ2luYXRpb24tZWxsaXBzaXM6Zm9jdXMsLnBhZ2luYXRpb24tbGluay5pcy1hY3RpdmUsLnBhZ2luYXRpb24tbGluay5pcy1mb2N1c2VkLC5wYWdpbmF0aW9uLWxpbms6YWN0aXZlLC5wYWdpbmF0aW9uLWxpbms6Zm9jdXMsLnBhZ2luYXRpb24tbmV4dC5pcy1hY3RpdmUsLnBhZ2luYXRpb24tbmV4dC5pcy1mb2N1c2VkLC5wYWdpbmF0aW9uLW5leHQ6YWN0aXZlLC5wYWdpbmF0aW9uLW5leHQ6Zm9jdXMsLnBhZ2luYXRpb24tcHJldmlvdXMuaXMtYWN0aXZlLC5wYWdpbmF0aW9uLXByZXZpb3VzLmlzLWZvY3VzZWQsLnBhZ2luYXRpb24tcHJldmlvdXM6YWN0aXZlLC5wYWdpbmF0aW9uLXByZXZpb3VzOmZvY3Vze291dGxpbmU6bm9uZX0ucGFnaW5hdGlvbi1lbGxpcHNpc1tkaXNhYmxlZF0sLnBhZ2luYXRpb24tbGlua1tkaXNhYmxlZF0sLnBhZ2luYXRpb24tbmV4dFtkaXNhYmxlZF0sLnBhZ2luYXRpb24tcHJldmlvdXNbZGlzYWJsZWRde2N1cnNvcjpub3QtYWxsb3dlZH0ucGFnaW5hdGlvbi1saW5rLC5wYWdpbmF0aW9uLW5leHQsLnBhZ2luYXRpb24tcHJldmlvdXN7Ym9yZGVyLWNvbG9yOiNkYmRiZGI7bWluLXdpZHRoOjIuMjVlbX0ucGFnaW5hdGlvbi1saW5rOmhvdmVyLC5wYWdpbmF0aW9uLW5leHQ6aG92ZXIsLnBhZ2luYXRpb24tcHJldmlvdXM6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNiNWI1YjU7Y29sb3I6IzM2MzYzNn0ucGFnaW5hdGlvbi1saW5rOmZvY3VzLC5wYWdpbmF0aW9uLW5leHQ6Zm9jdXMsLnBhZ2luYXRpb24tcHJldmlvdXM6Zm9jdXN7Ym9yZGVyLWNvbG9yOiMzMjczZGN9LnBhZ2luYXRpb24tbGluazphY3RpdmUsLnBhZ2luYXRpb24tbmV4dDphY3RpdmUsLnBhZ2luYXRpb24tcHJldmlvdXM6YWN0aXZley13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAycHggaHNsYSgwLDAlLDQlLC4yKTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDJweCBoc2xhKDAsMCUsNCUsLjIpfS5wYWdpbmF0aW9uLWxpbmtbZGlzYWJsZWRdLC5wYWdpbmF0aW9uLW5leHRbZGlzYWJsZWRdLC5wYWdpbmF0aW9uLXByZXZpb3VzW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiNkYmRiZGI7Ym9yZGVyLWNvbG9yOiNkYmRiZGI7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiM3YTdhN2E7b3BhY2l0eTouNX0ucGFnaW5hdGlvbi1uZXh0LC5wYWdpbmF0aW9uLXByZXZpb3Vze3BhZGRpbmctbGVmdDouNzVlbTtwYWRkaW5nLXJpZ2h0Oi43NWVtO3doaXRlLXNwYWNlOm5vd3JhcH0ucGFnaW5hdGlvbi1saW5rLmlzLWN1cnJlbnR7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2JvcmRlci1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9LnBhZ2luYXRpb24tZWxsaXBzaXN7Y29sb3I6I2I1YjViNTtwb2ludGVyLWV2ZW50czpub25lfS5wYWdpbmF0aW9uLWxpc3R7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5wYWdpbmF0aW9uey1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcH0ucGFnaW5hdGlvbi1saXN0IGxpLC5wYWdpbmF0aW9uLW5leHQsLnBhZ2luYXRpb24tcHJldmlvdXN7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtbmVnYXRpdmU6MTtmbGV4LXNocmluazoxfX1AbWVkaWEgcHJpbnQsc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsucGFnaW5hdGlvbi1saXN0ey13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjE7ZmxleC1zaHJpbms6MTstd2Via2l0LWJveC1wYWNrOnN0YXJ0Oy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDoyOy1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MX0ucGFnaW5hdGlvbi1wcmV2aW91c3std2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjM7LW1zLWZsZXgtb3JkZXI6MjtvcmRlcjoyfS5wYWdpbmF0aW9uLW5leHR7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDo0Oy1tcy1mbGV4LW9yZGVyOjM7b3JkZXI6M30ucGFnaW5hdGlvbnstd2Via2l0LWJveC1wYWNrOmp1c3RpZnk7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5wYWdpbmF0aW9uLmlzLWNlbnRlcmVkIC5wYWdpbmF0aW9uLXByZXZpb3Vzey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6MjstbXMtZmxleC1vcmRlcjoxO29yZGVyOjF9LnBhZ2luYXRpb24uaXMtY2VudGVyZWQgLnBhZ2luYXRpb24tbGlzdHstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6MzstbXMtZmxleC1vcmRlcjoyO29yZGVyOjJ9LnBhZ2luYXRpb24uaXMtY2VudGVyZWQgLnBhZ2luYXRpb24tbmV4dHstd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjQ7LW1zLWZsZXgtb3JkZXI6MztvcmRlcjozfS5wYWdpbmF0aW9uLmlzLXJpZ2h0IC5wYWdpbmF0aW9uLXByZXZpb3Vzey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6MjstbXMtZmxleC1vcmRlcjoxO29yZGVyOjF9LnBhZ2luYXRpb24uaXMtcmlnaHQgLnBhZ2luYXRpb24tbmV4dHstd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjM7LW1zLWZsZXgtb3JkZXI6MjtvcmRlcjoyfS5wYWdpbmF0aW9uLmlzLXJpZ2h0IC5wYWdpbmF0aW9uLWxpc3R7LXdlYmtpdC1ib3gtcGFjazplbmQ7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kOy13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6NDstbXMtZmxleC1vcmRlcjozO29yZGVyOjN9fS5wYW5lbHtmb250LXNpemU6MXJlbX0ucGFuZWw6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEuNXJlbX0ucGFuZWwtYmxvY2ssLnBhbmVsLWhlYWRpbmcsLnBhbmVsLXRhYnN7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RiZGJkYjtib3JkZXItbGVmdDoxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNkYmRiZGJ9LnBhbmVsLWJsb2NrOmZpcnN0LWNoaWxkLC5wYW5lbC1oZWFkaW5nOmZpcnN0LWNoaWxkLC5wYW5lbC10YWJzOmZpcnN0LWNoaWxke2JvcmRlci10b3A6MXB4IHNvbGlkICNkYmRiZGJ9LnBhbmVsLWhlYWRpbmd7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1yYWRpdXM6M3B4IDNweCAwIDA7Y29sb3I6IzM2MzYzNjtmb250LXNpemU6MS4yNWVtO2ZvbnQtd2VpZ2h0OjMwMDtsaW5lLWhlaWdodDoxLjI1O3BhZGRpbmc6LjVlbSAuNzVlbX0ucGFuZWwtdGFic3std2Via2l0LWJveC1hbGlnbjplbmQ7LW1zLWZsZXgtYWxpZ246ZW5kO2FsaWduLWl0ZW1zOmZsZXgtZW5kO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7Zm9udC1zaXplOi44NzVlbTstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5wYW5lbC10YWJzIGF7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RiZGJkYjttYXJnaW4tYm90dG9tOi0xcHg7cGFkZGluZzouNWVtfS5wYW5lbC10YWJzIGEuaXMtYWN0aXZle2JvcmRlci1ib3R0b20tY29sb3I6IzRhNGE0YTtjb2xvcjojMzYzNjM2fS5wYW5lbC1saXN0IGF7Y29sb3I6IzRhNGE0YX0ucGFuZWwtbGlzdCBhOmhvdmVye2NvbG9yOiMzMjczZGN9LnBhbmVsLWJsb2Nrey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOiMzNjM2MzY7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1wYWNrOnN0YXJ0Oy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7cGFkZGluZzouNWVtIC43NWVtfS5wYW5lbC1ibG9jayBpbnB1dFt0eXBlPWNoZWNrYm94XXttYXJnaW4tcmlnaHQ6Ljc1ZW19LnBhbmVsLWJsb2NrPi5jb250cm9sey13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjE7ZmxleC1zaHJpbms6MTt3aWR0aDoxMDAlfS5wYW5lbC1ibG9jay5pcy13cmFwcGVkey1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcH0ucGFuZWwtYmxvY2suaXMtYWN0aXZle2JvcmRlci1sZWZ0LWNvbG9yOiMzMjczZGM7Y29sb3I6IzM2MzYzNn0ucGFuZWwtYmxvY2suaXMtYWN0aXZlIC5wYW5lbC1pY29ue2NvbG9yOiMzMjczZGN9YS5wYW5lbC1ibG9jayxsYWJlbC5wYW5lbC1ibG9ja3tjdXJzb3I6cG9pbnRlcn1hLnBhbmVsLWJsb2NrOmhvdmVyLGxhYmVsLnBhbmVsLWJsb2NrOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNX0ucGFuZWwtaWNvbntkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXNpemU6MTRweDtoZWlnaHQ6MWVtO2xpbmUtaGVpZ2h0OjFlbTt0ZXh0LWFsaWduOmNlbnRlcjt2ZXJ0aWNhbC1hbGlnbjp0b3A7d2lkdGg6MWVtO2NvbG9yOiM3YTdhN2E7bWFyZ2luLXJpZ2h0Oi43NWVtfS5wYW5lbC1pY29uIC5mYXtmb250LXNpemU6aW5oZXJpdDtsaW5lLWhlaWdodDppbmhlcml0fS50YWJzey13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoOy13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LWJveC1hbGlnbjpzdHJldGNoOy1tcy1mbGV4LWFsaWduOnN0cmV0Y2g7YWxpZ24taXRlbXM6c3RyZXRjaDtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O2ZvbnQtc2l6ZToxcmVtOy13ZWJraXQtYm94LXBhY2s6anVzdGlmeTstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47b3ZlcmZsb3c6aGlkZGVuO292ZXJmbG93LXg6YXV0bzt3aGl0ZS1zcGFjZTpub3dyYXB9LnRhYnM6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEuNXJlbX0udGFicyBhey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2JvcmRlci1ib3R0b20tY29sb3I6I2RiZGJkYjtib3JkZXItYm90dG9tLXN0eWxlOnNvbGlkO2JvcmRlci1ib3R0b20td2lkdGg6MXB4O2NvbG9yOiM0YTRhNGE7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1ib3R0b206LTFweDtwYWRkaW5nOi41ZW0gMWVtO3ZlcnRpY2FsLWFsaWduOnRvcH0udGFicyBhOmhvdmVye2JvcmRlci1ib3R0b20tY29sb3I6IzM2MzYzNjtjb2xvcjojMzYzNjM2fS50YWJzIGxpe2Rpc3BsYXk6YmxvY2t9LnRhYnMgbGkuaXMtYWN0aXZlIGF7Ym9yZGVyLWJvdHRvbS1jb2xvcjojMzI3M2RjO2NvbG9yOiMzMjczZGN9LnRhYnMgdWx7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZGJkYmRiO2JvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHg7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS50YWJzIHVsLmlzLWNlbnRlciwudGFicyB1bC5pcy1sZWZ0e3BhZGRpbmctcmlnaHQ6Ljc1ZW19LnRhYnMgdWwuaXMtY2VudGVyey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmctbGVmdDouNzVlbX0udGFicyB1bC5pcy1yaWdodHstd2Via2l0LWJveC1wYWNrOmVuZDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7cGFkZGluZy1sZWZ0Oi43NWVtfS50YWJzIC5pY29uOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDouNWVtfS50YWJzIC5pY29uOmxhc3QtY2hpbGR7bWFyZ2luLWxlZnQ6LjVlbX0udGFicy5pcy1jZW50ZXJlZCB1bHstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS50YWJzLmlzLXJpZ2h0IHVsey13ZWJraXQtYm94LXBhY2s6ZW5kOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0udGFicy5pcy1ib3hlZCBhe2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czozcHggM3B4IDAgMH0udGFicy5pcy1ib3hlZCBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItYm90dG9tLWNvbG9yOiNkYmRiZGJ9LnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGF7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZGJkYmRiO2JvcmRlci1ib3R0b20tY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50fS50YWJzLmlzLWZ1bGx3aWR0aCBsaXstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9LnRhYnMuaXMtdG9nZ2xlIGF7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO21hcmdpbi1ib3R0b206MDtwb3NpdGlvbjpyZWxhdGl2ZX0udGFicy5pcy10b2dnbGUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNiNWI1YjU7ei1pbmRleDoyfS50YWJzLmlzLXRvZ2dsZSBsaStsaXttYXJnaW4tbGVmdDotMXB4fS50YWJzLmlzLXRvZ2dsZSBsaTpmaXJzdC1jaGlsZCBhe2JvcmRlci1yYWRpdXM6M3B4IDAgMCAzcHh9LnRhYnMuaXMtdG9nZ2xlIGxpOmxhc3QtY2hpbGQgYXtib3JkZXItcmFkaXVzOjAgM3B4IDNweCAwfS50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYXtiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Ym9yZGVyLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZjt6LWluZGV4OjF9LnRhYnMuaXMtdG9nZ2xlIHVse2JvcmRlci1ib3R0b206bm9uZX0udGFicy5pcy1zbWFsbHtmb250LXNpemU6Ljc1cmVtfS50YWJzLmlzLW1lZGl1bXtmb250LXNpemU6MS4yNXJlbX0udGFicy5pcy1sYXJnZXtmb250LXNpemU6MS41cmVtfS5jb2x1bW57ZGlzcGxheTpibG9jazstbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTowO2ZsZXgtYmFzaXM6MDstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1uZWdhdGl2ZToxO2ZsZXgtc2hyaW5rOjE7cGFkZGluZzouNzVyZW19LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtZnVsbCwuY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1uYXJyb3d7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLWZ1bGx7d2lkdGg6MTAwJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy10aHJlZS1xdWFydGVyc3std2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NzUlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLXR3by10aGlyZHN7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjY2LjY2NjYlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLWhhbGZ7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjUwJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vbmUtdGhpcmR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjMzLjMzMzMlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9uZS1xdWFydGVyey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoyNSV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb25lLWZpZnRoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoyMCV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtdHdvLWZpZnRoc3std2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NDAlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLXRocmVlLWZpZnRoc3std2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjAlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLWZvdXItZmlmdGhzey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo4MCV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLXF1YXJ0ZXJze21hcmdpbi1sZWZ0Ojc1JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtdHdvLXRoaXJkc3ttYXJnaW4tbGVmdDo2Ni42NjY2JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtaGFsZnttYXJnaW4tbGVmdDo1MCV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LW9uZS10aGlyZHttYXJnaW4tbGVmdDozMy4zMzMzJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtb25lLXF1YXJ0ZXJ7bWFyZ2luLWxlZnQ6MjUlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC1vbmUtZmlmdGh7bWFyZ2luLWxlZnQ6MjAlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC10d28tZmlmdGhze21hcmdpbi1sZWZ0OjQwJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtdGhyZWUtZmlmdGhze21hcmdpbi1sZWZ0OjYwJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtZm91ci1maWZ0aHN7bWFyZ2luLWxlZnQ6ODAlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLTF7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjguMzMzMzMlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC0xe21hcmdpbi1sZWZ0OjguMzMzMzMlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLTJ7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjE2LjY2NjY3JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtMnttYXJnaW4tbGVmdDoxNi42NjY2NyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtM3std2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC0ze21hcmdpbi1sZWZ0OjI1JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy00ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDozMy4zMzMzMyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LTR7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLTV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjQxLjY2NjY3JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtNXttYXJnaW4tbGVmdDo0MS42NjY2NyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtNnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTAlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC02e21hcmdpbi1sZWZ0OjUwJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy03ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1OC4zMzMzMyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LTd7bWFyZ2luLWxlZnQ6NTguMzMzMzMlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLTh7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjY2LjY2NjY3JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtOHttYXJnaW4tbGVmdDo2Ni42NjY2NyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtOXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NzUlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC05e21hcmdpbi1sZWZ0Ojc1JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy0xMHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6ODMuMzMzMzMlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC0xMHttYXJnaW4tbGVmdDo4My4zMzMzMyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtMTF7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjkxLjY2NjY3JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtMTF7bWFyZ2luLWxlZnQ6OTEuNjY2NjclfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLTEyey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoxMDAlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC0xMnttYXJnaW4tbGVmdDoxMDAlfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5jb2x1bW4uaXMtZnVsbC1tb2JpbGUsLmNvbHVtbi5pcy1uYXJyb3ctbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZX0uY29sdW1uLmlzLWZ1bGwtbW9iaWxle3dpZHRoOjEwMCV9LmNvbHVtbi5pcy10aHJlZS1xdWFydGVycy1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLXR3by10aGlyZHMtbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2JX0uY29sdW1uLmlzLWhhbGYtbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1MCV9LmNvbHVtbi5pcy1vbmUtdGhpcmQtbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDozMy4zMzMzJX0uY29sdW1uLmlzLW9uZS1xdWFydGVyLW1vYmlsZXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb25lLWZpZnRoLW1vYmlsZXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjAlfS5jb2x1bW4uaXMtdHdvLWZpZnRocy1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjQwJX0uY29sdW1uLmlzLXRocmVlLWZpZnRocy1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjYwJX0uY29sdW1uLmlzLWZvdXItZmlmdGhzLW1vYmlsZXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6ODAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLXF1YXJ0ZXJzLW1vYmlsZXttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy1vZmZzZXQtdHdvLXRoaXJkcy1tb2JpbGV7bWFyZ2luLWxlZnQ6NjYuNjY2NiV9LmNvbHVtbi5pcy1vZmZzZXQtaGFsZi1tb2JpbGV7bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS10aGlyZC1tb2JpbGV7bWFyZ2luLWxlZnQ6MzMuMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtb25lLXF1YXJ0ZXItbW9iaWxle21hcmdpbi1sZWZ0OjI1JX0uY29sdW1uLmlzLW9mZnNldC1vbmUtZmlmdGgtbW9iaWxle21hcmdpbi1sZWZ0OjIwJX0uY29sdW1uLmlzLW9mZnNldC10d28tZmlmdGhzLW1vYmlsZXttYXJnaW4tbGVmdDo0MCV9LmNvbHVtbi5pcy1vZmZzZXQtdGhyZWUtZmlmdGhzLW1vYmlsZXttYXJnaW4tbGVmdDo2MCV9LmNvbHVtbi5pcy1vZmZzZXQtZm91ci1maWZ0aHMtbW9iaWxle21hcmdpbi1sZWZ0OjgwJX0uY29sdW1uLmlzLTEtbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo4LjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC0xLW1vYmlsZXttYXJnaW4tbGVmdDo4LjMzMzMzJX0uY29sdW1uLmlzLTItbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoxNi42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMi1tb2JpbGV7bWFyZ2luLWxlZnQ6MTYuNjY2NjclfS5jb2x1bW4uaXMtMy1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjI1JX0uY29sdW1uLmlzLW9mZnNldC0zLW1vYmlsZXttYXJnaW4tbGVmdDoyNSV9LmNvbHVtbi5pcy00LW1vYmlsZXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTQtbW9iaWxle21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0uY29sdW1uLmlzLTUtbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo0MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtNS1tb2JpbGV7bWFyZ2luLWxlZnQ6NDEuNjY2NjclfS5jb2x1bW4uaXMtNi1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjUwJX0uY29sdW1uLmlzLW9mZnNldC02LW1vYmlsZXttYXJnaW4tbGVmdDo1MCV9LmNvbHVtbi5pcy03LW1vYmlsZXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTguMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTctbW9iaWxle21hcmdpbi1sZWZ0OjU4LjMzMzMzJX0uY29sdW1uLmlzLTgtbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtOC1tb2JpbGV7bWFyZ2luLWxlZnQ6NjYuNjY2NjclfS5jb2x1bW4uaXMtOS1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLW9mZnNldC05LW1vYmlsZXttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy0xMC1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjgzLjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC0xMC1tb2JpbGV7bWFyZ2luLWxlZnQ6ODMuMzMzMzMlfS5jb2x1bW4uaXMtMTEtbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo5MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMTEtbW9iaWxle21hcmdpbi1sZWZ0OjkxLjY2NjY3JX0uY29sdW1uLmlzLTEyLW1vYmlsZXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MTAwJX0uY29sdW1uLmlzLW9mZnNldC0xMi1tb2JpbGV7bWFyZ2luLWxlZnQ6MTAwJX19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LmNvbHVtbi5pcy1mdWxsLC5jb2x1bW4uaXMtZnVsbC10YWJsZXQsLmNvbHVtbi5pcy1uYXJyb3csLmNvbHVtbi5pcy1uYXJyb3ctdGFibGV0ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZX0uY29sdW1uLmlzLWZ1bGwsLmNvbHVtbi5pcy1mdWxsLXRhYmxldHt3aWR0aDoxMDAlfS5jb2x1bW4uaXMtdGhyZWUtcXVhcnRlcnMsLmNvbHVtbi5pcy10aHJlZS1xdWFydGVycy10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLXR3by10aGlyZHMsLmNvbHVtbi5pcy10d28tdGhpcmRzLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjYuNjY2NiV9LmNvbHVtbi5pcy1oYWxmLC5jb2x1bW4uaXMtaGFsZi10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjUwJX0uY29sdW1uLmlzLW9uZS10aGlyZCwuY29sdW1uLmlzLW9uZS10aGlyZC10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjMzLjMzMzMlfS5jb2x1bW4uaXMtb25lLXF1YXJ0ZXIsLmNvbHVtbi5pcy1vbmUtcXVhcnRlci10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjI1JX0uY29sdW1uLmlzLW9uZS1maWZ0aCwuY29sdW1uLmlzLW9uZS1maWZ0aC10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjIwJX0uY29sdW1uLmlzLXR3by1maWZ0aHMsLmNvbHVtbi5pcy10d28tZmlmdGhzLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NDAlfS5jb2x1bW4uaXMtdGhyZWUtZmlmdGhzLC5jb2x1bW4uaXMtdGhyZWUtZmlmdGhzLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjAlfS5jb2x1bW4uaXMtZm91ci1maWZ0aHMsLmNvbHVtbi5pcy1mb3VyLWZpZnRocy10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjgwJX0uY29sdW1uLmlzLW9mZnNldC10aHJlZS1xdWFydGVycywuY29sdW1uLmlzLW9mZnNldC10aHJlZS1xdWFydGVycy10YWJsZXR7bWFyZ2luLWxlZnQ6NzUlfS5jb2x1bW4uaXMtb2Zmc2V0LXR3by10aGlyZHMsLmNvbHVtbi5pcy1vZmZzZXQtdHdvLXRoaXJkcy10YWJsZXR7bWFyZ2luLWxlZnQ6NjYuNjY2NiV9LmNvbHVtbi5pcy1vZmZzZXQtaGFsZiwuY29sdW1uLmlzLW9mZnNldC1oYWxmLXRhYmxldHttYXJnaW4tbGVmdDo1MCV9LmNvbHVtbi5pcy1vZmZzZXQtb25lLXRoaXJkLC5jb2x1bW4uaXMtb2Zmc2V0LW9uZS10aGlyZC10YWJsZXR7bWFyZ2luLWxlZnQ6MzMuMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtb25lLXF1YXJ0ZXIsLmNvbHVtbi5pcy1vZmZzZXQtb25lLXF1YXJ0ZXItdGFibGV0e21hcmdpbi1sZWZ0OjI1JX0uY29sdW1uLmlzLW9mZnNldC1vbmUtZmlmdGgsLmNvbHVtbi5pcy1vZmZzZXQtb25lLWZpZnRoLXRhYmxldHttYXJnaW4tbGVmdDoyMCV9LmNvbHVtbi5pcy1vZmZzZXQtdHdvLWZpZnRocywuY29sdW1uLmlzLW9mZnNldC10d28tZmlmdGhzLXRhYmxldHttYXJnaW4tbGVmdDo0MCV9LmNvbHVtbi5pcy1vZmZzZXQtdGhyZWUtZmlmdGhzLC5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLWZpZnRocy10YWJsZXR7bWFyZ2luLWxlZnQ6NjAlfS5jb2x1bW4uaXMtb2Zmc2V0LWZvdXItZmlmdGhzLC5jb2x1bW4uaXMtb2Zmc2V0LWZvdXItZmlmdGhzLXRhYmxldHttYXJnaW4tbGVmdDo4MCV9LmNvbHVtbi5pcy0xLC5jb2x1bW4uaXMtMS10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjguMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTEsLmNvbHVtbi5pcy1vZmZzZXQtMS10YWJsZXR7bWFyZ2luLWxlZnQ6OC4zMzMzMyV9LmNvbHVtbi5pcy0yLC5jb2x1bW4uaXMtMi10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjE2LjY2NjY3JX0uY29sdW1uLmlzLW9mZnNldC0yLC5jb2x1bW4uaXMtb2Zmc2V0LTItdGFibGV0e21hcmdpbi1sZWZ0OjE2LjY2NjY3JX0uY29sdW1uLmlzLTMsLmNvbHVtbi5pcy0zLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb2Zmc2V0LTMsLmNvbHVtbi5pcy1vZmZzZXQtMy10YWJsZXR7bWFyZ2luLWxlZnQ6MjUlfS5jb2x1bW4uaXMtNCwuY29sdW1uLmlzLTQtdGFibGV0ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDozMy4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtNCwuY29sdW1uLmlzLW9mZnNldC00LXRhYmxldHttYXJnaW4tbGVmdDozMy4zMzMzMyV9LmNvbHVtbi5pcy01LC5jb2x1bW4uaXMtNS10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjQxLjY2NjY3JX0uY29sdW1uLmlzLW9mZnNldC01LC5jb2x1bW4uaXMtb2Zmc2V0LTUtdGFibGV0e21hcmdpbi1sZWZ0OjQxLjY2NjY3JX0uY29sdW1uLmlzLTYsLmNvbHVtbi5pcy02LXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LTYsLmNvbHVtbi5pcy1vZmZzZXQtNi10YWJsZXR7bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtNywuY29sdW1uLmlzLTctdGFibGV0ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1OC4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtNywuY29sdW1uLmlzLW9mZnNldC03LXRhYmxldHttYXJnaW4tbGVmdDo1OC4zMzMzMyV9LmNvbHVtbi5pcy04LC5jb2x1bW4uaXMtOC10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjY2LjY2NjY3JX0uY29sdW1uLmlzLW9mZnNldC04LC5jb2x1bW4uaXMtb2Zmc2V0LTgtdGFibGV0e21hcmdpbi1sZWZ0OjY2LjY2NjY3JX0uY29sdW1uLmlzLTksLmNvbHVtbi5pcy05LXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NzUlfS5jb2x1bW4uaXMtb2Zmc2V0LTksLmNvbHVtbi5pcy1vZmZzZXQtOS10YWJsZXR7bWFyZ2luLWxlZnQ6NzUlfS5jb2x1bW4uaXMtMTAsLmNvbHVtbi5pcy0xMC10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjgzLjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC0xMCwuY29sdW1uLmlzLW9mZnNldC0xMC10YWJsZXR7bWFyZ2luLWxlZnQ6ODMuMzMzMzMlfS5jb2x1bW4uaXMtMTEsLmNvbHVtbi5pcy0xMS10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjkxLjY2NjY3JX0uY29sdW1uLmlzLW9mZnNldC0xMSwuY29sdW1uLmlzLW9mZnNldC0xMS10YWJsZXR7bWFyZ2luLWxlZnQ6OTEuNjY2NjclfS5jb2x1bW4uaXMtMTIsLmNvbHVtbi5pcy0xMi10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjEwMCV9LmNvbHVtbi5pcy1vZmZzZXQtMTIsLmNvbHVtbi5pcy1vZmZzZXQtMTItdGFibGV0e21hcmdpbi1sZWZ0OjEwMCV9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuY29sdW1uLmlzLWZ1bGwtdG91Y2gsLmNvbHVtbi5pcy1uYXJyb3ctdG91Y2h7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lfS5jb2x1bW4uaXMtZnVsbC10b3VjaHt3aWR0aDoxMDAlfS5jb2x1bW4uaXMtdGhyZWUtcXVhcnRlcnMtdG91Y2h7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLXR3by10aGlyZHMtdG91Y2h7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjY2LjY2NjYlfS5jb2x1bW4uaXMtaGFsZi10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTAlfS5jb2x1bW4uaXMtb25lLXRoaXJkLXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDozMy4zMzMzJX0uY29sdW1uLmlzLW9uZS1xdWFydGVyLXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoyNSV9LmNvbHVtbi5pcy1vbmUtZmlmdGgtdG91Y2h7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjIwJX0uY29sdW1uLmlzLXR3by1maWZ0aHMtdG91Y2h7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjQwJX0uY29sdW1uLmlzLXRocmVlLWZpZnRocy10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjAlfS5jb2x1bW4uaXMtZm91ci1maWZ0aHMtdG91Y2h7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjgwJX0uY29sdW1uLmlzLW9mZnNldC10aHJlZS1xdWFydGVycy10b3VjaHttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy1vZmZzZXQtdHdvLXRoaXJkcy10b3VjaHttYXJnaW4tbGVmdDo2Ni42NjY2JX0uY29sdW1uLmlzLW9mZnNldC1oYWxmLXRvdWNoe21hcmdpbi1sZWZ0OjUwJX0uY29sdW1uLmlzLW9mZnNldC1vbmUtdGhpcmQtdG91Y2h7bWFyZ2luLWxlZnQ6MzMuMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtb25lLXF1YXJ0ZXItdG91Y2h7bWFyZ2luLWxlZnQ6MjUlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1maWZ0aC10b3VjaHttYXJnaW4tbGVmdDoyMCV9LmNvbHVtbi5pcy1vZmZzZXQtdHdvLWZpZnRocy10b3VjaHttYXJnaW4tbGVmdDo0MCV9LmNvbHVtbi5pcy1vZmZzZXQtdGhyZWUtZmlmdGhzLXRvdWNoe21hcmdpbi1sZWZ0OjYwJX0uY29sdW1uLmlzLW9mZnNldC1mb3VyLWZpZnRocy10b3VjaHttYXJnaW4tbGVmdDo4MCV9LmNvbHVtbi5pcy0xLXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo4LjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC0xLXRvdWNoe21hcmdpbi1sZWZ0OjguMzMzMzMlfS5jb2x1bW4uaXMtMi10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MTYuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTItdG91Y2h7bWFyZ2luLWxlZnQ6MTYuNjY2NjclfS5jb2x1bW4uaXMtMy10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb2Zmc2V0LTMtdG91Y2h7bWFyZ2luLWxlZnQ6MjUlfS5jb2x1bW4uaXMtNC10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTQtdG91Y2h7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5jb2x1bW4uaXMtNS10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NDEuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTUtdG91Y2h7bWFyZ2luLWxlZnQ6NDEuNjY2NjclfS5jb2x1bW4uaXMtNi10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LTYtdG91Y2h7bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtNy10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTguMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTctdG91Y2h7bWFyZ2luLWxlZnQ6NTguMzMzMzMlfS5jb2x1bW4uaXMtOC10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjYuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTgtdG91Y2h7bWFyZ2luLWxlZnQ6NjYuNjY2NjclfS5jb2x1bW4uaXMtOS10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NzUlfS5jb2x1bW4uaXMtb2Zmc2V0LTktdG91Y2h7bWFyZ2luLWxlZnQ6NzUlfS5jb2x1bW4uaXMtMTAtdG91Y2h7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjgzLjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC0xMC10b3VjaHttYXJnaW4tbGVmdDo4My4zMzMzMyV9LmNvbHVtbi5pcy0xMS10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6OTEuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTExLXRvdWNoe21hcmdpbi1sZWZ0OjkxLjY2NjY3JX0uY29sdW1uLmlzLTEyLXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoxMDAlfS5jb2x1bW4uaXMtb2Zmc2V0LTEyLXRvdWNoe21hcmdpbi1sZWZ0OjEwMCV9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuY29sdW1uLmlzLWZ1bGwtZGVza3RvcCwuY29sdW1uLmlzLW5hcnJvdy1kZXNrdG9wey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZX0uY29sdW1uLmlzLWZ1bGwtZGVza3RvcHt3aWR0aDoxMDAlfS5jb2x1bW4uaXMtdGhyZWUtcXVhcnRlcnMtZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NzUlfS5jb2x1bW4uaXMtdHdvLXRoaXJkcy1kZXNrdG9wey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2JX0uY29sdW1uLmlzLWhhbGYtZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTAlfS5jb2x1bW4uaXMtb25lLXRoaXJkLWRlc2t0b3B7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjMzLjMzMzMlfS5jb2x1bW4uaXMtb25lLXF1YXJ0ZXItZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb25lLWZpZnRoLWRlc2t0b3B7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjIwJX0uY29sdW1uLmlzLXR3by1maWZ0aHMtZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NDAlfS5jb2x1bW4uaXMtdGhyZWUtZmlmdGhzLWRlc2t0b3B7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjYwJX0uY29sdW1uLmlzLWZvdXItZmlmdGhzLWRlc2t0b3B7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjgwJX0uY29sdW1uLmlzLW9mZnNldC10aHJlZS1xdWFydGVycy1kZXNrdG9we21hcmdpbi1sZWZ0Ojc1JX0uY29sdW1uLmlzLW9mZnNldC10d28tdGhpcmRzLWRlc2t0b3B7bWFyZ2luLWxlZnQ6NjYuNjY2NiV9LmNvbHVtbi5pcy1vZmZzZXQtaGFsZi1kZXNrdG9we21hcmdpbi1sZWZ0OjUwJX0uY29sdW1uLmlzLW9mZnNldC1vbmUtdGhpcmQtZGVza3RvcHttYXJnaW4tbGVmdDozMy4zMzMzJX0uY29sdW1uLmlzLW9mZnNldC1vbmUtcXVhcnRlci1kZXNrdG9we21hcmdpbi1sZWZ0OjI1JX0uY29sdW1uLmlzLW9mZnNldC1vbmUtZmlmdGgtZGVza3RvcHttYXJnaW4tbGVmdDoyMCV9LmNvbHVtbi5pcy1vZmZzZXQtdHdvLWZpZnRocy1kZXNrdG9we21hcmdpbi1sZWZ0OjQwJX0uY29sdW1uLmlzLW9mZnNldC10aHJlZS1maWZ0aHMtZGVza3RvcHttYXJnaW4tbGVmdDo2MCV9LmNvbHVtbi5pcy1vZmZzZXQtZm91ci1maWZ0aHMtZGVza3RvcHttYXJnaW4tbGVmdDo4MCV9LmNvbHVtbi5pcy0xLWRlc2t0b3B7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjguMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTEtZGVza3RvcHttYXJnaW4tbGVmdDo4LjMzMzMzJX0uY29sdW1uLmlzLTItZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MTYuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTItZGVza3RvcHttYXJnaW4tbGVmdDoxNi42NjY2NyV9LmNvbHVtbi5pcy0zLWRlc2t0b3B7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjI1JX0uY29sdW1uLmlzLW9mZnNldC0zLWRlc2t0b3B7bWFyZ2luLWxlZnQ6MjUlfS5jb2x1bW4uaXMtNC1kZXNrdG9wey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDozMy4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtNC1kZXNrdG9we21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0uY29sdW1uLmlzLTUtZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NDEuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTUtZGVza3RvcHttYXJnaW4tbGVmdDo0MS42NjY2NyV9LmNvbHVtbi5pcy02LWRlc2t0b3B7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjUwJX0uY29sdW1uLmlzLW9mZnNldC02LWRlc2t0b3B7bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtNy1kZXNrdG9wey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1OC4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtNy1kZXNrdG9we21hcmdpbi1sZWZ0OjU4LjMzMzMzJX0uY29sdW1uLmlzLTgtZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjYuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTgtZGVza3RvcHttYXJnaW4tbGVmdDo2Ni42NjY2NyV9LmNvbHVtbi5pcy05LWRlc2t0b3B7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLW9mZnNldC05LWRlc2t0b3B7bWFyZ2luLWxlZnQ6NzUlfS5jb2x1bW4uaXMtMTAtZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6ODMuMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTEwLWRlc2t0b3B7bWFyZ2luLWxlZnQ6ODMuMzMzMzMlfS5jb2x1bW4uaXMtMTEtZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6OTEuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTExLWRlc2t0b3B7bWFyZ2luLWxlZnQ6OTEuNjY2NjclfS5jb2x1bW4uaXMtMTItZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MTAwJX0uY29sdW1uLmlzLW9mZnNldC0xMi1kZXNrdG9we21hcmdpbi1sZWZ0OjEwMCV9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIxNnB4KXsuY29sdW1uLmlzLWZ1bGwtd2lkZXNjcmVlbiwuY29sdW1uLmlzLW5hcnJvdy13aWRlc2NyZWVuey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZX0uY29sdW1uLmlzLWZ1bGwtd2lkZXNjcmVlbnt3aWR0aDoxMDAlfS5jb2x1bW4uaXMtdGhyZWUtcXVhcnRlcnMtd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NzUlfS5jb2x1bW4uaXMtdHdvLXRoaXJkcy13aWRlc2NyZWVuey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2JX0uY29sdW1uLmlzLWhhbGYtd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTAlfS5jb2x1bW4uaXMtb25lLXRoaXJkLXdpZGVzY3JlZW57LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjMzLjMzMzMlfS5jb2x1bW4uaXMtb25lLXF1YXJ0ZXItd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb25lLWZpZnRoLXdpZGVzY3JlZW57LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjIwJX0uY29sdW1uLmlzLXR3by1maWZ0aHMtd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NDAlfS5jb2x1bW4uaXMtdGhyZWUtZmlmdGhzLXdpZGVzY3JlZW57LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjYwJX0uY29sdW1uLmlzLWZvdXItZmlmdGhzLXdpZGVzY3JlZW57LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjgwJX0uY29sdW1uLmlzLW9mZnNldC10aHJlZS1xdWFydGVycy13aWRlc2NyZWVue21hcmdpbi1sZWZ0Ojc1JX0uY29sdW1uLmlzLW9mZnNldC10d28tdGhpcmRzLXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6NjYuNjY2NiV9LmNvbHVtbi5pcy1vZmZzZXQtaGFsZi13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjUwJX0uY29sdW1uLmlzLW9mZnNldC1vbmUtdGhpcmQtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDozMy4zMzMzJX0uY29sdW1uLmlzLW9mZnNldC1vbmUtcXVhcnRlci13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjI1JX0uY29sdW1uLmlzLW9mZnNldC1vbmUtZmlmdGgtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDoyMCV9LmNvbHVtbi5pcy1vZmZzZXQtdHdvLWZpZnRocy13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjQwJX0uY29sdW1uLmlzLW9mZnNldC10aHJlZS1maWZ0aHMtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo2MCV9LmNvbHVtbi5pcy1vZmZzZXQtZm91ci1maWZ0aHMtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo4MCV9LmNvbHVtbi5pcy0xLXdpZGVzY3JlZW57LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjguMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTEtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo4LjMzMzMzJX0uY29sdW1uLmlzLTItd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MTYuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTItd2lkZXNjcmVlbnttYXJnaW4tbGVmdDoxNi42NjY2NyV9LmNvbHVtbi5pcy0zLXdpZGVzY3JlZW57LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjI1JX0uY29sdW1uLmlzLW9mZnNldC0zLXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6MjUlfS5jb2x1bW4uaXMtNC13aWRlc2NyZWVuey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDozMy4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtNC13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0uY29sdW1uLmlzLTUtd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NDEuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTUtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo0MS42NjY2NyV9LmNvbHVtbi5pcy02LXdpZGVzY3JlZW57LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjUwJX0uY29sdW1uLmlzLW9mZnNldC02LXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtNy13aWRlc2NyZWVuey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1OC4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtNy13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjU4LjMzMzMzJX0uY29sdW1uLmlzLTgtd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjYuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTgtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo2Ni42NjY2NyV9LmNvbHVtbi5pcy05LXdpZGVzY3JlZW57LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLW9mZnNldC05LXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6NzUlfS5jb2x1bW4uaXMtMTAtd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6ODMuMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTEwLXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6ODMuMzMzMzMlfS5jb2x1bW4uaXMtMTEtd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6OTEuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTExLXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6OTEuNjY2NjclfS5jb2x1bW4uaXMtMTItd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MTAwJX0uY29sdW1uLmlzLW9mZnNldC0xMi13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjEwMCV9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQwOHB4KXsuY29sdW1uLmlzLWZ1bGwtZnVsbGhkLC5jb2x1bW4uaXMtbmFycm93LWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmV9LmNvbHVtbi5pcy1mdWxsLWZ1bGxoZHt3aWR0aDoxMDAlfS5jb2x1bW4uaXMtdGhyZWUtcXVhcnRlcnMtZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo3NSV9LmNvbHVtbi5pcy10d28tdGhpcmRzLWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjYuNjY2NiV9LmNvbHVtbi5pcy1oYWxmLWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTAlfS5jb2x1bW4uaXMtb25lLXRoaXJkLWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMyV9LmNvbHVtbi5pcy1vbmUtcXVhcnRlci1mdWxsaGR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjI1JX0uY29sdW1uLmlzLW9uZS1maWZ0aC1mdWxsaGR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjIwJX0uY29sdW1uLmlzLXR3by1maWZ0aHMtZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo0MCV9LmNvbHVtbi5pcy10aHJlZS1maWZ0aHMtZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo2MCV9LmNvbHVtbi5pcy1mb3VyLWZpZnRocy1mdWxsaGR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjgwJX0uY29sdW1uLmlzLW9mZnNldC10aHJlZS1xdWFydGVycy1mdWxsaGR7bWFyZ2luLWxlZnQ6NzUlfS5jb2x1bW4uaXMtb2Zmc2V0LXR3by10aGlyZHMtZnVsbGhke21hcmdpbi1sZWZ0OjY2LjY2NjYlfS5jb2x1bW4uaXMtb2Zmc2V0LWhhbGYtZnVsbGhke21hcmdpbi1sZWZ0OjUwJX0uY29sdW1uLmlzLW9mZnNldC1vbmUtdGhpcmQtZnVsbGhke21hcmdpbi1sZWZ0OjMzLjMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1xdWFydGVyLWZ1bGxoZHttYXJnaW4tbGVmdDoyNSV9LmNvbHVtbi5pcy1vZmZzZXQtb25lLWZpZnRoLWZ1bGxoZHttYXJnaW4tbGVmdDoyMCV9LmNvbHVtbi5pcy1vZmZzZXQtdHdvLWZpZnRocy1mdWxsaGR7bWFyZ2luLWxlZnQ6NDAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLWZpZnRocy1mdWxsaGR7bWFyZ2luLWxlZnQ6NjAlfS5jb2x1bW4uaXMtb2Zmc2V0LWZvdXItZmlmdGhzLWZ1bGxoZHttYXJnaW4tbGVmdDo4MCV9LmNvbHVtbi5pcy0xLWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6OC4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtMS1mdWxsaGR7bWFyZ2luLWxlZnQ6OC4zMzMzMyV9LmNvbHVtbi5pcy0yLWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MTYuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTItZnVsbGhke21hcmdpbi1sZWZ0OjE2LjY2NjY3JX0uY29sdW1uLmlzLTMtZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoyNSV9LmNvbHVtbi5pcy1vZmZzZXQtMy1mdWxsaGR7bWFyZ2luLWxlZnQ6MjUlfS5jb2x1bW4uaXMtNC1mdWxsaGR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjMzLjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC00LWZ1bGxoZHttYXJnaW4tbGVmdDozMy4zMzMzMyV9LmNvbHVtbi5pcy01LWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NDEuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTUtZnVsbGhke21hcmdpbi1sZWZ0OjQxLjY2NjY3JX0uY29sdW1uLmlzLTYtZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1MCV9LmNvbHVtbi5pcy1vZmZzZXQtNi1mdWxsaGR7bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtNy1mdWxsaGR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjU4LjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC03LWZ1bGxoZHttYXJnaW4tbGVmdDo1OC4zMzMzMyV9LmNvbHVtbi5pcy04LWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjYuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTgtZnVsbGhke21hcmdpbi1sZWZ0OjY2LjY2NjY3JX0uY29sdW1uLmlzLTktZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo3NSV9LmNvbHVtbi5pcy1vZmZzZXQtOS1mdWxsaGR7bWFyZ2luLWxlZnQ6NzUlfS5jb2x1bW4uaXMtMTAtZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo4My4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtMTAtZnVsbGhke21hcmdpbi1sZWZ0OjgzLjMzMzMzJX0uY29sdW1uLmlzLTExLWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6OTEuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTExLWZ1bGxoZHttYXJnaW4tbGVmdDo5MS42NjY2NyV9LmNvbHVtbi5pcy0xMi1mdWxsaGR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjEwMCV9LmNvbHVtbi5pcy1vZmZzZXQtMTItZnVsbGhke21hcmdpbi1sZWZ0OjEwMCV9fS5jb2x1bW5ze21hcmdpbi1sZWZ0Oi0uNzVyZW07bWFyZ2luLXJpZ2h0Oi0uNzVyZW07bWFyZ2luLXRvcDotLjc1cmVtfS5jb2x1bW5zOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTotLjc1cmVtfS5jb2x1bW5zOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTowLjc1cmVtfS5jb2x1bW5zLmlzLWNlbnRlcmVkey13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmNvbHVtbnMuaXMtZ2FwbGVzc3ttYXJnaW4tbGVmdDowO21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MH0uY29sdW1ucy5pcy1nYXBsZXNzPi5jb2x1bW57bWFyZ2luOjA7cGFkZGluZzowIWltcG9ydGFudH0uY29sdW1ucy5pcy1nYXBsZXNzOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxLjVyZW19LmNvbHVtbnMuaXMtZ2FwbGVzczpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206MH0uY29sdW1ucy5pcy1tb2JpbGV7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0uY29sdW1ucy5pcy1tdWx0aWxpbmV7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwfS5jb2x1bW5zLmlzLXZjZW50ZXJlZHstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn1AbWVkaWEgcHJpbnQsc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsuY29sdW1uczpub3QoLmlzLWRlc2t0b3Ape2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuY29sdW1ucy5pcy1kZXNrdG9we2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9fS5jb2x1bW5zLmlzLXZhcmlhYmxley0tY29sdW1uR2FwOjAuNzVyZW07bWFyZ2luLWxlZnQ6Y2FsYygtMSAqIHZhcigtLWNvbHVtbkdhcCkpO21hcmdpbi1yaWdodDpjYWxjKC0xICogdmFyKC0tY29sdW1uR2FwKSl9LmNvbHVtbnMuaXMtdmFyaWFibGUgLmNvbHVtbntwYWRkaW5nLWxlZnQ6dmFyKC0tY29sdW1uR2FwKTtwYWRkaW5nLXJpZ2h0OnZhcigtLWNvbHVtbkdhcCl9LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtMHstLWNvbHVtbkdhcDowcmVtfS5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTF7LS1jb2x1bW5HYXA6MC4yNXJlbX0uY29sdW1ucy5pcy12YXJpYWJsZS5pcy0yey0tY29sdW1uR2FwOjAuNXJlbX0uY29sdW1ucy5pcy12YXJpYWJsZS5pcy0zey0tY29sdW1uR2FwOjAuNzVyZW19LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtNHstLWNvbHVtbkdhcDoxcmVtfS5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTV7LS1jb2x1bW5HYXA6MS4yNXJlbX0uY29sdW1ucy5pcy12YXJpYWJsZS5pcy02ey0tY29sdW1uR2FwOjEuNXJlbX0uY29sdW1ucy5pcy12YXJpYWJsZS5pcy03ey0tY29sdW1uR2FwOjEuNzVyZW19LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtOHstLWNvbHVtbkdhcDoycmVtfS50aWxley13ZWJraXQtYm94LWFsaWduOnN0cmV0Y2g7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNoO2Rpc3BsYXk6YmxvY2s7LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6MDtmbGV4LWJhc2lzOjA7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtbmVnYXRpdmU6MTtmbGV4LXNocmluazoxO21pbi1oZWlnaHQ6LXdlYmtpdC1taW4tY29udGVudDttaW4taGVpZ2h0Oi1tb3otbWluLWNvbnRlbnQ7bWluLWhlaWdodDptaW4tY29udGVudH0udGlsZS5pcy1hbmNlc3RvcnttYXJnaW4tbGVmdDotLjc1cmVtO21hcmdpbi1yaWdodDotLjc1cmVtO21hcmdpbi10b3A6LS43NXJlbX0udGlsZS5pcy1hbmNlc3RvcjpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206LS43NXJlbX0udGlsZS5pcy1hbmNlc3Rvcjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206Ljc1cmVtfS50aWxlLmlzLWNoaWxke21hcmdpbjowIWltcG9ydGFudH0udGlsZS5pcy1wYXJlbnR7cGFkZGluZzouNzVyZW19LnRpbGUuaXMtdmVydGljYWx7LXdlYmtpdC1ib3gtb3JpZW50OnZlcnRpY2FsOy13ZWJraXQtYm94LWRpcmVjdGlvbjpub3JtYWw7LW1zLWZsZXgtZGlyZWN0aW9uOmNvbHVtbjtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnRpbGUuaXMtdmVydGljYWw+LnRpbGUuaXMtY2hpbGQ6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEuNXJlbSFpbXBvcnRhbnR9QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LnRpbGU6bm90KC5pcy1jaGlsZCl7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0udGlsZS5pcy0xe3dpZHRoOjguMzMzMzMlfS50aWxlLmlzLTEsLnRpbGUuaXMtMnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmV9LnRpbGUuaXMtMnt3aWR0aDoxNi42NjY2NyV9LnRpbGUuaXMtM3t3aWR0aDoyNSV9LnRpbGUuaXMtMywudGlsZS5pcy00ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZX0udGlsZS5pcy00e3dpZHRoOjMzLjMzMzMzJX0udGlsZS5pcy01e3dpZHRoOjQxLjY2NjY3JX0udGlsZS5pcy01LC50aWxlLmlzLTZ7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lfS50aWxlLmlzLTZ7d2lkdGg6NTAlfS50aWxlLmlzLTd7d2lkdGg6NTguMzMzMzMlfS50aWxlLmlzLTcsLnRpbGUuaXMtOHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmV9LnRpbGUuaXMtOHt3aWR0aDo2Ni42NjY2NyV9LnRpbGUuaXMtOXt3aWR0aDo3NSV9LnRpbGUuaXMtOSwudGlsZS5pcy0xMHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmV9LnRpbGUuaXMtMTB7d2lkdGg6ODMuMzMzMzMlfS50aWxlLmlzLTExe3dpZHRoOjkxLjY2NjY3JX0udGlsZS5pcy0xMSwudGlsZS5pcy0xMnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmV9LnRpbGUuaXMtMTJ7d2lkdGg6MTAwJX19Lmhlcm97LXdlYmtpdC1ib3gtYWxpZ246c3RyZXRjaDstbXMtZmxleC1hbGlnbjpzdHJldGNoO2FsaWduLWl0ZW1zOnN0cmV0Y2g7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstd2Via2l0LWJveC1wYWNrOmp1c3RpZnk7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5oZXJvIC5uYXZiYXJ7YmFja2dyb3VuZDpub25lfS5oZXJvIC50YWJzIHVse2JvcmRlci1ib3R0b206bm9uZX0uaGVyby5pcy13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX0uaGVyby5pcy13aGl0ZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy13aGl0ZSBzdHJvbmd7Y29sb3I6aW5oZXJpdH0uaGVyby5pcy13aGl0ZSAudGl0bGV7Y29sb3I6IzBhMGEwYX0uaGVyby5pcy13aGl0ZSAuc3VidGl0bGV7Y29sb3I6aHNsYSgwLDAlLDQlLC45KX0uaGVyby5pcy13aGl0ZSAuc3VidGl0bGUgYTpub3QoLmJ1dHRvbiksLmhlcm8uaXMtd2hpdGUgLnN1YnRpdGxlIHN0cm9uZ3tjb2xvcjojMGEwYTBhfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaGVyby5pcy13aGl0ZSAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1jb2xvcjojZmZmfX0uaGVyby5pcy13aGl0ZSAubmF2YmFyLWl0ZW0sLmhlcm8uaXMtd2hpdGUgLm5hdmJhci1saW5re2NvbG9yOmhzbGEoMCwwJSw0JSwuNyl9Lmhlcm8uaXMtd2hpdGUgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwuaGVyby5pcy13aGl0ZSAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtd2hpdGUgYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLmhlcm8uaXMtd2hpdGUgYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7Y29sb3I6IzBhMGEwYX0uaGVyby5pcy13aGl0ZSAudGFicyBhe2NvbG9yOiMwYTBhMGE7b3BhY2l0eTouOX0uaGVyby5pcy13aGl0ZSAudGFicyBhOmhvdmVyLC5oZXJvLmlzLXdoaXRlIC50YWJzIGxpLmlzLWFjdGl2ZSBhe29wYWNpdHk6MX0uaGVyby5pcy13aGl0ZSAudGFicy5pcy1ib3hlZCBhLC5oZXJvLmlzLXdoaXRlIC50YWJzLmlzLXRvZ2dsZSBhe2NvbG9yOiMwYTBhMGF9Lmhlcm8uaXMtd2hpdGUgLnRhYnMuaXMtYm94ZWQgYTpob3ZlciwuaGVyby5pcy13aGl0ZSAudGFicy5pcy10b2dnbGUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw0JSwuMSl9Lmhlcm8uaXMtd2hpdGUgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtd2hpdGUgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtd2hpdGUgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLXdoaXRlIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGE7Ym9yZGVyLWNvbG9yOiMwYTBhMGE7Y29sb3I6I2ZmZn0uaGVyby5pcy13aGl0ZS5pcy1ib2xke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjZTZlNmU2LCNmZmYgNzElLCNmZmYpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLmlzLXdoaXRlLmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjZTZlNmU2LCNmZmYgNzElLCNmZmYpfX0uaGVyby5pcy1ibGFja3tiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGE7Y29sb3I6I2ZmZn0uaGVyby5pcy1ibGFjayBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1ibGFjayBzdHJvbmd7Y29sb3I6aW5oZXJpdH0uaGVyby5pcy1ibGFjayAudGl0bGV7Y29sb3I6I2ZmZn0uaGVyby5pcy1ibGFjayAuc3VidGl0bGV7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjkpfS5oZXJvLmlzLWJsYWNrIC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1ibGFjayAuc3VidGl0bGUgc3Ryb25ne2NvbG9yOiNmZmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5oZXJvLmlzLWJsYWNrIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGF9fS5oZXJvLmlzLWJsYWNrIC5uYXZiYXItaXRlbSwuaGVyby5pcy1ibGFjayAubmF2YmFyLWxpbmt7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjcpfS5oZXJvLmlzLWJsYWNrIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLmhlcm8uaXMtYmxhY2sgLm5hdmJhci1saW5rOmhvdmVyLC5oZXJvLmlzLWJsYWNrIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5oZXJvLmlzLWJsYWNrIGEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwO2NvbG9yOiNmZmZ9Lmhlcm8uaXMtYmxhY2sgLnRhYnMgYXtjb2xvcjojZmZmO29wYWNpdHk6Ljl9Lmhlcm8uaXMtYmxhY2sgLnRhYnMgYTpob3ZlciwuaGVyby5pcy1ibGFjayAudGFicyBsaS5pcy1hY3RpdmUgYXtvcGFjaXR5OjF9Lmhlcm8uaXMtYmxhY2sgLnRhYnMuaXMtYm94ZWQgYSwuaGVyby5pcy1ibGFjayAudGFicy5pcy10b2dnbGUgYXtjb2xvcjojZmZmfS5oZXJvLmlzLWJsYWNrIC50YWJzLmlzLWJveGVkIGE6aG92ZXIsLmhlcm8uaXMtYmxhY2sgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsNCUsLjEpfS5oZXJvLmlzLWJsYWNrIC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLWJsYWNrIC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhOmhvdmVyLC5oZXJvLmlzLWJsYWNrIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy1ibGFjayAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiMwYTBhMGF9Lmhlcm8uaXMtYmxhY2suaXMtYm9sZHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxNDFkZWcsIzAwMCwjMGEwYTBhIDcxJSwjMTgxNjE2KX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGVyby5pcy1ibGFjay5pcy1ib2xkIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxNDFkZWcsIzAwMCwjMGEwYTBhIDcxJSwjMTgxNjE2KX19Lmhlcm8uaXMtbGlnaHR7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMzNjM2MzZ9Lmhlcm8uaXMtbGlnaHQgYTpub3QoLmJ1dHRvbiksLmhlcm8uaXMtbGlnaHQgc3Ryb25ne2NvbG9yOmluaGVyaXR9Lmhlcm8uaXMtbGlnaHQgLnRpdGxle2NvbG9yOiMzNjM2MzZ9Lmhlcm8uaXMtbGlnaHQgLnN1YnRpdGxle2NvbG9yOnJnYmEoNTQsNTQsNTQsLjkpfS5oZXJvLmlzLWxpZ2h0IC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1saWdodCAuc3VidGl0bGUgc3Ryb25ne2NvbG9yOiMzNjM2MzZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5oZXJvLmlzLWxpZ2h0IC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9fS5oZXJvLmlzLWxpZ2h0IC5uYXZiYXItaXRlbSwuaGVyby5pcy1saWdodCAubmF2YmFyLWxpbmt7Y29sb3I6cmdiYSg1NCw1NCw1NCwuNyl9Lmhlcm8uaXMtbGlnaHQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwuaGVyby5pcy1saWdodCAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtbGlnaHQgYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLmhlcm8uaXMtbGlnaHQgYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTg7Y29sb3I6IzM2MzYzNn0uaGVyby5pcy1saWdodCAudGFicyBhe2NvbG9yOiMzNjM2MzY7b3BhY2l0eTouOX0uaGVyby5pcy1saWdodCAudGFicyBhOmhvdmVyLC5oZXJvLmlzLWxpZ2h0IC50YWJzIGxpLmlzLWFjdGl2ZSBhe29wYWNpdHk6MX0uaGVyby5pcy1saWdodCAudGFicy5pcy1ib3hlZCBhLC5oZXJvLmlzLWxpZ2h0IC50YWJzLmlzLXRvZ2dsZSBhe2NvbG9yOiMzNjM2MzZ9Lmhlcm8uaXMtbGlnaHQgLnRhYnMuaXMtYm94ZWQgYTpob3ZlciwuaGVyby5pcy1saWdodCAudGFicy5pcy10b2dnbGUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw0JSwuMSl9Lmhlcm8uaXMtbGlnaHQgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtbGlnaHQgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtbGlnaHQgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLWxpZ2h0IC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzY7Ym9yZGVyLWNvbG9yOiMzNjM2MzY7Y29sb3I6I2Y1ZjVmNX0uaGVyby5pcy1saWdodC5pcy1ib2xke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjZGZkOGQ5LCNmNWY1ZjUgNzElLCNmZmYpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLmlzLWxpZ2h0LmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjZGZkOGQ5LCNmNWY1ZjUgNzElLCNmZmYpfX0uaGVyby5pcy1kYXJre2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fS5oZXJvLmlzLWRhcmsgYTpub3QoLmJ1dHRvbiksLmhlcm8uaXMtZGFyayBzdHJvbmd7Y29sb3I6aW5oZXJpdH0uaGVyby5pcy1kYXJrIC50aXRsZXtjb2xvcjojZjVmNWY1fS5oZXJvLmlzLWRhcmsgLnN1YnRpdGxle2NvbG9yOmhzbGEoMCwwJSw5NiUsLjkpfS5oZXJvLmlzLWRhcmsgLnN1YnRpdGxlIGE6bm90KC5idXR0b24pLC5oZXJvLmlzLWRhcmsgLnN1YnRpdGxlIHN0cm9uZ3tjb2xvcjojZjVmNWY1fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaGVyby5pcy1kYXJrIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzZ9fS5oZXJvLmlzLWRhcmsgLm5hdmJhci1pdGVtLC5oZXJvLmlzLWRhcmsgLm5hdmJhci1saW5re2NvbG9yOmhzbGEoMCwwJSw5NiUsLjcpfS5oZXJvLmlzLWRhcmsgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwuaGVyby5pcy1kYXJrIC5uYXZiYXItbGluazpob3ZlciwuaGVyby5pcy1kYXJrIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5oZXJvLmlzLWRhcmsgYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyOTI5Mjk7Y29sb3I6I2Y1ZjVmNX0uaGVyby5pcy1kYXJrIC50YWJzIGF7Y29sb3I6I2Y1ZjVmNTtvcGFjaXR5Oi45fS5oZXJvLmlzLWRhcmsgLnRhYnMgYTpob3ZlciwuaGVyby5pcy1kYXJrIC50YWJzIGxpLmlzLWFjdGl2ZSBhe29wYWNpdHk6MX0uaGVyby5pcy1kYXJrIC50YWJzLmlzLWJveGVkIGEsLmhlcm8uaXMtZGFyayAudGFicy5pcy10b2dnbGUgYXtjb2xvcjojZjVmNWY1fS5oZXJvLmlzLWRhcmsgLnRhYnMuaXMtYm94ZWQgYTpob3ZlciwuaGVyby5pcy1kYXJrIC50YWJzLmlzLXRvZ2dsZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDQlLC4xKX0uaGVyby5pcy1kYXJrIC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLWRhcmsgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtZGFyayAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtZGFyayAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1jb2xvcjojZjVmNWY1O2NvbG9yOiMzNjM2MzZ9Lmhlcm8uaXMtZGFyay5pcy1ib2xke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMWYxOTFhLCMzNjM2MzYgNzElLCM0NjQwM2YpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLmlzLWRhcmsuaXMtYm9sZCAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCMxZjE5MWEsIzM2MzYzNiA3MSUsIzQ2NDAzZil9fS5oZXJvLmlzLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2NvbG9yOiNmZmZ9Lmhlcm8uaXMtcHJpbWFyeSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1wcmltYXJ5IHN0cm9uZ3tjb2xvcjppbmhlcml0fS5oZXJvLmlzLXByaW1hcnkgLnRpdGxle2NvbG9yOiNmZmZ9Lmhlcm8uaXMtcHJpbWFyeSAuc3VidGl0bGV7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjkpfS5oZXJvLmlzLXByaW1hcnkgLnN1YnRpdGxlIGE6bm90KC5idXR0b24pLC5oZXJvLmlzLXByaW1hcnkgLnN1YnRpdGxlIHN0cm9uZ3tjb2xvcjojZmZmfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaGVyby5pcy1wcmltYXJ5IC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjJ9fS5oZXJvLmlzLXByaW1hcnkgLm5hdmJhci1pdGVtLC5oZXJvLmlzLXByaW1hcnkgLm5hdmJhci1saW5re2NvbG9yOmhzbGEoMCwwJSwxMDAlLC43KX0uaGVyby5pcy1wcmltYXJ5IC5uYXZiYXItbGluay5pcy1hY3RpdmUsLmhlcm8uaXMtcHJpbWFyeSAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtcHJpbWFyeSBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwuaGVyby5pcy1wcmltYXJ5IGEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDBiODljO2NvbG9yOiNmZmZ9Lmhlcm8uaXMtcHJpbWFyeSAudGFicyBhe2NvbG9yOiNmZmY7b3BhY2l0eTouOX0uaGVyby5pcy1wcmltYXJ5IC50YWJzIGE6aG92ZXIsLmhlcm8uaXMtcHJpbWFyeSAudGFicyBsaS5pcy1hY3RpdmUgYXtvcGFjaXR5OjF9Lmhlcm8uaXMtcHJpbWFyeSAudGFicy5pcy1ib3hlZCBhLC5oZXJvLmlzLXByaW1hcnkgLnRhYnMuaXMtdG9nZ2xlIGF7Y29sb3I6I2ZmZn0uaGVyby5pcy1wcmltYXJ5IC50YWJzLmlzLWJveGVkIGE6aG92ZXIsLmhlcm8uaXMtcHJpbWFyeSAudGFicy5pcy10b2dnbGUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw0JSwuMSl9Lmhlcm8uaXMtcHJpbWFyeSAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy1wcmltYXJ5IC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhOmhvdmVyLC5oZXJvLmlzLXByaW1hcnkgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLXByaW1hcnkgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojMDBkMWIyfS5oZXJvLmlzLXByaW1hcnkuaXMtYm9sZHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxNDFkZWcsIzAwOWU2YywjMDBkMWIyIDcxJSwjMDBlN2ViKX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGVyby5pcy1wcmltYXJ5LmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMDA5ZTZjLCMwMGQxYjIgNzElLCMwMGU3ZWIpfX0uaGVyby5pcy1saW5re2JhY2tncm91bmQtY29sb3I6IzMyNzNkYztjb2xvcjojZmZmfS5oZXJvLmlzLWxpbmsgYTpub3QoLmJ1dHRvbiksLmhlcm8uaXMtbGluayBzdHJvbmd7Y29sb3I6aW5oZXJpdH0uaGVyby5pcy1saW5rIC50aXRsZXtjb2xvcjojZmZmfS5oZXJvLmlzLWxpbmsgLnN1YnRpdGxle2NvbG9yOmhzbGEoMCwwJSwxMDAlLC45KX0uaGVyby5pcy1saW5rIC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1saW5rIC5zdWJ0aXRsZSBzdHJvbmd7Y29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7Lmhlcm8uaXMtbGluayAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjfX0uaGVyby5pcy1saW5rIC5uYXZiYXItaXRlbSwuaGVyby5pcy1saW5rIC5uYXZiYXItbGlua3tjb2xvcjpoc2xhKDAsMCUsMTAwJSwuNyl9Lmhlcm8uaXMtbGluayAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5oZXJvLmlzLWxpbmsgLm5hdmJhci1saW5rOmhvdmVyLC5oZXJvLmlzLWxpbmsgYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLmhlcm8uaXMtbGluayBhLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzIzNjZkMTtjb2xvcjojZmZmfS5oZXJvLmlzLWxpbmsgLnRhYnMgYXtjb2xvcjojZmZmO29wYWNpdHk6Ljl9Lmhlcm8uaXMtbGluayAudGFicyBhOmhvdmVyLC5oZXJvLmlzLWxpbmsgLnRhYnMgbGkuaXMtYWN0aXZlIGF7b3BhY2l0eToxfS5oZXJvLmlzLWxpbmsgLnRhYnMuaXMtYm94ZWQgYSwuaGVyby5pcy1saW5rIC50YWJzLmlzLXRvZ2dsZSBhe2NvbG9yOiNmZmZ9Lmhlcm8uaXMtbGluayAudGFicy5pcy1ib3hlZCBhOmhvdmVyLC5oZXJvLmlzLWxpbmsgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsNCUsLjEpfS5oZXJvLmlzLWxpbmsgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtbGluayAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYTpob3ZlciwuaGVyby5pcy1saW5rIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy1saW5rIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6IzMyNzNkY30uaGVyby5pcy1saW5rLmlzLWJvbGR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCMxNTc3YzYsIzMyNzNkYyA3MSUsIzQzNjZlNSl9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7Lmhlcm8uaXMtbGluay5pcy1ib2xkIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxNDFkZWcsIzE1NzdjNiwjMzI3M2RjIDcxJSwjNDM2NmU1KX19Lmhlcm8uaXMtaW5mb3tiYWNrZ3JvdW5kLWNvbG9yOiMyMDljZWU7Y29sb3I6I2ZmZn0uaGVyby5pcy1pbmZvIGE6bm90KC5idXR0b24pLC5oZXJvLmlzLWluZm8gc3Ryb25ne2NvbG9yOmluaGVyaXR9Lmhlcm8uaXMtaW5mbyAudGl0bGV7Y29sb3I6I2ZmZn0uaGVyby5pcy1pbmZvIC5zdWJ0aXRsZXtjb2xvcjpoc2xhKDAsMCUsMTAwJSwuOSl9Lmhlcm8uaXMtaW5mbyAuc3VidGl0bGUgYTpub3QoLmJ1dHRvbiksLmhlcm8uaXMtaW5mbyAuc3VidGl0bGUgc3Ryb25ne2NvbG9yOiNmZmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5oZXJvLmlzLWluZm8gLm5hdmJhci1tZW51e2JhY2tncm91bmQtY29sb3I6IzIwOWNlZX19Lmhlcm8uaXMtaW5mbyAubmF2YmFyLWl0ZW0sLmhlcm8uaXMtaW5mbyAubmF2YmFyLWxpbmt7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjcpfS5oZXJvLmlzLWluZm8gLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwuaGVyby5pcy1pbmZvIC5uYXZiYXItbGluazpob3ZlciwuaGVyby5pcy1pbmZvIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5oZXJvLmlzLWluZm8gYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMxMThmZTQ7Y29sb3I6I2ZmZn0uaGVyby5pcy1pbmZvIC50YWJzIGF7Y29sb3I6I2ZmZjtvcGFjaXR5Oi45fS5oZXJvLmlzLWluZm8gLnRhYnMgYTpob3ZlciwuaGVyby5pcy1pbmZvIC50YWJzIGxpLmlzLWFjdGl2ZSBhe29wYWNpdHk6MX0uaGVyby5pcy1pbmZvIC50YWJzLmlzLWJveGVkIGEsLmhlcm8uaXMtaW5mbyAudGFicy5pcy10b2dnbGUgYXtjb2xvcjojZmZmfS5oZXJvLmlzLWluZm8gLnRhYnMuaXMtYm94ZWQgYTpob3ZlciwuaGVyby5pcy1pbmZvIC50YWJzLmlzLXRvZ2dsZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDQlLC4xKX0uaGVyby5pcy1pbmZvIC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLWluZm8gLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtaW5mbyAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtaW5mbyAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiMyMDljZWV9Lmhlcm8uaXMtaW5mby5pcy1ib2xke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMDRhNmQ3LCMyMDljZWUgNzElLCMzMjg3ZjUpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLmlzLWluZm8uaXMtYm9sZCAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCMwNGE2ZDcsIzIwOWNlZSA3MSUsIzMyODdmNSl9fS5oZXJvLmlzLXN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2NvbG9yOiNmZmZ9Lmhlcm8uaXMtc3VjY2VzcyBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1zdWNjZXNzIHN0cm9uZ3tjb2xvcjppbmhlcml0fS5oZXJvLmlzLXN1Y2Nlc3MgLnRpdGxle2NvbG9yOiNmZmZ9Lmhlcm8uaXMtc3VjY2VzcyAuc3VidGl0bGV7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjkpfS5oZXJvLmlzLXN1Y2Nlc3MgLnN1YnRpdGxlIGE6bm90KC5idXR0b24pLC5oZXJvLmlzLXN1Y2Nlc3MgLnN1YnRpdGxlIHN0cm9uZ3tjb2xvcjojZmZmfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaGVyby5pcy1zdWNjZXNzIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjB9fS5oZXJvLmlzLXN1Y2Nlc3MgLm5hdmJhci1pdGVtLC5oZXJvLmlzLXN1Y2Nlc3MgLm5hdmJhci1saW5re2NvbG9yOmhzbGEoMCwwJSwxMDAlLC43KX0uaGVyby5pcy1zdWNjZXNzIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLmhlcm8uaXMtc3VjY2VzcyAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtc3VjY2VzcyBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwuaGVyby5pcy1zdWNjZXNzIGEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjBiYzU2O2NvbG9yOiNmZmZ9Lmhlcm8uaXMtc3VjY2VzcyAudGFicyBhe2NvbG9yOiNmZmY7b3BhY2l0eTouOX0uaGVyby5pcy1zdWNjZXNzIC50YWJzIGE6aG92ZXIsLmhlcm8uaXMtc3VjY2VzcyAudGFicyBsaS5pcy1hY3RpdmUgYXtvcGFjaXR5OjF9Lmhlcm8uaXMtc3VjY2VzcyAudGFicy5pcy1ib3hlZCBhLC5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMuaXMtdG9nZ2xlIGF7Y29sb3I6I2ZmZn0uaGVyby5pcy1zdWNjZXNzIC50YWJzLmlzLWJveGVkIGE6aG92ZXIsLmhlcm8uaXMtc3VjY2VzcyAudGFicy5pcy10b2dnbGUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw0JSwuMSl9Lmhlcm8uaXMtc3VjY2VzcyAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy1zdWNjZXNzIC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhOmhvdmVyLC5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojMjNkMTYwfS5oZXJvLmlzLXN1Y2Nlc3MuaXMtYm9sZHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxNDFkZWcsIzEyYWYyZiwjMjNkMTYwIDcxJSwjMmNlMjhhKX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGVyby5pcy1zdWNjZXNzLmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMTJhZjJmLCMyM2QxNjAgNzElLCMyY2UyOGEpfX0uaGVyby5pcy13YXJuaW5ne2JhY2tncm91bmQtY29sb3I6I2ZmZGQ1Nztjb2xvcjpyZ2JhKDAsMCwwLC43KX0uaGVyby5pcy13YXJuaW5nIGE6bm90KC5idXR0b24pLC5oZXJvLmlzLXdhcm5pbmcgc3Ryb25ne2NvbG9yOmluaGVyaXR9Lmhlcm8uaXMtd2FybmluZyAudGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuNyl9Lmhlcm8uaXMtd2FybmluZyAuc3VidGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuOSl9Lmhlcm8uaXMtd2FybmluZyAuc3VidGl0bGUgYTpub3QoLmJ1dHRvbiksLmhlcm8uaXMtd2FybmluZyAuc3VidGl0bGUgc3Ryb25ne2NvbG9yOnJnYmEoMCwwLDAsLjcpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaGVyby5pcy13YXJuaW5nIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTd9fS5oZXJvLmlzLXdhcm5pbmcgLm5hdmJhci1pdGVtLC5oZXJvLmlzLXdhcm5pbmcgLm5hdmJhci1saW5re2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5oZXJvLmlzLXdhcm5pbmcgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwuaGVyby5pcy13YXJuaW5nIC5uYXZiYXItbGluazpob3ZlciwuaGVyby5pcy13YXJuaW5nIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5oZXJvLmlzLXdhcm5pbmcgYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ4M2Q7Y29sb3I6cmdiYSgwLDAsMCwuNyl9Lmhlcm8uaXMtd2FybmluZyAudGFicyBhe2NvbG9yOnJnYmEoMCwwLDAsLjcpO29wYWNpdHk6Ljl9Lmhlcm8uaXMtd2FybmluZyAudGFicyBhOmhvdmVyLC5oZXJvLmlzLXdhcm5pbmcgLnRhYnMgbGkuaXMtYWN0aXZlIGF7b3BhY2l0eToxfS5oZXJvLmlzLXdhcm5pbmcgLnRhYnMuaXMtYm94ZWQgYSwuaGVyby5pcy13YXJuaW5nIC50YWJzLmlzLXRvZ2dsZSBhe2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5oZXJvLmlzLXdhcm5pbmcgLnRhYnMuaXMtYm94ZWQgYTpob3ZlciwuaGVyby5pcy13YXJuaW5nIC50YWJzLmlzLXRvZ2dsZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDQlLC4xKX0uaGVyby5pcy13YXJuaW5nIC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLXdhcm5pbmcgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtd2FybmluZyAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtd2FybmluZyAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC43KTtib3JkZXItY29sb3I6cmdiYSgwLDAsMCwuNyk7Y29sb3I6I2ZmZGQ1N30uaGVyby5pcy13YXJuaW5nLmlzLWJvbGR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCNmZmFmMjQsI2ZmZGQ1NyA3MSUsI2ZmZmE3MCl9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7Lmhlcm8uaXMtd2FybmluZy5pcy1ib2xkIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxNDFkZWcsI2ZmYWYyNCwjZmZkZDU3IDcxJSwjZmZmYTcwKX19Lmhlcm8uaXMtZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MDtjb2xvcjojZmZmfS5oZXJvLmlzLWRhbmdlciBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1kYW5nZXIgc3Ryb25ne2NvbG9yOmluaGVyaXR9Lmhlcm8uaXMtZGFuZ2VyIC50aXRsZXtjb2xvcjojZmZmfS5oZXJvLmlzLWRhbmdlciAuc3VidGl0bGV7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjkpfS5oZXJvLmlzLWRhbmdlciAuc3VidGl0bGUgYTpub3QoLmJ1dHRvbiksLmhlcm8uaXMtZGFuZ2VyIC5zdWJ0aXRsZSBzdHJvbmd7Y29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7Lmhlcm8uaXMtZGFuZ2VyIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjB9fS5oZXJvLmlzLWRhbmdlciAubmF2YmFyLWl0ZW0sLmhlcm8uaXMtZGFuZ2VyIC5uYXZiYXItbGlua3tjb2xvcjpoc2xhKDAsMCUsMTAwJSwuNyl9Lmhlcm8uaXMtZGFuZ2VyIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLmhlcm8uaXMtZGFuZ2VyIC5uYXZiYXItbGluazpob3ZlciwuaGVyby5pcy1kYW5nZXIgYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLmhlcm8uaXMtZGFuZ2VyIGEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmYxZjRiO2NvbG9yOiNmZmZ9Lmhlcm8uaXMtZGFuZ2VyIC50YWJzIGF7Y29sb3I6I2ZmZjtvcGFjaXR5Oi45fS5oZXJvLmlzLWRhbmdlciAudGFicyBhOmhvdmVyLC5oZXJvLmlzLWRhbmdlciAudGFicyBsaS5pcy1hY3RpdmUgYXtvcGFjaXR5OjF9Lmhlcm8uaXMtZGFuZ2VyIC50YWJzLmlzLWJveGVkIGEsLmhlcm8uaXMtZGFuZ2VyIC50YWJzLmlzLXRvZ2dsZSBhe2NvbG9yOiNmZmZ9Lmhlcm8uaXMtZGFuZ2VyIC50YWJzLmlzLWJveGVkIGE6aG92ZXIsLmhlcm8uaXMtZGFuZ2VyIC50YWJzLmlzLXRvZ2dsZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDQlLC4xKX0uaGVyby5pcy1kYW5nZXIgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtZGFuZ2VyIC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhOmhvdmVyLC5oZXJvLmlzLWRhbmdlciAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtZGFuZ2VyIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6I2ZmMzg2MH0uaGVyby5pcy1kYW5nZXIuaXMtYm9sZHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxNDFkZWcsI2ZmMDU2MSwjZmYzODYwIDcxJSwjZmY1MjU3KX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGVyby5pcy1kYW5nZXIuaXMtYm9sZCAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCNmZjA1NjEsI2ZmMzg2MCA3MSUsI2ZmNTI1Nyl9fS5oZXJvLmlzLXNtYWxsIC5oZXJvLWJvZHl7cGFkZGluZy1ib3R0b206MS41cmVtO3BhZGRpbmctdG9wOjEuNXJlbX1AbWVkaWEgcHJpbnQsc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsuaGVyby5pcy1tZWRpdW0gLmhlcm8tYm9keXtwYWRkaW5nLWJvdHRvbTo5cmVtO3BhZGRpbmctdG9wOjlyZW19fUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5oZXJvLmlzLWxhcmdlIC5oZXJvLWJvZHl7cGFkZGluZy1ib3R0b206MThyZW07cGFkZGluZy10b3A6MThyZW19fS5oZXJvLmlzLWZ1bGxoZWlnaHQgLmhlcm8tYm9keSwuaGVyby5pcy1oYWxmaGVpZ2h0IC5oZXJvLWJvZHl7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0uaGVyby5pcy1mdWxsaGVpZ2h0IC5oZXJvLWJvZHk+LmNvbnRhaW5lciwuaGVyby5pcy1oYWxmaGVpZ2h0IC5oZXJvLWJvZHk+LmNvbnRhaW5lcnstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1uZWdhdGl2ZToxO2ZsZXgtc2hyaW5rOjF9Lmhlcm8uaXMtaGFsZmhlaWdodHttaW4taGVpZ2h0OjUwdmh9Lmhlcm8uaXMtZnVsbGhlaWdodHttaW4taGVpZ2h0OjEwMHZofS5oZXJvLXZpZGVve2JvdHRvbTowO2xlZnQ6MDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowO292ZXJmbG93OmhpZGRlbn0uaGVyby12aWRlbyB2aWRlb3tsZWZ0OjUwJTttaW4taGVpZ2h0OjEwMCU7bWluLXdpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtNTAlLC01MCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKX0uaGVyby12aWRlby5pcy10cmFuc3BhcmVudHtvcGFjaXR5Oi4zfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLXZpZGVve2Rpc3BsYXk6bm9uZX19Lmhlcm8tYnV0dG9uc3ttYXJnaW4tdG9wOjEuNXJlbX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGVyby1idXR0b25zIC5idXR0b257ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0uaGVyby1idXR0b25zIC5idXR0b246bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOi43NXJlbX19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7Lmhlcm8tYnV0dG9uc3tkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9Lmhlcm8tYnV0dG9ucyAuYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLXJpZ2h0OjEuNXJlbX19Lmhlcm8tZm9vdCwuaGVyby1oZWFkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleC1wb3NpdGl2ZTowO2ZsZXgtZ3JvdzowfS5oZXJvLWJvZHksLmhlcm8tZm9vdCwuaGVyby1oZWFkey1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MH0uaGVyby1ib2R5ey13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxfS5oZXJvLWJvZHksLnNlY3Rpb257cGFkZGluZzozcmVtIDEuNXJlbX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7LnNlY3Rpb24uaXMtbWVkaXVte3BhZGRpbmc6OXJlbSAxLjVyZW19LnNlY3Rpb24uaXMtbGFyZ2V7cGFkZGluZzoxOHJlbSAxLjVyZW19fS5mb290ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O3BhZGRpbmc6M3JlbSAxLjVyZW0gNnJlbX1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcIm1pbmltaXplXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvYnVsbWEvY3NzL2J1bG1hLmNzc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL3N0eWxlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9zdHlsZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY3NzL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3tcXFwibWluaW1pemVcXFwiOnRydWV9IS4uL2Nzcy9ncmlkLmNzc1wiKSwgXCJcIik7XG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1xcXCJtaW5pbWl6ZVxcXCI6dHJ1ZX0hLi4vY3NzL3N1cGVyZmlzaC5jc3NcIiksIFwiXCIpO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImlucHV0e291dGxpbmU6bm9uZSFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czowIWltcG9ydGFudH1odG1se3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3ZlcmZsb3cteTphdXRvfWJvZHl7bWluLWhlaWdodDoxMDAlfWFbaHJlZl49XFxcInRlbDpcXFwiXXtjb2xvcjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjpub25lfSp7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0Om5vbmV9Lm15dGFpbmVye21heC13aWR0aDo5NjBweDt3aWR0aDo5NjBweDttYXJnaW46YXV0b31ib2R5e2ZvbnQ6MTJweC8xOHB4IEFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2NvbG9yOiM3NjcxNzE7cG9zaXRpb246cmVsYXRpdmU7bWluLXdpZHRoOjk2MHB4O2JhY2tncm91bmQtc2l6ZTpjb250YWlufS5pY3tib3JkZXI6MDtmbG9hdDpyaWdodDtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6cmVkO3dpZHRoOjUwJTtsaW5lLWhlaWdodDoxMHB4O2ZvbnQtc2l6ZToxMHB4O21hcmdpbjotMjIwJSAwIDA7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6MH1oMSxoMixoMyxoNCxoNSxoNntmb250LXdlaWdodDo0MDA7Zm9udC1mYW1pbHk6T3N3YWxkLHNhbnMtc2VyaWY7Y29sb3I6IzAwMH1oM3tmb250LXNpemU6MzBweDtsaW5lLWhlaWdodDoyNHB4O3RvcDotM3B4O21hcmdpbi1ib3R0b206MjNweH1oMyxoNHtwb3NpdGlvbjpyZWxhdGl2ZX1oNHtmb250LXNpemU6MThweDtsaW5lLWhlaWdodDoxOHB4O21hcmdpbi10b3A6LTRweDttYXJnaW4tYm90dG9tOjE0cHh9cHttYXJnaW4tYm90dG9tOjE4cHh9aW1ne21heC13aWR0aDoxMDAlfWFkZHJlc3N7Zm9udC1zdHlsZTpub3JtYWx9dWx7cGFkZGluZzowO21hcmdpbjowO2xpc3Qtc3R5bGU6bm9uZX11bC5saXN0e292ZXJmbG93OmhpZGRlbn11bC5saXN0IGxpe3BhZGRpbmctbGVmdDoxMXB4fXVsLmxpc3QgbGkrbGl7bWFyZ2luLXRvcDo5cHh9YXt0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjppbmhlcml0O291dGxpbmU6bm9uZTt0cmFuc2l0aW9uOi41cyBlYXNlOy1vLXRyYW5zaXRpb246LjVzIGVhc2U7LXdlYmtpdC10cmFuc2l0aW9uOi41cyBlYXNlfWE6aG92ZXJ7Y29sb3I6IzE0ZmE0Nn1hLmJ0bntkaXNwbGF5OmlubGluZS1ibG9jaztmb250OjE4cHgvMThweCBPc3dhbGQsc2Fucy1zZXJpZjtjb2xvcjojYWMyMTM1O3BhZGRpbmctcmlnaHQ6MTVweDttYXJnaW4tcmlnaHQ6LTQ5cHg7bWFyZ2luLXRvcDozMHB4fWEuYnRuOmhvdmVye2NvbG9yOiMwMDB9Lm1iMHttYXJnaW4tYm90dG9tOjAhaW1wb3J0YW50fS5tMHttYXJnaW46MCFpbXBvcnRhbnR9Lm1iMXttYXJnaW4tYm90dG9tOjI1cHghaW1wb3J0YW50fS5pbmQxe21hcmdpbi10b3A6MTFweH0ucGFkMHtwYWRkaW5nOjAhaW1wb3J0YW50fS5wdDB7cGFkZGluZy10b3A6MH0uaW1nX2lubmVye21heC13aWR0aDoxMDAlOy1tb3otYm94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1vLWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luLWJvdHRvbToyOHB4O3Bvc2l0aW9uOnJlbGF0aXZlfS5mbGVmdHtmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDoyMHB4O21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjA7Ym9yZGVyOjFweCBzb2xpZCAjYWYyOTNjfS5mcmlnaHR7ZmxvYXQ6cmlnaHQhaW1wb3J0YW50fS51cHB7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS5hbHJpZ2h0e3RleHQtYWxpZ246cmlnaHR9LmNlbnRlcnt0ZXh0LWFsaWduOmNlbnRlcn0uZXh0cmFfd3JhcHBlciwud3JhcHBlcntvdmVyZmxvdzpoaWRkZW59LmNsZWFye2Zsb2F0Om5vbmUhaW1wb3J0YW50O2NsZWFyOmJvdGh9aGVhZGVye2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDo5OTk7bWFyZ2luLWJvdHRvbTo2MHB4fWhlYWRlciBhOmhvdmVye2NvbG9yOiMwMDB9LnBhZ2UxIGgxe3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjUwJTttYXJnaW4tcmlnaHQ6LTQ3MHB4fWgxe2Zsb2F0OnJpZ2h0O3otaW5kZXg6OTk5fWgxIGF7b3ZlcmZsb3c6aGlkZGVuO3dpZHRoOjE2NHB4O2hlaWdodDoxNTFweDt0ZXh0LWluZGVudDotOTk5cHg7dHJhbnNpdGlvbjowcyBlYXNlOy1vLXRyYW5zaXRpb246MHMgZWFzZTstd2Via2l0LXRyYW5zaXRpb246MHMgZWFzZX1oMSBhLGgxIGEgaW1ne2Rpc3BsYXk6YmxvY2t9I3NlYXJjaHtmbG9hdDpyaWdodDt3aWR0aDo4MXB4O3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjttYXJnaW4tdG9wOjE5cHh9I3NlYXJjaCBpbnB1dHtiYWNrZ3JvdW5kLWNvbG9yOiM2OTE4Mjg7Ym9yZGVyOm5vbmU7ZmxvYXQ6bm9uZTtoZWlnaHQ6MjVweDtwYWRkaW5nOjRweCAzNnB4IDNweCAxMHB4O2NvbG9yOiNmZmY7Zm9udDoxMnB4LzE4cHggQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7d2lkdGg6MTAwJTstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstby1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fSNzZWFyY2ggYXt3aWR0aDo0MHB4O2hlaWdodDoyNXB4O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MDtjdXJzb3I6cG9pbnRlcn0jc2VhcmNoIGE6aG92ZXJ7b3BhY2l0eTouNX0uc29jaWFsc3t0ZXh0LWFsaWduOmNlbnRlcjtmbG9hdDpyaWdodDtwYWRkaW5nLXRvcDoxOHB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nLXJpZ2h0OjI1cHh9LnNvY2lhbHMgYXtkaXNwbGF5OmJsb2NrO2Zsb2F0OmxlZnQ7d2lkdGg6MjhweDtoZWlnaHQ6MjhweH0uc29jaWFscyBhK2F7bWFyZ2luLWxlZnQ6N3B4O2JhY2tncm91bmQtcG9zaXRpb246LTM1cHggMH0uc29jaWFscyBhK2ErYXtiYWNrZ3JvdW5kLXBvc2l0aW9uOi03MXB4IDB9LnNvY2lhbHMgYSthK2ErYXtiYWNrZ3JvdW5kLXBvc2l0aW9uOnJpZ2h0IDB9LnNvY2lhbHMgYTpob3ZlcntvcGFjaXR5Oi43fSNmb3JtKy5zdHlsZTF7bWFyZ2luLXJpZ2h0Oi0xMHB4fS5jb250ZW50e3BhZGRpbmc6MzJweCA4MHB4IDMwcHg7bWFyZ2luLWJvdHRvbToyMjNweH0ucGFnZTEgLmNvbnRlbnR7cGFkZGluZy1sZWZ0OjMycHg7cGFkZGluZy1yaWdodDozMnB4O21hcmdpbi1ib3R0b206MH0ucGFnZTEgLmNvbnRlbnQgaDN7cGFkZGluZy10b3A6MXB4O3BhZGRpbmctYm90dG9tOjA7bWFyZ2luLWJvdHRvbToyN3B4fS5wYWdlMSAuY29udGVudCBhLmJ0bnttYXJnaW4tcmlnaHQ6MDttYXJnaW4tdG9wOjI0cHh9LnBhZ2UxIC5jb250ZW50IHVsIHNwYW57Y29sb3I6IzAwMDtmb250LXdlaWdodDo2MDB9LnBhZ2UxIC5jb250ZW50IHVse3BhZGRpbmctdG9wOjVweH0ucGFnZTEgLmNvbnRlbnQgdWwgbGl7Zm9udC1zaXplOjE2cHh9LnBhZ2UxIC5jb250ZW50IHVsIGxpK2xpe21hcmdpbi10b3A6MTRweH0ucGFnZTEgLmNvbnRlbnQgdWwgbGkrbGkrbGkrbGl7bWFyZ2luLXRvcDoxOHB4fS5wYWdlMSAuY29udGVudCBpbWd7bWFyZ2luLWxlZnQ6MTZweDtmbG9hdDpyaWdodH0ucGFnZTEgLmNvbnRlbnQgcCwuc3R5bGUxe2NvbG9yOiMwMDB9LnBhZ2UxIC5jb250ZW50IHAgYSwuc3R5bGUxIGF7Y29sb3I6I2ZmNGE0YX0ucGFnZTEgLmNvbnRlbnQgcCBhOmhvdmVyLC5zdHlsZTEgYTpob3Zlcntjb2xvcjojMDAwfS5ibG9jazEgaDN7bWFyZ2luLWJvdHRvbTo2cHh9LmJsb2NrMSsuYmxvY2sxe21hcmdpbi10b3A6NTFweH0uY2wxe2hlaWdodDoxOHB4fXVsLmxpc3Qye2ZvbnQtc2l6ZToxNnB4O3BhZGRpbmctdG9wOjIwcHh9dWwubGlzdDIgc3Bhbntjb2xvcjojMDAwfXVsLmxpc3QyIGxpe3BhZGRpbmctbGVmdDoxMXB4fXVsLmxpc3QyIGxpK2xpe21hcmdpbi10b3A6MTBweH1oMy5oZWFkMXtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6LThweH0uYmxvY2syIC5leHRyYV93cmFwcGVye3BhZGRpbmctdG9wOjdweDttYXJnaW4tdG9wOi01cHh9LmJsb2NrMiBhLmJ0bnttYXJnaW4tdG9wOjA7bWFyZ2luLWxlZnQ6N3B4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxM3B4O2JhY2tncm91bmQtcG9zaXRpb246cmlnaHQgM3B4fS5ibG9jazIrLmJsb2NrMnttYXJnaW4tdG9wOjI2cHh9LmNsMntoZWlnaHQ6OXB4fS5ibG9jazIgLmZsZWZ0e21hcmdpbi10b3A6NnB4fS5ibG9jazIgaDR7bWFyZ2luLWJvdHRvbTo4cHh9dWwubGlzdDMgdGltZXtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQtY29sb3I6I2FjMjEzNTt3aWR0aDozNHB4O21hcmdpbi1yaWdodDo4cHg7ZmxvYXQ6bGVmdDtjb2xvcjojZmZmO21hcmdpbi10b3A6LTFweDtwYWRkaW5nLXRvcDoycHg7aGVpZ2h0OjM2cHg7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udDoyNHB4LzE4cHggT3N3YWxkLHNhbnMtc2VyaWZ9dWwubGlzdDMgaDR7bWFyZ2luLWJvdHRvbTo4cHh9dWwubGlzdDMgdGltZSBzcGFue21hcmdpbi10b3A6LTJweDtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZToxNHB4fXVsLmxpc3QzIGxpe3BhZGRpbmctdG9wOjJweH11bC5saXN0MyBsaStsaXttYXJnaW4tdG9wOjI0cHh9dWwubGlzdDMgbGkrbGkrbGl7bWFyZ2luLXRvcDoyNXB4fS5tYXB7cGFkZGluZy10b3A6NXB4fS5tYXAgLnRleHQxe2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O3BhZGRpbmctYm90dG9tOjE5cHh9Lm1hcCBmaWd1cmV7d2lkdGg6MTAwJTstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstby1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luLWJvdHRvbToyNnB4O2JvcmRlcjoxcHggc29saWQgI2FmMjkzY30ubWFwIGZpZ3VyZSBpZnJhbWV7d2lkdGg6MTAwJTtoZWlnaHQ6MjU1cHg7bWF4LXdpZHRoOjEwMCV9Lm1hcCBhZGRyZXNze3BhZGRpbmctdG9wOjEwcHg7b3ZlcmZsb3c6aGlkZGVuO2xpbmUtaGVpZ2h0OjIwcHh9YWRkcmVzcyBkdHtjb2xvcjojMDAwfWFkZHJlc3MgZGQgc3BhbnttaW4td2lkdGg6ODVweDtkaXNwbGF5OmlubGluZS1ibG9jazt0ZXh0LWFsaWduOmxlZnR9Zm9vdGVye2NvbG9yOiNmZmY7ZGlzcGxheTpibG9jaztwYWRkaW5nOjIxcHggMDtib3JkZXItdG9wOjNweCBzb2xpZCAjZmY0YTRhO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3BhZGRpbmc6MXJlbTt0ZXh0LWFsaWduOmNlbnRlcn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcIm1pbmltaXplXCI6dHJ1ZX0hLi9jc3Mvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXttaW4td2lkdGg6OTYwcHh9LmNvbnRhaW5lcl8xMnttYXJnaW4tbGVmdDphdXRvO21hcmdpbi1yaWdodDphdXRvO3dpZHRoOjk2MHB4fS5ncmlkXzEsLmdyaWRfMiwuZ3JpZF8zLC5ncmlkXzQsLmdyaWRfNSwuZ3JpZF82LC5ncmlkXzcsLmdyaWRfOCwuZ3JpZF85LC5ncmlkXzEwLC5ncmlkXzExLC5ncmlkXzEye2Rpc3BsYXk6aW5saW5lO2Zsb2F0OmxlZnQ7bWFyZ2luLWxlZnQ6MTBweDttYXJnaW4tcmlnaHQ6MTBweH0ucHVsbF8xLC5wdWxsXzIsLnB1bGxfMywucHVsbF80LC5wdWxsXzUsLnB1bGxfNiwucHVsbF83LC5wdWxsXzgsLnB1bGxfOSwucHVsbF8xMCwucHVsbF8xMSwucHVzaF8xLC5wdXNoXzIsLnB1c2hfMywucHVzaF80LC5wdXNoXzUsLnB1c2hfNiwucHVzaF83LC5wdXNoXzgsLnB1c2hfOSwucHVzaF8xMCwucHVzaF8xMXtwb3NpdGlvbjpyZWxhdGl2ZX0uYWxwaGF7bWFyZ2luLWxlZnQ6MH0ub21lZ2F7bWFyZ2luLXJpZ2h0OjB9LmNvbnRhaW5lcl8xMiAuZ3JpZF8xe3dpZHRoOjYwcHh9LmNvbnRhaW5lcl8xMiAuZ3JpZF8ye3dpZHRoOjE0MHB4fS5jb250YWluZXJfMTIgLmdyaWRfM3t3aWR0aDoyMjBweH0uY29udGFpbmVyXzEyIC5ncmlkXzR7d2lkdGg6MzAwcHh9LmNvbnRhaW5lcl8xMiAuZ3JpZF81e3dpZHRoOjM4MHB4fS5jb250YWluZXJfMTIgLmdyaWRfNnt3aWR0aDo0NjBweH0uY29udGFpbmVyXzEyIC5ncmlkXzd7d2lkdGg6NTQwcHh9LmNvbnRhaW5lcl8xMiAuZ3JpZF84e3dpZHRoOjYyMHB4fS5jb250YWluZXJfMTIgLmdyaWRfOXt3aWR0aDo3MDBweH0uY29udGFpbmVyXzEyIC5ncmlkXzEwe3dpZHRoOjc4MHB4fS5jb250YWluZXJfMTIgLmdyaWRfMTF7d2lkdGg6ODYwcHh9LmNvbnRhaW5lcl8xMiAuZ3JpZF8xMnt3aWR0aDo5NDBweH0uY29udGFpbmVyXzEyIC5wcmVmaXhfMXtwYWRkaW5nLWxlZnQ6ODBweH0uY29udGFpbmVyXzEyIC5wcmVmaXhfMntwYWRkaW5nLWxlZnQ6MTYwcHh9LmNvbnRhaW5lcl8xMiAucHJlZml4XzN7cGFkZGluZy1sZWZ0OjI0MHB4fS5jb250YWluZXJfMTIgLnByZWZpeF80e3BhZGRpbmctbGVmdDozMjBweH0uY29udGFpbmVyXzEyIC5wcmVmaXhfNXtwYWRkaW5nLWxlZnQ6NDAwcHh9LmNvbnRhaW5lcl8xMiAucHJlZml4XzZ7cGFkZGluZy1sZWZ0OjQ4MHB4fS5jb250YWluZXJfMTIgLnByZWZpeF83e3BhZGRpbmctbGVmdDo1NjBweH0uY29udGFpbmVyXzEyIC5wcmVmaXhfOHtwYWRkaW5nLWxlZnQ6NjQwcHh9LmNvbnRhaW5lcl8xMiAucHJlZml4Xzl7cGFkZGluZy1sZWZ0OjcyMHB4fS5jb250YWluZXJfMTIgLnByZWZpeF8xMHtwYWRkaW5nLWxlZnQ6ODAwcHh9LmNvbnRhaW5lcl8xMiAucHJlZml4XzExe3BhZGRpbmctbGVmdDo4ODBweH0uY29udGFpbmVyXzEyIC5zdWZmaXhfMXtwYWRkaW5nLXJpZ2h0OjgwcHh9LmNvbnRhaW5lcl8xMiAuc3VmZml4XzJ7cGFkZGluZy1yaWdodDoxNjBweH0uY29udGFpbmVyXzEyIC5zdWZmaXhfM3twYWRkaW5nLXJpZ2h0OjI0MHB4fS5jb250YWluZXJfMTIgLnN1ZmZpeF80e3BhZGRpbmctcmlnaHQ6MzIwcHh9LmNvbnRhaW5lcl8xMiAuc3VmZml4XzV7cGFkZGluZy1yaWdodDo0MDBweH0uY29udGFpbmVyXzEyIC5zdWZmaXhfNntwYWRkaW5nLXJpZ2h0OjQ4MHB4fS5jb250YWluZXJfMTIgLnN1ZmZpeF83e3BhZGRpbmctcmlnaHQ6NTYwcHh9LmNvbnRhaW5lcl8xMiAuc3VmZml4Xzh7cGFkZGluZy1yaWdodDo2NDBweH0uY29udGFpbmVyXzEyIC5zdWZmaXhfOXtwYWRkaW5nLXJpZ2h0OjcyMHB4fS5jb250YWluZXJfMTIgLnN1ZmZpeF8xMHtwYWRkaW5nLXJpZ2h0OjgwMHB4fS5jb250YWluZXJfMTIgLnN1ZmZpeF8xMXtwYWRkaW5nLXJpZ2h0Ojg4MHB4fS5jb250YWluZXJfMTIgLnB1c2hfMXtsZWZ0OjgwcHh9LmNvbnRhaW5lcl8xMiAucHVzaF8ye2xlZnQ6MTYwcHh9LmNvbnRhaW5lcl8xMiAucHVzaF8ze2xlZnQ6MjQwcHh9LmNvbnRhaW5lcl8xMiAucHVzaF80e2xlZnQ6MzIwcHh9LmNvbnRhaW5lcl8xMiAucHVzaF81e2xlZnQ6NDAwcHh9LmNvbnRhaW5lcl8xMiAucHVzaF82e2xlZnQ6NDgwcHh9LmNvbnRhaW5lcl8xMiAucHVzaF83e2xlZnQ6NTYwcHh9LmNvbnRhaW5lcl8xMiAucHVzaF84e2xlZnQ6NjQwcHh9LmNvbnRhaW5lcl8xMiAucHVzaF85e2xlZnQ6NzIwcHh9LmNvbnRhaW5lcl8xMiAucHVzaF8xMHtsZWZ0OjgwMHB4fS5jb250YWluZXJfMTIgLnB1c2hfMTF7bGVmdDo4ODBweH0uY29udGFpbmVyXzEyIC5wdWxsXzF7bGVmdDotODBweH0uY29udGFpbmVyXzEyIC5wdWxsXzJ7bGVmdDotMTYwcHh9LmNvbnRhaW5lcl8xMiAucHVsbF8ze2xlZnQ6LTI0MHB4fS5jb250YWluZXJfMTIgLnB1bGxfNHtsZWZ0Oi0zMjBweH0uY29udGFpbmVyXzEyIC5wdWxsXzV7bGVmdDotNDAwcHh9LmNvbnRhaW5lcl8xMiAucHVsbF82e2xlZnQ6LTQ4MHB4fS5jb250YWluZXJfMTIgLnB1bGxfN3tsZWZ0Oi01NjBweH0uY29udGFpbmVyXzEyIC5wdWxsXzh7bGVmdDotNjQwcHh9LmNvbnRhaW5lcl8xMiAucHVsbF85e2xlZnQ6LTcyMHB4fS5jb250YWluZXJfMTIgLnB1bGxfMTB7bGVmdDotODAwcHh9LmNvbnRhaW5lcl8xMiAucHVsbF8xMXtsZWZ0Oi04ODBweH0uY2xlYXJ7Y2xlYXI6Ym90aDtkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjt2aXNpYmlsaXR5OmhpZGRlbjt3aWR0aDowO2hlaWdodDowfS5jbGVhcmZpeDphZnRlciwuY2xlYXJmaXg6YmVmb3JlLC5jb250YWluZXJfMTI6YWZ0ZXIsLmNvbnRhaW5lcl8xMjpiZWZvcmV7Y29udGVudDpcXFwiLlxcXCI7ZGlzcGxheTpibG9jaztvdmVyZmxvdzpoaWRkZW47dmlzaWJpbGl0eTpoaWRkZW47Zm9udC1zaXplOjA7bGluZS1oZWlnaHQ6MDt3aWR0aDowO2hlaWdodDowfS5jbGVhcmZpeDphZnRlciwuY29udGFpbmVyXzEyOmFmdGVye2NsZWFyOmJvdGh9LmNsZWFyZml4LC5jb250YWluZXJfMTJ7em9vbToxfVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjp0cnVlfSEuL2Nzcy9ncmlkLmNzc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tZW51X2Jsb2Nre3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6OTk5fW5hdntwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjB9LnNmLW1lbnUgdWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTlweDtkaXNwbGF5Om5vbmV9LnNmLW1lbnU+bGksLnNmLW1lbnUgbGl7ZmxvYXQ6bGVmdDtwb3NpdGlvbjpyZWxhdGl2ZX0uc2YtbWVudT5saT5he2ZvbnQtc2l6ZToyMHB4O2ZvbnQtZmFtaWx5Ok9zd2FsZCxzYW5zLXNlcmlmO2NvbG9yOiNmZmY7ZGlzcGxheTpibG9jaztsaW5lLWhlaWdodDoyNHB4O3otaW5kZXg6OTk5O3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MTlweCAxNHB4IDIwcHh9LnNmLW1lbnU+bGkuY3VycmVudD5hLC5zZi1tZW51PmxpLnNmSG92ZXI+YSwuc2YtbWVudT5saTpob3Zlcj5hOmhvdmVye2JhY2tncm91bmQtcG9zaXRpb246MCAwO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNzUyOTM1fS5zZi1tZW51IGxpLnNmSG92ZXI+dWwsLnNmLW1lbnUgbGkgdWx7dG9wOi0yOHB4O2xlZnQ6MTE0cHg7d2lkdGg6MTQxcHg7ei1pbmRleDo5OTk7cGFkZGluZy10b3A6MjhweDtwYWRkaW5nLWJvdHRvbToyM3B4O2JhY2tncm91bmQtY29sb3I6I2ZmZn0uc2YtbWVudSBsaSB1bCBsaXtwYWRkaW5nLWxlZnQ6MThweDtmbG9hdDpub25lIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjNweH0uc2YtbWVudSBsaSB1bCBsaSBhe3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250OjE2cHgvMTZweCBEb3NpcyxzYW5zLXNlcmlmO3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOiMwMDB9LnNmLW1lbnUgbGkuc2ZIb3ZlciBsaS5zZkhvdmVyPmEsLnNmLW1lbnUgbGkgbGkgYTpob3Zlcntjb2xvcjojZWMwNjA2fVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjp0cnVlfSEuL2Nzcy9zdXBlcmZpc2guY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coherence_concrete_InMemoryContainer__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backend_concrete_ajax_AjaxCommunicator__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exceptions_runtime_InstantiatedException__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_concrete_Html5HistoryAPI__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exceptions_logging_concrete_ConsoleLogger__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__backend_concrete_ajax_AjaxRequest__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing_concrete_BasicRouter__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__states_interfaces_IStateManager__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__storage_concrete_LocalStorage__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__templating_concrete_mustache_ClientTemplateEngine__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__validating_reporter_concrete_NotifyValidatingReporter__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__viewbinding_concrete_BaseViewBinder__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__binding_concrete_BaseFieldBinding__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__binding_concrete_EventBinding__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__binding_concrete_BaseInputBinding__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__binding_concrete_BaseCollectionBinding__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__backend_interfaces_ICommunicator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__history_interfaces_IHistory__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__exceptions_logging_interfaces_ILogger__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__backend_interfaces_IRequest__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__routing_interfaces_IRouter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__storage_interfaces_IStorage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__templating_interfaces_ITemplateEngine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__validating_reporter_interfaces_IValidatatingReporter__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__viewbinding_interfaces_IViewBinder__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__binding_interfaces_IBinding__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__viewengine_interfaces_IViewEngine__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__viewengine_concrete_BaseViewEngine__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__viewengine_concrete_BaseViewPublisher__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__viewengine_interfaces_IViewPublisher__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__binding_concrete_PropertyBinding__ = __webpack_require__(65);































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
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_26__viewengine_interfaces_IViewEngine__["a" /* IViewEngine */], new geranium.viewengine());
        this["`container"].register(__WEBPACK_IMPORTED_MODULE_29__viewengine_interfaces_IViewPublisher__["a" /* IViewPublisher */], new geranium.viewpublisher());
        geranium.bindings.forEach(binding => {
            this["`container"].register(__WEBPACK_IMPORTED_MODULE_25__binding_interfaces_IBinding__["a" /* IBinding */], new binding());
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
    viewpublisher: __WEBPACK_IMPORTED_MODULE_28__viewengine_concrete_BaseViewPublisher__["a" /* BaseViewPublisher */],
    bindings: [
        __WEBPACK_IMPORTED_MODULE_12__binding_concrete_BaseFieldBinding__["a" /* BaseFieldBinding */],
        __WEBPACK_IMPORTED_MODULE_14__binding_concrete_BaseInputBinding__["a" /* BaseInputBinding */],
        __WEBPACK_IMPORTED_MODULE_13__binding_concrete_EventBinding__["a" /* EventBinding */],
        __WEBPACK_IMPORTED_MODULE_15__binding_concrete_BaseCollectionBinding__["a" /* BaseCollectionBinding */],
        __WEBPACK_IMPORTED_MODULE_30__binding_concrete_PropertyBinding__["a" /* PropertyBinding */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Exception__ = __webpack_require__(10);

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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_abstract_View__ = __webpack_require__(15);
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export settings */
/* harmony export (immutable) */ __webpack_exports__["b"] = routes;
/* unused harmony export urlFromCtor */
/* unused harmony export routed */
/* harmony export (immutable) */ __webpack_exports__["a"] = routeignore;
/* unused harmony export routeroot */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contracts_Route__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contracts_RouteContext__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__declare_array__ = __webpack_require__(2);
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IBinding {
    bind(objectDOM, model) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IBinding.bind"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IBinding;

//# sourceMappingURL=IBinding.js.map

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewState__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_IViewEngine__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_decorators_history__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__history_contracts_HistoryItem__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_interfaces_IHistory__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__viewengine_interfaces_IViewPublisher__ = __webpack_require__(16);
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
/* 7 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class ICommunicator {
    send(data) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ICommunicator.send"); }
    recive() { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ICommunicator.recive"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ICommunicator;

//# sourceMappingURL=ICommunicator.js.map

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IViewBinder {
    bind(context) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IViewBinder.bind"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IViewBinder;

//# sourceMappingURL=IViewBinder.js.map

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__templating_contracts_Template__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exceptions_Exception__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__templating_interfaces_ITemplateEngine__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extensions_HtmlElementExtensions__ = __webpack_require__(7);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IViewPublisher {
    publish(viewDOM) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IViewPublisher.publish"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IViewPublisher;

//# sourceMappingURL=IViewPublisher.js.map

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Exception__ = __webpack_require__(10);

class CommunicationException extends __WEBPACK_IMPORTED_MODULE_0__Exception__["a" /* Exception */] {
    constructor(msg) {
        super("CommunicationException:" + msg);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CommunicationException;

//# sourceMappingURL=CommunicationException.js.map

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declare_array__ = __webpack_require__(2);
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__coherence_concrete_InMemoryContainer__ = __webpack_require__(29);

class IStateManager extends __WEBPACK_IMPORTED_MODULE_0__coherence_concrete_InMemoryContainer__["a" /* InMemoryContainer */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IStateManager;

//# sourceMappingURL=IStateManager.js.map

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class ITemplateEngine {
    parse(template) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ITemplateEngine.parse"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ITemplateEngine;

//# sourceMappingURL=ITemplateEngine.js.map

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IValidatingReporter {
    report(DOM, validatingResult) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IValidatingReporter.report"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IValidatingReporter;

//# sourceMappingURL=IValidatatingReporter.js.map

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__behaviors_events_abstract_Event__ = __webpack_require__(18);

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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__BaseBinding__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extensions_HtmlElementExtensions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__structures_Promised__ = __webpack_require__(25);
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IBinding__ = __webpack_require__(5);
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
/* 25 */
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IRequest {
    send(data) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IRequest.send"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IRequest;

//# sourceMappingURL=IRequest.js.map

/***/ }),
/* 27 */
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

var	fixUrls = __webpack_require__(91);

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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Route {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Route;

//# sourceMappingURL=Route.js.map

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__declare_array__ = __webpack_require__(2);

class InMemoryContainer {
    constructor() {
        this.container = [];
    }
    isregistered(type) {
        return this.execute(type).length > 0;
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class HistoryItem {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HistoryItem;

//# sourceMappingURL=HistoryItem.js.map

/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__extensions_HtmlElementExtensions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__abstract_Binding__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__structures_Promised__ = __webpack_require__(25);



class BaseBinding extends __WEBPACK_IMPORTED_MODULE_1__abstract_Binding__["a" /* Binding */] {
    detection(DOM) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__structures_Promised__["a" /* promised */])(Object(__WEBPACK_IMPORTED_MODULE_0__extensions_HtmlElementExtensions__["a" /* findAndFilter */])(DOM, this.attribute));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BaseBinding;

//# sourceMappingURL=BaseBinding.js.map

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__binding_interfaces_IBinding__ = __webpack_require__(5);


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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewDOM__ = __webpack_require__(74);

class ViewDOM extends __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewDOM__["a" /* IViewDOM */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewDOM;

//# sourceMappingURL=ViewDOM.js.map

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_abstract_ViewModel__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categoryButtonView__ = __webpack_require__(75);


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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_app__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_timers__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_geranium_binding_interfaces_IBinding__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__binders_MustacheBind__ = __webpack_require__(86);





__webpack_require__(88);
__webpack_require__(89);
__webpack_require__(92);
__webpack_require__(94);
__WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__["a" /* default */].start({});
__WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_runtime_concrete_App__["a" /* default */].register(__WEBPACK_IMPORTED_MODULE_3__node_modules_geranium_binding_interfaces_IBinding__["a" /* IBinding */], new __WEBPACK_IMPORTED_MODULE_4__binders_MustacheBind__["a" /* MustacheBind */]());
new __WEBPACK_IMPORTED_MODULE_0__components_app__["a" /* App */]().show();
Object(__WEBPACK_IMPORTED_MODULE_2_timers__["setTimeout"])(() => document.querySelector("#preloader").remove(), 1);
//# sourceMappingURL=index.js.map

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_structures_Promised__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_geranium_viewDOM_abstract_ViewDOM__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoryButton_categoryButton__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_geranium_viewmodels_concrete_ViewModelExisted__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(100);






// @routeroot
class App extends __WEBPACK_IMPORTED_MODULE_4__node_modules_geranium_viewmodels_concrete_ViewModelExisted__["a" /* ViewModelExisted */] {
    constructor() {
        super();
        this.nowYear = (new Date()).getFullYear();
        this.btns = [];
        this.header = new __WEBPACK_IMPORTED_MODULE_3__header_header__["a" /* Header */]();
        this.search = new __WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* Search */]();
        this.btns.push(...[
            new __WEBPACK_IMPORTED_MODULE_2__categoryButton_categoryButton__["CategoryButton"]("Темный"),
            new __WEBPACK_IMPORTED_MODULE_2__categoryButton_categoryButton__["CategoryButton"]("Молочный"),
            new __WEBPACK_IMPORTED_MODULE_2__categoryButton_categoryButton__["CategoryButton"]("Белый"),
        ]);
        this.header.show();
    }
    view() {
        return AppView;
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class RouteContext {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RouteContext;

//# sourceMappingURL=RouteContext.js.map

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ICommunicator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exceptions_backend_CommunicationException__ = __webpack_require__(17);
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
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Exception__ = __webpack_require__(10);

class InstantiatedException extends __WEBPACK_IMPORTED_MODULE_0__Exception__["a" /* Exception */] {
    constructor(msg) {
        super("InstantiatedException: instance already instantiated, you can change instance options only at application start\n" + msg);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InstantiatedException;

//# sourceMappingURL=InstantiatedException.js.map

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IHistory__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_interfaces_IRouter__ = __webpack_require__(12);
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ILogger__ = __webpack_require__(13);

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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_StatefullRequest__ = __webpack_require__(44);

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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__EventRequest__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__states_interfaces_IStateManager__ = __webpack_require__(19);


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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Request__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ICommunicator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exceptions_backend_CommunicationException__ = __webpack_require__(17);
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
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ICommunicator__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__behaviors_events_abstract_Event__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exceptions_logging_interfaces_ILogger__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exceptions_backend_CommunicationException__ = __webpack_require__(17);
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
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_Router__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__history_contracts_HistoryItem__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history_interfaces_IHistory__ = __webpack_require__(11);
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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IRouter__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contracts_RouteMatch__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__concrete_decorators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__declare_array__ = __webpack_require__(2);





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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Route__ = __webpack_require__(28);

class RouteMatch extends __WEBPACK_IMPORTED_MODULE_0__Route__["a" /* Route */] {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RouteMatch;

//# sourceMappingURL=RouteMatch.js.map

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_BaseStorage__ = __webpack_require__(51);

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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IStorage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__declare_array__ = __webpack_require__(2);


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
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_ITemplateEngine__ = __webpack_require__(20);

class ClientTemplateEngine extends __WEBPACK_IMPORTED_MODULE_0__interfaces_ITemplateEngine__["a" /* ITemplateEngine */] {
    parse(template) {
        return new Promise((resolve) => resolve(template.template));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ClientTemplateEngine;

//# sourceMappingURL=ClientTemplateEngine.js.map

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IValidatatingReporter__ = __webpack_require__(21);
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
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_ViewBinder__ = __webpack_require__(55);
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewBinder__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_Property__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validating_reporter_interfaces_IValidatatingReporter__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__declare_array__ = __webpack_require__(2);
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_BaseByAttributeBinding__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_Property__ = __webpack_require__(22);
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
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_Binding__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__extensions_HtmlElementExtensions__ = __webpack_require__(7);
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
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_BaseBinding__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_Property__ = __webpack_require__(22);
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
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_BaseByAttributeBinding__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_IBinding__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_IViewEngine__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewbinding_contracts_BindContext__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewbinding_interfaces_IViewBinder__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__declare_string__ = __webpack_require__(61);
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
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Template {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Template;

//# sourceMappingURL=template.js.map

/***/ }),
/* 61 */
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
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewEngine__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contracts_ExecuteContext__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewbinding_contracts_BindContext__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewbinding_interfaces_IViewBinder__ = __webpack_require__(14);
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
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__binding_interfaces_IBinding__ = __webpack_require__(5);
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
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces_IViewPublisher__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exceptions_logging_interfaces_ILogger__ = __webpack_require__(13);
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
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_Binding__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_Class__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__extensions_HtmlElementExtensions__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__declare_array__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewengine_interfaces_IViewEngine__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_interfaces_IViewable__ = __webpack_require__(67);
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
            // debugger;
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
        target.forEach(targetNode => {
            if (textNode.textContent.trim() == text) {
                root.replaceChild(targetNode, textNode);
            }
            else {
                const propsStrings = textNode.textContent.match(this.propertyRegex);
                if (propsStrings.length > 1) {
                    textNode.textContent = textNode.textContent.replace(text, "");
                    textNode.parentNode.insertBefore(targetNode, textNode);
                }
                else {
                    textNode.textContent = textNode.textContent.replace(text, targetNode.innerHTML || targetNode.textContent);
                }
            }
        });
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
/* 66 */
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
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IViewable {
    view() { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IViewable.view"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IViewable;

//# sourceMappingURL=IViewable.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_State__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_concrete_decorators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewengine_interfaces_IViewEngine__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewengine_interfaces_IViewPublisher__ = __webpack_require__(16);
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
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return State; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_Model__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_IStateManager__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_interfaces_IRequest__ = __webpack_require__(26);
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
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Model; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routing_concrete_decorators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reflection_cloning_decorators_ICloneable__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__behaviors_events_abstract_Event__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__backend_interfaces_IRequest__ = __webpack_require__(26);
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
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ICloneable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_ICloner__ = __webpack_require__(72);


function ICloneable(constructor) {
    constructor.prototype.clone = function () {
        return __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_1__interfaces_ICloner__["a" /* ICloner */]).clone(this);
    };
}
//# sourceMappingURL=ICloneable.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class ICloner {
    clone(sample) { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("ICloner.clone"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ICloner;

//# sourceMappingURL=ICloner.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = is;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_interfaces_IRouter__ = __webpack_require__(12);


function is(constructor) {
    var router = __WEBPACK_IMPORTED_MODULE_0__runtime_concrete_App__["a" /* default */].resolve(__WEBPACK_IMPORTED_MODULE_1__routing_interfaces_IRouter__["a" /* IRouter */]);
    return router.routes.filter(x => {
        var instance = new x.ctor();
        return instance.constructor.name == constructor.name;
    }).length > 0;
}
//# sourceMappingURL=history.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__ = __webpack_require__(1);

class IViewDOM {
    DOM() { throw new __WEBPACK_IMPORTED_MODULE_0__exceptions_coherence_InterfaceUsingException__["a" /* InterfaceUsingException */]("IViewDOM.getViewDOM"); }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = IViewDOM;

//# sourceMappingURL=IViewDOM.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_view_abstract_View__ = __webpack_require__(15);

__webpack_require__(35);
class CategoryButtonView extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_view_abstract_View__["a" /* View */] {
    declare() {
        return "<button class='button category' onclick='onClick' data-templating-content=''>[text]</button>";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CategoryButtonView;

//# sourceMappingURL=categoryButtonView.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_concrete_ViewModelExisted__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__headerView__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socialsPanel_socialsPanel__ = __webpack_require__(78);



class Header extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_concrete_ViewModelExisted__["a" /* ViewModelExisted */] {
    constructor() {
        super(...arguments);
        this.socials = new __WEBPACK_IMPORTED_MODULE_2__socialsPanel_socialsPanel__["a" /* SocialsPanel */]();
    }
    view() {
        return __WEBPACK_IMPORTED_MODULE_1__headerView__["a" /* HeaderView */];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;

//# sourceMappingURL=header.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewDOM_abstract_ViewDOM__ = __webpack_require__(34);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class HeaderView extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewDOM_abstract_ViewDOM__["a" /* ViewDOM */] {
    DOM() {
        return __awaiter(this, void 0, void 0, function* () {
            return [document.querySelector("header")];
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HeaderView;

//# sourceMappingURL=headerView.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_abstract_ViewModel__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socialsPanelView__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__socialButton_socialButton__ = __webpack_require__(80);



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
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_view_abstract_View__ = __webpack_require__(15);

class SocialsPanelView extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_view_abstract_View__["a" /* View */] {
    declare() {
        return "<div class='socials'>[buttons]</div>";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SocialsPanelView;

//# sourceMappingURL=socialsPanelView.js.map

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_abstract_ViewModel__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socialButtonView__ = __webpack_require__(81);


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
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_view_abstract_View__ = __webpack_require__(15);

class SocialButtonView extends __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_view_abstract_View__["a" /* View */] {
    declare() {
        return "<a class='' href='#'></a>";
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SocialButtonView;

//# sourceMappingURL=socialButtonView.js.map

/***/ }),
/* 82 */
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
__webpack_require__(83);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 83 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(84), __webpack_require__(85)))

/***/ }),
/* 84 */
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
/* 85 */
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
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_binding_concrete_base_BaseByAttributeBinding__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mustache__ = __webpack_require__(87);
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
/* 87 */
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
/* 88 */
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(27)(content, options);
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "@keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.carousel{width:100%;height:auto;min-height:4em;border:none;margin:auto;display:flex}.carousel,.hero{position:relative}.hero+.hero-body,.hero+.hero-footer,.hero+.hero-head{z-index:1}.hero-carousel{display:flex;position:absolute;top:0;left:0;bottom:0;right:0;height:auto;border:none;margin:auto;padding:0;z-index:0}.carousel-navigation{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:22px;z-index:99}.carousel-container{flex:1;background:#f5f5f5;display:flex;overflow:hidden}.carousel-container .carousel-nav-left,.carousel-container .carousel-nav-right{position:absolute;top:calc(50% - 11px);height:2.2em;width:2em;background:hsla(0,0%,100%,.7);left:0;display:flex;justify-content:center;align-items:center;color:#4a4a4a;z-index:99}.carousel-container .carousel-nav-left:hover,.carousel-container .carousel-nav-right:hover{cursor:pointer}.carousel-container .carousel-nav-right{left:auto;right:0}.carousel-item{flex-shrink:0;flex-grow:1;display:flex;align-items:center;justify-content:center;border:none;box-sizing:border-box;min-width:100%;background-size:cover;background-position:50%;position:relative;max-height:100%;max-width:100%;overflow:hidden}.carousel-item .is-background{position:relative;display:inline-block;padding:0;margin:0;min-width:100%}.carousel-item .title{position:absolute;left:0;right:0;bottom:0;padding:1.5em;margin:0;text-align:center;background:hsla(0,0%,100%,.6);font-size:.75rem}.carousel-content{display:flex;flex:1;position:relative}.carousel-content.carousel-animate-slide{left:-100%;-webkit-transform:translate3d(100%,0,0);-moz-transform:translate3d(100%,0,0);-ms-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-content.carousel-animate-fade .carousel-item{-webkit-transition:opacity 1s ease-in-out;-moz-transition:opacity 1s ease-in-out;-ms-transition:opacity 1s ease-in-out;transition:opacity 1s ease-in-out;position:absolute}.carousel-content.carousel-animate.carousel-animate-slide{transition:all 1s ease-in-out;-webkit-transform:none;-moz-transform:none;-ms-transform:none;transform:none}.carousel-content.carousel-animate.carousel-animate-fade .carousel-item.is-active{opacity:1}.carousel-content.carousel-animate.carousel-animate-fade .carousel-item:not(.is-active){opacity:0}.carousel-reverse.carousel-animate-slide{-webkit-transform:translate3d(-100%,0,0);-moz-transform:translate3d(-100%,0,0);-ms-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}", ""]);

// exports


/***/ }),
/* 91 */
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(27)(content, options);
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "/*! bulma.io v0.6.1 | MIT License | github.com/jgthms/bulma */@-webkit-keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\n\n/*! minireset.css v0.0.2 | MIT License | github.com/jgthms/minireset.css */blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select,textarea{margin:0}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}audio,embed,img,object,video{max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}html{background-color:#fff;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}article,aside,figure,footer,header,hgroup,section{display:block}body,button,input,select,textarea{font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif}code,pre{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;font-family:monospace}body{color:#4a4a4a;font-size:1rem;font-weight:400;line-height:1.5}a{color:#3273dc;cursor:pointer;text-decoration:none}a strong{color:currentColor}a:hover{color:#363636}code{background-color:#f5f5f5;color:#ff3860;font-size:.875em;font-weight:400;padding:.25em .5em}hr{background-color:#dbdbdb;border:none;display:block;height:1px;margin:1.5rem 0}img{height:auto;max-width:100%}input[type=checkbox],input[type=radio]{vertical-align:baseline}small{font-size:.875em}span{font-style:inherit;font-weight:inherit}strong{color:#363636;font-weight:700}pre{-webkit-overflow-scrolling:touch;background-color:#f5f5f5;color:#4a4a4a;font-size:.875em;overflow-x:auto;padding:1.25rem 1.5rem;white-space:pre;word-wrap:normal}pre code{background-color:transparent;color:currentColor;font-size:1em;padding:0}table td,table th{text-align:left;vertical-align:top}table th{color:#363636}.is-clearfix:after{clear:both;content:\" \";display:table}.is-pulled-left{float:left!important}.is-pulled-right{float:right!important}.is-clipped{overflow:hidden!important}.is-overlay{bottom:0;left:0;position:absolute;right:0;top:0}.is-size-1{font-size:3rem!important}.is-size-2{font-size:2.5rem!important}.is-size-3{font-size:2rem!important}.is-size-4{font-size:1.5rem!important}.is-size-5{font-size:1.25rem!important}.is-size-6{font-size:1rem!important}.is-size-7{font-size:.75rem!important}@media screen and (max-width:768px){.is-size-1-mobile{font-size:3rem!important}.is-size-2-mobile{font-size:2.5rem!important}.is-size-3-mobile{font-size:2rem!important}.is-size-4-mobile{font-size:1.5rem!important}.is-size-5-mobile{font-size:1.25rem!important}.is-size-6-mobile{font-size:1rem!important}.is-size-7-mobile{font-size:.75rem!important}}@media print,screen and (min-width:769px){.is-size-1-tablet{font-size:3rem!important}.is-size-2-tablet{font-size:2.5rem!important}.is-size-3-tablet{font-size:2rem!important}.is-size-4-tablet{font-size:1.5rem!important}.is-size-5-tablet{font-size:1.25rem!important}.is-size-6-tablet{font-size:1rem!important}.is-size-7-tablet{font-size:.75rem!important}}@media screen and (max-width:1023px){.is-size-1-touch{font-size:3rem!important}.is-size-2-touch{font-size:2.5rem!important}.is-size-3-touch{font-size:2rem!important}.is-size-4-touch{font-size:1.5rem!important}.is-size-5-touch{font-size:1.25rem!important}.is-size-6-touch{font-size:1rem!important}.is-size-7-touch{font-size:.75rem!important}}@media screen and (min-width:1024px){.is-size-1-desktop{font-size:3rem!important}.is-size-2-desktop{font-size:2.5rem!important}.is-size-3-desktop{font-size:2rem!important}.is-size-4-desktop{font-size:1.5rem!important}.is-size-5-desktop{font-size:1.25rem!important}.is-size-6-desktop{font-size:1rem!important}.is-size-7-desktop{font-size:.75rem!important}}@media screen and (min-width:1216px){.is-size-1-widescreen{font-size:3rem!important}.is-size-2-widescreen{font-size:2.5rem!important}.is-size-3-widescreen{font-size:2rem!important}.is-size-4-widescreen{font-size:1.5rem!important}.is-size-5-widescreen{font-size:1.25rem!important}.is-size-6-widescreen{font-size:1rem!important}.is-size-7-widescreen{font-size:.75rem!important}}@media screen and (min-width:1408px){.is-size-1-fullhd{font-size:3rem!important}.is-size-2-fullhd{font-size:2.5rem!important}.is-size-3-fullhd{font-size:2rem!important}.is-size-4-fullhd{font-size:1.5rem!important}.is-size-5-fullhd{font-size:1.25rem!important}.is-size-6-fullhd{font-size:1rem!important}.is-size-7-fullhd{font-size:.75rem!important}}.has-text-centered{text-align:center!important}@media screen and (max-width:768px){.has-text-centered-mobile{text-align:center!important}}@media print,screen and (min-width:769px){.has-text-centered-tablet{text-align:center!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-centered-tablet-only{text-align:center!important}}@media screen and (max-width:1023px){.has-text-centered-touch{text-align:center!important}}@media screen and (min-width:1024px){.has-text-centered-desktop{text-align:center!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-centered-desktop-only{text-align:center!important}}@media screen and (min-width:1216px){.has-text-centered-widescreen{text-align:center!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-centered-widescreen-only{text-align:center!important}}@media screen and (min-width:1408px){.has-text-centered-fullhd{text-align:center!important}}.has-text-justified{text-align:justify!important}@media screen and (max-width:768px){.has-text-justified-mobile{text-align:justify!important}}@media print,screen and (min-width:769px){.has-text-justified-tablet{text-align:justify!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-justified-tablet-only{text-align:justify!important}}@media screen and (max-width:1023px){.has-text-justified-touch{text-align:justify!important}}@media screen and (min-width:1024px){.has-text-justified-desktop{text-align:justify!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-justified-desktop-only{text-align:justify!important}}@media screen and (min-width:1216px){.has-text-justified-widescreen{text-align:justify!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-justified-widescreen-only{text-align:justify!important}}@media screen and (min-width:1408px){.has-text-justified-fullhd{text-align:justify!important}}.has-text-left{text-align:left!important}@media screen and (max-width:768px){.has-text-left-mobile{text-align:left!important}}@media print,screen and (min-width:769px){.has-text-left-tablet{text-align:left!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-left-tablet-only{text-align:left!important}}@media screen and (max-width:1023px){.has-text-left-touch{text-align:left!important}}@media screen and (min-width:1024px){.has-text-left-desktop{text-align:left!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-left-desktop-only{text-align:left!important}}@media screen and (min-width:1216px){.has-text-left-widescreen{text-align:left!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-left-widescreen-only{text-align:left!important}}@media screen and (min-width:1408px){.has-text-left-fullhd{text-align:left!important}}.has-text-right{text-align:right!important}@media screen and (max-width:768px){.has-text-right-mobile{text-align:right!important}}@media print,screen and (min-width:769px){.has-text-right-tablet{text-align:right!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-right-tablet-only{text-align:right!important}}@media screen and (max-width:1023px){.has-text-right-touch{text-align:right!important}}@media screen and (min-width:1024px){.has-text-right-desktop{text-align:right!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-right-desktop-only{text-align:right!important}}@media screen and (min-width:1216px){.has-text-right-widescreen{text-align:right!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-right-widescreen-only{text-align:right!important}}@media screen and (min-width:1408px){.has-text-right-fullhd{text-align:right!important}}.is-capitalized{text-transform:capitalize!important}.is-lowercase{text-transform:lowercase!important}.is-uppercase{text-transform:uppercase!important}.has-text-white{color:#fff!important}a.has-text-white:focus,a.has-text-white:hover{color:#e6e6e6!important}.has-text-black{color:#0a0a0a!important}a.has-text-black:focus,a.has-text-black:hover{color:#000!important}.has-text-light{color:#f5f5f5!important}a.has-text-light:focus,a.has-text-light:hover{color:#dbdbdb!important}.has-text-dark{color:#363636!important}a.has-text-dark:focus,a.has-text-dark:hover{color:#1c1c1c!important}.has-text-primary{color:#00d1b2!important}a.has-text-primary:focus,a.has-text-primary:hover{color:#009e86!important}.has-text-link{color:#3273dc!important}a.has-text-link:focus,a.has-text-link:hover{color:#205bbc!important}.has-text-info{color:#209cee!important}a.has-text-info:focus,a.has-text-info:hover{color:#0f81cc!important}.has-text-success{color:#23d160!important}a.has-text-success:focus,a.has-text-success:hover{color:#1ca64c!important}.has-text-warning{color:#ffdd57!important}a.has-text-warning:focus,a.has-text-warning:hover{color:#ffd324!important}.has-text-danger{color:#ff3860!important}a.has-text-danger:focus,a.has-text-danger:hover{color:#ff0537!important}.has-text-black-bis{color:#121212!important}.has-text-black-ter{color:#242424!important}.has-text-grey-darker{color:#363636!important}.has-text-grey-dark{color:#4a4a4a!important}.has-text-grey{color:#7a7a7a!important}.has-text-grey-light{color:#b5b5b5!important}.has-text-grey-lighter{color:#dbdbdb!important}.has-text-white-ter{color:#f5f5f5!important}.has-text-white-bis{color:#fafafa!important}.has-text-weight-light{font-weight:300!important}.has-text-weight-normal{font-weight:400!important}.has-text-weight-semibold{font-weight:600!important}.has-text-weight-bold{font-weight:700!important}.is-block{display:block!important}@media screen and (max-width:768px){.is-block-mobile{display:block!important}}@media print,screen and (min-width:769px){.is-block-tablet{display:block!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-block-tablet-only{display:block!important}}@media screen and (max-width:1023px){.is-block-touch{display:block!important}}@media screen and (min-width:1024px){.is-block-desktop{display:block!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-block-desktop-only{display:block!important}}@media screen and (min-width:1216px){.is-block-widescreen{display:block!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-block-widescreen-only{display:block!important}}@media screen and (min-width:1408px){.is-block-fullhd{display:block!important}}.is-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}@media screen and (max-width:768px){.is-flex-mobile{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media print,screen and (min-width:769px){.is-flex-tablet{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-flex-tablet-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (max-width:1023px){.is-flex-touch{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1024px){.is-flex-desktop{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-flex-desktop-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1216px){.is-flex-widescreen{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-flex-widescreen-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1408px){.is-flex-fullhd{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}.is-inline{display:inline!important}@media screen and (max-width:768px){.is-inline-mobile{display:inline!important}}@media print,screen and (min-width:769px){.is-inline-tablet{display:inline!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-tablet-only{display:inline!important}}@media screen and (max-width:1023px){.is-inline-touch{display:inline!important}}@media screen and (min-width:1024px){.is-inline-desktop{display:inline!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-desktop-only{display:inline!important}}@media screen and (min-width:1216px){.is-inline-widescreen{display:inline!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-widescreen-only{display:inline!important}}@media screen and (min-width:1408px){.is-inline-fullhd{display:inline!important}}.is-inline-block{display:inline-block!important}@media screen and (max-width:768px){.is-inline-block-mobile{display:inline-block!important}}@media print,screen and (min-width:769px){.is-inline-block-tablet{display:inline-block!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-block-tablet-only{display:inline-block!important}}@media screen and (max-width:1023px){.is-inline-block-touch{display:inline-block!important}}@media screen and (min-width:1024px){.is-inline-block-desktop{display:inline-block!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-block-desktop-only{display:inline-block!important}}@media screen and (min-width:1216px){.is-inline-block-widescreen{display:inline-block!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-block-widescreen-only{display:inline-block!important}}@media screen and (min-width:1408px){.is-inline-block-fullhd{display:inline-block!important}}.is-inline-flex{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}@media screen and (max-width:768px){.is-inline-flex-mobile{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print,screen and (min-width:769px){.is-inline-flex-tablet{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-flex-tablet-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (max-width:1023px){.is-inline-flex-touch{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1024px){.is-inline-flex-desktop{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-flex-desktop-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1216px){.is-inline-flex-widescreen{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-flex-widescreen-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1408px){.is-inline-flex-fullhd{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}.is-hidden{display:none!important}@media screen and (max-width:768px){.is-hidden-mobile{display:none!important}}@media print,screen and (min-width:769px){.is-hidden-tablet{display:none!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-hidden-tablet-only{display:none!important}}@media screen and (max-width:1023px){.is-hidden-touch{display:none!important}}@media screen and (min-width:1024px){.is-hidden-desktop{display:none!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-hidden-desktop-only{display:none!important}}@media screen and (min-width:1216px){.is-hidden-widescreen{display:none!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-hidden-widescreen-only{display:none!important}}@media screen and (min-width:1408px){.is-hidden-fullhd{display:none!important}}.is-invisible{visibility:hidden!important}@media screen and (max-width:768px){.is-invisible-mobile{visibility:hidden!important}}@media print,screen and (min-width:769px){.is-invisible-tablet{visibility:hidden!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-invisible-tablet-only{visibility:hidden!important}}@media screen and (max-width:1023px){.is-invisible-touch{visibility:hidden!important}}@media screen and (min-width:1024px){.is-invisible-desktop{visibility:hidden!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-invisible-desktop-only{visibility:hidden!important}}@media screen and (min-width:1216px){.is-invisible-widescreen{visibility:hidden!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-invisible-widescreen-only{visibility:hidden!important}}@media screen and (min-width:1408px){.is-invisible-fullhd{visibility:hidden!important}}.is-marginless{margin:0!important}.is-paddingless{padding:0!important}.is-radiusless{border-radius:0!important}.is-shadowless{-webkit-box-shadow:none!important;box-shadow:none!important}.is-unselectable{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.box{background-color:#fff;border-radius:5px;-webkit-box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);color:#4a4a4a;display:block;padding:1.25rem}.box:not(:last-child){margin-bottom:1.5rem}a.box:focus,a.box:hover{-webkit-box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px #3273dc;box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px #3273dc}a.box:active{-webkit-box-shadow:inset 0 1px 2px hsla(0,0%,4%,.2),0 0 0 1px #3273dc;box-shadow:inset 0 1px 2px hsla(0,0%,4%,.2),0 0 0 1px #3273dc}.button{-moz-appearance:none;-webkit-appearance:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;height:2.25em;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding-left:calc(.625em - 1px);padding-right:calc(.625em - 1px);position:relative;vertical-align:top;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;border-color:#dbdbdb;color:#363636;cursor:pointer;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:calc(.375em - 1px) .75em;text-align:center;white-space:nowrap}.button.is-active,.button.is-focused,.button:active,.button:focus{outline:none}.button[disabled]{cursor:not-allowed}.button strong{color:inherit}.button .icon,.button .icon.is-large,.button .icon.is-medium,.button .icon.is-small{height:1.5em;width:1.5em}.button .icon:first-child:not(:last-child){margin-left:calc(-.375em - 1px);margin-right:.1875em}.button .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:calc(-.375em - 1px)}.button .icon:first-child:last-child{margin-left:calc(-.375em - 1px);margin-right:calc(-.375em - 1px)}.button.is-hovered,.button:hover{border-color:#b5b5b5;color:#363636}.button.is-focused,.button:focus{border-color:#3273dc;color:#363636}.button.is-focused:not(:active),.button:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(50,115,220,.25);box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.button.is-active,.button:active{border-color:#4a4a4a;color:#363636}.button.is-text{background-color:transparent;border-color:transparent;color:#4a4a4a;text-decoration:underline}.button.is-text.is-focused,.button.is-text.is-hovered,.button.is-text:focus,.button.is-text:hover{background-color:#f5f5f5;color:#363636}.button.is-text.is-active,.button.is-text:active{background-color:#e8e8e8;color:#363636}.button.is-text[disabled]{background-color:transparent;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-white{background-color:#fff;border-color:transparent;color:#0a0a0a}.button.is-white.is-hovered,.button.is-white:hover{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.button.is-white.is-focused,.button.is-white:focus{border-color:transparent;color:#0a0a0a}.button.is-white.is-focused:not(:active),.button.is-white:focus:not(:active){-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.button.is-white.is-active,.button.is-white:active{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.button.is-white[disabled]{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-white.is-inverted{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted:hover{background-color:#000}.button.is-white.is-inverted[disabled]{background-color:#0a0a0a;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-white.is-loading:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-white.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-white.is-outlined:focus,.button.is-white.is-outlined:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.button.is-white.is-outlined.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-white.is-outlined[disabled]{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-white.is-inverted.is-outlined:focus,.button.is-white.is-inverted.is-outlined:hover{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#0a0a0a;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black{background-color:#0a0a0a;border-color:transparent;color:#fff}.button.is-black.is-hovered,.button.is-black:hover{background-color:#040404;border-color:transparent;color:#fff}.button.is-black.is-focused,.button.is-black:focus{border-color:transparent;color:#fff}.button.is-black.is-focused:not(:active),.button.is-black:focus:not(:active){-webkit-box-shadow:0 0 0 .125em hsla(0,0%,4%,.25);box-shadow:0 0 0 .125em hsla(0,0%,4%,.25)}.button.is-black.is-active,.button.is-black:active{background-color:#000;border-color:transparent;color:#fff}.button.is-black[disabled]{background-color:#0a0a0a;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-black.is-inverted{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted:hover{background-color:#f2f2f2}.button.is-black.is-inverted[disabled]{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-black.is-outlined:focus,.button.is-black.is-outlined:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.button.is-black.is-outlined.is-loading:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-black.is-outlined[disabled]{background-color:transparent;border-color:#0a0a0a;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-black.is-inverted.is-outlined:focus,.button.is-black.is-inverted.is-outlined:hover{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-light{background-color:#f5f5f5;border-color:transparent;color:#363636}.button.is-light.is-hovered,.button.is-light:hover{background-color:#eee;border-color:transparent;color:#363636}.button.is-light.is-focused,.button.is-light:focus{border-color:transparent;color:#363636}.button.is-light.is-focused:not(:active),.button.is-light:focus:not(:active){-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96%,.25)}.button.is-light.is-active,.button.is-light:active{background-color:#e8e8e8;border-color:transparent;color:#363636}.button.is-light[disabled]{background-color:#f5f5f5;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-light.is-inverted{background-color:#363636;color:#f5f5f5}.button.is-light.is-inverted:hover{background-color:#292929}.button.is-light.is-inverted[disabled]{background-color:#363636;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#f5f5f5}.button.is-light.is-loading:after{border-color:transparent transparent #363636 #363636!important}.button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-light.is-outlined:focus,.button.is-light.is-outlined:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.button.is-light.is-outlined.is-loading:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-light.is-outlined[disabled]{background-color:transparent;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#f5f5f5}.button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-light.is-inverted.is-outlined:focus,.button.is-light.is-inverted.is-outlined:hover{background-color:#363636;color:#f5f5f5}.button.is-light.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#363636;-webkit-box-shadow:none;box-shadow:none;color:#363636}.button.is-dark{background-color:#363636;border-color:transparent;color:#f5f5f5}.button.is-dark.is-hovered,.button.is-dark:hover{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}.button.is-dark.is-focused,.button.is-dark:focus{border-color:transparent;color:#f5f5f5}.button.is-dark.is-focused:not(:active),.button.is-dark:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.button.is-dark.is-active,.button.is-dark:active{background-color:#292929;border-color:transparent;color:#f5f5f5}.button.is-dark[disabled]{background-color:#363636;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-dark.is-inverted{background-color:#f5f5f5;color:#363636}.button.is-dark.is-inverted:hover{background-color:#e8e8e8}.button.is-dark.is-inverted[disabled]{background-color:#f5f5f5;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#363636}.button.is-dark.is-loading:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-dark.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-dark.is-outlined:focus,.button.is-dark.is-outlined:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}.button.is-dark.is-outlined.is-loading:after{border-color:transparent transparent #363636 #363636!important}.button.is-dark.is-outlined[disabled]{background-color:transparent;border-color:#363636;-webkit-box-shadow:none;box-shadow:none;color:#363636}.button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-dark.is-inverted.is-outlined:focus,.button.is-dark.is-inverted.is-outlined:hover{background-color:#f5f5f5;color:#363636}.button.is-dark.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#f5f5f5}.button.is-primary{background-color:#00d1b2;border-color:transparent;color:#fff}.button.is-primary.is-hovered,.button.is-primary:hover{background-color:#00c4a7;border-color:transparent;color:#fff}.button.is-primary.is-focused,.button.is-primary:focus{border-color:transparent;color:#fff}.button.is-primary.is-focused:not(:active),.button.is-primary:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(0,209,178,.25);box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.button.is-primary.is-active,.button.is-primary:active{background-color:#00b89c;border-color:transparent;color:#fff}.button.is-primary[disabled]{background-color:#00d1b2;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-primary.is-inverted{background-color:#fff;color:#00d1b2}.button.is-primary.is-inverted:hover{background-color:#f2f2f2}.button.is-primary.is-inverted[disabled]{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#00d1b2}.button.is-primary.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-primary.is-outlined{background-color:transparent;border-color:#00d1b2;color:#00d1b2}.button.is-primary.is-outlined:focus,.button.is-primary.is-outlined:hover{background-color:#00d1b2;border-color:#00d1b2;color:#fff}.button.is-primary.is-outlined.is-loading:after{border-color:transparent transparent #00d1b2 #00d1b2!important}.button.is-primary.is-outlined[disabled]{background-color:transparent;border-color:#00d1b2;-webkit-box-shadow:none;box-shadow:none;color:#00d1b2}.button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-primary.is-inverted.is-outlined:focus,.button.is-primary.is-inverted.is-outlined:hover{background-color:#fff;color:#00d1b2}.button.is-primary.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-link{background-color:#3273dc;border-color:transparent;color:#fff}.button.is-link.is-hovered,.button.is-link:hover{background-color:#276cda;border-color:transparent;color:#fff}.button.is-link.is-focused,.button.is-link:focus{border-color:transparent;color:#fff}.button.is-link.is-focused:not(:active),.button.is-link:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(50,115,220,.25);box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.button.is-link.is-active,.button.is-link:active{background-color:#2366d1;border-color:transparent;color:#fff}.button.is-link[disabled]{background-color:#3273dc;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-link.is-inverted{background-color:#fff;color:#3273dc}.button.is-link.is-inverted:hover{background-color:#f2f2f2}.button.is-link.is-inverted[disabled]{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#3273dc}.button.is-link.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-link.is-outlined{background-color:transparent;border-color:#3273dc;color:#3273dc}.button.is-link.is-outlined:focus,.button.is-link.is-outlined:hover{background-color:#3273dc;border-color:#3273dc;color:#fff}.button.is-link.is-outlined.is-loading:after{border-color:transparent transparent #3273dc #3273dc!important}.button.is-link.is-outlined[disabled]{background-color:transparent;border-color:#3273dc;-webkit-box-shadow:none;box-shadow:none;color:#3273dc}.button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-link.is-inverted.is-outlined:focus,.button.is-link.is-inverted.is-outlined:hover{background-color:#fff;color:#3273dc}.button.is-link.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-info{background-color:#209cee;border-color:transparent;color:#fff}.button.is-info.is-hovered,.button.is-info:hover{background-color:#1496ed;border-color:transparent;color:#fff}.button.is-info.is-focused,.button.is-info:focus{border-color:transparent;color:#fff}.button.is-info.is-focused:not(:active),.button.is-info:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(32,156,238,.25);box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.button.is-info.is-active,.button.is-info:active{background-color:#118fe4;border-color:transparent;color:#fff}.button.is-info[disabled]{background-color:#209cee;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-info.is-inverted{background-color:#fff;color:#209cee}.button.is-info.is-inverted:hover{background-color:#f2f2f2}.button.is-info.is-inverted[disabled]{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#209cee}.button.is-info.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-info.is-outlined{background-color:transparent;border-color:#209cee;color:#209cee}.button.is-info.is-outlined:focus,.button.is-info.is-outlined:hover{background-color:#209cee;border-color:#209cee;color:#fff}.button.is-info.is-outlined.is-loading:after{border-color:transparent transparent #209cee #209cee!important}.button.is-info.is-outlined[disabled]{background-color:transparent;border-color:#209cee;-webkit-box-shadow:none;box-shadow:none;color:#209cee}.button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-info.is-inverted.is-outlined:focus,.button.is-info.is-inverted.is-outlined:hover{background-color:#fff;color:#209cee}.button.is-info.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-success{background-color:#23d160;border-color:transparent;color:#fff}.button.is-success.is-hovered,.button.is-success:hover{background-color:#22c65b;border-color:transparent;color:#fff}.button.is-success.is-focused,.button.is-success:focus{border-color:transparent;color:#fff}.button.is-success.is-focused:not(:active),.button.is-success:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(35,209,96,.25);box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.button.is-success.is-active,.button.is-success:active{background-color:#20bc56;border-color:transparent;color:#fff}.button.is-success[disabled]{background-color:#23d160;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-success.is-inverted{background-color:#fff;color:#23d160}.button.is-success.is-inverted:hover{background-color:#f2f2f2}.button.is-success.is-inverted[disabled]{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#23d160}.button.is-success.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-success.is-outlined{background-color:transparent;border-color:#23d160;color:#23d160}.button.is-success.is-outlined:focus,.button.is-success.is-outlined:hover{background-color:#23d160;border-color:#23d160;color:#fff}.button.is-success.is-outlined.is-loading:after{border-color:transparent transparent #23d160 #23d160!important}.button.is-success.is-outlined[disabled]{background-color:transparent;border-color:#23d160;-webkit-box-shadow:none;box-shadow:none;color:#23d160}.button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-success.is-inverted.is-outlined:focus,.button.is-success.is-inverted.is-outlined:hover{background-color:#fff;color:#23d160}.button.is-success.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-warning{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-hovered,.button.is-warning:hover{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused,.button.is-warning:focus{border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused:not(:active),.button.is-warning:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(255,221,87,.25);box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.button.is-warning.is-active,.button.is-warning:active{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning[disabled]{background-color:#ffdd57;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-warning.is-inverted{color:#ffdd57}.button.is-warning.is-inverted,.button.is-warning.is-inverted:hover{background-color:rgba(0,0,0,.7)}.button.is-warning.is-inverted[disabled]{background-color:rgba(0,0,0,.7);border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#ffdd57}.button.is-warning.is-loading:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-warning.is-outlined{background-color:transparent;border-color:#ffdd57;color:#ffdd57}.button.is-warning.is-outlined:focus,.button.is-warning.is-outlined:hover{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.button.is-warning.is-outlined.is-loading:after{border-color:transparent transparent #ffdd57 #ffdd57!important}.button.is-warning.is-outlined[disabled]{background-color:transparent;border-color:#ffdd57;-webkit-box-shadow:none;box-shadow:none;color:#ffdd57}.button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-warning.is-inverted.is-outlined:focus,.button.is-warning.is-inverted.is-outlined:hover{background-color:rgba(0,0,0,.7);color:#ffdd57}.button.is-warning.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:rgba(0,0,0,.7);-webkit-box-shadow:none;box-shadow:none;color:rgba(0,0,0,.7)}.button.is-danger{background-color:#ff3860;border-color:transparent;color:#fff}.button.is-danger.is-hovered,.button.is-danger:hover{background-color:#ff2b56;border-color:transparent;color:#fff}.button.is-danger.is-focused,.button.is-danger:focus{border-color:transparent;color:#fff}.button.is-danger.is-focused:not(:active),.button.is-danger:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(255,56,96,.25);box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.button.is-danger.is-active,.button.is-danger:active{background-color:#ff1f4b;border-color:transparent;color:#fff}.button.is-danger[disabled]{background-color:#ff3860;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-danger.is-inverted{background-color:#fff;color:#ff3860}.button.is-danger.is-inverted:hover{background-color:#f2f2f2}.button.is-danger.is-inverted[disabled]{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#ff3860}.button.is-danger.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-danger.is-outlined{background-color:transparent;border-color:#ff3860;color:#ff3860}.button.is-danger.is-outlined:focus,.button.is-danger.is-outlined:hover{background-color:#ff3860;border-color:#ff3860;color:#fff}.button.is-danger.is-outlined.is-loading:after{border-color:transparent transparent #ff3860 #ff3860!important}.button.is-danger.is-outlined[disabled]{background-color:transparent;border-color:#ff3860;-webkit-box-shadow:none;box-shadow:none;color:#ff3860}.button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-danger.is-inverted.is-outlined:focus,.button.is-danger.is-inverted.is-outlined:hover{background-color:#fff;color:#ff3860}.button.is-danger.is-inverted.is-outlined[disabled]{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-small{border-radius:2px;font-size:.75rem}.button.is-medium{font-size:1.25rem}.button.is-large{font-size:1.5rem}.button[disabled]{background-color:#fff;border-color:#dbdbdb;-webkit-box-shadow:none;box-shadow:none;opacity:.5}.button.is-fullwidth{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.button.is-loading{color:transparent!important;pointer-events:none}.button.is-loading:after{-webkit-animation:spinAround .5s infinite linear;animation:spinAround .5s infinite linear;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;position:relative;width:1em;position:absolute;left:calc(50% - 0.5em);top:calc(50% - 0.5em);position:absolute!important}.button.is-static{background-color:#f5f5f5;border-color:#dbdbdb;color:#7a7a7a;-webkit-box-shadow:none;box-shadow:none;pointer-events:none}.buttons{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.buttons .button{margin-bottom:.5rem}.buttons .button:not(:last-child){margin-right:.5rem}.buttons:last-child{margin-bottom:-.5rem}.buttons:not(:last-child){margin-bottom:1rem}.buttons.has-addons .button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.buttons.has-addons .button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.buttons.has-addons .button:last-child{margin-right:0}.buttons.has-addons .button.is-hovered,.buttons.has-addons .button:hover{z-index:2}.buttons.has-addons .button.is-active,.buttons.has-addons .button.is-focused,.buttons.has-addons .button.is-selected,.buttons.has-addons .button:active,.buttons.has-addons .button:focus{z-index:3}.buttons.has-addons .button.is-active:hover,.buttons.has-addons .button.is-focused:hover,.buttons.has-addons .button.is-selected:hover,.buttons.has-addons .button:active:hover,.buttons.has-addons .button:focus:hover{z-index:4}.buttons.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.buttons.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.container{margin:0 auto;position:relative}@media screen and (min-width:1024px){.container{max-width:960px;width:960px}.container.is-fluid{margin-left:32px;margin-right:32px;max-width:none;width:auto}}@media screen and (max-width:1215px){.container.is-widescreen{max-width:1152px;width:auto}}@media screen and (max-width:1407px){.container.is-fullhd{max-width:1344px;width:auto}}@media screen and (min-width:1216px){.container{max-width:1152px;width:1152px}}@media screen and (min-width:1408px){.container{max-width:1344px;width:1344px}}.content:not(:last-child){margin-bottom:1.5rem}.content li+li{margin-top:.25em}.content blockquote:not(:last-child),.content dl:not(:last-child),.content ol:not(:last-child),.content p:not(:last-child),.content pre:not(:last-child),.content table:not(:last-child),.content ul:not(:last-child){margin-bottom:1em}.content h1,.content h2,.content h3,.content h4,.content h5,.content h6{color:#363636;font-weight:400;line-height:1.125}.content h1{font-size:2em;margin-bottom:.5em}.content h1:not(:first-child){margin-top:1em}.content h2{font-size:1.75em;margin-bottom:.5714em}.content h2:not(:first-child){margin-top:1.1428em}.content h3{font-size:1.5em;margin-bottom:.6666em}.content h3:not(:first-child){margin-top:1.3333em}.content h4{font-size:1.25em;margin-bottom:.8em}.content h5{font-size:1.125em;margin-bottom:.8888em}.content h6{font-size:1em;margin-bottom:1em}.content blockquote{background-color:#f5f5f5;border-left:5px solid #dbdbdb;padding:1.25em 1.5em}.content ol{list-style:decimal outside}.content ol,.content ul{margin-left:2em;margin-top:1em}.content ul{list-style:disc outside}.content ul ul{list-style-type:circle;margin-top:.5em}.content ul ul ul{list-style-type:square}.content dd{margin-left:2em}.content figure{margin-left:2em;margin-right:2em;text-align:center}.content figure:not(:first-child){margin-top:2em}.content figure:not(:last-child){margin-bottom:2em}.content figure img{display:inline-block}.content figure figcaption{font-style:italic}.content pre{-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal}.content sub,.content sup{font-size:75%}.content table{width:100%}.content table td,.content table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.content table th{color:#363636;text-align:left}.content table tr:hover{background-color:#f5f5f5}.content table thead td,.content table thead th{border-width:0 0 2px;color:#363636}.content table tfoot td,.content table tfoot th{border-width:2px 0 0;color:#363636}.content table tbody tr:last-child td,.content table tbody tr:last-child th{border-bottom-width:0}.content.is-small{font-size:.75rem}.content.is-medium{font-size:1.25rem}.content.is-large{font-size:1.5rem}.input,.textarea{-moz-appearance:none;-webkit-appearance:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;height:2.25em;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding:calc(.375em - 1px) calc(.625em - 1px);position:relative;vertical-align:top;background-color:#fff;border-color:#dbdbdb;color:#363636;-webkit-box-shadow:inset 0 1px 2px hsla(0,0%,4%,.1);box-shadow:inset 0 1px 2px hsla(0,0%,4%,.1);max-width:100%;width:100%}.input.is-active,.input.is-focused,.input:active,.input:focus,.textarea.is-active,.textarea.is-focused,.textarea:active,.textarea:focus{outline:none}.input[disabled],.textarea[disabled]{cursor:not-allowed}.input::-moz-placeholder,.textarea::-moz-placeholder{color:rgba(54,54,54,.3)}.input::-webkit-input-placeholder,.textarea::-webkit-input-placeholder{color:rgba(54,54,54,.3)}.input:-moz-placeholder,.textarea:-moz-placeholder{color:rgba(54,54,54,.3)}.input:-ms-input-placeholder,.textarea:-ms-input-placeholder{color:rgba(54,54,54,.3)}.input.is-hovered,.input:hover,.textarea.is-hovered,.textarea:hover{border-color:#b5b5b5}.input.is-active,.input.is-focused,.input:active,.input:focus,.textarea.is-active,.textarea.is-focused,.textarea:active,.textarea:focus{border-color:#3273dc;-webkit-box-shadow:0 0 0 .125em rgba(50,115,220,.25);box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.input[disabled],.textarea[disabled]{background-color:#f5f5f5;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#7a7a7a}.input[disabled]::-moz-placeholder,.textarea[disabled]::-moz-placeholder{color:hsla(0,0%,48%,.3)}.input[disabled]::-webkit-input-placeholder,.textarea[disabled]::-webkit-input-placeholder{color:hsla(0,0%,48%,.3)}.input[disabled]:-moz-placeholder,.textarea[disabled]:-moz-placeholder{color:hsla(0,0%,48%,.3)}.input[disabled]:-ms-input-placeholder,.textarea[disabled]:-ms-input-placeholder{color:hsla(0,0%,48%,.3)}.input[type=search],.textarea[type=search]{border-radius:290486px}.input[readonly],.textarea[readonly]{-webkit-box-shadow:none;box-shadow:none}.input.is-white,.textarea.is-white{border-color:#fff}.input.is-white.is-active,.input.is-white.is-focused,.input.is-white:active,.input.is-white:focus,.textarea.is-white.is-active,.textarea.is-white.is-focused,.textarea.is-white:active,.textarea.is-white:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.input.is-black,.textarea.is-black{border-color:#0a0a0a}.input.is-black.is-active,.input.is-black.is-focused,.input.is-black:active,.input.is-black:focus,.textarea.is-black.is-active,.textarea.is-black.is-focused,.textarea.is-black:active,.textarea.is-black:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,4%,.25);box-shadow:0 0 0 .125em hsla(0,0%,4%,.25)}.input.is-light,.textarea.is-light{border-color:#f5f5f5}.input.is-light.is-active,.input.is-light.is-focused,.input.is-light:active,.input.is-light:focus,.textarea.is-light.is-active,.textarea.is-light.is-focused,.textarea.is-light:active,.textarea.is-light:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96%,.25)}.input.is-dark,.textarea.is-dark{border-color:#363636}.input.is-dark.is-active,.input.is-dark.is-focused,.input.is-dark:active,.input.is-dark:focus,.textarea.is-dark.is-active,.textarea.is-dark.is-focused,.textarea.is-dark:active,.textarea.is-dark:focus{-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.input.is-primary,.textarea.is-primary{border-color:#00d1b2}.input.is-primary.is-active,.input.is-primary.is-focused,.input.is-primary:active,.input.is-primary:focus,.textarea.is-primary.is-active,.textarea.is-primary.is-focused,.textarea.is-primary:active,.textarea.is-primary:focus{-webkit-box-shadow:0 0 0 .125em rgba(0,209,178,.25);box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.input.is-link,.textarea.is-link{border-color:#3273dc}.input.is-link.is-active,.input.is-link.is-focused,.input.is-link:active,.input.is-link:focus,.textarea.is-link.is-active,.textarea.is-link.is-focused,.textarea.is-link:active,.textarea.is-link:focus{-webkit-box-shadow:0 0 0 .125em rgba(50,115,220,.25);box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.input.is-info,.textarea.is-info{border-color:#209cee}.input.is-info.is-active,.input.is-info.is-focused,.input.is-info:active,.input.is-info:focus,.textarea.is-info.is-active,.textarea.is-info.is-focused,.textarea.is-info:active,.textarea.is-info:focus{-webkit-box-shadow:0 0 0 .125em rgba(32,156,238,.25);box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.input.is-success,.textarea.is-success{border-color:#23d160}.input.is-success.is-active,.input.is-success.is-focused,.input.is-success:active,.input.is-success:focus,.textarea.is-success.is-active,.textarea.is-success.is-focused,.textarea.is-success:active,.textarea.is-success:focus{-webkit-box-shadow:0 0 0 .125em rgba(35,209,96,.25);box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.input.is-warning,.textarea.is-warning{border-color:#ffdd57}.input.is-warning.is-active,.input.is-warning.is-focused,.input.is-warning:active,.input.is-warning:focus,.textarea.is-warning.is-active,.textarea.is-warning.is-focused,.textarea.is-warning:active,.textarea.is-warning:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,221,87,.25);box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.input.is-danger,.textarea.is-danger{border-color:#ff3860}.input.is-danger.is-active,.input.is-danger.is-focused,.input.is-danger:active,.input.is-danger:focus,.textarea.is-danger.is-active,.textarea.is-danger.is-focused,.textarea.is-danger:active,.textarea.is-danger:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,56,96,.25);box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.input.is-small,.textarea.is-small{border-radius:2px;font-size:.75rem}.input.is-medium,.textarea.is-medium{font-size:1.25rem}.input.is-large,.textarea.is-large{font-size:1.5rem}.input.is-fullwidth,.textarea.is-fullwidth{display:block;width:100%}.input.is-inline,.textarea.is-inline{display:inline;width:auto}.input.is-static{background-color:transparent;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;padding-left:0;padding-right:0}.textarea{display:block;max-width:100%;min-width:100%;padding:.625em;resize:vertical}.textarea:not([rows]){max-height:600px;min-height:120px}.textarea[rows]{height:unset}.textarea.has-fixed-size{resize:none}.checkbox,.radio{cursor:pointer;display:inline-block;line-height:1.25;position:relative}.checkbox input,.radio input{cursor:pointer}.checkbox:hover,.radio:hover{color:#363636}.checkbox[disabled],.radio[disabled]{color:#7a7a7a;cursor:not-allowed}.radio+.radio{margin-left:.5em}.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}.select:not(.is-multiple){height:2.25em}.select:not(.is-multiple):after{border:1px solid #3273dc;border-right:0;border-top:0;content:\" \";display:block;height:.5em;pointer-events:none;position:absolute;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;transform-origin:center;width:.5em;margin-top:-.375em;right:1.125em;top:50%;z-index:4}.select select{-moz-appearance:none;-webkit-appearance:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;height:2.25em;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding:calc(.375em - 1px) calc(.625em - 1px);position:relative;vertical-align:top;background-color:#fff;border-color:#dbdbdb;color:#363636;cursor:pointer;display:block;font-size:1em;max-width:100%;outline:none}.select select.is-active,.select select.is-focused,.select select:active,.select select:focus{outline:none}.select select[disabled]{cursor:not-allowed}.select select::-moz-placeholder{color:rgba(54,54,54,.3)}.select select::-webkit-input-placeholder{color:rgba(54,54,54,.3)}.select select:-moz-placeholder{color:rgba(54,54,54,.3)}.select select:-ms-input-placeholder{color:rgba(54,54,54,.3)}.select select.is-hovered,.select select:hover{border-color:#b5b5b5}.select select.is-active,.select select.is-focused,.select select:active,.select select:focus{border-color:#3273dc;-webkit-box-shadow:0 0 0 .125em rgba(50,115,220,.25);box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.select select[disabled]{background-color:#f5f5f5;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#7a7a7a}.select select[disabled]::-moz-placeholder{color:hsla(0,0%,48%,.3)}.select select[disabled]::-webkit-input-placeholder{color:hsla(0,0%,48%,.3)}.select select[disabled]:-moz-placeholder{color:hsla(0,0%,48%,.3)}.select select[disabled]:-ms-input-placeholder{color:hsla(0,0%,48%,.3)}.select select::-ms-expand{display:none}.select select[disabled]:hover{border-color:#f5f5f5}.select select:not([multiple]){padding-right:2.5em}.select select[multiple]{height:unset;padding:0}.select select[multiple] option{padding:.5em 1em}.select:hover:after{border-color:#363636}.select.is-white select{border-color:#fff}.select.is-white select.is-active,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.select.is-black select{border-color:#0a0a0a}.select.is-black select.is-active,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,4%,.25);box-shadow:0 0 0 .125em hsla(0,0%,4%,.25)}.select.is-light select{border-color:#f5f5f5}.select.is-light select.is-active,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96%,.25)}.select.is-dark select{border-color:#363636}.select.is-dark select.is-active,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select:focus{-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.select.is-primary select{border-color:#00d1b2}.select.is-primary select.is-active,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select:focus{-webkit-box-shadow:0 0 0 .125em rgba(0,209,178,.25);box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.select.is-link select{border-color:#3273dc}.select.is-link select.is-active,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select:focus{-webkit-box-shadow:0 0 0 .125em rgba(50,115,220,.25);box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.select.is-info select{border-color:#209cee}.select.is-info select.is-active,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select:focus{-webkit-box-shadow:0 0 0 .125em rgba(32,156,238,.25);box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.select.is-success select{border-color:#23d160}.select.is-success select.is-active,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select:focus{-webkit-box-shadow:0 0 0 .125em rgba(35,209,96,.25);box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.select.is-warning select{border-color:#ffdd57}.select.is-warning select.is-active,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,221,87,.25);box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.select.is-danger select{border-color:#ff3860}.select.is-danger select.is-active,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,56,96,.25);box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.select.is-small{border-radius:2px;font-size:.75rem}.select.is-medium{font-size:1.25rem}.select.is-large{font-size:1.5rem}.select.is-disabled:after{border-color:#7a7a7a}.select.is-fullwidth,.select.is-fullwidth select{width:100%}.select.is-loading:after{-webkit-animation:spinAround .5s infinite linear;animation:spinAround .5s infinite linear;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;position:relative;width:1em;margin-top:0;position:absolute;right:.625em;top:.625em;-webkit-transform:none;transform:none}.select.is-loading.is-small:after{font-size:.75rem}.select.is-loading.is-medium:after{font-size:1.25rem}.select.is-loading.is-large:after{font-size:1.5rem}.file{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#fff;border-color:transparent;color:#0a0a0a}.file.is-white.is-hovered .file-cta,.file.is-white:hover .file-cta{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.file.is-white.is-focused .file-cta,.file.is-white:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.25);box-shadow:0 0 .5em hsla(0,0%,100%,.25);color:#0a0a0a}.file.is-white.is-active .file-cta,.file.is-white:active .file-cta{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.file.is-black .file-cta{background-color:#0a0a0a;border-color:transparent;color:#fff}.file.is-black.is-hovered .file-cta,.file.is-black:hover .file-cta{background-color:#040404;border-color:transparent;color:#fff}.file.is-black.is-focused .file-cta,.file.is-black:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em hsla(0,0%,4%,.25);box-shadow:0 0 .5em hsla(0,0%,4%,.25);color:#fff}.file.is-black.is-active .file-cta,.file.is-black:active .file-cta{background-color:#000;border-color:transparent;color:#fff}.file.is-light .file-cta{background-color:#f5f5f5;border-color:transparent;color:#363636}.file.is-light.is-hovered .file-cta,.file.is-light:hover .file-cta{background-color:#eee;border-color:transparent;color:#363636}.file.is-light.is-focused .file-cta,.file.is-light:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em hsla(0,0%,96%,.25);box-shadow:0 0 .5em hsla(0,0%,96%,.25);color:#363636}.file.is-light.is-active .file-cta,.file.is-light:active .file-cta{background-color:#e8e8e8;border-color:transparent;color:#363636}.file.is-dark .file-cta{background-color:#363636;border-color:transparent;color:#f5f5f5}.file.is-dark.is-hovered .file-cta,.file.is-dark:hover .file-cta{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}.file.is-dark.is-focused .file-cta,.file.is-dark:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(54,54,54,.25);box-shadow:0 0 .5em rgba(54,54,54,.25);color:#f5f5f5}.file.is-dark.is-active .file-cta,.file.is-dark:active .file-cta{background-color:#292929;border-color:transparent;color:#f5f5f5}.file.is-primary .file-cta{background-color:#00d1b2;border-color:transparent;color:#fff}.file.is-primary.is-hovered .file-cta,.file.is-primary:hover .file-cta{background-color:#00c4a7;border-color:transparent;color:#fff}.file.is-primary.is-focused .file-cta,.file.is-primary:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(0,209,178,.25);box-shadow:0 0 .5em rgba(0,209,178,.25);color:#fff}.file.is-primary.is-active .file-cta,.file.is-primary:active .file-cta{background-color:#00b89c;border-color:transparent;color:#fff}.file.is-link .file-cta{background-color:#3273dc;border-color:transparent;color:#fff}.file.is-link.is-hovered .file-cta,.file.is-link:hover .file-cta{background-color:#276cda;border-color:transparent;color:#fff}.file.is-link.is-focused .file-cta,.file.is-link:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(50,115,220,.25);box-shadow:0 0 .5em rgba(50,115,220,.25);color:#fff}.file.is-link.is-active .file-cta,.file.is-link:active .file-cta{background-color:#2366d1;border-color:transparent;color:#fff}.file.is-info .file-cta{background-color:#209cee;border-color:transparent;color:#fff}.file.is-info.is-hovered .file-cta,.file.is-info:hover .file-cta{background-color:#1496ed;border-color:transparent;color:#fff}.file.is-info.is-focused .file-cta,.file.is-info:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(32,156,238,.25);box-shadow:0 0 .5em rgba(32,156,238,.25);color:#fff}.file.is-info.is-active .file-cta,.file.is-info:active .file-cta{background-color:#118fe4;border-color:transparent;color:#fff}.file.is-success .file-cta{background-color:#23d160;border-color:transparent;color:#fff}.file.is-success.is-hovered .file-cta,.file.is-success:hover .file-cta{background-color:#22c65b;border-color:transparent;color:#fff}.file.is-success.is-focused .file-cta,.file.is-success:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(35,209,96,.25);box-shadow:0 0 .5em rgba(35,209,96,.25);color:#fff}.file.is-success.is-active .file-cta,.file.is-success:active .file-cta{background-color:#20bc56;border-color:transparent;color:#fff}.file.is-warning .file-cta{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-hovered .file-cta,.file.is-warning:hover .file-cta{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-focused .file-cta,.file.is-warning:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(255,221,87,.25);box-shadow:0 0 .5em rgba(255,221,87,.25);color:rgba(0,0,0,.7)}.file.is-warning.is-active .file-cta,.file.is-warning:active .file-cta{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-danger .file-cta{background-color:#ff3860;border-color:transparent;color:#fff}.file.is-danger.is-hovered .file-cta,.file.is-danger:hover .file-cta{background-color:#ff2b56;border-color:transparent;color:#fff}.file.is-danger.is-focused .file-cta,.file.is-danger:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(255,56,96,.25);box-shadow:0 0 .5em rgba(255,56,96,.25);color:#fff}.file.is-danger.is-active .file-cta,.file.is-danger:active .file-cta{background-color:#ff1f4b;border-color:transparent;color:#fff}.file.is-small{font-size:.75rem}.file.is-medium{font-size:1.25rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.5rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:3px}.file.has-name.is-empty .file-name{display:none}.file.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.file.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.file.is-boxed .file-cta,.file.is-boxed .file-label{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.file.is-boxed .file-cta{height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:3px 3px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 3px 3px;border-width:0 1px 1px}.file.is-right .file-cta{border-radius:0 3px 3px 0}.file.is-right .file-name{border-radius:3px 0 0 3px;border-width:1px 0 1px 1px;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:none}.file-label{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#eee;color:#363636}.file-label:hover .file-name{border-color:#d5d5d5}.file-label:active .file-cta{background-color:#e8e8e8;color:#363636}.file-label:active .file-name{border-color:#cfcfcf}.file-input{height:.01em;left:0;outline:none;position:absolute;top:0;width:.01em}.file-cta,.file-name{-moz-appearance:none;-webkit-appearance:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;-webkit-box-shadow:none;box-shadow:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;height:2.25em;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding-left:calc(.625em - 1px);padding-right:calc(.625em - 1px);position:relative;vertical-align:top;border-color:#dbdbdb;border-radius:3px;font-size:1em;padding:calc(.375em - 1px) 1em;white-space:nowrap}.file-cta.is-active,.file-cta.is-focused,.file-cta:active,.file-cta:focus,.file-name.is-active,.file-name.is-focused,.file-name:active,.file-name:focus{outline:none}.file-cta[disabled],.file-name[disabled]{cursor:not-allowed}.file-cta{background-color:#f5f5f5;color:#4a4a4a}.file-name{border-color:#dbdbdb;border-style:solid;border-width:1px 1px 1px 0;display:block;max-width:16em;overflow:hidden;text-align:left;text-overflow:ellipsis}.file-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:1em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:.5em;width:1em}.file-icon .fa{font-size:14px}.label{color:#363636;display:block;font-size:1rem;font-weight:700}.label:not(:last-child){margin-bottom:.5em}.label.is-small{font-size:.75rem}.label.is-medium{font-size:1.25rem}.label.is-large{font-size:1.5rem}.help{display:block;font-size:.75rem;margin-top:.25rem}.help.is-white{color:#fff}.help.is-black{color:#0a0a0a}.help.is-light{color:#f5f5f5}.help.is-dark{color:#363636}.help.is-primary{color:#00d1b2}.help.is-link{color:#3273dc}.help.is-info{color:#209cee}.help.is-success{color:#23d160}.help.is-warning{color:#ffdd57}.help.is-danger{color:#ff3860}.field:not(:last-child){margin-bottom:.75rem}.field.has-addons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.field.has-addons .control:not(:last-child){margin-right:-1px}.field.has-addons .control:first-child .button,.field.has-addons .control:first-child .input,.field.has-addons .control:first-child .select select{border-bottom-left-radius:3px;border-top-left-radius:3px}.field.has-addons .control:last-child .button,.field.has-addons .control:last-child .input,.field.has-addons .control:last-child .select select{border-bottom-right-radius:3px;border-top-right-radius:3px}.field.has-addons .control .button,.field.has-addons .control .input,.field.has-addons .control .select select{border-radius:0}.field.has-addons .control .button.is-hovered,.field.has-addons .control .button:hover,.field.has-addons .control .input.is-hovered,.field.has-addons .control .input:hover,.field.has-addons .control .select select.is-hovered,.field.has-addons .control .select select:hover{z-index:2}.field.has-addons .control .button.is-active,.field.has-addons .control .button.is-focused,.field.has-addons .control .button:active,.field.has-addons .control .button:focus,.field.has-addons .control .input.is-active,.field.has-addons .control .input.is-focused,.field.has-addons .control .input:active,.field.has-addons .control .input:focus,.field.has-addons .control .select select.is-active,.field.has-addons .control .select select.is-focused,.field.has-addons .control .select select:active,.field.has-addons .control .select select:focus{z-index:3}.field.has-addons .control .button.is-active:hover,.field.has-addons .control .button.is-focused:hover,.field.has-addons .control .button:active:hover,.field.has-addons .control .button:focus:hover,.field.has-addons .control .input.is-active:hover,.field.has-addons .control .input.is-focused:hover,.field.has-addons .control .input:active:hover,.field.has-addons .control .input:focus:hover,.field.has-addons .control .select select.is-active:hover,.field.has-addons .control .select select.is-focused:hover,.field.has-addons .control .select select:active:hover,.field.has-addons .control .select select:focus:hover{z-index:4}.field.has-addons .control.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.field.has-addons.has-addons-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.field.has-addons.has-addons-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.field.has-addons.has-addons-fullwidth .control{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.field.is-grouped{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.field.is-grouped>.control{-ms-flex-negative:0;flex-shrink:0}.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:.75rem}.field.is-grouped>.control.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.is-grouped.is-grouped-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.field.is-grouped.is-grouped-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.field.is-grouped.is-grouped-multiline{-ms-flex-wrap:wrap;flex-wrap:wrap}.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:.75rem}.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-.75rem}.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}@media print,screen and (min-width:769px){.field.is-horizontal{display:-webkit-box;display:-ms-flexbox;display:flex}}.field-label .label{font-size:inherit}@media screen and (max-width:768px){.field-label{margin-bottom:.5rem}}@media print,screen and (min-width:769px){.field-label{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:.75rem;padding-top:.375em}.field-label.is-normal{padding-top:.375em}.field-label.is-medium{font-size:1.25rem;padding-top:.375em}.field-label.is-large{font-size:1.5rem;padding-top:.375em}}.field-body .field .field{margin-bottom:0}@media print,screen and (min-width:769px){.field-body{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:5;-ms-flex-positive:5;flex-grow:5;-ms-flex-negative:1;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{-ms-flex-negative:1;flex-shrink:1}.field-body>.field:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.field-body>.field:not(:last-child){margin-right:.75rem}}.control{font-size:1rem;position:relative;text-align:left}.control.has-icon .icon{color:#dbdbdb;height:2.25em;pointer-events:none;position:absolute;top:0;width:2.25em;z-index:4}.control.has-icon .input:focus+.icon{color:#7a7a7a}.control.has-icon .input.is-small+.icon{font-size:.75rem}.control.has-icon .input.is-medium+.icon{font-size:1.25rem}.control.has-icon .input.is-large+.icon{font-size:1.5rem}.control.has-icon:not(.has-icon-right) .icon{left:0}.control.has-icon:not(.has-icon-right) .input{padding-left:2.25em}.control.has-icon.has-icon-right .icon{right:0}.control.has-icon.has-icon-right .input{padding-right:2.25em}.control.has-icons-left .input:focus~.icon,.control.has-icons-left .select:focus~.icon,.control.has-icons-right .input:focus~.icon,.control.has-icons-right .select:focus~.icon{color:#7a7a7a}.control.has-icons-left .input.is-small~.icon,.control.has-icons-left .select.is-small~.icon,.control.has-icons-right .input.is-small~.icon,.control.has-icons-right .select.is-small~.icon{font-size:.75rem}.control.has-icons-left .input.is-medium~.icon,.control.has-icons-left .select.is-medium~.icon,.control.has-icons-right .input.is-medium~.icon,.control.has-icons-right .select.is-medium~.icon{font-size:1.25rem}.control.has-icons-left .input.is-large~.icon,.control.has-icons-left .select.is-large~.icon,.control.has-icons-right .input.is-large~.icon,.control.has-icons-right .select.is-large~.icon{font-size:1.5rem}.control.has-icons-left .icon,.control.has-icons-right .icon{color:#dbdbdb;height:2.25em;pointer-events:none;position:absolute;top:0;width:2.25em;z-index:4}.control.has-icons-left .input,.control.has-icons-left .select select{padding-left:2.25em}.control.has-icons-left .icon.is-left{left:0}.control.has-icons-right .input,.control.has-icons-right .select select{padding-right:2.25em}.control.has-icons-right .icon.is-right{right:0}.control.is-loading:after{-webkit-animation:spinAround .5s infinite linear;animation:spinAround .5s infinite linear;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;position:relative;width:1em;position:absolute!important;right:.625em;top:.625em}.control.is-loading.is-small:after{font-size:.75rem}.control.is-loading.is-medium:after{font-size:1.25rem}.control.is-loading.is-large:after{font-size:1.5rem}.icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:1.5rem;width:1.5rem}.icon.is-small{height:1rem;width:1rem}.icon.is-medium{height:2rem;width:2rem}.icon.is-large{height:3rem;width:3rem}.image{display:block;position:relative}.image img{display:block;height:auto;width:100%}.image.is-1by1 img,.image.is-2by1 img,.image.is-3by2 img,.image.is-4by3 img,.image.is-16by9 img,.image.is-square img{bottom:0;left:0;position:absolute;right:0;top:0;height:100%;width:100%}.image.is-1by1,.image.is-square{padding-top:100%}.image.is-4by3{padding-top:75%}.image.is-3by2{padding-top:66.6666%}.image.is-16by9{padding-top:56.25%}.image.is-2by1{padding-top:50%}.image.is-16x16{height:16px;width:16px}.image.is-24x24{height:24px;width:24px}.image.is-32x32{height:32px;width:32px}.image.is-48x48{height:48px;width:48px}.image.is-64x64{height:64px;width:64px}.image.is-96x96{height:96px;width:96px}.image.is-128x128{height:128px;width:128px}.notification{background-color:#f5f5f5;border-radius:3px;padding:1.25rem 2.5rem 1.25rem 1.5rem;position:relative}.notification:not(:last-child){margin-bottom:1.5rem}.notification a:not(.button){color:currentColor;text-decoration:underline}.notification strong{color:currentColor}.notification code,.notification pre{background:#fff}.notification pre code{background:transparent}.notification>.delete{position:absolute;right:.5em;top:.5em}.notification .content,.notification .subtitle,.notification .title{color:currentColor}.notification.is-white{background-color:#fff;color:#0a0a0a}.notification.is-black{background-color:#0a0a0a;color:#fff}.notification.is-light{background-color:#f5f5f5;color:#363636}.notification.is-dark{background-color:#363636;color:#f5f5f5}.notification.is-primary{background-color:#00d1b2;color:#fff}.notification.is-link{background-color:#3273dc;color:#fff}.notification.is-info{background-color:#209cee;color:#fff}.notification.is-success{background-color:#23d160;color:#fff}.notification.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.notification.is-danger{background-color:#ff3860;color:#fff}.progress{-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:290486px;display:block;height:1rem;overflow:hidden;padding:0;width:100%}.progress:not(:last-child){margin-bottom:1.5rem}.progress::-webkit-progress-bar{background-color:#dbdbdb}.progress::-webkit-progress-value{background-color:#4a4a4a}.progress::-moz-progress-bar{background-color:#4a4a4a}.progress::-ms-fill{background-color:#4a4a4a;border:none}.progress.is-white::-webkit-progress-value{background-color:#fff}.progress.is-white::-moz-progress-bar{background-color:#fff}.progress.is-white::-ms-fill{background-color:#fff}.progress.is-black::-webkit-progress-value{background-color:#0a0a0a}.progress.is-black::-moz-progress-bar{background-color:#0a0a0a}.progress.is-black::-ms-fill{background-color:#0a0a0a}.progress.is-light::-webkit-progress-value{background-color:#f5f5f5}.progress.is-light::-moz-progress-bar{background-color:#f5f5f5}.progress.is-light::-ms-fill{background-color:#f5f5f5}.progress.is-dark::-webkit-progress-value{background-color:#363636}.progress.is-dark::-moz-progress-bar{background-color:#363636}.progress.is-dark::-ms-fill{background-color:#363636}.progress.is-primary::-webkit-progress-value{background-color:#00d1b2}.progress.is-primary::-moz-progress-bar{background-color:#00d1b2}.progress.is-primary::-ms-fill{background-color:#00d1b2}.progress.is-link::-webkit-progress-value{background-color:#3273dc}.progress.is-link::-moz-progress-bar{background-color:#3273dc}.progress.is-link::-ms-fill{background-color:#3273dc}.progress.is-info::-webkit-progress-value{background-color:#209cee}.progress.is-info::-moz-progress-bar{background-color:#209cee}.progress.is-info::-ms-fill{background-color:#209cee}.progress.is-success::-webkit-progress-value{background-color:#23d160}.progress.is-success::-moz-progress-bar{background-color:#23d160}.progress.is-success::-ms-fill{background-color:#23d160}.progress.is-warning::-webkit-progress-value{background-color:#ffdd57}.progress.is-warning::-moz-progress-bar{background-color:#ffdd57}.progress.is-warning::-ms-fill{background-color:#ffdd57}.progress.is-danger::-webkit-progress-value{background-color:#ff3860}.progress.is-danger::-moz-progress-bar{background-color:#ff3860}.progress.is-danger::-ms-fill{background-color:#ff3860}.progress.is-small{height:.75rem}.progress.is-medium{height:1.25rem}.progress.is-large{height:1.5rem}.table{background-color:#fff;color:#363636;margin-bottom:1.5rem}.table td,.table th{border:1px solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.table td.is-white,.table th.is-white{background-color:#fff;border-color:#fff;color:#0a0a0a}.table td.is-black,.table th.is-black{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.table td.is-light,.table th.is-light{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.table td.is-dark,.table th.is-dark{background-color:#363636;border-color:#363636;color:#f5f5f5}.table td.is-primary,.table th.is-primary{background-color:#00d1b2;border-color:#00d1b2;color:#fff}.table td.is-link,.table th.is-link{background-color:#3273dc;border-color:#3273dc;color:#fff}.table td.is-info,.table th.is-info{background-color:#209cee;border-color:#209cee;color:#fff}.table td.is-success,.table th.is-success{background-color:#23d160;border-color:#23d160;color:#fff}.table td.is-warning,.table th.is-warning{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.table td.is-danger,.table th.is-danger{background-color:#ff3860;border-color:#ff3860;color:#fff}.table td.is-narrow,.table th.is-narrow{white-space:nowrap;width:1%}.table td.is-selected,.table th.is-selected{background-color:#00d1b2;color:#fff}.table td.is-selected a,.table td.is-selected strong,.table th.is-selected a,.table th.is-selected strong{color:currentColor}.table th{color:#363636;text-align:left}.table tr.is-selected{background-color:#00d1b2;color:#fff}.table tr.is-selected a,.table tr.is-selected strong{color:currentColor}.table tr.is-selected td,.table tr.is-selected th{border-color:#fff;color:currentColor}.table thead td,.table thead th{border-width:0 0 2px;color:#363636}.table tfoot td,.table tfoot th{border-width:2px 0 0;color:#363636}.table tbody tr:last-child td,.table tbody tr:last-child th{border-bottom-width:0}.table.is-bordered td,.table.is-bordered th{border-width:1px}.table.is-bordered tr:last-child td,.table.is-bordered tr:last-child th{border-bottom-width:1px}.table.is-fullwidth{width:100%}.table.is-hoverable tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover{background-color:#f5f5f5}.table.is-narrow td,.table.is-narrow th{padding:.25em .5em}.table.is-striped tbody tr:not(.is-selected):nth-child(2n){background-color:#fafafa}.tags{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.tags .tag{margin-bottom:.5rem}.tags .tag:not(:last-child){margin-right:.5rem}.tags:last-child{margin-bottom:-.5rem}.tags:not(:last-child){margin-bottom:1rem}.tags.has-addons .tag{margin-right:0}.tags.has-addons .tag:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.tags.has-addons .tag:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.tags.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tags.is-centered .tag{margin-right:.25rem;margin-left:.25rem}.tags.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.tags.is-right .tag:not(:first-child){margin-left:.5rem}.tags.is-right .tag:not(:last-child){margin-right:0}.tag:not(body){-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;border-radius:3px;color:#4a4a4a;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:.75rem;height:2em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;line-height:1.5;padding-left:.75em;padding-right:.75em;white-space:nowrap}.tag:not(body) .delete{margin-left:.25em;margin-right:-.375em}.tag:not(body).is-white{background-color:#fff;color:#0a0a0a}.tag:not(body).is-black{background-color:#0a0a0a;color:#fff}.tag:not(body).is-light{background-color:#f5f5f5;color:#363636}.tag:not(body).is-dark{background-color:#363636;color:#f5f5f5}.tag:not(body).is-primary{background-color:#00d1b2;color:#fff}.tag:not(body).is-link{background-color:#3273dc;color:#fff}.tag:not(body).is-info{background-color:#209cee;color:#fff}.tag:not(body).is-success{background-color:#23d160;color:#fff}.tag:not(body).is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.tag:not(body).is-danger{background-color:#ff3860;color:#fff}.tag:not(body).is-medium{font-size:1rem}.tag:not(body).is-large{font-size:1.25rem}.tag:not(body) .icon:first-child:not(:last-child){margin-left:-.375em;margin-right:.1875em}.tag:not(body) .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:-.375em}.tag:not(body) .icon:first-child:last-child{margin-left:-.375em;margin-right:-.375em}.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}.tag:not(body).is-delete:after,.tag:not(body).is-delete:before{background-color:currentColor;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.tag:not(body).is-delete:before{height:1px;width:50%}.tag:not(body).is-delete:after{height:50%;width:1px}.tag:not(body).is-delete:focus,.tag:not(body).is-delete:hover{background-color:#e8e8e8}.tag:not(body).is-delete:active{background-color:#dbdbdb}.tag:not(body).is-rounded{border-radius:290486px}a.tag:hover{text-decoration:underline}.subtitle,.title{word-break:break-word}.subtitle:not(:last-child),.title:not(:last-child){margin-bottom:1.5rem}.subtitle em,.subtitle span,.title em,.title span{font-weight:inherit}.subtitle .tag,.title .tag{vertical-align:middle}.title{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title strong{color:inherit;font-weight:inherit}.title+.highlight{margin-top:-.75rem}.title:not(.is-spaced)+.subtitle{margin-top:-1.5rem}.title.is-1{font-size:3rem}.title.is-2{font-size:2.5rem}.title.is-3{font-size:2rem}.title.is-4{font-size:1.5rem}.title.is-5{font-size:1.25rem}.title.is-6{font-size:1rem}.title.is-7{font-size:.75rem}.subtitle{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle strong{color:#363636;font-weight:600}.subtitle:not(.is-spaced)+.title{margin-top:-1.5rem}.subtitle.is-1{font-size:3rem}.subtitle.is-2{font-size:2.5rem}.subtitle.is-3{font-size:2rem}.subtitle.is-4{font-size:1.5rem}.subtitle.is-5{font-size:1.25rem}.subtitle.is-6{font-size:1rem}.subtitle.is-7{font-size:.75rem}.block:not(:last-child){margin-bottom:1.5rem}.delete{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;background-color:hsla(0,0%,4%,.2);border:none;border-radius:290486px;cursor:pointer;display:inline-block;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:none;position:relative;vertical-align:top;width:20px}.delete:after,.delete:before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.delete:before{height:2px;width:50%}.delete:after{height:50%;width:2px}.delete:focus,.delete:hover{background-color:hsla(0,0%,4%,.3)}.delete:active{background-color:hsla(0,0%,4%,.4)}.delete.is-small{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.delete.is-medium{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.delete.is-large{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.heading{display:block;font-size:11px;letter-spacing:1px;margin-bottom:5px;text-transform:uppercase}.highlight{font-weight:400;max-width:100%;overflow:hidden;padding:0}.highlight:not(:last-child){margin-bottom:1.5rem}.highlight pre{overflow:auto;max-width:100%}.loader{-webkit-animation:spinAround .5s infinite linear;animation:spinAround .5s infinite linear;border:2px solid #dbdbdb;border-radius:290486px;border-right-color:transparent;border-top-color:transparent;content:\"\";display:block;height:1em;position:relative;width:1em}.number{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;border-radius:290486px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1.25rem;height:2em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:1.5rem;min-width:2.5em;padding:.25rem .5rem;text-align:center;vertical-align:top}.breadcrumb{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1rem;overflow:hidden;overflow-x:auto;white-space:nowrap}.breadcrumb:not(:last-child){margin-bottom:1.5rem}.breadcrumb a{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#3273dc;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.5em .75em}.breadcrumb a:hover{color:#363636}.breadcrumb li{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.breadcrumb li:first-child a{padding-left:0}.breadcrumb li.is-active a{color:#363636;cursor:default;pointer-events:none}.breadcrumb li+li:before{color:#4a4a4a;content:\"/\"}.breadcrumb ol,.breadcrumb ul{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.breadcrumb .icon:first-child{margin-right:.5em}.breadcrumb .icon:last-child{margin-left:.5em}.breadcrumb.is-centered ol,.breadcrumb.is-centered ul{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.breadcrumb.is-right ol,.breadcrumb.is-right ul{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.breadcrumb.is-small{font-size:.75rem}.breadcrumb.is-medium{font-size:1.25rem}.breadcrumb.is-large{font-size:1.5rem}.breadcrumb.has-arrow-separator li+li:before{content:\"\\2192\"}.breadcrumb.has-bullet-separator li+li:before{content:\"\\2022\"}.breadcrumb.has-dot-separator li+li:before{content:\"\\B7\"}.breadcrumb.has-succeeds-separator li+li:before{content:\"\\227B\"}.card{background-color:#fff;-webkit-box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);color:#4a4a4a;max-width:100%;position:relative}.card-header{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-shadow:0 1px 2px hsla(0,0%,4%,.1);box-shadow:0 1px 2px hsla(0,0%,4%,.1)}.card-header,.card-header-title{display:-webkit-box;display:-ms-flexbox;display:flex}.card-header-title{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#363636;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;font-weight:700;padding:.75rem}.card-header-icon,.card-header-title.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.card-header-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;padding:.75rem}.card-image{display:block;position:relative}.card-content{padding:1.5rem}.card-footer{border-top:1px solid #dbdbdb;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.card-footer,.card-footer-item{display:-webkit-box;display:-ms-flexbox;display:flex}.card-footer-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.75rem}.card-footer-item:not(:last-child){border-right:1px solid #dbdbdb}.card .media:not(:last-child){margin-bottom:.75rem}.dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;vertical-align:top}.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}.dropdown.is-right .dropdown-menu{left:auto;right:0}.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:unset;top:auto}.dropdown-menu{display:none;left:0;min-width:12rem;padding-top:4px;position:absolute;top:100%;z-index:20}.dropdown-content{background-color:#fff;border-radius:3px;-webkit-box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);box-shadow:0 2px 3px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);padding-bottom:.5rem;padding-top:.5rem}.dropdown-item{color:#4a4a4a;display:block;font-size:.875rem;line-height:1.5;padding:.375rem 1rem;position:relative}a.dropdown-item{padding-right:3rem;white-space:nowrap}a.dropdown-item:hover{background-color:#f5f5f5;color:#0a0a0a}a.dropdown-item.is-active{background-color:#3273dc;color:#fff}.dropdown-divider{background-color:#dbdbdb;border:none;display:block;height:1px;margin:.5rem 0}.level{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.level:not(:last-child){margin-bottom:1.5rem}.level code{border-radius:3px}.level img{display:inline-block;vertical-align:top}.level.is-mobile,.level.is-mobile .level-left,.level.is-mobile .level-right{display:-webkit-box;display:-ms-flexbox;display:flex}.level.is-mobile .level-left+.level-right{margin-top:0}.level.is-mobile .level-item{margin-right:.75rem}.level.is-mobile .level-item:not(:last-child){margin-bottom:0}.level.is-mobile .level-item:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media print,screen and (min-width:769px){.level{display:-webkit-box;display:-ms-flexbox;display:flex}.level>.level-item:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}}.level-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.level-item .subtitle,.level-item .title{margin-bottom:0}@media screen and (max-width:768px){.level-item:not(:last-child){margin-bottom:.75rem}}.level-left,.level-right{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.level-left .level-item.is-flexible,.level-right .level-item.is-flexible{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media print,screen and (min-width:769px){.level-left .level-item:not(:last-child),.level-right .level-item:not(:last-child){margin-right:.75rem}}.level-left{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}@media screen and (max-width:768px){.level-left+.level-right{margin-top:1.5rem}}@media print,screen and (min-width:769px){.level-left{display:-webkit-box;display:-ms-flexbox;display:flex}}.level-right{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}@media print,screen and (min-width:769px){.level-right{display:-webkit-box;display:-ms-flexbox;display:flex}}.media{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:left}.media .content:not(:last-child){margin-bottom:.75rem}.media .media{border-top:1px solid hsla(0,0%,86%,.5);display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:.75rem}.media .media .content:not(:last-child),.media .media .control:not(:last-child){margin-bottom:.5rem}.media .media .media{padding-top:.5rem}.media .media .media+.media{margin-top:.5rem}.media+.media{border-top:1px solid hsla(0,0%,86%,.5);margin-top:1rem;padding-top:1rem}.media.is-large+.media{margin-top:1.5rem;padding-top:1.5rem}.media-left,.media-right{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.media-left{margin-right:1rem}.media-right{margin-left:1rem}.media-content{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;text-align:left}.menu{font-size:1rem}.menu.is-small{font-size:.75rem}.menu.is-medium{font-size:1.25rem}.menu.is-large{font-size:1.5rem}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:#4a4a4a;display:block;padding:.5em .75em}.menu-list a:hover{background-color:#f5f5f5;color:#363636}.menu-list a.is-active{background-color:#3273dc;color:#fff}.menu-list li ul{border-left:1px solid #dbdbdb;margin:.75em;padding-left:.75em}.menu-label{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}.menu-label:not(:first-child){margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}.message{background-color:#f5f5f5;border-radius:3px;font-size:1rem}.message:not(:last-child){margin-bottom:1.5rem}.message strong{color:currentColor}.message a:not(.button):not(.tag){color:currentColor;text-decoration:underline}.message.is-small{font-size:.75rem}.message.is-medium{font-size:1.25rem}.message.is-large{font-size:1.5rem}.message.is-white{background-color:#fff}.message.is-white .message-header{background-color:#fff;color:#0a0a0a}.message.is-white .message-body{border-color:#fff;color:#4d4d4d}.message.is-black{background-color:#fafafa}.message.is-black .message-header{background-color:#0a0a0a;color:#fff}.message.is-black .message-body{border-color:#0a0a0a;color:#090909}.message.is-light{background-color:#fafafa}.message.is-light .message-header{background-color:#f5f5f5;color:#363636}.message.is-light .message-body{border-color:#f5f5f5;color:#505050}.message.is-dark{background-color:#fafafa}.message.is-dark .message-header{background-color:#363636;color:#f5f5f5}.message.is-dark .message-body{border-color:#363636;color:#2a2a2a}.message.is-primary{background-color:#f5fffd}.message.is-primary .message-header{background-color:#00d1b2;color:#fff}.message.is-primary .message-body{border-color:#00d1b2;color:#021310}.message.is-link{background-color:#f6f9fe}.message.is-link .message-header{background-color:#3273dc;color:#fff}.message.is-link .message-body{border-color:#3273dc;color:#22509a}.message.is-info{background-color:#f6fbfe}.message.is-info .message-header{background-color:#209cee;color:#fff}.message.is-info .message-body{border-color:#209cee;color:#12537e}.message.is-success{background-color:#f6fef9}.message.is-success .message-header{background-color:#23d160;color:#fff}.message.is-success .message-body{border-color:#23d160;color:#0e301a}.message.is-warning{background-color:#fffdf5}.message.is-warning .message-header{background-color:#ffdd57;color:rgba(0,0,0,.7)}.message.is-warning .message-body{border-color:#ffdd57;color:#3b3108}.message.is-danger{background-color:#fff5f7}.message.is-danger .message-header{background-color:#ff3860;color:#fff}.message.is-danger .message-body{border-color:#ff3860;color:#cd0930}.message-header{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#4a4a4a;border-radius:3px 3px 0 0;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;line-height:1.25;padding:.5em .75em;position:relative}.message-header .delete{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;margin-left:.75em}.message-header+.message-body{border-top-left-radius:0;border-top-right-radius:0;border-top:none}.message-body{border:1px solid #dbdbdb;border-radius:3px;color:#4a4a4a;padding:1em 1.25em}.message-body code,.message-body pre{background-color:#fff}.message-body pre code{background-color:transparent}.modal{bottom:0;left:0;position:absolute;right:0;top:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;position:fixed;z-index:20}.modal.is-active{display:-webkit-box;display:-ms-flexbox;display:flex}.modal-background{bottom:0;left:0;position:absolute;right:0;top:0;background-color:hsla(0,0%,4%,.86)}.modal-card,.modal-content{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media print,screen and (min-width:769px){.modal-card,.modal-content{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-moz-appearance:none;-webkit-appearance:none;background-color:hsla(0,0%,4%,.2);border:none;border-radius:290486px;cursor:pointer;display:inline-block;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:none;position:relative;vertical-align:top;width:20px;background:none;height:40px;position:fixed;right:20px;top:20px;width:40px}.modal-close:after,.modal-close:before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.modal-close:before{height:2px;width:50%}.modal-close:after{height:50%;width:2px}.modal-close:focus,.modal-close:hover{background-color:hsla(0,0%,4%,.3)}.modal-close:active{background-color:hsla(0,0%,4%,.4)}.modal-close.is-small{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.modal-close.is-medium{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.modal-close.is-large{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.modal-card{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden}.modal-card,.modal-card-foot,.modal-card-head{display:-webkit-box;display:-ms-flexbox;display:flex}.modal-card-foot,.modal-card-head{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;position:relative}.modal-card-head{border-bottom:1px solid #dbdbdb;border-top-left-radius:5px;border-top-right-radius:5px}.modal-card-title{color:#363636;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;font-size:1.5rem;line-height:1}.modal-card-foot{border-bottom-left-radius:5px;border-bottom-right-radius:5px;border-top:1px solid #dbdbdb}.modal-card-foot .button:not(:last-child){margin-right:10px}.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#fff;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;overflow:auto;padding:20px}.navbar{background-color:#fff;min-height:3.25rem;position:relative}.navbar.is-white{background-color:#fff;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link,.navbar.is-white .navbar-brand>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link.is-active,.navbar.is-white .navbar-brand .navbar-link:hover,.navbar.is-white .navbar-brand>a.navbar-item.is-active,.navbar.is-white .navbar-brand>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link:after{border-color:#0a0a0a}@media screen and (min-width:1024px){.navbar.is-white .navbar-end .navbar-link,.navbar.is-white .navbar-end>.navbar-item,.navbar.is-white .navbar-start .navbar-link,.navbar.is-white .navbar-start>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link.is-active,.navbar.is-white .navbar-end .navbar-link:hover,.navbar.is-white .navbar-end>a.navbar-item.is-active,.navbar.is-white .navbar-end>a.navbar-item:hover,.navbar.is-white .navbar-start .navbar-link.is-active,.navbar.is-white .navbar-start .navbar-link:hover,.navbar.is-white .navbar-start>a.navbar-item.is-active,.navbar.is-white .navbar-start>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link:after,.navbar.is-white .navbar-start .navbar-link:after{border-color:#0a0a0a}.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-dropdown a.navbar-item.is-active{background-color:#fff;color:#0a0a0a}}.navbar.is-black{background-color:#0a0a0a;color:#fff}.navbar.is-black .navbar-brand .navbar-link,.navbar.is-black .navbar-brand>.navbar-item{color:#fff}.navbar.is-black .navbar-brand .navbar-link.is-active,.navbar.is-black .navbar-brand .navbar-link:hover,.navbar.is-black .navbar-brand>a.navbar-item.is-active,.navbar.is-black .navbar-brand>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-brand .navbar-link:after{border-color:#fff}@media screen and (min-width:1024px){.navbar.is-black .navbar-end .navbar-link,.navbar.is-black .navbar-end>.navbar-item,.navbar.is-black .navbar-start .navbar-link,.navbar.is-black .navbar-start>.navbar-item{color:#fff}.navbar.is-black .navbar-end .navbar-link.is-active,.navbar.is-black .navbar-end .navbar-link:hover,.navbar.is-black .navbar-end>a.navbar-item.is-active,.navbar.is-black .navbar-end>a.navbar-item:hover,.navbar.is-black .navbar-start .navbar-link.is-active,.navbar.is-black .navbar-start .navbar-link:hover,.navbar.is-black .navbar-start>a.navbar-item.is-active,.navbar.is-black .navbar-start>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-end .navbar-link:after,.navbar.is-black .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link{background-color:#000;color:#fff}.navbar.is-black .navbar-dropdown a.navbar-item.is-active{background-color:#0a0a0a;color:#fff}}.navbar.is-light{background-color:#f5f5f5;color:#363636}.navbar.is-light .navbar-brand .navbar-link,.navbar.is-light .navbar-brand>.navbar-item{color:#363636}.navbar.is-light .navbar-brand .navbar-link.is-active,.navbar.is-light .navbar-brand .navbar-link:hover,.navbar.is-light .navbar-brand>a.navbar-item.is-active,.navbar.is-light .navbar-brand>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-brand .navbar-link:after{border-color:#363636}@media screen and (min-width:1024px){.navbar.is-light .navbar-end .navbar-link,.navbar.is-light .navbar-end>.navbar-item,.navbar.is-light .navbar-start .navbar-link,.navbar.is-light .navbar-start>.navbar-item{color:#363636}.navbar.is-light .navbar-end .navbar-link.is-active,.navbar.is-light .navbar-end .navbar-link:hover,.navbar.is-light .navbar-end>a.navbar-item.is-active,.navbar.is-light .navbar-end>a.navbar-item:hover,.navbar.is-light .navbar-start .navbar-link.is-active,.navbar.is-light .navbar-start .navbar-link:hover,.navbar.is-light .navbar-start>a.navbar-item.is-active,.navbar.is-light .navbar-start>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-end .navbar-link:after,.navbar.is-light .navbar-start .navbar-link:after{border-color:#363636}.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#363636}}.navbar.is-dark{background-color:#363636;color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link,.navbar.is-dark .navbar-brand>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link.is-active,.navbar.is-dark .navbar-brand .navbar-link:hover,.navbar.is-dark .navbar-brand>a.navbar-item.is-active,.navbar.is-dark .navbar-brand>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link:after{border-color:#f5f5f5}@media screen and (min-width:1024px){.navbar.is-dark .navbar-end .navbar-link,.navbar.is-dark .navbar-end>.navbar-item,.navbar.is-dark .navbar-start .navbar-link,.navbar.is-dark .navbar-start>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link.is-active,.navbar.is-dark .navbar-end .navbar-link:hover,.navbar.is-dark .navbar-end>a.navbar-item.is-active,.navbar.is-dark .navbar-end>a.navbar-item:hover,.navbar.is-dark .navbar-start .navbar-link.is-active,.navbar.is-dark .navbar-start .navbar-link:hover,.navbar.is-dark .navbar-start>a.navbar-item.is-active,.navbar.is-dark .navbar-start>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link:after,.navbar.is-dark .navbar-start .navbar-link:after{border-color:#f5f5f5}.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-dropdown a.navbar-item.is-active{background-color:#363636;color:#f5f5f5}}.navbar.is-primary{background-color:#00d1b2;color:#fff}.navbar.is-primary .navbar-brand .navbar-link,.navbar.is-primary .navbar-brand>.navbar-item{color:#fff}.navbar.is-primary .navbar-brand .navbar-link.is-active,.navbar.is-primary .navbar-brand .navbar-link:hover,.navbar.is-primary .navbar-brand>a.navbar-item.is-active,.navbar.is-primary .navbar-brand>a.navbar-item:hover{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-brand .navbar-link:after{border-color:#fff}@media screen and (min-width:1024px){.navbar.is-primary .navbar-end .navbar-link,.navbar.is-primary .navbar-end>.navbar-item,.navbar.is-primary .navbar-start .navbar-link,.navbar.is-primary .navbar-start>.navbar-item{color:#fff}.navbar.is-primary .navbar-end .navbar-link.is-active,.navbar.is-primary .navbar-end .navbar-link:hover,.navbar.is-primary .navbar-end>a.navbar-item.is-active,.navbar.is-primary .navbar-end>a.navbar-item:hover,.navbar.is-primary .navbar-start .navbar-link.is-active,.navbar.is-primary .navbar-start .navbar-link:hover,.navbar.is-primary .navbar-start>a.navbar-item.is-active,.navbar.is-primary .navbar-start>a.navbar-item:hover{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-end .navbar-link:after,.navbar.is-primary .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-dropdown a.navbar-item.is-active{background-color:#00d1b2;color:#fff}}.navbar.is-link{background-color:#3273dc;color:#fff}.navbar.is-link .navbar-brand .navbar-link,.navbar.is-link .navbar-brand>.navbar-item{color:#fff}.navbar.is-link .navbar-brand .navbar-link.is-active,.navbar.is-link .navbar-brand .navbar-link:hover,.navbar.is-link .navbar-brand>a.navbar-item.is-active,.navbar.is-link .navbar-brand>a.navbar-item:hover{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-brand .navbar-link:after{border-color:#fff}@media screen and (min-width:1024px){.navbar.is-link .navbar-end .navbar-link,.navbar.is-link .navbar-end>.navbar-item,.navbar.is-link .navbar-start .navbar-link,.navbar.is-link .navbar-start>.navbar-item{color:#fff}.navbar.is-link .navbar-end .navbar-link.is-active,.navbar.is-link .navbar-end .navbar-link:hover,.navbar.is-link .navbar-end>a.navbar-item.is-active,.navbar.is-link .navbar-end>a.navbar-item:hover,.navbar.is-link .navbar-start .navbar-link.is-active,.navbar.is-link .navbar-start .navbar-link:hover,.navbar.is-link .navbar-start>a.navbar-item.is-active,.navbar.is-link .navbar-start>a.navbar-item:hover{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-end .navbar-link:after,.navbar.is-link .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-dropdown a.navbar-item.is-active{background-color:#3273dc;color:#fff}}.navbar.is-info{background-color:#209cee;color:#fff}.navbar.is-info .navbar-brand .navbar-link,.navbar.is-info .navbar-brand>.navbar-item{color:#fff}.navbar.is-info .navbar-brand .navbar-link.is-active,.navbar.is-info .navbar-brand .navbar-link:hover,.navbar.is-info .navbar-brand>a.navbar-item.is-active,.navbar.is-info .navbar-brand>a.navbar-item:hover{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-brand .navbar-link:after{border-color:#fff}@media screen and (min-width:1024px){.navbar.is-info .navbar-end .navbar-link,.navbar.is-info .navbar-end>.navbar-item,.navbar.is-info .navbar-start .navbar-link,.navbar.is-info .navbar-start>.navbar-item{color:#fff}.navbar.is-info .navbar-end .navbar-link.is-active,.navbar.is-info .navbar-end .navbar-link:hover,.navbar.is-info .navbar-end>a.navbar-item.is-active,.navbar.is-info .navbar-end>a.navbar-item:hover,.navbar.is-info .navbar-start .navbar-link.is-active,.navbar.is-info .navbar-start .navbar-link:hover,.navbar.is-info .navbar-start>a.navbar-item.is-active,.navbar.is-info .navbar-start>a.navbar-item:hover{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-end .navbar-link:after,.navbar.is-info .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-dropdown a.navbar-item.is-active{background-color:#209cee;color:#fff}}.navbar.is-success{background-color:#23d160;color:#fff}.navbar.is-success .navbar-brand .navbar-link,.navbar.is-success .navbar-brand>.navbar-item{color:#fff}.navbar.is-success .navbar-brand .navbar-link.is-active,.navbar.is-success .navbar-brand .navbar-link:hover,.navbar.is-success .navbar-brand>a.navbar-item.is-active,.navbar.is-success .navbar-brand>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-brand .navbar-link:after{border-color:#fff}@media screen and (min-width:1024px){.navbar.is-success .navbar-end .navbar-link,.navbar.is-success .navbar-end>.navbar-item,.navbar.is-success .navbar-start .navbar-link,.navbar.is-success .navbar-start>.navbar-item{color:#fff}.navbar.is-success .navbar-end .navbar-link.is-active,.navbar.is-success .navbar-end .navbar-link:hover,.navbar.is-success .navbar-end>a.navbar-item.is-active,.navbar.is-success .navbar-end>a.navbar-item:hover,.navbar.is-success .navbar-start .navbar-link.is-active,.navbar.is-success .navbar-start .navbar-link:hover,.navbar.is-success .navbar-start>a.navbar-item.is-active,.navbar.is-success .navbar-start>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-end .navbar-link:after,.navbar.is-success .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-dropdown a.navbar-item.is-active{background-color:#23d160;color:#fff}}.navbar.is-warning{background-color:#ffdd57}.navbar.is-warning,.navbar.is-warning .navbar-brand .navbar-link,.navbar.is-warning .navbar-brand>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link.is-active,.navbar.is-warning .navbar-brand .navbar-link:hover,.navbar.is-warning .navbar-brand>a.navbar-item.is-active,.navbar.is-warning .navbar-brand>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link:after{border-color:rgba(0,0,0,.7)}@media screen and (min-width:1024px){.navbar.is-warning .navbar-end .navbar-link,.navbar.is-warning .navbar-end>.navbar-item,.navbar.is-warning .navbar-start .navbar-link,.navbar.is-warning .navbar-start>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link.is-active,.navbar.is-warning .navbar-end .navbar-link:hover,.navbar.is-warning .navbar-end>a.navbar-item.is-active,.navbar.is-warning .navbar-end>a.navbar-item:hover,.navbar.is-warning .navbar-start .navbar-link.is-active,.navbar.is-warning .navbar-start .navbar-link:hover,.navbar.is-warning .navbar-start>a.navbar-item.is-active,.navbar.is-warning .navbar-start>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link:after,.navbar.is-warning .navbar-start .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-dropdown a.navbar-item.is-active{background-color:#ffdd57;color:rgba(0,0,0,.7)}}.navbar.is-danger{background-color:#ff3860;color:#fff}.navbar.is-danger .navbar-brand .navbar-link,.navbar.is-danger .navbar-brand>.navbar-item{color:#fff}.navbar.is-danger .navbar-brand .navbar-link.is-active,.navbar.is-danger .navbar-brand .navbar-link:hover,.navbar.is-danger .navbar-brand>a.navbar-item.is-active,.navbar.is-danger .navbar-brand>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-brand .navbar-link:after{border-color:#fff}@media screen and (min-width:1024px){.navbar.is-danger .navbar-end .navbar-link,.navbar.is-danger .navbar-end>.navbar-item,.navbar.is-danger .navbar-start .navbar-link,.navbar.is-danger .navbar-start>.navbar-item{color:#fff}.navbar.is-danger .navbar-end .navbar-link.is-active,.navbar.is-danger .navbar-end .navbar-link:hover,.navbar.is-danger .navbar-end>a.navbar-item.is-active,.navbar.is-danger .navbar-end>a.navbar-item:hover,.navbar.is-danger .navbar-start .navbar-link.is-active,.navbar.is-danger .navbar-start .navbar-link:hover,.navbar.is-danger .navbar-start>a.navbar-item.is-active,.navbar.is-danger .navbar-start>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-end .navbar-link:after,.navbar.is-danger .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-dropdown a.navbar-item.is-active{background-color:#ff3860;color:#fff}}.navbar>.container{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;min-height:3.25rem;width:100%}.navbar.has-shadow{-webkit-box-shadow:0 2px 3px hsla(0,0%,4%,.1);box-shadow:0 2px 3px hsla(0,0%,4%,.1)}.navbar.is-fixed-bottom,.navbar.is-fixed-top{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom{bottom:0}.navbar.is-fixed-bottom.has-shadow{-webkit-box-shadow:0 -2px 3px hsla(0,0%,4%,.1);box-shadow:0 -2px 3px hsla(0,0%,4%,.1)}.navbar.is-fixed-top{top:0}html.has-navbar-fixed-top{padding-top:3.25rem}html.has-navbar-fixed-bottom{padding-bottom:3.25rem}.navbar-brand,.navbar-tabs{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;min-height:3.25rem}.navbar-tabs{-webkit-overflow-scrolling:touch;max-width:100vw;overflow-x:auto;overflow-y:hidden}.navbar-burger{cursor:pointer;display:block;height:3.25rem;position:relative;width:3.25rem;margin-left:auto}.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;-webkit-transform-origin:center;transform-origin:center;-webkit-transition-duration:86ms;transition-duration:86ms;-webkit-transition-property:background-color,opacity,-webkit-transform;transition-property:background-color,opacity,-webkit-transform;transition-property:background-color,opacity,transform;transition-property:background-color,opacity,transform,-webkit-transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;width:16px}.navbar-burger span:first-child{top:calc(50% - 6px)}.navbar-burger span:nth-child(2){top:calc(50% - 1px)}.navbar-burger span:nth-child(3){top:calc(50% + 4px)}.navbar-burger:hover{background-color:rgba(0,0,0,.05)}.navbar-burger.is-active span:first-child{-webkit-transform:translateY(5px) rotate(45deg);transform:translateY(5px) rotate(45deg)}.navbar-burger.is-active span:nth-child(2){opacity:0}.navbar-burger.is-active span:nth-child(3){-webkit-transform:translateY(-5px) rotate(-45deg);transform:translateY(-5px) rotate(-45deg)}.navbar-menu{display:none}.navbar-item,.navbar-link{color:#4a4a4a;display:block;line-height:1.5;padding:.5rem 1rem;position:relative}a.navbar-item.is-active,a.navbar-item:hover,a.navbar-link.is-active,a.navbar-link:hover{background-color:#f5f5f5;color:#3273dc}.navbar-item{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.navbar-item img{max-height:1.75rem}.navbar-item.has-dropdown{padding:0}.navbar-item.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.navbar-item.is-tab{border-bottom:1px solid transparent;min-height:3.25rem;padding-bottom:calc(.5rem - 1px)}.navbar-item.is-tab.is-active,.navbar-item.is-tab:hover{background-color:transparent;border-bottom-color:#3273dc}.navbar-item.is-tab.is-active{border-bottom-style:solid;border-bottom-width:3px;color:#3273dc;padding-bottom:calc(.5rem - 3px)}.navbar-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.navbar-link{padding-right:2.5em}.navbar-dropdown{font-size:.875rem;padding-bottom:.5rem;padding-top:.5rem}.navbar-dropdown .navbar-item{padding-left:1.5rem;padding-right:1.5rem}.navbar-divider{background-color:#dbdbdb;border:none;display:none;height:1px;margin:.5rem 0}@media screen and (max-width:1023px){.navbar>.container{display:block}.navbar-brand .navbar-item,.navbar-tabs .navbar-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.navbar-menu{background-color:#fff;-webkit-box-shadow:0 8px 16px hsla(0,0%,4%,.1);box-shadow:0 8px 16px hsla(0,0%,4%,.1);padding:.5rem 0}.navbar-menu.is-active{display:block}.navbar.is-fixed-bottom-touch,.navbar.is-fixed-top-touch{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-touch{bottom:0}.navbar.is-fixed-bottom-touch.has-shadow{-webkit-box-shadow:0 -2px 3px hsla(0,0%,4%,.1);box-shadow:0 -2px 3px hsla(0,0%,4%,.1)}.navbar.is-fixed-top-touch{top:0}.navbar.is-fixed-top-touch .navbar-menu,.navbar.is-fixed-top .navbar-menu{-webkit-overflow-scrolling:touch;max-height:calc(100vh - 3.25rem);overflow:auto}html.has-navbar-fixed-top-touch{padding-top:3.25rem}html.has-navbar-fixed-bottom-touch{padding-bottom:3.25rem}}@media screen and (min-width:1024px){.navbar,.navbar-end,.navbar-menu,.navbar-start{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex}.navbar{min-height:3.25rem}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link,.navbar.is-transparent a.navbar-item.is-active,.navbar.is-transparent a.navbar-item:hover,.navbar.is-transparent a.navbar-link.is-active,.navbar.is-transparent a.navbar-link:hover{background-color:transparent!important}.navbar.is-transparent .navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#3273dc}.navbar-burger{display:none}.navbar-item,.navbar-link{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.navbar-item.has-dropdown{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.navbar-item.has-dropdown-up .navbar-link:after{-webkit-transform:rotate(135deg) translate(.25em,-.25em);transform:rotate(135deg) translate(.25em,-.25em)}.navbar-item.has-dropdown-up .navbar-dropdown{border-bottom:1px solid #dbdbdb;border-radius:5px 5px 0 0;border-top:none;bottom:100%;-webkit-box-shadow:0 -8px 8px hsla(0,0%,4%,.1);box-shadow:0 -8px 8px hsla(0,0%,4%,.1);top:auto}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed{opacity:1;pointer-events:auto;-webkit-transform:translateY(0);transform:translateY(0)}.navbar-link:after{border:1px solid #3273dc;border-right:0;border-top:0;content:\" \";display:block;height:.5em;pointer-events:none;position:absolute;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;transform-origin:center;width:.5em;margin-top:-.375em;right:1.125em;top:50%}.navbar-menu{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.navbar-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-right:auto}.navbar-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-left:auto}.navbar-dropdown{background-color:#fff;border-bottom-left-radius:5px;border-bottom-right-radius:5px;border-top:1px solid #dbdbdb;-webkit-box-shadow:0 8px 8px hsla(0,0%,4%,.1);box-shadow:0 8px 8px hsla(0,0%,4%,.1);display:none;font-size:.875rem;left:0;min-width:100%;position:absolute;top:100%;z-index:20}.navbar-dropdown .navbar-item{padding:.375rem 1rem;white-space:nowrap}.navbar-dropdown a.navbar-item{padding-right:3rem}.navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#3273dc}.navbar-dropdown.is-boxed{border-radius:5px;border-top:none;-webkit-box-shadow:0 8px 8px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);box-shadow:0 8px 8px hsla(0,0%,4%,.1),0 0 0 1px hsla(0,0%,4%,.1);display:block;opacity:0;pointer-events:none;top:calc(100% + -4px);-webkit-transform:translateY(-5px);transform:translateY(-5px);-webkit-transition-duration:86ms;transition-duration:86ms;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.navbar-dropdown.is-right{left:auto;right:0}.navbar-divider{display:block}.container>.navbar .navbar-brand,.navbar>.container .navbar-brand{margin-left:-1rem}.container>.navbar .navbar-menu,.navbar>.container .navbar-menu{margin-right:-1rem}.navbar.is-fixed-bottom-desktop,.navbar.is-fixed-top-desktop{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-desktop{bottom:0}.navbar.is-fixed-bottom-desktop.has-shadow{-webkit-box-shadow:0 -2px 3px hsla(0,0%,4%,.1);box-shadow:0 -2px 3px hsla(0,0%,4%,.1)}.navbar.is-fixed-top-desktop{top:0}html.has-navbar-fixed-top-desktop{padding-top:3.25rem}html.has-navbar-fixed-bottom-desktop{padding-bottom:3.25rem}a.navbar-item.is-active,a.navbar-link.is-active{color:#0a0a0a}a.navbar-item.is-active:not(:hover),a.navbar-link.is-active:not(:hover){background-color:transparent}.navbar-item.has-dropdown.is-active .navbar-link,.navbar-item.has-dropdown:hover .navbar-link{background-color:#f5f5f5}}.pagination{font-size:1rem;margin:-.25rem}.pagination.is-small{font-size:.75rem}.pagination.is-medium{font-size:1.25rem}.pagination.is-large{font-size:1.5rem}.pagination,.pagination-list{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous{-moz-appearance:none;-webkit-appearance:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;height:2.25em;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding-left:calc(.625em - 1px);padding-right:calc(.625em - 1px);position:relative;vertical-align:top;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:1em;padding:calc(.375em - 1px) .5em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:.25rem;text-align:center}.pagination-ellipsis.is-active,.pagination-ellipsis.is-focused,.pagination-ellipsis:active,.pagination-ellipsis:focus,.pagination-link.is-active,.pagination-link.is-focused,.pagination-link:active,.pagination-link:focus,.pagination-next.is-active,.pagination-next.is-focused,.pagination-next:active,.pagination-next:focus,.pagination-previous.is-active,.pagination-previous.is-focused,.pagination-previous:active,.pagination-previous:focus{outline:none}.pagination-ellipsis[disabled],.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled]{cursor:not-allowed}.pagination-link,.pagination-next,.pagination-previous{border-color:#dbdbdb;min-width:2.25em}.pagination-link:hover,.pagination-next:hover,.pagination-previous:hover{border-color:#b5b5b5;color:#363636}.pagination-link:focus,.pagination-next:focus,.pagination-previous:focus{border-color:#3273dc}.pagination-link:active,.pagination-next:active,.pagination-previous:active{-webkit-box-shadow:inset 0 1px 2px hsla(0,0%,4%,.2);box-shadow:inset 0 1px 2px hsla(0,0%,4%,.2)}.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled]{background-color:#dbdbdb;border-color:#dbdbdb;-webkit-box-shadow:none;box-shadow:none;color:#7a7a7a;opacity:.5}.pagination-next,.pagination-previous{padding-left:.75em;padding-right:.75em;white-space:nowrap}.pagination-link.is-current{background-color:#3273dc;border-color:#3273dc;color:#fff}.pagination-ellipsis{color:#b5b5b5;pointer-events:none}.pagination-list{-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (max-width:768px){.pagination{-ms-flex-wrap:wrap;flex-wrap:wrap}.pagination-list li,.pagination-next,.pagination-previous{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}}@media print,screen and (min-width:769px){.pagination-list{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination-previous{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination-next{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.pagination.is-centered .pagination-previous{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.is-centered .pagination-list{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.is-centered .pagination-next{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination.is-right .pagination-previous{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.is-right .pagination-next{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.is-right .pagination-list{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}}.panel{font-size:1rem}.panel:not(:last-child){margin-bottom:1.5rem}.panel-block,.panel-heading,.panel-tabs{border-bottom:1px solid #dbdbdb;border-left:1px solid #dbdbdb;border-right:1px solid #dbdbdb}.panel-block:first-child,.panel-heading:first-child,.panel-tabs:first-child{border-top:1px solid #dbdbdb}.panel-heading{background-color:#f5f5f5;border-radius:3px 3px 0 0;color:#363636;font-size:1.25em;font-weight:300;line-height:1.25;padding:.5em .75em}.panel-tabs{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:.875em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.panel-tabs a{border-bottom:1px solid #dbdbdb;margin-bottom:-1px;padding:.5em}.panel-tabs a.is-active{border-bottom-color:#4a4a4a;color:#363636}.panel-list a{color:#4a4a4a}.panel-list a:hover{color:#3273dc}.panel-block{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#363636;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:.5em .75em}.panel-block input[type=checkbox]{margin-right:.75em}.panel-block>.control{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;width:100%}.panel-block.is-wrapped{-ms-flex-wrap:wrap;flex-wrap:wrap}.panel-block.is-active{border-left-color:#3273dc;color:#363636}.panel-block.is-active .panel-icon{color:#3273dc}a.panel-block,label.panel-block{cursor:pointer}a.panel-block:hover,label.panel-block:hover{background-color:#f5f5f5}.panel-icon{display:inline-block;font-size:14px;height:1em;line-height:1em;text-align:center;vertical-align:top;width:1em;color:#7a7a7a;margin-right:.75em}.panel-icon .fa{font-size:inherit;line-height:inherit}.tabs{-webkit-overflow-scrolling:touch;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1rem;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs:not(:last-child){margin-bottom:1.5rem}.tabs a{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;color:#4a4a4a;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:-1px;padding:.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:#363636;color:#363636}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:#3273dc;color:#3273dc}.tabs ul{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom-color:#dbdbdb;border-bottom-style:solid;border-bottom-width:1px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.tabs ul.is-center,.tabs ul.is-left{padding-right:.75em}.tabs ul.is-center{-webkit-box-flex:0;-ms-flex:none;flex:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:.75em}.tabs ul.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-left:.75em}.tabs .icon:first-child{margin-right:.5em}.tabs .icon:last-child{margin-left:.5em}.tabs.is-centered ul{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tabs.is-right ul{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:3px 3px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f5;border-bottom-color:#dbdbdb}.tabs.is-boxed li.is-active a{background-color:#fff;border-color:#dbdbdb;border-bottom-color:transparent!important}.tabs.is-fullwidth li{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.tabs.is-toggle a{border:1px solid #dbdbdb;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f5;border-color:#b5b5b5;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-radius:3px 0 0 3px}.tabs.is-toggle li:last-child a{border-radius:0 3px 3px 0}.tabs.is-toggle li.is-active a{background-color:#3273dc;border-color:#3273dc;color:#fff;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-small{font-size:.75rem}.tabs.is-medium{font-size:1.25rem}.tabs.is-large{font-size:1.5rem}.column{display:block;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;padding:.75rem}.columns.is-mobile>.column.is-full,.columns.is-mobile>.column.is-narrow{-webkit-box-flex:0;-ms-flex:none;flex:none}.columns.is-mobile>.column.is-full{width:100%}.columns.is-mobile>.column.is-three-quarters{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.columns.is-mobile>.column.is-two-thirds{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.columns.is-mobile>.column.is-half{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.columns.is-mobile>.column.is-one-third{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.columns.is-mobile>.column.is-one-quarter{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.columns.is-mobile>.column.is-one-fifth{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.columns.is-mobile>.column.is-two-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.columns.is-mobile>.column.is-three-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.columns.is-mobile>.column.is-four-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.columns.is-mobile>.column.is-offset-three-quarters{margin-left:75%}.columns.is-mobile>.column.is-offset-two-thirds{margin-left:66.6666%}.columns.is-mobile>.column.is-offset-half{margin-left:50%}.columns.is-mobile>.column.is-offset-one-third{margin-left:33.3333%}.columns.is-mobile>.column.is-offset-one-quarter{margin-left:25%}.columns.is-mobile>.column.is-offset-one-fifth{margin-left:20%}.columns.is-mobile>.column.is-offset-two-fifths{margin-left:40%}.columns.is-mobile>.column.is-offset-three-fifths{margin-left:60%}.columns.is-mobile>.column.is-offset-four-fifths{margin-left:80%}.columns.is-mobile>.column.is-1{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.columns.is-mobile>.column.is-offset-1{margin-left:8.33333%}.columns.is-mobile>.column.is-2{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.columns.is-mobile>.column.is-offset-2{margin-left:16.66667%}.columns.is-mobile>.column.is-3{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.columns.is-mobile>.column.is-offset-3{margin-left:25%}.columns.is-mobile>.column.is-4{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.columns.is-mobile>.column.is-offset-4{margin-left:33.33333%}.columns.is-mobile>.column.is-5{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.columns.is-mobile>.column.is-offset-5{margin-left:41.66667%}.columns.is-mobile>.column.is-6{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.columns.is-mobile>.column.is-offset-6{margin-left:50%}.columns.is-mobile>.column.is-7{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.columns.is-mobile>.column.is-offset-7{margin-left:58.33333%}.columns.is-mobile>.column.is-8{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.columns.is-mobile>.column.is-offset-8{margin-left:66.66667%}.columns.is-mobile>.column.is-9{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.columns.is-mobile>.column.is-offset-9{margin-left:75%}.columns.is-mobile>.column.is-10{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.columns.is-mobile>.column.is-offset-10{margin-left:83.33333%}.columns.is-mobile>.column.is-11{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.columns.is-mobile>.column.is-offset-11{margin-left:91.66667%}.columns.is-mobile>.column.is-12{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.columns.is-mobile>.column.is-offset-12{margin-left:100%}@media screen and (max-width:768px){.column.is-full-mobile,.column.is-narrow-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-mobile{width:100%}.column.is-three-quarters-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-mobile{margin-left:75%}.column.is-offset-two-thirds-mobile{margin-left:66.6666%}.column.is-offset-half-mobile{margin-left:50%}.column.is-offset-one-third-mobile{margin-left:33.3333%}.column.is-offset-one-quarter-mobile{margin-left:25%}.column.is-offset-one-fifth-mobile{margin-left:20%}.column.is-offset-two-fifths-mobile{margin-left:40%}.column.is-offset-three-fifths-mobile{margin-left:60%}.column.is-offset-four-fifths-mobile{margin-left:80%}.column.is-1-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-mobile{margin-left:8.33333%}.column.is-2-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-mobile{margin-left:16.66667%}.column.is-3-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-mobile{margin-left:25%}.column.is-4-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-mobile{margin-left:33.33333%}.column.is-5-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-mobile{margin-left:41.66667%}.column.is-6-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-mobile{margin-left:50%}.column.is-7-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-mobile{margin-left:58.33333%}.column.is-8-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-mobile{margin-left:66.66667%}.column.is-9-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-mobile{margin-left:75%}.column.is-10-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-mobile{margin-left:83.33333%}.column.is-11-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-mobile{margin-left:91.66667%}.column.is-12-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-mobile{margin-left:100%}}@media print,screen and (min-width:769px){.column.is-full,.column.is-full-tablet,.column.is-narrow,.column.is-narrow-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full,.column.is-full-tablet{width:100%}.column.is-three-quarters,.column.is-three-quarters-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds,.column.is-two-thirds-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half,.column.is-half-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third,.column.is-one-third-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter,.column.is-one-quarter-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth,.column.is-one-fifth-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths,.column.is-two-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths,.column.is-three-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths,.column.is-four-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters,.column.is-offset-three-quarters-tablet{margin-left:75%}.column.is-offset-two-thirds,.column.is-offset-two-thirds-tablet{margin-left:66.6666%}.column.is-offset-half,.column.is-offset-half-tablet{margin-left:50%}.column.is-offset-one-third,.column.is-offset-one-third-tablet{margin-left:33.3333%}.column.is-offset-one-quarter,.column.is-offset-one-quarter-tablet{margin-left:25%}.column.is-offset-one-fifth,.column.is-offset-one-fifth-tablet{margin-left:20%}.column.is-offset-two-fifths,.column.is-offset-two-fifths-tablet{margin-left:40%}.column.is-offset-three-fifths,.column.is-offset-three-fifths-tablet{margin-left:60%}.column.is-offset-four-fifths,.column.is-offset-four-fifths-tablet{margin-left:80%}.column.is-1,.column.is-1-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1,.column.is-offset-1-tablet{margin-left:8.33333%}.column.is-2,.column.is-2-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2,.column.is-offset-2-tablet{margin-left:16.66667%}.column.is-3,.column.is-3-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3,.column.is-offset-3-tablet{margin-left:25%}.column.is-4,.column.is-4-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4,.column.is-offset-4-tablet{margin-left:33.33333%}.column.is-5,.column.is-5-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5,.column.is-offset-5-tablet{margin-left:41.66667%}.column.is-6,.column.is-6-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6,.column.is-offset-6-tablet{margin-left:50%}.column.is-7,.column.is-7-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7,.column.is-offset-7-tablet{margin-left:58.33333%}.column.is-8,.column.is-8-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8,.column.is-offset-8-tablet{margin-left:66.66667%}.column.is-9,.column.is-9-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9,.column.is-offset-9-tablet{margin-left:75%}.column.is-10,.column.is-10-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10,.column.is-offset-10-tablet{margin-left:83.33333%}.column.is-11,.column.is-11-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11,.column.is-offset-11-tablet{margin-left:91.66667%}.column.is-12,.column.is-12-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12,.column.is-offset-12-tablet{margin-left:100%}}@media screen and (max-width:1023px){.column.is-full-touch,.column.is-narrow-touch{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-touch{width:100%}.column.is-three-quarters-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-touch{margin-left:75%}.column.is-offset-two-thirds-touch{margin-left:66.6666%}.column.is-offset-half-touch{margin-left:50%}.column.is-offset-one-third-touch{margin-left:33.3333%}.column.is-offset-one-quarter-touch{margin-left:25%}.column.is-offset-one-fifth-touch{margin-left:20%}.column.is-offset-two-fifths-touch{margin-left:40%}.column.is-offset-three-fifths-touch{margin-left:60%}.column.is-offset-four-fifths-touch{margin-left:80%}.column.is-1-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-touch{margin-left:8.33333%}.column.is-2-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-touch{margin-left:16.66667%}.column.is-3-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-touch{margin-left:25%}.column.is-4-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-touch{margin-left:33.33333%}.column.is-5-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-touch{margin-left:41.66667%}.column.is-6-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-touch{margin-left:50%}.column.is-7-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-touch{margin-left:58.33333%}.column.is-8-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-touch{margin-left:66.66667%}.column.is-9-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-touch{margin-left:75%}.column.is-10-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-touch{margin-left:83.33333%}.column.is-11-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-touch{margin-left:91.66667%}.column.is-12-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-touch{margin-left:100%}}@media screen and (min-width:1024px){.column.is-full-desktop,.column.is-narrow-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-desktop{width:100%}.column.is-three-quarters-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-desktop{margin-left:75%}.column.is-offset-two-thirds-desktop{margin-left:66.6666%}.column.is-offset-half-desktop{margin-left:50%}.column.is-offset-one-third-desktop{margin-left:33.3333%}.column.is-offset-one-quarter-desktop{margin-left:25%}.column.is-offset-one-fifth-desktop{margin-left:20%}.column.is-offset-two-fifths-desktop{margin-left:40%}.column.is-offset-three-fifths-desktop{margin-left:60%}.column.is-offset-four-fifths-desktop{margin-left:80%}.column.is-1-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-desktop{margin-left:8.33333%}.column.is-2-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-desktop{margin-left:16.66667%}.column.is-3-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-desktop{margin-left:25%}.column.is-4-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-desktop{margin-left:33.33333%}.column.is-5-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-desktop{margin-left:41.66667%}.column.is-6-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-desktop{margin-left:50%}.column.is-7-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-desktop{margin-left:58.33333%}.column.is-8-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-desktop{margin-left:66.66667%}.column.is-9-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-desktop{margin-left:75%}.column.is-10-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-desktop{margin-left:83.33333%}.column.is-11-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-desktop{margin-left:91.66667%}.column.is-12-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-desktop{margin-left:100%}}@media screen and (min-width:1216px){.column.is-full-widescreen,.column.is-narrow-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-widescreen{width:100%}.column.is-three-quarters-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-widescreen{margin-left:75%}.column.is-offset-two-thirds-widescreen{margin-left:66.6666%}.column.is-offset-half-widescreen{margin-left:50%}.column.is-offset-one-third-widescreen{margin-left:33.3333%}.column.is-offset-one-quarter-widescreen{margin-left:25%}.column.is-offset-one-fifth-widescreen{margin-left:20%}.column.is-offset-two-fifths-widescreen{margin-left:40%}.column.is-offset-three-fifths-widescreen{margin-left:60%}.column.is-offset-four-fifths-widescreen{margin-left:80%}.column.is-1-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-widescreen{margin-left:8.33333%}.column.is-2-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-widescreen{margin-left:16.66667%}.column.is-3-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-widescreen{margin-left:25%}.column.is-4-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-widescreen{margin-left:33.33333%}.column.is-5-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-widescreen{margin-left:41.66667%}.column.is-6-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-widescreen{margin-left:50%}.column.is-7-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-widescreen{margin-left:58.33333%}.column.is-8-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-widescreen{margin-left:66.66667%}.column.is-9-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-widescreen{margin-left:75%}.column.is-10-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-widescreen{margin-left:83.33333%}.column.is-11-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-widescreen{margin-left:91.66667%}.column.is-12-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-widescreen{margin-left:100%}}@media screen and (min-width:1408px){.column.is-full-fullhd,.column.is-narrow-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-fullhd{width:100%}.column.is-three-quarters-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-fullhd{margin-left:75%}.column.is-offset-two-thirds-fullhd{margin-left:66.6666%}.column.is-offset-half-fullhd{margin-left:50%}.column.is-offset-one-third-fullhd{margin-left:33.3333%}.column.is-offset-one-quarter-fullhd{margin-left:25%}.column.is-offset-one-fifth-fullhd{margin-left:20%}.column.is-offset-two-fifths-fullhd{margin-left:40%}.column.is-offset-three-fifths-fullhd{margin-left:60%}.column.is-offset-four-fifths-fullhd{margin-left:80%}.column.is-1-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-fullhd{margin-left:8.33333%}.column.is-2-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-fullhd{margin-left:16.66667%}.column.is-3-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-fullhd{margin-left:25%}.column.is-4-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-fullhd{margin-left:33.33333%}.column.is-5-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-fullhd{margin-left:41.66667%}.column.is-6-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-fullhd{margin-left:50%}.column.is-7-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-fullhd{margin-left:58.33333%}.column.is-8-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-fullhd{margin-left:66.66667%}.column.is-9-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-fullhd{margin-left:75%}.column.is-10-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-fullhd{margin-left:83.33333%}.column.is-11-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-fullhd{margin-left:91.66667%}.column.is-12-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-fullhd{margin-left:100%}}.columns{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.columns:last-child{margin-bottom:-.75rem}.columns:not(:last-child){margin-bottom:0.75rem}.columns.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.columns.is-gapless{margin-left:0;margin-right:0;margin-top:0}.columns.is-gapless>.column{margin:0;padding:0!important}.columns.is-gapless:not(:last-child){margin-bottom:1.5rem}.columns.is-gapless:last-child{margin-bottom:0}.columns.is-mobile{display:-webkit-box;display:-ms-flexbox;display:flex}.columns.is-multiline{-ms-flex-wrap:wrap;flex-wrap:wrap}.columns.is-vcentered{-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media print,screen and (min-width:769px){.columns:not(.is-desktop){display:-webkit-box;display:-ms-flexbox;display:flex}}@media screen and (min-width:1024px){.columns.is-desktop{display:-webkit-box;display:-ms-flexbox;display:flex}}.columns.is-variable{--columnGap:0.75rem;margin-left:calc(-1 * var(--columnGap));margin-right:calc(-1 * var(--columnGap))}.columns.is-variable .column{padding-left:var(--columnGap);padding-right:var(--columnGap)}.columns.is-variable.is-0{--columnGap:0rem}.columns.is-variable.is-1{--columnGap:0.25rem}.columns.is-variable.is-2{--columnGap:0.5rem}.columns.is-variable.is-3{--columnGap:0.75rem}.columns.is-variable.is-4{--columnGap:1rem}.columns.is-variable.is-5{--columnGap:1.25rem}.columns.is-variable.is-6{--columnGap:1.5rem}.columns.is-variable.is-7{--columnGap:1.75rem}.columns.is-variable.is-8{--columnGap:2rem}.tile{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:block;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content}.tile.is-ancestor{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.tile.is-ancestor:last-child{margin-bottom:-.75rem}.tile.is-ancestor:not(:last-child){margin-bottom:.75rem}.tile.is-child{margin:0!important}.tile.is-parent{padding:.75rem}.tile.is-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.tile.is-vertical>.tile.is-child:not(:last-child){margin-bottom:1.5rem!important}@media print,screen and (min-width:769px){.tile:not(.is-child){display:-webkit-box;display:-ms-flexbox;display:flex}.tile.is-1{width:8.33333%}.tile.is-1,.tile.is-2{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-2{width:16.66667%}.tile.is-3{width:25%}.tile.is-3,.tile.is-4{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-4{width:33.33333%}.tile.is-5{width:41.66667%}.tile.is-5,.tile.is-6{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-6{width:50%}.tile.is-7{width:58.33333%}.tile.is-7,.tile.is-8{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-8{width:66.66667%}.tile.is-9{width:75%}.tile.is-9,.tile.is-10{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-10{width:83.33333%}.tile.is-11{width:91.66667%}.tile.is-11,.tile.is-12{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-12{width:100%}}.hero{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.hero .navbar{background:none}.hero .tabs ul{border-bottom:none}.hero.is-white{background-color:#fff;color:#0a0a0a}.hero.is-white a:not(.button),.hero.is-white strong{color:inherit}.hero.is-white .title{color:#0a0a0a}.hero.is-white .subtitle{color:hsla(0,0%,4%,.9)}.hero.is-white .subtitle a:not(.button),.hero.is-white .subtitle strong{color:#0a0a0a}@media screen and (max-width:1023px){.hero.is-white .navbar-menu{background-color:#fff}}.hero.is-white .navbar-item,.hero.is-white .navbar-link{color:hsla(0,0%,4%,.7)}.hero.is-white .navbar-link.is-active,.hero.is-white .navbar-link:hover,.hero.is-white a.navbar-item.is-active,.hero.is-white a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.hero.is-white .tabs a{color:#0a0a0a;opacity:.9}.hero.is-white .tabs a:hover,.hero.is-white .tabs li.is-active a{opacity:1}.hero.is-white .tabs.is-boxed a,.hero.is-white .tabs.is-toggle a{color:#0a0a0a}.hero.is-white .tabs.is-boxed a:hover,.hero.is-white .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-white .tabs.is-boxed li.is-active a,.hero.is-white .tabs.is-boxed li.is-active a:hover,.hero.is-white .tabs.is-toggle li.is-active a,.hero.is-white .tabs.is-toggle li.is-active a:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.hero.is-white.is-bold{background-image:linear-gradient(141deg,#e6e6e6,#fff 71%,#fff)}@media screen and (max-width:768px){.hero.is-white.is-bold .navbar-menu{background-image:linear-gradient(141deg,#e6e6e6,#fff 71%,#fff)}}.hero.is-black{background-color:#0a0a0a;color:#fff}.hero.is-black a:not(.button),.hero.is-black strong{color:inherit}.hero.is-black .title{color:#fff}.hero.is-black .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-black .subtitle a:not(.button),.hero.is-black .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-black .navbar-menu{background-color:#0a0a0a}}.hero.is-black .navbar-item,.hero.is-black .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-black .navbar-link.is-active,.hero.is-black .navbar-link:hover,.hero.is-black a.navbar-item.is-active,.hero.is-black a.navbar-item:hover{background-color:#000;color:#fff}.hero.is-black .tabs a{color:#fff;opacity:.9}.hero.is-black .tabs a:hover,.hero.is-black .tabs li.is-active a{opacity:1}.hero.is-black .tabs.is-boxed a,.hero.is-black .tabs.is-toggle a{color:#fff}.hero.is-black .tabs.is-boxed a:hover,.hero.is-black .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-black .tabs.is-boxed li.is-active a,.hero.is-black .tabs.is-boxed li.is-active a:hover,.hero.is-black .tabs.is-toggle li.is-active a,.hero.is-black .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.hero.is-black.is-bold{background-image:linear-gradient(141deg,#000,#0a0a0a 71%,#181616)}@media screen and (max-width:768px){.hero.is-black.is-bold .navbar-menu{background-image:linear-gradient(141deg,#000,#0a0a0a 71%,#181616)}}.hero.is-light{background-color:#f5f5f5;color:#363636}.hero.is-light a:not(.button),.hero.is-light strong{color:inherit}.hero.is-light .title{color:#363636}.hero.is-light .subtitle{color:rgba(54,54,54,.9)}.hero.is-light .subtitle a:not(.button),.hero.is-light .subtitle strong{color:#363636}@media screen and (max-width:1023px){.hero.is-light .navbar-menu{background-color:#f5f5f5}}.hero.is-light .navbar-item,.hero.is-light .navbar-link{color:rgba(54,54,54,.7)}.hero.is-light .navbar-link.is-active,.hero.is-light .navbar-link:hover,.hero.is-light a.navbar-item.is-active,.hero.is-light a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.hero.is-light .tabs a{color:#363636;opacity:.9}.hero.is-light .tabs a:hover,.hero.is-light .tabs li.is-active a{opacity:1}.hero.is-light .tabs.is-boxed a,.hero.is-light .tabs.is-toggle a{color:#363636}.hero.is-light .tabs.is-boxed a:hover,.hero.is-light .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-light .tabs.is-boxed li.is-active a,.hero.is-light .tabs.is-boxed li.is-active a:hover,.hero.is-light .tabs.is-toggle li.is-active a,.hero.is-light .tabs.is-toggle li.is-active a:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}.hero.is-light.is-bold{background-image:linear-gradient(141deg,#dfd8d9,#f5f5f5 71%,#fff)}@media screen and (max-width:768px){.hero.is-light.is-bold .navbar-menu{background-image:linear-gradient(141deg,#dfd8d9,#f5f5f5 71%,#fff)}}.hero.is-dark{background-color:#363636;color:#f5f5f5}.hero.is-dark a:not(.button),.hero.is-dark strong{color:inherit}.hero.is-dark .title{color:#f5f5f5}.hero.is-dark .subtitle{color:hsla(0,0%,96%,.9)}.hero.is-dark .subtitle a:not(.button),.hero.is-dark .subtitle strong{color:#f5f5f5}@media screen and (max-width:1023px){.hero.is-dark .navbar-menu{background-color:#363636}}.hero.is-dark .navbar-item,.hero.is-dark .navbar-link{color:hsla(0,0%,96%,.7)}.hero.is-dark .navbar-link.is-active,.hero.is-dark .navbar-link:hover,.hero.is-dark a.navbar-item.is-active,.hero.is-dark a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.hero.is-dark .tabs a{color:#f5f5f5;opacity:.9}.hero.is-dark .tabs a:hover,.hero.is-dark .tabs li.is-active a{opacity:1}.hero.is-dark .tabs.is-boxed a,.hero.is-dark .tabs.is-toggle a{color:#f5f5f5}.hero.is-dark .tabs.is-boxed a:hover,.hero.is-dark .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-dark .tabs.is-boxed li.is-active a,.hero.is-dark .tabs.is-boxed li.is-active a:hover,.hero.is-dark .tabs.is-toggle li.is-active a,.hero.is-dark .tabs.is-toggle li.is-active a:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.hero.is-dark.is-bold{background-image:linear-gradient(141deg,#1f191a,#363636 71%,#46403f)}@media screen and (max-width:768px){.hero.is-dark.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1f191a,#363636 71%,#46403f)}}.hero.is-primary{background-color:#00d1b2;color:#fff}.hero.is-primary a:not(.button),.hero.is-primary strong{color:inherit}.hero.is-primary .title{color:#fff}.hero.is-primary .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-primary .subtitle a:not(.button),.hero.is-primary .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-primary .navbar-menu{background-color:#00d1b2}}.hero.is-primary .navbar-item,.hero.is-primary .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-primary .navbar-link.is-active,.hero.is-primary .navbar-link:hover,.hero.is-primary a.navbar-item.is-active,.hero.is-primary a.navbar-item:hover{background-color:#00b89c;color:#fff}.hero.is-primary .tabs a{color:#fff;opacity:.9}.hero.is-primary .tabs a:hover,.hero.is-primary .tabs li.is-active a{opacity:1}.hero.is-primary .tabs.is-boxed a,.hero.is-primary .tabs.is-toggle a{color:#fff}.hero.is-primary .tabs.is-boxed a:hover,.hero.is-primary .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-primary .tabs.is-boxed li.is-active a,.hero.is-primary .tabs.is-boxed li.is-active a:hover,.hero.is-primary .tabs.is-toggle li.is-active a,.hero.is-primary .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#00d1b2}.hero.is-primary.is-bold{background-image:linear-gradient(141deg,#009e6c,#00d1b2 71%,#00e7eb)}@media screen and (max-width:768px){.hero.is-primary.is-bold .navbar-menu{background-image:linear-gradient(141deg,#009e6c,#00d1b2 71%,#00e7eb)}}.hero.is-link{background-color:#3273dc;color:#fff}.hero.is-link a:not(.button),.hero.is-link strong{color:inherit}.hero.is-link .title{color:#fff}.hero.is-link .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-link .subtitle a:not(.button),.hero.is-link .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-link .navbar-menu{background-color:#3273dc}}.hero.is-link .navbar-item,.hero.is-link .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-link .navbar-link.is-active,.hero.is-link .navbar-link:hover,.hero.is-link a.navbar-item.is-active,.hero.is-link a.navbar-item:hover{background-color:#2366d1;color:#fff}.hero.is-link .tabs a{color:#fff;opacity:.9}.hero.is-link .tabs a:hover,.hero.is-link .tabs li.is-active a{opacity:1}.hero.is-link .tabs.is-boxed a,.hero.is-link .tabs.is-toggle a{color:#fff}.hero.is-link .tabs.is-boxed a:hover,.hero.is-link .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-link .tabs.is-boxed li.is-active a,.hero.is-link .tabs.is-boxed li.is-active a:hover,.hero.is-link .tabs.is-toggle li.is-active a,.hero.is-link .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#3273dc}.hero.is-link.is-bold{background-image:linear-gradient(141deg,#1577c6,#3273dc 71%,#4366e5)}@media screen and (max-width:768px){.hero.is-link.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1577c6,#3273dc 71%,#4366e5)}}.hero.is-info{background-color:#209cee;color:#fff}.hero.is-info a:not(.button),.hero.is-info strong{color:inherit}.hero.is-info .title{color:#fff}.hero.is-info .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-info .subtitle a:not(.button),.hero.is-info .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-info .navbar-menu{background-color:#209cee}}.hero.is-info .navbar-item,.hero.is-info .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-info .navbar-link.is-active,.hero.is-info .navbar-link:hover,.hero.is-info a.navbar-item.is-active,.hero.is-info a.navbar-item:hover{background-color:#118fe4;color:#fff}.hero.is-info .tabs a{color:#fff;opacity:.9}.hero.is-info .tabs a:hover,.hero.is-info .tabs li.is-active a{opacity:1}.hero.is-info .tabs.is-boxed a,.hero.is-info .tabs.is-toggle a{color:#fff}.hero.is-info .tabs.is-boxed a:hover,.hero.is-info .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-info .tabs.is-boxed li.is-active a,.hero.is-info .tabs.is-boxed li.is-active a:hover,.hero.is-info .tabs.is-toggle li.is-active a,.hero.is-info .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#209cee}.hero.is-info.is-bold{background-image:linear-gradient(141deg,#04a6d7,#209cee 71%,#3287f5)}@media screen and (max-width:768px){.hero.is-info.is-bold .navbar-menu{background-image:linear-gradient(141deg,#04a6d7,#209cee 71%,#3287f5)}}.hero.is-success{background-color:#23d160;color:#fff}.hero.is-success a:not(.button),.hero.is-success strong{color:inherit}.hero.is-success .title{color:#fff}.hero.is-success .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-success .subtitle a:not(.button),.hero.is-success .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-success .navbar-menu{background-color:#23d160}}.hero.is-success .navbar-item,.hero.is-success .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-success .navbar-link.is-active,.hero.is-success .navbar-link:hover,.hero.is-success a.navbar-item.is-active,.hero.is-success a.navbar-item:hover{background-color:#20bc56;color:#fff}.hero.is-success .tabs a{color:#fff;opacity:.9}.hero.is-success .tabs a:hover,.hero.is-success .tabs li.is-active a{opacity:1}.hero.is-success .tabs.is-boxed a,.hero.is-success .tabs.is-toggle a{color:#fff}.hero.is-success .tabs.is-boxed a:hover,.hero.is-success .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-success .tabs.is-boxed li.is-active a,.hero.is-success .tabs.is-boxed li.is-active a:hover,.hero.is-success .tabs.is-toggle li.is-active a,.hero.is-success .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#23d160}.hero.is-success.is-bold{background-image:linear-gradient(141deg,#12af2f,#23d160 71%,#2ce28a)}@media screen and (max-width:768px){.hero.is-success.is-bold .navbar-menu{background-image:linear-gradient(141deg,#12af2f,#23d160 71%,#2ce28a)}}.hero.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.hero.is-warning a:not(.button),.hero.is-warning strong{color:inherit}.hero.is-warning .title{color:rgba(0,0,0,.7)}.hero.is-warning .subtitle{color:rgba(0,0,0,.9)}.hero.is-warning .subtitle a:not(.button),.hero.is-warning .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width:1023px){.hero.is-warning .navbar-menu{background-color:#ffdd57}}.hero.is-warning .navbar-item,.hero.is-warning .navbar-link{color:rgba(0,0,0,.7)}.hero.is-warning .navbar-link.is-active,.hero.is-warning .navbar-link:hover,.hero.is-warning a.navbar-item.is-active,.hero.is-warning a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.hero.is-warning .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-warning .tabs a:hover,.hero.is-warning .tabs li.is-active a{opacity:1}.hero.is-warning .tabs.is-boxed a,.hero.is-warning .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-warning .tabs.is-boxed a:hover,.hero.is-warning .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-warning .tabs.is-boxed li.is-active a,.hero.is-warning .tabs.is-boxed li.is-active a:hover,.hero.is-warning .tabs.is-toggle li.is-active a,.hero.is-warning .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#ffdd57}.hero.is-warning.is-bold{background-image:linear-gradient(141deg,#ffaf24,#ffdd57 71%,#fffa70)}@media screen and (max-width:768px){.hero.is-warning.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ffaf24,#ffdd57 71%,#fffa70)}}.hero.is-danger{background-color:#ff3860;color:#fff}.hero.is-danger a:not(.button),.hero.is-danger strong{color:inherit}.hero.is-danger .title{color:#fff}.hero.is-danger .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-danger .subtitle a:not(.button),.hero.is-danger .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-danger .navbar-menu{background-color:#ff3860}}.hero.is-danger .navbar-item,.hero.is-danger .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-danger .navbar-link.is-active,.hero.is-danger .navbar-link:hover,.hero.is-danger a.navbar-item.is-active,.hero.is-danger a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.hero.is-danger .tabs a{color:#fff;opacity:.9}.hero.is-danger .tabs a:hover,.hero.is-danger .tabs li.is-active a{opacity:1}.hero.is-danger .tabs.is-boxed a,.hero.is-danger .tabs.is-toggle a{color:#fff}.hero.is-danger .tabs.is-boxed a:hover,.hero.is-danger .tabs.is-toggle a:hover{background-color:hsla(0,0%,4%,.1)}.hero.is-danger .tabs.is-boxed li.is-active a,.hero.is-danger .tabs.is-boxed li.is-active a:hover,.hero.is-danger .tabs.is-toggle li.is-active a,.hero.is-danger .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#ff3860}.hero.is-danger.is-bold{background-image:linear-gradient(141deg,#ff0561,#ff3860 71%,#ff5257)}@media screen and (max-width:768px){.hero.is-danger.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ff0561,#ff3860 71%,#ff5257)}}.hero.is-small .hero-body{padding-bottom:1.5rem;padding-top:1.5rem}@media print,screen and (min-width:769px){.hero.is-medium .hero-body{padding-bottom:9rem;padding-top:9rem}}@media print,screen and (min-width:769px){.hero.is-large .hero-body{padding-bottom:18rem;padding-top:18rem}}.hero.is-fullheight .hero-body,.hero.is-halfheight .hero-body{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.hero.is-fullheight .hero-body>.container,.hero.is-halfheight .hero-body>.container{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.hero.is-halfheight{min-height:50vh}.hero.is-fullheight{min-height:100vh}.hero-video{bottom:0;left:0;position:absolute;right:0;top:0;overflow:hidden}.hero-video video{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.hero-video.is-transparent{opacity:.3}@media screen and (max-width:768px){.hero-video{display:none}}.hero-buttons{margin-top:1.5rem}@media screen and (max-width:768px){.hero-buttons .button{display:-webkit-box;display:-ms-flexbox;display:flex}.hero-buttons .button:not(:last-child){margin-bottom:.75rem}}@media print,screen and (min-width:769px){.hero-buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.hero-buttons .button:not(:last-child){margin-right:1.5rem}}.hero-foot,.hero-head{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}.hero-body,.hero-foot,.hero-head{-ms-flex-negative:0;flex-shrink:0}.hero-body{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.hero-body,.section{padding:3rem 1.5rem}@media screen and (min-width:1024px){.section.is-medium{padding:9rem 1.5rem}.section.is-large{padding:18rem 1.5rem}}.footer{background-color:#f5f5f5;padding:3rem 1.5rem 6rem}", ""]);

// exports


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
var update = __webpack_require__(27)(content, options);
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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports
exports.i(__webpack_require__(96), "");
exports.i(__webpack_require__(97), "");

// module
exports.push([module.i, "input{outline:none!important;border-radius:0!important}html{width:100%;height:100%;overflow-y:auto}body{min-height:100%}a[href^=\"tel:\"]{color:inherit;text-decoration:none}*{-webkit-text-size-adjust:none}.mytainer{max-width:960px;width:960px;margin:auto}body{font:12px/18px Arial,Helvetica,sans-serif;color:#767171;position:relative;min-width:960px;background-size:contain}.ic{border:0;float:right;background:#fff;color:red;width:50%;line-height:10px;font-size:10px;margin:-220% 0 0;overflow:hidden;padding:0}h1,h2,h3,h4,h5,h6{font-weight:400;font-family:Oswald,sans-serif;color:#000}h3{font-size:30px;line-height:24px;top:-3px;margin-bottom:23px}h3,h4{position:relative}h4{font-size:18px;line-height:18px;margin-top:-4px;margin-bottom:14px}p{margin-bottom:18px}img{max-width:100%}address{font-style:normal}ul{padding:0;margin:0;list-style:none}ul.list{overflow:hidden}ul.list li{padding-left:11px}ul.list li+li{margin-top:9px}a{text-decoration:none;color:inherit;outline:none;transition:.5s ease;-o-transition:.5s ease;-webkit-transition:.5s ease}a:hover{color:#14fa46}a.btn{display:inline-block;font:18px/18px Oswald,sans-serif;color:#ac2135;padding-right:15px;margin-right:-49px;margin-top:30px}a.btn:hover{color:#000}.mb0{margin-bottom:0!important}.m0{margin:0!important}.mb1{margin-bottom:25px!important}.ind1{margin-top:11px}.pad0{padding:0!important}.pt0{padding-top:0}.img_inner{max-width:100%;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box;margin-bottom:28px;position:relative}.fleft{float:left;margin-right:20px;margin-top:0;margin-bottom:0;border:1px solid #af293c}.fright{float:right!important}.upp{text-transform:uppercase}.alright{text-align:right}.center{text-align:center}.extra_wrapper,.wrapper{overflow:hidden}.clear{float:none!important;clear:both}header{display:block;position:relative;z-index:999;margin-bottom:60px}header a:hover{color:#000}.page1 h1{position:absolute;right:50%;margin-right:-470px}h1{float:right;z-index:999}h1 a{overflow:hidden;width:164px;height:151px;text-indent:-999px;transition:0s ease;-o-transition:0s ease;-webkit-transition:0s ease}h1 a,h1 a img{display:block}#search{float:right;width:81px;position:relative;overflow:hidden;margin-top:19px}#search input{background-color:#691828;border:none;float:none;height:25px;padding:4px 36px 3px 10px;color:#fff;font:12px/18px Arial,Helvetica,sans-serif;width:100%;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box}#search a{width:40px;height:25px;display:block;position:absolute;right:0;top:0;cursor:pointer}#search a:hover{opacity:.5}.socials{text-align:center;float:right;padding-top:18px;overflow:hidden;padding-right:25px}.socials a{display:block;float:left;width:28px;height:28px}.socials a+a{margin-left:7px;background-position:-35px 0}.socials a+a+a{background-position:-71px 0}.socials a+a+a+a{background-position:right 0}.socials a:hover{opacity:.7}#form+.style1{margin-right:-10px}.content{padding:32px 80px 30px;margin-bottom:223px}.page1 .content{padding-left:32px;padding-right:32px;margin-bottom:0}.page1 .content h3{padding-top:1px;padding-bottom:0;margin-bottom:27px}.page1 .content a.btn{margin-right:0;margin-top:24px}.page1 .content ul span{color:#000;font-weight:600}.page1 .content ul{padding-top:5px}.page1 .content ul li{font-size:16px}.page1 .content ul li+li{margin-top:14px}.page1 .content ul li+li+li+li{margin-top:18px}.page1 .content img{margin-left:16px;float:right}.page1 .content p,.style1{color:#000}.page1 .content p a,.style1 a{color:#ff4a4a}.page1 .content p a:hover,.style1 a:hover{color:#000}.block1 h3{margin-bottom:6px}.block1+.block1{margin-top:51px}.cl1{height:18px}ul.list2{font-size:16px;padding-top:20px}ul.list2 span{color:#000}ul.list2 li{padding-left:11px}ul.list2 li+li{margin-top:10px}h3.head1{position:relative;top:-8px}.block2 .extra_wrapper{padding-top:7px;margin-top:-5px}.block2 a.btn{margin-top:0;margin-left:7px;font-family:Arial,Helvetica,sans-serif;font-size:13px;background-position:right 3px}.block2+.block2{margin-top:26px}.cl2{height:9px}.block2 .fleft{margin-top:6px}.block2 h4{margin-bottom:8px}ul.list3 time{display:block;background-color:#ac2135;width:34px;margin-right:8px;float:left;color:#fff;margin-top:-1px;padding-top:2px;height:36px;text-align:center;font:24px/18px Oswald,sans-serif}ul.list3 h4{margin-bottom:8px}ul.list3 time span{margin-top:-2px;display:block;font-size:14px}ul.list3 li{padding-top:2px}ul.list3 li+li{margin-top:24px}ul.list3 li+li+li{margin-top:25px}.map{padding-top:5px}.map .text1{font-family:Arial,Helvetica,sans-serif;font-size:16px;padding-bottom:19px}.map figure{width:100%;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;-o-box-sizing:border-box;box-sizing:border-box;display:block;margin-bottom:26px;border:1px solid #af293c}.map figure iframe{width:100%;height:255px;max-width:100%}.map address{padding-top:10px;overflow:hidden;line-height:20px}address dt{color:#000}address dd span{min-width:85px;display:inline-block;text-align:left}footer{color:#fff;display:block;padding:21px 0;border-top:3px solid #ff4a4a;position:absolute;right:0;bottom:0;left:0;padding:1rem;text-align:center}", ""]);

// exports


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, "body{min-width:960px}.container_12{margin-left:auto;margin-right:auto;width:960px}.grid_1,.grid_2,.grid_3,.grid_4,.grid_5,.grid_6,.grid_7,.grid_8,.grid_9,.grid_10,.grid_11,.grid_12{display:inline;float:left;margin-left:10px;margin-right:10px}.pull_1,.pull_2,.pull_3,.pull_4,.pull_5,.pull_6,.pull_7,.pull_8,.pull_9,.pull_10,.pull_11,.push_1,.push_2,.push_3,.push_4,.push_5,.push_6,.push_7,.push_8,.push_9,.push_10,.push_11{position:relative}.alpha{margin-left:0}.omega{margin-right:0}.container_12 .grid_1{width:60px}.container_12 .grid_2{width:140px}.container_12 .grid_3{width:220px}.container_12 .grid_4{width:300px}.container_12 .grid_5{width:380px}.container_12 .grid_6{width:460px}.container_12 .grid_7{width:540px}.container_12 .grid_8{width:620px}.container_12 .grid_9{width:700px}.container_12 .grid_10{width:780px}.container_12 .grid_11{width:860px}.container_12 .grid_12{width:940px}.container_12 .prefix_1{padding-left:80px}.container_12 .prefix_2{padding-left:160px}.container_12 .prefix_3{padding-left:240px}.container_12 .prefix_4{padding-left:320px}.container_12 .prefix_5{padding-left:400px}.container_12 .prefix_6{padding-left:480px}.container_12 .prefix_7{padding-left:560px}.container_12 .prefix_8{padding-left:640px}.container_12 .prefix_9{padding-left:720px}.container_12 .prefix_10{padding-left:800px}.container_12 .prefix_11{padding-left:880px}.container_12 .suffix_1{padding-right:80px}.container_12 .suffix_2{padding-right:160px}.container_12 .suffix_3{padding-right:240px}.container_12 .suffix_4{padding-right:320px}.container_12 .suffix_5{padding-right:400px}.container_12 .suffix_6{padding-right:480px}.container_12 .suffix_7{padding-right:560px}.container_12 .suffix_8{padding-right:640px}.container_12 .suffix_9{padding-right:720px}.container_12 .suffix_10{padding-right:800px}.container_12 .suffix_11{padding-right:880px}.container_12 .push_1{left:80px}.container_12 .push_2{left:160px}.container_12 .push_3{left:240px}.container_12 .push_4{left:320px}.container_12 .push_5{left:400px}.container_12 .push_6{left:480px}.container_12 .push_7{left:560px}.container_12 .push_8{left:640px}.container_12 .push_9{left:720px}.container_12 .push_10{left:800px}.container_12 .push_11{left:880px}.container_12 .pull_1{left:-80px}.container_12 .pull_2{left:-160px}.container_12 .pull_3{left:-240px}.container_12 .pull_4{left:-320px}.container_12 .pull_5{left:-400px}.container_12 .pull_6{left:-480px}.container_12 .pull_7{left:-560px}.container_12 .pull_8{left:-640px}.container_12 .pull_9{left:-720px}.container_12 .pull_10{left:-800px}.container_12 .pull_11{left:-880px}.clear{clear:both;display:block;overflow:hidden;visibility:hidden;width:0;height:0}.clearfix:after,.clearfix:before,.container_12:after,.container_12:before{content:\".\";display:block;overflow:hidden;visibility:hidden;font-size:0;line-height:0;width:0;height:0}.clearfix:after,.container_12:after{clear:both}.clearfix,.container_12{zoom:1}", ""]);

// exports


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".menu_block{position:relative;z-index:999}nav{position:relative;padding:0}.sf-menu ul{position:absolute;top:-999px;display:none}.sf-menu>li,.sf-menu li{float:left;position:relative}.sf-menu>li>a{font-size:20px;font-family:Oswald,sans-serif;color:#fff;display:block;line-height:24px;z-index:999;position:relative;padding:19px 14px 20px}.sf-menu>li.current>a,.sf-menu>li.sfHover>a,.sf-menu>li:hover>a:hover{background-position:0 0;color:#fff;background-color:#752935}.sf-menu li.sfHover>ul,.sf-menu li ul{top:-28px;left:114px;width:141px;z-index:999;padding-top:28px;padding-bottom:23px;background-color:#fff}.sf-menu li ul li{padding-left:18px;float:none!important;margin-bottom:3px}.sf-menu li ul li a{text-transform:uppercase;font:16px/16px Dosis,sans-serif;position:relative;color:#000}.sf-menu li.sfHover li.sfHover>a,.sf-menu li li a:hover{color:#ec0606}", ""]);

// exports


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewModelExisted; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__viewengine_interfaces_IViewEngine__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routing_concrete_decorators__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abstract_ViewModel__ = __webpack_require__(6);
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
/* 99 */,
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_geranium_viewmodels_concrete_ViewModelFile__ = __webpack_require__(101);

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
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__abstract_ViewModel__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__runtime_concrete_App__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__backend_interfaces_IRequest__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewDOM_abstract_ViewDOM__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__extensions_HtmlElementExtensions__ = __webpack_require__(7);
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
                    __WEBPACK_IMPORTED_MODULE_1__runtime_concrete_App__["a" /* default */].register(TemplateCache, new TemplateCache());
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
            value: this.html
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWYxYWZhM2M0MTA5YTA0NTI4ZmQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3J1bnRpbWUvY29uY3JldGUvQXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZGVjbGFyZS9hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9pbnRlcmZhY2VzL0lWaWV3RW5naW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2NvbmNyZXRlL2RlY29yYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvaW50ZXJmYWNlcy9JQmluZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld21vZGVscy9hYnN0cmFjdC9WaWV3TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4dGVuc2lvbnMvSHRtbEVsZW1lbnRFeHRlbnNpb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmFja2VuZC9pbnRlcmZhY2VzL0lDb21tdW5pY2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvRXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9oaXN0b3J5L2ludGVyZmFjZXMvSUhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvaW50ZXJmYWNlcy9JUm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2xvZ2dpbmcvaW50ZXJmYWNlcy9JTG9nZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3YmluZGluZy9pbnRlcmZhY2VzL0lWaWV3QmluZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3L2Fic3RyYWN0L1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdlbmdpbmUvaW50ZXJmYWNlcy9JVmlld1B1Ymxpc2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXhjZXB0aW9ucy9iYWNrZW5kL0NvbW11bmljYXRpb25FeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JlaGF2aW9ycy9ldmVudHMvYWJzdHJhY3QvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0YXRlcy9pbnRlcmZhY2VzL0lTdGF0ZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3RlbXBsYXRpbmcvaW50ZXJmYWNlcy9JVGVtcGxhdGVFbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZhbGlkYXRpbmcvcmVwb3J0ZXIvaW50ZXJmYWNlcy9JVmFsaWRhdGF0aW5nUmVwb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JlZmxlY3Rpb24vUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvYmFzZS9CYXNlQnlBdHRyaWJ1dGVCaW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2Fic3RyYWN0L0JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0cnVjdHVyZXMvUHJvbWlzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvaW50ZXJmYWNlcy9JUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvY29udHJhY3RzL1JvdXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9jb2hlcmVuY2UvY29uY3JldGUvSW5NZW1vcnlDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2hpc3RvcnkvY29udHJhY3RzL0hpc3RvcnlJdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9zdG9yYWdlL2ludGVyZmFjZXMvSVN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvYmFzZS9CYXNlQmluZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2JpbmRpbmcvY29udHJhY3RzL0JpbmRDb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3RE9NL2Fic3RyYWN0L1ZpZXdET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnlCdXR0b24vY2F0ZWdvcnlCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb250cmFjdHMvUm91dGVDb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iYWNrZW5kL2NvbmNyZXRlL2FqYXgvQWpheENvbW11bmljYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXhjZXB0aW9ucy9ydW50aW1lL0luc3RhbnRpYXRlZEV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vaGlzdG9yeS9jb25jcmV0ZS9IdG1sNUhpc3RvcnlBUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvbG9nZ2luZy9jb25jcmV0ZS9Db25zb2xlTG9nZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iYWNrZW5kL2NvbmNyZXRlL2FqYXgvQWpheFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvYWJzdHJhY3QvU3RhdGVmdWxsUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmFja2VuZC9hYnN0cmFjdC9FdmVudFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvYWJzdHJhY3QvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9jb25jcmV0ZS9CYXNpY1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9hYnN0cmFjdC9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvY29udHJhY3RzL1JvdXRlTWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0b3JhZ2UvY29uY3JldGUvTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9zdG9yYWdlL2Fic3RyYWN0L0Jhc2VTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS90ZW1wbGF0aW5nL2NvbmNyZXRlL211c3RhY2hlL0NsaWVudFRlbXBsYXRlRW5naW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92YWxpZGF0aW5nL3JlcG9ydGVyL2NvbmNyZXRlL05vdGlmeVZhbGlkYXRpbmdSZXBvcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2JpbmRpbmcvY29uY3JldGUvQmFzZVZpZXdCaW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdiaW5kaW5nL2Fic3RyYWN0L1ZpZXdCaW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvQmFzZUZpZWxkQmluZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9jb25jcmV0ZS9FdmVudEJpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvQmFzZUlucHV0QmluZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9jb25jcmV0ZS9CYXNlQ29sbGVjdGlvbkJpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3RlbXBsYXRpbmcvY29udHJhY3RzL1RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9kZWNsYXJlL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9jb25jcmV0ZS9CYXNlVmlld0VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9jb250cmFjdHMvRXhlY3V0ZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdlbmdpbmUvY29uY3JldGUvQmFzZVZpZXdQdWJsaXNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvUHJvcGVydHlCaW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yZWZsZWN0aW9uL0NsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3L2ludGVyZmFjZXMvSVZpZXdhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3bW9kZWxzL2Fic3RyYWN0L1ZpZXdTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vc3RhdGVzL1N0YXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9tb2RlbHMvTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JlZmxlY3Rpb24vY2xvbmluZy9kZWNvcmF0b3JzL0lDbG9uZWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JlZmxlY3Rpb24vY2xvbmluZy9pbnRlcmZhY2VzL0lDbG9uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2hpc3RvcnkvZGVjb3JhdG9ycy9oaXN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3RE9NL2ludGVyZmFjZXMvSVZpZXdET00uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnlCdXR0b24vY2F0ZWdvcnlCdXR0b25WaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc29jaWFsc1BhbmVsL3NvY2lhbHNQYW5lbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzUGFuZWwvc29jaWFsc1BhbmVsVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzUGFuZWwvc29jaWFsQnV0dG9uL3NvY2lhbEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzUGFuZWwvc29jaWFsQnV0dG9uL3NvY2lhbEJ1dHRvblZpZXcuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9iaW5kZXJzL011c3RhY2hlQmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbXVzdGFjaGUvbXVzdGFjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2J1bG1hLWNhcm91c2VsL2Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9idWxtYS1jYXJvdXNlbC9idWxtYS1jYXJvdXNlbC5jc3M/NWFlMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnVsbWEtY2Fyb3VzZWwvYnVsbWEtY2Fyb3VzZWwuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2J1bG1hL2Nzcy9idWxtYS5jc3M/NzVmNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYnVsbWEvY3NzL2J1bG1hLmNzcyIsIndlYnBhY2s6Ly8vLi9jc3Mvc3R5bGUuY3NzPzU2OTMiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jc3MvZ3JpZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N1cGVyZmlzaC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvY29uY3JldGUvVmlld01vZGVsRXhpc3RlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3bW9kZWxzL2NvbmNyZXRlL1ZpZXdNb2RlbEZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RDRCO0FBQ0Q7QUFDSztBQUNOO0FBQ0Y7QUFDRjtBQUNBO0FBQ0U7QUFDRDtBQUNRO0FBQ0k7QUFDVjtBQUNFO0FBQ0o7QUFDSTtBQUNLO0FBQ1I7QUFDTDtBQUNEO0FBQ0M7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdXQTtBQUNBO0FBQUE7QUFBQTtBQUNBLGlDOzs7Ozs7OztBQ0ZzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLG1DOzs7Ozs7Ozs7OztBQ25DaUI7QUFDSztBQUNIO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLHVDOzs7Ozs7Ozs7Ozs7QUNsQ2tCO0FBQ0c7QUFDckI7QUFDaUI7QUFDSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtDOzs7Ozs7OztBQzVDZ0I7QUFDaEI7QUFDQTtBQUFBO0FBQUE7QUFDQSxzQzs7Ozs7Ozs7QUNIc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSx3Qzs7Ozs7Ozs7O0FDVG1CO0FBQ0c7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsdUM7Ozs7Ozs7O0FDdkMwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLGdEOzs7Ozs7O0FDTkE7QUFBQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUFBO0FBQUE7QUFDQSxvRDs7Ozs7OztBQ2xCQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQUE7QUFBQTtBQUNBLDBDOzs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNzQjtBQUNIO0FBQ1c7QUFDUjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJIQUE2RCxZQUFZLEVBQUU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQUE7QUFBQTtBQUNBLHNDOzs7Ozs7OztBQ25EQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNpQztBQUNkO0FBQ25CO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQUE7QUFBQTtBQUNBLDRDOzs7Ozs7OztBQzNCQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNrQjtBQUNpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDZEQUE2RCxFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDOzs7Ozs7OztBQ25LQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNzQjtBQUNIO0FBQ25CO0FBQ0EscUJBQXFCLGdCQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLDZEQUE2RCxFQUFFO0FBQy9EO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsNEM7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNpQztBQUNkO0FBQ0c7QUFDQTtBQUNBO0FBQ0M7QUFDdkI7QUFDQSxxQkFBcUIsd0JBQXdCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBOQUF3RyxpQkFBaUI7QUFDekg7QUFDQSwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQUE7QUFBQTtBQUNBLGlEOzs7Ozs7O0FDN0NBO0FBQ0E7QUFBQTtBQUFBO0FBQ0Esb0M7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLGtDOzs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDc0I7QUFDRztBQUNIO0FBQ0E7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQUE7QUFBQTtBQUNBLDBDOzs7Ozs7Ozs7QUN2Qm1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsMEM7Ozs7Ozs7O0FDWkE7QUFBQTtBQUNBO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLGlFQUFpRSx1QkFBdUIsRUFBRSw0QkFBNEI7QUFDcko7QUFDQSxLQUFLO0FBQ0w7QUFDeUI7QUFDUDtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUFBO0FBQUE7QUFDQSw2Qzs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNrQjtBQUNGO0FBQ007QUFDQTtBQUNBO0FBQ3RCO0FBQ29CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsNkRBQTZELEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IseUJBQXlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDRGQUE0Rix1REFBdUQsRUFBRTtBQUNySixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOEJBQThCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsMkM7Ozs7Ozs7QUN2SEE7QUFDQTtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsc0JBQXNCO0FBQ3BDO0FBQ0EsMkJBQTJCLDhCQUE4QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLGlDOzs7Ozs7OztBQ2pEa0M7QUFDbEM7QUFDQSxZQUFZLDRJQUFxRDtBQUNqRTtBQUFBO0FBQUE7QUFDQSxxQzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ2dCO0FBQ007QUFDQTtBQUN0QjtBQUN5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsY0FBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNSLHFDOzs7Ozs7Ozs7Ozs7QUNuREE7QUFBQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ3NCO0FBQ047QUFDUTtBQUNMO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ1IsaUM7Ozs7Ozs7Ozs7O0FDaEVBO0FBQUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDtBQUNzQjtBQUNEO0FBQ0w7QUFDRztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNRO0FBQ1IsaUM7Ozs7Ozs7Ozs7QUNwREE7QUFDa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDOzs7Ozs7OztBQ1BrQztBQUNsQztBQUNBLG1CQUFtQiwySUFBb0Q7QUFDdkU7QUFBQTtBQUFBO0FBQ0EsbUM7Ozs7Ozs7Ozs7QUNKQTtBQUNrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUM7Ozs7Ozs7O0FDVGtDO0FBQ2xDO0FBQ0EsV0FBVyxpSkFBMEQ7QUFDckU7QUFBQTtBQUFBO0FBQ0Esb0M7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsOEM7Ozs7Ozs7Ozs7QUNQMkI7QUFDTjtBQUNFO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxrQzs7Ozs7OztBQ1pBO0FBQUE7QUFDQTtBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixpRUFBaUUsdUJBQXVCLEVBQUUsNEJBQTRCO0FBQ3JKO0FBQ0EsS0FBSztBQUNMO0FBQ2tCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFBQTtBQUFBO0FBQ0Esc0M7Ozs7Ozs7Ozs7QUNoQm9CO0FBQ087QUFDSjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBLHdDOzs7Ozs7OztBQ2pCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsNEM7Ozs7Ozs7OztBQ05vQjtBQUNPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQSx3Qzs7Ozs7Ozs7QUNYZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsNEM7Ozs7OztBQ05BOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ3pMRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7OztBQ3BCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FB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QTtBQUNBLDhDQUE4QyxlQUFlO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLGVBQWU7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixNQUFNOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7OztBQ3JuQkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtB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QUFDbUI7QUFDRDtBQUNJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyw0Q0FBNEM7QUFDeEYsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWYxYWZhM2M0MTA5YTA0NTI4ZmQiLCJpbXBvcnQgeyBJbk1lbW9yeUNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9jb2hlcmVuY2UvY29uY3JldGUvSW5NZW1vcnlDb250YWluZXJcIjtcclxuaW1wb3J0IHsgQWpheENvbW11bmljYXRvciB9IGZyb20gXCIuLi8uLi9iYWNrZW5kL2NvbmNyZXRlL2FqYXgvQWpheENvbW11bmljYXRvclwiO1xyXG5pbXBvcnQgeyBJbnN0YW50aWF0ZWRFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9ydW50aW1lL0luc3RhbnRpYXRlZEV4Y2VwdGlvblwiO1xyXG5pbXBvcnQgeyBIdG1sNUhpc3RvcnlBUEkgfSBmcm9tIFwiLi4vLi4vaGlzdG9yeS9jb25jcmV0ZS9IdG1sNUhpc3RvcnlBUElcIjtcclxuaW1wb3J0IHsgQ29uc29sZUxvZ2dlciB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2xvZ2dpbmcvY29uY3JldGUvQ29uc29sZUxvZ2dlclwiO1xyXG5pbXBvcnQgeyBBamF4UmVxdWVzdCB9IGZyb20gXCIuLi8uLi9iYWNrZW5kL2NvbmNyZXRlL2FqYXgvQWpheFJlcXVlc3RcIjtcclxuaW1wb3J0IHsgQmFzaWNSb3V0ZXIgfSBmcm9tIFwiLi4vLi4vcm91dGluZy9jb25jcmV0ZS9CYXNpY1JvdXRlclwiO1xyXG5pbXBvcnQgeyBJU3RhdGVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL3N0YXRlcy9pbnRlcmZhY2VzL0lTdGF0ZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL3N0b3JhZ2UvY29uY3JldGUvTG9jYWxTdG9yYWdlXCI7XHJcbmltcG9ydCB7IENsaWVudFRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4uLy4uL3RlbXBsYXRpbmcvY29uY3JldGUvbXVzdGFjaGUvQ2xpZW50VGVtcGxhdGVFbmdpbmVcIjtcclxuaW1wb3J0IHsgTm90aWZ5VmFsaWRhdGluZ1JlcG9ydGVyIH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRpbmcvcmVwb3J0ZXIvY29uY3JldGUvTm90aWZ5VmFsaWRhdGluZ1JlcG9ydGVyXCI7XHJcbmltcG9ydCB7IEJhc2VWaWV3QmluZGVyIH0gZnJvbSBcIi4uLy4uL3ZpZXdiaW5kaW5nL2NvbmNyZXRlL0Jhc2VWaWV3QmluZGVyXCI7XHJcbmltcG9ydCB7IEJhc2VGaWVsZEJpbmRpbmcgfSBmcm9tIFwiLi4vLi4vYmluZGluZy9jb25jcmV0ZS9CYXNlRmllbGRCaW5kaW5nXCI7XHJcbmltcG9ydCB7IEV2ZW50QmluZGluZyB9IGZyb20gXCIuLi8uLi9iaW5kaW5nL2NvbmNyZXRlL0V2ZW50QmluZGluZ1wiO1xyXG5pbXBvcnQgeyBCYXNlSW5wdXRCaW5kaW5nIH0gZnJvbSBcIi4uLy4uL2JpbmRpbmcvY29uY3JldGUvQmFzZUlucHV0QmluZGluZ1wiO1xyXG5pbXBvcnQgeyBCYXNlQ29sbGVjdGlvbkJpbmRpbmcgfSBmcm9tIFwiLi4vLi4vYmluZGluZy9jb25jcmV0ZS9CYXNlQ29sbGVjdGlvbkJpbmRpbmdcIjtcclxuaW1wb3J0IHsgSUNvbW11bmljYXRvciB9IGZyb20gXCIuLi8uLi9iYWNrZW5kL2ludGVyZmFjZXMvSUNvbW11bmljYXRvclwiO1xyXG5pbXBvcnQgeyBJSGlzdG9yeSB9IGZyb20gXCIuLi8uLi9oaXN0b3J5L2ludGVyZmFjZXMvSUhpc3RvcnlcIjtcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2xvZ2dpbmcvaW50ZXJmYWNlcy9JTG9nZ2VyXCI7XHJcbmltcG9ydCB7IElSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL2JhY2tlbmQvaW50ZXJmYWNlcy9JUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBJUm91dGVyIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmcvaW50ZXJmYWNlcy9JUm91dGVyXCI7XHJcbmltcG9ydCB7IElTdG9yYWdlIH0gZnJvbSBcIi4uLy4uL3N0b3JhZ2UvaW50ZXJmYWNlcy9JU3RvcmFnZVwiO1xyXG5pbXBvcnQgeyBJVGVtcGxhdGVFbmdpbmUgfSBmcm9tIFwiLi4vLi4vdGVtcGxhdGluZy9pbnRlcmZhY2VzL0lUZW1wbGF0ZUVuZ2luZVwiO1xyXG5pbXBvcnQgeyBJVmFsaWRhdGluZ1JlcG9ydGVyIH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRpbmcvcmVwb3J0ZXIvaW50ZXJmYWNlcy9JVmFsaWRhdGF0aW5nUmVwb3J0ZXJcIjtcclxuaW1wb3J0IHsgSVZpZXdCaW5kZXIgfSBmcm9tIFwiLi4vLi4vdmlld2JpbmRpbmcvaW50ZXJmYWNlcy9JVmlld0JpbmRlclwiO1xyXG5pbXBvcnQgeyBJQmluZGluZyB9IGZyb20gXCIuLi8uLi9iaW5kaW5nL2ludGVyZmFjZXMvSUJpbmRpbmdcIjtcclxuaW1wb3J0IHsgSVZpZXdFbmdpbmUgfSBmcm9tIFwiLi4vLi4vdmlld2VuZ2luZS9pbnRlcmZhY2VzL0lWaWV3RW5naW5lXCI7XHJcbmltcG9ydCB7IEJhc2VWaWV3RW5naW5lIH0gZnJvbSBcIi4uLy4uL3ZpZXdlbmdpbmUvY29uY3JldGUvQmFzZVZpZXdFbmdpbmVcIjtcclxuaW1wb3J0IHsgQmFzZVZpZXdQdWJsaXNoZXIgfSBmcm9tIFwiLi4vLi4vdmlld2VuZ2luZS9jb25jcmV0ZS9CYXNlVmlld1B1Ymxpc2hlclwiO1xyXG5pbXBvcnQgeyBJVmlld1B1Ymxpc2hlciB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2ludGVyZmFjZXMvSVZpZXdQdWJsaXNoZXJcIjtcclxuaW1wb3J0IHsgUHJvcGVydHlCaW5kaW5nIH0gZnJvbSBcIi4uLy4uL2JpbmRpbmcvY29uY3JldGUvUHJvcGVydHlCaW5kaW5nXCI7XHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluc3RhbnRpYXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXIodHlwZSwgdmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tcImBjb250YWluZXJcIl0ucmVnaXN0ZXIodHlwZSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmVzb2x2ZSh0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUodHlwZSk7XHJcbiAgICB9XHJcbiAgICByZXNvbHZlQWxsKHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZUFsbCh0eXBlKTtcclxuICAgIH1cclxuICAgIHJlbGVhc2UodHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWxlYXNlKHR5cGUpO1xyXG4gICAgfVxyXG4gICAgaW5zdGFudGlhdGUodHlwZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbXCJgY29udGFpbmVyXCJdLmluc3RhbnRpYXRlKHR5cGUsIHBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBhbGwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbXCJgY29udGFpbmVyXCJdLmFsbCgpO1xyXG4gICAgfVxyXG4gICAgaXNyZWdpc3RlcmVkKHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tcImBjb250YWluZXJcIl0uaXNyZWdpc3RlcmVkKHR5cGUpO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoZ2VyYW5pdW0pIHtcclxuICAgICAgICBpZiAodGhpcy5pbnN0YW50aWF0ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEluc3RhbnRpYXRlZEV4Y2VwdGlvbihcIkdlcmFuaXVtQXBwLmluc3RhbnRpYXRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKiogYXBwbHkgc2V0dGluZ3MgKi9cclxuICAgICAgICBPYmplY3QuYXNzaWduKGdlcmFuaXVtLCBnZXJhbml1bURlZmF1bHQpO1xyXG4gICAgICAgIC8qKiBhcHBseSBjb250YWluZXIgKi9cclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXSA9IGdlcmFuaXVtLmNvbnRhaW5lciA/IG5ldyBnZXJhbml1bS5jb250YWluZXIoKSA6IG5ldyBJbk1lbW9yeUNvbnRhaW5lcigpO1xyXG4gICAgICAgIC8qKiByZWdpc3RlciBhbGwgc2V0dGluZ3MgKi9cclxuICAgICAgICB0aGlzLmludGVybmFsUmVnaXN0ZXIoZ2VyYW5pdW0pO1xyXG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGludGVybmFsUmVnaXN0ZXIoZ2VyYW5pdW0pIHtcclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWdpc3RlcihJQ29tbXVuaWNhdG9yLCBuZXcgZ2VyYW5pdW0uY29tbXVuaWNhdG9yKCkpO1xyXG4gICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlZ2lzdGVyKElIaXN0b3J5LCBuZXcgZ2VyYW5pdW0uaGlzdG9yeXByb3ZpZGVyKCkpO1xyXG4gICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlZ2lzdGVyKElMb2dnZXIsIG5ldyBnZXJhbml1bS5sb2dnZXIoKSk7XHJcbiAgICAgICAgdGhpc1tcImBjb250YWluZXJcIl0ucmVnaXN0ZXIoSVJlcXVlc3QsIG5ldyBnZXJhbml1bS5yZXF1ZXN0KCkpO1xyXG4gICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlZ2lzdGVyKElSb3V0ZXIsIG5ldyBnZXJhbml1bS5yb3V0ZXIoKSk7XHJcbiAgICAgICAgdGhpc1tcImBjb250YWluZXJcIl0ucmVnaXN0ZXIoSVN0YXRlTWFuYWdlciwgbmV3IGdlcmFuaXVtLnN0YXRlbWFuYWdlcigpKTtcclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWdpc3RlcihJU3RvcmFnZSwgbmV3IGdlcmFuaXVtLnN0b3JhZ2UoKSk7XHJcbiAgICAgICAgdGhpc1tcImBjb250YWluZXJcIl0ucmVnaXN0ZXIoSVRlbXBsYXRlRW5naW5lLCBuZXcgZ2VyYW5pdW0udGVtcGxhdGluZygpKTtcclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWdpc3RlcihJVmFsaWRhdGluZ1JlcG9ydGVyLCBuZXcgZ2VyYW5pdW0udmFsaWRhdGlvbnJlcG9ydGVyKCkpO1xyXG4gICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlZ2lzdGVyKElWaWV3QmluZGVyLCBuZXcgZ2VyYW5pdW0udmlld2JpbmRlcigpKTtcclxuICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZWdpc3RlcihJVmlld0VuZ2luZSwgbmV3IGdlcmFuaXVtLnZpZXdlbmdpbmUoKSk7XHJcbiAgICAgICAgdGhpc1tcImBjb250YWluZXJcIl0ucmVnaXN0ZXIoSVZpZXdQdWJsaXNoZXIsIG5ldyBnZXJhbml1bS52aWV3cHVibGlzaGVyKCkpO1xyXG4gICAgICAgIGdlcmFuaXVtLmJpbmRpbmdzLmZvckVhY2goYmluZGluZyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlZ2lzdGVyKElCaW5kaW5nLCBuZXcgYmluZGluZygpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5BcHAuY29udGFpbmVyUHJvcGVydHkgPSBcImBHZXJhbml1bUFwcFwiO1xyXG5jb25zdCBnZXJhbml1bURlZmF1bHQgPSB7XHJcbiAgICBjb21tdW5pY2F0b3I6IEFqYXhDb21tdW5pY2F0b3IsXHJcbiAgICBoaXN0b3J5cHJvdmlkZXI6IEh0bWw1SGlzdG9yeUFQSSxcclxuICAgIGxvZ2dlcjogQ29uc29sZUxvZ2dlcixcclxuICAgIHJlcXVlc3Q6IEFqYXhSZXF1ZXN0LFxyXG4gICAgcm91dGVyOiBCYXNpY1JvdXRlcixcclxuICAgIHN0YXRlbWFuYWdlcjogSW5NZW1vcnlDb250YWluZXIsXHJcbiAgICBzdG9yYWdlOiBMb2NhbFN0b3JhZ2UsXHJcbiAgICB0ZW1wbGF0aW5nOiBDbGllbnRUZW1wbGF0ZUVuZ2luZSxcclxuICAgIHZhbGlkYXRpb25yZXBvcnRlcjogTm90aWZ5VmFsaWRhdGluZ1JlcG9ydGVyLFxyXG4gICAgdmlld2JpbmRlcjogQmFzZVZpZXdCaW5kZXIsXHJcbiAgICB2aWV3ZW5naW5lOiBCYXNlVmlld0VuZ2luZSxcclxuICAgIHZpZXdwdWJsaXNoZXI6IEJhc2VWaWV3UHVibGlzaGVyLFxyXG4gICAgYmluZGluZ3M6IFtcclxuICAgICAgICBCYXNlRmllbGRCaW5kaW5nLFxyXG4gICAgICAgIEJhc2VJbnB1dEJpbmRpbmcsXHJcbiAgICAgICAgRXZlbnRCaW5kaW5nLFxyXG4gICAgICAgIEJhc2VDb2xsZWN0aW9uQmluZGluZyxcclxuICAgICAgICBQcm9wZXJ0eUJpbmRpbmdcclxuICAgIF1cclxufTtcclxuZnVuY3Rpb24gZ2V0QXBwKCkge1xyXG4gICAgaWYgKCF3aW5kb3dbQXBwLmNvbnRhaW5lclByb3BlcnR5XSkge1xyXG4gICAgICAgIHdpbmRvd1tBcHAuY29udGFpbmVyUHJvcGVydHldID0gbmV3IEFwcCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdpbmRvd1tBcHAuY29udGFpbmVyUHJvcGVydHldO1xyXG59XHJcbi8qKiBBcHBsaWNhdGlvbiBpbnRhbmNlIHdpdGggaW4tYnVpbGQgY29udGFpbmVyICovXHJcbnZhciBHZXJhbml1bUFwcCA9IGdldEFwcCgpO1xyXG4vKiogQXBwbGljYXRpb24gaW50YW5jZSB3aXRoIGluLWJ1aWxkIGNvbnRhaW5lciAqL1xyXG5leHBvcnQgZGVmYXVsdCBHZXJhbml1bUFwcDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXBwLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3J1bnRpbWUvY29uY3JldGUvQXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEV4Y2VwdGlvbiB9IGZyb20gXCIuLi9FeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIGV4dGVuZHMgRXhjZXB0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG1zZykge1xyXG4gICAgICAgIG1zZyArPSBcIkludGVyZmFjZVVzaW5nRXhjZXB0aW9uOiB5b3UgY2FuIG5vdCB1c2UgaW50ZXJmYWNlLWxpa2UgY2xhc3MhXCI7XHJcbiAgICAgICAgc3VwZXIobXNnKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbi5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgQXJyYXlIZWxwZXIge1xyXG4gICAgc3RhdGljIHJlbW92ZShhcnJheSwgaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheS5maWx0ZXIoZSA9PiBlICE9PSBpdGVtKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyByZW1vdmVTYW1lKGFycmF5KSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5LmZpbHRlcihmdW5jdGlvbiAoZWxlbSwgaW5kZXgsIHNlbGYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGluZGV4ID09IHNlbGYuaW5kZXhPZihlbGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBncm91cEJ5KGFycmF5LCBrZXkpIHtcclxuICAgICAgICB2YXIgZ3JvdXBzID0gW107XHJcbiAgICAgICAgdmFyIHRhcmdldEtleXMgPSBhcnJheS5tYXAoeCA9PiB4W2tleV0pO1xyXG4gICAgICAgIHZhciB1bmlxdWUgPSB0YXJnZXRLZXlzLmZpbHRlcigodmFsdWUsIGluZGV4LCBhcnJheSkgPT4gYXJyYXkuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4KTtcclxuICAgICAgICB1bmlxdWUuZm9yRWFjaCh6ID0+IHtcclxuICAgICAgICAgICAgZ3JvdXBzLnB1c2goYXJyYXkuZmlsdGVyKHggPT4geFtrZXldID09IHopKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZ3JvdXBzO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFycmF5LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2RlY2xhcmUvYXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuLi8uLi92aWV3L2Fic3RyYWN0L1ZpZXdcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5leHBvcnQgY2xhc3MgSVZpZXdFbmdpbmUge1xyXG4gICAgZXhlY3V0ZShjb250ZXh0KSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklWaWV3RW5naW5lLmV4ZWN1dGVcIik7IH1cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIGNvbXBsZXRlIHJlbmRlcmVkIHZpZXdcclxuICAgICAqIEBwYXJhbSBzZWxlY3RvclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgVmlld0VuZ2luZVZpZXcoaXZpZXdlZCwgc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB2YXIgdmlldztcclxuICAgICAgICAgICAgdmFyIHZpZXdjdHIgPSBpdmlld2VkLnZpZXcoKTtcclxuICAgICAgICAgICAgY29uc3QgaXNTdHJpbmcgPSB0eXBlb2Ygdmlld2N0ciA9PT0gXCJzdHJpbmdcIjtcclxuICAgICAgICAgICAgaWYgKGlzU3RyaW5nIHx8ICEhdmlld2N0cltcImRlY2xhcmVcIl0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBbc2VsZWN0b3JdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy5wdXNoKHZpZXdjdHIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGluc3RWaWV3ID0gR2VyYW5pdW1BcHAuaW5zdGFudGlhdGUoRW1wdHlWaWV3LCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIGluc3RWaWV3LmRhdGEgPSBpdmlld2VkO1xyXG4gICAgICAgICAgICAgICAgeWllbGQgaW5zdFZpZXcucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICB2aWV3ID0gaW5zdFZpZXc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2aWV3ID0gR2VyYW5pdW1BcHAuaW5zdGFudGlhdGUodmlld2N0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmlldy5kYXRhID0gaXZpZXdlZDtcclxuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgRW1wdHlWaWV3IGV4dGVuZHMgVmlldyB7XHJcbiAgICBkZWNsYXJlKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVZpZXdFbmdpbmUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9pbnRlcmZhY2VzL0lWaWV3RW5naW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFJvdXRlIH0gZnJvbSBcIi4uL2NvbnRyYWN0cy9Sb3V0ZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udHJhY3RzL1JvdXRlQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBBcnJheUhlbHBlciB9IGZyb20gXCIuLi8uLi9kZWNsYXJlL2FycmF5XCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxudmFyIF9pZ25vcmVkUm91dGVzID0gW107XHJcbnZhciBfcm91dGVzID0gW107XHJcbmV4cG9ydCB2YXIgc2V0dGluZ3MgPSB7IHBhcmFtZXRlckZ1bGxVcmw6IGZhbHNlIH07XHJcbmV4cG9ydCBmdW5jdGlvbiByb3V0ZXMoKSB7XHJcbiAgICByZXR1cm4gX3JvdXRlcy5zbGljZSgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB1cmxGcm9tQ3RvcihjdG9yLCBwYXJhbXMpIHtcclxuICAgIHZhciBpbnN0YW5jZSA9IEdlcmFuaXVtQXBwLmluc3RhbnRpYXRlKGN0b3IpO1xyXG4gICAgbGV0IGNoYWluID0gY2hhaW5PZkN0b3JOYW1lcyhpbnN0YW5jZSwgbnVsbCk7XHJcbiAgICB2YXIgcm91dGVVcmwgPSBBcnJheUhlbHBlci5yZW1vdmVTYW1lKGNoYWluKVxyXG4gICAgICAgIC5yZXZlcnNlKCk7XHJcbiAgICBpZiAocGFyYW1zICYmIHNldHRpbmdzLnBhcmFtZXRlckZ1bGxVcmwpXHJcbiAgICAgICAgcm91dGVVcmwucHVzaC5hcHBseShyb3V0ZVVybCwgcGFyYW1zKTtcclxuICAgIHJldHVybiAnLycgKyByb3V0ZVVybC5qb2luKFwiL1wiKS50b0xvd2VyQ2FzZSgpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByb3V0ZWQocGFyYW0sIGFic29yYikge1xyXG4gICAgLy9jbGVhbiByb3V0ZSBvdmVybG9hZFxyXG4gICAgaWYgKHR5cGVvZiBwYXJhbSAhPT0gJ3N0cmluZydcclxuICAgICAgICAvL2NvbnRleHQgb3ZlcmxvYWRcclxuICAgICAgICAmJiAhKHBhcmFtIGluc3RhbmNlb2YgUm91dGVDb250ZXh0KVxyXG4gICAgICAgIC8vcGFyZW50IG92ZXJsb2FkXHJcbiAgICAgICAgJiYgIWFic29yYilcclxuICAgICAgICAvL2NsZWFuIGRlY29yYXRlXHJcbiAgICAgICAgX3JvdXRlZChwYXJhbSwgdXJsRnJvbUN0b3IocGFyYW0pKTtcclxuICAgIGVsc2VcclxuICAgICAgICByZXR1cm4gKGNvbnN0cnVjdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnKVxyXG4gICAgICAgICAgICAgICAgX3JvdXRlZChjb25zdHJ1Y3RvciwgcGFyYW0pO1xyXG4gICAgICAgICAgICBpZiAoYWJzb3JiKVxyXG4gICAgICAgICAgICAgICAgX3JvdXRlZChjb25zdHJ1Y3RvciwgdXJsRnJvbUN0b3IocGFyYW0pICsgdXJsRnJvbUN0b3IoY29uc3RydWN0b3IpKTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtIGluc3RhbmNlb2YgUm91dGVDb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gdXJsRnJvbUN0b3IoY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtLnBhcmVudClcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSB1cmxGcm9tQ3RvcihwYXJhbS5wYXJlbnQpICsgdXJsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtLnByZXBhdGgpXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gcGFyYW0ucHJlcGF0aCArIHVybDtcclxuICAgICAgICAgICAgICAgIF9yb3V0ZWQoY29uc3RydWN0b3IsIHVybCwgcGFyYW0uZXhlY3V0YWJsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByb3V0ZWlnbm9yZShjb25zdHJ1Y3Rvcikge1xyXG4gICAgaWYgKCFfaWdub3JlZFJvdXRlcykge1xyXG4gICAgICAgIF9pZ25vcmVkUm91dGVzID0gW107XHJcbiAgICB9XHJcbiAgICBfaWdub3JlZFJvdXRlcy5wdXNoKGNvbnN0cnVjdG9yLm5hbWUpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByb3V0ZXJvb3QoY29uc3RydWN0b3IpIHtcclxuICAgIF9yb3V0ZWQoY29uc3RydWN0b3IsICcuLycpO1xyXG59XHJcbmZ1bmN0aW9uIF9yb3V0ZWQoY3RvciwgdXJsLCBleGVjdXRhYmxlKSB7XHJcbiAgICB2YXIgcm91dGUgPSBuZXcgUm91dGUoKTtcclxuICAgIHJvdXRlLnVybCA9IHVybCxcclxuICAgICAgICByb3V0ZS5jdG9yID0gY3RvcjtcclxuICAgIHJvdXRlLmV4ZWN1dGFibGUgPSBleGVjdXRhYmxlO1xyXG4gICAgY3Rvci5wcm90b3R5cGVbXCJAcm91dGVkXCJdID0gcm91dGU7XHJcbiAgICBfcm91dGVzLnB1c2gocm91dGUpO1xyXG59XHJcbmZ1bmN0aW9uIGNoYWluT2ZDdG9yTmFtZXMob2JqLCBuYW1lcykge1xyXG4gICAgaWYgKG5hbWVzID09IG51bGwpXHJcbiAgICAgICAgbmFtZXMgPSBbXTtcclxuICAgIGlmIChvYmogPT0gbnVsbClcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIHZhciByb3V0ZSA9IG9iai5jb25zdHJ1Y3Rvci5uYW1lO1xyXG4gICAgaWYgKHJvdXRlID09IFwiT2JqZWN0XCIpXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICBpZiAoX2lnbm9yZWRSb3V0ZXMuaW5kZXhPZihyb3V0ZSkgPT0gLTEpXHJcbiAgICAgICAgbmFtZXMucHVzaChyb3V0ZSk7XHJcbiAgICBvYmogPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKTtcclxuICAgIG5hbWVzLmNvbmNhdChjaGFpbk9mQ3Rvck5hbWVzKG9iaiwgbmFtZXMpKTtcclxuICAgIHJldHVybiBuYW1lcztcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWNvcmF0b3JzLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvY29uY3JldGUvZGVjb3JhdG9ycy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSUJpbmRpbmcge1xyXG4gICAgYmluZChvYmplY3RET00sIG1vZGVsKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklCaW5kaW5nLmJpbmRcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JQmluZGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2ludGVyZmFjZXMvSUJpbmRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgcm91dGVpZ25vcmUgfSBmcm9tIFwiLi4vLi4vcm91dGluZy9jb25jcmV0ZS9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IFZpZXdTdGF0ZSB9IGZyb20gXCIuL1ZpZXdTdGF0ZVwiO1xyXG5pbXBvcnQgeyBJVmlld0VuZ2luZSB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2ludGVyZmFjZXMvSVZpZXdFbmdpbmVcIjtcclxuaW1wb3J0IHsgaXMgfSBmcm9tIFwiLi4vLi4vaGlzdG9yeS9kZWNvcmF0b3JzL2hpc3RvcnlcIjtcclxuaW1wb3J0IHsgSGlzdG9yeUl0ZW0gfSBmcm9tIFwiLi4vLi4vaGlzdG9yeS9jb250cmFjdHMvSGlzdG9yeUl0ZW1cIjtcclxuaW1wb3J0IHsgSUhpc3RvcnkgfSBmcm9tIFwiLi4vLi4vaGlzdG9yeS9pbnRlcmZhY2VzL0lIaXN0b3J5XCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuaW1wb3J0IHsgSVZpZXdQdWJsaXNoZXIgfSBmcm9tIFwiLi4vLi4vdmlld2VuZ2luZS9pbnRlcmZhY2VzL0lWaWV3UHVibGlzaGVyXCI7XHJcbmxldCBWaWV3TW9kZWwgPSBjbGFzcyBWaWV3TW9kZWwgZXh0ZW5kcyBWaWV3U3RhdGUge1xyXG4gICAgc2hvdyhzZWxlY3Rvcikge1xyXG4gICAgICAgIGNvbnN0IF9zdXBlciA9IG5hbWUgPT4gc3VwZXJbbmFtZV07XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREb2N1bWVudFRpdGxlKCk7XHJcbiAgICAgICAgICAgIGlmIChpcyh0aGlzLmNvbnN0cnVjdG9yKSAmJiAhdGhpc1snI3JvdXRlZCddKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3JvdXRlZCA9IHRoaXNbXCJAcm91dGVkXCJdO1xyXG4gICAgICAgICAgICAgICAgX3JvdXRlZC5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9oaXN0b3J5ID0gbmV3IEhpc3RvcnlJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICBfaGlzdG9yeS51cmwgPSBfcm91dGVkLnVybDtcclxuICAgICAgICAgICAgICAgIF9oaXN0b3J5LnRpdGxlID0gZG9jdW1lbnQudGl0bGU7XHJcbiAgICAgICAgICAgICAgICBfaGlzdG9yeS5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjdG9yOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgR2VyYW5pdW1BcHAucmVzb2x2ZShJSGlzdG9yeSkuZXh0ZW5kKF9oaXN0b3J5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWxldGUgdGhpc1snI3JvdXRlZCddO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZWZ1bGwpIHtcclxuICAgICAgICAgICAgICAgIF9zdXBlcihcInNob3dcIikuY2FsbCh0aGlzLCBzZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb20gPSB5aWVsZCBHZXJhbml1bUFwcC5yZXNvbHZlKElWaWV3RW5naW5lKS5leGVjdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBpVmlld2VkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBHZXJhbml1bUFwcC5yZXNvbHZlKElWaWV3UHVibGlzaGVyKS5wdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBkb206IGRvbSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXREb2N1bWVudFRpdGxlKCkge1xyXG4gICAgICAgIHZhciB0aXRsZSA9IHRoaXMuZG9jdW1lbnRUaXRsZSgpO1xyXG4gICAgICAgIGlmICh0aXRsZSAhPSBudWxsKVxyXG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnRUaXRsZSgpIHsgcmV0dXJuIG51bGw7IH1cclxuICAgIHRvU3RyaW5nKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvdyhzZWxlY3Rvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblZpZXdNb2RlbCA9IF9fZGVjb3JhdGUoW1xyXG4gICAgcm91dGVpZ25vcmVcclxuXSwgVmlld01vZGVsKTtcclxuZXhwb3J0IHsgVmlld01vZGVsIH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZpZXdNb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3bW9kZWxzL2Fic3RyYWN0L1ZpZXdNb2RlbC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZnVuY3Rpb24gZmluZEFuZEZpbHRlcihzZXQsIHF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gc2V0Lm1hcChyb290ID0+IHtcclxuICAgICAgICBjb25zdCBwYXJlbnQgPSByb290LnBhcmVudEVsZW1lbnQgfHwgcm9vdDtcclxuICAgICAgICByZXR1cm4gdG9IdG1sQXJyYXkocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcclxuICAgIH0pLnJlZHVjZSgocCwgbikgPT4gcC5jb25jYXQobikpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0b0h0bWxBcnJheShub2Rlcykge1xyXG4gICAgcmV0dXJuIG5vZGVUb0FycmF5KG5vZGVzKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbm9kZVRvQXJyYXkobm9kZXMpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlcywgMCk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SHRtbEVsZW1lbnRFeHRlbnNpb25zLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4dGVuc2lvbnMvSHRtbEVsZW1lbnRFeHRlbnNpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJQ29tbXVuaWNhdG9yIHtcclxuICAgIHNlbmQoZGF0YSkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJQ29tbXVuaWNhdG9yLnNlbmRcIik7IH1cclxuICAgIHJlY2l2ZSgpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSUNvbW11bmljYXRvci5yZWNpdmVcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JQ29tbXVuaWNhdG9yLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvaW50ZXJmYWNlcy9JQ29tbXVuaWNhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtc2cpIHtcclxuICAgICAgICBzdXBlcihtc2cpO1xyXG4gICAgICAgIHRoaXMubXNnID0gbXNnO1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBFeGNlcHRpb24ucHJvdG90eXBlKTtcclxuICAgIH1cclxuICAgIGdldCBwdXJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1zZztcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1FeGNlcHRpb24uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXhjZXB0aW9ucy9FeGNlcHRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJSGlzdG9yeSB7XHJcbiAgICBleHRlbmQoaGl0ZW0pIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSUhpc3RvcnkuZXh0ZW5kXCIpOyB9XHJcbiAgICByZXN0b3JlKHN0YXRlKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklIaXN0b3J5LnJlc3RvcmVcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JSGlzdG9yeS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9oaXN0b3J5L2ludGVyZmFjZXMvSUhpc3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJUm91dGVyIHtcclxuICAgIGdldCByb3V0ZXMoKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklSb3V0ZXIucm91dGVzXCIpOyB9XHJcbiAgICByb3V0ZUJ5VXJsKHVybCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJUm91dGVyLnJvdXRlQnlVcmxcIik7IH1cclxuICAgIHJvdXRlKGN1cnJlbnQpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVJvdXRlci5yb3V0ZVwiKTsgfVxyXG4gICAgcm91dGVhcmVhKCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJUm91dGVyLnJvdXRlYXJlYVwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlSb3V0ZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcm91dGluZy9pbnRlcmZhY2VzL0lSb3V0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSUxvZ2dlciB7XHJcbiAgICBsb2coZXJyKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklMb2dnZXIubG9nXCIpOyB9XHJcbiAgICBnZXQoKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklMb2dnZXIuZ2V0XCIpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SUxvZ2dlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2xvZ2dpbmcvaW50ZXJmYWNlcy9JTG9nZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSVZpZXdCaW5kZXIge1xyXG4gICAgYmluZChjb250ZXh0KSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklWaWV3QmluZGVyLmJpbmRcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JVmlld0JpbmRlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3YmluZGluZy9pbnRlcmZhY2VzL0lWaWV3QmluZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gXCIuLi8uLi90ZW1wbGF0aW5nL2NvbnRyYWN0cy9UZW1wbGF0ZVwiO1xyXG5pbXBvcnQgeyBFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9FeGNlcHRpb25cIjtcclxuaW1wb3J0IHsgSVRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4uLy4uL3RlbXBsYXRpbmcvaW50ZXJmYWNlcy9JVGVtcGxhdGVFbmdpbmVcIjtcclxuaW1wb3J0IHsgdG9IdG1sQXJyYXkgfSBmcm9tIFwiLi4vLi4vZXh0ZW5zaW9ucy9IdG1sRWxlbWVudEV4dGVuc2lvbnNcIjtcclxuZXhwb3J0IGNsYXNzIFZpZXcgZXh0ZW5kcyBUZW1wbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucHJvdGVjdFJlbmRlcihhcmd1bWVudHNbMV0pO1xyXG4gICAgICAgIHRoaXNbXCIlc2VsZWN0b3JcIl0gPSBhcmd1bWVudHNbMF07XHJcbiAgICB9XHJcbiAgICBET00oKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgbGV0IHZpZXcgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3JlbmRlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB2aWV3ID0geWllbGQgdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gdmlldy50ZW1wbGF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvSHRtbEFycmF5KGRpdi5jaGlsZE5vZGVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldCBzZWxlY3RvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpc1tcIiVzZWxlY3RvclwiXTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ3ZpZXcgZGF0YSBpcyBub3QgYXNzaWduZWQhJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JlbmRlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCd2aWV3IGFscmVhZHkgcmVuZGVyZWQhJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGVuZ2luZSA9IHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSVRlbXBsYXRlRW5naW5lKTtcclxuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHlpZWxkIGVuZ2luZS5wYXJzZSh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiByZXNvbHZlKHRoaXMpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHByb3RlY3RSZW5kZXIoaHRtbCkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmRlY2xhcmUoKTtcclxuICAgICAgICBpZiAoIXRoaXMudGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGh0bWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy50ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCd2aWV3IHRlbXBsYXRlIGlzIGVtcHR5IScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD12aWV3LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXcvYWJzdHJhY3QvVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElWaWV3UHVibGlzaGVyIHtcclxuICAgIHB1Ymxpc2godmlld0RPTSkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJVmlld1B1Ymxpc2hlci5wdWJsaXNoXCIpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVZpZXdQdWJsaXNoZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld2VuZ2luZS9pbnRlcmZhY2VzL0lWaWV3UHVibGlzaGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFeGNlcHRpb24gfSBmcm9tIFwiLi4vRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBDb21tdW5pY2F0aW9uRXhjZXB0aW9uIGV4dGVuZHMgRXhjZXB0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG1zZykge1xyXG4gICAgICAgIHN1cGVyKFwiQ29tbXVuaWNhdGlvbkV4Y2VwdGlvbjpcIiArIG1zZyk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29tbXVuaWNhdGlvbkV4Y2VwdGlvbi5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9leGNlcHRpb25zL2JhY2tlbmQvQ29tbXVuaWNhdGlvbkV4Y2VwdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxuaW1wb3J0IHsgcm91dGVpZ25vcmUgfSBmcm9tIFwiLi4vLi4vLi4vcm91dGluZy9jb25jcmV0ZS9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IEFycmF5SGVscGVyIH0gZnJvbSBcIi4uLy4uLy4uL2RlY2xhcmUvYXJyYXlcIjtcclxubGV0IEV2ZW50ID0gY2xhc3MgRXZlbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdEV2ZW50cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgfVxyXG4gICAgcmFpc2UoYXJncykge1xyXG4gICAgICAgIHRoaXMuX3JlcXVlc3RFdmVudHMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHtcclxuICAgICAgICAgICAgc3Vic2NyaWJlcihhcmdzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHNldCBiaW5kKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdEV2ZW50cy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuICAgIHNldCB1bmJpbmQoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0RXZlbnRzID0gQXJyYXlIZWxwZXIucmVtb3ZlKHRoaXMuX3JlcXVlc3RFdmVudHMsIGNhbGxiYWNrKTtcclxuICAgIH1cclxufTtcclxuRXZlbnQgPSBfX2RlY29yYXRlKFtcclxuICAgIHJvdXRlaWdub3JlXHJcbl0sIEV2ZW50KTtcclxuZXhwb3J0IHsgRXZlbnQgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXZlbnQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmVoYXZpb3JzL2V2ZW50cy9hYnN0cmFjdC9FdmVudC5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW5NZW1vcnlDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vY29oZXJlbmNlL2NvbmNyZXRlL0luTWVtb3J5Q29udGFpbmVyXCI7XHJcbmV4cG9ydCBjbGFzcyBJU3RhdGVNYW5hZ2VyIGV4dGVuZHMgSW5NZW1vcnlDb250YWluZXIge1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlTdGF0ZU1hbmFnZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vc3RhdGVzL2ludGVyZmFjZXMvSVN0YXRlTWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElUZW1wbGF0ZUVuZ2luZSB7XHJcbiAgICBwYXJzZSh0ZW1wbGF0ZSkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJVGVtcGxhdGVFbmdpbmUucGFyc2VcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JVGVtcGxhdGVFbmdpbmUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdGVtcGxhdGluZy9pbnRlcmZhY2VzL0lUZW1wbGF0ZUVuZ2luZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElWYWxpZGF0aW5nUmVwb3J0ZXIge1xyXG4gICAgcmVwb3J0KERPTSwgdmFsaWRhdGluZ1Jlc3VsdCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJVmFsaWRhdGluZ1JlcG9ydGVyLnJlcG9ydFwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlWYWxpZGF0YXRpbmdSZXBvcnRlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92YWxpZGF0aW5nL3JlcG9ydGVyL2ludGVyZmFjZXMvSVZhbGlkYXRhdGluZ1JlcG9ydGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFdmVudCB9IGZyb20gXCIuLi9iZWhhdmlvcnMvZXZlbnRzL2Fic3RyYWN0L0V2ZW50XCI7XHJcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eSB7XHJcbiAgICAvKipcclxuICAgICAqIFJlZGVmaW5lcyBwcm9wZXJ0eSB3aXRoIG5ldyBwdWJsaWMgYWNjZXNzb3JzLCBzYWZlXHJcbiAgICAgKlxyXG4gICAgICogQWxzbyBjcmVhdGVzIHByb3BlcnR5IEV2ZW50IGZvciBkZXRlY3Rpb24gZW5kIG9mIGNoYWluOlxyXG4gICAgICpcclxuICAgICAqIHNldHRlciBvYmpbI2V2ZW50OnNldFtuYW1lXV1cclxuICAgICAqXHJcbiAgICAgKiBnZXR0ZXIgb2JqWyNldmVudDpnZXRbbmFtZV1dXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0gbmFtZSBvZiBwcm9wZXJ0eVxyXG4gICAgICogQHBhcmFtIGdldCBuZXcgcHVibGljIHNldHRlclxyXG4gICAgICogQHBhcmFtIHNldCBuZXcgcHVibGljIGdldHRlclxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgcmVkZWZpbmUodGFyZ2V0LCBuYW1lLCBnZXQsIHNldCkge1xyXG4gICAgICAgIHZhciBwcm90b1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCksIG5hbWUpO1xyXG4gICAgICAgIHZhciBvd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgbmFtZSk7XHJcbiAgICAgICAgdmFyIHNldHRlckV2ZW50ID0gbmV3IFByb3BlcnR5RXZlbnQoKTtcclxuICAgICAgICB2YXIgZ2V0dGVyRXZlbnQgPSBuZXcgUHJvcGVydHlFdmVudCgpO1xyXG4gICAgICAgIC8vYWNjZXNzb3JzIGRvZXNuJ3QgZXhpc3RzXHJcbiAgICAgICAgaWYgKG93blByb3BlcnR5RGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkICYmIHByb3RvUHJvcGVydHlEZXNjcmlwdG9yID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3Byb3RvdHlwZSBhY2Nlc3NvclxyXG4gICAgICAgIGlmIChvd25Qcm9wZXJ0eURlc2NyaXB0b3IgPT0gdW5kZWZpbmVkICYmIHByb3RvUHJvcGVydHlEZXNjcmlwdG9yICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHByb3RvUHJvcGVydHlEZXNjcmlwdG9yLmdldC5jYWxsKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF92YWwgPSBnZXQodmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBnZXR0ZXJFdmVudC5yYWlzZSh7IHZhbCwgX3ZhbCB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZhbDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXQodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IF92YWwgPSBzZXQuY2FsbCh0aGlzLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdmFsICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG9Qcm9wZXJ0eURlc2NyaXB0b3Iuc2V0LmNhbGwodGFyZ2V0LCBfdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0ZXJFdmVudC5yYWlzZSh7IHZhbCwgX3ZhbCB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRhcmdldFtcIiNldmVudDpzZXRbXCIgKyBuYW1lICsgXCJdXCJdID0gc2V0dGVyRXZlbnQ7XHJcbiAgICAgICAgICAgIHRhcmdldFtcIiNldmVudDpnZXRbXCIgKyBuYW1lICsgXCJdXCJdID0gZ2V0dGVyRXZlbnQ7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy9vd24gYWNjZXNzb3IgZXhpc3RzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG93blByb3BlcnR5RGVzY3JpcHRvci52YWx1ZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgbmFtZSwge1xyXG4gICAgICAgICAgICAgICAgZ2V0KCkgeyByZXR1cm4gZ2V0KG93blByb3BlcnR5RGVzY3JpcHRvci5nZXQuY2FsbCh0YXJnZXQpKTsgfSxcclxuICAgICAgICAgICAgICAgIHNldCh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgX3ZhbCA9IHNldC5jYWxsKHRoaXMsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKF92YWwgIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvd25Qcm9wZXJ0eURlc2NyaXB0b3Iuc2V0LmNhbGwodGFyZ2V0LCBfdmFsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vYWNjZXNzb3IgZG9lc24ndCBleGlzdHNcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleGVyID0gU3ltYm9sKG5hbWUpO1xyXG4gICAgICAgICAgICB0YXJnZXRbaW5kZXhlcl0gPSB0YXJnZXRbbmFtZV07XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcclxuICAgICAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gdGFyZ2V0W2luZGV4ZXJdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfdmFsID0gZ2V0KHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0dGVyRXZlbnQucmFpc2UoeyB2YWwsIF92YWwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92YWw7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2V0KHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBfdmFsID0gc2V0LmNhbGwodGhpcywgdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3ZhbCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtpbmRleGVyXSA9IHNldChfdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXR0ZXJFdmVudC5yYWlzZSh7IHZhbCwgX3ZhbCB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRhcmdldFtcIiNldmVudDpzZXRbXCIgKyBuYW1lICsgXCJdXCJdID0gc2V0dGVyRXZlbnQ7XHJcbiAgICAgICAgICAgIHRhcmdldFtcIiNldmVudDpnZXRbXCIgKyBuYW1lICsgXCJdXCJdID0gZ2V0dGVyRXZlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUV2ZW50IGV4dGVuZHMgRXZlbnQge1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eUFjY2Vzc29yIHtcclxufVxyXG5leHBvcnQgY2xhc3MgUHJvcGVydHlJbmZvIHtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Qcm9wZXJ0eS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yZWZsZWN0aW9uL1Byb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBCYXNlQmluZGluZyB9IGZyb20gXCIuL0Jhc2VCaW5kaW5nXCI7XHJcbmltcG9ydCB7IGZpbmRBbmRGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vZXh0ZW5zaW9ucy9IdG1sRWxlbWVudEV4dGVuc2lvbnNcIjtcclxuaW1wb3J0IHsgcHJvbWlzZWQgfSBmcm9tIFwiLi4vLi4vLi4vc3RydWN0dXJlcy9Qcm9taXNlZFwiO1xyXG5leHBvcnQgY2xhc3MgQmFzZUJ5QXR0cmlidXRlQmluZGluZyBleHRlbmRzIEJhc2VCaW5kaW5nIHtcclxuICAgIGNsZWFyKERPTU9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIERPTU9iamVjdC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5hdHRyaWJ1dGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGV0ZWN0aW9uKERPTSkge1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlZChmaW5kQW5kRmlsdGVyKERPTSwgJ1snICsgdGhpcy5hdHRyaWJ1dGUgKyAnXScpKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlQnlBdHRyaWJ1dGVCaW5kaW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvYmFzZS9CYXNlQnlBdHRyaWJ1dGVCaW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBJQmluZGluZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lCaW5kaW5nXCI7XHJcbmV4cG9ydCBjbGFzcyBCaW5kaW5nIGV4dGVuZHMgSUJpbmRpbmcge1xyXG4gICAgYmluZChET00sIG1vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdmFyIERPTU9iamVjdHMgPSB5aWVsZCB0aGlzLmRldGVjdGlvbihET00pO1xyXG4gICAgICAgICAgICBET01PYmplY3RzLmZvckVhY2goKHYpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuYmluZGluZyh2LCBtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLmNsZWFyKHYpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmluZGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2Fic3RyYWN0L0JpbmRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBmdW5jdGlvbiBwcm9taXNlZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHJvbWlzZWQuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vc3RydWN0dXJlcy9Qcm9taXNlZC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElSZXF1ZXN0IHtcclxuICAgIHNlbmQoZGF0YSkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJUmVxdWVzdC5zZW5kXCIpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVJlcXVlc3QuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmFja2VuZC9pbnRlcmZhY2VzL0lSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIFJvdXRlIHtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Sb3V0ZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2NvbnRyYWN0cy9Sb3V0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQXJyYXlIZWxwZXIgfSBmcm9tIFwiLi4vLi4vZGVjbGFyZS9hcnJheVwiO1xyXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlDb250YWluZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBbXTtcclxuICAgIH1cclxuICAgIGlzcmVnaXN0ZXJlZCh0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh0eXBlKS5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXIodHlwZSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5wdXNoKHtcclxuICAgICAgICAgICAgdHlwZTogdHlwZS5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlc29sdmUodHlwZSkge1xyXG4gICAgICAgIGNvbnN0IGZpbmRlZCA9IHRoaXMuZXhlY3V0ZSh0eXBlKTtcclxuICAgICAgICBpZiAoZmluZGVkLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNvbXBvbmVudCBpcyBub3QgcmVnaXN0ZXJlZDogXCIgKyB0eXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZENvbnRhaW5lcihmaW5kZWRbMF0pO1xyXG4gICAgfVxyXG4gICAgcmVzb2x2ZUFsbCh0eXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZSh0eXBlKS5tYXAoY29tcG9uZW50ID0+IHRoaXMuYmluZENvbnRhaW5lcihjb21wb25lbnQpKTtcclxuICAgIH1cclxuICAgIHJlbGVhc2UodHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSAodG9rZW4pID0+IHsgcmV0dXJuIHRva2VuLnR5cGUgPT0gdHlwZS5uYW1lOyB9O1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmZpbmQocGF0dGVybik7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IEFycmF5SGVscGVyLnJlbW92ZSh0aGlzLmNvbnRhaW5lciwgY29tcG9uZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhbGwoKSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW5FeHRyYWN0ID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbi52YWx1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRhaW5lci5tYXAodG9rZW5FeHRyYWN0KTtcclxuICAgIH1cclxuICAgIGluc3RhbnRpYXRlKHR5cGUsIHBhcmFtcykge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyB0eXBlKC4uLihwYXJhbXMgfHwgW10pKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5iaW5kQ29udGFpbmVyKGluc3RhbmNlKTtcclxuICAgIH1cclxuICAgIGJpbmRDb250YWluZXIoY29tcG9uZW50KSB7XHJcbiAgICAgICAgY29tcG9uZW50W1wiYGNvbnRhaW5lclwiXSA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuICAgIGV4ZWN1dGUodHlwZSkge1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm4gPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuLnR5cGUgPT09IHR5cGUubmFtZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHRva2VuRXh0cmFjdCA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW4udmFsdWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBtYXAgPSAnbWFwJztcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXIuZmlsdGVyKHBhdHRlcm4pLm1hcCh0b2tlbkV4dHJhY3QpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUluTWVtb3J5Q29udGFpbmVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2NvaGVyZW5jZS9jb25jcmV0ZS9Jbk1lbW9yeUNvbnRhaW5lci5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNsYXNzIEhpc3RvcnlJdGVtIHtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IaXN0b3J5SXRlbS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9oaXN0b3J5L2NvbnRyYWN0cy9IaXN0b3J5SXRlbS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9jb2hlcmVuY2UvSW50ZXJmYWNlVXNpbmdFeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIElTdG9yYWdlIHtcclxuICAgIGFkZChtb2RlbCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJU3RvcmFnZS5hZGRcIik7IH1cclxuICAgIHJlbW92ZShpZCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJU3RvcmFnZS5yZW1vdmVcIik7IH1cclxuICAgIGdldChpZCkgeyB0aHJvdyBuZXcgSW50ZXJmYWNlVXNpbmdFeGNlcHRpb24oXCJJU3RvcmFnZS5nZXRcIik7IH1cclxuICAgIGFsbCgpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVN0b3JhZ2UuYWxsXCIpOyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVN0b3JhZ2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vc3RvcmFnZS9pbnRlcmZhY2VzL0lTdG9yYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBmaW5kQW5kRmlsdGVyIH0gZnJvbSBcIi4uLy4uLy4uL2V4dGVuc2lvbnMvSHRtbEVsZW1lbnRFeHRlbnNpb25zXCI7XHJcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3QvQmluZGluZ1wiO1xyXG5pbXBvcnQgeyBwcm9taXNlZCB9IGZyb20gXCIuLi8uLi8uLi9zdHJ1Y3R1cmVzL1Byb21pc2VkXCI7XHJcbmV4cG9ydCBjbGFzcyBCYXNlQmluZGluZyBleHRlbmRzIEJpbmRpbmcge1xyXG4gICAgZGV0ZWN0aW9uKERPTSkge1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlZChmaW5kQW5kRmlsdGVyKERPTSwgdGhpcy5hdHRyaWJ1dGUpKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlQmluZGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2NvbmNyZXRlL2Jhc2UvQmFzZUJpbmRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuaW1wb3J0IHsgSUJpbmRpbmcgfSBmcm9tIFwiLi4vLi4vYmluZGluZy9pbnRlcmZhY2VzL0lCaW5kaW5nXCI7XHJcbmV4cG9ydCBjbGFzcyBCaW5kQ29udGV4dCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3RE9NLCBiaW5kaW5nRmxhZ3MpIHtcclxuICAgICAgICB0aGlzLnZpZXdET00gPSB2aWV3RE9NO1xyXG4gICAgICAgIGlmICghYmluZGluZ0ZsYWdzKSB7XHJcbiAgICAgICAgICAgIGJpbmRpbmdGbGFncyA9IEdlcmFuaXVtQXBwLnJlc29sdmVBbGwoSUJpbmRpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJpbmRpbmdGbGFncyA9IGJpbmRpbmdGbGFncztcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CaW5kQ29udGV4dC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3YmluZGluZy9jb250cmFjdHMvQmluZENvbnRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IElWaWV3RE9NIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSVZpZXdET01cIjtcclxuZXhwb3J0IGNsYXNzIFZpZXdET00gZXh0ZW5kcyBJVmlld0RPTSB7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Vmlld0RPTS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3RE9NL2Fic3RyYWN0L1ZpZXdET00uanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld21vZGVscy9hYnN0cmFjdC9WaWV3TW9kZWxcIjtcclxuaW1wb3J0IHsgQ2F0ZWdvcnlCdXR0b25WaWV3IH0gZnJvbSBcIi4vY2F0ZWdvcnlCdXR0b25WaWV3XCI7XHJcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeUJ1dHRvbiBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgfVxyXG4gICAgdmlldygpIHtcclxuICAgICAgICByZXR1cm4gQ2F0ZWdvcnlCdXR0b25WaWV3O1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhdGVnb3J5QnV0dG9uLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnlCdXR0b24vY2F0ZWdvcnlCdXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2NvbXBvbmVudHMvYXBwXCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmltcG9ydCB7IHNldFRpbWVvdXQgfSBmcm9tIFwidGltZXJzXCI7XHJcbmltcG9ydCB7IElCaW5kaW5nIH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2ludGVyZmFjZXMvSUJpbmRpbmdcIjtcclxuaW1wb3J0IHsgTXVzdGFjaGVCaW5kIH0gZnJvbSBcIi4vYmluZGVycy9NdXN0YWNoZUJpbmRcIjtcclxucmVxdWlyZShcImJ1bG1hLWNhcm91c2VsL2Nhcm91c2VsLmpzXCIpO1xyXG5yZXF1aXJlKFwiYnVsbWEtY2Fyb3VzZWwvYnVsbWEtY2Fyb3VzZWwuY3NzXCIpO1xyXG5yZXF1aXJlKFwiYnVsbWEvY3NzL2J1bG1hLmNzc1wiKTtcclxucmVxdWlyZShcIi4uL2Nzcy9zdHlsZS5jc3NcIik7XHJcbkdlcmFuaXVtQXBwLnN0YXJ0KHt9KTtcclxuR2VyYW5pdW1BcHAucmVnaXN0ZXIoSUJpbmRpbmcsIG5ldyBNdXN0YWNoZUJpbmQoKSk7XHJcbm5ldyBBcHAoKS5zaG93KCk7XHJcbnNldFRpbWVvdXQoKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmVsb2FkZXJcIikucmVtb3ZlKCksIDEpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgcHJvbWlzZWQgfSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3N0cnVjdHVyZXMvUHJvbWlzZWRcIjtcclxuaW1wb3J0IHsgVmlld0RPTSB9IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld0RPTS9hYnN0cmFjdC9WaWV3RE9NXCI7XHJcbmltcG9ydCB7IENhdGVnb3J5QnV0dG9uIH0gZnJvbSBcIi4vY2F0ZWdvcnlCdXR0b24vY2F0ZWdvcnlCdXR0b25cIjtcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgeyBWaWV3TW9kZWxFeGlzdGVkIH0gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3bW9kZWxzL2NvbmNyZXRlL1ZpZXdNb2RlbEV4aXN0ZWRcIjtcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSBcIi4vc2VhcmNoL3NlYXJjaFwiO1xyXG4vLyBAcm91dGVyb290XHJcbmV4cG9ydCBjbGFzcyBBcHAgZXh0ZW5kcyBWaWV3TW9kZWxFeGlzdGVkIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5ub3dZZWFyID0gKG5ldyBEYXRlKCkpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgdGhpcy5idG5zID0gW107XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSGVhZGVyKCk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2ggPSBuZXcgU2VhcmNoKCk7XHJcbiAgICAgICAgdGhpcy5idG5zLnB1c2goLi4uW1xyXG4gICAgICAgICAgICBuZXcgQ2F0ZWdvcnlCdXR0b24oXCLQotC10LzQvdGL0LlcIiksXHJcbiAgICAgICAgICAgIG5ldyBDYXRlZ29yeUJ1dHRvbihcItCc0L7Qu9C+0YfQvdGL0LlcIiksXHJcbiAgICAgICAgICAgIG5ldyBDYXRlZ29yeUJ1dHRvbihcItCR0LXQu9GL0LlcIiksXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIuc2hvdygpO1xyXG4gICAgfVxyXG4gICAgdmlldygpIHtcclxuICAgICAgICByZXR1cm4gQXBwVmlldztcclxuICAgIH1cclxuICAgIGRvY3VtZW50VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdDaG9jb2xhdGl1bSB8IEhvbWUnO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEFwcFZpZXcgZXh0ZW5kcyBWaWV3RE9NIHtcclxuICAgIERPTSgpIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZWQoW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZTFcIildKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBSb3V0ZUNvbnRleHQge1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJvdXRlQ29udGV4dC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2NvbnRyYWN0cy9Sb3V0ZUNvbnRleHQuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IElDb21tdW5pY2F0b3IgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9JQ29tbXVuaWNhdG9yXCI7XHJcbmltcG9ydCB7IENvbW11bmljYXRpb25FeGNlcHRpb24gfSBmcm9tIFwiLi4vLi4vLi4vZXhjZXB0aW9ucy9iYWNrZW5kL0NvbW11bmljYXRpb25FeGNlcHRpb25cIjtcclxuZXhwb3J0IGNsYXNzIEFqYXhDb21tdW5pY2F0b3IgZXh0ZW5kcyBJQ29tbXVuaWNhdG9yIHtcclxuICAgIHNlbmQoZGF0YSkge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGUoZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbm5lclByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbnRlbnRUeXBlKGRhdGEsIHhocik7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9wZW4oZGF0YS5tZXRob2QsIGRhdGEudXJsLCBkYXRhLmFzeW5jLCBkYXRhLnVzZXIsIGRhdGEucGFzdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoYCR7eGhyLnN0YXR1c306ICR7eGhyLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoYCR7eGhyLnN0YXR1c306ICR7eGhyLnN0YXR1c1RleHR9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBDb21tdW5pY2F0aW9uRXhjZXB0aW9uKGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZWNpdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJQcm9taXNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdmFsaWRhdGUoZGF0YSkge1xyXG4gICAgICAgIGlmICghZGF0YS5tZXRob2QgfHwgIWRhdGEudXJsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBDb21tdW5pY2F0aW9uRXhjZXB0aW9uKFwiWEhSIHJlcXVlc3QgbXVzdCBkZWNsYXJlIG1ldGhvZCBhbmQgdXJsIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRDb250ZW50VHlwZShvcHQsIHhocikge1xyXG4gICAgICAgIGlmIChvcHQubWV0aG9kICE9IFwiR0VUXCIpIHtcclxuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1BamF4Q29tbXVuaWNhdG9yLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvY29uY3JldGUvYWpheC9BamF4Q29tbXVuaWNhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFeGNlcHRpb24gfSBmcm9tIFwiLi4vRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJbnN0YW50aWF0ZWRFeGNlcHRpb24gZXh0ZW5kcyBFeGNlcHRpb24ge1xyXG4gICAgY29uc3RydWN0b3IobXNnKSB7XHJcbiAgICAgICAgc3VwZXIoXCJJbnN0YW50aWF0ZWRFeGNlcHRpb246IGluc3RhbmNlIGFscmVhZHkgaW5zdGFudGlhdGVkLCB5b3UgY2FuIGNoYW5nZSBpbnN0YW5jZSBvcHRpb25zIG9ubHkgYXQgYXBwbGljYXRpb24gc3RhcnRcXG5cIiArIG1zZyk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW5zdGFudGlhdGVkRXhjZXB0aW9uLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2V4Y2VwdGlvbnMvcnVudGltZS9JbnN0YW50aWF0ZWRFeGNlcHRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IElIaXN0b3J5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUhpc3RvcnlcIjtcclxuaW1wb3J0IHsgSVJvdXRlciB9IGZyb20gXCIuLi8uLi9yb3V0aW5nL2ludGVyZmFjZXMvSVJvdXRlclwiO1xyXG5pbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmV4cG9ydCBjbGFzcyBIdG1sNUhpc3RvcnlBUEkgZXh0ZW5kcyBJSGlzdG9yeSB7XHJcbiAgICBleHRlbmQoaGl0ZW0pIHtcclxuICAgICAgICBpZiAod2luZG93Lmhpc3Rvcnkuc3RhdGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoaGl0ZW0uc3RhdGUsIGhpdGVtLnRpdGxlLCBoaXRlbS51cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKGhpdGVtLnN0YXRlLCBoaXRlbS50aXRsZSwgaGl0ZW0udXJsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXN0b3JlKHN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIHZhciByb3V0ZXIgPSB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlKElSb3V0ZXIpO1xyXG4gICAgICAgICAgICB2YXIgcm91dGUgPSByb3V0ZXIucm91dGVzLmZpbHRlcih4ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyB4LmN0b3IoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5jb25zdHJ1Y3Rvci5uYW1lID09IHN0YXRlLmN0b3I7XHJcbiAgICAgICAgICAgIH0pWzBdO1xyXG4gICAgICAgICAgICByb3V0ZS5zZWxlY3RvciA9IHN0YXRlLnNlbGVjdG9yO1xyXG4gICAgICAgICAgICByb3V0ZS5yZXN0b3JlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcm91dGVyLnJvdXRlKHJvdXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaWYgKHdpbmRvdykge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKGV2ZW50U3RhdGUpID0+IHtcclxuICAgICAgICBHZXJhbml1bUFwcC5yZXNvbHZlKElIaXN0b3J5KS5yZXN0b3JlKGV2ZW50U3RhdGUuc3RhdGUpO1xyXG4gICAgfSk7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SHRtbDVIaXN0b3J5QVBJLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2hpc3RvcnkvY29uY3JldGUvSHRtbDVIaXN0b3J5QVBJLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSUxvZ2dlclwiO1xyXG5leHBvcnQgY2xhc3MgQ29uc29sZUxvZ2dlciBleHRlbmRzIElMb2dnZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLmxvZ09mbG9nID0gXCJcIjtcclxuICAgIH1cclxuICAgIGxvZyhlcnIpIHtcclxuICAgICAgICB0aGlzLmxvZ09mbG9nICs9IGVyci5tZXNzYWdlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQXBwbGljYXRpb24gZXJyb3I6IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ09mbG9nO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbnNvbGVMb2dnZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vZXhjZXB0aW9ucy9sb2dnaW5nL2NvbmNyZXRlL0NvbnNvbGVMb2dnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFN0YXRlZnVsbFJlcXVlc3QgfSBmcm9tIFwiLi4vLi4vYWJzdHJhY3QvU3RhdGVmdWxsUmVxdWVzdFwiO1xyXG5leHBvcnQgY2xhc3MgQWpheFJlcXVlc3QgZXh0ZW5kcyBTdGF0ZWZ1bGxSZXF1ZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGVycm9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNhdGNoUHJvbWlzZSA9IGVycm9yO1xyXG4gICAgfVxyXG4gICAgY2F0Y2hQcm9taXNlKGVycikgeyB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWpheFJlcXVlc3QuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmFja2VuZC9jb25jcmV0ZS9hamF4L0FqYXhSZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBFdmVudFJlcXVlc3QgfSBmcm9tIFwiLi9FdmVudFJlcXVlc3RcIjtcclxuaW1wb3J0IHsgSVN0YXRlTWFuYWdlciB9IGZyb20gXCIuLi8uLi9zdGF0ZXMvaW50ZXJmYWNlcy9JU3RhdGVNYW5hZ2VyXCI7XHJcbmV4cG9ydCBjbGFzcyBTdGF0ZWZ1bGxSZXF1ZXN0IGV4dGVuZHMgRXZlbnRSZXF1ZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5iaW5kID0gKHN1cGVyX3NlbmQpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGVzID0gdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZShJU3RhdGVNYW5hZ2VyKS5hbGwoKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlcyAhPSBudWxsIHx8IHN0YXRlcy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXRlcy5maWx0ZXIoeCA9PiB7IGlmICh4LnN5bmNocm9uaXplcilcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7IH0pXHJcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChzdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdXBlcl9zZW5kKHN0YXRlLnN5bmNocm9uaXplcilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbih4ID0+IHsgc3RhdGUub2J0YWluKHgpOyB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdGF0ZWZ1bGxSZXF1ZXN0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvYWJzdHJhY3QvU3RhdGVmdWxsUmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gXCIuL1JlcXVlc3RcIjtcclxuaW1wb3J0IHsgSUNvbW11bmljYXRvciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lDb21tdW5pY2F0b3JcIjtcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvbkV4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2JhY2tlbmQvQ29tbXVuaWNhdGlvbkV4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgRXZlbnRSZXF1ZXN0IGV4dGVuZHMgUmVxdWVzdCB7XHJcbiAgICAvKipcclxuICAgICAqIHNlbmQgcmVxdWVzdCB0byBzZXJ2ZXJcclxuICAgICAqIEBwYXJhbSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gc3RhdGVsZXNzIHlvdXIgcmVxdWVzdCBub3QgcmFpc2Ugc3RhdGUtc3luYyBldmVudFxyXG4gICAgICovXHJcbiAgICBzZW5kKGRhdGEsIHN0YXRlbGVzcyA9IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW11bmljYXRvciA9IHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSUNvbW11bmljYXRvcik7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBjb21tdW5pY2F0b3Iuc2VuZChkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gY29tbXVuaWNhdG9yLnJlY2l2ZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzdGF0ZWxlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhaXNlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGNoKG5ldyBDb21tdW5pY2F0aW9uRXhjZXB0aW9uKGV4KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJhaXNlKCkge1xyXG4gICAgICAgIHN1cGVyLnJhaXNlKHN1cGVyLnNlbmQpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUV2ZW50UmVxdWVzdC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iYWNrZW5kL2Fic3RyYWN0L0V2ZW50UmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgSUNvbW11bmljYXRvciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lDb21tdW5pY2F0b3JcIjtcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi4vLi4vYmVoYXZpb3JzL2V2ZW50cy9hYnN0cmFjdC9FdmVudFwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvbG9nZ2luZy9pbnRlcmZhY2VzL0lMb2dnZXJcIjtcclxuaW1wb3J0IHsgQ29tbXVuaWNhdGlvbkV4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi9leGNlcHRpb25zL2JhY2tlbmQvQ29tbXVuaWNhdGlvbkV4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgUmVxdWVzdCBleHRlbmRzIEV2ZW50IHtcclxuICAgIHNlbmQoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbW11bmljYXRvciA9IHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSUNvbW11bmljYXRvcik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBjb21tdW5pY2F0b3Iuc2VuZChkYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21tdW5pY2F0b3IucmVjaXZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGNoKG5ldyBDb21tdW5pY2F0aW9uRXhjZXB0aW9uKGV4KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNhdGNoKGVycikge1xyXG4gICAgICAgIGlmICh0aGlzLmNhdGNoUHJvbWlzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhdGNoUHJvbWlzZShlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsb2dnZXIgPSB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlKElMb2dnZXIpO1xyXG4gICAgICAgIGlmIChsb2dnZXIpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmxvZyhlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZXF1ZXN0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JhY2tlbmQvYWJzdHJhY3QvUmVxdWVzdC5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0L1JvdXRlclwiO1xyXG5pbXBvcnQgeyBIaXN0b3J5SXRlbSB9IGZyb20gXCIuLi8uLi9oaXN0b3J5L2NvbnRyYWN0cy9IaXN0b3J5SXRlbVwiO1xyXG5pbXBvcnQgeyBJSGlzdG9yeSB9IGZyb20gXCIuLi8uLi9oaXN0b3J5L2ludGVyZmFjZXMvSUhpc3RvcnlcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5leHBvcnQgY2xhc3MgQmFzaWNSb3V0ZXIgZXh0ZW5kcyBSb3V0ZXIge1xyXG4gICAgQ3VycmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudDtcclxuICAgIH1cclxuICAgIHJvdXRlYXJlYSgpIHtcclxuICAgICAgICByZXR1cm4gJy5hcHAnO1xyXG4gICAgfVxyXG4gICAgcm91dGUoY3VycmVudCkge1xyXG4gICAgICAgIGlmIChjdXJyZW50ID09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgc2VsZWN0b3IgPSBjdXJyZW50LnJlc3RvcmUgPyBjdXJyZW50LnNlbGVjdG9yIDogdGhpcy5yb3V0ZWFyZWEoKTtcclxuICAgICAgICB2YXIgcm91dGVkID0gR2VyYW5pdW1BcHAuaW5zdGFudGlhdGUoY3VycmVudC5jdG9yLCBjdXJyZW50LnBhcmFtcyk7XHJcbiAgICAgICAgdmFyIGV4ZWN1dGluZyA9IGN1cnJlbnQuZXhlY3V0YWJsZSA/IGN1cnJlbnQuZXhlY3V0YWJsZSA6ICd0b1N0cmluZyc7XHJcbiAgICAgICAgaWYgKCFjdXJyZW50LnJlc3RvcmUpIHtcclxuICAgICAgICAgICAgdmFyIF9oaXN0b3J5ID0gbmV3IEhpc3RvcnlJdGVtKCk7XHJcbiAgICAgICAgICAgIF9oaXN0b3J5LnVybCA9IGN1cnJlbnQudXJsO1xyXG4gICAgICAgICAgICBfaGlzdG9yeS50aXRsZSA9IGRvY3VtZW50LnRpdGxlO1xyXG4gICAgICAgICAgICBfaGlzdG9yeS5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgIGN0b3I6IGN1cnJlbnQuY3Rvci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmUoSUhpc3RvcnkpLmV4dGVuZChfaGlzdG9yeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJvdXRlZFtcIiNyb3V0ZWRcIl0gPSB7XHJcbiAgICAgICAgICAgIHBhcmFtczogY3VycmVudC5wYXJhbXMsXHJcbiAgICAgICAgICAgIHJlc3RvcmU6IGN1cnJlbnQucmVzdG9yZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcm91dGVkW2V4ZWN1dGluZ10oc2VsZWN0b3IpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2ljUm91dGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvY29uY3JldGUvQmFzaWNSb3V0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IElSb3V0ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JUm91dGVyXCI7XHJcbmltcG9ydCB7IFJvdXRlTWF0Y2ggfSBmcm9tIFwiLi4vY29udHJhY3RzL1JvdXRlTWF0Y2hcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tIFwiLi4vY29uY3JldGUvZGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgeyBBcnJheUhlbHBlciB9IGZyb20gXCIuLi8uLi9kZWNsYXJlL2FycmF5XCI7XHJcbmV4cG9ydCBjbGFzcyBSb3V0ZXIgZXh0ZW5kcyBJUm91dGVyIHtcclxuICAgIGdldCByb3V0ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHJvdXRlcygpO1xyXG4gICAgfVxyXG4gICAgcm91dGVCeVVybCh1cmwpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXRjaCh1cmwpO1xyXG4gICAgfVxyXG4gICAgbWF0Y2godXJsLCBwYXJhbXMpIHtcclxuICAgICAgICBpZiAodGhpcy5yb3V0ZXMubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIHZhciBjdG9yQ29sbGVjdGlvbiA9IHRoaXMucm91dGVzLmZpbHRlcih4ID0+IHgudXJsID09IHVybCk7XHJcbiAgICAgICAgaWYgKHVybCA9PSAnLycgJiYgY3RvckNvbGxlY3Rpb24ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdmFyIHNob3J0ZXN0Um91dGUgPSB0aGlzLnJvdXRlcy5yZWR1Y2UoKGEsIGIpID0+IGEudXJsLmxlbmd0aCA8IGIudXJsLmxlbmd0aCA/IGEgOiBiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNob3J0ZXN0Um91dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdG9yQ29sbGVjdGlvbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgc2VnbWVudHMgPSBBcnJheUhlbHBlci5yZW1vdmUodXJsLnNwbGl0KCcvJyksICgnJykpO1xyXG4gICAgICAgICAgICB2YXIgY3V0U2VnbWVudHMgPSBzZWdtZW50cy5maWx0ZXIoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpICE9IHNlZ21lbnRzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgcm91dGUgPSB0aGlzLm1hdGNoKCcvJyArIGN1dFNlZ21lbnRzLmpvaW4oJy8nKSk7XHJcbiAgICAgICAgICAgIGlmICghcm91dGUucGFyYW1zKVxyXG4gICAgICAgICAgICAgICAgcm91dGUucGFyYW1zID0gW107XHJcbiAgICAgICAgICAgIHJvdXRlLnBhcmFtcy5wdXNoKHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbWF0Y2ggPSBuZXcgUm91dGVNYXRjaCgpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWF0Y2gsIGN0b3JDb2xsZWN0aW9uWzBdKTtcclxuICAgICAgICBtYXRjaC5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgfVxyXG59XHJcbmlmICh3aW5kb3cpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgICAgIHZhciByb3V0ZXIgPSBHZXJhbml1bUFwcC5yZXNvbHZlKElSb3V0ZXIpO1xyXG4gICAgICAgIHZhciByb3V0ZSA9IHJvdXRlci5yb3V0ZUJ5VXJsKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XHJcbiAgICAgICAgcm91dGVyLnJvdXRlKHJvdXRlKTtcclxuICAgIH0pO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJvdXRlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yb3V0aW5nL2Fic3RyYWN0L1JvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgUm91dGUgfSBmcm9tIFwiLi9Sb3V0ZVwiO1xyXG5leHBvcnQgY2xhc3MgUm91dGVNYXRjaCBleHRlbmRzIFJvdXRlIHtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Sb3V0ZU1hdGNoLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JvdXRpbmcvY29udHJhY3RzL1JvdXRlTWF0Y2guanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEJhc2VTdG9yYWdlIH0gZnJvbSBcIi4uL2Fic3RyYWN0L0Jhc2VTdG9yYWdlXCI7XHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2UgZXh0ZW5kcyBCYXNlU3RvcmFnZSB7XHJcbiAgICB3cml0ZShkYXRhLCBzdG9yYWdlTmFtZSkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHN0b3JhZ2VOYW1lLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICB9XHJcbiAgICByZWFkKHN0b3JhZ2VOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc3RvcmFnZU5hbWUpKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Mb2NhbFN0b3JhZ2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vc3RvcmFnZS9jb25jcmV0ZS9Mb2NhbFN0b3JhZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IElTdG9yYWdlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvSVN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgQXJyYXlIZWxwZXIgfSBmcm9tIFwiLi4vLi4vZGVjbGFyZS9hcnJheVwiO1xyXG5leHBvcnQgY2xhc3MgQmFzZVN0b3JhZ2UgZXh0ZW5kcyBJU3RvcmFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2VOYW1lID0gbmFtZTtcclxuICAgIH1cclxuICAgIGFkZChtb2RlbCkge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbi5wdXNoKG1vZGVsKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlbW92ZShpZCkge1xyXG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuc2VhcmNoRm9yKGlkKTtcclxuICAgICAgICBpZiAobW9kZWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlKEFycmF5SGVscGVyLnJlbW92ZSh0aGlzLmNvbGxlY3Rpb24sIG1vZGVsKSwgdGhpcy5zdG9yYWdlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZ2V0KGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoRm9yKGlkKTtcclxuICAgIH1cclxuICAgIGFsbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkKHRoaXMuc3RvcmFnZU5hbWUpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbGxlY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJlYWQodGhpcy5zdG9yYWdlTmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZShuZXcgQXJyYXkoKSwgdGhpcy5zdG9yYWdlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWQodGhpcy5zdG9yYWdlTmFtZSk7XHJcbiAgICB9XHJcbiAgICBzZWFyY2hGb3IoaWQpIHtcclxuICAgICAgICB2YXIgZW51bWVyYWJsZSA9IHRoaXMuY29sbGVjdGlvblxyXG4gICAgICAgICAgICAuZmlsdGVyKHggPT4geC5pZCA9PSBpZCk7XHJcbiAgICAgICAgaWYgKGVudW1lcmFibGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZW51bWVyYWJsZVswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmFzZVN0b3JhZ2UuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vc3RvcmFnZS9hYnN0cmFjdC9CYXNlU3RvcmFnZS5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgSVRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSVRlbXBsYXRlRW5naW5lXCI7XHJcbmV4cG9ydCBjbGFzcyBDbGllbnRUZW1wbGF0ZUVuZ2luZSBleHRlbmRzIElUZW1wbGF0ZUVuZ2luZSB7XHJcbiAgICBwYXJzZSh0ZW1wbGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZSh0ZW1wbGF0ZS50ZW1wbGF0ZSkpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsaWVudFRlbXBsYXRlRW5naW5lLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3RlbXBsYXRpbmcvY29uY3JldGUvbXVzdGFjaGUvQ2xpZW50VGVtcGxhdGVFbmdpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IElWYWxpZGF0aW5nUmVwb3J0ZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JVmFsaWRhdGF0aW5nUmVwb3J0ZXJcIjtcclxuZXhwb3J0IGNsYXNzIE5vdGlmeVZhbGlkYXRpbmdSZXBvcnRlciBleHRlbmRzIElWYWxpZGF0aW5nUmVwb3J0ZXIge1xyXG4gICAgcmVwb3J0KERPTSwgdmFsaWRhdGluZ1Jlc3VsdCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRpbmdSZXN1bHQuZXJyb3JzLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdWQUxMSURBVElOR19FUlIgWycgKyB4Lm5hbWUgKyAnXTonICsgeC5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Tm90aWZ5VmFsaWRhdGluZ1JlcG9ydGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZhbGlkYXRpbmcvcmVwb3J0ZXIvY29uY3JldGUvTm90aWZ5VmFsaWRhdGluZ1JlcG9ydGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBWaWV3QmluZGVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0L1ZpZXdCaW5kZXJcIjtcclxuZXhwb3J0IGNsYXNzIEJhc2VWaWV3QmluZGVyIGV4dGVuZHMgVmlld0JpbmRlciB7XHJcbiAgICBiaW5kaW5nKERPTSwgZGF0YSwgYmluZGluZykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5nLmJpbmQoRE9NLCBkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlVmlld0JpbmRlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3YmluZGluZy9jb25jcmV0ZS9CYXNlVmlld0JpbmRlci5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgSVZpZXdCaW5kZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JVmlld0JpbmRlclwiO1xyXG5pbXBvcnQgeyBQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi9yZWZsZWN0aW9uL1Byb3BlcnR5XCI7XHJcbmltcG9ydCB7IElWYWxpZGF0aW5nUmVwb3J0ZXIgfSBmcm9tIFwiLi4vLi4vdmFsaWRhdGluZy9yZXBvcnRlci9pbnRlcmZhY2VzL0lWYWxpZGF0YXRpbmdSZXBvcnRlclwiO1xyXG5pbXBvcnQgeyBBcnJheUhlbHBlciB9IGZyb20gXCIuLi8uLi9kZWNsYXJlL2FycmF5XCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuZXhwb3J0IGNsYXNzIFZpZXdCaW5kZXIgZXh0ZW5kcyBJVmlld0JpbmRlciB7XHJcbiAgICBiaW5kKGNvbnRleHQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCBiaW5kZWRET00gPSB5aWVsZCB0aGlzLmV4ZWMoY29udGV4dC52aWV3RE9NLCBjb250ZXh0LmJpbmRpbmdGbGFncyk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWQoYmluZGVkRE9NLCBjb250ZXh0LnZpZXdET00uZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBiaW5kZWRET007XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB2YWxpZChET00sIGRhdGEpIHtcclxuICAgICAgICB2YXIgdm0gPSBkYXRhO1xyXG4gICAgICAgIGlmICh2bS52YWxpZGF0b3JzKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWxpZGF0ZWRQcm9wZXJ0aWVzID0gQXJyYXlIZWxwZXIuZ3JvdXBCeSh2bS52YWxpZGF0b3JzLCAndmFsaWRhdGVkUHJvcGVydHlOYW1lJyk7XHJcbiAgICAgICAgICAgIHZhbGlkYXRlZFByb3BlcnRpZXMuZm9yRWFjaCh2YWxpZGF0b3JzID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWxpZFByb3AgPSB2YWxpZGF0b3JzWzBdLnZhbGlkYXRlZFByb3BlcnR5TmFtZTtcclxuICAgICAgICAgICAgICAgIFByb3BlcnR5LnJlZGVmaW5lKGRhdGEsIHZhbGlkUHJvcCwgKHZhbCkgPT4geyByZXR1cm4gdmFsOyB9LCBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25GYXVsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdG9ycy5maWx0ZXIoeCA9PiB4LnZhbGlkYXRlZFByb3BlcnR5TmFtZSA9PT0gdmFsaWRQcm9wKS5mb3JFYWNoKHZhbGlkYXRvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uID0gdmFsaWRhdG9yLnZhbGlkYXRlKHZhbCwgdGhpcy5jbG9uZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZGF0aW9uLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25GYXVsdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXJhbml1bUFwcC5yZXNvbHZlKElWYWxpZGF0aW5nUmVwb3J0ZXIpLnJlcG9ydChET00sIHZhbGlkYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25GYXVsdCA/IHVuZGVmaW5lZCA6IHZhbDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleGVjKFZpZXdET00sIGJpbmRpbmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgbGV0IGRvbSA9IHlpZWxkIFZpZXdET00uRE9NKCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmluZGluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuYmluZGluZyhkb20sIFZpZXdET00uZGF0YSwgYmluZGluZ3NbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkb207XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Vmlld0JpbmRlci5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3YmluZGluZy9hYnN0cmFjdC9WaWV3QmluZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBCYXNlQnlBdHRyaWJ1dGVCaW5kaW5nIH0gZnJvbSBcIi4vYmFzZS9CYXNlQnlBdHRyaWJ1dGVCaW5kaW5nXCI7XHJcbmltcG9ydCB7IFByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3JlZmxlY3Rpb24vUHJvcGVydHlcIjtcclxuZXhwb3J0IGNsYXNzIEJhc2VGaWVsZEJpbmRpbmcgZXh0ZW5kcyBCYXNlQnlBdHRyaWJ1dGVCaW5kaW5nIHtcclxuICAgIGdldCBhdHRyaWJ1dGUoKSB7IHJldHVybiAnZGF0YS1maWVsZCc7IH1cclxuICAgIGJpbmRpbmcoRE9NT2JqZWN0LCBtb2RlbCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IERPTU9iamVjdC5nZXRBdHRyaWJ1dGUodGhpcy5hdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICBQcm9wZXJ0eS5yZWRlZmluZShtb2RlbCwgdmFsdWUsICh2YWwpID0+IHZhbCwgKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IFwiI2V2ZW50OnNldFtcIiArIHZhbHVlICsgXCJdXCI7XHJcbiAgICAgICAgICAgIGlmIChtb2RlbFtldmVudF0pIHtcclxuICAgICAgICAgICAgICAgIG1vZGVsW2V2ZW50XS5iaW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIERPTU9iamVjdC5pbm5lckhUTUwgPSBtb2RlbFt2YWx1ZV07XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QmFzZUZpZWxkQmluZGluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9iaW5kaW5nL2NvbmNyZXRlL0Jhc2VGaWVsZEJpbmRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tIFwiLi4vYWJzdHJhY3QvQmluZGluZ1wiO1xyXG5pbXBvcnQgeyB0b0h0bWxBcnJheSwgbm9kZVRvQXJyYXkgfSBmcm9tIFwiLi4vLi4vZXh0ZW5zaW9ucy9IdG1sRWxlbWVudEV4dGVuc2lvbnNcIjtcclxuZXhwb3J0IGNsYXNzIEV2ZW50QmluZGluZyBleHRlbmRzIEJpbmRpbmcge1xyXG4gICAgZGV0ZWN0aW9uKERPTU9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5YWJsZU5vZGVzID0gdGhpcy5xdWVyeWFibGUoRE9NT2JqZWN0KTtcclxuICAgICAgICAgICAgY29uc3QgYWxsID0gcXVlcnlhYmxlTm9kZXMubWFwKG5vZGUgPT4gdG9IdG1sQXJyYXkobm9kZS5xdWVyeVNlbGVjdG9yQWxsKGV2ZW50U2VsZWN0b3JzLmpvaW4oKSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFsbC5yZWR1Y2UoKHAsIG4pID0+IHAuY29uY2F0KG4pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGJpbmRpbmcoRE9NT2JqZWN0LCBtb2RlbCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBub2RlVG9BcnJheShET01PYmplY3QuYXR0cmlidXRlcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IGF0dHJpYnV0ZXMuZmlsdGVyKGF0dHIgPT4gZXZlbnRzQXR0ci5pbmNsdWRlcyhhdHRyLm5hbWUpKTtcclxuICAgICAgICAgICAgdGhpcy5mdW5jQmluZGVkKGV2ZW50cywgbW9kZWwpLmZvckVhY2goYmluZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBET01PYmplY3QuYWRkRXZlbnRMaXN0ZW5lcihiaW5kLmV2ZW50LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluZC5mdW5jLmFwcGx5KG1vZGVsLCBhcmd1bWVudHMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaChldmVudCA9PiBET01PYmplY3QucmVtb3ZlQXR0cmlidXRlKGV2ZW50Lm5hbWUpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNsZWFyKERPTU9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IH0pO1xyXG4gICAgfVxyXG4gICAgcXVlcnlhYmxlKERPTU9iamVjdHMpIHtcclxuICAgICAgICBpZiAoIURPTU9iamVjdHMgfHwgRE9NT2JqZWN0cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IERPTU9iamVjdHNbMF0ucGFyZW50RWxlbWVudDtcclxuICAgICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbcGFyZW50XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBET01PYmplY3RzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmNCaW5kZWQoZXZlbnRzLCBtb2RlbCkge1xyXG4gICAgICAgIHJldHVybiBldmVudHMubWFwKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZnVuYzogbW9kZWxbZXZlbnQudmFsdWVdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSkuZmlsdGVyKGJpbmQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gISFiaW5kLmZ1bmMgJiYgdHlwZW9mIGJpbmQuZnVuYyA9PT0gJ2Z1bmN0aW9uJztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5jb25zdCBhbGxFdmVudHMgPSBbXHJcbiAgICBcImFib3J0XCIsXHJcbiAgICBcImFjdGl2YXRlXCIsXHJcbiAgICBcImJlZm9yZWFjdGl2YXRlXCIsXHJcbiAgICBcImJlZm9yZWNvcHlcIixcclxuICAgIFwiYmVmb3JlY3V0XCIsXHJcbiAgICBcImJlZm9yZWRlYWN0aXZhdGVcIixcclxuICAgIFwiYmVmb3JlcGFzdGVcIixcclxuICAgIFwiYmx1clwiLFxyXG4gICAgXCJjYW5wbGF5XCIsXHJcbiAgICBcImNhbnBsYXl0aHJvdWdoXCIsXHJcbiAgICBcImNoYW5nZVwiLFxyXG4gICAgXCJjbGlja1wiLFxyXG4gICAgXCJjb250ZXh0bWVudVwiLFxyXG4gICAgXCJjb3B5XCIsXHJcbiAgICBcImN1ZWNoYW5nZVwiLFxyXG4gICAgXCJjdXRcIixcclxuICAgIFwiZGJsY2xpY2tcIixcclxuICAgIFwiZGVhY3RpdmF0ZVwiLFxyXG4gICAgXCJkcmFnXCIsXHJcbiAgICBcImRyYWdlbmRcIixcclxuICAgIFwiZHJhZ2VudGVyXCIsXHJcbiAgICBcImRyYWdsZWF2ZVwiLFxyXG4gICAgXCJkcmFnb3ZlclwiLFxyXG4gICAgXCJkcmFnc3RhcnRcIixcclxuICAgIFwiZHJvcFwiLFxyXG4gICAgXCJkdXJhdGlvbmNoYW5nZVwiLFxyXG4gICAgXCJlbXB0aWVkXCIsXHJcbiAgICBcImVuZGVkXCIsXHJcbiAgICBcImVycm9yXCIsXHJcbiAgICBcImZvY3VzXCIsXHJcbiAgICBcImlucHV0XCIsXHJcbiAgICBcImludmFsaWRcIixcclxuICAgIFwia2V5ZG93blwiLFxyXG4gICAgXCJrZXlwcmVzc1wiLFxyXG4gICAgXCJrZXl1cFwiLFxyXG4gICAgXCJsb2FkXCIsXHJcbiAgICBcImxvYWRlZGRhdGFcIixcclxuICAgIFwibG9hZGVkbWV0YWRhdGFcIixcclxuICAgIFwibG9hZHN0YXJ0XCIsXHJcbiAgICBcIm1vdXNlZG93blwiLFxyXG4gICAgXCJtb3VzZWVudGVyXCIsXHJcbiAgICBcIm1vdXNlbGVhdmVcIixcclxuICAgIFwibW91c2Vtb3ZlXCIsXHJcbiAgICBcIm1vdXNlb3V0XCIsXHJcbiAgICBcIm1vdXNlb3ZlclwiLFxyXG4gICAgXCJtb3VzZXVwXCIsXHJcbiAgICBcIm1vdXNld2hlZWxcIixcclxuICAgIFwiTVNDb250ZW50Wm9vbVwiLFxyXG4gICAgXCJNU01hbmlwdWxhdGlvblN0YXRlQ2hhbmdlZFwiLFxyXG4gICAgXCJwYXN0ZVwiLFxyXG4gICAgXCJwYXVzZVwiLFxyXG4gICAgXCJwbGF5XCIsXHJcbiAgICBcInBsYXlpbmdcIixcclxuICAgIFwicHJvZ3Jlc3NcIixcclxuICAgIFwicmF0ZWNoYW5nZVwiLFxyXG4gICAgXCJyZXNldFwiLFxyXG4gICAgXCJzY3JvbGxcIixcclxuICAgIFwic2Vla2VkXCIsXHJcbiAgICBcInNlZWtpbmdcIixcclxuICAgIFwic2VsZWN0XCIsXHJcbiAgICBcInNlbGVjdHN0YXJ0XCIsXHJcbiAgICBcInN0YWxsZWRcIixcclxuICAgIFwic3VibWl0XCIsXHJcbiAgICBcInN1c3BlbmRcIixcclxuICAgIFwidGltZXVwZGF0ZVwiLFxyXG4gICAgXCJ2b2x1bWVjaGFuZ2VcIixcclxuICAgIFwid2FpdGluZ1wiLFxyXG4gICAgXCJhcmlhcmVxdWVzdFwiLFxyXG4gICAgXCJjb21tYW5kXCIsXHJcbiAgICBcImdvdHBvaW50ZXJjYXB0dXJlXCIsXHJcbiAgICBcImxvc3Rwb2ludGVyY2FwdHVyZVwiLFxyXG4gICAgXCJNU0dlc3R1cmVDaGFuZ2VcIixcclxuICAgIFwiTVNHZXN0dXJlRG91YmxlVGFwXCIsXHJcbiAgICBcIk1TR2VzdHVyZUVuZFwiLFxyXG4gICAgXCJNU0dlc3R1cmVIb2xkXCIsXHJcbiAgICBcIk1TR2VzdHVyZVN0YXJ0XCIsXHJcbiAgICBcIk1TR2VzdHVyZVRhcFwiLFxyXG4gICAgXCJNU0dvdFBvaW50ZXJDYXB0dXJlXCIsXHJcbiAgICBcIk1TSW5lcnRpYVN0YXJ0XCIsXHJcbiAgICBcIk1TTG9zdFBvaW50ZXJDYXB0dXJlXCIsXHJcbiAgICBcIk1TUG9pbnRlckNhbmNlbFwiLFxyXG4gICAgXCJNU1BvaW50ZXJEb3duXCIsXHJcbiAgICBcIk1TUG9pbnRlckVudGVyXCIsXHJcbiAgICBcIk1TUG9pbnRlckxlYXZlXCIsXHJcbiAgICBcIk1TUG9pbnRlck1vdmVcIixcclxuICAgIFwiTVNQb2ludGVyT3V0XCIsXHJcbiAgICBcIk1TUG9pbnRlck92ZXJcIixcclxuICAgIFwiTVNQb2ludGVyVXBcIixcclxuICAgIFwidG91Y2hjYW5jZWxcIixcclxuICAgIFwidG91Y2hlbmRcIixcclxuICAgIFwidG91Y2htb3ZlXCIsXHJcbiAgICBcInRvdWNoc3RhcnRcIixcclxuICAgIFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLFxyXG4gICAgXCJ3ZWJraXRmdWxsc2NyZWVuZXJyb3JcIixcclxuICAgIFwicG9pbnRlcmNhbmNlbFwiLFxyXG4gICAgXCJwb2ludGVyZG93blwiLFxyXG4gICAgXCJwb2ludGVyZW50ZXJcIixcclxuICAgIFwicG9pbnRlcmxlYXZlXCIsXHJcbiAgICBcInBvaW50ZXJtb3ZlXCIsXHJcbiAgICBcInBvaW50ZXJvdXRcIixcclxuICAgIFwicG9pbnRlcm92ZXJcIixcclxuICAgIFwicG9pbnRlcnVwXCIsXHJcbiAgICBcIndoZWVsXCJcclxuXTtcclxuY29uc3QgZXZlbnRzQXR0ciA9IGFsbEV2ZW50cy5tYXAoZXZlbnROYW1lID0+IFwib25cIiArIGV2ZW50TmFtZSk7XHJcbmNvbnN0IGV2ZW50U2VsZWN0b3JzID0gYWxsRXZlbnRzLm1hcChldmVudE5hbWUgPT4gXCJbb25cIiArIGV2ZW50TmFtZSArIFwiXVwiKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXZlbnRCaW5kaW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvRXZlbnRCaW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBCYXNlQmluZGluZyB9IGZyb20gXCIuL2Jhc2UvQmFzZUJpbmRpbmdcIjtcclxuaW1wb3J0IHsgUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vcmVmbGVjdGlvbi9Qcm9wZXJ0eVwiO1xyXG5leHBvcnQgY2xhc3MgQmFzZUlucHV0QmluZGluZyBleHRlbmRzIEJhc2VCaW5kaW5nIHtcclxuICAgIGdldCBhdHRyaWJ1dGUoKSB7IHJldHVybiAnaW5wdXQnOyB9XHJcbiAgICBiaW5kaW5nKERPTU9iamVjdCwgbW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBET01PYmplY3QuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICAgICAgICAgIFByb3BlcnR5LnJlZGVmaW5lKG1vZGVsLCB2YWx1ZSwgKHZhbCkgPT4gdmFsLCAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBET01PYmplY3QuaW5uZXJIVE1MID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IFwiI2V2ZW50OnNldFtcIiArIHZhbHVlICsgXCJdXCI7XHJcbiAgICAgICAgICAgIGlmIChtb2RlbFtldmVudF0pIHtcclxuICAgICAgICAgICAgICAgIG1vZGVsW2V2ZW50XS5iaW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIERPTU9iamVjdC5ub2RlVmFsdWUgPSBtb2RlbFt2YWx1ZV07XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIERPTU9iamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kZWxbdmFsdWVdID0gRE9NT2JqZWN0Lm5vZGVWYWx1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkgeyB9KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlSW5wdXRCaW5kaW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvQmFzZUlucHV0QmluZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgQmFzZUJ5QXR0cmlidXRlQmluZGluZyB9IGZyb20gXCIuL2Jhc2UvQmFzZUJ5QXR0cmlidXRlQmluZGluZ1wiO1xyXG5pbXBvcnQgeyBJQmluZGluZyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lCaW5kaW5nXCI7XHJcbmltcG9ydCB7IElWaWV3RW5naW5lIH0gZnJvbSBcIi4uLy4uL3ZpZXdlbmdpbmUvaW50ZXJmYWNlcy9JVmlld0VuZ2luZVwiO1xyXG5pbXBvcnQgeyBCaW5kQ29udGV4dCB9IGZyb20gXCIuLi8uLi92aWV3YmluZGluZy9jb250cmFjdHMvQmluZENvbnRleHRcIjtcclxuaW1wb3J0IHsgSVZpZXdCaW5kZXIgfSBmcm9tIFwiLi4vLi4vdmlld2JpbmRpbmcvaW50ZXJmYWNlcy9JVmlld0JpbmRlclwiO1xyXG5pbXBvcnQgeyBTdHJpbmdIZWxwZXIgfSBmcm9tIFwiLi4vLi4vZGVjbGFyZS9zdHJpbmdcIjtcclxuZXhwb3J0IGNsYXNzIEJhc2VDb2xsZWN0aW9uQmluZGluZyBleHRlbmRzIEJhc2VCeUF0dHJpYnV0ZUJpbmRpbmcge1xyXG4gICAgZ2V0IGF0dHJpYnV0ZSgpIHsgcmV0dXJuICdkYXRhLW11bHRpcGxlJzsgfVxyXG4gICAgYmluZGluZyhET01PYmplY3QsIG1vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBtb2RlbFtET01PYmplY3QuZ2V0QXR0cmlidXRlKHRoaXMuYXR0cmlidXRlKV07XHJcbiAgICAgICAgICAgIERPTU9iamVjdC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5hdHRyaWJ1dGUpO1xyXG4gICAgICAgICAgICBjb25zdCBET01Db2xsZWN0aW9uID0gbmV3IEhUTUxFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uID09IHVuZGVmaW5lZCB8fCBjb2xsZWN0aW9uLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBET01PYmplY3QucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHRwbCA9IFN0cmluZ0hlbHBlci5yZXBsYWNlQWxsKFN0cmluZ0hlbHBlci5yZXBsYWNlQWxsKERPTU9iamVjdC5vdXRlckhUTUwsICdcXFxcW1xcXFxbJywgJ3t7JyksICdcXFxcXVxcXFxdJywgJ319Jyk7XHJcbiAgICAgICAgICAgIGxldCBiaW5kaW5ncyA9IHRoaXNbXCJgY29udGFpbmVyXCJdLnJlc29sdmVBbGwoSUJpbmRpbmcpLmZpbHRlcih4ID0+IHguY29uc3RydWN0b3IubmFtZSAhPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obW9kZWwsIGNvbGxlY3Rpb25baV0pO1xyXG4gICAgICAgICAgICAgICAgbW9kZWwudmlldyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCBfdmlldyA9IHlpZWxkIElWaWV3RW5naW5lLlZpZXdFbmdpbmVWaWV3KG1vZGVsLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3R4ID0gbmV3IEJpbmRDb250ZXh0KF92aWV3LCBiaW5kaW5ncyk7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlKElWaWV3QmluZGVyKS5iaW5kKGN0eCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb20gPSB5aWVsZCBfdmlldy5ET00oKTtcclxuICAgICAgICAgICAgICAgIGRvbS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIERPTUNvbGxlY3Rpb24uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBET01PYmplY3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoRE9NQ29sbGVjdGlvbiwgRE9NT2JqZWN0KTtcclxuICAgICAgICAgICAgRE9NT2JqZWN0ID0gRE9NQ29sbGVjdGlvbjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1CYXNlQ29sbGVjdGlvbkJpbmRpbmcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9jb25jcmV0ZS9CYXNlQ29sbGVjdGlvbkJpbmRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBUZW1wbGF0ZSB7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGVtcGxhdGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdGVtcGxhdGluZy9jb250cmFjdHMvVGVtcGxhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBTdHJpbmdIZWxwZXIge1xyXG4gICAgc3RhdGljIHJlcGxhY2VBbGwoc3RyLCBzZWFyY2gsIHJlcGxhY2VtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoc2VhcmNoLCAnZycpLCByZXBsYWNlbWVudCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmFuZG9tKGxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjaGFycyA9ICdhYmNkZWZnaGlqa2wwMTIzNDU2Nzg5bW5vcHFyc3R1dnd4eXonO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSAnJztcclxuICAgICAgICBmb3IgKHZhciBpID0gbGVuZ3RoOyBpID4gMDsgLS1pKVxyXG4gICAgICAgICAgICByZXN1bHQgKz0gY2hhcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKV07XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHN0YXRpYyByYW5kb21pemUoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ciArIHRoaXMucmFuZG9tKDYpO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0cmluZy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9kZWNsYXJlL3N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgSVZpZXdFbmdpbmUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JVmlld0VuZ2luZVwiO1xyXG5pbXBvcnQgeyBFeGVjdXRlQ29udGV4dCB9IGZyb20gXCIuLi9jb250cmFjdHMvRXhlY3V0ZUNvbnRleHRcIjtcclxuaW1wb3J0IHsgQmluZENvbnRleHQgfSBmcm9tIFwiLi4vLi4vdmlld2JpbmRpbmcvY29udHJhY3RzL0JpbmRDb250ZXh0XCI7XHJcbmltcG9ydCB7IElWaWV3QmluZGVyIH0gZnJvbSBcIi4uLy4uL3ZpZXdiaW5kaW5nL2ludGVyZmFjZXMvSVZpZXdCaW5kZXJcIjtcclxuZXhwb3J0IGNsYXNzIEJhc2VWaWV3RW5naW5lIHtcclxuICAgIGV4ZWN1dGUoY29udGV4dCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB2aWV3ID0geWllbGQgSVZpZXdFbmdpbmUuVmlld0VuZ2luZVZpZXcoY29udGV4dC5pVmlld2VkLCBjb250ZXh0LnNlbGVjdG9yKTtcclxuICAgICAgICAgICAgdmFyIGV4ZWNDdHggPSBuZXcgRXhlY3V0ZUNvbnRleHQoY29udGV4dCk7XHJcbiAgICAgICAgICAgIHZhciBiaW5kaW5nQ29udGV4dCA9IG5ldyBCaW5kQ29udGV4dCh2aWV3LCBleGVjQ3R4LmJpbmRpbmdGbGFncyk7XHJcbiAgICAgICAgICAgIHZhciB2aWV3YmluZGVyID0gdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZShJVmlld0JpbmRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCB2aWV3YmluZGVyLmJpbmQoYmluZGluZ0NvbnRleHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2VWaWV3RW5naW5lLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdlbmdpbmUvY29uY3JldGUvQmFzZVZpZXdFbmdpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IElCaW5kaW5nIH0gZnJvbSBcIi4uLy4uL2JpbmRpbmcvaW50ZXJmYWNlcy9JQmluZGluZ1wiO1xyXG5pbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmV4cG9ydCBjbGFzcyBFeGVjdXRlQ29udGV4dCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2aWV3Q3R4LCBiaW5kaW5nRmxhZ3MpIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3Q3R4LmlWaWV3ZWQ7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IHZpZXdDdHguc2VsZWN0b3I7XHJcbiAgICAgICAgaWYgKCFiaW5kaW5nRmxhZ3MpIHtcclxuICAgICAgICAgICAgYmluZGluZ0ZsYWdzID0gR2VyYW5pdW1BcHAucmVzb2x2ZUFsbChJQmluZGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmluZGluZ0ZsYWdzID0gYmluZGluZ0ZsYWdzO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUV4ZWN1dGVDb250ZXh0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdlbmdpbmUvY29udHJhY3RzL0V4ZWN1dGVDb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBJVmlld1B1Ymxpc2hlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lWaWV3UHVibGlzaGVyXCI7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vLi4vZXhjZXB0aW9ucy9sb2dnaW5nL2ludGVyZmFjZXMvSUxvZ2dlclwiO1xyXG5leHBvcnQgY2xhc3MgQmFzZVZpZXdQdWJsaXNoZXIgZXh0ZW5kcyBJVmlld1B1Ymxpc2hlciB7XHJcbiAgICBwdWJsaXNoKHZpZXcpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHZpZXcuc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9tTG9hZGVkID0gZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudCAmJiAhZG9tTG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMuZG9tTG9hZGVkKHNlbGVjdG9yLCB2aWV3LmRvbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRvbUxvYWRlZCAmJiAhZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTZWxlY3RvciBkb2VzIG5vdCBleGlzdHM6IFwiICsgc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlldy5kb20uZm9yRWFjaCh2aWV3ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQodmlldywgZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzW1wiYGNvbnRhaW5lclwiXS5yZXNvbHZlKElMb2dnZXIpLmxvZyhleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGV4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZG9tTG9hZGVkKHNlbGVjdG9yLCB2aWV3cykge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld3MuZm9yRWFjaCh2aWV3ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRFbGVtZW50LnJlcGxhY2VDaGlsZCh2aWV3LCBlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJhc2VWaWV3UHVibGlzaGVyLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdlbmdpbmUvY29uY3JldGUvQmFzZVZpZXdQdWJsaXNoZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tIFwiLi4vYWJzdHJhY3QvQmluZGluZ1wiO1xyXG5pbXBvcnQgeyBDbGFzcyB9IGZyb20gXCIuLi8uLi9yZWZsZWN0aW9uL0NsYXNzXCI7XHJcbmltcG9ydCB7IHRvSHRtbEFycmF5IH0gZnJvbSBcIi4uLy4uL2V4dGVuc2lvbnMvSHRtbEVsZW1lbnRFeHRlbnNpb25zXCI7XHJcbmltcG9ydCB7IEFycmF5SGVscGVyIH0gZnJvbSBcIi4uLy4uL2RlY2xhcmUvYXJyYXlcIjtcclxuaW1wb3J0IHsgSVZpZXdFbmdpbmUgfSBmcm9tIFwiLi4vLi4vdmlld2VuZ2luZS9pbnRlcmZhY2VzL0lWaWV3RW5naW5lXCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuaW1wb3J0IHsgSVZpZXdhYmxlIH0gZnJvbSBcIi4uLy4uL3ZpZXcvaW50ZXJmYWNlcy9JVmlld2FibGVcIjtcclxuZXhwb3J0IGNsYXNzIFByb3BlcnR5QmluZGluZyBleHRlbmRzIEJpbmRpbmcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcclxuICAgICAgICB0aGlzLnByb3BlcnR5UmVnZXggPSAvXFxbLio/XFxdL2c7XHJcbiAgICAgICAgdGhpcy5maWVsZHMgPSBbXTtcclxuICAgIH1cclxuICAgIGRldGVjdGlvbihET01PYmplY3RzKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgICAgICAgIERPTU9iamVjdHMuZm9yRWFjaChET01PYmplY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMucHVzaCguLi4oRE9NT2JqZWN0LmlubmVySFRNTC5tYXRjaCgvXFxbLio/XFxdL2cpIHx8IFtdKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkcyA9IEFycmF5SGVscGVyLnJlbW92ZVNhbWUodGhpcy5maWVsZHMpO1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgICAgICAgIERPTU9iamVjdHMuZm9yRWFjaChET01PYmplY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goLi4udGhpcy5xdWVyeVhQYXRoKERPTU9iamVjdCwgZmllbGQpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYmluZGluZyhET01PYmplY3QsIG1vZGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gRE9NT2JqZWN0LmlubmVyVGV4dC5tYXRjaCh0aGlzLnByb3BlcnR5UmVnZXgpO1xyXG4gICAgICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gbW9kZWxbZmllbGQuc3Vic3RyaW5nKDEsIGZpZWxkLmxlbmd0aCAtIDEpXTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdGhpcy5yZW5kZXJBcnJheShwcm9wZXJ0eSwgRE9NT2JqZWN0LCBmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMucmVuZGVyKHByb3BlcnR5LCBET01PYmplY3QsIGZpZWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2xlYXIoRE9NT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHsgfSk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJBcnJheShwcm9wZXJ0eSwgRE9NT2JqZWN0LCBmaWVsZCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWVsZHNFeHBhbmRlZCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9wZXJ0eS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkc0V4cGFuZGVkICs9IFwiW1wiICsgaW5kZXggKyBcIl1cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlcGxhY2VUZXh0Tm9kZShET01PYmplY3QsIGZpZWxkLCBbZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZmllbGRzRXhwYW5kZWQpXSk7XHJcbiAgICAgICAgICAgIHByb3BlcnR5LmZvckVhY2goKHByb3AsIGluZGV4KSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IHlpZWxkIHRoaXMucmVuZGVyKHByb3AsIERPTU9iamVjdCwgXCJbXCIgKyBpbmRleCArIFwiXVwiKTsgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKHByb3BlcnR5LCBET01PYmplY3QsIGZpZWxkKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgaWYgKENsYXNzLmlzQXNzaWduYWJsZUZyb20oVmlld01vZGVsLCBwcm9wZXJ0eS5jb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMucHVibGlzaChET01PYmplY3QsIHByb3BlcnR5LCBmaWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCB0aGlzLnJlcGxhY2VUZXh0Tm9kZShET01PYmplY3QsIGZpZWxkLCBbZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocHJvcGVydHkpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1Ymxpc2goRE9NT2JqZWN0LCBwcm9wZXJ0eSwgZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCBkb20gPSB5aWVsZCBHZXJhbml1bUFwcC5yZXNvbHZlKElWaWV3RW5naW5lKS5leGVjdXRlKHtcclxuICAgICAgICAgICAgICAgIGlWaWV3ZWQ6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnJlcGxhY2VUZXh0Tm9kZShET01PYmplY3QsIGZpZWxkLCBkb20pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVwbGFjZVRleHROb2RlKHJvb3QsIHRleHQsIHRhcmdldCkge1xyXG4gICAgICAgIGNvbnN0IGFsbE5vZGVzID0gdG9IdG1sQXJyYXkocm9vdC5jaGlsZE5vZGVzKTtcclxuICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGFsbE5vZGVzLmZpbmQoeCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB4Lm5vZGVUeXBlID09IDMgJiYgKHgudGV4dENvbnRlbnQudHJpbSgpID09IHRleHQgfHwgeC50ZXh0Q29udGVudC5pbmNsdWRlcyh0ZXh0KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGFyZ2V0LmZvckVhY2godGFyZ2V0Tm9kZSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0ZXh0Tm9kZS50ZXh0Q29udGVudC50cmltKCkgPT0gdGV4dCkge1xyXG4gICAgICAgICAgICAgICAgcm9vdC5yZXBsYWNlQ2hpbGQodGFyZ2V0Tm9kZSwgdGV4dE5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcHNTdHJpbmdzID0gdGV4dE5vZGUudGV4dENvbnRlbnQubWF0Y2godGhpcy5wcm9wZXJ0eVJlZ2V4KTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wc1N0cmluZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHROb2RlLnRleHRDb250ZW50ID0gdGV4dE5vZGUudGV4dENvbnRlbnQucmVwbGFjZSh0ZXh0LCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXJnZXROb2RlLCB0ZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS50ZXh0Q29udGVudCA9IHRleHROb2RlLnRleHRDb250ZW50LnJlcGxhY2UodGV4dCwgdGFyZ2V0Tm9kZS5pbm5lckhUTUwgfHwgdGFyZ2V0Tm9kZS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHF1ZXJ5WFBhdGgobm9kZSwgZmllbGQpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHhwYXRoID0gZG9jdW1lbnQuZXZhbHVhdGUoXCIvLypbdGV4dCgpW2NvbnRhaW5zKC4sJ1wiICsgZmllbGQgKyBcIicpXV1cIiwgbm9kZSwgbnVsbCwgWFBhdGhSZXN1bHQuT1JERVJFRF9OT0RFX1NOQVBTSE9UX1RZUEUsIG51bGwpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB4cGF0aC5zbmFwc2hvdExlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5wdXNoKHhwYXRoLnNuYXBzaG90SXRlbShpbmRleCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRzO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFZpZXdNb2RlbCBleHRlbmRzIElWaWV3YWJsZSB7XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHJvcGVydHlCaW5kaW5nLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL2JpbmRpbmcvY29uY3JldGUvUHJvcGVydHlCaW5kaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgQ2xhc3Mge1xyXG4gICAgc3RhdGljIGlzQXNzaWduYWJsZUZyb20oZnJvbSwgdGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gKHRhcmdldCB8fCB7IG5hbWU6ICcnIH0pLm5hbWU7XHJcbiAgICAgICAgaWYgKGZyb20ubmFtZSA9PSBub3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG5vdyAhPT0gXCJcIiAmJiBub3cgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gQ2xhc3MuaXNBc3NpZ25hYmxlRnJvbShmcm9tLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldFByb3BlcnRpZXModGFyZ2V0T2JqZWN0KSB7XHJcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBbXTtcclxuICAgICAgICBmb3IgKDsgdGFyZ2V0T2JqZWN0ICE9IG51bGw7IHRhcmdldE9iamVjdCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXRPYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHZhciBvd25Qcm9wZXJ0aWVzTmFtZSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldE9iamVjdCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3duUHJvcGVydGllc05hbWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gb3duUHJvcGVydGllc05hbWVbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIUNsYXNzLm5vdENvcmVGdW5jLmluY2x1ZGVzKHByb3BOYW1lKSAmJiAhcHJvcGVydGllcy5pbmNsdWRlcyhwcm9wTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHgsXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogdGFyZ2V0T2JqZWN0W3hdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0IG5vdENvcmVGdW5jKCkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIFwiY29uc3RydWN0b3JcIixcclxuICAgICAgICAgICAgXCJjbG9uZVwiLFxyXG4gICAgICAgICAgICBcIl9fZGVmaW5lR2V0dGVyX19cIixcclxuICAgICAgICAgICAgXCJfX2RlZmluZVNldHRlcl9fXCIsXHJcbiAgICAgICAgICAgIFwiaGFzT3duUHJvcGVydHlcIixcclxuICAgICAgICAgICAgXCJfX2xvb2t1cEdldHRlcl9fXCIsXHJcbiAgICAgICAgICAgIFwiX19sb29rdXBTZXR0ZXJfX1wiLFxyXG4gICAgICAgICAgICBcInByb3BlcnR5SXNFbnVtZXJhYmxlXCIsXHJcbiAgICAgICAgICAgIFwiX19wcm90b19fXCIsXHJcbiAgICAgICAgICAgIFwidG9TdHJpbmdcIixcclxuICAgICAgICAgICAgXCJ0b0xvY2FsZVN0cmluZ1wiLFxyXG4gICAgICAgICAgICBcInZhbHVlT2ZcIixcclxuICAgICAgICAgICAgXCJpc1Byb3RvdHlwZU9mXCJcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsYXNzLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3JlZmxlY3Rpb24vQ2xhc3MuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJVmlld2FibGUge1xyXG4gICAgdmlldygpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSVZpZXdhYmxlLnZpZXdcIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JVmlld2FibGUuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlldy9pbnRlcmZhY2VzL0lWaWV3YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGVzL1N0YXRlXCI7XHJcbmltcG9ydCB7IHJvdXRlaWdub3JlIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmcvY29uY3JldGUvZGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgeyBJVmlld0VuZ2luZSB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2ludGVyZmFjZXMvSVZpZXdFbmdpbmVcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5pbXBvcnQgeyBJVmlld1B1Ymxpc2hlciB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2ludGVyZmFjZXMvSVZpZXdQdWJsaXNoZXJcIjtcclxubGV0IFZpZXdTdGF0ZSA9IGNsYXNzIFZpZXdTdGF0ZSBleHRlbmRzIFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZWZ1bGwpXHJcbiAgICAgICAgICAgIHRoaXMuZmlsbFN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgc3RhdGVmdWxsKCkgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgIHNob3coc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXNbXCIjVmlld1N0YXRlXCJdKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbXlTdGF0ZSA9IHlpZWxkIFN0YXRlLmdldCh0aGlzLmNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgICAgIG15U3RhdGVbXCIjVmlld1N0YXRlXCJdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG15U3RhdGVbXCJzaG93XCJdKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzW1wiI1ZpZXdTdGF0ZVwiXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRvbSA9IHlpZWxkIEdlcmFuaXVtQXBwLnJlc29sdmUoSVZpZXdFbmdpbmUpLmV4ZWN1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlWaWV3ZWQ6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHlpZWxkIEdlcmFuaXVtQXBwLnJlc29sdmUoSVZpZXdQdWJsaXNoZXIpLnB1Ymxpc2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbTogZG9tLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuVmlld1N0YXRlID0gX19kZWNvcmF0ZShbXHJcbiAgICByb3V0ZWlnbm9yZVxyXG5dLCBWaWV3U3RhdGUpO1xyXG5leHBvcnQgeyBWaWV3U3RhdGUgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Vmlld1N0YXRlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvYWJzdHJhY3QvVmlld1N0YXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyByb3V0ZWlnbm9yZSB9IGZyb20gXCIuLi9yb3V0aW5nL2NvbmNyZXRlL2RlY29yYXRvcnNcIjtcclxuaW1wb3J0IHsgTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL01vZGVsXCI7XHJcbmltcG9ydCB7IElTdGF0ZU1hbmFnZXIgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL0lTdGF0ZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSVJlcXVlc3QgfSBmcm9tIFwiLi4vYmFja2VuZC9pbnRlcmZhY2VzL0lSZXF1ZXN0XCI7XHJcbmltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxubGV0IFN0YXRlID0gY2xhc3MgU3RhdGUgZXh0ZW5kcyBNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzdGF0ZWZ1bGwgPSB0cnVlKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBpZiAoc3RhdGVmdWxsKVxyXG4gICAgICAgICAgICB0aGlzLmZpbGxTdGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgZmlsbFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yLm5hbWUgIT0gXCJWaWV3U3RhdGVcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVNYW5hZ2VyID0gR2VyYW5pdW1BcHAucmVzb2x2ZShJU3RhdGVNYW5hZ2VyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gc3RhdGVNYW5hZ2VyLnJlc29sdmUodGhpcy5jb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVNYW5hZ2VyLnJlZ2lzdGVyKHRoaXMuY29uc3RydWN0b3IsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0KHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBHZXJhbml1bUFwcC5yZXNvbHZlKElTdGF0ZU1hbmFnZXIpLnJlc29sdmUodHlwZSk7XHJcbiAgICAgICAgICAgIGlmICghc3RhdGUpXHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IG5ldyB0eXBlKCk7XHJcbiAgICAgICAgICAgIHlpZWxkIHN0YXRlLnN5bmMoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXNbXCJgY29udGFpbmVyXCJdO1xyXG4gICAgICAgIGNvbnN0IHN0YXRlTWFuYWdlciA9IGNvbnRhaW5lci5yZXNvbHZlKElTdGF0ZU1hbmFnZXIpO1xyXG4gICAgICAgIHN0YXRlTWFuYWdlci5yZWxlYXNlKHRoaXMuY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG4gICAgc3luYygpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zeW5jaHJvbml6ZXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZShJUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHlpZWxkIHJlcXVlc3Quc2VuZCh0aGlzLnN5bmNocm9uaXplcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9idGFpbihkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5TdGF0ZSA9IF9fZGVjb3JhdGUoW1xyXG4gICAgcm91dGVpZ25vcmVcclxuXSwgU3RhdGUpO1xyXG5leHBvcnQgeyBTdGF0ZSB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdGF0ZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9zdGF0ZXMvU3RhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmltcG9ydCB7IHJvdXRlaWdub3JlIH0gZnJvbSBcIi4uL3JvdXRpbmcvY29uY3JldGUvZGVjb3JhdG9yc1wiO1xyXG5pbXBvcnQgeyBJQ2xvbmVhYmxlIH0gZnJvbSBcIi4uL3JlZmxlY3Rpb24vY2xvbmluZy9kZWNvcmF0b3JzL0lDbG9uZWFibGVcIjtcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tIFwiLi4vYmVoYXZpb3JzL2V2ZW50cy9hYnN0cmFjdC9FdmVudFwiO1xyXG5pbXBvcnQgeyBJUmVxdWVzdCB9IGZyb20gXCIuLi9iYWNrZW5kL2ludGVyZmFjZXMvSVJlcXVlc3RcIjtcclxubGV0IE1vZGVsID0gY2xhc3MgTW9kZWwgZXh0ZW5kcyBFdmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycyA9IFtdO1xyXG4gICAgfVxyXG4gICAgb2J0YWluKGRhdGEpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgICAgICAgdGhpcy5yYWlzZSh0aGlzKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogc3luY2hyb25pemUgbW9kZWwgd2l0aCBzZXJ2ZXIgc3RhdGVcclxuICAgICAqL1xyXG4gICAgc3luYygpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zeW5jaHJvbml6ZXIpIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXF1ZXN0ID0gdGhpc1tcImBjb250YWluZXJcIl0ucmVzb2x2ZShJUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHlpZWxkIHJlcXVlc3Quc2VuZCh0aGlzLnN5bmNocm9uaXplcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9idGFpbihkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBvYmplY3QgdXNlZCBhcyBzeW5jaHJvbml6YXRvclxyXG4gICAgICovXHJcbiAgICBnZXQgc3luY2hyb25pemVyKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XHJcbn07XHJcbk1vZGVsID0gX19kZWNvcmF0ZShbXHJcbiAgICByb3V0ZWlnbm9yZSxcclxuICAgIElDbG9uZWFibGVcclxuXSwgTW9kZWwpO1xyXG5leHBvcnQgeyBNb2RlbCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Nb2RlbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9tb2RlbHMvTW9kZWwuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBHZXJhbml1bUFwcCBmcm9tIFwiLi4vLi4vLi4vcnVudGltZS9jb25jcmV0ZS9BcHBcIjtcclxuaW1wb3J0IHsgSUNsb25lciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL0lDbG9uZXJcIjtcclxuZXhwb3J0IGZ1bmN0aW9uIElDbG9uZWFibGUoY29uc3RydWN0b3IpIHtcclxuICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gR2VyYW5pdW1BcHAucmVzb2x2ZShJQ2xvbmVyKS5jbG9uZSh0aGlzKTtcclxuICAgIH07XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SUNsb25lYWJsZS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS9yZWZsZWN0aW9uL2Nsb25pbmcvZGVjb3JhdG9ycy9JQ2xvbmVhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9leGNlcHRpb25zL2NvaGVyZW5jZS9JbnRlcmZhY2VVc2luZ0V4Y2VwdGlvblwiO1xyXG5leHBvcnQgY2xhc3MgSUNsb25lciB7XHJcbiAgICBjbG9uZShzYW1wbGUpIHsgdGhyb3cgbmV3IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uKFwiSUNsb25lci5jbG9uZVwiKTsgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUlDbG9uZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vcmVmbGVjdGlvbi9jbG9uaW5nL2ludGVyZmFjZXMvSUNsb25lci5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gXCIuLi8uLi9ydW50aW1lL2NvbmNyZXRlL0FwcFwiO1xyXG5pbXBvcnQgeyBJUm91dGVyIH0gZnJvbSBcIi4uLy4uL3JvdXRpbmcvaW50ZXJmYWNlcy9JUm91dGVyXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBpcyhjb25zdHJ1Y3Rvcikge1xyXG4gICAgdmFyIHJvdXRlciA9IEdlcmFuaXVtQXBwLnJlc29sdmUoSVJvdXRlcik7XHJcbiAgICByZXR1cm4gcm91dGVyLnJvdXRlcy5maWx0ZXIoeCA9PiB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IHguY3RvcigpO1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5jb25zdHJ1Y3Rvci5uYW1lID09IGNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgICB9KS5sZW5ndGggPiAwO1xyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhpc3RvcnkuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vaGlzdG9yeS9kZWNvcmF0b3JzL2hpc3RvcnkuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEludGVyZmFjZVVzaW5nRXhjZXB0aW9uIH0gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvbnMvY29oZXJlbmNlL0ludGVyZmFjZVVzaW5nRXhjZXB0aW9uXCI7XHJcbmV4cG9ydCBjbGFzcyBJVmlld0RPTSB7XHJcbiAgICBET00oKSB7IHRocm93IG5ldyBJbnRlcmZhY2VVc2luZ0V4Y2VwdGlvbihcIklWaWV3RE9NLmdldFZpZXdET01cIik7IH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JVmlld0RPTS5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3RE9NL2ludGVyZmFjZXMvSVZpZXdET00uanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXcvYWJzdHJhY3QvVmlld1wiO1xyXG5yZXF1aXJlKFwiLi9jYXRlZ29yeUJ1dHRvblwiKTtcclxuZXhwb3J0IGNsYXNzIENhdGVnb3J5QnV0dG9uVmlldyBleHRlbmRzIFZpZXcge1xyXG4gICAgZGVjbGFyZSgpIHtcclxuICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGNsYXNzPSdidXR0b24gY2F0ZWdvcnknIG9uY2xpY2s9J29uQ2xpY2snIGRhdGEtdGVtcGxhdGluZy1jb250ZW50PScnPlt0ZXh0XTwvYnV0dG9uPlwiO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhdGVnb3J5QnV0dG9uVmlldy5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL2NhdGVnb3J5QnV0dG9uL2NhdGVnb3J5QnV0dG9uVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVmlld01vZGVsRXhpc3RlZCB9IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld21vZGVscy9jb25jcmV0ZS9WaWV3TW9kZWxFeGlzdGVkXCI7XHJcbmltcG9ydCB7IEhlYWRlclZpZXcgfSBmcm9tIFwiLi9oZWFkZXJWaWV3XCI7XHJcbmltcG9ydCB7IFNvY2lhbHNQYW5lbCB9IGZyb20gXCIuLi9zb2NpYWxzUGFuZWwvc29jaWFsc1BhbmVsXCI7XHJcbmV4cG9ydCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBWaWV3TW9kZWxFeGlzdGVkIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5zb2NpYWxzID0gbmV3IFNvY2lhbHNQYW5lbCgpO1xyXG4gICAgfVxyXG4gICAgdmlldygpIHtcclxuICAgICAgICByZXR1cm4gSGVhZGVyVmlldztcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkZXIuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBWaWV3RE9NIH0gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3RE9NL2Fic3RyYWN0L1ZpZXdET01cIjtcclxuZXhwb3J0IGNsYXNzIEhlYWRlclZpZXcgZXh0ZW5kcyBWaWV3RE9NIHtcclxuICAgIERPTSgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIildO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWRlclZpZXcuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9nZXJhbml1bS92aWV3bW9kZWxzL2Fic3RyYWN0L1ZpZXdNb2RlbFwiO1xyXG5pbXBvcnQgeyBTb2NpYWxzUGFuZWxWaWV3IH0gZnJvbSBcIi4vc29jaWFsc1BhbmVsVmlld1wiO1xyXG5pbXBvcnQgeyBTb2NpYWxCdXR0b24gfSBmcm9tIFwiLi9zb2NpYWxCdXR0b24vc29jaWFsQnV0dG9uXCI7XHJcbmV4cG9ydCBjbGFzcyBTb2NpYWxzUGFuZWwgZXh0ZW5kcyBWaWV3TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBTb2NpYWxCdXR0b24oXCJmYSBmYS12a1wiKSxcclxuICAgICAgICAgICAgbmV3IFNvY2lhbEJ1dHRvbihcImZhIGZhLXZrXCIpLFxyXG4gICAgICAgICAgICBuZXcgU29jaWFsQnV0dG9uKFwiZmEgZmEtdmtcIiksXHJcbiAgICAgICAgICAgIG5ldyBTb2NpYWxCdXR0b24oXCJmYSBmYS12a1wiKVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbiAgICB2aWV3KCkge1xyXG4gICAgICAgIHJldHVybiBTb2NpYWxzUGFuZWxWaWV3O1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNvY2lhbHNQYW5lbC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL3NvY2lhbHNQYW5lbC9zb2NpYWxzUGFuZWwuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXcvYWJzdHJhY3QvVmlld1wiO1xyXG5leHBvcnQgY2xhc3MgU29jaWFsc1BhbmVsVmlldyBleHRlbmRzIFZpZXcge1xyXG4gICAgZGVjbGFyZSgpIHtcclxuICAgICAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPSdzb2NpYWxzJz5bYnV0dG9uc108L2Rpdj5cIjtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zb2NpYWxzUGFuZWxWaWV3LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvc29jaWFsc1BhbmVsL3NvY2lhbHNQYW5lbFZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld21vZGVscy9hYnN0cmFjdC9WaWV3TW9kZWxcIjtcclxuaW1wb3J0IHsgU29jaWFsQnV0dG9uVmlldyB9IGZyb20gXCIuL3NvY2lhbEJ1dHRvblZpZXdcIjtcclxuZXhwb3J0IGNsYXNzIFNvY2lhbEJ1dHRvbiBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihpY29uKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmljb24gPSBpY29uO1xyXG4gICAgfVxyXG4gICAgdmlldygpIHtcclxuICAgICAgICByZXR1cm4gU29jaWFsQnV0dG9uVmlldztcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zb2NpYWxCdXR0b24uanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9zb2NpYWxzUGFuZWwvc29jaWFsQnV0dG9uL3NvY2lhbEJ1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlldy9hYnN0cmFjdC9WaWV3XCI7XHJcbmV4cG9ydCBjbGFzcyBTb2NpYWxCdXR0b25WaWV3IGV4dGVuZHMgVmlldyB7XHJcbiAgICBkZWNsYXJlKCkge1xyXG4gICAgICAgIHJldHVybiBcIjxhIGNsYXNzPScnIGhyZWY9JyMnPjwvYT5cIjtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zb2NpYWxCdXR0b25WaWV3LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvc29jaWFsc1BhbmVsL3NvY2lhbEJ1dHRvbi9zb2NpYWxCdXR0b25WaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHdpbmRvdywgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG5leHBvcnRzLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL25vZGVfbW9kdWxlcy9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgQmFzZUJ5QXR0cmlidXRlQmluZGluZyB9IGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vYmluZGluZy9jb25jcmV0ZS9iYXNlL0Jhc2VCeUF0dHJpYnV0ZUJpbmRpbmdcIjtcclxuaW1wb3J0ICogYXMgTXVzdGFjaGUgZnJvbSBcIm11c3RhY2hlXCI7XHJcbmV4cG9ydCBjbGFzcyBNdXN0YWNoZUJpbmQgZXh0ZW5kcyBCYXNlQnlBdHRyaWJ1dGVCaW5kaW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGUgPSBcImRhdGEtdGVtcGxhdGluZy1jb250ZW50XCI7XHJcbiAgICB9XHJcbiAgICBiaW5kaW5nKERPTU9iamVjdCwgbW9kZWwpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBNdXN0YWNoZS5yZW5kZXIoRE9NT2JqZWN0LmlubmVySFRNTCwgbW9kZWwpO1xyXG4gICAgICAgICAgICBET01PYmplY3QuaW5uZXJIVE1MID0gcGFyc2VkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU11c3RhY2hlQmluZC5qcy5tYXBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iaW5kZXJzL011c3RhY2hlQmluZC5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBtdXN0YWNoZS5qcyAtIExvZ2ljLWxlc3Mge3ttdXN0YWNoZX19IHRlbXBsYXRlcyB3aXRoIEphdmFTY3JpcHRcbiAqIGh0dHA6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanNcbiAqL1xuXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlIE11c3RhY2hlOiB0cnVlKi9cblxuKGZ1bmN0aW9uIGRlZmluZU11c3RhY2hlIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmIHR5cGVvZiBleHBvcnRzLm5vZGVOYW1lICE9PSAnc3RyaW5nJykge1xuICAgIGZhY3RvcnkoZXhwb3J0cyk7IC8vIENvbW1vbkpTXG4gIH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KTsgLy8gQU1EXG4gIH0gZWxzZSB7XG4gICAgZ2xvYmFsLk11c3RhY2hlID0ge307XG4gICAgZmFjdG9yeShnbG9iYWwuTXVzdGFjaGUpOyAvLyBzY3JpcHQsIHdzaCwgYXNwXG4gIH1cbn0odGhpcywgZnVuY3Rpb24gbXVzdGFjaGVGYWN0b3J5IChtdXN0YWNoZSkge1xuXG4gIHZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5UG9seWZpbGwgKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKG9iamVjdCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbiAgZnVuY3Rpb24gaXNGdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogTW9yZSBjb3JyZWN0IHR5cGVvZiBzdHJpbmcgaGFuZGxpbmcgYXJyYXlcbiAgICogd2hpY2ggbm9ybWFsbHkgcmV0dXJucyB0eXBlb2YgJ29iamVjdCdcbiAgICovXG4gIGZ1bmN0aW9uIHR5cGVTdHIgKG9iaikge1xuICAgIHJldHVybiBpc0FycmF5KG9iaikgPyAnYXJyYXknIDogdHlwZW9mIG9iajtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cCAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bXFwtXFxbXFxde30oKSorPy4sXFxcXFxcXiR8I1xcc10vZywgJ1xcXFwkJicpO1xuICB9XG5cbiAgLyoqXG4gICAqIE51bGwgc2FmZSB3YXkgb2YgY2hlY2tpbmcgd2hldGhlciBvciBub3QgYW4gb2JqZWN0LFxuICAgKiBpbmNsdWRpbmcgaXRzIHByb3RvdHlwZSwgaGFzIGEgZ2l2ZW4gcHJvcGVydHlcbiAgICovXG4gIGZ1bmN0aW9uIGhhc1Byb3BlcnR5IChvYmosIHByb3BOYW1lKSB7XG4gICAgcmV0dXJuIG9iaiAhPSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIChwcm9wTmFtZSBpbiBvYmopO1xuICB9XG5cbiAgLy8gV29ya2Fyb3VuZCBmb3IgaHR0cHM6Ly9pc3N1ZXMuYXBhY2hlLm9yZy9qaXJhL2Jyb3dzZS9DT1VDSERCLTU3N1xuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2phbmwvbXVzdGFjaGUuanMvaXNzdWVzLzE4OVxuICB2YXIgcmVnRXhwVGVzdCA9IFJlZ0V4cC5wcm90b3R5cGUudGVzdDtcbiAgZnVuY3Rpb24gdGVzdFJlZ0V4cCAocmUsIHN0cmluZykge1xuICAgIHJldHVybiByZWdFeHBUZXN0LmNhbGwocmUsIHN0cmluZyk7XG4gIH1cblxuICB2YXIgbm9uU3BhY2VSZSA9IC9cXFMvO1xuICBmdW5jdGlvbiBpc1doaXRlc3BhY2UgKHN0cmluZykge1xuICAgIHJldHVybiAhdGVzdFJlZ0V4cChub25TcGFjZVJlLCBzdHJpbmcpO1xuICB9XG5cbiAgdmFyIGVudGl0eU1hcCA9IHtcbiAgICAnJic6ICcmYW1wOycsXG4gICAgJzwnOiAnJmx0OycsXG4gICAgJz4nOiAnJmd0OycsXG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgXCInXCI6ICcmIzM5OycsXG4gICAgJy8nOiAnJiN4MkY7JyxcbiAgICAnYCc6ICcmI3g2MDsnLFxuICAgICc9JzogJyYjeDNEOydcbiAgfTtcblxuICBmdW5jdGlvbiBlc2NhcGVIdG1sIChzdHJpbmcpIHtcbiAgICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZSgvWyY8PlwiJ2A9XFwvXS9nLCBmdW5jdGlvbiBmcm9tRW50aXR5TWFwIChzKSB7XG4gICAgICByZXR1cm4gZW50aXR5TWFwW3NdO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHdoaXRlUmUgPSAvXFxzKi87XG4gIHZhciBzcGFjZVJlID0gL1xccysvO1xuICB2YXIgZXF1YWxzUmUgPSAvXFxzKj0vO1xuICB2YXIgY3VybHlSZSA9IC9cXHMqXFx9LztcbiAgdmFyIHRhZ1JlID0gLyN8XFxefFxcL3w+fFxce3wmfD18IS87XG5cbiAgLyoqXG4gICAqIEJyZWFrcyB1cCB0aGUgZ2l2ZW4gYHRlbXBsYXRlYCBzdHJpbmcgaW50byBhIHRyZWUgb2YgdG9rZW5zLiBJZiB0aGUgYHRhZ3NgXG4gICAqIGFyZ3VtZW50IGlzIGdpdmVuIGhlcmUgaXQgbXVzdCBiZSBhbiBhcnJheSB3aXRoIHR3byBzdHJpbmcgdmFsdWVzOiB0aGVcbiAgICogb3BlbmluZyBhbmQgY2xvc2luZyB0YWdzIHVzZWQgaW4gdGhlIHRlbXBsYXRlIChlLmcuIFsgXCI8JVwiLCBcIiU+XCIgXSkuIE9mXG4gICAqIGNvdXJzZSwgdGhlIGRlZmF1bHQgaXMgdG8gdXNlIG11c3RhY2hlcyAoaS5lLiBtdXN0YWNoZS50YWdzKS5cbiAgICpcbiAgICogQSB0b2tlbiBpcyBhbiBhcnJheSB3aXRoIGF0IGxlYXN0IDQgZWxlbWVudHMuIFRoZSBmaXJzdCBlbGVtZW50IGlzIHRoZVxuICAgKiBtdXN0YWNoZSBzeW1ib2wgdGhhdCB3YXMgdXNlZCBpbnNpZGUgdGhlIHRhZywgZS5nLiBcIiNcIiBvciBcIiZcIi4gSWYgdGhlIHRhZ1xuICAgKiBkaWQgbm90IGNvbnRhaW4gYSBzeW1ib2wgKGkuZS4ge3tteVZhbHVlfX0pIHRoaXMgZWxlbWVudCBpcyBcIm5hbWVcIi4gRm9yXG4gICAqIGFsbCB0ZXh0IHRoYXQgYXBwZWFycyBvdXRzaWRlIGEgc3ltYm9sIHRoaXMgZWxlbWVudCBpcyBcInRleHRcIi5cbiAgICpcbiAgICogVGhlIHNlY29uZCBlbGVtZW50IG9mIGEgdG9rZW4gaXMgaXRzIFwidmFsdWVcIi4gRm9yIG11c3RhY2hlIHRhZ3MgdGhpcyBpc1xuICAgKiB3aGF0ZXZlciBlbHNlIHdhcyBpbnNpZGUgdGhlIHRhZyBiZXNpZGVzIHRoZSBvcGVuaW5nIHN5bWJvbC4gRm9yIHRleHQgdG9rZW5zXG4gICAqIHRoaXMgaXMgdGhlIHRleHQgaXRzZWxmLlxuICAgKlxuICAgKiBUaGUgdGhpcmQgYW5kIGZvdXJ0aCBlbGVtZW50cyBvZiB0aGUgdG9rZW4gYXJlIHRoZSBzdGFydCBhbmQgZW5kIGluZGljZXMsXG4gICAqIHJlc3BlY3RpdmVseSwgb2YgdGhlIHRva2VuIGluIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZS5cbiAgICpcbiAgICogVG9rZW5zIHRoYXQgYXJlIHRoZSByb290IG5vZGUgb2YgYSBzdWJ0cmVlIGNvbnRhaW4gdHdvIG1vcmUgZWxlbWVudHM6IDEpIGFuXG4gICAqIGFycmF5IG9mIHRva2VucyBpbiB0aGUgc3VidHJlZSBhbmQgMikgdGhlIGluZGV4IGluIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSBhdFxuICAgKiB3aGljaCB0aGUgY2xvc2luZyB0YWcgZm9yIHRoYXQgc2VjdGlvbiBiZWdpbnMuXG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZVRlbXBsYXRlICh0ZW1wbGF0ZSwgdGFncykge1xuICAgIGlmICghdGVtcGxhdGUpXG4gICAgICByZXR1cm4gW107XG5cbiAgICB2YXIgc2VjdGlvbnMgPSBbXTsgICAgIC8vIFN0YWNrIHRvIGhvbGQgc2VjdGlvbiB0b2tlbnNcbiAgICB2YXIgdG9rZW5zID0gW107ICAgICAgIC8vIEJ1ZmZlciB0byBob2xkIHRoZSB0b2tlbnNcbiAgICB2YXIgc3BhY2VzID0gW107ICAgICAgIC8vIEluZGljZXMgb2Ygd2hpdGVzcGFjZSB0b2tlbnMgb24gdGhlIGN1cnJlbnQgbGluZVxuICAgIHZhciBoYXNUYWcgPSBmYWxzZTsgICAgLy8gSXMgdGhlcmUgYSB7e3RhZ319IG9uIHRoZSBjdXJyZW50IGxpbmU/XG4gICAgdmFyIG5vblNwYWNlID0gZmFsc2U7ICAvLyBJcyB0aGVyZSBhIG5vbi1zcGFjZSBjaGFyIG9uIHRoZSBjdXJyZW50IGxpbmU/XG5cbiAgICAvLyBTdHJpcHMgYWxsIHdoaXRlc3BhY2UgdG9rZW5zIGFycmF5IGZvciB0aGUgY3VycmVudCBsaW5lXG4gICAgLy8gaWYgdGhlcmUgd2FzIGEge3sjdGFnfX0gb24gaXQgYW5kIG90aGVyd2lzZSBvbmx5IHNwYWNlLlxuICAgIGZ1bmN0aW9uIHN0cmlwU3BhY2UgKCkge1xuICAgICAgaWYgKGhhc1RhZyAmJiAhbm9uU3BhY2UpIHtcbiAgICAgICAgd2hpbGUgKHNwYWNlcy5sZW5ndGgpXG4gICAgICAgICAgZGVsZXRlIHRva2Vuc1tzcGFjZXMucG9wKCldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BhY2VzID0gW107XG4gICAgICB9XG5cbiAgICAgIGhhc1RhZyA9IGZhbHNlO1xuICAgICAgbm9uU3BhY2UgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgb3BlbmluZ1RhZ1JlLCBjbG9zaW5nVGFnUmUsIGNsb3NpbmdDdXJseVJlO1xuICAgIGZ1bmN0aW9uIGNvbXBpbGVUYWdzICh0YWdzVG9Db21waWxlKSB7XG4gICAgICBpZiAodHlwZW9mIHRhZ3NUb0NvbXBpbGUgPT09ICdzdHJpbmcnKVxuICAgICAgICB0YWdzVG9Db21waWxlID0gdGFnc1RvQ29tcGlsZS5zcGxpdChzcGFjZVJlLCAyKTtcblxuICAgICAgaWYgKCFpc0FycmF5KHRhZ3NUb0NvbXBpbGUpIHx8IHRhZ3NUb0NvbXBpbGUubGVuZ3RoICE9PSAyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdGFnczogJyArIHRhZ3NUb0NvbXBpbGUpO1xuXG4gICAgICBvcGVuaW5nVGFnUmUgPSBuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cCh0YWdzVG9Db21waWxlWzBdKSArICdcXFxccyonKTtcbiAgICAgIGNsb3NpbmdUYWdSZSA9IG5ldyBSZWdFeHAoJ1xcXFxzKicgKyBlc2NhcGVSZWdFeHAodGFnc1RvQ29tcGlsZVsxXSkpO1xuICAgICAgY2xvc2luZ0N1cmx5UmUgPSBuZXcgUmVnRXhwKCdcXFxccyonICsgZXNjYXBlUmVnRXhwKCd9JyArIHRhZ3NUb0NvbXBpbGVbMV0pKTtcbiAgICB9XG5cbiAgICBjb21waWxlVGFncyh0YWdzIHx8IG11c3RhY2hlLnRhZ3MpO1xuXG4gICAgdmFyIHNjYW5uZXIgPSBuZXcgU2Nhbm5lcih0ZW1wbGF0ZSk7XG5cbiAgICB2YXIgc3RhcnQsIHR5cGUsIHZhbHVlLCBjaHIsIHRva2VuLCBvcGVuU2VjdGlvbjtcbiAgICB3aGlsZSAoIXNjYW5uZXIuZW9zKCkpIHtcbiAgICAgIHN0YXJ0ID0gc2Nhbm5lci5wb3M7XG5cbiAgICAgIC8vIE1hdGNoIGFueSB0ZXh0IGJldHdlZW4gdGFncy5cbiAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwob3BlbmluZ1RhZ1JlKTtcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCB2YWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgaSA8IHZhbHVlTGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBjaHIgPSB2YWx1ZS5jaGFyQXQoaSk7XG5cbiAgICAgICAgICBpZiAoaXNXaGl0ZXNwYWNlKGNocikpIHtcbiAgICAgICAgICAgIHNwYWNlcy5wdXNoKHRva2Vucy5sZW5ndGgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub25TcGFjZSA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9rZW5zLnB1c2goWyAndGV4dCcsIGNociwgc3RhcnQsIHN0YXJ0ICsgMSBdKTtcbiAgICAgICAgICBzdGFydCArPSAxO1xuXG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIHdoaXRlc3BhY2Ugb24gdGhlIGN1cnJlbnQgbGluZS5cbiAgICAgICAgICBpZiAoY2hyID09PSAnXFxuJylcbiAgICAgICAgICAgIHN0cmlwU3BhY2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBNYXRjaCB0aGUgb3BlbmluZyB0YWcuXG4gICAgICBpZiAoIXNjYW5uZXIuc2NhbihvcGVuaW5nVGFnUmUpKVxuICAgICAgICBicmVhaztcblxuICAgICAgaGFzVGFnID0gdHJ1ZTtcblxuICAgICAgLy8gR2V0IHRoZSB0YWcgdHlwZS5cbiAgICAgIHR5cGUgPSBzY2FubmVyLnNjYW4odGFnUmUpIHx8ICduYW1lJztcbiAgICAgIHNjYW5uZXIuc2Nhbih3aGl0ZVJlKTtcblxuICAgICAgLy8gR2V0IHRoZSB0YWcgdmFsdWUuXG4gICAgICBpZiAodHlwZSA9PT0gJz0nKSB7XG4gICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoZXF1YWxzUmUpO1xuICAgICAgICBzY2FubmVyLnNjYW4oZXF1YWxzUmUpO1xuICAgICAgICBzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nVGFnUmUpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAneycpIHtcbiAgICAgICAgdmFsdWUgPSBzY2FubmVyLnNjYW5VbnRpbChjbG9zaW5nQ3VybHlSZSk7XG4gICAgICAgIHNjYW5uZXIuc2NhbihjdXJseVJlKTtcbiAgICAgICAgc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgICAgdHlwZSA9ICcmJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gc2Nhbm5lci5zY2FuVW50aWwoY2xvc2luZ1RhZ1JlKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWF0Y2ggdGhlIGNsb3NpbmcgdGFnLlxuICAgICAgaWYgKCFzY2FubmVyLnNjYW4oY2xvc2luZ1RhZ1JlKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCB0YWcgYXQgJyArIHNjYW5uZXIucG9zKTtcblxuICAgICAgdG9rZW4gPSBbIHR5cGUsIHZhbHVlLCBzdGFydCwgc2Nhbm5lci5wb3MgXTtcbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcblxuICAgICAgaWYgKHR5cGUgPT09ICcjJyB8fCB0eXBlID09PSAnXicpIHtcbiAgICAgICAgc2VjdGlvbnMucHVzaCh0b2tlbik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICcvJykge1xuICAgICAgICAvLyBDaGVjayBzZWN0aW9uIG5lc3RpbmcuXG4gICAgICAgIG9wZW5TZWN0aW9uID0gc2VjdGlvbnMucG9wKCk7XG5cbiAgICAgICAgaWYgKCFvcGVuU2VjdGlvbilcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vub3BlbmVkIHNlY3Rpb24gXCInICsgdmFsdWUgKyAnXCIgYXQgJyArIHN0YXJ0KTtcblxuICAgICAgICBpZiAob3BlblNlY3Rpb25bMV0gIT09IHZhbHVlKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5jbG9zZWQgc2VjdGlvbiBcIicgKyBvcGVuU2VjdGlvblsxXSArICdcIiBhdCAnICsgc3RhcnQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnbmFtZScgfHwgdHlwZSA9PT0gJ3snIHx8IHR5cGUgPT09ICcmJykge1xuICAgICAgICBub25TcGFjZSA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICc9Jykge1xuICAgICAgICAvLyBTZXQgdGhlIHRhZ3MgZm9yIHRoZSBuZXh0IHRpbWUgYXJvdW5kLlxuICAgICAgICBjb21waWxlVGFncyh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFrZSBzdXJlIHRoZXJlIGFyZSBubyBvcGVuIHNlY3Rpb25zIHdoZW4gd2UncmUgZG9uZS5cbiAgICBvcGVuU2VjdGlvbiA9IHNlY3Rpb25zLnBvcCgpO1xuXG4gICAgaWYgKG9wZW5TZWN0aW9uKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNsb3NlZCBzZWN0aW9uIFwiJyArIG9wZW5TZWN0aW9uWzFdICsgJ1wiIGF0ICcgKyBzY2FubmVyLnBvcyk7XG5cbiAgICByZXR1cm4gbmVzdFRva2VucyhzcXVhc2hUb2tlbnModG9rZW5zKSk7XG4gIH1cblxuICAvKipcbiAgICogQ29tYmluZXMgdGhlIHZhbHVlcyBvZiBjb25zZWN1dGl2ZSB0ZXh0IHRva2VucyBpbiB0aGUgZ2l2ZW4gYHRva2Vuc2AgYXJyYXlcbiAgICogdG8gYSBzaW5nbGUgdG9rZW4uXG4gICAqL1xuICBmdW5jdGlvbiBzcXVhc2hUb2tlbnMgKHRva2Vucykge1xuICAgIHZhciBzcXVhc2hlZFRva2VucyA9IFtdO1xuXG4gICAgdmFyIHRva2VuLCBsYXN0VG9rZW47XG4gICAgZm9yICh2YXIgaSA9IDAsIG51bVRva2VucyA9IHRva2Vucy5sZW5ndGg7IGkgPCBudW1Ub2tlbnM7ICsraSkge1xuICAgICAgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBpZiAodG9rZW5bMF0gPT09ICd0ZXh0JyAmJiBsYXN0VG9rZW4gJiYgbGFzdFRva2VuWzBdID09PSAndGV4dCcpIHtcbiAgICAgICAgICBsYXN0VG9rZW5bMV0gKz0gdG9rZW5bMV07XG4gICAgICAgICAgbGFzdFRva2VuWzNdID0gdG9rZW5bM107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3F1YXNoZWRUb2tlbnMucHVzaCh0b2tlbik7XG4gICAgICAgICAgbGFzdFRva2VuID0gdG9rZW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3F1YXNoZWRUb2tlbnM7XG4gIH1cblxuICAvKipcbiAgICogRm9ybXMgdGhlIGdpdmVuIGFycmF5IG9mIGB0b2tlbnNgIGludG8gYSBuZXN0ZWQgdHJlZSBzdHJ1Y3R1cmUgd2hlcmVcbiAgICogdG9rZW5zIHRoYXQgcmVwcmVzZW50IGEgc2VjdGlvbiBoYXZlIHR3byBhZGRpdGlvbmFsIGl0ZW1zOiAxKSBhbiBhcnJheSBvZlxuICAgKiBhbGwgdG9rZW5zIHRoYXQgYXBwZWFyIGluIHRoYXQgc2VjdGlvbiBhbmQgMikgdGhlIGluZGV4IGluIHRoZSBvcmlnaW5hbFxuICAgKiB0ZW1wbGF0ZSB0aGF0IHJlcHJlc2VudHMgdGhlIGVuZCBvZiB0aGF0IHNlY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiBuZXN0VG9rZW5zICh0b2tlbnMpIHtcbiAgICB2YXIgbmVzdGVkVG9rZW5zID0gW107XG4gICAgdmFyIGNvbGxlY3RvciA9IG5lc3RlZFRva2VucztcbiAgICB2YXIgc2VjdGlvbnMgPSBbXTtcblxuICAgIHZhciB0b2tlbiwgc2VjdGlvbjtcbiAgICBmb3IgKHZhciBpID0gMCwgbnVtVG9rZW5zID0gdG9rZW5zLmxlbmd0aDsgaSA8IG51bVRva2VuczsgKytpKSB7XG4gICAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgICAgc3dpdGNoICh0b2tlblswXSkge1xuICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgY2FzZSAnXic6XG4gICAgICAgICAgY29sbGVjdG9yLnB1c2godG9rZW4pO1xuICAgICAgICAgIHNlY3Rpb25zLnB1c2godG9rZW4pO1xuICAgICAgICAgIGNvbGxlY3RvciA9IHRva2VuWzRdID0gW107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgIHNlY3Rpb24gPSBzZWN0aW9ucy5wb3AoKTtcbiAgICAgICAgICBzZWN0aW9uWzVdID0gdG9rZW5bMl07XG4gICAgICAgICAgY29sbGVjdG9yID0gc2VjdGlvbnMubGVuZ3RoID4gMCA/IHNlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aCAtIDFdWzRdIDogbmVzdGVkVG9rZW5zO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHRva2VuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmVzdGVkVG9rZW5zO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgc2ltcGxlIHN0cmluZyBzY2FubmVyIHRoYXQgaXMgdXNlZCBieSB0aGUgdGVtcGxhdGUgcGFyc2VyIHRvIGZpbmRcbiAgICogdG9rZW5zIGluIHRlbXBsYXRlIHN0cmluZ3MuXG4gICAqL1xuICBmdW5jdGlvbiBTY2FubmVyIChzdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRhaWwgPSBzdHJpbmc7XG4gICAgdGhpcy5wb3MgPSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB0YWlsIGlzIGVtcHR5IChlbmQgb2Ygc3RyaW5nKS5cbiAgICovXG4gIFNjYW5uZXIucHJvdG90eXBlLmVvcyA9IGZ1bmN0aW9uIGVvcyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFpbCA9PT0gJyc7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIG1hdGNoIHRoZSBnaXZlbiByZWd1bGFyIGV4cHJlc3Npb24gYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24uXG4gICAqIFJldHVybnMgdGhlIG1hdGNoZWQgdGV4dCBpZiBpdCBjYW4gbWF0Y2gsIHRoZSBlbXB0eSBzdHJpbmcgb3RoZXJ3aXNlLlxuICAgKi9cbiAgU2Nhbm5lci5wcm90b3R5cGUuc2NhbiA9IGZ1bmN0aW9uIHNjYW4gKHJlKSB7XG4gICAgdmFyIG1hdGNoID0gdGhpcy50YWlsLm1hdGNoKHJlKTtcblxuICAgIGlmICghbWF0Y2ggfHwgbWF0Y2guaW5kZXggIT09IDApXG4gICAgICByZXR1cm4gJyc7XG5cbiAgICB2YXIgc3RyaW5nID0gbWF0Y2hbMF07XG5cbiAgICB0aGlzLnRhaWwgPSB0aGlzLnRhaWwuc3Vic3RyaW5nKHN0cmluZy5sZW5ndGgpO1xuICAgIHRoaXMucG9zICs9IHN0cmluZy5sZW5ndGg7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTa2lwcyBhbGwgdGV4dCB1bnRpbCB0aGUgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uIGNhbiBiZSBtYXRjaGVkLiBSZXR1cm5zXG4gICAqIHRoZSBza2lwcGVkIHN0cmluZywgd2hpY2ggaXMgdGhlIGVudGlyZSB0YWlsIGlmIG5vIG1hdGNoIGNhbiBiZSBtYWRlLlxuICAgKi9cbiAgU2Nhbm5lci5wcm90b3R5cGUuc2NhblVudGlsID0gZnVuY3Rpb24gc2NhblVudGlsIChyZSkge1xuICAgIHZhciBpbmRleCA9IHRoaXMudGFpbC5zZWFyY2gocmUpLCBtYXRjaDtcblxuICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgIGNhc2UgLTE6XG4gICAgICAgIG1hdGNoID0gdGhpcy50YWlsO1xuICAgICAgICB0aGlzLnRhaWwgPSAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIG1hdGNoID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbWF0Y2ggPSB0aGlzLnRhaWwuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgICAgICAgdGhpcy50YWlsID0gdGhpcy50YWlsLnN1YnN0cmluZyhpbmRleCk7XG4gICAgfVxuXG4gICAgdGhpcy5wb3MgKz0gbWF0Y2gubGVuZ3RoO1xuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGEgcmVuZGVyaW5nIGNvbnRleHQgYnkgd3JhcHBpbmcgYSB2aWV3IG9iamVjdCBhbmRcbiAgICogbWFpbnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIHBhcmVudCBjb250ZXh0LlxuICAgKi9cbiAgZnVuY3Rpb24gQ29udGV4dCAodmlldywgcGFyZW50Q29udGV4dCkge1xuICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgdGhpcy5jYWNoZSA9IHsgJy4nOiB0aGlzLnZpZXcgfTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudENvbnRleHQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBjb250ZXh0IHVzaW5nIHRoZSBnaXZlbiB2aWV3IHdpdGggdGhpcyBjb250ZXh0XG4gICAqIGFzIHRoZSBwYXJlbnQuXG4gICAqL1xuICBDb250ZXh0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gcHVzaCAodmlldykge1xuICAgIHJldHVybiBuZXcgQ29udGV4dCh2aWV3LCB0aGlzKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgdGhlIGdpdmVuIG5hbWUgaW4gdGhpcyBjb250ZXh0LCB0cmF2ZXJzaW5nXG4gICAqIHVwIHRoZSBjb250ZXh0IGhpZXJhcmNoeSBpZiB0aGUgdmFsdWUgaXMgYWJzZW50IGluIHRoaXMgY29udGV4dCdzIHZpZXcuXG4gICAqL1xuICBDb250ZXh0LnByb3RvdHlwZS5sb29rdXAgPSBmdW5jdGlvbiBsb29rdXAgKG5hbWUpIHtcbiAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlO1xuXG4gICAgdmFyIHZhbHVlO1xuICAgIGlmIChjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgdmFsdWUgPSBjYWNoZVtuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBuYW1lcywgaW5kZXgsIGxvb2t1cEhpdCA9IGZhbHNlO1xuXG4gICAgICB3aGlsZSAoY29udGV4dCkge1xuICAgICAgICBpZiAobmFtZS5pbmRleE9mKCcuJykgPiAwKSB7XG4gICAgICAgICAgdmFsdWUgPSBjb250ZXh0LnZpZXc7XG4gICAgICAgICAgbmFtZXMgPSBuYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVXNpbmcgdGhlIGRvdCBub3Rpb24gcGF0aCBpbiBgbmFtZWAsIHdlIGRlc2NlbmQgdGhyb3VnaCB0aGVcbiAgICAgICAgICAgKiBuZXN0ZWQgb2JqZWN0cy5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIFRvIGJlIGNlcnRhaW4gdGhhdCB0aGUgbG9va3VwIGhhcyBiZWVuIHN1Y2Nlc3NmdWwsIHdlIGhhdmUgdG9cbiAgICAgICAgICAgKiBjaGVjayBpZiB0aGUgbGFzdCBvYmplY3QgaW4gdGhlIHBhdGggYWN0dWFsbHkgaGFzIHRoZSBwcm9wZXJ0eVxuICAgICAgICAgICAqIHdlIGFyZSBsb29raW5nIGZvci4gV2Ugc3RvcmUgdGhlIHJlc3VsdCBpbiBgbG9va3VwSGl0YC5cbiAgICAgICAgICAgKlxuICAgICAgICAgICAqIFRoaXMgaXMgc3BlY2lhbGx5IG5lY2Vzc2FyeSBmb3Igd2hlbiB0aGUgdmFsdWUgaGFzIGJlZW4gc2V0IHRvXG4gICAgICAgICAgICogYHVuZGVmaW5lZGAgYW5kIHdlIHdhbnQgdG8gYXZvaWQgbG9va2luZyB1cCBwYXJlbnQgY29udGV4dHMuXG4gICAgICAgICAgICoqL1xuICAgICAgICAgIHdoaWxlICh2YWx1ZSAhPSBudWxsICYmIGluZGV4IDwgbmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IG5hbWVzLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgIGxvb2t1cEhpdCA9IGhhc1Byb3BlcnR5KHZhbHVlLCBuYW1lc1tpbmRleF0pO1xuXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlW25hbWVzW2luZGV4KytdXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSBjb250ZXh0LnZpZXdbbmFtZV07XG4gICAgICAgICAgbG9va3VwSGl0ID0gaGFzUHJvcGVydHkoY29udGV4dC52aWV3LCBuYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb29rdXBIaXQpXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQucGFyZW50O1xuICAgICAgfVxuXG4gICAgICBjYWNoZVtuYW1lXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSlcbiAgICAgIHZhbHVlID0gdmFsdWUuY2FsbCh0aGlzLnZpZXcpO1xuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBIFdyaXRlciBrbm93cyBob3cgdG8gdGFrZSBhIHN0cmVhbSBvZiB0b2tlbnMgYW5kIHJlbmRlciB0aGVtIHRvIGFcbiAgICogc3RyaW5nLCBnaXZlbiBhIGNvbnRleHQuIEl0IGFsc28gbWFpbnRhaW5zIGEgY2FjaGUgb2YgdGVtcGxhdGVzIHRvXG4gICAqIGF2b2lkIHRoZSBuZWVkIHRvIHBhcnNlIHRoZSBzYW1lIHRlbXBsYXRlIHR3aWNlLlxuICAgKi9cbiAgZnVuY3Rpb24gV3JpdGVyICgpIHtcbiAgICB0aGlzLmNhY2hlID0ge307XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGFsbCBjYWNoZWQgdGVtcGxhdGVzIGluIHRoaXMgd3JpdGVyLlxuICAgKi9cbiAgV3JpdGVyLnByb3RvdHlwZS5jbGVhckNhY2hlID0gZnVuY3Rpb24gY2xlYXJDYWNoZSAoKSB7XG4gICAgdGhpcy5jYWNoZSA9IHt9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW5kIGNhY2hlcyB0aGUgZ2l2ZW4gYHRlbXBsYXRlYCBhbmQgcmV0dXJucyB0aGUgYXJyYXkgb2YgdG9rZW5zXG4gICAqIHRoYXQgaXMgZ2VuZXJhdGVkIGZyb20gdGhlIHBhcnNlLlxuICAgKi9cbiAgV3JpdGVyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlICh0ZW1wbGF0ZSwgdGFncykge1xuICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG4gICAgdmFyIHRva2VucyA9IGNhY2hlW3RlbXBsYXRlXTtcblxuICAgIGlmICh0b2tlbnMgPT0gbnVsbClcbiAgICAgIHRva2VucyA9IGNhY2hlW3RlbXBsYXRlXSA9IHBhcnNlVGVtcGxhdGUodGVtcGxhdGUsIHRhZ3MpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfTtcblxuICAvKipcbiAgICogSGlnaC1sZXZlbCBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIHJlbmRlciB0aGUgZ2l2ZW4gYHRlbXBsYXRlYCB3aXRoXG4gICAqIHRoZSBnaXZlbiBgdmlld2AuXG4gICAqXG4gICAqIFRoZSBvcHRpb25hbCBgcGFydGlhbHNgIGFyZ3VtZW50IG1heSBiZSBhbiBvYmplY3QgdGhhdCBjb250YWlucyB0aGVcbiAgICogbmFtZXMgYW5kIHRlbXBsYXRlcyBvZiBwYXJ0aWFscyB0aGF0IGFyZSB1c2VkIGluIHRoZSB0ZW1wbGF0ZS4gSXQgbWF5XG4gICAqIGFsc28gYmUgYSBmdW5jdGlvbiB0aGF0IGlzIHVzZWQgdG8gbG9hZCBwYXJ0aWFsIHRlbXBsYXRlcyBvbiB0aGUgZmx5XG4gICAqIHRoYXQgdGFrZXMgYSBzaW5nbGUgYXJndW1lbnQ6IHRoZSBuYW1lIG9mIHRoZSBwYXJ0aWFsLlxuICAgKi9cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscykge1xuICAgIHZhciB0b2tlbnMgPSB0aGlzLnBhcnNlKHRlbXBsYXRlKTtcbiAgICB2YXIgY29udGV4dCA9ICh2aWV3IGluc3RhbmNlb2YgQ29udGV4dCkgPyB2aWV3IDogbmV3IENvbnRleHQodmlldyk7XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VucywgY29udGV4dCwgcGFydGlhbHMsIHRlbXBsYXRlKTtcbiAgfTtcblxuICAvKipcbiAgICogTG93LWxldmVsIG1ldGhvZCB0aGF0IHJlbmRlcnMgdGhlIGdpdmVuIGFycmF5IG9mIGB0b2tlbnNgIHVzaW5nXG4gICAqIHRoZSBnaXZlbiBgY29udGV4dGAgYW5kIGBwYXJ0aWFsc2AuXG4gICAqXG4gICAqIE5vdGU6IFRoZSBgb3JpZ2luYWxUZW1wbGF0ZWAgaXMgb25seSBldmVyIHVzZWQgdG8gZXh0cmFjdCB0aGUgcG9ydGlvblxuICAgKiBvZiB0aGUgb3JpZ2luYWwgdGVtcGxhdGUgdGhhdCB3YXMgY29udGFpbmVkIGluIGEgaGlnaGVyLW9yZGVyIHNlY3Rpb24uXG4gICAqIElmIHRoZSB0ZW1wbGF0ZSBkb2Vzbid0IHVzZSBoaWdoZXItb3JkZXIgc2VjdGlvbnMsIHRoaXMgYXJndW1lbnQgbWF5XG4gICAqIGJlIG9taXR0ZWQuXG4gICAqL1xuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlclRva2VucyA9IGZ1bmN0aW9uIHJlbmRlclRva2VucyAodG9rZW5zLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSkge1xuICAgIHZhciBidWZmZXIgPSAnJztcblxuICAgIHZhciB0b2tlbiwgc3ltYm9sLCB2YWx1ZTtcbiAgICBmb3IgKHZhciBpID0gMCwgbnVtVG9rZW5zID0gdG9rZW5zLmxlbmd0aDsgaSA8IG51bVRva2VuczsgKytpKSB7XG4gICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgc3ltYm9sID0gdG9rZW5bMF07XG5cbiAgICAgIGlmIChzeW1ib2wgPT09ICcjJykgdmFsdWUgPSB0aGlzLnJlbmRlclNlY3Rpb24odG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKTtcbiAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJ14nKSB2YWx1ZSA9IHRoaXMucmVuZGVySW52ZXJ0ZWQodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKTtcbiAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJz4nKSB2YWx1ZSA9IHRoaXMucmVuZGVyUGFydGlhbCh0b2tlbiwgY29udGV4dCwgcGFydGlhbHMsIG9yaWdpbmFsVGVtcGxhdGUpO1xuICAgICAgZWxzZSBpZiAoc3ltYm9sID09PSAnJicpIHZhbHVlID0gdGhpcy51bmVzY2FwZWRWYWx1ZSh0b2tlbiwgY29udGV4dCk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICduYW1lJykgdmFsdWUgPSB0aGlzLmVzY2FwZWRWYWx1ZSh0b2tlbiwgY29udGV4dCk7XG4gICAgICBlbHNlIGlmIChzeW1ib2wgPT09ICd0ZXh0JykgdmFsdWUgPSB0aGlzLnJhd1ZhbHVlKHRva2VuKTtcblxuICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgIGJ1ZmZlciArPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmZmVyO1xuICB9O1xuXG4gIFdyaXRlci5wcm90b3R5cGUucmVuZGVyU2VjdGlvbiA9IGZ1bmN0aW9uIHJlbmRlclNlY3Rpb24gKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgYnVmZmVyID0gJyc7XG4gICAgdmFyIHZhbHVlID0gY29udGV4dC5sb29rdXAodG9rZW5bMV0pO1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIHJlbmRlciBhbiBhcmJpdHJhcnkgdGVtcGxhdGVcbiAgICAvLyBpbiB0aGUgY3VycmVudCBjb250ZXh0IGJ5IGhpZ2hlci1vcmRlciBzZWN0aW9ucy5cbiAgICBmdW5jdGlvbiBzdWJSZW5kZXIgKHRlbXBsYXRlKSB7XG4gICAgICByZXR1cm4gc2VsZi5yZW5kZXIodGVtcGxhdGUsIGNvbnRleHQsIHBhcnRpYWxzKTtcbiAgICB9XG5cbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XG5cbiAgICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGZvciAodmFyIGogPSAwLCB2YWx1ZUxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgaiA8IHZhbHVlTGVuZ3RoOyArK2opIHtcbiAgICAgICAgYnVmZmVyICs9IHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LnB1c2godmFsdWVbal0pLCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgYnVmZmVyICs9IHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LnB1c2godmFsdWUpLCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHZhbHVlKSkge1xuICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbFRlbXBsYXRlICE9PSAnc3RyaW5nJylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgdXNlIGhpZ2hlci1vcmRlciBzZWN0aW9ucyB3aXRob3V0IHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZScpO1xuXG4gICAgICAvLyBFeHRyYWN0IHRoZSBwb3J0aW9uIG9mIHRoZSBvcmlnaW5hbCB0ZW1wbGF0ZSB0aGF0IHRoZSBzZWN0aW9uIGNvbnRhaW5zLlxuICAgICAgdmFsdWUgPSB2YWx1ZS5jYWxsKGNvbnRleHQudmlldywgb3JpZ2luYWxUZW1wbGF0ZS5zbGljZSh0b2tlblszXSwgdG9rZW5bNV0pLCBzdWJSZW5kZXIpO1xuXG4gICAgICBpZiAodmFsdWUgIT0gbnVsbClcbiAgICAgICAgYnVmZmVyICs9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBidWZmZXIgKz0gdGhpcy5yZW5kZXJUb2tlbnModG9rZW5bNF0sIGNvbnRleHQsIHBhcnRpYWxzLCBvcmlnaW5hbFRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZmZlcjtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnJlbmRlckludmVydGVkID0gZnVuY3Rpb24gcmVuZGVySW52ZXJ0ZWQgKHRva2VuLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSkge1xuICAgIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcblxuICAgIC8vIFVzZSBKYXZhU2NyaXB0J3MgZGVmaW5pdGlvbiBvZiBmYWxzeS4gSW5jbHVkZSBlbXB0eSBhcnJheXMuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYW5sL211c3RhY2hlLmpzL2lzc3Vlcy8xODZcbiAgICBpZiAoIXZhbHVlIHx8IChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApKVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVG9rZW5zKHRva2VuWzRdLCBjb250ZXh0LCBwYXJ0aWFscywgb3JpZ2luYWxUZW1wbGF0ZSk7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS5yZW5kZXJQYXJ0aWFsID0gZnVuY3Rpb24gcmVuZGVyUGFydGlhbCAodG9rZW4sIGNvbnRleHQsIHBhcnRpYWxzKSB7XG4gICAgaWYgKCFwYXJ0aWFscykgcmV0dXJuO1xuXG4gICAgdmFyIHZhbHVlID0gaXNGdW5jdGlvbihwYXJ0aWFscykgPyBwYXJ0aWFscyh0b2tlblsxXSkgOiBwYXJ0aWFsc1t0b2tlblsxXV07XG4gICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJUb2tlbnModGhpcy5wYXJzZSh2YWx1ZSksIGNvbnRleHQsIHBhcnRpYWxzLCB2YWx1ZSk7XG4gIH07XG5cbiAgV3JpdGVyLnByb3RvdHlwZS51bmVzY2FwZWRWYWx1ZSA9IGZ1bmN0aW9uIHVuZXNjYXBlZFZhbHVlICh0b2tlbiwgY29udGV4dCkge1xuICAgIHZhciB2YWx1ZSA9IGNvbnRleHQubG9va3VwKHRva2VuWzFdKTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbClcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLmVzY2FwZWRWYWx1ZSA9IGZ1bmN0aW9uIGVzY2FwZWRWYWx1ZSAodG9rZW4sIGNvbnRleHQpIHtcbiAgICB2YXIgdmFsdWUgPSBjb250ZXh0Lmxvb2t1cCh0b2tlblsxXSk7XG4gICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICByZXR1cm4gbXVzdGFjaGUuZXNjYXBlKHZhbHVlKTtcbiAgfTtcblxuICBXcml0ZXIucHJvdG90eXBlLnJhd1ZhbHVlID0gZnVuY3Rpb24gcmF3VmFsdWUgKHRva2VuKSB7XG4gICAgcmV0dXJuIHRva2VuWzFdO1xuICB9O1xuXG4gIG11c3RhY2hlLm5hbWUgPSAnbXVzdGFjaGUuanMnO1xuICBtdXN0YWNoZS52ZXJzaW9uID0gJzIuMy4wJztcbiAgbXVzdGFjaGUudGFncyA9IFsgJ3t7JywgJ319JyBdO1xuXG4gIC8vIEFsbCBoaWdoLWxldmVsIG11c3RhY2hlLiogZnVuY3Rpb25zIHVzZSB0aGlzIHdyaXRlci5cbiAgdmFyIGRlZmF1bHRXcml0ZXIgPSBuZXcgV3JpdGVyKCk7XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgY2FjaGVkIHRlbXBsYXRlcyBpbiB0aGUgZGVmYXVsdCB3cml0ZXIuXG4gICAqL1xuICBtdXN0YWNoZS5jbGVhckNhY2hlID0gZnVuY3Rpb24gY2xlYXJDYWNoZSAoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRXcml0ZXIuY2xlYXJDYWNoZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgYW5kIGNhY2hlcyB0aGUgZ2l2ZW4gdGVtcGxhdGUgaW4gdGhlIGRlZmF1bHQgd3JpdGVyIGFuZCByZXR1cm5zIHRoZVxuICAgKiBhcnJheSBvZiB0b2tlbnMgaXQgY29udGFpbnMuIERvaW5nIHRoaXMgYWhlYWQgb2YgdGltZSBhdm9pZHMgdGhlIG5lZWQgdG9cbiAgICogcGFyc2UgdGVtcGxhdGVzIG9uIHRoZSBmbHkgYXMgdGhleSBhcmUgcmVuZGVyZWQuXG4gICAqL1xuICBtdXN0YWNoZS5wYXJzZSA9IGZ1bmN0aW9uIHBhcnNlICh0ZW1wbGF0ZSwgdGFncykge1xuICAgIHJldHVybiBkZWZhdWx0V3JpdGVyLnBhcnNlKHRlbXBsYXRlLCB0YWdzKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgYHRlbXBsYXRlYCB3aXRoIHRoZSBnaXZlbiBgdmlld2AgYW5kIGBwYXJ0aWFsc2AgdXNpbmcgdGhlXG4gICAqIGRlZmF1bHQgd3JpdGVyLlxuICAgKi9cbiAgbXVzdGFjaGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyICh0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpIHtcbiAgICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCB0ZW1wbGF0ZSEgVGVtcGxhdGUgc2hvdWxkIGJlIGEgXCJzdHJpbmdcIiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2J1dCBcIicgKyB0eXBlU3RyKHRlbXBsYXRlKSArICdcIiB3YXMgZ2l2ZW4gYXMgdGhlIGZpcnN0ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYXJndW1lbnQgZm9yIG11c3RhY2hlI3JlbmRlcih0ZW1wbGF0ZSwgdmlldywgcGFydGlhbHMpJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRXcml0ZXIucmVuZGVyKHRlbXBsYXRlLCB2aWV3LCBwYXJ0aWFscyk7XG4gIH07XG5cbiAgLy8gVGhpcyBpcyBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIDAuNC54LixcbiAgLyplc2xpbnQtZGlzYWJsZSAqLyAvLyBlc2xpbnQgd2FudHMgY2FtZWwgY2FzZWQgZnVuY3Rpb24gbmFtZVxuICBtdXN0YWNoZS50b19odG1sID0gZnVuY3Rpb24gdG9faHRtbCAodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzLCBzZW5kKSB7XG4gICAgLyplc2xpbnQtZW5hYmxlKi9cblxuICAgIHZhciByZXN1bHQgPSBtdXN0YWNoZS5yZW5kZXIodGVtcGxhdGUsIHZpZXcsIHBhcnRpYWxzKTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKHNlbmQpKSB7XG4gICAgICBzZW5kKHJlc3VsdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9O1xuXG4gIC8vIEV4cG9ydCB0aGUgZXNjYXBpbmcgZnVuY3Rpb24gc28gdGhhdCB0aGUgdXNlciBtYXkgb3ZlcnJpZGUgaXQuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vamFubC9tdXN0YWNoZS5qcy9pc3N1ZXMvMjQ0XG4gIG11c3RhY2hlLmVzY2FwZSA9IGVzY2FwZUh0bWw7XG5cbiAgLy8gRXhwb3J0IHRoZXNlIG1haW5seSBmb3IgdGVzdGluZywgYnV0IGFsc28gZm9yIGFkdmFuY2VkIHVzYWdlLlxuICBtdXN0YWNoZS5TY2FubmVyID0gU2Nhbm5lcjtcbiAgbXVzdGFjaGUuQ29udGV4dCA9IENvbnRleHQ7XG4gIG11c3RhY2hlLldyaXRlciA9IFdyaXRlcjtcblxuICByZXR1cm4gbXVzdGFjaGU7XG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9tdXN0YWNoZS9tdXN0YWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY2xhc3MgQ2Fyb3VzZWwge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5jYXJvdXNlbENvbnRlbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWNvbnRlbnQnKTtcclxuICAgIHRoaXMuaXRlbXMgPSB0aGlzLmNhcm91c2VsQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtaXRlbScpO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtbmF2LWxlZnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMucHJldlNsaWRlKCk7XHJcbiAgICB9LCBmYWxzZSk7XHJcbiAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLW5hdi1yaWdodCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgdGhpcy5uZXh0U2xpZGUoKTtcclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICB0aGlzLnNldE9yZGVyKCk7XHJcbiAgfVxyXG5cclxuICBzZXRPcmRlcihkaXJlY3Rpb24pe1xyXG4gICAgLy8gaW5pdGlhbGl6ZSBkaXJlY3Rpb24gdG8gY2hhbmdlIG9yZGVyXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAncHJldmlvdXMnKSB7XHJcbiAgICAgIGRpcmVjdGlvbiA9IDE7XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKSB7XHJcbiAgICAgIGRpcmVjdGlvbiA9IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBuYkl0ZW1zID0gdGhpcy5pdGVtcy5sZW5ndGg7XHJcbiAgICBpZiAobmJJdGVtcykge1xyXG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgbGV0IG5ld1ZhbHVlO1xyXG4gICAgICAgIGlmIChpdGVtLnN0eWxlLm9yZGVyKSB7XHJcbiAgICAgICAgICBuZXdWYWx1ZSA9IChwYXJzZUludChpdGVtLnN0eWxlLm9yZGVyLCAxMCkgKyBkaXJlY3Rpb24pICUgbmJJdGVtcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3VmFsdWUgPSAoKGluZGV4ICsgMikgJSBuYkl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFuZXdWYWx1ZSB8fCBuZXdWYWx1ZSAhPT0gMikge1xyXG4gICAgICAgICAgaXRlbS5zdHlsZVsnei1pbmRleCddID0gJzAnO1xyXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbS5zdHlsZVsnei1pbmRleCddID0gJzEnO1xyXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlbS5zdHlsZS5vcmRlciA9IG5ld1ZhbHVlID8gbmV3VmFsdWUgOiBuYkl0ZW1zO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZTbGlkZShldnQpIHtcclxuICAgIC8vIGFkZCByZXZlcnNlXHJcbiAgICB0aGlzLmNhcm91c2VsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdjYXJvdXNlbC1yZXZlcnNlJyk7XHJcbiAgICAvLyBEaXNhYmxlIHRyYW5zaXRpb24gdG8gaW5zdGFudCBjaGFuZ2Ugb3JkZXJcclxuICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2Nhcm91c2VsLWFuaW1hdGUnKTtcclxuICAgIC8vIENoYW5nZSBvcmRlciBvZiBlbGVtZW50XHJcbiAgICAvLyBDdXJyZW50IG9yZGVyIDIgdmlzaWJsZSBiZWNvbWUgb3JkZXIgMVxyXG4gICAgdGhpcy5zZXRPcmRlcigncHJldmlvdXMnKTtcclxuXHJcbiAgICAvLyBFbmFibGUgdHJhbnNpdGlvbiB0byBhbmltYXRlIG9yZGVyIDEgdG8gb3JkZXIgMlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2Fyb3VzZWxDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2Nhcm91c2VsLWFuaW1hdGUnKTtcclxuICAgIH0sIDUwKTtcclxuICB9XHJcblxyXG4gIG5leHRTbGlkZShldnQpIHtcclxuICAgIC8vIHJlbW92ZSByZXZlcnNlXHJcbiAgICB0aGlzLmNhcm91c2VsQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjYXJvdXNlbC1yZXZlcnNlJyk7XHJcblxyXG4gICAgLy8gRGlzYWJsZSB0cmFuc2l0aW9uIHRvIGluc3RhbnQgY2hhbmdlIG9yZGVyXHJcbiAgICB0aGlzLmNhcm91c2VsQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdjYXJvdXNlbC1hbmltYXRlJyk7XHJcbiAgICAvLyBDaGFuZ2Ugb3JkZXIgb2YgZWxlbWVudFxyXG4gICAgLy8gQ3VycmVudCBvcmRlciAyIHZpc2libGUgYmVjb21lIG9yZGVyIDNcclxuICAgIHRoaXMuc2V0T3JkZXIoJ25leHQnKTtcclxuICAgIC8vIEVuYWJsZSB0cmFuc2l0aW9uIHRvIGFuaW1hdGUgb3JkZXIgMyB0byBvcmRlciAyXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jYXJvdXNlbENvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY2Fyb3VzZWwtYW5pbWF0ZScpO1xyXG4gICAgfSwgNTApO1xyXG4gIH07XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICBsZXQgY2Fyb3VzZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLCAuaGVyby1jYXJvdXNlbCcpO1xyXG4gIGlmIChjYXJvdXNlbHMpIHtcclxuICAgIGNhcm91c2Vscy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBuZXcgQ2Fyb3VzZWwoZWxlbWVudCk7XHJcbiAgICB9KVxyXG4gIH1cclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYnVsbWEtY2Fyb3VzZWwvY2Fyb3VzZWwuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2J1bG1hLWNhcm91c2VsLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2J1bG1hLWNhcm91c2VsLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9idWxtYS1jYXJvdXNlbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2J1bG1hLWNhcm91c2VsL2J1bG1hLWNhcm91c2VsLmNzc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAa2V5ZnJhbWVzIHNwaW5Bcm91bmR7MCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX10b3t0cmFuc2Zvcm06cm90YXRlKDM1OWRlZyl9fS5jYXJvdXNlbHt3aWR0aDoxMDAlO2hlaWdodDphdXRvO21pbi1oZWlnaHQ6NGVtO2JvcmRlcjpub25lO21hcmdpbjphdXRvO2Rpc3BsYXk6ZmxleH0uY2Fyb3VzZWwsLmhlcm97cG9zaXRpb246cmVsYXRpdmV9Lmhlcm8rLmhlcm8tYm9keSwuaGVybysuaGVyby1mb290ZXIsLmhlcm8rLmhlcm8taGVhZHt6LWluZGV4OjF9Lmhlcm8tY2Fyb3VzZWx7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDtib3R0b206MDtyaWdodDowO2hlaWdodDphdXRvO2JvcmRlcjpub25lO21hcmdpbjphdXRvO3BhZGRpbmc6MDt6LWluZGV4OjB9LmNhcm91c2VsLW5hdmlnYXRpb257ZmxleC1zaHJpbms6MDtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MjJweDt6LWluZGV4Ojk5fS5jYXJvdXNlbC1jb250YWluZXJ7ZmxleDoxO2JhY2tncm91bmQ6I2Y1ZjVmNTtkaXNwbGF5OmZsZXg7b3ZlcmZsb3c6aGlkZGVufS5jYXJvdXNlbC1jb250YWluZXIgLmNhcm91c2VsLW5hdi1sZWZ0LC5jYXJvdXNlbC1jb250YWluZXIgLmNhcm91c2VsLW5hdi1yaWdodHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6Y2FsYyg1MCUgLSAxMXB4KTtoZWlnaHQ6Mi4yZW07d2lkdGg6MmVtO2JhY2tncm91bmQ6aHNsYSgwLDAlLDEwMCUsLjcpO2xlZnQ6MDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Y29sb3I6IzRhNGE0YTt6LWluZGV4Ojk5fS5jYXJvdXNlbC1jb250YWluZXIgLmNhcm91c2VsLW5hdi1sZWZ0OmhvdmVyLC5jYXJvdXNlbC1jb250YWluZXIgLmNhcm91c2VsLW5hdi1yaWdodDpob3ZlcntjdXJzb3I6cG9pbnRlcn0uY2Fyb3VzZWwtY29udGFpbmVyIC5jYXJvdXNlbC1uYXYtcmlnaHR7bGVmdDphdXRvO3JpZ2h0OjB9LmNhcm91c2VsLWl0ZW17ZmxleC1zaHJpbms6MDtmbGV4LWdyb3c6MTtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7Ym9yZGVyOm5vbmU7Ym94LXNpemluZzpib3JkZXItYm94O21pbi13aWR0aDoxMDAlO2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJTtwb3NpdGlvbjpyZWxhdGl2ZTttYXgtaGVpZ2h0OjEwMCU7bWF4LXdpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVufS5jYXJvdXNlbC1pdGVtIC5pcy1iYWNrZ3JvdW5ke3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MDttYXJnaW46MDttaW4td2lkdGg6MTAwJX0uY2Fyb3VzZWwtaXRlbSAudGl0bGV7cG9zaXRpb246YWJzb2x1dGU7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7cGFkZGluZzoxLjVlbTttYXJnaW46MDt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kOmhzbGEoMCwwJSwxMDAlLC42KTtmb250LXNpemU6Ljc1cmVtfS5jYXJvdXNlbC1jb250ZW50e2Rpc3BsYXk6ZmxleDtmbGV4OjE7cG9zaXRpb246cmVsYXRpdmV9LmNhcm91c2VsLWNvbnRlbnQuY2Fyb3VzZWwtYW5pbWF0ZS1zbGlkZXtsZWZ0Oi0xMDAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKTstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMDAlLDAsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDEwMCUsMCwwKX0uY2Fyb3VzZWwtY29udGVudC5jYXJvdXNlbC1hbmltYXRlLWZhZGUgLmNhcm91c2VsLWl0ZW17LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7LW1vei10cmFuc2l0aW9uOm9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7LW1zLXRyYW5zaXRpb246b3BhY2l0eSAxcyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOm9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7cG9zaXRpb246YWJzb2x1dGV9LmNhcm91c2VsLWNvbnRlbnQuY2Fyb3VzZWwtYW5pbWF0ZS5jYXJvdXNlbC1hbmltYXRlLXNsaWRle3RyYW5zaXRpb246YWxsIDFzIGVhc2UtaW4tb3V0Oy13ZWJraXQtdHJhbnNmb3JtOm5vbmU7LW1vei10cmFuc2Zvcm06bm9uZTstbXMtdHJhbnNmb3JtOm5vbmU7dHJhbnNmb3JtOm5vbmV9LmNhcm91c2VsLWNvbnRlbnQuY2Fyb3VzZWwtYW5pbWF0ZS5jYXJvdXNlbC1hbmltYXRlLWZhZGUgLmNhcm91c2VsLWl0ZW0uaXMtYWN0aXZle29wYWNpdHk6MX0uY2Fyb3VzZWwtY29udGVudC5jYXJvdXNlbC1hbmltYXRlLmNhcm91c2VsLWFuaW1hdGUtZmFkZSAuY2Fyb3VzZWwtaXRlbTpub3QoLmlzLWFjdGl2ZSl7b3BhY2l0eTowfS5jYXJvdXNlbC1yZXZlcnNlLmNhcm91c2VsLWFuaW1hdGUtc2xpZGV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgtMTAwJSwwLDApOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTEwMCUsMCwwKX1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcIm1pbmltaXplXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvYnVsbWEtY2Fyb3VzZWwvYnVsbWEtY2Fyb3VzZWwuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vYnVsbWEuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vYnVsbWEuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL2J1bG1hLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYnVsbWEvY3NzL2J1bG1hLmNzc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgYnVsbWEuaW8gdjAuNi4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL2pndGhtcy9idWxtYSAqL0Atd2Via2l0LWtleWZyYW1lcyBzcGluQXJvdW5kezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKX19QGtleWZyYW1lcyBzcGluQXJvdW5kezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfXRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNTlkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzU5ZGVnKX19XFxuXFxuLyohIG1pbmlyZXNldC5jc3MgdjAuMC4yIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL2pndGhtcy9taW5pcmVzZXQuY3NzICovYmxvY2txdW90ZSxib2R5LGRkLGRsLGR0LGZpZWxkc2V0LGZpZ3VyZSxoMSxoMixoMyxoNCxoNSxoNixocixodG1sLGlmcmFtZSxsZWdlbmQsbGksb2wscCxwcmUsdGV4dGFyZWEsdWx7bWFyZ2luOjA7cGFkZGluZzowfWgxLGgyLGgzLGg0LGg1LGg2e2ZvbnQtc2l6ZToxMDAlO2ZvbnQtd2VpZ2h0OjQwMH11bHtsaXN0LXN0eWxlOm5vbmV9YnV0dG9uLGlucHV0LHNlbGVjdCx0ZXh0YXJlYXttYXJnaW46MH1odG1sey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveH0qLDphZnRlciw6YmVmb3Jley13ZWJraXQtYm94LXNpemluZzppbmhlcml0O2JveC1zaXppbmc6aW5oZXJpdH1hdWRpbyxlbWJlZCxpbWcsb2JqZWN0LHZpZGVve21heC13aWR0aDoxMDAlfWlmcmFtZXtib3JkZXI6MH10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MH10ZCx0aHtwYWRkaW5nOjA7dGV4dC1hbGlnbjpsZWZ0fWh0bWx7YmFja2dyb3VuZC1jb2xvcjojZmZmO2ZvbnQtc2l6ZToxNnB4Oy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO21pbi13aWR0aDozMDBweDtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OnNjcm9sbDt0ZXh0LXJlbmRlcmluZzpvcHRpbWl6ZUxlZ2liaWxpdHk7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LW1vei10ZXh0LXNpemUtYWRqdXN0OjEwMCU7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTt0ZXh0LXNpemUtYWRqdXN0OjEwMCV9YXJ0aWNsZSxhc2lkZSxmaWd1cmUsZm9vdGVyLGhlYWRlcixoZ3JvdXAsc2VjdGlvbntkaXNwbGF5OmJsb2NrfWJvZHksYnV0dG9uLGlucHV0LHNlbGVjdCx0ZXh0YXJlYXtmb250LWZhbWlseTpCbGlua01hY1N5c3RlbUZvbnQsLWFwcGxlLXN5c3RlbSxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWZ9Y29kZSxwcmV7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6YXV0bzstd2Via2l0LWZvbnQtc21vb3RoaW5nOmF1dG87Zm9udC1mYW1pbHk6bW9ub3NwYWNlfWJvZHl7Y29sb3I6IzRhNGE0YTtmb250LXNpemU6MXJlbTtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MS41fWF7Y29sb3I6IzMyNzNkYztjdXJzb3I6cG9pbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZX1hIHN0cm9uZ3tjb2xvcjpjdXJyZW50Q29sb3J9YTpob3Zlcntjb2xvcjojMzYzNjM2fWNvZGV7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiNmZjM4NjA7Zm9udC1zaXplOi44NzVlbTtmb250LXdlaWdodDo0MDA7cGFkZGluZzouMjVlbSAuNWVtfWhye2JhY2tncm91bmQtY29sb3I6I2RiZGJkYjtib3JkZXI6bm9uZTtkaXNwbGF5OmJsb2NrO2hlaWdodDoxcHg7bWFyZ2luOjEuNXJlbSAwfWltZ3toZWlnaHQ6YXV0bzttYXgtd2lkdGg6MTAwJX1pbnB1dFt0eXBlPWNoZWNrYm94XSxpbnB1dFt0eXBlPXJhZGlvXXt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zbWFsbHtmb250LXNpemU6Ljg3NWVtfXNwYW57Zm9udC1zdHlsZTppbmhlcml0O2ZvbnQtd2VpZ2h0OmluaGVyaXR9c3Ryb25ne2NvbG9yOiMzNjM2MzY7Zm9udC13ZWlnaHQ6NzAwfXByZXstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzRhNGE0YTtmb250LXNpemU6Ljg3NWVtO292ZXJmbG93LXg6YXV0bztwYWRkaW5nOjEuMjVyZW0gMS41cmVtO3doaXRlLXNwYWNlOnByZTt3b3JkLXdyYXA6bm9ybWFsfXByZSBjb2Rle2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6Y3VycmVudENvbG9yO2ZvbnQtc2l6ZToxZW07cGFkZGluZzowfXRhYmxlIHRkLHRhYmxlIHRoe3RleHQtYWxpZ246bGVmdDt2ZXJ0aWNhbC1hbGlnbjp0b3B9dGFibGUgdGh7Y29sb3I6IzM2MzYzNn0uaXMtY2xlYXJmaXg6YWZ0ZXJ7Y2xlYXI6Ym90aDtjb250ZW50OlxcXCIgXFxcIjtkaXNwbGF5OnRhYmxlfS5pcy1wdWxsZWQtbGVmdHtmbG9hdDpsZWZ0IWltcG9ydGFudH0uaXMtcHVsbGVkLXJpZ2h0e2Zsb2F0OnJpZ2h0IWltcG9ydGFudH0uaXMtY2xpcHBlZHtvdmVyZmxvdzpoaWRkZW4haW1wb3J0YW50fS5pcy1vdmVybGF5e2JvdHRvbTowO2xlZnQ6MDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowfS5pcy1zaXplLTF7Zm9udC1zaXplOjNyZW0haW1wb3J0YW50fS5pcy1zaXplLTJ7Zm9udC1zaXplOjIuNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtM3tmb250LXNpemU6MnJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNHtmb250LXNpemU6MS41cmVtIWltcG9ydGFudH0uaXMtc2l6ZS01e2ZvbnQtc2l6ZToxLjI1cmVtIWltcG9ydGFudH0uaXMtc2l6ZS02e2ZvbnQtc2l6ZToxcmVtIWltcG9ydGFudH0uaXMtc2l6ZS03e2ZvbnQtc2l6ZTouNzVyZW0haW1wb3J0YW50fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5pcy1zaXplLTEtbW9iaWxle2ZvbnQtc2l6ZTozcmVtIWltcG9ydGFudH0uaXMtc2l6ZS0yLW1vYmlsZXtmb250LXNpemU6Mi41cmVtIWltcG9ydGFudH0uaXMtc2l6ZS0zLW1vYmlsZXtmb250LXNpemU6MnJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNC1tb2JpbGV7Zm9udC1zaXplOjEuNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNS1tb2JpbGV7Zm9udC1zaXplOjEuMjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTYtbW9iaWxle2ZvbnQtc2l6ZToxcmVtIWltcG9ydGFudH0uaXMtc2l6ZS03LW1vYmlsZXtmb250LXNpemU6Ljc1cmVtIWltcG9ydGFudH19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LmlzLXNpemUtMS10YWJsZXR7Zm9udC1zaXplOjNyZW0haW1wb3J0YW50fS5pcy1zaXplLTItdGFibGV0e2ZvbnQtc2l6ZToyLjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTMtdGFibGV0e2ZvbnQtc2l6ZToycmVtIWltcG9ydGFudH0uaXMtc2l6ZS00LXRhYmxldHtmb250LXNpemU6MS41cmVtIWltcG9ydGFudH0uaXMtc2l6ZS01LXRhYmxldHtmb250LXNpemU6MS4yNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNi10YWJsZXR7Zm9udC1zaXplOjFyZW0haW1wb3J0YW50fS5pcy1zaXplLTctdGFibGV0e2ZvbnQtc2l6ZTouNzVyZW0haW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7LmlzLXNpemUtMS10b3VjaHtmb250LXNpemU6M3JlbSFpbXBvcnRhbnR9LmlzLXNpemUtMi10b3VjaHtmb250LXNpemU6Mi41cmVtIWltcG9ydGFudH0uaXMtc2l6ZS0zLXRvdWNoe2ZvbnQtc2l6ZToycmVtIWltcG9ydGFudH0uaXMtc2l6ZS00LXRvdWNoe2ZvbnQtc2l6ZToxLjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTUtdG91Y2h7Zm9udC1zaXplOjEuMjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTYtdG91Y2h7Zm9udC1zaXplOjFyZW0haW1wb3J0YW50fS5pcy1zaXplLTctdG91Y2h7Zm9udC1zaXplOi43NXJlbSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuaXMtc2l6ZS0xLWRlc2t0b3B7Zm9udC1zaXplOjNyZW0haW1wb3J0YW50fS5pcy1zaXplLTItZGVza3RvcHtmb250LXNpemU6Mi41cmVtIWltcG9ydGFudH0uaXMtc2l6ZS0zLWRlc2t0b3B7Zm9udC1zaXplOjJyZW0haW1wb3J0YW50fS5pcy1zaXplLTQtZGVza3RvcHtmb250LXNpemU6MS41cmVtIWltcG9ydGFudH0uaXMtc2l6ZS01LWRlc2t0b3B7Zm9udC1zaXplOjEuMjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTYtZGVza3RvcHtmb250LXNpemU6MXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNy1kZXNrdG9we2ZvbnQtc2l6ZTouNzVyZW0haW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCl7LmlzLXNpemUtMS13aWRlc2NyZWVue2ZvbnQtc2l6ZTozcmVtIWltcG9ydGFudH0uaXMtc2l6ZS0yLXdpZGVzY3JlZW57Zm9udC1zaXplOjIuNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtMy13aWRlc2NyZWVue2ZvbnQtc2l6ZToycmVtIWltcG9ydGFudH0uaXMtc2l6ZS00LXdpZGVzY3JlZW57Zm9udC1zaXplOjEuNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNS13aWRlc2NyZWVue2ZvbnQtc2l6ZToxLjI1cmVtIWltcG9ydGFudH0uaXMtc2l6ZS02LXdpZGVzY3JlZW57Zm9udC1zaXplOjFyZW0haW1wb3J0YW50fS5pcy1zaXplLTctd2lkZXNjcmVlbntmb250LXNpemU6Ljc1cmVtIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDA4cHgpey5pcy1zaXplLTEtZnVsbGhke2ZvbnQtc2l6ZTozcmVtIWltcG9ydGFudH0uaXMtc2l6ZS0yLWZ1bGxoZHtmb250LXNpemU6Mi41cmVtIWltcG9ydGFudH0uaXMtc2l6ZS0zLWZ1bGxoZHtmb250LXNpemU6MnJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNC1mdWxsaGR7Zm9udC1zaXplOjEuNXJlbSFpbXBvcnRhbnR9LmlzLXNpemUtNS1mdWxsaGR7Zm9udC1zaXplOjEuMjVyZW0haW1wb3J0YW50fS5pcy1zaXplLTYtZnVsbGhke2ZvbnQtc2l6ZToxcmVtIWltcG9ydGFudH0uaXMtc2l6ZS03LWZ1bGxoZHtmb250LXNpemU6Ljc1cmVtIWltcG9ydGFudH19Lmhhcy10ZXh0LWNlbnRlcmVke3RleHQtYWxpZ246Y2VudGVyIWltcG9ydGFudH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGFzLXRleHQtY2VudGVyZWQtbW9iaWxle3RleHQtYWxpZ246Y2VudGVyIWltcG9ydGFudH19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7Lmhhcy10ZXh0LWNlbnRlcmVkLXRhYmxldHt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7Lmhhcy10ZXh0LWNlbnRlcmVkLXRhYmxldC1vbmx5e3RleHQtYWxpZ246Y2VudGVyIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5oYXMtdGV4dC1jZW50ZXJlZC10b3VjaHt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuaGFzLXRleHQtY2VudGVyZWQtZGVza3RvcHt0ZXh0LWFsaWduOmNlbnRlciFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KSBhbmQgKG1heC13aWR0aDoxMjE1cHgpey5oYXMtdGV4dC1jZW50ZXJlZC1kZXNrdG9wLW9ubHl7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCl7Lmhhcy10ZXh0LWNlbnRlcmVkLXdpZGVzY3JlZW57dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCkgYW5kIChtYXgtd2lkdGg6MTQwN3B4KXsuaGFzLXRleHQtY2VudGVyZWQtd2lkZXNjcmVlbi1vbmx5e3RleHQtYWxpZ246Y2VudGVyIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDA4cHgpey5oYXMtdGV4dC1jZW50ZXJlZC1mdWxsaGR7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50fX0uaGFzLXRleHQtanVzdGlmaWVke3RleHQtYWxpZ246anVzdGlmeSFpbXBvcnRhbnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7Lmhhcy10ZXh0LWp1c3RpZmllZC1tb2JpbGV7dGV4dC1hbGlnbjpqdXN0aWZ5IWltcG9ydGFudH19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7Lmhhcy10ZXh0LWp1c3RpZmllZC10YWJsZXR7dGV4dC1hbGlnbjpqdXN0aWZ5IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaGFzLXRleHQtanVzdGlmaWVkLXRhYmxldC1vbmx5e3RleHQtYWxpZ246anVzdGlmeSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaGFzLXRleHQtanVzdGlmaWVkLXRvdWNoe3RleHQtYWxpZ246anVzdGlmeSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuaGFzLXRleHQtanVzdGlmaWVkLWRlc2t0b3B7dGV4dC1hbGlnbjpqdXN0aWZ5IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEyMTVweCl7Lmhhcy10ZXh0LWp1c3RpZmllZC1kZXNrdG9wLW9ubHl7dGV4dC1hbGlnbjpqdXN0aWZ5IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpey5oYXMtdGV4dC1qdXN0aWZpZWQtd2lkZXNjcmVlbnt0ZXh0LWFsaWduOmp1c3RpZnkhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCkgYW5kIChtYXgtd2lkdGg6MTQwN3B4KXsuaGFzLXRleHQtanVzdGlmaWVkLXdpZGVzY3JlZW4tb25seXt0ZXh0LWFsaWduOmp1c3RpZnkhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0MDhweCl7Lmhhcy10ZXh0LWp1c3RpZmllZC1mdWxsaGR7dGV4dC1hbGlnbjpqdXN0aWZ5IWltcG9ydGFudH19Lmhhcy10ZXh0LWxlZnR7dGV4dC1hbGlnbjpsZWZ0IWltcG9ydGFudH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGFzLXRleHQtbGVmdC1tb2JpbGV7dGV4dC1hbGlnbjpsZWZ0IWltcG9ydGFudH19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7Lmhhcy10ZXh0LWxlZnQtdGFibGV0e3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7Lmhhcy10ZXh0LWxlZnQtdGFibGV0LW9ubHl7dGV4dC1hbGlnbjpsZWZ0IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5oYXMtdGV4dC1sZWZ0LXRvdWNoe3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuaGFzLXRleHQtbGVmdC1kZXNrdG9we3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KSBhbmQgKG1heC13aWR0aDoxMjE1cHgpey5oYXMtdGV4dC1sZWZ0LWRlc2t0b3Atb25seXt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCl7Lmhhcy10ZXh0LWxlZnQtd2lkZXNjcmVlbnt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCkgYW5kIChtYXgtd2lkdGg6MTQwN3B4KXsuaGFzLXRleHQtbGVmdC13aWRlc2NyZWVuLW9ubHl7dGV4dC1hbGlnbjpsZWZ0IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDA4cHgpey5oYXMtdGV4dC1sZWZ0LWZ1bGxoZHt0ZXh0LWFsaWduOmxlZnQhaW1wb3J0YW50fX0uaGFzLXRleHQtcmlnaHR7dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7Lmhhcy10ZXh0LXJpZ2h0LW1vYmlsZXt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7Lmhhcy10ZXh0LXJpZ2h0LXRhYmxldHt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaGFzLXRleHQtcmlnaHQtdGFibGV0LW9ubHl7dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaGFzLXRleHQtcmlnaHQtdG91Y2h7dGV4dC1hbGlnbjpyaWdodCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuaGFzLXRleHQtcmlnaHQtZGVza3RvcHt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEyMTVweCl7Lmhhcy10ZXh0LXJpZ2h0LWRlc2t0b3Atb25seXt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpey5oYXMtdGV4dC1yaWdodC13aWRlc2NyZWVue3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCkgYW5kIChtYXgtd2lkdGg6MTQwN3B4KXsuaGFzLXRleHQtcmlnaHQtd2lkZXNjcmVlbi1vbmx5e3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0MDhweCl7Lmhhcy10ZXh0LXJpZ2h0LWZ1bGxoZHt0ZXh0LWFsaWduOnJpZ2h0IWltcG9ydGFudH19LmlzLWNhcGl0YWxpemVke3RleHQtdHJhbnNmb3JtOmNhcGl0YWxpemUhaW1wb3J0YW50fS5pcy1sb3dlcmNhc2V7dGV4dC10cmFuc2Zvcm06bG93ZXJjYXNlIWltcG9ydGFudH0uaXMtdXBwZXJjYXNle3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZSFpbXBvcnRhbnR9Lmhhcy10ZXh0LXdoaXRle2NvbG9yOiNmZmYhaW1wb3J0YW50fWEuaGFzLXRleHQtd2hpdGU6Zm9jdXMsYS5oYXMtdGV4dC13aGl0ZTpob3Zlcntjb2xvcjojZTZlNmU2IWltcG9ydGFudH0uaGFzLXRleHQtYmxhY2t7Y29sb3I6IzBhMGEwYSFpbXBvcnRhbnR9YS5oYXMtdGV4dC1ibGFjazpmb2N1cyxhLmhhcy10ZXh0LWJsYWNrOmhvdmVye2NvbG9yOiMwMDAhaW1wb3J0YW50fS5oYXMtdGV4dC1saWdodHtjb2xvcjojZjVmNWY1IWltcG9ydGFudH1hLmhhcy10ZXh0LWxpZ2h0OmZvY3VzLGEuaGFzLXRleHQtbGlnaHQ6aG92ZXJ7Y29sb3I6I2RiZGJkYiFpbXBvcnRhbnR9Lmhhcy10ZXh0LWRhcmt7Y29sb3I6IzM2MzYzNiFpbXBvcnRhbnR9YS5oYXMtdGV4dC1kYXJrOmZvY3VzLGEuaGFzLXRleHQtZGFyazpob3Zlcntjb2xvcjojMWMxYzFjIWltcG9ydGFudH0uaGFzLXRleHQtcHJpbWFyeXtjb2xvcjojMDBkMWIyIWltcG9ydGFudH1hLmhhcy10ZXh0LXByaW1hcnk6Zm9jdXMsYS5oYXMtdGV4dC1wcmltYXJ5OmhvdmVye2NvbG9yOiMwMDllODYhaW1wb3J0YW50fS5oYXMtdGV4dC1saW5re2NvbG9yOiMzMjczZGMhaW1wb3J0YW50fWEuaGFzLXRleHQtbGluazpmb2N1cyxhLmhhcy10ZXh0LWxpbms6aG92ZXJ7Y29sb3I6IzIwNWJiYyFpbXBvcnRhbnR9Lmhhcy10ZXh0LWluZm97Y29sb3I6IzIwOWNlZSFpbXBvcnRhbnR9YS5oYXMtdGV4dC1pbmZvOmZvY3VzLGEuaGFzLXRleHQtaW5mbzpob3Zlcntjb2xvcjojMGY4MWNjIWltcG9ydGFudH0uaGFzLXRleHQtc3VjY2Vzc3tjb2xvcjojMjNkMTYwIWltcG9ydGFudH1hLmhhcy10ZXh0LXN1Y2Nlc3M6Zm9jdXMsYS5oYXMtdGV4dC1zdWNjZXNzOmhvdmVye2NvbG9yOiMxY2E2NGMhaW1wb3J0YW50fS5oYXMtdGV4dC13YXJuaW5ne2NvbG9yOiNmZmRkNTchaW1wb3J0YW50fWEuaGFzLXRleHQtd2FybmluZzpmb2N1cyxhLmhhcy10ZXh0LXdhcm5pbmc6aG92ZXJ7Y29sb3I6I2ZmZDMyNCFpbXBvcnRhbnR9Lmhhcy10ZXh0LWRhbmdlcntjb2xvcjojZmYzODYwIWltcG9ydGFudH1hLmhhcy10ZXh0LWRhbmdlcjpmb2N1cyxhLmhhcy10ZXh0LWRhbmdlcjpob3Zlcntjb2xvcjojZmYwNTM3IWltcG9ydGFudH0uaGFzLXRleHQtYmxhY2stYmlze2NvbG9yOiMxMjEyMTIhaW1wb3J0YW50fS5oYXMtdGV4dC1ibGFjay10ZXJ7Y29sb3I6IzI0MjQyNCFpbXBvcnRhbnR9Lmhhcy10ZXh0LWdyZXktZGFya2Vye2NvbG9yOiMzNjM2MzYhaW1wb3J0YW50fS5oYXMtdGV4dC1ncmV5LWRhcmt7Y29sb3I6IzRhNGE0YSFpbXBvcnRhbnR9Lmhhcy10ZXh0LWdyZXl7Y29sb3I6IzdhN2E3YSFpbXBvcnRhbnR9Lmhhcy10ZXh0LWdyZXktbGlnaHR7Y29sb3I6I2I1YjViNSFpbXBvcnRhbnR9Lmhhcy10ZXh0LWdyZXktbGlnaHRlcntjb2xvcjojZGJkYmRiIWltcG9ydGFudH0uaGFzLXRleHQtd2hpdGUtdGVye2NvbG9yOiNmNWY1ZjUhaW1wb3J0YW50fS5oYXMtdGV4dC13aGl0ZS1iaXN7Y29sb3I6I2ZhZmFmYSFpbXBvcnRhbnR9Lmhhcy10ZXh0LXdlaWdodC1saWdodHtmb250LXdlaWdodDozMDAhaW1wb3J0YW50fS5oYXMtdGV4dC13ZWlnaHQtbm9ybWFse2ZvbnQtd2VpZ2h0OjQwMCFpbXBvcnRhbnR9Lmhhcy10ZXh0LXdlaWdodC1zZW1pYm9sZHtmb250LXdlaWdodDo2MDAhaW1wb3J0YW50fS5oYXMtdGV4dC13ZWlnaHQtYm9sZHtmb250LXdlaWdodDo3MDAhaW1wb3J0YW50fS5pcy1ibG9ja3tkaXNwbGF5OmJsb2NrIWltcG9ydGFudH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaXMtYmxvY2stbW9iaWxle2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fX1AbWVkaWEgcHJpbnQsc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsuaXMtYmxvY2stdGFibGV0e2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5pcy1ibG9jay10YWJsZXQtb25seXtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5pcy1ibG9jay10b3VjaHtkaXNwbGF5OmJsb2NrIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpey5pcy1ibG9jay1kZXNrdG9we2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTIxNXB4KXsuaXMtYmxvY2stZGVza3RvcC1vbmx5e2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCl7LmlzLWJsb2NrLXdpZGVzY3JlZW57ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIxNnB4KSBhbmQgKG1heC13aWR0aDoxNDA3cHgpey5pcy1ibG9jay13aWRlc2NyZWVuLW9ubHl7ZGlzcGxheTpibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQwOHB4KXsuaXMtYmxvY2stZnVsbGhke2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50fX0uaXMtZmxleHtkaXNwbGF5Oi13ZWJraXQtYm94IWltcG9ydGFudDtkaXNwbGF5Oi1tcy1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmZsZXghaW1wb3J0YW50fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5pcy1mbGV4LW1vYmlsZXtkaXNwbGF5Oi13ZWJraXQtYm94IWltcG9ydGFudDtkaXNwbGF5Oi1tcy1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmZsZXghaW1wb3J0YW50fX1AbWVkaWEgcHJpbnQsc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsuaXMtZmxleC10YWJsZXR7ZGlzcGxheTotd2Via2l0LWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTpmbGV4IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaXMtZmxleC10YWJsZXQtb25seXtkaXNwbGF5Oi13ZWJraXQtYm94IWltcG9ydGFudDtkaXNwbGF5Oi1tcy1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7LmlzLWZsZXgtdG91Y2h7ZGlzcGxheTotd2Via2l0LWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTpmbGV4IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpey5pcy1mbGV4LWRlc2t0b3B7ZGlzcGxheTotd2Via2l0LWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTpmbGV4IWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEyMTVweCl7LmlzLWZsZXgtZGVza3RvcC1vbmx5e2Rpc3BsYXk6LXdlYmtpdC1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6LW1zLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIxNnB4KXsuaXMtZmxleC13aWRlc2NyZWVue2Rpc3BsYXk6LXdlYmtpdC1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6LW1zLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIxNnB4KSBhbmQgKG1heC13aWR0aDoxNDA3cHgpey5pcy1mbGV4LXdpZGVzY3JlZW4tb25seXtkaXNwbGF5Oi13ZWJraXQtYm94IWltcG9ydGFudDtkaXNwbGF5Oi1tcy1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0MDhweCl7LmlzLWZsZXgtZnVsbGhke2Rpc3BsYXk6LXdlYmtpdC1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6LW1zLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnR9fS5pcy1pbmxpbmV7ZGlzcGxheTppbmxpbmUhaW1wb3J0YW50fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5pcy1pbmxpbmUtbW9iaWxle2Rpc3BsYXk6aW5saW5lIWltcG9ydGFudH19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LmlzLWlubGluZS10YWJsZXR7ZGlzcGxheTppbmxpbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5pcy1pbmxpbmUtdGFibGV0LW9ubHl7ZGlzcGxheTppbmxpbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7LmlzLWlubGluZS10b3VjaHtkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuaXMtaW5saW5lLWRlc2t0b3B7ZGlzcGxheTppbmxpbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTIxNXB4KXsuaXMtaW5saW5lLWRlc2t0b3Atb25seXtkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIxNnB4KXsuaXMtaW5saW5lLXdpZGVzY3JlZW57ZGlzcGxheTppbmxpbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCkgYW5kIChtYXgtd2lkdGg6MTQwN3B4KXsuaXMtaW5saW5lLXdpZGVzY3JlZW4tb25seXtkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQwOHB4KXsuaXMtaW5saW5lLWZ1bGxoZHtkaXNwbGF5OmlubGluZSFpbXBvcnRhbnR9fS5pcy1pbmxpbmUtYmxvY2t7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5pcy1pbmxpbmUtYmxvY2stbW9iaWxle2Rpc3BsYXk6aW5saW5lLWJsb2NrIWltcG9ydGFudH19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LmlzLWlubGluZS1ibG9jay10YWJsZXR7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5pcy1pbmxpbmUtYmxvY2stdGFibGV0LW9ubHl7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7LmlzLWlubGluZS1ibG9jay10b3VjaHtkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuaXMtaW5saW5lLWJsb2NrLWRlc2t0b3B7ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTIxNXB4KXsuaXMtaW5saW5lLWJsb2NrLWRlc2t0b3Atb25seXtkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIxNnB4KXsuaXMtaW5saW5lLWJsb2NrLXdpZGVzY3JlZW57ZGlzcGxheTppbmxpbmUtYmxvY2shaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCkgYW5kIChtYXgtd2lkdGg6MTQwN3B4KXsuaXMtaW5saW5lLWJsb2NrLXdpZGVzY3JlZW4tb25seXtkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQwOHB4KXsuaXMtaW5saW5lLWJsb2NrLWZ1bGxoZHtkaXNwbGF5OmlubGluZS1ibG9jayFpbXBvcnRhbnR9fS5pcy1pbmxpbmUtZmxleHtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5pcy1pbmxpbmUtZmxleC1tb2JpbGV7ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3ghaW1wb3J0YW50O2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94IWltcG9ydGFudDtkaXNwbGF5OmlubGluZS1mbGV4IWltcG9ydGFudH19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LmlzLWlubGluZS1mbGV4LXRhYmxldHtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5pcy1pbmxpbmUtZmxleC10YWJsZXQtb25seXtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7LmlzLWlubGluZS1mbGV4LXRvdWNoe2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtYm94IWltcG9ydGFudDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTppbmxpbmUtZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuaXMtaW5saW5lLWZsZXgtZGVza3RvcHtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTIxNXB4KXsuaXMtaW5saW5lLWZsZXgtZGVza3RvcC1vbmx5e2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtYm94IWltcG9ydGFudDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTppbmxpbmUtZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIxNnB4KXsuaXMtaW5saW5lLWZsZXgtd2lkZXNjcmVlbntkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveCFpbXBvcnRhbnQ7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3ghaW1wb3J0YW50O2Rpc3BsYXk6aW5saW5lLWZsZXghaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCkgYW5kIChtYXgtd2lkdGg6MTQwN3B4KXsuaXMtaW5saW5lLWZsZXgtd2lkZXNjcmVlbi1vbmx5e2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtYm94IWltcG9ydGFudDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTppbmxpbmUtZmxleCFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQwOHB4KXsuaXMtaW5saW5lLWZsZXgtZnVsbGhke2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtYm94IWltcG9ydGFudDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveCFpbXBvcnRhbnQ7ZGlzcGxheTppbmxpbmUtZmxleCFpbXBvcnRhbnR9fS5pcy1oaWRkZW57ZGlzcGxheTpub25lIWltcG9ydGFudH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaXMtaGlkZGVuLW1vYmlsZXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgcHJpbnQsc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsuaXMtaGlkZGVuLXRhYmxldHtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KSBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5pcy1oaWRkZW4tdGFibGV0LW9ubHl7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5pcy1oaWRkZW4tdG91Y2h7ZGlzcGxheTpub25lIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpey5pcy1oaWRkZW4tZGVza3RvcHtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCkgYW5kIChtYXgtd2lkdGg6MTIxNXB4KXsuaXMtaGlkZGVuLWRlc2t0b3Atb25seXtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCl7LmlzLWhpZGRlbi13aWRlc2NyZWVue2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIxNnB4KSBhbmQgKG1heC13aWR0aDoxNDA3cHgpey5pcy1oaWRkZW4td2lkZXNjcmVlbi1vbmx5e2Rpc3BsYXk6bm9uZSFpbXBvcnRhbnR9fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQwOHB4KXsuaXMtaGlkZGVuLWZ1bGxoZHtkaXNwbGF5Om5vbmUhaW1wb3J0YW50fX0uaXMtaW52aXNpYmxle3Zpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaXMtaW52aXNpYmxlLW1vYmlsZXt2aXNpYmlsaXR5OmhpZGRlbiFpbXBvcnRhbnR9fUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5pcy1pbnZpc2libGUtdGFibGV0e3Zpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCkgYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaXMtaW52aXNpYmxlLXRhYmxldC1vbmx5e3Zpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5pcy1pbnZpc2libGUtdG91Y2h7dmlzaWJpbGl0eTpoaWRkZW4haW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7LmlzLWludmlzaWJsZS1kZXNrdG9we3Zpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpIGFuZCAobWF4LXdpZHRoOjEyMTVweCl7LmlzLWludmlzaWJsZS1kZXNrdG9wLW9ubHl7dmlzaWJpbGl0eTpoaWRkZW4haW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMTZweCl7LmlzLWludmlzaWJsZS13aWRlc2NyZWVue3Zpc2liaWxpdHk6aGlkZGVuIWltcG9ydGFudH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpIGFuZCAobWF4LXdpZHRoOjE0MDdweCl7LmlzLWludmlzaWJsZS13aWRlc2NyZWVuLW9ubHl7dmlzaWJpbGl0eTpoaWRkZW4haW1wb3J0YW50fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0MDhweCl7LmlzLWludmlzaWJsZS1mdWxsaGR7dmlzaWJpbGl0eTpoaWRkZW4haW1wb3J0YW50fX0uaXMtbWFyZ2lubGVzc3ttYXJnaW46MCFpbXBvcnRhbnR9LmlzLXBhZGRpbmdsZXNze3BhZGRpbmc6MCFpbXBvcnRhbnR9LmlzLXJhZGl1c2xlc3N7Ym9yZGVyLXJhZGl1czowIWltcG9ydGFudH0uaXMtc2hhZG93bGVzc3std2Via2l0LWJveC1zaGFkb3c6bm9uZSFpbXBvcnRhbnQ7Ym94LXNoYWRvdzpub25lIWltcG9ydGFudH0uaXMtdW5zZWxlY3RhYmxley13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uYm94e2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjVweDstd2Via2l0LWJveC1zaGFkb3c6MCAycHggM3B4IGhzbGEoMCwwJSw0JSwuMSksMCAwIDAgMXB4IGhzbGEoMCwwJSw0JSwuMSk7Ym94LXNoYWRvdzowIDJweCAzcHggaHNsYSgwLDAlLDQlLC4xKSwwIDAgMCAxcHggaHNsYSgwLDAlLDQlLC4xKTtjb2xvcjojNGE0YTRhO2Rpc3BsYXk6YmxvY2s7cGFkZGluZzoxLjI1cmVtfS5ib3g6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEuNXJlbX1hLmJveDpmb2N1cyxhLmJveDpob3Zlcnstd2Via2l0LWJveC1zaGFkb3c6MCAycHggM3B4IGhzbGEoMCwwJSw0JSwuMSksMCAwIDAgMXB4ICMzMjczZGM7Ym94LXNoYWRvdzowIDJweCAzcHggaHNsYSgwLDAlLDQlLC4xKSwwIDAgMCAxcHggIzMyNzNkY31hLmJveDphY3RpdmV7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDJweCBoc2xhKDAsMCUsNCUsLjIpLDAgMCAwIDFweCAjMzI3M2RjO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMnB4IGhzbGEoMCwwJSw0JSwuMiksMCAwIDAgMXB4ICMzMjczZGN9LmJ1dHRvbnstbW96LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6M3B4Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O2ZvbnQtc2l6ZToxcmVtO2hlaWdodDoyLjI1ZW07LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2xpbmUtaGVpZ2h0OjEuNTtwYWRkaW5nLWxlZnQ6Y2FsYyguNjI1ZW0gLSAxcHgpO3BhZGRpbmctcmlnaHQ6Y2FsYyguNjI1ZW0gLSAxcHgpO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOnRvcDstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZGJkYmRiO2NvbG9yOiMzNjM2MzY7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOmNhbGMoLjM3NWVtIC0gMXB4KSAuNzVlbTt0ZXh0LWFsaWduOmNlbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXB9LmJ1dHRvbi5pcy1hY3RpdmUsLmJ1dHRvbi5pcy1mb2N1c2VkLC5idXR0b246YWN0aXZlLC5idXR0b246Zm9jdXN7b3V0bGluZTpub25lfS5idXR0b25bZGlzYWJsZWRde2N1cnNvcjpub3QtYWxsb3dlZH0uYnV0dG9uIHN0cm9uZ3tjb2xvcjppbmhlcml0fS5idXR0b24gLmljb24sLmJ1dHRvbiAuaWNvbi5pcy1sYXJnZSwuYnV0dG9uIC5pY29uLmlzLW1lZGl1bSwuYnV0dG9uIC5pY29uLmlzLXNtYWxse2hlaWdodDoxLjVlbTt3aWR0aDoxLjVlbX0uYnV0dG9uIC5pY29uOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6Y2FsYygtLjM3NWVtIC0gMXB4KTttYXJnaW4tcmlnaHQ6LjE4NzVlbX0uYnV0dG9uIC5pY29uOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6LjE4NzVlbTttYXJnaW4tcmlnaHQ6Y2FsYygtLjM3NWVtIC0gMXB4KX0uYnV0dG9uIC5pY29uOmZpcnN0LWNoaWxkOmxhc3QtY2hpbGR7bWFyZ2luLWxlZnQ6Y2FsYygtLjM3NWVtIC0gMXB4KTttYXJnaW4tcmlnaHQ6Y2FsYygtLjM3NWVtIC0gMXB4KX0uYnV0dG9uLmlzLWhvdmVyZWQsLmJ1dHRvbjpob3Zlcntib3JkZXItY29sb3I6I2I1YjViNTtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtZm9jdXNlZCwuYnV0dG9uOmZvY3Vze2JvcmRlci1jb2xvcjojMzI3M2RjO2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1mb2N1c2VkOm5vdCg6YWN0aXZlKSwuYnV0dG9uOmZvY3VzOm5vdCg6YWN0aXZlKXstd2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoNTAsMTE1LDIyMCwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoNTAsMTE1LDIyMCwuMjUpfS5idXR0b24uaXMtYWN0aXZlLC5idXR0b246YWN0aXZle2JvcmRlci1jb2xvcjojNGE0YTRhO2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy10ZXh0e2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiM0YTRhNGE7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZX0uYnV0dG9uLmlzLXRleHQuaXMtZm9jdXNlZCwuYnV0dG9uLmlzLXRleHQuaXMtaG92ZXJlZCwuYnV0dG9uLmlzLXRleHQ6Zm9jdXMsLmJ1dHRvbi5pcy10ZXh0OmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtdGV4dC5pcy1hY3RpdmUsLmJ1dHRvbi5pcy10ZXh0OmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTg7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLXRleHRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX0uYnV0dG9uLmlzLXdoaXRle2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzBhMGEwYX0uYnV0dG9uLmlzLXdoaXRlLmlzLWhvdmVyZWQsLmJ1dHRvbi5pcy13aGl0ZTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjk7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMwYTBhMGF9LmJ1dHRvbi5pcy13aGl0ZS5pcy1mb2N1c2VkLC5idXR0b24uaXMtd2hpdGU6Zm9jdXN7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMwYTBhMGF9LmJ1dHRvbi5pcy13aGl0ZS5pcy1mb2N1c2VkOm5vdCg6YWN0aXZlKSwuYnV0dG9uLmlzLXdoaXRlOmZvY3VzOm5vdCg6YWN0aXZlKXstd2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIGhzbGEoMCwwJSwxMDAlLC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDEwMCUsLjI1KX0uYnV0dG9uLmlzLXdoaXRlLmlzLWFjdGl2ZSwuYnV0dG9uLmlzLXdoaXRlOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMwYTBhMGF9LmJ1dHRvbi5pcy13aGl0ZVtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmJ1dHRvbi5pcy13aGl0ZS5pcy1pbnZlcnRlZHtiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGE7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXdoaXRlLmlzLWludmVydGVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwMH0uYnV0dG9uLmlzLXdoaXRlLmlzLWludmVydGVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGE7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojZmZmfS5idXR0b24uaXMtd2hpdGUuaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzBhMGEwYSAjMGEwYTBhIWltcG9ydGFudH0uYnV0dG9uLmlzLXdoaXRlLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXdoaXRlLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtd2hpdGUuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiMwYTBhMGF9LmJ1dHRvbi5pcy13aGl0ZS5pcy1vdXRsaW5lZC5pcy1sb2FkaW5nOmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmICNmZmYhaW1wb3J0YW50fS5idXR0b24uaXMtd2hpdGUuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy13aGl0ZS5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMGEwYTBhO2NvbG9yOiMwYTBhMGF9LmJ1dHRvbi5pcy13aGl0ZS5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLXdoaXRlLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtjb2xvcjojZmZmfS5idXR0b24uaXMtd2hpdGUuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMwYTBhMGE7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiMwYTBhMGF9LmJ1dHRvbi5pcy1ibGFja3tiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGE7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1ibGFjay5pcy1ob3ZlcmVkLC5idXR0b24uaXMtYmxhY2s6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDQwNDA0O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtYmxhY2suaXMtZm9jdXNlZCwuYnV0dG9uLmlzLWJsYWNrOmZvY3Vze2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtYmxhY2suaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbi5pcy1ibGFjazpmb2N1czpub3QoOmFjdGl2ZSl7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSBoc2xhKDAsMCUsNCUsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSBoc2xhKDAsMCUsNCUsLjI1KX0uYnV0dG9uLmlzLWJsYWNrLmlzLWFjdGl2ZSwuYnV0dG9uLmlzLWJsYWNrOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1ibGFja1tkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmJ1dHRvbi5pcy1ibGFjay5pcy1pbnZlcnRlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX0uYnV0dG9uLmlzLWJsYWNrLmlzLWludmVydGVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0uYnV0dG9uLmlzLWJsYWNrLmlzLWludmVydGVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMGEwYTBhfS5idXR0b24uaXMtYmxhY2suaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZiAjZmZmIWltcG9ydGFudH0uYnV0dG9uLmlzLWJsYWNrLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMwYTBhMGE7Y29sb3I6IzBhMGEwYX0uYnV0dG9uLmlzLWJsYWNrLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtYmxhY2suaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2JvcmRlci1jb2xvcjojMGEwYTBhO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1ibGFjay5pcy1vdXRsaW5lZC5pcy1sb2FkaW5nOmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMGEwYTBhICMwYTBhMGEhaW1wb3J0YW50fS5idXR0b24uaXMtYmxhY2suaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMwYTBhMGE7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiMwYTBhMGF9LmJ1dHRvbi5pcy1ibGFjay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1ibGFjay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLWJsYWNrLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMGEwYTBhfS5idXR0b24uaXMtYmxhY2suaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1saWdodHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1saWdodC5pcy1ob3ZlcmVkLC5idXR0b24uaXMtbGlnaHQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZWVlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtbGlnaHQuaXMtZm9jdXNlZCwuYnV0dG9uLmlzLWxpZ2h0OmZvY3Vze2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtbGlnaHQuaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbi5pcy1saWdodDpmb2N1czpub3QoOmFjdGl2ZSl7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSBoc2xhKDAsMCUsOTYlLC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDk2JSwuMjUpfS5idXR0b24uaXMtbGlnaHQuaXMtYWN0aXZlLC5idXR0b24uaXMtbGlnaHQ6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2U4ZThlODtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLWxpZ2h0W2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX0uYnV0dG9uLmlzLWxpZ2h0LmlzLWludmVydGVke2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fS5idXR0b24uaXMtbGlnaHQuaXMtaW52ZXJ0ZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjkyOTI5fS5idXR0b24uaXMtbGlnaHQuaXMtaW52ZXJ0ZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmNWY1ZjV9LmJ1dHRvbi5pcy1saWdodC5pcy1sb2FkaW5nOmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMzYzNjM2ICMzNjM2MzYhaW1wb3J0YW50fS5idXR0b24uaXMtbGlnaHQuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2Y1ZjVmNTtjb2xvcjojZjVmNWY1fS5idXR0b24uaXMtbGlnaHQuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1saWdodC5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLWxpZ2h0LmlzLW91dGxpbmVkLmlzLWxvYWRpbmc6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmNWY1ZjUgI2Y1ZjVmNSFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1saWdodC5pcy1vdXRsaW5lZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2Y1ZjVmNTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLWxpZ2h0LmlzLWludmVydGVkLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMzNjM2MzY7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLWxpZ2h0LmlzLWludmVydGVkLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtbGlnaHQuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2NvbG9yOiNmNWY1ZjV9LmJ1dHRvbi5pcy1saWdodC5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6IzM2MzYzNjstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzM2MzYzNn0uYnV0dG9uLmlzLWRhcmt7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZjVmNWY1fS5idXR0b24uaXMtZGFyay5pcy1ob3ZlcmVkLC5idXR0b24uaXMtZGFyazpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyZjJmMmY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmNWY1ZjV9LmJ1dHRvbi5pcy1kYXJrLmlzLWZvY3VzZWQsLmJ1dHRvbi5pcy1kYXJrOmZvY3Vze2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZjVmNWY1fS5idXR0b24uaXMtZGFyay5pcy1mb2N1c2VkOm5vdCg6YWN0aXZlKSwuYnV0dG9uLmlzLWRhcms6Zm9jdXM6bm90KDphY3RpdmUpey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1NCw1NCw1NCwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoNTQsNTQsNTQsLjI1KX0uYnV0dG9uLmlzLWRhcmsuaXMtYWN0aXZlLC5idXR0b24uaXMtZGFyazphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMjkyOTI5O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZjVmNWY1fS5idXR0b24uaXMtZGFya1tkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmJ1dHRvbi5pcy1kYXJrLmlzLWludmVydGVke2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtZGFyay5pcy1pbnZlcnRlZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTh9LmJ1dHRvbi5pcy1kYXJrLmlzLWludmVydGVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtZGFyay5pcy1sb2FkaW5nOmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZjVmNWY1ICNmNWY1ZjUhaW1wb3J0YW50fS5idXR0b24uaXMtZGFyay5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMzYzNjM2O2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1kYXJrLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtZGFyay5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzY7Ym9yZGVyLWNvbG9yOiMzNjM2MzY7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLWRhcmsuaXMtb3V0bGluZWQuaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzM2MzYzNiAjMzYzNjM2IWltcG9ydGFudH0uYnV0dG9uLmlzLWRhcmsuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMzNjM2MzY7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiMzNjM2MzZ9LmJ1dHRvbi5pcy1kYXJrLmlzLWludmVydGVkLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmNWY1ZjU7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLWRhcmsuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1kYXJrLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMzYzNjM2fS5idXR0b24uaXMtZGFyay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2Y1ZjVmNTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2Y1ZjVmNX0uYnV0dG9uLmlzLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtcHJpbWFyeS5pcy1ob3ZlcmVkLC5idXR0b24uaXMtcHJpbWFyeTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMGM0YTc7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1wcmltYXJ5LmlzLWZvY3VzZWQsLmJ1dHRvbi5pcy1wcmltYXJ5OmZvY3Vze2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtcHJpbWFyeS5pcy1mb2N1c2VkOm5vdCg6YWN0aXZlKSwuYnV0dG9uLmlzLXByaW1hcnk6Zm9jdXM6bm90KDphY3RpdmUpey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgwLDIwOSwxNzgsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDAsMjA5LDE3OCwuMjUpfS5idXR0b24uaXMtcHJpbWFyeS5pcy1hY3RpdmUsLmJ1dHRvbi5pcy1wcmltYXJ5OmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGI4OWM7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1wcmltYXJ5W2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjI7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX0uYnV0dG9uLmlzLXByaW1hcnkuaXMtaW52ZXJ0ZWR7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMwMGQxYjJ9LmJ1dHRvbi5pcy1wcmltYXJ5LmlzLWludmVydGVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0uYnV0dG9uLmlzLXByaW1hcnkuaXMtaW52ZXJ0ZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiMwMGQxYjJ9LmJ1dHRvbi5pcy1wcmltYXJ5LmlzLWxvYWRpbmc6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmYgI2ZmZiFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1wcmltYXJ5LmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMwMGQxYjI7Y29sb3I6IzAwZDFiMn0uYnV0dG9uLmlzLXByaW1hcnkuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1wcmltYXJ5LmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzAwZDFiMjtib3JkZXItY29sb3I6IzAwZDFiMjtjb2xvcjojZmZmfS5idXR0b24uaXMtcHJpbWFyeS5pcy1vdXRsaW5lZC5pcy1sb2FkaW5nOmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMDBkMWIyICMwMGQxYjIhaW1wb3J0YW50fS5idXR0b24uaXMtcHJpbWFyeS5pcy1vdXRsaW5lZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6IzAwZDFiMjstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzAwZDFiMn0uYnV0dG9uLmlzLXByaW1hcnkuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojZmZmfS5idXR0b24uaXMtcHJpbWFyeS5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLXByaW1hcnkuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMwMGQxYjJ9LmJ1dHRvbi5pcy1wcmltYXJ5LmlzLWludmVydGVkLmlzLW91dGxpbmVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZmOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojZmZmfS5idXR0b24uaXMtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1saW5rLmlzLWhvdmVyZWQsLmJ1dHRvbi5pcy1saW5rOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzI3NmNkYTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWxpbmsuaXMtZm9jdXNlZCwuYnV0dG9uLmlzLWxpbms6Zm9jdXN7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1saW5rLmlzLWZvY3VzZWQ6bm90KDphY3RpdmUpLC5idXR0b24uaXMtbGluazpmb2N1czpub3QoOmFjdGl2ZSl7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDUwLDExNSwyMjAsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDUwLDExNSwyMjAsLjI1KX0uYnV0dG9uLmlzLWxpbmsuaXMtYWN0aXZlLC5idXR0b24uaXMtbGluazphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMjM2NmQxO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtbGlua1tkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmJ1dHRvbi5pcy1saW5rLmlzLWludmVydGVke2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMzI3M2RjfS5idXR0b24uaXMtbGluay5pcy1pbnZlcnRlZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjJ9LmJ1dHRvbi5pcy1saW5rLmlzLWludmVydGVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMzI3M2RjfS5idXR0b24uaXMtbGluay5pcy1sb2FkaW5nOmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmICNmZmYhaW1wb3J0YW50fS5idXR0b24uaXMtbGluay5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMzI3M2RjO2NvbG9yOiMzMjczZGN9LmJ1dHRvbi5pcy1saW5rLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtbGluay5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Ym9yZGVyLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWxpbmsuaXMtb3V0bGluZWQuaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzMyNzNkYyAjMzI3M2RjIWltcG9ydGFudH0uYnV0dG9uLmlzLWxpbmsuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMzMjczZGM7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiMzMjczZGN9LmJ1dHRvbi5pcy1saW5rLmlzLWludmVydGVkLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWxpbmsuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1saW5rLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMzI3M2RjfS5idXR0b24uaXMtbGluay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWluZm97YmFja2dyb3VuZC1jb2xvcjojMjA5Y2VlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtaW5mby5pcy1ob3ZlcmVkLC5idXR0b24uaXMtaW5mbzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMxNDk2ZWQ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1pbmZvLmlzLWZvY3VzZWQsLmJ1dHRvbi5pcy1pbmZvOmZvY3Vze2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtaW5mby5pcy1mb2N1c2VkOm5vdCg6YWN0aXZlKSwuYnV0dG9uLmlzLWluZm86Zm9jdXM6bm90KDphY3RpdmUpey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgzMiwxNTYsMjM4LC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgzMiwxNTYsMjM4LC4yNSl9LmJ1dHRvbi5pcy1pbmZvLmlzLWFjdGl2ZSwuYnV0dG9uLmlzLWluZm86YWN0aXZle2JhY2tncm91bmQtY29sb3I6IzExOGZlNDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWluZm9bZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5idXR0b24uaXMtaW5mby5pcy1pbnZlcnRlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzIwOWNlZX0uYnV0dG9uLmlzLWluZm8uaXMtaW52ZXJ0ZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjJmMmYyfS5idXR0b24uaXMtaW5mby5pcy1pbnZlcnRlZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzIwOWNlZX0uYnV0dG9uLmlzLWluZm8uaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZiAjZmZmIWltcG9ydGFudH0uYnV0dG9uLmlzLWluZm8uaXMtb3V0bGluZWR7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6IzIwOWNlZTtjb2xvcjojMjA5Y2VlfS5idXR0b24uaXMtaW5mby5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLWluZm8uaXMtb3V0bGluZWQ6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjA5Y2VlO2JvcmRlci1jb2xvcjojMjA5Y2VlO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1pbmZvLmlzLW91dGxpbmVkLmlzLWxvYWRpbmc6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMyMDljZWUgIzIwOWNlZSFpbXBvcnRhbnR9LmJ1dHRvbi5pcy1pbmZvLmlzLW91dGxpbmVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMjA5Y2VlOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMjA5Y2VlfS5idXR0b24uaXMtaW5mby5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1pbmZvLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtaW5mby5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzIwOWNlZX0uYnV0dG9uLmlzLWluZm8uaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1zdWNjZXNze2JhY2tncm91bmQtY29sb3I6IzIzZDE2MDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtaG92ZXJlZCwuYnV0dG9uLmlzLXN1Y2Nlc3M6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjJjNjViO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1mb2N1c2VkLC5idXR0b24uaXMtc3VjY2Vzczpmb2N1c3tib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtZm9jdXNlZDpub3QoOmFjdGl2ZSksLmJ1dHRvbi5pcy1zdWNjZXNzOmZvY3VzOm5vdCg6YWN0aXZlKXstd2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMzUsMjA5LDk2LC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgzNSwyMDksOTYsLjI1KX0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtYWN0aXZlLC5idXR0b24uaXMtc3VjY2VzczphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMjBiYzU2O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5idXR0b24uaXMtc3VjY2Vzc1tkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmV9LmJ1dHRvbi5pcy1zdWNjZXNzLmlzLWludmVydGVke2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMjNkMTYwfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1pbnZlcnRlZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjJ9LmJ1dHRvbi5pcy1zdWNjZXNzLmlzLWludmVydGVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojMjNkMTYwfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1sb2FkaW5nOmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmICNmZmYhaW1wb3J0YW50fS5idXR0b24uaXMtc3VjY2Vzcy5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojMjNkMTYwO2NvbG9yOiMyM2QxNjB9LmJ1dHRvbi5pcy1zdWNjZXNzLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtc3VjY2Vzcy5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjA7Ym9yZGVyLWNvbG9yOiMyM2QxNjA7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtb3V0bGluZWQuaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzIzZDE2MCAjMjNkMTYwIWltcG9ydGFudH0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiMyM2QxNjA7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2NvbG9yOiMyM2QxNjB9LmJ1dHRvbi5pcy1zdWNjZXNzLmlzLWludmVydGVkLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy1zdWNjZXNzLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMjNkMTYwfS5idXR0b24uaXMtc3VjY2Vzcy5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXdhcm5pbmd7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uYnV0dG9uLmlzLXdhcm5pbmcuaXMtaG92ZXJlZCwuYnV0dG9uLmlzLXdhcm5pbmc6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZkYjRhO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uYnV0dG9uLmlzLXdhcm5pbmcuaXMtZm9jdXNlZCwuYnV0dG9uLmlzLXdhcm5pbmc6Zm9jdXN7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5idXR0b24uaXMtd2FybmluZy5pcy1mb2N1c2VkOm5vdCg6YWN0aXZlKSwuYnV0dG9uLmlzLXdhcm5pbmc6Zm9jdXM6bm90KDphY3RpdmUpey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNTUsMjIxLDg3LC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNTUsMjIxLDg3LC4yNSl9LmJ1dHRvbi5pcy13YXJuaW5nLmlzLWFjdGl2ZSwuYnV0dG9uLmlzLXdhcm5pbmc6YWN0aXZle2JhY2tncm91bmQtY29sb3I6I2ZmZDgzZDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6cmdiYSgwLDAsMCwuNyl9LmJ1dHRvbi5pcy13YXJuaW5nW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTc7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZX0uYnV0dG9uLmlzLXdhcm5pbmcuaXMtaW52ZXJ0ZWR7Y29sb3I6I2ZmZGQ1N30uYnV0dG9uLmlzLXdhcm5pbmcuaXMtaW52ZXJ0ZWQsLmJ1dHRvbi5pcy13YXJuaW5nLmlzLWludmVydGVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNyl9LmJ1dHRvbi5pcy13YXJuaW5nLmlzLWludmVydGVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjcpO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmZGQ1N30uYnV0dG9uLmlzLXdhcm5pbmcuaXMtbG9hZGluZzphZnRlcntib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmdiYSgwLDAsMCwuNykgcmdiYSgwLDAsMCwuNykhaW1wb3J0YW50fS5idXR0b24uaXMtd2FybmluZy5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZkZDU3O2NvbG9yOiNmZmRkNTd9LmJ1dHRvbi5pcy13YXJuaW5nLmlzLW91dGxpbmVkOmZvY3VzLC5idXR0b24uaXMtd2FybmluZy5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTc7Ym9yZGVyLWNvbG9yOiNmZmRkNTc7Y29sb3I6cmdiYSgwLDAsMCwuNyl9LmJ1dHRvbi5pcy13YXJuaW5nLmlzLW91dGxpbmVkLmlzLWxvYWRpbmc6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmRkNTcgI2ZmZGQ1NyFpbXBvcnRhbnR9LmJ1dHRvbi5pcy13YXJuaW5nLmlzLW91dGxpbmVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmZkZDU3Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojZmZkZDU3fS5idXR0b24uaXMtd2FybmluZy5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZHtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC43KTtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uYnV0dG9uLmlzLXdhcm5pbmcuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6Zm9jdXMsLmJ1dHRvbi5pcy13YXJuaW5nLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNyk7Y29sb3I6I2ZmZGQ1N30uYnV0dG9uLmlzLXdhcm5pbmcuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWRbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjcpOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uYnV0dG9uLmlzLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtaG92ZXJlZCwuYnV0dG9uLmlzLWRhbmdlcjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjJiNTY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtZm9jdXNlZCwuYnV0dG9uLmlzLWRhbmdlcjpmb2N1c3tib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWRhbmdlci5pcy1mb2N1c2VkOm5vdCg6YWN0aXZlKSwuYnV0dG9uLmlzLWRhbmdlcjpmb2N1czpub3QoOmFjdGl2ZSl7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDI1NSw1Niw5NiwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMjU1LDU2LDk2LC4yNSl9LmJ1dHRvbi5pcy1kYW5nZXIuaXMtYWN0aXZlLC5idXR0b24uaXMtZGFuZ2VyOmFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjFmNGI7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmJ1dHRvbi5pcy1kYW5nZXJbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5idXR0b24uaXMtZGFuZ2VyLmlzLWludmVydGVke2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojZmYzODYwfS5idXR0b24uaXMtZGFuZ2VyLmlzLWludmVydGVkOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMn0uYnV0dG9uLmlzLWRhbmdlci5pcy1pbnZlcnRlZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmMzg2MH0uYnV0dG9uLmlzLWRhbmdlci5pcy1sb2FkaW5nOmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmZmICNmZmYhaW1wb3J0YW50fS5idXR0b24uaXMtZGFuZ2VyLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZjM4NjA7Y29sb3I6I2ZmMzg2MH0uYnV0dG9uLmlzLWRhbmdlci5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLWRhbmdlci5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjA7Ym9yZGVyLWNvbG9yOiNmZjM4NjA7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWRhbmdlci5pcy1vdXRsaW5lZC5pcy1sb2FkaW5nOmFmdGVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZmYzODYwICNmZjM4NjAhaW1wb3J0YW50fS5idXR0b24uaXMtZGFuZ2VyLmlzLW91dGxpbmVkW2Rpc2FibGVkXXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2JvcmRlci1jb2xvcjojZmYzODYwOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojZmYzODYwfS5idXR0b24uaXMtZGFuZ2VyLmlzLWludmVydGVkLmlzLW91dGxpbmVke2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLWRhbmdlci5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpmb2N1cywuYnV0dG9uLmlzLWRhbmdlci5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6I2ZmMzg2MH0uYnV0dG9uLmlzLWRhbmdlci5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZFtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItY29sb3I6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6I2ZmZn0uYnV0dG9uLmlzLXNtYWxse2JvcmRlci1yYWRpdXM6MnB4O2ZvbnQtc2l6ZTouNzVyZW19LmJ1dHRvbi5pcy1tZWRpdW17Zm9udC1zaXplOjEuMjVyZW19LmJ1dHRvbi5pcy1sYXJnZXtmb250LXNpemU6MS41cmVtfS5idXR0b25bZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2RiZGJkYjstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7b3BhY2l0eTouNX0uYnV0dG9uLmlzLWZ1bGx3aWR0aHtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3dpZHRoOjEwMCV9LmJ1dHRvbi5pcy1sb2FkaW5ne2NvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDtwb2ludGVyLWV2ZW50czpub25lfS5idXR0b24uaXMtbG9hZGluZzphZnRlcnstd2Via2l0LWFuaW1hdGlvbjpzcGluQXJvdW5kIC41cyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOnNwaW5Bcm91bmQgLjVzIGluZmluaXRlIGxpbmVhcjtib3JkZXI6MnB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXJhZGl1czoyOTA0ODZweDtib3JkZXItcmlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXRvcC1jb2xvcjp0cmFuc3BhcmVudDtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjFlbTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxZW07cG9zaXRpb246YWJzb2x1dGU7bGVmdDpjYWxjKDUwJSAtIDAuNWVtKTt0b3A6Y2FsYyg1MCUgLSAwLjVlbSk7cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50fS5idXR0b24uaXMtc3RhdGlje2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItY29sb3I6I2RiZGJkYjtjb2xvcjojN2E3YTdhOy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtwb2ludGVyLWV2ZW50czpub25lfS5idXR0b25zey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwOy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uYnV0dG9ucyAuYnV0dG9ue21hcmdpbi1ib3R0b206LjVyZW19LmJ1dHRvbnMgLmJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1yaWdodDouNXJlbX0uYnV0dG9uczpsYXN0LWNoaWxke21hcmdpbi1ib3R0b206LS41cmVtfS5idXR0b25zOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxcmVtfS5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbjpub3QoOmZpcnN0LWNoaWxkKXtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpe2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDttYXJnaW4tcmlnaHQ6LTFweH0uYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b246bGFzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MH0uYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b24uaXMtaG92ZXJlZCwuYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b246aG92ZXJ7ei1pbmRleDoyfS5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbi5pcy1hY3RpdmUsLmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uLmlzLWZvY3VzZWQsLmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uLmlzLXNlbGVjdGVkLC5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbjphY3RpdmUsLmJ1dHRvbnMuaGFzLWFkZG9ucyAuYnV0dG9uOmZvY3Vze3otaW5kZXg6M30uYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b24uaXMtYWN0aXZlOmhvdmVyLC5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbi5pcy1mb2N1c2VkOmhvdmVyLC5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbi5pcy1zZWxlY3RlZDpob3ZlciwuYnV0dG9ucy5oYXMtYWRkb25zIC5idXR0b246YWN0aXZlOmhvdmVyLC5idXR0b25zLmhhcy1hZGRvbnMgLmJ1dHRvbjpmb2N1czpob3Zlcnt6LWluZGV4OjR9LmJ1dHRvbnMuaXMtY2VudGVyZWR7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uYnV0dG9ucy5pcy1yaWdodHstd2Via2l0LWJveC1wYWNrOmVuZDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LmNvbnRhaW5lcnttYXJnaW46MCBhdXRvO3Bvc2l0aW9uOnJlbGF0aXZlfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuY29udGFpbmVye21heC13aWR0aDo5NjBweDt3aWR0aDo5NjBweH0uY29udGFpbmVyLmlzLWZsdWlke21hcmdpbi1sZWZ0OjMycHg7bWFyZ2luLXJpZ2h0OjMycHg7bWF4LXdpZHRoOm5vbmU7d2lkdGg6YXV0b319QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjE1cHgpey5jb250YWluZXIuaXMtd2lkZXNjcmVlbnttYXgtd2lkdGg6MTE1MnB4O3dpZHRoOmF1dG99fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTQwN3B4KXsuY29udGFpbmVyLmlzLWZ1bGxoZHttYXgtd2lkdGg6MTM0NHB4O3dpZHRoOmF1dG99fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIxNnB4KXsuY29udGFpbmVye21heC13aWR0aDoxMTUycHg7d2lkdGg6MTE1MnB4fX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0MDhweCl7LmNvbnRhaW5lcnttYXgtd2lkdGg6MTM0NHB4O3dpZHRoOjEzNDRweH19LmNvbnRlbnQ6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEuNXJlbX0uY29udGVudCBsaStsaXttYXJnaW4tdG9wOi4yNWVtfS5jb250ZW50IGJsb2NrcXVvdGU6bm90KDpsYXN0LWNoaWxkKSwuY29udGVudCBkbDpub3QoOmxhc3QtY2hpbGQpLC5jb250ZW50IG9sOm5vdCg6bGFzdC1jaGlsZCksLmNvbnRlbnQgcDpub3QoOmxhc3QtY2hpbGQpLC5jb250ZW50IHByZTpub3QoOmxhc3QtY2hpbGQpLC5jb250ZW50IHRhYmxlOm5vdCg6bGFzdC1jaGlsZCksLmNvbnRlbnQgdWw6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjFlbX0uY29udGVudCBoMSwuY29udGVudCBoMiwuY29udGVudCBoMywuY29udGVudCBoNCwuY29udGVudCBoNSwuY29udGVudCBoNntjb2xvcjojMzYzNjM2O2ZvbnQtd2VpZ2h0OjQwMDtsaW5lLWhlaWdodDoxLjEyNX0uY29udGVudCBoMXtmb250LXNpemU6MmVtO21hcmdpbi1ib3R0b206LjVlbX0uY29udGVudCBoMTpub3QoOmZpcnN0LWNoaWxkKXttYXJnaW4tdG9wOjFlbX0uY29udGVudCBoMntmb250LXNpemU6MS43NWVtO21hcmdpbi1ib3R0b206LjU3MTRlbX0uY29udGVudCBoMjpub3QoOmZpcnN0LWNoaWxkKXttYXJnaW4tdG9wOjEuMTQyOGVtfS5jb250ZW50IGgze2ZvbnQtc2l6ZToxLjVlbTttYXJnaW4tYm90dG9tOi42NjY2ZW19LmNvbnRlbnQgaDM6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLXRvcDoxLjMzMzNlbX0uY29udGVudCBoNHtmb250LXNpemU6MS4yNWVtO21hcmdpbi1ib3R0b206LjhlbX0uY29udGVudCBoNXtmb250LXNpemU6MS4xMjVlbTttYXJnaW4tYm90dG9tOi44ODg4ZW19LmNvbnRlbnQgaDZ7Zm9udC1zaXplOjFlbTttYXJnaW4tYm90dG9tOjFlbX0uY29udGVudCBibG9ja3F1b3Rle2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItbGVmdDo1cHggc29saWQgI2RiZGJkYjtwYWRkaW5nOjEuMjVlbSAxLjVlbX0uY29udGVudCBvbHtsaXN0LXN0eWxlOmRlY2ltYWwgb3V0c2lkZX0uY29udGVudCBvbCwuY29udGVudCB1bHttYXJnaW4tbGVmdDoyZW07bWFyZ2luLXRvcDoxZW19LmNvbnRlbnQgdWx7bGlzdC1zdHlsZTpkaXNjIG91dHNpZGV9LmNvbnRlbnQgdWwgdWx7bGlzdC1zdHlsZS10eXBlOmNpcmNsZTttYXJnaW4tdG9wOi41ZW19LmNvbnRlbnQgdWwgdWwgdWx7bGlzdC1zdHlsZS10eXBlOnNxdWFyZX0uY29udGVudCBkZHttYXJnaW4tbGVmdDoyZW19LmNvbnRlbnQgZmlndXJle21hcmdpbi1sZWZ0OjJlbTttYXJnaW4tcmlnaHQ6MmVtO3RleHQtYWxpZ246Y2VudGVyfS5jb250ZW50IGZpZ3VyZTpub3QoOmZpcnN0LWNoaWxkKXttYXJnaW4tdG9wOjJlbX0uY29udGVudCBmaWd1cmU6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjJlbX0uY29udGVudCBmaWd1cmUgaW1ne2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5jb250ZW50IGZpZ3VyZSBmaWdjYXB0aW9ue2ZvbnQtc3R5bGU6aXRhbGljfS5jb250ZW50IHByZXstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDtvdmVyZmxvdy14OmF1dG87cGFkZGluZzoxLjI1ZW0gMS41ZW07d2hpdGUtc3BhY2U6cHJlO3dvcmQtd3JhcDpub3JtYWx9LmNvbnRlbnQgc3ViLC5jb250ZW50IHN1cHtmb250LXNpemU6NzUlfS5jb250ZW50IHRhYmxle3dpZHRoOjEwMCV9LmNvbnRlbnQgdGFibGUgdGQsLmNvbnRlbnQgdGFibGUgdGh7Ym9yZGVyOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci13aWR0aDowIDAgMXB4O3BhZGRpbmc6LjVlbSAuNzVlbTt2ZXJ0aWNhbC1hbGlnbjp0b3B9LmNvbnRlbnQgdGFibGUgdGh7Y29sb3I6IzM2MzYzNjt0ZXh0LWFsaWduOmxlZnR9LmNvbnRlbnQgdGFibGUgdHI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fS5jb250ZW50IHRhYmxlIHRoZWFkIHRkLC5jb250ZW50IHRhYmxlIHRoZWFkIHRoe2JvcmRlci13aWR0aDowIDAgMnB4O2NvbG9yOiMzNjM2MzZ9LmNvbnRlbnQgdGFibGUgdGZvb3QgdGQsLmNvbnRlbnQgdGFibGUgdGZvb3QgdGh7Ym9yZGVyLXdpZHRoOjJweCAwIDA7Y29sb3I6IzM2MzYzNn0uY29udGVudCB0YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkLC5jb250ZW50IHRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQgdGh7Ym9yZGVyLWJvdHRvbS13aWR0aDowfS5jb250ZW50LmlzLXNtYWxse2ZvbnQtc2l6ZTouNzVyZW19LmNvbnRlbnQuaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtfS5jb250ZW50LmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LmlucHV0LC50ZXh0YXJlYXstbW96LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6M3B4Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O2ZvbnQtc2l6ZToxcmVtO2hlaWdodDoyLjI1ZW07LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2xpbmUtaGVpZ2h0OjEuNTtwYWRkaW5nOmNhbGMoLjM3NWVtIC0gMXB4KSBjYWxjKC42MjVlbSAtIDFweCk7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246dG9wO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2RiZGJkYjtjb2xvcjojMzYzNjM2Oy13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwIDFweCAycHggaHNsYSgwLDAlLDQlLC4xKTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDJweCBoc2xhKDAsMCUsNCUsLjEpO21heC13aWR0aDoxMDAlO3dpZHRoOjEwMCV9LmlucHV0LmlzLWFjdGl2ZSwuaW5wdXQuaXMtZm9jdXNlZCwuaW5wdXQ6YWN0aXZlLC5pbnB1dDpmb2N1cywudGV4dGFyZWEuaXMtYWN0aXZlLC50ZXh0YXJlYS5pcy1mb2N1c2VkLC50ZXh0YXJlYTphY3RpdmUsLnRleHRhcmVhOmZvY3Vze291dGxpbmU6bm9uZX0uaW5wdXRbZGlzYWJsZWRdLC50ZXh0YXJlYVtkaXNhYmxlZF17Y3Vyc29yOm5vdC1hbGxvd2VkfS5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwudGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSg1NCw1NCw1NCwuMyl9LmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLC50ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDU0LDU0LDU0LC4zKX0uaW5wdXQ6LW1vei1wbGFjZWhvbGRlciwudGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpyZ2JhKDU0LDU0LDU0LC4zKX0uaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSg1NCw1NCw1NCwuMyl9LmlucHV0LmlzLWhvdmVyZWQsLmlucHV0OmhvdmVyLC50ZXh0YXJlYS5pcy1ob3ZlcmVkLC50ZXh0YXJlYTpob3Zlcntib3JkZXItY29sb3I6I2I1YjViNX0uaW5wdXQuaXMtYWN0aXZlLC5pbnB1dC5pcy1mb2N1c2VkLC5pbnB1dDphY3RpdmUsLmlucHV0OmZvY3VzLC50ZXh0YXJlYS5pcy1hY3RpdmUsLnRleHRhcmVhLmlzLWZvY3VzZWQsLnRleHRhcmVhOmFjdGl2ZSwudGV4dGFyZWE6Zm9jdXN7Ym9yZGVyLWNvbG9yOiMzMjczZGM7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDUwLDExNSwyMjAsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDUwLDExNSwyMjAsLjI1KX0uaW5wdXRbZGlzYWJsZWRdLC50ZXh0YXJlYVtkaXNhYmxlZF17YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1jb2xvcjojZjVmNWY1Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtjb2xvcjojN2E3YTdhfS5pbnB1dFtkaXNhYmxlZF06Oi1tb3otcGxhY2Vob2xkZXIsLnRleHRhcmVhW2Rpc2FibGVkXTo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjpoc2xhKDAsMCUsNDglLC4zKX0uaW5wdXRbZGlzYWJsZWRdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLC50ZXh0YXJlYVtkaXNhYmxlZF06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6aHNsYSgwLDAlLDQ4JSwuMyl9LmlucHV0W2Rpc2FibGVkXTotbW96LXBsYWNlaG9sZGVyLC50ZXh0YXJlYVtkaXNhYmxlZF06LW1vei1wbGFjZWhvbGRlcntjb2xvcjpoc2xhKDAsMCUsNDglLC4zKX0uaW5wdXRbZGlzYWJsZWRdOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwudGV4dGFyZWFbZGlzYWJsZWRdOi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjpoc2xhKDAsMCUsNDglLC4zKX0uaW5wdXRbdHlwZT1zZWFyY2hdLC50ZXh0YXJlYVt0eXBlPXNlYXJjaF17Ym9yZGVyLXJhZGl1czoyOTA0ODZweH0uaW5wdXRbcmVhZG9ubHldLC50ZXh0YXJlYVtyZWFkb25seV17LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lfS5pbnB1dC5pcy13aGl0ZSwudGV4dGFyZWEuaXMtd2hpdGV7Ym9yZGVyLWNvbG9yOiNmZmZ9LmlucHV0LmlzLXdoaXRlLmlzLWFjdGl2ZSwuaW5wdXQuaXMtd2hpdGUuaXMtZm9jdXNlZCwuaW5wdXQuaXMtd2hpdGU6YWN0aXZlLC5pbnB1dC5pcy13aGl0ZTpmb2N1cywudGV4dGFyZWEuaXMtd2hpdGUuaXMtYWN0aXZlLC50ZXh0YXJlYS5pcy13aGl0ZS5pcy1mb2N1c2VkLC50ZXh0YXJlYS5pcy13aGl0ZTphY3RpdmUsLnRleHRhcmVhLmlzLXdoaXRlOmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDEwMCUsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSBoc2xhKDAsMCUsMTAwJSwuMjUpfS5pbnB1dC5pcy1ibGFjaywudGV4dGFyZWEuaXMtYmxhY2t7Ym9yZGVyLWNvbG9yOiMwYTBhMGF9LmlucHV0LmlzLWJsYWNrLmlzLWFjdGl2ZSwuaW5wdXQuaXMtYmxhY2suaXMtZm9jdXNlZCwuaW5wdXQuaXMtYmxhY2s6YWN0aXZlLC5pbnB1dC5pcy1ibGFjazpmb2N1cywudGV4dGFyZWEuaXMtYmxhY2suaXMtYWN0aXZlLC50ZXh0YXJlYS5pcy1ibGFjay5pcy1mb2N1c2VkLC50ZXh0YXJlYS5pcy1ibGFjazphY3RpdmUsLnRleHRhcmVhLmlzLWJsYWNrOmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDQlLC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDQlLC4yNSl9LmlucHV0LmlzLWxpZ2h0LC50ZXh0YXJlYS5pcy1saWdodHtib3JkZXItY29sb3I6I2Y1ZjVmNX0uaW5wdXQuaXMtbGlnaHQuaXMtYWN0aXZlLC5pbnB1dC5pcy1saWdodC5pcy1mb2N1c2VkLC5pbnB1dC5pcy1saWdodDphY3RpdmUsLmlucHV0LmlzLWxpZ2h0OmZvY3VzLC50ZXh0YXJlYS5pcy1saWdodC5pcy1hY3RpdmUsLnRleHRhcmVhLmlzLWxpZ2h0LmlzLWZvY3VzZWQsLnRleHRhcmVhLmlzLWxpZ2h0OmFjdGl2ZSwudGV4dGFyZWEuaXMtbGlnaHQ6Zm9jdXN7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSBoc2xhKDAsMCUsOTYlLC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDk2JSwuMjUpfS5pbnB1dC5pcy1kYXJrLC50ZXh0YXJlYS5pcy1kYXJre2JvcmRlci1jb2xvcjojMzYzNjM2fS5pbnB1dC5pcy1kYXJrLmlzLWFjdGl2ZSwuaW5wdXQuaXMtZGFyay5pcy1mb2N1c2VkLC5pbnB1dC5pcy1kYXJrOmFjdGl2ZSwuaW5wdXQuaXMtZGFyazpmb2N1cywudGV4dGFyZWEuaXMtZGFyay5pcy1hY3RpdmUsLnRleHRhcmVhLmlzLWRhcmsuaXMtZm9jdXNlZCwudGV4dGFyZWEuaXMtZGFyazphY3RpdmUsLnRleHRhcmVhLmlzLWRhcms6Zm9jdXN7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDU0LDU0LDU0LC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1NCw1NCw1NCwuMjUpfS5pbnB1dC5pcy1wcmltYXJ5LC50ZXh0YXJlYS5pcy1wcmltYXJ5e2JvcmRlci1jb2xvcjojMDBkMWIyfS5pbnB1dC5pcy1wcmltYXJ5LmlzLWFjdGl2ZSwuaW5wdXQuaXMtcHJpbWFyeS5pcy1mb2N1c2VkLC5pbnB1dC5pcy1wcmltYXJ5OmFjdGl2ZSwuaW5wdXQuaXMtcHJpbWFyeTpmb2N1cywudGV4dGFyZWEuaXMtcHJpbWFyeS5pcy1hY3RpdmUsLnRleHRhcmVhLmlzLXByaW1hcnkuaXMtZm9jdXNlZCwudGV4dGFyZWEuaXMtcHJpbWFyeTphY3RpdmUsLnRleHRhcmVhLmlzLXByaW1hcnk6Zm9jdXN7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDAsMjA5LDE3OCwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMCwyMDksMTc4LC4yNSl9LmlucHV0LmlzLWxpbmssLnRleHRhcmVhLmlzLWxpbmt7Ym9yZGVyLWNvbG9yOiMzMjczZGN9LmlucHV0LmlzLWxpbmsuaXMtYWN0aXZlLC5pbnB1dC5pcy1saW5rLmlzLWZvY3VzZWQsLmlucHV0LmlzLWxpbms6YWN0aXZlLC5pbnB1dC5pcy1saW5rOmZvY3VzLC50ZXh0YXJlYS5pcy1saW5rLmlzLWFjdGl2ZSwudGV4dGFyZWEuaXMtbGluay5pcy1mb2N1c2VkLC50ZXh0YXJlYS5pcy1saW5rOmFjdGl2ZSwudGV4dGFyZWEuaXMtbGluazpmb2N1c3std2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoNTAsMTE1LDIyMCwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoNTAsMTE1LDIyMCwuMjUpfS5pbnB1dC5pcy1pbmZvLC50ZXh0YXJlYS5pcy1pbmZve2JvcmRlci1jb2xvcjojMjA5Y2VlfS5pbnB1dC5pcy1pbmZvLmlzLWFjdGl2ZSwuaW5wdXQuaXMtaW5mby5pcy1mb2N1c2VkLC5pbnB1dC5pcy1pbmZvOmFjdGl2ZSwuaW5wdXQuaXMtaW5mbzpmb2N1cywudGV4dGFyZWEuaXMtaW5mby5pcy1hY3RpdmUsLnRleHRhcmVhLmlzLWluZm8uaXMtZm9jdXNlZCwudGV4dGFyZWEuaXMtaW5mbzphY3RpdmUsLnRleHRhcmVhLmlzLWluZm86Zm9jdXN7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDMyLDE1NiwyMzgsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDMyLDE1NiwyMzgsLjI1KX0uaW5wdXQuaXMtc3VjY2VzcywudGV4dGFyZWEuaXMtc3VjY2Vzc3tib3JkZXItY29sb3I6IzIzZDE2MH0uaW5wdXQuaXMtc3VjY2Vzcy5pcy1hY3RpdmUsLmlucHV0LmlzLXN1Y2Nlc3MuaXMtZm9jdXNlZCwuaW5wdXQuaXMtc3VjY2VzczphY3RpdmUsLmlucHV0LmlzLXN1Y2Nlc3M6Zm9jdXMsLnRleHRhcmVhLmlzLXN1Y2Nlc3MuaXMtYWN0aXZlLC50ZXh0YXJlYS5pcy1zdWNjZXNzLmlzLWZvY3VzZWQsLnRleHRhcmVhLmlzLXN1Y2Nlc3M6YWN0aXZlLC50ZXh0YXJlYS5pcy1zdWNjZXNzOmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgzNSwyMDksOTYsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDM1LDIwOSw5NiwuMjUpfS5pbnB1dC5pcy13YXJuaW5nLC50ZXh0YXJlYS5pcy13YXJuaW5ne2JvcmRlci1jb2xvcjojZmZkZDU3fS5pbnB1dC5pcy13YXJuaW5nLmlzLWFjdGl2ZSwuaW5wdXQuaXMtd2FybmluZy5pcy1mb2N1c2VkLC5pbnB1dC5pcy13YXJuaW5nOmFjdGl2ZSwuaW5wdXQuaXMtd2FybmluZzpmb2N1cywudGV4dGFyZWEuaXMtd2FybmluZy5pcy1hY3RpdmUsLnRleHRhcmVhLmlzLXdhcm5pbmcuaXMtZm9jdXNlZCwudGV4dGFyZWEuaXMtd2FybmluZzphY3RpdmUsLnRleHRhcmVhLmlzLXdhcm5pbmc6Zm9jdXN7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDI1NSwyMjEsODcsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDI1NSwyMjEsODcsLjI1KX0uaW5wdXQuaXMtZGFuZ2VyLC50ZXh0YXJlYS5pcy1kYW5nZXJ7Ym9yZGVyLWNvbG9yOiNmZjM4NjB9LmlucHV0LmlzLWRhbmdlci5pcy1hY3RpdmUsLmlucHV0LmlzLWRhbmdlci5pcy1mb2N1c2VkLC5pbnB1dC5pcy1kYW5nZXI6YWN0aXZlLC5pbnB1dC5pcy1kYW5nZXI6Zm9jdXMsLnRleHRhcmVhLmlzLWRhbmdlci5pcy1hY3RpdmUsLnRleHRhcmVhLmlzLWRhbmdlci5pcy1mb2N1c2VkLC50ZXh0YXJlYS5pcy1kYW5nZXI6YWN0aXZlLC50ZXh0YXJlYS5pcy1kYW5nZXI6Zm9jdXN7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDI1NSw1Niw5NiwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMjU1LDU2LDk2LC4yNSl9LmlucHV0LmlzLXNtYWxsLC50ZXh0YXJlYS5pcy1zbWFsbHtib3JkZXItcmFkaXVzOjJweDtmb250LXNpemU6Ljc1cmVtfS5pbnB1dC5pcy1tZWRpdW0sLnRleHRhcmVhLmlzLW1lZGl1bXtmb250LXNpemU6MS4yNXJlbX0uaW5wdXQuaXMtbGFyZ2UsLnRleHRhcmVhLmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LmlucHV0LmlzLWZ1bGx3aWR0aCwudGV4dGFyZWEuaXMtZnVsbHdpZHRoe2Rpc3BsYXk6YmxvY2s7d2lkdGg6MTAwJX0uaW5wdXQuaXMtaW5saW5lLC50ZXh0YXJlYS5pcy1pbmxpbmV7ZGlzcGxheTppbmxpbmU7d2lkdGg6YXV0b30uaW5wdXQuaXMtc3RhdGlje2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjB9LnRleHRhcmVhe2Rpc3BsYXk6YmxvY2s7bWF4LXdpZHRoOjEwMCU7bWluLXdpZHRoOjEwMCU7cGFkZGluZzouNjI1ZW07cmVzaXplOnZlcnRpY2FsfS50ZXh0YXJlYTpub3QoW3Jvd3NdKXttYXgtaGVpZ2h0OjYwMHB4O21pbi1oZWlnaHQ6MTIwcHh9LnRleHRhcmVhW3Jvd3Nde2hlaWdodDp1bnNldH0udGV4dGFyZWEuaGFzLWZpeGVkLXNpemV7cmVzaXplOm5vbmV9LmNoZWNrYm94LC5yYWRpb3tjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztsaW5lLWhlaWdodDoxLjI1O3Bvc2l0aW9uOnJlbGF0aXZlfS5jaGVja2JveCBpbnB1dCwucmFkaW8gaW5wdXR7Y3Vyc29yOnBvaW50ZXJ9LmNoZWNrYm94OmhvdmVyLC5yYWRpbzpob3Zlcntjb2xvcjojMzYzNjM2fS5jaGVja2JveFtkaXNhYmxlZF0sLnJhZGlvW2Rpc2FibGVkXXtjb2xvcjojN2E3YTdhO2N1cnNvcjpub3QtYWxsb3dlZH0ucmFkaW8rLnJhZGlve21hcmdpbi1sZWZ0Oi41ZW19LnNlbGVjdHtkaXNwbGF5OmlubGluZS1ibG9jazttYXgtd2lkdGg6MTAwJTtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjp0b3B9LnNlbGVjdDpub3QoLmlzLW11bHRpcGxlKXtoZWlnaHQ6Mi4yNWVtfS5zZWxlY3Q6bm90KC5pcy1tdWx0aXBsZSk6YWZ0ZXJ7Ym9yZGVyOjFweCBzb2xpZCAjMzI3M2RjO2JvcmRlci1yaWdodDowO2JvcmRlci10b3A6MDtjb250ZW50OlxcXCIgXFxcIjtkaXNwbGF5OmJsb2NrO2hlaWdodDouNWVtO3BvaW50ZXItZXZlbnRzOm5vbmU7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXI7d2lkdGg6LjVlbTttYXJnaW4tdG9wOi0uMzc1ZW07cmlnaHQ6MS4xMjVlbTt0b3A6NTAlO3otaW5kZXg6NH0uc2VsZWN0IHNlbGVjdHstbW96LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWFwcGVhcmFuY2U6bm9uZTstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6M3B4Oy13ZWJraXQtYm94LXNoYWRvdzpub25lO2JveC1zaGFkb3c6bm9uZTtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O2ZvbnQtc2l6ZToxcmVtO2hlaWdodDoyLjI1ZW07LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2xpbmUtaGVpZ2h0OjEuNTtwYWRkaW5nOmNhbGMoLjM3NWVtIC0gMXB4KSBjYWxjKC42MjVlbSAtIDFweCk7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246dG9wO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2RiZGJkYjtjb2xvcjojMzYzNjM2O2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjFlbTttYXgtd2lkdGg6MTAwJTtvdXRsaW5lOm5vbmV9LnNlbGVjdCBzZWxlY3QuaXMtYWN0aXZlLC5zZWxlY3Qgc2VsZWN0LmlzLWZvY3VzZWQsLnNlbGVjdCBzZWxlY3Q6YWN0aXZlLC5zZWxlY3Qgc2VsZWN0OmZvY3Vze291dGxpbmU6bm9uZX0uc2VsZWN0IHNlbGVjdFtkaXNhYmxlZF17Y3Vyc29yOm5vdC1hbGxvd2VkfS5zZWxlY3Qgc2VsZWN0OjotbW96LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoNTQsNTQsNTQsLjMpfS5zZWxlY3Qgc2VsZWN0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoNTQsNTQsNTQsLjMpfS5zZWxlY3Qgc2VsZWN0Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6cmdiYSg1NCw1NCw1NCwuMyl9LnNlbGVjdCBzZWxlY3Q6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoNTQsNTQsNTQsLjMpfS5zZWxlY3Qgc2VsZWN0LmlzLWhvdmVyZWQsLnNlbGVjdCBzZWxlY3Q6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNiNWI1YjV9LnNlbGVjdCBzZWxlY3QuaXMtYWN0aXZlLC5zZWxlY3Qgc2VsZWN0LmlzLWZvY3VzZWQsLnNlbGVjdCBzZWxlY3Q6YWN0aXZlLC5zZWxlY3Qgc2VsZWN0OmZvY3Vze2JvcmRlci1jb2xvcjojMzI3M2RjOy13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1MCwxMTUsMjIwLC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1MCwxMTUsMjIwLC4yNSl9LnNlbGVjdCBzZWxlY3RbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItY29sb3I6I2Y1ZjVmNTstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzdhN2E3YX0uc2VsZWN0IHNlbGVjdFtkaXNhYmxlZF06Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6aHNsYSgwLDAlLDQ4JSwuMyl9LnNlbGVjdCBzZWxlY3RbZGlzYWJsZWRdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOmhzbGEoMCwwJSw0OCUsLjMpfS5zZWxlY3Qgc2VsZWN0W2Rpc2FibGVkXTotbW96LXBsYWNlaG9sZGVye2NvbG9yOmhzbGEoMCwwJSw0OCUsLjMpfS5zZWxlY3Qgc2VsZWN0W2Rpc2FibGVkXTotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6aHNsYSgwLDAlLDQ4JSwuMyl9LnNlbGVjdCBzZWxlY3Q6Oi1tcy1leHBhbmR7ZGlzcGxheTpub25lfS5zZWxlY3Qgc2VsZWN0W2Rpc2FibGVkXTpob3Zlcntib3JkZXItY29sb3I6I2Y1ZjVmNX0uc2VsZWN0IHNlbGVjdDpub3QoW211bHRpcGxlXSl7cGFkZGluZy1yaWdodDoyLjVlbX0uc2VsZWN0IHNlbGVjdFttdWx0aXBsZV17aGVpZ2h0OnVuc2V0O3BhZGRpbmc6MH0uc2VsZWN0IHNlbGVjdFttdWx0aXBsZV0gb3B0aW9ue3BhZGRpbmc6LjVlbSAxZW19LnNlbGVjdDpob3ZlcjphZnRlcntib3JkZXItY29sb3I6IzM2MzYzNn0uc2VsZWN0LmlzLXdoaXRlIHNlbGVjdHtib3JkZXItY29sb3I6I2ZmZn0uc2VsZWN0LmlzLXdoaXRlIHNlbGVjdC5pcy1hY3RpdmUsLnNlbGVjdC5pcy13aGl0ZSBzZWxlY3QuaXMtZm9jdXNlZCwuc2VsZWN0LmlzLXdoaXRlIHNlbGVjdDphY3RpdmUsLnNlbGVjdC5pcy13aGl0ZSBzZWxlY3Q6Zm9jdXN7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSBoc2xhKDAsMCUsMTAwJSwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIGhzbGEoMCwwJSwxMDAlLC4yNSl9LnNlbGVjdC5pcy1ibGFjayBzZWxlY3R7Ym9yZGVyLWNvbG9yOiMwYTBhMGF9LnNlbGVjdC5pcy1ibGFjayBzZWxlY3QuaXMtYWN0aXZlLC5zZWxlY3QuaXMtYmxhY2sgc2VsZWN0LmlzLWZvY3VzZWQsLnNlbGVjdC5pcy1ibGFjayBzZWxlY3Q6YWN0aXZlLC5zZWxlY3QuaXMtYmxhY2sgc2VsZWN0OmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDQlLC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDQlLC4yNSl9LnNlbGVjdC5pcy1saWdodCBzZWxlY3R7Ym9yZGVyLWNvbG9yOiNmNWY1ZjV9LnNlbGVjdC5pcy1saWdodCBzZWxlY3QuaXMtYWN0aXZlLC5zZWxlY3QuaXMtbGlnaHQgc2VsZWN0LmlzLWZvY3VzZWQsLnNlbGVjdC5pcy1saWdodCBzZWxlY3Q6YWN0aXZlLC5zZWxlY3QuaXMtbGlnaHQgc2VsZWN0OmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gaHNsYSgwLDAlLDk2JSwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIGhzbGEoMCwwJSw5NiUsLjI1KX0uc2VsZWN0LmlzLWRhcmsgc2VsZWN0e2JvcmRlci1jb2xvcjojMzYzNjM2fS5zZWxlY3QuaXMtZGFyayBzZWxlY3QuaXMtYWN0aXZlLC5zZWxlY3QuaXMtZGFyayBzZWxlY3QuaXMtZm9jdXNlZCwuc2VsZWN0LmlzLWRhcmsgc2VsZWN0OmFjdGl2ZSwuc2VsZWN0LmlzLWRhcmsgc2VsZWN0OmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSg1NCw1NCw1NCwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoNTQsNTQsNTQsLjI1KX0uc2VsZWN0LmlzLXByaW1hcnkgc2VsZWN0e2JvcmRlci1jb2xvcjojMDBkMWIyfS5zZWxlY3QuaXMtcHJpbWFyeSBzZWxlY3QuaXMtYWN0aXZlLC5zZWxlY3QuaXMtcHJpbWFyeSBzZWxlY3QuaXMtZm9jdXNlZCwuc2VsZWN0LmlzLXByaW1hcnkgc2VsZWN0OmFjdGl2ZSwuc2VsZWN0LmlzLXByaW1hcnkgc2VsZWN0OmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgwLDIwOSwxNzgsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDAsMjA5LDE3OCwuMjUpfS5zZWxlY3QuaXMtbGluayBzZWxlY3R7Ym9yZGVyLWNvbG9yOiMzMjczZGN9LnNlbGVjdC5pcy1saW5rIHNlbGVjdC5pcy1hY3RpdmUsLnNlbGVjdC5pcy1saW5rIHNlbGVjdC5pcy1mb2N1c2VkLC5zZWxlY3QuaXMtbGluayBzZWxlY3Q6YWN0aXZlLC5zZWxlY3QuaXMtbGluayBzZWxlY3Q6Zm9jdXN7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDUwLDExNSwyMjAsLjI1KTtib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDUwLDExNSwyMjAsLjI1KX0uc2VsZWN0LmlzLWluZm8gc2VsZWN0e2JvcmRlci1jb2xvcjojMjA5Y2VlfS5zZWxlY3QuaXMtaW5mbyBzZWxlY3QuaXMtYWN0aXZlLC5zZWxlY3QuaXMtaW5mbyBzZWxlY3QuaXMtZm9jdXNlZCwuc2VsZWN0LmlzLWluZm8gc2VsZWN0OmFjdGl2ZSwuc2VsZWN0LmlzLWluZm8gc2VsZWN0OmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgzMiwxNTYsMjM4LC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgzMiwxNTYsMjM4LC4yNSl9LnNlbGVjdC5pcy1zdWNjZXNzIHNlbGVjdHtib3JkZXItY29sb3I6IzIzZDE2MH0uc2VsZWN0LmlzLXN1Y2Nlc3Mgc2VsZWN0LmlzLWFjdGl2ZSwuc2VsZWN0LmlzLXN1Y2Nlc3Mgc2VsZWN0LmlzLWZvY3VzZWQsLnNlbGVjdC5pcy1zdWNjZXNzIHNlbGVjdDphY3RpdmUsLnNlbGVjdC5pcy1zdWNjZXNzIHNlbGVjdDpmb2N1c3std2Via2l0LWJveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMzUsMjA5LDk2LC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgzNSwyMDksOTYsLjI1KX0uc2VsZWN0LmlzLXdhcm5pbmcgc2VsZWN0e2JvcmRlci1jb2xvcjojZmZkZDU3fS5zZWxlY3QuaXMtd2FybmluZyBzZWxlY3QuaXMtYWN0aXZlLC5zZWxlY3QuaXMtd2FybmluZyBzZWxlY3QuaXMtZm9jdXNlZCwuc2VsZWN0LmlzLXdhcm5pbmcgc2VsZWN0OmFjdGl2ZSwuc2VsZWN0LmlzLXdhcm5pbmcgc2VsZWN0OmZvY3Vzey13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNTUsMjIxLDg3LC4yNSk7Ym94LXNoYWRvdzowIDAgMCAuMTI1ZW0gcmdiYSgyNTUsMjIxLDg3LC4yNSl9LnNlbGVjdC5pcy1kYW5nZXIgc2VsZWN0e2JvcmRlci1jb2xvcjojZmYzODYwfS5zZWxlY3QuaXMtZGFuZ2VyIHNlbGVjdC5pcy1hY3RpdmUsLnNlbGVjdC5pcy1kYW5nZXIgc2VsZWN0LmlzLWZvY3VzZWQsLnNlbGVjdC5pcy1kYW5nZXIgc2VsZWN0OmFjdGl2ZSwuc2VsZWN0LmlzLWRhbmdlciBzZWxlY3Q6Zm9jdXN7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAwIC4xMjVlbSByZ2JhKDI1NSw1Niw5NiwuMjUpO2JveC1zaGFkb3c6MCAwIDAgLjEyNWVtIHJnYmEoMjU1LDU2LDk2LC4yNSl9LnNlbGVjdC5pcy1zbWFsbHtib3JkZXItcmFkaXVzOjJweDtmb250LXNpemU6Ljc1cmVtfS5zZWxlY3QuaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtfS5zZWxlY3QuaXMtbGFyZ2V7Zm9udC1zaXplOjEuNXJlbX0uc2VsZWN0LmlzLWRpc2FibGVkOmFmdGVye2JvcmRlci1jb2xvcjojN2E3YTdhfS5zZWxlY3QuaXMtZnVsbHdpZHRoLC5zZWxlY3QuaXMtZnVsbHdpZHRoIHNlbGVjdHt3aWR0aDoxMDAlfS5zZWxlY3QuaXMtbG9hZGluZzphZnRlcnstd2Via2l0LWFuaW1hdGlvbjpzcGluQXJvdW5kIC41cyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOnNwaW5Bcm91bmQgLjVzIGluZmluaXRlIGxpbmVhcjtib3JkZXI6MnB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXJhZGl1czoyOTA0ODZweDtib3JkZXItcmlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXRvcC1jb2xvcjp0cmFuc3BhcmVudDtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjFlbTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxZW07bWFyZ2luLXRvcDowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0Oi42MjVlbTt0b3A6LjYyNWVtOy13ZWJraXQtdHJhbnNmb3JtOm5vbmU7dHJhbnNmb3JtOm5vbmV9LnNlbGVjdC5pcy1sb2FkaW5nLmlzLXNtYWxsOmFmdGVye2ZvbnQtc2l6ZTouNzVyZW19LnNlbGVjdC5pcy1sb2FkaW5nLmlzLW1lZGl1bTphZnRlcntmb250LXNpemU6MS4yNXJlbX0uc2VsZWN0LmlzLWxvYWRpbmcuaXMtbGFyZ2U6YWZ0ZXJ7Zm9udC1zaXplOjEuNXJlbX0uZmlsZXstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7LXdlYmtpdC1ib3gtYWxpZ246c3RyZXRjaDstbXMtZmxleC1hbGlnbjpzdHJldGNoO2FsaWduLWl0ZW1zOnN0cmV0Y2g7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1wYWNrOnN0YXJ0Oy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7cG9zaXRpb246cmVsYXRpdmV9LmZpbGUuaXMtd2hpdGUgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzBhMGEwYX0uZmlsZS5pcy13aGl0ZS5pcy1ob3ZlcmVkIC5maWxlLWN0YSwuZmlsZS5pcy13aGl0ZTpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMGEwYTBhfS5maWxlLmlzLXdoaXRlLmlzLWZvY3VzZWQgLmZpbGUtY3RhLC5maWxlLmlzLXdoaXRlOmZvY3VzIC5maWxlLWN0YXtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAuNWVtIGhzbGEoMCwwJSwxMDAlLC4yNSk7Ym94LXNoYWRvdzowIDAgLjVlbSBoc2xhKDAsMCUsMTAwJSwuMjUpO2NvbG9yOiMwYTBhMGF9LmZpbGUuaXMtd2hpdGUuaXMtYWN0aXZlIC5maWxlLWN0YSwuZmlsZS5pcy13aGl0ZTphY3RpdmUgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2YyZjJmMjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzBhMGEwYX0uZmlsZS5pcy1ibGFjayAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLWJsYWNrLmlzLWhvdmVyZWQgLmZpbGUtY3RhLC5maWxlLmlzLWJsYWNrOmhvdmVyIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiMwNDA0MDQ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtYmxhY2suaXMtZm9jdXNlZCAuZmlsZS1jdGEsLmZpbGUuaXMtYmxhY2s6Zm9jdXMgLmZpbGUtY3Rhe2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LWJveC1zaGFkb3c6MCAwIC41ZW0gaHNsYSgwLDAlLDQlLC4yNSk7Ym94LXNoYWRvdzowIDAgLjVlbSBoc2xhKDAsMCUsNCUsLjI1KTtjb2xvcjojZmZmfS5maWxlLmlzLWJsYWNrLmlzLWFjdGl2ZSAuZmlsZS1jdGEsLmZpbGUuaXMtYmxhY2s6YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtbGlnaHQgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6IzM2MzYzNn0uZmlsZS5pcy1saWdodC5pcy1ob3ZlcmVkIC5maWxlLWN0YSwuZmlsZS5pcy1saWdodDpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojZWVlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojMzYzNjM2fS5maWxlLmlzLWxpZ2h0LmlzLWZvY3VzZWQgLmZpbGUtY3RhLC5maWxlLmlzLWxpZ2h0OmZvY3VzIC5maWxlLWN0YXtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAuNWVtIGhzbGEoMCwwJSw5NiUsLjI1KTtib3gtc2hhZG93OjAgMCAuNWVtIGhzbGEoMCwwJSw5NiUsLjI1KTtjb2xvcjojMzYzNjM2fS5maWxlLmlzLWxpZ2h0LmlzLWFjdGl2ZSAuZmlsZS1jdGEsLmZpbGUuaXMtbGlnaHQ6YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiMzNjM2MzZ9LmZpbGUuaXMtZGFyayAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZjVmNWY1fS5maWxlLmlzLWRhcmsuaXMtaG92ZXJlZCAuZmlsZS1jdGEsLmZpbGUuaXMtZGFyazpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMmYyZjJmO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZjVmNWY1fS5maWxlLmlzLWRhcmsuaXMtZm9jdXNlZCAuZmlsZS1jdGEsLmZpbGUuaXMtZGFyazpmb2N1cyAuZmlsZS1jdGF7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDU0LDU0LDU0LC4yNSk7Ym94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDU0LDU0LDU0LC4yNSk7Y29sb3I6I2Y1ZjVmNX0uZmlsZS5pcy1kYXJrLmlzLWFjdGl2ZSAuZmlsZS1jdGEsLmZpbGUuaXMtZGFyazphY3RpdmUgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6IzI5MjkyOTtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2Y1ZjVmNX0uZmlsZS5pcy1wcmltYXJ5IC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjI7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtcHJpbWFyeS5pcy1ob3ZlcmVkIC5maWxlLWN0YSwuZmlsZS5pcy1wcmltYXJ5OmhvdmVyIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGM0YTc7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtcHJpbWFyeS5pcy1mb2N1c2VkIC5maWxlLWN0YSwuZmlsZS5pcy1wcmltYXJ5OmZvY3VzIC5maWxlLWN0YXtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93OjAgMCAuNWVtIHJnYmEoMCwyMDksMTc4LC4yNSk7Ym94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDAsMjA5LDE3OCwuMjUpO2NvbG9yOiNmZmZ9LmZpbGUuaXMtcHJpbWFyeS5pcy1hY3RpdmUgLmZpbGUtY3RhLC5maWxlLmlzLXByaW1hcnk6YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGI4OWM7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtbGluayAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLWxpbmsuaXMtaG92ZXJlZCAuZmlsZS1jdGEsLmZpbGUuaXMtbGluazpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMjc2Y2RhO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLWxpbmsuaXMtZm9jdXNlZCAuZmlsZS1jdGEsLmZpbGUuaXMtbGluazpmb2N1cyAuZmlsZS1jdGF7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDUwLDExNSwyMjAsLjI1KTtib3gtc2hhZG93OjAgMCAuNWVtIHJnYmEoNTAsMTE1LDIyMCwuMjUpO2NvbG9yOiNmZmZ9LmZpbGUuaXMtbGluay5pcy1hY3RpdmUgLmZpbGUtY3RhLC5maWxlLmlzLWxpbms6YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiMyMzY2ZDE7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtaW5mbyAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMjA5Y2VlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLWluZm8uaXMtaG92ZXJlZCAuZmlsZS1jdGEsLmZpbGUuaXMtaW5mbzpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMTQ5NmVkO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLWluZm8uaXMtZm9jdXNlZCAuZmlsZS1jdGEsLmZpbGUuaXMtaW5mbzpmb2N1cyAuZmlsZS1jdGF7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDMyLDE1NiwyMzgsLjI1KTtib3gtc2hhZG93OjAgMCAuNWVtIHJnYmEoMzIsMTU2LDIzOCwuMjUpO2NvbG9yOiNmZmZ9LmZpbGUuaXMtaW5mby5pcy1hY3RpdmUgLmZpbGUtY3RhLC5maWxlLmlzLWluZm86YWN0aXZlIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiMxMThmZTQ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtc3VjY2VzcyAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLXN1Y2Nlc3MuaXMtaG92ZXJlZCAuZmlsZS1jdGEsLmZpbGUuaXMtc3VjY2Vzczpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMjJjNjViO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLXN1Y2Nlc3MuaXMtZm9jdXNlZCAuZmlsZS1jdGEsLmZpbGUuaXMtc3VjY2Vzczpmb2N1cyAuZmlsZS1jdGF7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDM1LDIwOSw5NiwuMjUpO2JveC1zaGFkb3c6MCAwIC41ZW0gcmdiYSgzNSwyMDksOTYsLjI1KTtjb2xvcjojZmZmfS5maWxlLmlzLXN1Y2Nlc3MuaXMtYWN0aXZlIC5maWxlLWN0YSwuZmlsZS5pcy1zdWNjZXNzOmFjdGl2ZSAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojMjBiYzU2O2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjojZmZmfS5maWxlLmlzLXdhcm5pbmcgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2ZmZGQ1Nztib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6cmdiYSgwLDAsMCwuNyl9LmZpbGUuaXMtd2FybmluZy5pcy1ob3ZlcmVkIC5maWxlLWN0YSwuZmlsZS5pcy13YXJuaW5nOmhvdmVyIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmRiNGE7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5maWxlLmlzLXdhcm5pbmcuaXMtZm9jdXNlZCAuZmlsZS1jdGEsLmZpbGUuaXMtd2FybmluZzpmb2N1cyAuZmlsZS1jdGF7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDI1NSwyMjEsODcsLjI1KTtib3gtc2hhZG93OjAgMCAuNWVtIHJnYmEoMjU1LDIyMSw4NywuMjUpO2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5maWxlLmlzLXdhcm5pbmcuaXMtYWN0aXZlIC5maWxlLWN0YSwuZmlsZS5pcy13YXJuaW5nOmFjdGl2ZSAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojZmZkODNkO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uZmlsZS5pcy1kYW5nZXIgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy1kYW5nZXIuaXMtaG92ZXJlZCAuZmlsZS1jdGEsLmZpbGUuaXMtZGFuZ2VyOmhvdmVyIC5maWxlLWN0YXtiYWNrZ3JvdW5kLWNvbG9yOiNmZjJiNTY7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOiNmZmZ9LmZpbGUuaXMtZGFuZ2VyLmlzLWZvY3VzZWQgLmZpbGUtY3RhLC5maWxlLmlzLWRhbmdlcjpmb2N1cyAuZmlsZS1jdGF7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtYm94LXNoYWRvdzowIDAgLjVlbSByZ2JhKDI1NSw1Niw5NiwuMjUpO2JveC1zaGFkb3c6MCAwIC41ZW0gcmdiYSgyNTUsNTYsOTYsLjI1KTtjb2xvcjojZmZmfS5maWxlLmlzLWRhbmdlci5pcy1hY3RpdmUgLmZpbGUtY3RhLC5maWxlLmlzLWRhbmdlcjphY3RpdmUgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2ZmMWY0Yjtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6I2ZmZn0uZmlsZS5pcy1zbWFsbHtmb250LXNpemU6Ljc1cmVtfS5maWxlLmlzLW1lZGl1bXtmb250LXNpemU6MS4yNXJlbX0uZmlsZS5pcy1tZWRpdW0gLmZpbGUtaWNvbiAuZmF7Zm9udC1zaXplOjIxcHh9LmZpbGUuaXMtbGFyZ2V7Zm9udC1zaXplOjEuNXJlbX0uZmlsZS5pcy1sYXJnZSAuZmlsZS1pY29uIC5mYXtmb250LXNpemU6MjhweH0uZmlsZS5oYXMtbmFtZSAuZmlsZS1jdGF7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5maWxlLmhhcy1uYW1lIC5maWxlLW5hbWV7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MH0uZmlsZS5oYXMtbmFtZS5pcy1lbXB0eSAuZmlsZS1jdGF7Ym9yZGVyLXJhZGl1czozcHh9LmZpbGUuaGFzLW5hbWUuaXMtZW1wdHkgLmZpbGUtbmFtZXtkaXNwbGF5Om5vbmV9LmZpbGUuaXMtY2VudGVyZWR7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uZmlsZS5pcy1yaWdodHstd2Via2l0LWJveC1wYWNrOmVuZDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LmZpbGUuaXMtYm94ZWQgLmZpbGUtY3RhLC5maWxlLmlzLWJveGVkIC5maWxlLWxhYmVsey13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5maWxlLmlzLWJveGVkIC5maWxlLWN0YXtoZWlnaHQ6YXV0bztwYWRkaW5nOjFlbSAzZW19LmZpbGUuaXMtYm94ZWQgLmZpbGUtbmFtZXtib3JkZXItd2lkdGg6MCAxcHggMXB4fS5maWxlLmlzLWJveGVkIC5maWxlLWljb257aGVpZ2h0OjEuNWVtO3dpZHRoOjEuNWVtfS5maWxlLmlzLWJveGVkIC5maWxlLWljb24gLmZhe2ZvbnQtc2l6ZToyMXB4fS5maWxlLmlzLWJveGVkLmlzLXNtYWxsIC5maWxlLWljb24gLmZhe2ZvbnQtc2l6ZToxNHB4fS5maWxlLmlzLWJveGVkLmlzLW1lZGl1bSAuZmlsZS1pY29uIC5mYXtmb250LXNpemU6MjhweH0uZmlsZS5pcy1ib3hlZC5pcy1sYXJnZSAuZmlsZS1pY29uIC5mYXtmb250LXNpemU6MzVweH0uZmlsZS5pcy1ib3hlZC5oYXMtbmFtZSAuZmlsZS1jdGF7Ym9yZGVyLXJhZGl1czozcHggM3B4IDAgMH0uZmlsZS5pcy1ib3hlZC5oYXMtbmFtZSAuZmlsZS1uYW1le2JvcmRlci1yYWRpdXM6MCAwIDNweCAzcHg7Ym9yZGVyLXdpZHRoOjAgMXB4IDFweH0uZmlsZS5pcy1yaWdodCAuZmlsZS1jdGF7Ym9yZGVyLXJhZGl1czowIDNweCAzcHggMH0uZmlsZS5pcy1yaWdodCAuZmlsZS1uYW1le2JvcmRlci1yYWRpdXM6M3B4IDAgMCAzcHg7Ym9yZGVyLXdpZHRoOjFweCAwIDFweCAxcHg7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDowOy1tcy1mbGV4LW9yZGVyOi0xO29yZGVyOi0xfS5maWxlLmlzLWZ1bGx3aWR0aCAuZmlsZS1sYWJlbHt3aWR0aDoxMDAlfS5maWxlLmlzLWZ1bGx3aWR0aCAuZmlsZS1uYW1ley13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxO21heC13aWR0aDpub25lfS5maWxlLWxhYmVsey13ZWJraXQtYm94LWFsaWduOnN0cmV0Y2g7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNoO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7Y3Vyc29yOnBvaW50ZXI7LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpyZWxhdGl2ZX0uZmlsZS1sYWJlbDpob3ZlciAuZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojZWVlO2NvbG9yOiMzNjM2MzZ9LmZpbGUtbGFiZWw6aG92ZXIgLmZpbGUtbmFtZXtib3JkZXItY29sb3I6I2Q1ZDVkNX0uZmlsZS1sYWJlbDphY3RpdmUgLmZpbGUtY3Rhe2JhY2tncm91bmQtY29sb3I6I2U4ZThlODtjb2xvcjojMzYzNjM2fS5maWxlLWxhYmVsOmFjdGl2ZSAuZmlsZS1uYW1le2JvcmRlci1jb2xvcjojY2ZjZmNmfS5maWxlLWlucHV0e2hlaWdodDouMDFlbTtsZWZ0OjA7b3V0bGluZTpub25lO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3dpZHRoOi4wMWVtfS5maWxlLWN0YSwuZmlsZS1uYW1ley1tb3otYXBwZWFyYW5jZTpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtYm94O2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6aW5saW5lLWZsZXg7Zm9udC1zaXplOjFyZW07aGVpZ2h0OjIuMjVlbTstd2Via2l0LWJveC1wYWNrOnN0YXJ0Oy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7bGluZS1oZWlnaHQ6MS41O3BhZGRpbmctbGVmdDpjYWxjKC42MjVlbSAtIDFweCk7cGFkZGluZy1yaWdodDpjYWxjKC42MjVlbSAtIDFweCk7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246dG9wO2JvcmRlci1jb2xvcjojZGJkYmRiO2JvcmRlci1yYWRpdXM6M3B4O2ZvbnQtc2l6ZToxZW07cGFkZGluZzpjYWxjKC4zNzVlbSAtIDFweCkgMWVtO3doaXRlLXNwYWNlOm5vd3JhcH0uZmlsZS1jdGEuaXMtYWN0aXZlLC5maWxlLWN0YS5pcy1mb2N1c2VkLC5maWxlLWN0YTphY3RpdmUsLmZpbGUtY3RhOmZvY3VzLC5maWxlLW5hbWUuaXMtYWN0aXZlLC5maWxlLW5hbWUuaXMtZm9jdXNlZCwuZmlsZS1uYW1lOmFjdGl2ZSwuZmlsZS1uYW1lOmZvY3Vze291dGxpbmU6bm9uZX0uZmlsZS1jdGFbZGlzYWJsZWRdLC5maWxlLW5hbWVbZGlzYWJsZWRde2N1cnNvcjpub3QtYWxsb3dlZH0uZmlsZS1jdGF7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiM0YTRhNGF9LmZpbGUtbmFtZXtib3JkZXItY29sb3I6I2RiZGJkYjtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjFweCAxcHggMXB4IDA7ZGlzcGxheTpibG9jazttYXgtd2lkdGg6MTZlbTtvdmVyZmxvdzpoaWRkZW47dGV4dC1hbGlnbjpsZWZ0O3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9LmZpbGUtaWNvbnstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O2hlaWdodDoxZW07LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tcmlnaHQ6LjVlbTt3aWR0aDoxZW19LmZpbGUtaWNvbiAuZmF7Zm9udC1zaXplOjE0cHh9LmxhYmVse2NvbG9yOiMzNjM2MzY7ZGlzcGxheTpibG9jaztmb250LXNpemU6MXJlbTtmb250LXdlaWdodDo3MDB9LmxhYmVsOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTouNWVtfS5sYWJlbC5pcy1zbWFsbHtmb250LXNpemU6Ljc1cmVtfS5sYWJlbC5pcy1tZWRpdW17Zm9udC1zaXplOjEuMjVyZW19LmxhYmVsLmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LmhlbHB7ZGlzcGxheTpibG9jaztmb250LXNpemU6Ljc1cmVtO21hcmdpbi10b3A6LjI1cmVtfS5oZWxwLmlzLXdoaXRle2NvbG9yOiNmZmZ9LmhlbHAuaXMtYmxhY2t7Y29sb3I6IzBhMGEwYX0uaGVscC5pcy1saWdodHtjb2xvcjojZjVmNWY1fS5oZWxwLmlzLWRhcmt7Y29sb3I6IzM2MzYzNn0uaGVscC5pcy1wcmltYXJ5e2NvbG9yOiMwMGQxYjJ9LmhlbHAuaXMtbGlua3tjb2xvcjojMzI3M2RjfS5oZWxwLmlzLWluZm97Y29sb3I6IzIwOWNlZX0uaGVscC5pcy1zdWNjZXNze2NvbG9yOiMyM2QxNjB9LmhlbHAuaXMtd2FybmluZ3tjb2xvcjojZmZkZDU3fS5oZWxwLmlzLWRhbmdlcntjb2xvcjojZmYzODYwfS5maWVsZDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206Ljc1cmVtfS5maWVsZC5oYXMtYWRkb25ze2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLXJpZ2h0Oi0xcHh9LmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2w6Zmlyc3QtY2hpbGQgLmJ1dHRvbiwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbDpmaXJzdC1jaGlsZCAuaW5wdXQsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2w6Zmlyc3QtY2hpbGQgLnNlbGVjdCBzZWxlY3R7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czozcHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czozcHh9LmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2w6bGFzdC1jaGlsZCAuYnV0dG9uLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sOmxhc3QtY2hpbGQgLmlucHV0LC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sOmxhc3QtY2hpbGQgLnNlbGVjdCBzZWxlY3R7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6M3B4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjNweH0uZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuYnV0dG9uLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5pbnB1dCwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuc2VsZWN0IHNlbGVjdHtib3JkZXItcmFkaXVzOjB9LmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmJ1dHRvbi5pcy1ob3ZlcmVkLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5idXR0b246aG92ZXIsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmlucHV0LmlzLWhvdmVyZWQsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmlucHV0OmhvdmVyLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5zZWxlY3Qgc2VsZWN0LmlzLWhvdmVyZWQsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLnNlbGVjdCBzZWxlY3Q6aG92ZXJ7ei1pbmRleDoyfS5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5idXR0b24uaXMtYWN0aXZlLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5idXR0b24uaXMtZm9jdXNlZCwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuYnV0dG9uOmFjdGl2ZSwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuYnV0dG9uOmZvY3VzLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5pbnB1dC5pcy1hY3RpdmUsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmlucHV0LmlzLWZvY3VzZWQsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmlucHV0OmFjdGl2ZSwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuaW5wdXQ6Zm9jdXMsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLnNlbGVjdCBzZWxlY3QuaXMtYWN0aXZlLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5zZWxlY3Qgc2VsZWN0LmlzLWZvY3VzZWQsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLnNlbGVjdCBzZWxlY3Q6YWN0aXZlLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5zZWxlY3Qgc2VsZWN0OmZvY3Vze3otaW5kZXg6M30uZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuYnV0dG9uLmlzLWFjdGl2ZTpob3ZlciwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuYnV0dG9uLmlzLWZvY3VzZWQ6aG92ZXIsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmJ1dHRvbjphY3RpdmU6aG92ZXIsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmJ1dHRvbjpmb2N1czpob3ZlciwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuaW5wdXQuaXMtYWN0aXZlOmhvdmVyLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5pbnB1dC5pcy1mb2N1c2VkOmhvdmVyLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5pbnB1dDphY3RpdmU6aG92ZXIsLmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wgLmlucHV0OmZvY3VzOmhvdmVyLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5zZWxlY3Qgc2VsZWN0LmlzLWFjdGl2ZTpob3ZlciwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuc2VsZWN0IHNlbGVjdC5pcy1mb2N1c2VkOmhvdmVyLC5maWVsZC5oYXMtYWRkb25zIC5jb250cm9sIC5zZWxlY3Qgc2VsZWN0OmFjdGl2ZTpob3ZlciwuZmllbGQuaGFzLWFkZG9ucyAuY29udHJvbCAuc2VsZWN0IHNlbGVjdDpmb2N1czpob3Zlcnt6LWluZGV4OjR9LmZpZWxkLmhhcy1hZGRvbnMgLmNvbnRyb2wuaXMtZXhwYW5kZWR7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjF9LmZpZWxkLmhhcy1hZGRvbnMuaGFzLWFkZG9ucy1jZW50ZXJlZHstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5maWVsZC5oYXMtYWRkb25zLmhhcy1hZGRvbnMtcmlnaHR7LXdlYmtpdC1ib3gtcGFjazplbmQ7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5maWVsZC5oYXMtYWRkb25zLmhhcy1hZGRvbnMtZnVsbHdpZHRoIC5jb250cm9sey13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MH0uZmllbGQuaXMtZ3JvdXBlZHtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uZmllbGQuaXMtZ3JvdXBlZD4uY29udHJvbHstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9LmZpZWxkLmlzLWdyb3VwZWQ+LmNvbnRyb2w6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjA7bWFyZ2luLXJpZ2h0Oi43NXJlbX0uZmllbGQuaXMtZ3JvdXBlZD4uY29udHJvbC5pcy1leHBhbmRlZHstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1uZWdhdGl2ZToxO2ZsZXgtc2hyaW5rOjF9LmZpZWxkLmlzLWdyb3VwZWQuaXMtZ3JvdXBlZC1jZW50ZXJlZHstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5maWVsZC5pcy1ncm91cGVkLmlzLWdyb3VwZWQtcmlnaHR7LXdlYmtpdC1ib3gtcGFjazplbmQ7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5maWVsZC5pcy1ncm91cGVkLmlzLWdyb3VwZWQtbXVsdGlsaW5ley1tcy1mbGV4LXdyYXA6d3JhcDtmbGV4LXdyYXA6d3JhcH0uZmllbGQuaXMtZ3JvdXBlZC5pcy1ncm91cGVkLW11bHRpbGluZT4uY29udHJvbDpsYXN0LWNoaWxkLC5maWVsZC5pcy1ncm91cGVkLmlzLWdyb3VwZWQtbXVsdGlsaW5lPi5jb250cm9sOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTouNzVyZW19LmZpZWxkLmlzLWdyb3VwZWQuaXMtZ3JvdXBlZC1tdWx0aWxpbmU6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOi0uNzVyZW19LmZpZWxkLmlzLWdyb3VwZWQuaXMtZ3JvdXBlZC1tdWx0aWxpbmU6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjB9QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LmZpZWxkLmlzLWhvcml6b250YWx7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH19LmZpZWxkLWxhYmVsIC5sYWJlbHtmb250LXNpemU6aW5oZXJpdH1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuZmllbGQtbGFiZWx7bWFyZ2luLWJvdHRvbTouNXJlbX19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LmZpZWxkLWxhYmVsey1tcy1mbGV4LXByZWZlcnJlZC1zaXplOjA7ZmxleC1iYXNpczowOy13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDttYXJnaW4tcmlnaHQ6MS41cmVtO3RleHQtYWxpZ246cmlnaHR9LmZpZWxkLWxhYmVsLmlzLXNtYWxse2ZvbnQtc2l6ZTouNzVyZW07cGFkZGluZy10b3A6LjM3NWVtfS5maWVsZC1sYWJlbC5pcy1ub3JtYWx7cGFkZGluZy10b3A6LjM3NWVtfS5maWVsZC1sYWJlbC5pcy1tZWRpdW17Zm9udC1zaXplOjEuMjVyZW07cGFkZGluZy10b3A6LjM3NWVtfS5maWVsZC1sYWJlbC5pcy1sYXJnZXtmb250LXNpemU6MS41cmVtO3BhZGRpbmctdG9wOi4zNzVlbX19LmZpZWxkLWJvZHkgLmZpZWxkIC5maWVsZHttYXJnaW4tYm90dG9tOjB9QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LmZpZWxkLWJvZHl7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTowO2ZsZXgtYmFzaXM6MDstd2Via2l0LWJveC1mbGV4OjU7LW1zLWZsZXgtcG9zaXRpdmU6NTtmbGV4LWdyb3c6NTstbXMtZmxleC1uZWdhdGl2ZToxO2ZsZXgtc2hyaW5rOjF9LmZpZWxkLWJvZHkgLmZpZWxke21hcmdpbi1ib3R0b206MH0uZmllbGQtYm9keT4uZmllbGR7LW1zLWZsZXgtbmVnYXRpdmU6MTtmbGV4LXNocmluazoxfS5maWVsZC1ib2R5Pi5maWVsZDpub3QoLmlzLW5hcnJvdyl7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjF9LmZpZWxkLWJvZHk+LmZpZWxkOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLXJpZ2h0Oi43NXJlbX19LmNvbnRyb2x7Zm9udC1zaXplOjFyZW07cG9zaXRpb246cmVsYXRpdmU7dGV4dC1hbGlnbjpsZWZ0fS5jb250cm9sLmhhcy1pY29uIC5pY29ue2NvbG9yOiNkYmRiZGI7aGVpZ2h0OjIuMjVlbTtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3dpZHRoOjIuMjVlbTt6LWluZGV4OjR9LmNvbnRyb2wuaGFzLWljb24gLmlucHV0OmZvY3VzKy5pY29ue2NvbG9yOiM3YTdhN2F9LmNvbnRyb2wuaGFzLWljb24gLmlucHV0LmlzLXNtYWxsKy5pY29ue2ZvbnQtc2l6ZTouNzVyZW19LmNvbnRyb2wuaGFzLWljb24gLmlucHV0LmlzLW1lZGl1bSsuaWNvbntmb250LXNpemU6MS4yNXJlbX0uY29udHJvbC5oYXMtaWNvbiAuaW5wdXQuaXMtbGFyZ2UrLmljb257Zm9udC1zaXplOjEuNXJlbX0uY29udHJvbC5oYXMtaWNvbjpub3QoLmhhcy1pY29uLXJpZ2h0KSAuaWNvbntsZWZ0OjB9LmNvbnRyb2wuaGFzLWljb246bm90KC5oYXMtaWNvbi1yaWdodCkgLmlucHV0e3BhZGRpbmctbGVmdDoyLjI1ZW19LmNvbnRyb2wuaGFzLWljb24uaGFzLWljb24tcmlnaHQgLmljb257cmlnaHQ6MH0uY29udHJvbC5oYXMtaWNvbi5oYXMtaWNvbi1yaWdodCAuaW5wdXR7cGFkZGluZy1yaWdodDoyLjI1ZW19LmNvbnRyb2wuaGFzLWljb25zLWxlZnQgLmlucHV0OmZvY3Vzfi5pY29uLC5jb250cm9sLmhhcy1pY29ucy1sZWZ0IC5zZWxlY3Q6Zm9jdXN+Lmljb24sLmNvbnRyb2wuaGFzLWljb25zLXJpZ2h0IC5pbnB1dDpmb2N1c34uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtcmlnaHQgLnNlbGVjdDpmb2N1c34uaWNvbntjb2xvcjojN2E3YTdhfS5jb250cm9sLmhhcy1pY29ucy1sZWZ0IC5pbnB1dC5pcy1zbWFsbH4uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtbGVmdCAuc2VsZWN0LmlzLXNtYWxsfi5pY29uLC5jb250cm9sLmhhcy1pY29ucy1yaWdodCAuaW5wdXQuaXMtc21hbGx+Lmljb24sLmNvbnRyb2wuaGFzLWljb25zLXJpZ2h0IC5zZWxlY3QuaXMtc21hbGx+Lmljb257Zm9udC1zaXplOi43NXJlbX0uY29udHJvbC5oYXMtaWNvbnMtbGVmdCAuaW5wdXQuaXMtbWVkaXVtfi5pY29uLC5jb250cm9sLmhhcy1pY29ucy1sZWZ0IC5zZWxlY3QuaXMtbWVkaXVtfi5pY29uLC5jb250cm9sLmhhcy1pY29ucy1yaWdodCAuaW5wdXQuaXMtbWVkaXVtfi5pY29uLC5jb250cm9sLmhhcy1pY29ucy1yaWdodCAuc2VsZWN0LmlzLW1lZGl1bX4uaWNvbntmb250LXNpemU6MS4yNXJlbX0uY29udHJvbC5oYXMtaWNvbnMtbGVmdCAuaW5wdXQuaXMtbGFyZ2V+Lmljb24sLmNvbnRyb2wuaGFzLWljb25zLWxlZnQgLnNlbGVjdC5pcy1sYXJnZX4uaWNvbiwuY29udHJvbC5oYXMtaWNvbnMtcmlnaHQgLmlucHV0LmlzLWxhcmdlfi5pY29uLC5jb250cm9sLmhhcy1pY29ucy1yaWdodCAuc2VsZWN0LmlzLWxhcmdlfi5pY29ue2ZvbnQtc2l6ZToxLjVyZW19LmNvbnRyb2wuaGFzLWljb25zLWxlZnQgLmljb24sLmNvbnRyb2wuaGFzLWljb25zLXJpZ2h0IC5pY29ue2NvbG9yOiNkYmRiZGI7aGVpZ2h0OjIuMjVlbTtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3dpZHRoOjIuMjVlbTt6LWluZGV4OjR9LmNvbnRyb2wuaGFzLWljb25zLWxlZnQgLmlucHV0LC5jb250cm9sLmhhcy1pY29ucy1sZWZ0IC5zZWxlY3Qgc2VsZWN0e3BhZGRpbmctbGVmdDoyLjI1ZW19LmNvbnRyb2wuaGFzLWljb25zLWxlZnQgLmljb24uaXMtbGVmdHtsZWZ0OjB9LmNvbnRyb2wuaGFzLWljb25zLXJpZ2h0IC5pbnB1dCwuY29udHJvbC5oYXMtaWNvbnMtcmlnaHQgLnNlbGVjdCBzZWxlY3R7cGFkZGluZy1yaWdodDoyLjI1ZW19LmNvbnRyb2wuaGFzLWljb25zLXJpZ2h0IC5pY29uLmlzLXJpZ2h0e3JpZ2h0OjB9LmNvbnRyb2wuaXMtbG9hZGluZzphZnRlcnstd2Via2l0LWFuaW1hdGlvbjpzcGluQXJvdW5kIC41cyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOnNwaW5Bcm91bmQgLjVzIGluZmluaXRlIGxpbmVhcjtib3JkZXI6MnB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXJhZGl1czoyOTA0ODZweDtib3JkZXItcmlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXRvcC1jb2xvcjp0cmFuc3BhcmVudDtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjFlbTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxZW07cG9zaXRpb246YWJzb2x1dGUhaW1wb3J0YW50O3JpZ2h0Oi42MjVlbTt0b3A6LjYyNWVtfS5jb250cm9sLmlzLWxvYWRpbmcuaXMtc21hbGw6YWZ0ZXJ7Zm9udC1zaXplOi43NXJlbX0uY29udHJvbC5pcy1sb2FkaW5nLmlzLW1lZGl1bTphZnRlcntmb250LXNpemU6MS4yNXJlbX0uY29udHJvbC5pcy1sb2FkaW5nLmlzLWxhcmdlOmFmdGVye2ZvbnQtc2l6ZToxLjVyZW19Lmljb257LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTotd2Via2l0LWlubGluZS1ib3g7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2hlaWdodDoxLjVyZW07d2lkdGg6MS41cmVtfS5pY29uLmlzLXNtYWxse2hlaWdodDoxcmVtO3dpZHRoOjFyZW19Lmljb24uaXMtbWVkaXVte2hlaWdodDoycmVtO3dpZHRoOjJyZW19Lmljb24uaXMtbGFyZ2V7aGVpZ2h0OjNyZW07d2lkdGg6M3JlbX0uaW1hZ2V7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uaW1hZ2UgaW1ne2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OmF1dG87d2lkdGg6MTAwJX0uaW1hZ2UuaXMtMWJ5MSBpbWcsLmltYWdlLmlzLTJieTEgaW1nLC5pbWFnZS5pcy0zYnkyIGltZywuaW1hZ2UuaXMtNGJ5MyBpbWcsLmltYWdlLmlzLTE2Ynk5IGltZywuaW1hZ2UuaXMtc3F1YXJlIGltZ3tib3R0b206MDtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5pbWFnZS5pcy0xYnkxLC5pbWFnZS5pcy1zcXVhcmV7cGFkZGluZy10b3A6MTAwJX0uaW1hZ2UuaXMtNGJ5M3twYWRkaW5nLXRvcDo3NSV9LmltYWdlLmlzLTNieTJ7cGFkZGluZy10b3A6NjYuNjY2NiV9LmltYWdlLmlzLTE2Ynk5e3BhZGRpbmctdG9wOjU2LjI1JX0uaW1hZ2UuaXMtMmJ5MXtwYWRkaW5nLXRvcDo1MCV9LmltYWdlLmlzLTE2eDE2e2hlaWdodDoxNnB4O3dpZHRoOjE2cHh9LmltYWdlLmlzLTI0eDI0e2hlaWdodDoyNHB4O3dpZHRoOjI0cHh9LmltYWdlLmlzLTMyeDMye2hlaWdodDozMnB4O3dpZHRoOjMycHh9LmltYWdlLmlzLTQ4eDQ4e2hlaWdodDo0OHB4O3dpZHRoOjQ4cHh9LmltYWdlLmlzLTY0eDY0e2hlaWdodDo2NHB4O3dpZHRoOjY0cHh9LmltYWdlLmlzLTk2eDk2e2hlaWdodDo5NnB4O3dpZHRoOjk2cHh9LmltYWdlLmlzLTEyOHgxMjh7aGVpZ2h0OjEyOHB4O3dpZHRoOjEyOHB4fS5ub3RpZmljYXRpb257YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1yYWRpdXM6M3B4O3BhZGRpbmc6MS4yNXJlbSAyLjVyZW0gMS4yNXJlbSAxLjVyZW07cG9zaXRpb246cmVsYXRpdmV9Lm5vdGlmaWNhdGlvbjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MS41cmVtfS5ub3RpZmljYXRpb24gYTpub3QoLmJ1dHRvbil7Y29sb3I6Y3VycmVudENvbG9yO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9Lm5vdGlmaWNhdGlvbiBzdHJvbmd7Y29sb3I6Y3VycmVudENvbG9yfS5ub3RpZmljYXRpb24gY29kZSwubm90aWZpY2F0aW9uIHByZXtiYWNrZ3JvdW5kOiNmZmZ9Lm5vdGlmaWNhdGlvbiBwcmUgY29kZXtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fS5ub3RpZmljYXRpb24+LmRlbGV0ZXtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDouNWVtO3RvcDouNWVtfS5ub3RpZmljYXRpb24gLmNvbnRlbnQsLm5vdGlmaWNhdGlvbiAuc3VidGl0bGUsLm5vdGlmaWNhdGlvbiAudGl0bGV7Y29sb3I6Y3VycmVudENvbG9yfS5ub3RpZmljYXRpb24uaXMtd2hpdGV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMwYTBhMGF9Lm5vdGlmaWNhdGlvbi5pcy1ibGFja3tiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGE7Y29sb3I6I2ZmZn0ubm90aWZpY2F0aW9uLmlzLWxpZ2h0e2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMzYzNjM2fS5ub3RpZmljYXRpb24uaXMtZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzY7Y29sb3I6I2Y1ZjVmNX0ubm90aWZpY2F0aW9uLmlzLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2NvbG9yOiNmZmZ9Lm5vdGlmaWNhdGlvbi5pcy1saW5re2JhY2tncm91bmQtY29sb3I6IzMyNzNkYztjb2xvcjojZmZmfS5ub3RpZmljYXRpb24uaXMtaW5mb3tiYWNrZ3JvdW5kLWNvbG9yOiMyMDljZWU7Y29sb3I6I2ZmZn0ubm90aWZpY2F0aW9uLmlzLXN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2NvbG9yOiNmZmZ9Lm5vdGlmaWNhdGlvbi5pcy13YXJuaW5ne2JhY2tncm91bmQtY29sb3I6I2ZmZGQ1Nztjb2xvcjpyZ2JhKDAsMCwwLC43KX0ubm90aWZpY2F0aW9uLmlzLWRhbmdlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjA7Y29sb3I6I2ZmZn0ucHJvZ3Jlc3N7LW1vei1hcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czoyOTA0ODZweDtkaXNwbGF5OmJsb2NrO2hlaWdodDoxcmVtO292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjA7d2lkdGg6MTAwJX0ucHJvZ3Jlc3M6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEuNXJlbX0ucHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQtY29sb3I6I2RiZGJkYn0ucHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojNGE0YTRhfS5wcm9ncmVzczo6LW1vei1wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZC1jb2xvcjojNGE0YTRhfS5wcm9ncmVzczo6LW1zLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojNGE0YTRhO2JvcmRlcjpub25lfS5wcm9ncmVzcy5pcy13aGl0ZTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnByb2dyZXNzLmlzLXdoaXRlOjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnByb2dyZXNzLmlzLXdoaXRlOjotbXMtZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LnByb2dyZXNzLmlzLWJsYWNrOjotd2Via2l0LXByb2dyZXNzLXZhbHVle2JhY2tncm91bmQtY29sb3I6IzBhMGEwYX0ucHJvZ3Jlc3MuaXMtYmxhY2s6Oi1tb3otcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQtY29sb3I6IzBhMGEwYX0ucHJvZ3Jlc3MuaXMtYmxhY2s6Oi1tcy1maWxse2JhY2tncm91bmQtY29sb3I6IzBhMGEwYX0ucHJvZ3Jlc3MuaXMtbGlnaHQ6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fS5wcm9ncmVzcy5pcy1saWdodDo6LW1vei1wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fS5wcm9ncmVzcy5pcy1saWdodDo6LW1zLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fS5wcm9ncmVzcy5pcy1kYXJrOjotd2Via2l0LXByb2dyZXNzLXZhbHVle2JhY2tncm91bmQtY29sb3I6IzM2MzYzNn0ucHJvZ3Jlc3MuaXMtZGFyazo6LW1vei1wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2fS5wcm9ncmVzcy5pcy1kYXJrOjotbXMtZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzZ9LnByb2dyZXNzLmlzLXByaW1hcnk6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyfS5wcm9ncmVzcy5pcy1wcmltYXJ5OjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjJ9LnByb2dyZXNzLmlzLXByaW1hcnk6Oi1tcy1maWxse2JhY2tncm91bmQtY29sb3I6IzAwZDFiMn0ucHJvZ3Jlc3MuaXMtbGluazo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGN9LnByb2dyZXNzLmlzLWxpbms6Oi1tb3otcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQtY29sb3I6IzMyNzNkY30ucHJvZ3Jlc3MuaXMtbGluazo6LW1zLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjfS5wcm9ncmVzcy5pcy1pbmZvOjotd2Via2l0LXByb2dyZXNzLXZhbHVle2JhY2tncm91bmQtY29sb3I6IzIwOWNlZX0ucHJvZ3Jlc3MuaXMtaW5mbzo6LW1vei1wcm9ncmVzcy1iYXJ7YmFja2dyb3VuZC1jb2xvcjojMjA5Y2VlfS5wcm9ncmVzcy5pcy1pbmZvOjotbXMtZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiMyMDljZWV9LnByb2dyZXNzLmlzLXN1Y2Nlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwfS5wcm9ncmVzcy5pcy1zdWNjZXNzOjotbW96LXByb2dyZXNzLWJhcntiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjB9LnByb2dyZXNzLmlzLXN1Y2Nlc3M6Oi1tcy1maWxse2JhY2tncm91bmQtY29sb3I6IzIzZDE2MH0ucHJvZ3Jlc3MuaXMtd2FybmluZzo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTd9LnByb2dyZXNzLmlzLXdhcm5pbmc6Oi1tb3otcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQtY29sb3I6I2ZmZGQ1N30ucHJvZ3Jlc3MuaXMtd2FybmluZzo6LW1zLWZpbGx7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3fS5wcm9ncmVzcy5pcy1kYW5nZXI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojZmYzODYwfS5wcm9ncmVzcy5pcy1kYW5nZXI6Oi1tb3otcHJvZ3Jlc3MtYmFye2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MH0ucHJvZ3Jlc3MuaXMtZGFuZ2VyOjotbXMtZmlsbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZjM4NjB9LnByb2dyZXNzLmlzLXNtYWxse2hlaWdodDouNzVyZW19LnByb2dyZXNzLmlzLW1lZGl1bXtoZWlnaHQ6MS4yNXJlbX0ucHJvZ3Jlc3MuaXMtbGFyZ2V7aGVpZ2h0OjEuNXJlbX0udGFibGV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOiMzNjM2MzY7bWFyZ2luLWJvdHRvbToxLjVyZW19LnRhYmxlIHRkLC50YWJsZSB0aHtib3JkZXI6MXB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXdpZHRoOjAgMCAxcHg7cGFkZGluZzouNWVtIC43NWVtO3ZlcnRpY2FsLWFsaWduOnRvcH0udGFibGUgdGQuaXMtd2hpdGUsLnRhYmxlIHRoLmlzLXdoaXRle2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojMGEwYTBhfS50YWJsZSB0ZC5pcy1ibGFjaywudGFibGUgdGguaXMtYmxhY2t7YmFja2dyb3VuZC1jb2xvcjojMGEwYTBhO2JvcmRlci1jb2xvcjojMGEwYTBhO2NvbG9yOiNmZmZ9LnRhYmxlIHRkLmlzLWxpZ2h0LC50YWJsZSB0aC5pcy1saWdodHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn0udGFibGUgdGQuaXMtZGFyaywudGFibGUgdGguaXMtZGFya3tiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzY7Ym9yZGVyLWNvbG9yOiMzNjM2MzY7Y29sb3I6I2Y1ZjVmNX0udGFibGUgdGQuaXMtcHJpbWFyeSwudGFibGUgdGguaXMtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjI7Ym9yZGVyLWNvbG9yOiMwMGQxYjI7Y29sb3I6I2ZmZn0udGFibGUgdGQuaXMtbGluaywudGFibGUgdGguaXMtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Ym9yZGVyLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZn0udGFibGUgdGQuaXMtaW5mbywudGFibGUgdGguaXMtaW5mb3tiYWNrZ3JvdW5kLWNvbG9yOiMyMDljZWU7Ym9yZGVyLWNvbG9yOiMyMDljZWU7Y29sb3I6I2ZmZn0udGFibGUgdGQuaXMtc3VjY2VzcywudGFibGUgdGguaXMtc3VjY2Vzc3tiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjA7Ym9yZGVyLWNvbG9yOiMyM2QxNjA7Y29sb3I6I2ZmZn0udGFibGUgdGQuaXMtd2FybmluZywudGFibGUgdGguaXMtd2FybmluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTc7Ym9yZGVyLWNvbG9yOiNmZmRkNTc7Y29sb3I6cmdiYSgwLDAsMCwuNyl9LnRhYmxlIHRkLmlzLWRhbmdlciwudGFibGUgdGguaXMtZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MDtib3JkZXItY29sb3I6I2ZmMzg2MDtjb2xvcjojZmZmfS50YWJsZSB0ZC5pcy1uYXJyb3csLnRhYmxlIHRoLmlzLW5hcnJvd3t3aGl0ZS1zcGFjZTpub3dyYXA7d2lkdGg6MSV9LnRhYmxlIHRkLmlzLXNlbGVjdGVkLC50YWJsZSB0aC5pcy1zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjI7Y29sb3I6I2ZmZn0udGFibGUgdGQuaXMtc2VsZWN0ZWQgYSwudGFibGUgdGQuaXMtc2VsZWN0ZWQgc3Ryb25nLC50YWJsZSB0aC5pcy1zZWxlY3RlZCBhLC50YWJsZSB0aC5pcy1zZWxlY3RlZCBzdHJvbmd7Y29sb3I6Y3VycmVudENvbG9yfS50YWJsZSB0aHtjb2xvcjojMzYzNjM2O3RleHQtYWxpZ246bGVmdH0udGFibGUgdHIuaXMtc2VsZWN0ZWR7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2NvbG9yOiNmZmZ9LnRhYmxlIHRyLmlzLXNlbGVjdGVkIGEsLnRhYmxlIHRyLmlzLXNlbGVjdGVkIHN0cm9uZ3tjb2xvcjpjdXJyZW50Q29sb3J9LnRhYmxlIHRyLmlzLXNlbGVjdGVkIHRkLC50YWJsZSB0ci5pcy1zZWxlY3RlZCB0aHtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjpjdXJyZW50Q29sb3J9LnRhYmxlIHRoZWFkIHRkLC50YWJsZSB0aGVhZCB0aHtib3JkZXItd2lkdGg6MCAwIDJweDtjb2xvcjojMzYzNjM2fS50YWJsZSB0Zm9vdCB0ZCwudGFibGUgdGZvb3QgdGh7Ym9yZGVyLXdpZHRoOjJweCAwIDA7Y29sb3I6IzM2MzYzNn0udGFibGUgdGJvZHkgdHI6bGFzdC1jaGlsZCB0ZCwudGFibGUgdGJvZHkgdHI6bGFzdC1jaGlsZCB0aHtib3JkZXItYm90dG9tLXdpZHRoOjB9LnRhYmxlLmlzLWJvcmRlcmVkIHRkLC50YWJsZS5pcy1ib3JkZXJlZCB0aHtib3JkZXItd2lkdGg6MXB4fS50YWJsZS5pcy1ib3JkZXJlZCB0cjpsYXN0LWNoaWxkIHRkLC50YWJsZS5pcy1ib3JkZXJlZCB0cjpsYXN0LWNoaWxkIHRoe2JvcmRlci1ib3R0b20td2lkdGg6MXB4fS50YWJsZS5pcy1mdWxsd2lkdGh7d2lkdGg6MTAwJX0udGFibGUuaXMtaG92ZXJhYmxlIHRib2R5IHRyOm5vdCguaXMtc2VsZWN0ZWQpOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0udGFibGUuaXMtaG92ZXJhYmxlLmlzLXN0cmlwZWQgdGJvZHkgdHI6bm90KC5pcy1zZWxlY3RlZCk6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fS50YWJsZS5pcy1uYXJyb3cgdGQsLnRhYmxlLmlzLW5hcnJvdyB0aHtwYWRkaW5nOi4yNWVtIC41ZW19LnRhYmxlLmlzLXN0cmlwZWQgdGJvZHkgdHI6bm90KC5pcy1zZWxlY3RlZCk6bnRoLWNoaWxkKDJuKXtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9LnRhZ3N7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXA7LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS50YWdzIC50YWd7bWFyZ2luLWJvdHRvbTouNXJlbX0udGFncyAudGFnOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLXJpZ2h0Oi41cmVtfS50YWdzOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTotLjVyZW19LnRhZ3M6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjFyZW19LnRhZ3MuaGFzLWFkZG9ucyAudGFne21hcmdpbi1yaWdodDowfS50YWdzLmhhcy1hZGRvbnMgLnRhZzpub3QoOmZpcnN0LWNoaWxkKXtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS50YWdzLmhhcy1hZGRvbnMgLnRhZzpub3QoOmxhc3QtY2hpbGQpe2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MH0udGFncy5pcy1jZW50ZXJlZHstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS50YWdzLmlzLWNlbnRlcmVkIC50YWd7bWFyZ2luLXJpZ2h0Oi4yNXJlbTttYXJnaW4tbGVmdDouMjVyZW19LnRhZ3MuaXMtcmlnaHR7LXdlYmtpdC1ib3gtcGFjazplbmQ7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS50YWdzLmlzLXJpZ2h0IC50YWc6bm90KDpmaXJzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6LjVyZW19LnRhZ3MuaXMtcmlnaHQgLnRhZzpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1yaWdodDowfS50YWc6bm90KGJvZHkpey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItcmFkaXVzOjNweDtjb2xvcjojNGE0YTRhO2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtYm94O2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6aW5saW5lLWZsZXg7Zm9udC1zaXplOi43NXJlbTtoZWlnaHQ6MmVtOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bGluZS1oZWlnaHQ6MS41O3BhZGRpbmctbGVmdDouNzVlbTtwYWRkaW5nLXJpZ2h0Oi43NWVtO3doaXRlLXNwYWNlOm5vd3JhcH0udGFnOm5vdChib2R5KSAuZGVsZXRle21hcmdpbi1sZWZ0Oi4yNWVtO21hcmdpbi1yaWdodDotLjM3NWVtfS50YWc6bm90KGJvZHkpLmlzLXdoaXRle2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMGEwYTBhfS50YWc6bm90KGJvZHkpLmlzLWJsYWNre2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtjb2xvcjojZmZmfS50YWc6bm90KGJvZHkpLmlzLWxpZ2h0e2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMzYzNjM2fS50YWc6bm90KGJvZHkpLmlzLWRhcmt7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2NvbG9yOiNmNWY1ZjV9LnRhZzpub3QoYm9keSkuaXMtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjI7Y29sb3I6I2ZmZn0udGFnOm5vdChib2R5KS5pcy1saW5re2JhY2tncm91bmQtY29sb3I6IzMyNzNkYztjb2xvcjojZmZmfS50YWc6bm90KGJvZHkpLmlzLWluZm97YmFja2dyb3VuZC1jb2xvcjojMjA5Y2VlO2NvbG9yOiNmZmZ9LnRhZzpub3QoYm9keSkuaXMtc3VjY2Vzc3tiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjA7Y29sb3I6I2ZmZn0udGFnOm5vdChib2R5KS5pcy13YXJuaW5ne2JhY2tncm91bmQtY29sb3I6I2ZmZGQ1Nztjb2xvcjpyZ2JhKDAsMCwwLC43KX0udGFnOm5vdChib2R5KS5pcy1kYW5nZXJ7YmFja2dyb3VuZC1jb2xvcjojZmYzODYwO2NvbG9yOiNmZmZ9LnRhZzpub3QoYm9keSkuaXMtbWVkaXVte2ZvbnQtc2l6ZToxcmVtfS50YWc6bm90KGJvZHkpLmlzLWxhcmdle2ZvbnQtc2l6ZToxLjI1cmVtfS50YWc6bm90KGJvZHkpIC5pY29uOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWxlZnQ6LS4zNzVlbTttYXJnaW4tcmlnaHQ6LjE4NzVlbX0udGFnOm5vdChib2R5KSAuaWNvbjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpe21hcmdpbi1sZWZ0Oi4xODc1ZW07bWFyZ2luLXJpZ2h0Oi0uMzc1ZW19LnRhZzpub3QoYm9keSkgLmljb246Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZHttYXJnaW4tbGVmdDotLjM3NWVtO21hcmdpbi1yaWdodDotLjM3NWVtfS50YWc6bm90KGJvZHkpLmlzLWRlbGV0ZXttYXJnaW4tbGVmdDoxcHg7cGFkZGluZzowO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjJlbX0udGFnOm5vdChib2R5KS5pcy1kZWxldGU6YWZ0ZXIsLnRhZzpub3QoYm9keSkuaXMtZGVsZXRlOmJlZm9yZXtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7bGVmdDo1MCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfS50YWc6bm90KGJvZHkpLmlzLWRlbGV0ZTpiZWZvcmV7aGVpZ2h0OjFweDt3aWR0aDo1MCV9LnRhZzpub3QoYm9keSkuaXMtZGVsZXRlOmFmdGVye2hlaWdodDo1MCU7d2lkdGg6MXB4fS50YWc6bm90KGJvZHkpLmlzLWRlbGV0ZTpmb2N1cywudGFnOm5vdChib2R5KS5pcy1kZWxldGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZThlOGU4fS50YWc6bm90KGJvZHkpLmlzLWRlbGV0ZTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZGJkYmRifS50YWc6bm90KGJvZHkpLmlzLXJvdW5kZWR7Ym9yZGVyLXJhZGl1czoyOTA0ODZweH1hLnRhZzpob3Zlcnt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lfS5zdWJ0aXRsZSwudGl0bGV7d29yZC1icmVhazpicmVhay13b3JkfS5zdWJ0aXRsZTpub3QoOmxhc3QtY2hpbGQpLC50aXRsZTpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MS41cmVtfS5zdWJ0aXRsZSBlbSwuc3VidGl0bGUgc3BhbiwudGl0bGUgZW0sLnRpdGxlIHNwYW57Zm9udC13ZWlnaHQ6aW5oZXJpdH0uc3VidGl0bGUgLnRhZywudGl0bGUgLnRhZ3t2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LnRpdGxle2NvbG9yOiMzNjM2MzY7Zm9udC1zaXplOjJyZW07Zm9udC13ZWlnaHQ6NjAwO2xpbmUtaGVpZ2h0OjEuMTI1fS50aXRsZSBzdHJvbmd7Y29sb3I6aW5oZXJpdDtmb250LXdlaWdodDppbmhlcml0fS50aXRsZSsuaGlnaGxpZ2h0e21hcmdpbi10b3A6LS43NXJlbX0udGl0bGU6bm90KC5pcy1zcGFjZWQpKy5zdWJ0aXRsZXttYXJnaW4tdG9wOi0xLjVyZW19LnRpdGxlLmlzLTF7Zm9udC1zaXplOjNyZW19LnRpdGxlLmlzLTJ7Zm9udC1zaXplOjIuNXJlbX0udGl0bGUuaXMtM3tmb250LXNpemU6MnJlbX0udGl0bGUuaXMtNHtmb250LXNpemU6MS41cmVtfS50aXRsZS5pcy01e2ZvbnQtc2l6ZToxLjI1cmVtfS50aXRsZS5pcy02e2ZvbnQtc2l6ZToxcmVtfS50aXRsZS5pcy03e2ZvbnQtc2l6ZTouNzVyZW19LnN1YnRpdGxle2NvbG9yOiM0YTRhNGE7Zm9udC1zaXplOjEuMjVyZW07Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OjEuMjV9LnN1YnRpdGxlIHN0cm9uZ3tjb2xvcjojMzYzNjM2O2ZvbnQtd2VpZ2h0OjYwMH0uc3VidGl0bGU6bm90KC5pcy1zcGFjZWQpKy50aXRsZXttYXJnaW4tdG9wOi0xLjVyZW19LnN1YnRpdGxlLmlzLTF7Zm9udC1zaXplOjNyZW19LnN1YnRpdGxlLmlzLTJ7Zm9udC1zaXplOjIuNXJlbX0uc3VidGl0bGUuaXMtM3tmb250LXNpemU6MnJlbX0uc3VidGl0bGUuaXMtNHtmb250LXNpemU6MS41cmVtfS5zdWJ0aXRsZS5pcy01e2ZvbnQtc2l6ZToxLjI1cmVtfS5zdWJ0aXRsZS5pcy02e2ZvbnQtc2l6ZToxcmVtfS5zdWJ0aXRsZS5pcy03e2ZvbnQtc2l6ZTouNzVyZW19LmJsb2NrOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxLjVyZW19LmRlbGV0ZXstd2Via2l0LXRvdWNoLWNhbGxvdXQ6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7LW1vei1hcHBlYXJhbmNlOm5vbmU7LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsNCUsLjIpO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MjkwNDg2cHg7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4LXBvc2l0aXZlOjA7ZmxleC1ncm93OjA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowO2ZvbnQtc2l6ZTowO2hlaWdodDoyMHB4O21heC1oZWlnaHQ6MjBweDttYXgtd2lkdGg6MjBweDttaW4taGVpZ2h0OjIwcHg7bWluLXdpZHRoOjIwcHg7b3V0bGluZTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOnRvcDt3aWR0aDoyMHB4fS5kZWxldGU6YWZ0ZXIsLmRlbGV0ZTpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbnRlbnQ6XFxcIlxcXCI7ZGlzcGxheTpibG9jaztsZWZ0OjUwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIGNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXJ9LmRlbGV0ZTpiZWZvcmV7aGVpZ2h0OjJweDt3aWR0aDo1MCV9LmRlbGV0ZTphZnRlcntoZWlnaHQ6NTAlO3dpZHRoOjJweH0uZGVsZXRlOmZvY3VzLC5kZWxldGU6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsNCUsLjMpfS5kZWxldGU6YWN0aXZle2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDQlLC40KX0uZGVsZXRlLmlzLXNtYWxse2hlaWdodDoxNnB4O21heC1oZWlnaHQ6MTZweDttYXgtd2lkdGg6MTZweDttaW4taGVpZ2h0OjE2cHg7bWluLXdpZHRoOjE2cHg7d2lkdGg6MTZweH0uZGVsZXRlLmlzLW1lZGl1bXtoZWlnaHQ6MjRweDttYXgtaGVpZ2h0OjI0cHg7bWF4LXdpZHRoOjI0cHg7bWluLWhlaWdodDoyNHB4O21pbi13aWR0aDoyNHB4O3dpZHRoOjI0cHh9LmRlbGV0ZS5pcy1sYXJnZXtoZWlnaHQ6MzJweDttYXgtaGVpZ2h0OjMycHg7bWF4LXdpZHRoOjMycHg7bWluLWhlaWdodDozMnB4O21pbi13aWR0aDozMnB4O3dpZHRoOjMycHh9LmhlYWRpbmd7ZGlzcGxheTpibG9jaztmb250LXNpemU6MTFweDtsZXR0ZXItc3BhY2luZzoxcHg7bWFyZ2luLWJvdHRvbTo1cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS5oaWdobGlnaHR7Zm9udC13ZWlnaHQ6NDAwO21heC13aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjB9LmhpZ2hsaWdodDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MS41cmVtfS5oaWdobGlnaHQgcHJle292ZXJmbG93OmF1dG87bWF4LXdpZHRoOjEwMCV9LmxvYWRlcnstd2Via2l0LWFuaW1hdGlvbjpzcGluQXJvdW5kIC41cyBpbmZpbml0ZSBsaW5lYXI7YW5pbWF0aW9uOnNwaW5Bcm91bmQgLjVzIGluZmluaXRlIGxpbmVhcjtib3JkZXI6MnB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXJhZGl1czoyOTA0ODZweDtib3JkZXItcmlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7Ym9yZGVyLXRvcC1jb2xvcjp0cmFuc3BhcmVudDtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7aGVpZ2h0OjFlbTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxZW19Lm51bWJlcnstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLXJhZGl1czoyOTA0ODZweDtkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O2ZvbnQtc2l6ZToxLjI1cmVtO2hlaWdodDoyZW07LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tcmlnaHQ6MS41cmVtO21pbi13aWR0aDoyLjVlbTtwYWRkaW5nOi4yNXJlbSAuNXJlbTt0ZXh0LWFsaWduOmNlbnRlcjt2ZXJ0aWNhbC1hbGlnbjp0b3B9LmJyZWFkY3J1bWJ7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtYm94LWFsaWduOnN0cmV0Y2g7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNoO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7Zm9udC1zaXplOjFyZW07b3ZlcmZsb3c6aGlkZGVuO292ZXJmbG93LXg6YXV0bzt3aGl0ZS1zcGFjZTpub3dyYXB9LmJyZWFkY3J1bWI6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEuNXJlbX0uYnJlYWRjcnVtYiBhey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOiMzMjczZGM7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6LjVlbSAuNzVlbX0uYnJlYWRjcnVtYiBhOmhvdmVye2NvbG9yOiMzNjM2MzZ9LmJyZWFkY3J1bWIgbGl7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0uYnJlYWRjcnVtYiBsaTpmaXJzdC1jaGlsZCBhe3BhZGRpbmctbGVmdDowfS5icmVhZGNydW1iIGxpLmlzLWFjdGl2ZSBhe2NvbG9yOiMzNjM2MzY7Y3Vyc29yOmRlZmF1bHQ7cG9pbnRlci1ldmVudHM6bm9uZX0uYnJlYWRjcnVtYiBsaStsaTpiZWZvcmV7Y29sb3I6IzRhNGE0YTtjb250ZW50OlxcXCIvXFxcIn0uYnJlYWRjcnVtYiBvbCwuYnJlYWRjcnVtYiB1bHstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstd2Via2l0LWJveC1wYWNrOnN0YXJ0Oy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LmJyZWFkY3J1bWIgLmljb246Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0Oi41ZW19LmJyZWFkY3J1bWIgLmljb246bGFzdC1jaGlsZHttYXJnaW4tbGVmdDouNWVtfS5icmVhZGNydW1iLmlzLWNlbnRlcmVkIG9sLC5icmVhZGNydW1iLmlzLWNlbnRlcmVkIHVsey13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LmJyZWFkY3J1bWIuaXMtcmlnaHQgb2wsLmJyZWFkY3J1bWIuaXMtcmlnaHQgdWx7LXdlYmtpdC1ib3gtcGFjazplbmQ7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5icmVhZGNydW1iLmlzLXNtYWxse2ZvbnQtc2l6ZTouNzVyZW19LmJyZWFkY3J1bWIuaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtfS5icmVhZGNydW1iLmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LmJyZWFkY3J1bWIuaGFzLWFycm93LXNlcGFyYXRvciBsaStsaTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXDIxOTJcXFwifS5icmVhZGNydW1iLmhhcy1idWxsZXQtc2VwYXJhdG9yIGxpK2xpOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcMjAyMlxcXCJ9LmJyZWFkY3J1bWIuaGFzLWRvdC1zZXBhcmF0b3IgbGkrbGk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxCN1xcXCJ9LmJyZWFkY3J1bWIuaGFzLXN1Y2NlZWRzLXNlcGFyYXRvciBsaStsaTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXDIyN0JcXFwifS5jYXJke2JhY2tncm91bmQtY29sb3I6I2ZmZjstd2Via2l0LWJveC1zaGFkb3c6MCAycHggM3B4IGhzbGEoMCwwJSw0JSwuMSksMCAwIDAgMXB4IGhzbGEoMCwwJSw0JSwuMSk7Ym94LXNoYWRvdzowIDJweCAzcHggaHNsYSgwLDAlLDQlLC4xKSwwIDAgMCAxcHggaHNsYSgwLDAlLDQlLC4xKTtjb2xvcjojNGE0YTRhO21heC13aWR0aDoxMDAlO3Bvc2l0aW9uOnJlbGF0aXZlfS5jYXJkLWhlYWRlcnstd2Via2l0LWJveC1hbGlnbjpzdHJldGNoOy1tcy1mbGV4LWFsaWduOnN0cmV0Y2g7YWxpZ24taXRlbXM6c3RyZXRjaDstd2Via2l0LWJveC1zaGFkb3c6MCAxcHggMnB4IGhzbGEoMCwwJSw0JSwuMSk7Ym94LXNoYWRvdzowIDFweCAycHggaHNsYSgwLDAlLDQlLC4xKX0uY2FyZC1oZWFkZXIsLmNhcmQtaGVhZGVyLXRpdGxle2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9LmNhcmQtaGVhZGVyLXRpdGxley13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2NvbG9yOiMzNjM2MzY7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7Zm9udC13ZWlnaHQ6NzAwO3BhZGRpbmc6Ljc1cmVtfS5jYXJkLWhlYWRlci1pY29uLC5jYXJkLWhlYWRlci10aXRsZS5pcy1jZW50ZXJlZHstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5jYXJkLWhlYWRlci1pY29uey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cGFkZGluZzouNzVyZW19LmNhcmQtaW1hZ2V7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uY2FyZC1jb250ZW50e3BhZGRpbmc6MS41cmVtfS5jYXJkLWZvb3Rlcntib3JkZXItdG9wOjFweCBzb2xpZCAjZGJkYmRiOy13ZWJraXQtYm94LWFsaWduOnN0cmV0Y2g7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNofS5jYXJkLWZvb3RlciwuY2FyZC1mb290ZXItaXRlbXtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS5jYXJkLWZvb3Rlci1pdGVtey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXByZWZlcnJlZC1zaXplOjA7ZmxleC1iYXNpczowOy13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6Ljc1cmVtfS5jYXJkLWZvb3Rlci1pdGVtOm5vdCg6bGFzdC1jaGlsZCl7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZGJkYmRifS5jYXJkIC5tZWRpYTpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206Ljc1cmVtfS5kcm9wZG93bntkaXNwbGF5Oi13ZWJraXQtaW5saW5lLWJveDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOnRvcH0uZHJvcGRvd24uaXMtYWN0aXZlIC5kcm9wZG93bi1tZW51LC5kcm9wZG93bi5pcy1ob3ZlcmFibGU6aG92ZXIgLmRyb3Bkb3duLW1lbnV7ZGlzcGxheTpibG9ja30uZHJvcGRvd24uaXMtcmlnaHQgLmRyb3Bkb3duLW1lbnV7bGVmdDphdXRvO3JpZ2h0OjB9LmRyb3Bkb3duLmlzLXVwIC5kcm9wZG93bi1tZW51e2JvdHRvbToxMDAlO3BhZGRpbmctYm90dG9tOjRweDtwYWRkaW5nLXRvcDp1bnNldDt0b3A6YXV0b30uZHJvcGRvd24tbWVudXtkaXNwbGF5Om5vbmU7bGVmdDowO21pbi13aWR0aDoxMnJlbTtwYWRkaW5nLXRvcDo0cHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjEwMCU7ei1pbmRleDoyMH0uZHJvcGRvd24tY29udGVudHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czozcHg7LXdlYmtpdC1ib3gtc2hhZG93OjAgMnB4IDNweCBoc2xhKDAsMCUsNCUsLjEpLDAgMCAwIDFweCBoc2xhKDAsMCUsNCUsLjEpO2JveC1zaGFkb3c6MCAycHggM3B4IGhzbGEoMCwwJSw0JSwuMSksMCAwIDAgMXB4IGhzbGEoMCwwJSw0JSwuMSk7cGFkZGluZy1ib3R0b206LjVyZW07cGFkZGluZy10b3A6LjVyZW19LmRyb3Bkb3duLWl0ZW17Y29sb3I6IzRhNGE0YTtkaXNwbGF5OmJsb2NrO2ZvbnQtc2l6ZTouODc1cmVtO2xpbmUtaGVpZ2h0OjEuNTtwYWRkaW5nOi4zNzVyZW0gMXJlbTtwb3NpdGlvbjpyZWxhdGl2ZX1hLmRyb3Bkb3duLWl0ZW17cGFkZGluZy1yaWdodDozcmVtO3doaXRlLXNwYWNlOm5vd3JhcH1hLmRyb3Bkb3duLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMwYTBhMGF9YS5kcm9wZG93bi1pdGVtLmlzLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZn0uZHJvcGRvd24tZGl2aWRlcntiYWNrZ3JvdW5kLWNvbG9yOiNkYmRiZGI7Ym9yZGVyOm5vbmU7ZGlzcGxheTpibG9jaztoZWlnaHQ6MXB4O21hcmdpbjouNXJlbSAwfS5sZXZlbHstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstd2Via2l0LWJveC1wYWNrOmp1c3RpZnk7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVufS5sZXZlbDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MS41cmVtfS5sZXZlbCBjb2Rle2JvcmRlci1yYWRpdXM6M3B4fS5sZXZlbCBpbWd7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wfS5sZXZlbC5pcy1tb2JpbGUsLmxldmVsLmlzLW1vYmlsZSAubGV2ZWwtbGVmdCwubGV2ZWwuaXMtbW9iaWxlIC5sZXZlbC1yaWdodHtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS5sZXZlbC5pcy1tb2JpbGUgLmxldmVsLWxlZnQrLmxldmVsLXJpZ2h0e21hcmdpbi10b3A6MH0ubGV2ZWwuaXMtbW9iaWxlIC5sZXZlbC1pdGVte21hcmdpbi1yaWdodDouNzVyZW19LmxldmVsLmlzLW1vYmlsZSAubGV2ZWwtaXRlbTpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MH0ubGV2ZWwuaXMtbW9iaWxlIC5sZXZlbC1pdGVtOm5vdCguaXMtbmFycm93KXstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MX1AbWVkaWEgcHJpbnQsc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsubGV2ZWx7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0ubGV2ZWw+LmxldmVsLWl0ZW06bm90KC5pcy1uYXJyb3cpey13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxfX0ubGV2ZWwtaXRlbXstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LXByZWZlcnJlZC1zaXplOmF1dG87ZmxleC1iYXNpczphdXRvOy13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleC1wb3NpdGl2ZTowO2ZsZXgtZ3JvdzowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5sZXZlbC1pdGVtIC5zdWJ0aXRsZSwubGV2ZWwtaXRlbSAudGl0bGV7bWFyZ2luLWJvdHRvbTowfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5sZXZlbC1pdGVtOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTouNzVyZW19fS5sZXZlbC1sZWZ0LC5sZXZlbC1yaWdodHstbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTphdXRvO2ZsZXgtYmFzaXM6YXV0bzstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXgtcG9zaXRpdmU6MDtmbGV4LWdyb3c6MDstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjB9LmxldmVsLWxlZnQgLmxldmVsLWl0ZW0uaXMtZmxleGlibGUsLmxldmVsLXJpZ2h0IC5sZXZlbC1pdGVtLmlzLWZsZXhpYmxley13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxfUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5sZXZlbC1sZWZ0IC5sZXZlbC1pdGVtOm5vdCg6bGFzdC1jaGlsZCksLmxldmVsLXJpZ2h0IC5sZXZlbC1pdGVtOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLXJpZ2h0Oi43NXJlbX19LmxldmVsLWxlZnR7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5sZXZlbC1sZWZ0Ky5sZXZlbC1yaWdodHttYXJnaW4tdG9wOjEuNXJlbX19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7LmxldmVsLWxlZnR7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH19LmxldmVsLXJpZ2h0ey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy13ZWJraXQtYm94LXBhY2s6ZW5kOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH1AbWVkaWEgcHJpbnQsc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsubGV2ZWwtcmlnaHR7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH19Lm1lZGlhey13ZWJraXQtYm94LWFsaWduOnN0YXJ0Oy1tcy1mbGV4LWFsaWduOnN0YXJ0O2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt0ZXh0LWFsaWduOmxlZnR9Lm1lZGlhIC5jb250ZW50Om5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTouNzVyZW19Lm1lZGlhIC5tZWRpYXtib3JkZXItdG9wOjFweCBzb2xpZCBoc2xhKDAsMCUsODYlLC41KTtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3BhZGRpbmctdG9wOi43NXJlbX0ubWVkaWEgLm1lZGlhIC5jb250ZW50Om5vdCg6bGFzdC1jaGlsZCksLm1lZGlhIC5tZWRpYSAuY29udHJvbDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206LjVyZW19Lm1lZGlhIC5tZWRpYSAubWVkaWF7cGFkZGluZy10b3A6LjVyZW19Lm1lZGlhIC5tZWRpYSAubWVkaWErLm1lZGlhe21hcmdpbi10b3A6LjVyZW19Lm1lZGlhKy5tZWRpYXtib3JkZXItdG9wOjFweCBzb2xpZCBoc2xhKDAsMCUsODYlLC41KTttYXJnaW4tdG9wOjFyZW07cGFkZGluZy10b3A6MXJlbX0ubWVkaWEuaXMtbGFyZ2UrLm1lZGlhe21hcmdpbi10b3A6MS41cmVtO3BhZGRpbmctdG9wOjEuNXJlbX0ubWVkaWEtbGVmdCwubWVkaWEtcmlnaHR7LW1zLWZsZXgtcHJlZmVycmVkLXNpemU6YXV0bztmbGV4LWJhc2lzOmF1dG87LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4LXBvc2l0aXZlOjA7ZmxleC1ncm93OjA7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowfS5tZWRpYS1sZWZ0e21hcmdpbi1yaWdodDoxcmVtfS5tZWRpYS1yaWdodHttYXJnaW4tbGVmdDoxcmVtfS5tZWRpYS1jb250ZW50ey1tcy1mbGV4LXByZWZlcnJlZC1zaXplOmF1dG87ZmxleC1iYXNpczphdXRvOy13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjE7ZmxleC1zaHJpbms6MTt0ZXh0LWFsaWduOmxlZnR9Lm1lbnV7Zm9udC1zaXplOjFyZW19Lm1lbnUuaXMtc21hbGx7Zm9udC1zaXplOi43NXJlbX0ubWVudS5pcy1tZWRpdW17Zm9udC1zaXplOjEuMjVyZW19Lm1lbnUuaXMtbGFyZ2V7Zm9udC1zaXplOjEuNXJlbX0ubWVudS1saXN0e2xpbmUtaGVpZ2h0OjEuMjV9Lm1lbnUtbGlzdCBhe2JvcmRlci1yYWRpdXM6MnB4O2NvbG9yOiM0YTRhNGE7ZGlzcGxheTpibG9jaztwYWRkaW5nOi41ZW0gLjc1ZW19Lm1lbnUtbGlzdCBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMzYzNjM2fS5tZW51LWxpc3QgYS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9Lm1lbnUtbGlzdCBsaSB1bHtib3JkZXItbGVmdDoxcHggc29saWQgI2RiZGJkYjttYXJnaW46Ljc1ZW07cGFkZGluZy1sZWZ0Oi43NWVtfS5tZW51LWxhYmVse2NvbG9yOiM3YTdhN2E7Zm9udC1zaXplOi43NWVtO2xldHRlci1zcGFjaW5nOi4xZW07dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlfS5tZW51LWxhYmVsOm5vdCg6Zmlyc3QtY2hpbGQpe21hcmdpbi10b3A6MWVtfS5tZW51LWxhYmVsOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxZW19Lm1lc3NhZ2V7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1yYWRpdXM6M3B4O2ZvbnQtc2l6ZToxcmVtfS5tZXNzYWdlOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbToxLjVyZW19Lm1lc3NhZ2Ugc3Ryb25ne2NvbG9yOmN1cnJlbnRDb2xvcn0ubWVzc2FnZSBhOm5vdCguYnV0dG9uKTpub3QoLnRhZyl7Y29sb3I6Y3VycmVudENvbG9yO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmV9Lm1lc3NhZ2UuaXMtc21hbGx7Zm9udC1zaXplOi43NXJlbX0ubWVzc2FnZS5pcy1tZWRpdW17Zm9udC1zaXplOjEuMjVyZW19Lm1lc3NhZ2UuaXMtbGFyZ2V7Zm9udC1zaXplOjEuNXJlbX0ubWVzc2FnZS5pcy13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9Lm1lc3NhZ2UuaXMtd2hpdGUgLm1lc3NhZ2UtaGVhZGVye2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMGEwYTBhfS5tZXNzYWdlLmlzLXdoaXRlIC5tZXNzYWdlLWJvZHl7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6IzRkNGQ0ZH0ubWVzc2FnZS5pcy1ibGFja3tiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9Lm1lc3NhZ2UuaXMtYmxhY2sgLm1lc3NhZ2UtaGVhZGVye2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtjb2xvcjojZmZmfS5tZXNzYWdlLmlzLWJsYWNrIC5tZXNzYWdlLWJvZHl7Ym9yZGVyLWNvbG9yOiMwYTBhMGE7Y29sb3I6IzA5MDkwOX0ubWVzc2FnZS5pcy1saWdodHtiYWNrZ3JvdW5kLWNvbG9yOiNmYWZhZmF9Lm1lc3NhZ2UuaXMtbGlnaHQgLm1lc3NhZ2UtaGVhZGVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtjb2xvcjojMzYzNjM2fS5tZXNzYWdlLmlzLWxpZ2h0IC5tZXNzYWdlLWJvZHl7Ym9yZGVyLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzUwNTA1MH0ubWVzc2FnZS5pcy1kYXJre2JhY2tncm91bmQtY29sb3I6I2ZhZmFmYX0ubWVzc2FnZS5pcy1kYXJrIC5tZXNzYWdlLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiMzNjM2MzY7Y29sb3I6I2Y1ZjVmNX0ubWVzc2FnZS5pcy1kYXJrIC5tZXNzYWdlLWJvZHl7Ym9yZGVyLWNvbG9yOiMzNjM2MzY7Y29sb3I6IzJhMmEyYX0ubWVzc2FnZS5pcy1wcmltYXJ5e2JhY2tncm91bmQtY29sb3I6I2Y1ZmZmZH0ubWVzc2FnZS5pcy1wcmltYXJ5IC5tZXNzYWdlLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjI7Y29sb3I6I2ZmZn0ubWVzc2FnZS5pcy1wcmltYXJ5IC5tZXNzYWdlLWJvZHl7Ym9yZGVyLWNvbG9yOiMwMGQxYjI7Y29sb3I6IzAyMTMxMH0ubWVzc2FnZS5pcy1saW5re2JhY2tncm91bmQtY29sb3I6I2Y2ZjlmZX0ubWVzc2FnZS5pcy1saW5rIC5tZXNzYWdlLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZn0ubWVzc2FnZS5pcy1saW5rIC5tZXNzYWdlLWJvZHl7Ym9yZGVyLWNvbG9yOiMzMjczZGM7Y29sb3I6IzIyNTA5YX0ubWVzc2FnZS5pcy1pbmZve2JhY2tncm91bmQtY29sb3I6I2Y2ZmJmZX0ubWVzc2FnZS5pcy1pbmZvIC5tZXNzYWdlLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiMyMDljZWU7Y29sb3I6I2ZmZn0ubWVzc2FnZS5pcy1pbmZvIC5tZXNzYWdlLWJvZHl7Ym9yZGVyLWNvbG9yOiMyMDljZWU7Y29sb3I6IzEyNTM3ZX0ubWVzc2FnZS5pcy1zdWNjZXNze2JhY2tncm91bmQtY29sb3I6I2Y2ZmVmOX0ubWVzc2FnZS5pcy1zdWNjZXNzIC5tZXNzYWdlLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjA7Y29sb3I6I2ZmZn0ubWVzc2FnZS5pcy1zdWNjZXNzIC5tZXNzYWdlLWJvZHl7Ym9yZGVyLWNvbG9yOiMyM2QxNjA7Y29sb3I6IzBlMzAxYX0ubWVzc2FnZS5pcy13YXJuaW5ne2JhY2tncm91bmQtY29sb3I6I2ZmZmRmNX0ubWVzc2FnZS5pcy13YXJuaW5nIC5tZXNzYWdlLWhlYWRlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTc7Y29sb3I6cmdiYSgwLDAsMCwuNyl9Lm1lc3NhZ2UuaXMtd2FybmluZyAubWVzc2FnZS1ib2R5e2JvcmRlci1jb2xvcjojZmZkZDU3O2NvbG9yOiMzYjMxMDh9Lm1lc3NhZ2UuaXMtZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2ZmZjVmN30ubWVzc2FnZS5pcy1kYW5nZXIgLm1lc3NhZ2UtaGVhZGVye2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MDtjb2xvcjojZmZmfS5tZXNzYWdlLmlzLWRhbmdlciAubWVzc2FnZS1ib2R5e2JvcmRlci1jb2xvcjojZmYzODYwO2NvbG9yOiNjZDA5MzB9Lm1lc3NhZ2UtaGVhZGVyey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6IzRhNGE0YTtib3JkZXItcmFkaXVzOjNweCAzcHggMCAwO2NvbG9yOiNmZmY7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1wYWNrOmp1c3RpZnk7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2xpbmUtaGVpZ2h0OjEuMjU7cGFkZGluZzouNWVtIC43NWVtO3Bvc2l0aW9uOnJlbGF0aXZlfS5tZXNzYWdlLWhlYWRlciAuZGVsZXRley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleC1wb3NpdGl2ZTowO2ZsZXgtZ3JvdzowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDttYXJnaW4tbGVmdDouNzVlbX0ubWVzc2FnZS1oZWFkZXIrLm1lc3NhZ2UtYm9keXtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItdG9wOm5vbmV9Lm1lc3NhZ2UtYm9keXtib3JkZXI6MXB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXJhZGl1czozcHg7Y29sb3I6IzRhNGE0YTtwYWRkaW5nOjFlbSAxLjI1ZW19Lm1lc3NhZ2UtYm9keSBjb2RlLC5tZXNzYWdlLWJvZHkgcHJle2JhY2tncm91bmQtY29sb3I6I2ZmZn0ubWVzc2FnZS1ib2R5IHByZSBjb2Rle2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Lm1vZGFse2JvdHRvbTowO2xlZnQ6MDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowOy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2Rpc3BsYXk6bm9uZTstd2Via2l0LWJveC1wYWNrOmNlbnRlcjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO292ZXJmbG93OmhpZGRlbjtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjIwfS5tb2RhbC5pcy1hY3RpdmV7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0ubW9kYWwtYmFja2dyb3VuZHtib3R0b206MDtsZWZ0OjA7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MDtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw0JSwuODYpfS5tb2RhbC1jYXJkLC5tb2RhbC1jb250ZW50e21hcmdpbjowIDIwcHg7bWF4LWhlaWdodDpjYWxjKDEwMHZoIC0gMTYwcHgpO292ZXJmbG93OmF1dG87cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX1AbWVkaWEgcHJpbnQsc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsubW9kYWwtY2FyZCwubW9kYWwtY29udGVudHttYXJnaW46MCBhdXRvO21heC1oZWlnaHQ6Y2FsYygxMDB2aCAtIDQwcHgpO3dpZHRoOjY0MHB4fX0ubW9kYWwtY2xvc2V7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy1tb3otYXBwZWFyYW5jZTpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lO2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDQlLC4yKTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjI5MDQ4NnB4O2N1cnNvcjpwb2ludGVyO2Rpc3BsYXk6aW5saW5lLWJsb2NrOy13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleC1wb3NpdGl2ZTowO2ZsZXgtZ3JvdzowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDtmb250LXNpemU6MDtoZWlnaHQ6MjBweDttYXgtaGVpZ2h0OjIwcHg7bWF4LXdpZHRoOjIwcHg7bWluLWhlaWdodDoyMHB4O21pbi13aWR0aDoyMHB4O291dGxpbmU6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjp0b3A7d2lkdGg6MjBweDtiYWNrZ3JvdW5kOm5vbmU7aGVpZ2h0OjQwcHg7cG9zaXRpb246Zml4ZWQ7cmlnaHQ6MjBweDt0b3A6MjBweDt3aWR0aDo0MHB4fS5tb2RhbC1jbG9zZTphZnRlciwubW9kYWwtY2xvc2U6YmVmb3Jle2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6YmxvY2s7bGVmdDo1MCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSg0NWRlZyk7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgY2VudGVyfS5tb2RhbC1jbG9zZTpiZWZvcmV7aGVpZ2h0OjJweDt3aWR0aDo1MCV9Lm1vZGFsLWNsb3NlOmFmdGVye2hlaWdodDo1MCU7d2lkdGg6MnB4fS5tb2RhbC1jbG9zZTpmb2N1cywubW9kYWwtY2xvc2U6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsNCUsLjMpfS5tb2RhbC1jbG9zZTphY3RpdmV7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsNCUsLjQpfS5tb2RhbC1jbG9zZS5pcy1zbWFsbHtoZWlnaHQ6MTZweDttYXgtaGVpZ2h0OjE2cHg7bWF4LXdpZHRoOjE2cHg7bWluLWhlaWdodDoxNnB4O21pbi13aWR0aDoxNnB4O3dpZHRoOjE2cHh9Lm1vZGFsLWNsb3NlLmlzLW1lZGl1bXtoZWlnaHQ6MjRweDttYXgtaGVpZ2h0OjI0cHg7bWF4LXdpZHRoOjI0cHg7bWluLWhlaWdodDoyNHB4O21pbi13aWR0aDoyNHB4O3dpZHRoOjI0cHh9Lm1vZGFsLWNsb3NlLmlzLWxhcmdle2hlaWdodDozMnB4O21heC1oZWlnaHQ6MzJweDttYXgtd2lkdGg6MzJweDttaW4taGVpZ2h0OjMycHg7bWluLXdpZHRoOjMycHg7d2lkdGg6MzJweH0ubW9kYWwtY2FyZHstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjttYXgtaGVpZ2h0OmNhbGMoMTAwdmggLSA0MHB4KTtvdmVyZmxvdzpoaWRkZW59Lm1vZGFsLWNhcmQsLm1vZGFsLWNhcmQtZm9vdCwubW9kYWwtY2FyZC1oZWFke2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9Lm1vZGFsLWNhcmQtZm9vdCwubW9kYWwtY2FyZC1oZWFkey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTstbXMtZmxleC1uZWdhdGl2ZTowO2ZsZXgtc2hyaW5rOjA7LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O3BhZGRpbmc6MjBweDtwb3NpdGlvbjpyZWxhdGl2ZX0ubW9kYWwtY2FyZC1oZWFke2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNkYmRiZGI7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4fS5tb2RhbC1jYXJkLXRpdGxle2NvbG9yOiMzNjM2MzY7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowO2ZvbnQtc2l6ZToxLjVyZW07bGluZS1oZWlnaHQ6MX0ubW9kYWwtY2FyZC1mb290e2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NXB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjVweDtib3JkZXItdG9wOjFweCBzb2xpZCAjZGJkYmRifS5tb2RhbC1jYXJkLWZvb3QgLmJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1yaWdodDoxMHB4fS5tb2RhbC1jYXJkLWJvZHl7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7YmFja2dyb3VuZC1jb2xvcjojZmZmOy13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjE7ZmxleC1zaHJpbms6MTtvdmVyZmxvdzphdXRvO3BhZGRpbmc6MjBweH0ubmF2YmFye2JhY2tncm91bmQtY29sb3I6I2ZmZjttaW4taGVpZ2h0OjMuMjVyZW07cG9zaXRpb246cmVsYXRpdmV9Lm5hdmJhci5pcy13aGl0ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX0ubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1icmFuZD4ubmF2YmFyLWl0ZW17Y29sb3I6IzBhMGEwYX0ubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmMmYyZjI7Y29sb3I6IzBhMGEwYX0ubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmFmdGVye2JvcmRlci1jb2xvcjojMGEwYTBhfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItZW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItZW5kPi5uYXZiYXItaXRlbSwubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1zdGFydD4ubmF2YmFyLWl0ZW17Y29sb3I6IzBhMGEwYX0ubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItZW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW06aG92ZXIsLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjJmMmYyO2NvbG9yOiMwYTBhMGF9Lm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6YWZ0ZXIsLm5hdmJhci5pcy13aGl0ZSAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6IzBhMGEwYX0ubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtYWN0aXZlIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXdoaXRlIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd246aG92ZXIgLm5hdmJhci1saW5re2JhY2tncm91bmQtY29sb3I6I2YyZjJmMjtjb2xvcjojMGEwYTBhfS5uYXZiYXIuaXMtd2hpdGUgLm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX19Lm5hdmJhci5pcy1ibGFja3tiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGE7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1icmFuZD4ubmF2YmFyLWl0ZW17Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmFmdGVye2JvcmRlci1jb2xvcjojZmZmfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItZW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItZW5kPi5uYXZiYXItaXRlbSwubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1zdGFydD4ubmF2YmFyLWl0ZW17Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItZW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW06aG92ZXIsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDAwO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1ibGFjayAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6YWZ0ZXIsLm5hdmJhci5pcy1ibGFjayAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6I2ZmZn0ubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtYWN0aXZlIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWJsYWNrIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd246aG92ZXIgLm5hdmJhci1saW5re2JhY2tncm91bmQtY29sb3I6IzAwMDtjb2xvcjojZmZmfS5uYXZiYXIuaXMtYmxhY2sgLm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMwYTBhMGE7Y29sb3I6I2ZmZn19Lm5hdmJhci5pcy1saWdodHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn0ubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1icmFuZD4ubmF2YmFyLWl0ZW17Y29sb3I6IzM2MzYzNn0ubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNlOGU4ZTg7Y29sb3I6IzM2MzYzNn0ubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmFmdGVye2JvcmRlci1jb2xvcjojMzYzNjM2fUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItZW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItZW5kPi5uYXZiYXItaXRlbSwubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1zdGFydD4ubmF2YmFyLWl0ZW17Y29sb3I6IzM2MzYzNn0ubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItZW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1saWdodCAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1saWdodCAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW06aG92ZXIsLm5hdmJhci5pcy1saWdodCAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1saWdodCAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1saWdodCAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZThlOGU4O2NvbG9yOiMzNjM2MzZ9Lm5hdmJhci5pcy1saWdodCAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6YWZ0ZXIsLm5hdmJhci5pcy1saWdodCAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6IzM2MzYzNn0ubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtYWN0aXZlIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWxpZ2h0IC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd246aG92ZXIgLm5hdmJhci1saW5re2JhY2tncm91bmQtY29sb3I6I2U4ZThlODtjb2xvcjojMzYzNjM2fS5uYXZiYXIuaXMtbGlnaHQgLm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn19Lm5hdmJhci5pcy1kYXJre2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fS5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1icmFuZD4ubmF2YmFyLWl0ZW17Y29sb3I6I2Y1ZjVmNX0ubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzI5MjkyOTtjb2xvcjojZjVmNWY1fS5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6I2Y1ZjVmNX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7Lm5hdmJhci5pcy1kYXJrIC5uYXZiYXItZW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1lbmQ+Lm5hdmJhci1pdGVtLC5uYXZiYXIuaXMtZGFyayAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluaywubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1zdGFydD4ubmF2YmFyLWl0ZW17Y29sb3I6I2Y1ZjVmNX0ubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbTpob3ZlciwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtZGFyayAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWRhcmsgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzI5MjkyOTtjb2xvcjojZjVmNWY1fS5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6YWZ0ZXIsLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOmFmdGVye2JvcmRlci1jb2xvcjojZjVmNWY1fS5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1kYXJrIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd246aG92ZXIgLm5hdmJhci1saW5re2JhY2tncm91bmQtY29sb3I6IzI5MjkyOTtjb2xvcjojZjVmNWY1fS5uYXZiYXIuaXMtZGFyayAubmF2YmFyLWRyb3Bkb3duIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZle2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fX0ubmF2YmFyLmlzLXByaW1hcnl7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWJyYW5kPi5uYXZiYXItaXRlbXtjb2xvcjojZmZmfS5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDBiODljO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmFmdGVye2JvcmRlci1jb2xvcjojZmZmfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWVuZD4ubmF2YmFyLWl0ZW0sLm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLXN0YXJ0Pi5uYXZiYXItaXRlbXtjb2xvcjojZmZmfS5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtOmhvdmVyLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtcHJpbWFyeSAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMDBiODljO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItZW5kIC5uYXZiYXItbGluazphZnRlciwubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiNmZmZ9Lm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtYWN0aXZlIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXByaW1hcnkgLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bjpob3ZlciAubmF2YmFyLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojMDBiODljO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1wcmltYXJ5IC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMDBkMWIyO2NvbG9yOiNmZmZ9fS5uYXZiYXIuaXMtbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1saW5rIC5uYXZiYXItYnJhbmQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1saW5rIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyMzY2ZDE7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbms6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiNmZmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpey5uYXZiYXIuaXMtbGluayAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1saW5rIC5uYXZiYXItZW5kPi5uYXZiYXItaXRlbSwubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1saW5rIC5uYXZiYXItc3RhcnQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1saW5rIC5uYXZiYXItZW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItZW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW06aG92ZXIsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1saW5rIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyMzY2ZDE7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmFmdGVyLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6I2ZmZn0ubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bi5pcy1hY3RpdmUgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtbGluayAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duOmhvdmVyIC5uYXZiYXItbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiMyMzY2ZDE7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWxpbmsgLm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZn19Lm5hdmJhci5pcy1pbmZve2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtjb2xvcjojZmZmfS5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWluZm8gLm5hdmJhci1icmFuZD4ubmF2YmFyLWl0ZW17Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWluZm8gLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzExOGZlNDtjb2xvcjojZmZmfS5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluazphZnRlcntib3JkZXItY29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7Lm5hdmJhci5pcy1pbmZvIC5uYXZiYXItZW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWluZm8gLm5hdmJhci1lbmQ+Lm5hdmJhci1pdGVtLC5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluaywubmF2YmFyLmlzLWluZm8gLm5hdmJhci1zdGFydD4ubmF2YmFyLWl0ZW17Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWluZm8gLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbTpob3ZlciwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWluZm8gLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzExOGZlNDtjb2xvcjojZmZmfS5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6YWZ0ZXIsLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOmFmdGVye2JvcmRlci1jb2xvcjojZmZmfS5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1pbmZvIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd246aG92ZXIgLm5hdmJhci1saW5re2JhY2tncm91bmQtY29sb3I6IzExOGZlNDtjb2xvcjojZmZmfS5uYXZiYXIuaXMtaW5mbyAubmF2YmFyLWRyb3Bkb3duIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZle2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtjb2xvcjojZmZmfX0ubmF2YmFyLmlzLXN1Y2Nlc3N7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWJyYW5kPi5uYXZiYXItaXRlbXtjb2xvcjojZmZmfS5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWJyYW5kPmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjBiYzU2O2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmFmdGVye2JvcmRlci1jb2xvcjojZmZmfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWVuZD4ubmF2YmFyLWl0ZW0sLm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLXN0YXJ0Pi5uYXZiYXItaXRlbXtjb2xvcjojZmZmfS5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLWVuZD5hLm5hdmJhci1pdGVtOmhvdmVyLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtc3VjY2VzcyAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjBiYzU2O2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItZW5kIC5uYXZiYXItbGluazphZnRlciwubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOiNmZmZ9Lm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtYWN0aXZlIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXN1Y2Nlc3MgLm5hdmJhci1pdGVtLmhhcy1kcm9wZG93bjpob3ZlciAubmF2YmFyLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojMjBiYzU2O2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1zdWNjZXNzIC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojMjNkMTYwO2NvbG9yOiNmZmZ9fS5uYXZiYXIuaXMtd2FybmluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTd9Lm5hdmJhci5pcy13YXJuaW5nLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWJyYW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1icmFuZD4ubmF2YmFyLWl0ZW17Y29sb3I6cmdiYSgwLDAsMCwuNyl9Lm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ4M2Q7Y29sb3I6cmdiYSgwLDAsMCwuNyl9Lm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmFmdGVye2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC43KX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMjRweCl7Lm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItZW5kIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1lbmQ+Lm5hdmJhci1pdGVtLC5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluaywubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1zdGFydD4ubmF2YmFyLWl0ZW17Y29sb3I6cmdiYSgwLDAsMCwuNyl9Lm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItZW5kIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItZW5kIC5uYXZiYXItbGluazpob3ZlciwubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItZW5kPmEubmF2YmFyLWl0ZW06aG92ZXIsLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItc3RhcnQ+YS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmQ4M2Q7Y29sb3I6cmdiYSgwLDAsMCwuNyl9Lm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItZW5kIC5uYXZiYXItbGluazphZnRlciwubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6YWZ0ZXJ7Ym9yZGVyLWNvbG9yOnJnYmEoMCwwLDAsLjcpfS5uYXZiYXIuaXMtd2FybmluZyAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssLm5hdmJhci5pcy13YXJuaW5nIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd246aG92ZXIgLm5hdmJhci1saW5re2JhY2tncm91bmQtY29sb3I6I2ZmZDgzZDtjb2xvcjpyZ2JhKDAsMCwwLC43KX0ubmF2YmFyLmlzLXdhcm5pbmcgLm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTc7Y29sb3I6cmdiYSgwLDAsMCwuNyl9fS5uYXZiYXIuaXMtZGFuZ2Vye2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MDtjb2xvcjojZmZmfS5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItYnJhbmQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1icmFuZCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmhvdmVyLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItYnJhbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1icmFuZD5hLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmMWY0Yjtjb2xvcjojZmZmfS5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItYnJhbmQgLm5hdmJhci1saW5rOmFmdGVye2JvcmRlci1jb2xvcjojZmZmfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLWVuZCAubmF2YmFyLWxpbmssLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1lbmQ+Lm5hdmJhci1pdGVtLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItc3RhcnQ+Lm5hdmJhci1pdGVte2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLWVuZCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1lbmQ+YS5uYXZiYXItaXRlbTpob3ZlciwubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLXN0YXJ0IC5uYXZiYXItbGluay5pcy1hY3RpdmUsLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1zdGFydCAubmF2YmFyLWxpbms6aG92ZXIsLm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1zdGFydD5hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLXN0YXJ0PmEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmYxZjRiO2NvbG9yOiNmZmZ9Lm5hdmJhci5pcy1kYW5nZXIgLm5hdmJhci1lbmQgLm5hdmJhci1saW5rOmFmdGVyLC5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItc3RhcnQgLm5hdmJhci1saW5rOmFmdGVye2JvcmRlci1jb2xvcjojZmZmfS5uYXZiYXIuaXMtZGFuZ2VyIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtYWN0aXZlIC5uYXZiYXItbGluaywubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duOmhvdmVyIC5uYXZiYXItbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiNmZjFmNGI7Y29sb3I6I2ZmZn0ubmF2YmFyLmlzLWRhbmdlciAubmF2YmFyLWRyb3Bkb3duIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZle2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MDtjb2xvcjojZmZmfX0ubmF2YmFyPi5jb250YWluZXJ7LXdlYmtpdC1ib3gtYWxpZ246c3RyZXRjaDstbXMtZmxleC1hbGlnbjpzdHJldGNoO2FsaWduLWl0ZW1zOnN0cmV0Y2g7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDttaW4taGVpZ2h0OjMuMjVyZW07d2lkdGg6MTAwJX0ubmF2YmFyLmhhcy1zaGFkb3d7LXdlYmtpdC1ib3gtc2hhZG93OjAgMnB4IDNweCBoc2xhKDAsMCUsNCUsLjEpO2JveC1zaGFkb3c6MCAycHggM3B4IGhzbGEoMCwwJSw0JSwuMSl9Lm5hdmJhci5pcy1maXhlZC1ib3R0b20sLm5hdmJhci5pcy1maXhlZC10b3B7bGVmdDowO3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7ei1pbmRleDozMH0ubmF2YmFyLmlzLWZpeGVkLWJvdHRvbXtib3R0b206MH0ubmF2YmFyLmlzLWZpeGVkLWJvdHRvbS5oYXMtc2hhZG93ey13ZWJraXQtYm94LXNoYWRvdzowIC0ycHggM3B4IGhzbGEoMCwwJSw0JSwuMSk7Ym94LXNoYWRvdzowIC0ycHggM3B4IGhzbGEoMCwwJSw0JSwuMSl9Lm5hdmJhci5pcy1maXhlZC10b3B7dG9wOjB9aHRtbC5oYXMtbmF2YmFyLWZpeGVkLXRvcHtwYWRkaW5nLXRvcDozLjI1cmVtfWh0bWwuaGFzLW5hdmJhci1maXhlZC1ib3R0b217cGFkZGluZy1ib3R0b206My4yNXJlbX0ubmF2YmFyLWJyYW5kLC5uYXZiYXItdGFic3std2Via2l0LWJveC1hbGlnbjpzdHJldGNoOy1tcy1mbGV4LWFsaWduOnN0cmV0Y2g7YWxpZ24taXRlbXM6c3RyZXRjaDtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDttaW4taGVpZ2h0OjMuMjVyZW19Lm5hdmJhci10YWJzey13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO21heC13aWR0aDoxMDB2dztvdmVyZmxvdy14OmF1dG87b3ZlcmZsb3cteTpoaWRkZW59Lm5hdmJhci1idXJnZXJ7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTpibG9jaztoZWlnaHQ6My4yNXJlbTtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDozLjI1cmVtO21hcmdpbi1sZWZ0OmF1dG99Lm5hdmJhci1idXJnZXIgc3BhbntiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtkaXNwbGF5OmJsb2NrO2hlaWdodDoxcHg7bGVmdDpjYWxjKDUwJSAtIDhweCk7cG9zaXRpb246YWJzb2x1dGU7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlcjstd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246ODZtczt0cmFuc2l0aW9uLWR1cmF0aW9uOjg2bXM7LXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3Isb3BhY2l0eSwtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3Isb3BhY2l0eSwtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5OmJhY2tncm91bmQtY29sb3Isb3BhY2l0eSx0cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpiYWNrZ3JvdW5kLWNvbG9yLG9wYWNpdHksdHJhbnNmb3JtLC13ZWJraXQtdHJhbnNmb3JtOy13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1vdXQ7d2lkdGg6MTZweH0ubmF2YmFyLWJ1cmdlciBzcGFuOmZpcnN0LWNoaWxke3RvcDpjYWxjKDUwJSAtIDZweCl9Lm5hdmJhci1idXJnZXIgc3BhbjpudGgtY2hpbGQoMil7dG9wOmNhbGMoNTAlIC0gMXB4KX0ubmF2YmFyLWJ1cmdlciBzcGFuOm50aC1jaGlsZCgzKXt0b3A6Y2FsYyg1MCUgKyA0cHgpfS5uYXZiYXItYnVyZ2VyOmhvdmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMDUpfS5uYXZiYXItYnVyZ2VyLmlzLWFjdGl2ZSBzcGFuOmZpcnN0LWNoaWxkey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoNXB4KSByb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDVweCkgcm90YXRlKDQ1ZGVnKX0ubmF2YmFyLWJ1cmdlci5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMil7b3BhY2l0eTowfS5uYXZiYXItYnVyZ2VyLmlzLWFjdGl2ZSBzcGFuOm50aC1jaGlsZCgzKXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01cHgpIHJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01cHgpIHJvdGF0ZSgtNDVkZWcpfS5uYXZiYXItbWVudXtkaXNwbGF5Om5vbmV9Lm5hdmJhci1pdGVtLC5uYXZiYXItbGlua3tjb2xvcjojNGE0YTRhO2Rpc3BsYXk6YmxvY2s7bGluZS1oZWlnaHQ6MS41O3BhZGRpbmc6LjVyZW0gMXJlbTtwb3NpdGlvbjpyZWxhdGl2ZX1hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSxhLm5hdmJhci1pdGVtOmhvdmVyLGEubmF2YmFyLWxpbmsuaXMtYWN0aXZlLGEubmF2YmFyLWxpbms6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMzMjczZGN9Lm5hdmJhci1pdGVtey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleC1wb3NpdGl2ZTowO2ZsZXgtZ3JvdzowOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MH0ubmF2YmFyLWl0ZW0gaW1ne21heC1oZWlnaHQ6MS43NXJlbX0ubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3due3BhZGRpbmc6MH0ubmF2YmFyLWl0ZW0uaXMtZXhwYW5kZWR7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtbmVnYXRpdmU6MTtmbGV4LXNocmluazoxfS5uYXZiYXItaXRlbS5pcy10YWJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdHJhbnNwYXJlbnQ7bWluLWhlaWdodDozLjI1cmVtO3BhZGRpbmctYm90dG9tOmNhbGMoLjVyZW0gLSAxcHgpfS5uYXZiYXItaXRlbS5pcy10YWIuaXMtYWN0aXZlLC5uYXZiYXItaXRlbS5pcy10YWI6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItYm90dG9tLWNvbG9yOiMzMjczZGN9Lm5hdmJhci1pdGVtLmlzLXRhYi5pcy1hY3RpdmV7Ym9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtib3JkZXItYm90dG9tLXdpZHRoOjNweDtjb2xvcjojMzI3M2RjO3BhZGRpbmctYm90dG9tOmNhbGMoLjVyZW0gLSAzcHgpfS5uYXZiYXItY29udGVudHstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1uZWdhdGl2ZToxO2ZsZXgtc2hyaW5rOjF9Lm5hdmJhci1saW5re3BhZGRpbmctcmlnaHQ6Mi41ZW19Lm5hdmJhci1kcm9wZG93bntmb250LXNpemU6Ljg3NXJlbTtwYWRkaW5nLWJvdHRvbTouNXJlbTtwYWRkaW5nLXRvcDouNXJlbX0ubmF2YmFyLWRyb3Bkb3duIC5uYXZiYXItaXRlbXtwYWRkaW5nLWxlZnQ6MS41cmVtO3BhZGRpbmctcmlnaHQ6MS41cmVtfS5uYXZiYXItZGl2aWRlcntiYWNrZ3JvdW5kLWNvbG9yOiNkYmRiZGI7Ym9yZGVyOm5vbmU7ZGlzcGxheTpub25lO2hlaWdodDoxcHg7bWFyZ2luOi41cmVtIDB9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5uYXZiYXI+LmNvbnRhaW5lcntkaXNwbGF5OmJsb2NrfS5uYXZiYXItYnJhbmQgLm5hdmJhci1pdGVtLC5uYXZiYXItdGFicyAubmF2YmFyLWl0ZW17LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0ubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1jb2xvcjojZmZmOy13ZWJraXQtYm94LXNoYWRvdzowIDhweCAxNnB4IGhzbGEoMCwwJSw0JSwuMSk7Ym94LXNoYWRvdzowIDhweCAxNnB4IGhzbGEoMCwwJSw0JSwuMSk7cGFkZGluZzouNXJlbSAwfS5uYXZiYXItbWVudS5pcy1hY3RpdmV7ZGlzcGxheTpibG9ja30ubmF2YmFyLmlzLWZpeGVkLWJvdHRvbS10b3VjaCwubmF2YmFyLmlzLWZpeGVkLXRvcC10b3VjaHtsZWZ0OjA7cG9zaXRpb246Zml4ZWQ7cmlnaHQ6MDt6LWluZGV4OjMwfS5uYXZiYXIuaXMtZml4ZWQtYm90dG9tLXRvdWNoe2JvdHRvbTowfS5uYXZiYXIuaXMtZml4ZWQtYm90dG9tLXRvdWNoLmhhcy1zaGFkb3d7LXdlYmtpdC1ib3gtc2hhZG93OjAgLTJweCAzcHggaHNsYSgwLDAlLDQlLC4xKTtib3gtc2hhZG93OjAgLTJweCAzcHggaHNsYSgwLDAlLDQlLC4xKX0ubmF2YmFyLmlzLWZpeGVkLXRvcC10b3VjaHt0b3A6MH0ubmF2YmFyLmlzLWZpeGVkLXRvcC10b3VjaCAubmF2YmFyLW1lbnUsLm5hdmJhci5pcy1maXhlZC10b3AgLm5hdmJhci1tZW51ey13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoO21heC1oZWlnaHQ6Y2FsYygxMDB2aCAtIDMuMjVyZW0pO292ZXJmbG93OmF1dG99aHRtbC5oYXMtbmF2YmFyLWZpeGVkLXRvcC10b3VjaHtwYWRkaW5nLXRvcDozLjI1cmVtfWh0bWwuaGFzLW5hdmJhci1maXhlZC1ib3R0b20tdG91Y2h7cGFkZGluZy1ib3R0b206My4yNXJlbX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpey5uYXZiYXIsLm5hdmJhci1lbmQsLm5hdmJhci1tZW51LC5uYXZiYXItc3RhcnR7LXdlYmtpdC1ib3gtYWxpZ246c3RyZXRjaDstbXMtZmxleC1hbGlnbjpzdHJldGNoO2FsaWduLWl0ZW1zOnN0cmV0Y2g7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0ubmF2YmFye21pbi1oZWlnaHQ6My4yNXJlbX0ubmF2YmFyLmlzLXRyYW5zcGFyZW50IC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtYWN0aXZlIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXRyYW5zcGFyZW50IC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtaG92ZXJhYmxlOmhvdmVyIC5uYXZiYXItbGluaywubmF2YmFyLmlzLXRyYW5zcGFyZW50IGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5uYXZiYXIuaXMtdHJhbnNwYXJlbnQgYS5uYXZiYXItaXRlbTpob3ZlciwubmF2YmFyLmlzLXRyYW5zcGFyZW50IGEubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5uYXZiYXIuaXMtdHJhbnNwYXJlbnQgYS5uYXZiYXItbGluazpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudH0ubmF2YmFyLmlzLXRyYW5zcGFyZW50IC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzBhMGEwYX0ubmF2YmFyLmlzLXRyYW5zcGFyZW50IC5uYXZiYXItZHJvcGRvd24gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmV7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMzMjczZGN9Lm5hdmJhci1idXJnZXJ7ZGlzcGxheTpub25lfS5uYXZiYXItaXRlbSwubmF2YmFyLWxpbmt7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH0ubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duey13ZWJraXQtYm94LWFsaWduOnN0cmV0Y2g7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNofS5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24tdXAgLm5hdmJhci1saW5rOmFmdGVyey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMzVkZWcpIHRyYW5zbGF0ZSguMjVlbSwtLjI1ZW0pO3RyYW5zZm9ybTpyb3RhdGUoMTM1ZGVnKSB0cmFuc2xhdGUoLjI1ZW0sLS4yNWVtKX0ubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLXVwIC5uYXZiYXItZHJvcGRvd257Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2RiZGJkYjtib3JkZXItcmFkaXVzOjVweCA1cHggMCAwO2JvcmRlci10b3A6bm9uZTtib3R0b206MTAwJTstd2Via2l0LWJveC1zaGFkb3c6MCAtOHB4IDhweCBoc2xhKDAsMCUsNCUsLjEpO2JveC1zaGFkb3c6MCAtOHB4IDhweCBoc2xhKDAsMCUsNCUsLjEpO3RvcDphdXRvfS5uYXZiYXItaXRlbS5pcy1hY3RpdmUgLm5hdmJhci1kcm9wZG93biwubmF2YmFyLWl0ZW0uaXMtaG92ZXJhYmxlOmhvdmVyIC5uYXZiYXItZHJvcGRvd257ZGlzcGxheTpibG9ja30ubmF2YmFyLWl0ZW0uaXMtYWN0aXZlIC5uYXZiYXItZHJvcGRvd24uaXMtYm94ZWQsLm5hdmJhci1pdGVtLmlzLWhvdmVyYWJsZTpob3ZlciAubmF2YmFyLWRyb3Bkb3duLmlzLWJveGVke29wYWNpdHk6MTtwb2ludGVyLWV2ZW50czphdXRvOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCl9Lm5hdmJhci1saW5rOmFmdGVye2JvcmRlcjoxcHggc29saWQgIzMyNzNkYztib3JkZXItcmlnaHQ6MDtib3JkZXItdG9wOjA7Y29udGVudDpcXFwiIFxcXCI7ZGlzcGxheTpibG9jaztoZWlnaHQ6LjVlbTtwb2ludGVyLWV2ZW50czpub25lO3Bvc2l0aW9uOmFic29sdXRlOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyO3dpZHRoOi41ZW07bWFyZ2luLXRvcDotLjM3NWVtO3JpZ2h0OjEuMTI1ZW07dG9wOjUwJX0ubmF2YmFyLW1lbnV7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowfS5uYXZiYXItc3RhcnR7LXdlYmtpdC1ib3gtcGFjazpzdGFydDstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O21hcmdpbi1yaWdodDphdXRvfS5uYXZiYXItZW5key13ZWJraXQtYm94LXBhY2s6ZW5kOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDttYXJnaW4tbGVmdDphdXRvfS5uYXZiYXItZHJvcGRvd257YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NXB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjVweDtib3JkZXItdG9wOjFweCBzb2xpZCAjZGJkYmRiOy13ZWJraXQtYm94LXNoYWRvdzowIDhweCA4cHggaHNsYSgwLDAlLDQlLC4xKTtib3gtc2hhZG93OjAgOHB4IDhweCBoc2xhKDAsMCUsNCUsLjEpO2Rpc3BsYXk6bm9uZTtmb250LXNpemU6Ljg3NXJlbTtsZWZ0OjA7bWluLXdpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjEwMCU7ei1pbmRleDoyMH0ubmF2YmFyLWRyb3Bkb3duIC5uYXZiYXItaXRlbXtwYWRkaW5nOi4zNzVyZW0gMXJlbTt3aGl0ZS1zcGFjZTpub3dyYXB9Lm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVte3BhZGRpbmctcmlnaHQ6M3JlbX0ubmF2YmFyLWRyb3Bkb3duIGEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2NvbG9yOiMwYTBhMGF9Lm5hdmJhci1kcm9wZG93biBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZXtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzMyNzNkY30ubmF2YmFyLWRyb3Bkb3duLmlzLWJveGVke2JvcmRlci1yYWRpdXM6NXB4O2JvcmRlci10b3A6bm9uZTstd2Via2l0LWJveC1zaGFkb3c6MCA4cHggOHB4IGhzbGEoMCwwJSw0JSwuMSksMCAwIDAgMXB4IGhzbGEoMCwwJSw0JSwuMSk7Ym94LXNoYWRvdzowIDhweCA4cHggaHNsYSgwLDAlLDQlLC4xKSwwIDAgMCAxcHggaHNsYSgwLDAlLDQlLC4xKTtkaXNwbGF5OmJsb2NrO29wYWNpdHk6MDtwb2ludGVyLWV2ZW50czpub25lO3RvcDpjYWxjKDEwMCUgKyAtNHB4KTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01cHgpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01cHgpOy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjo4Nm1zO3RyYW5zaXRpb24tZHVyYXRpb246ODZtczstd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSwtd2Via2l0LXRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksLXdlYmtpdC10cmFuc2Zvcm07dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LHRyYW5zZm9ybTt0cmFuc2l0aW9uLXByb3BlcnR5Om9wYWNpdHksdHJhbnNmb3JtLC13ZWJraXQtdHJhbnNmb3JtfS5uYXZiYXItZHJvcGRvd24uaXMtcmlnaHR7bGVmdDphdXRvO3JpZ2h0OjB9Lm5hdmJhci1kaXZpZGVye2Rpc3BsYXk6YmxvY2t9LmNvbnRhaW5lcj4ubmF2YmFyIC5uYXZiYXItYnJhbmQsLm5hdmJhcj4uY29udGFpbmVyIC5uYXZiYXItYnJhbmR7bWFyZ2luLWxlZnQ6LTFyZW19LmNvbnRhaW5lcj4ubmF2YmFyIC5uYXZiYXItbWVudSwubmF2YmFyPi5jb250YWluZXIgLm5hdmJhci1tZW51e21hcmdpbi1yaWdodDotMXJlbX0ubmF2YmFyLmlzLWZpeGVkLWJvdHRvbS1kZXNrdG9wLC5uYXZiYXIuaXMtZml4ZWQtdG9wLWRlc2t0b3B7bGVmdDowO3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjA7ei1pbmRleDozMH0ubmF2YmFyLmlzLWZpeGVkLWJvdHRvbS1kZXNrdG9we2JvdHRvbTowfS5uYXZiYXIuaXMtZml4ZWQtYm90dG9tLWRlc2t0b3AuaGFzLXNoYWRvd3std2Via2l0LWJveC1zaGFkb3c6MCAtMnB4IDNweCBoc2xhKDAsMCUsNCUsLjEpO2JveC1zaGFkb3c6MCAtMnB4IDNweCBoc2xhKDAsMCUsNCUsLjEpfS5uYXZiYXIuaXMtZml4ZWQtdG9wLWRlc2t0b3B7dG9wOjB9aHRtbC5oYXMtbmF2YmFyLWZpeGVkLXRvcC1kZXNrdG9we3BhZGRpbmctdG9wOjMuMjVyZW19aHRtbC5oYXMtbmF2YmFyLWZpeGVkLWJvdHRvbS1kZXNrdG9we3BhZGRpbmctYm90dG9tOjMuMjVyZW19YS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsYS5uYXZiYXItbGluay5pcy1hY3RpdmV7Y29sb3I6IzBhMGEwYX1hLm5hdmJhci1pdGVtLmlzLWFjdGl2ZTpub3QoOmhvdmVyKSxhLm5hdmJhci1saW5rLmlzLWFjdGl2ZTpub3QoOmhvdmVyKXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fS5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtYWN0aXZlIC5uYXZiYXItbGluaywubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duOmhvdmVyIC5uYXZiYXItbGlua3tiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9fS5wYWdpbmF0aW9ue2ZvbnQtc2l6ZToxcmVtO21hcmdpbjotLjI1cmVtfS5wYWdpbmF0aW9uLmlzLXNtYWxse2ZvbnQtc2l6ZTouNzVyZW19LnBhZ2luYXRpb24uaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtfS5wYWdpbmF0aW9uLmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LnBhZ2luYXRpb24sLnBhZ2luYXRpb24tbGlzdHstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7dGV4dC1hbGlnbjpjZW50ZXJ9LnBhZ2luYXRpb24tZWxsaXBzaXMsLnBhZ2luYXRpb24tbGluaywucGFnaW5hdGlvbi1uZXh0LC5wYWdpbmF0aW9uLXByZXZpb3Vzey1tb3otYXBwZWFyYW5jZTpub25lOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czozcHg7LXdlYmtpdC1ib3gtc2hhZG93Om5vbmU7Ym94LXNoYWRvdzpub25lO2Rpc3BsYXk6LXdlYmtpdC1pbmxpbmUtYm94O2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6aW5saW5lLWZsZXg7Zm9udC1zaXplOjFyZW07aGVpZ2h0OjIuMjVlbTstd2Via2l0LWJveC1wYWNrOnN0YXJ0Oy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7bGluZS1oZWlnaHQ6MS41O3BhZGRpbmctbGVmdDpjYWxjKC42MjVlbSAtIDFweCk7cGFkZGluZy1yaWdodDpjYWxjKC42MjVlbSAtIDFweCk7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246dG9wOy13ZWJraXQtdG91Y2gtY2FsbG91dDpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtmb250LXNpemU6MWVtO3BhZGRpbmc6Y2FsYyguMzc1ZW0gLSAxcHgpIC41ZW07LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46LjI1cmVtO3RleHQtYWxpZ246Y2VudGVyfS5wYWdpbmF0aW9uLWVsbGlwc2lzLmlzLWFjdGl2ZSwucGFnaW5hdGlvbi1lbGxpcHNpcy5pcy1mb2N1c2VkLC5wYWdpbmF0aW9uLWVsbGlwc2lzOmFjdGl2ZSwucGFnaW5hdGlvbi1lbGxpcHNpczpmb2N1cywucGFnaW5hdGlvbi1saW5rLmlzLWFjdGl2ZSwucGFnaW5hdGlvbi1saW5rLmlzLWZvY3VzZWQsLnBhZ2luYXRpb24tbGluazphY3RpdmUsLnBhZ2luYXRpb24tbGluazpmb2N1cywucGFnaW5hdGlvbi1uZXh0LmlzLWFjdGl2ZSwucGFnaW5hdGlvbi1uZXh0LmlzLWZvY3VzZWQsLnBhZ2luYXRpb24tbmV4dDphY3RpdmUsLnBhZ2luYXRpb24tbmV4dDpmb2N1cywucGFnaW5hdGlvbi1wcmV2aW91cy5pcy1hY3RpdmUsLnBhZ2luYXRpb24tcHJldmlvdXMuaXMtZm9jdXNlZCwucGFnaW5hdGlvbi1wcmV2aW91czphY3RpdmUsLnBhZ2luYXRpb24tcHJldmlvdXM6Zm9jdXN7b3V0bGluZTpub25lfS5wYWdpbmF0aW9uLWVsbGlwc2lzW2Rpc2FibGVkXSwucGFnaW5hdGlvbi1saW5rW2Rpc2FibGVkXSwucGFnaW5hdGlvbi1uZXh0W2Rpc2FibGVkXSwucGFnaW5hdGlvbi1wcmV2aW91c1tkaXNhYmxlZF17Y3Vyc29yOm5vdC1hbGxvd2VkfS5wYWdpbmF0aW9uLWxpbmssLnBhZ2luYXRpb24tbmV4dCwucGFnaW5hdGlvbi1wcmV2aW91c3tib3JkZXItY29sb3I6I2RiZGJkYjttaW4td2lkdGg6Mi4yNWVtfS5wYWdpbmF0aW9uLWxpbms6aG92ZXIsLnBhZ2luYXRpb24tbmV4dDpob3ZlciwucGFnaW5hdGlvbi1wcmV2aW91czpob3Zlcntib3JkZXItY29sb3I6I2I1YjViNTtjb2xvcjojMzYzNjM2fS5wYWdpbmF0aW9uLWxpbms6Zm9jdXMsLnBhZ2luYXRpb24tbmV4dDpmb2N1cywucGFnaW5hdGlvbi1wcmV2aW91czpmb2N1c3tib3JkZXItY29sb3I6IzMyNzNkY30ucGFnaW5hdGlvbi1saW5rOmFjdGl2ZSwucGFnaW5hdGlvbi1uZXh0OmFjdGl2ZSwucGFnaW5hdGlvbi1wcmV2aW91czphY3RpdmV7LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDAgMXB4IDJweCBoc2xhKDAsMCUsNCUsLjIpO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMnB4IGhzbGEoMCwwJSw0JSwuMil9LnBhZ2luYXRpb24tbGlua1tkaXNhYmxlZF0sLnBhZ2luYXRpb24tbmV4dFtkaXNhYmxlZF0sLnBhZ2luYXRpb24tcHJldmlvdXNbZGlzYWJsZWRde2JhY2tncm91bmQtY29sb3I6I2RiZGJkYjtib3JkZXItY29sb3I6I2RiZGJkYjstd2Via2l0LWJveC1zaGFkb3c6bm9uZTtib3gtc2hhZG93Om5vbmU7Y29sb3I6IzdhN2E3YTtvcGFjaXR5Oi41fS5wYWdpbmF0aW9uLW5leHQsLnBhZ2luYXRpb24tcHJldmlvdXN7cGFkZGluZy1sZWZ0Oi43NWVtO3BhZGRpbmctcmlnaHQ6Ljc1ZW07d2hpdGUtc3BhY2U6bm93cmFwfS5wYWdpbmF0aW9uLWxpbmsuaXMtY3VycmVudHtiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGM7Ym9yZGVyLWNvbG9yOiMzMjczZGM7Y29sb3I6I2ZmZn0ucGFnaW5hdGlvbi1lbGxpcHNpc3tjb2xvcjojYjViNWI1O3BvaW50ZXItZXZlbnRzOm5vbmV9LnBhZ2luYXRpb24tbGlzdHstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LnBhZ2luYXRpb257LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwfS5wYWdpbmF0aW9uLWxpc3QgbGksLnBhZ2luYXRpb24tbmV4dCwucGFnaW5hdGlvbi1wcmV2aW91c3std2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1uZWdhdGl2ZToxO2ZsZXgtc2hyaW5rOjF9fUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5wYWdpbmF0aW9uLWxpc3R7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtbmVnYXRpdmU6MTtmbGV4LXNocmluazoxOy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDstd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjI7LW1zLWZsZXgtb3JkZXI6MTtvcmRlcjoxfS5wYWdpbmF0aW9uLXByZXZpb3Vzey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6MzstbXMtZmxleC1vcmRlcjoyO29yZGVyOjJ9LnBhZ2luYXRpb24tbmV4dHstd2Via2l0LWJveC1vcmRpbmFsLWdyb3VwOjQ7LW1zLWZsZXgtb3JkZXI6MztvcmRlcjozfS5wYWdpbmF0aW9uey13ZWJraXQtYm94LXBhY2s6anVzdGlmeTstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59LnBhZ2luYXRpb24uaXMtY2VudGVyZWQgLnBhZ2luYXRpb24tcHJldmlvdXN7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDoyOy1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MX0ucGFnaW5hdGlvbi5pcy1jZW50ZXJlZCAucGFnaW5hdGlvbi1saXN0ey13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDozOy1tcy1mbGV4LW9yZGVyOjI7b3JkZXI6Mn0ucGFnaW5hdGlvbi5pcy1jZW50ZXJlZCAucGFnaW5hdGlvbi1uZXh0ey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6NDstbXMtZmxleC1vcmRlcjozO29yZGVyOjN9LnBhZ2luYXRpb24uaXMtcmlnaHQgLnBhZ2luYXRpb24tcHJldmlvdXN7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDoyOy1tcy1mbGV4LW9yZGVyOjE7b3JkZXI6MX0ucGFnaW5hdGlvbi5pcy1yaWdodCAucGFnaW5hdGlvbi1uZXh0ey13ZWJraXQtYm94LW9yZGluYWwtZ3JvdXA6MzstbXMtZmxleC1vcmRlcjoyO29yZGVyOjJ9LnBhZ2luYXRpb24uaXMtcmlnaHQgLnBhZ2luYXRpb24tbGlzdHstd2Via2l0LWJveC1wYWNrOmVuZDstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7LXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDo0Oy1tcy1mbGV4LW9yZGVyOjM7b3JkZXI6M319LnBhbmVse2ZvbnQtc2l6ZToxcmVtfS5wYW5lbDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MS41cmVtfS5wYW5lbC1ibG9jaywucGFuZWwtaGVhZGluZywucGFuZWwtdGFic3tib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjZGJkYmRiO2JvcmRlci1yaWdodDoxcHggc29saWQgI2RiZGJkYn0ucGFuZWwtYmxvY2s6Zmlyc3QtY2hpbGQsLnBhbmVsLWhlYWRpbmc6Zmlyc3QtY2hpbGQsLnBhbmVsLXRhYnM6Zmlyc3QtY2hpbGR7Ym9yZGVyLXRvcDoxcHggc29saWQgI2RiZGJkYn0ucGFuZWwtaGVhZGluZ3tiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLXJhZGl1czozcHggM3B4IDAgMDtjb2xvcjojMzYzNjM2O2ZvbnQtc2l6ZToxLjI1ZW07Zm9udC13ZWlnaHQ6MzAwO2xpbmUtaGVpZ2h0OjEuMjU7cGFkZGluZzouNWVtIC43NWVtfS5wYW5lbC10YWJzey13ZWJraXQtYm94LWFsaWduOmVuZDstbXMtZmxleC1hbGlnbjplbmQ7YWxpZ24taXRlbXM6ZmxleC1lbmQ7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDtmb250LXNpemU6Ljg3NWVtOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnBhbmVsLXRhYnMgYXtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZGJkYmRiO21hcmdpbi1ib3R0b206LTFweDtwYWRkaW5nOi41ZW19LnBhbmVsLXRhYnMgYS5pcy1hY3RpdmV7Ym9yZGVyLWJvdHRvbS1jb2xvcjojNGE0YTRhO2NvbG9yOiMzNjM2MzZ9LnBhbmVsLWxpc3QgYXtjb2xvcjojNGE0YTRhfS5wYW5lbC1saXN0IGE6aG92ZXJ7Y29sb3I6IzMyNzNkY30ucGFuZWwtYmxvY2t7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Y29sb3I6IzM2MzYzNjtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LXBhY2s6c3RhcnQ7LW1zLWZsZXgtcGFjazpzdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtwYWRkaW5nOi41ZW0gLjc1ZW19LnBhbmVsLWJsb2NrIGlucHV0W3R5cGU9Y2hlY2tib3hde21hcmdpbi1yaWdodDouNzVlbX0ucGFuZWwtYmxvY2s+LmNvbnRyb2x7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjE7LW1zLWZsZXgtbmVnYXRpdmU6MTtmbGV4LXNocmluazoxO3dpZHRoOjEwMCV9LnBhbmVsLWJsb2NrLmlzLXdyYXBwZWR7LW1zLWZsZXgtd3JhcDp3cmFwO2ZsZXgtd3JhcDp3cmFwfS5wYW5lbC1ibG9jay5pcy1hY3RpdmV7Ym9yZGVyLWxlZnQtY29sb3I6IzMyNzNkYztjb2xvcjojMzYzNjM2fS5wYW5lbC1ibG9jay5pcy1hY3RpdmUgLnBhbmVsLWljb257Y29sb3I6IzMyNzNkY31hLnBhbmVsLWJsb2NrLGxhYmVsLnBhbmVsLWJsb2Nre2N1cnNvcjpwb2ludGVyfWEucGFuZWwtYmxvY2s6aG92ZXIsbGFiZWwucGFuZWwtYmxvY2s6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1fS5wYW5lbC1pY29ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtc2l6ZToxNHB4O2hlaWdodDoxZW07bGluZS1oZWlnaHQ6MWVtO3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOnRvcDt3aWR0aDoxZW07Y29sb3I6IzdhN2E3YTttYXJnaW4tcmlnaHQ6Ljc1ZW19LnBhbmVsLWljb24gLmZhe2ZvbnQtc2l6ZTppbmhlcml0O2xpbmUtaGVpZ2h0OmluaGVyaXR9LnRhYnN7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2g7LXdlYmtpdC10b3VjaC1jYWxsb3V0Om5vbmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lOy13ZWJraXQtYm94LWFsaWduOnN0cmV0Y2g7LW1zLWZsZXgtYWxpZ246c3RyZXRjaDthbGlnbi1pdGVtczpzdHJldGNoO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7Zm9udC1zaXplOjFyZW07LXdlYmtpdC1ib3gtcGFjazpqdXN0aWZ5Oy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtvdmVyZmxvdzpoaWRkZW47b3ZlcmZsb3cteDphdXRvO3doaXRlLXNwYWNlOm5vd3JhcH0udGFiczpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MS41cmVtfS50YWJzIGF7LXdlYmtpdC1ib3gtYWxpZ246Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZGJkYmRiO2JvcmRlci1ib3R0b20tc3R5bGU6c29saWQ7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHg7Y29sb3I6IzRhNGE0YTtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luLWJvdHRvbTotMXB4O3BhZGRpbmc6LjVlbSAxZW07dmVydGljYWwtYWxpZ246dG9wfS50YWJzIGE6aG92ZXJ7Ym9yZGVyLWJvdHRvbS1jb2xvcjojMzYzNjM2O2NvbG9yOiMzNjM2MzZ9LnRhYnMgbGl7ZGlzcGxheTpibG9ja30udGFicyBsaS5pcy1hY3RpdmUgYXtib3JkZXItYm90dG9tLWNvbG9yOiMzMjczZGM7Y29sb3I6IzMyNzNkY30udGFicyB1bHstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtib3JkZXItYm90dG9tLWNvbG9yOiNkYmRiZGI7Ym9yZGVyLWJvdHRvbS1zdHlsZTpzb2xpZDtib3JkZXItYm90dG9tLXdpZHRoOjFweDtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MDstd2Via2l0LWJveC1wYWNrOnN0YXJ0Oy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnRhYnMgdWwuaXMtY2VudGVyLC50YWJzIHVsLmlzLWxlZnR7cGFkZGluZy1yaWdodDouNzVlbX0udGFicyB1bC5pcy1jZW50ZXJ7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lOy13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZy1sZWZ0Oi43NWVtfS50YWJzIHVsLmlzLXJpZ2h0ey13ZWJraXQtYm94LXBhY2s6ZW5kOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtwYWRkaW5nLWxlZnQ6Ljc1ZW19LnRhYnMgLmljb246Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0Oi41ZW19LnRhYnMgLmljb246bGFzdC1jaGlsZHttYXJnaW4tbGVmdDouNWVtfS50YWJzLmlzLWNlbnRlcmVkIHVsey13ZWJraXQtYm94LXBhY2s6Y2VudGVyOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnRhYnMuaXMtcmlnaHQgdWx7LXdlYmtpdC1ib3gtcGFjazplbmQ7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS50YWJzLmlzLWJveGVkIGF7Ym9yZGVyOjFweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjNweCAzcHggMCAwfS50YWJzLmlzLWJveGVkIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZjVmNWY1O2JvcmRlci1ib3R0b20tY29sb3I6I2RiZGJkYn0udGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNkYmRiZGI7Ym9yZGVyLWJvdHRvbS1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnR9LnRhYnMuaXMtZnVsbHdpZHRoIGxpey13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjA7ZmxleC1zaHJpbms6MH0udGFicy5pcy10b2dnbGUgYXtib3JkZXI6MXB4IHNvbGlkICNkYmRiZGI7bWFyZ2luLWJvdHRvbTowO3Bvc2l0aW9uOnJlbGF0aXZlfS50YWJzLmlzLXRvZ2dsZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNTtib3JkZXItY29sb3I6I2I1YjViNTt6LWluZGV4OjJ9LnRhYnMuaXMtdG9nZ2xlIGxpK2xpe21hcmdpbi1sZWZ0Oi0xcHh9LnRhYnMuaXMtdG9nZ2xlIGxpOmZpcnN0LWNoaWxkIGF7Ym9yZGVyLXJhZGl1czozcHggMCAwIDNweH0udGFicy5pcy10b2dnbGUgbGk6bGFzdC1jaGlsZCBhe2JvcmRlci1yYWRpdXM6MCAzcHggM3B4IDB9LnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhe2JhY2tncm91bmQtY29sb3I6IzMyNzNkYztib3JkZXItY29sb3I6IzMyNzNkYztjb2xvcjojZmZmO3otaW5kZXg6MX0udGFicy5pcy10b2dnbGUgdWx7Ym9yZGVyLWJvdHRvbTpub25lfS50YWJzLmlzLXNtYWxse2ZvbnQtc2l6ZTouNzVyZW19LnRhYnMuaXMtbWVkaXVte2ZvbnQtc2l6ZToxLjI1cmVtfS50YWJzLmlzLWxhcmdle2ZvbnQtc2l6ZToxLjVyZW19LmNvbHVtbntkaXNwbGF5OmJsb2NrOy1tcy1mbGV4LXByZWZlcnJlZC1zaXplOjA7ZmxleC1iYXNpczowOy13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjE7ZmxleC1zaHJpbms6MTtwYWRkaW5nOi43NXJlbX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1mdWxsLC5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW5hcnJvd3std2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtZnVsbHt3aWR0aDoxMDAlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLXRocmVlLXF1YXJ0ZXJzey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo3NSV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtdHdvLXRoaXJkc3std2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjYuNjY2NiV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtaGFsZnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTAlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9uZS10aGlyZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb25lLXF1YXJ0ZXJ7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjI1JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vbmUtZmlmdGh7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjIwJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy10d28tZmlmdGhzey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo0MCV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtdGhyZWUtZmlmdGhzey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo2MCV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtZm91ci1maWZ0aHN7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjgwJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtdGhyZWUtcXVhcnRlcnN7bWFyZ2luLWxlZnQ6NzUlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC10d28tdGhpcmRze21hcmdpbi1sZWZ0OjY2LjY2NjYlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC1oYWxme21hcmdpbi1sZWZ0OjUwJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtb25lLXRoaXJke21hcmdpbi1sZWZ0OjMzLjMzMzMlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC1vbmUtcXVhcnRlcnttYXJnaW4tbGVmdDoyNSV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1maWZ0aHttYXJnaW4tbGVmdDoyMCV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LXR3by1maWZ0aHN7bWFyZ2luLWxlZnQ6NDAlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC10aHJlZS1maWZ0aHN7bWFyZ2luLWxlZnQ6NjAlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC1mb3VyLWZpZnRoc3ttYXJnaW4tbGVmdDo4MCV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtMXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6OC4zMzMzMyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LTF7bWFyZ2luLWxlZnQ6OC4zMzMzMyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtMnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MTYuNjY2NjclfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC0ye21hcmdpbi1sZWZ0OjE2LjY2NjY3JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy0zey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoyNSV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LTN7bWFyZ2luLWxlZnQ6MjUlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLTR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjMzLjMzMzMzJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtNHttYXJnaW4tbGVmdDozMy4zMzMzMyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtNXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NDEuNjY2NjclfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC01e21hcmdpbi1sZWZ0OjQxLjY2NjY3JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy02ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1MCV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LTZ7bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLTd7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjU4LjMzMzMzJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy1vZmZzZXQtN3ttYXJnaW4tbGVmdDo1OC4zMzMzMyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtOHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjYuNjY2NjclfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC04e21hcmdpbi1sZWZ0OjY2LjY2NjY3JX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy05ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo3NSV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LTl7bWFyZ2luLWxlZnQ6NzUlfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLTEwey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo4My4zMzMzMyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LTEwe21hcmdpbi1sZWZ0OjgzLjMzMzMzJX0uY29sdW1ucy5pcy1tb2JpbGU+LmNvbHVtbi5pcy0xMXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6OTEuNjY2NjclfS5jb2x1bW5zLmlzLW1vYmlsZT4uY29sdW1uLmlzLW9mZnNldC0xMXttYXJnaW4tbGVmdDo5MS42NjY2NyV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtMTJ7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjEwMCV9LmNvbHVtbnMuaXMtbW9iaWxlPi5jb2x1bW4uaXMtb2Zmc2V0LTEye21hcmdpbi1sZWZ0OjEwMCV9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7LmNvbHVtbi5pcy1mdWxsLW1vYmlsZSwuY29sdW1uLmlzLW5hcnJvdy1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lfS5jb2x1bW4uaXMtZnVsbC1tb2JpbGV7d2lkdGg6MTAwJX0uY29sdW1uLmlzLXRocmVlLXF1YXJ0ZXJzLW1vYmlsZXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NzUlfS5jb2x1bW4uaXMtdHdvLXRoaXJkcy1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjY2LjY2NjYlfS5jb2x1bW4uaXMtaGFsZi1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjUwJX0uY29sdW1uLmlzLW9uZS10aGlyZC1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjMzLjMzMzMlfS5jb2x1bW4uaXMtb25lLXF1YXJ0ZXItbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoyNSV9LmNvbHVtbi5pcy1vbmUtZmlmdGgtbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoyMCV9LmNvbHVtbi5pcy10d28tZmlmdGhzLW1vYmlsZXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NDAlfS5jb2x1bW4uaXMtdGhyZWUtZmlmdGhzLW1vYmlsZXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjAlfS5jb2x1bW4uaXMtZm91ci1maWZ0aHMtbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo4MCV9LmNvbHVtbi5pcy1vZmZzZXQtdGhyZWUtcXVhcnRlcnMtbW9iaWxle21hcmdpbi1sZWZ0Ojc1JX0uY29sdW1uLmlzLW9mZnNldC10d28tdGhpcmRzLW1vYmlsZXttYXJnaW4tbGVmdDo2Ni42NjY2JX0uY29sdW1uLmlzLW9mZnNldC1oYWxmLW1vYmlsZXttYXJnaW4tbGVmdDo1MCV9LmNvbHVtbi5pcy1vZmZzZXQtb25lLXRoaXJkLW1vYmlsZXttYXJnaW4tbGVmdDozMy4zMzMzJX0uY29sdW1uLmlzLW9mZnNldC1vbmUtcXVhcnRlci1tb2JpbGV7bWFyZ2luLWxlZnQ6MjUlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1maWZ0aC1tb2JpbGV7bWFyZ2luLWxlZnQ6MjAlfS5jb2x1bW4uaXMtb2Zmc2V0LXR3by1maWZ0aHMtbW9iaWxle21hcmdpbi1sZWZ0OjQwJX0uY29sdW1uLmlzLW9mZnNldC10aHJlZS1maWZ0aHMtbW9iaWxle21hcmdpbi1sZWZ0OjYwJX0uY29sdW1uLmlzLW9mZnNldC1mb3VyLWZpZnRocy1tb2JpbGV7bWFyZ2luLWxlZnQ6ODAlfS5jb2x1bW4uaXMtMS1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjguMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTEtbW9iaWxle21hcmdpbi1sZWZ0OjguMzMzMzMlfS5jb2x1bW4uaXMtMi1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjE2LjY2NjY3JX0uY29sdW1uLmlzLW9mZnNldC0yLW1vYmlsZXttYXJnaW4tbGVmdDoxNi42NjY2NyV9LmNvbHVtbi5pcy0zLW1vYmlsZXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb2Zmc2V0LTMtbW9iaWxle21hcmdpbi1sZWZ0OjI1JX0uY29sdW1uLmlzLTQtbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDozMy4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtNC1tb2JpbGV7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5jb2x1bW4uaXMtNS1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjQxLjY2NjY3JX0uY29sdW1uLmlzLW9mZnNldC01LW1vYmlsZXttYXJnaW4tbGVmdDo0MS42NjY2NyV9LmNvbHVtbi5pcy02LW1vYmlsZXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LTYtbW9iaWxle21hcmdpbi1sZWZ0OjUwJX0uY29sdW1uLmlzLTctbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1OC4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtNy1tb2JpbGV7bWFyZ2luLWxlZnQ6NTguMzMzMzMlfS5jb2x1bW4uaXMtOC1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjY2LjY2NjY3JX0uY29sdW1uLmlzLW9mZnNldC04LW1vYmlsZXttYXJnaW4tbGVmdDo2Ni42NjY2NyV9LmNvbHVtbi5pcy05LW1vYmlsZXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NzUlfS5jb2x1bW4uaXMtb2Zmc2V0LTktbW9iaWxle21hcmdpbi1sZWZ0Ojc1JX0uY29sdW1uLmlzLTEwLW1vYmlsZXstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6ODMuMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTEwLW1vYmlsZXttYXJnaW4tbGVmdDo4My4zMzMzMyV9LmNvbHVtbi5pcy0xMS1tb2JpbGV7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjkxLjY2NjY3JX0uY29sdW1uLmlzLW9mZnNldC0xMS1tb2JpbGV7bWFyZ2luLWxlZnQ6OTEuNjY2NjclfS5jb2x1bW4uaXMtMTItbW9iaWxley13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoxMDAlfS5jb2x1bW4uaXMtb2Zmc2V0LTEyLW1vYmlsZXttYXJnaW4tbGVmdDoxMDAlfX1AbWVkaWEgcHJpbnQsc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsuY29sdW1uLmlzLWZ1bGwsLmNvbHVtbi5pcy1mdWxsLXRhYmxldCwuY29sdW1uLmlzLW5hcnJvdywuY29sdW1uLmlzLW5hcnJvdy10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lfS5jb2x1bW4uaXMtZnVsbCwuY29sdW1uLmlzLWZ1bGwtdGFibGV0e3dpZHRoOjEwMCV9LmNvbHVtbi5pcy10aHJlZS1xdWFydGVycywuY29sdW1uLmlzLXRocmVlLXF1YXJ0ZXJzLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NzUlfS5jb2x1bW4uaXMtdHdvLXRoaXJkcywuY29sdW1uLmlzLXR3by10aGlyZHMtdGFibGV0ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2JX0uY29sdW1uLmlzLWhhbGYsLmNvbHVtbi5pcy1oYWxmLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTAlfS5jb2x1bW4uaXMtb25lLXRoaXJkLC5jb2x1bW4uaXMtb25lLXRoaXJkLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMyV9LmNvbHVtbi5pcy1vbmUtcXVhcnRlciwuY29sdW1uLmlzLW9uZS1xdWFydGVyLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb25lLWZpZnRoLC5jb2x1bW4uaXMtb25lLWZpZnRoLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjAlfS5jb2x1bW4uaXMtdHdvLWZpZnRocywuY29sdW1uLmlzLXR3by1maWZ0aHMtdGFibGV0ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo0MCV9LmNvbHVtbi5pcy10aHJlZS1maWZ0aHMsLmNvbHVtbi5pcy10aHJlZS1maWZ0aHMtdGFibGV0ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo2MCV9LmNvbHVtbi5pcy1mb3VyLWZpZnRocywuY29sdW1uLmlzLWZvdXItZmlmdGhzLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6ODAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLXF1YXJ0ZXJzLC5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLXF1YXJ0ZXJzLXRhYmxldHttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy1vZmZzZXQtdHdvLXRoaXJkcywuY29sdW1uLmlzLW9mZnNldC10d28tdGhpcmRzLXRhYmxldHttYXJnaW4tbGVmdDo2Ni42NjY2JX0uY29sdW1uLmlzLW9mZnNldC1oYWxmLC5jb2x1bW4uaXMtb2Zmc2V0LWhhbGYtdGFibGV0e21hcmdpbi1sZWZ0OjUwJX0uY29sdW1uLmlzLW9mZnNldC1vbmUtdGhpcmQsLmNvbHVtbi5pcy1vZmZzZXQtb25lLXRoaXJkLXRhYmxldHttYXJnaW4tbGVmdDozMy4zMzMzJX0uY29sdW1uLmlzLW9mZnNldC1vbmUtcXVhcnRlciwuY29sdW1uLmlzLW9mZnNldC1vbmUtcXVhcnRlci10YWJsZXR7bWFyZ2luLWxlZnQ6MjUlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1maWZ0aCwuY29sdW1uLmlzLW9mZnNldC1vbmUtZmlmdGgtdGFibGV0e21hcmdpbi1sZWZ0OjIwJX0uY29sdW1uLmlzLW9mZnNldC10d28tZmlmdGhzLC5jb2x1bW4uaXMtb2Zmc2V0LXR3by1maWZ0aHMtdGFibGV0e21hcmdpbi1sZWZ0OjQwJX0uY29sdW1uLmlzLW9mZnNldC10aHJlZS1maWZ0aHMsLmNvbHVtbi5pcy1vZmZzZXQtdGhyZWUtZmlmdGhzLXRhYmxldHttYXJnaW4tbGVmdDo2MCV9LmNvbHVtbi5pcy1vZmZzZXQtZm91ci1maWZ0aHMsLmNvbHVtbi5pcy1vZmZzZXQtZm91ci1maWZ0aHMtdGFibGV0e21hcmdpbi1sZWZ0OjgwJX0uY29sdW1uLmlzLTEsLmNvbHVtbi5pcy0xLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6OC4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtMSwuY29sdW1uLmlzLW9mZnNldC0xLXRhYmxldHttYXJnaW4tbGVmdDo4LjMzMzMzJX0uY29sdW1uLmlzLTIsLmNvbHVtbi5pcy0yLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MTYuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTIsLmNvbHVtbi5pcy1vZmZzZXQtMi10YWJsZXR7bWFyZ2luLWxlZnQ6MTYuNjY2NjclfS5jb2x1bW4uaXMtMywuY29sdW1uLmlzLTMtdGFibGV0ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoyNSV9LmNvbHVtbi5pcy1vZmZzZXQtMywuY29sdW1uLmlzLW9mZnNldC0zLXRhYmxldHttYXJnaW4tbGVmdDoyNSV9LmNvbHVtbi5pcy00LC5jb2x1bW4uaXMtNC10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjMzLjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC00LC5jb2x1bW4uaXMtb2Zmc2V0LTQtdGFibGV0e21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0uY29sdW1uLmlzLTUsLmNvbHVtbi5pcy01LXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NDEuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTUsLmNvbHVtbi5pcy1vZmZzZXQtNS10YWJsZXR7bWFyZ2luLWxlZnQ6NDEuNjY2NjclfS5jb2x1bW4uaXMtNiwuY29sdW1uLmlzLTYtdGFibGV0ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1MCV9LmNvbHVtbi5pcy1vZmZzZXQtNiwuY29sdW1uLmlzLW9mZnNldC02LXRhYmxldHttYXJnaW4tbGVmdDo1MCV9LmNvbHVtbi5pcy03LC5jb2x1bW4uaXMtNy10YWJsZXR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjU4LjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC03LC5jb2x1bW4uaXMtb2Zmc2V0LTctdGFibGV0e21hcmdpbi1sZWZ0OjU4LjMzMzMzJX0uY29sdW1uLmlzLTgsLmNvbHVtbi5pcy04LXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjYuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTgsLmNvbHVtbi5pcy1vZmZzZXQtOC10YWJsZXR7bWFyZ2luLWxlZnQ6NjYuNjY2NjclfS5jb2x1bW4uaXMtOSwuY29sdW1uLmlzLTktdGFibGV0ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo3NSV9LmNvbHVtbi5pcy1vZmZzZXQtOSwuY29sdW1uLmlzLW9mZnNldC05LXRhYmxldHttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy0xMCwuY29sdW1uLmlzLTEwLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6ODMuMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTEwLC5jb2x1bW4uaXMtb2Zmc2V0LTEwLXRhYmxldHttYXJnaW4tbGVmdDo4My4zMzMzMyV9LmNvbHVtbi5pcy0xMSwuY29sdW1uLmlzLTExLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6OTEuNjY2NjclfS5jb2x1bW4uaXMtb2Zmc2V0LTExLC5jb2x1bW4uaXMtb2Zmc2V0LTExLXRhYmxldHttYXJnaW4tbGVmdDo5MS42NjY2NyV9LmNvbHVtbi5pcy0xMiwuY29sdW1uLmlzLTEyLXRhYmxldHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MTAwJX0uY29sdW1uLmlzLW9mZnNldC0xMiwuY29sdW1uLmlzLW9mZnNldC0xMi10YWJsZXR7bWFyZ2luLWxlZnQ6MTAwJX19QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5jb2x1bW4uaXMtZnVsbC10b3VjaCwuY29sdW1uLmlzLW5hcnJvdy10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmV9LmNvbHVtbi5pcy1mdWxsLXRvdWNoe3dpZHRoOjEwMCV9LmNvbHVtbi5pcy10aHJlZS1xdWFydGVycy10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NzUlfS5jb2x1bW4uaXMtdHdvLXRoaXJkcy10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjYuNjY2NiV9LmNvbHVtbi5pcy1oYWxmLXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1MCV9LmNvbHVtbi5pcy1vbmUtdGhpcmQtdG91Y2h7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjMzLjMzMzMlfS5jb2x1bW4uaXMtb25lLXF1YXJ0ZXItdG91Y2h7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjI1JX0uY29sdW1uLmlzLW9uZS1maWZ0aC10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjAlfS5jb2x1bW4uaXMtdHdvLWZpZnRocy10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NDAlfS5jb2x1bW4uaXMtdGhyZWUtZmlmdGhzLXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo2MCV9LmNvbHVtbi5pcy1mb3VyLWZpZnRocy10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6ODAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLXF1YXJ0ZXJzLXRvdWNoe21hcmdpbi1sZWZ0Ojc1JX0uY29sdW1uLmlzLW9mZnNldC10d28tdGhpcmRzLXRvdWNoe21hcmdpbi1sZWZ0OjY2LjY2NjYlfS5jb2x1bW4uaXMtb2Zmc2V0LWhhbGYtdG91Y2h7bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS10aGlyZC10b3VjaHttYXJnaW4tbGVmdDozMy4zMzMzJX0uY29sdW1uLmlzLW9mZnNldC1vbmUtcXVhcnRlci10b3VjaHttYXJnaW4tbGVmdDoyNSV9LmNvbHVtbi5pcy1vZmZzZXQtb25lLWZpZnRoLXRvdWNoe21hcmdpbi1sZWZ0OjIwJX0uY29sdW1uLmlzLW9mZnNldC10d28tZmlmdGhzLXRvdWNoe21hcmdpbi1sZWZ0OjQwJX0uY29sdW1uLmlzLW9mZnNldC10aHJlZS1maWZ0aHMtdG91Y2h7bWFyZ2luLWxlZnQ6NjAlfS5jb2x1bW4uaXMtb2Zmc2V0LWZvdXItZmlmdGhzLXRvdWNoe21hcmdpbi1sZWZ0OjgwJX0uY29sdW1uLmlzLTEtdG91Y2h7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjguMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTEtdG91Y2h7bWFyZ2luLWxlZnQ6OC4zMzMzMyV9LmNvbHVtbi5pcy0yLXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoxNi42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMi10b3VjaHttYXJnaW4tbGVmdDoxNi42NjY2NyV9LmNvbHVtbi5pcy0zLXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoyNSV9LmNvbHVtbi5pcy1vZmZzZXQtMy10b3VjaHttYXJnaW4tbGVmdDoyNSV9LmNvbHVtbi5pcy00LXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDozMy4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtNC10b3VjaHttYXJnaW4tbGVmdDozMy4zMzMzMyV9LmNvbHVtbi5pcy01LXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo0MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtNS10b3VjaHttYXJnaW4tbGVmdDo0MS42NjY2NyV9LmNvbHVtbi5pcy02LXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1MCV9LmNvbHVtbi5pcy1vZmZzZXQtNi10b3VjaHttYXJnaW4tbGVmdDo1MCV9LmNvbHVtbi5pcy03LXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1OC4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtNy10b3VjaHttYXJnaW4tbGVmdDo1OC4zMzMzMyV9LmNvbHVtbi5pcy04LXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtOC10b3VjaHttYXJnaW4tbGVmdDo2Ni42NjY2NyV9LmNvbHVtbi5pcy05LXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo3NSV9LmNvbHVtbi5pcy1vZmZzZXQtOS10b3VjaHttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy0xMC10b3VjaHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6ODMuMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTEwLXRvdWNoe21hcmdpbi1sZWZ0OjgzLjMzMzMzJX0uY29sdW1uLmlzLTExLXRvdWNoey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo5MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMTEtdG91Y2h7bWFyZ2luLWxlZnQ6OTEuNjY2NjclfS5jb2x1bW4uaXMtMTItdG91Y2h7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjEwMCV9LmNvbHVtbi5pcy1vZmZzZXQtMTItdG91Y2h7bWFyZ2luLWxlZnQ6MTAwJX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpey5jb2x1bW4uaXMtZnVsbC1kZXNrdG9wLC5jb2x1bW4uaXMtbmFycm93LWRlc2t0b3B7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lfS5jb2x1bW4uaXMtZnVsbC1kZXNrdG9we3dpZHRoOjEwMCV9LmNvbHVtbi5pcy10aHJlZS1xdWFydGVycy1kZXNrdG9wey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo3NSV9LmNvbHVtbi5pcy10d28tdGhpcmRzLWRlc2t0b3B7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjY2LjY2NjYlfS5jb2x1bW4uaXMtaGFsZi1kZXNrdG9wey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1MCV9LmNvbHVtbi5pcy1vbmUtdGhpcmQtZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMyV9LmNvbHVtbi5pcy1vbmUtcXVhcnRlci1kZXNrdG9wey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoyNSV9LmNvbHVtbi5pcy1vbmUtZmlmdGgtZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjAlfS5jb2x1bW4uaXMtdHdvLWZpZnRocy1kZXNrdG9wey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo0MCV9LmNvbHVtbi5pcy10aHJlZS1maWZ0aHMtZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjAlfS5jb2x1bW4uaXMtZm91ci1maWZ0aHMtZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6ODAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLXF1YXJ0ZXJzLWRlc2t0b3B7bWFyZ2luLWxlZnQ6NzUlfS5jb2x1bW4uaXMtb2Zmc2V0LXR3by10aGlyZHMtZGVza3RvcHttYXJnaW4tbGVmdDo2Ni42NjY2JX0uY29sdW1uLmlzLW9mZnNldC1oYWxmLWRlc2t0b3B7bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS10aGlyZC1kZXNrdG9we21hcmdpbi1sZWZ0OjMzLjMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1xdWFydGVyLWRlc2t0b3B7bWFyZ2luLWxlZnQ6MjUlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1maWZ0aC1kZXNrdG9we21hcmdpbi1sZWZ0OjIwJX0uY29sdW1uLmlzLW9mZnNldC10d28tZmlmdGhzLWRlc2t0b3B7bWFyZ2luLWxlZnQ6NDAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLWZpZnRocy1kZXNrdG9we21hcmdpbi1sZWZ0OjYwJX0uY29sdW1uLmlzLW9mZnNldC1mb3VyLWZpZnRocy1kZXNrdG9we21hcmdpbi1sZWZ0OjgwJX0uY29sdW1uLmlzLTEtZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6OC4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtMS1kZXNrdG9we21hcmdpbi1sZWZ0OjguMzMzMzMlfS5jb2x1bW4uaXMtMi1kZXNrdG9wey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoxNi42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMi1kZXNrdG9we21hcmdpbi1sZWZ0OjE2LjY2NjY3JX0uY29sdW1uLmlzLTMtZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb2Zmc2V0LTMtZGVza3RvcHttYXJnaW4tbGVmdDoyNSV9LmNvbHVtbi5pcy00LWRlc2t0b3B7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjMzLjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC00LWRlc2t0b3B7bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5jb2x1bW4uaXMtNS1kZXNrdG9wey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo0MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtNS1kZXNrdG9we21hcmdpbi1sZWZ0OjQxLjY2NjY3JX0uY29sdW1uLmlzLTYtZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LTYtZGVza3RvcHttYXJnaW4tbGVmdDo1MCV9LmNvbHVtbi5pcy03LWRlc2t0b3B7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjU4LjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC03LWRlc2t0b3B7bWFyZ2luLWxlZnQ6NTguMzMzMzMlfS5jb2x1bW4uaXMtOC1kZXNrdG9wey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtOC1kZXNrdG9we21hcmdpbi1sZWZ0OjY2LjY2NjY3JX0uY29sdW1uLmlzLTktZGVza3RvcHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NzUlfS5jb2x1bW4uaXMtb2Zmc2V0LTktZGVza3RvcHttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy0xMC1kZXNrdG9wey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo4My4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtMTAtZGVza3RvcHttYXJnaW4tbGVmdDo4My4zMzMzMyV9LmNvbHVtbi5pcy0xMS1kZXNrdG9wey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo5MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMTEtZGVza3RvcHttYXJnaW4tbGVmdDo5MS42NjY2NyV9LmNvbHVtbi5pcy0xMi1kZXNrdG9wey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoxMDAlfS5jb2x1bW4uaXMtb2Zmc2V0LTEyLWRlc2t0b3B7bWFyZ2luLWxlZnQ6MTAwJX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjE2cHgpey5jb2x1bW4uaXMtZnVsbC13aWRlc2NyZWVuLC5jb2x1bW4uaXMtbmFycm93LXdpZGVzY3JlZW57LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lfS5jb2x1bW4uaXMtZnVsbC13aWRlc2NyZWVue3dpZHRoOjEwMCV9LmNvbHVtbi5pcy10aHJlZS1xdWFydGVycy13aWRlc2NyZWVuey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo3NSV9LmNvbHVtbi5pcy10d28tdGhpcmRzLXdpZGVzY3JlZW57LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjY2LjY2NjYlfS5jb2x1bW4uaXMtaGFsZi13aWRlc2NyZWVuey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1MCV9LmNvbHVtbi5pcy1vbmUtdGhpcmQtd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMyV9LmNvbHVtbi5pcy1vbmUtcXVhcnRlci13aWRlc2NyZWVuey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoyNSV9LmNvbHVtbi5pcy1vbmUtZmlmdGgtd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjAlfS5jb2x1bW4uaXMtdHdvLWZpZnRocy13aWRlc2NyZWVuey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo0MCV9LmNvbHVtbi5pcy10aHJlZS1maWZ0aHMtd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NjAlfS5jb2x1bW4uaXMtZm91ci1maWZ0aHMtd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6ODAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLXF1YXJ0ZXJzLXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6NzUlfS5jb2x1bW4uaXMtb2Zmc2V0LXR3by10aGlyZHMtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo2Ni42NjY2JX0uY29sdW1uLmlzLW9mZnNldC1oYWxmLXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS10aGlyZC13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjMzLjMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1xdWFydGVyLXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6MjUlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS1maWZ0aC13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjIwJX0uY29sdW1uLmlzLW9mZnNldC10d28tZmlmdGhzLXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6NDAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLWZpZnRocy13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjYwJX0uY29sdW1uLmlzLW9mZnNldC1mb3VyLWZpZnRocy13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjgwJX0uY29sdW1uLmlzLTEtd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6OC4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtMS13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjguMzMzMzMlfS5jb2x1bW4uaXMtMi13aWRlc2NyZWVuey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoxNi42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMi13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjE2LjY2NjY3JX0uY29sdW1uLmlzLTMtd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb2Zmc2V0LTMtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDoyNSV9LmNvbHVtbi5pcy00LXdpZGVzY3JlZW57LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjMzLjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC00LXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6MzMuMzMzMzMlfS5jb2x1bW4uaXMtNS13aWRlc2NyZWVuey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo0MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtNS13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjQxLjY2NjY3JX0uY29sdW1uLmlzLTYtd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LTYtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo1MCV9LmNvbHVtbi5pcy03LXdpZGVzY3JlZW57LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjU4LjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC03LXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6NTguMzMzMzMlfS5jb2x1bW4uaXMtOC13aWRlc2NyZWVuey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtOC13aWRlc2NyZWVue21hcmdpbi1sZWZ0OjY2LjY2NjY3JX0uY29sdW1uLmlzLTktd2lkZXNjcmVlbnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NzUlfS5jb2x1bW4uaXMtb2Zmc2V0LTktd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy0xMC13aWRlc2NyZWVuey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo4My4zMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtMTAtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo4My4zMzMzMyV9LmNvbHVtbi5pcy0xMS13aWRlc2NyZWVuey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo5MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMTEtd2lkZXNjcmVlbnttYXJnaW4tbGVmdDo5MS42NjY2NyV9LmNvbHVtbi5pcy0xMi13aWRlc2NyZWVuey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoxMDAlfS5jb2x1bW4uaXMtb2Zmc2V0LTEyLXdpZGVzY3JlZW57bWFyZ2luLWxlZnQ6MTAwJX19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDA4cHgpey5jb2x1bW4uaXMtZnVsbC1mdWxsaGQsLmNvbHVtbi5pcy1uYXJyb3ctZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZX0uY29sdW1uLmlzLWZ1bGwtZnVsbGhke3dpZHRoOjEwMCV9LmNvbHVtbi5pcy10aHJlZS1xdWFydGVycy1mdWxsaGR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLXR3by10aGlyZHMtZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2JX0uY29sdW1uLmlzLWhhbGYtZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo1MCV9LmNvbHVtbi5pcy1vbmUtdGhpcmQtZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDozMy4zMzMzJX0uY29sdW1uLmlzLW9uZS1xdWFydGVyLWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjUlfS5jb2x1bW4uaXMtb25lLWZpZnRoLWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MjAlfS5jb2x1bW4uaXMtdHdvLWZpZnRocy1mdWxsaGR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjQwJX0uY29sdW1uLmlzLXRocmVlLWZpZnRocy1mdWxsaGR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjYwJX0uY29sdW1uLmlzLWZvdXItZmlmdGhzLWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6ODAlfS5jb2x1bW4uaXMtb2Zmc2V0LXRocmVlLXF1YXJ0ZXJzLWZ1bGxoZHttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy1vZmZzZXQtdHdvLXRoaXJkcy1mdWxsaGR7bWFyZ2luLWxlZnQ6NjYuNjY2NiV9LmNvbHVtbi5pcy1vZmZzZXQtaGFsZi1mdWxsaGR7bWFyZ2luLWxlZnQ6NTAlfS5jb2x1bW4uaXMtb2Zmc2V0LW9uZS10aGlyZC1mdWxsaGR7bWFyZ2luLWxlZnQ6MzMuMzMzMyV9LmNvbHVtbi5pcy1vZmZzZXQtb25lLXF1YXJ0ZXItZnVsbGhke21hcmdpbi1sZWZ0OjI1JX0uY29sdW1uLmlzLW9mZnNldC1vbmUtZmlmdGgtZnVsbGhke21hcmdpbi1sZWZ0OjIwJX0uY29sdW1uLmlzLW9mZnNldC10d28tZmlmdGhzLWZ1bGxoZHttYXJnaW4tbGVmdDo0MCV9LmNvbHVtbi5pcy1vZmZzZXQtdGhyZWUtZmlmdGhzLWZ1bGxoZHttYXJnaW4tbGVmdDo2MCV9LmNvbHVtbi5pcy1vZmZzZXQtZm91ci1maWZ0aHMtZnVsbGhke21hcmdpbi1sZWZ0OjgwJX0uY29sdW1uLmlzLTEtZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo4LjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC0xLWZ1bGxoZHttYXJnaW4tbGVmdDo4LjMzMzMzJX0uY29sdW1uLmlzLTItZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDoxNi42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMi1mdWxsaGR7bWFyZ2luLWxlZnQ6MTYuNjY2NjclfS5jb2x1bW4uaXMtMy1mdWxsaGR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjI1JX0uY29sdW1uLmlzLW9mZnNldC0zLWZ1bGxoZHttYXJnaW4tbGVmdDoyNSV9LmNvbHVtbi5pcy00LWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MzMuMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTQtZnVsbGhke21hcmdpbi1sZWZ0OjMzLjMzMzMzJX0uY29sdW1uLmlzLTUtZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo0MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtNS1mdWxsaGR7bWFyZ2luLWxlZnQ6NDEuNjY2NjclfS5jb2x1bW4uaXMtNi1mdWxsaGR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjUwJX0uY29sdW1uLmlzLW9mZnNldC02LWZ1bGxoZHttYXJnaW4tbGVmdDo1MCV9LmNvbHVtbi5pcy03LWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6NTguMzMzMzMlfS5jb2x1bW4uaXMtb2Zmc2V0LTctZnVsbGhke21hcmdpbi1sZWZ0OjU4LjMzMzMzJX0uY29sdW1uLmlzLTgtZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo2Ni42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtOC1mdWxsaGR7bWFyZ2luLWxlZnQ6NjYuNjY2NjclfS5jb2x1bW4uaXMtOS1mdWxsaGR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjc1JX0uY29sdW1uLmlzLW9mZnNldC05LWZ1bGxoZHttYXJnaW4tbGVmdDo3NSV9LmNvbHVtbi5pcy0xMC1mdWxsaGR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lO3dpZHRoOjgzLjMzMzMzJX0uY29sdW1uLmlzLW9mZnNldC0xMC1mdWxsaGR7bWFyZ2luLWxlZnQ6ODMuMzMzMzMlfS5jb2x1bW4uaXMtMTEtZnVsbGhkey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZTt3aWR0aDo5MS42NjY2NyV9LmNvbHVtbi5pcy1vZmZzZXQtMTEtZnVsbGhke21hcmdpbi1sZWZ0OjkxLjY2NjY3JX0uY29sdW1uLmlzLTEyLWZ1bGxoZHstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmU7d2lkdGg6MTAwJX0uY29sdW1uLmlzLW9mZnNldC0xMi1mdWxsaGR7bWFyZ2luLWxlZnQ6MTAwJX19LmNvbHVtbnN7bWFyZ2luLWxlZnQ6LS43NXJlbTttYXJnaW4tcmlnaHQ6LS43NXJlbTttYXJnaW4tdG9wOi0uNzVyZW19LmNvbHVtbnM6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOi0uNzVyZW19LmNvbHVtbnM6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjAuNzVyZW19LmNvbHVtbnMuaXMtY2VudGVyZWR7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uY29sdW1ucy5pcy1nYXBsZXNze21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLXRvcDowfS5jb2x1bW5zLmlzLWdhcGxlc3M+LmNvbHVtbnttYXJnaW46MDtwYWRkaW5nOjAhaW1wb3J0YW50fS5jb2x1bW5zLmlzLWdhcGxlc3M6bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tYm90dG9tOjEuNXJlbX0uY29sdW1ucy5pcy1nYXBsZXNzOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTowfS5jb2x1bW5zLmlzLW1vYmlsZXtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS5jb2x1bW5zLmlzLW11bHRpbGluZXstbXMtZmxleC13cmFwOndyYXA7ZmxleC13cmFwOndyYXB9LmNvbHVtbnMuaXMtdmNlbnRlcmVkey13ZWJraXQtYm94LWFsaWduOmNlbnRlcjstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyfUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5jb2x1bW5zOm5vdCguaXMtZGVza3RvcCl7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH19QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI0cHgpey5jb2x1bW5zLmlzLWRlc2t0b3B7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleH19LmNvbHVtbnMuaXMtdmFyaWFibGV7LS1jb2x1bW5HYXA6MC43NXJlbTttYXJnaW4tbGVmdDpjYWxjKC0xICogdmFyKC0tY29sdW1uR2FwKSk7bWFyZ2luLXJpZ2h0OmNhbGMoLTEgKiB2YXIoLS1jb2x1bW5HYXApKX0uY29sdW1ucy5pcy12YXJpYWJsZSAuY29sdW1ue3BhZGRpbmctbGVmdDp2YXIoLS1jb2x1bW5HYXApO3BhZGRpbmctcmlnaHQ6dmFyKC0tY29sdW1uR2FwKX0uY29sdW1ucy5pcy12YXJpYWJsZS5pcy0wey0tY29sdW1uR2FwOjByZW19LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtMXstLWNvbHVtbkdhcDowLjI1cmVtfS5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTJ7LS1jb2x1bW5HYXA6MC41cmVtfS5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTN7LS1jb2x1bW5HYXA6MC43NXJlbX0uY29sdW1ucy5pcy12YXJpYWJsZS5pcy00ey0tY29sdW1uR2FwOjFyZW19LmNvbHVtbnMuaXMtdmFyaWFibGUuaXMtNXstLWNvbHVtbkdhcDoxLjI1cmVtfS5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTZ7LS1jb2x1bW5HYXA6MS41cmVtfS5jb2x1bW5zLmlzLXZhcmlhYmxlLmlzLTd7LS1jb2x1bW5HYXA6MS43NXJlbX0uY29sdW1ucy5pcy12YXJpYWJsZS5pcy04ey0tY29sdW1uR2FwOjJyZW19LnRpbGV7LXdlYmtpdC1ib3gtYWxpZ246c3RyZXRjaDstbXMtZmxleC1hbGlnbjpzdHJldGNoO2FsaWduLWl0ZW1zOnN0cmV0Y2g7ZGlzcGxheTpibG9jazstbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTowO2ZsZXgtYmFzaXM6MDstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXgtcG9zaXRpdmU6MTtmbGV4LWdyb3c6MTstbXMtZmxleC1uZWdhdGl2ZToxO2ZsZXgtc2hyaW5rOjE7bWluLWhlaWdodDotd2Via2l0LW1pbi1jb250ZW50O21pbi1oZWlnaHQ6LW1vei1taW4tY29udGVudDttaW4taGVpZ2h0Om1pbi1jb250ZW50fS50aWxlLmlzLWFuY2VzdG9ye21hcmdpbi1sZWZ0Oi0uNzVyZW07bWFyZ2luLXJpZ2h0Oi0uNzVyZW07bWFyZ2luLXRvcDotLjc1cmVtfS50aWxlLmlzLWFuY2VzdG9yOmxhc3QtY2hpbGR7bWFyZ2luLWJvdHRvbTotLjc1cmVtfS50aWxlLmlzLWFuY2VzdG9yOm5vdCg6bGFzdC1jaGlsZCl7bWFyZ2luLWJvdHRvbTouNzVyZW19LnRpbGUuaXMtY2hpbGR7bWFyZ2luOjAhaW1wb3J0YW50fS50aWxlLmlzLXBhcmVudHtwYWRkaW5nOi43NXJlbX0udGlsZS5pcy12ZXJ0aWNhbHstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbn0udGlsZS5pcy12ZXJ0aWNhbD4udGlsZS5pcy1jaGlsZDpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206MS41cmVtIWltcG9ydGFudH1AbWVkaWEgcHJpbnQsc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsudGlsZTpub3QoLmlzLWNoaWxkKXtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS50aWxlLmlzLTF7d2lkdGg6OC4zMzMzMyV9LnRpbGUuaXMtMSwudGlsZS5pcy0yey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZX0udGlsZS5pcy0ye3dpZHRoOjE2LjY2NjY3JX0udGlsZS5pcy0ze3dpZHRoOjI1JX0udGlsZS5pcy0zLC50aWxlLmlzLTR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4Om5vbmU7ZmxleDpub25lfS50aWxlLmlzLTR7d2lkdGg6MzMuMzMzMzMlfS50aWxlLmlzLTV7d2lkdGg6NDEuNjY2NjclfS50aWxlLmlzLTUsLnRpbGUuaXMtNnstd2Via2l0LWJveC1mbGV4OjA7LW1zLWZsZXg6bm9uZTtmbGV4Om5vbmV9LnRpbGUuaXMtNnt3aWR0aDo1MCV9LnRpbGUuaXMtN3t3aWR0aDo1OC4zMzMzMyV9LnRpbGUuaXMtNywudGlsZS5pcy04ey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZX0udGlsZS5pcy04e3dpZHRoOjY2LjY2NjY3JX0udGlsZS5pcy05e3dpZHRoOjc1JX0udGlsZS5pcy05LC50aWxlLmlzLTEwey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZX0udGlsZS5pcy0xMHt3aWR0aDo4My4zMzMzMyV9LnRpbGUuaXMtMTF7d2lkdGg6OTEuNjY2NjclfS50aWxlLmlzLTExLC50aWxlLmlzLTEyey13ZWJraXQtYm94LWZsZXg6MDstbXMtZmxleDpub25lO2ZsZXg6bm9uZX0udGlsZS5pcy0xMnt3aWR0aDoxMDAlfX0uaGVyb3std2Via2l0LWJveC1hbGlnbjpzdHJldGNoOy1tcy1mbGV4LWFsaWduOnN0cmV0Y2g7YWxpZ24taXRlbXM6c3RyZXRjaDtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uOy13ZWJraXQtYm94LXBhY2s6anVzdGlmeTstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lmhlcm8gLm5hdmJhcntiYWNrZ3JvdW5kOm5vbmV9Lmhlcm8gLnRhYnMgdWx7Ym9yZGVyLWJvdHRvbTpub25lfS5oZXJvLmlzLXdoaXRle2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb2xvcjojMGEwYTBhfS5oZXJvLmlzLXdoaXRlIGE6bm90KC5idXR0b24pLC5oZXJvLmlzLXdoaXRlIHN0cm9uZ3tjb2xvcjppbmhlcml0fS5oZXJvLmlzLXdoaXRlIC50aXRsZXtjb2xvcjojMGEwYTBhfS5oZXJvLmlzLXdoaXRlIC5zdWJ0aXRsZXtjb2xvcjpoc2xhKDAsMCUsNCUsLjkpfS5oZXJvLmlzLXdoaXRlIC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy13aGl0ZSAuc3VidGl0bGUgc3Ryb25ne2NvbG9yOiMwYTBhMGF9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5oZXJvLmlzLXdoaXRlIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9fS5oZXJvLmlzLXdoaXRlIC5uYXZiYXItaXRlbSwuaGVyby5pcy13aGl0ZSAubmF2YmFyLWxpbmt7Y29sb3I6aHNsYSgwLDAlLDQlLC43KX0uaGVyby5pcy13aGl0ZSAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5oZXJvLmlzLXdoaXRlIC5uYXZiYXItbGluazpob3ZlciwuaGVyby5pcy13aGl0ZSBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwuaGVyby5pcy13aGl0ZSBhLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2YyZjJmMjtjb2xvcjojMGEwYTBhfS5oZXJvLmlzLXdoaXRlIC50YWJzIGF7Y29sb3I6IzBhMGEwYTtvcGFjaXR5Oi45fS5oZXJvLmlzLXdoaXRlIC50YWJzIGE6aG92ZXIsLmhlcm8uaXMtd2hpdGUgLnRhYnMgbGkuaXMtYWN0aXZlIGF7b3BhY2l0eToxfS5oZXJvLmlzLXdoaXRlIC50YWJzLmlzLWJveGVkIGEsLmhlcm8uaXMtd2hpdGUgLnRhYnMuaXMtdG9nZ2xlIGF7Y29sb3I6IzBhMGEwYX0uaGVyby5pcy13aGl0ZSAudGFicy5pcy1ib3hlZCBhOmhvdmVyLC5oZXJvLmlzLXdoaXRlIC50YWJzLmlzLXRvZ2dsZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDQlLC4xKX0uaGVyby5pcy13aGl0ZSAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy13aGl0ZSAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYTpob3ZlciwuaGVyby5pcy13aGl0ZSAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtd2hpdGUgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtib3JkZXItY29sb3I6IzBhMGEwYTtjb2xvcjojZmZmfS5oZXJvLmlzLXdoaXRlLmlzLWJvbGR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCNlNmU2ZTYsI2ZmZiA3MSUsI2ZmZil9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7Lmhlcm8uaXMtd2hpdGUuaXMtYm9sZCAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCNlNmU2ZTYsI2ZmZiA3MSUsI2ZmZil9fS5oZXJvLmlzLWJsYWNre2JhY2tncm91bmQtY29sb3I6IzBhMGEwYTtjb2xvcjojZmZmfS5oZXJvLmlzLWJsYWNrIGE6bm90KC5idXR0b24pLC5oZXJvLmlzLWJsYWNrIHN0cm9uZ3tjb2xvcjppbmhlcml0fS5oZXJvLmlzLWJsYWNrIC50aXRsZXtjb2xvcjojZmZmfS5oZXJvLmlzLWJsYWNrIC5zdWJ0aXRsZXtjb2xvcjpoc2xhKDAsMCUsMTAwJSwuOSl9Lmhlcm8uaXMtYmxhY2sgLnN1YnRpdGxlIGE6bm90KC5idXR0b24pLC5oZXJvLmlzLWJsYWNrIC5zdWJ0aXRsZSBzdHJvbmd7Y29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7Lmhlcm8uaXMtYmxhY2sgLm5hdmJhci1tZW51e2JhY2tncm91bmQtY29sb3I6IzBhMGEwYX19Lmhlcm8uaXMtYmxhY2sgLm5hdmJhci1pdGVtLC5oZXJvLmlzLWJsYWNrIC5uYXZiYXItbGlua3tjb2xvcjpoc2xhKDAsMCUsMTAwJSwuNyl9Lmhlcm8uaXMtYmxhY2sgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwuaGVyby5pcy1ibGFjayAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtYmxhY2sgYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLmhlcm8uaXMtYmxhY2sgYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7Y29sb3I6I2ZmZn0uaGVyby5pcy1ibGFjayAudGFicyBhe2NvbG9yOiNmZmY7b3BhY2l0eTouOX0uaGVyby5pcy1ibGFjayAudGFicyBhOmhvdmVyLC5oZXJvLmlzLWJsYWNrIC50YWJzIGxpLmlzLWFjdGl2ZSBhe29wYWNpdHk6MX0uaGVyby5pcy1ibGFjayAudGFicy5pcy1ib3hlZCBhLC5oZXJvLmlzLWJsYWNrIC50YWJzLmlzLXRvZ2dsZSBhe2NvbG9yOiNmZmZ9Lmhlcm8uaXMtYmxhY2sgLnRhYnMuaXMtYm94ZWQgYTpob3ZlciwuaGVyby5pcy1ibGFjayAudGFicy5pcy10b2dnbGUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw0JSwuMSl9Lmhlcm8uaXMtYmxhY2sgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtYmxhY2sgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtYmxhY2sgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLWJsYWNrIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6IzBhMGEwYX0uaGVyby5pcy1ibGFjay5pcy1ib2xke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMDAwLCMwYTBhMGEgNzElLCMxODE2MTYpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLmlzLWJsYWNrLmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMDAwLCMwYTBhMGEgNzElLCMxODE2MTYpfX0uaGVyby5pcy1saWdodHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn0uaGVyby5pcy1saWdodCBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1saWdodCBzdHJvbmd7Y29sb3I6aW5oZXJpdH0uaGVyby5pcy1saWdodCAudGl0bGV7Y29sb3I6IzM2MzYzNn0uaGVyby5pcy1saWdodCAuc3VidGl0bGV7Y29sb3I6cmdiYSg1NCw1NCw1NCwuOSl9Lmhlcm8uaXMtbGlnaHQgLnN1YnRpdGxlIGE6bm90KC5idXR0b24pLC5oZXJvLmlzLWxpZ2h0IC5zdWJ0aXRsZSBzdHJvbmd7Y29sb3I6IzM2MzYzNn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7Lmhlcm8uaXMtbGlnaHQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtY29sb3I6I2Y1ZjVmNX19Lmhlcm8uaXMtbGlnaHQgLm5hdmJhci1pdGVtLC5oZXJvLmlzLWxpZ2h0IC5uYXZiYXItbGlua3tjb2xvcjpyZ2JhKDU0LDU0LDU0LC43KX0uaGVyby5pcy1saWdodCAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5oZXJvLmlzLWxpZ2h0IC5uYXZiYXItbGluazpob3ZlciwuaGVyby5pcy1saWdodCBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwuaGVyby5pcy1saWdodCBhLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2U4ZThlODtjb2xvcjojMzYzNjM2fS5oZXJvLmlzLWxpZ2h0IC50YWJzIGF7Y29sb3I6IzM2MzYzNjtvcGFjaXR5Oi45fS5oZXJvLmlzLWxpZ2h0IC50YWJzIGE6aG92ZXIsLmhlcm8uaXMtbGlnaHQgLnRhYnMgbGkuaXMtYWN0aXZlIGF7b3BhY2l0eToxfS5oZXJvLmlzLWxpZ2h0IC50YWJzLmlzLWJveGVkIGEsLmhlcm8uaXMtbGlnaHQgLnRhYnMuaXMtdG9nZ2xlIGF7Y29sb3I6IzM2MzYzNn0uaGVyby5pcy1saWdodCAudGFicy5pcy1ib3hlZCBhOmhvdmVyLC5oZXJvLmlzLWxpZ2h0IC50YWJzLmlzLXRvZ2dsZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDQlLC4xKX0uaGVyby5pcy1saWdodCAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy1saWdodCAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYTpob3ZlciwuaGVyby5pcy1saWdodCAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtbGlnaHQgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtib3JkZXItY29sb3I6IzM2MzYzNjtjb2xvcjojZjVmNWY1fS5oZXJvLmlzLWxpZ2h0LmlzLWJvbGR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCNkZmQ4ZDksI2Y1ZjVmNSA3MSUsI2ZmZil9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7Lmhlcm8uaXMtbGlnaHQuaXMtYm9sZCAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCNkZmQ4ZDksI2Y1ZjVmNSA3MSUsI2ZmZil9fS5oZXJvLmlzLWRhcmt7YmFja2dyb3VuZC1jb2xvcjojMzYzNjM2O2NvbG9yOiNmNWY1ZjV9Lmhlcm8uaXMtZGFyayBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1kYXJrIHN0cm9uZ3tjb2xvcjppbmhlcml0fS5oZXJvLmlzLWRhcmsgLnRpdGxle2NvbG9yOiNmNWY1ZjV9Lmhlcm8uaXMtZGFyayAuc3VidGl0bGV7Y29sb3I6aHNsYSgwLDAlLDk2JSwuOSl9Lmhlcm8uaXMtZGFyayAuc3VidGl0bGUgYTpub3QoLmJ1dHRvbiksLmhlcm8uaXMtZGFyayAuc3VidGl0bGUgc3Ryb25ne2NvbG9yOiNmNWY1ZjV9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5oZXJvLmlzLWRhcmsgLm5hdmJhci1tZW51e2JhY2tncm91bmQtY29sb3I6IzM2MzYzNn19Lmhlcm8uaXMtZGFyayAubmF2YmFyLWl0ZW0sLmhlcm8uaXMtZGFyayAubmF2YmFyLWxpbmt7Y29sb3I6aHNsYSgwLDAlLDk2JSwuNyl9Lmhlcm8uaXMtZGFyayAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5oZXJvLmlzLWRhcmsgLm5hdmJhci1saW5rOmhvdmVyLC5oZXJvLmlzLWRhcmsgYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLmhlcm8uaXMtZGFyayBhLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzI5MjkyOTtjb2xvcjojZjVmNWY1fS5oZXJvLmlzLWRhcmsgLnRhYnMgYXtjb2xvcjojZjVmNWY1O29wYWNpdHk6Ljl9Lmhlcm8uaXMtZGFyayAudGFicyBhOmhvdmVyLC5oZXJvLmlzLWRhcmsgLnRhYnMgbGkuaXMtYWN0aXZlIGF7b3BhY2l0eToxfS5oZXJvLmlzLWRhcmsgLnRhYnMuaXMtYm94ZWQgYSwuaGVyby5pcy1kYXJrIC50YWJzLmlzLXRvZ2dsZSBhe2NvbG9yOiNmNWY1ZjV9Lmhlcm8uaXMtZGFyayAudGFicy5pcy1ib3hlZCBhOmhvdmVyLC5oZXJvLmlzLWRhcmsgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsNCUsLjEpfS5oZXJvLmlzLWRhcmsgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtZGFyayAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYTpob3ZlciwuaGVyby5pcy1kYXJrIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy1kYXJrIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7Ym9yZGVyLWNvbG9yOiNmNWY1ZjU7Y29sb3I6IzM2MzYzNn0uaGVyby5pcy1kYXJrLmlzLWJvbGR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCMxZjE5MWEsIzM2MzYzNiA3MSUsIzQ2NDAzZil9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7Lmhlcm8uaXMtZGFyay5pcy1ib2xkIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxNDFkZWcsIzFmMTkxYSwjMzYzNjM2IDcxJSwjNDY0MDNmKX19Lmhlcm8uaXMtcHJpbWFyeXtiYWNrZ3JvdW5kLWNvbG9yOiMwMGQxYjI7Y29sb3I6I2ZmZn0uaGVyby5pcy1wcmltYXJ5IGE6bm90KC5idXR0b24pLC5oZXJvLmlzLXByaW1hcnkgc3Ryb25ne2NvbG9yOmluaGVyaXR9Lmhlcm8uaXMtcHJpbWFyeSAudGl0bGV7Y29sb3I6I2ZmZn0uaGVyby5pcy1wcmltYXJ5IC5zdWJ0aXRsZXtjb2xvcjpoc2xhKDAsMCUsMTAwJSwuOSl9Lmhlcm8uaXMtcHJpbWFyeSAuc3VidGl0bGUgYTpub3QoLmJ1dHRvbiksLmhlcm8uaXMtcHJpbWFyeSAuc3VidGl0bGUgc3Ryb25ne2NvbG9yOiNmZmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5oZXJvLmlzLXByaW1hcnkgLm5hdmJhci1tZW51e2JhY2tncm91bmQtY29sb3I6IzAwZDFiMn19Lmhlcm8uaXMtcHJpbWFyeSAubmF2YmFyLWl0ZW0sLmhlcm8uaXMtcHJpbWFyeSAubmF2YmFyLWxpbmt7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjcpfS5oZXJvLmlzLXByaW1hcnkgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwuaGVyby5pcy1wcmltYXJ5IC5uYXZiYXItbGluazpob3ZlciwuaGVyby5pcy1wcmltYXJ5IGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5oZXJvLmlzLXByaW1hcnkgYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMGI4OWM7Y29sb3I6I2ZmZn0uaGVyby5pcy1wcmltYXJ5IC50YWJzIGF7Y29sb3I6I2ZmZjtvcGFjaXR5Oi45fS5oZXJvLmlzLXByaW1hcnkgLnRhYnMgYTpob3ZlciwuaGVyby5pcy1wcmltYXJ5IC50YWJzIGxpLmlzLWFjdGl2ZSBhe29wYWNpdHk6MX0uaGVyby5pcy1wcmltYXJ5IC50YWJzLmlzLWJveGVkIGEsLmhlcm8uaXMtcHJpbWFyeSAudGFicy5pcy10b2dnbGUgYXtjb2xvcjojZmZmfS5oZXJvLmlzLXByaW1hcnkgLnRhYnMuaXMtYm94ZWQgYTpob3ZlciwuaGVyby5pcy1wcmltYXJ5IC50YWJzLmlzLXRvZ2dsZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDQlLC4xKX0uaGVyby5pcy1wcmltYXJ5IC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLXByaW1hcnkgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtcHJpbWFyeSAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtcHJpbWFyeSAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiMwMGQxYjJ9Lmhlcm8uaXMtcHJpbWFyeS5pcy1ib2xke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMDA5ZTZjLCMwMGQxYjIgNzElLCMwMGU3ZWIpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLmlzLXByaW1hcnkuaXMtYm9sZCAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCMwMDllNmMsIzAwZDFiMiA3MSUsIzAwZTdlYil9fS5oZXJvLmlzLWxpbmt7YmFja2dyb3VuZC1jb2xvcjojMzI3M2RjO2NvbG9yOiNmZmZ9Lmhlcm8uaXMtbGluayBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1saW5rIHN0cm9uZ3tjb2xvcjppbmhlcml0fS5oZXJvLmlzLWxpbmsgLnRpdGxle2NvbG9yOiNmZmZ9Lmhlcm8uaXMtbGluayAuc3VidGl0bGV7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjkpfS5oZXJvLmlzLWxpbmsgLnN1YnRpdGxlIGE6bm90KC5idXR0b24pLC5oZXJvLmlzLWxpbmsgLnN1YnRpdGxlIHN0cm9uZ3tjb2xvcjojZmZmfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaGVyby5pcy1saW5rIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWNvbG9yOiMzMjczZGN9fS5oZXJvLmlzLWxpbmsgLm5hdmJhci1pdGVtLC5oZXJvLmlzLWxpbmsgLm5hdmJhci1saW5re2NvbG9yOmhzbGEoMCwwJSwxMDAlLC43KX0uaGVyby5pcy1saW5rIC5uYXZiYXItbGluay5pcy1hY3RpdmUsLmhlcm8uaXMtbGluayAubmF2YmFyLWxpbms6aG92ZXIsLmhlcm8uaXMtbGluayBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwuaGVyby5pcy1saW5rIGEubmF2YmFyLWl0ZW06aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMjM2NmQxO2NvbG9yOiNmZmZ9Lmhlcm8uaXMtbGluayAudGFicyBhe2NvbG9yOiNmZmY7b3BhY2l0eTouOX0uaGVyby5pcy1saW5rIC50YWJzIGE6aG92ZXIsLmhlcm8uaXMtbGluayAudGFicyBsaS5pcy1hY3RpdmUgYXtvcGFjaXR5OjF9Lmhlcm8uaXMtbGluayAudGFicy5pcy1ib3hlZCBhLC5oZXJvLmlzLWxpbmsgLnRhYnMuaXMtdG9nZ2xlIGF7Y29sb3I6I2ZmZn0uaGVyby5pcy1saW5rIC50YWJzLmlzLWJveGVkIGE6aG92ZXIsLmhlcm8uaXMtbGluayAudGFicy5pcy10b2dnbGUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw0JSwuMSl9Lmhlcm8uaXMtbGluayAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy1saW5rIC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhOmhvdmVyLC5oZXJvLmlzLWxpbmsgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLWxpbmsgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojMzI3M2RjfS5oZXJvLmlzLWxpbmsuaXMtYm9sZHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxNDFkZWcsIzE1NzdjNiwjMzI3M2RjIDcxJSwjNDM2NmU1KX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGVyby5pcy1saW5rLmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMTU3N2M2LCMzMjczZGMgNzElLCM0MzY2ZTUpfX0uaGVyby5pcy1pbmZve2JhY2tncm91bmQtY29sb3I6IzIwOWNlZTtjb2xvcjojZmZmfS5oZXJvLmlzLWluZm8gYTpub3QoLmJ1dHRvbiksLmhlcm8uaXMtaW5mbyBzdHJvbmd7Y29sb3I6aW5oZXJpdH0uaGVyby5pcy1pbmZvIC50aXRsZXtjb2xvcjojZmZmfS5oZXJvLmlzLWluZm8gLnN1YnRpdGxle2NvbG9yOmhzbGEoMCwwJSwxMDAlLC45KX0uaGVyby5pcy1pbmZvIC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1pbmZvIC5zdWJ0aXRsZSBzdHJvbmd7Y29sb3I6I2ZmZn1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjNweCl7Lmhlcm8uaXMtaW5mbyAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1jb2xvcjojMjA5Y2VlfX0uaGVyby5pcy1pbmZvIC5uYXZiYXItaXRlbSwuaGVyby5pcy1pbmZvIC5uYXZiYXItbGlua3tjb2xvcjpoc2xhKDAsMCUsMTAwJSwuNyl9Lmhlcm8uaXMtaW5mbyAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5oZXJvLmlzLWluZm8gLm5hdmJhci1saW5rOmhvdmVyLC5oZXJvLmlzLWluZm8gYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLmhlcm8uaXMtaW5mbyBhLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzExOGZlNDtjb2xvcjojZmZmfS5oZXJvLmlzLWluZm8gLnRhYnMgYXtjb2xvcjojZmZmO29wYWNpdHk6Ljl9Lmhlcm8uaXMtaW5mbyAudGFicyBhOmhvdmVyLC5oZXJvLmlzLWluZm8gLnRhYnMgbGkuaXMtYWN0aXZlIGF7b3BhY2l0eToxfS5oZXJvLmlzLWluZm8gLnRhYnMuaXMtYm94ZWQgYSwuaGVyby5pcy1pbmZvIC50YWJzLmlzLXRvZ2dsZSBhe2NvbG9yOiNmZmZ9Lmhlcm8uaXMtaW5mbyAudGFicy5pcy1ib3hlZCBhOmhvdmVyLC5oZXJvLmlzLWluZm8gLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsNCUsLjEpfS5oZXJvLmlzLWluZm8gLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtaW5mbyAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYTpob3ZlciwuaGVyby5pcy1pbmZvIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy1pbmZvIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWNvbG9yOiNmZmY7Y29sb3I6IzIwOWNlZX0uaGVyby5pcy1pbmZvLmlzLWJvbGR7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCMwNGE2ZDcsIzIwOWNlZSA3MSUsIzMyODdmNSl9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7Lmhlcm8uaXMtaW5mby5pcy1ib2xkIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxNDFkZWcsIzA0YTZkNywjMjA5Y2VlIDcxJSwjMzI4N2Y1KX19Lmhlcm8uaXMtc3VjY2Vzc3tiYWNrZ3JvdW5kLWNvbG9yOiMyM2QxNjA7Y29sb3I6I2ZmZn0uaGVyby5pcy1zdWNjZXNzIGE6bm90KC5idXR0b24pLC5oZXJvLmlzLXN1Y2Nlc3Mgc3Ryb25ne2NvbG9yOmluaGVyaXR9Lmhlcm8uaXMtc3VjY2VzcyAudGl0bGV7Y29sb3I6I2ZmZn0uaGVyby5pcy1zdWNjZXNzIC5zdWJ0aXRsZXtjb2xvcjpoc2xhKDAsMCUsMTAwJSwuOSl9Lmhlcm8uaXMtc3VjY2VzcyAuc3VidGl0bGUgYTpub3QoLmJ1dHRvbiksLmhlcm8uaXMtc3VjY2VzcyAuc3VidGl0bGUgc3Ryb25ne2NvbG9yOiNmZmZ9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5oZXJvLmlzLXN1Y2Nlc3MgLm5hdmJhci1tZW51e2JhY2tncm91bmQtY29sb3I6IzIzZDE2MH19Lmhlcm8uaXMtc3VjY2VzcyAubmF2YmFyLWl0ZW0sLmhlcm8uaXMtc3VjY2VzcyAubmF2YmFyLWxpbmt7Y29sb3I6aHNsYSgwLDAlLDEwMCUsLjcpfS5oZXJvLmlzLXN1Y2Nlc3MgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwuaGVyby5pcy1zdWNjZXNzIC5uYXZiYXItbGluazpob3ZlciwuaGVyby5pcy1zdWNjZXNzIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLC5oZXJvLmlzLXN1Y2Nlc3MgYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMyMGJjNTY7Y29sb3I6I2ZmZn0uaGVyby5pcy1zdWNjZXNzIC50YWJzIGF7Y29sb3I6I2ZmZjtvcGFjaXR5Oi45fS5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMgYTpob3ZlciwuaGVyby5pcy1zdWNjZXNzIC50YWJzIGxpLmlzLWFjdGl2ZSBhe29wYWNpdHk6MX0uaGVyby5pcy1zdWNjZXNzIC50YWJzLmlzLWJveGVkIGEsLmhlcm8uaXMtc3VjY2VzcyAudGFicy5pcy10b2dnbGUgYXtjb2xvcjojZmZmfS5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMuaXMtYm94ZWQgYTpob3ZlciwuaGVyby5pcy1zdWNjZXNzIC50YWJzLmlzLXRvZ2dsZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDQlLC4xKX0uaGVyby5pcy1zdWNjZXNzIC50YWJzLmlzLWJveGVkIGxpLmlzLWFjdGl2ZSBhLC5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtc3VjY2VzcyAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtc3VjY2VzcyAudGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1jb2xvcjojZmZmO2NvbG9yOiMyM2QxNjB9Lmhlcm8uaXMtc3VjY2Vzcy5pcy1ib2xke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjMTJhZjJmLCMyM2QxNjAgNzElLCMyY2UyOGEpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLmlzLXN1Y2Nlc3MuaXMtYm9sZCAubmF2YmFyLW1lbnV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCMxMmFmMmYsIzIzZDE2MCA3MSUsIzJjZTI4YSl9fS5oZXJvLmlzLXdhcm5pbmd7YmFja2dyb3VuZC1jb2xvcjojZmZkZDU3O2NvbG9yOnJnYmEoMCwwLDAsLjcpfS5oZXJvLmlzLXdhcm5pbmcgYTpub3QoLmJ1dHRvbiksLmhlcm8uaXMtd2FybmluZyBzdHJvbmd7Y29sb3I6aW5oZXJpdH0uaGVyby5pcy13YXJuaW5nIC50aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uaGVyby5pcy13YXJuaW5nIC5zdWJ0aXRsZXtjb2xvcjpyZ2JhKDAsMCwwLC45KX0uaGVyby5pcy13YXJuaW5nIC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy13YXJuaW5nIC5zdWJ0aXRsZSBzdHJvbmd7Y29sb3I6cmdiYSgwLDAsMCwuNyl9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDIzcHgpey5oZXJvLmlzLXdhcm5pbmcgLm5hdmJhci1tZW51e2JhY2tncm91bmQtY29sb3I6I2ZmZGQ1N319Lmhlcm8uaXMtd2FybmluZyAubmF2YmFyLWl0ZW0sLmhlcm8uaXMtd2FybmluZyAubmF2YmFyLWxpbmt7Y29sb3I6cmdiYSgwLDAsMCwuNyl9Lmhlcm8uaXMtd2FybmluZyAubmF2YmFyLWxpbmsuaXMtYWN0aXZlLC5oZXJvLmlzLXdhcm5pbmcgLm5hdmJhci1saW5rOmhvdmVyLC5oZXJvLmlzLXdhcm5pbmcgYS5uYXZiYXItaXRlbS5pcy1hY3RpdmUsLmhlcm8uaXMtd2FybmluZyBhLm5hdmJhci1pdGVtOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZDgzZDtjb2xvcjpyZ2JhKDAsMCwwLC43KX0uaGVyby5pcy13YXJuaW5nIC50YWJzIGF7Y29sb3I6cmdiYSgwLDAsMCwuNyk7b3BhY2l0eTouOX0uaGVyby5pcy13YXJuaW5nIC50YWJzIGE6aG92ZXIsLmhlcm8uaXMtd2FybmluZyAudGFicyBsaS5pcy1hY3RpdmUgYXtvcGFjaXR5OjF9Lmhlcm8uaXMtd2FybmluZyAudGFicy5pcy1ib3hlZCBhLC5oZXJvLmlzLXdhcm5pbmcgLnRhYnMuaXMtdG9nZ2xlIGF7Y29sb3I6cmdiYSgwLDAsMCwuNyl9Lmhlcm8uaXMtd2FybmluZyAudGFicy5pcy1ib3hlZCBhOmhvdmVyLC5oZXJvLmlzLXdhcm5pbmcgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsNCUsLjEpfS5oZXJvLmlzLXdhcm5pbmcgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEsLmhlcm8uaXMtd2FybmluZyAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYTpob3ZlciwuaGVyby5pcy13YXJuaW5nIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy13YXJuaW5nIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjcpO2JvcmRlci1jb2xvcjpyZ2JhKDAsMCwwLC43KTtjb2xvcjojZmZkZDU3fS5oZXJvLmlzLXdhcm5pbmcuaXMtYm9sZHtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxNDFkZWcsI2ZmYWYyNCwjZmZkZDU3IDcxJSwjZmZmYTcwKX1AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXsuaGVyby5pcy13YXJuaW5nLmlzLWJvbGQgLm5hdmJhci1tZW51e2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjZmZhZjI0LCNmZmRkNTcgNzElLCNmZmZhNzApfX0uaGVyby5pcy1kYW5nZXJ7YmFja2dyb3VuZC1jb2xvcjojZmYzODYwO2NvbG9yOiNmZmZ9Lmhlcm8uaXMtZGFuZ2VyIGE6bm90KC5idXR0b24pLC5oZXJvLmlzLWRhbmdlciBzdHJvbmd7Y29sb3I6aW5oZXJpdH0uaGVyby5pcy1kYW5nZXIgLnRpdGxle2NvbG9yOiNmZmZ9Lmhlcm8uaXMtZGFuZ2VyIC5zdWJ0aXRsZXtjb2xvcjpoc2xhKDAsMCUsMTAwJSwuOSl9Lmhlcm8uaXMtZGFuZ2VyIC5zdWJ0aXRsZSBhOm5vdCguYnV0dG9uKSwuaGVyby5pcy1kYW5nZXIgLnN1YnRpdGxlIHN0cm9uZ3tjb2xvcjojZmZmfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyM3B4KXsuaGVyby5pcy1kYW5nZXIgLm5hdmJhci1tZW51e2JhY2tncm91bmQtY29sb3I6I2ZmMzg2MH19Lmhlcm8uaXMtZGFuZ2VyIC5uYXZiYXItaXRlbSwuaGVyby5pcy1kYW5nZXIgLm5hdmJhci1saW5re2NvbG9yOmhzbGEoMCwwJSwxMDAlLC43KX0uaGVyby5pcy1kYW5nZXIgLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwuaGVyby5pcy1kYW5nZXIgLm5hdmJhci1saW5rOmhvdmVyLC5oZXJvLmlzLWRhbmdlciBhLm5hdmJhci1pdGVtLmlzLWFjdGl2ZSwuaGVyby5pcy1kYW5nZXIgYS5uYXZiYXItaXRlbTpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZjFmNGI7Y29sb3I6I2ZmZn0uaGVyby5pcy1kYW5nZXIgLnRhYnMgYXtjb2xvcjojZmZmO29wYWNpdHk6Ljl9Lmhlcm8uaXMtZGFuZ2VyIC50YWJzIGE6aG92ZXIsLmhlcm8uaXMtZGFuZ2VyIC50YWJzIGxpLmlzLWFjdGl2ZSBhe29wYWNpdHk6MX0uaGVyby5pcy1kYW5nZXIgLnRhYnMuaXMtYm94ZWQgYSwuaGVyby5pcy1kYW5nZXIgLnRhYnMuaXMtdG9nZ2xlIGF7Y29sb3I6I2ZmZn0uaGVyby5pcy1kYW5nZXIgLnRhYnMuaXMtYm94ZWQgYTpob3ZlciwuaGVyby5pcy1kYW5nZXIgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsNCUsLjEpfS5oZXJvLmlzLWRhbmdlciAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy1kYW5nZXIgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsLmhlcm8uaXMtZGFuZ2VyIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYSwuaGVyby5pcy1kYW5nZXIgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItY29sb3I6I2ZmZjtjb2xvcjojZmYzODYwfS5oZXJvLmlzLWRhbmdlci5pcy1ib2xke2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDE0MWRlZywjZmYwNTYxLCNmZjM4NjAgNzElLCNmZjUyNTcpfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLmlzLWRhbmdlci5pcy1ib2xkIC5uYXZiYXItbWVudXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudCgxNDFkZWcsI2ZmMDU2MSwjZmYzODYwIDcxJSwjZmY1MjU3KX19Lmhlcm8uaXMtc21hbGwgLmhlcm8tYm9keXtwYWRkaW5nLWJvdHRvbToxLjVyZW07cGFkZGluZy10b3A6MS41cmVtfUBtZWRpYSBwcmludCxzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY5cHgpey5oZXJvLmlzLW1lZGl1bSAuaGVyby1ib2R5e3BhZGRpbmctYm90dG9tOjlyZW07cGFkZGluZy10b3A6OXJlbX19QG1lZGlhIHByaW50LHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjlweCl7Lmhlcm8uaXMtbGFyZ2UgLmhlcm8tYm9keXtwYWRkaW5nLWJvdHRvbToxOHJlbTtwYWRkaW5nLXRvcDoxOHJlbX19Lmhlcm8uaXMtZnVsbGhlaWdodCAuaGVyby1ib2R5LC5oZXJvLmlzLWhhbGZoZWlnaHQgLmhlcm8tYm9keXstd2Via2l0LWJveC1hbGlnbjpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS5oZXJvLmlzLWZ1bGxoZWlnaHQgLmhlcm8tYm9keT4uY29udGFpbmVyLC5oZXJvLmlzLWhhbGZoZWlnaHQgLmhlcm8tYm9keT4uY29udGFpbmVyey13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleC1wb3NpdGl2ZToxO2ZsZXgtZ3JvdzoxOy1tcy1mbGV4LW5lZ2F0aXZlOjE7ZmxleC1zaHJpbms6MX0uaGVyby5pcy1oYWxmaGVpZ2h0e21pbi1oZWlnaHQ6NTB2aH0uaGVyby5pcy1mdWxsaGVpZ2h0e21pbi1oZWlnaHQ6MTAwdmh9Lmhlcm8tdmlkZW97Ym90dG9tOjA7bGVmdDowO3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7b3ZlcmZsb3c6aGlkZGVufS5oZXJvLXZpZGVvIHZpZGVve2xlZnQ6NTAlO21pbi1oZWlnaHQ6MTAwJTttaW4td2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKC01MCUsLTUwJSwwKTt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoLTUwJSwtNTAlLDApfS5oZXJvLXZpZGVvLmlzLXRyYW5zcGFyZW50e29wYWNpdHk6LjN9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCl7Lmhlcm8tdmlkZW97ZGlzcGxheTpub25lfX0uaGVyby1idXR0b25ze21hcmdpbi10b3A6MS41cmVtfUBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpey5oZXJvLWJ1dHRvbnMgLmJ1dHRvbntkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4fS5oZXJvLWJ1dHRvbnMgLmJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpe21hcmdpbi1ib3R0b206Ljc1cmVtfX1AbWVkaWEgcHJpbnQsc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsuaGVyby1idXR0b25ze2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtcGFjazpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uaGVyby1idXR0b25zIC5idXR0b246bm90KDpsYXN0LWNoaWxkKXttYXJnaW4tcmlnaHQ6MS41cmVtfX0uaGVyby1mb290LC5oZXJvLWhlYWR7LXdlYmtpdC1ib3gtZmxleDowOy1tcy1mbGV4LXBvc2l0aXZlOjA7ZmxleC1ncm93OjB9Lmhlcm8tYm9keSwuaGVyby1mb290LC5oZXJvLWhlYWR7LW1zLWZsZXgtbmVnYXRpdmU6MDtmbGV4LXNocmluazowfS5oZXJvLWJvZHl7LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4LXBvc2l0aXZlOjE7ZmxleC1ncm93OjF9Lmhlcm8tYm9keSwuc2VjdGlvbntwYWRkaW5nOjNyZW0gMS41cmVtfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTAyNHB4KXsuc2VjdGlvbi5pcy1tZWRpdW17cGFkZGluZzo5cmVtIDEuNXJlbX0uc2VjdGlvbi5pcy1sYXJnZXtwYWRkaW5nOjE4cmVtIDEuNXJlbX19LmZvb3RlcntiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjU7cGFkZGluZzozcmVtIDEuNXJlbSA2cmVtfVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9idWxtYS9jc3MvYnVsbWEuY3NzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMC0xIS4vc3R5bGUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0wLTEhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTAtMSEuL3N0eWxlLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jc3Mvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/e1xcXCJtaW5pbWl6ZVxcXCI6dHJ1ZX0hLi4vY3NzL2dyaWQuY3NzXCIpLCBcIlwiKTtcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz97XFxcIm1pbmltaXplXFxcIjp0cnVlfSEuLi9jc3Mvc3VwZXJmaXNoLmNzc1wiKSwgXCJcIik7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaW5wdXR7b3V0bGluZTpub25lIWltcG9ydGFudDtib3JkZXItcmFkaXVzOjAhaW1wb3J0YW50fWh0bWx7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvdmVyZmxvdy15OmF1dG99Ym9keXttaW4taGVpZ2h0OjEwMCV9YVtocmVmXj1cXFwidGVsOlxcXCJde2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Knstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6bm9uZX0ubXl0YWluZXJ7bWF4LXdpZHRoOjk2MHB4O3dpZHRoOjk2MHB4O21hcmdpbjphdXRvfWJvZHl7Zm9udDoxMnB4LzE4cHggQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7Y29sb3I6Izc2NzE3MTtwb3NpdGlvbjpyZWxhdGl2ZTttaW4td2lkdGg6OTYwcHg7YmFja2dyb3VuZC1zaXplOmNvbnRhaW59Lmlje2JvcmRlcjowO2Zsb2F0OnJpZ2h0O2JhY2tncm91bmQ6I2ZmZjtjb2xvcjpyZWQ7d2lkdGg6NTAlO2xpbmUtaGVpZ2h0OjEwcHg7Zm9udC1zaXplOjEwcHg7bWFyZ2luOi0yMjAlIDAgMDtvdmVyZmxvdzpoaWRkZW47cGFkZGluZzowfWgxLGgyLGgzLGg0LGg1LGg2e2ZvbnQtd2VpZ2h0OjQwMDtmb250LWZhbWlseTpPc3dhbGQsc2Fucy1zZXJpZjtjb2xvcjojMDAwfWgze2ZvbnQtc2l6ZTozMHB4O2xpbmUtaGVpZ2h0OjI0cHg7dG9wOi0zcHg7bWFyZ2luLWJvdHRvbToyM3B4fWgzLGg0e3Bvc2l0aW9uOnJlbGF0aXZlfWg0e2ZvbnQtc2l6ZToxOHB4O2xpbmUtaGVpZ2h0OjE4cHg7bWFyZ2luLXRvcDotNHB4O21hcmdpbi1ib3R0b206MTRweH1we21hcmdpbi1ib3R0b206MThweH1pbWd7bWF4LXdpZHRoOjEwMCV9YWRkcmVzc3tmb250LXN0eWxlOm5vcm1hbH11bHtwYWRkaW5nOjA7bWFyZ2luOjA7bGlzdC1zdHlsZTpub25lfXVsLmxpc3R7b3ZlcmZsb3c6aGlkZGVufXVsLmxpc3QgbGl7cGFkZGluZy1sZWZ0OjExcHh9dWwubGlzdCBsaStsaXttYXJnaW4tdG9wOjlweH1he3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOmluaGVyaXQ7b3V0bGluZTpub25lO3RyYW5zaXRpb246LjVzIGVhc2U7LW8tdHJhbnNpdGlvbjouNXMgZWFzZTstd2Via2l0LXRyYW5zaXRpb246LjVzIGVhc2V9YTpob3Zlcntjb2xvcjojMTRmYTQ2fWEuYnRue2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQ6MThweC8xOHB4IE9zd2FsZCxzYW5zLXNlcmlmO2NvbG9yOiNhYzIxMzU7cGFkZGluZy1yaWdodDoxNXB4O21hcmdpbi1yaWdodDotNDlweDttYXJnaW4tdG9wOjMwcHh9YS5idG46aG92ZXJ7Y29sb3I6IzAwMH0ubWIwe21hcmdpbi1ib3R0b206MCFpbXBvcnRhbnR9Lm0we21hcmdpbjowIWltcG9ydGFudH0ubWIxe21hcmdpbi1ib3R0b206MjVweCFpbXBvcnRhbnR9LmluZDF7bWFyZ2luLXRvcDoxMXB4fS5wYWQwe3BhZGRpbmc6MCFpbXBvcnRhbnR9LnB0MHtwYWRkaW5nLXRvcDowfS5pbWdfaW5uZXJ7bWF4LXdpZHRoOjEwMCU7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW8tYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW4tYm90dG9tOjI4cHg7cG9zaXRpb246cmVsYXRpdmV9LmZsZWZ0e2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjIwcHg7bWFyZ2luLXRvcDowO21hcmdpbi1ib3R0b206MDtib3JkZXI6MXB4IHNvbGlkICNhZjI5M2N9LmZyaWdodHtmbG9hdDpyaWdodCFpbXBvcnRhbnR9LnVwcHt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2V9LmFscmlnaHR7dGV4dC1hbGlnbjpyaWdodH0uY2VudGVye3RleHQtYWxpZ246Y2VudGVyfS5leHRyYV93cmFwcGVyLC53cmFwcGVye292ZXJmbG93OmhpZGRlbn0uY2xlYXJ7ZmxvYXQ6bm9uZSFpbXBvcnRhbnQ7Y2xlYXI6Ym90aH1oZWFkZXJ7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4Ojk5OTttYXJnaW4tYm90dG9tOjYwcHh9aGVhZGVyIGE6aG92ZXJ7Y29sb3I6IzAwMH0ucGFnZTEgaDF7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6NTAlO21hcmdpbi1yaWdodDotNDcwcHh9aDF7ZmxvYXQ6cmlnaHQ7ei1pbmRleDo5OTl9aDEgYXtvdmVyZmxvdzpoaWRkZW47d2lkdGg6MTY0cHg7aGVpZ2h0OjE1MXB4O3RleHQtaW5kZW50Oi05OTlweDt0cmFuc2l0aW9uOjBzIGVhc2U7LW8tdHJhbnNpdGlvbjowcyBlYXNlOy13ZWJraXQtdHJhbnNpdGlvbjowcyBlYXNlfWgxIGEsaDEgYSBpbWd7ZGlzcGxheTpibG9ja30jc2VhcmNoe2Zsb2F0OnJpZ2h0O3dpZHRoOjgxcHg7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVuO21hcmdpbi10b3A6MTlweH0jc2VhcmNoIGlucHV0e2JhY2tncm91bmQtY29sb3I6IzY5MTgyODtib3JkZXI6bm9uZTtmbG9hdDpub25lO2hlaWdodDoyNXB4O3BhZGRpbmc6NHB4IDM2cHggM3B4IDEwcHg7Y29sb3I6I2ZmZjtmb250OjEycHgvMThweCBBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjt3aWR0aDoxMDAlOy1tb3otYm94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1vLWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3h9I3NlYXJjaCBhe3dpZHRoOjQwcHg7aGVpZ2h0OjI1cHg7ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowO2N1cnNvcjpwb2ludGVyfSNzZWFyY2ggYTpob3ZlcntvcGFjaXR5Oi41fS5zb2NpYWxze3RleHQtYWxpZ246Y2VudGVyO2Zsb2F0OnJpZ2h0O3BhZGRpbmctdG9wOjE4cHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmctcmlnaHQ6MjVweH0uc29jaWFscyBhe2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bGVmdDt3aWR0aDoyOHB4O2hlaWdodDoyOHB4fS5zb2NpYWxzIGErYXttYXJnaW4tbGVmdDo3cHg7YmFja2dyb3VuZC1wb3NpdGlvbjotMzVweCAwfS5zb2NpYWxzIGErYSthe2JhY2tncm91bmQtcG9zaXRpb246LTcxcHggMH0uc29jaWFscyBhK2ErYSthe2JhY2tncm91bmQtcG9zaXRpb246cmlnaHQgMH0uc29jaWFscyBhOmhvdmVye29wYWNpdHk6Ljd9I2Zvcm0rLnN0eWxlMXttYXJnaW4tcmlnaHQ6LTEwcHh9LmNvbnRlbnR7cGFkZGluZzozMnB4IDgwcHggMzBweDttYXJnaW4tYm90dG9tOjIyM3B4fS5wYWdlMSAuY29udGVudHtwYWRkaW5nLWxlZnQ6MzJweDtwYWRkaW5nLXJpZ2h0OjMycHg7bWFyZ2luLWJvdHRvbTowfS5wYWdlMSAuY29udGVudCBoM3twYWRkaW5nLXRvcDoxcHg7cGFkZGluZy1ib3R0b206MDttYXJnaW4tYm90dG9tOjI3cHh9LnBhZ2UxIC5jb250ZW50IGEuYnRue21hcmdpbi1yaWdodDowO21hcmdpbi10b3A6MjRweH0ucGFnZTEgLmNvbnRlbnQgdWwgc3Bhbntjb2xvcjojMDAwO2ZvbnQtd2VpZ2h0OjYwMH0ucGFnZTEgLmNvbnRlbnQgdWx7cGFkZGluZy10b3A6NXB4fS5wYWdlMSAuY29udGVudCB1bCBsaXtmb250LXNpemU6MTZweH0ucGFnZTEgLmNvbnRlbnQgdWwgbGkrbGl7bWFyZ2luLXRvcDoxNHB4fS5wYWdlMSAuY29udGVudCB1bCBsaStsaStsaStsaXttYXJnaW4tdG9wOjE4cHh9LnBhZ2UxIC5jb250ZW50IGltZ3ttYXJnaW4tbGVmdDoxNnB4O2Zsb2F0OnJpZ2h0fS5wYWdlMSAuY29udGVudCBwLC5zdHlsZTF7Y29sb3I6IzAwMH0ucGFnZTEgLmNvbnRlbnQgcCBhLC5zdHlsZTEgYXtjb2xvcjojZmY0YTRhfS5wYWdlMSAuY29udGVudCBwIGE6aG92ZXIsLnN0eWxlMSBhOmhvdmVye2NvbG9yOiMwMDB9LmJsb2NrMSBoM3ttYXJnaW4tYm90dG9tOjZweH0uYmxvY2sxKy5ibG9jazF7bWFyZ2luLXRvcDo1MXB4fS5jbDF7aGVpZ2h0OjE4cHh9dWwubGlzdDJ7Zm9udC1zaXplOjE2cHg7cGFkZGluZy10b3A6MjBweH11bC5saXN0MiBzcGFue2NvbG9yOiMwMDB9dWwubGlzdDIgbGl7cGFkZGluZy1sZWZ0OjExcHh9dWwubGlzdDIgbGkrbGl7bWFyZ2luLXRvcDoxMHB4fWgzLmhlYWQxe3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDotOHB4fS5ibG9jazIgLmV4dHJhX3dyYXBwZXJ7cGFkZGluZy10b3A6N3B4O21hcmdpbi10b3A6LTVweH0uYmxvY2syIGEuYnRue21hcmdpbi10b3A6MDttYXJnaW4tbGVmdDo3cHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEzcHg7YmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodCAzcHh9LmJsb2NrMisuYmxvY2sye21hcmdpbi10b3A6MjZweH0uY2wye2hlaWdodDo5cHh9LmJsb2NrMiAuZmxlZnR7bWFyZ2luLXRvcDo2cHh9LmJsb2NrMiBoNHttYXJnaW4tYm90dG9tOjhweH11bC5saXN0MyB0aW1le2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZC1jb2xvcjojYWMyMTM1O3dpZHRoOjM0cHg7bWFyZ2luLXJpZ2h0OjhweDtmbG9hdDpsZWZ0O2NvbG9yOiNmZmY7bWFyZ2luLXRvcDotMXB4O3BhZGRpbmctdG9wOjJweDtoZWlnaHQ6MzZweDt0ZXh0LWFsaWduOmNlbnRlcjtmb250OjI0cHgvMThweCBPc3dhbGQsc2Fucy1zZXJpZn11bC5saXN0MyBoNHttYXJnaW4tYm90dG9tOjhweH11bC5saXN0MyB0aW1lIHNwYW57bWFyZ2luLXRvcDotMnB4O2Rpc3BsYXk6YmxvY2s7Zm9udC1zaXplOjE0cHh9dWwubGlzdDMgbGl7cGFkZGluZy10b3A6MnB4fXVsLmxpc3QzIGxpK2xpe21hcmdpbi10b3A6MjRweH11bC5saXN0MyBsaStsaStsaXttYXJnaW4tdG9wOjI1cHh9Lm1hcHtwYWRkaW5nLXRvcDo1cHh9Lm1hcCAudGV4dDF7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHg7cGFkZGluZy1ib3R0b206MTlweH0ubWFwIGZpZ3VyZXt3aWR0aDoxMDAlOy1tb3otYm94LXNpemluZzpib3JkZXItYm94Oy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1vLWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jazttYXJnaW4tYm90dG9tOjI2cHg7Ym9yZGVyOjFweCBzb2xpZCAjYWYyOTNjfS5tYXAgZmlndXJlIGlmcmFtZXt3aWR0aDoxMDAlO2hlaWdodDoyNTVweDttYXgtd2lkdGg6MTAwJX0ubWFwIGFkZHJlc3N7cGFkZGluZy10b3A6MTBweDtvdmVyZmxvdzpoaWRkZW47bGluZS1oZWlnaHQ6MjBweH1hZGRyZXNzIGR0e2NvbG9yOiMwMDB9YWRkcmVzcyBkZCBzcGFue21pbi13aWR0aDo4NXB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtYWxpZ246bGVmdH1mb290ZXJ7Y29sb3I6I2ZmZjtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MjFweCAwO2JvcmRlci10b3A6M3B4IHNvbGlkICNmZjRhNGE7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7cGFkZGluZzoxcmVtO3RleHQtYWxpZ246Y2VudGVyfVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjp0cnVlfSEuL2Nzcy9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7bWluLXdpZHRoOjk2MHB4fS5jb250YWluZXJfMTJ7bWFyZ2luLWxlZnQ6YXV0bzttYXJnaW4tcmlnaHQ6YXV0bzt3aWR0aDo5NjBweH0uZ3JpZF8xLC5ncmlkXzIsLmdyaWRfMywuZ3JpZF80LC5ncmlkXzUsLmdyaWRfNiwuZ3JpZF83LC5ncmlkXzgsLmdyaWRfOSwuZ3JpZF8xMCwuZ3JpZF8xMSwuZ3JpZF8xMntkaXNwbGF5OmlubGluZTtmbG9hdDpsZWZ0O21hcmdpbi1sZWZ0OjEwcHg7bWFyZ2luLXJpZ2h0OjEwcHh9LnB1bGxfMSwucHVsbF8yLC5wdWxsXzMsLnB1bGxfNCwucHVsbF81LC5wdWxsXzYsLnB1bGxfNywucHVsbF84LC5wdWxsXzksLnB1bGxfMTAsLnB1bGxfMTEsLnB1c2hfMSwucHVzaF8yLC5wdXNoXzMsLnB1c2hfNCwucHVzaF81LC5wdXNoXzYsLnB1c2hfNywucHVzaF84LC5wdXNoXzksLnB1c2hfMTAsLnB1c2hfMTF7cG9zaXRpb246cmVsYXRpdmV9LmFscGhhe21hcmdpbi1sZWZ0OjB9Lm9tZWdhe21hcmdpbi1yaWdodDowfS5jb250YWluZXJfMTIgLmdyaWRfMXt3aWR0aDo2MHB4fS5jb250YWluZXJfMTIgLmdyaWRfMnt3aWR0aDoxNDBweH0uY29udGFpbmVyXzEyIC5ncmlkXzN7d2lkdGg6MjIwcHh9LmNvbnRhaW5lcl8xMiAuZ3JpZF80e3dpZHRoOjMwMHB4fS5jb250YWluZXJfMTIgLmdyaWRfNXt3aWR0aDozODBweH0uY29udGFpbmVyXzEyIC5ncmlkXzZ7d2lkdGg6NDYwcHh9LmNvbnRhaW5lcl8xMiAuZ3JpZF83e3dpZHRoOjU0MHB4fS5jb250YWluZXJfMTIgLmdyaWRfOHt3aWR0aDo2MjBweH0uY29udGFpbmVyXzEyIC5ncmlkXzl7d2lkdGg6NzAwcHh9LmNvbnRhaW5lcl8xMiAuZ3JpZF8xMHt3aWR0aDo3ODBweH0uY29udGFpbmVyXzEyIC5ncmlkXzExe3dpZHRoOjg2MHB4fS5jb250YWluZXJfMTIgLmdyaWRfMTJ7d2lkdGg6OTQwcHh9LmNvbnRhaW5lcl8xMiAucHJlZml4XzF7cGFkZGluZy1sZWZ0OjgwcHh9LmNvbnRhaW5lcl8xMiAucHJlZml4XzJ7cGFkZGluZy1sZWZ0OjE2MHB4fS5jb250YWluZXJfMTIgLnByZWZpeF8ze3BhZGRpbmctbGVmdDoyNDBweH0uY29udGFpbmVyXzEyIC5wcmVmaXhfNHtwYWRkaW5nLWxlZnQ6MzIwcHh9LmNvbnRhaW5lcl8xMiAucHJlZml4XzV7cGFkZGluZy1sZWZ0OjQwMHB4fS5jb250YWluZXJfMTIgLnByZWZpeF82e3BhZGRpbmctbGVmdDo0ODBweH0uY29udGFpbmVyXzEyIC5wcmVmaXhfN3twYWRkaW5nLWxlZnQ6NTYwcHh9LmNvbnRhaW5lcl8xMiAucHJlZml4Xzh7cGFkZGluZy1sZWZ0OjY0MHB4fS5jb250YWluZXJfMTIgLnByZWZpeF85e3BhZGRpbmctbGVmdDo3MjBweH0uY29udGFpbmVyXzEyIC5wcmVmaXhfMTB7cGFkZGluZy1sZWZ0OjgwMHB4fS5jb250YWluZXJfMTIgLnByZWZpeF8xMXtwYWRkaW5nLWxlZnQ6ODgwcHh9LmNvbnRhaW5lcl8xMiAuc3VmZml4XzF7cGFkZGluZy1yaWdodDo4MHB4fS5jb250YWluZXJfMTIgLnN1ZmZpeF8ye3BhZGRpbmctcmlnaHQ6MTYwcHh9LmNvbnRhaW5lcl8xMiAuc3VmZml4XzN7cGFkZGluZy1yaWdodDoyNDBweH0uY29udGFpbmVyXzEyIC5zdWZmaXhfNHtwYWRkaW5nLXJpZ2h0OjMyMHB4fS5jb250YWluZXJfMTIgLnN1ZmZpeF81e3BhZGRpbmctcmlnaHQ6NDAwcHh9LmNvbnRhaW5lcl8xMiAuc3VmZml4XzZ7cGFkZGluZy1yaWdodDo0ODBweH0uY29udGFpbmVyXzEyIC5zdWZmaXhfN3twYWRkaW5nLXJpZ2h0OjU2MHB4fS5jb250YWluZXJfMTIgLnN1ZmZpeF84e3BhZGRpbmctcmlnaHQ6NjQwcHh9LmNvbnRhaW5lcl8xMiAuc3VmZml4Xzl7cGFkZGluZy1yaWdodDo3MjBweH0uY29udGFpbmVyXzEyIC5zdWZmaXhfMTB7cGFkZGluZy1yaWdodDo4MDBweH0uY29udGFpbmVyXzEyIC5zdWZmaXhfMTF7cGFkZGluZy1yaWdodDo4ODBweH0uY29udGFpbmVyXzEyIC5wdXNoXzF7bGVmdDo4MHB4fS5jb250YWluZXJfMTIgLnB1c2hfMntsZWZ0OjE2MHB4fS5jb250YWluZXJfMTIgLnB1c2hfM3tsZWZ0OjI0MHB4fS5jb250YWluZXJfMTIgLnB1c2hfNHtsZWZ0OjMyMHB4fS5jb250YWluZXJfMTIgLnB1c2hfNXtsZWZ0OjQwMHB4fS5jb250YWluZXJfMTIgLnB1c2hfNntsZWZ0OjQ4MHB4fS5jb250YWluZXJfMTIgLnB1c2hfN3tsZWZ0OjU2MHB4fS5jb250YWluZXJfMTIgLnB1c2hfOHtsZWZ0OjY0MHB4fS5jb250YWluZXJfMTIgLnB1c2hfOXtsZWZ0OjcyMHB4fS5jb250YWluZXJfMTIgLnB1c2hfMTB7bGVmdDo4MDBweH0uY29udGFpbmVyXzEyIC5wdXNoXzExe2xlZnQ6ODgwcHh9LmNvbnRhaW5lcl8xMiAucHVsbF8xe2xlZnQ6LTgwcHh9LmNvbnRhaW5lcl8xMiAucHVsbF8ye2xlZnQ6LTE2MHB4fS5jb250YWluZXJfMTIgLnB1bGxfM3tsZWZ0Oi0yNDBweH0uY29udGFpbmVyXzEyIC5wdWxsXzR7bGVmdDotMzIwcHh9LmNvbnRhaW5lcl8xMiAucHVsbF81e2xlZnQ6LTQwMHB4fS5jb250YWluZXJfMTIgLnB1bGxfNntsZWZ0Oi00ODBweH0uY29udGFpbmVyXzEyIC5wdWxsXzd7bGVmdDotNTYwcHh9LmNvbnRhaW5lcl8xMiAucHVsbF84e2xlZnQ6LTY0MHB4fS5jb250YWluZXJfMTIgLnB1bGxfOXtsZWZ0Oi03MjBweH0uY29udGFpbmVyXzEyIC5wdWxsXzEwe2xlZnQ6LTgwMHB4fS5jb250YWluZXJfMTIgLnB1bGxfMTF7bGVmdDotODgwcHh9LmNsZWFye2NsZWFyOmJvdGg7ZGlzcGxheTpibG9jaztvdmVyZmxvdzpoaWRkZW47dmlzaWJpbGl0eTpoaWRkZW47d2lkdGg6MDtoZWlnaHQ6MH0uY2xlYXJmaXg6YWZ0ZXIsLmNsZWFyZml4OmJlZm9yZSwuY29udGFpbmVyXzEyOmFmdGVyLC5jb250YWluZXJfMTI6YmVmb3Jle2NvbnRlbnQ6XFxcIi5cXFwiO2Rpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO3Zpc2liaWxpdHk6aGlkZGVuO2ZvbnQtc2l6ZTowO2xpbmUtaGVpZ2h0OjA7d2lkdGg6MDtoZWlnaHQ6MH0uY2xlYXJmaXg6YWZ0ZXIsLmNvbnRhaW5lcl8xMjphZnRlcntjbGVhcjpib3RofS5jbGVhcmZpeCwuY29udGFpbmVyXzEye3pvb206MX1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3tcIm1pbmltaXplXCI6dHJ1ZX0hLi9jc3MvZ3JpZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tZW51X2Jsb2Nre3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6OTk5fW5hdntwb3NpdGlvbjpyZWxhdGl2ZTtwYWRkaW5nOjB9LnNmLW1lbnUgdWx7cG9zaXRpb246YWJzb2x1dGU7dG9wOi05OTlweDtkaXNwbGF5Om5vbmV9LnNmLW1lbnU+bGksLnNmLW1lbnUgbGl7ZmxvYXQ6bGVmdDtwb3NpdGlvbjpyZWxhdGl2ZX0uc2YtbWVudT5saT5he2ZvbnQtc2l6ZToyMHB4O2ZvbnQtZmFtaWx5Ok9zd2FsZCxzYW5zLXNlcmlmO2NvbG9yOiNmZmY7ZGlzcGxheTpibG9jaztsaW5lLWhlaWdodDoyNHB4O3otaW5kZXg6OTk5O3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MTlweCAxNHB4IDIwcHh9LnNmLW1lbnU+bGkuY3VycmVudD5hLC5zZi1tZW51PmxpLnNmSG92ZXI+YSwuc2YtbWVudT5saTpob3Zlcj5hOmhvdmVye2JhY2tncm91bmQtcG9zaXRpb246MCAwO2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojNzUyOTM1fS5zZi1tZW51IGxpLnNmSG92ZXI+dWwsLnNmLW1lbnUgbGkgdWx7dG9wOi0yOHB4O2xlZnQ6MTE0cHg7d2lkdGg6MTQxcHg7ei1pbmRleDo5OTk7cGFkZGluZy10b3A6MjhweDtwYWRkaW5nLWJvdHRvbToyM3B4O2JhY2tncm91bmQtY29sb3I6I2ZmZn0uc2YtbWVudSBsaSB1bCBsaXtwYWRkaW5nLWxlZnQ6MThweDtmbG9hdDpub25lIWltcG9ydGFudDttYXJnaW4tYm90dG9tOjNweH0uc2YtbWVudSBsaSB1bCBsaSBhe3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtmb250OjE2cHgvMTZweCBEb3NpcyxzYW5zLXNlcmlmO3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOiMwMDB9LnNmLW1lbnUgbGkuc2ZIb3ZlciBsaS5zZkhvdmVyPmEsLnNmLW1lbnUgbGkgbGkgYTpob3Zlcntjb2xvcjojZWMwNjA2fVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/e1wibWluaW1pemVcIjp0cnVlfSEuL2Nzcy9zdXBlcmZpc2guY3NzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59O1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5pbXBvcnQgeyBJVmlld0VuZ2luZSB9IGZyb20gXCIuLi8uLi92aWV3ZW5naW5lL2ludGVyZmFjZXMvSVZpZXdFbmdpbmVcIjtcclxuaW1wb3J0IHsgcm91dGVpZ25vcmUgfSBmcm9tIFwiLi4vLi4vcm91dGluZy9jb25jcmV0ZS9kZWNvcmF0b3JzXCI7XHJcbmltcG9ydCB7IFZpZXdNb2RlbCB9IGZyb20gXCIuLi9hYnN0cmFjdC9WaWV3TW9kZWxcIjtcclxuaW1wb3J0IEdlcmFuaXVtQXBwIGZyb20gJy4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwJztcclxubGV0IFZpZXdNb2RlbEV4aXN0ZWQgPSBjbGFzcyBWaWV3TW9kZWxFeGlzdGVkIGV4dGVuZHMgVmlld01vZGVsIHtcclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgeWllbGQgR2VyYW5pdW1BcHAucmVzb2x2ZShJVmlld0VuZ2luZSkuZXhlY3V0ZSh7XHJcbiAgICAgICAgICAgICAgICBpVmlld2VkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5WaWV3TW9kZWxFeGlzdGVkID0gX19kZWNvcmF0ZShbXHJcbiAgICByb3V0ZWlnbm9yZVxyXG5dLCBWaWV3TW9kZWxFeGlzdGVkKTtcclxuZXhwb3J0IHsgVmlld01vZGVsRXhpc3RlZCB9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1WaWV3TW9kZWxFeGlzdGVkLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvY29uY3JldGUvVmlld01vZGVsRXhpc3RlZC5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgVmlld01vZGVsRmlsZSB9IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZ2VyYW5pdW0vdmlld21vZGVscy9jb25jcmV0ZS9WaWV3TW9kZWxGaWxlXCI7XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2ggZXh0ZW5kcyBWaWV3TW9kZWxGaWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5odG1sRmlsZVVybCA9IFwiLi9zcmMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmh0bWxcIjtcclxuICAgIH1cclxuICAgIGNsaWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hWaWV3LmNsaWNrJyk7XHJcbiAgICB9XHJcbiAgICBjaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaFZpZXcuY2hhbmdlJyk7XHJcbiAgICB9XHJcbiAgICBibHVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hWaWV3LmJsdXInKTtcclxuICAgIH1cclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZWFyY2guanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuaW1wb3J0IHsgVmlld01vZGVsIH0gZnJvbSBcIi4uL2Fic3RyYWN0L1ZpZXdNb2RlbFwiO1xyXG5pbXBvcnQgR2VyYW5pdW1BcHAgZnJvbSBcIi4uLy4uL3J1bnRpbWUvY29uY3JldGUvQXBwXCI7XHJcbmltcG9ydCB7IElSZXF1ZXN0IH0gZnJvbSBcIi4uLy4uL2JhY2tlbmQvaW50ZXJmYWNlcy9JUmVxdWVzdFwiO1xyXG5pbXBvcnQgeyBWaWV3RE9NIH0gZnJvbSBcIi4uLy4uL3ZpZXdET00vYWJzdHJhY3QvVmlld0RPTVwiO1xyXG5pbXBvcnQgeyB0b0h0bWxBcnJheSB9IGZyb20gXCIuLi8uLi9leHRlbnNpb25zL0h0bWxFbGVtZW50RXh0ZW5zaW9uc1wiO1xyXG5leHBvcnQgY2xhc3MgVmlld01vZGVsRmlsZSBleHRlbmRzIFZpZXdNb2RlbCB7XHJcbiAgICB2aWV3KCkge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuaHRtbEZpbGVVcmw7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgRmlsZVZpZXdET00ge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUdlcmFuaXVtQXBwLmlzcmVnaXN0ZXJlZChUZW1wbGF0ZUNhY2hlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEdlcmFuaXVtQXBwLnJlZ2lzdGVyKFRlbXBsYXRlQ2FjaGUsIG5ldyBUZW1wbGF0ZUNhY2hlKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGUgPSBHZXJhbml1bUFwcC5yZXNvbHZlKFRlbXBsYXRlQ2FjaGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVJdGVtID0gY2FjaGUuaXRlbXMuZmluZChjID0+IGMudXJsID09IHVybCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FjaGVJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odG1sID0gY2FjaGVJdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cmwgPSB1cmw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEZpbGVWaWV3RE9NIGV4dGVuZHMgVmlld0RPTSB7XHJcbiAgICBET00oKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgeWllbGQgdGhpcy5wcmVwYXJlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmlubmVySFRNTCA9IHRoaXMuaHRtbDtcclxuICAgICAgICAgICAgcmV0dXJuIHRvSHRtbEFycmF5KHdyYXBwZXIuY2hpbGROb2Rlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcmVwYXJlKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5sb2FkZWQpIHtcclxuICAgICAgICAgICAgICAgIHlpZWxkIHRoaXMubG9hZFRlbXBsYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGdldCBsb2FkZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5odG1sO1xyXG4gICAgfVxyXG4gICAgbG9hZFRlbXBsYXRlKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBHZXJhbml1bUFwcC5yZXNvbHZlKElSZXF1ZXN0KTtcclxuICAgICAgICAgICAgdGhpcy5odG1sID0geWllbGQgcmVxdWVzdC5zZW5kKHsgbWV0aG9kOiBcIkdFVFwiLCB1cmw6IHRoaXMudXJsLCBhc3luYzogdHJ1ZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNhY2hlKCkge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlID0gR2VyYW5pdW1BcHAucmVzb2x2ZShUZW1wbGF0ZUNhY2hlKTtcclxuICAgICAgICBjYWNoZS5pdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgdXJsOiB0aGlzLnVybCxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMuaHRtbFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFRlbXBsYXRlQ2FjaGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFRlbXBsYXRlQ2FjaGVJdGVtIHtcclxufVxyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1WaWV3TW9kZWxGaWxlLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2dlcmFuaXVtL3ZpZXdtb2RlbHMvY29uY3JldGUvVmlld01vZGVsRmlsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
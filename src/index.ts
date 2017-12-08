import { App } from "./components/app";
import GeraniumApp from "../node_modules/geranium/runtime/concrete/App";
import { InMemoryContainer } from "../node_modules/geranium/coherence/concrete/InMemoryContainer";
import { IRouter } from "../node_modules/geranium/routing/interfaces/IRouter";
import { BasicRouter } from "../node_modules/geranium/routing/concrete/BasicRouter";
import { IHistory } from "../node_modules/geranium/history/interfaces/IHistory";
import { Html5HistoryAPI } from "../node_modules/geranium/history/concrete/Html5HistoryAPI";
import { IViewEngine } from "../node_modules/geranium/viewengine/interfaces/iviewengine";
import { BaseViewEngine } from "../node_modules/geranium/viewengine/concrete/BaseViewEngine";
import { ITemplateEngine } from "../node_modules/geranium/templating/interfaces/ITemplateEngine";
import { ClientTemplateEngine } from "../node_modules/geranium/templating/concrete/mustache/ClientTemplateEngine";
import { IViewBinder } from "../node_modules/geranium/viewbinding/interfaces/IViewBinder";
import { BaseViewBinder } from "../node_modules/geranium/viewbinding/concrete/BaseViewBinder";
import { ILogger } from "../node_modules/geranium/exceptions/logging/interfaces/ILogger";
import { ConsoleLogger } from "../node_modules/geranium/exceptions/logging/concrete/ConsoleLogger";
import { IStateManager } from "../node_modules/geranium/states/interfaces/IStateManager";

GeraniumApp.container = new InMemoryContainer();
GeraniumApp.container.register(IRouter, new BasicRouter());
GeraniumApp.container.register(IHistory, new Html5HistoryAPI());
GeraniumApp.container.register(IViewEngine, new BaseViewEngine());
GeraniumApp.container.register(ITemplateEngine, new ClientTemplateEngine());
GeraniumApp.container.register(IViewBinder, new BaseViewBinder());
GeraniumApp.container.register(ILogger, new ConsoleLogger());
GeraniumApp.container.register(IStateManager, new InMemoryContainer());

new App();
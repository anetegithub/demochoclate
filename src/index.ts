import { App } from "./components/app";
import GeraniumApp from "../node_modules/geranium/runtime/concrete/App";
import { setTimeout } from "timers";
import { IBinding } from "../node_modules/geranium/binding/interfaces/IBinding";
import { MustacheBind } from "./binders/MustacheBind";
require("bulma-carousel/carousel.js");
require("bulma-carousel/bulma-carousel.css");
require("bulma/css/bulma.css");
require("../css/style.css");

GeraniumApp.start({});
GeraniumApp.register(IBinding, new MustacheBind());
new App();
setTimeout(() => document.querySelector("#preloader").remove(), 2600);
import { App } from "./components/app";
import GeraniumApp from "../node_modules/geranium/runtime/concrete/App";
import { setTimeout } from "timers";
require("bulma-carousel/carousel.js");
require("bulma-carousel/bulma-carousel.css");
require("bulma/css/bulma.css");
require("../css/style.css");

GeraniumApp.start({});
new App().show("body");

setTimeout(() => document.querySelector("#preloader").remove(), 1);
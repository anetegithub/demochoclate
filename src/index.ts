import { App } from "./components/app";
import GeraniumApp from "../node_modules/geranium/runtime/concrete/App";
require("bulma-carousel/carousel.js");
require("bulma-carousel/bulma-carousel.css");
require("bulma/css/bulma.css");

GeraniumApp.start({});
new App().show("body");

document.querySelector("#preloader").remove();
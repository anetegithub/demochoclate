var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ViewModel } from "../../node_modules/geranium/viewmodels/abstract/ViewModel";
import { routeroot } from "../../node_modules/geranium/routing/concrete/decorators";
import { promised } from "../../node_modules/geranium/structures/Promised";
import { ViewDOM } from "../../node_modules/geranium/viewDOM/abstract/ViewDOM";
let App = class App extends ViewModel {
    view() {
        return Header;
    }
    documentTitle() {
        return 'Chocolatium | Home';
    }
};
App = __decorate([
    routeroot
], App);
export { App };
class Header extends ViewDOM {
    DOM() {
        return promised(document.querySelector(".page1"));
    }
}
//# sourceMappingURL=app.js.map
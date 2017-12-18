import { ViewModel } from "../../node_modules/geranium/viewmodels/abstract/ViewModel";
import { promised } from "../../node_modules/geranium/structures/Promised";
import { View } from "../../node_modules/geranium/view/abstract/View";
import { ViewDOM } from "../../node_modules/geranium/viewDOM/abstract/ViewDOM";
// @routeroot
export class App extends ViewModel {
    constructor() {
        super(...arguments);
        this.nowYear = (new Date()).getFullYear();
    }
    view() {
        return Header;
    }
    sayHello() {
    }
    documentTitle() {
        return 'Chocolatium | Home';
    }
}
class Header extends ViewDOM {
    DOM() {
        return promised(document.querySelector(".page1"));
    }
}
class HeaderView extends View {
    declare() {
        return "</h1>Header</h1>";
    }
}
//# sourceMappingURL=app.js.map
import { ViewModel as vm } from "../../node_modules/geranium/viewmodels/abstract/ViewModel";
import { promised } from "../../node_modules/geranium/structures/Promised";
import { ViewDOM } from "../../node_modules/geranium/viewDOM/abstract/ViewDOM";
import { CategoryButton } from "./categoryButton/categoryButton";
// @routeroot
export class App extends vm {
    constructor() {
        super();
        this.nowYear = (new Date()).getFullYear();
        this.btns = [];
        this.btns.push(...[
            new CategoryButton("Темный"),
            new CategoryButton("Молочный"),
            new CategoryButton("Белый"),
        ]);
    }
    view() {
        return Header;
    }
    documentTitle() {
        return 'Chocolatium | Home';
    }
}
class Header extends ViewDOM {
    DOM() {
        return promised([document.querySelector(".page1")]);
    }
}
//# sourceMappingURL=app.js.map
import { promised } from "../../node_modules/geranium/structures/Promised";
import { ViewDOM } from "../../node_modules/geranium/viewDOM/abstract/ViewDOM";
import { CategoryButton } from "./categoryButton/categoryButton";
import { Header } from "./header/header";
import { ViewModelExisted } from "../../node_modules/geranium/viewmodels/concrete/ViewModelExisted";
import { Search } from "./search/search";
// @routeroot
export class App extends ViewModelExisted {
    constructor() {
        super();
        this.nowYear = (new Date()).getFullYear();
        this.btns = [];
        this.header = new Header();
        this.search = new Search();
        this.btns.push(...[
            new CategoryButton("Темный"),
            new CategoryButton("Молочный"),
            new CategoryButton("Белый"),
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
class AppView extends ViewDOM {
    DOM() {
        return promised([document.querySelector(".page1")]);
    }
}
//# sourceMappingURL=app.js.map
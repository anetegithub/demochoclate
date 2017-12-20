import { ViewModel } from "../../node_modules/geranium/viewmodels/abstract/ViewModel";
import { promised } from "../../node_modules/geranium/structures/Promised";
import { ViewDOM } from "../../node_modules/geranium/viewDOM/abstract/ViewDOM";
import { CategoryButton } from "./categoryButton/categoryButton";
import { Header } from "./header/header";
import GeraniumApp from '../../node_modules/geranium/runtime/concrete/App';
import { IViewEngine } from "../../node_modules/geranium/viewengine/interfaces/IViewEngine";
// @routeroot
export class App extends ViewModel {
    constructor() {
        super();
        this.nowYear = (new Date()).getFullYear();
        this.btns = [];
        this.header = new Header();
        debugger;
        this.btns.push(...[
            new CategoryButton("Темный"),
            new CategoryButton("Молочный"),
            new CategoryButton("Белый"),
        ]);
        GeraniumApp.resolve(IViewEngine).execute({
            iViewed: this.header,
            selector: ''
        });
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
import { promised } from "../../node_modules/geranium/structures/Promised";
import { ViewDOM } from "../../node_modules/geranium/viewDOM/abstract/ViewDOM";
import { Toast } from "../../node_modules/tstoast/Toast";
import { CategoryButton } from "./categoryButton/categoryButton";
import { Header } from "./header/header";
import { ViewModelExisted } from "../../node_modules/geranium/viewmodels/concrete/ViewModelExisted";
// @routeroot
export class App extends ViewModelExisted {
    constructor() {
        super();
        this.nowYear = (new Date()).getFullYear();
        this.btns = [];
        this.header = new Header();
        this.btns.push(...[
            new CategoryButton("Темный"),
            new CategoryButton("Молочный"),
            new CategoryButton("Белый"),
        ]);
        // this.header.show();
    }
    view() {
        return AppView;
    }
    toast() {
        new Toast({
            text: 'toast body'
        });
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
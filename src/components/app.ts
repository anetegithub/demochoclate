import { ViewModel as vm } from "../../node_modules/geranium/viewmodels/abstract/ViewModel";
import { routeroot, routed } from "../../node_modules/geranium/routing/concrete/decorators";
import { promised } from "../../node_modules/geranium/structures/Promised";
import { View } from "../../node_modules/geranium/view/abstract/View";
import { ViewDOM } from "../../node_modules/geranium/viewDOM/abstract/ViewDOM";
import { Toast } from "../../node_modules/tstoast/Toast";
import { CategoryButton } from "./categoryButton/categoryButton";
import { Constructor } from "../../node_modules/geranium/structures/Constructor";

// @routeroot
export class App extends vm {

    constructor() {
        super();
        this.btns.push(...[
            new CategoryButton("Темный"),
            new CategoryButton("Молочный"),
            new CategoryButton("Белый"),

        ]);
    }

    view(): string | (new (...args: any[]) => View) | (new (...args: any[]) => ViewDOM) {
        return Header;
    }

    nowYear = (new Date()).getFullYear();
    btns: Array<CategoryButton> = [];

    documentTitle() {
        return 'Chocolatium | Home';
    }
}

class Header extends ViewDOM {
    DOM(): Promise<HTMLElement[]> {
        return promised([document.querySelector(".page1") as HTMLElement]);
    }
}
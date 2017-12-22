import { routeroot, routed } from "../../node_modules/geranium/routing/concrete/decorators";
import { promised } from "../../node_modules/geranium/structures/Promised";
import { View } from "../../node_modules/geranium/view/abstract/View";
import { ViewDOM } from "../../node_modules/geranium/viewDOM/abstract/ViewDOM";
import { Toast } from "../../node_modules/tstoast/Toast";
import { CategoryButton } from "./categoryButton/categoryButton";
import { Constructor } from "../../node_modules/geranium/structures/Constructor";
import { Header } from "./header/header";
import GeraniumApp from '../../node_modules/geranium/runtime/concrete/App';
import { IViewEngine } from "../../node_modules/geranium/viewengine/interfaces/IViewEngine";
import { ViewModelExisted } from "../../node_modules/geranium/viewmodels/concrete/ViewModelExisted";
import { Search } from "./search/search";

// @routeroot
export class App extends ViewModelExisted {
    constructor() {
        super();
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

    nowYear = (new Date()).getFullYear();
    btns: Array<CategoryButton> = [];
    header: Header = new Header();

    documentTitle() {
        return 'Chocolatium | Home';
    }
}

class AppView extends ViewDOM {
    DOM(): Promise<HTMLElement[]> {
        return promised([document.querySelector(".page1") as HTMLElement]);
    }
}
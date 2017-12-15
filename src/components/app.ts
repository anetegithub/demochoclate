import { ViewModel } from "../../node_modules/geranium/viewmodels/abstract/ViewModel";
import { routeroot, routed } from "../../node_modules/geranium/routing/concrete/decorators";
import { promised } from "../../node_modules/geranium/structures/Promised";
import { View } from "../../node_modules/geranium/view/abstract/View";
import { ViewDOM } from "../../node_modules/geranium/viewDOM/abstract/ViewDOM";
import { Toast } from "../../node_modules/tstoast/Toast";

@routed("/hello/world/app")
export class App extends ViewModel {
    view(): string | (new (...args: any[]) => View) | (new (...args: any[]) => ViewDOM) {
        return Header;
    }

    sayHello() {

    }

    documentTitle() {
        return 'Chocolatium | Home';
    }
}

class Header extends ViewDOM {
    DOM(): Promise<HTMLElement> {
        return promised(document.querySelector(".page1"));
    }
}

class HeaderView extends View {
    declare() {
        return "</h1>Header</h1>";
    }
}
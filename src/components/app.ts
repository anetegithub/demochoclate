
import { ViewModel } from "../../node_modules/geranium/viewmodels/abstract/ViewModel";
import { routeroot } from "../../node_modules/geranium/routing/concrete/decorators";
import { promised } from "../../node_modules/geranium/structures/Promised";
import { View } from "../../node_modules/geranium/view/abstract/View";
import { ViewDOM } from "../../node_modules/geranium/viewDOM/abstract/ViewDOM";

@routeroot
export class App extends ViewModel {
    view(): string | (new (...args: any[]) => View) | (new (...args: any[]) => ViewDOM) {
        return Header;
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
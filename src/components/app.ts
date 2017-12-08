
import { ViewModel } from "../../node_modules/geranium/viewmodels/abstract/ViewModel";
import { View } from "../../node_modules/geranium/view/abstract/view";
import { routeroot } from "../../node_modules/geranium/routing/concrete/decorators";

@routeroot
export class App extends ViewModel {
    view(): string | (new (selector: string) => View) {
        return "<h1>Hello world!</h1>"
    }
}
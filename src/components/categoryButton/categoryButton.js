import { ViewModel } from "../../../node_modules/geranium/viewmodels/abstract/ViewModel";
import { CategoryButtonView } from "./categoryButtonView";
export class CategoryButton extends ViewModel {
    constructor(text) {
        super();
        this.text = text;
    }
    view() {
        return CategoryButtonView;
    }
}
//# sourceMappingURL=categoryButton.js.map
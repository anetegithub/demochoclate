import { ViewModel } from "../../../node_modules/geranium/viewmodels/abstract/ViewModel";
import { View } from "../../../node_modules/geranium/view/abstract/View";
import { ViewDOM } from "../../../node_modules/geranium/viewDOM/abstract/ViewDOM";
import { CategoryButtonView } from "./categoryButtonView";

export class CategoryButton extends ViewModel {

    constructor(text: string) {
        super();
        this.text = text;
    }

    view(): string | (new (...args: any[]) => View) | (new (...args: any[]) => ViewDOM) {
        return CategoryButtonView;
    }

    text: string;
    onClick: (event: Event) => void;
}
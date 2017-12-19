import { View } from "../../../node_modules/geranium/view/abstract/View";
require("./categoryButton")

export class CategoryButtonView extends View {
    protected declare(): string {
        return "<button class='button category' onclick='onClick' data-templating-content=''>[text]</button>";
    }
}
import { View } from "../../../node_modules/geranium/view/abstract/View";
require("./categoryButton");
export class CategoryButtonView extends View {
    declare() {
        return "<button class='button category' onclick='onClick' data-templating-content=''>[text]</button>";
    }
}
//# sourceMappingURL=categoryButtonView.js.map
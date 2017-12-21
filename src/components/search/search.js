import { ViewModelFile } from "../../../node_modules/geranium/viewmodels/concrete/ViewModelFile";
export class Search extends ViewModelFile {
    constructor() {
        super(...arguments);
        this.htmlFileUrl = "./src/components/search/search.html";
    }
    click() {
        console.log('SearchView.click');
    }
    change() {
        console.log('SearchView.change');
    }
    blur() {
        console.log('SearchView.blur');
    }
}
//# sourceMappingURL=search.js.map
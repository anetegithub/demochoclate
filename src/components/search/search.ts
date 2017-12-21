import { ViewModelFile } from "../../../node_modules/geranium/viewmodels/concrete/ViewModelFile";

export class Search extends ViewModelFile {
    htmlFileUrl: string = "./src/components/search/search.html";
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
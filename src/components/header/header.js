import { SocialsPanel } from "../socialsPanel/socialsPanel";
import { Search } from "../search/search";
import { ViewModelFile } from "../../../node_modules/geranium/viewmodels/concrete/ViewModelFile";
import { CategoryButton } from "../categoryButton/categoryButton";
export class Header extends ViewModelFile {
    constructor() {
        super(...arguments);
        this.htmlFileUrl = "./src/components/header/header.html";
        this.socials = new SocialsPanel();
        this.search = new Search();
        this.btn = new CategoryButton("wtf");
    }
}
//# sourceMappingURL=header.js.map
import { ViewModelExisted } from "../../../node_modules/geranium/viewmodels/concrete/ViewModelExisted";
import { HeaderView } from "./headerView";
import { SocialsPanel } from "../socialsPanel/socialsPanel";
export class Header extends ViewModelExisted {
    constructor() {
        super(...arguments);
        this.socials = new SocialsPanel();
    }
    view() {
        return HeaderView;
    }
}
//# sourceMappingURL=header.js.map
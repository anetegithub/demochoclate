import { ViewModel } from "../../../node_modules/geranium/viewmodels/abstract/ViewModel";
import { HeaderView } from "./headerView";
import { SocialsPanel } from "../socialsPanel/socialsPanel";
export class Header extends ViewModel {
    constructor() {
        super(...arguments);
        this.socials = new SocialsPanel();
    }
    view() {
        debugger;
        return HeaderView;
    }
}
//# sourceMappingURL=header.js.map
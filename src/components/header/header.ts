import { ViewModel } from "../../../node_modules/geranium/viewmodels/abstract/ViewModel";
import { HeaderView } from "./headerView";
import { SocialsPanel } from "../socialsPanel/socialsPanel";

export class Header extends ViewModel {
    view() {
        debugger;
        return HeaderView;
    }
    socials: SocialsPanel = new SocialsPanel();
}
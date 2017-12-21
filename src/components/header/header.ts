import { ViewModelExisted } from "../../../node_modules/geranium/viewmodels/concrete/ViewModelExisted";
import { HeaderView } from "./headerView";
import { SocialsPanel } from "../socialsPanel/socialsPanel";

export class Header extends ViewModelExisted {
    view() {
        return HeaderView;
    }
    socials: SocialsPanel = new SocialsPanel();
}
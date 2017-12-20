import { ViewModel } from "../../../../node_modules/geranium/viewmodels/abstract/ViewModel";
import { SocialButtonView } from "./socialButtonView";

export class SocialButton extends ViewModel {

    constructor(icon?: string) {
        super();
        this.icon = icon;
    }

    view() {
        return SocialButtonView;
    }

    icon: string;
}
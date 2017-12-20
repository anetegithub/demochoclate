import { ViewModel } from "../../../node_modules/geranium/viewmodels/abstract/ViewModel";
import { SocialsPanelView } from "./socialsPanelView";
import { SocialButton } from "./socialButton/socialButton";

export class SocialsPanel extends ViewModel {
    constructor() {
        super();
        this.buttons = [
            new SocialButton("fa fa-vk"),
            new SocialButton("fa fa-vk"),
            new SocialButton("fa fa-vk"),
            new SocialButton("fa fa-vk")
        ]
    }
    view() {
        return SocialsPanelView;
    }
    buttons: SocialButton[];
}
import { View } from "../../../node_modules/geranium/view/abstract/View";

export class SocialsPanelView extends View {
    protected declare(): string {
        return "<div class='socials'>[buttons]</div>";
    }
}
import { View } from "../../../../node_modules/geranium/view/abstract/View";

export class SocialButtonView extends View {
    protected declare(): string {
        return "<a class='' href='#'></a>"
    }
}
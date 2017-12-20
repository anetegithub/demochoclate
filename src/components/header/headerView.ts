import { ViewDOM } from "../../../node_modules/geranium/viewDOM/abstract/ViewDOM";

export class HeaderView extends ViewDOM {
    async DOM(): Promise<HTMLElement[]> {
        return [document.querySelector("header")];
    }
}
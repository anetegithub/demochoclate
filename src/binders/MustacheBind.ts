import { BaseByAttributeBinding } from "../../node_modules/geranium/binding/concrete/base/BaseByAttributeBinding";
import * as Mustache from "mustache";

export class MustacheBind extends BaseByAttributeBinding {
    attribute: string = "data-templating-content";
    binding(DOMObject: HTMLElement, model: any) {
        const parsed = Mustache.render(DOMObject.innerHTML, model);
        DOMObject.innerHTML = parsed;
    }
}
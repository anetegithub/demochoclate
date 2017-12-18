import { BaseByAttributeBinding } from "../../node_modules/geranium/binding/concrete/base/BaseByAttributeBinding";
import * as Mustache from "mustache";
export class MustacheBind extends BaseByAttributeBinding {
    constructor() {
        super(...arguments);
        this.attribute = "data-templating-content";
    }
    binding(DOMObject, model) {
        const parsed = Mustache.render(DOMObject.innerHTML, model);
        DOMObject.innerHTML = parsed;
    }
}
//# sourceMappingURL=MustacheBind.js.map
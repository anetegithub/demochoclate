var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BaseByAttributeBinding } from "../../node_modules/geranium/binding/concrete/base/BaseByAttributeBinding";
import * as Mustache from "mustache";
export class MustacheBind extends BaseByAttributeBinding {
    constructor() {
        super(...arguments);
        this.attribute = "data-templating-content";
    }
    binding(DOMObject, model) {
        return __awaiter(this, void 0, void 0, function* () {
            const parsed = Mustache.render(DOMObject.innerHTML, model);
            DOMObject.innerHTML = parsed;
        });
    }
}
//# sourceMappingURL=MustacheBind.js.map
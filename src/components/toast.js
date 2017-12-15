import { setTimeout } from "timers";
export class Toast {
    constructor(opts) {
        Object.assign(opts, {
            time: 3000,
            targetSelector: "body"
        });
        let div = document.createElement("div");
        this.applyStyle(div);
        div.innerHTML = opts.text;
        document.querySelector(opts.targetSelector).appendChild(div);
        this.setOffset();
        this.show(div, opts.time);
    }
    applyStyle(element) {
        element.classList.add("toast");
        element.style.padding = "15px 20px";
        element.style.color = "#fff";
        element.style.background = "rgba(0, 0, 10, 0.7)";
        element.style.display = "inline-block";
        element.style.position = "fixed";
        element.style.top = "-100px";
        element.style.right = "15px";
        element.style.opacity = "1";
        element.style.transition = "all 0.4s ease-out";
        element.style.zIndex = "2500";
    }
    setOffset() {
        const betweenOffset = 15;
        let topOffset = betweenOffset;
        const toasts = Array.prototype.slice.call(document.querySelectorAll(".toast"), 0).reverse();
        for (let index = 0; index < toasts.length; index++) {
            const element = toasts[index];
            const height = element.offsetHeight;
            element.style.top = topOffset + "px";
            topOffset += height + betweenOffset;
        }
    }
    show(element, time) {
        setTimeout(() => {
            const width = element.offsetWidth + 20;
            element.style.opacity = "0";
            element.style.right = "-" + width + "px";
            setTimeout(() => element.remove(), 600);
        }, time);
    }
}
//# sourceMappingURL=toast.js.map
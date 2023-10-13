import { Breakpoint } from "../BreakpointProvider";
import { CSSProperties } from "react";
import { isNil } from "../../../shared";

export class StylingContext {
    private classes: string[];
    private style: Record<string, any>;
    matchedBreakpoints: Breakpoint[];

    constructor(className: string, style: CSSProperties, matchedBreakpoints: Breakpoint[]) {
        this.classes = !isNil(className) ? [className] : [];
        this.style = style ?? {};
        this.matchedBreakpoints = matchedBreakpoints;
    }

    addClass(className: string) {
        if (!this.classes.includes(className)) {
            this.classes.push(className);
        }
    }

    addStyleValue(name: string, value: any) {
        if (isNil(this.style[name])) {
            this.style[name] = value;
        }
    }

    computeStyling() {
        const className = this.classes.length !== 0 ? this.classes.join(" ") : undefined;
        const styleValue = Object.keys(this.style).length !== 0 ? this.style : undefined;

        return { className, style: styleValue };
    }
}

import { AriaAttributes, MouseEventHandler } from "react";
import { HtmlButton } from "../../html/index.ts"
import { InteractionProps, InternalProps, MergedRef, Size, cssModule, isNumber, mergeClasses, normalizeSize, useAutoFocus, useMergedRefs } from "../../shared/index.ts"
import { useDisableClick } from "./useDisableClick";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "negative" | "upsell";

export interface UseButtonProps extends Partial<InternalProps>, InteractionProps {
    autoFocus?: boolean | number;
    cssModule?: string;
    fluid?: boolean;
    inherit?: boolean;
    loading?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
    size?: Size;
    type?: "button" | "submit" | "reset";
    variant?: ButtonVariant;
}

export interface UseButtonReturn {
    "aria-busy": boolean;
    "aria-live": AriaAttributes["aria-live"];
    className: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    ref: MergedRef<any>;
    type: UseButtonProps["type"];
}

export function useButton({
    active,
    as,
    autoFocus,
    cssModule: module,
    fluid,
    focus,
    forwardedRef,
    hover,
    inherit,
    loading,
    onClick,
    size,
    type = "button",
    variant = "primary"
}: UseButtonProps): UseButtonReturn {
    const buttonRef = useMergedRefs(forwardedRef);

    useAutoFocus(buttonRef, {
        delay: isNumber(autoFocus) ? autoFocus : undefined,
        isDisabled: !autoFocus
    });

    const handleClick = useDisableClick(loading, onClick);

    return {
        "aria-busy": loading,
        "aria-live": "polite",
        className: mergeClasses(
            module,
            cssModule(
                "o-ui-button",
                variant,
                active && "active",
                inherit && "inherit-style",
                fluid && "fluid",
                loading && "loading",
                focus && "focus",
                hover && "hover",
                normalizeSize(size)
            )
        ),
        onClick: handleClick,
        ref: buttonRef,
        type: type ?? (as === HtmlButton ? "button" : undefined)
    };
}

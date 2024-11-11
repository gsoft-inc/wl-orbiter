import { embedIconButton } from "../../button/index.ts";
import { Spinner, SpinnerProps } from "../../spinner/index.ts";
import { CreatedIconProps } from "@hopper-ui/icons";
import { ReactElement } from "react";
import { augmentElement } from "../../shared/index.ts";

type UseInputIconProps = Omit<CreatedIconProps, "className" | "children">;

export function useInputIcon(icon: ReactElement, props: UseInputIconProps = {}) {
    return icon && augmentElement(icon, {
        className: "o-ui-input-icon",
        ...props
    });
}

export function useInputButton(button: ReactElement, isActive: boolean, props: Record<string, any> = {}) {
    return button && isActive && embedIconButton(button, {
        ...props,
        className: "o-ui-input-button",
        variant: "tertiary"
    });
}

export function useInputSpinner(loading: boolean, props?: Partial<SpinnerProps>) {
    return loading && <Spinner aria-label="Loading..." className="o-ui-input-spinner" role="presentation" {...props} />;
}

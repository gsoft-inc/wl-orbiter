import { AbstractIconButtonProps, IconButton, InnerIconButton } from "./IconButton";
import { ComponentProps, forwardRef } from "react";
import { DismissIcon } from "@hopper-ui/icons";
import { OmitInternalProps, mergeClasses, slot } from "../../shared";

export type InnerCrossButtonProps = Omit<AbstractIconButtonProps<"button">, "fluid" | "loading" | "onChange" | "type" | "variant">;

export function InnerCrossButton({ className, forwardedRef, ...rest }: InnerCrossButtonProps) {
    return (
        <IconButton
            {...rest}
            className={mergeClasses("o-ui-cross-button", className)}
            fill="primary"
            ref={forwardedRef}
            variant="tertiary"
        >
            <DismissIcon />
        </IconButton>
    );
}

InnerCrossButton.defaultElement = InnerIconButton.defaultElement;

/**
 * A button with a cross icon to handle use cases like clearing a value or closing overlay components.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/cross-button--default-story)
*/
export const CrossButton = slot("button", forwardRef<HTMLButtonElement, OmitInternalProps<InnerCrossButtonProps>>((props, ref) => (
    <InnerCrossButton {...props} forwardedRef={ref} />
)));

export type CrossButtonProps = ComponentProps<typeof CrossButton>;

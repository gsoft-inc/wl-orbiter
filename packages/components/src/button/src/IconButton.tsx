import { Box } from "../../box";
import { ButtonVariant, useButton } from "./useButton";
import { Children, ComponentProps, ElementType, ReactElement, ReactNode, forwardRef } from "react";
import { Spinner } from "../../spinner";

import {
    InteractionProps,
    InternalProps,
    OmitInternalProps,
    SlotProps,
    StyledComponentProps,
    as,
    createSizeAdapter,
    augmentElement,
    createEmbeddableAdapter,
    mergeProps,
    omitProps,
    slot
} from "../../shared";
import { ResponsiveProp, useResponsiveValue } from "../../styling";
import { useInputGroupButtonAddonProps } from "../../input-group";
import { useToolbarProps } from "../../toolbar";

export type AbstractIconButtonProps<T extends ElementType> = InternalProps & InteractionProps & Omit<StyledComponentProps<T>, "autoFocus"> & {
    /**
     * See [WCAG](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html).
     */
    "aria-label": string;
    /**
     * Whether or not the button should autoFocus on render.
     */
    autoFocus?: boolean | number;
    /**
     * Whether or not the button take up the width of its container.
     */
    fluid?: ResponsiveProp<boolean>;
    /**
     * Whether or not the button should inherit it's parent style.
     */
    inherit?: boolean;
    /**
     * A button can show a loading indicator.
     */
    loading?: boolean;
    /**
     * A button can vary in size.
     */
    size?: ResponsiveProp<"2xs" | "xs" | "sm" | "md">;
    /**
     * The icon button type.
     */
    type?: "button" | "submit" | "reset";
    /**
     * The button style to use.
     */
    variant?: ButtonVariant;
};

const DefaultElement = "button";

export interface InnerIconButtonProps extends AbstractIconButtonProps<typeof DefaultElement>, SlotProps {
    /**
     * React children.
     */
    children: ReactNode;
}

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const spinnerSize = createSizeAdapter({
    "sm": "md",
    "md": "lg"
});
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

export function InnerIconButton(props: InnerIconButtonProps) {
    const [toolbarProps] = useToolbarProps();
    const [inputGroupProps] = useInputGroupButtonAddonProps();

    const {
        active,
        "aria-label": ariaLabel,
        as: asProp = DefaultElement,
        autoFocus,
        children,
        fluid,
        focus,
        forwardedRef,
        hover,
        inherit,
        loading,
        onClick,
        size,
        type,
        variant = "secondary",
        ...rest
    } = mergeProps(
        props,
        omitProps(toolbarProps, ["orientation"]),
        inputGroupProps
    );

    const fluidValue = useResponsiveValue(fluid);
    const sizeValue = useResponsiveValue(size);

    const buttonProps = useButton({
        active,
        as: asProp,
        autoFocus,
        cssModule: "o-ui-icon-button",
        fluid: fluidValue,
        focus,
        forwardedRef,
        hover,
        inherit,
        loading,
        onClick,
        size: sizeValue,
        type,
        variant
    });

    const icon = Children.only(children) as ReactElement;

    const iconMarkup = augmentElement(icon, {
        className: "o-ui-button-icon",
        size: sizeValue
    });

    const loadingMarkup = loading && (
        <Spinner
            aria-label="Loading..."
            className="o-ui-button-spinner"
            color={variant === "primary" ? "samoyed" : undefined}
            role="presentation"
            size={spinnerSize(sizeValue)}
        />
    );

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    "aria-label": ariaLabel,
                    as: asProp
                },
                buttonProps
            )}
        >
            {iconMarkup}
            {loadingMarkup}
        </Box>
    );
}

InnerIconButton.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app//?path=/docs/button--default-story)
*/
export const IconButton = slot("button", forwardRef<HTMLButtonElement, OmitInternalProps<InnerIconButtonProps>>((props, ref) => (
    <InnerIconButton {...props} forwardedRef={ref} />
)));

export type IconButtonProps = ComponentProps<typeof IconButton>;

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
export const embedIconButton = createEmbeddableAdapter({
    "sm": "2xs",
    "md": "xs"
});
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

///////////

/**
 * [Documentation](https://wl-orbiter-website.netlify.app//?path=/docs/button--default-story)
*/
export const IconButtonAsLink = slot("button", as(IconButton, "a"));
export type IconButtonAsLinkProps = ComponentProps<typeof IconButtonAsLink>;

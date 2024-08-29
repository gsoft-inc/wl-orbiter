import { Box } from "../../box/index.js";
import { ButtonVariant, useButton } from "./useButton.js";
import { ComponentProps, ElementType, ReactNode, forwardRef, useMemo } from "react";
import {
    InteractionProps,
    InternalProps,
    OmitInternalProps,
    SlotProps,
    StyledComponentProps,
    as,
    createSizeAdapter,
    cssModule,
    mergeProps,
    omitProps,
    slot,
    useSlots
} from "../../shared/index.js";
import { ResponsiveProp, useResponsiveValue, useStyleProps } from "../../styling/index.js";
import { Text } from "../../typography/index.js";
import { useFormButton } from "../../form/index.js";
import { useInputGroupButtonAddonProps } from "../../input-group/index.js";
import { useToolbarProps } from "../../toolbar/index.js";
import { Spinner } from "../../spinner/index.js";

export type AbstractButtonProps<T extends ElementType> = InternalProps & InteractionProps & Omit<StyledComponentProps<T>, "autoFocus"> & {
    /**
     * Whether or not the button should autoFocus on render.
     */
    autoFocus?: boolean;
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
    size?: ResponsiveProp<"sm" | "md">;
    /**
     * The button type.
     */
    type?: "button" | "submit" | "reset";
    /**
     * The button style to use.
     */
    variant?: ButtonVariant;
};

const DefaultElement = "button";

export interface InnerButtonProps extends AbstractButtonProps<typeof DefaultElement>, SlotProps {
    /**
     * React children.
     */
    children: ReactNode;
}

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const textSize = createSizeAdapter({
    "sm": "md",
    "md": "md"
});
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const spinnerSize = createSizeAdapter({
    "sm": "md",
    "md": "lg"
});
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

export function InnerButton(props: InnerButtonProps) {
    const [formProps] = useFormButton();
    const [toolbarProps] = useToolbarProps();
    const [inputGroupProps] = useInputGroupButtonAddonProps();
    const [styleProps] = useStyleProps<InnerButtonProps>("button");

    const {
        active,
        as: asProp = DefaultElement,
        autoFocus,
        children,
        disabled,
        fluid,
        focus,
        forwardedRef,
        hover,
        inherit,
        loading,
        onClick,
        size,
        type,
        variant = "primary",
        ...rest
    } = mergeProps(
        props,
        formProps,
        omitProps(toolbarProps, ["orientation"]),
        inputGroupProps,
        styleProps
    );

    const fluidValue = useResponsiveValue(fluid);
    const sizeValue = useResponsiveValue(size);

    const { ref: buttonRef, ...buttonProps } = useButton({
        active,
        as: asProp,
        autoFocus,
        cssModule: "o-ui-text-button",
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

    const { counter, "end-icon": endIcon, icon, text } = useSlots(children, useMemo(() => ({
        _: {
            defaultWrapper: Text
        },
        counter: {
            className: "o-ui-button-counter",
            disabled,
            pushed: true,
            size: sizeValue
        },
        "end-icon": {
            className: "o-ui-button-end-icon"
        },
        icon: {
            className: "o-ui-button-icon o-ui-button-start-icon"
        },
        text: {
            "aria-hidden": loading,
            className: "o-ui-button-text",
            size: textSize(sizeValue)
        }
    }), [sizeValue, disabled, loading]));

    const loadingMarkup = loading && (
        <Spinner
            aria-label="Loading..."
            className="o-ui-button-spinner"
            role="presentation"
            size={spinnerSize(sizeValue)}
        />
    );

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as: asProp,
                    className: cssModule(
                        "o-ui-button",
                        icon && "has-start-icon",
                        endIcon && "has-end-icon"
                    ),
                    disabled,
                    ref: buttonRef
                },
                buttonProps
            )}
        >
            {icon}
            {text}
            {counter}
            {endIcon}
            {loadingMarkup}
        </Box>
    );
}

InnerButton.defaultElement = DefaultElement;

/**
 * A button indicates a possible user action.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/button--default-story)
*/
export const Button = slot("button", forwardRef<HTMLButtonElement, OmitInternalProps<InnerButtonProps>>((props, ref) => (
    <InnerButton {...props} forwardedRef={ref} />
)));

export type ButtonProps = ComponentProps<typeof Button>;

///////////

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/button--default-story)
*/
export const ButtonAsLink = slot("button", as(Button, "a"));
export type ButtonAsLinkProps = ComponentProps<typeof ButtonAsLink>;

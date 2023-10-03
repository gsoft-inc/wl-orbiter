import { ComponentProps, ReactElement, ReactNode, SyntheticEvent, forwardRef } from "react";
import { OmitInternalProps, augmentElement, cssModule, isNil, mergeProps } from "../../shared";
import { Overlay, OverlayProps, PopupAlignmentProp, PopupDirectionProp } from "../../overlay";
import { ResponsiveProp, useResponsiveValue } from "../../styling";

import { AbstractInputProps } from "../../input";
import { Box } from "../../box";
import { DisclosureArrow } from "../../disclosure";
import { HiddenSelect } from "./HiddenSelect";
import { Listbox } from "../../listbox";
import { Span } from "../../html";
import { Text } from "../../typography";
import { useFieldInputProps } from "../../field";
import { useInputGroupSelectAddonProps } from "../../input-group";
import { useSelect } from "./useSelect";

const DefaultElement = "button";

export interface InnerSelectProps extends Omit<AbstractInputProps<typeof DefaultElement>, "zIndex"> {
    /**
     * The horizontal alignment of the select menu relative to the input.
     */
    align?: PopupAlignmentProp;
    /**
     * Whether or not the select menu can flip when it will overflow it's boundary area.
     */
    allowFlip?: boolean;
    /**
     * Whether or not the selection menu position can change to prevent it from being cut off so that it stays visible within its boundary area.
     */
    allowPreventOverflow?: boolean;
    /**
     * Whether or not the selection menu should match the trigger width.
     */
    allowResponsiveMenuWidth?: boolean;
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * The initial value of open when in auto controlled mode.
     */
    defaultOpen?: boolean;
    /**
     * The initial value of `selectedKey` when uncontrolled.
     */
    defaultSelectedKey?: string;
    /**
     * The direction the select menu will open relative to the input.
     */
    direction?: PopupDirectionProp;
    /**
     * Whether or not the select is disabled.
     */
    disabled?: boolean;
    /**
     * Whether or not the select take up the width of its container.
     */
    fluid?: ResponsiveProp<boolean>;
    /**
     * A trigger icon.
     */
    icon?: ReactElement;
    /**
     * @ignore
     */
    name?: string;
    /**
     * Called when the select open state change.
     * @param {SyntheticEvent} event - React's original event.
     * @param {boolean} isOpen - Indicate if the menu is open.
     * @returns {void}
     */
    onOpenChange?: (event: SyntheticEvent, isOpen: boolean) => void;
    /**
     * Called when the select value change.
     * @param {SyntheticEvent} event - React's original event.
     * @param {string} selectedKey - The new selected key.
     * @returns {void}
     */
    onSelectionChange?: (event: SyntheticEvent, selectedKey: string) => void;
    /**
     * Whether or not to open the select element.
     */
    open?: boolean | null;
    /**
     * Additional props to render on the menu of options.
     */
    overlayProps?: Partial<OverlayProps>;
    /**
     * Temporary text that occupies the select trigger when no value is selected.
     */
    placeholder?: string;
    /**
     * Whether or not the select is readonly.
     */
    readOnly?: boolean;
    /**
     * A controlled selected key.
     */
    selectedKey?: string | null;
    /**
     * The style to use.
     */
    variant?: "outline" | "ghost";
    /**
     * The z-index of the overlay element.
     */
    zIndex?: number;
}

export function InnerSelect(props: InnerSelectProps) {
    const [fieldProps] = useFieldInputProps();
    const [inputGroupProps] = useInputGroupSelectAddonProps();

    const {
        active,
        align = "start",
        allowFlip = true,
        allowPreventOverflow = true,
        allowResponsiveMenuWidth,
        "aria-describedby": ariaDescribedBy,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        as = DefaultElement,
        autoFocus,
        children,
        defaultOpen,
        defaultSelectedKey,
        direction = "bottom",
        disabled,
        fluid,
        focus,
        forwardedRef,
        hover,
        icon,
        id,
        name,
        onOpenChange,
        onSelectionChange,
        open,
        overlayProps: overlayPropsProp,
        placeholder,
        // Usually provided by the field inputs.
        readOnly,
        required,
        selectedKey: selectedKeyProp,
        validationState,
        variant = "outline",
        zIndex = 10000,
        ...rest
    } = mergeProps(
        props,
        fieldProps,
        inputGroupProps
    );

    const alignValue = useResponsiveValue(align);
    const directionValue = useResponsiveValue(direction);

    const { isOpen, listboxProps, overlayProps, selectedItem, selectedKey, triggerProps, valueProps } = useSelect(children, {
        align: alignValue,
        allowFlip,
        allowPreventOverflow,
        allowResponsiveMenuWidth: allowResponsiveMenuWidth ?? variant !== "ghost",
        ariaDescribedBy,
        ariaLabel,
        ariaLabelledBy,
        autoFocus,
        defaultOpen,
        defaultSelectedKey,
        direction: directionValue,
        disabled,
        id,
        onOpenChange,
        onSelectionChange,
        open,
        overlayProps: overlayPropsProp,
        readOnly,
        ref: forwardedRef,
        selectedKey: selectedKeyProp,
        validationState
    });

    const iconMarkup = icon && augmentElement(icon, {
        className: "o-ui-select-icon",
        size: "sm"
    });

    const selectedIconMarkup = selectedItem?.icon && augmentElement(selectedItem.icon, {
        className: "o-ui-select-value-start-icon",
        size: "sm"
    });

    const selectedTextMarkup = selectedItem?.text && (
        <Text className="o-ui-select-value-text">
            {selectedItem.text}
        </Text>
    );

    const selectedEndIconMarkup = selectedItem?.endIcon && augmentElement(selectedItem.endIcon, {
        className: "o-ui-select-value-end-icon",
        size: "sm"
    });

    const valueMarkup = isNil(selectedItem)
        ? placeholder && (
            <Text {...mergeProps({ className: "o-ui-select-placeholder" }, valueProps)}>
                {placeholder}
            </Text>
        )
        : (
            <Span {...mergeProps({ className: "o-ui-select-value" }, valueProps)}>
                {selectedIconMarkup}
                {selectedTextMarkup}
                {selectedEndIconMarkup}
            </Span>
        );

    return (
        <>
            <HiddenSelect
                disabled={disabled}
                name={name}
                required={required}
                selectedKey={selectedKey}
                validationState={validationState}
            />
            <Box
                {...mergeProps(
                    rest,
                    {
                        as,
                        className: cssModule(
                            "o-ui-select-trigger",
                            variant,
                            validationState,
                            fluid && "fluid",
                            active && "active",
                            focus && "focus",
                            hover && "hover",
                            isNil(selectedItem) && "has-placeholder"
                        )
                    },
                    triggerProps
                )}
            >
                {iconMarkup}
                {valueMarkup}
                <DisclosureArrow
                    open={isOpen}
                />
            </Box>
            <Overlay
                {...overlayProps}
                zIndex={zIndex}
            >
                <Listbox {...listboxProps} />
            </Overlay>
        </>
    );
}

InnerSelect.defaultElement = DefaultElement;

/**
 * A select allow users to choose a single option from a collapsible list of options.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app//?path=/docs/select--default-story)
*/
export const Select = forwardRef<any, OmitInternalProps<InnerSelectProps>>((props, ref) => (
    <InnerSelect {...props} forwardedRef={ref} />
));

export type SelectProps = ComponentProps<typeof Select>;

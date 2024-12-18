import { Children, ComponentProps, ReactElement, ReactNode, SyntheticEvent, forwardRef, useCallback } from "react";
import {
    InternalProps,
    OmitInternalProps,
    StyledComponentProps,
    augmentElement,
    isNil,
    mergeProps,
    resolveChildren
} from "../../shared/index.ts";
import { Overlay, OverlayArrow, PopupPositionProp, PopupProps, usePopup } from "../../overlay/index.ts";
import { useResponsiveValue } from "../../styling/index.ts";
import { PopoverTriggerContext } from "./PopoverTriggerContext.ts";

const DefaultElement = "div";

export interface InnerPopoverTriggerProps extends
    InternalProps,
    Omit<PopupProps, "align" | "direction">,
    Omit<StyledComponentProps<typeof DefaultElement>, "position" | "zIndex"> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * A DOM element in which the overlay element will be appended via a React portal.
     */
    containerElement?: HTMLElement;
    /**
     * Whether or not the popover should close on outside interactions.
     */
    dismissable?: boolean;
    /**
     * Position of the popover element related to the trigger.
     */
    position?: PopupPositionProp;
}

export function InnerPopoverTrigger({
    allowFlip = true,
    allowPreventOverflow = true,
    as = DefaultElement,
    children,
    containerElement,
    defaultOpen,
    dismissable = true,
    forwardedRef,
    id,
    onOpenChange,
    open,
    position: positionProp = "bottom",
    zIndex = 10000,
    ...rest
}: InnerPopoverTriggerProps) {
    const positionValue = useResponsiveValue(positionProp);

    const [trigger, popover] = Children.toArray(resolveChildren(children)) as [ReactElement, ReactElement];

    if (isNil(trigger) || isNil(popover)) {
        throw new Error("A popover trigger must have exactly 2 children.");
    }

    const { arrowProps, isOpen, overlayProps, setIsOpen, triggerProps } = usePopup("dialog", {
        allowFlip,
        allowPreventOverflow,
        boundaryElement: containerElement,
        defaultOpen,
        disabled: trigger.props.disabled,
        hasArrow: false,
        hideOnEscape: dismissable,
        hideOnLeave: dismissable,
        hideOnOutsideClick: false,
        hideOnTriggerClick: dismissable,
        id,
        onOpenChange,
        open,
        position: positionValue,
        trigger: "click"
    });

    const close = useCallback((event: SyntheticEvent) => {
        setIsOpen(event, false);
    }, [setIsOpen]);

    const triggerMarkup = augmentElement(trigger, triggerProps);

    const popoverMarkup = augmentElement(popover, {
        dismissable,
        zIndex: zIndex + 1
    });

    return (
        <PopoverTriggerContext.Provider
            value={{
                close,
                isOpen
            }}
        >
            {triggerMarkup}
            <Overlay
                {...mergeProps(
                    rest,
                    {
                        as,
                        borderOffset: "12px",
                        ref: forwardedRef,
                        show: isOpen,
                        zIndex
                    },
                    overlayProps
                )}
            >
                {popoverMarkup}
                <OverlayArrow
                    {...mergeProps(
                        {
                            zIndex: zIndex + 100
                        },
                        arrowProps
                    )}
                />
            </Overlay>
        </PopoverTriggerContext.Provider>
    );
}

InnerPopoverTrigger.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/popover--default-story)
*/
export const PopoverTrigger = forwardRef<any, OmitInternalProps<InnerPopoverTriggerProps>>((props, ref) => (
    <InnerPopoverTrigger {...props} forwardedRef={ref} />
));

export type PopoverTriggerProps = ComponentProps<typeof PopoverTrigger>;


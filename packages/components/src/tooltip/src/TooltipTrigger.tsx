import { Children, ComponentProps, FocusEvent, ReactElement, ReactNode, SyntheticEvent, forwardRef, useCallback } from "react";
import {
    InternalProps,
    OmitInternalProps,
    StyledComponentProps,
    augmentElement,
    isNil,
    mergeProps,
    resolveChildren,
    useControllableState,
    useEventCallback,
    useId,
    useMergedRefs,
    useFocusScope
} from "../../shared";
import { Overlay, OverlayArrow, OverlayPositionProp, isTargetParent, useOverlayPosition, useOverlayTrigger, useOverlayLightDismiss } from "../../overlay";
import { useResponsiveValue, useThemeContext } from "../../styling";

import { Div } from "../../html";
import { TooltipTriggerContext } from "./TooltipTriggerContext";

const DefaultElement = "div";

export interface InnerTooltipTriggerProps extends InternalProps, Omit<StyledComponentProps<typeof DefaultElement>, "position"> {
    /**
     * Whether or not the tooltip element can flip when it will overflow it's boundary area.
     */
    allowFlip?: boolean;
    /**
     * Whether or not the tooltip element position can change to prevent it from being cut off so that it stays visible within its boundary area.
     */
    allowPreventOverflow?: boolean;
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * @ignore
     */
    containerElement?: HTMLElement;
    /**
     * The initial value of `open` when in auto controlled mode.
     */
    defaultOpen?: boolean;
    /**
     * Whether or not the tooltip should be disabled, independent from the trigger.
     */
    disabled?: boolean;
    /**
     * Called when the open state change.
     * @param {SyntheticEvent} event - React's original event.
     * @param {boolean} isOpen - Indicate if the tooltip is visible.
     * @returns {void}
     */
    onOpenChange?: (event: SyntheticEvent, isOpen: boolean) => void;
    /**
    * Whether or not to show the tooltip.
    */
    open?: boolean | null;
    /**
     * Position of the tooltip element related to the trigger.
     */
    position?: OverlayPositionProp;
    /**
     * The z-index of the popover element.
     */
    zIndex?: number;
}

export function parseTooltipTrigger(children: ReactNode) {
    const array = Children.toArray(resolveChildren(children));

    if (array.length !== 2) {
        throw new Error("A tooltip trigger must have exactly 2 children.");
    }

    return array as [ReactElement, ReactElement];
}

export function InnerTooltipTrigger({
    allowFlip = true,
    allowPreventOverflow = true,
    as = DefaultElement,
    children,
    containerElement,
    defaultOpen,
    disabled,
    forwardedRef,
    onOpenChange,
    open,
    position: positionProp = "top",
    zIndex = 10000,
    ...rest
}: InnerTooltipTriggerProps) {
    const positionValue = useResponsiveValue(positionProp);

    const { themeAccessor } = useThemeContext();

    const [isOpen, setIsOpen] = useControllableState(open, defaultOpen, false);

    const updateIsOpen = useCallback((event: SyntheticEvent, newValue: boolean) => {
        // Ideally, we would only update the state if we transition from open
        // to closed and vice-versa, but comparing the current value of
        // `isOpen` with the `newValue` results in a stale closure, which can
        // result in the tooltip being left open after moving the cursor away.
        setIsOpen(newValue);

        if (!isNil(onOpenChange)) {
            onOpenChange(event, newValue);
        }
    }, [onOpenChange, setIsOpen]);

    const close = useCallback((event: SyntheticEvent) => {
        updateIsOpen(event, false);
    }, [updateIsOpen]);

    const { arrowRef, overlayRef: overlayPositionRef, triggerRef } = useOverlayPosition({
        allowFlip,
        allowPreventOverflow,
        boundaryElement: containerElement,
        hasArrow: true,
        position: positionValue
    });

    const [focusScope, setFocusRef] = useFocusScope();

    const overlayRef = useMergedRefs(overlayPositionRef, forwardedRef, setFocusRef);

    const triggerProps = useOverlayTrigger(isOpen, {
        hideOnLeave: true,
        isDisabled: disabled,
        onHide: useEventCallback((event: SyntheticEvent) => {
            // Prevent from closing when the focus goes to an element of the overlay on opening.
            if (!isTargetParent((event as FocusEvent).relatedTarget, overlayRef)) {
                updateIsOpen(event, false);
            }
        }),
        onShow: useEventCallback((event: SyntheticEvent) => {
            updateIsOpen(event, true);
        }),
        trigger: "hover"
    });

    const [trigger, tooltip] = parseTooltipTrigger(children);

    const tooltipId = useId(tooltip.props.id, "o-ui-tooltip");

    const triggerWithDescribedBy = augmentElement(trigger, {
        "aria-describedby": isOpen ? tooltipId : undefined
    });

    // HACK: a disabled element doesn't fire event, therefore the element is wrapped in a div.
    const triggerElement = !triggerWithDescribedBy.props.disabled ? triggerWithDescribedBy : (
        <Div className="o-ui-tooltip-disabled-wrapper">
            {triggerWithDescribedBy}
        </Div>
    );

    const triggerMarkup = augmentElement(triggerElement, mergeProps(
        triggerProps,
        {
            ref: triggerRef
        }
    ));

    const overlayDismissProps = useOverlayLightDismiss(focusScope, {
        hideOnEscape: true,
        hideOnLeave: true,
        hideOnOutsideClick: false,
        onHide: useEventCallback((event: SyntheticEvent) => {
            // Ignore events related to the trigger.
            if ((event as FocusEvent).relatedTarget !== triggerRef.current) {
                close(event);
            }
        }),
        trigger: "hover"
    });

    const tooltipMarkup = augmentElement(tooltip, {
        id: tooltipId,
        ref: setFocusRef
    });

    return (
        <TooltipTriggerContext.Provider
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
                        borderOffset: themeAccessor.getSpace(3),
                        ref: overlayRef,
                        show: isOpen,
                        zIndex
                    },
                    overlayDismissProps
                )}
            >
                {tooltipMarkup}
                <OverlayArrow
                    ref={arrowRef}
                    zIndex={zIndex + 100}
                />
            </Overlay>
        </TooltipTriggerContext.Provider>
    );
}

InnerTooltipTrigger.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app//?path=/docs/tooltip--default-story)
*/
export const TooltipTrigger = forwardRef<any, OmitInternalProps<InnerTooltipTriggerProps>>((props, ref) => (
    <InnerTooltipTrigger {...props} forwardedRef={ref} />
));

export type TooltipTriggerProps = ComponentProps<typeof TooltipTrigger>;

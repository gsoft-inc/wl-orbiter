import { Children, ComponentProps, ReactElement, ReactNode, SyntheticEvent, forwardRef, useCallback } from "react";
import {
    InternalProps,
    OmitInternalProps,
    StyledComponentProps,
    augmentElement,
    isNil,
    mergeProps,
    mergeRefs,
    resolveChildren,
    useControllableState,
    useEventCallback,
    useMergedRefs
} from "../../shared";
import { Overlay, OverlayArrow, PopupPositionProp, PopupProps, useOverlayPosition, usePopupAriaProps, usePopupTrigger } from "../../overlay";
import { useResponsiveValue, useThemeContext } from "../../styling";

import { PopoverTriggerContext } from "./PopoverTriggerContext";

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
    open: openProp,
    position: positionProp = "bottom",
    zIndex = 10000,
    ...rest
}: InnerPopoverTriggerProps) {
    const positionValue = useResponsiveValue(positionProp);

    const [isOpen, setIsOpen] = useControllableState(openProp, defaultOpen, false);

    const overlayRef = useMergedRefs(forwardedRef);

    const { themeAccessor } = useThemeContext();

    const updateIsOpen = useCallback((event: SyntheticEvent, newValue: boolean) => {
        if (isOpen !== newValue) {
            setIsOpen(newValue);

            if (!isNil(onOpenChange)) {
                onOpenChange(event, newValue);
            }
        }
    }, [onOpenChange, isOpen, setIsOpen]);

    const close = useCallback((event: SyntheticEvent) => {
        updateIsOpen(event, false);
    }, [updateIsOpen]);

    const [trigger, popover] = Children.toArray(resolveChildren(children, { close })) as [ReactElement, ReactElement];

    if (isNil(trigger) || isNil(popover)) {
        throw new Error("A popover trigger must have exactly 2 children.");
    }

    const triggerProps = usePopupTrigger(isOpen, overlayRef, {
        hideOnLeave: false,
        isDisabled: trigger.props.disabled,
        onHide: useEventCallback((event: SyntheticEvent) => {
            updateIsOpen(event, false);
        }),
        onShow: useEventCallback((event: SyntheticEvent) => {
            updateIsOpen(event, true);
        })
    });

    const { arrowRef, overlayRef: overlayPositionRef, triggerRef } = useOverlayPosition({
        allowFlip,
        allowPreventOverflow,
        boundaryElement: containerElement,
        hasArrow: true,
        position: positionValue
    });

    const { overlayProps: overlayAriaProps, triggerProps: triggerAriaProps } = usePopupAriaProps(isOpen, "dialog", { id });

    const triggerMarkup = augmentElement(
        trigger,
        mergeProps(
            {
                ref: triggerRef
            },
            triggerProps,
            triggerAriaProps
        )
    );

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
                        borderOffset: themeAccessor.getSpace(3),
                        className: "o-ui-popover-overlay",
                        ref: mergeRefs(overlayRef, overlayPositionRef),
                        show: isOpen,
                        zIndex
                    },
                    overlayAriaProps
                )}
            >
                {popoverMarkup}
                <OverlayArrow
                    ref={arrowRef}
                    zIndex={zIndex + 100}
                />
            </Overlay>
        </PopoverTriggerContext.Provider>
    );
}

InnerPopoverTrigger.defaultElement = DefaultElement;

export const PopoverTrigger = forwardRef<any, OmitInternalProps<InnerPopoverTriggerProps>>((props, ref) => (
    <InnerPopoverTrigger {...props} forwardedRef={ref} />
));

export type PopoverTriggerProps = ComponentProps<typeof PopoverTrigger>;
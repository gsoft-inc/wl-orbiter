import { ComponentProps, ReactNode, cloneElement, forwardRef, useCallback, useMemo, useRef } from "react";
import {
    FocusScopeContext,
    InteractionProps,
    InternalProps,
    OmitInternalProps,
    StyledComponentProps,
    cssModule,
    isNil,
    isString,
    mergeProps,
    useAutoFocusChild,
    useEventCallback,
    useFocusManager,
    useFocusScope,
    useId,
    useMergedRefs,
    useSlots
} from "../../shared/index.js";
import { useOverlayFocusRing, useTrapFocus } from "../../overlay/index.js";

import { Box } from "../../box/index.js";
import { Text } from "../../typography/index.js";

const DefaultElement = "section";

export interface InnerPopoverProps extends InternalProps, InteractionProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * Whether or not the popover should close on outside interactions.
     */
    dismissable?: boolean;
    /**
     * The z-index of the dialog.
     */
    zIndex?: number;
}

export function InnerPopover({
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    as = DefaultElement,
    children,
    dismissable = true,
    focus,
    forwardedRef,
    id,
    zIndex = 10000,
    ...rest
}: InnerPopoverProps) {
    const [focusScope, setFocusRef] = useFocusScope();

    const popoverRef = useMergedRefs(forwardedRef, setFocusRef);
    const dismissButtonRef = useRef<HTMLButtonElement>();

    const focusManager = useFocusManager(focusScope);

    useTrapFocus(focusManager);

    useAutoFocusChild(focusManager, {
        canFocus: useCallback((element: HTMLElement) => {
            // Do not autofocus the popover itself.
            if (element === popoverRef.current) {
                return false;
            }

            // Do not autofocus the dismiss button.
            if (element === dismissButtonRef.current) {
                return false;
            }

            // Do not autofocus a link.
            if (element?.tagName === "A") {
                return false;
            }

            return true;
        }, [popoverRef]),
        onNotFound: useEventCallback(() => {
            popoverRef.current?.focus();
        }),
        tabbableOnly: true
    });

    const focusRingProps = useOverlayFocusRing({ focus });

    const popoverId = useId(id, "o-ui-popover");

    const { button, "button-group": buttonGroup, content, footer, heading } = useSlots(children, useMemo(() => ({
        _: {
            required: ["heading", "content"]
        },
        button: {
            className: "o-ui-popover-button",
            size: "sm"
        },
        "button-group": {
            className: "o-ui-popover-button-group",
            size: "sm"
        },
        content: {
            as: Text,
            className: "o-ui-popover-content",
            size: "sm"
        },
        footer: {
            as: "footer",
            className: "o-ui-popover-footer"
        },
        heading: {
            as: "h3",
            id: `${popoverId}-heading`,
            size: "md"
        }
    }), [popoverId]));

    const headingId = heading?.props?.id;

    const footerMarkup = isString(footer?.props?.children)
        ? cloneElement(footer, { children: <Text>{footer?.props?.children}</Text> })
        : footer;

    const headerSectionMarkup = heading && (
        <header className="o-ui-popover-header-section">
            {heading}
        </header>
    );

    const footerSectionMarkup = (footer || button || buttonGroup) && (
        <footer className="o-ui-popover-footer-section">
            {footerMarkup}
            {button}
            {buttonGroup}
        </footer>
    );

    return (
        <FocusScopeContext.Provider value={{ scope: focusScope }}>
            <Box
                {...mergeProps(
                    rest,
                    {
                        "aria-label": ariaLabel,
                        "aria-labelledby": isNil(ariaLabel) ? ariaLabelledBy ?? headingId : undefined,
                        as,
                        className: cssModule(
                            "o-ui-popover",
                            dismissable && "dismissable"
                        ),
                        id,
                        ref: popoverRef,
                        role: "dialog",
                        tabIndex: -1,
                        zIndex
                    },
                    focusRingProps
                )}
            >
                {headerSectionMarkup}
                {content}
                {footerSectionMarkup}
            </Box>
        </FocusScopeContext.Provider>
    );
}

InnerPopover.defaultElement = DefaultElement;

/**
 * A Popover can be used to display some content on top of another.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/popover--default-story)
*/
export const Popover = forwardRef<any, OmitInternalProps<InnerPopoverProps>>((props, ref) => (
    <InnerPopover {...props} forwardedRef={ref} />
));

export type PopoverProps = ComponentProps<typeof Popover>;

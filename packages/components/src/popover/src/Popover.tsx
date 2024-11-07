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
} from "../../shared/index.ts"
import { useOverlayFocusRing, useTrapFocus } from "../../overlay/index.ts"

import { Box } from "../../box/index.ts"
import { Text } from "../../typography/index.ts"
import { HeadingContext } from "@hopper-ui/components";

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
            required: ["content"]
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

    if (isNil(heading) && isNil(ariaLabel)) {
        console.error("A popover must either have a heading or an \"aria-label\" attribute.");
    }

    const headingId = heading?.props?.id;

    const footerMarkup = isString(footer?.props?.children)
        ? cloneElement(footer, { children: <Text>{footer?.props?.children}</Text> })
        : footer;

    const headerSectionMarkup = heading && (
        <header className="o-ui-popover-header-section">
            <HeadingContext.Provider value={{ className: "o-ui-heading-md", level: 3 }} >
                {heading}
            </HeadingContext.Provider>
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

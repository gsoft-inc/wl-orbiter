import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, cssModule, getBodyElement, mergeProps } from "../../shared/index.js";
import { ThemeProvider, useColorSchemeContext } from "../../styling/index.js";

import { Transition } from "../../transition/index.js";
import { createPortal } from "react-dom";

const DefaultElement = "div";

export interface InnerOverlayProps extends InternalProps, Omit<StyledComponentProps<typeof DefaultElement>, "zIndex"> {
    /**
     * Hacky offset utility to apply a transparent CSS border to the overlay.
     * It's useful to prevent the overlay from closing when the mouse goes from the trigger to the overlay.
     */
    borderOffset?: string | number;
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * A DOM element in which the overlay element will be appended via a React portal.
     */
    containerElement?: HTMLElement;
    /**
     * Whether or not to show the overlay element.
     */
    show: boolean;
    /**
     * The z-index of the overlay.
     */
    zIndex?: number;
}

export function InnerOverlay({
    as = DefaultElement,
    borderOffset,
    children,
    containerElement,
    forwardedRef,
    show,
    zIndex,
    ...rest
}: InnerOverlayProps): JSX.Element {
    // Since the overlay is rendered through a portal it might not be embedded in the theme DOM element.
    const { colorScheme } = useColorSchemeContext();

    const content = (
        <Transition
            {...mergeProps(
                rest,
                {
                    as,
                    className: cssModule(
                        // The "o-ui" class is a small hack to allow nesting ThemeProvider inside the transition instead of outside to prevent rendering a div when the overlay is not visible.
                        // Since the transition component use the "o-ui-fade-in" and "o-ui-fade-out" classes which are using CSS variables declared inside an ".o-ui" class
                        // we must render the class somewhere.
                        "o-ui",
                        "overlay",
                        borderOffset && "overlay-has-border-offset"
                    ),
                    enter: "o-ui-fade-in",
                    leave: "o-ui-fade-out",
                    ref: forwardedRef,
                    show,
                    style: {
                        "--o-ui-overlay-border-offset": borderOffset
                    },
                    zIndex
                }
            )}
        >
            <ThemeProvider colorScheme={colorScheme}>
                {children}
            </ThemeProvider>
        </Transition>
    );

    const _container = containerElement ?? getBodyElement();

    if (_container) {
        return createPortal(content, _container);
    }

    return null;
}

InnerOverlay.defaultElement = DefaultElement;

/**
 * Container for overlays such as dialogs, popups, and menus.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/overlay--page)
*/
export const Overlay = forwardRef<any, OmitInternalProps<InnerOverlayProps>>((props, ref) => (
    <InnerOverlay {...props} forwardedRef={ref} />
));

export type OverlayProps = ComponentProps<typeof Overlay>;

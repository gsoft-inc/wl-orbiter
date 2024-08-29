import { Box } from "../../box/index.js";
import { ComponentProps, ElementType, ReactNode, forwardRef } from "react";
import { InteractionProps, InternalProps, OmitInternalProps, SlotProps, StyledComponentProps, mergeProps } from "../../shared/index.js";
import { NewTabIndicator } from "./NewTabIndicator.js";
import { useLink } from "./useLink.js";
import { useStyleProps } from "../../styling/index.js";

export type AbstractLinkProps<T extends ElementType> =
    // Keep it so it could be used with dynamic slots.
    SlotProps &
    InternalProps &
    InteractionProps &
    Omit<StyledComponentProps<T>, "autoFocus" | "external" | "href" | "rel" | "target"> & {
        /**
         * Whether or not the link should autoFocus on render.
         */
        autoFocus?: boolean;
        /**
         * React children.
         */
        children: ReactNode;
        /**
         * Whether or not the link is disabled.
         */
        disabled?: boolean;
        /**
         * Whether or not this is an external link.
         */
        external?: boolean;
        /**
         * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
         */
        href?: string;
        /**
         * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
         */
        rel?: string;
        /**
         * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).
         */
        target?: string;
        /**
         * @ignore
         */
        visited?: boolean;
    };

const DefaultElement = "a";

export interface InnerLinkProps extends AbstractLinkProps<typeof DefaultElement> {
    /**
     * The link shape.
     */
    shape?: "rounded" | "circular" | "box";
}

export function InnerLink(props: InnerLinkProps) {
    const [styleProps] = useStyleProps<InnerLinkProps>("link");

    const {
        active,
        as = DefaultElement,
        autoFocus,
        children,
        disabled,
        external,
        focus,
        forwardedRef,
        hover,
        rel,
        shape = "rounded",
        target,
        ...rest
    } = mergeProps(
        props,
        styleProps
    );

    const { linkProps, showNewTabIndicator } = useLink({
        active,
        autoFocus,
        disabled,
        external,
        focus,
        forwardedRef,
        hover,
        rel,
        shape,
        target
    });

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as
                },
                linkProps
            )}
        >
            {children}
            {showNewTabIndicator && <NewTabIndicator />}
        </Box>
    );
}

InnerLink.defaultElement = DefaultElement;

/**
 * Links allow a user to navigate between pages, scroll to a have page section, access files, or even to handle email addresses.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/link--default-story)
*/
export const Link = forwardRef<any, OmitInternalProps<InnerLinkProps>>((props, ref) => (
    <InnerLink {...props} forwardedRef={ref} />
));

export type LinkProps = ComponentProps<typeof Link>;

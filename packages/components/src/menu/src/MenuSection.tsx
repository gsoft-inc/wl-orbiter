import { Box } from "../../box/index.js";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, mergeProps } from "../../shared/index.js";
import { Span, UL } from "../../html/index.js";

const DefaultElement = "li";

export interface InnerMenuSectionProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * The section name.
     */
    title?: string;
}

export function InnerMenuSection({
    as = DefaultElement,
    children,
    forwardedRef,
    id,
    title,
    ...rest
}: InnerMenuSectionProps) {
    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: "o-ui-menu-section",
                    ref: forwardedRef,
                    role: "presentation"
                }
            )}
        >
            <Span
                aria-hidden="true"
                className="o-ui-menu-section-title"
                id={id}
            >
                {title}
            </Span>
            <UL
                aria-labelledby={id}
                className="o-ui-menu-section-items"
                role="group"
            >
                {children}
            </UL>
        </Box>
    );
}

InnerMenuSection.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/menu--default-story)
*/
export const MenuSection = forwardRef<any, OmitInternalProps<InnerMenuSectionProps>>((props, ref) => (
    <InnerMenuSection {...props} forwardedRef={ref} />
));

export type MenuSectionProps = ComponentProps<typeof MenuSection>;

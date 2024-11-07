import { Box } from "../../box/index.ts";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, SlotProps, StyledComponentProps, slot } from "../../shared/index.ts";

const DefaultElement = "div";

export interface InnerContentProps extends SlotProps, InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
}

export function InnerContent({
    as = DefaultElement,
    children,
    forwardedRef,
    ...rest
}: InnerContentProps) {
    return (
        <Box
            {...rest}
            as={as}
            ref={forwardedRef}
        >
            {children}
        </Box>
    );
}

InnerContent.defaultElement = DefaultElement;

/**
 * A placeholder for a content section.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/content--example)
*/
export const Content = slot("content", forwardRef<any, OmitInternalProps<InnerContentProps>>((props, ref) => (
    <InnerContent {...props} forwardedRef={ref} />
)));

export type ContentProps = ComponentProps<typeof Content>;

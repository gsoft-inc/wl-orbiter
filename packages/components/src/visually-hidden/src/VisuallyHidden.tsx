import { Box } from "../../box/index.js";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledHtmlAttributes, mergeProps } from "../../shared/index.js";

const DefaultElement = "div";

export interface InnerVisuallyHiddenProps extends InternalProps, StyledHtmlAttributes {
    /**
     * @ignore
     */
    children?: ReactNode;
}

export function InnerVisuallyHidden({
    as = DefaultElement,
    children,
    forwardedRef,
    ...rest
}: InnerVisuallyHiddenProps) {
    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: "o-ui-visually-hidden",
                    ref: forwardedRef
                }
            )}
        >
            {children}
        </Box>
    );
}

InnerVisuallyHidden.defaultElement = DefaultElement;

export const VisuallyHidden = forwardRef<any, OmitInternalProps<InnerVisuallyHiddenProps>>((props, ref) => (
    <InnerVisuallyHidden {...props} forwardedRef={ref} />
));

export type VisuallyHiddenProps = ComponentProps<typeof VisuallyHidden>;


import { Box } from "../../box/index.ts";
import { ComponentProps, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, mergeProps } from "../../shared/index.ts";

const DefaultElement = "div";

export interface InnerOverlayArrowProps extends InternalProps, StyledComponentProps<typeof DefaultElement> { }

export function InnerOverlayArrow({
    as = DefaultElement,
    forwardedRef,
    ...rest
}: InnerOverlayArrowProps) {
    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: "o-ui-overlay-arrow",
                    ref: forwardedRef
                }
            )}
        />
    );
}

InnerOverlayArrow.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/overlay--page)
*/
export const OverlayArrow = forwardRef<any, OmitInternalProps<InnerOverlayArrowProps>>((props, ref) => (
    <InnerOverlayArrow {...props} forwardedRef={ref} />
));

export type OverlayArrowProps = ComponentProps<typeof OverlayArrow>;


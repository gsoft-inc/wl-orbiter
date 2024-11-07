import { Box } from "../../box/index.ts";
import { ComponentProps, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, mergeProps } from "../../shared/index.ts";

const DefaultElement = "div";

export interface InnerUnderlayProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * The z-index of the underlay.
     */
    zIndex?: number;
}

export function InnerUnderlay({
    as = DefaultElement,
    forwardedRef,
    zIndex,
    ...rest
}: InnerUnderlayProps) {
    return (
        <Box
            {...mergeProps(
                rest,
                {
                    "aria-hidden": true,
                    as,
                    className: "o-ui-underlay",
                    ref: forwardedRef,
                    zIndex
                }
            )}
        />
    );
}

InnerUnderlay.defaultElement = DefaultElement;

export const Underlay = forwardRef<any, OmitInternalProps<InnerUnderlayProps>>((props, ref) => (
    <InnerUnderlay {...props} forwardedRef={ref} />
));

export type UnderlayProps = ComponentProps<typeof Underlay>;

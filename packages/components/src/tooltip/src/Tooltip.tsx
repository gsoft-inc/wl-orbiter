import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, mergeProps } from "../../shared/index.ts"

import { Text } from "../../typography/index.ts"

const DefaultElement = "div";

export interface InnerTooltipProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
}

export function InnerTooltip({
    as = DefaultElement,
    children,
    forwardedRef,
    ...rest
}: InnerTooltipProps) {
    return (
        <Text
            {...mergeProps(
                rest,
                {
                    as,
                    className: "o-ui-tooltip",
                    ref: forwardedRef,
                    role: "tooltip",
                    size: "xs" as const
                }
            )}
        >
            {children}
        </Text>
    );
}

InnerTooltip.defaultElement = DefaultElement;

/**
 * A tooltip is a popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/tooltip--default-story)
*/
export const Tooltip = forwardRef<any, OmitInternalProps<InnerTooltipProps>>((props, ref) => (
    <InnerTooltip {...props} forwardedRef={ref} />
));

export type TooltipProps = ComponentProps<typeof Tooltip>;

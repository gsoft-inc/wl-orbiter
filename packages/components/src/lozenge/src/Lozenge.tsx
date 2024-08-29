import { Box } from "../../box/index.js";
import { ComponentProps, ReactNode, forwardRef, useMemo } from "react";
import {
    InternalProps,
    OmitInternalProps,
    SlotProps,
    StyledComponentProps,
    createSizeAdapter,
    cssModule,
    mergeProps,
    normalizeSize,
    slot,
    useMergedRefs,
    useSlots
} from "../../shared/index.js";
import { ResponsiveProp, useResponsiveValue } from "../../styling/index.js";
import { Text } from "../../typography/index.js";

const DefaultElement = "span";

export interface InnerLozengeProps extends SlotProps, InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
.
     */
    fluid?: boolean;
    /**
   * Whether or not to add emphasis to the lozenge.
   */
    highlight?: boolean;
    /**
     * A lozenge can vary in size.
     */
    size?: ResponsiveProp<"sm" | "md">;
    /**
     * The lozenze style to use.
     */
    variant?: "informative" | "warning" | "positive" | "negative";
}

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const textSize = createSizeAdapter({
    "sm": "xs",
    "md": "xs"
});
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

export function InnerLozenge({
    as = DefaultElement,
    children,
    fluid,
    forwardedRef,
    highlight,
    size,
    variant = "informative",
    ...rest
}: InnerLozengeProps) {
    const sizeValue = useResponsiveValue(size);

    const ref = useMergedRefs(forwardedRef);

    const { icon, text } = useSlots(children, useMemo(() => ({
        _: {
            defaultWrapper: Text
        },
        icon: {
            className: "o-ui-lozenge-icon"
        },
        text: {
            className: "o-ui-lozenge-text",
            size: textSize(sizeValue)
        }
    }), [sizeValue]));

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: cssModule(
                        "o-ui-lozenge",
                        highlight && "highlight",
                        fluid && "fluid",
                        icon && "has-icon",
                        variant,
                        normalizeSize(sizeValue)
                    ),
                    ref
                }
            )}
        >
            {icon}
            {text}
        </Box>
    );
}

InnerLozenge.defaultElement = DefaultElement;

/**
 * Lozenges are used to highlight an item's status, for quick recognition or to give additional information such as highlighting a new item.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/lozenge--default-story)
*/
export const Lozenge = slot("lozenge", forwardRef<any, OmitInternalProps<InnerLozengeProps>>((props, ref) => (
    <InnerLozenge {...props} forwardedRef={ref} />
)));

export type LozengeProps = ComponentProps<typeof Lozenge>;

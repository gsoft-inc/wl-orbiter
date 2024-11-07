import { ColumnGapProp, GapProp, ResponsiveProp, RowGapProp, useResponsiveValue } from "../../styling/index.ts";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { Flex, FlexAlignmentProp, useFlexAlignment } from "./Flex.tsx";
import { InternalProps, OmitInternalProps, SlotProps, StyledComponentProps, mergeProps } from "../../shared/index.ts";

const DefaultElement = "div";

export interface InnerInlineProps extends
    // Keep it so it could be used with dynamic slots.
    SlotProps,
    InternalProps,
    Omit<StyledComponentProps<typeof DefaultElement>,
    "alignContent"
    | "alignItems"
    | "columnGap"
    | "display"
    | "flex"
    | "flexDirection"
    | "flexWrap"
    | "gap"
    | "justifyContent"
    | "row-gap"
    | "wrap"> {
    /**
      * The horizontal alignment of the elements.
      */
    alignX?: FlexAlignmentProp;
    /**
      * The vertical alignment of the elements.
      */
    alignY?: FlexAlignmentProp;
    /**
      * React children
     */
    children: ReactNode;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap).
     */
    columnGap?: ColumnGapProp;
    /**
      * Whether the elements take up all the space of their container.
      */
    fluid?: ResponsiveProp<boolean>;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).
     */
    gap?: GapProp;
    /**
     * Whether or not the element generate line breaks before or after himself.
     */
    inline?: boolean;
    /**
     * Whether or not to reverse the order of the elements.
     */
    reverse?: boolean;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap).
     */
    rowGap?: RowGapProp;
    /**
     * Whether or not to wrap the elements on multiple lines.
     */
    wrap?: ResponsiveProp<boolean>;
}

export function InnerInline({
    alignX,
    alignY,
    as = DefaultElement,
    children,
    forwardedRef,
    gap = "1.25rem",
    wrap = true,
    ...rest
}: InnerInlineProps) {
    const alignXValue = useResponsiveValue(alignX);
    const alignYValue = useResponsiveValue(alignY);
    const wrapValue = useResponsiveValue(wrap);

    const alignProps = useFlexAlignment({ alignX: alignXValue, alignY: alignYValue, orientation: "horizontal" });

    return (
        <Flex
            {...mergeProps(
                rest,
                {
                    as,
                    gap,
                    ref: forwardedRef,
                    wrap: wrapValue ? "wrap" as const : undefined
                },
                alignProps
            )}
        >
            {children}
        </Flex>
    );
}

InnerInline.defaultElement = DefaultElement;

/**
 * A layout container using flexbox.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/flex--horizontal)
*/
export const Inline = forwardRef<any, OmitInternalProps<InnerInlineProps>>((props, ref) => (
    <InnerInline {...props} forwardedRef={ref} />
));

export type InlineProps = ComponentProps<typeof Inline>;

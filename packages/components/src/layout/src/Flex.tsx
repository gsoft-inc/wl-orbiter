import {
    AlignContentProp,
    AlignItemsProp,
    ColumnGapProp,
    FlexBasisProp,
    FlexDirectionProp,
    FlexGrowProp,
    FlexShrinkProp,
    FlexWrapProp,
    GapProp,
    JustifyContentProp,
    ResponsiveProp,
    RowGapProp,
    useResponsiveValue
} from "../../styling/index.ts";
import { Box } from "../../box/index.ts";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, SlotProps, StyledComponentProps, isNil, mergeProps, omitProps } from "../../shared/index.ts";
import { Property } from "csstype";
import { useFormContext } from "../../form/index.ts";

export type FlexOrientation = "horizontal" | "vertical";
export type FlexAlignment = "start" | "end" | "center";

export type FlexOrientationProp = ResponsiveProp<FlexOrientation>;
export type FlexAlignmentProp = ResponsiveProp<FlexAlignment>;

export interface UseFlexAlignmentProps {
    alignX?: FlexAlignment;
    alignY?: FlexAlignment;
    orientation: FlexOrientation;
}

export function useFlexAlignment({ alignX, alignY, orientation }: UseFlexAlignmentProps) {
    return orientation === "horizontal"
        ? {
            alignItems: alignY,
            direction: "row" as FlexDirectionProp,
            justifyContent: alignX
        }
        : {
            alignItems: alignX,
            direction: "column" as FlexDirectionProp,
            justifyContent: alignY
        };
}

const DefaultElement = "div";

export type SafeAlignItemsProp = ResponsiveProp<Omit<Property.AlignItems, "flex-start" | "flex-end">>;

export type SafeJustifyContentProp = ResponsiveProp<Omit<Property.JustifyContent, "flex-start" | "flex-end">>;

export interface InnerFlexProps extends
    // Keep it so it could be used with dynamic slots.
    SlotProps,
    InternalProps,
    Omit<StyledComponentProps<typeof DefaultElement>,
    "alignContent"
    | "alignItems"
    | "columnGap"
    | "display"
    | "flex"
    | "flexBasis"
    | "flexDirection"
    | "flexWrap"
    | "gap"
    | "justifyContent"
    | "rowGap"
    | "wrap"> {
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
     */
    alignContent?: AlignContentProp;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
     */
    alignItems?: SafeAlignItemsProp;
    /**
     * Alias for [flex basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis);
     */
    basis?: FlexBasisProp;
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap).
     */
    columnGap?: ColumnGapProp;
    /**
     * Alias for [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction).
     */
    direction?: FlexDirectionProp;
    /**
     * Whether the elements take up all the space of their container.
     */
    fluid?: ResponsiveProp<boolean>;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).
     */
    gap?: GapProp;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow).
     */
    grow?: FlexGrowProp;
    /**
     * Whether or not the element generate line breaks before or after himself.
     */
    inline?: boolean;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
     */
    justifyContent?: SafeJustifyContentProp;
    /**
     * Whether or not to reverse the order of the elements.
     */
    reverse?: boolean;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap).
     */
    rowGap?: RowGapProp;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink).
     */
    shrink?: FlexShrinkProp;
    /**
     * Alias for [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap).
     */
    wrap?: FlexWrapProp;
}

export function InnerFlex(props: InnerFlexProps) {
    const [formProps, isInFormContext] = useFormContext();

    const {
        alignItems,
        as = DefaultElement,
        children,
        direction = "row",
        fluid,
        forwardedRef,
        grow,
        height,
        inline,
        justifyContent,
        reverse,
        shrink,
        width,
        wrap,
        ...rest
    } = mergeProps(
        // Defaults when a Flex is used in a form. These defaults are placed before "props" to ensure they have precedence.
        isInFormContext ? { columnGap: 160 as const, wrap: false } : {} as Record<string, any>,
        props,
        omitProps(formProps, ["disabled"])
    );

    const alignItemsValue = useResponsiveValue(alignItems);
    const directionValue = useResponsiveValue(direction);
    const fluidValue = useResponsiveValue(fluid);
    const justifyContentValue = useResponsiveValue(justifyContent);

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    // Normalize values until Chrome support `start` & `end`, https://developer.mozilla.org/en-US/docs/Web/CSS/align-items.
                    alignItems: (alignItemsValue && (alignItemsValue as string).replace("start", "flex-start").replace("end", "flex-end")) as AlignItemsProp,
                    as,
                    display: inline ? "inline-flex" as const : "flex" as const,
                    flexDirection: (directionValue ? `${directionValue}${reverse ? "-reverse" : ""}` : undefined) as FlexDirectionProp,
                    flexGrow: grow,
                    flexShrink: shrink,
                    flexWrap: wrap,
                    height: !isNil(height) ? height : (fluidValue && directionValue === "column" ? "100%" : undefined),
                    justifyContent: (justifyContentValue && (justifyContentValue as string).replace("start", "flex-start").replace("end", "flex-end")) as JustifyContentProp,
                    ref: forwardedRef,
                    width: !isNil(width) ? width : (fluidValue && directionValue === "row" ? "100%" : undefined)
                }
            )}
        >
            {children}
        </Box>
    );
}

InnerFlex.defaultElement = DefaultElement;

/**
 * A layout container using flexbox.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/flex--horizontal)
*/
export const Flex = forwardRef<any, OmitInternalProps<InnerFlexProps>>((props, ref) => (
    <InnerFlex {...props} forwardedRef={ref} />
));

export type FlexProps = ComponentProps<typeof Flex>;

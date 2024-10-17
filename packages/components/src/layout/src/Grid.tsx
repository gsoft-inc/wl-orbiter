import {
    AlignContentProp,
    AlignItemsProp,
    ColumnGapProp,
    GapProp,
    GridAutoColumnsProp,
    GridAutoFlowProp,
    GridAutoRowsProp,
    GridTemplateColumnsValue,
    GridTemplateRowsValue,
    JustifyContentProp,
    JustifyItemsProp,
    ResponsiveProp,
    RowGapProp,
    SpacingValue,
    getSizingValue,
    useResponsiveValue
} from "../../styling";
import { Box, type BoxProps } from "../../box";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, SlotProps, StyledComponentProps, isArray, isNil, mergeProps } from "../../shared";
import { useFormContext } from "../../form";

// See https://developer.mozilla.org/en-US/docs/Web/CSS/repeat.
export function repeat(count: number | "auto-fill" | "auto-fit", repetition: SpacingValue | SpacingValue[]) {
    return `repeat(${count}, ${isArray(repetition) ? interpolateGridTemplateArray(repetition) : getSizingValue(repetition)})`;
}

// See https://developer.mozilla.org/en-US/docs/Web/CSS/minmax.
export function minmax(min: SpacingValue, max: SpacingValue) {
    return `minmax(${getSizingValue(min)}, ${getSizingValue(max)})`;
}

// See https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content.
export function fitContent(dimension: SpacingValue) {
    return `fit-content(${getSizingValue(dimension)})`;
}

const DefaultElement = "div";

export interface InnerGridProps extends
    // Keep it so it could be used with dynamic slots.
    SlotProps,
    InternalProps,
    Omit<StyledComponentProps<typeof DefaultElement>,
    "alignContent"
    | "alignItems"
    | "columnGap"
    | "display"
    | "gap"
    | "gridAutoColumns"
    | "gridAutoRows"
    | "gridAutoFlow"
    | "gridTemplateAreas"
    | "gridTemplateColumns"
    | "gridTemplateRows"
    | "justifyContent"
    | "justifyItems"
    | "rowGap"
    | "ref"> {
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
     */
    alignContent?: AlignContentProp;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
     */
    alignItems?: AlignItemsProp;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas).
     */
    areas?: ResponsiveProp<string[]>;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns).
     */
    autoColumns?: GridAutoColumnsProp;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow).
     */
    autoFlow?: GridAutoFlowProp;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows).
     */
    autoRows?: GridAutoRowsProp;
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap).
     */
    columnGap?: ColumnGapProp;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).
     */
    gap?: GapProp;
    /**
     * Whether or not the element generate line breaks before or after himself.
     */
    inline?: boolean;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
     */
    justifyContent?: JustifyContentProp;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items).
     */
    justifyItems?: JustifyItemsProp;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap).
     */
    rowGap?: RowGapProp;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns).
     */
    templateColumns?: ResponsiveProp<GridTemplateColumnsValue | GridTemplateColumnsValue[]>;
    /**
     * See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows).
     */
    templateRows?: ResponsiveProp<GridTemplateRowsValue | GridTemplateRowsValue[]>;
}

function interpolateGridTemplateArray<T>(values: T[]) {
    return values.map(x => getSizingValue(x as any)).join(" ");
}

export function InnerGrid({
    areas,
    as = DefaultElement,
    autoColumns,
    autoFlow,
    autoRows,
    children,
    forwardedRef,
    inline,
    templateColumns,
    templateRows,
    ...rest
}: InnerGridProps) {
    const areasValue = useResponsiveValue(areas);
    const templateColumnsValue = useResponsiveValue(templateColumns);
    const templateRowsValue = useResponsiveValue(templateRows);

    const [, isInFormContext] = useFormContext();

    const gridTemplateColumns = !isNil(templateColumnsValue)
        ? isArray(templateColumnsValue) ? interpolateGridTemplateArray(templateColumnsValue) : templateColumnsValue
        : undefined;

    const gridTemplateRows = !isNil(templateRowsValue)
        ? isArray(templateRowsValue) ? interpolateGridTemplateArray(templateRowsValue) : templateRowsValue
        : undefined;

    // Specialized defaults when a Grid is used in a form.
    const formProps = isInFormContext ? { columnGap: 160 as const } : {};

    return (
        <Box
            {...mergeProps<Partial<BoxProps>[]>(
                rest,
                {
                    as,
                    display: inline ? "inline-grid" : "grid",
                    gridAutoColumns: autoColumns,
                    gridAutoFlow: autoFlow,
                    gridAutoRows: autoRows,
                    gridTemplateAreas: isArray(areasValue) ? areasValue.map(x => `"${x}"`).join(" ") : areasValue,
                    gridTemplateColumns: gridTemplateColumns,
                    gridTemplateRows: gridTemplateRows,
                    ref: forwardedRef
                },
                formProps
            )}
        >
            {children}
        </Box>
    );
}

InnerGrid.defaultElement = DefaultElement;

/**
 * A layout container using grid.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/grid--areas)
*/
export const Grid = forwardRef<any, OmitInternalProps<InnerGridProps>>((props, ref) => (
    <InnerGrid {...props} forwardedRef={ref} />
));

export type GridProps = ComponentProps<typeof Grid>;

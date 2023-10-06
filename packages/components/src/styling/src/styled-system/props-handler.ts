import { BorderRadiusPrefix, BorderRadiusSemanticPrefix, BoxShadowPrefix, ColorPrefix, DimensionsPrefix, FontSizePrefix, FontWeightPrefix, LineHeightPrefix, normalizeVariable } from "./theme-vars-utils";
import { Breakpoint } from "../BreakpointProvider";
import { Globals, Property } from "csstype";
import { ResponsiveProp, parseResponsiveValue } from "../useResponsiveValue";
import { LiteralUnion } from "type-fest";
import { isNil } from "../../../shared";
import { StylingContext } from "./StylingContext";

const GlobalValues = [
    "inherit",
    "initial",
    "revert",
    "unset"
];

export const ColorExpressionTypes = [
    "#",
    "rgb",
    "rgba",
    "hsl",
    "hsla"
] as const;

const DimensionsScale = [
    1280,
    960,
    800,
    640,
    480,
    400,
    320,
    240,
    160,
    80,
    40,
    20,
    0
] as const;

const OrbiterColors = [
    "samoyed",
    "rock-900",
    "rock-800",
    "rock-700",
    "rock-600",
    "rock-500",
    "rock-400",
    "rock-300",
    "rock-200",
    "rock-100",
    "rock-75",
    "rock-50",
    "rock-25",
    "rock-20",
    "abyss",
    "moss-900",
    "moss-800",
    "moss-700",
    "moss-600",
    "moss-500",
    "moss-400",
    "moss-300",
    "moss-200",
    "moss-100",
    "moss-75",
    "moss-50",
    "moss-25",
    "amanita-900",
    "amanita-800",
    "amanita-700",
    "amanita-600",
    "amanita-500",
    "amanita-400",
    "amanita-300",
    "amanita-200",
    "amanita-100",
    "amanita-75",
    "amanita-50",
    "amanita-25",
    "koi-900",
    "koi-800",
    "koi-700",
    "koi-600",
    "koi-500",
    "koi-400",
    "koi-300",
    "koi-200",
    "koi-100",
    "koi-75",
    "koi-50",
    "koi-25",
    "sunken-treasure-900",
    "sunken-treasure-800",
    "sunken-treasure-700",
    "sunken-treasure-600",
    "sunken-treasure-500",
    "sunken-treasure-400",
    "sunken-treasure-300",
    "sunken-treasure-200",
    "sunken-treasure-100",
    "sunken-treasure-75",
    "sunken-treasure-50",
    "sunken-treasure-25",
    "toad-200",
    "toad-100",
    "toad-75",
    "toad-50",
    "toad-25",
    "fog-900",
    "fog-800",
    "fog-700",
    "fog-600",
    "fog-500",
    "fog-400",
    "fog-300",
    "fog-200",
    "fog-100",
    "fog-75",
    "fog-50",
    "fog-25",
    "sapphire-900",
    "sapphire-800",
    "sapphire-700",
    "sapphire-600",
    "sapphire-500",
    "sapphire-400",
    "sapphire-300",
    "sapphire-200",
    "sapphire-100",
    "sapphire-75",
    "sapphire-50",
    "sapphire-25",
    "orchid-bloom-900",
    "orchid-bloom-800",
    "orchid-bloom-700",
    "orchid-bloom-600",
    "orchid-bloom-500",
    "orchid-bloom-400",
    "orchid-bloom-300",
    "orchid-bloom-200",
    "orchid-bloom-100",
    "orchid-bloom-75",
    "orchid-bloom-50",
    "orchid-bloom-25",
    "quetzal-900",
    "quetzal-800",
    "quetzal-700",
    "quetzal-600",
    "quetzal-500",
    "quetzal-400",
    "quetzal-300",
    "quetzal-200",
    "quetzal-100",
    "quetzal-75",
    "quetzal-50",
    "quetzal-25",
    "coastal-900",
    "coastal-800",
    "coastal-700",
    "coastal-600",
    "coastal-500",
    "coastal-400",
    "coastal-300",
    "coastal-200",
    "coastal-100",
    "coastal-75",
    "coastal-50",
    "coastal-25"
] as const;

const BackgroundColorAliases = [
    "status-positive-surface",
    "status-inactive-surface",
    "status-negative-surface",
    "status-caution-surface",
    "status-option4-surface",
    "status-option3-surface",
    "status-option2-surface",
    "status-option1-surface",
    "status-option5-surface",
    "status-option6-surface",
    "status-progress-surface",
    "status-neutral-surface",
    "information-surface",
    "success-surface",
    "warning-surface",
    "neutral-surface",
    "decorative-option1-surface",
    "decorative-option2-surface",
    "decorative-option3-surface",
    "decorative-option4-surface",
    "decorative-option6-surface",
    "decorative-option5-surface",
    "decorative-option7-surface",
    "decorative-option8-surface",
    "decorative-option9-surface",
    "primary-surface",
    "danger-surface",
    "upsell-surface",
    "status-positive-surface-strong",
    "status-inactive-surface-strong",
    "status-negative-surface-strong",
    "status-caution-surface-strong",
    "status-option4-surface-strong",
    "status-option3-surface-strong",
    "status-option2-surface-strong",
    "status-option1-surface-strong",
    "status-option5-surface-strong",
    "status-option6-surface-strong",
    "status-progress-surface-strong",
    "status-neutral-surface-strong",
    "information-surface-weak",
    "information-surface-strong",
    "success-surface-weak",
    "success-surface-strong",
    "warning-surface-weak",
    "warning-surface-strong",
    "neutral-surface-weakest",
    "neutral-surface-weak-hover",
    "neutral-surface-hover",
    "neutral-surface-strong",
    "neutral-surface-weak",
    "neutral-surface-active",
    "neutral-surface-disabled",
    "neutral-surface-weakest-hover",
    "neutral-surface-weakest-active",
    "decorative-option1-surface-hover",
    "decorative-option1-surface-strong",
    "decorative-option1-surface-weakest",
    "decorative-option1-surface-weak",
    "decorative-option2-surface-hover",
    "decorative-option2-surface-weak",
    "decorative-option3-surface-hover",
    "decorative-option3-surface-strong",
    "decorative-option3-surface-weakest",
    "decorative-option3-surface-weak",
    "decorative-option4-surface-hover",
    "decorative-option4-surface-strong",
    "decorative-option6-surface-strong",
    "decorative-option6-surface-hover",
    "decorative-option6-surface-weak",
    "decorative-option5-surface-hover",
    "decorative-option5-surface-strong",
    "decorative-option7-surface-hover",
    "decorative-option7-surface-strong",
    "decorative-option8-surface-strong",
    "decorative-option8-surface-hover",
    "decorative-option9-surface-hover",
    "decorative-option9-surface-strong",
    "primary-surface-active",
    "primary-surface-hover",
    "primary-surface-strong-hover",
    "primary-surface-strong-active",
    "primary-surface-strong",
    "primary-surface-weak",
    "primary-surface-focus",
    "primary-surface-disabled",
    "danger-surface-active",
    "danger-surface-weak",
    "danger-surface-strong-hover",
    "danger-surface-strong",
    "danger-surface-hover",
    "danger-surface-disabled",
    "upsell-surface-active",
    "upsell-surface-disabled",
    "upsell-surface-weak",
    "upsell-surface-hover"
] as const;

const BorderWidthAndStyle = "1px solid";

const BorderColorAliases = [
    "information-border",
    "success-border",
    "warning-border",
    "neutral-border-weakest",
    "neutral-border-active",
    "neutral-border-hover",
    "neutral-border-weak",
    "neutral-border",
    "neutral-border-strong",
    "neutral-border-disabled",
    "decorative-option1-border",
    "decorative-option2-border",
    "decorative-option3-border",
    "decorative-option4-border",
    "decorative-option6-border",
    "decorative-option5-border",
    "decorative-option7-border",
    "decorative-option8-border",
    "decorative-option9-border",
    "primary-border",
    "primary-border-focus",
    "primary-border-active",
    "danger-border",
    "danger-border-strong",
    "danger-border-active",
    "upsell-border-disabled",
    "upsell-border",
    "upsell-border-active"
] as const;

const IconColorAliases = [
    "status-positive-icon",
    "status-inactive-icon",
    "status-negative-icon",
    "status-caution-icon",
    "status-option4-icon",
    "status-option3-icon",
    "status-option2-icon",
    "status-option1-icon",
    "status-option5-icon",
    "status-option6-icon",
    "status-progress-icon",
    "status-neutral-icon",
    "information-icon",
    "information-icon-weak",
    "information-icon-weakest",
    "success-icon",
    "success-icon-weakest",
    "success-icon-weak",
    "warning-icon",
    "warning-icon-weak",
    "warning-icon-weakest",
    "neutral-icon-active",
    "neutral-icon-hover",
    "neutral-icon-strong",
    "neutral-icon-weakest",
    "neutral-icon-weak-hover",
    "neutral-icon-weak",
    "neutral-icon",
    "neutral-icon-disabled",
    "decorative-option1-icon",
    "decorative-option2-icon",
    "decorative-option3-icon",
    "decorative-option4-icon",
    "decorative-option6-icon",
    "decorative-option5-icon",
    "decorative-option7-icon",
    "decorative-option8-icon",
    "decorative-option9-icon",
    "primary-icon-disabled",
    "primary-icon-hover",
    "primary-icon",
    "primary-icon-strong-hover",
    "primary-icon-strong",
    "primary-icon-active",
    "danger-icon-disabled",
    "danger-icon-hover",
    "danger-icon-strong-hover",
    "danger-icon-strong",
    "danger-icon-weak",
    "danger-icon",
    "danger-icon-active",
    "upsell-icon",
    "upsell-icon-active",
    "upsell-icon-weak",
    "upsell-icon-weakest"
] as const;

const TextColorAliases = [
    "status-positive-text",
    "status-inactive-text",
    "status-negative-text",
    "status-caution-text",
    "status-option4-text",
    "status-option3-text",
    "status-option2-text",
    "status-option1-text",
    "status-option5-text",
    "status-option6-text",
    "status-progress-text",
    "status-neutral-text",
    "information-text",
    "success-text",
    "warning-text",
    "neutral-text",
    "decorative-option1-text",
    "decorative-option2-text",
    "decorative-option3-text",
    "decorative-option4-text",
    "decorative-option6-text",
    "decorative-option5-text",
    "decorative-option7-text",
    "decorative-option8-text",
    "decorative-option9-text",
    "primary-text",
    "danger-text",
    "upsell-text",
    "information-text-weak",
    "success-text-hover",
    "success-text-weak",
    "warning-text-weak",
    "neutral-text-weakest",
    "neutral-text-strong",
    "neutral-text-active",
    "neutral-text-disabled",
    "neutral-text-weak",
    "neutral-text-hover",
    "decorative-option1-text-weak",
    "decorative-option2-text-weak",
    "decorative-option3-text-weak",
    "decorative-option4-text-weak",
    "decorative-option6-text-weak",
    "decorative-option5-text-weak",
    "decorative-option7-text-weak",
    "decorative-option8-text-weak",
    "decorative-option9-text-weak",
    "primary-text-hover",
    "primary-text-strong-hover",
    "primary-text-strong",
    "primary-text-disabled",
    "primary-text-active",
    "danger-text-disabled",
    "danger-text-strong-hover",
    "danger-text-strong",
    "danger-text-weak",
    "danger-text-hover",
    "danger-text-active",
    "upsell-text-disabled",
    "upsell-text-hover",
    "upsell-text-active"
] as const;

const BorderRadiusScale = [
    0,
    1,
    2,
    3,
    4,
    9999
] as const;

const BorderRadiusAliases = [
    // BorderRadiusSemanticPrefix
    "rounded-sm",
    "rounded-md",
    "rounded-lg",
    "pill",
    "circle"
];

const BoxShadowScale = [
    "none",
    "sm",
    "md",
    "lg"
] as const;

const BoxShadowAliases = [
    "none",
    "raised",
    "lifted",
    "floating"
] as const;

const FontSizeScale = [
    480,
    360,
    320,
    280,
    240,
    200,
    180,
    160,
    140,
    120
] as const;

const FontWeightScale = [ // TODO: Make sure we are not setting font weight variation. This comment should not be in a PR
    690,
    680,
    590,
    580,
    505,
    410,
    400
] as const;

const LineHeightScale = [
    "1-50",
    "1-4285",
    "1-33",
    "1-25",
    "1-20",
    "1-14",
    "1-125"
] as const;

function createValuesMapping<T extends readonly (string | number)[]>(values: T, template: (value: T[number]) => string) {
    const mapping = {} as Record<T[number], string>;

    values.reduce((acc, x) => {
        acc[x] = template(x);

        return acc;
    }, mapping);

    return mapping;
}

function composePrefixes(...rest) {
    return rest.reduce((acc, prefix) => {
        return !isNil(prefix) ? `${acc}${acc !== "" ? "-" : ""}${prefix}` : acc;
    }, "");
}

function createPrefixedValueTemplate(prefix: string) {
    return (value: string | number) => `var(${normalizeVariable(value, { prefix })})`;
}

export const SpacingMapping = createValuesMapping(DimensionsScale, createPrefixedValueTemplate(DimensionsPrefix));

export const SizingMapping = createValuesMapping(DimensionsScale, createPrefixedValueTemplate(DimensionsPrefix));

export const ColorMapping = createValuesMapping(OrbiterColors, createPrefixedValueTemplate(ColorPrefix));

export const BackgroundColorMapping = {
    ...createValuesMapping(BackgroundColorAliases, createPrefixedValueTemplate(ColorPrefix)),
    ...ColorMapping
};

export const BorderMapping = {
    ...createValuesMapping(BorderColorAliases, value => `${BorderWidthAndStyle} var(${normalizeVariable(value, { prefix: composePrefixes(ColorPrefix, "b") })})`),
    ...createValuesMapping(OrbiterColors, value => `${BorderWidthAndStyle} var(${normalizeVariable(value, { prefix:ColorPrefix })})`)
};

export const BorderRadiusMapping = {
    ...createValuesMapping(BorderRadiusScale, createPrefixedValueTemplate(BorderRadiusPrefix)),
    ...createValuesMapping(BorderRadiusAliases, createPrefixedValueTemplate(BorderRadiusSemanticPrefix))
};

export const BoxShadowMapping = {
    ...createValuesMapping(BoxShadowScale, createPrefixedValueTemplate(BoxShadowPrefix)),
    ...createValuesMapping(BoxShadowAliases, createPrefixedValueTemplate(BoxShadowPrefix))
};

export const FontSizeMapping = createValuesMapping(FontSizeScale, createPrefixedValueTemplate(FontSizePrefix));

const fontVariationSettingsValueTemplate = (value: string | number) => `'wght' var(${normalizeVariable(value, { prefix: FontWeightPrefix })})`;

export const FontWeightMapping = createValuesMapping(FontWeightScale, fontVariationSettingsValueTemplate);

export const IconColorMapping = {
    ...createValuesMapping(IconColorAliases, createPrefixedValueTemplate(ColorPrefix)),
    ...ColorMapping
};

export const LineHeightMapping = createValuesMapping(LineHeightScale, createPrefixedValueTemplate(LineHeightPrefix));

export const TextColorMapping = {
    ...createValuesMapping(TextColorAliases, createPrefixedValueTemplate(composePrefixes(ColorPrefix, "text"))),
    ...ColorMapping
};

// Custom CSS color type to use instead of Property.Color to offer less useless values in intellisense and
// stop showing too many values in props docs.
// eslint-disable-next-line @typescript-eslint/ban-types
export type CssColor = Globals | "currentcolor" | (string & {});

// Custom fill type to use instead of Property.Fill to offer less useless values in intellisense and
// stop showing too many values in props docs.
// eslint-disable-next-line @typescript-eslint/ban-types
export type Fill = Globals | "child" | "context-fill" | "context-stroke" | "none" | (string & {});

export type BackgroundColorValue = keyof typeof BackgroundColorMapping | CssColor;
export type BorderValue = keyof typeof BorderMapping | Property.Border;
export type BorderRadiusValue = keyof typeof BorderRadiusMapping | Property.BorderRadius;
export type BoxShadowValue = keyof typeof BoxShadowMapping | Property.BoxShadow;
export type ColorValue = keyof typeof TextColorMapping | CssColor;
export type ColumnGapValue = keyof typeof SpacingMapping | Property.ColumnGap;
export type FillValue = keyof typeof IconColorMapping | Fill;
export type FontSizeValue = keyof typeof FontSizeMapping | Property.FontSize;
export type FontWeightValue = keyof typeof FontWeightMapping | typeof GlobalValues[number];
export type GapValue = keyof typeof SpacingMapping | Property.Gap;
export type GridAutoColumnsValue = keyof typeof SizingMapping | Property.GridAutoColumns;
export type GridAutoRowsValue = keyof typeof SizingMapping | Property.GridAutoRows;
export type GridTemplateColumnsValue = keyof typeof SizingMapping | Property.GridTemplateColumns;
export type GridTemplateRowsValue = keyof typeof SizingMapping | Property.GridTemplateRows;
export type HeightValue = keyof typeof SizingMapping | Property.Height;
export type LineHeightValue = keyof typeof LineHeightMapping | Property.LineHeight;
export type MarginValue = keyof typeof SpacingMapping | Property.Margin;
export type PaddingValue = keyof typeof SpacingMapping | Property.Padding;
export type RowGapValue = keyof typeof SpacingMapping | Property.RowGap;
export type SizingValue = LiteralUnion<keyof typeof SizingMapping, string>;
export type SpacingValue = LiteralUnion<keyof typeof SpacingMapping, string>;
export type StrokeValue = keyof typeof IconColorMapping | Property.Stroke;
export type WidthValue = keyof typeof SizingMapping | Property.Width;
export type AlignContentProp = ResponsiveProp<Property.AlignContent>;
export type AlignItemsProp = ResponsiveProp<Property.AlignItems>;
export type AlignSelfProp = ResponsiveProp<Property.AlignSelf>;
export type AspectRatioProp = ResponsiveProp<Property.AspectRatio>;
export type BackgroundColorProp = ResponsiveProp<BackgroundColorValue>;
export type BackgroundImageProp = ResponsiveProp<Property.BackgroundImage>;
export type BackgroundPositionProp = ResponsiveProp<Property.BackgroundPosition>;
export type BackgroundRepeatProp = ResponsiveProp<Property.BackgroundRepeat>;
export type BackgroundSizeProp = ResponsiveProp<Property.BackgroundSize>;
export type BorderProp = ResponsiveProp<BorderValue>;
export type BorderBottomProp = BorderProp;
export type BorderLeftProp = BorderProp;
export type BorderRightProp = BorderProp;
export type BorderTopProp = BorderProp;
export type BorderRadiusProp = ResponsiveProp<BorderRadiusValue>;
export type BorderBottomLeftRadiusProp = BorderRadiusProp;
export type BorderBottomRightRadiusProp = BorderRadiusProp;
export type BorderTopLeftRadiusProp = BorderRadiusProp;
export type BorderTopRightRadiusProp = BorderRadiusProp;
export type BottomProp = ResponsiveProp<Property.Bottom>;
export type BoxShadowProp = ResponsiveProp<BoxShadowValue>;
export type ColorProp = ResponsiveProp<ColorValue>;
export type ColumnGapProp = ResponsiveProp<ColumnGapValue>;
export type ContentProp = ResponsiveProp<Property.Content>;
export type ContentVisibilityProp = ResponsiveProp<Property.ContentVisibility>;
export type CursorProp = ResponsiveProp<Property.Cursor>;
export type DisplayProp = ResponsiveProp<Property.Display>;
export type FillProp = ResponsiveProp<FillValue>;
export type FilterProp = ResponsiveProp<Property.Filter>;
export type FlexProp = ResponsiveProp<Property.Flex>;
export type FlexBasisProp = ResponsiveProp<Property.FlexBasis>;
export type FlexDirectionProp = ResponsiveProp<Property.FlexDirection>;
export type FlexFlowProp = ResponsiveProp<Property.FlexFlow>;
export type FlexGrowProp = ResponsiveProp<Property.FlexGrow>;
export type FlexShrinkProp = ResponsiveProp<Property.FlexShrink>;
export type FlexWrapProp = ResponsiveProp<Property.FlexWrap>;
export type FontSizeProp = ResponsiveProp<FontSizeValue>;
export type FontStyleProp = ResponsiveProp<Property.FontStyle>;
export type FontWeightProp = ResponsiveProp<FontWeightValue>;
export type GapProp = ResponsiveProp<GapValue>;
export type GridProp = ResponsiveProp<Property.Grid>;
export type GridAreaProp = ResponsiveProp<Property.GridArea>;
export type GridAutoColumnsProp = ResponsiveProp<GridAutoColumnsValue>;
export type GridAutoFlowProp = ResponsiveProp<Property.GridAutoFlow>;
export type GridAutoRowsProp = ResponsiveProp<GridAutoRowsValue>;
export type GridColumnProp = ResponsiveProp<Property.GridColumn>;
export type GridColumnEndProp = ResponsiveProp<Property.GridColumnEnd>;
export type GridColumnSpanProp = ResponsiveProp<number>;
export type GridColumnStartProp = ResponsiveProp<Property.GridColumnStart>;
export type GridRowProp = ResponsiveProp<Property.GridRow>;
export type GridRowEndProp = ResponsiveProp<Property.GridRowEnd>;
export type GridRowStartProp = ResponsiveProp<Property.GridRowStart>;
export type GridRowSpanProp = ResponsiveProp<number>;
export type GridTemplateProp = ResponsiveProp<Property.GridTemplate>;
export type GridTemplateAreasProp = ResponsiveProp<Property.GridTemplateAreas>;
export type GridTemplateColumnsProp = ResponsiveProp<GridTemplateColumnsValue>;
export type GridTemplateRowsProp = ResponsiveProp<GridTemplateRowsValue>;
export type HeightProp = ResponsiveProp<HeightValue>;
export type JustifyContentProp = ResponsiveProp<Property.JustifyContent>;
export type JustifyItemsProp = ResponsiveProp<Property.JustifyItems>;
export type JustifySelfProp = ResponsiveProp<Property.JustifySelf>;
export type LeftProp = ResponsiveProp<Property.Left>;
export type LetterSpacingProp = ResponsiveProp<Property.LetterSpacing>;
export type LineHeightProp = ResponsiveProp<LineHeightValue>;
export type MarginProp = ResponsiveProp<MarginValue>;
export type MarginBottomProp = MarginProp;
export type MarginLeftProp = MarginProp;
export type MarginRightProp = MarginProp;
export type MarginTopProp = MarginProp;
export type MarginXProp = MarginProp;
export type MarginYProp = MarginProp;
export type MaxHeightProp = ResponsiveProp<HeightValue>;
export type MaxWidthProp = ResponsiveProp<WidthValue>;
export type MinHeightProp = ResponsiveProp<HeightValue>;
export type MinWidthProp = ResponsiveProp<WidthValue>;
export type ObjectFitProp = ResponsiveProp<Property.ObjectFit>;
export type ObjectPositionProp = ResponsiveProp<Property.ObjectPosition>;
export type OpacityProp = ResponsiveProp<Property.Opacity>;
export type OrderProp = ResponsiveProp<Property.Order>;
export type OutlineProp = ResponsiveProp<Property.Outline>;
export type OverflowProp = ResponsiveProp<Property.Overflow>;
export type OverflowXProp = ResponsiveProp<Property.OverflowX>;
export type OverflowYProp = ResponsiveProp<Property.OverflowY>;
export type PaddingProp = ResponsiveProp<PaddingValue>;
export type PaddingBottomProp = PaddingProp;
export type PaddingLeftProp = PaddingProp;
export type PaddingRightProp = PaddingProp;
export type PaddingTopProp = PaddingProp;
export type PaddingXProp = PaddingProp;
export type PaddingYProp = PaddingProp;
export type PointerEventsProp = ResponsiveProp<Property.PointerEvents>;
export type PositionProp = ResponsiveProp<Property.Position>;
export type ResizeProp = ResponsiveProp<Property.Resize>;
export type RightProp = ResponsiveProp<Property.Right>;
export type RowGapProp = ResponsiveProp<RowGapValue>;
export type StrokeProp = ResponsiveProp<StrokeValue>;
export type TextAlignProp = ResponsiveProp<Property.TextAlign | "justify-all">;
export type TextDecorationProp = ResponsiveProp<Property.TextDecoration>;
export type TextOverflowProp = ResponsiveProp<Property.TextOverflow>;
export type TextTransformProp = ResponsiveProp<Property.TextTransform>;
export type TopProp = ResponsiveProp<Property.Top>;
export type TransformProp = ResponsiveProp<Property.Transform>;
export type TransformOriginProp = ResponsiveProp<Property.TransformOrigin>;
export type TransformStyleProp = ResponsiveProp<Property.TransformStyle>;
export type VerticalAlignProp = ResponsiveProp<Property.VerticalAlign>;
export type VisibilityProp = ResponsiveProp<Property.Visibility>;
export type WhiteSpaceProp = ResponsiveProp<Property.WhiteSpace>;
export type WidthProp = ResponsiveProp<WidthValue>;
export type WillChangeProp = ResponsiveProp<Property.WillChange>;
export type WordBreakProp = ResponsiveProp<Property.WordBreak>;
export type ZIndexProp = ResponsiveProp<Property.ZIndex>;

export interface StyledSystemProps {
    /**
     * @ignore
     */
    alignContent?: AlignContentProp;
    /**
     * @ignore
     */
    alignItems?: AlignItemsProp;
    /**
     * @ignore
     */
    alignSelf?: AlignSelfProp;
    /**
     * @ignore
     */
    aspectRatio?: AspectRatioProp;
    /**
     * @ignore
     */
    backgroundColor?: BackgroundColorProp;
    /**
     * @ignore
     */
    backgroundColorActive?: BackgroundColorProp;
    /**
     * @ignore
     */
    backgroundColorFocus?: BackgroundColorProp;
    /**
     * @ignore
     */
    backgroundColorHover?: BackgroundColorProp;
    /**
     * @ignore
     */
    backgroundImage?: BackgroundImageProp;
    /**
     * @ignore
     */
    backgroundPosition?: BackgroundPositionProp;
    /**
     * @ignore
     */
    backgroundRepeat?: BackgroundRepeatProp;
    /**
     * @ignore
     */
    backgroundSize?: BackgroundSizeProp;
    /**
     * @ignore
     */
    border?: BorderProp;
    /**
     * @ignore
     */
    borderBottom?: BorderBottomProp;
    /**
     * @ignore
     */
    borderBottomActive?: BorderBottomProp;
    /**
     * @ignore
     */
    borderBottomFocus?: BorderBottomProp;
    /**
     * @ignore
     */
    borderBottomHover?: BorderBottomProp;
    /**
     * @ignore
     */
    borderBottomLeftRadius?: BorderRadiusProp;
    /**
     * @ignore
     */
    borderBottomRightRadius?: BorderRadiusProp;
    /**
     * @ignore
     */
    borderActive?: BorderProp;
    /**
     * @ignore
     */
    borderFocus?: BorderProp;
    /**
     * @ignore
     */
    borderHover?: BorderProp;
    /**
     * @ignore
     */
    borderLeft?: BorderLeftProp;
    /**
     * @ignore
     */
    borderLeftActive?: BorderLeftProp;
    /**
     * @ignore
     */
    borderLeftFocus?: BorderLeftProp;
    /**
     * @ignore
     */
    borderLeftHover?: BorderLeftProp;
    /**
     * @ignore
     */
    borderRadius?: BorderRadiusProp;
    /**
     * @ignore
     */
    borderRight?: BorderRightProp;
    /**
     * @ignore
     */
    borderRightActive?: BorderRightProp;
    /**
     * @ignore
     */
    borderRightFocus?: BorderRightProp;
    /**
     * @ignore
     */
    borderRightHover?: BorderRightProp;
    /**
     * @ignore
     */
    borderTop?: BorderTopProp;
    /**
     * @ignore
     */
    borderTopActive?: BorderTopProp;
    /**
     * @ignore
     */
    borderTopFocus?: BorderTopProp;
    /**
     * @ignore
     */
    borderTopHover?: BorderTopProp;
    /**
     * @ignore
     */
    borderTopLeftRadius?: BorderRadiusProp;
    /**
     * @ignore
     */
    borderTopRightRadius?: BorderRadiusProp;
    /**
     * @ignore
     */
    bottom?: BottomProp;
    /**
     * @ignore
     */
    boxShadow?: BoxShadowProp;
    /**
     * @ignore
     */
    boxShadowActive?: BoxShadowProp;
    /**
     * @ignore
     */
    boxShadowFocus?: BoxShadowProp;
    /**
     * @ignore
     */
    boxShadowHover?: BoxShadowProp;
    /**
     * @ignore
     */
    color?: ColorProp;
    /**
     * @ignore
     */
    colorActive?: ColorProp;
    /**
     * @ignore
     */
    colorFocus?: ColorProp;
    /**
     * @ignore
     */
    colorHover?: ColorProp;
    /**
     * @ignore
     */
    columnGap?: ColumnGapProp;
    /**
     * @ignore
     */
    content?: ContentProp;
    /**
     * @ignore
     */
    contentVisibility?: ContentVisibilityProp;
    /**
     * @ignore
     */
    cursor?: CursorProp;
    /**
     * @ignore
     */
    cursorHover?: CursorProp;
    /**
     * @ignore
     */
    display?: DisplayProp;
    /**
     * @ignore
     */
    fill?: FillProp;
    /**
     * @ignore
     */
    fillFocus?: FillProp;
    /**
     * @ignore
     */
    fillHover?: FillProp;
    /**
     * @ignore
     */
    filter?: FilterProp;
    /**
     * @ignore
     */
    flex?: FlexProp;
    /**
     * @ignore
     */
    flexBasis?: FlexBasisProp;
    /**
     * @ignore
     */
    flexDirection?: FlexDirectionProp;
    /**
     * @ignore
     */
    flexFlow?: FlexFlowProp;
    /**
     * @ignore
     */
    flexGrow?: FlexGrowProp;
    /**
     * @ignore
     */
    flexShrink?: FlexShrinkProp;
    /**
     * @ignore
     */
    flexWrap?: FlexWrapProp;
    /**
     * @ignore
     */
    fontSize?: FontSizeProp;
    /**
     * @ignore
     */
    fontStyle?: FontStyleProp;
    /**
     * @ignore
     */
    fontWeight?: FontWeightProp;
    /**
     * @ignore
     */
    gap?: GapProp;
    /**
     * @ignore
     */
    grid?: GridProp;
    /**
     * @ignore
     */
    gridArea?: GridAreaProp;
    /**
     * @ignore
     */
    gridAutoColumns?: GridAutoColumnsProp;
    /**
     * @ignore
     */
    gridAutoFlow?: GridAutoFlowProp;
    /**
     * @ignore
     */
    gridAutoRows?: GridAutoRowsProp;
    /**
     * @ignore
     */
    gridColumn?: GridColumnProp;
    /**
     * @ignore
     */
    gridColumnEnd?: GridColumnEndProp;
    /**
     * @ignore
     */
    gridColumnSpan?: GridColumnSpanProp;
    /**
     * @ignore
     */
    gridColumnStart?: GridColumnStartProp;
    /**
     * @ignore
     */
    gridRow?: GridRowProp;
    /**
     * @ignore
     */
    gridRowEnd?: GridRowEndProp;
    /**
     * @ignore
     */
    gridRowSpan?: GridRowSpanProp;
    /**
     * @ignore
     */
    gridRowStart?: GridRowStartProp;
    /**
     * @ignore
     */
    gridTemplate?: GridTemplateProp;
    /**
     * @ignore
     */
    gridTemplateAreas?: GridTemplateAreasProp;
    /**
     * @ignore
     */
    gridTemplateColumns?: GridTemplateColumnsProp;
    /**
     * @ignore
     */
    gridTemplateRows?: GridTemplateRowsProp;
    /**
     * @ignore
     */
    height?: HeightProp;
    /**
     * @ignore
     */
    justifyContent?: JustifyContentProp;
    /**
     * @ignore
     */
    justifyItems?: JustifyItemsProp;
    /**
     * @ignore
     */
    justifySelf?: JustifySelfProp;
    /**
     * @ignore
     */
    left?: LeftProp;
    /**
     * @ignore
     */
    letterSpacing?: LetterSpacingProp;
    /**
     * @ignore
     */
    lineHeight?: LineHeightProp;
    /**
     * @ignore
     */
    margin?: MarginProp;
    /**
     * @ignore
     */
    marginBottom?: MarginBottomProp;
    /**
     * @ignore
     */
    marginLeft?: MarginLeftProp;
    /**
     * @ignore
     */
    marginRight?: MarginRightProp;
    /**
     * @ignore
     */
    marginTop?: MarginTopProp;
    /**
     * @ignore
     */
    marginX?: MarginXProp;
    /**
     * @ignore
     */
    marginY?: MarginYProp;
    /**
     * @ignore
     */
    maxHeight?: MaxHeightProp;
    /**
     * @ignore
     */
    maxWidth?: MaxWidthProp;
    /**
     * @ignore
     */
    minHeight?: MinHeightProp;
    /**
     * @ignore
     */
    minWidth?: MinWidthProp;
    /**
     * @ignore
     */
    objectFit?: ObjectFitProp;
    /**
     * @ignore
     */
    objectPosition?: ObjectPositionProp;
    /**
     * @ignore
     */
    opacity?: OpacityProp;
    /**
     * @ignore
     */
    opacityActive?: OpacityProp;
    /**
     * @ignore
     */
    opacityFocus?: OpacityProp;
    /**
     * @ignore
     */
    opacityHover?: OpacityProp;
    /**
     * @ignore
     */
    order?: OrderProp;
    /**
     * @ignore
     */
    outline?: OutlineProp;
    /**
     * @ignore
     */
    outlineFocus?: OutlineProp;
    /**
     * @ignore
     */
    overflow?: OverflowProp;
    /**
     * @ignore
     */
    overflowX?: OverflowXProp;
    /**
     * @ignore
     */
    overflowY?: OverflowYProp;
    /**
     * @ignore
     */
    padding?: PaddingProp;
    /**
     * @ignore
     */
    paddingBottom?: PaddingBottomProp;
    /**
     * @ignore
     */
    paddingLeft?: PaddingLeftProp;
    /**
     * @ignore
     */
    paddingRight?: PaddingRightProp;
    /**
     * @ignore
     */
    paddingTop?: PaddingTopProp;
    /**
     * @ignore
     */
    paddingX?: PaddingXProp;
    /**
     * @ignore
     */
    paddingY?: PaddingYProp;
    /**
     * @ignore
     */
    pointerEvents?: PointerEventsProp;
    /**
     * @ignore
     */
    position?: PositionProp;
    /**
     * @ignore
     */
    resize?: ResizeProp;
    /**
     * @ignore
     */
    right?: RightProp;
    /**
     * @ignore
     */
    rowGap?: RowGapProp;
    /**
     * @ignore
     */
    stroke?: StrokeProp;
    /**
     * @ignore
     */
    textAlign?: TextAlignProp;
    /**
     * @ignore
     */
    textDecoration?: TextDecorationProp;
    /**
     * @ignore
     */
    textOverflow?: TextOverflowProp;
    /**
     * @ignore
     */
    textTransform?: TextTransformProp;
    /**
     * @ignore
     */
    top?: TopProp;
    /**
     * @ignore
     */
    transform?: TransformProp;
    /**
     * @ignore
     */
    transformOrigin?: TransformOriginProp;
    /**
     * @ignore
     */
    transformStyle?: TransformStyleProp;
    /**
     * @ignore
     */
    verticalAlign?: VerticalAlignProp;
    /**
     * @ignore
     */
    visibility?: VisibilityProp;
    /**
     * @ignore
     */
    whiteSpace?: WhiteSpaceProp;
    /**
     * @ignore
     */
    width?: WidthProp;
    /**
     * @ignore
     */
    willChange?: WillChangeProp;
    /**
     * @ignore
     */
    wordBreak?: WordBreakProp;
    /**
     * @ignore
     */
    zIndex?: ZIndexProp;
}

type PropHandler<TValue> = (name: string, value: TValue, context: StylingContext) => void;

function getSystemValue<T extends Record<string | number, string>>(value: keyof T, systemValues: T) {
    return systemValues[value as keyof typeof systemValues];
}

export function getSizingValue(value: string | keyof typeof SizingMapping) {
    const systemValue = getSystemValue(value as keyof typeof SizingMapping, SizingMapping);

    return systemValue ?? value;
}

function parseResponsiveSystemValue<TValue extends string | number>(value: TValue, systemValues: Record<TValue, string>, matchedBreakpoints: Breakpoint[]) {
    if (isNil(value)) {
        return value;
    }

    // Quick lookup since most values will be a non responsive system value and will not requires to parse for a responsive value.
    const systemValue = getSystemValue(value, systemValues);

    if (!isNil(systemValue)) {
        return systemValue;
    }

    const underlyingValue = parseResponsiveValue(value, matchedBreakpoints);

    if (!isNil(underlyingValue)) {
        const underlyingSystemValue = getSystemValue(underlyingValue, systemValues);

        if (!isNil(underlyingSystemValue)) {
            return underlyingSystemValue;
        }
    }

    return underlyingValue;
}

function createHandler<TValue extends string | number>(systemValues?: Record<TValue, string>): PropHandler<TValue> {
    const systemValueHandler: PropHandler<TValue> = (name, value, context) => {
        const parsedValue = parseResponsiveSystemValue(value, systemValues, context.matchedBreakpoints);

        if (!isNil(parsedValue)) {
            context.addStyleValue(name, parsedValue);
        }
    };

    const passThroughHandler: PropHandler<TValue> = (name, value, context: StylingContext) => {
        const parsedValue = parseResponsiveValue(value, context.matchedBreakpoints);

        if (!isNil(parsedValue)) {
            context.addStyleValue(name, parsedValue);
        }
    };

    return !isNil(systemValues) ? systemValueHandler : passThroughHandler;
}

function createPseudoHandler<TValue extends string | number>(pseudoClassName, pseudoVariable, systemValues?: Record<TValue, string>): PropHandler<TValue> {
    const systemValueHandler: PropHandler<TValue> = (name, value, context) => {
        const parsedValue = parseResponsiveSystemValue(value, systemValues, context.matchedBreakpoints);

        if (!isNil(parsedValue)) {
            context.addClass(pseudoClassName);
            context.addStyleValue(pseudoVariable, parsedValue);
        }
    };

    const passThroughHandler: PropHandler<TValue> = (name, value, context) => {
        const parsedValue = parseResponsiveValue(value, context.matchedBreakpoints);

        if (!isNil(parsedValue)) {
            context.addClass(pseudoClassName);
            context.addStyleValue(pseudoVariable, parsedValue);
        }
    };

    return !isNil(systemValues) ? systemValueHandler : passThroughHandler;
}

// Custom handler for borders to allow the following syntax:
// - border="sunken-treasure-900" -> style="1px solid var(--o-ui-warning-10)"
// - border="hsla(223, 12%, 87%, 1)" -> style="1px solid hsla(223, 12%, 87%, 1)"
function createBorderHandler<TValue extends string>(systemValues: Record<TValue, string>): PropHandler<TValue> {
    return (name, value, context) => {
        const parsedValue = parseResponsiveSystemValue(value, systemValues, context.matchedBreakpoints);

        if (!isNil(parsedValue)) {
            if (ColorExpressionTypes.some(x => parsedValue.startsWith(x))) {
                context.addStyleValue(name, `${BorderWidthAndStyle} ${parsedValue}`);
            } else {
                context.addStyleValue(name, parsedValue);
            }
        }
    };
}

function createBorderPseudoHandler<TValue extends string>(pseudoClassName: string, pseudoVariable: string, systemValues: Record<TValue, string>): PropHandler<TValue> {
    return (name, value, context) => {
        const parsedValue = parseResponsiveSystemValue(value, systemValues, context.matchedBreakpoints);

        if (!isNil(parsedValue)) {
            context.addClass(pseudoClassName);

            if (ColorExpressionTypes.some(x => parsedValue.startsWith(x))) {
                context.addStyleValue(pseudoVariable, `${BorderWidthAndStyle} ${parsedValue}`);
            } else {
                context.addStyleValue(pseudoVariable, parsedValue);
            }
        }
    };
}

// Custom handler for font-weight because of "fontVariationSettings".
const fontWeightHandler: PropHandler<string | number> = (name, value, context) => {
    const parsedValue = parseResponsiveSystemValue<string | number>(value, FontWeightMapping, context.matchedBreakpoints);

    if (!isNil(parsedValue)) {
        context.addStyleValue("fontVariationSettings", parsedValue);

        if (!GlobalValues.includes(parsedValue as string)) {
            context.addStyleValue("fontWeight", "400");
        }
    }
};

const gridColumnSpanHandler: PropHandler<string | number> = (name, value, context) => {
    const parsedValue = parseResponsiveValue(value, context.matchedBreakpoints);

    if (!isNil(parsedValue)) {
        context.addStyleValue("gridColumn", `span ${parsedValue} / span ${parsedValue}`);
    }
};

const gridRowSpanHandler: PropHandler<string | number> = (name, value, context) => {
    const parsedValue = parseResponsiveValue(value, context.matchedBreakpoints);

    if (!isNil(parsedValue)) {
        context.addStyleValue("gridRow", `span ${parsedValue} / span ${parsedValue}`);
    }
};

function createAxisHandler<TValue extends string>(firstPropName: string, secondPropName: string, systemValues: Record<TValue, string>): PropHandler<TValue> {
    const firstHandler = createHandler(systemValues);
    const secondHandler = createHandler(systemValues);

    return (name, value, context) => {
        firstHandler(firstPropName, value, context);
        secondHandler(secondPropName, value, context);
    };
}

export const PropsHandlers: Record<string, PropHandler<unknown>> = {
    alignContent: createHandler(),
    alignItems: createHandler(),
    alignSelf: createHandler(),
    aspectRatio: createHandler(),
    backgroundColor: createHandler(BackgroundColorMapping),
    backgroundColorActive: createPseudoHandler("o-ui-bg-active", "--o-ui-bg-active", BackgroundColorMapping),
    backgroundColorFocus: createPseudoHandler("o-ui-bg-focus", "--o-ui-bg-focus", BackgroundColorMapping),
    backgroundColorHover: createPseudoHandler("o-ui-bg-hover", "--o-ui-bg-hover", BackgroundColorMapping),
    backgroundImage: createHandler(),
    backgroundPosition: createHandler(),
    backgroundRepeat: createHandler(),
    backgroundSize: createHandler(),
    border: createBorderHandler(BorderMapping),
    borderBottom: createBorderHandler(BorderMapping),
    borderBottomActive: createBorderPseudoHandler("o-ui-bb-active", "--o-ui-bb-active", BorderMapping),
    borderBottomFocus: createBorderPseudoHandler("o-ui-bb-focus", "--o-ui-bb-focus", BorderMapping),
    borderBottomHover: createBorderPseudoHandler("o-ui-bb-hover", "--o-ui-bb-hover", BorderMapping),
    borderBottomLeftRadius: createHandler(BorderRadiusMapping),
    borderBottomRightRadius: createHandler(BorderRadiusMapping),
    borderActive: createBorderPseudoHandler("o-ui-b-active", "--o-ui-b-active", BorderMapping),
    borderFocus: createBorderPseudoHandler("o-ui-b-focus", "--o-ui-b-focus", BorderMapping),
    borderHover: createBorderPseudoHandler("o-ui-b-hover", "--o-ui-b-hover", BorderMapping),
    borderLeft: createBorderHandler(BorderMapping),
    borderLeftActive: createBorderPseudoHandler("o-ui-bl-active", "--o-ui-bl-active", BorderMapping),
    borderLeftFocus: createBorderPseudoHandler("o-ui-bl-focus", "--o-ui-bl-focus", BorderMapping),
    borderLeftHover: createBorderPseudoHandler("o-ui-bl-hover", "--o-ui-bl-hover", BorderMapping),
    borderRadius: createHandler(BorderRadiusMapping),
    borderRight: createBorderHandler(BorderMapping),
    borderRightActive: createBorderPseudoHandler("o-ui-br-active", "--o-ui-br-active", BorderMapping),
    borderRightFocus: createBorderPseudoHandler("o-ui-br-focus", "--o-ui-br-focus", BorderMapping),
    borderRightHover: createBorderPseudoHandler("o-ui-br-hover", "--o-ui-br-hover", BorderMapping),
    borderTop: createBorderHandler(BorderMapping),
    borderTopActive: createBorderPseudoHandler("o-ui-bt-active", "--o-ui-bt-active", BorderMapping),
    borderTopFocus: createBorderPseudoHandler("o-ui-bt-focus", "--o-ui-bt-focus", BorderMapping),
    borderTopHover: createBorderPseudoHandler("o-ui-bt-hover", "--o-ui-bt-hover", BorderMapping),
    borderTopLeftRadius: createHandler(BorderRadiusMapping),
    borderTopRightRadius: createHandler(BorderRadiusMapping),
    bottom: createHandler(),
    boxShadow: createHandler(BoxShadowMapping),
    boxShadowActive: createPseudoHandler("o-ui-bs-active", "--o-ui-bs-active", BoxShadowMapping),
    boxShadowFocus: createPseudoHandler("o-ui-bs-focus", "--o-ui-bs-focus", BoxShadowMapping),
    boxShadowHover: createPseudoHandler("o-ui-bs-hover", "--o-ui-bs-hover", BoxShadowMapping),
    color: createHandler(TextColorMapping),
    colorActive: createPseudoHandler("o-ui-c-active", "--o-ui-c-active", TextColorMapping),
    colorFocus: createPseudoHandler("o-ui-c-focus", "--o-ui-c-focus", TextColorMapping),
    colorHover: createPseudoHandler("o-ui-c-hover", "--o-ui-c-hover", TextColorMapping),
    columnGap: createHandler(SpacingMapping),
    content: createHandler(),
    contentVisibility: createHandler(),
    cursor: createHandler(),
    cursorHover: createPseudoHandler("o-ui-cs-hover", "--o-ui-cs-hover"),
    display: createHandler(),
    fill: createHandler(IconColorMapping),
    fillFocus: createPseudoHandler("o-ui-f-focus", "--o-ui-f-focus", IconColorMapping),
    fillHover: createPseudoHandler("o-ui-f-hover", "--o-ui-f-hover", IconColorMapping),
    filter: createHandler(),
    flex: createHandler(),
    flexBasis: createHandler(),
    flexDirection: createHandler(),
    flexFlow: createHandler(),
    flexGrow: createHandler(),
    flexShrink: createHandler(),
    flexWrap: createHandler(),
    fontSize: createHandler(FontSizeMapping),
    fontStyle: createHandler(),
    fontWeight: fontWeightHandler,
    gap: createHandler(SpacingMapping),
    grid: createHandler(),
    gridArea: createHandler(),
    gridAutoColumns: createHandler(SizingMapping),
    gridAutoFlow: createHandler(),
    gridAutoRows: createHandler(SizingMapping),
    gridColumn: createHandler(),
    gridColumnEnd: createHandler(),
    gridColumnSpan: gridColumnSpanHandler,
    gridColumnStart: createHandler(),
    gridRow: createHandler(),
    gridRowEnd: createHandler(),
    gridRowSpan: gridRowSpanHandler,
    gridRowStart: createHandler(),
    gridTemplate: createHandler(),
    gridTemplateAreas: createHandler(),
    gridTemplateColumns: createHandler(SizingMapping),
    gridTemplateRows: createHandler(SizingMapping),
    height: createHandler(SizingMapping),
    justifyContent: createHandler(),
    justifyItems: createHandler(),
    justifySelf: createHandler(),
    left: createHandler(),
    letterSpacing: createHandler(),
    lineHeight: createHandler(LineHeightMapping),
    margin: createHandler(SpacingMapping),
    marginBottom: createHandler(SpacingMapping),
    marginLeft: createHandler(SpacingMapping),
    marginRight: createHandler(SpacingMapping),
    marginTop: createHandler(SpacingMapping),
    marginX: createAxisHandler("marginLeft", "marginRight", SpacingMapping),
    marginY: createAxisHandler("marginBottom", "marginTop", SpacingMapping),
    maxHeight: createHandler(SizingMapping),
    maxWidth: createHandler(SizingMapping),
    minHeight: createHandler(SizingMapping),
    minWidth: createHandler(SizingMapping),
    objectFit: createHandler(),
    objectPosition: createHandler(),
    opacity: createHandler(),
    opacityActive: createPseudoHandler("o-ui-o-active", "--o-ui-o-active"),
    opacityFocus: createPseudoHandler("o-ui-o-focus", "--o-ui-o-focus"),
    opacityHover: createPseudoHandler("o-ui-o-hover", "--o-ui-o-hover"),
    order: createHandler(),
    outline: createHandler(),
    outlineFocus: createPseudoHandler("o-ui-ol-focus", "--o-ui-ol-focus"),
    overflow: createHandler(),
    overflowX: createHandler(),
    overflowY: createHandler(),
    padding: createHandler(SpacingMapping),
    paddingBottom: createHandler(SpacingMapping),
    paddingLeft: createHandler(SpacingMapping),
    paddingRight: createHandler(SpacingMapping),
    paddingTop: createHandler(SpacingMapping),
    paddingX: createAxisHandler("paddingLeft", "paddingRight", SpacingMapping),
    paddingY: createAxisHandler("paddingBottom", "paddingTop", SpacingMapping),
    pointerEvents: createHandler(),
    position: createHandler(),
    resize: createHandler(),
    right: createHandler(),
    rowGap: createHandler(SpacingMapping),
    stroke: createHandler(IconColorMapping),
    textAlign: createHandler(),
    textDecoration: createHandler(),
    textOverflow: createHandler(),
    textTransform: createHandler(),
    top: createHandler(),
    transform: createHandler(),
    transformOrigin: createHandler(),
    transformStyle: createHandler(),
    verticalAlign: createHandler(),
    visibility: createHandler(),
    whiteSpace: createHandler(),
    width: createHandler(SizingMapping),
    willChange: createHandler(),
    wordBreak: createHandler(),
    zIndex: createHandler()
};

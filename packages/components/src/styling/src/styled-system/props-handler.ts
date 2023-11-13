import {
    BorderRadiusPrefix,
    BorderRadiusSemanticPrefix,
    BoxShadowPrefix,
    ColorPrefix,
    DimensionsPrefix,
    ElevationPrefix,
    FontFamilyPrefix,
    FontFamilySemanticSuffix,
    FontSizePrefix,
    FontSizeSemanticSuffix,
    FontWeightPrefix,
    FontWeightSemanticSuffix,
    LineHeightPrefix,
    LineHeightSemanticSuffix,
    normalizeVariable
} from "./theme-vars-utils";
import { Breakpoint } from "../BreakpointProvider";
import { Globals, Property } from "csstype";
import { ResponsiveProp, parseResponsiveValue } from "../useResponsiveValue";
import { LiteralUnion } from "type-fest";
import { isNil } from "../../../shared";
import { StylingContext } from "./StylingContext";

export const GlobalValues = [
    "inherit",
    "initial",
    "revert",
    "unset"
] as const;

export const ColorExpressionTypes = [
    "#",
    "rgb",
    "rgba",
    "hsl",
    "hsla"
] as const;

export const DimensionsScale = [
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

export const SemanticSimplePaddingSpace = [
    "inset-xs",
    "inset-sm",
    "inset-md",
    "inset-lg",
    "inset-xl"
] as const;

export const SemanticComplexPaddingSpace = [
    "inset-squish-sm",
    "inset-squish-md",
    "inset-squish-lg",
    "inset-stretch-sm",
    "inset-stretch-md",
    "inset-stretch-lg"
] as const;

export const SemanticSimpleMarginSpace = [
    "stack-xs",
    "stack-sm",
    "stack-md",
    "stack-lg",
    "stack-xl",
    "inline-xs",
    "inline-sm",
    "inline-md",
    "inline-lg",
    "inline-xl"
] as const;

export const SemanticComplexMarginSpace = [];

export const OrbiterColors = [
    "coastal-25",
    "coastal-50",
    "coastal-75",
    "coastal-100",
    "coastal-200",
    "coastal-300",
    "coastal-400",
    "coastal-500",
    "coastal-600",
    "coastal-700",
    "coastal-800",
    "coastal-900",
    "quetzal-25",
    "quetzal-50",
    "quetzal-75",
    "quetzal-100",
    "quetzal-200",
    "quetzal-300",
    "quetzal-400",
    "quetzal-500",
    "quetzal-600",
    "quetzal-700",
    "quetzal-800",
    "quetzal-900",
    "orchid-bloom-25",
    "orchid-bloom-50",
    "orchid-bloom-75",
    "orchid-bloom-100",
    "orchid-bloom-200",
    "orchid-bloom-300",
    "orchid-bloom-400",
    "orchid-bloom-500",
    "orchid-bloom-600",
    "orchid-bloom-700",
    "orchid-bloom-800",
    "orchid-bloom-900",
    "sapphire-25",
    "sapphire-50",
    "sapphire-75",
    "sapphire-100",
    "sapphire-200",
    "sapphire-300",
    "sapphire-400",
    "sapphire-500",
    "sapphire-600",
    "sapphire-700",
    "sapphire-800",
    "sapphire-900",
    "fog-25",
    "fog-50",
    "fog-75",
    "fog-100",
    "fog-200",
    "fog-300",
    "fog-400",
    "fog-500",
    "fog-600",
    "fog-700",
    "fog-800",
    "fog-900",
    "toad-25",
    "toad-50",
    "toad-75",
    "toad-100",
    "toad-200",
    "toad-300",
    "toad-400",
    "toad-500",
    "toad-600",
    "toad-700",
    "toad-800",
    "toad-900",
    "sunken-treasure-25",
    "sunken-treasure-50",
    "sunken-treasure-75",
    "sunken-treasure-100",
    "sunken-treasure-200",
    "sunken-treasure-300",
    "sunken-treasure-400",
    "sunken-treasure-500",
    "sunken-treasure-600",
    "sunken-treasure-700",
    "sunken-treasure-800",
    "sunken-treasure-900",
    "koi-25",
    "koi-50",
    "koi-75",
    "koi-100",
    "koi-200",
    "koi-300",
    "koi-400",
    "koi-500",
    "koi-600",
    "koi-700",
    "koi-800",
    "koi-900",
    "amanita-25",
    "amanita-50",
    "amanita-75",
    "amanita-100",
    "amanita-200",
    "amanita-300",
    "amanita-400",
    "amanita-500",
    "amanita-600",
    "amanita-700",
    "amanita-800",
    "amanita-900",
    "moss-25",
    "moss-50",
    "moss-75",
    "moss-100",
    "moss-200",
    "moss-300",
    "moss-400",
    "moss-500",
    "moss-600",
    "moss-700",
    "moss-800",
    "moss-900",
    "abyss",
    "rock-20",
    "rock-25",
    "rock-50",
    "rock-75",
    "rock-100",
    "rock-200",
    "rock-300",
    "rock-400",
    "rock-500",
    "rock-600",
    "rock-700",
    "rock-800",
    "rock-900",
    "samoyed"
] as const;

export const BackgroundColorAliases = {
    "upsell-hover": "upsell-surface-hover",
    "upsell-weak": "upsell-surface-weak",
    "upsell-disabled": "upsell-surface-disabled",
    "upsell-active": "upsell-surface-active",
    "upsell": "upsell-surface",
    "danger": "danger-surface",
    "danger-disabled": "danger-surface-disabled",
    "danger-hover": "danger-surface-hover",
    "danger-strong": "danger-surface-strong",
    "danger-strong-hover": "danger-surface-strong-hover",
    "danger-weak": "danger-surface-weak",
    "danger-active": "danger-surface-active",
    "primary-disabled": "primary-surface-disabled",
    "primary-focus": "primary-surface-focus",
    "primary": "primary-surface",
    "primary-weak": "primary-surface-weak",
    "primary-strong": "primary-surface-strong",
    "primary-strong-active": "primary-surface-strong-active",
    "primary-strong-hover": "primary-surface-strong-hover",
    "primary-hover": "primary-surface-hover",
    "primary-active": "primary-surface-active",
    "decorative-option9": "decorative-option9-surface",
    "decorative-option9-strong": "decorative-option9-surface-strong",
    "decorative-option9-hover": "decorative-option9-surface-hover",
    "decorative-option9-weak": "decorative-option9-surface-weak",
    "decorative-option9-weak-hover": "decorative-option9-surface-weak-hover",
    "decorative-option9-weakest": "decorative-option9-surface-weakest",
    "decorative-option8-weakest": "decorative-option8-surface-weakest",
    "decorative-option8-weak": "decorative-option8-surface-weak",
    "decorative-option8-weak-hover": "decorative-option8-surface-weak-hover",
    "decorative-option8-hover": "decorative-option8-surface-hover",
    "decorative-option8-strong": "decorative-option8-surface-strong",
    "decorative-option8": "decorative-option8-surface",
    "decorative-option7-weakest": "decorative-option7-surface-weakest",
    "decorative-option7-weak": "decorative-option7-surface-weak",
    "decorative-option7-weak-hover": "decorative-option7-surface-weak-hover",
    "decorative-option7-strong": "decorative-option7-surface-strong",
    "decorative-option7-hover": "decorative-option7-surface-hover",
    "decorative-option7": "decorative-option7-surface",
    "decorative-option5-weakest": "decorative-option5-surface-weakest",
    "decorative-option5-weak": "decorative-option5-surface-weak",
    "decorative-option5-strong": "decorative-option5-surface-strong",
    "decorative-option5-hover": "decorative-option5-surface-hover",
    "decorative-option5": "decorative-option5-surface",
    "decorative-option6-weakest": "decorative-option6-surface-weakest",
    "decorative-option6-weak": "decorative-option6-surface-weak",
    "decorative-option6-weak-hover": "decorative-option6-surface-weak-hover",
    "decorative-option6-hover": "decorative-option6-surface-hover",
    "decorative-option6-strong": "decorative-option6-surface-strong",
    "decorative-option6": "decorative-option6-surface",
    "decorative-option4-weakest": "decorative-option4-surface-weakest",
    "decorative-option4-weak": "decorative-option4-surface-weak",
    "decorative-option4-weak-hover": "decorative-option4-surface-weak-hover",
    "decorative-option4-strong": "decorative-option4-surface-strong",
    "decorative-option4-hover": "decorative-option4-surface-hover",
    "decorative-option4": "decorative-option4-surface",
    "decorative-option3-weak": "decorative-option3-surface-weak",
    "decorative-option3-weak-hover": "decorative-option3-surface-weak-hover",
    "decorative-option3-weakest": "decorative-option3-surface-weakest",
    "decorative-option3-strong": "decorative-option3-surface-strong",
    "decorative-option3-hover": "decorative-option3-surface-hover",
    "decorative-option3": "decorative-option3-surface",
    "decorative-option2-weakest": "decorative-option2-surface-weakest",
    "decorative-option2-weak": "decorative-option2-surface-weak",
    "decorative-option2-weak-hover": "decorative-option2-surface-weak-hover",
    "decorative-option2-strong": "decorative-option2-surface-strong",
    "decorative-option2": "decorative-option2-surface",
    "decorative-option2-hover": "decorative-option2-surface-hover",
    "decorative-option1-weak": "decorative-option1-surface-weak",
    "decorative-option1-weak-hover": "decorative-option1-surface-weak-hover",
    "decorative-option1-weakest": "decorative-option1-surface-weakest",
    "decorative-option1-strong": "decorative-option1-surface-strong",
    "decorative-option1-hover": "decorative-option1-surface-hover",
    "decorative-option1": "decorative-option1-surface",
    "neutral-weakest-active": "neutral-surface-weakest-active",
    "neutral-weakest-hover": "neutral-surface-weakest-hover",
    "neutral-disabled": "neutral-surface-disabled",
    "neutral-active": "neutral-surface-active",
    "neutral-weak": "neutral-surface-weak",
    "neutral": "neutral-surface",
    "neutral-strong": "neutral-surface-strong",
    "neutral-hover": "neutral-surface-hover",
    "neutral-weak-hover": "neutral-surface-weak-hover",
    "neutral-weakest": "neutral-surface-weakest",
    "warning": "warning-surface",
    "warning-strong": "warning-surface-strong",
    "warning-weak": "warning-surface-weak",
    "success": "success-surface",
    "success-strong": "success-surface-strong",
    "success-weak": "success-surface-weak",
    "information-strong": "information-surface-strong",
    "information": "information-surface",
    "information-weak": "information-surface-weak",
    "status-neutral-strong": "status-neutral-surface-strong",
    "status-neutral": "status-neutral-surface",
    "status-progress-strong": "status-progress-surface-strong",
    "status-progress": "status-progress-surface",
    "status-option6-strong": "status-option6-surface-strong",
    "status-option6": "status-option6-surface",
    "status-option5-strong": "status-option5-surface-strong",
    "status-option5": "status-option5-surface",
    "status-option1-strong": "status-option1-surface-strong",
    "status-option1": "status-option1-surface",
    "status-option2-strong": "status-option2-surface-strong",
    "status-option2": "status-option2-surface",
    "status-option3-strong": "status-option3-surface-strong",
    "status-option3": "status-option3-surface",
    "status-option4-strong": "status-option4-surface-strong",
    "status-option4": "status-option4-surface",
    "status-caution-strong": "status-caution-surface-strong",
    "status-caution": "status-caution-surface",
    "status-negative-strong": "status-negative-surface-strong",
    "status-negative": "status-negative-surface",
    "status-inactive-strong": "status-inactive-surface-strong",
    "status-inactive": "status-inactive-surface",
    "status-positive-strong": "status-positive-surface-strong",
    "status-positive": "status-positive-surface"
} as const;

export const BorderWidthAndStyle = "0.0625rem solid";

export const BorderColorAliases = {
    "upsell-active": "upsell-border-active",
    "upsell": "upsell-border",
    "upsell-disabled": "upsell-border-disabled",
    "danger-active": "danger-border-active",
    "danger-strong": "danger-border-strong",
    "danger": "danger-border",
    "primary-active": "primary-border-active",
    "primary-focus": "primary-border-focus",
    "primary": "primary-border",
    "decorative-option9": "decorative-option9-border",
    "decorative-option8": "decorative-option8-border",
    "decorative-option7": "decorative-option7-border",
    "decorative-option5": "decorative-option5-border",
    "decorative-option6": "decorative-option6-border",
    "decorative-option4": "decorative-option4-border",
    "decorative-option3": "decorative-option3-border",
    "decorative-option2": "decorative-option2-border",
    "decorative-option1": "decorative-option1-border",
    "neutral-disabled": "neutral-border-disabled",
    "neutral-strong-hover": "neutral-border-strong-hover",
    "neutral-strong": "neutral-border-strong",
    "neutral": "neutral-border",
    "neutral-weak": "neutral-border-weak",
    "neutral-hover": "neutral-border-hover",
    "neutral-active": "neutral-border-active",
    "neutral-weakest": "neutral-border-weakest",
    "warning": "warning-border",
    "success": "success-border",
    "information": "information-border"
} as const;

export const IconColorAliases = {
    "upsell-weakest": "upsell-icon-weakest",
    "upsell-weak": "upsell-icon-weak",
    "upsell-active": "upsell-icon-active",
    "upsell": "upsell-icon",
    "danger-active": "danger-icon-active",
    "danger": "danger-icon",
    "danger-weak": "danger-icon-weak",
    "danger-strong": "danger-icon-strong",
    "danger-strong-hover": "danger-icon-strong-hover",
    "danger-hover": "danger-icon-hover",
    "danger-disabled": "danger-icon-disabled",
    "primary-active": "primary-icon-active",
    "primary-strong": "primary-icon-strong",
    "primary-strong-hover": "primary-icon-strong-hover",
    "primary": "primary-icon",
    "primary-hover": "primary-icon-hover",
    "primary-disabled": "primary-icon-disabled",
    "decorative-option9": "decorative-option9-icon",
    "decorative-option8": "decorative-option8-icon",
    "decorative-option7": "decorative-option7-icon",
    "decorative-option5": "decorative-option5-icon",
    "decorative-option6": "decorative-option6-icon",
    "decorative-option4": "decorative-option4-icon",
    "decorative-option3": "decorative-option3-icon",
    "decorative-option2": "decorative-option2-icon",
    "decorative-option1": "decorative-option1-icon",
    "neutral-disabled": "neutral-icon-disabled",
    "neutral": "neutral-icon",
    "neutral-weak": "neutral-icon-weak",
    "neutral-weak-hover": "neutral-icon-weak-hover",
    "neutral-weakest": "neutral-icon-weakest",
    "neutral-strong": "neutral-icon-strong",
    "neutral-hover": "neutral-icon-hover",
    "neutral-active": "neutral-icon-active",
    "warning-weakest": "warning-icon-weakest",
    "warning-weak": "warning-icon-weak",
    "warning": "warning-icon",
    "success-weak": "success-icon-weak",
    "success-weakest": "success-icon-weakest",
    "success": "success-icon",
    "information-weakest": "information-icon-weakest",
    "information-weak": "information-icon-weak",
    "information": "information-icon",
    "status-neutral": "status-neutral-icon",
    "status-progress": "status-progress-icon",
    "status-option6": "status-option6-icon",
    "status-option5": "status-option5-icon",
    "status-option1": "status-option1-icon",
    "status-option2": "status-option2-icon",
    "status-option3": "status-option3-icon",
    "status-option4": "status-option4-icon",
    "status-caution": "status-caution-icon",
    "status-negative": "status-negative-icon",
    "status-inactive": "status-inactive-icon",
    "status-positive": "status-positive-icon"
} as const;

export const TextColorAliases = {
    "upsell-active": "upsell-text-active",
    "upsell": "upsell-text",
    "upsell-hover": "upsell-text-hover",
    "upsell-disabled": "upsell-text-disabled",
    "danger-active": "danger-text-active",
    "danger-hover": "danger-text-hover",
    "danger": "danger-text",
    "danger-weak": "danger-text-weak",
    "danger-strong": "danger-text-strong",
    "danger-strong-hover": "danger-text-strong-hover",
    "danger-disabled": "danger-text-disabled",
    "primary-active": "primary-text-active",
    "primary-disabled": "primary-text-disabled",
    "primary": "primary-text",
    "primary-strong": "primary-text-strong",
    "primary-strong-hover": "primary-text-strong-hover",
    "primary-hover": "primary-text-hover",
    "decorative-option9": "decorative-option9-text",
    "decorative-option9-weak": "decorative-option9-text-weak",
    "decorative-option8-weak": "decorative-option8-text-weak",
    "decorative-option8": "decorative-option8-text",
    "decorative-option7-weak": "decorative-option7-text-weak",
    "decorative-option7": "decorative-option7-text",
    "decorative-option5-weak": "decorative-option5-text-weak",
    "decorative-option5": "decorative-option5-text",
    "decorative-option6": "decorative-option6-text",
    "decorative-option6-weak": "decorative-option6-text-weak",
    "decorative-option4-weak": "decorative-option4-text-weak",
    "decorative-option4": "decorative-option4-text",
    "decorative-option3": "decorative-option3-text",
    "decorative-option3-weak": "decorative-option3-text-weak",
    "decorative-option2": "decorative-option2-text",
    "decorative-option2-weak": "decorative-option2-text-weak",
    "decorative-option1-weak": "decorative-option1-text-weak",
    "decorative-option1": "decorative-option1-text",
    "neutral-hover": "neutral-text-hover",
    "neutral-weak": "neutral-text-weak",
    "neutral-disabled": "neutral-text-disabled",
    "neutral-active": "neutral-text-active",
    "neutral-strong": "neutral-text-strong",
    "neutral": "neutral-text",
    "neutral-weakest": "neutral-text-weakest",
    "warning-weak": "warning-text-weak",
    "warning": "warning-text",
    "success-weak": "success-text-weak",
    "success-hover": "success-text-hover",
    "success": "success-text",
    "information": "information-text",
    "information-weak": "information-text-weak",
    "status-neutral": "status-neutral-text",
    "status-progress": "status-progress-text",
    "status-option6": "status-option6-text",
    "status-option5": "status-option5-text",
    "status-option1": "status-option1-text",
    "status-option2": "status-option2-text",
    "status-option3": "status-option3-text",
    "status-option4": "status-option4-text",
    "status-caution": "status-caution-text",
    "status-negative": "status-negative-text",
    "status-inactive": "status-inactive-text",
    "status-positive": "status-positive-text"
} as const;

export const BorderRadiusScale = [
    0,
    1,
    2,
    3,
    4,
    9999
] as const;

export const BorderRadiusAliases = [
    "rounded-sm",
    "rounded-md",
    "rounded-lg",
    "pill",
    "circle"
];

export const BoxShadowScale = [
    "none",
    "sm",
    "md",
    "lg"
] as const;

export const BoxShadowAliases = [
    "none",
    "raised",
    "lifted",
    "floating"
] as const;

export const FontFamilyScale = [
    "primary",
    "secondary",
    "tertiary"
];

export const FontFamilyAliases = [
    "heading-3xl",
    "heading-2xl",
    "heading-xl",
    "heading-lg",
    "heading-md",
    "heading-sm",
    "heading-xs",
    "heading-xs-medium",
    "overline",
    "body-2xl",
    "body-xl",
    "body-lg",
    "body-lg-medium",
    "body-lg-semibold",
    "body-lg-bold",
    "body-lg-underline",
    "body-md",
    "body-md-medium",
    "body-md-semibold",
    "body-md-bold",
    "body-md-underline",
    "body-sm",
    "body-sm-medium",
    "body-sm-semibold",
    "body-sm-bold",
    "body-sm-underline",
    "body-xs",
    "body-xs-medium",
    "body-xs-semibold",
    "body-xs-bold",
    "body-xs-underline",
    "accent-lg",
    "accent-sm"
];

export const FontSizeScale = [
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

export const FontSizeAliases = [
    "heading-3xl",
    "heading-2xl",
    "heading-xl",
    "heading-lg",
    "heading-md",
    "heading-sm",
    "heading-xs",
    "heading-xs-medium",
    "overline",
    "body-2xl",
    "body-xl",
    "body-lg",
    "body-lg-medium",
    "body-lg-semibold",
    "body-lg-bold",
    "body-lg-underline",
    "body-md",
    "body-md-medium",
    "body-md-semibold",
    "body-md-bold",
    "body-md-underline",
    "body-sm",
    "body-sm-medium",
    "body-sm-semibold",
    "body-sm-bold",
    "body-sm-underline",
    "body-xs",
    "body-xs-medium",
    "body-xs-semibold",
    "body-xs-bold",
    "body-xs-underline",
    "accent-lg",
    "accent-sm"
] as const;

export const FontWeightScale = [
    690,
    680,
    590,
    580,
    505,
    410,
    400
] as const;

export const FontWeightAliases = [
    "heading-3xl",
    "heading-2xl",
    "heading-xl",
    "heading-lg",
    "heading-md",
    "heading-sm",
    "heading-xs",
    "heading-xs-medium",
    "overline",
    "body-2xl",
    "body-xl",
    "body-lg",
    "body-lg-medium",
    "body-lg-semibold",
    "body-lg-bold",
    "body-lg-underline",
    "body-md",
    "body-md-medium",
    "body-md-semibold",
    "body-md-bold",
    "body-md-underline",
    "body-sm",
    "body-sm-medium",
    "body-sm-semibold",
    "body-sm-bold",
    "body-sm-underline",
    "body-xs",
    "body-xs-medium",
    "body-xs-semibold",
    "body-xs-bold",
    "body-xs-underline",
    "accent-lg",
    "accent-sm"
] as const;

export const LineHeightScale = [
    "1-50",
    "1-4285",
    "1-33",
    "1-25",
    "1-20",
    "1-14",
    "1-125"
] as const;

export const LineHeightAliases = [
    "heading-3xl",
    "heading-2xl",
    "heading-xl",
    "heading-lg",
    "heading-md",
    "heading-sm",
    "heading-xs",
    "heading-xs-medium",
    "overline",
    "body-2xl",
    "body-xl",
    "body-lg",
    "body-lg-medium",
    "body-lg-semibold",
    "body-lg-bold",
    "body-lg-underline",
    "body-md",
    "body-md-medium",
    "body-md-semibold",
    "body-md-bold",
    "body-md-underline",
    "body-sm",
    "body-sm-medium",
    "body-sm-semibold",
    "body-sm-bold",
    "body-sm-underline",
    "body-xs",
    "body-xs-medium",
    "body-xs-semibold",
    "body-xs-bold",
    "body-xs-underline",
    "accent-lg",
    "accent-sm"
];

function createValuesMapping<T extends readonly (string | number)[]>(values: T, template: (value: T[number]) => string) {
    const mapping = {} as Record<T[number], string>;

    values.reduce((acc, x) => {
        acc[x] = template(x);

        return acc;
    }, mapping);

    return mapping;
}

function createAliasValuesMapping<T extends Record<string | number, string>>(values: T, template: (value: string) => string) {
    const mapping = {} as Record<keyof T, string>;

    Object.entries(values).reduce((acc, [key, value]) => {
        acc[key as keyof T] = template(value);

        return acc;
    }, mapping);

    return mapping;
}
function createPrefixedValueTemplate(prefix: string) {
    return (value: string | number) => `var(${normalizeVariable(value, { prefix })})`;
}

export const SpacingMapping = {
    ...createValuesMapping(DimensionsScale, createPrefixedValueTemplate(DimensionsPrefix))
};

export const SimplePaddingMapping = {
    ...createValuesMapping(SemanticSimplePaddingSpace, createPrefixedValueTemplate(DimensionsPrefix)),
    ...SpacingMapping
};

export const ComplexPaddingMapping = {
    ...createValuesMapping(SemanticComplexPaddingSpace, createPrefixedValueTemplate(DimensionsPrefix)),
    ...SimplePaddingMapping
};

export const SimpleMarginMapping = {
    ...SpacingMapping,
    ...createValuesMapping(SemanticSimpleMarginSpace, createPrefixedValueTemplate(DimensionsPrefix))
};

export const ComplexMarginMapping = {
    ...SimpleMarginMapping,
    ...createValuesMapping(SemanticComplexMarginSpace, createPrefixedValueTemplate(DimensionsPrefix))
};

export const SizingMapping = {
    ...createValuesMapping(DimensionsScale, createPrefixedValueTemplate(DimensionsPrefix))
};

export const ColorMapping = createValuesMapping(OrbiterColors, createPrefixedValueTemplate(ColorPrefix));

export const BackgroundColorMapping = {
    ...createAliasValuesMapping(BackgroundColorAliases, createPrefixedValueTemplate(ColorPrefix)),
    ...ColorMapping
};

export const BorderMapping = {
    ...createAliasValuesMapping(BorderColorAliases, value => `${BorderWidthAndStyle} var(${normalizeVariable(value, { prefix: ColorPrefix })})`),
    ...createValuesMapping(OrbiterColors, value => `${BorderWidthAndStyle} var(${normalizeVariable(value, { prefix: ColorPrefix })})`)
};

export const BorderRadiusMapping = {
    ...createValuesMapping(BorderRadiusScale, createPrefixedValueTemplate(BorderRadiusPrefix)),
    ...createValuesMapping(BorderRadiusAliases, createPrefixedValueTemplate(BorderRadiusSemanticPrefix))
};

export const BoxShadowMapping = {
    ...createValuesMapping(BoxShadowScale, createPrefixedValueTemplate(BoxShadowPrefix)),
    ...createValuesMapping(BoxShadowAliases, createPrefixedValueTemplate(ElevationPrefix))
};


export const FontFamilyMapping = {
    ...createValuesMapping(FontFamilyScale, createPrefixedValueTemplate(FontFamilyPrefix)),
    ...createValuesMapping(FontFamilyAliases, (value: string | number) => `var(${normalizeVariable(value, { suffix: FontFamilySemanticSuffix })})`)
};

export const FontSizeMapping = {
    ...createValuesMapping(FontSizeScale, createPrefixedValueTemplate(FontSizePrefix)),
    ...createValuesMapping(FontSizeAliases, (value: string | number) => `var(${normalizeVariable(value, { suffix: FontSizeSemanticSuffix })})`)
};

export const FontWeightMapping = {
    ...createValuesMapping(FontWeightScale, (value: string | number) => `var(${normalizeVariable(value, { prefix: FontWeightPrefix })})`),
    ...createValuesMapping(FontWeightAliases, (value: string | number) => `var(${normalizeVariable(value, { suffix: FontWeightSemanticSuffix })})`)
};

export const IconColorMapping = {
    ...createAliasValuesMapping(IconColorAliases, createPrefixedValueTemplate(ColorPrefix)),
    ...ColorMapping
};

export const LineHeightMapping = {
    ...createValuesMapping(LineHeightScale, createPrefixedValueTemplate(LineHeightPrefix)),
    ...createValuesMapping(LineHeightAliases, (value: string | number) => `var(${normalizeVariable(value, { suffix: LineHeightSemanticSuffix })})`)
};

export const TextColorMapping = {
    ...createAliasValuesMapping(TextColorAliases, createPrefixedValueTemplate(ColorPrefix)),
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
export type ColumnGapValue = keyof typeof SimpleMarginMapping | Property.ColumnGap;
export type FillValue = keyof typeof IconColorMapping | Fill;
export type FontFamilyValue = keyof typeof FontFamilyMapping | Property.FontFamily;
export type FontSizeValue = keyof typeof FontSizeMapping | Property.FontWeight;
export type FontWeightValue = keyof typeof FontWeightMapping | typeof GlobalValues[number];
export type GapValue = keyof typeof SimpleMarginMapping | Property.Gap;
export type GridAutoColumnsValue = keyof typeof SizingMapping | Property.GridAutoColumns;
export type GridAutoRowsValue = keyof typeof SizingMapping | Property.GridAutoRows;
export type GridTemplateColumnsValue = keyof typeof SizingMapping | Property.GridTemplateColumns;
export type GridTemplateRowsValue = keyof typeof SizingMapping | Property.GridTemplateRows;
export type HeightValue = keyof typeof SizingMapping | Property.Height;
export type LineHeightValue = keyof typeof LineHeightMapping | Property.LineHeight;
export type SimpleMarginValue = keyof typeof SimpleMarginMapping | Property.Margin;
export type ComplexMarginValue = keyof typeof ComplexMarginMapping | Property.Margin;
export type SimplePaddingValue = keyof typeof SimplePaddingMapping | Property.Padding;
export type ComplexPaddingValue = keyof typeof ComplexPaddingMapping | Property.Padding;
export type RowGapValue = keyof typeof SimpleMarginMapping | Property.RowGap;
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
export type FontFamilyProp = ResponsiveProp<FontFamilyValue>;
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
export type MarginProp = ResponsiveProp<ComplexMarginValue>;
export type MarginBottomProp = ResponsiveProp<SimpleMarginValue>;
export type MarginLeftProp = ResponsiveProp<SimpleMarginValue>;
export type MarginRightProp = ResponsiveProp<SimpleMarginValue>;
export type MarginTopProp = ResponsiveProp<SimpleMarginValue>;
export type MarginXProp = ResponsiveProp<SimpleMarginValue>;
export type MarginYProp = ResponsiveProp<SimpleMarginValue>;
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
export type PaddingProp = ResponsiveProp<ComplexPaddingValue>;
export type PaddingBottomProp = ResponsiveProp<SimplePaddingValue>;
export type PaddingLeftProp = ResponsiveProp<SimplePaddingValue>;
export type PaddingRightProp = ResponsiveProp<SimplePaddingValue>;
export type PaddingTopProp = ResponsiveProp<SimplePaddingValue>;
export type PaddingXProp = ResponsiveProp<SimplePaddingValue>;
export type PaddingYProp = ResponsiveProp<SimplePaddingValue>;
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
    fontFamily?: FontFamilyProp;
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
    columnGap: createHandler(SimpleMarginMapping),
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
    fontFamily: createHandler(FontFamilyMapping),
    fontSize: createHandler(FontSizeMapping),
    fontStyle: createHandler(),
    fontWeight: createHandler(FontWeightMapping),
    gap: createHandler(SimpleMarginMapping),
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
    margin: createHandler(ComplexMarginMapping),
    marginBottom: createHandler(SimpleMarginMapping),
    marginLeft: createHandler(SimpleMarginMapping),
    marginRight: createHandler(SimpleMarginMapping),
    marginTop: createHandler(SimpleMarginMapping),
    marginX: createAxisHandler("marginLeft", "marginRight", SimpleMarginMapping),
    marginY: createAxisHandler("marginBottom", "marginTop", SimpleMarginMapping),
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
    padding: createHandler(ComplexPaddingMapping),
    paddingBottom: createHandler(SimplePaddingMapping),
    paddingLeft: createHandler(SimplePaddingMapping),
    paddingRight: createHandler(SimplePaddingMapping),
    paddingTop: createHandler(SimplePaddingMapping),
    paddingX: createAxisHandler("paddingLeft", "paddingRight", SimplePaddingMapping),
    paddingY: createAxisHandler("paddingBottom", "paddingTop", SimplePaddingMapping),
    pointerEvents: createHandler(),
    position: createHandler(),
    resize: createHandler(),
    right: createHandler(),
    rowGap: createHandler(SimpleMarginMapping),
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

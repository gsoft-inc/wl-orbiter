import { isNil } from "../../../shared";

export function normalizeVariable(name: string | number, nameOptions?: {
    prefix?: string;
    suffix?: string;
}) {
    const prefixed = isNil(nameOptions?.prefix) ? `--hop-${name}` : `--hop-${nameOptions.prefix}-${name}`;

    return isNil(nameOptions?.suffix) ? prefixed : `${prefixed}-${nameOptions.suffix}`;
}

// core
export const BorderRadiusPrefix = "border-radius";
export const ColorPrefix = null;
export const DimensionsPrefix = "space";
export const FontFamilyPrefix = "font-family";
export const FontSizePrefix = "font-size";
export const FontWeightPrefix = "font-weight";
export const LineHeightPrefix = "line-height";
export const BoxShadowPrefix = "shadow";

// semantic
export const BorderRadiusSemanticPrefix = "shape";
export const ElevationPrefix = "elevation";
// color no prefix
// dimension same as non-semantic
export const FontFamilySemanticSuffix = "font-family";
export const FontSizeSemanticSuffix = "font-size";
export const FontWeightSemanticSuffix = "font-weight";
export const LineHeightSemanticSuffix = "line-height";
// box shadow same as non-semantic

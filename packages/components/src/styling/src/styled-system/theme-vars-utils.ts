import { isNil } from "../../../shared";

export function normalizeVariable(name: string | number, prefix?: string) {
    return isNil(prefix) ? `--o-ui-${name}` : `--o-ui-${prefix}-${name}`;
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
// color no prefix
// dimension same as non-semantic
export const FontFamilySemanticSuffix = "font-family";
export const FontSizeSemanticSuffix = "font-size";
export const FontWeightSemanticSuffix = "font-weight";
export const LineHeightSemanticSuffix = "line-height";
// box shadow same as non-semantic

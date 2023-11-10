import {
    boxShadowRenderer,
    backgroundRenderer,
    borderRenderer,
    textRenderer,
    iconRenderer,
    fontSizeRenderer,
    fontWeightRenderer,
    lineHeightRenderer,
    radiiRenderer,
    fontFamilyRenderer,
    paddingRenderer,
    marginRenderer,
    sizingRenderer
} from "./TokenTable";
import {
    BackgroundColorMapping,
    TextColorMapping,
    IconColorMapping,
    BoxShadowMapping,
    BorderMapping,
    BorderWidthAndStyle,
    BoxShadowAliases,
    IconColorAliases,
    TextColorAliases,
    BorderColorAliases,
    BackgroundColorAliases,
    FontSizeMapping,
    FontSizeAliases,
    FontWeightMapping,
    FontWeightAliases,
    LineHeightMapping,
    LineHeightAliases,
    BorderRadiusMapping,
    BorderRadiusAliases,
    FontFamilyMapping,
    FontFamilyAliases,
    SimplePaddingMapping,
    ComplexPaddingMapping,
    SemanticSimplePaddingSpace,
    SemanticComplexPaddingSpace,
    SemanticSimpleMarginSpace,
    SimpleMarginMapping,
    ComplexMarginMapping,
    SemanticComplexMarginSpace,
    SizingMapping
} from "@components/styling";

function toTokenValue(key, value) {
    return {
        token: key,
        variable: value.replace("var(", "").replace(")", "")
    };
}

function coreAndSemanticTokenSplitter(allMappings, semanticKeys, renderer, additionalTokenTransformationMethod = null) {
    return Object.entries(allMappings).reduce((acc, [key, value]) => {
        let collectionRef = acc.Semantic;
        if (!semanticKeys.includes(key)) {
            collectionRef = acc.Core;
        }

        let token = {
            ...toTokenValue(key, value),
            itemRenderer: renderer
        };

        if (additionalTokenTransformationMethod) {
            token = additionalTokenTransformationMethod(token);
        }

        collectionRef.push(token);

        return acc;
    }, { Core: [], Semantic: [] });
}

export const BackgroundColors = coreAndSemanticTokenSplitter(BackgroundColorMapping, Object.keys(BackgroundColorAliases), backgroundRenderer);
export const BorderColors = coreAndSemanticTokenSplitter(BorderMapping, Object.keys(BorderColorAliases), borderRenderer, token => {
    return {
        ...token,
        variable: token.variable.replace(BorderWidthAndStyle, "").trim()
    };
});

export const TextColors = coreAndSemanticTokenSplitter(TextColorMapping, Object.keys(TextColorAliases), textRenderer);
export const IconColors = coreAndSemanticTokenSplitter(IconColorMapping, Object.keys(IconColorAliases), iconRenderer);

export const Shadows = coreAndSemanticTokenSplitter(BoxShadowMapping, BoxShadowAliases, boxShadowRenderer);

export const FontFamily = coreAndSemanticTokenSplitter(FontFamilyMapping, FontFamilyAliases, fontFamilyRenderer);
export const FontSizes = coreAndSemanticTokenSplitter(FontSizeMapping, FontSizeAliases, fontSizeRenderer);
export const FontWeight = coreAndSemanticTokenSplitter(FontWeightMapping, FontWeightAliases, fontWeightRenderer);
export const LineHeight = coreAndSemanticTokenSplitter(LineHeightMapping, LineHeightAliases, lineHeightRenderer);

export const Radii = coreAndSemanticTokenSplitter(BorderRadiusMapping, BorderRadiusAliases, radiiRenderer);

export const Sizing = coreAndSemanticTokenSplitter(SizingMapping, [], sizingRenderer);
export const SimplePadding = coreAndSemanticTokenSplitter(SimplePaddingMapping, SemanticSimplePaddingSpace, paddingRenderer);
export const ComplexPadding = coreAndSemanticTokenSplitter(ComplexPaddingMapping, SemanticComplexPaddingSpace, paddingRenderer);
export const SimpleMargin = coreAndSemanticTokenSplitter(SimpleMarginMapping, SemanticSimpleMarginSpace, marginRenderer);
export const ComplexMargin = coreAndSemanticTokenSplitter(ComplexMarginMapping, SemanticComplexMarginSpace, marginRenderer);

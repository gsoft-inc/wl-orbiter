import { useMatchedBreakpoints } from "../BreakpointProvider.js";
import { useMemo } from "react";
import { isNil } from "../../../shared/index.js";
import { StylingContext } from "./StylingContext.js";
import { PropsHandlers, StyledSystemProps } from "./props-handler.js";

/*
SYNTAX:

// No breakpoint, no pseudo, known value
<Button backgroundColor="koi-900">Toto</Button>

// No breakpoint, no pseudo, dynamic value
<Button backgroundColor="#fff">Toto</Button>

// No breakpoint, pseudo, known value
<Button backgroundColorHover="sunken-treasure-300">Toto</Button>

// No breakpoint, pseudo, dynamic value
<Button backgroundColorHover="#fff">Toto</Button>

// Breakpoint, no pseudo, known value
<Button backgroundColor={{ sm: "warning-10", md: "accent-10", lg: "black" }}>Toto</Button>

// Breakpoint, no pseudo, dynamic value
<Button backgroundColor={{ sm: "warning-10", md: "#fff", lg: "black" }}>Toto</Button>

// Breakpoint, pseudo, known value
<Button backgroundColorHover={{ sm: "sunken-treasure-300", md: "accent-10", lg: "black" }}>Toto</Button>

// Breakpoint, pseudo, dynamic value
<Button backgroundColorHover={{ sm: "sunken-treasure-300", md: "#fff", lg: "black" }}>Toto</Button>
*/

export function useStyledSystem<TProps extends Record<string, any>>(props: TProps) {
    const {
        alignContent,
        alignItems,
        alignSelf,
        aspectRatio,
        backgroundColor,
        backgroundColorActive,
        backgroundColorFocus,
        backgroundColorHover,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        border,
        borderBottom,
        borderBottomActive,
        borderBottomFocus,
        borderBottomHover,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderFocus,
        borderHover,
        borderActive,
        borderLeft,
        borderLeftActive,
        borderLeftFocus,
        borderLeftHover,
        borderRadius,
        borderRight,
        borderRightActive,
        borderRightFocus,
        borderRightHover,
        borderTop,
        borderTopActive,
        borderTopFocus,
        borderTopHover,
        borderTopLeftRadius,
        borderTopRightRadius,
        bottom,
        boxShadow,
        boxShadowActive,
        boxShadowFocus,
        boxShadowHover,
        className,
        color,
        colorActive,
        colorFocus,
        colorHover,
        columnGap,
        content,
        contentVisibility,
        cursor,
        cursorHover,
        display,
        fill,
        fillFocus,
        fillHover,
        filter,
        flex,
        flexBasis,
        flexDirection,
        flexFlow,
        flexGrow,
        flexShrink,
        flexWrap,
        fontFamily,
        fontSize,
        fontStyle,
        fontWeight,
        gap,
        grid,
        gridArea,
        gridAutoColumns,
        gridAutoFlow,
        gridAutoRows,
        gridColumn,
        gridColumnEnd,
        gridColumnSpan,
        gridColumnStart,
        gridRow,
        gridRowEnd,
        gridRowSpan,
        gridRowStart,
        gridTemplate,
        gridTemplateAreas,
        gridTemplateColumns,
        gridTemplateRows,
        height,
        justifyContent,
        justifyItems,
        justifySelf,
        left,
        letterSpacing,
        lineHeight,
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginX,
        marginY,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        objectFit,
        objectPosition,
        opacity,
        opacityActive,
        opacityFocus,
        opacityHover,
        order,
        outline,
        outlineFocus,
        overflow,
        overflowX,
        overflowY,
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingX,
        paddingY,
        pointerEvents,
        position,
        resize,
        right,
        rowGap,
        stroke,
        style,
        textAlign,
        textDecoration,
        textOverflow,
        textTransform,
        top,
        transform,
        transformOrigin,
        transformStyle,
        verticalAlign,
        visibility,
        whiteSpace,
        width,
        willChange,
        wordBreak,
        zIndex,
        ...rest
    } = props;

    const matchedBreakpoints = useMatchedBreakpoints();

    // We don't have to add "props" as a dependency because useStyledSystem return the "rest" which is all the props that are not already a dependency
    // of this memoization. If we do add props, the memoization will refresh on every render, which is bad, so don't do it.
    /* eslint-disable react-hooks/exhaustive-deps */
    const styling = useMemo(() => {
        const context = new StylingContext(className, style, matchedBreakpoints);

        Object.keys(props).forEach(key => {
            const value = props[key];

            if (!isNil(value)) {
                const handler = PropsHandlers[key];

                if (!isNil(handler)) {
                    handler(key, value, context);
                }
            }
        });

        return context.computeStyling();
    }, [
        alignContent,
        alignItems,
        alignSelf,
        aspectRatio,
        backgroundColor,
        backgroundColorActive,
        backgroundColorFocus,
        backgroundColorHover,
        backgroundImage,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        border,
        borderBottom,
        borderBottomActive,
        borderBottomFocus,
        borderBottomHover,
        borderLeft,
        borderLeftActive,
        borderLeftFocus,
        borderLeftHover,
        borderRight,
        borderRightActive,
        borderRightFocus,
        borderRightHover,
        borderTop,
        borderTopActive,
        borderTopFocus,
        borderTopHover,
        borderActive,
        borderFocus,
        borderHover,
        borderRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderTopLeftRadius,
        borderTopRightRadius,
        boxShadow,
        boxShadowActive,
        boxShadowFocus,
        boxShadowHover,
        bottom,
        matchedBreakpoints,
        className,
        color,
        colorActive,
        colorFocus,
        colorHover,
        columnGap,
        content,
        contentVisibility,
        cursor,
        cursorHover,
        display,
        fill,
        fillFocus,
        fillHover,
        filter,
        flex,
        flexBasis,
        flexDirection,
        flexFlow,
        flexGrow,
        flexShrink,
        flexWrap,
        fontFamily,
        fontSize,
        fontStyle,
        fontWeight,
        gap,
        grid,
        gridArea,
        gridAutoColumns,
        gridAutoFlow,
        gridAutoRows,
        gridColumn,
        gridColumnEnd,
        gridColumnSpan,
        gridColumnStart,
        gridRow,
        gridRowEnd,
        gridRowSpan,
        gridRowStart,
        gridTemplate,
        gridTemplateAreas,
        gridTemplateColumns,
        gridTemplateRows,
        height,
        justifyContent,
        justifyItems,
        justifySelf,
        left,
        letterSpacing,
        lineHeight,
        margin,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginX,
        marginY,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        objectFit,
        objectPosition,
        opacity,
        opacityActive,
        opacityFocus,
        opacityHover,
        order,
        outline,
        outlineFocus,
        overflow,
        overflowX,
        overflowY,
        padding,
        paddingBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingX,
        paddingY,
        pointerEvents,
        position,
        resize,
        right,
        rowGap,
        stroke,
        style,
        textAlign,
        textDecoration,
        textOverflow,
        textTransform,
        top,
        transform,
        transformOrigin,
        transformStyle,
        verticalAlign,
        visibility,
        whiteSpace,
        width,
        willChange,
        wordBreak,
        zIndex
    ]);
    /* eslint-enable react-hooks/exhaustive-deps */

    return {
        ...rest,
        className: styling.className,
        style: styling.style
    } as Omit<TProps, keyof StyledSystemProps>;
}

export function isStyledSystemProp(name: string) {
    return !isNil(PropsHandlers[name]);
}

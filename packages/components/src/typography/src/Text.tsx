import { Box } from "../../box/index.js";
import { ComponentProps, forwardRef } from "react";
import { InternalProps, OmitInternalProps, SlotProps, StyledComponentProps, cssModule, mergeProps, normalizeSize, slot } from "../../shared/index.js";
import { ResponsiveProp, useResponsiveValue, useStyleProps } from "../../styling/index.js";

const DefaultElement = "span";

export interface InnerTextProps extends SlotProps, InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * A text can vary in size.
     */
    size?: ResponsiveProp<"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "inherit">;
}

export function InnerText(props: InnerTextProps) {
    const [styleProps] = useStyleProps<InnerTextProps>("text");

    const {
        as = DefaultElement,
        children,
        forwardedRef,
        size,
        ...rest
    } = mergeProps(
        props,
        styleProps
    );

    const sizeValue = useResponsiveValue(size);

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: cssModule(
                        "o-ui-text",
                        sizeValue && sizeValue === "inherit" ? "inherit-size" : normalizeSize(sizeValue)
                    ),
                    ref: forwardedRef
                }
            )}
        >
            {children}
        </Box>
    );
}

InnerText.defaultElement = DefaultElement;

/**
 * A primitive text component matching Orbiter typography type scale.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/text--size)
*/
export const Text = slot("text", forwardRef<any, OmitInternalProps<InnerTextProps>>((props, ref) => (
    <InnerText {...props} forwardedRef={ref} />
)));

export type TextProps = ComponentProps<typeof Text>;

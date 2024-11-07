import { IconColorMapping, BackgroundColorProp, useResponsiveValue } from "../../styling/index.ts";
import { useMemo, ComponentProps, forwardRef } from "react";
import { InternalProps, OmitInternalProps, SlotProps, StyledComponentProps, cssModule, isNil, mergeProps, slot } from "../../shared/index.ts";
import { Box } from "../../box/index.ts";
import { Text } from "../../typography/index.ts";

const DefaultElement = "span";

export interface InnerDotProps extends SlotProps, InternalProps, Omit<StyledComponentProps<typeof DefaultElement>, "color"> {
    /**
     * The dot color.
     */
    color?: BackgroundColorProp;
}

function useColor(color: string) {
    return useMemo(() => {
        if (!isNil(color)) {
            if (color.startsWith("rgb") || color.startsWith("hsl") || color.startsWith("#")) {
                return color;
            } else if (color.startsWith("--")) {
                return `var(${color})`;
            // This logic should be reworked and not imported as is in Hopper. Accessing the Mapping directly feels weird.
            } else if (!isNil(IconColorMapping[color])) {
                return IconColorMapping[color];
            }

            return color;
        }
    }, [color]);
}

export function InnerDot(props: InnerDotProps) {
    const {
        as = DefaultElement,
        children,
        color,
        forwardedRef,
        ...rest
    } = props;

    const colorValue = useResponsiveValue(color);

    const labelMarkup = children && (
        <Text>
            {children}
        </Text>
    );

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: cssModule(
                        "o-ui-dot",
                        children && "has-label"
                    ),
                    ref: forwardedRef,
                    style: {
                        ["--o-ui-dot-color" as any]: useColor(colorValue)
                    }
                }
            )}
        >
            {labelMarkup}
        </Box>
    );
}

InnerDot.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/dot--default-story)
*/
export const Dot = slot("dot", forwardRef<any, OmitInternalProps<InnerDotProps>>((props, ref) => (
    <InnerDot {...props} forwardedRef={ref} />
)));

export type DotProps = ComponentProps<typeof Dot>;

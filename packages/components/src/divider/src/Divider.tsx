import { Box } from "../../box/index.ts"
import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, cssModule, mergeProps } from "../../shared/index.ts"
import { ResponsiveProp, useResponsiveValue } from "../../styling/index.ts"
import { Text } from "../../typography/index.ts"

const DefaultElement = "div";

export interface InnerDividerProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * @ignore
     */
    children?: ReactNode;
    /**
     * The orientation of the divider.
     */
    orientation?: ResponsiveProp<"horizontal" | "vertical">;
}

export function InnerDivider({
    as = DefaultElement,
    children,
    forwardedRef,
    orientation = "horizontal",
    ...rest
}: InnerDividerProps) {
    const orientationValue = useResponsiveValue(orientation);

    const labelMarkup = children && (
        <Text className="o-ui-divider-label" size="sm">
            {children}
        </Text>
    );

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    "aria-orientation": orientationValue,
                    as,
                    className: cssModule(
                        "o-ui-divider",
                        labelMarkup && "has-label"
                    ),
                    ref: forwardedRef,
                    role: "separator"
                }
            )}
        >
            {labelMarkup}
        </Box>
    );
}

InnerDivider.defaultElement = DefaultElement;

/**
 * A divider to separates and distinguishes sections of content or groups of menu items.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/divider--horizontal)
*/
export const Divider = forwardRef<any, OmitInternalProps<InnerDividerProps>>((props, ref) => (
    <InnerDivider {...props} forwardedRef={ref} />
));

export type DividerProps = ComponentProps<typeof Divider>;


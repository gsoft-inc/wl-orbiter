import { AbstractGroupProps, Group } from "../../group";
import { Children, ComponentProps, ReactElement, forwardRef } from "react";
import { OmitInternalProps, SlotProps, augmentElement, cssModule, mergeProps, normalizeSize, omitProps, slot } from "../../shared";
import { ResponsiveProp, useResponsiveValue } from "../../styling";
import { useFieldInputProps } from "../../field";

const DefaultElement = "div";

export interface InnerButtonGroupProps extends Omit<AbstractGroupProps<typeof DefaultElement>, "gap">, SlotProps {
    /**
     * Whether or not the buttons are disabled.
     */
    disabled?: boolean;
    /**
     * The buttons size.
     */
    size?: ResponsiveProp<"sm" | "md">;
}

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const Gap = {
    "horizontal": {
        "sm": 80,
        "md": 160
    },
    "vertical": {
        "sm": 80,
        "md": 160
    }
} as const;
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

export function InnerButtonGroup(props: InnerButtonGroupProps) {
    const [fieldProps, isInField] = useFieldInputProps();

    const {
        align,
        as = DefaultElement,
        children,
        disabled,
        fluid,
        forwardedRef,
        orientation = "horizontal",
        size,
        wrap = true,
        ...rest
    } = mergeProps(
        props,
        omitProps(fieldProps, ["fluid"])
    );

    const orientationValue = useResponsiveValue(orientation);
    const sizeValue = useResponsiveValue(size);

    return (
        <Group
            {...mergeProps(
                rest,
                {
                    align,
                    as,
                    className: cssModule(
                        "o-ui-button-group",
                        isInField && "in-field"
                    ),
                    fluid,
                    gap: Gap[orientationValue][normalizeSize(sizeValue)],
                    orientation,
                    ref: forwardedRef,
                    role: !isInField ? "group" : undefined,
                    wrap
                }
            )}
        >
            {Children.toArray(children).filter(x => x).map((x: ReactElement) => {
                return augmentElement(x, {
                    disabled,
                    fluid,
                    size: sizeValue
                });
            })}
        </Group>
    );
}

InnerButtonGroup.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app//?path=/docs/button--default-story)
*/
export const ButtonGroup = slot("button-group", forwardRef<any, OmitInternalProps<InnerButtonGroupProps>>((props, ref) => (
    <InnerButtonGroup {...props} forwardedRef={ref} />
)));

export type ButtonGroupProps = ComponentProps<typeof ButtonGroup>;

import { ComponentProps, ElementType, SVGProps, forwardRef } from "react";
import { InternalProps, OmitInternalProps, SlotProps, cssModule, isNil, mergeProps, normalizeSize, slot } from "../../shared";
import { ResponsiveProp, StyledSystemProps, useResponsiveValue, useStyleProps } from "../../styling";

import { Box } from "../../box";

export type IconSize = "inherit";

export interface InnerIconProps extends
    StyledSystemProps,
    SlotProps,
    Omit<InternalProps, "as">,
    Omit<SVGProps<SVGSVGElement>, keyof StyledSystemProps> {
    /**
     * Whether or not the icon should look disabled.
     */
    disabled?: boolean;
    /**
     * An icon as a component.
     */
    src: ElementType;
}

export const InnerIcon = ((props: InnerIconProps) => {
    const [styleProps] = useStyleProps<InnerIconProps>("icon");

    const {
        "aria-label": ariaLabel,
        disabled,
        forwardedRef,
        src,
        ...rest
    } = mergeProps(
        props,
        styleProps
    );

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    "aria-hidden": isNil(ariaLabel),
                    "aria-label": ariaLabel,
                    as: src,
                    className: cssModule(
                        "o-ui-icon",
                        disabled && "disabled",
                    ),
                    // View https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html#svgs-that-are-decorative
                    focusable: false,
                    ref: forwardedRef
                }
            )}
        />
    );
});

export const Icon = slot("icon", forwardRef<SVGSVGElement, OmitInternalProps<InnerIconProps>>((props, ref) => (
    <InnerIcon {...props} forwardedRef={ref} />)
));

export type IconProps = ComponentProps<typeof Icon>;

////////

export type CreatedIconProps = OmitInternalProps<InnerIconProps, "src">;

export function createIcon(src: ElementType) {
    return slot("icon", forwardRef<SVGSVGElement, CreatedIconProps>((props, ref) =>
        <InnerIcon
            {...props}
            forwardedRef={ref}
            src={src}
        />
    ));
}

import { Box } from "../../box/index.ts"
import { ComponentProps, ElementType, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, SlotProps, StyledComponentProps, cssModule, mergeProps, normalizeSize, slot } from "../../shared/index.ts"
import { ResponsiveProp, useResponsiveValue, useStyleProps } from "../../styling/index.ts"

export type AbstractHeadingProps<T extends ElementType> = SlotProps & InternalProps & StyledComponentProps<T> & {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * A heading can vary in size.
     */
    size?: ResponsiveProp<"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl">;
};

const DefaultElement = "div";

export type InnerHeadingProps = AbstractHeadingProps<typeof DefaultElement>;

export function InnerHeading(props: InnerHeadingProps) {
    const [styleProps] = useStyleProps<InnerHeadingProps>("heading");

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
                        "o-ui-heading",
                        normalizeSize(sizeValue)
                    ),
                    ref: forwardedRef
                }
            )}
        >
            {children}
        </Box>
    );
}

InnerHeading.defaultElement = DefaultElement;

/**
 * Heading is used to create various levels of typographic hierarchies.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/heading--default-story)
*/
export const Heading = slot("heading", forwardRef<any, OmitInternalProps<InnerHeadingProps>>((props, ref) => (
    <InnerHeading {...props} forwardedRef={ref} />
)));

export type HeadingProps = ComponentProps<typeof Heading>;

/////////////

function createHeading(as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") {
    return slot("heading", forwardRef<any, OmitInternalProps<AbstractHeadingProps<typeof as>>>((props, ref) => (
        <InnerHeading
            {...props}
            as={as}
            forwardedRef={ref}
        />
    )));
}

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/heading--default-story)
*/
export const H1 = createHeading("h1");
H1.displayName = "H1";

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/heading--default-story)
*/
export const H2 = createHeading("h2");
H2.displayName = "H2";

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/heading--default-story)
*/
export const H3 = createHeading("h3");
H3.displayName = "H3";

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/heading--default-story)
*/
export const H4 = createHeading("h4");
H4.displayName = "H4";

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/heading--default-story)
*/
export const H5 = createHeading("h5");
H5.displayName = "H5";

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/heading--default-story)
*/
export const H6 = createHeading("h6");
H6.displayName = "H6";

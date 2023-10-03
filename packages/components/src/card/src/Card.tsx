import { Box } from "../../box";
import { ComponentProps, ReactNode, cloneElement, forwardRef, useMemo } from "react";
import { InternalProps, OmitInternalProps, SlotProps, StyledComponentProps, cssModule, isNil, isString, mergeProps, normalizeSize, slot, useSlots } from "../../shared";
import { ResponsiveProp, useResponsiveValue } from "../../styling";
import { Text } from "../../typography";

const DefaultElement = "section";

export interface InnerCardProps extends SlotProps, InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * Whether or not the card take up the width of its container.
     */
    fluid?: ResponsiveProp<boolean>;
    /**
     * The orientation of the card.
     */
    orientation?: ResponsiveProp<"horizontal" | "vertical">;
    /**
     * A card can vary in size.
     */
    size?: ResponsiveProp<"xs" | "sm" | "md" | "lg" | "xl">;
    /**
     * The style to use.
     */
    variant?: "elevated" | "outline";
}

export function InnerCard({
    as = DefaultElement,
    children,
    fluid,
    forwardedRef,
    orientation = "vertical",
    size,
    variant = "elevated",
    ...rest
}: InnerCardProps) {
    const fluidValue = useResponsiveValue(fluid);
    const orientationValue = useResponsiveValue(orientation);
    const sizeValue = useResponsiveValue(size);

    const { button, "button-group": buttonGroup, content, header, heading, illustration, image } = useSlots(children, useMemo(() => ({
        _: {
            required: ["heading", "content"]
        },
        button: {
            className: "o-ui-card-button"
        },
        "button-group": {
            className: "o-ui-card-button-group"
        },
        content: {
            as: Text,
            className: "o-ui-card-content"
        },
        header: {
            className: "o-ui-card-header"
        },
        heading: {
            as: "span",
            className: "o-ui-card-heading",
            size: "xs"
        },
        illustration: {
            className: "o-ui-card-illustration",
            orientation: orientationValue === "horizontal" ? "vertical" : "horizontal"
        },
        image: null
    }), [orientationValue]));

    const headerMarkup = isString(header?.props?.children)
        ? cloneElement(header, { children: <Text>{header?.props?.children}</Text> })
        : header;

    const imageMarkup = image && (
        <Box className="o-ui-card-image">
            {image}
        </Box>
    );

    const headerSectionMarkup = (
        <Box className="o-ui-card-header-section">
            {heading}
            {headerMarkup}
        </Box>
    );

    const footerSectionMarkup = (!isNil(button) || !isNil(buttonGroup)) && (
        <Box className="o-ui-card-footer-section">
            {button}
            {buttonGroup}
        </Box>
    );

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: cssModule(
                        "o-ui-card",
                        orientationValue,
                        !fluidValue && normalizeSize(sizeValue),
                        fluidValue && "fluid",
                        variant
                    ),
                    ref: forwardedRef
                }
            )}
        >
            {imageMarkup}
            {illustration}
            <Box className="o-ui-card-aside">
                {headerSectionMarkup}
                {content}
                {footerSectionMarkup}
            </Box>
        </Box>
    );
}

InnerCard.defaultElement = DefaultElement;

/**
 * A card group information into a container to let users browse a group of related items and actions.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app//?path=/docs/card--default-story)
*/
export const Card = slot("card", forwardRef<any, OmitInternalProps<InnerCardProps>>((props, ref) => (
    <InnerCard {...props} forwardedRef={ref} />
)));

export type CardProps = ComponentProps<typeof Card>;

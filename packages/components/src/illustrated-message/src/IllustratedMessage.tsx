import { Box } from "../../box/index.ts";
import { ComponentProps, ReactNode, forwardRef, useMemo } from "react";
import { Flex } from "../../layout/index.ts";
import { InternalProps, OmitInternalProps, StyledComponentProps, cssModule, mergeProps, useSlots } from "../../shared/index.ts";
import { ResponsiveProp, useResponsiveValue } from "../../styling/index.ts";
import { Text } from "../../typography/index.ts";

const DefaultElement = "div";

export interface InnerIllustratedMessageProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * The orientation of the illustrated message.
     */
    orientation?: ResponsiveProp<"horizontal" | "vertical">;
}

export function InnerIllustratedMessage({
    as = DefaultElement,
    children,
    forwardedRef,
    orientation = "vertical",
    ...rest
}: InnerIllustratedMessageProps) {
    const orientationValue = useResponsiveValue(orientation);

    const { content, heading, image } = useSlots(children, useMemo(() => ({
        _: {
            required: ["image"]
        },
        content: {
            as: Text,
            className: "o-ui-illustrated-message-content"
        },
        heading: {
            as: "h3",
            className: "o-ui-illustrated-message-heading",
            size: "md"
        },
        image: {
            className: "o-ui-illustrated-message-image"
        }
    }), []));

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: cssModule(
                        "o-ui-illustrated-message",
                        orientationValue
                    ),
                    ref: forwardedRef
                }
            )}
        >
            {image}
            <Flex direction="column">
                {heading}
                {content}
            </Flex>
        </Box>
    );
}

InnerIllustratedMessage.defaultElement = DefaultElement;

/**
 * An illustration compose an image with a background color. Use an illustration as an hero in a modal.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/illustration--default-story)
*/
export const IllustratedMessage = forwardRef<any, OmitInternalProps<InnerIllustratedMessageProps>>((props, ref) => (
    <InnerIllustratedMessage {...props} forwardedRef={ref} />
));

export type IllustratedMessageProps = ComponentProps<typeof IllustratedMessage>;

import "./Divider.css";

import { Box } from "../../box";
import { Text } from "../../text";
import { cssModule, mergeClasses } from "../../shared";
import { elementType, oneOf, oneOfType, string } from "prop-types";
import { forwardRef } from "react";

const propTypes = {
    /**
     * The orientation of the divider.
     */
    orientation: oneOf(["horizontal", "vertical"]),
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType])
};

export function InnerDivider({
    orientation = "horizontal",
    as = "div",
    className,
    children,
    forwardedRef,
    ...rest
}) {
    const labelMarkup = children && (
        <Text>
            {children}
        </Text>
    );

    return (
        <Box
            {...rest}
            className={mergeClasses(
                cssModule(
                    "o-ui-divider",
                    labelMarkup && "has-label"
                ),
                className
            )}
            as={as}
            role="separator"
            aria-orientation={orientation}
            ref={forwardedRef}
        >
            {labelMarkup}
        </Box>
    );
}

InnerDivider.propTypes = propTypes;

export const Divider = forwardRef((props, ref) => (
    <InnerDivider {...props} forwardedRef={ref} />
));


import "./Heading.css";

import { any, elementType, oneOf, oneOfType, string } from "prop-types";
import { cssModule, getSizeClass, mergeClasses, mergeProps, useContentStyle } from "../../shared";
import { forwardRef } from "react";

const propTypes = {
    /**
     * A heading can vary in size.
     */
    size: oneOf(["2xs", "xs", "sm", "md", "lg", "xl"]),
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * @ignore
     */
    children: any.isRequired
};

export function InnerHeading(props) {
    const {
        size,
        as: ElementType = "div",
        className,
        children,
        forwardedRef,
        ...rest
    } = mergeProps(
        props,
        useContentStyle("heading")
    );

    return (
        <ElementType
            {...rest}
            className={mergeClasses(
                cssModule(
                    "o-ui-heading",
                    getSizeClass(size)
                ),
                className
            )}
            ref={forwardedRef}
        >
            {children}
        </ElementType>
    );
}

InnerHeading.propTypes = propTypes;

export const Heading = forwardRef((props, ref) => (
    <InnerHeading {...props} forwardedRef={ref} />
));
import { IconButton } from "./IconButton";
import { any, bool, elementType, number, oneOf, oneOfType, string } from "prop-types";
import { forwardRef } from "react";
import { isFunction } from "lodash";
import { useToggleButton } from "./useToggleButton";

const propTypes = {
    /**
     * Style to use.
     */
    variant: oneOf(["solid", "outline", "ghost"]),
    /**
     * The color accent.
     */
    color: oneOf(["primary", "secondary"]),
    /**
     * Whether or not the button should autofocus on render.
     */
    autofocus: bool,
    /**
     * Delay before trying to autofocus.
     */
    autofocusDelay: number,
    /**
     * A button can have a circular form.
     */
    circular: bool,
    /**
     * A button can vary in size.
     */
    size: oneOf(["small", "medium", "large"]),
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * @ignore
     */
    children: any.isRequired
};

const defaultProps = {
    variant: "solid",
    as: IconButton
};

export function InnerToggleIconButton(props) {
    const {
        checked,
        defaultChecked,
        value,
        onChange,
        onClick,
        active,
        as: ElementType,
        children,
        forwardedRef,
        ...rest
    } = props;

    const { isChecked, buttonProps } = useToggleButton({
        checked,
        defaultChecked,
        value,
        onChange,
        onClick,
        active,
        ref: forwardedRef,
        ...rest
    });

    const content = isFunction(children)
        ? children({ isChecked }, props)
        : children;

    return (
        <ElementType
            data-testid="toggle-icon-button"
            {...buttonProps}
        >
            {content}
        </ElementType>
    );
}

InnerToggleIconButton.propTypes = propTypes;
InnerToggleIconButton.defaultProps = defaultProps;

export const ToggleIconButton = forwardRef((props, ref) => (
    <InnerToggleIconButton { ...props } forwardedRef={ref} />
));

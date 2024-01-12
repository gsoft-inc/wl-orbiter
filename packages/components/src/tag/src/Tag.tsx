import { Box } from "../../box";
import { ComponentProps, ReactNode, SyntheticEvent, forwardRef, useMemo } from "react";
import { CrossButton } from "../../button";
import { InteractionProps, InternalProps, OmitInternalProps, StyledComponentProps, createSizeAdapter, cssModule, isNil, mergeProps, normalizeSize, useMergedRefs, useSlots, createEmbeddableAdapter } from "../../shared";
import { ResponsiveProp, useResponsiveValue } from "../../styling";
import { Text } from "../../typography";
import { useFieldInputProps } from "../../field";
import { ValidationState } from "../../input";

const DefaultElement = "div";

export interface InnerTagProps extends InternalProps, InteractionProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * Whether or not the tag have a disable look.
     */
    disabled?: boolean;
    /**
     * Whether the tag take up the width of its container.
     */
    fluid?: ResponsiveProp<boolean>;
    /**
     * Called when the remove button is clicked.
     * @param {SyntheticEvent} event - React's original event.
     * @returns {void}
     */
    onRemove?: (event: SyntheticEvent) => void;
    /**
     * A tag can vary in size.
     */
    size?: ResponsiveProp<"sm" | "md">;
    /**
     * Whether or not the tag should display as "valid" or "invalid".
     */
    validationState?: ValidationState;
    /**
     * The tag style to use.
     */
    variant?: "solid" | "outline";
}

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const textSize = createSizeAdapter({
    "sm": "sm",
    "md": "sm"
});

const embedIconButton = createEmbeddableAdapter({
    "sm": "2xs",
    "md": "2xs"
});
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

export function InnerTag(props: InnerTagProps) {
    const [fieldProps] = useFieldInputProps();

    const {
        active,
        as = DefaultElement,
        children,
        disabled,
        fluid,
        focus,
        forwardedRef,
        hover,
        onRemove,
        size,
        validationState,
        variant = "solid",
        ...rest
    } = mergeProps(
        props,
        fieldProps
    );

    const fluidValue = useResponsiveValue(fluid);
    const sizeValue = useResponsiveValue(size);

    const ref = useMergedRefs(forwardedRef);

    const { avatar, counter, dot, "end-icon": endIcon, icon, text } = useSlots(children, useMemo(() => ({
        _: {
            defaultWrapper: Text
        },
        avatar: {
            className: "o-ui-tag-avatar",
            size: "xs"
        },
        counter: {
            color: "inherit",
            disabled,
            pushed: true,
            size: sizeValue
        },
        dot: {
            className: "o-ui-tag-dot",
            disabled
        },
        "end-icon": {
            className: "o-ui-tag-end-icon",
            size: "sm"
        },
        icon: {
            className: "o-ui-tag-start-icon",
            size: "sm"
        },
        text: {
            className: "o-ui-tag-text",
            color: "inherit",
            size: textSize(sizeValue)
        }
    }), [sizeValue, disabled]));

    const removeMarkup = !isNil(onRemove) && embedIconButton(<CrossButton aria-label="Remove" />, {
        "aria-label": "Remove",
        className: "o-ui-tag-remove-button",
        onClick: onRemove,
        size: sizeValue
    });

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: cssModule(
                        "o-ui-tag",
                        variant,
                        dot && "has-dot",
                        icon && "has-start-icon",
                        endIcon && "has-end-icon",
                        removeMarkup && "has-remove-button",
                        fluidValue && "fluid",
                        active && "active",
                        focus && "focus",
                        hover && "hover",
                        normalizeSize(sizeValue),
                        validationState
                    ),
                    disabled,
                    ref
                }
            )}
        >

            {avatar}
            {icon}
            {dot}
            {text}
            {endIcon}
            {counter}
            {removeMarkup}
        </Box>
    );
}

InnerTag.defaultElement = DefaultElement;

/**
 * A tag represents a keyword that helps label, organize and categorize content.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app//?path=/docs/tag--default-story)
*/
export const Tag = forwardRef<any, OmitInternalProps<InnerTagProps>>((props, ref) => (
    <InnerTag {...props} forwardedRef={ref} />
));

export type TagProps = ComponentProps<typeof Tag>;


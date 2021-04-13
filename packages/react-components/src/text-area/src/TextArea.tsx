import "./TextArea.css";

import { Box, BoxProps as BoxPropsForDocumentation } from "../../box";
import { ComponentProps, ElementType, ForwardedRef, ReactElement, SyntheticEvent, useCallback, useLayoutEffect, useState } from "react";
import { InteractionStatesProps, cssModule, forwardRef, mergeProps, useControllableState, useEventCallback } from "../../shared";
import { isNil } from "lodash";
import { useFieldInputProps } from "../../field";
import { useInput, useInputButton, wrappedInputPropsAdapter } from "../../input";

// used to generate BoxProps instead of any in the auto-generated documentation
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BoxProps extends BoxPropsForDocumentation { }

export interface InnerTextAreaProps extends InteractionStatesProps {
    /**
     * @ignore
     */
    id?: string;
    /**
     * A controlled value.
     */
    value?: string,
    /**
     * The default value of `value` when uncontrolled.
     */
    defaultValue?: string,
    /**
     * Temporary text that occupies the input when it is empty.
     */
    placeholder?: string,
    /**
     * Whether or not an element is resizable, and if so, in which directions. See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/resize).
     */
    resize?: "vertical" | "none";
    /**
     * Whether a user input is required before form submission.
     */
    required?: boolean;
    /**
     * Whether or not the input should display as "valid" or "invalid".
     */
    validationState?: "valid" | "invalid";
    /**
     * Called when the input value change.
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @returns {void}
     */
    onChange?(event: SyntheticEvent): void;
    /**
     * The type of the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).
     */
    type?: "text" | "password" | "search" | "url" | "tel" | "email";
    /**
     * Whether or not the input should autofocus on render.
     */
    autoFocus?: number | boolean;
    /**
     * [Button](/?path=/docs/button--default-story) component rendered after the value.
     */
    button?: ReactElement
    /**
     * Whether or not the input take up the width of its container.
     */
    fluid?: boolean;
    /**
     * Whether or not to render a loader.
     */
    loading?: boolean;
    /**
     * The number of visible text lines.
     */
    rows?: number,
    /**
     * The maximum number of visible text lines before displaying a scrollbar.
     */
    maxRows?: number,
    /**
     * Additional props to render on the wrapper element.
     */
    wrapperProps?: Partial<BoxProps>,
    /**
     * Whether or not the text area is disabled.
     */
    disabled?: boolean;
    /**
     * Whether or not the text area is readonly.
     */
    readOnly?: boolean;
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as?: ElementType;
    /**
    * @ignore
    */
    forwardedRef: ForwardedRef<any>
}

const pxToInt = (value?: string) => {
    return !isNil(value) ? parseInt(value.replace("px", ""), 10) : 0;
};

export function InnerTextArea(props: InnerTextAreaProps) {
    const [fieldProps] = useFieldInputProps();

    const {
        id,
        value,
        defaultValue,
        placeholder,
        resize,
        required,
        validationState,
        type = "text",
        autoFocus,
        button,
        disabled,
        readOnly,
        fluid,
        loading,
        rows: rowsProp,
        maxRows,
        active,
        focus,
        hover,
        wrapperProps: userWrapperProps,
        as = "div",
        forwardedRef,
        ...rest
    } = mergeProps(
        props,
        wrappedInputPropsAdapter(fieldProps)
    );

    const [inputValue, setValue] = useControllableState(value, defaultValue, "");
    const [rows, setRows] = useState(rowsProp);

    const handleChange = useEventCallback(event => {
        setValue(event.target.value);
    });

    const { wrapperProps, inputProps, inputRef } = useInput({
        cssModule: "o-ui-text-area",
        id,
        value: inputValue,
        placeholder,
        required,
        validationState,
        onChange: handleChange,
        type,
        autoFocus,
        disabled,
        readOnly,
        fluid,
        loading,
        active,
        focus,
        hover,
        forwardedRef
    });

    const adjustRows = useCallback(() => {
        const input = inputRef.current;

        const { paddingBottom, paddingTop, lineHeight } = window.getComputedStyle(input);

        const padding = pxToInt(paddingTop) + pxToInt(paddingBottom);
        const currentRows = Math.floor((input.scrollHeight - padding) / pxToInt(lineHeight));

        const newRows = !isNil(maxRows) && currentRows > maxRows
            ? maxRows
            : currentRows;

        setRows(newRows);
    }, [inputRef, maxRows]);

    useLayoutEffect(() => {
        adjustRows();
    }, [adjustRows, inputValue]);

    const buttonMarkup = useInputButton(button, !disabled && !readOnly);

    const content = (
        <>
            <textarea
                {...mergeProps(
                    rest,
                    {
                        rows,
                        style: {
                            ["--o-ui-resize" as any]: resize
                        }
                    },
                    inputProps
                )}
            />
            {buttonMarkup}
        </>
    );

    return (
        <Box
            {...mergeProps(
                userWrapperProps,
                {
                    className: cssModule(
                        "o-ui-input",
                        buttonMarkup && "has-button"
                    ),
                    as
                },
                wrapperProps
            )}
        >
            {content}
        </Box>
    );
}

export const TextArea = forwardRef<InnerTextAreaProps>((props, ref) => (
    <InnerTextArea {...props} forwardedRef={ref} />
));

export type TextAreaProps = ComponentProps<typeof TextArea>

TextArea.displayName = "TextArea";

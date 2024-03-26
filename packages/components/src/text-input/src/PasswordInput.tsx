import { AbstractTextInputProps, TextInput } from "./TextInput";
import { useState, ChangeEvent, ComponentProps, forwardRef } from "react";
import { EyeVisibleIcon, EyeHiddenIcon } from "@hopper-ui/icons";
import { OmitInternalProps, mergeProps, createSizeAdapter, useControllableState, useEventCallback } from "../../shared";
import { useResponsiveValue } from "../../styling";

import { IconButton } from "../../button";
import { useInputGroupTextInputProps } from "../../input-group";

const DefaultElement = "input";

export type InnerPasswordInputProps = AbstractTextInputProps<typeof DefaultElement>;

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
const buttonSize = createSizeAdapter({
    "sm": "xs",
    "md": "sm"
});
/* eslint-enable sort-keys, sort-keys-fix/sort-keys-fix */

export function InnerPasswordInput(props: InnerPasswordInputProps) {
    const [inputGroupProps] = useInputGroupTextInputProps();

    const {
        as = DefaultElement,
        defaultValue,
        forwardedRef,
        size,
        value,
        wrapperProps,
        ...rest
    } = mergeProps(
        props,
        inputGroupProps
    );

    const [inputValue, setValue] = useControllableState(value, defaultValue, "");
    const [isHidden, setIsHidden] = useState(true);

    const sizeValue = useResponsiveValue(size);

    const handleChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    });

    const handleShowValue = useEventCallback(() => {
        setIsHidden(x => !x);
    });

    // Always show the button to play nice with password managers.
    const showButtonMarkup = (
        <IconButton
            aria-label="Toggle password visibility"
            className="o-ui-password-input-show-button"
            onClick={handleShowValue}
            size={buttonSize(sizeValue)}
            title="Toggle password visibility"
            variant="tertiary"
        >
            {isHidden ? <EyeVisibleIcon /> : <EyeHiddenIcon />}
        </IconButton>
    );

    return (
        <TextInput
            {...mergeProps(
                rest,
                {
                    as,
                    button: showButtonMarkup,
                    onChange: handleChange,
                    ref: forwardedRef,
                    size: size,
                    type: isHidden ? "password" as const : "text" as const,
                    value: inputValue,
                    wrapperProps: mergeProps(wrapperProps ?? {}, {
                        className: "o-ui-password-input"
                    })
                }
            )}
        />
    );
}

InnerPasswordInput.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/text-input--default-story)
*/
export const PasswordInput = forwardRef<HTMLInputElement, OmitInternalProps<InnerPasswordInputProps>>((props, ref) => (
    <InnerPasswordInput {...props} forwardedRef={ref} />
));

export type PasswordInputProps = ComponentProps<typeof PasswordInput>;

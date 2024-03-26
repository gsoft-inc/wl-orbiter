import { AbstractTextInputProps, TextInput } from "../../text-input";
import { ChangeEvent, ComponentProps, KeyboardEvent, SyntheticEvent, forwardRef, useCallback } from "react";
import {
    Keys,
    OmitInternalProps,
    isNil,
    isNilOrEmpty,
    isUndefined,
    mergeProps,
    useChainedEventCallback,
    useControllableState,
    useEventCallback,
    useMergedRefs
} from "../../shared";

import { CrossButton } from "../../button";
import { SearchIcon } from "@hopper-ui/icons";
import { useInputGroupTextInputProps } from "../../input-group";

const DefaultElement = "input";

export interface InnerSearchInputProps extends Omit<AbstractTextInputProps<typeof DefaultElement>, "onValueChange"> {
    /**
     * Called when the input value change.
     * @param {SyntheticEvent} event - React's original event.
     * @param {string} value - The new input value.
     * @returns {void}
     */
    onValueChange?: (event: SyntheticEvent, value: string) => void;
}

export function InnerSearchInput(props: InnerSearchInputProps) {
    const [inputGroupProps] = useInputGroupTextInputProps();

    const {
        as = DefaultElement,
        defaultValue,
        forwardedRef,
        icon,
        onChange,
        onKeyDown,
        onValueChange,
        size,
        value,
        wrapperProps,
        ...rest
    } = mergeProps(
        props,
        inputGroupProps
    );

    const [inputValue, setValue] = useControllableState(value, defaultValue, "");

    const inputRef = useMergedRefs(forwardedRef);

    const updateValue = useCallback((event: SyntheticEvent, newValue: string) => {
        setValue(newValue);

        if (!isNil(onValueChange)) {
            onValueChange(event, newValue);
        }
    }, [onValueChange, setValue]);

    const clear = useCallback((event: SyntheticEvent) => {
        updateValue(event, "");
    }, [updateValue]);

    const handleChange = useChainedEventCallback(onChange, (event: ChangeEvent<HTMLInputElement>) => {
        updateValue(event, event.target.value);
    });

    const handleKeyDown = useEventCallback((event: KeyboardEvent<HTMLInputElement>) => {
        if (!isNil(onKeyDown)) {
            onKeyDown(event);
        }

        // Can't change for now otherwise Autocomplete will break.
        if (!event.isPropagationStopped()) {
            if (event.key === Keys.esc) {
                event.preventDefault();
                clear(event);
            }
        }
    });

    const handleClear = useEventCallback((event: SyntheticEvent) => {
        clear(event);

        inputRef.current.focus();
    });

    const clearButtonMarkup = !isNilOrEmpty(inputValue) && (
        <CrossButton
            aria-label="Clear value"
            className="o-ui-search-input-clear-button"
            onClick={handleClear}
            size="xs"
            title="Clear value"
        />
    );

    return (
        <TextInput
            {...mergeProps(
                rest,
                {
                    as,
                    autoComplete: "off",
                    autoCorrect: "off",
                    button: clearButtonMarkup || undefined,
                    icon: isUndefined(icon) ? <SearchIcon /> : icon,
                    onChange: handleChange,
                    onKeyDown: handleKeyDown,
                    ref: inputRef,
                    size: size,
                    spellCheck: "false",
                    type: "search" as const,
                    value: inputValue,
                    wrapperProps: mergeProps(
                        wrapperProps ?? {},
                        {
                            className: "o-ui-search-input"
                        }
                    )
                }
            )}
        />
    );
}

InnerSearchInput.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/text-input--default-story)
*/
export const SearchInput = forwardRef<HTMLInputElement, OmitInternalProps<InnerSearchInputProps>>((props, ref) => (
    <InnerSearchInput {...props} forwardedRef={ref} />
));

export type SearchInputProps = ComponentProps<typeof SearchInput>;

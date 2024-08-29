import { Box, BoxProps } from "../../box/index.js";
import {
    ChangeEvent,
    ComponentProps,
    SyntheticEvent,
    forwardRef,
    useCallback,
    useImperativeHandle,
    useMemo,
    useRef
} from "react";
import { InputGroup, useInputGroupProps } from "../../input-group/index.js";
import { OmitInternalProps, augmentElement, cssModule, isNil, mergeClasses, mergeProps, useControllableState, useEventCallback } from "../../shared/index.js";
import { ResponsiveProp, useResponsiveValue } from "../../styling/index.js";
import { areEqualDates, toMidnightDate } from "./dateUtils.js";

import { AbstractInputProps } from "../../input/index.js";
import { ButtonPresets } from "./ButtonPresets.js";
import { MenuPresets } from "./MenuPresets.js";
import { TextInput } from "../../text-input/index.js";
import { useDateInput } from "./useDateInput.js";

export interface DatePreset {
    date: Date;
    text: string;
}

const DefaultElement = "input";

export interface InnerDateInputProps extends Omit<AbstractInputProps<typeof DefaultElement>, "defaultValue" | "max" | "min" | "value"> {
    /**
     * The default value of `value` when uncontrolled.
     */
    defaultValue?: Date;
    /**
     * Whether or not the input take up the width of its container.
     */
    fluid?: ResponsiveProp<boolean>;
    /**
     * The maximum (inclusive) date.
     */
    max?: Date;
    /**
     * The minimum (inclusive) date.
     */
    min?: Date;
    /**
     * Called when the date change.
     * @param {ChangeEvent} event - React's original synthetic event.
     * @param {object} date - The new date value.
     * @returns {void}
     */
    onDateChange?: (event: ChangeEvent<HTMLInputElement>, date: Date) => void;
    /**
     * Array of pre-determined dates.
     */
    presets?: DatePreset[];
    /**
     * The presets style to use.
     */
    presetsVariant?: "compact" | "expanded";
    /**
     * A controlled value.
     */
    value?: Date | null;
    /**
     * Additional props to render on the wrapper element.
     */
    wrapperProps?: Partial<BoxProps>;
}

const Input = forwardRef<any, any>((props, ref) => {
    const [inputGroupProps, isInGroup] = useInputGroupProps();

    const {
        className,
        max,
        min,
        onChange,
        onDateChange,
        style,
        value,
        wrapperProps,
        ...rest
    } = mergeProps(
        props,
        inputGroupProps
    );
    // } = adaptInputStylingProps(props, inputGroupProps);

    const dateProps = useDateInput({
        forwardedRef: ref,
        max,
        min,
        onChange,
        onDateChange,
        value
    });

    return (
        <TextInput
            {...mergeProps(
                rest,
                {
                    wrapperProps: mergeProps(
                        wrapperProps ?? {},
                        {
                            className: mergeClasses(
                                className,
                                cssModule(
                                    "o-ui-date-input",
                                    isInGroup && "in-group"
                                )
                            ),
                            style
                        }
                    )
                },
                dateProps
            )}
        />
    );
});

export function InnerDateInput({
    as,
    defaultValue,
    disabled,
    fluid,
    forwardedRef,
    onDateChange,
    placeholder = "dd/mm/yyyy",
    presets,
    presetsVariant = "compact",
    readOnly,
    value: valueProp,
    wrapperProps,
    ...rest
}: InnerDateInputProps) {
    const fluidValue = useResponsiveValue(fluid);

    const [value, setValue] = useControllableState(valueProp, defaultValue, null);

    const containerRef = useRef<HTMLElement>();
    const inputRef = useRef<HTMLInputElement>();

    useImperativeHandle(forwardedRef, () => {
        // For presets, used the group container as the ref element.
        if (!isNil(presets)) {
            const element = containerRef.current;

            element.focus = () => {
                inputRef.current?.focus();
            };

            return element;
        }

        return inputRef.current;
    });

    const applyDate = useCallback((event, newDate) => {
        if (!areEqualDates(value, newDate)) {
            setValue(newDate);

            if (!isNil(onDateChange)) {
                onDateChange(event, newDate);
            }
        }
    }, [onDateChange, value, setValue]);

    const handleDateChange = useEventCallback((event, newDate) => {
        applyDate(event, newDate);
    });

    const handleSelectPreset = useEventCallback((event: SyntheticEvent, newIndex: number) => {
        const preset = presets[newIndex];

        if (!isNil(preset)) {
            applyDate(event, preset.date);
        }
    });

    const presetsProps = useMemo(() => {
        if (!isNil(presets)) {
            const selectedIndex = presets.findIndex(x => areEqualDates(toMidnightDate(x.date), toMidnightDate(value)));

            return {
                onSelectionChange: handleSelectPreset,
                selectedIndex: selectedIndex !== -1 ? selectedIndex : undefined,
                values: presets.map(x => x.text)
            };
        }

        return null;
    }, [presets, value, handleSelectPreset]);

    const inputMarkup = (
        <Input
            {...mergeProps(
                rest,
                {
                    "data-form-type" : "other",
                    onDateChange: handleDateChange,
                    placeholder,
                    ref: inputRef,
                    value
                }
            )}
        />
    );

    if (!isNil(presetsProps)) {
        return presetsVariant === "compact" ?
            (
                <InputGroup
                    {...mergeProps(
                        {
                            as,
                            disabled,
                            fluid: fluidValue,
                            readOnly,
                            ref: containerRef
                        },
                        wrapperProps ?? {}
                    )}
                >
                    {inputMarkup}
                    <MenuPresets {...presetsProps} />
                </InputGroup>
            )
            : (
                <Box
                    {...mergeProps(
                        {
                            as,
                            className: cssModule(
                                "o-ui-date-input-button-presets",
                                fluidValue && "fluid"
                            ),
                            ref: containerRef
                        },
                        wrapperProps ?? {}
                    )}
                >
                    {inputMarkup}
                    {!disabled && !readOnly && (
                        <ButtonPresets {...presetsProps} />
                    )}
                </Box>
            );
    }

    return augmentElement(inputMarkup, {
        as,
        disabled,
        fluid: fluidValue,
        readOnly,
        wrapperProps
    });
}

InnerDateInput.defaultElement = DefaultElement;

/**
 * An input to enter a single date value.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/date-input--default-story)
*/
export const DateInput = forwardRef<HTMLInputElement, OmitInternalProps<InnerDateInputProps>>((props, ref) => (
    <InnerDateInput {...props} forwardedRef={ref} />
));

export type DateInputProps = ComponentProps<typeof DateInput>;

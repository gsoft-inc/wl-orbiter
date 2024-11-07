import { Box } from "../../box/index.ts"
import { ClearToolbar, useToolbarProps } from "../../toolbar/index.ts"
import { ComponentProps, ReactNode, forwardRef } from "react";
import { FieldContext } from "./FieldContext";
import { InternalProps, OmitInternalProps, StyledComponentProps, mergeProps } from "../../shared/index.ts"
import { ResponsiveProp, useResponsiveValue } from "../../styling/index.ts"
import { ValidationState } from "../../input/index.ts"
import { useField } from "./useField";
import { useFormField } from "../../form/index.ts"

const DefaultElement = "div";

export interface InnerFieldProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * Whether or not the field is disabled.
     */
    disabled?: boolean;
    /**
     * Whether or not the field take up the width of its container.
     */
    fluid?: ResponsiveProp<boolean>;
    /**
     * Whether or not the field show a required state.
     */
    required?: boolean;
    /**
     * Whether the field should display as "valid" or "invalid".
     */
    validationState?: ValidationState;
}

export function InnerField(props: InnerFieldProps) {
    const [formProps] = useFormField();
    const [toolbarProps] = useToolbarProps();

    const {
        as = DefaultElement,
        children,
        className,
        disabled,
        fluid,
        forwardedRef,
        id,
        required,
        validationState,
        ...rest
    } = mergeProps(
        props,
        formProps,
        toolbarProps
    );

    const fluidValue = useResponsiveValue(fluid);

    const { fieldContext, fieldProps } = useField({
        className,
        disabled,
        fluid: fluidValue,
        forwardedRef,
        id,
        required,
        validationState
    });

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as
                },
                fieldProps
            )}
        >
            <ClearToolbar>
                <FieldContext.Provider value={fieldContext}>
                    {children}
                </FieldContext.Provider>
            </ClearToolbar>
        </Box>
    );
}

InnerField.defaultElement = DefaultElement;

/**
 * A field add a label and a message to an input. They are typically used in forms and dialogs.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/field--input)
*/
export const Field = forwardRef<any, OmitInternalProps<InnerFieldProps>>((props, ref) => (
    <InnerField {...props} forwardedRef={ref} />
));

export type FieldProps = ComponentProps<typeof Field>;

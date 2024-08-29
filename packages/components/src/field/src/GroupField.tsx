import { Box } from "../../box/index.js";
import { ClearToolbar, useToolbarProps } from "../../toolbar/index.js";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { FieldContext } from "./FieldContext.js";
import { InternalProps, OmitInternalProps, StyledComponentProps, mergeProps } from "../../shared/index.js";
import { ResponsiveProp, useResponsiveValue } from "../../styling/index.js";
import { ValidationState } from "../../input/index.js";
import { useFormField } from "../../form/index.js";
import { useGroupField } from "./useGroupField.js";

const DefaultElement = "div";

export interface InnerGroupFieldProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
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

export function InnerGroupField(props: InnerGroupFieldProps) {
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

    const { fieldContext, fieldProps } = useGroupField({
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
                <FieldContext.Provider
                    value={{
                        ...fieldContext,
                        isGroup: true
                    }}
                >
                    {children}
                </FieldContext.Provider>
            </ClearToolbar>
        </Box>
    );
}

InnerGroupField.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/field--input)
*/
export const GroupField = forwardRef<any, OmitInternalProps<InnerGroupFieldProps>>((props, ref) => (
    <InnerGroupField {...props} forwardedRef={ref} />
));

export type GroupFieldProps = ComponentProps<typeof GroupField>;

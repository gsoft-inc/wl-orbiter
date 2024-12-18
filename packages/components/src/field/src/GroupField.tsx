import { Box } from "../../box/index.ts";
import { ClearToolbar, useToolbarProps } from "../../toolbar/index.ts";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { FieldContext } from "./FieldContext.tsx";
import { InternalProps, OmitInternalProps, StyledComponentProps, mergeProps } from "../../shared/index.ts";
import { ResponsiveProp, useResponsiveValue } from "../../styling/index.ts";
import { ValidationState } from "../../input/index.ts";
import { useFormField } from "../../form/index.ts";
import { useGroupField } from "./useGroupField.ts";

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

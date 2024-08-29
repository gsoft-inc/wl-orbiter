import { ComponentProps, forwardRef } from "react";
import { FieldMessage, FieldMessageDefaultElement, SharedFieldMessageProps, getValidationProps } from "./FieldMessage.js";
import { OmitInternalProps, mergeProps } from "../../shared/index.js";
import { useFieldMessageProps } from "./FieldContext.js";

export function InnerErrorMessage(props: SharedFieldMessageProps) {
    const [{ validationState, ...messageProps }, isInField] = useFieldMessageProps();

    const { isError } = getValidationProps(validationState);

    const {
        children,
        forwardedRef,
        ...rest
    } = mergeProps(props, messageProps);

    if (isInField && !isError) {
        return null;
    }

    return (
        <FieldMessage
            {...rest}
            ref={forwardedRef}
            variant="error"
        >
            {children}
        </FieldMessage>
    );
}

InnerErrorMessage.defaultElement = FieldMessageDefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/field--input)
*/
export const ErrorMessage = forwardRef<any, OmitInternalProps<SharedFieldMessageProps>>((props, ref) => (
    <InnerErrorMessage {...props} forwardedRef={ref} />
));

export type ErrorMessageProps = ComponentProps<typeof ErrorMessage>;

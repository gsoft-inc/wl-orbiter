import { ComponentProps, forwardRef } from "react";
import { FieldMessage, FieldMessageDefaultElement, SharedFieldMessageProps, getValidationProps } from "./FieldMessage.tsx";
import { OmitInternalProps, mergeProps } from "../../shared/index.ts";
import { useFieldMessageProps } from "./FieldContext.tsx";

export function InnerValidMessage(props: SharedFieldMessageProps) {
    const [{ validationState, ...messageProps }, isInField] = useFieldMessageProps();

    const { isValid } = getValidationProps(validationState);

    const {
        children,
        forwardedRef,
        ...rest
    } = mergeProps(props, messageProps);

    if (isInField && !isValid) {
        return null;
    }

    return (
        <FieldMessage
            {...rest}
            ref={forwardedRef}
            variant="success"
        >
            {children}
        </FieldMessage>
    );
}

InnerValidMessage.defaultElement = FieldMessageDefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/field--input)
*/
export const ValidMessage = forwardRef<any, OmitInternalProps<SharedFieldMessageProps>>((props, ref) => (
    <InnerValidMessage {...props} forwardedRef={ref} />
));

export type ValidMessageProps = ComponentProps<typeof ValidMessage>;

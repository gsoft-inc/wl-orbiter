import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, mergeProps } from "../../shared/index.js";
import { Text } from "../../typography/index.js";
import { useFieldLabelProps } from "./FieldContext.js";

const DefaultElement = "label";

export interface InnerLabelProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * Whether or not the label show a required state.
     */
    required?: boolean;
}

function RequiredIndicator() {
    return (
        <span aria-hidden="true" className="o-ui-field-label-required">*</span>
    );
}

export function InnerLabel(props: InnerLabelProps) {
    const [fieldProps] = useFieldLabelProps(props);

    const {
        as = DefaultElement,
        children,
        forwardedRef,
        required,
        ...rest
    } = mergeProps(
        props,
        fieldProps
    );

    return (
        <Text
            {...mergeProps(
                rest,
                {
                    as,
                    className: "o-ui-field-label",
                    ref: forwardedRef,
                    size: "md" as const
                }
            )}
        >
            {children}
            {required && <RequiredIndicator />}
        </Text>
    );
}

InnerLabel.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/field--input)
*/
export const Label = forwardRef<any, OmitInternalProps<InnerLabelProps>>((props, ref) => (
    <InnerLabel {...props} forwardedRef={ref} />
));

export type LabelProps = ComponentProps<typeof Label>;

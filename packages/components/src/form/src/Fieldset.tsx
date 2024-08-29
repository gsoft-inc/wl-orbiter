import { Box } from "../../box/index.js";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, mergeProps, useId } from "../../shared/index.js";

const DefaultElement = "div";

export interface InnerFieldsetProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * A label identifying the group.
     */
    label: string;
}

export function InnerFieldset({
    as = DefaultElement,
    children,
    forwardedRef,
    id,
    label,
    ...rest
}: InnerFieldsetProps) {
    const rootId = useId(id, "o-ui-fieldset");
    const labelId = `${rootId}-label`;

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    "aria-labelledby": labelId,
                    as,
                    className: "o-ui-fieldset",
                    id: rootId,
                    ref: forwardedRef,
                    role: "group"
                }
            )}
        >
            <span
                className="o-ui-fieldset-label"
                id={labelId}
            >
                {label}
            </span>
            {children}
        </Box>
    );
}

InnerFieldset.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/form--vertical-layout)
*/
export const Fieldset = forwardRef<any, OmitInternalProps<InnerFieldsetProps>>((props, ref) => (
    <InnerFieldset {...props} forwardedRef={ref} />
));

export type FieldsetProps = ComponentProps<typeof Fieldset>;

import { HtmlInput } from "../../html/index.ts"
import { Ref } from "react";
import { StyledComponentProps, isNil, mergeProps } from "../../shared/index.ts"
import { ValidationState } from "../../input/index.ts"

export interface HiddenAutocompleteProps extends Omit<StyledComponentProps<"input">, "ref"> {
    /**
     * @ignore
     */
    ref?: Ref<any>;
    /**
     * Whether or not a user input is required before form submission.
     */
    required?: boolean;
    /**
     * A controlled selected key.
     */
    selectedKey?: string;
    /**
     * Whether or not the select should display as "valid" or "invalid".
     */
    validationState?: ValidationState;
}

export function HiddenAutocomplete({ name, required, validationState, value, ...rest }: HiddenAutocompleteProps) {
    if (isNil(name)) {
        return null;
    }

    return (
        <HtmlInput
            {...mergeProps(
                rest,
                {
                    "aria-invalid": validationState === "invalid" ? true : undefined,
                    "aria-required": required ? true : undefined,
                    type: "hidden",
                    value: value ?? ""
                }
            )}
        />
    );
}

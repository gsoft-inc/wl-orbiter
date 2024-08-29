import { FormContextType, useFormContext } from "./FormContext.js";
import { omitProps } from "../../shared/index.js";

export type FormButtonProps = Omit<FormContextType, "fluid">;

export function useFormButton(): [FormButtonProps, boolean] {
    const [context, isInForm] = useFormContext();

    return [
        omitProps(context, ["fluid"]),
        isInForm
    ];
}

import { FormContextType, useFormContext } from "./FormContext.ts";
import { omitProps } from "../../shared/index.ts";

export type FormButtonProps = Omit<FormContextType, "fluid">;

export function useFormButton(): [FormButtonProps, boolean] {
    const [context, isInForm] = useFormContext();

    return [
        omitProps(context, ["fluid"]),
        isInForm
    ];
}

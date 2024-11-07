import { createContext, useContext } from "react";
import { isNil } from "../../shared/index.ts"

export interface FormContextType {
    disabled?: boolean;
    fluid?: boolean;
}

export const FormContext = createContext<FormContextType>(null);

export function useFormContext(): [FormContextType, boolean] {
    const context = useContext(FormContext);

    if (!isNil(context)) {
        const { disabled, fluid } = context;

        const props = {
            disabled,
            fluid
        };

        return [props, true];
    }

    return [{}, false];
}

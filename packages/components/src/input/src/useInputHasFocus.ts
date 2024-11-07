import { useEventCallback } from "../../shared/index.ts"
import { useState } from "react";

export function useInputHasFocus() {
    const [hasFocus, setHasFocus] = useState(false);

    return {
        hasFocus,
        inputProps: {
            onBlur: useEventCallback(() => {
                setHasFocus(false);
            }),
            onFocus: useEventCallback(() => {
                setHasFocus(true);
            })
        }
    };
}

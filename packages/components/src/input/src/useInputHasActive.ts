import { useEventCallback } from "../../shared";
import { useState } from "react";

export function useInputHasActive() {
    const [hasActive, setHasActive] = useState(false);

    return {
        hasActive,
        inputProps: {
            onBlur: useEventCallback(() => {
                setHasActive(false);
            }),
            onFocus: useEventCallback(() => {
                setHasActive(true);
            })
        }
    };
}

import { useEffect } from "react";
import { useRefState } from "./useRefState.js";

export function useIsInitialRender() {
    const [isInitialRef, setIsInitial] = useRefState(true);

    useEffect(() => {
        setIsInitial(false);
    }, [setIsInitial]);

    return isInitialRef.current;
}

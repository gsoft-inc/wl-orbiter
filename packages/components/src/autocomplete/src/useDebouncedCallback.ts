import { useDebouncedCallback as useThirdPartyDebouncedCallback } from "use-debounce";

export function useDebouncedCallback<T extends (...args: any[]) => ReturnType<T>>(func: T, wait?: number): ReturnType<typeof useThirdPartyDebouncedCallback<T>> {
    // Without the "leading" option the previous results will be display until the debounce "trigger".
    const debounced = useThirdPartyDebouncedCallback(func, wait, { leading: true });

    return debounced;
}

import { isArray, isNil } from "./assertions.ts";

export function arrayify<T>(value: T | T[]) {
    if (isNil(value)) {
        return [];
    }

    return isArray(value) ? value : [value];
}

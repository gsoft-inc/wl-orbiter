import createTextMaskInputElement from "./utils/createTextMarkInputElement.js";
import { isNil } from "../../shared/index.ts";
import { useCallback, useEffect, useRef } from "react";

export interface UseMaskedInputProps {
    inputElement?: HTMLInputElement;
    mask?: (string | RegExp)[];
}

export function useMaskedInput({
    inputElement,
    mask
}: UseMaskedInputProps) {
    const maskRef = useRef<any>();

    useEffect(() => {
        if (!isNil(inputElement)) {
            maskRef.current = createTextMaskInputElement({
                guide: false,
                inputElement,
                mask
            });
        }
    }, [inputElement, mask]);

    return {
        onChange: useCallback(() => {
            maskRef.current?.update();
        }, [maskRef])
    };
}

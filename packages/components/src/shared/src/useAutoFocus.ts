import { FocusManager, FocusManagerHandlers, FocusManagerIterationOptions, FocusManagerScopeOptions } from "./useFocusManager.ts";
import { RefObject, useCallback, useEffect } from "react";
import { FocusTarget } from "./focusTarget.ts";
import { createDisposables } from "./useDisposables.ts";
import { useChainedEventCallback } from "./useChainedEventCallback.ts";

export interface AbstractAutoFocusOptions {
    delay?: number;
    isDisabled?: boolean;
    onFocus?: (element?: HTMLElement) => void;
}

function useAbstractAutoFocus({ delay, isDisabled, onFocus }: AbstractAutoFocusOptions) {
    useEffect(() => {
        const disposables = createDisposables();

        if (!isDisabled) {
            if (delay) {
                disposables.setTimeout(() => { onFocus(); }, delay);
            } else {
                disposables.nextFrame(() => { onFocus(); });
            }
        }

        return () => {
            disposables.dispose();
        };
    }, [isDisabled, delay, onFocus]);
}

export interface AutoFocusOptions {
    delay?: number;
    isDisabled?: boolean;
    onFocus?: (element?: HTMLElement) => void;
}

export function useAutoFocus(targetRef: RefObject<HTMLElement>, { delay, isDisabled, onFocus }: AutoFocusOptions = {}) {
    useAbstractAutoFocus({
        delay,
        isDisabled,
        onFocus: useChainedEventCallback(onFocus, () => {
            if (!targetRef.current?.hasAttribute("disabled") && !targetRef.current?.contains(document.activeElement)) {
                targetRef.current?.focus();
            }
        })
    });
}

export interface AutoFocusChildOptions extends FocusManagerScopeOptions, FocusManagerIterationOptions, FocusManagerHandlers {
    delay?: number;
    isDisabled?: boolean;
    target?: string;
}

export function useAutoFocusChild(focusManager: FocusManager, { canFocus, delay, isDisabled, onFocus, onNotFound, tabbableOnly, target = FocusTarget.first }: AutoFocusChildOptions = {}) {
    useAbstractAutoFocus({
        delay,
        isDisabled,
        onFocus: useCallback(() => {
            // Do not autofocus another child if there is already one focused.
            if (!focusManager.isInScope(document.activeElement as HTMLElement)) {
                focusManager.focusTarget(target, { canFocus, onFocus, onNotFound, tabbableOnly });
            }
        }, [canFocus, focusManager, onFocus, onNotFound, tabbableOnly, target])
    });
}



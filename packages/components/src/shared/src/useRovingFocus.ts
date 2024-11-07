import type { FocusScope, ScopeChangeEventHandler } from "./useFocusScope.ts";

import { isNil } from "./assertions.ts";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.tsx";

export interface UseRovingFocusOptions {
    isDisabled?: boolean;
}

export function useRovingFocus(scope: FocusScope, { isDisabled = false }: UseRovingFocusOptions = {}) {
    useIsomorphicLayoutEffect(() => {
        if (!isDisabled) {
            const handleFocus = (event: FocusEvent) => {
                scope.getElements().forEach(x => {
                    if (x.tabIndex === 0) {
                        x.tabIndex = -1;
                    }
                });

                (event.target as HTMLElement).tabIndex = 0;
            };

            const registerElement = (element: HTMLElement, isTabbable: boolean) => {
                element.tabIndex = isTabbable ? 0 : -1;

                element.addEventListener("focusin", handleFocus, { capture: true });
            };

            const disposeElement = (element: HTMLElement) => {
                element.removeEventListener("focusin", handleFocus, { capture: true });
            };

            const initializeElements = () => {
                scope.getElements().forEach((x, index) => {
                    registerElement(x, index === 0);
                });
            };

            initializeElements();

            const onChange: ScopeChangeEventHandler = (newElements, oldElements) => {
                oldElements.forEach(disposeElement);

                const tabbableIndex = newElements.findIndex(x => x.tabIndex === 0);

                newElements.forEach((x, index) => {
                    // When we don't have a tabbable element, the first focusable elements should be the tabbable element.
                    registerElement(x, (tabbableIndex === -1 && index === 0) || tabbableIndex === index);
                });
            };

            scope.registerChangeHandler(onChange);

            return () => {
                scope.getElements().forEach(disposeElement);
                scope.removeChangeHandler(onChange);
            };
        }
    }, [scope, isDisabled]);
}

export interface UseKeyedRovingFocusOptions extends UseRovingFocusOptions {
    keyProp?: string;
}

/*
IMPORTANT: Keyed roving focus doesn't handle disabled elements. This is the responsability of the calling component to ensure that the `currentKey` doesn't match a disabled element.
*/
export function useKeyedRovingFocus(scope: FocusScope, currentKey: string, { isDisabled = false, keyProp = "value" }: UseKeyedRovingFocusOptions = {}) {
    useIsomorphicLayoutEffect(() => {
        if (!isDisabled) {
            const setTabIndexes = (elements: HTMLElement[]) => {
                if (!isNil(currentKey)) {
                    const tabbableIndex = !isNil(currentKey)
                        ? elements.findIndex(x => x.getAttribute(keyProp) === currentKey.toString())
                        : -1;

                    elements.forEach((x, index) => {
                        x.tabIndex = tabbableIndex === index ? 0 : -1;
                    });
                } else {
                    // When we don't have a tabbable element, the first focusable elements should be the tabbable element.
                    elements.forEach((x, index) => {
                        x.tabIndex = index === 0 ? 0 : -1;
                    });
                }
            };

            const initializeElements = () => {
                setTabIndexes(scope.getElements());
            };

            initializeElements();

            const onChange = (newElements: HTMLElement[]) => {
                setTabIndexes(newElements);
            };

            scope.registerChangeHandler(onChange);

            return () => {
                scope.removeChangeHandler(onChange);
            };
        }
    }, [scope, currentKey, keyProp, isDisabled]);
}

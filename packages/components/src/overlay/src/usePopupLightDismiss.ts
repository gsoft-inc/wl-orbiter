import { FocusEvent, KeyboardEvent, RefObject, SyntheticEvent } from "react";
import { FocusScope, Keys, isNil, mergeProps, useEventCallback, useRefState } from "../../shared/index.js";
import { UseOverlayLightDismissOptions, useOverlayLightDismiss } from "./useOverlayLightDismiss.js";

import { isDevToolsBlurEvent } from "./isDevtoolsBlurEvent.js";
import { isTargetParent } from "./isTargetParent.js";

export function usePopupLightDismiss(triggerRef: RefObject<HTMLElement>, focusScope: FocusScope, {
    hideOnEscape,
    hideOnLeave,
    hideOnOutsideClick,
    isDisabled,
    onHide,
    trigger
}: UseOverlayLightDismissOptions = {}) {
    const [isHandled, setIsHandled] = useRefState(false);

    const hide = (event: SyntheticEvent) => {
        if (!isNil(onHide)) {
            onHide(event);
        }
    };

    const handleKeyDown = useEventCallback((event: KeyboardEvent) => {
        if (event.key === Keys.tab) {
            // When the popup doesn't have any focusable siblings, when tabbing out from the overlay the focus will go back to the trigger.
            // Without this hack, the overlay would not close because we have code which prevent the overlay from closing when the focus move to the trigger.
            // This code specifically handle "tabs" to force close the overlay.
            setIsHandled(true);

            if (hideOnLeave) {
                hide(event);
            }
        }
    });

    const props = useOverlayLightDismiss(focusScope, {
        hideOnEscape,
        hideOnLeave,
        hideOnOutsideClick,
        isDisabled,
        onHide: useEventCallback((event: SyntheticEvent) => {
            switch (event.type) {
                // Without mouseup closing the menu with the trigger will cause a double toggle.
                case "mouseup":
                case "click": {
                    // Ignore events related to the trigger to prevent double toggle.
                    //
                    // useOverlayTrigger "onHide" already handle most of this logic but still, this case must be handled here to distinguish
                    // "trigger" clicks from other "outside" clicks.
                    if (!isTargetParent(event.target, triggerRef)) {
                        hide(event);
                    }

                    break;
                }
                case "blur": {
                    // Sad hack, I am not sure why but keydown event occurs after blur event.
                    setTimeout(() => {
                        if (!isHandled.current) {
                            if (!isDevToolsBlurEvent(focusScope)) {
                                // Ignore events related to the trigger to prevent double toggle.
                                if ((event as FocusEvent).relatedTarget !== triggerRef.current) {
                                    hide(event);
                                }
                            }
                        }

                        setIsHandled(false);
                    }, 0);

                    break;
                }
                default: {
                    hide(event);
                }
            }
        }),
        trigger
    });

    return mergeProps(
        props,
        {
            onKeyDown: handleKeyDown
        }
    );
}


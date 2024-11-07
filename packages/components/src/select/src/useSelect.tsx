import {
    FocusTarget,
    Keys,
    arrayify,
    isNil,
    isNumber,
    mergeProps,
    useAutoFocus,
    useChainedEventCallback,
    useControllableState,
    useEventCallback,
    useId,
    useMergedRefs,
    useRawSlots,
    useRefState
} from "../../shared/index.ts";
import { KeyboardEvent, ReactNode, Ref, SyntheticEvent, useCallback, useMemo } from "react";
import { OverlayProps, PopupAlignment, PopupDirection, PopupPosition, usePopup, useTriggerWidth } from "../../overlay/index.ts";
import { useCollection, useOnlyCollectionItems } from "../../collection/index.ts";

import { OptionKeyProp } from "../../listbox/index.ts";
import { ValidationState } from "../../input/index.ts";

export interface UseSelectOptions {
    align?: PopupAlignment;
    allowFlip?: boolean;
    allowPreventOverflow?: boolean;
    allowResponsiveMenuWidth?: boolean;
    ariaDescribedBy?: string;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    autoFocus?: boolean | number;
    defaultOpen?: boolean;
    defaultSelectedKey?: string;
    direction?: PopupDirection;
    disabled?: boolean;
    id?: string;
    onOpenChange?: (event: SyntheticEvent, isOpen: boolean) => void;
    onSelectionChange?: (event: SyntheticEvent, selectedKey: string) => void;
    open?: boolean | null;
    overlayProps?: Partial<OverlayProps>;
    readOnly?: boolean;
    ref?: Ref<any>;
    selectedKey?: string | null;
    validationState?: ValidationState;
}

export function useSelect(children: ReactNode, {
    align = "start",
    allowFlip,
    allowPreventOverflow,
    allowResponsiveMenuWidth = true,
    ariaDescribedBy,
    ariaLabel,
    ariaLabelledBy,
    autoFocus,
    defaultOpen,
    defaultSelectedKey,
    direction = "bottom",
    disabled,
    id,
    onOpenChange,
    onSelectionChange,
    open: openProp,
    overlayProps: { id: menuId, width: menuWidth, ...menuProps } = {},
    readOnly,
    ref,
    selectedKey: selectedKeyProp,
    validationState
}: UseSelectOptions = {}) {
    const [selectedKey, setSelectedKey] = useControllableState(selectedKeyProp, defaultSelectedKey, null);
    const [autoFocusTargetRef, setAutoFocusTarget] = useRefState<string>(FocusTarget.first);

    const handleOpenChange = useChainedEventCallback(onOpenChange, (event: SyntheticEvent, isVisible: boolean) => {
        // When the select is closed because of a blur or outside click event, reset the focus target.
        if (!isVisible) {
            setAutoFocusTarget(FocusTarget.first);
        }
    });

    const {
        focusScope,
        isOpen,
        overlayProps,
        setIsOpen,
        triggerProps: { ref: popupTriggerRef, ...triggerProps }
    } = usePopup("listbox", {
        allowFlip,
        allowPreventOverflow,
        defaultOpen,
        disabled: disabled || readOnly,
        hideOnEscape: true,
        hideOnLeave: true,
        hideOnOutsideClick: false,
        id: menuId,
        keyProp: OptionKeyProp,
        offset: [0, 4],
        onOpenChange: handleOpenChange,
        open: openProp,
        position: `${direction}-${align}` as PopupPosition,
        trigger: "click"
    });

    const [triggerWidthRef, triggerWidth] = useTriggerWidth({ isDisabled: !allowResponsiveMenuWidth || !isNil(menuWidth) });

    const triggerRef = useMergedRefs(ref, popupTriggerRef, triggerWidthRef);

    const updateSelectedKey = useCallback((event: SyntheticEvent, newKeys: string[]) => {
        const newKey = newKeys[0] ?? null;

        if (newKey !== selectedKey) {
            setSelectedKey(newKey);

            if (!isNil(onSelectionChange)) {
                onSelectionChange(event, newKey);
            }
        }
    }, [selectedKey, setSelectedKey, onSelectionChange]);

    const open = useCallback((event: SyntheticEvent, focusTarget: string) => {
        setAutoFocusTarget(focusTarget);
        setIsOpen(event, true);
    }, [setIsOpen, setAutoFocusTarget]);

    const close = useCallback((event: SyntheticEvent) => {
        setIsOpen(event, false);
    }, [setIsOpen]);

    // Open the menu on up & down arrow keydown.
    const handleTriggerKeyDown = useEventCallback((event: KeyboardEvent) => {
        switch (event.key) {
            case Keys.arrowDown:
                event.preventDefault();
                open(event, FocusTarget.first);
                break;
            case Keys.arrowUp:
                event.preventDefault();
                open(event, FocusTarget.last);
                break;
        }
    });

    // Keep the selected key in sync with the listbox.
    const handleListboxSelectionChange = useEventCallback((event: SyntheticEvent, newValue: string[]) => {
        updateSelectedKey(event, newValue);
        close(event);
    });

    useAutoFocus(triggerRef, {
        delay: isNumber(autoFocus) ? autoFocus : undefined,
        isDisabled: !autoFocus || isOpen
    });

    const nodes = useCollection(children);
    const items = useOnlyCollectionItems(nodes);

    const selectedItem = useMemo(() => items.find(x => x.key === selectedKey), [items, selectedKey]);

    const { avatar, "end-icon": endIcon, icon, stringValue, text } = useRawSlots(selectedItem?.content, ["icon", "avatar", "text", "end-icon"]);

    const triggerId = useId(id, "o-ui-select-trigger");
    const valueId = useId(id, "o-ui-select-value");

    return {
        close,
        focusScope,
        isOpen,
        listboxProps: {
            "aria-describedby": ariaDescribedBy,
            "aria-label": ariaLabel,
            "aria-labelledby": isNil(ariaLabel) ? (ariaLabelledBy ?? triggerId) : undefined,
            // Must be conditional to isOpen otherwise it will steal the focus from the trigger when selecting
            // a value because the listbox re-render before the exit animation is done.
            autoFocus: isOpen,
            autoFocusTarget: autoFocusTargetRef.current,
            fluid: true,
            focusOnHover: true,
            nodes,
            onSelectionChange: handleListboxSelectionChange,
            selectedKeys: useMemo(() => arrayify(selectedKey), [selectedKey]),
            validationState
        },
        open,
        overlayProps: mergeProps(
            {
                className: "o-ui-select-menu",
                width: menuWidth ?? triggerWidth ?? undefined
            },
            menuProps,
            overlayProps
        ),
        selectedItem: isNil(selectedItem) ? undefined : {
            avatar,
            endIcon,
            icon,
            text: text?.props?.children ?? stringValue ?? ""
        },
        selectedKey,
        setSelectedKey: updateSelectedKey,
        triggerProps: mergeProps(
            {
                "aria-describedby": ariaDescribedBy,
                "aria-label": ariaLabel,
                "aria-labelledby": isNil(ariaLabel)
                    ? isNil(ariaLabelledBy) ? valueId : `${ariaLabelledBy} ${valueId}`
                    : undefined,
                disabled,
                id: triggerId,
                onKeyDown: !isOpen ? handleTriggerKeyDown : undefined,
                ref: triggerRef
            },
            triggerProps
        ),
        valueProps: {
            id: valueId
        }
    };
}

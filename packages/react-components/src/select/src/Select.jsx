import "./Select.css";

import { ChevronIcon } from "../../icons";
import {
    FocusTarget,
    Keys,
    cssModule,
    mergeProps,
    useAutoFocus,
    useControllableState,
    useEventCallback,
    useFocusScope,
    useMergedRefs,
    useResizeObserver,
    useSlots
} from "../../shared";
import { HiddenSelect } from "./HiddenSelect";
import { ListboxBase } from "../../listbox";
import { Overlay, useRestoreFocus } from "../../overlay";
import { Text } from "../../text";
import { any, arrayOf, bool, elementType, func, number, oneOf, oneOfType, string } from "prop-types";
import { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import { isNil, isNumber } from "lodash";
import { useCollectionBuilder } from "../../collection";
import { useFieldInputProps } from "../../field";
import { usePopover } from "../../popover";

const propTypes = {
    /**
     * Whether or not to open the select element.
     */
    open: bool,
    /**
     * The initial value of show when in auto controlled mode.
     */
    defaultOpen: bool,
    /**
     * A controlled array holding the currently selected key(s).
     */
    selectedKey: oneOfType([string, arrayOf(string)]),
    /**
     * The initial value of `selectedKey` when uncontrolled.
     */
    defaultSelectedKey: oneOfType([string, arrayOf(string)]),
    /**
     * Temporary text that occupies the select trigger when no value is selected.
     */
    placeholder: string,
    /**
     * Whether or not a user input is required before form submission.
     */
    required: bool,
    /**
     * Whether or not the select should display as "valid" or "invalid".
     */
    validationState: oneOf(["valid", "invalid"]),
    /**
     * Called when the select value change.
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {boolean} selectedKey - The new selected key.
     * @returns {void}
     */
    onChange: func,
    /**
     * Called when the select visibility change.
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {boolean} isVisible - Indicate if the select is visible.
     * @returns {void}
     */
    onVisibilityChange: func,
    /**
     * The style to use.
     */
    variant: oneOf(["outline", "inline", "transparent"]),
    /**
     * The horizontal alignment of the select menu relative to the input target.
     */
    align: oneOf(["start", "end"]),
    /**
     * The direction the select menu will open relative to the input.
     */
    direction: oneOf(["bottom", "top"]),
    /**
     * Whether or not the select should autofocus on render.
     */
    autoFocus: oneOfType([bool, number]),
    /**
     * Whether or not the select take up the width of its container.
     */
    fluid: bool,
    /**
     * Whether or not the select is disabled.
     */
    disabled: bool,
    /**
     * Whether or not the select menu can flip when it will overflow it's boundary area.
     */
    allowFlip: bool,
    /**
     * Whether or not the selection menu position can change to prevent it from being cut off so that it stays visible within its boundary area.
     */
    allowPreventOverflow: bool,
    /**
     * z-index of the overlay element.
     */
    zIndex: number,
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * React children.
     */
    children: oneOfType([any, func]).isRequired
};

export function InnerSelect(props) {
    const [fieldProps] = useFieldInputProps();

    const {
        open,
        defaultOpen,
        selectedKey: controlledKey,
        defaultSelectedKey,
        placeholder,
        required,
        validationState,
        onChange,
        onVisibilityChange,
        variant = "outline",
        align = "start",
        direction = "bottom",
        autoFocus,
        name,
        fluid,
        disabled,
        allowFlip,
        allowPreventOverflow,
        zIndex,
        active,
        focus,
        hover,
        "aria-label": ariaLabel,
        as: TriggerType = "button",
        children,
        forwardedRef,
        ...rest
    } = mergeProps(
        props,
        fieldProps
    );

    // const [isVisible, setIsVisible] = useControllableState(open, defaultOpen, false);
    const [selectedKey, setSelectedKey] = useControllableState(controlledKey, defaultSelectedKey, null);
    const [triggerElement, setTriggerElement] = useState();
    const [overlayElement, setOverlayElement] = useState();
    const [triggerWidth, setTriggerWidth] = useState("0px");

    const [focusScope, setFocusRef] = useFocusScope();

    const triggerRef = useMergedRefs(setTriggerElement, forwardedRef);
    const overlayRef = useMergedRefs(setOverlayElement, setFocusRef);

    const autoFocusTargetRef = useRef(null);

    const { isVisible, setVisibility: setPopoverVisibility, triggerProps, overlayProps } = usePopover(triggerElement, overlayElement, "listbox", {
        show: open,
        defaultShow: defaultOpen,
        onVisibilityChange,
        hideOnEscape: true,
        hideOnBlur: true,
        position: `${direction}-${align}`,
        offset: [0, 4],
        allowFlip,
        allowPreventOverflow,
        zIndex
    });

    const setSelection = (event, newKey) => {
        if (!isNil(onChange)) {
            onChange(event, newKey);
        }

        setSelectedKey(newKey);
    };

    const setVisibility = useCallback((event, newVisibility, focusTarget = null) => {
        setPopoverVisibility(event, newVisibility);
        autoFocusTargetRef.current = focusTarget;
    }, [setPopoverVisibility, autoFocusTargetRef]);

    const renderProps = useMemo(() => ({ selectedKey }), [selectedKey]);

    const nodes = useCollectionBuilder(children, renderProps);

    const handleTriggerKeyDown = useEventCallback(event => {
        switch (event.keyCode) {
            case Keys.down:
                setVisibility(event, true, FocusTarget.first);
                break;
            case Keys.up:
                setVisibility(event, true, FocusTarget.last);
                break;
        }
    });

    const handleSelectOption = useEventCallback((event, newKey) => {
        setSelection(event, newKey);
        setVisibility(event, false);
    });

    const restoreFocusProps = useRestoreFocus(focusScope, { isDisabled: !isVisible });

    useAutoFocus(triggerRef, {
        isDisabled: !autoFocus || isVisible,
        delay: isNumber(autoFocus) ? autoFocus : undefined
    });

    // Ensure the trigger and menu width stay in sync.
    useResizeObserver(
        triggerElement,
        useEventCallback(entry => { setTriggerWidth(`${entry.borderBoxSize[0].inlineSize}px`); }),
        { box: "border-box" }
    );

    const selectedNode = nodes.find(x => x.itemKey === selectedKey);

    const { icon: selectedIcon, text: selectedText, "right-icon": selectedRightIcon } = useSlots(selectedNode?.content, {
        _: {
            defaultWrapper: Text
        },
        icon: {
            size: "sm",
            className: "o-ui-select-value-left-icon"
        },
        text: {
            className: "o-ui-select-value"
        },
        "right-icon": {
            size: "sm",
            className: "o-ui-select-value-right-icon"
        }
    });

    const valueMarkup = !isNil(selectedNode) ? (
        <div className="o-ui-select-value">
            {selectedIcon}
            {selectedText}
            {selectedRightIcon}
        </div>
    ) : (
        <span className="o-ui-select-placeholder">{placeholder}</span>
    );

    return (
        <>
            <HiddenSelect
                name={name}
                selectedKey={selectedKey}
                required={required}
                validationState={validationState}
                disabled={disabled}
            />
            <TriggerType
                {...mergeProps(
                    rest,
                    triggerProps,
                    {
                        onKeyDown: !isVisible ? handleTriggerKeyDown : undefined,
                        className: cssModule(
                            "o-ui-select-trigger",
                            variant,
                            validationState,
                            fluid && "fluid",
                            active && "active",
                            focus && "focus",
                            hover && "hover"
                        ),
                        disabled,
                        "aria-label": !fieldProps["aria-labelledby"] ? ariaLabel : undefined,
                        ref: triggerRef
                    }
                )}
            >
                {valueMarkup}
                <ChevronIcon
                    className={direction === "bottom" ? "o-ui-rotate-90" : "o-ui-rotate-270"}
                    size="sm"
                />
            </TriggerType>
            <Overlay
                {...mergeProps(
                    overlayProps,
                    restoreFocusProps,
                    {
                        show: isVisible,
                        className: "o-ui-select-menu",
                        style: {
                            width: triggerWidth
                        },
                        ref: overlayRef
                    }
                )}
            >
                <ListboxBase
                    nodes={nodes}
                    selectedKey={selectedKey}
                    onChange={handleSelectOption}
                    /* Must be conditional to isVisible otherwise it will steal the focus from the trigger when selecting
                       a value because the listbox re-render before the exit animation is done. */
                    autoFocus={isVisible}
                    autoFocusTarget={autoFocusTargetRef.current}
                    fluid
                    aria-label={!fieldProps["aria-labelledby"] ? ariaLabel : undefined}
                    aria-labelledby={fieldProps["aria-labelledby"]}
                    aria-describedby={fieldProps["aria-describedby"]}
                />
            </Overlay>
        </>
    );
}

InnerSelect.propTypes = propTypes;

export const Select = forwardRef((props, ref) => (
    <InnerSelect {...props} forwardedRef={ref} />
));

Select.displayName = "Select";

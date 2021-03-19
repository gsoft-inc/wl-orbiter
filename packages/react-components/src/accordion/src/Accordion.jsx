import "./Accordion.css";

import { AccordionContext } from "./AccordionContext";
import { AccordionItem } from "./AccordionItem";
import { Box } from "../../box";
import {
    Keys,
    mergeProps,
    useAutoFocusChild,
    useControllableState,
    useEventCallback,
    useFocusManager,
    useFocusScope,
    useId,
    useKeyboardNavigation,
    useMergedRefs
} from "../../shared";
import { any, arrayOf, bool, elementType, func, number, oneOf, oneOfType, string } from "prop-types";
import { forwardRef } from "react";
import { isNil, isNumber } from "lodash";
import { useAccordionItems } from "./useAccordionItems";

export const ExpansionMode = {
    single: "single",
    multiple: "multiple"
};

const propTypes = {
    /**
     * A controlled set of expanded item keys.
     */
    expandedKeys: arrayOf(string),
    /**
     * The initial value of `expandedKeys` when uncontrolled.
     */
    defaultIndex: arrayOf(string),
    /**
     * Called when an accordion item is toggled.
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {String[]} keys - The keys of the expanded items.
     * @returns {void}
     */
    onExpansionChange: func,
    /**
     * The type of expansion that is allowed.
     */
    expansionMode: oneOf(["single", "multiple"]),
    /**
     * Whether or not the first focusable accordion item should autoFocus on render.
     */
    autoFocus: oneOfType([bool, number]),
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * React children
     */
    children: any.isRequired
};

export function InnerAccordion({
    id,
    expandedKeys: expandedKeysProp,
    defaultExpandedKeys,
    onExpansionChange,
    expansionMode = ExpansionMode.single,
    autoFocus,
    as = "div",
    children,
    forwardedRef,
    ...rest
}) {
    const [expandedKeys, setExpandedKeys] = useControllableState(expandedKeysProp, defaultExpandedKeys, []);

    const [focusScope, setFocusRef] = useFocusScope();

    const containerRef = useMergedRefs(setFocusRef, forwardedRef);

    const items = useAccordionItems(children, useId(id, id ? null : "o-ui-accordion"));

    const focusManager = useFocusManager(focusScope);

    useAutoFocusChild(focusManager, {
        isDisabled: !autoFocus,
        delay: isNumber(autoFocus) ? autoFocus : undefined
    });

    const navigationProps = useKeyboardNavigation(focusManager, {
        previous: [Keys.arrowUp],
        next: [Keys.arrowDown],
        first: [Keys.home],
        last: [Keys.end]
    });

    const handleToggle = useEventCallback((event, toggledKey) => {
        let newKeys;

        if (!expandedKeys.includes(toggledKey)) {
            if (expansionMode === ExpansionMode.multiple) {
                newKeys = [...expandedKeys, toggledKey];
            } else {
                newKeys = [toggledKey];
            }
        } else {
            newKeys = expandedKeys.filter(x => x !== toggledKey);
        }

        if (!isNil(onExpansionChange)) {
            onExpansionChange(event, newKeys);
        }

        setExpandedKeys(newKeys);
    });

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    className: "o-ui-accordion",
                    as,
                    ref: containerRef
                },
                navigationProps
            )}
        >
            <AccordionContext.Provider
                value={{
                    expandedKeys: expandedKeys,
                    onToggle: handleToggle
                }}
            >
                {items.map(({
                    id: itemId,
                    key,
                    // position,
                    header,
                    panel
                }) => (
                    <AccordionItem
                        item={{
                            id: itemId,
                            key,
                            header,
                            panel
                        }}
                        key={key}
                    />
                ))}
            </AccordionContext.Provider>
        </Box>
    );
}

InnerAccordion.propTypes = propTypes;

export const Accordion = forwardRef((props, ref) => (
    <InnerAccordion {...props} forwardedRef={ref} />
));

Accordion.displayName = "Accordion";

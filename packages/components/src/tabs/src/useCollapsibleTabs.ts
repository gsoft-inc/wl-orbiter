// Inspired by: https://codesandbox.io/s/ariakit-collapsible-tab-835t8?file=/src/tab-popover.tsx

import { isNil, useMergedRefs, useRefState, useResizeObserver } from "../../shared";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { TabType } from "./useTabsItems";

export interface UseCollapsibleTabsOptions {
    gap?: number;
    isDisabled?: boolean;
    popoverTriggerWidth?: number;
}

const MinVisibleItems = 1;

export function useCollapsibleTabs(tabs: TabType[], selectedKey: string, { gap, isDisabled, popoverTriggerWidth }: UseCollapsibleTabsOptions = {}) {
    const [limit, setLimit] = useState(Infinity);
    const [visibleTabs, setVisibleTabs] = useState(tabs);
    const [collapsedTabs, setCollapsedTabs] = useState<TabType[]>([]);
    const [isInitialResizeRef, setIsInitialResize] = useRefState(true);

    const containerRef = useRef<HTMLElement>();

    const computeLimit = useCallback(() => {
        const containerElement = containerRef.current;

        if (isNil(containerElement)) {
            return;
        }

        const availableWidth = containerElement.offsetWidth - popoverTriggerWidth;
        const tabElements = containerElement.querySelectorAll<HTMLElement>("[data-o-ui-type=\"hidden-tab\"]");

        let i = 0;
        let currentWidth = 0;

        while (i < tabElements.length) {
            const element = tabElements[i];

            if (element) {
                currentWidth += element.offsetWidth + gap;

                if (currentWidth > availableWidth) {
                    break;
                }
            }

            i++;
        }

        setLimit(Math.max(MinVisibleItems, i));
    }, [gap, popoverTriggerWidth]);

    // Since a selected collapsed tab is promoted to visible tabs we must recompute the limit when the selectedKey change
    // because the newly selected tab could be larger than the available space.
    useEffect(() => {
        // Must wait for the hidden tabs to be refreshed.
        requestAnimationFrame(() => {
            computeLimit();
        });
    }, [selectedKey, computeLimit]);

    useLayoutEffect(() => {
        const newVisibleTabs = tabs.slice(0, limit);
        let newCollapsedTabs = tabs.slice(limit);

        const selectedTab = newCollapsedTabs.find(x => x.key === selectedKey);

        if (!isNil(selectedTab)) {
            const lastVisibleTab = newVisibleTabs.pop();

            newCollapsedTabs = newCollapsedTabs.filter(x => x.key !== selectedKey);
            newCollapsedTabs.unshift(lastVisibleTab);

            newVisibleTabs.push(selectedTab);
        }

        setVisibleTabs(newVisibleTabs);
        setCollapsedTabs(newCollapsedTabs);
    }, [tabs, limit, selectedKey]);

    const handleResize = useCallback(() => {
        if (isInitialResizeRef.current) {
            setIsInitialResize(false);
        } else {
            computeLimit();
        }
    }, [computeLimit, isInitialResizeRef, setIsInitialResize]);

    const resizeRef = useResizeObserver(handleResize, { isDisabled: isDisabled || tabs?.length < 2 });

    return {
        collapsedTabs,
        collapsibleTabsRef: useMergedRefs(containerRef, resizeRef),
        hiddenTabs: [...visibleTabs, ...collapsedTabs],
        visibleTabs
    };
}

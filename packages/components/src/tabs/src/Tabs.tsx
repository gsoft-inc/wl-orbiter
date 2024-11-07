import { useMemo, ComponentProps, ReactNode, SyntheticEvent, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, cssModule, isNil, mergeProps, useControllableState, useEventCallback, useId } from "../../shared/index.ts"
import { ResponsiveProp, useResponsiveValue } from "../../styling/index.ts"
import { TabsContext, TabsOrientation, TabsVariant } from "./TabsContext";

import { Box } from "../../box/index.ts"
import { TabList } from "./TabList";
import { TabPanels } from "./TabPanels";
import { useTabsItems } from "./useTabsItems";

const DefaultElement = "div";

export interface InnerTabsProps extends InternalProps, Omit<StyledComponentProps<typeof DefaultElement>, "autoFocus"> {
    /**
     * See [WCAG](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html).
     */
    "aria-label": string;
    /**
     * Whether or not the first focusable tab should autoFocus on render.
     */
    autoFocus?: boolean | number;
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * Whether or not the tabs could collapsed to fit into the available space.
     */
    collapsible?: boolean;
    /**
     * The initial value of `selectedKey` when uncontrolled.
     */
    defaultSelectedKey?: string;
    /**
     * Whether or not the tabs take up the width of the container.
     */
    fluid?: ResponsiveProp<boolean>;
    /**
     * Whether or not keyboard navigation changes focus between tabs but doesn't activate it.
     */
    manual?: boolean;
    /**
     * Called when the selected tab change.
     * @param {SyntheticEvent} event - React's original event.
     * @param {string} key - The selected tab key.
     * @returns {void}
     */
    onSelectionChange?: (event: SyntheticEvent, key: string) => void;
    /**
     * The orientation of the tabs elements.
     */
    orientation?: ResponsiveProp<TabsOrientation>;
    /**
     * A controlled selected key.
     */
    selectedKey?: string | null;
    /**
     * The tabs style to use.
     */
    variant?: TabsVariant;
}

export function InnerTabs({
    "aria-label": ariaLabel,
    as = DefaultElement,
    autoFocus,
    children,
    collapsible = true,
    defaultSelectedKey,
    fluid,
    forwardedRef,
    id,
    manual,
    onSelectionChange,
    orientation = "horizontal",
    selectedKey: selectedKeyProp,
    variant = "standalone",
    ...rest
}: InnerTabsProps) {
    const fluidValue = useResponsiveValue(fluid);
    const orientationValue = useResponsiveValue(orientation);

    const [selectedKey, setSelectedKey] = useControllableState(selectedKeyProp, defaultSelectedKey, "0");

    const [tabs, panels] = useTabsItems(children, useId(id, "o-ui-tabs"));

    const handleSelect = useEventCallback((event: SyntheticEvent, newKey: string) => {
        if (newKey !== selectedKey) {
            setSelectedKey(newKey);

            if (!isNil(onSelectionChange)) {
                onSelectionChange(event, newKey);
            }
        }
    });

    // Ensure the selected key match a valid tab which is not disabled.
    const adjustedKey = useMemo(() => {
        const selectedTab = tabs.find(x => x.key === selectedKey);

        if (isNil(selectedTab)) {
            return tabs[0].key;
        }

        if (selectedTab.props?.disabled) {
            return tabs.find(x => !x.props?.disabled)?.key ?? tabs[0].key;
        }

        return selectedKey;
    }, [selectedKey, tabs]);

    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: cssModule(
                        "o-ui-tabs",
                        fluidValue && "fluid",
                        orientationValue,
                        variant
                    ),
                    id,
                    ref: forwardedRef
                }
            )}
        >
            <TabsContext.Provider
                value={{
                    isCollapsible: collapsible,
                    isManual: manual,
                    onSelect: handleSelect,
                    orientation: orientationValue,
                    selectedKey: adjustedKey,
                    variant: variant
                }}
            >
                <TabList
                    aria-label={ariaLabel}
                    autoFocus={autoFocus}
                    tabs={tabs}
                />
                <TabPanels panels={panels} />
            </TabsContext.Provider>
        </Box>
    );
}

InnerTabs.defaultElement = DefaultElement;

/**
 * Tabs are used to organize content by grouping similar information on the same page.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/tabs--default-story)
*/
export const Tabs = forwardRef<any, OmitInternalProps<InnerTabsProps>>((props, ref) => (
    <InnerTabs {...props} forwardedRef={ref} />
));

export type TabsProps = ComponentProps<typeof Tabs>;

import { ComponentProps, ReactNode, forwardRef } from "react";
import { InternalProps, OmitInternalProps, StyledComponentProps, mergeProps } from "../../shared/index.ts";
import { PanelType } from "./useTabsItems.ts";
import { Text } from "../../typography/index.ts";
import { useTabsContext } from "./TabsContext.ts";

const DefaultElement = "div";

export interface InnerTabPanelProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children.
     */
    children: ReactNode;
    /**
     * Matching panel item.
     */
    panel: PanelType;
}

export function InnerTabPanel({
    as = DefaultElement,
    children,
    forwardedRef,
    panel: { key, panelId, tabId },
    ...rest
}: InnerTabPanelProps) {
    const { selectedKey } = useTabsContext();

    return (
        <Text
            {...mergeProps(
                rest,
                {
                    "aria-labelledby": tabId,
                    as,
                    className: "o-ui-tab-panel",
                    hidden: key !== selectedKey,
                    id: panelId,
                    ref: forwardedRef,
                    role: "tabpanel"
                }
            )}
        >
            {children}
        </Text>
    );
}

InnerTabPanel.defaultElement = DefaultElement;

/**
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/tabs--default-story)
*/
export const TabPanel = forwardRef<any, OmitInternalProps<InnerTabPanelProps>>((props, ref) => (
    <InnerTabPanel {...props} forwardedRef={ref} />
));

export type TabPanelProps = ComponentProps<typeof TabPanel>;

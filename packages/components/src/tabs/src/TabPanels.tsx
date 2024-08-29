import { Box } from "../../box/index.js";
import { InternalProps, StyledComponentProps, mergeProps } from "../../shared/index.js";
import { PanelType } from "./useTabsItems.js";
import { Ref } from "react";
import { TabPanel } from "./TabPanel.js";

const DefaultElement = "div";

export interface TabPanelsProps extends Omit<InternalProps, "forwardedRef">, StyledComponentProps<typeof DefaultElement> {
    panels: PanelType[];
    ref?: Ref<any>;
}

export function TabPanels({
    as = DefaultElement,
    panels,
    ...rest
}: TabPanelsProps) {
    return (
        <Box
            {...mergeProps(
                rest,
                {
                    as,
                    className: "o-ui-tab-panels"
                }
            )}
        >
            {panels.map(({
                elementType: ElementType = TabPanel,
                key,
                panelId,
                props,
                ref,
                tabId
            }) =>
                <ElementType
                    {...props}
                    key={key}
                    panel={{
                        key,
                        panelId,
                        tabId
                    }}
                    ref={ref}
                />
            )}
        </Box>
    );
}

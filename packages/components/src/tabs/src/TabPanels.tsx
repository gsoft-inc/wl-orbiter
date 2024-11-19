import { Box } from "../../box/index.ts";
import { InternalProps, StyledComponentProps, mergeProps } from "../../shared/index.ts";
import { PanelType } from "./useTabsItems.ts";
import { Ref } from "react";
import { TabPanel } from "./TabPanel.tsx";

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

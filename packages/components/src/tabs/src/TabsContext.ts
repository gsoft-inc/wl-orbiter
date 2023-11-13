import { SyntheticEvent, createContext, useContext } from "react";

export type TabsOrientation = "horizontal" | "vertical";
export type TabsVariant = "standalone" | "in-card" | "heading";

export interface TabsContextType {
    isCollapsible?: boolean;
    isManual?: boolean;
    onSelect?: (event: SyntheticEvent, key: string) => void;
    orientation?: TabsOrientation;
    selectedKey?: string;
    variant?: TabsVariant;
}

export const TabsContext = createContext<TabsContextType>({});

export function useTabsContext() {
    return useContext(TabsContext);
}

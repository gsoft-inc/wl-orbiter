import { FocusManager } from "../../shared/index.js";
import { SyntheticEvent, createContext, useContext } from "react";
import type { ListboxSelectionMode } from "./Listbox.js";

export interface ListboxContextType {
    focusManager?: FocusManager;
    focusOnHover?: boolean;
    onFocus?: (event: SyntheticEvent, key: string, activeElement: HTMLElement) => void;
    onSelect?: (event: SyntheticEvent, key: string) => void;
    selectedKeys?: string[];
    selectionMode?: ListboxSelectionMode;
}

export const ListboxContext = createContext<ListboxContextType>({});

export function useListboxContext() {
    return useContext(ListboxContext);
}

import { createContext, useContext } from "react";

import { OrbiterTheme } from "./orbiterTheme";
import { ThemeAccessor } from "./themeAccessor";

export interface ThemeContextType {
    theme?: OrbiterTheme;
}

export const ThemeContext = createContext<ThemeContextType>({});

export function useThemeContext(): ThemeContextType & { themeAccessor: ThemeAccessor } {
    const { theme, ...rest } = useContext(ThemeContext);

    return {
        ...rest,
        theme,
        themeAccessor: new ThemeAccessor(theme)
    };
}

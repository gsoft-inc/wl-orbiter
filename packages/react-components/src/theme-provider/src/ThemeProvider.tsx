import { ApricotTheme } from "@orbit-ui/styles";
import { Box } from "../../box";
import { ElementType, ReactNode, useCallback, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { mergeClasses, mergeProps } from "../../shared";
import { useColorScheme } from "./useColorScheme";

export type ColorScheme = "light" | "dark";

export type ColorSchemeOrSystem = ColorScheme | "system";

export interface ThemeProviderProps {
    /**
     * The theme to use.
     */
    theme?: string;
    /**
     * The color scheme to use.
     */
    colorScheme: ColorSchemeOrSystem;
    /**
     * Default color scheme to use when a user prefered color scheme (system) is not available.
     */
    defaultColorScheme?: ColorScheme;
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as?: ElementType;
    /**
    * @ignore
    */
    children?: ReactNode;
}

export function ThemeProvider({
    theme: userTheme,
    colorScheme,
    defaultColorScheme,
    children,
    as = "div",
    ...rest
}: ThemeProviderProps) {
    const [remoteColorScheme, setRemoteColorScheme] = useState();

    const theme = userTheme ?? ApricotTheme.name;

    colorScheme = useColorScheme(remoteColorScheme ?? colorScheme, defaultColorScheme);

    const setColorScheme = useCallback(newColorScheme => {
        setRemoteColorScheme(newColorScheme);
    }, [setRemoteColorScheme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                colorScheme,
                setColorScheme
            }}
        >
            <Box
                {...mergeProps(
                    rest,
                    {
                        className: mergeClasses(
                            "o-ui",
                            `o-ui-${theme}`,
                            `o-ui-${theme}-${colorScheme}`
                        ),
                        as
                    }
                )}
            >
                {children}
            </Box>
        </ThemeContext.Provider>
    );
}

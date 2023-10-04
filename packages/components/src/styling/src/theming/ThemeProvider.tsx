import { ColorScheme, ColorSchemeOrSystem, useColorScheme } from "../useColorScheme";
import { InternalProps, StyledComponentProps, mergeClasses, mergeProps, OmitInternalProps } from "../../../shared";
import { ComponentProps, forwardRef, ReactNode, useCallback, useState } from "react";

import { Box } from "../../../box";
import { BreakpointProvider } from "../BreakpointProvider";
import { ColorSchemeContext } from "../ColorSchemeContext";

const DefaultElement = "div";

export interface InnerThemeProviderProps extends InternalProps, StyledComponentProps<typeof DefaultElement> {
    /**
     * React children
     */
    children: ReactNode;
    /**
     * The color scheme to use.
     */
    colorScheme: ColorSchemeOrSystem;
    /**
     * Default color scheme to use when a user preferred color scheme (system) is not available.
     */
    defaultColorScheme?: ColorScheme;
}

export function InnerThemeProvider({
    as = DefaultElement,
    children,
    colorScheme,
    defaultColorScheme,
    forwardedRef,
    ...rest
}: InnerThemeProviderProps) {
    const [remoteColorScheme, setRemoteColorScheme] = useState();

    const computedColorScheme = useColorScheme(remoteColorScheme ?? colorScheme, defaultColorScheme);

    const setColorScheme = useCallback(newColorScheme => {
        setRemoteColorScheme(newColorScheme);
    }, [setRemoteColorScheme]);

    return (
        <ColorSchemeContext.Provider
            value={{
                colorScheme: computedColorScheme,
                setColorScheme
            }}
        >
            <BreakpointProvider>
                <Box
                    {...mergeProps(
                        rest,
                        {
                            as,
                            ref: forwardedRef,
                            className: mergeClasses(
                                "o-ui",
                                `o-ui-${computedColorScheme}`,
                                "o-ui-orbiter",
                                `o-ui-orbiter-${computedColorScheme}`,
                            )
                        }
                    )}
                >
                    {children}
                </Box>
            </BreakpointProvider>
        </ColorSchemeContext.Provider>
    );
}

InnerThemeProvider.defaultElement = DefaultElement;

/**
 * Container used to define the theme and color scheme to use.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app//?path=/docs/theme-provider--page)
*/
export const ThemeProvider = forwardRef<any, OmitInternalProps<InnerThemeProviderProps>>((props, ref) => (
    <InnerThemeProvider {...props} forwardedRef={ref} />
));

export type ThemeProviderProps = ComponentProps<typeof ThemeProvider>;

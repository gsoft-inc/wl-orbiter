import { ColorScheme, ColorSchemeOrSystem, useColorScheme } from "../useColorScheme.ts";
import { StyledComponentProps, mergeClasses, mergeProps, OmitInternalProps, omitProps } from "../../../shared/index.ts";
import { ComponentProps, ForwardedRef, forwardRef, ReactNode, useCallback, useState } from "react";
import { StyledSystemProvider } from "@hopper-ui/styled-system";

import { BreakpointProvider } from "../BreakpointProvider.tsx";
import { ColorSchemeContext } from "../ColorSchemeContext.ts";
import { useStyledSystem } from "../styled-system/index.ts";

const DefaultElement = "div";

export interface InnerThemeProviderProps extends StyledComponentProps<typeof DefaultElement> {
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
    /**
     * @ignore
     */
    forwardedRef?: ForwardedRef<any>;
}

export function InnerThemeProvider(props: InnerThemeProviderProps) {
    const [remoteColorScheme, setRemoteColorScheme] = useState();

    const {
        children,
        colorScheme,
        defaultColorScheme,
        forwardedRef,
        ...rest
    } = omitProps(useStyledSystem(props), ["slot"]);

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
                <StyledSystemProvider
                    {...mergeProps(
                        rest,
                        {
                            ref: forwardedRef,
                            className: mergeClasses(
                                "o-ui",
                                `o-ui-${computedColorScheme}`,
                                "o-ui-orbiter",
                                `o-ui-orbiter-${computedColorScheme}`
                            )
                        }
                    )}
                    colorScheme={computedColorScheme}
                >
                    {children}
                </StyledSystemProvider>
            </BreakpointProvider>
        </ColorSchemeContext.Provider>
    );
}

InnerThemeProvider.defaultElement = DefaultElement;

/**
 * Container used to define the theme and color scheme to use.
 *
 * [Documentation](https://wl-orbiter-website.netlify.app/?path=/docs/theme-provider--page)
*/
export const ThemeProvider = forwardRef<any, OmitInternalProps<InnerThemeProviderProps>>((props, ref) => (
    <InnerThemeProvider {...props} forwardedRef={ref} />
));

export type ThemeProviderProps = ComponentProps<typeof ThemeProvider>;

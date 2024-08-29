import { useColorSchemeContext } from "./ColorSchemeContext.js";

export function useColorSchemeValue(lightColor: string, darkColor: string) {
    const { colorScheme } = useColorSchemeContext();

    return colorScheme === "dark" ? darkColor : lightColor;
}

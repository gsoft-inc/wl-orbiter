import { DocsContext } from "@storybook/addon-docs";
import { isNil, isString } from "@components/shared";
import { useContext, useMemo } from "react";

export function useThemedSnippet(snippets: string | Record<string, string>) {
    const { globals } = useContext(DocsContext) as any;
    const theme = globals?.theme;
    return useMemo(() => {
        if (isNil(snippets) || isString(snippets)) {
            return snippets;
        }

        return snippets[theme];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(snippets), theme]);
}

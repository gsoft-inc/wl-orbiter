import { isNil } from "@components/shared/index.ts";
import { useMemo } from "react";
import prettier from "prettier/standalone";
import prettierBabel from "prettier/parser-babel";
import prettierPostCss from "prettier/parser-postcss";

const PrettierParser = {
    "javascript": "babel",
    "jsx": "babel",
    "tsx": "babel-ts",
    "css": "css"
};


export function useFormattedCode(code: string, language: string) {
    return useMemo(() => {
        formatCode(code, language);
    }, [code, language]);
}

export function formatCode(code: string, language: string) {
    const parser = PrettierParser[language];

    if (!isNil(parser)) {
        const prettyCode = prettier
            .format(code, {
                parser: parser,
                plugins: [prettierBabel, prettierPostCss],
                tabWidth: 4,
                arrowParens: "avoid",
                printWidth: 100,
                trailingComma: "none"
            })
            .replace(">;", ">")
            .trim();

        return prettyCode;
    }

    return code.trim();
}

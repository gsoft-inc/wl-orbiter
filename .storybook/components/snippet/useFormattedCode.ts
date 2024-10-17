import { isNil } from "@components/shared";
import { useMemo } from "react";
import prettier from "prettier/standalone";
import prettierBabel from "prettier/parser-babel";
import prettierPostCss from "prettier/parser-postcss";

const PrettierParser = {
    "javascript": "babel",
    "jsx": "babel",
    "css": "css"
};

export function useFormattedCode(code: string, language: string) {
    return useMemo(() => {
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

            console.log("useFormattedCode", code, prettyCode);

            return prettyCode;
        }

        return code.trim();
    }, [code, language]);
}

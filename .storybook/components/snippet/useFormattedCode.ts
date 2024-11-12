import { isNil } from "@components/shared/index.ts";
import * as prettier from "prettier/standalone";
import prettierBabel from "prettier/plugins/babel";
import prettierPostCss from "prettier/plugins/postcss";
import prettierEstree from "prettier/plugins/estree";

const PrettierParser = {
    "javascript": "babel",
    "jsx": "babel",
    "tsx": "babel-ts",
    "css": "css"
};

export function formatCode(code: string, language: string) {
    const parser = PrettierParser[language];

    if (!isNil(parser)) {
        let prettyCode = code;

        prettier
            .format(code, {
                parser: parser,
                plugins: [prettierBabel, prettierPostCss, prettierEstree],
                tabWidth: 4,
                arrowParens: "avoid",
                printWidth: 100,
                trailingComma: "none"
            })
            .then(result => {
                prettyCode = result.replace(">;", ">").trim();
            })
            .catch(() => {
                prettyCode = code.trim();
            });

        return prettyCode;
    }

    return code.trim();
}

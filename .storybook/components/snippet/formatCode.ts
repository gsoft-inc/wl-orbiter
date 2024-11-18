import { isNil } from "@components/shared/index.ts";
import prettier from "prettier-local";
import babel from "prettier-parser-babel";
import postcss from "prettier-parser-postcss";

const PrettierParser = {
    "javascript": "babel",
    "jsx": "babel",
    "tsx": "babel-ts",
    "css": "css"
};

export function formatCode(code: string, language: string) {
    const parser = PrettierParser[language];

    if (!isNil(parser)) {
        return prettier.format(code, {
            parser: parser,
            plugins: [babel, postcss],
            tabWidth: 4,
            arrowParens: "avoid",
            printWidth: 100,
            trailingComma: "none"
        }).replace(">;", ">").trim();
    }

    return code.trim();
}

module.exports = {
    root: true,
    rules: {
        "linebreak-style": ["warn", "unix"]
    },
    overrides:
    [
        {
            files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
            parser: "@typescript-eslint/parser", // we use the typescript parser for js files as well
            env: {
                commonjs: true,
                node: true,
                es6: true
            },
            extends: [
                "plugin:@sharegate/core",
                "plugin:@sharegate/react",
                "plugin:@sharegate/typescript",
                "plugin:@sharegate/testing-library",
                "plugin:@sharegate/storybook"
            ],
            rules: {

            }
        },
        {
            files: ["*.chroma.jsx"],
            extends: [
            ],
            rules:{
                "storybook/default-exports": "off" // Those stories do not support CSF yet
            }
        },
        {
            files: ["*.stories.tsx"],
            extends: [
                "plugin:@sharegate/storybook-csf"
            ],
            rules:{
                "storybook/no-title-property-in-meta": "off", // this should be turned off in the main config
                "@typescript-eslint/no-empty-function" : "off" // empty function in examples is fine
            }
        },
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "react/no-unused-prop-types": "off", // Issue with typescript
                "@typescript-eslint/no-explicit-any": "off", // we use any a lot in orbiter
                "@typescript-eslint/ban-ts-comment": "off"
            }
        },
        {
            files: ["*.sample.jsx"],
            rules: {
                "no-unused-expressions": "off",
                "no-unused-vars": "off",
                "no-undef": "off",
                "react/jsx-no-undef": "off"
            }
        },
        {
            // react inside mdx is no longer linted. But it's been disabled for a while so it's ok for now.
            // we should take a look at it later
            extends: [
                "plugin:@sharegate/mdx"
            ],
            files: ["*.mdx"],
            parserOptions: {
                "ecmaVersion": 6,
                "sourceType": "module",
                "ecmaFeatures": {
                    "modules": true,
                    jsx: true
                }
            },
            globals: {
                "props": true
            },
            rules:{
                "react/jsx-no-undef": "off"
            }
        }
    ]
};

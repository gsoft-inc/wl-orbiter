/** @type {import('stylelint').Config} */
const config = {
    extends: "@workleap/stylelint-configs",
    rules: {
        // Disable all the new workleap rules for now. We will enable them one by one as needed.
        // We are now on the workleap config, even if we haven't fixed all the rules yet
        "custom-property-pattern": null,
        "custom-property-pattern": null,
        "number-max-precision": null,
        "selector-not-notation": null,
        "declaration-block-no-redundant-longhand-properties": null,
        "custom-property-pattern": null,
        "import-notation": null,
        "declaration-empty-line-before": null,
        "unit-allowed-list": null,
        "color-function-notation": null,
        "alpha-value-notation": null,
        "comment-empty-line-before": null,
        "selector-pseudo-element-colon-notation": null,
        "value-keyword-case": null,
        "custom-property-empty-line-before": null,
        "property-no-vendor-prefix": null,
        "rule-empty-line-before": null,
        "media-feature-range-notation": null,
        "hue-degree-notation": null,
        "font-family-name-quotes": null,
        "at-rule-empty-line-before": null,
    }
};

export default config;

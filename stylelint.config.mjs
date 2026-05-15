/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    // allow PostCSS at-rules (@mixin, @define-mixin, @mixin-content)
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["mixin", "define-mixin", "mixin-content"],
      },
    ],

    // allow CSS Modules :global() pseudo-class
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],

    // CSS Modules use camelCase class names
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]*$",

    // we use bare-string @import syntax, not url(...)
    "import-notation": "string",

    // allow camelCase for SVG-derived keywords (e.g. text-rendering: optimizeLegibility)
    // and exempt font-family + font-stack tokens so proper nouns keep their casing
    "value-keyword-case": [
      "lower",
      {
        camelCaseSvgKeywords: true,
        ignoreProperties: ["font-family", "/^--basalt-font-(serif|sans|monospace)$/"],
      },
    ],

    // let oxfmt handle formatting — disable formatting-adjacent rules
    "comment-empty-line-before": null,
    "custom-property-empty-line-before": null,
    "declaration-empty-line-before": null,
  },
  ignoreFiles: ["**/node_modules/**", "**/.next/**", "**/out/**", "**/coverage/**"],
  overrides: [
    {
      // mixins.css defines `@define-mixin` bodies with bare `&` selectors that
      // resolve against the consumer's parent rule once postcss-mixins expands them
      files: ["css/mixins.css"],
      rules: {
        "nesting-selector-no-missing-scoping-root": null,
      },
    },
  ],
};

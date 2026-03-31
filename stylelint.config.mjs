/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  rules: {
    // allow PostCSS at-rules (@mixin, @define-mixin, etc.)
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

    // disable rules that conflict with PostCSS mixins
    "no-descending-specificity": null,

    // allow nesting inside @define-mixin blocks (PostCSS mixins have no scoping root)
    "nesting-selector-no-missing-scoping-root": null,

    // allow deprecated but widely-used keywords like break-word in reset.css
    "declaration-property-value-keyword-no-deprecated": null,

    // allow duplicate selectors (common pattern for :root with @mixin)
    "no-duplicate-selectors": null,

    // naming patterns - allow camelCase from CSS Modules
    "custom-property-pattern": null,
    "keyframes-name-pattern": null,
    "selector-class-pattern": null,

    // allow empty CSS files
    "no-empty-source": null,

    // disable opinionated modern syntax rules
    "color-function-notation": null,
    "alpha-value-notation": null,
    "media-feature-range-notation": null,
    "import-notation": null,
    "color-hex-length": null,

    // allow existing keyword casing (currentColor, font names, etc.)
    "value-keyword-case": null,

    // allow quotes around font-family names
    "font-family-name-quotes": null,

    // let oxfmt handle formatting — disable formatting-adjacent rules
    "comment-empty-line-before": null,
    "custom-property-empty-line-before": null,
    "declaration-empty-line-before": null,

    // allow longhand properties
    "declaration-block-no-redundant-longhand-properties": null,

    // keep useful rules
    "comment-whitespace-inside": "always",
    "length-zero-no-unit": true,
    "declaration-block-no-duplicate-custom-properties": true,
  },
  ignoreFiles: ["**/node_modules/**", "**/.next/**", "**/out/**", "**/coverage/**"],
};

# CHANGELOG

## v3.0.0
* **BREAKING:** Upgraded to Sanity Studio v4 and v5
* Updated `sanity` peer dependency to support `^4.0.0 || ^5.0.0` (works with both versions)
* Updated `@sanity/ui` peer dependency from `^1.0.0` to `^3.0.0`
* Updated `react` and `react-dom` peer dependencies to support `^18.0.0 || ^19.0.0` (React 18 for v4, React 19 for v5)
* Updated minimum Node.js requirement to v20.19+
* Replaced deprecated `useFormBuilder` hook with `useFormValue` hook for v4/v5 compatibility
* Fixed build configuration to properly strip source paths
* Plugin code is fully compatible with both Sanity Studio v4 and v5 with no breaking changes

## v2.0.0
* Updated for Sanity Studio v3

## v1.4.0
* [#3](https://github.com/LiamMartens/sanity-plugin-autocomplete-input/issues/3) Added `disableNew` option similar to the native `Reference` type to disallow creating new options inline.
* [#1](https://github.com/LiamMartens/sanity-plugin-autocomplete-input/issues/1) A new option was added to resolve additional GROQ params from the parent value.
* [#2](https://github.com/LiamMartens/sanity-plugin-autocomplete-input/issues/2) The options behavior has been updated to not fetch the GROQ query if options was already defined.

## v1.3.1
* Fixed docs on how to specify options

## v1.3.0
* Explose both `es` and `cjs` modules

## v1.2.0
* Don't show duplicate options

## v1.1.1
* Don't show duplicate options

## v1.1.0
* Fixed query issue and minor updates to UI

## v1.0.6
* Fixed `sanity.json` pointing to wrong js file

## v1.0.5
* Included missing `sanity.json` file for npm

## v1.0.4
* Switch back to `es` but fix transpilation of unsupported syntax like `?`

## v1.0.3
* Only export `cjs` module for Sanity

## v1.0.2
* Only export `ES` module for Sanity

## v1.0.1
* Fixed typings and input export
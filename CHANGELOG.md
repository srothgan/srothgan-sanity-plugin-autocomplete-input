# CHANGELOG

> **Note:** v3.0.0+ is maintained by [@srothgan](https://github.com/srothgan) as a fork.  
> v1.x - v2.x were created by [@LiamMartens](https://github.com/LiamMartens) in the [original repository](https://github.com/LiamMartens/sanity-plugin-autocomplete-input).

## v3.0.3
* **Documentation:** Improved README.md Usage section with clearer structure
  * Split configuration options into three separate subsections for better readability
  * Added progressive disclosure pattern (simplest option first)
  * Enhanced code examples with inline comments for each approach
  * Improved scannability with numbered headers and focused examples

## v3.0.2
* **Fix:** Prevent input interruption on keystroke ([#1](https://github.com/srothgan/sanity-plugin-autocomplete-input/pull/1))
  * Fixed issue where entering field for autocomplete input caused keystroke interruption
  * Removed unnecessary `useEffect` dependency that was causing re-renders

## v3.0.1
* **Chore:** Added GitHub workflows, community files, and updated documentation
  * Added GitHub Actions workflows for build verification and npm publishing
  * Added Dependabot configuration with cooldown periods
  * Added issue templates (bug report, feature request, question)
  * Added pull request template
  * Added CONTRIBUTING.md and CODE_OF_CONDUCT.md
  * Updated README.md with TypeScript usage examples, troubleshooting section, and links
  * Configured trusted publishing (OIDC) for npm
  * Auto-generate Git tags from package.json version

## v3.0.0
* **BREAKING:** Upgraded to Sanity Studio v4 and v5
* Updated `sanity` peer dependency to support `^4.0.0 || ^5.0.0` (works with both versions)
* Updated `@sanity/ui` peer dependency from `^1.0.0` to `^3.0.0`
* Updated `react` and `react-dom` peer dependencies to support `^18.0.0 || ^19.0.0` (React 18 for v4, React 19 for v5)
* Updated minimum Node.js requirement to v20.19+
* Replaced deprecated `useFormBuilder` hook with `useFormValue` hook for v4/v5 compatibility
* Fixed build configuration to properly strip source paths
* Plugin code is fully compatible with both Sanity Studio v4 and v5 with no breaking changes

---

## Earlier versions (original repository)

The following versions were maintained by [@LiamMartens](https://github.com/LiamMartens).

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
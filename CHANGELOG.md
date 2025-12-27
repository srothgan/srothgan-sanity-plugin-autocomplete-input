# CHANGELOG

> **Note:** v3.0.0+ is maintained by [@srothgan](https://github.com/srothgan) as a fork.  
> v1.x - v2.x were created by [@LiamMartens](https://github.com/LiamMartens) in the [original repository](https://github.com/LiamMartens/sanity-plugin-autocomplete-input).

## v3.1.0

- **Build:** Migrated from SWC to @sanity/pkg-utils for improved build reliability
  - Replaced SWC transpiler with official Sanity build tooling
  - Now uses `@sanity/pkg-utils` (esbuild + rollup) for faster, more reliable builds
  - Added `.js` extensions to all ESM imports for proper Node.js compatibility
  - Updated TypeScript to 5.9.3 and module resolution to `node16` for better ESM support
  - Changed output directory from `lib/` to `dist/` (Sanity ecosystem standard)
  - Fixed "Cannot find module" errors when installing from npm registry
  - Build now generates optimized chunks and source maps automatically
  - Package validation built-in to prevent publish errors
- **Package:** Updated package.json structure to match official Sanity plugin template
  - Module type remains `module` (ESM)
  - Added dual exports (ESM `.js` and CJS `.cjs`) for maximum compatibility
  - Added `@sanity/plugin-kit` for plugin verification and link-watch functionality
  - Added `eslint-config-sanity` and `prettier-plugin-packagejson` for consistent code style
  - Added `@sanity/incompatible-plugin` for v2 backward compatibility handling
  - Added `link-watch` script for easier local development
  - Added `format:check` script for CI/CD validation
  - Added strict build flags (`--strict --check --clean`) for improved build validation
  - Added `sideEffects: false` for better tree-shaking
  - Added `engines` field requiring Node.js >=18
  - Added `sanity.json` and `v2-incompatible.js` to published files
- **Code Quality:** Standardized formatting and linting
  - Migrated from `eslint.config.js` to `eslint.config.mjs`
  - Standardized code formatting (double quotes → single quotes)
  - Added Prettier caching for faster formatting checks
- **CI/CD:** Updated GitHub workflows for new build system
  - Updated workflows to verify `dist/` instead of `lib/` output
  - Added `format:check` validation step
- **Developer Experience:** Enhanced local development workflow
  - Added `npm run link-watch` for seamless local testing with yalc
  - Added `prepublishOnly` hook to ensure builds before publishing
  - Improved build error reporting
- **Fixes:** Windows compatibility improvements
  - Added `dev/` and `nul` to `.gitignore` for Windows `/dev/null` compatibility

## v3.0.3

- **Documentation:** Improved README.md Usage section with clearer structure
  - Split configuration options into three separate subsections for better readability
  - Added progressive disclosure pattern (simplest option first)
  - Enhanced code examples with inline comments for each approach
  - Improved scannability with numbered headers and focused examples

## v3.0.2

- **Fix:** Prevent input interruption on keystroke ([#1](https://github.com/srothgan/sanity-plugin-autocomplete-input/pull/1))
  - Fixed issue where entering field for autocomplete input caused keystroke interruption
  - Removed unnecessary `useEffect` dependency that was causing re-renders

## v3.0.1

- **Chore:** Added GitHub workflows, community files, and updated documentation
  - Added GitHub Actions workflows for build verification and npm publishing
  - Added Dependabot configuration with cooldown periods
  - Added issue templates (bug report, feature request, question)
  - Added pull request template
  - Added CONTRIBUTING.md and CODE_OF_CONDUCT.md
  - Updated README.md with TypeScript usage examples, troubleshooting section, and links
  - Configured trusted publishing (OIDC) for npm
  - Auto-generate Git tags from package.json version

## v3.0.0

- **BREAKING:** Upgraded to Sanity Studio v4 and v5
- Updated `sanity` peer dependency to support `^4.0.0 || ^5.0.0` (works with both versions)
- Updated `@sanity/ui` peer dependency from `^1.0.0` to `^3.0.0`
- Updated `react` and `react-dom` peer dependencies to support `^18.0.0 || ^19.0.0` (React 18 for v4, React 19 for v5)
- Updated minimum Node.js requirement to v20.19+
- Replaced deprecated `useFormBuilder` hook with `useFormValue` hook for v4/v5 compatibility
- Fixed build configuration to properly strip source paths
- Plugin code is fully compatible with both Sanity Studio v4 and v5 with no breaking changes

---

## Earlier versions (original repository)

The following versions were maintained by [@LiamMartens](https://github.com/LiamMartens).

## v2.0.0

- Updated for Sanity Studio v3

## v1.4.0

- [#3](https://github.com/LiamMartens/sanity-plugin-autocomplete-input/issues/3) Added `disableNew` option similar to the native `Reference` type to disallow creating new options inline.
- [#1](https://github.com/LiamMartens/sanity-plugin-autocomplete-input/issues/1) A new option was added to resolve additional GROQ params from the parent value.
- [#2](https://github.com/LiamMartens/sanity-plugin-autocomplete-input/issues/2) The options behavior has been updated to not fetch the GROQ query if options was already defined.

## v1.3.1

- Fixed docs on how to specify options

## v1.3.0

- Explose both `es` and `cjs` modules

## v1.2.0

- Don't show duplicate options

## v1.1.1

- Don't show duplicate options

## v1.1.0

- Fixed query issue and minor updates to UI

## v1.0.6

- Fixed `sanity.json` pointing to wrong js file

## v1.0.5

- Included missing `sanity.json` file for npm

## v1.0.4

- Switch back to `es` but fix transpilation of unsupported syntax like `?`

## v1.0.3

- Only export `cjs` module for Sanity

## v1.0.2

- Only export `ES` module for Sanity

## v1.0.1

- Fixed typings and input export

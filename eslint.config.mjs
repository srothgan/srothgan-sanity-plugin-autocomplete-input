import {FlatCompat} from '@eslint/eslintrc'
import js from '@eslint/js'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

export default [
  {
    ignores: [
      '*.js',
      '.eslintrc.js',
      'commitlint.config.js',
      'dist/**',
      'lint-staged.config.js',
      'package.config.ts',
      'node_modules/**',
    ],
  },
  ...compat.extends(
    'sanity',
    'sanity/typescript',
    'sanity/react',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ),
]

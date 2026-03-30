import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'

export default [
  {
    ignores: [
      '.cache/**',
      '.github/**',
      'public/**',
      'node_modules/**',
      'dist/**',
      'src/assets/styles.css',
    ],
  },
  eslintPluginPrettier,
  {
    rules: {
      'multiline-ternary': 'off',
      'no-shadow': 'off',
      'prettier/prettier': 'error',
    },
  },
]

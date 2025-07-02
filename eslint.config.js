import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  rules: {
    'antfu/top-level-function': 'off',
    'style/comma-dangle': 'off',
    'ts/consistent-type-definitions': 'off',
    '@stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'always' }],
    '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'],
  },
  ignores: ['tsconfig.*', 'README.md'],

})

import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  rules: {
    'antfu/top-level-function': 'off',
    'style/comma-dangle': 'off',
  },
  ignores: ['tsconfig.*', 'README.md',]
})

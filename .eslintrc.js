module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks', 'ulbi-tv-plugin', 'unused-imports'],
  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/function-component-definition': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 4 }],    
    'react/jsx-props-no-spreading': 'warn',
    'react/no-array-index-key': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'unused-imports/no-unused-imports': 'error',
    'max-len': ['error', {
      ignoreComments: true,
      code: 130
    }],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],    
    'ulbi-tv-plugin/path-checker': ['error', {
      alias: '@'
    }],
    'ulbi-tv-plugin/layer-imports': ['error', {
      alias: '@',
      ignoreImportPatterns: ['**/StoreProvider', '**/testing']
    }],
    'ulbi-tv-plugin/public-api-imports': ['error', {
      alias: '@',
      testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx']
    }],
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['role', 'data-testid', 'to', 'target', 'justify', 'align', 'direction', 'gap', 'as', 'border', 'height']
    }],
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true
  },
  overrides: [{
    files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
      'max-len': 'off'
    }
  }]
};
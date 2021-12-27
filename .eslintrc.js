module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": "plugin:vue/essential",
    "parserOptions": {
        "ecmaVersion": 13,
        "parser": "@typescript-eslint/parser"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
      "semi": ["warn", "never"],
      "quotes": ["warn", "single"],
      "key-spacing": ["warn", { "beforeColon": false, "afterColon": true }],
      "new-cap": ["warn", { "newIsCap": true, "capIsNew": false}],
      "no-multiple-empty-lines": ["warn", {"max": 1}],
      "comma-style": ["warn", "last"],
      "comma-spacing": ["warn", { "before": false, "after": true }],
      "comma-dangle": ["warn", "always-multiline"],
      "no-implicit-coercion": "warn",
      "no-invalid-this": "warn",
      "no-multi-spaces": "warn",
      "no-new-func": "warn",
      "global-require": "warn",
      'no-console': 'warn',
      'object-curly-spacing': ['warn', 'always'],
      "space-before-function-paren": ['warn', "always"],
    }
  };

module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module",
    "requireConfigFile": false,
    "babelOptions": {
      "presets": ["@babel/preset-react"]
   }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "space-in-parens": ["error"],
    "space-infix-ops": "error",
    "object-curly-spacing": ["error", "always"],
    "comma-spacing": "error",
    "space-before-function-paren": ["error", "never"],
    "eol-last": ["error", "always"],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true,
        "overrides": {
        "do": {
          "after": false
        },
        "for": {
          "after": false
        },
        "if": {
          "after": false
        },
        "switch": {
          "after": false
        },
        "while": {
          "after": false
        },
        "catch": {
          "after": false
        }
        }
      }
    ]
  }
}
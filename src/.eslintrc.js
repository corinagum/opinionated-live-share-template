module.exports = {
  "ecmaFeatures": {
      "impliedStrict": true
  },
  env: {
    browser: true,
    jest: true,
    node: true
  },
  parser: "@typescript-eslint/parser",
  // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:storybook/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint", // Disables ESLint rules from @typescript-eslint/eslint-plugin that conflict with prettier
    +"prettier/react", // Disables ESLint rules from eslint-plugin-react that conflicts with prettier
    +"plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest", // modern ECMAScript parsing
    sourceType: "module" // Allows for the use of imports
  },
  plugins: [
    "@typescript-eslint", // Manually set @typescript-eslint/ rules
    "prettier", // Manually set prettier/ rules
    "react" // Manually set react/ rules
  ],
  settings: {
    react: {
      version: "detect" // eslint-plugin-react auto-detect react
    }
  },
  rules: {
    // Place to specify ESLint rules.
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-use-before-define": "off",
  }
};

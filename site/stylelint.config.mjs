/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  rules: {
    "selector-class-pattern": "^[a-z]+(-[a-z]+)*(__[a-z]+(-[a-z]+)*)?$",
  },
};

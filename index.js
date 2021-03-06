module.exports = {
  "plugins": [
    "stylelint-prettier"
  ],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
    "stylelint-config-recess-order"
  ],
  "rules": {
    "no-descending-specificity": null,
    "prettier/prettier": true
  }
};

const ERROR = 2;
const WARN = 1;

module.exports = {
    "extends": "airbnb-base",
    "env": {
      "es6": true
    },
    overrides: [
    {
      "files": [
        "**/*.spec.js"
      ],
      "env": {
        "jest": true
      },
    }]
};

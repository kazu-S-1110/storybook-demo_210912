"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parameters = void 0;
var parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
exports.parameters = parameters;
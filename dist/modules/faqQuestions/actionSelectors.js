"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FaqQuestionsStateSelectors = void 0;

var _actionTypes = require("./actionTypes");

var FaqQuestionsStateSelectors = {
  create: function create(state) {
    return state.faq.questions[_actionTypes.FAQ_QUESTIONS_ACTIONS.CREATE];
  },
  view: function view(state) {
    return state.faq.questions[_actionTypes.FAQ_QUESTIONS_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.faq.questions[_actionTypes.FAQ_QUESTIONS_ACTIONS.LIST];
  },
  update: function update(state) {
    return state.faq.questions[_actionTypes.FAQ_QUESTIONS_ACTIONS.UPDATE];
  },
  "delete": function _delete(state) {
    return state.faq.questions[_actionTypes.FAQ_QUESTIONS_ACTIONS.DELETE];
  }
};
exports.FaqQuestionsStateSelectors = FaqQuestionsStateSelectors;
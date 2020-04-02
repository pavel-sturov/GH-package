import { FAQ_QUESTIONS_ACTIONS } from "./actionTypes";
export var FaqQuestionsStateSelectors = {
  create: function create(state) {
    return state.faq.questions[FAQ_QUESTIONS_ACTIONS.CREATE];
  },
  view: function view(state) {
    return state.faq.questions[FAQ_QUESTIONS_ACTIONS.VIEW];
  },
  list: function list(state) {
    return state.faq.questions[FAQ_QUESTIONS_ACTIONS.LIST];
  },
  update: function update(state) {
    return state.faq.questions[FAQ_QUESTIONS_ACTIONS.UPDATE];
  },
  "delete": function _delete(state) {
    return state.faq.questions[FAQ_QUESTIONS_ACTIONS.DELETE];
  }
};
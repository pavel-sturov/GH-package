import { LOGS_ACTION } from "./actionTypes";
export var LogsStateSelectors = {
  list: function list(state) {
    return state.logs[LOGS_ACTION.LIST];
  },
  view: function view(state) {
    return state.logs[LOGS_ACTION.VIEW];
  },
  "delete": function _delete(state) {
    return state.logs[LOGS_ACTION.DELETE];
  },
  deleteAll: function deleteAll(state) {
    return state.logs[LOGS_ACTION.DELETE_ALL];
  }
};
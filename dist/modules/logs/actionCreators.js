import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { LOGS_ACTION } from "./actionTypes";
export var LogsActions = {
  list: RequestActionHelper.getActionCreatorFetch(LOGS_ACTION.LIST),
  view: RequestActionHelper.getActionCreatorFetch(LOGS_ACTION.VIEW),
  "delete": RequestActionHelper.getActionCreatorFetch(LOGS_ACTION.DELETE),
  deleteAll: RequestActionHelper.getActionCreatorFetch(LOGS_ACTION.DELETE_ALL)
};
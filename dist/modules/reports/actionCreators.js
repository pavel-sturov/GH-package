import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { REPORTS_ACTIONS } from "./actionTypes";
export var ReportsActions = {
  view: RequestActionHelper.getActionCreatorFetch(REPORTS_ACTIONS.VIEW),
  generate: RequestActionHelper.getActionCreatorFetch(REPORTS_ACTIONS.GENERATE)
};
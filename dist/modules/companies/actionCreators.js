import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { COMPANIES_ACTION } from "./actionTypes";
export var CompaniesActions = {
  list: RequestActionHelper.getActionCreatorFetch(COMPANIES_ACTION.LIST),
  create: RequestActionHelper.getActionCreatorFetch(COMPANIES_ACTION.CREATE),
  view: RequestActionHelper.getActionCreatorFetch(COMPANIES_ACTION.VIEW),
  "delete": RequestActionHelper.getActionCreatorFetch(COMPANIES_ACTION.DELETE),
  update: RequestActionHelper.getActionCreatorFetch(COMPANIES_ACTION.UPDATE)
};
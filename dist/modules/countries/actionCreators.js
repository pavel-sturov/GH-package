import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { COUNTRY_ACTION } from "./actionTypes";
export var CountriesActions = {
  list: RequestActionHelper.getActionCreatorFetch(COUNTRY_ACTION.LIST),
  view: RequestActionHelper.getActionCreatorFetch(COUNTRY_ACTION.VIEW),
  create: RequestActionHelper.getActionCreatorFetch(COUNTRY_ACTION.CREATE),
  update: RequestActionHelper.getActionCreatorFetch(COUNTRY_ACTION.UPDATE)
};
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { COMPANIES_OFFERS_ACTIONS } from "./actionTypes";
export var CompaniesOffersActions = {
  list: RequestActionHelper.getActionCreatorFetch(COMPANIES_OFFERS_ACTIONS.LIST),
  create: RequestActionHelper.getActionCreatorFetch(COMPANIES_OFFERS_ACTIONS.CREATE),
  view: RequestActionHelper.getActionCreatorFetch(COMPANIES_OFFERS_ACTIONS.VIEW),
  "delete": RequestActionHelper.getActionCreatorFetch(COMPANIES_OFFERS_ACTIONS.DELETE),
  update: RequestActionHelper.getActionCreatorFetch(COMPANIES_OFFERS_ACTIONS.UPDATE)
};
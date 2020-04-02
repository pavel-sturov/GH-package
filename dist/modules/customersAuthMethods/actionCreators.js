import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { CUSTOMER_AUTH_METHOD_ACTIONS } from "./actionTypes";
export var CustomerAuthMethodActions = {
  list: RequestActionHelper.getActionCreatorFetch(CUSTOMER_AUTH_METHOD_ACTIONS.LIST),
  view: RequestActionHelper.getActionCreatorFetch(CUSTOMER_AUTH_METHOD_ACTIONS.VIEW),
  update: RequestActionHelper.getActionCreatorFetch(CUSTOMER_AUTH_METHOD_ACTIONS.UPDATE)
};
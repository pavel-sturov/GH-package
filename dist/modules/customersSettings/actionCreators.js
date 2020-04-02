import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { CUSTOMER_SETTINGS_ACTIONS } from "./actionTypes";
export var CustomerSettingsActions = {
  view: RequestActionHelper.getActionCreatorFetch(CUSTOMER_SETTINGS_ACTIONS.VIEW),
  update: RequestActionHelper.getActionCreatorFetch(CUSTOMER_SETTINGS_ACTIONS.UPDATE)
};
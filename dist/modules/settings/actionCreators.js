import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { SETTINGS_ACTION } from "./actionTypes";
export var SettingsActions = {
  listAvailable: RequestActionHelper.getActionCreatorFetch(SETTINGS_ACTION.LIST_AVAILABLE),
  update: RequestActionHelper.getActionCreatorFetch(SETTINGS_ACTION.UPDATE),
  list: RequestActionHelper.getActionCreatorFetch(SETTINGS_ACTION.LIST),
  setList: RequestActionHelper.getActionCreatorSuccess(SETTINGS_ACTION.LIST),
  view: RequestActionHelper.getActionCreatorFetch(SETTINGS_ACTION.VIEW)
};
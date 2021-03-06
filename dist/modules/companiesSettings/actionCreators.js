import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { COMPANIES_SETTINGS_ACTIONS } from "./actionTypes";
export var CompaniesSettingsActions = {
  view: RequestActionHelper.getActionCreatorFetch(COMPANIES_SETTINGS_ACTIONS.VIEW),
  update: RequestActionHelper.getActionCreatorFetch(COMPANIES_SETTINGS_ACTIONS.UPDATE)
};
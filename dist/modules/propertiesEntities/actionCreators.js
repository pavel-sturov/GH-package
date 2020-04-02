import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { PROPERTIES_ENTITIES_ACTIONS } from "./actionTypes";
export var PropertiesEntitiesActions = {
  view: RequestActionHelper.getActionCreatorFetch(PROPERTIES_ENTITIES_ACTIONS.VIEW),
  list: RequestActionHelper.getActionCreatorFetch(PROPERTIES_ENTITIES_ACTIONS.LIST),
  create: RequestActionHelper.getActionCreatorFetch(PROPERTIES_ENTITIES_ACTIONS.CREATE),
  update: RequestActionHelper.getActionCreatorFetch(PROPERTIES_ENTITIES_ACTIONS.UPDATE),
  "delete": RequestActionHelper.getActionCreatorFetch(PROPERTIES_ENTITIES_ACTIONS.DELETE)
};
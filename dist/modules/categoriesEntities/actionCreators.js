import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { CATEGORIES_ENTITIES_ACTIONS } from "./actionTypes";
export var CategoriesEntitiesActions = {
  list: RequestActionHelper.getActionCreatorFetch(CATEGORIES_ENTITIES_ACTIONS.LIST),
  create: RequestActionHelper.getActionCreatorFetch(CATEGORIES_ENTITIES_ACTIONS.CREATE),
  "delete": RequestActionHelper.getActionCreatorFetch(CATEGORIES_ENTITIES_ACTIONS.DELETE)
};
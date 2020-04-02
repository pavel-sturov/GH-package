import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { FAQ_CATEGORIES_ACTIONS } from "./actionTypes";
export var FaqCategoriesActions = {
  create: RequestActionHelper.getActionCreatorFetch(FAQ_CATEGORIES_ACTIONS.CREATE),
  view: RequestActionHelper.getActionCreatorFetch(FAQ_CATEGORIES_ACTIONS.VIEW),
  list: RequestActionHelper.getActionCreatorFetch(FAQ_CATEGORIES_ACTIONS.LIST),
  update: RequestActionHelper.getActionCreatorFetch(FAQ_CATEGORIES_ACTIONS.UPDATE),
  "delete": RequestActionHelper.getActionCreatorFetch(FAQ_CATEGORIES_ACTIONS.DELETE)
};
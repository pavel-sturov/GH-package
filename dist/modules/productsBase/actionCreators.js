import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { PRODUCTS_BASE_ACTIONS } from "./actionTypes";
export var ProductsBaseActions = {
  getView: RequestActionHelper.getActionCreatorFetch(PRODUCTS_BASE_ACTIONS.VIEW),
  getList: RequestActionHelper.getActionCreatorFetch(PRODUCTS_BASE_ACTIONS.LIST),
  setList: RequestActionHelper.getActionCreatorSuccess(PRODUCTS_BASE_ACTIONS.LIST),
  printEpc: RequestActionHelper.getActionCreatorFetch(PRODUCTS_BASE_ACTIONS.PRINT_EPC),
  deleteEpc: RequestActionHelper.getActionCreatorFetch(PRODUCTS_BASE_ACTIONS.DELETE_EPC),
  differenceZoneTags: RequestActionHelper.getActionCreatorFetch(PRODUCTS_BASE_ACTIONS.DIFFERENCE_ZONE_TAGS),
  updateAll: RequestActionHelper.getActionCreatorFetch(PRODUCTS_BASE_ACTIONS.UPDATE_ALL),
  update: RequestActionHelper.getActionCreatorFetch(PRODUCTS_BASE_ACTIONS.UPDATE),
  setDefective: RequestActionHelper.getActionCreatorFetch(PRODUCTS_BASE_ACTIONS.SET_DEFECTIVE),
  transfer: RequestActionHelper.getActionCreatorFetch(PRODUCTS_BASE_ACTIONS.TRANSFER)
};
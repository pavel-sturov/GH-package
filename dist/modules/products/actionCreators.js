import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { PRODUCTS_ACTIONS } from "./actionTypes";
export var ProductsActions = {
  view: RequestActionHelper.getActionCreatorFetch(PRODUCTS_ACTIONS.VIEW),
  viewBarcode: RequestActionHelper.getActionCreatorFetch(PRODUCTS_ACTIONS.VIEW_BARCODE),
  list: RequestActionHelper.getActionCreatorFetch(PRODUCTS_ACTIONS.LIST),
  setList: RequestActionHelper.getActionCreatorSuccess(PRODUCTS_ACTIONS.LIST),
  search: RequestActionHelper.getActionCreatorFetch(PRODUCTS_ACTIONS.SEARCH),
  setSearch: RequestActionHelper.getActionCreatorSuccess(PRODUCTS_ACTIONS.SEARCH),
  create: RequestActionHelper.getActionCreatorFetch(PRODUCTS_ACTIONS.CREATE),
  "delete": RequestActionHelper.getActionCreatorFetch(PRODUCTS_ACTIONS.DELETE),
  update: RequestActionHelper.getActionCreatorFetch(PRODUCTS_ACTIONS.UPDATE),
  addToStock: RequestActionHelper.getActionCreatorFetch(PRODUCTS_ACTIONS.ADD_TO_STOCK),
  setAddToStock: RequestActionHelper.getActionCreatorSuccess(PRODUCTS_ACTIONS.ADD_TO_STOCK),
  batchUpload: RequestActionHelper.getActionCreatorFetch(PRODUCTS_ACTIONS.BATCH_UPLOAD)
};
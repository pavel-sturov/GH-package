import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { PRODUCTS_BARCODES_ACTIONS } from "./actionTypes";
export var ProductsBarcodesActions = {
  list: RequestActionHelper.getActionCreatorFetch(PRODUCTS_BARCODES_ACTIONS.LIST),
  create: RequestActionHelper.getActionCreatorFetch(PRODUCTS_BARCODES_ACTIONS.CREATE),
  "delete": RequestActionHelper.getActionCreatorFetch(PRODUCTS_BARCODES_ACTIONS.DELETE),
  update: RequestActionHelper.getActionCreatorFetch(PRODUCTS_BARCODES_ACTIONS.UPDATE)
};
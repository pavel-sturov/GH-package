import { PRODUCTS_ACTIONS } from 'modules/products/actionTypes'

export const ProductsStateSelectors = {
	view:        (state) => state.products[PRODUCTS_ACTIONS.VIEW],
	viewBarcode: (state) => state.products[PRODUCTS_ACTIONS.VIEW_BARCODE],
	list:        (state) => state.products[PRODUCTS_ACTIONS.LIST],
	search:      (state) => state.products[PRODUCTS_ACTIONS.SEARCH],
	create:      (state) => state.products[PRODUCTS_ACTIONS.CREATE],
	delete:      (state) => state.products[PRODUCTS_ACTIONS.DELETE],
	update:      (state) => state.products[PRODUCTS_ACTIONS.UPDATE],
	addToStock:  (state) => state.products[PRODUCTS_ACTIONS.ADD_TO_STOCK],
	batchUpload: (state) => state.products[PRODUCTS_ACTIONS.BATCH_UPLOAD],
}

import { PRODUCTS_BARCODES_ACTIONS } from 'modules/productsBarcodes/actionTypes'

export const ProductsBarcodesStateSelectors = {
	list:   (state) => state.productsBarcodes[PRODUCTS_BARCODES_ACTIONS.LIST],
	create: (state) => state.productsBarcodes[PRODUCTS_BARCODES_ACTIONS.CREATE],
	delete: (state) => state.productsBarcodes[PRODUCTS_BARCODES_ACTIONS.DELETE],
	update: (state) => state.productsBarcodes[PRODUCTS_BARCODES_ACTIONS.UPDATE],
}

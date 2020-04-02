import { PRODUCTS_BASE_ACTIONS } from 'modules/productsBase/actionTypes'

export const ProductsBaseStateSelectors = {
	view:               (state) => state.productsBase[PRODUCTS_BASE_ACTIONS.VIEW],
	list:               (state) => state.productsBase[PRODUCTS_BASE_ACTIONS.LIST],
	printEpc:           (state) => state.productsBase[PRODUCTS_BASE_ACTIONS.PRINT_EPC],
	deleteEpc:          (state) => state.productsBase[PRODUCTS_BASE_ACTIONS.DELETE_EPC],
	differenceZoneTags: (state) => state.productsBase[PRODUCTS_BASE_ACTIONS.DIFFERENCE_ZONE_TAGS],
	updateAll:          (state) => state.productsBase[PRODUCTS_BASE_ACTIONS.UPDATE_ALL],
	update:             (state) => state.productsBase[PRODUCTS_BASE_ACTIONS.UPDATE],
	setDefective:       (state) => state.productsBase[PRODUCTS_BASE_ACTIONS.SET_DEFECTIVE],
	transfer:           (state) => state.productsBase[PRODUCTS_BASE_ACTIONS.TRANSFER],
}

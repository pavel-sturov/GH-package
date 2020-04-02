import { PRODUCTS_RELATIONS_ACTIONS } from 'modules/productsRelations/actionTypes'

export const ProductsRelationsStateSelectors = {
	view:   (state) => state.productsRelations[PRODUCTS_RELATIONS_ACTIONS.VIEW],
	list:   (state) => state.productsRelations[PRODUCTS_RELATIONS_ACTIONS.LIST],
	create: (state) => state.productsRelations[PRODUCTS_RELATIONS_ACTIONS.CREATE],
	delete: (state) => state.productsRelations[PRODUCTS_RELATIONS_ACTIONS.DELETE],
}

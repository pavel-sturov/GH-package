import { FAVORITE_ACTION } from 'modules/customersFavorites/actionTypes'

export const CustomerFavoriteSelectors = {
	list:      (state) => state.customersFavorites[FAVORITE_ACTION.LIST],
	create:    (state) => state.customersFavorites[FAVORITE_ACTION.CREATE],
	view:      (state) => state.customersFavorites[FAVORITE_ACTION.VIEW],
	delete:    (state) => state.customersFavorites[FAVORITE_ACTION.DELETE],
	deleteAll: (state) => state.customersFavorites[FAVORITE_ACTION.DELETE_ALL],
}

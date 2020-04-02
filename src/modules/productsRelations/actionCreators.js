import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PRODUCTS_RELATIONS_ACTIONS } from 'modules/productsRelations/actionTypes'

export const ProductsRelationsActions = {
	view:   RequestActionHelper.getActionCreatorFetch(PRODUCTS_RELATIONS_ACTIONS.VIEW),
	list:   RequestActionHelper.getActionCreatorFetch(PRODUCTS_RELATIONS_ACTIONS.LIST),
	create: RequestActionHelper.getActionCreatorFetch(PRODUCTS_RELATIONS_ACTIONS.CREATE),
	delete: RequestActionHelper.getActionCreatorFetch(PRODUCTS_RELATIONS_ACTIONS.DELETE),
}

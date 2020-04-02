import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { CATEGORIES_RELATIONS_ACTIONS } from 'modules/categoriesRelations/actionTypes'

export const CategoriesRelationsActions = {
	list:   RequestActionHelper.getActionCreatorFetch(CATEGORIES_RELATIONS_ACTIONS.LIST),
	create: RequestActionHelper.getActionCreatorFetch(CATEGORIES_RELATIONS_ACTIONS.CREATE),
	delete: RequestActionHelper.getActionCreatorFetch(CATEGORIES_RELATIONS_ACTIONS.DELETE),
}

import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { CATEGORY_ACTION } from 'modules/categories/actionTypes'

export const CategoriesActions = {
	create:            RequestActionHelper.getActionCreatorFetch(CATEGORY_ACTION.CREATE),
	view:              RequestActionHelper.getActionCreatorFetch(CATEGORY_ACTION.VIEW),
	list:              RequestActionHelper.getActionCreatorFetch(CATEGORY_ACTION.LIST),
	update:            RequestActionHelper.getActionCreatorFetch(CATEGORY_ACTION.UPDATE),
	delete:            RequestActionHelper.getActionCreatorFetch(CATEGORY_ACTION.DELETE),
	getHierarchical:   RequestActionHelper.getActionCreatorFetch(CATEGORY_ACTION.FETCH_HIERARCHICAL),
	getHomeCategories: RequestActionHelper.getActionCreatorFetch(CATEGORY_ACTION.HOME_CATEGORIES),
	filters:           RequestActionHelper.getActionCreatorFetch(CATEGORY_ACTION.FILTERS),
}

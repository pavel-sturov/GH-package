import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { FAVORITE_ACTION } from 'modules/customersFavorites/actionTypes'

export const CustomerFavoriteActions = {
	list:      RequestActionHelper.getActionCreatorFetch(FAVORITE_ACTION.LIST),
	create:    RequestActionHelper.getActionCreatorFetch(FAVORITE_ACTION.CREATE),
	view:      RequestActionHelper.getActionCreatorFetch(FAVORITE_ACTION.VIEW),
	delete:    RequestActionHelper.getActionCreatorFetch(FAVORITE_ACTION.DELETE),
	deleteAll: RequestActionHelper.getActionCreatorFetch(FAVORITE_ACTION.DELETE_ALL),
	setList:   RequestActionHelper.getActionCreatorSuccess(FAVORITE_ACTION.LIST),
}

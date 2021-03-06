import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { CITY_ACTION } from 'modules/cities/actionTypes'

export const CitiesActions = {
	list:   RequestActionHelper.getActionCreatorFetch(CITY_ACTION.LIST),
	view:   RequestActionHelper.getActionCreatorFetch(CITY_ACTION.VIEW),
	create: RequestActionHelper.getActionCreatorFetch(CITY_ACTION.CREATE),
	update: RequestActionHelper.getActionCreatorFetch(CITY_ACTION.UPDATE),
}

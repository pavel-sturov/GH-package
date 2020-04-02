import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { COMPARES_ACTION } from 'modules/customersCompares/actionTypes'

export const CustomerComparesActions = {
	list:         RequestActionHelper.getActionCreatorFetch(COMPARES_ACTION.LIST),
	setList:      RequestActionHelper.getActionCreatorSuccess(COMPARES_ACTION.LIST),
	create:       RequestActionHelper.getActionCreatorFetch(COMPARES_ACTION.CREATE),
	view:         RequestActionHelper.getActionCreatorFetch(COMPARES_ACTION.VIEW),
	delete:       RequestActionHelper.getActionCreatorFetch(COMPARES_ACTION.DELETE),
	deleteAll:    RequestActionHelper.getActionCreatorFetch(COMPARES_ACTION.DELETE_ALL),
	hierarchical: RequestActionHelper.getActionCreatorFetch(COMPARES_ACTION.HIERARCHICAL),
	products:     RequestActionHelper.getActionCreatorFetch(COMPARES_ACTION.PRODUCTS),
}

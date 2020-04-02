import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { ORDERS_ACTION } from 'modules/orders/actionTypes'

export const OrdersActions = {
	list:            RequestActionHelper.getActionCreatorFetch(ORDERS_ACTION.LIST),
	view:            RequestActionHelper.getActionCreatorFetch(ORDERS_ACTION.VIEW),
	pay:             RequestActionHelper.getActionCreatorFetch(ORDERS_ACTION.PAY),
	finishByProduct: RequestActionHelper.getActionCreatorFetch(ORDERS_ACTION.FINISH_BY_PRODUCT),
	cancelByProduct: RequestActionHelper.getActionCreatorFetch(ORDERS_ACTION.CANCEL_BY_PRODUCT),
}

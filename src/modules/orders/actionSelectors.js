import { ORDERS_ACTION } from 'modules/orders/actionTypes'

export const OrdersStateSelectors = {
	list:            (state) => state.orders[ORDERS_ACTION.LIST],
	view:            (state) => state.orders[ORDERS_ACTION.VIEW],
	pay:             (state) => state.orders[ORDERS_ACTION.PAY],
	finishByProduct: (state) => state.orders[ORDERS_ACTION.FINISH_BY_PRODUCT],
	cancelByProduct: (state) => state.orders[ORDERS_ACTION.CANCEL_BY_PRODUCT],
}

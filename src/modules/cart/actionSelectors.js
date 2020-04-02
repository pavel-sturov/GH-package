import { CART_ACTION } from 'modules/cart/actionTypes'

export const CartStateSelectors = {
	list:      (state) => state.cart[CART_ACTION.LIST],
	create:    (state) => state.cart[CART_ACTION.CREATE],
	update:    (state) => state.cart[CART_ACTION.UPDATE],
	delete:    (state) => state.cart[CART_ACTION.DELETE],
	deleteAll: (state) => state.cart[CART_ACTION.DELETE_ALL],

	checkout:             (state) => state.cart[CART_ACTION.CHECKOUT],
	checkoutTerminal:     (state) => state.cart[CART_ACTION.CHECKOUT_TERMINAL],
	createOrder:          (state) => state.cart[CART_ACTION.CREATE_ORDER],
	createOrderTerminal:  (state) => state.cart[CART_ACTION.CREATE_ORDER_TERRMINAL],
	startSessionTerminal: (state) => state.cart[CART_ACTION.START_SESSION_TERMINAL],
}

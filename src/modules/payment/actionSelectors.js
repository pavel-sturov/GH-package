import { PAYMENT_ACTION } from 'modules/payment/actionTypes'

export const PaymentStateSelectors = {
    list:               (state) => state.payment[PAYMENT_ACTION.LIST],
    create:             (state) => state.payment[PAYMENT_ACTION.CREATE],
    postSecure:         (state) => state.payment[PAYMENT_ACTION.POST_SECURE],
    createWithRedirect: (state) => state.payment[PAYMENT_ACTION.CREATE_WITH_REDIRECT],
    view:               (state) => state.payment[PAYMENT_ACTION.VIEW],
    setMain:            (state) => state.payment[PAYMENT_ACTION.SET_MAIN],
}

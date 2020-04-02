import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PAYMENT_ACTION } from 'modules/payment/actionTypes'

const ACTIONS = {
    ...PAYMENT_ACTION,
    [PAYMENT_ACTION.LIST]: [PAYMENT_ACTION.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))

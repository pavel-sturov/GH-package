import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { PRODUCTS_ATTACHMENTS_ACTIONS } from 'modules/productsAttachments/actionTypes'

const ACTIONS = {
	...PRODUCTS_ATTACHMENTS_ACTIONS,
	[PRODUCTS_ATTACHMENTS_ACTIONS.LIST]: [PRODUCTS_ATTACHMENTS_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))

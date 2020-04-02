import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { FAQ_CATEGORIES_ACTIONS } from 'modules/faqCategories/actionTypes'

const ACTIONS = {
	...FAQ_CATEGORIES_ACTIONS,
	[FAQ_CATEGORIES_ACTIONS.LIST]: [FAQ_CATEGORIES_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))

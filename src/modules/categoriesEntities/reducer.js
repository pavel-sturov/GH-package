import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { CATEGORIES_ENTITIES_ACTIONS } from 'modules/categoriesEntities/actionTypes'

const ACTIONS = {
	...CATEGORIES_ENTITIES_ACTIONS,
	[CATEGORIES_ENTITIES_ACTIONS.LIST]: [CATEGORIES_ENTITIES_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))

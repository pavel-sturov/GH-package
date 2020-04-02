import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { CATEGORIES_RELATIONS_ACTIONS } from 'modules/categoriesRelations/actionTypes'

const ACTIONS = {
	...CATEGORIES_RELATIONS_ACTIONS,
	[CATEGORIES_RELATIONS_ACTIONS.LIST]: [CATEGORIES_RELATIONS_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))

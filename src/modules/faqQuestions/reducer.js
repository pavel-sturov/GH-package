import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider'
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { FAQ_QUESTIONS_ACTIONS } from 'modules/faqQuestions/actionTypes'

const ACTIONS = {
	...FAQ_QUESTIONS_ACTIONS,
	[FAQ_QUESTIONS_ACTIONS.LIST]: [FAQ_QUESTIONS_ACTIONS.LIST, DataProvider.getDefaultState()],
}

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS))

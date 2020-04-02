import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper'
import { FAQ_QUESTIONS_ACTIONS } from 'modules/faqQuestions/actionTypes'

export const FaqQuestionsActions = {
	create: RequestActionHelper.getActionCreatorFetch(FAQ_QUESTIONS_ACTIONS.CREATE),
	view:   RequestActionHelper.getActionCreatorFetch(FAQ_QUESTIONS_ACTIONS.VIEW),
	list:   RequestActionHelper.getActionCreatorFetch(FAQ_QUESTIONS_ACTIONS.LIST),
	update: RequestActionHelper.getActionCreatorFetch(FAQ_QUESTIONS_ACTIONS.UPDATE),
	delete: RequestActionHelper.getActionCreatorFetch(FAQ_QUESTIONS_ACTIONS.DELETE),
}

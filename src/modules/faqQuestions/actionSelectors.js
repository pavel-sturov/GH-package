import { FAQ_QUESTIONS_ACTIONS } from 'modules/faqQuestions/actionTypes'

export const FaqQuestionsStateSelectors = {
	create: (state) => state.faq.questions[FAQ_QUESTIONS_ACTIONS.CREATE],
	view:   (state) => state.faq.questions[FAQ_QUESTIONS_ACTIONS.VIEW],
	list:   (state) => state.faq.questions[FAQ_QUESTIONS_ACTIONS.LIST],
	update: (state) => state.faq.questions[FAQ_QUESTIONS_ACTIONS.UPDATE],
	delete: (state) => state.faq.questions[FAQ_QUESTIONS_ACTIONS.DELETE],
}

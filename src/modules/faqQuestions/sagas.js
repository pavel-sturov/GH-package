import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { FAQ_QUESTIONS_ACTIONS } from 'modules/faqQuestions/actionTypes'
import { FaqQuestionApi } from 'modules/faqQuestions/api'

/**
 * Create faq question
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{faqQuestions, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, FaqQuestionApi.create)
}

/**
 * View faq question
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{faqQuestions, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, FaqQuestionApi.view)
}

/**
 * List faq questions
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{faqQuestions, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, FaqQuestionApi.list)
}

/**
 * Update faq question
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{faqQuestions, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, FaqQuestionApi.update)
}

/**
 * Delete faq question
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{faqQuestions, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, FaqQuestionApi.delete)
}

export default [
	takeLatest(FAQ_QUESTIONS_ACTIONS.CREATE, create),
	takeLatest(FAQ_QUESTIONS_ACTIONS.VIEW, view),
	takeLatest(FAQ_QUESTIONS_ACTIONS.LIST, list),
	takeLatest(FAQ_QUESTIONS_ACTIONS.UPDATE, update),
	takeLatest(FAQ_QUESTIONS_ACTIONS.DELETE, deleteModel),
]

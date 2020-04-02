import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { FAQ_CATEGORIES_ACTIONS } from 'modules/faqCategories/actionTypes'
import { FaqCategoryApi } from 'modules/faqCategories/api'

/**
 * Create faq category
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{faqCategories, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, FaqCategoryApi.create)
}

/**
 * View faq category
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{faqCategories, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, FaqCategoryApi.view)
}

/**
 * List faq categories
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{faqCategories, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, FaqCategoryApi.list)
}

/**
 * Update faq category
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{faqCategories, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, FaqCategoryApi.update)
}

/**
 * Delete faq category
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{faqCategories, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, FaqCategoryApi.delete)
}

export default [
	takeLatest(FAQ_CATEGORIES_ACTIONS.CREATE, create),
	takeLatest(FAQ_CATEGORIES_ACTIONS.VIEW, view),
	takeLatest(FAQ_CATEGORIES_ACTIONS.LIST, list),
	takeLatest(FAQ_CATEGORIES_ACTIONS.UPDATE, update),
	takeLatest(FAQ_CATEGORIES_ACTIONS.DELETE, deleteModel),
]

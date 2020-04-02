import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { takeLatest } from 'redux-saga/effects'
import { CompaniesActions } from 'modules/companies/actionCreators'
import { CompaniesSelectors } from 'modules/companies/actionSelectors'
import { COMPANIES_ACTION } from 'modules/companies/actionTypes'
import { CompaniesApi } from 'modules/companies/api'

/**
 * Get companies list
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{company, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, CompaniesApi.list)
}

/**
 * Add company
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{company, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, CompaniesApi.create)
}

/**
 * View company
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{company, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, CompaniesApi.view)
}

/**
 * Delete company
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{company, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, CompaniesApi.delete, null, function* (...params) {
		yield SagasHelper.afterDeleteModelFromList(...params, CompaniesSelectors.list, CompaniesActions.setList)
	})
}

/**
 * Update company
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{company, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, CompaniesApi.update)
}

export default [
	takeLatest(COMPANIES_ACTION.LIST, list),
	takeLatest(COMPANIES_ACTION.CREATE, create),
	takeLatest(COMPANIES_ACTION.VIEW, view),
	takeLatest(COMPANIES_ACTION.DELETE, deleteModel),
	takeLatest(COMPANIES_ACTION.UPDATE, update),
]

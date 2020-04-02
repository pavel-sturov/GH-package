import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { COMPANIES_OFFERS_ACTIONS } from 'modules/companiesOffers/actionTypes'
import { CompaniesOffersApi } from 'modules/companiesOffers/api'

/**
 * List company offers
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, CompaniesOffersApi.list)
}

/**
 * Create company offer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, CompaniesOffersApi.create)
}

/**
 * View company offer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{companySetting, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, CompaniesOffersApi.view)
}

/**
 * Update company offer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{companySetting, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, CompaniesOffersApi.update)
}

/**
 * Delete company offer
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, CompaniesOffersApi.delete)
}

export default [
	takeLatest(COMPANIES_OFFERS_ACTIONS.LIST, list),
	takeLatest(COMPANIES_OFFERS_ACTIONS.CREATE, create),
	takeLatest(COMPANIES_OFFERS_ACTIONS.VIEW, view),
	takeLatest(COMPANIES_OFFERS_ACTIONS.UPDATE, update),
	takeLatest(COMPANIES_OFFERS_ACTIONS.DELETE, deleteModel),
]

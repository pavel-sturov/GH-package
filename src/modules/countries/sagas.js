import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { COUNTRY_ACTION } from 'modules/countries/actionTypes'
import { CountriesApi } from 'modules/countries/api'

/**
 * Create country
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{countries, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, CountriesApi.create)
}

/**
 * View country
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{countries, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, CountriesApi.view)
}

/**
 * Get countries with regional cities
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|CallEffect|PutEffect<{type}>|PutEffect<{countries, type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, CountriesApi.list)
}

/**
 * Update country
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, CountriesApi.update)
}

export default [
	takeLatest(COUNTRY_ACTION.CREATE, create),
	takeLatest(COUNTRY_ACTION.VIEW, view),
	takeLatest(COUNTRY_ACTION.LIST, list),
	takeLatest(COUNTRY_ACTION.UPDATE, update),
]

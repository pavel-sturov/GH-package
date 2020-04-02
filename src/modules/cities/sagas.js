import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { CITY_ACTION } from 'modules/cities/actionTypes'
import { CitiesApi } from 'modules/cities/api'

/**
 * Create city
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, CitiesApi.create)
}

/**
 * View city
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, CitiesApi.view)
}

/**
 * List cities
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, CitiesApi.list)
}

/**
 * Update city
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, CitiesApi.update)
}

export default [
	takeLatest(CITY_ACTION.CREATE, create),
	takeLatest(CITY_ACTION.VIEW, view),
	takeLatest(CITY_ACTION.LIST, list),
	takeLatest(CITY_ACTION.UPDATE, update),
]

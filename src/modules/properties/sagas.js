import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { PROPERTIES_ACTIONS } from 'modules/properties/actionTypes'
import { PropertiesApi } from 'modules/properties/api'

/**
 * Create property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{properties, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, PropertiesApi.create)
}

/**
 * View property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{properties, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, PropertiesApi.view)
}

/**
 * List properties
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{properties, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, PropertiesApi.list)
}

/**
 * Update property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{properties, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, PropertiesApi.update)
}

/**
 * Delete property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{properties, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, PropertiesApi.delete)
}

export default [
	takeLatest(PROPERTIES_ACTIONS.CREATE, create),
	takeLatest(PROPERTIES_ACTIONS.VIEW, view),
	takeLatest(PROPERTIES_ACTIONS.LIST, list),
	takeLatest(PROPERTIES_ACTIONS.UPDATE, update),
	takeLatest(PROPERTIES_ACTIONS.DELETE, deleteModel),
]

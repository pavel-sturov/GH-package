/* eslint-disable max-len */
import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { PROPERTIES_ENTITIES_ACTIONS } from 'modules/propertiesEntities/actionTypes'
import { PropertiesEntitiesApi } from 'modules/propertiesEntities/api'

/**
 * Create property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesEntities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, PropertiesEntitiesApi.create)
}

/**
 * View property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesEntities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, PropertiesEntitiesApi.view)
}

/**
 * List properties
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesEntities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, PropertiesEntitiesApi.list)
}

/**
 * Update property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesEntities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, PropertiesEntitiesApi.update)
}

/**
 * Delete property
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{propertiesEntities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, PropertiesEntitiesApi.delete)
}

export default [
	takeLatest(PROPERTIES_ENTITIES_ACTIONS.CREATE, create),
	takeLatest(PROPERTIES_ENTITIES_ACTIONS.VIEW, view),
	takeLatest(PROPERTIES_ENTITIES_ACTIONS.LIST, list),
	takeLatest(PROPERTIES_ENTITIES_ACTIONS.UPDATE, update),
	takeLatest(PROPERTIES_ENTITIES_ACTIONS.DELETE, deleteModel),
]

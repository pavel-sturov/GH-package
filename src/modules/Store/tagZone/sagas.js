import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { TagZoneActions } from 'modules/Store/tagZone/actionCreators'
import { TagZoneSelectors } from 'modules/Store/tagZone/actionSelectors'
import { TAG_ZONE_ACTIONS } from 'modules/Store/tagZone/actionTypes'
import { TagZoneApi } from 'modules/Store/tagZone/api'

/**
 * Get tag zone list
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{tagZone, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, TagZoneApi.list)
}

/**
 * Add tag zone
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{tagZone, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, TagZoneApi.create)
}

/**
 * View tag zone
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{tagZone, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, TagZoneApi.view)
}

/**
 * Delete tag zone
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{tagZone, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, TagZoneApi.delete, null, function* (...params) {
		yield SagasHelper.afterDeleteModelFromList(...params, TagZoneSelectors.list, TagZoneActions.setList)
	})
}

/**
 * Update tag zone
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{tagZone, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, TagZoneApi.update)
}

/**
 * Tags moving clear zones
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{tagZone, type}>|CallEffect|PutEffect<{type}>>}
 */
function* clearZones(action)
{
	yield SagasHelper.defaultCreate(action, TagZoneApi.clearZones)
}

export default [
	takeLatest(TAG_ZONE_ACTIONS.LIST, list),
	takeLatest(TAG_ZONE_ACTIONS.CREATE, create),
	takeLatest(TAG_ZONE_ACTIONS.VIEW, view),
	takeLatest(TAG_ZONE_ACTIONS.DELETE, deleteModel),
	takeLatest(TAG_ZONE_ACTIONS.UPDATE, update),
	takeLatest(TAG_ZONE_ACTIONS.CLEAR_ZONES, clearZones),
]

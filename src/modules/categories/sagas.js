import { takeLatest } from 'redux-saga/effects'
import SagasHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/SagasHelper'
import { CATEGORY_ACTION } from 'modules/categories/actionTypes'
import { CategoriesApi } from 'modules/categories/api'

/**
 * Create category
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* create(action)
{
	yield SagasHelper.defaultCreate(action, CategoriesApi.create)
}

/**
 * View category
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* view(action)
{
	yield SagasHelper.defaultView(action, CategoriesApi.view)
}

/**
 * List categories
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* list(action)
{
	yield SagasHelper.defaultList(action, CategoriesApi.list)
}

/**
 * Update category
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* update(action)
{
	yield SagasHelper.defaultUpdate(action, CategoriesApi.update)
}

/**
 * Delete category
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* deleteModel(action)
{
	yield SagasHelper.defaultDelete(action, CategoriesApi.delete)
}

/**
 * Get hierarchical categories
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|CallEffect|PutEffect<{type}>|PutEffect<{categories, type}>>}
 */
function* fetchHierarchicalCategories(action)
{
	yield SagasHelper.defaultCustom(action, CategoriesApi.fetchHierarchicalCategories)
}

/**
 * Get home page categories
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* popularCategories(action)
{
	yield SagasHelper.defaultList(action, CategoriesApi.popularCategories)
}

/**
 * Category filters
 *
 * @param {object} action
 *
 * @return {IterableIterator<PutEffect<{type, message}>|PutEffect<{cities, type}>|CallEffect|PutEffect<{type}>>}
 */
function* filters(action)
{
	yield SagasHelper.defaultView(action, CategoriesApi.filters)
}

export default [
	takeLatest(CATEGORY_ACTION.CREATE, create),
	takeLatest(CATEGORY_ACTION.VIEW, view),
	takeLatest(CATEGORY_ACTION.LIST, list),
	takeLatest(CATEGORY_ACTION.UPDATE, update),
	takeLatest(CATEGORY_ACTION.DELETE, deleteModel),
	//  Get hierarchical categories
	takeLatest(CATEGORY_ACTION.FETCH_HIERARCHICAL, fetchHierarchicalCategories),
	takeLatest(CATEGORY_ACTION.HOME_CATEGORIES, popularCategories),
	takeLatest(CATEGORY_ACTION.FILTERS, filters),
]

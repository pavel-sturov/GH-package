import { CATEGORIES_ENTITIES_ACTIONS } from 'modules/categoriesEntities/actionTypes'

export const CategoriesEntitiesStateSelectors = {
	list:   (state) => state.categoriesEntities[CATEGORIES_ENTITIES_ACTIONS.LIST],
	create: (state) => state.categoriesEntities[CATEGORIES_ENTITIES_ACTIONS.CREATE],
	delete: (state) => state.categoriesEntities[CATEGORIES_ENTITIES_ACTIONS.DELETE],
}

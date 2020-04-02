import { CATEGORY_ACTION } from 'modules/categories/actionTypes'

export const CategoriesStateSelectors = {
	create:            (state) => state.categories[CATEGORY_ACTION.CREATE],
	view:              (state) => state.categories[CATEGORY_ACTION.VIEW],
	list:              (state) => state.categories[CATEGORY_ACTION.LIST],
	update:            (state) => state.categories[CATEGORY_ACTION.UPDATE],
	delete:            (state) => state.categories[CATEGORY_ACTION.DELETE],
	getHierarchical:   (state) => state.categories[CATEGORY_ACTION.FETCH_HIERARCHICAL],
	getHomeCategories: (state) => state.categories[CATEGORY_ACTION.HOME_CATEGORIES],
	filters:           (state) => state.categories[CATEGORY_ACTION.FILTERS],
}

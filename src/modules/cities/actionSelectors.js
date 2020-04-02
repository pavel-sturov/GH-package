import { CITY_ACTION } from 'modules/cities/actionTypes'

export const CitiesStateSelectors = {
	list:   (state) => state.cities[CITY_ACTION.LIST],
	view:   (state) => state.cities[CITY_ACTION.VIEW],
	create: (state) => state.cities[CITY_ACTION.CREATE],
	update: (state) => state.cities[CITY_ACTION.UPDATE],
}

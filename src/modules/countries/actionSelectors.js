import { COUNTRY_ACTION } from 'modules/countries/actionTypes'

export const CountriesStateSelectors = {
	list:   (state) => state.countries[COUNTRY_ACTION.LIST],
	view:   (state) => state.countries[COUNTRY_ACTION.VIEW],
	update: (state) => state.countries[COUNTRY_ACTION.UPDATE],
	create: (state) => state.countries[COUNTRY_ACTION.CREATE],
}

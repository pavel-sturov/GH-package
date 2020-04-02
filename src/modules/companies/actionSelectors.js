import { COMPANIES_ACTION } from 'modules/companies/actionTypes'

export const CompaniesSelectors = {
	list:   (state) => state.companies[COMPANIES_ACTION.LIST],
	create: (state) => state.companies[COMPANIES_ACTION.CREATE],
	view:   (state) => state.companies[COMPANIES_ACTION.VIEW],
	delete: (state) => state.companies[COMPANIES_ACTION.DELETE],
	update: (state) => state.companies[COMPANIES_ACTION.UPDATE],
}

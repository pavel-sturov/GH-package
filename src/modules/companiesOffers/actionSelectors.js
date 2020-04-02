import { COMPANIES_OFFERS_ACTIONS } from 'modules/companiesOffers/actionTypes'

export const CompaniesOffersSelectors = {
	list:   (state) => state.companiesOffers[COMPANIES_OFFERS_ACTIONS.LIST],
	create: (state) => state.companiesOffers[COMPANIES_OFFERS_ACTIONS.CREATE],
	view:   (state) => state.companiesOffers[COMPANIES_OFFERS_ACTIONS.VIEW],
	delete: (state) => state.companiesOffers[COMPANIES_OFFERS_ACTIONS.DELETE],
	update: (state) => state.companiesOffers[COMPANIES_OFFERS_ACTIONS.UPDATE],
}

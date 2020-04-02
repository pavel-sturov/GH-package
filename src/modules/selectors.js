import { AuthActions, AuthStateSelectors } from 'modules/auth'
import { CartActions, CartStateSelectors } from 'modules/cart'
import { CategoriesActions, CategoriesStateSelectors } from 'modules/categories'
import { CategoriesEntitiesActions, CategoriesEntitiesStateSelectors } from 'modules/categoriesEntities'
import { CategoriesRelationsActions, CategoriesRelationsStateSelectors } from 'modules/categoriesRelations'
import { CitiesActions, CitiesStateSelectors } from 'modules/cities'
import { CompaniesActions, CompaniesSelectors } from 'modules/companies'
import { CompaniesInventoryActions, CompaniesInventorySelectors } from 'modules/companiesInventory'
import { CompaniesOffersActions, CompaniesOffersSelectors } from 'modules/companiesOffers'
import { CompaniesSettingsActions, CompaniesSettingsSelectors } from 'modules/companiesSettings'
import { CountriesActions, CountriesStateSelectors } from 'modules/countries'
import { CustomerActions, CustomersStateSelectors } from 'modules/customers'
import { CustomerAddressesActions, CustomerAddressesSelectors } from 'modules/customersAddresses'
import { CustomerAuthMethodActions, CustomerAuthMethodSelectors } from 'modules/customersAuthMethods'
import { CustomerComparesActions, CustomerComparesSelectors } from 'modules/customersCompares'
import { CustomerFavoriteActions, CustomerFavoriteSelectors } from 'modules/customersFavorites'
import { CustomerNotificationsActions, CustomerNotificationsSelectors } from 'modules/customersNotifications'
import { CustomerSettingsActions, CustomersSettingsStateSelectors } from 'modules/customersSettings'
import { FaqCategoriesActions, FaqCategoriesStateSelectors } from 'modules/faqCategories'
import { FaqQuestionsActions, FaqQuestionsStateSelectors } from 'modules/faqQuestions'
import { LogsActions, LogsStateSelectors } from 'modules/logs'
import { OrdersActions, OrdersStateSelectors } from 'modules/orders'
import { PaymentActions, PaymentStateSelectors } from 'modules/payment'
import { ProductsActions, ProductsStateSelectors } from 'modules/products'
import { ProductsAttachmentsActions, ProductsAttachmentsStateSelectors } from 'modules/productsAttachments'
import { ProductsBarcodesActions, ProductsBarcodesStateSelectors } from 'modules/productsBarcodes'
import { ProductsBaseActions, ProductsBaseStateSelectors } from 'modules/productsBase'
import { ProductsRelationsActions, ProductsRelationsStateSelectors } from 'modules/productsRelations'
import { ProductsReviewsActions, ProductsReviewsStateSelectors } from 'modules/productsReviews'
import { PropertiesActions, PropertiesStateSelectors } from 'modules/properties'
import { PropertiesEntitiesActions, PropertiesEntitiesStateSelectors } from 'modules/propertiesEntities'
import { PropertiesGroupsActions, PropertiesGroupsStateSelectors } from 'modules/propertiesGroups'
import { PropertiesTypesActions, PropertiesTypesStateSelectors } from 'modules/propertiesTypes'
import { ReportsActions, ReportsStateSelectors } from 'modules/reports'
import { SettingsActions, SettingsStateSelectors } from 'modules/settings'
import { TagZoneActions, TagZoneSelectors } from 'modules/Store/tagZone'
import { UsersActions, UsersStateSelectors } from 'modules/user'

export const StateSelector = {
	auth:                   AuthStateSelectors,
	user:                   UsersStateSelectors,
	countries:              CountriesStateSelectors,
	products:               ProductsStateSelectors,
	productsRelations:      ProductsRelationsStateSelectors,
	productsAttachments:    ProductsAttachmentsStateSelectors,
	cities:                 CitiesStateSelectors,
	categories:             CategoriesStateSelectors,
	categoriesRelations:    CategoriesRelationsStateSelectors,
	categoriesEntities:     CategoriesEntitiesStateSelectors,
	customers:              CustomersStateSelectors,
	customersSettings:      CustomersSettingsStateSelectors,
	customersFavorites:     CustomerFavoriteSelectors,
	customersAddresses:     CustomerAddressesSelectors,
	customersCompares:      CustomerComparesSelectors,
	customersNotifications: CustomerNotificationsSelectors,
	customersAuthMethods:   CustomerAuthMethodSelectors,
	cart:                   CartStateSelectors,
	productsBarcodes:       ProductsBarcodesStateSelectors,
	productsReviews:        ProductsReviewsStateSelectors,
	productsBase:           ProductsBaseStateSelectors,
	payment:                PaymentStateSelectors,
	orders:                 OrdersStateSelectors,
	companies:              CompaniesSelectors,
	companiesSettings:      CompaniesSettingsSelectors,
	companiesOffers:        CompaniesOffersSelectors,
	companiesInventory:     CompaniesInventorySelectors,
	settings:               SettingsStateSelectors,
	logs:                   LogsStateSelectors,
	reports:                ReportsStateSelectors,
	properties:             {
		properties:         PropertiesStateSelectors,
		propertiesTypes:    PropertiesTypesStateSelectors,
		propertiesGroups:   PropertiesGroupsStateSelectors,
		propertiesEntities: PropertiesEntitiesStateSelectors,
	},
	faq:                    {
		categories: FaqCategoriesStateSelectors,
		questions:  FaqQuestionsStateSelectors,
	},
	modules:                {
		tagZone: TagZoneSelectors,
	},
}

export const DispatchSelector = {
	auth:                   AuthActions,
	user:                   UsersActions,
	countries:              CountriesActions,
	products:               ProductsActions,
	productsRelations:      ProductsRelationsActions,
	productsAttachments:    ProductsAttachmentsActions,
	cities:                 CitiesActions,
	categories:             CategoriesActions,
	categoriesRelations:    CategoriesRelationsActions,
	categoriesEntities:     CategoriesEntitiesActions,
	customers:              CustomerActions,
	customersSettings:      CustomerSettingsActions,
	customersFavorites:     CustomerFavoriteActions,
	customersAddresses:     CustomerAddressesActions,
	customersCompares:      CustomerComparesActions,
	customersNotifications: CustomerNotificationsActions,
	customersAuthMethods:   CustomerAuthMethodActions,
	cart:                   CartActions,
	productsBarcodes:       ProductsBarcodesActions,
	productsReviews:        ProductsReviewsActions,
	productsBase:           ProductsBaseActions,
	payment:                PaymentActions,
	orders:                 OrdersActions,
	companies:              CompaniesActions,
	companiesSettings:      CompaniesSettingsActions,
	companiesOffers:        CompaniesOffersActions,
	companiesInventory:     CompaniesInventoryActions,
	settings:               SettingsActions,
	logs:                   LogsActions,
	reports:                ReportsActions,
	properties:             {
		properties:         PropertiesActions,
		propertiesTypes:    PropertiesTypesActions,
		propertiesGroups:   PropertiesGroupsActions,
		propertiesEntities: PropertiesEntitiesActions,
	},
	faq:                    {
		categories: FaqCategoriesActions,
		questions:  FaqQuestionsActions,
	},
	modules:                {
		tagZone: TagZoneActions,
	},
}

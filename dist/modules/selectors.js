import { AuthActions, AuthStateSelectors } from "./auth";
import { CartActions, CartStateSelectors } from "./cart";
import { CategoriesActions, CategoriesStateSelectors } from "./categories";
import { CategoriesEntitiesActions, CategoriesEntitiesStateSelectors } from "./categoriesEntities";
import { CategoriesRelationsActions, CategoriesRelationsStateSelectors } from "./categoriesRelations";
import { CitiesActions, CitiesStateSelectors } from "./cities";
import { CompaniesActions, CompaniesSelectors } from "./companies";
import { CompaniesInventoryActions, CompaniesInventorySelectors } from "./companiesInventory";
import { CompaniesOffersActions, CompaniesOffersSelectors } from "./companiesOffers";
import { CompaniesSettingsActions, CompaniesSettingsSelectors } from "./companiesSettings";
import { CountriesActions, CountriesStateSelectors } from "./countries";
import { CustomerActions, CustomersStateSelectors } from "./customers";
import { CustomerAddressesActions, CustomerAddressesSelectors } from "./customersAddresses";
import { CustomerAuthMethodActions, CustomerAuthMethodSelectors } from "./customersAuthMethods";
import { CustomerComparesActions, CustomerComparesSelectors } from "./customersCompares";
import { CustomerFavoriteActions, CustomerFavoriteSelectors } from "./customersFavorites";
import { CustomerNotificationsActions, CustomerNotificationsSelectors } from "./customersNotifications";
import { CustomerSettingsActions, CustomersSettingsStateSelectors } from "./customersSettings";
import { FaqCategoriesActions, FaqCategoriesStateSelectors } from "./faqCategories";
import { FaqQuestionsActions, FaqQuestionsStateSelectors } from "./faqQuestions";
import { LogsActions, LogsStateSelectors } from "./logs";
import { OrdersActions, OrdersStateSelectors } from "./orders";
import { PaymentActions, PaymentStateSelectors } from "./payment";
import { ProductsActions, ProductsStateSelectors } from "./products";
import { ProductsAttachmentsActions, ProductsAttachmentsStateSelectors } from "./productsAttachments";
import { ProductsBarcodesActions, ProductsBarcodesStateSelectors } from "./productsBarcodes";
import { ProductsBaseActions, ProductsBaseStateSelectors } from "./productsBase";
import { ProductsRelationsActions, ProductsRelationsStateSelectors } from "./productsRelations";
import { ProductsReviewsActions, ProductsReviewsStateSelectors } from "./productsReviews";
import { PropertiesActions, PropertiesStateSelectors } from "./properties";
import { PropertiesEntitiesActions, PropertiesEntitiesStateSelectors } from "./propertiesEntities";
import { PropertiesGroupsActions, PropertiesGroupsStateSelectors } from "./propertiesGroups";
import { PropertiesTypesActions, PropertiesTypesStateSelectors } from "./propertiesTypes";
import { ReportsActions, ReportsStateSelectors } from "./reports";
import { SettingsActions, SettingsStateSelectors } from "./settings";
import { TagZoneActions, TagZoneSelectors } from "./Store/tagZone";
import { UsersActions, UsersStateSelectors } from "./user";
export var StateSelector = {
  auth: AuthStateSelectors,
  user: UsersStateSelectors,
  countries: CountriesStateSelectors,
  products: ProductsStateSelectors,
  productsRelations: ProductsRelationsStateSelectors,
  productsAttachments: ProductsAttachmentsStateSelectors,
  cities: CitiesStateSelectors,
  categories: CategoriesStateSelectors,
  categoriesRelations: CategoriesRelationsStateSelectors,
  categoriesEntities: CategoriesEntitiesStateSelectors,
  customers: CustomersStateSelectors,
  customersSettings: CustomersSettingsStateSelectors,
  customersFavorites: CustomerFavoriteSelectors,
  customersAddresses: CustomerAddressesSelectors,
  customersCompares: CustomerComparesSelectors,
  customersNotifications: CustomerNotificationsSelectors,
  customersAuthMethods: CustomerAuthMethodSelectors,
  cart: CartStateSelectors,
  productsBarcodes: ProductsBarcodesStateSelectors,
  productsReviews: ProductsReviewsStateSelectors,
  productsBase: ProductsBaseStateSelectors,
  payment: PaymentStateSelectors,
  orders: OrdersStateSelectors,
  companies: CompaniesSelectors,
  companiesSettings: CompaniesSettingsSelectors,
  companiesOffers: CompaniesOffersSelectors,
  companiesInventory: CompaniesInventorySelectors,
  settings: SettingsStateSelectors,
  logs: LogsStateSelectors,
  reports: ReportsStateSelectors,
  properties: {
    properties: PropertiesStateSelectors,
    propertiesTypes: PropertiesTypesStateSelectors,
    propertiesGroups: PropertiesGroupsStateSelectors,
    propertiesEntities: PropertiesEntitiesStateSelectors
  },
  faq: {
    categories: FaqCategoriesStateSelectors,
    questions: FaqQuestionsStateSelectors
  },
  modules: {
    tagZone: TagZoneSelectors
  }
};
export var DispatchSelector = {
  auth: AuthActions,
  user: UsersActions,
  countries: CountriesActions,
  products: ProductsActions,
  productsRelations: ProductsRelationsActions,
  productsAttachments: ProductsAttachmentsActions,
  cities: CitiesActions,
  categories: CategoriesActions,
  categoriesRelations: CategoriesRelationsActions,
  categoriesEntities: CategoriesEntitiesActions,
  customers: CustomerActions,
  customersSettings: CustomerSettingsActions,
  customersFavorites: CustomerFavoriteActions,
  customersAddresses: CustomerAddressesActions,
  customersCompares: CustomerComparesActions,
  customersNotifications: CustomerNotificationsActions,
  customersAuthMethods: CustomerAuthMethodActions,
  cart: CartActions,
  productsBarcodes: ProductsBarcodesActions,
  productsReviews: ProductsReviewsActions,
  productsBase: ProductsBaseActions,
  payment: PaymentActions,
  orders: OrdersActions,
  companies: CompaniesActions,
  companiesSettings: CompaniesSettingsActions,
  companiesOffers: CompaniesOffersActions,
  companiesInventory: CompaniesInventoryActions,
  settings: SettingsActions,
  logs: LogsActions,
  reports: ReportsActions,
  properties: {
    properties: PropertiesActions,
    propertiesTypes: PropertiesTypesActions,
    propertiesGroups: PropertiesGroupsActions,
    propertiesEntities: PropertiesEntitiesActions
  },
  faq: {
    categories: FaqCategoriesActions,
    questions: FaqQuestionsActions
  },
  modules: {
    tagZone: TagZoneActions
  }
};
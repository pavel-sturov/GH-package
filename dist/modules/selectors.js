"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DispatchSelector = exports.StateSelector = void 0;

var _auth = require("./auth");

var _cart = require("./cart");

var _categories = require("./categories");

var _categoriesEntities = require("./categoriesEntities");

var _categoriesRelations = require("./categoriesRelations");

var _cities = require("./cities");

var _companies = require("./companies");

var _companiesInventory = require("./companiesInventory");

var _companiesOffers = require("./companiesOffers");

var _companiesSettings = require("./companiesSettings");

var _countries = require("./countries");

var _customers = require("./customers");

var _customersAddresses = require("./customersAddresses");

var _customersAuthMethods = require("./customersAuthMethods");

var _customersCompares = require("./customersCompares");

var _customersFavorites = require("./customersFavorites");

var _customersNotifications = require("./customersNotifications");

var _customersSettings = require("./customersSettings");

var _faqCategories = require("./faqCategories");

var _faqQuestions = require("./faqQuestions");

var _logs = require("./logs");

var _orders = require("./orders");

var _payment = require("./payment");

var _products = require("./products");

var _productsAttachments = require("./productsAttachments");

var _productsBarcodes = require("./productsBarcodes");

var _productsBase = require("./productsBase");

var _productsRelations = require("./productsRelations");

var _productsReviews = require("./productsReviews");

var _properties = require("./properties");

var _propertiesEntities = require("./propertiesEntities");

var _propertiesGroups = require("./propertiesGroups");

var _propertiesTypes = require("./propertiesTypes");

var _reports = require("./reports");

var _settings = require("./settings");

var _tagZone = require("./Store/tagZone");

var _user = require("./user");

var StateSelector = {
  auth: _auth.AuthStateSelectors,
  user: _user.UsersStateSelectors,
  countries: _countries.CountriesStateSelectors,
  products: _products.ProductsStateSelectors,
  productsRelations: _productsRelations.ProductsRelationsStateSelectors,
  productsAttachments: _productsAttachments.ProductsAttachmentsStateSelectors,
  cities: _cities.CitiesStateSelectors,
  categories: _categories.CategoriesStateSelectors,
  categoriesRelations: _categoriesRelations.CategoriesRelationsStateSelectors,
  categoriesEntities: _categoriesEntities.CategoriesEntitiesStateSelectors,
  customers: _customers.CustomersStateSelectors,
  customersSettings: _customersSettings.CustomersSettingsStateSelectors,
  customersFavorites: _customersFavorites.CustomerFavoriteSelectors,
  customersAddresses: _customersAddresses.CustomerAddressesSelectors,
  customersCompares: _customersCompares.CustomerComparesSelectors,
  customersNotifications: _customersNotifications.CustomerNotificationsSelectors,
  customersAuthMethods: _customersAuthMethods.CustomerAuthMethodSelectors,
  cart: _cart.CartStateSelectors,
  productsBarcodes: _productsBarcodes.ProductsBarcodesStateSelectors,
  productsReviews: _productsReviews.ProductsReviewsStateSelectors,
  productsBase: _productsBase.ProductsBaseStateSelectors,
  payment: _payment.PaymentStateSelectors,
  orders: _orders.OrdersStateSelectors,
  companies: _companies.CompaniesSelectors,
  companiesSettings: _companiesSettings.CompaniesSettingsSelectors,
  companiesOffers: _companiesOffers.CompaniesOffersSelectors,
  companiesInventory: _companiesInventory.CompaniesInventorySelectors,
  settings: _settings.SettingsStateSelectors,
  logs: _logs.LogsStateSelectors,
  reports: _reports.ReportsStateSelectors,
  properties: {
    properties: _properties.PropertiesStateSelectors,
    propertiesTypes: _propertiesTypes.PropertiesTypesStateSelectors,
    propertiesGroups: _propertiesGroups.PropertiesGroupsStateSelectors,
    propertiesEntities: _propertiesEntities.PropertiesEntitiesStateSelectors
  },
  faq: {
    categories: _faqCategories.FaqCategoriesStateSelectors,
    questions: _faqQuestions.FaqQuestionsStateSelectors
  },
  modules: {
    tagZone: _tagZone.TagZoneSelectors
  }
};
exports.StateSelector = StateSelector;
var DispatchSelector = {
  auth: _auth.AuthActions,
  user: _user.UsersActions,
  countries: _countries.CountriesActions,
  products: _products.ProductsActions,
  productsRelations: _productsRelations.ProductsRelationsActions,
  productsAttachments: _productsAttachments.ProductsAttachmentsActions,
  cities: _cities.CitiesActions,
  categories: _categories.CategoriesActions,
  categoriesRelations: _categoriesRelations.CategoriesRelationsActions,
  categoriesEntities: _categoriesEntities.CategoriesEntitiesActions,
  customers: _customers.CustomerActions,
  customersSettings: _customersSettings.CustomerSettingsActions,
  customersFavorites: _customersFavorites.CustomerFavoriteActions,
  customersAddresses: _customersAddresses.CustomerAddressesActions,
  customersCompares: _customersCompares.CustomerComparesActions,
  customersNotifications: _customersNotifications.CustomerNotificationsActions,
  customersAuthMethods: _customersAuthMethods.CustomerAuthMethodActions,
  cart: _cart.CartActions,
  productsBarcodes: _productsBarcodes.ProductsBarcodesActions,
  productsReviews: _productsReviews.ProductsReviewsActions,
  productsBase: _productsBase.ProductsBaseActions,
  payment: _payment.PaymentActions,
  orders: _orders.OrdersActions,
  companies: _companies.CompaniesActions,
  companiesSettings: _companiesSettings.CompaniesSettingsActions,
  companiesOffers: _companiesOffers.CompaniesOffersActions,
  companiesInventory: _companiesInventory.CompaniesInventoryActions,
  settings: _settings.SettingsActions,
  logs: _logs.LogsActions,
  reports: _reports.ReportsActions,
  properties: {
    properties: _properties.PropertiesActions,
    propertiesTypes: _propertiesTypes.PropertiesTypesActions,
    propertiesGroups: _propertiesGroups.PropertiesGroupsActions,
    propertiesEntities: _propertiesEntities.PropertiesEntitiesActions
  },
  faq: {
    categories: _faqCategories.FaqCategoriesActions,
    questions: _faqQuestions.FaqQuestionsActions
  },
  modules: {
    tagZone: _tagZone.TagZoneActions
  }
};
exports.DispatchSelector = DispatchSelector;
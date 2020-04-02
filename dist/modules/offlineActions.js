"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterceptOfflineActions = void 0;

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.object.values");

var _auth = require("./auth");

var _cart = require("./cart");

var _categories = require("./categories");

var _categoriesEntities = require("./categoriesEntities");

var _categoriesRelations = require("./categoriesRelations");

var _companies = require("./companies");

var _companiesOffers = require("./companiesOffers");

var _companiesSettings = require("./companiesSettings");

var _customers = require("./customers");

var _customersAddresses = require("./customersAddresses");

var _customersCompares = require("./customersCompares");

var _customersFavorites = require("./customersFavorites");

var _customersNotifications = require("./customersNotifications");

var _customersSettings = require("./customersSettings");

var _faqCategories = require("./faqCategories");

var _faqQuestions = require("./faqQuestions");

var _orders = require("./orders");

var _payment = require("./payment");

var _productsAttachments = require("./productsAttachments");

var _productsBarcodes = require("./productsBarcodes");

var _productsRelations = require("./productsRelations");

var _properties = require("./properties");

var _propertiesEntities = require("./propertiesEntities");

var _propertiesGroups = require("./propertiesGroups");

var _propertiesTypes = require("./propertiesTypes");

var _tagZone = require("./Store/tagZone");

var _user = require("./user");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Intercept offline actions
 *
 * @type {Array}
 */
var InterceptOfflineActions = [_auth.AUTH_ACTION.SIGN_IN, _auth.AUTH_ACTION.LOG_OUT, _auth.AUTH_ACTION.RENEW_TOKEN].concat([_cart.CART_ACTION.CREATE_ORDER, _cart.CART_ACTION.DELETE_ALL, _cart.CART_ACTION.DELETE, _cart.CART_ACTION.UPDATE, _cart.CART_ACTION.CREATE], [_categories.CATEGORY_ACTION.FETCH_HIERARCHICAL], [_customers.CUSTOMER_ACTIONS.DELETE, _customers.CUSTOMER_ACTIONS.UPDATE, _customers.CUSTOMER_ACTIONS.CREATE], [_customersSettings.CUSTOMER_SETTINGS_ACTIONS.UPDATE], [_orders.ORDERS_ACTION.PAY], [_payment.PAYMENT_ACTION.SET_MAIN, _payment.PAYMENT_ACTION.DELETE, _payment.PAYMENT_ACTION.CREATE], [_customersFavorites.FAVORITE_ACTION.DELETE, _customersFavorites.FAVORITE_ACTION.CREATE, _customersFavorites.FAVORITE_ACTION.DELETE_ALL], [_customersCompares.COMPARES_ACTION.DELETE, _customersCompares.COMPARES_ACTION.CREATE, _customersCompares.COMPARES_ACTION.DELETE_ALL], [_companies.COMPANIES_ACTION.CREATE, _companies.COMPANIES_ACTION.UPDATE, _companies.COMPANIES_ACTION.DELETE], [_companiesSettings.COMPANIES_SETTINGS_ACTIONS.UPDATE, _companiesSettings.COMPANIES_SETTINGS_ACTIONS.DELETE], [_customersAddresses.CUSTOMER_ADDRESSES_ACTION.CREATE, _customersAddresses.CUSTOMER_ADDRESSES_ACTION.UPDATE, _customersAddresses.CUSTOMER_ADDRESSES_ACTION.DELETE], [_faqCategories.FAQ_CATEGORIES_ACTIONS.CREATE, _faqCategories.FAQ_CATEGORIES_ACTIONS.UPDATE, _faqCategories.FAQ_CATEGORIES_ACTIONS.DELETE], [_faqQuestions.FAQ_QUESTIONS_ACTIONS.CREATE, _faqQuestions.FAQ_QUESTIONS_ACTIONS.UPDATE, _faqQuestions.FAQ_QUESTIONS_ACTIONS.DELETE], [_tagZone.TAG_ZONE_ACTIONS.CREATE, _tagZone.TAG_ZONE_ACTIONS.UPDATE, _tagZone.TAG_ZONE_ACTIONS.DELETE], [_properties.PROPERTIES_ACTIONS.CREATE, _properties.PROPERTIES_ACTIONS.UPDATE, _properties.PROPERTIES_ACTIONS.DELETE], [_propertiesTypes.PROPERTIES_TYPES_ACTIONS.CREATE, _propertiesTypes.PROPERTIES_TYPES_ACTIONS.UPDATE, _propertiesTypes.PROPERTIES_TYPES_ACTIONS.DELETE], [_propertiesGroups.PROPERTIES_GROUPS_ACTIONS.CREATE, _propertiesGroups.PROPERTIES_GROUPS_ACTIONS.UPDATE, _propertiesGroups.PROPERTIES_GROUPS_ACTIONS.DELETE], [_propertiesEntities.PROPERTIES_ENTITIES_ACTIONS.CREATE, _propertiesEntities.PROPERTIES_ENTITIES_ACTIONS.UPDATE, _propertiesEntities.PROPERTIES_ENTITIES_ACTIONS.DELETE], [_customersNotifications.NOTIFICATIONS_ACTIONS.UPDATE], [_companiesOffers.COMPANIES_OFFERS_ACTIONS.DELETE, _companiesOffers.COMPANIES_OFFERS_ACTIONS.CREATE, _companiesOffers.COMPANIES_OFFERS_ACTIONS.UPDATE], [_productsAttachments.PRODUCTS_ATTACHMENTS_ACTIONS.DELETE, _productsAttachments.PRODUCTS_ATTACHMENTS_ACTIONS.CREATE, _productsAttachments.PRODUCTS_ATTACHMENTS_ACTIONS.UPDATE], [_productsRelations.PRODUCTS_RELATIONS_ACTIONS.CREATE, _productsRelations.PRODUCTS_RELATIONS_ACTIONS.DELETE], [_categoriesRelations.CATEGORIES_RELATIONS_ACTIONS.CREATE, _categoriesRelations.CATEGORIES_RELATIONS_ACTIONS.DELETE], [_categoriesEntities.CATEGORIES_ENTITIES_ACTIONS.CREATE, _categoriesEntities.CATEGORIES_ENTITIES_ACTIONS.DELETE], [_productsBarcodes.PRODUCTS_BARCODES_ACTIONS.DELETE, _productsBarcodes.PRODUCTS_BARCODES_ACTIONS.CREATE, _productsBarcodes.PRODUCTS_BARCODES_ACTIONS.UPDATE], _toConsumableArray(Object.values(_user.USER_ACTION)));
exports.InterceptOfflineActions = InterceptOfflineActions;
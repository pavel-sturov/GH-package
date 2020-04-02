import "core-js/modules/es6.function.name";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.date.to-string";
import "core-js/modules/es6.string.iterator";
import "core-js/modules/es6.array.from";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.array.is-array";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { AUTH_ACTION } from "./auth";
import { CART_ACTION } from "./cart";
import { CATEGORY_ACTION } from "./categories";
import { CATEGORIES_ENTITIES_ACTIONS } from "./categoriesEntities";
import { CATEGORIES_RELATIONS_ACTIONS } from "./categoriesRelations";
import { COMPANIES_ACTION } from "./companies";
import { COMPANIES_OFFERS_ACTIONS } from "./companiesOffers";
import { COMPANIES_SETTINGS_ACTIONS } from "./companiesSettings";
import { CUSTOMER_ACTIONS } from "./customers";
import { CUSTOMER_ADDRESSES_ACTION } from "./customersAddresses";
import { COMPARES_ACTION } from "./customersCompares";
import { FAVORITE_ACTION } from "./customersFavorites";
import { NOTIFICATIONS_ACTIONS } from "./customersNotifications";
import { CUSTOMER_SETTINGS_ACTIONS } from "./customersSettings";
import { FAQ_CATEGORIES_ACTIONS } from "./faqCategories";
import { FAQ_QUESTIONS_ACTIONS } from "./faqQuestions";
import { ORDERS_ACTION } from "./orders";
import { PAYMENT_ACTION } from "./payment";
import { PRODUCTS_ATTACHMENTS_ACTIONS } from "./productsAttachments";
import { PRODUCTS_BARCODES_ACTIONS } from "./productsBarcodes";
import { PRODUCTS_RELATIONS_ACTIONS } from "./productsRelations";
import { PROPERTIES_ACTIONS } from "./properties";
import { PROPERTIES_ENTITIES_ACTIONS } from "./propertiesEntities";
import { PROPERTIES_GROUPS_ACTIONS } from "./propertiesGroups";
import { PROPERTIES_TYPES_ACTIONS } from "./propertiesTypes";
import { TAG_ZONE_ACTIONS } from "./Store/tagZone";
import { USER_ACTION } from "./user";
/**
 * Intercept offline actions
 *
 * @type {Array}
 */

export var InterceptOfflineActions = [AUTH_ACTION.SIGN_IN, AUTH_ACTION.LOG_OUT, AUTH_ACTION.RENEW_TOKEN].concat([CART_ACTION.CREATE_ORDER, CART_ACTION.DELETE_ALL, CART_ACTION.DELETE, CART_ACTION.UPDATE, CART_ACTION.CREATE], [CATEGORY_ACTION.FETCH_HIERARCHICAL], [CUSTOMER_ACTIONS.DELETE, CUSTOMER_ACTIONS.UPDATE, CUSTOMER_ACTIONS.CREATE], [CUSTOMER_SETTINGS_ACTIONS.UPDATE], [ORDERS_ACTION.PAY], [PAYMENT_ACTION.SET_MAIN, PAYMENT_ACTION.DELETE, PAYMENT_ACTION.CREATE], [FAVORITE_ACTION.DELETE, FAVORITE_ACTION.CREATE, FAVORITE_ACTION.DELETE_ALL], [COMPARES_ACTION.DELETE, COMPARES_ACTION.CREATE, COMPARES_ACTION.DELETE_ALL], [COMPANIES_ACTION.CREATE, COMPANIES_ACTION.UPDATE, COMPANIES_ACTION.DELETE], [COMPANIES_SETTINGS_ACTIONS.UPDATE, COMPANIES_SETTINGS_ACTIONS.DELETE], [CUSTOMER_ADDRESSES_ACTION.CREATE, CUSTOMER_ADDRESSES_ACTION.UPDATE, CUSTOMER_ADDRESSES_ACTION.DELETE], [FAQ_CATEGORIES_ACTIONS.CREATE, FAQ_CATEGORIES_ACTIONS.UPDATE, FAQ_CATEGORIES_ACTIONS.DELETE], [FAQ_QUESTIONS_ACTIONS.CREATE, FAQ_QUESTIONS_ACTIONS.UPDATE, FAQ_QUESTIONS_ACTIONS.DELETE], [TAG_ZONE_ACTIONS.CREATE, TAG_ZONE_ACTIONS.UPDATE, TAG_ZONE_ACTIONS.DELETE], [PROPERTIES_ACTIONS.CREATE, PROPERTIES_ACTIONS.UPDATE, PROPERTIES_ACTIONS.DELETE], [PROPERTIES_TYPES_ACTIONS.CREATE, PROPERTIES_TYPES_ACTIONS.UPDATE, PROPERTIES_TYPES_ACTIONS.DELETE], [PROPERTIES_GROUPS_ACTIONS.CREATE, PROPERTIES_GROUPS_ACTIONS.UPDATE, PROPERTIES_GROUPS_ACTIONS.DELETE], [PROPERTIES_ENTITIES_ACTIONS.CREATE, PROPERTIES_ENTITIES_ACTIONS.UPDATE, PROPERTIES_ENTITIES_ACTIONS.DELETE], [NOTIFICATIONS_ACTIONS.UPDATE], [COMPANIES_OFFERS_ACTIONS.DELETE, COMPANIES_OFFERS_ACTIONS.CREATE, COMPANIES_OFFERS_ACTIONS.UPDATE], [PRODUCTS_ATTACHMENTS_ACTIONS.DELETE, PRODUCTS_ATTACHMENTS_ACTIONS.CREATE, PRODUCTS_ATTACHMENTS_ACTIONS.UPDATE], [PRODUCTS_RELATIONS_ACTIONS.CREATE, PRODUCTS_RELATIONS_ACTIONS.DELETE], [CATEGORIES_RELATIONS_ACTIONS.CREATE, CATEGORIES_RELATIONS_ACTIONS.DELETE], [CATEGORIES_ENTITIES_ACTIONS.CREATE, CATEGORIES_ENTITIES_ACTIONS.DELETE], [PRODUCTS_BARCODES_ACTIONS.DELETE, PRODUCTS_BARCODES_ACTIONS.CREATE, PRODUCTS_BARCODES_ACTIONS.UPDATE], _toConsumableArray(Object.values(USER_ACTION)));
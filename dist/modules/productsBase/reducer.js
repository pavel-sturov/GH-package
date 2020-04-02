import "core-js/modules/es6.object.define-properties";
import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/es6.array.for-each";
import "core-js/modules/es6.array.filter";
import "core-js/modules/es6.symbol";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.define-property";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es7.object.values";

var _objectSpread2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import DataProvider from '@kakadu-dev/base-frontend-helpers/helpers/DataProvider';
import RequestActionHelper from '@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper';
import { PRODUCTS_BASE_ACTIONS } from "./actionTypes";

var ACTIONS = _objectSpread({}, PRODUCTS_BASE_ACTIONS, (_objectSpread2 = {}, _defineProperty(_objectSpread2, PRODUCTS_BASE_ACTIONS.LIST, [PRODUCTS_BASE_ACTIONS.LIST, DataProvider.getDefaultState()]), _defineProperty(_objectSpread2, PRODUCTS_BASE_ACTIONS.DIFFERENCE_ZONE_TAGS, [PRODUCTS_BASE_ACTIONS.DIFFERENCE_ZONE_TAGS, DataProvider.getDefaultState()]), _defineProperty(_objectSpread2, PRODUCTS_BASE_ACTIONS.UPDATE_ALL, [PRODUCTS_BASE_ACTIONS.UPDATE_ALL, DataProvider.getDefaultState()]), _objectSpread2));

export default RequestActionHelper.createReducerActions(Object.values(ACTIONS));
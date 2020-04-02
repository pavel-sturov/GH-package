"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es7.object.get-own-property-descriptors");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.object.values");

var _DataProvider = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/DataProvider"));

var _RequestActionHelper = _interopRequireDefault(require("@kakadu-dev/base-frontend-helpers/helpers/Redux/RequestActionHelper"));

var _actionTypes = require("./actionTypes");

var _objectSpread2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ACTIONS = _objectSpread({}, _actionTypes.PRODUCTS_BASE_ACTIONS, (_objectSpread2 = {}, _defineProperty(_objectSpread2, _actionTypes.PRODUCTS_BASE_ACTIONS.LIST, [_actionTypes.PRODUCTS_BASE_ACTIONS.LIST, _DataProvider["default"].getDefaultState()]), _defineProperty(_objectSpread2, _actionTypes.PRODUCTS_BASE_ACTIONS.DIFFERENCE_ZONE_TAGS, [_actionTypes.PRODUCTS_BASE_ACTIONS.DIFFERENCE_ZONE_TAGS, _DataProvider["default"].getDefaultState()]), _defineProperty(_objectSpread2, _actionTypes.PRODUCTS_BASE_ACTIONS.UPDATE_ALL, [_actionTypes.PRODUCTS_BASE_ACTIONS.UPDATE_ALL, _DataProvider["default"].getDefaultState()]), _objectSpread2));

var _default = _RequestActionHelper["default"].createReducerActions(Object.values(ACTIONS));

exports["default"] = _default;
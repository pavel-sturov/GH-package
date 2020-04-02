"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartProduct = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.reflect.get");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.reflect.construct");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.number.constructor");

var _BaseModel2 = _interopRequireDefault(require("../BaseModel"));

var _City = require("models/City/City");

var _Offer = require("models/Companies/Offer");

var _Customer = require("models/Customers/Customer");

var _Product = require("models/Products/Product");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Cart product model
 */
var CartProduct = /*#__PURE__*/function (_BaseModel) {
  _inherits(CartProduct, _BaseModel);

  var _super = _createSuper(CartProduct);

  function CartProduct() {
    var _this;

    _classCallCheck(this, CartProduct);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getId", function () {
      return _this.model.id;
    });

    _defineProperty(_assertThisInitialized(_this), "getCount", function () {
      return Number(_this.model.count);
    });

    _defineProperty(_assertThisInitialized(_this), "isReal", function () {
      return Number(_this.model.isReal) === 1;
    });

    _defineProperty(_assertThisInitialized(_this), "getOffer", function (offer) {
      return _this.getRelation('offer', _Offer.Offer, offer);
    });

    _defineProperty(_assertThisInitialized(_this), "getProduct", function (product) {
      return _this.getRelation('product', _Product.Product, product);
    });

    _defineProperty(_assertThisInitialized(_this), "getCustomer", function (customer) {
      return _this.getRelation('customer', _Customer.Customer, customer);
    });

    _defineProperty(_assertThisInitialized(_this), "getCity", function (city) {
      return _this.getRelation('city', _City.City, city);
    });

    return _this;
  }

  _createClass(CartProduct, null, [{
    key: "create",

    /**
     * Create cart product
     *
     * @param {object} object
     *
     * @return {CartProduct}
     */
    value: function create(object) {
      return _get(_getPrototypeOf(CartProduct), "create", this).call(this, object);
    }
    /**
     * Create list cart products
     *
     * @param {object} objects
     *
     * @return {Array.<CartProduct>}
     */

  }, {
    key: "createList",
    value: function createList(objects) {
      return _get(_getPrototypeOf(CartProduct), "createList", this).call(this, objects);
    }
    /**
     * Map cart products
     *
     * @param {Array.<object>} objects
     * @param {function(CartProduct): undefined} callback
     *
     * @return {Array.<object>}
     */

  }, {
    key: "map",
    value: function map(objects, callback) {
      return _get(_getPrototypeOf(CartProduct), "map", this).call(this, objects, callback);
    }
    /**
     * Get cart product id
     *
     * @return {number}
     */

  }]);

  return CartProduct;
}(_BaseModel2["default"]);

exports.CartProduct = CartProduct;
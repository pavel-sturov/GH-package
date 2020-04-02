"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryEntity = void 0;

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

var _Products = require("models/Products");

var _Category = require("./Category");

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
 * Category entity class
 */
var CategoryEntity = /*#__PURE__*/function (_BaseModel) {
  _inherits(CategoryEntity, _BaseModel);

  var _super = _createSuper(CategoryEntity);

  function CategoryEntity() {
    var _this;

    _classCallCheck(this, CategoryEntity);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getCategoryId", function () {
      return Number(_this.model.categoryId);
    });

    _defineProperty(_assertThisInitialized(_this), "getEntityId", function () {
      return Number(_this.model.entityId);
    });

    _defineProperty(_assertThisInitialized(_this), "getIsPrimary", function () {
      return _this.model.isPrimary;
    });

    _defineProperty(_assertThisInitialized(_this), "getType", function () {
      return _this.model.type;
    });

    _defineProperty(_assertThisInitialized(_this), "getCategory", function (category) {
      return _this.getRelation('category', _Category.Category, category);
    });

    _defineProperty(_assertThisInitialized(_this), "getProduct", function (product) {
      return _this.getRelation('product', _Products.Product, product);
    });

    return _this;
  }

  _createClass(CategoryEntity, [{
    key: "primaryKey",

    /**
     * @inheritDoc
     */
    value: function primaryKey() {
      return "".concat(this.model.type, ",").concat(this.model.entityId, ",").concat(this.model.categoryId);
    }
    /**
     * Get category id
     *
     * @return {number}
     */

  }], [{
    key: "create",

    /**
     * Create category entity
     *
     * @param {object} object
     *
     * @return {CategoryEntity}
     */
    value: function create(object) {
      return _get(_getPrototypeOf(CategoryEntity), "create", this).call(this, object);
    }
    /**
     * Create list categories entities
     *
     * @param {object} objects
     *
     * @return {Array.<CategoryEntity>}
     */

  }, {
    key: "createList",
    value: function createList(objects) {
      return _get(_getPrototypeOf(CategoryEntity), "createList", this).call(this, objects);
    }
    /**
     * Map categories entities
     *
     * @param {Array.<object>} objects
     * @param {function(CategoryEntity): undefined} callback
     *
     * @return {Array.<object>}
     */

  }, {
    key: "map",
    value: function map(objects, callback) {
      return _get(_getPrototypeOf(CategoryEntity), "map", this).call(this, objects, callback);
    }
  }]);

  return CategoryEntity;
}(_BaseModel2["default"]);

exports.CategoryEntity = CategoryEntity;
"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagZoneSelectors = void 0;

var _actionTypes = require("./actionTypes");

var TagZoneSelectors = {
  list: function list(state) {
    return state.modules.tagZone[_actionTypes.TAG_ZONE_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.modules.tagZone[_actionTypes.TAG_ZONE_ACTIONS.CREATE];
  },
  view: function view(state) {
    return state.modules.tagZone[_actionTypes.TAG_ZONE_ACTIONS.VIEW];
  },
  "delete": function _delete(state) {
    return state.modules.tagZone[_actionTypes.TAG_ZONE_ACTIONS.DELETE];
  },
  update: function update(state) {
    return state.modules.tagZone[_actionTypes.TAG_ZONE_ACTIONS.UPDATE];
  },
  clearZones: function clearZones(state) {
    return state.modules.tagZone[_actionTypes.TAG_ZONE_ACTIONS.CLEAR_ZONES];
  }
};
exports.TagZoneSelectors = TagZoneSelectors;
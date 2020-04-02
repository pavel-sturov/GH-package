import { TAG_ZONE_ACTIONS } from "./actionTypes";
export var TagZoneSelectors = {
  list: function list(state) {
    return state.modules.tagZone[TAG_ZONE_ACTIONS.LIST];
  },
  create: function create(state) {
    return state.modules.tagZone[TAG_ZONE_ACTIONS.CREATE];
  },
  view: function view(state) {
    return state.modules.tagZone[TAG_ZONE_ACTIONS.VIEW];
  },
  "delete": function _delete(state) {
    return state.modules.tagZone[TAG_ZONE_ACTIONS.DELETE];
  },
  update: function update(state) {
    return state.modules.tagZone[TAG_ZONE_ACTIONS.UPDATE];
  },
  clearZones: function clearZones(state) {
    return state.modules.tagZone[TAG_ZONE_ACTIONS.CLEAR_ZONES];
  }
};
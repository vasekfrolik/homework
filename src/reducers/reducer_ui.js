import _ from "lodash";
import { SET_SEARCH_TERM } from "../actions/ui";

const INITIAL_STATE = { searchTerm: "" };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}

import _ from "lodash";
import { SELECT_EMPLOYEE } from "../actions/employees";

const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SELECT_EMPLOYEE:
      return action.payload;
    default:
      return state;
  }
}

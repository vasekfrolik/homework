import _ from "lodash";
import {
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE_PROPERTY,
  DELETE_EMPLOYEE_BY_ID,
  FETCH_EMPLOYEES
} from "../actions/employees";

const INITIAL_STATE = {
  1: {
    id: 1,
    name: "john",
    surname: "doe",
    jobPosition: "",
    dateOfBirth: "18/02/1999",
    isGone: false
  },
  2: {
    id: 2,
    name: "mike",
    surname: "black",
    jobPosition: "",
    dateOfBirth: "08/01/1998",
    isGone: false
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_EMPLOYEE_PROPERTY:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          [action.payload.propertyName]: action.payload.newValue
        }
      };
    case DELETE_EMPLOYEE_BY_ID:
      return _.omit(state, action.payload);
    case FETCH_EMPLOYEES:
      return _.mapKeys(action.payload, "id");
    default:
      return state;
  }
}

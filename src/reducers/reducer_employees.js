import _ from "lodash";
import {
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE_PROPERTY,
  DELETE_EMPLOYEE_BY_ID,
  FETCH_EMPLOYEES
} from "../actions/employees";

const INITIAL_STATE = {
  "1a": {
    id: "1a",
    name: "john",
    surname: "doe",
    jobPosition: "full-stack developer",
    dateOfBirth: "2019-05-26T22:00:00.000Z",
    isEmployed: true
  },
  "2a": {
    id: "2a",
    name: "mike",
    surname: "black",
    jobPosition: "sw admin",
    dateOfBirth: "2019-05-26T22:00:00.000Z",
    isEmployed: false
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

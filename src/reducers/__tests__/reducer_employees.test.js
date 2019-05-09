import employeesReducer from "../reducer_employees";
import {
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE_PROPERTY,
  DELETE_EMPLOYEE_BY_ID
} from "../../actions/employees";

describe("test reducer Employees", () => {
  it("handles actions of type ADD_EMPLOYEEE", () => {
    const EMPLOYEE_SAMPLE = {
      id: 1,
      name: "john",
      surname: "doe",
      jobPosition: "",
      dateOfBirth: "18/02/1999",
      isEmployed: false
    };
    const action = {
      type: ADD_EMPLOYEE,
      payload: EMPLOYEE_SAMPLE
    };

    const newState = employeesReducer([], action);
    expect(newState).toEqual({ 1: EMPLOYEE_SAMPLE });
  });

  it("handles actions with unknown type", () => {
    const newState = employeesReducer([], { type: "UNKNOWN" });
    expect(newState).toEqual([]);
  });

  it("handles actions of type UPDATE_EMPLOYEE_PROPERTY", () => {
    const action = {
      type: UPDATE_EMPLOYEE_PROPERTY,
      payload: { id: 1, propertyName: "jobPosition", newValue: "Manager" }
    };

    const newState = employeesReducer([], action);
    expect(newState).toEqual({
      1: {
        jobPosition: "Manager"
      }
    });
  });

  it("handles actions of type DELETE_EMPLOYEEE_BY_ID", () => {
    const EMPLOYEES = {
      1: {
        id: 1,
        name: "john",
        surname: "doe",
        jobPosition: "",
        dateOfBirth: "18/02/1999",
        isEmployed: true
      },
      2: {
        id: 2,
        name: "mike",
        surname: "black",
        jobPosition: "",
        dateOfBirth: "08/01/1998",
        isEmployed: false
      }
    };
    const action = {
      type: DELETE_EMPLOYEE_BY_ID,
      payload: 2
    };

    var newState = employeesReducer(EMPLOYEES, action);

    expect(newState).toEqual({
      1: {
        id: 1,
        name: "john",
        surname: "doe",
        jobPosition: "",
        dateOfBirth: "18/02/1999",
        isEmployed: true
      }
    });
    console.log(newState);
  });
});

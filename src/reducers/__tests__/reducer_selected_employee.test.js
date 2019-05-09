import selectedEmployeeReducer from "../reducer_selected_employee";
import { SELECT_EMPLOYEE } from "../../actions/employees";

it("handles actions of type FETCH_JOB_POSITIONS", () => {
  const action = {
    type: SELECT_EMPLOYEE,
    payload: "1"
  };
  const newState = selectedEmployeeReducer([], action);
  expect(newState).toEqual("1");
});

it("handles actions with unknown type", () => {
  const newState = selectedEmployeeReducer([], { type: "UNKNOWN" });
  expect(newState).toEqual([]);
});

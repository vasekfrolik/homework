import { combineReducers } from "redux";
import ReducerEmployees from "./reducer_employees";
import ReducerJobPositions from "./reducer_job_positions";
import ReducerSelectedEmployee from "./reducer_selected_employee";
import ReducerUi from "./reducer_ui";

const ROOT_REDUCER = combineReducers({
  employees: ReducerEmployees,
  selectedEmployee: ReducerSelectedEmployee,
  jobPositions: ReducerJobPositions,
  ui: ReducerUi
});

export default ROOT_REDUCER;

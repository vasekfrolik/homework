import jobPositionsReducer from "../reducer_job_positions";
import { FETCH_JOB_POSITIONS } from "../../actions/job_positions";

it("handles actions of type FETCH_JOB_POSITIONS", () => {
  const newState = jobPositionsReducer([], action);
  expect(newState).toEqual({ 1: FETCH_JOB_POSITIONS });
});

it("handles actions with unknown type", () => {
  const newState = jobPositionsReducer([], { type: "UNKNOWN" });
  expect(newState).toEqual([]);
});

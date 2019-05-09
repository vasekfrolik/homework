import jobPositionsReducer from "../reducer_job_positions";
import { FETCH_JOB_POSITIONS_SUCCESS } from "../../actions/job_positions";
describe("test reducer JobPositions", () => {
  it("handles actions of type FETCH_JOB_POSITIONS", async () => {
    const action = {
      type: FETCH_JOB_POSITIONS_SUCCESS,
      payload: {
        data: {
          positions: [
            "full-stack developer",
            "front-end developer",
            "sw-admin",
            "help desk",
            "scrum master"
          ]
        }
      }
    };
    const newState = await jobPositionsReducer([], action);
    expect(newState).toEqual([
      "full-stack developer",
      "front-end developer",
      "sw-admin",
      "help desk",
      "scrum master"
    ]);
  });

  it("handles actions with unknown type", () => {
    const newState = jobPositionsReducer([], { type: "UNKNOWN" });
    expect(newState).toEqual([]);
  });
});

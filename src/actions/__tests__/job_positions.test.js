import { FETCH_JOB_POSITIONS, fetchJobPositions } from "../job_positions";

describe("fetch job positions", () => {
  it("has the correct type", () => {
    const action = fetchJobPositions();
    expect(action.type).toEqual(FETCH_JOB_POSITIONS);
  });
});

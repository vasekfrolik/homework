import mockAxios from "axios";
import {
  FETCH_JOB_POSITIONS,
  FETCH_JOB_POSITIONS_SUCCESS,
  fetchJobPositions,
  fetchJobPositionsSuccess
} from "../job_positions";

describe("fetch job positions", () => {
  it("has the correct type", () => {
    const action = fetchJobPositionsSuccess();
    expect(action.type).toEqual(FETCH_JOB_POSITIONS_SUCCESS);
  });
  /*
  it("fetches data from ib", () => {
    mockAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: { positions: ["sw admin"] }
      })
    );
    const action = fetchJobPositions();
    expect(action.payload).resolves.toEqual({
      status: 200,
      positions: ["sw admin"]
    });
  });*/
});

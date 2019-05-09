import { FETCH_JOB_POSITIONS_SUCCESS } from "../actions/job_positions";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_JOB_POSITIONS_SUCCESS:
      return action.payload.data.positions;
    default:
      return state;
  }
}

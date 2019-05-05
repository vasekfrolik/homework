import _ from "lodash";
import { FETCH_JOB_POSITIONS } from "../actions/job_positions";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_JOB_POSITIONS:
      return action.payload.data.positions;
    default:
      return state;
  }
}

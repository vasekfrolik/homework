import axios from "axios";
import { setHasError } from "./ui";
export const FETCH_JOB_POSITIONS = "fetch_job_positions";
export const FETCH_JOB_POSITIONS_SUCCESS = "fetch_job_positions_success";

export function fetchJobPositionsSuccess(response) {
  return {
    type: FETCH_JOB_POSITIONS_SUCCESS,
    payload: response
  };
}

export function fetchJobPositions() {
  return function(dispatch) {
    axios
      .get("http://ibillboard.com/api/positions")
      .then(response => {
        dispatch(fetchJobPositionsSuccess(response));
      })
      .catch(err => {
        dispatch(setHasError(true));
      });
  };
}

/* 
export function fetchJobPositions() {
  const response = axios.get("http://ibillboard.com/api/positions");
  return {
    type: FETCH_JOB_POSITIONS,
    payload: response
  };
}
*/

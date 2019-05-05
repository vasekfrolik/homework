import axios from "axios";
export const FETCH_JOB_POSITIONS = "fetch_job_positions";

export function fetchJobPositions() {
  const response = axios.get("http://ibillboard.com/api/positions");
  return {
    type: FETCH_JOB_POSITIONS,
    payload: response
  };
}

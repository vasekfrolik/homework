import uiReducer from "../reducer_ui";
import { SET_SEARCH_TERM } from "../../actions/ui";

it("handles actions of type SET_SEARCH_TERM", () => {
  const action = {
    type: SET_SEARCH_TERM,
    payload: "John"
  };
  const newState = uiReducer([], action);
  expect(newState).toEqual({ searchTerm: "John" });
});

it("handles actions with unknown type", () => {
  const newState = uiReducer([], { type: "UNKNOWN" });
  expect(newState).toEqual([]);
});

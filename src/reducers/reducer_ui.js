import { SET_SEARCH_TERM, SET_HAS_ERROR } from "../actions/ui";

const INITIAL_STATE = {
  searchTerm: "",
  hasError: false,
  textsEn: {
    NO_RECORD: "No record exists.",
    SEARCH: "Search",
    DELETE: "Delete permanently",
    CLEAR_SEARCH: "Clear search term",
    APP_TITLE: "HR Board",
    ADD_EMPLOYEE_TITLE: "Add new employee",
    NAME: "Name",
    SURNAME: "Surname",
    POSITION: "Position",
    BORN: "Born",
    EMPLOYED: "Employed",
    ADD_NEW_EMPLOYEE: "Add new employee",
    NO_MATCHING_BEFORE: "No record matching the search term '",
    NO_MATCHING_AFTER: "' found.",
    E_MISSING_REQUIRED_DATA: "This is sad. Required data could not be loaded."
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case SET_HAS_ERROR:
      return { ...state, hasError: action.payload };
    default:
      return state;
  }
}

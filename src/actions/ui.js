export const SET_SEARCH_TERM = "set_search_term";
export const SET_HAS_ERROR = "set_has_error";

export function setSearchTerm(term) {
  return {
    type: SET_SEARCH_TERM,
    payload: term
  };
}

export function setHasError(hasError) {
  return {
    type: SET_HAS_ERROR,
    payload: hasError
  };
}

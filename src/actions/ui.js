export const SET_SEARCH_TERM = "set_search_term";

export function setSearchTerm(term) {
  return {
    type: SET_SEARCH_TERM,
    payload: term
  };
}

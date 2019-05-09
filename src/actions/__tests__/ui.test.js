import { setSearchTerm, SET_SEARCH_TERM } from "../ui";

describe("set search term", () => {
  it("has the correct type", () => {
    const action = setSearchTerm();
    expect(action.type).toEqual(SET_SEARCH_TERM);
  });

  it("has the correct payload", () => {
    const action = setSearchTerm("term");
    expect(action.payload).toEqual("term");
  });
});

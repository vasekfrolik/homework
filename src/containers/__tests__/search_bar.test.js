import React from "react";
import { mount } from "enzyme";
import { DebounceInput } from "react-debounce-input";

import SearchBar from "./../search_bar";
import Root from "./../../root";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <SearchBar />
    </Root>
  );
});

describe("render SearchBar", () => {
  it("has one Debounce input", () => {
    expect(wrapper.find(DebounceInput).length).toEqual(1);
  });
});

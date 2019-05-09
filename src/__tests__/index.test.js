import React from "react";
import { mount, shallow } from "enzyme";

import EmployeesList from "./../containers/employees_list";
import SearchBar from "./../containers/search_bar";
import Root from "./../root";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <EmployeesList />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe("render input", () => {
  it("has one Search bar", () => {
    expect(wrapper.find(SearchBar).length).toEqual(1);
  });
});

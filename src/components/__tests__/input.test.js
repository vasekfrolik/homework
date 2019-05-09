import React from "react";
import { mount, shallow } from "enzyme";

import DebounceInput from "react-debounce-input";
import Input from "./../input";

let wrapper;

beforeEach(() => {
  wrapper = mount(<Input />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("render Input", () => {
  it("has one Debounce input", () => {
    expect(wrapper.find(DebounceInput).length).toEqual(1);
  });

  it("has been called with Label value", () => {
    wrapper.instance().prepareStyle = jest.fn();
    wrapper.instance().prepareStyle("Surname");
    expect(wrapper.instance().prepareStyle).toBeCalledWith("Surname");
  });
});

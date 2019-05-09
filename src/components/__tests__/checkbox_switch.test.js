import React from "react";
import { shallow } from "enzyme";

import CheckboxSwitch from "./../checkbox_switch";

let wrapper = shallow(
  <CheckboxSwitch
    label="Foo"
    checked={true}
    onChange={() => console.log("Test")}
  />
);

describe("render CheckboxSwitch", () => {
  it("check label and colon", () => {
    expect(wrapper.find(".im-switch-label").text()).toEqual("Foo:");
  });

  it("check input checked state and textual value", () => {
    let checkbox = wrapper.find({ type: "checkbox" });
    expect(checkbox.props().checked).toEqual(true);
    expect(wrapper.find(".im-slider-value").text()).toEqual("Yes");
    wrapper.setProps({ checked: false });
    let checkboxModified = wrapper.find({ type: "checkbox" });
    expect(checkboxModified.props().checked).toEqual(false);
    expect(wrapper.find(".im-slider-value").text()).toEqual("No");
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

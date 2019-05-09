import React from "react";
import { shallow } from "enzyme";

import MessageBox from "./../message_box";

let wrapper = shallow(<MessageBox message="No record found" />);

describe("render Message box", () => {
  it("check label and colon", () => {
    expect(wrapper.find(".message").text()).toEqual("No record found");
  });

  it("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

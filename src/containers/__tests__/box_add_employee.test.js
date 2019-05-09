import React from "react";
import { mount } from "enzyme";

import BoxAddEmployee from "./../box_add_employee";
import Input from "./../../components/input";
import Root from "./../../root";
import DatePicker from "react-datepicker";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <BoxAddEmployee />
    </Root>
  );
});

describe("render BoxAddEmployee", () => {
  it("has two Input elements", () => {
    expect(wrapper.find(Input).length).toEqual(2);
  });

  it("has one Select elements", () => {
    expect(wrapper.find("select").length).toEqual(1);
  });

  it("has one DatePicker elements", () => {
    expect(wrapper.find(DatePicker).length).toEqual(1);
  });
  /*
  it("has been called once", () => {
    wrapper.instance().getJobPositions = jest.fn();
    wrapper.instance().getJobPositions();
    expect(wrapper.instance().getJobPositions).toHaveBeenCalledTimes(1);
  });
  */
});

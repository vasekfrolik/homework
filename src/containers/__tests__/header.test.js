import React from "react";
import { mount, shallow } from "enzyme";

import Header from "./../header";
import Logo from "./../../components/logo";

import Root from "./../../root";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <Header />
    </Root>
  );
});

describe("render header", () => {
  it("has one Logo", () => {
    expect(wrapper.find(Logo).length).toEqual(1);
  });
});

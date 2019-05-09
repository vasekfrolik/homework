import React from "react";
import { shallow } from "enzyme";

import Logo from "./../logo";
import svgLogo from "./../../assets/iBillboardLogo.svg";

describe("render Logo", () => {
  const logo = shallow(<Logo />);
  it("matches snapshot", () => {
    expect(logo).toMatchSnapshot();
  });

  it("renders an image with logo as a source", () => {
    expect(logo.find("img").prop("src")).toEqual(svgLogo);
  });

  it("renders a div with img", () => {
    expect(logo.contains(<img src={svgLogo} alt="Logo" />)).toEqual(true);
  });

  it("has alt set to 'Logo'", () => {
    expect(logo.find("img").prop("alt")).toEqual("Logo");
  });
});

import React, { Component } from "react";
import svgLogo from "../assets/iBillboardLogo.svg";
import "./logo.scss";

export default class Logo extends Component {
  getSvgPathLength(svgPathId) {
    var svgPath = document.querySelector("." + svgPathId);
    var svgPathLength = svgPath.getTotalLength();
    return svgPathLength;
  }
  render() {
    return (
      <div className="logo">
        <img src={svgLogo} />
      </div>
    );
  }
}

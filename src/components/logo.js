import React, { Component } from "react";
import svgLogo from "../assets/iBillboardLogo.svg";
import "./logo.scss";

export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={svgLogo} alt="Logo" />
      </div>
    );
  }
}

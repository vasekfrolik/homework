import React, { Component } from "react";
import { connect } from "react-redux";
import Logo from "../components/logo";
import SearchBar from "./search_bar";
import "./header.scss";

export class Header extends Component {
  render() {
    return (
      <div className="header-fixed">
        <div className="header-logo">
          <Logo />
          <h1>{this.props.ui.textsEn.APP_TITLE}</h1>
        </div>
        <SearchBar />
      </div>
    );
  }
}

const mapStateToProps = state => ({ ui: state.ui });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

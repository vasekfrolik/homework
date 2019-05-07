import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchTerm } from "../actions/ui";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { DebounceInput } from "react-debounce-input";
import "./search_bar.scss";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.clearSearchTerm = this.clearSearchTerm.bind(this);
  }

  setSearchTerm(event) {
    this.props.setSearchTerm(event.target.value);
  }

  clearSearchTerm() {
    this.props.setSearchTerm("");
  }

  render() {
    var buttonDisplayedStyle = "";
    var inputStyle = "search-box-input";
    if (this.props.ui.searchTerm.length > 0) {
      buttonDisplayedStyle = "search-button-visible";
      inputStyle += " search-box-input-non-empty";
    } else {
      buttonDisplayedStyle = "search-button-hidden";
      inputStyle = "search-box-input";
    }
    return (
      <div className="search-bar-wraper">
        <div className="search-bar">
          <DebounceInput
            className={inputStyle}
            placeholder="Search"
            minLength={1}
            debounceTimeout={200}
            value={this.props.ui.searchTerm}
            onChange={this.setSearchTerm.bind(this)}
            id="searchBar"
          />

          <div />
        </div>
        <a
          href="#"
          className={buttonDisplayedStyle}
          onClick={this.clearSearchTerm.bind(this)}
        >
          Clear search term
        </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setSearchTerm
    },
    dispatch
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar)
);

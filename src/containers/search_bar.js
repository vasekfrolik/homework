import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchTerm } from "../actions/ui";
import { bindActionCreators } from "redux";
import { DebounceInput } from "react-debounce-input";
import "./search_bar.scss";

class SearchBar extends Component {
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
            placeholder={this.props.ui.textsEn.SEARCH}
            minLength={1}
            debounceTimeout={200}
            value={this.props.ui.searchTerm}
            onChange={event => this.props.setSearchTerm(event.target.value)}
            id="searchBarInput"
          />

          <div />
        </div>
        <button
          id="button-clear-search"
          className={buttonDisplayedStyle}
          onClick={() => this.props.setSearchTerm("")}
        >
          {this.props.ui.textsEn.CLEAR_SEARCH}
        </button>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

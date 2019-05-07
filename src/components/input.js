import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";
import "./input.scss";
export default class Input extends Component {
  render() {
    let hasLabelCssColumns;
    this.props.label
      ? (hasLabelCssColumns = "employee-box-row")
      : (hasLabelCssColumns = "employee-box-row-no-cols");
    return (
      <div className={hasLabelCssColumns}>
        {this.props.label ? <div>{this.props.label}:</div> : ""}
        <div className="flex-stretch">
          <DebounceInput
            className={this.props.customClass}
            minLength={2}
            debounceTimeout={300}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

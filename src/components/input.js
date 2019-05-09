import React, { Component } from "react";
import { DebounceInput } from "react-debounce-input";
import "./input.scss";
import PropTypes from "prop-types";
export default class Input extends Component {
  prepareCssStyle(label) {
    if (label) return "employee-box-row";
    else return "employee-box-row-no-cols";
  }

  displayLabel(label) {
    if (label) return <div>{label}:</div>;
    else return "";
  }

  render() {
    let hasLabelCssColumns = this.prepareCssStyle(this.props.label);

    return (
      <div className={hasLabelCssColumns}>
        {this.displayLabel(this.props.label)}
        <div className="flex-stretch">
          <DebounceInput
            className={this.props.customClass}
            minLength={1}
            debounceTimeout={300}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  label: "",
  value: "",
  onChange: null
};

import React, { Component } from "react";
import "./checkbox_switch.scss";
import PropTypes from "prop-types";
export default class CheckboxSwitch extends Component {
  render() {
    return (
      <div className="employee-box-row">
        <div className="im-switch-label">{this.props.label}:</div>
        <div className="im-switch-with-value">
          <label className="im-switch">
            <input
              type="checkbox"
              checked={this.props.checked}
              onChange={this.props.onChange}
            />
            <span className="im-slider im-round" />
          </label>
          <div className="im-slider-value">
            {this.props.checked ? "Yes" : "No"}
          </div>
        </div>
      </div>
    );
  }
}

CheckboxSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func
};

CheckboxSwitch.defaultProps = {
  label: "",
  checked: true,
  onChange: null
};

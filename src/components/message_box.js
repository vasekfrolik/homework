import React, { Component } from "react";
import PropTypes from "prop-types";
import "./message_box.scss";

export default class MessageBox extends Component {
  render() {
    return <div className="message">{this.props.message}</div>;
  }
}

MessageBox.propTypes = {
  message: PropTypes.string.isRequired
};

MessageBox.defaultProps = {
  message: ""
};

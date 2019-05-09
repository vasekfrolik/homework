import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";
import "./box_employee.scss";
import {
  updateEmployeeProperty,
  deleteEmployeeById,
  selectEmployee
} from "../actions/employees";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckboxSwitch from "../components/checkbox_switch";
import Input from "../components/input";

export class BoxEmployee extends Component {
  getJobPositions() {
    let sortedJobPositions = _.orderBy(this.props.jobPositions);
    return _.map(sortedJobPositions, singleJobPosition => {
      return (
        <option key={singleJobPosition} value={singleJobPosition}>
          {singleJobPosition}
        </option>
      );
    });
  }

  handleTextChange(propName, employeeId, event) {
    this.props.updateEmployeeProperty(employeeId, propName, event.target.value);
  }

  handleCheckboxChange(propName, employeeId, event) {
    this.props.updateEmployeeProperty(
      employeeId,
      propName,
      event.target.checked
    );
  }

  handleSelectChange(propName, employeeId, event) {
    this.props.updateEmployeeProperty(employeeId, propName, event.target.value);
  }

  handleDateChange(propName, employeeId, date) {
    console.log(propName, employeeId, date);
    this.props.updateEmployeeProperty(employeeId, propName, date);
  }

  render() {
    var singleEmployeeData = this.props.employeeData;
    var cssstyle = "";
    singleEmployeeData.isEmployed
      ? (cssstyle = {
          border: "1px solid lightseagreen",
          background: "lightseagreen"
        })
      : (cssstyle = {
          border: "1px solid lightgray",
          background: "lightgray"
        });
    return (
      <div
        onClick={() => this.props.selectEmployee(singleEmployeeData.id)}
        className={
          this.props.selectedEmployee === singleEmployeeData.id
            ? "employee-box top-layer"
            : "employee-box"
        }
        key={singleEmployeeData.id}
      >
        <i className="icon-User icon-64" style={cssstyle} />
        <Input
          customClass="input-standard input-key-data"
          value={this.props.employees[singleEmployeeData.id].name}
          onChange={this.handleTextChange.bind(
            this,
            "name",
            singleEmployeeData.id
          )}
        />

        <Input
          customClass="input-standard input-key-data input-bold"
          value={this.props.employees[singleEmployeeData.id].surname}
          onChange={this.handleTextChange.bind(
            this,
            "surname",
            singleEmployeeData.id
          )}
        />

        <div className="employee-box-row">
          <div>{this.props.ui.textsEn.POSITION}:</div>
          <div className="flex-stretch">
            <select
              className="input-standard"
              value={this.props.employees[singleEmployeeData.id].jobPosition}
              onChange={this.handleSelectChange.bind(
                this,
                "jobPosition",
                singleEmployeeData.id
              )}
            >
              {this.getJobPositions()}
            </select>
          </div>
        </div>
        <div className="employee-box-row">
          <div>{this.props.ui.textsEn.BORN}:</div>
          <DatePicker
            className="input-standard"
            onChange={this.handleDateChange.bind(
              this,
              "dateOfBirth",
              singleEmployeeData.id
            )}
            selected={new Date(singleEmployeeData.dateOfBirth)}
          />
        </div>

        <CheckboxSwitch
          label={this.props.ui.textsEn.EMPLOYED}
          checked={singleEmployeeData.isEmployed}
          onChange={this.handleCheckboxChange.bind(
            this,
            "isEmployed",
            singleEmployeeData.id
          )}
        />
        <div className="box-actions">
          <button
            className="button-delete"
            onClick={() => this.props.deleteEmployeeById(singleEmployeeData.id)}
          >
            {this.props.ui.textsEn.DELETE}
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  employees: state.employees,
  selectedEmployee: state.selectedEmployee,
  jobPositions: state.jobPositions,
  ui: state.ui
});

const mapDispatchToProps = {
  updateEmployeeProperty,
  deleteEmployeeById,
  selectEmployee
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxEmployee);

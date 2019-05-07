import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";
import "./employees_list.scss";
import {
  updateEmployeeProperty,
  deleteEmployeeById,
  selectEmployee
} from "../actions/employees";
import { fetchJobPositions } from "../actions/job_positions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckboxSwitch from "../components/checkbox_switch";
import Input from "../components/input";
import SearchBar from "./search_bar";
import ButtonAddEmployee from "./button_add_employee";
import Logo from "../components/logo";

export class EmployeesList extends Component {
  static propTypes = {
    employees: PropTypes.object,
    selectedEmployee: PropTypes.number
  };

  componentDidMount() {
    this.props.fetchJobPositions();
  }

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

  renderEmployee(singleEmployeeData) {
    var cssstyle = "";
    singleEmployeeData.isEmployed
      ? (cssstyle = {
          border: "1px solid lightseagreen",
          background: "lightseagreen"
        })
      : (cssstyle = { border: "1px solid lightgray", background: "lightgray" });
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
          <div>Position:</div>
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
          <div>Born:</div>
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
          label="Employed"
          checked={singleEmployeeData.isEmployed}
          onChange={this.handleCheckboxChange.bind(
            this,
            "isEmployed",
            singleEmployeeData.id
          )}
        />
        <div className="box-actions">
          <a
            href="#"
            onClick={() => this.props.deleteEmployeeById(singleEmployeeData.id)}
          >
            Delete permanently
          </a>
        </div>
      </div>
    );
  }

  renderAllEmployees(allEmployeesData) {
    if (_.size(allEmployeesData) > 0) {
      if (this.props.ui.searchTerm !== "") {
        allEmployeesData = _.filter(
          allEmployeesData,
          employee =>
            _.toLower(employee.name).includes(
              _.toLower(this.props.ui.searchTerm)
            ) ||
            _.toLower(employee.surname).includes(
              _.toLower(this.props.ui.searchTerm)
            )
        );
      }
      if (_.size(allEmployeesData) > 0) {
        return _.map(allEmployeesData, singleEmployeeData => {
          return this.renderEmployee(singleEmployeeData);
        });
      } else {
        return (
          <div className="message">
            No record matching the search term "{this.props.ui.searchTerm}"
            found
          </div>
        );
      }
    } else {
      return <div className="message">No record exists</div>;
    }
  }

  render() {
    return (
      <div className="layout">
        <div className="header-fixed">
          <div className="header-logo">
            <Logo />
            <h1>HR Board</h1>
          </div>
          <SearchBar />
        </div>
        <ButtonAddEmployee />
        <div className="all-employees-list">
          {this.renderAllEmployees(this.props.employees)}
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
  fetchJobPositions,
  deleteEmployeeById,
  selectEmployee
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList);

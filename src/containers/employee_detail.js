import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./employee_detail.scss";

export class EmployeeDetail extends Component {
  static propTypes = {};

  getEmployeeData(employeeId, employeesList) {
    console.log(employeesList);
    return employeesList[employeeId];
  }

  renderEmployeeDetail(employeeId, employeesList) {
    let employeeData = employeesList[employeeId];
    if (employeeData) {
      return (
        <div>
          <div>{employeeData.id}</div>
          <div>{employeeData.name}</div>
          <div>{employeeData.surname}</div>
          <div>{employeeData.jobPosition}</div>
          <div>{employeeData.dateOfBirth}</div>
          <div>{employeeData.isGone}</div>
        </div>
      );
    } else return "";
  }

  render() {
    return (
      <div>
        <h1>Detail zaměstnance</h1>
        {this.renderEmployeeDetail(
          this.props.selectedEmployee,
          this.props.employees
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees,
  selectedEmployee: state.selectedEmployee
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeDetail);

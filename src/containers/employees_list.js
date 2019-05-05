import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";
import { withRouter, Link } from "react-router-dom";
import "./employees_list.scss";

export class EmployeesList extends Component {
  static propTypes = {
    employees: PropTypes.object,
    selectedEmployee: PropTypes.number
  };

  renderAllEmployees(allEmployeesData) {
    return _.map(allEmployeesData, singleEmployeeData => {
      return (
        <div className="employee-box" key={singleEmployeeData.id}>
          <div>
            <Link to={`/employee/${singleEmployeeData.id}`}>
              {singleEmployeeData.name + " " + singleEmployeeData.surname}
            </Link>
          </div>
          <div>{singleEmployeeData.jobPosition}</div>
          <div>{singleEmployeeData.dateOfBirth}</div>
          <div>{singleEmployeeData.isGone}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Seznam zaměstnanců</h1>
        <div className="all-employees-list">
          {this.renderAllEmployees(this.props.employees)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees,
  selectedEmployee: state.selectedEmployee
});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EmployeesList)
);

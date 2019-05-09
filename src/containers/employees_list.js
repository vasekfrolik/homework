import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import "./employees_list.scss";

import { fetchJobPositions } from "../actions/job_positions";
import BoxAddEmployee from "./box_add_employee";
import MessageBox from "../components/message_box";
import Header from "./header";
import BoxEmployee from "./box_employee";

export class EmployeesList extends Component {
  componentDidMount() {
    this.props.fetchJobPositions();
  }

  renderAllEmployees(allEmployeesData) {
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
        //return this.renderEmployee(singleEmployeeData);
        return (
          <BoxEmployee
            key={singleEmployeeData.id}
            employeeData={singleEmployeeData}
          />
        );
      });
    } else {
      return (
        <MessageBox
          message={
            this.props.ui.textsEn.NO_MATCHING_BEFORE +
            this.props.ui.searchTerm +
            this.props.ui.textsEn.NO_MATCHING_AFTER
          }
        />
      );
    }
  }

  renderEmployees(allEmployeesData) {
    if (_.size(allEmployeesData) > 0) {
      return this.renderAllEmployees(allEmployeesData);
    } else {
      return <MessageBox message={this.props.ui.textsEn.NO_RECORD} />;
    }
  }

  checkHasError() {
    if (this.props.ui.hasError === true) {
      return (
        <div className="message-error">
          <i className="icon-Error16 icon-64" />
          <MessageBox message={this.props.ui.textsEn.E_MISSING_REQUIRED_DATA} />
        </div>
      );
    } else {
      return (
        <div>
          <BoxAddEmployee />
          <div className="all-employees-list">
            {this.renderEmployees(this.props.employees)}
          </div>
        </div>
      );
    }
  }

  renderMainArea() {
    return this.checkHasError();
  }

  render() {
    return (
      <div className="layout">
        <Header />
        {this.renderMainArea()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees,
  jobPositions: state.jobPositions,
  ui: state.ui
});

const mapDispatchToProps = {
  fetchJobPositions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList);

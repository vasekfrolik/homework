import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";
import { withRouter, Link } from "react-router-dom";
import { selectEmployee } from "../actions/employees";
import { fetchJobPositions } from "../actions/job_positions";

export class SideNavigation extends Component {
  static propTypes = {
    employees: PropTypes.object,
    selectedEmployee: PropTypes.number
  };

  componentDidMount() {
    this.props.fetchJobPositions();
  }

  renderLinkToEmployeesList() {
    return (
      <Link onClick={() => this.props.selectEmployee(null)} to="/">
        Seznam všech zaměstnanců
      </Link>
    );
  }

  renderEmployeesForNavigation(allEmployeesData) {
    return _.map(allEmployeesData, singleEmployeeData => {
      return (
        <div key={singleEmployeeData.id}>
          <Link
            onClick={() => this.props.selectEmployee(singleEmployeeData.id)}
            to={`/employee/${singleEmployeeData.id}`}
          >
            {singleEmployeeData.name + " " + singleEmployeeData.surname}
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderLinkToEmployeesList()}
        {this.renderEmployeesForNavigation(this.props.employees)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees,
  selectedEmployee: state.selectedEmployee
});

const mapDispatchToProps = { selectEmployee, fetchJobPositions };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideNavigation)
);

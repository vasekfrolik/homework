import React, { Component } from "react";
import { connect } from "react-redux";
import { addEmployee } from "../actions/employees";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import _ from "lodash";
import Input from "../components/input";
import "./box_add_employee.scss";
import uuid from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckboxSwitch from "../components/checkbox_switch";

class BoxAddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid.v4(),
      name: "",
      surname: "",
      jobPosition: "front-end developer",
      dateOfBirth: new Date(),
      isEmployed: false
    };
    this.addNewEmployee = this.addNewEmployee.bind(this);
  }

  resetStateData() {
    this.setState({
      id: uuid.v4(),
      name: "",
      surname: "",
      jobPosition: "front-end developer",
      dateOfBirth: new Date(),
      isEmployed: false
    });
  }

  addNewEmployee() {
    this.props.addEmployee(this.state);
    this.resetStateData();
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

  renderAddNewEmployeeForm() {
    return (
      <div className="form top-layer">
        <div className="form-caption">
          {this.props.ui.textsEn.ADD_EMPLOYEE_TITLE}
        </div>
        <Input
          label={this.props.ui.textsEn.NAME}
          key="keyName"
          customClass="input-standard "
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
        />

        <Input
          label={this.props.ui.textsEn.SURNAME}
          key="keySurname"
          customClass="input-standard "
          value={this.state.surname}
          onChange={event => this.setState({ surname: event.target.value })}
        />

        <div className="employee-box-row">
          <div>{this.props.ui.textsEn.POSITION}:</div>
          <select
            key="keyJobPosition"
            className="input-standard"
            value={this.state.jobPosition}
            onChange={event =>
              this.setState({ jobPosition: event.target.value })
            }
          >
            {this.getJobPositions()}
          </select>
        </div>
        <div className="employee-box-row">
          <div>{this.props.ui.textsEn.BORN}:</div>
          <DatePicker
            key="keyDateOfBirth"
            className="input-standard"
            onChange={event =>
              this.setState({ dateOfBirth: event }, () =>
                console.log(event, this.state.dateOfBirth)
              )
            }
            selected={this.state.dateOfBirth}
          />
        </div>

        <CheckboxSwitch
          key="keyIsEmployed  "
          label={this.props.ui.textsEn.EMPLOYED}
          checked={this.state.isEmployed}
          onChange={event =>
            this.setState({ isEmployed: event.target.checked })
          }
        />
        <div className="box-actions">
          <button
            disabled={this.state.name && this.state.surname ? false : true}
            type="submit"
            className="button-default"
            onClick={this.addNewEmployee}
          >
            <i className="icon-PlusCircle16" />
            {this.props.ui.textsEn.ADD_NEW_EMPLOYEE}
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="employee-box-new" key="keyAddNewEmployee">
        {this.renderAddNewEmployeeForm()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui,
    jobPositions: state.jobPositions
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addEmployee
    },
    dispatch
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BoxAddEmployee)
);

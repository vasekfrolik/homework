import React, { Component } from "react";
import { connect } from "react-redux";
import { addEmployee } from "../actions/employees";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import _ from "lodash";
import Input from "../components/input";
import "./button_add_employee.scss";
import uuid from "uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckboxSwitch from "../components/checkbox_switch";

class ButtonAddEmployee extends Component {
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

  addNewEmployee() {
    this.props.addEmployee(this.state);
    this.setState({
      id: uuid.v4(),
      name: "",
      surname: "",
      jobPosition: "front-end developer",
      dateOfBirth: new Date(),
      isEmployed: false
    });
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
        <div className="form-caption">Add a new employee</div>
        <Input
          label="Name"
          key="keyName"
          customClass="input-standard "
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
        />

        <Input
          label="Surname"
          key="keySurname"
          customClass="input-standard "
          value={this.state.surname}
          onChange={event => this.setState({ surname: event.target.value })}
        />

        <div className="employee-box-row">
          <div>Position:</div>
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
          <div>Born:</div>
          <DatePicker
            key="keyDateOfBirth"
            className="input-standard"
            locale="cs-CZ"
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
          label="Employed"
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
            Add new employee
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
  )(ButtonAddEmployee)
);

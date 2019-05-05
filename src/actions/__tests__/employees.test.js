import {
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE_PROPERTY,
  DELETE_EMPLOYEE_BY_ID,
  FETCH_EMPLOYEES,
  SELECT_EMPLOYEE,
  addEmployee,
  updateEmployeeProperty,
  deleteEmployeeById,
  fetchEmployees,
  selectEmployee
} from "../employees";

describe("add employee", () => {
  it("has the correct type", () => {
    const action = addEmployee();
    expect(action.type).toEqual(ADD_EMPLOYEE);
  });
});

describe("update employee property", () => {
  it("has the correct type", () => {
    const action = updateEmployeeProperty();
    expect(action.type).toEqual(UPDATE_EMPLOYEE_PROPERTY);
  });
});

describe("delete employee by id", () => {
  it("has the correct type", () => {
    const action = deleteEmployeeById();
    expect(action.type).toEqual(DELETE_EMPLOYEE_BY_ID);
  });
});

describe("fetch employees", () => {
  it("has the correct type", () => {
    const action = fetchEmployees();
    expect(action.type).toEqual(FETCH_EMPLOYEES);
  });
});

describe("select employeee", () => {
  it("has the correct type", () => {
    const action = selectEmployee();
    expect(action.type).toEqual(SELECT_EMPLOYEE);
  });
});

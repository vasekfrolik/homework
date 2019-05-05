export const ADD_EMPLOYEE = "add_employee";
export const UPDATE_EMPLOYEE_PROPERTY = "update_employee_property";
export const DELETE_EMPLOYEE_BY_ID = "delete_employee_by_id";
export const FETCH_EMPLOYEES = "fetch_employees";
export const SELECT_EMPLOYEE = "select_employee";

export function addEmployee(employeeData) {
  return {
    type: ADD_EMPLOYEE,
    payload: employeeData
  };
}

export function updateEmployeeProperty(id, propertyName, newValue) {
  return {
    type: UPDATE_EMPLOYEE_PROPERTY,
    payload: { id: id, propertyName: propertyName, newValue: newValue }
  };
}

export function deleteEmployeeById(id) {
  return {
    type: DELETE_EMPLOYEE_BY_ID,
    payload: id
  };
}

export function fetchEmployees(employees) {
  return {
    type: FETCH_EMPLOYEES,
    payload: employees
  };
}

export function selectEmployee(id) {
  return {
    type: SELECT_EMPLOYEE,
    payload: id
  };
}

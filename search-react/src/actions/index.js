/* Login Actions */
export const updateLoginFormObject = (field_name, field_value) => {
    return {
    type: 'UPDATE_LOGIN_FORM_OBJECT',
    field_name:field_name,
    field_value:field_value
    }
  }
  
  export const setRegistrationMode = () => {
    return {
      type: 'SET_REGISTRATION_MODE'
    }
  }
  
  export const registerEmployee = (dispatch, username, password, email, phone, role, location, salary, manager) => {
    return {
      type: 'REGISTER_EMPLOYEE',
      dispatch,
      username,
      password,
      email,
      phone,
      role,
      location,
      salary,
      manager
    }
  }
  
  export const loginToApp = (dispatch, email, password, loginstate) => {
    return {
    type: 'LOGIN_TO_APP',
    dispatch, email, password, loginstate
    }
  }
  
  export const logOut = (dispatch) => {
    return {
    type: 'LOG_OUT',
    dispatch
    }
  }
  
  
  export const loginSucceeded = () => {
    return {
    type: 'LOGIN_SUCCESS'
    }
  }
  
  
  export const loginFailed = () => {
    return {
    type: 'LOGIN_FAILED'
    }
  }
  
  /* REGISTRATION ACTIONS */
  export const applyRegistrationsUpdate = (registrations) => {
    return {
      type: 'APPLY_REGISTRATIONS_UPDATE',
      registrations
    }
  }
  
  export const selectRegistration = (registration) => {
    return {
    type: 'SELECT_REGISTRATION',
    registration
    }
  }
  
  export const addRegistration = (registration) => {
    return {
    type: 'ADD_REGISTRATION',
    registration
    }
  }
  
  export const getRegistrations = (dispatch) => {
    return {
    type: 'GET_REGISTRATIONS',
    dispatch
    }
  }
  
  export const deleteRegistration = (registration) => {
    return {
    type: 'DELETE_REGISTRATION',
    registration
    }
  }
  
  export const addRegistrationInit = (registration) => {
    return {
      type: 'ADD_REGISTRATION_INIT',
      registration
    }
  }
  
  export const updateRegistrationFormObject = (field_name, field_value) => {
    return {
    type: 'UPDATE_REGISTRATION_FORM_OBJECT',
    field_name:field_name,
    field_value:field_value
    }
  }
  
  // accepted values for usage: 'view', 'add', 'update'
  export const updateRegistrationFormUsage = (usage, registration) => {
    return {
      type: 'UPDATE_REGISTRATION_FORM_USAGE',
      usage: usage,
      registration: registration
    }
  }
  
  
  /* EMPLOYEE ACTIONS */
  export const applyEmployeesUpdate = (employees) => {
    return {
      type: 'APPLY_EMPLOYEES_UPDATE',
      employees
    }
  }
  
  export const selectEmployee = (employee) => {
    return {
    type: 'SELECT_EMPLOYEE',
    employee
    }
  }
  
  export const addEmployee = (employee) => {
    return {
    type: 'ADD_EMPLOYEE',
    employee
    }
  }

  export const getEmployee = (dispatch) => {
    return {
      type: "GET_EMPLOYEE",
      dispatch,
    }
  }
  
  export const getEmployees = (dispatch) => {
    return {
    type: 'GET_EMPLOYEES',
    dispatch
    }
  }
  
  export const deleteEmployee = (employee) => {
    return {
    type: 'DELETE_EMPLOYEE',
    employee
    }
  }
  
  export const addEmployeeInit = (employee) => {
    return {
      type: 'ADD_EMPLOYEE_INIT',
      employee
    }
  }
  
  export const updateEmployeeFormObject = (field_name, field_value) => {
    return {
    type: 'UPDATE_EMPLOYEE_FORM_OBJECT',
    field_name:field_name,
    field_value:field_value
    }
  }
  
  // accepted values for usage: 'view', 'add', 'update'
  export const updateEmployeeFormUsage = (usage, employee) => {
    return {
      type: 'UPDATE_EMPLOYEE_FORM_USAGE',
      usage: usage,
      employee: employee
    }
  }
  
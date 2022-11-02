import React from 'react'
import PropTypes from 'prop-types'

const EmployeeDropDown = ({ employees, selectedEmployeeId, onSelectedEmployee, usage }) => {
  return (
    <select name={'employee_id'} 
      value={selectedEmployeeId} 
      onChange={onSelectedEmployee}
      disabled={usage === 'none' || usage === 'view'}
    >
      <option key={-1} value={-1}>select</option> 
      {employees.map(employee =>
        <option
          key = {employee.id}  
          value = {employee.id} 
        >{employee.name}</option> 
      )}
  </select>
  );
}

EmployeeDropDown.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default EmployeeDropDown

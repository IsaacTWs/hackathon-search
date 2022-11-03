import React from 'react'
import PropTypes from 'prop-types'

const Employee = ({ onClick, selectedId, employee, login }) => {
  if(employee.manager === login.name || login.role === "HR" || employee.email === login.email){
  return (
    <tr className={employee.id === selectedId ? "selected" : ""}
		    onClick={(e) => onClick(e, employee.id)} >
        <td>{employee.name}</td><td>{employee.email}</td><td>{employee.phone}</td><td>{employee.role}</td><td>{employee.manager}</td><td>{employee.location}</td><td>{employee.salary}</td>
    </tr>
  );
  }else{
    return (
      <tr className={employee.id === selectedId ? "selected" : ""}
          onClick={(e) => onClick(e, employee.id)} >
          <td>{employee.name}</td><td>{employee.email}</td><td>{employee.phone}</td><td>{employee.role}</td><td>{employee.manager}</td><td>{employee.location}</td><td></td>
      </tr>
    );
  }
}

Employee.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedId: PropTypes.number,
  employee: PropTypes.object.isRequired
}

export default Employee
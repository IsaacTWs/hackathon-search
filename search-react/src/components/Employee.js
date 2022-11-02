import React from 'react'
import PropTypes from 'prop-types'

const Employee = ({ onClick, selectedId, employee }) => {
  return (
    <tr className={employee.id === selectedId ? "selected" : ""}
		    onClick={(e) => onClick(e, employee.id)} >
        <td>{employee.name}</td><td>{employee.email}</td>
    </tr>
  );
}

Employee.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedId: PropTypes.number,
  employee: PropTypes.object.isRequired
}

export default Employee
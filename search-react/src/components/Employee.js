import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const HR = ["george@fabfour.com"]
const Employee = ({ onClick, selectedId, employee, login}) => {
  if(employee.manager === login.email || HR.includes(login.email) || employee.email === login.email){
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

const mapStateToProps = (state) => {
  console.log("state: " + JSON.stringify(state));
  return {
    login: state.login
  }
}



const VisibleEmployee = connect(
  mapStateToProps
)(Employee)

export default VisibleEmployee
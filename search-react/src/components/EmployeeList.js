import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Employee from './Employee'
import { selectEmployee, updateEmployeeFormUsage, getEmployee, getEmployees } from '../actions'

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    console.log('in EventList: ' + JSON.stringify(this.props.events));
  }

  componentDidMount() {
    if (!this.props.fetched) {
      this.props.fetchRules(this.props.fetched);
    }
    console.log('mount it!');
  }

  static propTypes = {
    employees: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired).isRequired
  }


  render() {
    return (
      <div id='employee-list' className='card bg-light' >
      <form>
        <input type="text" placeholder="Search" onChange={(e) => this.props.fetchRules(this.props.fetched, e.target.value)}/>                                                                                       
      </form>
        <h4 className='card-header'>List of Users/Employees</h4>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Manager</th>
              <th>Location</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.props.employees.map(employee =>
              <Employee
                key={employee.id}
                employee={employee}
                selectedId={this.props.appState.selectedId}
                onClick={() => this.props.onEmployeeClick(employee)}
              />
            )}
          </tbody></table>
          <hr></hr>
          <p style={{'paddingLeft':'10px'}}>
            <input style={{width:'fit-content'}} className='btn btn-primary' type={'button'} onClick={this.props.handleNewEmployeeClick} value="New Employee" />
          </p>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    employees: state.employees,
    appState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRules: (fetched, target) => {
      console.log('in EmployeeList.fetchRules:');
      if (target !== undefined) {
        dispatch(getEmployee(target));
        fetched = false;
      } else {
        dispatch(getEmployees(dispatch));
        fetched = true;
      }
    },
    onEmployeeClick: (employee) => {
      console.log('in EmployeeList.onEmployeeClick:' + JSON.stringify(employee));
      dispatch(selectEmployee(employee));
      dispatch(updateEmployeeFormUsage('view', employee));
    },
    handleNewEmployeeClick: () => {
      console.log('in EmployeeList.handleNewEmployeeClick:');
      dispatch(updateEmployeeFormUsage('add'));
      dispatch(selectEmployee(-1));
    }
  }
}

const VisibleEmployeeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeList)

export default VisibleEmployeeList
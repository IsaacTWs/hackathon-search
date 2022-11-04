import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import VisibleEmployee from './Employee.js'
import { selectEmployee, updateEmployeeFormUsage, getEmployeeName, getEmployees } from '../actions'

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
      <div>
        <div
          style={{
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <form
            class="form-group"
            onSubmit={(e) => {
              this.props.fetchRules(
                this.props.fetched,
                document.getElementById("searchword").value
              );
              e.preventDefault();
            }}
          >
            <label>Search</label>

            <input
              id="searchword"
              type="text"
              class="form-control"             
              placeholder="Enter a name"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  this.props.fetchRules(this.props.fetched, e.target.value);
                }
              }}
            />
            <button type="submit" class="d-inline btn btn-success" >
              Submit
            </button>
            <input
              class="btn btn-secondary"            
              type="reset"
              value="Reset"
              onClick={(e) => {
                this.props.fetchRules(
                  this.props.fetched
                );
              }}
            />
          </form>
        </div>
        <div id="employee-list" className="card bg-light" style={{width: "fit-content"}}>
          <h4 className="card-header" >List of Employees</h4>
          <table className="table text-nowrap">
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
              {this.props.employees.map((employee) => (
                <VisibleEmployee
                  key={employee.id}
                  employee={employee}
                  selectedId={this.props.appState.selectedId}
                  onClick={() => this.props.onEmployeeClick(employee)}
                />
              ))}
            </tbody>
          </table>
          <hr></hr>
          <p style={{ paddingLeft: "10px" }}>
            <input
              style={{ width: "fit-content" }}
              className="btn btn-primary"
              type={"button"}
              onClick={this.props.handleNewEmployeeClick}
              value="New Employee"
            />
          </p>
        </div>
      </div>
    );
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
      if (target) {
        dispatch(getEmployeeName(target));
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
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateEmployeeFormObject } from '../actions'
import { updateEmployeeFormUsage } from '../actions'
import { addEmployee, selectEmployee } from '../actions'
import RestAPI from '../rest';
import { deleteEmployee } from '../actions'
let restapi = null;

const EmployeeForm = ({ employee, usage, handleChange, handleEmployeeEditClick,
                    handleEditCancelClick, handleEmployeeSaveClick,
                    handleEmployeeDeleteClick }) => (
    <div id='employee-form' className='card bg-light' hidden={ usage === 'none'}>
        <div>
            <div className='card-header'>
            <h4>Add or Edit a User/Employee</h4>
            </div>
            <form >
                <table className='table'><tbody>
                    <tr>
                        <td>Name:</td>
                        <td><input type={'text'} name={'name'} onChange={handleChange}
                             placeholder={'Employee name'}
                             value={employee.name} disabled={usage==='none'||usage==='view'} /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type={'text'} name={'email'} onChange={handleChange}
                             placeholder={'Email'}
                             value={employee.email} disabled={usage==='none'||usage==='view'} /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type={'text'} name={'password'} onChange={handleChange}
                             placeholder={'password'}
                             value={employee.password} disabled={usage==='none'||usage==='view'} /></td>
                    </tr>
                </tbody></table>
                <input type={'button'} value="Delete"
                    onClick={ (e)=>handleEmployeeDeleteClick(e, employee) }
                    hidden={usage ==='none' || usage === 'view' || usage === 'add' } />
                <input type={'button'} value="Save" onClick={ (e)=>handleEmployeeSaveClick(e, employee) } hidden={ usage === 'none' || usage === 'view'} />
                <input type={'button'} value="Cancel" onClick={ (e)=>handleEditCancelClick(e, employee) } hidden={ usage === 'none' || usage === 'view'} />
                <input type={'button'} value="Edit" onClick={ (e)=>handleEmployeeEditClick(e, employee) } hidden={ usage === 'none' || usage === 'edit' || usage === 'add'} />
            </form>
        </div>
    </div>
)

EmployeeForm.propTypes = {
  employee:  PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = (state) => {
  restapi = new RestAPI(state.login.token);
  return {
    employee: state.formState.employee,
    usage: state.formState.usage,
    appState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
        const field_name = e.currentTarget.name;
        const field_value = e.currentTarget.value;
        dispatch( updateEmployeeFormObject( field_name, field_value ));
    },
    handleEmployeeEditClick: (event, employee, usage) => {
        console.log("in EmployeeForm.handleEmployeeEditClick");
        dispatch( updateEmployeeFormUsage('edit', employee) );
    },
    handleEditCancelClick: (event, employee, usage) => {
        console.log("in EmployeeForm.handleEditCancelClick");
        if(usage === 'add'){
          dispatch( updateEmployeeFormUsage('none') );
        }else if(usage === 'edit'){
          dispatch( updateEmployeeFormUsage('view', employee) );
        }
    },
    handleEmployeeSaveClick: (event, employee, usage) => {
        console.log("in EmployeeForm.handleEmployeeSaveClick");
        dispatch(addEmployee(employee));
        if(usage === 'add'){
            dispatch(selectEmployee(employee));
        }
        dispatch(updateEmployeeFormUsage('none'));
        restapi.postEmployee(dispatch, employee);
    },
    handleEmployeeDeleteClick: (event, employee) => {
        console.log("in EmployeeForm.handleEmployeeDeleteClick");
        console.log("employee: " + JSON.stringify(employee));
        dispatch(deleteEmployee(employee));
        dispatch(updateEmployeeFormUsage('none'));
        restapi.deleteEmployee(dispatch, employee);
    }
  }
}

const VisibleEmployeeForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeForm)

export default VisibleEmployeeForm

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateLoginFormObject, loginToApp /*setRegistrationMode, registerUser */} from '../actions'

const LoginForm = ({ password, email, loginstate, mode, handleChange, handleRegisterClick, handleLoginClick }) => {
  
  return (
    <div id='login-form' className="card bg-light">
        <div>
            <h4 className="card-header">Login Form</h4>
            <form >
                <table className="table" ><tbody>
                    <tr>
                        <td>Email:</td>
                        <td><input type={'text'} name={'email'} onChange={handleChange} 
                             placeholder={'Email'}
                             value={email} /></td>
                    </tr>                 
                    <tr>
                        <td>Password:</td>
                        <td><input type={'password'} name={'password'} onChange={handleChange} 
                             placeholder={'Password'}
                             value={password}/></td>
                    </tr>                   
                </tbody></table>
                <input type={'button'} value="Login" className = 'btn btn-primary' hidden={mode === 'register'}
                    onClick={ (e)=>handleLoginClick(e, email, password, loginstate) }  />
                               
            </form>
        </div>  
    </div>
)}
/*
<input type={'button'} value="Register" className = 'btn btn-primary'
    onClick={ (e)=>handleRegisterClick(e, username, password, email, loginstate, mode) }  /> 
*/

LoginForm.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  console.log("MODE: " + JSON.stringify(state.login));
  return {
    password: state.login.password,
    email: state.login.email,
    loginstate: state.login.loginstate,
    mode: state.login.mode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      const field_name = e.currentTarget.name;
      const field_value = e.currentTarget.value;

      dispatch(updateLoginFormObject(field_name, field_value));
    },
    handleLoginClick: (e, email, password, loginstate) => {
      if (email === null || email.length === 0 || password === null || password.length === 0) {
        alert("email and password are required!");
        return;
      } else {
        console.log("in LoginForm.handleLoginClick: ");
        dispatch(loginToApp(dispatch, email, password, loginstate));
      }
    },
    /*
    handleRegisterClick: (e, username, password, email, loginstate, mode) => {
      if(mode === 'login'){
        dispatch(setRegistrationMode());
        return;
      }
      // if mode = 'register'
      if (username === null || username.length === 0 
          || password === null || password.length === 0
          || email === null || email.length === 0) {
        alert("username, password and email are required!");
        return;
      } else {
        console.log("in LoginForm.handleRegisterClick: ");
        dispatch(registerUser(dispatch, username, password, email));
      }
    
    }
    */
  }
}

const VisibleLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default VisibleLoginForm
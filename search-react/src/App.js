import React from 'react';
import { connect } from 'react-redux'
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import Login from './components/Login';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
/*
import RegistrationList from './components/RegistrationList';
import RegistrationForm from './components/RegistrationForm';
*/

import './App.css';

function EmployeesModule() {
  return (
    <div>
      <NavLinks></NavLinks>
      <EmployeeList></EmployeeList>
      <EmployeeForm></EmployeeForm>
      <Footer></Footer>      
    </div>
  );
}
/*
function RegistrationsModule() {
  return (
    <div>
      <NavLinks></NavLinks>
      <RegistrationList></RegistrationList>
      <RegistrationForm></RegistrationForm>
      <Footer></Footer>
    </div>
  );
}
*/
function HomePage() {
  return (
    <div>
      <NavLinks></NavLinks>
    </div>
  );
}


function NavLinks(){
  return (
    <nav>
    <Link type='button' className='button btn-primary btn-lg' to="/employees">Employees</Link>
    <Link type='button' className='button btn-primary btn-lg' to="/registrations">Registrations</Link>
    </nav>
  );
}

function compare(a, b){
  // console.log("a :" + a);
  // console.log("b :" + b);
  return (a === b);
}

function Custom(props){

  if(  !compare(props.login.loginstate, 'logged-in')){
    console.log("NOT loggedin");
    return ( 
      <Login></Login>
    );
  }else{
    console.log("YES loggedin");
    return (
      <div>
    <Route exact path="/" render={() => (<Redirect to="/home"/>)}/>
    <Route path="/login" component={Login} />
    <Route path="/home" component={HomePage} />
    <Route path="/employees" component={EmployeesModule} />
    </div>
    )
    
  }

}


function App({login}) {
  return (
    <Router>
    <div className="App">
        <h1>Enterprise Directory</h1>
        <Custom login={login} />
    </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  console.log("state: " + JSON.stringify(state));
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    onInit: (e) => {
      console.log("in app component");
    }            
  }
}

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default VisibleApp
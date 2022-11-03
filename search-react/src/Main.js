import React from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import './Main.css';

function EmployeesModule() {
  return (
    <div>
      <EmployeeList></EmployeeList>
      <EmployeeForm></EmployeeForm>
    </div>
  );
}

// function EventsModule() {
//   return (
//     <div>
//       <EventList></EventList>
//       <EventForm></EventForm>
//     </div>
//   );
// }

// function RegistrationsModule() {
//   return (
//     <div>
//       <RegistrationList></RegistrationList>
//       <RegistrationForm></RegistrationForm>
//     </div>
//   );
// }


function App() {
  return (
    <Router>
    <div className="App">
        <h1>Registration App</h1>
        <nav>
        <Link type='button' className='button btn-outline-primary btn-lg' to="/employees">Employees</Link>
        <Link type='button' className='button btn-outline-primary btn-lg'  to="/events">Events</Link>
        <Link type='button' className='button btn-outline-primary btn-lg' to="/registrations">Registrations</Link>
        </nav>
        <Route exact path="/" render={() => (<Redirect to="/employees"/>)}/>
        <Route path="/employees" component={EmployeesModule} />
        {/* <Route path="/events" component={EventsModule} />
        <Route path="/registrations" component={RegistrationsModule} /> */}
    </div>
    </Router>
  );
}

export default App;

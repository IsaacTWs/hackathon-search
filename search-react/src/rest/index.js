import { applyEmployeesUpdate,
    applyRegistrationsUpdate, loginSucceeded, loginFailed } from '../actions'
  
  class RestAPI {
  
    /* LOGIN REQUESTS */
    registerUser = (dispatch, username, password, email) => {
      let url = "/api/accounts/register";
      let employee = {
        name: username,
        email: email,
        password: password
      }
      let body = JSON.stringify(employee);
      let myHeaders = new Headers({ "Content-Type": "application/json" });
          var myInit = {
            method: 'POST',
            body: body,
            headers: myHeaders,
            mode: 'cors'
          };
          let promise = fetch(url, myInit);
          promise.then((response) => {
            return response.text();
          }).then(function (text) {
            console.log('register request completed: ', text);
          });
    }
  
    loginUser = (dispatch, email, password) => {
      console.log("loginUser: " + email);
      let url = "/api/accounts/login";
      let credenttials = {email: email, password: password};
      let body = JSON.stringify(credenttials);
      let headers = new Headers({ "Content-Type": "application/json" });
      var myInit = {
            method: 'POST',
            body: body,
            headers: headers,
            mode: 'cors'
          };
  
      fetch(url, myInit).then(
        (response) => {
          if(response !== "" && response.status === 200) {
            console.log( "loginUser: SUCCESS" );
            let action = loginSucceeded();
            dispatch(action);
          }else{
            console.log( "loginUser: FAILURE" );
            let action = loginFailed();
            dispatch(action);
          }
        },
        (error) => {
          console.log( "loginUser: ERROR" );
          let action = loginFailed();
          dispatch(action);
        }
      );
    }
  
    /* REGISTRATION REQUESTS */
    getRegistrations = ( dispatch ) => {
      var myInit = { method: 'GET', mode: 'cors' };
      let promise = fetch("/api/registrations", myInit);
      promise.then((response) => {
        return response.text();
      }).then(function (text) {
        console.log('Request successful: ', text);
        let registrations = JSON.parse(text);
        dispatch(applyRegistrationsUpdate(registrations));
      });
    }
  
      postRegistration = ( dispatch, registration ) => {
          let url = "/api/registrations/";
      let body = JSON.stringify(registration);
      let myHeaders = new Headers(
        { "Content-Type": "application/json"//,
          // "Authorization": "Bearer " + window.token
        });
          var myInit = {
            method: 'POST',
            body: body,
            headers: myHeaders,
            mode: 'cors'
          };
          let getregistrations = this.getRegistrations;
          let promise = fetch(url, myInit);
          promise.then((response) => {
            return response.text();
          }).then(function (text) {
            console.log('put request completed: ', text);
            getregistrations(dispatch);
          });
      }
  
    deleteRegistration = ( dispatch, registration ) => {
      let url = "/api/registrations/" + registration.id;
      let myHeaders = new Headers(
        { "Content-Type": "application/json"//,
          // "Authorization": "Bearer " + window.token
        });
      var myInit = { method: 'DELETE', headers: myHeaders, mode: 'cors' };
      let getregistrations = this.getRegistrations;
      let promise = fetch(url, myInit);
      promise.then((response) => {
        return response.text();
      }).then(function (text) {
        console.log('delete request completed: ', text);
        getregistrations(dispatch);
      });
    }
  
    /* EVENT REQUESTS 
    getEvents = ( dispatch ) => {
      let myHeaders = new Headers(
        { "Content-Type": "application/json",
          "Authorization": "Bearer " + window.token
        });
      var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
      let promise = fetch("/api/events", myInit);
      promise.then((response) => {
        return response.text();
      }).then(function (text) {
        console.log('Request successful: ', text);
        let events = JSON.parse(text);
        dispatch(applyEventsUpdate(events));
      });
    }
    */
  
      postEvent = ( dispatch, event ) => {
          let url = "/api/events/";
      let body = JSON.stringify(event);
      let myHeaders = new Headers({ "Content-Type": "application/json"});
          var myInit = {
        method: 'POST',
        headers: myHeaders,
            body: body,
            mode: 'cors'
      };
      console.log("postEVENT.myInit: " + JSON.stringify(myInit));
          let getevents = this.getEvents;
          let promise = fetch(url, myInit);
          promise.then((response) => {
            return response.text();
          }).then(function (text) {
            console.log('put request completed: ', text);
            getevents(dispatch);
          });
      }
  
    deleteEvent = ( dispatch, event ) =>  {
      let url = "/api/events/" + event.id;
      let myHeaders = new Headers(
        { "Content-Type": "application/json"//,
          // "Authorization": "Bearer " + window.token
        });
      var myInit = { method: 'DELETE', headers: myHeaders, mode: 'cors' };
      let getevents = this.getEvents;
      let promise = fetch(url, myInit);
      promise.then((response) => {
        return response.text();
      }).then(function (text) {
        console.log('delete request completed: ', text);
        getevents(dispatch);
      });
    }
  
    /* EMPLOYEE REQUESTS */
    getEmployees = ( dispatch) => {
      // var myInit = { method: 'GET', headers: this.myHeaders, mode: 'cors' };
      var myInit = { method: 'GET', mode: 'cors' };
      let promise = fetch("/api/employees", myInit);
      promise.then((response) => {
        return response.text();
      }).then(function (text) {
        console.log('getEmployees Request successful: ', text);
        let employees = JSON.parse(text);
        dispatch(applyEmployeesUpdate(employees));
      });
    }

    getEmployee = (dispatch) => {
      // var myInit = { method: 'GET', headers: this.myHeaders, mode: 'cors' };
      var myInit = { method: 'GET', mode: 'cors' };
      let promise = fetch(`/api/employees/byname/${dispatch}`, myInit);
      promise.then((response) => {
        return response.text();
      }).then(function (text) {
        console.log('getEmployee Request successful: ', text);
        let employee = JSON.parse(text);
        dispatch(applyEmployeesUpdate(employee));
      });
    }
  
    lookupEmployeeByName = ( username ) => {
      let url = "/api/employees/byname";
      let body = username;
  
      var myInit = {
        method: 'POST',
        body: body,
        headers: this.myHeaders,
        mode: 'cors'
      };
      let promise = fetch(url, myInit);
      let promise2 = promise.then(
        (response) => {
          console.log('lookupEmployeeByName.promise2: ', JSON.stringify(response));
          return response.text();
        },
        (error) => {
          console.log('lookupEmployeeByName.promise2.error: ', JSON.stringify(error));
          return error.text();
        }
      );
      return promise2;
    }
  
  
      postEmployee = ( dispatch, employee ) => {
          let url = "/api/employees/";
          let body = JSON.stringify(employee);
      let myHeaders = new Headers({ "Content-Type": "application/json" });
          var myInit = {
            method: 'POST',
            body: body,
            headers: myHeaders,
            mode: 'cors'
          };
          let getemployees = this.getEmployees;
          let promise = fetch(url, myInit);
          promise.then((response) => {
            return response.text();
          }).then(function (text) {
            console.log('put request completed: ', text);
            getemployees(dispatch);
          });
      }
  
    deleteEmployee = ( dispatch, employee ) => {
      let url = "/api/employees/" + employee.id;
      var myInit = { method: 'DELETE', headers: this.myHeaders, mode: 'cors' };
      let getemployees = this.getEmployees;
      let promise = fetch(url, myInit);
      promise.then((response) => {
        return response.text();
      }).then(function (text) {
        console.log('delete request completed: ', text);
        getemployees(dispatch);
      });
    }
  
  }
  
  export default RestAPI;
  
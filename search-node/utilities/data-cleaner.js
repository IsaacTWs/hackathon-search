import Employee from '../models/employee.js'
import registrationRouter from '../routes/registration-routes.js'

const dataCleaner = {

  cleanEmployee: ( employee ) => {
    return {
      id: employee.EMPLOYEE_ID,
      name: employee.EMPLOYEE_NAME,
      password: employee.PASSWORD,
      email: employee.EMAIL, 
      role: employee.ROLE,
      phone: employee.PHONE,
      location: employee.LOCATION,
      salary: employee.SALARY,
      manager: employee.MANAGER
    
    }
  }, 

  cleanEmployees: ( employees ) => {
    var results = []
    for( const c in employees) {
      results.push(dataCleaner.cleanEmployee(employees[c]))
    }
    return results
  },

  cleanRegistration: ( registration ) => {
    return {
      id: registration.REGISTRATION_ID,
      event_id: registration.EVENT_ID,
      employee_id: registration.EMPLOYEE_ID,
      registration_date: registration.REGISTRATION_DATE,
      notes: registration.NOTES
    }
  }, 

  cleanRegistrations: ( registrations ) => {
    var results = []
    for( const r in registrations) {
      results.push(dataCleaner.cleanRegistration(registrations[r]))
    }
    return results
  } 



}

export default dataCleaner
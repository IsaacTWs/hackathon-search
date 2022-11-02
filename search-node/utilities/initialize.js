import mongoose from 'mongoose'
import Employee from '../models/employee.js'

function dropCollections() {

  Employee.collection.drop()
    .then(
      ()=>console.log('dropped Employee collection'),
      ()=>console.log('no Employee collection')
    );
// 
//   Event.collection.drop()
//     .then(
//       ()=>console.log('dropped Event collection'),
//       ()=>console.log('no Event collection')
//     );

//   Registration.collection.drop()
//     .then(
//       ()=>console.log('dropped Registration collection'),
//       ()=>console.log('no Registration collection')
//     );
// 
  }

  function populateCollections() {

    // This code resets the counter for each collection and creates a few dummy documents
    // Because these methods are asynchronous, the 'then' clauses are changed so they execute
    // in order. This is necessary because the id fields are generated and if the create
    // (insert) methods were invoked asynchronously the ids would not be deterministic.  
    //
    // A more elegant (and complicated solution) would have been to use an array of functions
    // and map/reduce  

    Employee.counterReset('EMPLOYEE_ID', 
      () => { Employee.create({ EMPLOYEE_NAME: 'John', PASSWORD: 'heyjude',EMAIL: 'john@fabfour.com',PHONE: '860-123-4567', ROLE: 'Software Engineer', LOCATION: 'Hartford, CT', SALARY: 100, MANAGER: 'Paul'}).then(
        () => Employee.create({ EMPLOYEE_NAME: 'Paul', PASSWORD: 'heyjude',EMAIL: 'paul@fabfour.com',PHONE: '860-133-4567', ROLE: 'Manager', LOCATION: 'Hartford, CT', SALARY: 100, MANAGER: 'George'})).then(
          () => Employee.create({ EMPLOYEE_NAME: 'George', PASSWORD: 'heyjude',EMAIL: 'george@fabfour.com',PHONE: '860-143-4567', ROLE: 'HR', LOCATION: 'Hartford, CT', SALARY: 100, MANAGER: 'Ringo'})).then(
            () =>Employee.create({ EMPLOYEE_NAME: 'Ringo', PASSWORD: 'heyjude',EMAIL: 'ringo@fabfour.com',PHONE: '860-153-4567', ROLE: 'Software Engineer', LOCATION: 'Hartford, CT', SALARY: 100, MANAGER: 'Paul'}))})
    
    // Registration.counterReset('REGISTRATION_ID',

    //   () => {Registration.create({
    //     EVENT_ID: 1, 
    //     EMPLOYEE_ID: 1, 
    //     REGISTRATION_DATE: '2022-08-15 00:00:00.0', 
    //     NOTES: 'please email me the event details'
    //   }).then(

    //     () => Registration.create({
    //       EVENT_ID: 1, 
    //       EMPLOYEE_ID: 2, 
    //       REGISTRATION_DATE: '2022-09-20 00:00:00.0', 
    //       NOTES: 'looking for info on local hotels'
    //     })).then(

    //       () => Registration.create({
    //         EVENT_ID: 1, 
    //         EMPLOYEE_ID: 3, 
    //         REGISTRATION_DATE: '2022-11-4 00:00:00.0', 
    //         NOTES: 'n/a'
    //       }))})
  }
 
  export default async function init_db() {
    
    await mongoose.connect('mongodb://127.0.0.1:27017/employees')

    dropCollections()
    populateCollections() 
    
  } 
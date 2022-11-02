import Employee from '../models/employee.js'
import dataCleaner from '../utilities/data-cleaner.js'

const employeeController = {
  
  // GET /api/employees/
  getAllEmployees: function(req, res) {
    Employee.find({}, '', function(err, employees){
      if(err|| !employees || employees.length === 0 ) {
        res.sendStatus(404)
      } else {
        res.status(200).send(dataCleaner.cleanEmployees(employees))
      }
    }) 
  }, 

  // GET /api/employees/:employee_id
  getEmployeeByID: function(req, res) {
    Employee.findOne({'EMPLOYEE_ID': req.params.employee_id}, '', function(err, employee){
      if(err || ! employee) {
        res.sendStatus(404)
      } else {
        res.status(200).send(dataCleaner.cleanEmployee(employee))
      }
    })
  },

  // POST /api/employees/
  postEmployee: function(req, res) {
    Employee.create({ EMPLOYEE_NAME: req.body.name, PASSWORD: req.body.password, EMAIL: req.body.email, PHONE: req.body.phone, ROLE: req.body.role, LOCATION: req.body.location, SALARY: req.body.salary, MANAGER: req.body.manager}).then(
      (c) => { 
        res.location(`/api/employees/${c.EMPLOYEE_ID}`)
        res.sendStatus(201)
      }, // OK
      () => res.sendStatus(500) // Error
    )
  },

  // GET /api/employees/byname/:employee_name
  getEmployeeByName: function(req, res) {
    Employee.findOne({'EMPLOYEE_NAME': req.params.employee_name}, '', function(err, employee){
      if(err || ! employee) {
        res.sendStatus(404)
      } else {
        res.status(200).send(dataCleaner.cleanEmployee(employee))
      }
    })
  },

  // DELETE /api/employees/:employee_id
  deleteEmployeeByID: function(req, res) {
    Employee.deleteOne({'EMPLOYEE_ID': req.params.employee_id}, function(err){
      if(err) {
        res.sendStatus(500)
      } else {
        res.sendStatus(200)
      }
    })
  }

} 

export default employeeController

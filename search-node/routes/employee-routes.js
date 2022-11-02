import express from 'express'
import employeeController from '../controllers/employee-controller.js'
var employeeRouter = express.Router()

employeeRouter.get('/', function(req, res) {
  employeeController.getAllEmployees(req, res)
})

employeeRouter.get('/:employee_id', function(req, res) {
  employeeController.getEmployeeByID(req, res)
})

employeeRouter.post('/', function(req, res) {
  employeeController.postEmployee(req, res)
})

employeeRouter.get('/byname/:employee_name', function(req, res) {
  employeeController.getEmployeeByName(req, res)
})

employeeRouter.delete('/:employee_id', function(req, res) {
  employeeController.deleteEmployeeByID(req, res)
})

export default employeeRouter
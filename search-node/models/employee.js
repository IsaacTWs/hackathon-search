import mongoose from 'mongoose'
import s from 'mongoose-sequence'
const sequence = s(mongoose)

const { Schema, model } = mongoose

const employeeSchema = new Schema({
  EMPLOYEE_ID: Number,
  EMPLOYEE_NAME: String,
  PASSWORD: String,
  EMAIL: String,
  PHONE: String,
  ROLE: String,
  LOCATION: String,
  SALARY: Number,
  MANAGER: String
})

employeeSchema.plugin(sequence, {inc_field: 'EMPLOYEE_ID'}) 

const Employee = model('Employee', employeeSchema )
export default Employee
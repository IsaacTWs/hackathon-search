import init_db from './utilities/initialize.js'
import express from 'express'
import accountRouter from './routes/account-routes.js'
import employeeRouter from './routes/employee-routes.js'
// import registrationRouter from './routes/registration-routes.js'

init_db()

var app = express()
app.use(express.json())

app.use('/api/accounts', accountRouter)
app.use('/api/employees', employeeRouter)
//app.use('/api/registration', registrationRouter)

app.listen('8000');

console.log('server started') 
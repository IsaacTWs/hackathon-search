import express from 'express'
import accountController from '../controllers/account-controller.js'
var accountRouter = express.Router()

accountRouter.post('/login', function(req, res) {
  console.log('/accounts/login')
  accountController.login(req, res)
})

export default accountRouter
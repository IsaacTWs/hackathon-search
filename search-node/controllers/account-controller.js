import Employee from '../models/employee.js'


const accountController = {

  login: function(req, res) {
    Employee.findOne(
      {EMAIL: req.body.email, PASSWORD: req.body.password}, 
      '', 
      function(err, employee){
        if(err || !employee) {
          res.sendStatus(401) // Unauthorized
        } else {
          res.sendStatus(200) // OK
        }
      }
    )
  },

}

export default accountController
const express = require('express')
const app = express.Router()

// Import Routes
const UsersRoute = require('./controllers/users/users.route')
const AuthenRoute = require('./controllers/authen/authen.route')
const LeaveWorkRoute = require('./controllers/leaveWork/leaveWork.route')
app.get('', (req, res)=>{
    res.send('APIs running.')
})

// init routes
app.use('/authen', AuthenRoute)
app.use('/users', UsersRoute)
app.use('/leaveWork',LeaveWorkRoute )
module.exports = app
const primaryRouter = require('express').Router()

//SubRoutes of API
const locationsRouter = require('./public/locations/locations')
const users = require('./private/users/users')
const authPortal = require('./auth/portal')

//Call Errors Last
const errorRouter = require('./errors/errors')

//LOGIN REGISTER
primaryRouter.use('/',authPortal)

//PUBLIC ROUTES
primaryRouter.use('/locations',locationsRouter)

//PRIVATE ROUTES
primaryRouter.use('/users',users)

//Handle any errors coming into API
primaryRouter.use('*',errorRouter)

module.exports = primaryRouter


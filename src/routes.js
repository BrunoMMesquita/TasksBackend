const { Router } = require('express')
const TaskController = require('./controllers/TaskController')
const UserController = require('./controllers/userController')

const routes = Router();

routes.get('/tasks', TaskController.index)
routes.get('/tasks/:id', TaskController.find)
routes.post('/tasks', TaskController.Store)
routes.put('/tasks/:id', TaskController.Update)
routes.delete('/tasks/:id', TaskController.Delete)
routes.get('/user', UserController.index)
routes.get('/user/:id', UserController.find)
routes.post('/user', UserController.Store)
routes.post('/user/isValid', UserController.isValid)
routes.put('/user/:id', UserController.Update)
routes.delete('/user/:id', UserController.Delete)

module.exports = routes;
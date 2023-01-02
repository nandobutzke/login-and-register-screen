const { Router } = require('express');
const UserController = require('../app/controllers/UserController');
const ensureAuthenticated = require('../app/middlewares/ensureAuthenticated');

const userRouter = Router();

userRouter.use(ensureAuthenticated);
userRouter.get('/users', UserController.index);

module.exports = userRouter;

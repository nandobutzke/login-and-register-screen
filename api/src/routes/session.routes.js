const { Router } = require('express');
const UserController = require('../app/controllers/UserController');
const AuthenticateUserService = require('../app/services/AuthenticateUserService');

const router = Router();

router.post('/sessions', AuthenticateUserService.execute);
router.post('/users', UserController.store);

module.exports = router;

const express = require('express');
const validator = require('express-joi-validation').createValidator({});

const authReqValidators = require('../validator/authRequest');

const router = express.Router();

const authControllers = require('../controllers/auth/authControllers');

const isAuthenticated = require('../middlewares/authenticated');
router.post(
  '/register',
  validator.body(authReqValidators.authValidator.registerReqSchema),
  authControllers.controllers.postRegister
);

router.post(
  '/login',
  validator.body(authReqValidators.authValidator.loginReqSchema),
  authControllers.controllers.postLogin
);

module.exports = router;

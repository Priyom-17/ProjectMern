const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../middleware/AuthValidation');

const router = require('express').Router;

router.post('/signup',signupValidation,signup);
router.post('/login0',loginValidation,login);

module.exports=router;
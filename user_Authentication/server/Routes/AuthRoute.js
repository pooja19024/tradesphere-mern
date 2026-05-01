const { Signup, Login } = require('../Controllers/AuthController');
const router = require('express').Router();


// Public authentication routes
router.post('/signup', Signup);
router.post('/login', Login);


module.exports = router;
const Router = require('express').Router;
const router = new Router();
const AuthController = require('../controllers/AuthController');
const auth = require('../middleware/authMiddleware');

router.post('/registration', AuthController.registration);
router.post('/login', AuthController.login);
router.get('/check', auth, AuthController.check);

module.exports = router;

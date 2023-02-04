const Router = require('express').Router;
const AccountController = require('../controllers/AccountController');
const authMiddleware = require('../middleware/authMiddleware');
const router = new Router();

router.get('/', authMiddleware, AccountController.getInfo);

module.exports = router;

const Router = require('express').Router;
const AccountController = require('../controllers/AccountController');
const authMiddleware = require('../middleware/authMiddleware');
const router = new Router();

router.get('/', authMiddleware, AccountController.getInfo);
router.patch('/solved', authMiddleware, AccountController.addSolvedKata);
router.patch('/trained', authMiddleware, AccountController.addTrainedKata);

module.exports = router;

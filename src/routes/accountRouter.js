const Router = require('express').Router;
const AccountController = require('../controllers/AccountController');
const authMiddleware = require('../middleware/authMiddleware');
const router = new Router();

router.get('/', authMiddleware, AccountController.getInfo);
router.delete('/', authMiddleware, AccountController.delete);
router.patch('/edit', authMiddleware, AccountController.edit);
router.patch('/solved', authMiddleware, AccountController.addSolvedKata);
router.patch('/trained', authMiddleware, AccountController.addTrainedKata);
router.patch('/starred', authMiddleware, AccountController.addStarredKata);
router.patch('/forfeited', authMiddleware, AccountController.addForfeitedKata);

module.exports = router;

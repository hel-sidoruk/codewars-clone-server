const Router = require('express').Router;
const NotificationsController = require('../controllers/NotificationsController');
const authMiddleware = require('../middleware/authMiddleware');
const router = new Router();

router.get('/', authMiddleware, NotificationsController.getAll);
router.post('/', authMiddleware, NotificationsController.create);
router.delete('/:id', authMiddleware, NotificationsController.delete);

module.exports = router;

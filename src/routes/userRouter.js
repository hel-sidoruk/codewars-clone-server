const Router = require('express').Router;
const UserController = require('../controllers/UserController');
const router = new Router();

router.post('/', UserController.create);
router.get('/', UserController.getAll);
router.get('/:id', UserController.getOne);

module.exports = router;

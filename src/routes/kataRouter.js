const Router = require('express').Router;
const router = new Router();
const KataController = require('../controllers/KataController');

router.post('/', KataController.create);
router.get('/', KataController.getAll);
router.get('/:id', KataController.getOne);

module.exports = router;

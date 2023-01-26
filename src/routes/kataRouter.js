const Router = require('express').Router;
const router = new Router();
const KataController = require('../controllers/KataController');
const DiscussController = require('../controllers/DiscussController');

router.post('/', KataController.create);
router.get('/', KataController.getAll);
router.get('/:id', KataController.getOne);
router.get('/:id/discuss', DiscussController.getComments);
router.post('/:id/discuss', DiscussController.createComment);
router.patch('/:id/discuss/:commentId', DiscussController.updateComment);

module.exports = router;

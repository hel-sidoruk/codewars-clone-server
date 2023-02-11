const Router = require('express').Router;
const router = new Router();
const KataController = require('../controllers/KataController');
const DiscussController = require('../controllers/DiscussController');
const SolutionsController = require('../controllers/SolutionsController');

router.post('/', KataController.create);
router.get('/', KataController.getAll);
router.get('/:id', KataController.getOne);
router.get('/:id/discuss', DiscussController.getComments);
router.post('/:id/discuss', DiscussController.createComment);
router.patch('/:id/discuss/:commentId', DiscussController.updateComment);
router.delete('/:id/discuss/:commentId', DiscussController.deleteComment);
router.get('/:kataId/solutions', SolutionsController.getSolutions);
router.post('/:kataId/solutions', SolutionsController.addSolution);
router.patch(
  '/:kataId/solutions/:solutionId',
  SolutionsController.updateSolution
);

module.exports = router;

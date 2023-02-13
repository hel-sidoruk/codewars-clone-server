const Router = require('express').Router;
const SolutionsController = require('../controllers/SolutionsController');
const authMiddleware = require('../middleware/authMiddleware');
const router = new Router();

router.get('/', authMiddleware, SolutionsController.getUserSolutions);

module.exports = router;

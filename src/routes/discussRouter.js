const Router = require('express').Router;
const DiscussController = require('../controllers/DiscussController');
const router = new Router();

router.get('/:id', DiscussController.getUserComments);

module.exports = router;

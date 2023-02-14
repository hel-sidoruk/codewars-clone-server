const Router = require('express').Router;
const FollowersController = require('../controllers/FollowersController');
const authMiddleware = require('../middleware/authMiddleware');
const router = new Router();

router.get('/:username/following', FollowersController.getFollowing);
router.get('/:username/followers', FollowersController.getFollowers);
router.get('/check', authMiddleware, FollowersController.check);
router.post('/', authMiddleware, FollowersController.create);
router.delete('/:id', authMiddleware, FollowersController.delete);

module.exports = router;

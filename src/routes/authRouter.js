const Router = require('express').Router;
const router = new Router();
const AuthController = require('../controllers/AuthController');
const GithubAuthController = require('../controllers/GithubAuthController');
const auth = require('../middleware/authMiddleware');
const githubAuth = require('../middleware/githubAuthMiddleware');

router.post('/registration', AuthController.registration);
router.post('/login', AuthController.login);
router.get('/check', auth, AuthController.check);
router.get(
  '/github-registration',
  githubAuth,
  GithubAuthController.registration
);
router.get('/github-login', githubAuth, GithubAuthController.login);

module.exports = router;

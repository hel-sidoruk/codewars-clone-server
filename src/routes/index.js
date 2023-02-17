const Router = require('express').Router;
const kataRouter = require('./kataRouter');
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const accountRouter = require('./accountRouter');
const notificationsRouter = require('./notificationsRouter');
const solutionsRouter = require('./solutionsRouter');
const followersRouter = require('./followersRouter');
const discussRouter = require('./discussRouter');

const router = new Router();

router.use('/kata', kataRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/account', accountRouter);
router.use('/notifications', notificationsRouter);
router.use('/solutions', solutionsRouter);
router.use('/social', followersRouter);
router.use('/discuss', discussRouter);

module.exports = router;

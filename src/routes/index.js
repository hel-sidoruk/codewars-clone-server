const Router = require('express').Router;
const kataRouter = require('./kataRouter');
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');

const router = new Router();

router.use('/kata', kataRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);

module.exports = router;

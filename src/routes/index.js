const Router = require('express').Router;
const kataRouter = require('./kataRouter');
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const accountRouter = require('./accountRouter');

const router = new Router();

router.use('/kata', kataRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);
router.use('/account', accountRouter);

module.exports = router;

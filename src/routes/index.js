const Router = require('express').Router;
const kataRouter = require('./kataRouter');
const userRouter = require('./userRouter');

const router = new Router();

router.use('/kata', kataRouter);
router.use('/user', userRouter);

module.exports = router;

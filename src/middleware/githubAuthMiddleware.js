const ApiError = require('../error/ApiError');
const { getGithubAccessToken } = require('../utils/getGithubAccessToken');
const { getGithubUser } = require('../utils/getGithubUser');

module.exports = async function (req, res, next) {
  const { code, option } = req.query;
  if (!code) return next(ApiError.unauthorized());
  try {
    const result = await getGithubAccessToken(code, option);
    if (!result.access_token) return res.status(401).json(result);
    const userData = await getGithubUser(result.access_token);

    if (!userData.login) return next(ApiError.unauthorized());
    req.user = userData;
    next();
  } catch (error) {
    next(ApiError.unauthorized());
  }
};

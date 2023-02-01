const ApiError = require('../error/ApiError');
const { Accounts, Users } = require('../models/models');
const jwt = require('jsonwebtoken');
const { fetchCodewarsUser } = require('../utils/fetchCodewarsUser');

const generateJwt = (username) => {
  return jwt.sign({ username }, process.env.SECRET_KEY, {
    expiresIn: '7d',
  });
};

class GithubAuthController {
  async registration(req, res, next) {
    const { login, avatar_url, id } = req.user;
    const candidate = await Accounts.findOne({
      where: { github: login },
    });
    if (candidate) return next(ApiError.forbidden('User already exists'));
    try {
      const codewarsUser = await fetchCodewarsUser(login);
      await Users.create({
        id: codewarsUser ? codewarsUser.id : id.toString(),
        username: codewarsUser ? codewarsUser.username : login,
        honor: codewarsUser ? codewarsUser.honor : 0,
        totalCompleted: codewarsUser
          ? codewarsUser.codeChallenges.totalCompleted
          : 0,
        rank: codewarsUser ? codewarsUser.ranks.overall.name : '8 kyu',
        leaderboardPosition: codewarsUser
          ? codewarsUser.leaderboardPosition
          : null,
        score: codewarsUser ? codewarsUser.ranks.overall.score : 0,
      });

      const account = await Accounts.create({
        id: id.toString(),
        username: login,
        avatar: avatar_url,
        github: login,
      });

      const token = generateJwt(account.username);
      return res.status(200).json({ token });
    } catch (error) {
      return next(ApiError.unauthorized(error.toString()));
    }
  }

  async login(req, res, next) {
    const { login } = req.user;
    const user = await Accounts.findOne({
      where: { github: login },
    });
    if (!user) return next(ApiError.forbidden('User not found'));
    const token = generateJwt(user.username);
    return res.status(200).json({ token });
  }
}

module.exports = new GithubAuthController();

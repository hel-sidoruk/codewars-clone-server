const jwt = require('jsonwebtoken');
const { nanoid } = require('nanoid');
const ApiError = require('../error/ApiError');
const { Users } = require('../models/models');
const { fetchCodewarsUser } = require('../utils/fetchCodewarsUser');

const generateJwt = (username) => {
  return jwt.sign({ username }, process.env.SECRET_KEY, {
    expiresIn: '7d',
  });
};

class AuthController {
  async registration(req, res, next) {
    const { username } = req.body;
    if (!username) {
      return next(ApiError.badRequest('No username'));
    }
    const candidate = await Users.findOne({ where: { username } });
    const codewarsUser = await fetchCodewarsUser(username);
    if (candidate || codewarsUser.id) {
      return next(ApiError.forbidden('User with this name already exists'));
    }
    const user = await Users.create({
      id: nanoid(),
      username,
      honor: 0,
      totalCompleted: 0,
      rank: '8 kyu',
      score: 0,
    });
    console.log('NEW USER', user);
    const token = generateJwt(username);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { username } = req.body;
    const user = await Users.findOne({ where: { username } });
    if (user) {
      const token = generateJwt(username);
      return res.json({ token });
    }
    const codewarsUser = await fetchCodewarsUser(username);
    if (codewarsUser.id) {
      await Users.create({
        id: codewarsUser.id,
        name: codewarsUser.name,
        leaderboardPosition: codewarsUser.leaderboardPosition,
        username: username,
        honor: codewarsUser.honor,
        clan: codewarsUser.clan,
        totalCompleted: codewarsUser.codeChallenges.totalCompleted,
        rank: codewarsUser.ranks.overall.name,
        score: codewarsUser.ranks.overall.score,
      });

      const token = generateJwt(username);
      return res.json({ token });
    }
    return next(ApiError.forbidden('User not found'));
  }

  async check(req, res) {
    const token = generateJwt(req.user.username);
    return res.json({ token });
  }
}

module.exports = new AuthController();

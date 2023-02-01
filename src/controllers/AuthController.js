const jwt = require('jsonwebtoken');
const { nanoid } = require('nanoid');
const ApiError = require('../error/ApiError');
const { Users, Accounts } = require('../models/models');
const { fetchCodewarsUser } = require('../utils/fetchCodewarsUser');
const bcrypt = require('bcrypt');

const generateJwt = (username) => {
  return jwt.sign({ username }, process.env.SECRET_KEY, {
    expiresIn: '7d',
  });
};

class AuthController {
  async registration(req, res, next) {
    const { username, password } = req.body;
    if (!username) return next(ApiError.unauthorized('Username is required'));
    if (!password) return next(ApiError.unauthorized('Password is required'));

    const candidate = await Accounts.findOne({ where: { username } });
    if (candidate)
      return next(ApiError.forbidden('User with this username already exists'));

    const hashPassword = await bcrypt.hash(password, 5);

    const codewarsUser = await fetchCodewarsUser(username);
    await Users.create({
      id: codewarsUser ? codewarsUser.id : account.id,
      username: codewarsUser ? codewarsUser.username : username,
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
      id: nanoid(),
      username,
      password: hashPassword,
    });

    const token = generateJwt(account.username);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { username, password } = req.body;
    if (!username) return next(ApiError.unauthorized('Username is required'));
    if (!password) return next(ApiError.unauthorized('Password is required'));

    const user = await Accounts.findOne({ where: { username } });
    if (!user) return next(ApiError.unauthorized('User not found'));

    if (!bcrypt.compareSync(password, user.password))
      return next(ApiError.forbidden('Wrong password'));

    const token = generateJwt(username);
    return res.json({ token });
  }

  async check(req, res) {
    const token = generateJwt(req.user.username);
    return res.json({ token });
  }
}

module.exports = new AuthController();

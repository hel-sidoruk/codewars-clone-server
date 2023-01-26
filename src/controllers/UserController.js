const ApiError = require('../error/ApiError');
const { Users } = require('../models/models');

class UserController {
  async getAll(req, res) {
    const data = await Users.findAll();
    return res.json(data);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const user = await Users.findOne({ where: { id } });
    return res.json(user);
  }

  async create(req, res, next) {
    try {
      const data = req.body;

      const user = await Users.create({
        id: data.id,
        name: data.name,
        leaderboardPosition: data.leaderboardPosition,
        username: data.username,
        honor: data.honor,
        clan: data.clan,
        totalCompleted: data.totalCompleted,
        rank: data.rank,
        score: data.score,
      });

      return res.json(user);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new UserController();

const ApiError = require('../error/ApiError');
const { Users } = require('../models/models');

class UserController {
  async getAll(req, res) {
    const data = await Users.findAll({
      order: [['leaderboardPosition', 'ASC']],
    });
    return res.json(data);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const user = await Users.findOne({ where: { username: id } });
    return user
      ? res.status(200).json(user)
      : res.status(404).json({ message: 'User not found' });
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

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const updates = req.body;

      if (!Object.keys(updates).length) return res.json('No params to update');

      await Users.update(updates, {
        where: {
          username: id,
        },
      });

      return res.json({ status: 'ok' });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new UserController();

const { nanoid } = require('nanoid');
const ApiError = require('../error/ApiError');
const { Solutions } = require('../models/models');

class SolutionsController {
  async getSolutions(req, res) {
    const { kataId } = req.params;
    const { username } = req.query;
    if (username) {
      const solutions = await Solutions.findAll({
        where: { kataId, username },
      });
      return res.json(solutions);
    }
    const solutions = await Solutions.findAll({
      where: { kataId },
    });
    return res.json(solutions);
  }

  async getUserSolutions(req, res) {
    const { username } = req.user;
    const solutions = await Solutions.findAll({
      where: { username },
      order: [['createdAt', 'DESC']],
    });
    return res.json(solutions);
  }

  async addSolution(req, res, next) {
    try {
      const { kataId } = req.params;
      const data = req.body;

      const solution = await Solutions.create({
        id: nanoid(),
        kataId,
        kataRank: data.rank,
        kataName: data.name,
        username: data.username,
        solution: data.solution,
        createdAt: new Date(Date.now()).toISOString(),
      });

      return res.json(solution);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async updateSolution(req, res, next) {
    try {
      const { solutionId } = req.params;
      const updates = req.body;

      if (!Object.keys(updates).length) return res.json('No params to update');

      await Solutions.update(updates, {
        where: {
          id: solutionId,
        },
      });

      return res.json({ status: 'ok' });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new SolutionsController();

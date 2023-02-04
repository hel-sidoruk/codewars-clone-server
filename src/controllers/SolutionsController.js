const ApiError = require('../error/ApiError');
const { Solutions } = require('../models/models');

class SolutionsController {
  async getSolutions(req, res) {
    const { kataId } = req.params;
    const solutions = await Solutions.findAll({
      where: { kataId },
    });
    return res.json(solutions);
  }

  async addSolution(req, res, next) {
    try {
      const { kataId } = req.params;
      const data = req.body;

      const solution = await Solutions.create({
        kataId,
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

const ApiError = require('../error/ApiError');
const { Challenges } = require('../models/models');

class KataController {
  async getAll(req, res) {
    let challenges = await Challenges.findAll();
    return res.json(challenges);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const kata = await Challenges.findOne({ where: { id } });
    return res.json(kata);
  }

  async create(req, res, next) {
    try {
      const data = req.body;

      const kata = await Challenges.create({
        id: data.id,
        name: data.name,
        description: data.description,
        totalAttempts: data.totalAttempts,
        totalCompleted: data.totalCompleted,
        totalStars: data.totalStars,
        slug: data.slug,
        publishedAt: data.publishedAt,
        createdAt: data.createdAt,
        rank: data.rank,
        category: data.category,
        tags: data.tags,
        createdBy: data.createdBy,
      });

      return res.json(kata);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new KataController();

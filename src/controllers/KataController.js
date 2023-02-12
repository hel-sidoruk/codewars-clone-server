const ApiError = require('../error/ApiError');
const { Challenges, Accounts } = require('../models/models');
const { Op } = require('sequelize');
const { getSortOption } = require('../utils/getSortOption');

class KataController {
  async getAll(req, res) {
    let { page } = req.query;
    const { search, sort, difficulty, tags, progress } = req.query;
    const { username } = req.user;
    const order = getSortOption(sort);

    if (!page) page = 1;
    const limit = 10;
    const offset = page * limit - limit;

    const account = await Accounts.findOne({ where: { username } });
    const progressOption =
      progress === 'not completed'
        ? account.trainedKatas
        : progress === 'completed'
        ? account.solvedKatas
        : [];
    const trained =
      progress === 'not trained'
        ? [...account.trainedKatas, ...account.solvedKatas]
        : null;

    const katas = await Challenges.findAndCountAll({
      attributes: { exclude: ['newTags'] },
      limit,
      offset,
      order,
      where: {
        id: trained ? { [Op.notIn]: trained } : { [Op.or]: progressOption },
        name: { [Op.iLike]: search ? `%${search}%` : '%' },
        rank: { [Op.or]: difficulty ? difficulty.split('*') : [] },
        newTags: {
          [Op.and]: tags
            ? tags.split('*').map((el) => ({ [Op.iLike]: `%${el}%` }))
            : [],
        },
      },
    });

    return res.json(katas);
  }

  async getSimilar(req, res) {
    const { limit, tags } = req.query;
    const tagsArr = tags.split(',');

    const katas = await Challenges.findAll({
      attributes: { exclude: ['newTags'] },
      limit,
      where: {
        newTags: { [Op.or]: tagsArr.map((el) => ({ [Op.iLike]: `%${el}%` })) },
      },
      order: Challenges.sequelize.random(),
    });

    return res.json(katas);
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

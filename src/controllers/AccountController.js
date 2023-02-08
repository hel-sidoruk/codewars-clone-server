const ApiError = require('../error/ApiError');
const { Accounts, Challenges } = require('../models/models');

class AccountController {
  async getInfo(req, res) {
    const { username } = req.user;
    const data = await Accounts.findOne({ where: { username } });
    return res.json(data);
  }

  async addSolvedKata(req, res, next) {
    try {
      const { username } = req.user;
      const accountData = await Accounts.findOne({ where: { username } });
      const { kataId } = req.body;

      let { solvedKatas, trainedKatas } = accountData;
      if (!kataId) return next(ApiError.badRequest('No kata id provided'));
      if (solvedKatas.includes(kataId))
        return res.json({ message: 'Kata already solved' });
      trainedKatas = trainedKatas.filter((kata) => kata !== kataId);

      solvedKatas.push(kataId);

      await Accounts.update(
        { solvedKatas, trainedKatas },
        {
          where: {
            username,
          },
        }
      );

      return res.json({ status: 'ok' });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async addTrainedKata(req, res, next) {
    try {
      const { username } = req.user;
      const accountData = await Accounts.findOne({ where: { username } });
      const { kataId } = req.body;

      const { trainedKatas } = accountData;
      if (!kataId) return next(ApiError.badRequest('No kata id provided'));
      if (trainedKatas.includes(kataId))
        return res.json({ message: 'Kata already trained' });

      trainedKatas.push(kataId);

      await Accounts.update(
        { trainedKatas },
        {
          where: {
            username,
          },
        }
      );

      return res.json({ status: 'ok' });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async addForfeitedKata(req, res, next) {
    try {
      const { username } = req.user;
      const accountData = await Accounts.findOne({ where: { username } });
      const { kataId } = req.body;

      const { forfeitedKatas } = accountData;
      if (!kataId) return next(ApiError.badRequest('No kata id provided'));
      if (forfeitedKatas.includes(kataId))
        return res.json({ message: 'Kata already in list' });

      forfeitedKatas.push(kataId);

      await Accounts.update(
        { forfeitedKatas },
        {
          where: {
            username,
          },
        }
      );

      return res.json({ status: 'ok' });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async addStarredKata(req, res, next) {
    try {
      const { username } = req.user;
      const accountData = await Accounts.findOne({ where: { username } });
      const { kataId, stars } = req.body;

      let { starredKatas } = accountData;
      if (!kataId) return next(ApiError.badRequest('No kata id provided'));
      const starsCount = starredKatas.includes(kataId) ? stars - 1 : stars + 1;
      if (starredKatas.includes(kataId))
        starredKatas = starredKatas.filter((el) => el !== kataId);
      else starredKatas.push(kataId);

      await Accounts.update(
        { starredKatas },
        {
          where: {
            username,
          },
        }
      );

      await Challenges.update(
        { totalStars: starsCount },
        {
          where: { id: kataId },
        }
      );

      return res.json({ status: 'ok' });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new AccountController();

const ApiError = require('../error/ApiError');
const { Accounts } = require('../models/models');

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
}

module.exports = new AccountController();

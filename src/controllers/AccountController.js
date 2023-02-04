const { Accounts } = require('../models/models');

class AccountController {
  async getInfo(req, res) {
    const { username } = req.user;
    const data = await Accounts.findOne({ where: { username } });
    return res.json(data);
  }
}

module.exports = new AccountController();

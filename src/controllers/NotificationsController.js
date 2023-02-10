const { nanoid } = require('nanoid');
const ApiError = require('../error/ApiError');
const { Notifications } = require('../models/models');

class NotificationsController {
  async getAll(req, res) {
    const { username } = req.user;
    const notifications = await Notifications.findAll({
      where: { username },
    });
    return res.json(notifications);
  }

  async create(req, res, next) {
    try {
      const { username } = req.user;
      const { text } = req.body;

      const notification = await Notifications.create({
        id: nanoid(),
        username,
        text,
        createdAt: new Date(Date.now()).toISOString(),
      });

      return res.json(notification);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await Notifications.destroy({ where: { id } });

      return res.json({ status: 'ok' });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new NotificationsController();

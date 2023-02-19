const { nanoid } = require('nanoid');
const ApiError = require('../error/ApiError');
const { Followers } = require('../models/models');

class FollowersController {
  async getFollowing(req, res) {
    const { username } = req.params;
    const data = await Followers.findAll({
      attributes: { exclude: ['username'] },
      where: { username },
    });
    return res.json(data);
  }

  async getFollowers(req, res) {
    const { username } = req.params;
    const data = await Followers.findAll({ where: { followUser: username } });
    return res.json(data);
  }

  async create(req, res, next) {
    try {
      const { username } = req.user;
      const { followUser, rank, honor, clan, followerAvatar, followingAvatar } =
        req.body;

      const data = await Followers.create({
        id: nanoid(),
        username,
        followUser,
        rank,
        honor,
        clan,
        followerAvatar,
        followingAvatar,
      });

      return res.json(data);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await Followers.destroy({ where: { id } });

      return res.json({ status: 'ok' });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async check(req, res, next) {
    try {
      const { username } = req.user;
      const { follow } = req.query;

      const followUser = await Followers.findOne({
        attributes: ['id'],
        where: { username, followUser: follow },
      });

      return res.json({ isFollowed: followUser ? followUser.id : false });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new FollowersController();

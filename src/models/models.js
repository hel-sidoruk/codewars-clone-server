const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Challenges = sequelize.define(
  'challenges',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    totalAttempts: { type: DataTypes.INTEGER },
    totalCompleted: { type: DataTypes.INTEGER },
    totalStars: { type: DataTypes.INTEGER },
    slug: { type: DataTypes.STRING, allowNull: false },
    createdBy: { type: DataTypes.STRING },
    publishedAt: { type: DataTypes.DATE },
    createdAt: { type: DataTypes.DATE },
    rank: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING },
    tags: { type: DataTypes.ARRAY(DataTypes.STRING) },
  },
  { timestamps: false }
);

const Users = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: { type: DataTypes.STRING },
    leaderboardPosition: { type: DataTypes.INTEGER },
    username: { type: DataTypes.STRING, allowNull: false },
    honor: { type: DataTypes.INTEGER },
    clan: { type: DataTypes.STRING },
    totalCompleted: { type: DataTypes.INTEGER },
    rank: { type: DataTypes.STRING },
    score: { type: DataTypes.INTEGER },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  Challenges,
  Users,
};

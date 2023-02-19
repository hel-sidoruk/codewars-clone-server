const { Discuss, Users } = require('../models/models');
const { fetchCodewarsUser } = require('./fetchCodewarsUser');

const comments = [
  {
    kataId: '60edafd71dad1800563cf933',
    username: 'MapleMonday',
    rank: '7 kyu',
    text: 'In closures, is the outer function only called once while the inner function is called however many times?',
    label: null,
    avatar: 'https://www.codewars.com/packs/assets/profile-pic.f3a90aca.png',
  },
  {
    kataId: '60edafd71dad1800563cf933',
    username: 'tonzak',
    rank: '4 kyu',
    text: 'The hardest 7 kyu kata for me so far, no joke.',
    label: null,
    avatar: 'https://avatars.githubusercontent.com/u/53830912?s=100',
  },
  // {
  //   kataId: '',
  //   username: '',
  //   rank: 'kyu',
  //   text: '',
  //   label: 'Issue',
  //   avatar: '',
  // },
  // {
  //   kataId: '',
  //   username: '',
  //   rank: 'kyu',
  //   text: '',
  //   label: 'Issue',
  //   avatar: '',
  // },
  // {
  //   kataId: '',
  //   username: '',
  //   rank: 'kyu',
  //   text: '',
  //   label: 'Issue',
  //   avatar: '',
  // },
  // {
  //   kataId: '',
  //   username: '',
  //   rank: 'kyu',
  //   text: '',
  //   label: 'Issue',
  //   avatar: '',
  // },
];

function createComments() {
  comments.map(async ({ kataId, username, rank, text, avatar, label }) => {
    const user = await fetchCodewarsUser(username);
    const candidate = await Users.findOne({ where: { username } });
    if (!candidate && user) {
      const newUser = await Users.create({
        id: user.id,
        username: user.username,
        honor: user.honor,
        totalCompleted: user.codeChallenges.totalCompleted,
        rank: user.ranks.overall.name,
        leaderboardPosition: user.leaderboardPosition,
        score: user.ranks.overall.score,
        avatar,
      });
      console.log('--------------');
      console.log('NEW USER: ', newUser.toJSON());
      console.log('--------------');
    }

    await Discuss.create({
      kataId,
      username,
      rank,
      votes: 0,
      createdAt: new Date(Date.now()).toISOString(),
      spoiler: false,
      text,
      label,
      avatar,
    });
  });
}

module.exports = { createComments };

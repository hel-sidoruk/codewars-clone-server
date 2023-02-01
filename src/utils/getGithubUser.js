const axios = require('axios');

async function getGithubUser(token) {
  try {
    const { data } = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    return { success: false };
  }
}

module.exports = {
  getGithubUser,
};

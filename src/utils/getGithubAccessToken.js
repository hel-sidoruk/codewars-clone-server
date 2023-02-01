const axios = require('axios');

async function getGithubAccessToken(code, option) {
  try {
    const secret =
      option === 'login'
        ? '3e04fe37dca715ed5cc25c75f9492b32583aed2b'
        : '148b29563b229f281b966fd5be15dc5ab8bec703';
    const clientID =
      option === 'login' ? 'b67da247620e2e266ba4' : 'ff8172a4250438893a45';
    const { data } = await axios.post(
      `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${secret}&code=${code}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
      }
    );
    const params = new URLSearchParams(data);
    const result = Object.fromEntries(params.entries());
    return result;
  } catch (error) {
    return { success: false };
  }
}

module.exports = {
  getGithubAccessToken,
};

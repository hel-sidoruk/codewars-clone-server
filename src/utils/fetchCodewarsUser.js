const axios = require('axios');

const URL = 'https://www.codewars.com/api/v1';

async function fetchCodewarsUser(id) {
  try {
    const { data } = await axios.get(`${URL}/users/${id}`);
    return data;
  } catch (error) {
    return { success: false };
  }
}

module.exports = {
  fetchCodewarsUser,
};

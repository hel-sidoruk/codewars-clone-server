function getSortOption(sort) {
  switch (sort) {
    case 'hardest':
      return [['rank', 'ASC']];
    case 'easiest':
      return [['rank', 'DESC']];
    case 'name':
      return [['name', 'ASC']];
    case 'oldest':
      return [['publishedAt', 'ASC']];
    case 'popularity':
      return [['totalStars', 'DESC']];
    default:
      return [['publishedAt', 'DESC']];
  }
}

module.exports = { getSortOption };

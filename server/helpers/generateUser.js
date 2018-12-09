const names = require('../static_data/names'),
      avatars = require('../static_data/avatars');

module.exports = (user_id) => {
    return {
        id: user_id,
        connection_id: user_id,
        isBot: false,
        status: 'online',
        name: getRandomItem(names),
        avatar: getRandomItem(avatars)
    }
};

const getRandomItem = (arr) => {
    const length = arr.length;
    const index = Math.floor(Math.random() * length);
    return arr[index];
};

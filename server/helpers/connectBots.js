const bots = require('../static_data/bots');

module.exports = users => {
    bots.forEach(bot => {
        users.push(bot);
    });
};
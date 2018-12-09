const { echoBot, reverseBot } = require('../helpers/botsFunctionality');

module.exports = (users, messages, client, io) => {
    client.on('message', data => {
        const sender = users.find(item => item.connection_id === client.id);
        const receiver = users.find(item => item.connection_id === data.to);
        const to = io.sockets.connected[data.to];
        const from = io.sockets.connected[client.id];

        if (!sender || !receiver) return;

        data.from = sender.id;

        messages.push({
            ...data,
            from: sender.id,
            to: receiver.id,
            date: new Date()
        });

        if (from) from.emit('message', data);
        switch (data.to) {
            case 'echo_bot': {
                echoBot(messages, from, data);
                break;
            }
            case 'reverse_bot': {
                reverseBot(messages, from, data);
                break;
            }
            default: {
                if (to) {
                    to.emit('message', data);
                }
            }
        }
    });
};
const generateUser = require('../helpers/generateUser');
const parseUserId = require('../helpers/parseUserId');

module.exports = (users, messages, client) => {

    const user_id = parseUserId(client);

    if (!user_id) {
        const new_user = generateUser(client.id);
        users.push(new_user);
        client.emit('me', {'user': new_user});
        client.broadcast.emit('connected', new_user);
    } else {
        const user = users.find(item => item.id === user_id);
        if (!user) {
            const new_user = generateUser(client.id);
            users.push(new_user);
            client.emit('me', {'user': new_user});
            client.broadcast.emit('connected', new_user);
        } else {
            user.connection_id = client.id;
            user.status = 'online';
            client.emit('me', {'user': user});
            client.broadcast.emit('connected', user);
        }

        const my_messages = messages.filter(item =>
            item.to === user_id || item.from === user_id
        );
        client.emit('getmessages', { messages: my_messages });
    }
};
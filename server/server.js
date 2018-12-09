const io = require('socket.io')();

const connectBots = require('./helpers/connectBots');
const { spamBot, ignoreBot } = require('./helpers/botsFunctionality');
const connectionHandler = require('./handlers/connectionHandler');
const disconnectHandler = require('./handlers/disconnectHandler');
const messageHandler = require('./handlers/messageHandler');
const typingHandler = require('./handlers/typingHandler');

const users = [];
const messages = [];

spamBot(io);
ignoreBot();
connectBots(users);

io.on('connection', client => {

    client.emit('users', {'users': users});

    connectionHandler(users, messages, client);
    disconnectHandler(users, client, io);
    messageHandler(users, messages, client, io);
    typingHandler(client, io);

});

io.listen(3000);
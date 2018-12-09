const echoBot = (messages, sender, data) => {

    const answer = {
        to: data.from,
        from: 'echo_bot',
        message: data.message
    };
    sender.emit('message', answer);
    messages.push({
        ...answer,
        date: new Date()
    });
};

const reverseBot = (messages, sender, data) => {
    setTimeout(() => {
        const answer = {
            to: data.from,
            from: 'reverse_bot',
            message: data.message.split('').reverse().join('')
        };
        sender.emit('message', answer);
        messages.push({
            ...answer,
            date: new Date()
        });
    }, 3000);
};

const spamBot = (io) => {
    let interval = generateInterval();
    let running = setInterval(broadcast, interval);

    function broadcast() {
        interval = generateInterval();

        io.emit('message', {
            from: 'spam_bot',
            message: 'Spamming...'
        });

        clearInterval(running);
        running = setInterval(broadcast, interval);
    }

    function generateInterval() {
        return (Math.floor(Math.random() * 110) + 10) * 1000
    }
};

const ignoreBot = (client, data) => {
   // do nothing
};

module.exports = {
    echoBot,
    reverseBot,
    spamBot,
    ignoreBot
}
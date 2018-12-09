module.exports = (client, io) => {
    client.on('typing', data => {
        data.from = client.id;
        const to = io.sockets.connected[data.to];
        if (to) to.emit('typing', data);
    });
};
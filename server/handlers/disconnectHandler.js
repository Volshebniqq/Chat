module.exports = (users, client, io) => {
    client.on('disconnect', () => {
        const index = users.findIndex(item => item.connection_id === client.id);
        if (users[index]) {
            users[index].status = 'offline';
            io.emit('disconnected', users[index].id);
        }
    });
};
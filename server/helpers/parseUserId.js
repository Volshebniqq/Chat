const qs = require('qs');

module.exports = client => {

    let query_string = client.conn.request.url.split('/').pop();
    query_string = query_string.substr(1);
    const query_parsed = qs.parse(query_string);

    if (query_parsed.user_id) {
        return query_parsed.user_id;
    } else {
        return false;
    }

};
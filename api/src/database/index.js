const { Client } = require('pg');

const client = new Client({
    user: 'root',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: 'logincodeland',
});

client.connect();
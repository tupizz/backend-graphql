require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// TODO USE EXPRESS MIDDLEWARE TO HANDLE COOKIES (JWT)
// TODO Use express middleware to populate current user

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL
    }
}, deets => {
    console.log(`Server now is running on port http://localhost:${deets.port}`)
});
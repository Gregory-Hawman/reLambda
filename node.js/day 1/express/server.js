const express = require('express'); // import the express server from

const server = express(); // creates the server instance

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
    res.send('Hello from Express');
});

// watch for connections on port 5000
server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000')
});

// CHALLENGE
// On your own: Write a paragraph about what Express is and explain how it is used in modern web application development.

// Express is an npm modlue for build servers with node.js. with it you can make SPA (single page applications) and RESTful APIs that work with JSON. It is simple, unopinionated, and light weight. Because of that it does need help as, it does very little straight out of the box. It does use middleware (ie for logging or security), routing (breaking the application into smaller parts) 
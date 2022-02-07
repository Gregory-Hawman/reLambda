const http = require('http'); // built in node.js module to handle http traffic.

const hostname = '127.0.0.1'; // the local computer where the server is running.
const port = 3000; // a port we'll use to watch for traffic.

const server = http.createServer((rec, res) => {
    // creates our server
    res.statusCode = 200; // http status code returned to the client.
    res.setHeader('Content-Type', 'text/plain'); // inform the client that we'll be returning text
    res.end('Hello World from Node\n'); // end the requwest and send a response with a specified message.
});

server.listen(port, hostname, () => {
    // start watching for connections on the port specified
    console.log(`Server running at http://${hostname}:${port}/`)
});

// Challenge
// Write a paragraph about what Node.js is and explain at least 3 of its core features.

// Node.js uses javascript to run javascript programs away from the client/ web browser, like many other languages already do. ie(C, C++, C#, python, Java). It allows the use of asynchronous code in which helps fully utilize the processor it is running on, even if it is only single,threaded. It can take advatange of npm modules
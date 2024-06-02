// Import the necessary modules
const express = require('express');
const app = express();
const port = 3000;

// Import the MonsterMayhem class
const MonsterMayhem = require('./MonsterMayhem');

// Create a new game with a 10x10 board and 2 players
const game = new MonsterMayhem(10, 2);

// Define a route handler for GET requests made to the root path ('/')
app.get('/', (req, res) => {
    // You might return the current game state here
    res.send('Welcome to MonsterMayhem!');
});

// Define a route handler for POST requests made to '/move'
app.post('/move', (req, res) => {
    // You might handle a move here
    // For example:
    // game.moveMonster(req.body.oldX, req.body.oldY, req.body.newX, req.body.newY);
    res.send('Move received!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

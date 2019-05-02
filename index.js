const express = require('express');
const recipeInstructions = require('./router/recipeRouter');

const server = express();

server.use(express.json())
server.use('/recipe', recipeInstructions)

server.listen(4400, () => {
    console.log('Server is fired up on port 4400!')
})
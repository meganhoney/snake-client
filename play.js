// main file through which game is launched
const {connect} = require('./client');

const {setupInput} = require('./input');

console.log('Connecting...');
connect();

setupInput();

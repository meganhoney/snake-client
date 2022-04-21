// main file through which game is launched
const {connect} = require('./client');

const {setupInput} = require('./input');

console.log('Connecting...');

const conn = connect();
// pass object returned from connect fn into setupInput to be able to interact with server
setupInput(conn);

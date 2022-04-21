const net = require('net');

// establishes server connection
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,

  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  //print message once connected
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => {
    conn.write('Name: MH');
  });

  // setInterval(() => {
  //   conn.write('Move: up');
  // }, 50);
  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  conn.setTimeout(2000);
  conn.on('timeout', () => {
    console.log('you ded cuz you idled');
  });

  return conn;
};

module.exports = {connect};

// Consider what is happening in the code that you wrote so far:

// You used Node's net library (specifically, the createConnection function) to create an object named conn in the code above.
// The conn object that Node returned to you represents the connection that you have with the server.
// The conn object is full of useful methods and properties that can now be used to interact with the server!
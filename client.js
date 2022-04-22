const net = require('net');
const { IP, PORT } = require("./constants");
// establishes server connection
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,

  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // print message once connected and send name to server
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: MH');
  });

  // after 5 sec of idling, kick user out of game
  // conn.setTimeout(4000);
  // conn.on('timeout', () => {
  //   console.log('you ded cuz you idled');
  //   process.exit();
  // });

  return conn;
};

module.exports = {connect};
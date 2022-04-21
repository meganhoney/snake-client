// stores active TCP connection object
let connection;

const handleUserInput = function (input) {
  if (input === '\u0003') {
    process.exit();
  } else if (input === 'w') {
    connection.write('Move: up');
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (input) => {
    handleUserInput(input);
  });

  return stdin;
};


module.exports = {setupInput};
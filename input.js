// stores active TCP connection object
let connection;

const handleUserInput = function (input) {
  if (input === '\u0003') {
    process.exit();
  } else if (input === 'w') {
    connection.write('Move: up');
  } else if (input === 's') {
    connection.write('Move: down');
  } else if (input === 'a') {
    connection.write('Move: left');
  } else if (input === 'd') {
    connection.write('Move: right');
  } else if (input === 'q') {
    connection.write('Say: ssssss');
  } else if (input === 'z') {
    connection.write('Say: Hello!');
  } else if (input === 'x') {
    connection.write('Say: Goodbye!');
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
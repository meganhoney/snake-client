// main file through which game is launched
const {connect} = require('./client');

const handleUserInput = function (input) {
  if (input === '\u0003') {
    process.exit();
  };
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};


setupInput();

// stores active TCP conncetion object
let connection;

const handleUserInput = function(key) {
  switch (key) {
    case 'w':
      connection.write('Move: up');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case '\u0003':
      process.exit();
  }
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};

module.exports = setupInput;
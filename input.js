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
    case '1':
      connection.write('Say: HA HA!');
      break;
    case '2':
      connection.write('Say: Plash Speed 5');
      break;
    case '3':
      connection.write('Say: Beep Beep');
      break;
    case '4':
      connection.write('Say: Longer vertically');
      break;
    case '5':
      connection.write('Say: Big snek');
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
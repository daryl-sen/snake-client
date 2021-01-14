const { clear } = require("console");

// stores active TCP conncetion object
let connection;
let toggle = [false];

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

  // press '/' to toggle the autorunner, then press '=' to start execution
  if (key === '/') {
    if (toggle[0] === true) {
      toggle[0] = false;
    } else {
      toggle[0] = true;
    }
    if (toggle[0] === true) {
      console.log('Autorunner is ready!! Press "=" to execute!');
    } else {
      console.log('Autorunner has been deactivated.');
    }
  }

  // press '/' again to stop the autorunner
  if (key === '=' && toggle) {
    console.log('autorunning');

    // one cycle of movements, feel free to change it!
    const cycle = ['up', 'right', 'down', 'right'];
    let cycleI = 0; // counts where we are in the cycle

    let auto = setInterval(() => {
      if (toggle[0] === true) {

        connection.write('Move: ' + cycle[cycleI]);
        connection.write('Say: Idling...');

        if (cycleI < cycle.length) {
          cycleI++; // move on to the next movement direction
        } else {
          cycleI = 0; // restart the cycle from the first movement direction
        }

      } else {
        console.log('ended');
        clearInterval(auto); // stop setInterval
      }
    }, 1000); // run every second, feel free to change
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
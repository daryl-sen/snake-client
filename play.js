const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // when receiving data from server
  conn.on('data', (data) => {
    console.log('Server:', data);
  });

  // when connection ends
  conn.on('end', () => {
    console.log('Disconected');
  });

  return conn;
}

console.log('Connecting ...');
connect();
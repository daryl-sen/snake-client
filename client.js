const net = require('net');

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
  
    // when connection is established
    conn.on('connect', () => {
      console.log('Connected');
      conn.write('Name: DTS');

      // let timeOut = 0;
      // let i = 0;
      // while (i < 5) {
      //   setTimeout(() => {
      //     conn.write('Move: up');
      //   }, timeOut);
      //   timeOut += 100;
      //   i++;
      // }

    });
  
    // when connection ends
    conn.on('end', () => {
      console.log('Disconnected');
    });
  
    return conn;
  }

module.exports = connect;
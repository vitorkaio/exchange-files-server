import NET from 'net'

// This function create and return a net.Socket object to represent TCP client.
export const getConn = (connName) => {

  var option = {
      host:'localhost',
      port: 3002,
      localPort: 51101
  }

  // Create TCP client.
  const client = NET.createConnection(option, function () {
      // console.log('Connection name : ' + connName);
      // console.log('Connection local address : ' + client.localAddress + ":" + client.localPort);
      // console.log('Connection remote address : ' + client.remoteAddress + ":" + client.remotePort);
  });

  // client.setTimeout(1000);
  client.setEncoding('utf8');

  // When receive server send back data.
  client.on('data', function (data) {
      console.log('Server return data : ' + data);
  });

  // When connection disconnected.
  client.on('end',function () {
      console.log('Client socket disconnect. ');
  });

  client.on('timeout', function () {
      console.log('Client connection timeout. ');
  });

  client.on('error', function (err) {
      console.error(JSON.stringify(err));
  });

  return client;
}
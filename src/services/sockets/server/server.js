import NET from 'net';
import { emitData, endServerConnection } from './server.controller'
import Sock from './models/Sock'
import Cluster from './models/Cluster'

const cluster = new Cluster()

export const serverSocket = () => {
  // Create and return a net.Server object, the function will be invoked when client connect to this server.
  const server = NET.createServer((client) => {
    const sock = new Sock(client)

    // console.log(`Client: ${id}`)
    // console.log(sock)

    client.setEncoding('utf-8')
    // client.setTimeout(1000);

    // When receive client data.
    client.on('data', (data) => emitData(sock, cluster, data))

    // When client disconnect.
    client.on('end', () => endServerConnection(server, sock, cluster))

    // When client timeout.
    client.on('timeout', () => {
      console.log('Client request time out. ')
    })
  })

  // Make the server a TCP server listening on port 9999.
  server.listen(3002, () => {

    // Get server address info.
    const serverInfo = server.address()

    const serverInfoJson = JSON.stringify(serverInfo)

    console.log(serverInfoJson)

    server.on('close', () => {
      console.log('TCP server socket is closed.')
    })

    server.on('error', (error) => {
      console.error(JSON.stringify(error))
    })
  })
}

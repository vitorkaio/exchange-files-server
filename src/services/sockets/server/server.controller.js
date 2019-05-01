import * as serverActions from './../actions/server.actions'
import { writeJSON, readJSON } from '../../funcsAux/funcsAux'
import * as logs from '../../funcsAux/logs'

// Controller para as callbacks do server

// Emite uma informação
export const emitData = (sock, cluster, receiveMsg) => {
  const msg = readJSON(receiveMsg)

  switch (msg.type) {
    case serverActions.IDENT: // Identifica o client e adiciona na lista de clientes.
      sock.setName(msg.data)
      cluster.pushSock(sock)

      // logCluster
      logs.logCluster(cluster.getCluster())
      sock.getClient().write(writeJSON(cluster.getClientsNamesExcept(sock.getId())))
    break;

    // A origem informa ao destino o nome do arquivo e o tamanho dele.
    case serverActions.SEND_REQUEST:
      logs.logSendRequest(sock.getName(), msg.from, msg.fileName, msg.fileSize)
    break;

    // O destino responde se aceitará o envio do arquivo.
    case serverActions.SEND_RESPONSE:
    break;

    case serverActions.SEND:
      logs.logSend(sock.getName(), msg.from, msg.data)
    break;
  
    default:
     console.log(receiveMsg)
    break;
  }
}

// Finaliza uma conexão.
export const endServerConnection = (server, sock, cluster) => {
  logs.logDisconnect(sock)
  cluster.removeSockId(sock.getId())

  // logCluster
  logs.logCluster(cluster.getCluster())
}

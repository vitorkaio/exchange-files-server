import * as serverActions from '../sockets/actions/server.actions'

// printa todos os socks cadastrados no cluster
export const logCluster = (cluster) => {
  console.group('Cluster')
  for (let i = 0; i < cluster.length; i++) {
    console.log('%cid - ' + cluster[i].getId(), 'color: purple')
    console.log('%cname - ' + cluster[i].getName() + '\n', 'color: purple')
  }
  console.groupEnd()
}

// log do envio de msg
export const logSend = (source, dest, msg) => {
  console.group(serverActions.SEND)
    console.log('%csource: ' + source, 'color: seagreen')
    console.log('%cdest: ' + dest, 'color: seagreen')
    console.log(msg + '\n')
  console.groupEnd()
}

export const logSendRequest = (source, dest, fileName, fileSize) => {
  console.group(serverActions.SEND_REQUEST)
    console.log('%csource: ' + source, 'color: orange')
    console.log('%cdest: ' + dest, 'color: orange')
    console.log('%cfileName: ' + fileName, 'color: orange')
    console.log('%cfileSize: ' + (fileSize / 1024).toFixed(1) + ' kb', 'color: orange')
  console.groupEnd()
}

export const logSendResponse = (source, dest, res) => {
  console.group(serverActions.SEND_RESPONSE)
    console.log('%csource: ' + source, 'color: cornflowerblue')
    console.log('%cdest: ' + dest, 'color: cornflowerblue')
    console.log('%res: ' + res, 'color: cornflowerblue')
  console.groupEnd()
}

// print quando um cliente sai
export const logDisconnect = (sock) => {
  console.group('Disconnect')
    console.log('%cDisconnect: ' + sock.getName(), 'color: red')
  console.groupEnd()
}

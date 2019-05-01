
// Classe que representa a lista de clientes conectados no server.
class Cluster {
  constructor() {
    this._list = []
  }

  // Insere um novo cliente na lista.
  pushSock(sock) {
    this._list.push(sock)
  }

  // Retorna o cliente pelo id passado.
  getSock(id) {
    const sock = this._list.filter(item => item.id === id)
    return sock
  }

  // Retorna uma lista de clients formato string.
  getClientsNames() {
    const clients = this._list.map(item => item.getName())
    return clients
  }

  // Retorna uma lista de clients em string exceto o cliente com id passado
  getClientsNamesExcept(id) {
    const clients = this._list.filter(item => item.getId() !== id).map(item => item.getName())
    return clients
  }

  // Remove o cliente do cluster ao se desconectar
  removeSockId(id) {
    this._list = this._list.filter(item => item._id !== id)
  }

  // retorna uma cópia de valor do cluster
  getCluster() {
   return [... this._list]
  }

}

export default Cluster
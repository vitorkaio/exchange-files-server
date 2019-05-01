import { createHash } from 'crypto'

// Classe que representa o client e os dados.
class Sock {
  constructor(client) {
    this._id = createHash('sha1').update(Date.now() + '').digest('hex')
    this._client = client
    this._name = ''
  }

  setId(id) {
    this._id = id
  }

  getId() {
    return this._id
  }

  setClient(client) {
    this._client = client
  }

  getClient() {
    return this._client
  }

  setName(name) {
    this._name = name
  }

  getName() {
    return this._name
  }

}// Fim da classe

export default Sock

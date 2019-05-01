import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
// import socketio from 'socket.io';
// import VueSocketIO from 'vue-socket.io';
import { serverSocket } from './services/sockets/server/server'
import { getConn } from './services/sockets/client/client'
import { platform, release, hostname } from 'os'


serverSocket()

// Create node client socket.
const nodeClient = getConn('Node');
const infoOs = `${platform()} ${release()} ${hostname()}`
nodeClient.write(JSON.stringify({ type: 'IDENT', data: infoOs }));
setTimeout(() => {
  nodeClient.write(JSON.stringify({ type: 'SEND', from: 'todos', data: 'olá' }));
}, 3e3)

/* Vue.use(new VueSocketIO({
  connection: 'localhost:3002'
})) */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

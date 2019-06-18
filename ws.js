var WebSocketServer = require('ws');
var wss = new WebSocketServer.Server({port:5050});
clientsArr = []
wss.on('connection', (ws) => {
    console.log("oi")
    ws.onmessage = (msg) => {
        if(typeof(msg) == Number){
            ws.send('id')
        }
        wss.clients.forEach(function each(client){
            client.send(msg.data)
        })
        
    }
})

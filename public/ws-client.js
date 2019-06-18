var ws = new WebSocket("ws://localhost:5050")
const user = Math.floor(Math.random() * 100)

let sender = ""
let mymsg = "";


var msgInput = document.querySelector('#msg');

msgInput.addEventListener("keyup", (e) => {
    if(e.key == "Enter"){
        sendMessage();
    }
})


console.log(user)
ws.onopen = () => {
    setStatus('Conectado');
}
ws.onclose = () => {
    setStatus('Desconectado');    
}

ws.onmessage = (msg) => {
    if(!isNaN(msg.data)){
        if(msg.data== user){
            sender = "vc"
        }else{
            sender="outro"
        } 
    }else{
        mymsg = msg.data;
        getMessages(mymsg)
    }
}



function setStatus(status){
    var title = document.querySelector('.status');
    title.innerHTML = status;
}

function sendMessage(){
    ws.send(user)
    ws.send(msgInput.value);
    msgInput.value = "";
}

function getMessages(text){
    var p = document.createElement('p');
    p.className = sender;
    var messages = document.querySelector('.msgContainer');
    p.innerHTML = text;
    messages.appendChild(p)
    
}
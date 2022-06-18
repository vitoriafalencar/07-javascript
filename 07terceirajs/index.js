const chat =document.getElementById("chat");
const mensagem =document.getElementById("mensagem");
const enviar =document.getElementById("enviar");
const limpar =document.getElementById("limpar");

function enviarMensagem(){
    if (mensagem.value){
        chat.textContent +=mensagem.value;
        chat.scrollTop += chat.scrollHeight;
        mensagem.value="";

    }
    return null;
}

function limparChat(){
    chat.textContent = "";
    return null;

}
limpar.addEventListener("click",limparChat);
enviar.addEventListener("click",enviarMensagem);
mensagem.addEventListener("keydown",(e)=>{
    if(e.keycode === 0x0D) {
        enviarMensagem();
    }

})
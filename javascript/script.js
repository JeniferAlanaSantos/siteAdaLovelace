var inputBotaoEnviar = document.getElementById("botaoEnviar");
var inputNomeDoUsuario = document.getElementById("nomeDoUsuario");
var inputEmailDoUsuario = document.getElementById("emailDoUsuario");
var inputTelUsuario = document.getElementById("telUsuario");

inputBotaoEnviar.addEventListener("click", enviaFormulario);

window.onscroll = () =>{
  if(window.scrollY > 500){
      document.querySelector('#scroll-top').classList.add('active');
  }else{
      document.querySelector('#scroll-top').classList.remove('active');
  }
}

function enviaFormulario() {
  if (inputNomeDoUsuario.value != "" && inputEmailDoUsuario.value != "" && inputTelUsuario.value != "") {
    alert ("Pronto! Você receberá as novidades por email!");
  } else {
    alert ("Por favor, preencha todos os campos");
  }
}
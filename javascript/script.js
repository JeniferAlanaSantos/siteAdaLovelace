document.getElementById ("botaoEnviar").addEventListener("click", enviaFormulario)

function enviaFormulario () {

  if (document.getElementById("nomeDoUsuario").value != "" && document.getElementById("emailDoUsuario").value != "" && document.getElementById("telUsuario").value != "") {
    alert ("Pronto! Você receberá as novidades por email!")
  } else {
    alert ("Por favor, preencha todos os campos")
  }
}
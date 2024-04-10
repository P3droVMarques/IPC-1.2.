"use strict"

function enviarEmail() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;
    var assunto = "Contato via formulário de contato";

    var link = "mailto:seuemail@exemplo.com" +
               "?subject=" + encodeURIComponent(assunto) +
               "&body=" + encodeURIComponent("Nome: " + nome + "\nEmail: " + email + "\nMensagem: " + mensagem);

    window.location.href = link;
  }

  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Não vá embora 😢";
  })
  window.addEventListener("focus", () => {
    document.title = docTitle;
  }) 
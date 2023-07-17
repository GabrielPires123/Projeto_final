var emailCadastro;
var senhaCadastro;

function btnLogar() {
    var usuarioLogin = document.form1.txUsuario.value;
    var senhaLogin = document.form1.txSenha.value;
    var emailCadastro1 = emailCadastro;
    var senhaCadastro1 = senhaCadastro;

    if ((usuarioLogin === emailCadastro1) && (senhaLogin == senhaCadastro1)) {
        alert("!")
        window.location.href = "./home.html";
    }
    else {
        alert("usuario e/ou senha Incorretos");

    }

}

function cadastrar() {
    emailCadastro = document.getElementById("nome").value;
    senhaCadastro = document.getElementById("senha").value;
    var confirm_senha = document.getElementById("senha2").value;

   
    if ((senhaCadastro === confirm_senha) && (senhaCadastro && confirm_senha != undefined) && (senhaCadastro && confirm_senha != null)) {
        
        alert("Conta criada!");
    }
    else {
        alert("Senhas diferentes!");
    }

}
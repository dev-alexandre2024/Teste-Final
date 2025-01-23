const dados = JSON.parse(localStorage.getItem('cadastros')) || []
var dadosFormulario;

// TELA DE CADASTRO 
const formCadastro = document.getElementById('form-cadastro')
const nomeCadastro = document.getElementById('nome-cadastro')
const sobrenomeCadastro = document.getElementById('sobrenome-cadastro')
const emailCadastro = document.getElementById('email-cadastro')
const senhaCadastro = document.getElementById('senha-cadastro')
const btnCadastro = document.getElementById('cadastrar')

// TELA DE LOGIN
const formLogin = document.getElementById('form-login')
const emailLogin = document.getElementById('email-login')
const senhaLogin = document.getElementById('senha-login')
const btnLogin = document.getElementById('btn-login')


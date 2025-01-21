// FUNÇÃO RESPONSÁVEL POR VALIDAR SE TODOS OS CAMPOS FORAM PREENCHIDOS COM SUCESSO
function ValidarCampos(event) {
    var nome = nomeCadastro.value;
    var sobrenome = sobrenomeCadastro.value;
    var email = emailCadastro.value;
    var senha = senhaCadastro.value;

    if(!nome || !sobrenome || !email || !senha) {
        event.preventDefault()
        return alert("Todos os campos devem ser preenchidos")
    } else if(nome.trim() ==='' || sobrenome.trim() ==='' || email.trim() ==='' || senha.trim() ==='') {
        return alert("Os campos não devem ter apenas espeços vazios.")
    } else {
        formCadastro.onsubmit()
        return {
            nome, sobrenome, email, senha
        }
    }
}

// FUNÇÃO PARA SALVAR DADOS DE CADASTRO DENTRO DO LOCALSTORAGE
function SalvarDados(event) {
    const teste = ValidarCampos(event)

    const { nome, sobrenome, email, senha } = teste

    const infor = {
        nome, sobrenome, email, senha
    }

    dados.push(infor)

    localStorage.setItem('cadastros', JSON.stringify(dados))
}

// APÓS A VALIDAÇÃO DOS CAMPOS, ESSA FUNÇÃO IRÁ CADASTRAR AS INFORMAÇÕES DENTRO DO LOCALSTORAGE
// function Cadastrar() {}

btnCadastro.addEventListener('click', function cadastrar() {
    SalvarDados()
})

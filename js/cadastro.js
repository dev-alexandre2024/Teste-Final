function ValidarCampos() {
    var nome = nomeCadastro.value;
    var sobrenome = sobrenomeCadastro.value;
    var email = emailCadastro.value;
    var senha = senhaCadastro.value;

    if (!nome || !sobrenome || !email || !senha) {
        return alert("Todos os campos devem ser preenchidos");
    } else if (nome.trim() === '' || sobrenome.trim() === '' || email.trim() === '' || senha.trim() === '') {
        return alert("Os campos não devem ter apenas espaços vazios.");
    } else {
        return { nome, sobrenome, email, senha };
    }
}

function SalvarDados(event) {
    dadosFormulario = ValidarCampos(event);

    if (!dadosFormulario) return; 
    const { nome, sobrenome, email, senha } = dadosFormulario;

    const infor = {
        nome, sobrenome, email, senha
    };

    dados.push(infor);
    localStorage.setItem('cadastros', JSON.stringify(dados)); 
}

btnCadastro.addEventListener('click', function cadastrar(event) {
    event.preventDefault();

    SalvarDados(event);

    if (dadosFormulario) {
        window.location.href = formCadastro.action;
    }
});

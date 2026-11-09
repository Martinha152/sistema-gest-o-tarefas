// Função para alternar entre as telas de Login e Cadastro
function alternarFormulario(tela) {
    const loginForm = document.getElementById('login-form');
    const cadastroForm = document.getElementById('cadastro-form');

    if (tela === 'cadastro') {
        loginForm.classList.add('hidden');
        cadastroForm.classList.remove('hidden');
    } else {
        cadastroForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }
}

// Simulação de eventos de envio dos formulários
document.getElementById('formLogin').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    alert(`Login efetuado com sucesso para: ${email}`);
});

document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('cad-nome').value;
    alert(`Conta criada com sucesso para ${nome}! Agora faça o login.`);
    alternarFormulario('login');
});
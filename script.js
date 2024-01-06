function adicionarContato() {
    // Obter os valores do formulário
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    // Validar se ambos os campos foram preenchidos
    if (nome && telefone) {
        // Criar uma nova linha na tabela
        var tabela = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];
        var novaLinha = tabela.insertRow(tabela.rows.length);

        // Inserir células na nova linha
        var celulaNome = novaLinha.insertCell(0);
        var celulaTelefone = novaLinha.insertCell(1);

        // Preencher as células com os valores do formulário
        celulaNome.innerHTML = nome;
        celulaTelefone.innerHTML = telefone;

        // Limpar os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('telefone').value = '';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

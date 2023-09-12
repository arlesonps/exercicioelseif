// Criar um array para armazenar os itens da loja
var itens = [];

// Criar uma função para adicionar um item ao array
function adicionarItem(nome, codigo, preco) {
  // Criar um objeto para representar o item
  var item = {
    nome: nome,
    codigo: codigo,
    preco: preco
  };
  // Adicionar o item ao final do array
  itens.push(item);
  // Retornar uma mensagem de sucesso
  return "Item adicionado com sucesso!";
}

// Criar uma função para listar os itens do array
function listarItens() {
  // Verificar se o array está vazio
  if (itens.length == 0) {
    // Retornar uma mensagem de aviso
    return "Não há itens na loja!";
  } else {
    // Criar uma variável para armazenar a lista de itens
    var lista = "";
    // Percorrer o array de itens
    for (var i = 0; i < itens.length; i++) {
      // Obter o item na posição i
      var item = itens[i];
      // Adicionar o item à lista com seus dados formatados
      lista += "Nome: " + item.nome + "\n";
      lista += "Código: " + item.codigo + "\n";
      lista += "Preço: R$ " + item.preco.toFixed(2) + "\n";
      lista += "------------------------\n";
    }
    // Retornar a lista de itens
    return lista;
  }
}

// Criar uma função para excluir um item do array
function excluirItem(codigo) {
  // Verificar se o array está vazio
  if (itens.length == 0) {
    // Retornar uma mensagem de aviso
    return "Não há itens na loja!";
  } else {
    // Criar uma variável para armazenar o índice do item a ser excluído
    var indice = -1;
    // Percorrer o array de itens
    for (var i = 0; i < itens.length; i++) {
      // Obter o item na posição i
      var item = itens[i];
      // Verificar se o código do item é igual ao código informado
      if (item.codigo == codigo) {
        // Atribuir o valor de i à variável índice
        indice = i;
        // Interromper o loop
        break;
      }
    }
    // Verificar se o índice foi encontrado
    if (indice == -1) {
      // Retornar uma mensagem de erro
      return "Item não encontrado!";
    } else {
      // Remover o item do array pelo índice
      itens.splice(indice, 1);
      // Retornar uma mensagem de sucesso
      return "Item excluído com sucesso!";
    }
  }
}

// Criar uma função para modificar um item do array
function modificarItem(codigo, novoNome, novoPreco) {
  // Verificar se o array está vazio
  if (itens.length == 0) {
    // Retornar uma mensagem de aviso
    return "Não há itens na loja!";
  } else {
    // Criar uma variável para armazenar o índice do item a ser modificado
    var indice = -1;
    // Percorrer o array de itens
    for (var i = 0; i < itens.length; i++) {
      // Obter o item na posição i
      var item = itens[i];
      // Verificar se o código do item é igual ao código informado
      if (item.codigo == codigo) {
        // Atribuir o valor de i à variável índice
        indice = i;
        // Interromper o loop
        break;
      }
    }
    // Verificar se o índice foi encontrado
    if (indice == -1) {
      // Retornar uma mensagem de erro
      return "Item não encontrado!";
    } else {
      // Obter o item pelo índice
      var item = itens[indice];
      // Alterar os dados do item com os novos valores informados
      item.nome = novoNome;
      item.preco = novoPreco;
      // Retornar uma mensagem de sucesso
      return "Item modificado com sucesso!";
    }
  }
}

// Criar uma função para exibir o menu e receber a opção do usuário
function exibirMenu() {
  // Criar uma variável para armazenar a opção do usuário
  var opcao;
  // Criar um loop para repetir o menu até que o usuário escolha sair
  do {
    // Exibir o menu com as opções disponíveis
    console.log("Menu da loja de armazém de construção");
    console.log("1 - Adicionar item");
    console.log("2 - Listar itens");
    console.log("3 - Excluir item");
    console.log("4 - Modificar item");
    console.log("5 - Sair do menu");
    // Pedir ao usuário que digite a opção desejada
    opcao = prompt("Digite a opção desejada:");
    // Verificar qual opção foi escolhida
    switch (opcao) {
      // Caso seja a opção 1
      case "1":
        // Pedir ao usuário que digite os dados do item a ser adicionado
        var nome = prompt("Digite o nome do item:");
        var codigo = prompt("Digite o código do item:");
        var preco = parseFloat(prompt("Digite o preço do item:"));
        // Chamar a função para adicionar o item ao array
        var resultado = adicionarItem(nome, codigo, preco);
        // Exibir o resultado da operação
        console.log(resultado);
        break;
      // Caso seja a opção 2
      case "2":
        // Chamar a função para listar os itens do array
        var resultado = listarItens();
        // Exibir o resultado da operação
        console.log(resultado);
        break;
      // Caso seja a opção 3
      case "3":
        // Pedir ao usuário que digite o código do item a ser excluído
        var codigo = prompt("Digite o código do item a ser excluído:");
        // Chamar a função para excluir o item do array
        var resultado = excluirItem(codigo);
        // Exibir o resultado da operação
        console.log(resultado);
        break;
      // Caso seja a opção 4
      case "4":
        // Pedir ao usuário que digite o código do item a ser modificado
        var codigo = prompt("Digite o código do item a ser modificado:");
        // Pedir ao usuário que digite os novos dados do item
        var novoNome = prompt("Digite o novo nome do item:");
        var novoPreco = parseFloat(prompt("Digite o novo preço do item:"));
        // Chamar a função para modificar o item do array
        var resultado = modificarItem(codigo, novoNome, novoPreco);
        // Exibir o resultado da operação
        console.log(resultado);
        break;
      // Caso seja a opção 5
      case "5":
        // Exibir uma mensagem de despedida
        console.log("Obrigado por usar o menu da loja de armazém de construção!");
        break;
      // Caso seja uma opção inválida
      default:
        // Exibir uma mensagem de erro
        console.log("Opção inválida!");
    }
  } while (opcao != "5"); // Repetir o loop enquanto a opção não for 5 (sair)
}

// Chamar a função para iniciar o programa
exibirMenu();

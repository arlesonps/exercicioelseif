const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// interface de readline é usada para criar um menu interativo que aguarda a entrada do usuario e executa a função apropriada 
// com base na opção selecionada.
const storeItems = [];

function showMenu() {
  console.log("\n**** Menu: ****");
  console.log("1. Adicionar itens");
  console.log("2. Listar itens");
  console.log("3. Excluir itens");
  console.log("4. Modificar itens");
  console.log("5. Sair do menu");

  rl.question("Escolha uma opção: ", function(opçao) {
    switch (opçao) {
      case '1':
        addItem();
        break;
      case '2':
        listItems();
        break;
      case '3':
        deleteItem();
        break;
      case '4':
        modifyItem();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        showMenu();
        break;
    }
  });
}

function addItem() {
  rl.question("Digite o nome do item: ", function(nome) {
    rl.question("Digite o código do item: ", function(code) {
      rl.question("Digite o preço do item: ", function(preço) {
        storeItems.push({ nome, code, preço: parseFloat(preço) });
        console.log("Item adicionado com sucesso!");
        showMenu();
      });
    });
  });
}

function listItems() {
  console.log("\nLista de Itens:");
  storeItems.forEach((item, index) => {
    console.log(`Item ${index + 1}:`);
    console.log(`Nome: ${item.nome}`);
    console.log(`Código: ${item.code}`);
    console.log(`Preço: ${item.preço}`);
    console.log("-------------------");
  });
  showMenu();
}

function deleteItem() {
  rl.question("Digite o código do item que deseja excluir: ", function(code) {
    const index = storeItems.findIndex(item => item.code === code);
    if (index !== -1) {
      storeItems.splice(index, 1);
      console.log("Item excluído com sucesso!");
    } else {
      console.log("Item não encontrado.");
    }
    showMenu();
  });
}

function modifyItem() {
  rl.question("Digite o código do item que deseja modificar: ", function(code) {
    const index = storeItems.findIndex(item => item.code === code);
    if (index !== -1) {
      rl.question("Digite o novo nome do item: ", function(nome) {
        rl.question("Digite o novo preço do item: ", function(preço) {
          storeItems[index].nome = nome;
          storeItems[index].preço = parseFloat(preço);
          console.log("Item modificado com sucesso!");
          showMenu();
        });
      });
    } else {
      console.log("Item não encontrado.");
      showMenu();
    }
  });
}

showMenu();

const { log } = require('console');
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
  console.log("5. Vender itens");
  console.log("6. Sair do menu");

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
        venderItem();  
      case '6':
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
        rl.question("Digite a quantidade do item: ", function(quantidade) {
        storeItems.push({ nome, code, preço: parseFloat(preço), quantidade: parseInt(quantidade) });
        console.log("Item adicionado com sucesso!");
        showMenu();
      });
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
    console.log(`Quantidade em estoque: ${item.quantidade}`);
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
          rl.question("Digite a nova quantidade do item em estoque: ", function(quantidade) {
          storeItems[index].nome = nome;
          storeItems[index].preço = parseFloat(preço);
          storeItems[index].preço = parseFloat(quantidade);
          console.log("Item modificado com sucesso!");
          showMenu();
        });
      });
    }); 
  } else {
    console.log("Item não encontrado.");
    showMenu();
  }
});
}
function venderItem() {
  rl.question("Digite o codigo do item que deseja vender: ", function(code) {
    const index = storeItems.findIndex(item => item.code === code);
    if (index !== -1) {
      const item = storeItems[index];
      if (item.quantidade > 0) {
        item.quantidade--;
        console.log(`Venda de ${item.nome} realizada. Quantidade restante do estoque: ${item.quantidade}`);
      } else {
        console.log("Item fora do estoque. Não é psosivel realizar venda");
      }
    } else {
      console.log("Item não encontrado.");
    }
  showMenu();  
  });
}

showMenu();

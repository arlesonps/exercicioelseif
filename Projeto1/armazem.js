// const { log } = require('console');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// // interface de readline é usada para criar um menu interativo que aguarda a entrada do usuario e executa a função apropriada 
// // com base na opção selecionada.
// const storeItems = [];

// function showMenu() {
//   console.log("\n**** Menu: ****");
//   console.log("1. Adicionar itens");
//   console.log("2. Listar itens");
//   console.log("3. Excluir itens");
//   console.log("4. Modificar itens");
//   console.log("5. Vender itens");
//   console.log("6. Sair do menu");

//   rl.question("Escolha uma opção: ", function(opçao) {
//     switch (opçao) {
//       case '1':
//         addItem();
//         break;
//       case '2':
//         listItems();
//         break;
//       case '3':
//         deleteItem();
//         break;
//       case '4':
//         modifyItem();
//         break;
//       case '5':
//         venderItem();  
//       case '6':
//         rl.close();
//         break;
//       default:
//         console.log("Opção inválida. Tente novamente.");
//         showMenu();
//         break;
//     }
//   });
// }

// function addItem() {
//   rl.question("Digite o nome do item: ", function(nome) {
//     rl.question("Digite o código do item: ", function(code) {
//       rl.question("Digite o preço do item: ", function(preço) {
//         rl.question("Digite a quantidade do item: ", function(quantidade) {
//         storeItems.push({ nome, code, preço: parseFloat(preço), quantidade: parseInt(quantidade) });
//         console.log("Item adicionado com sucesso!");
//         showMenu();
//       });
//     });
//   });
// }); 
// }

// function listItems() {
//   console.log("\nLista de Itens:");
//   storeItems.forEach((item, index) => {
//     console.log(`Item ${index + 1}:`);
//     console.log(`Nome: ${item.nome}`);
//     console.log(`Código: ${item.code}`);
//     console.log(`Preço: ${item.preço}`);
//     console.log(`Quantidade em estoque: ${item.quantidade}`);
//     console.log("-------------------");
//   });
//   showMenu();
// }

// function deleteItem() {
//   rl.question("Digite o código do item que deseja excluir: ", function(code) {
//     const index = storeItems.findIndex(item => item.code === code);
//     if (index !== -1) {
//       storeItems.splice(index, 1);
//       console.log("Item excluído com sucesso!");
//     } else {
//       console.log("Item não encontrado.");
//     }
//     showMenu();
//   });
// }

// function modifyItem() {
//   rl.question("Digite o código do item que deseja modificar: ", function(code) {
//     const index = storeItems.findIndex(item => item.code === code);
//     if (index !== -1) {
//       rl.question("Digite o novo nome do item: ", function(nome) {
//         rl.question("Digite o novo preço do item: ", function(preço) {
//           rl.question("Digite a nova quantidade do item em estoque: ", function(quantidade) {
//           storeItems[index].nome = nome;
//           storeItems[index].preço = parseFloat(preço);
//           storeItems[index].preço = parseFloat(quantidade);
//           console.log("Item modificado com sucesso!");
//           showMenu();
//         });
//       });
//     }); 
//   } else {
//     console.log("Item não encontrado.");
//     showMenu();
//   }
// });
// }
// function venderItem() {
//   rl.question("Digite o codigo do item que deseja vender: ", function(code) {
//     const index = storeItems.findIndex(item => item.code === code);
//     if (index !== -1) {
//       const item = storeItems[index];
//       if (item.quantidade > 0) {
//         item.quantidade--;
//         console.log(`Venda de ${item.nome} realizada. Quantidade restante do estoque: ${item.quantidade}`);
//       } else {
//         console.log("Item fora do estoque. Não é psosivel realizar venda");
//       }
//     } else {
//       console.log("Item não encontrado.");
//     }
//   showMenu();  
//   });
// }

// showMenu();


const readline = require('readline-sync');

let geradorID = null;
const livros = [];
const found = false;
const novaIteracao = false;
let opcaoMenu
let opcaoBusca



function cont() {
    console.log('****************************************');
    readline.question('Aperte "Enter" para continuar!!!');
}

function menu() {
    console.log('***** SISTEMA DE GESTAO DE LIVROS ******');
    console.log('***************** MENU *****************');
    console.log('0 - Sair do sistema');
    console.log('1 - Listar todos Livros');
    console.log('2 - Cadastrar um novo Livro');
    console.log('3 - Buscar Livro');
    console.log('4 - Alterar cadastro de um Livro');
    console.log('5 - Excluir um cadastro de Livro');
    console.log('****************************************');
}

function subMenu() {
    switch (opcaoMenu) {
        case 2:
            console.log('********* CADASTRO DE LIVROS ***********');
            console.log('**************** OPCAO *****************');
            console.log('1 - Fazer um novo cadastro');
            break;
        case 3:
            console.log('************ BUSCAR LIVRO **************');
            console.log('**************** OPCAO *****************');
            console.log('1 - Fazer uma nova busca');
            break;
        case 4:
            console.log('***** ALTERAR CADASTRO DE UM LIVRO *****');
            console.log('**************** OPCAO *****************');
            console.log('1 - Fazer uma nova alteracao');
            break;
        case 5:
            console.log('***** EXCLUIR CADASTRO DE UM LIVRO *****');
            console.log('**************** OPCAO *****************');
            console.log('1 - Fazer uma nova exclucao');
            break;
        default:
            break;
    }
    console.log('2 - Voltar');
    console.log('****************************************');
}

// Create

function adicionarLivro() {
  console.clear();
  console.log('********* CADASTRO DE LIVROS ***********');
  geradorID++;
  let tituloLivro, autorLivro, numPaginas;
  
  tituloLivro = readline.question('Digite o titulo / nome do Livro: ');
  autorLivro = readline.question('Digite o Autor: ');
  
  while (true) {
      numPaginas = readline.question('Entre com o numero de paginas: ');
      if (!isNaN(numPaginas)) {
          numPaginas = parseInt(numPaginas);
          break;
      } else {
          console.log('Digite um numero valido.');
      }
  }
  
  const livro = {
      titulo: tituloLivro,
      autor: autorLivro,
      paginas: numPaginas,
      id: geradorID,
  };
  
  livros.push(livro);
  console.clear();
  console.log('Cadastro do Livro realizado!!!');
  console.log(`ID: ${livro.id} => Titulo: ${livro.titulo}`);
  console.log(`\t- Autor: ${livro.autor}`);
  console.log(`\t- Pag: ${livro.paginas}`);
  
  cont();
}


// Read

function listarLivros() {
    console.clear()
    console.log('********* TODOS LIVROS CADASTRADOS ***********');
    for (const l of livros) {
        console.log('_______________________________________________');
        console.log(`ID: ${l.id} => Titulo: ${l.titulo}`);
        console.log(`\t- Autor: ${l.autor}`);
        console.log(`\t- Pag: ${l.paginas}`);
    }
}

function procurarLivro() {
    console.clear()
    this.found = found;
    let searchLivro;
    console.log('********** BUSCAR LIVRO ***********');
    console.log('Escolha qual metodo da busca: \n');
    opcaoBusca = readline.questionInt('1 titulo , 2 autor , 3 id', {limitMessage: 'Digite um numero valido'});
    switch (opcaoBusca) {
        case 1:
            searchLivro = readline.question('Digite titulo do Livro: ');
            break;
        case 2:
            searchLivro = readline.question('Digite o nome do Autor: ');
            break;
        case 3:
            searchLivro = readline.questionInt('Digite ID do Livro: ', {limitMessage: 'Digite um numero valido'});
        default:
            break;
    }

    for (const l of livros) {
        if (l.id == searchLivro || l.autor == searchLivro || l.titulo == searchLivro) {
            this.found = true;
            console.log(`ID: ${l.id} => Titulo: ${l.titulo}`);
            console.log(`\t- Autor: ${l.autor}`);
            console.log(`\t- Pag: ${l.paginas}`);
            //cont()
            console.clear()
        }
    }
    if (!this.found) {
        console.log('Livro nao encontrado');
        cont()
        console.clear()
    }
}

// Update

function alterarLivro() {
    console.clear()
    this.found = found;
    console.log('***** ALTERAR CADASTRO DE UM LIVRO *****');
    let change = readline.questionInt('Digite o ID do livro a ser alterado: ', {limitMessage: 'Digite um numero valido'});
    for (const l of livros) {
        if (l.id == change) {
            this.found = true;
            console.log('Registro atual: ');
            console.log(`Titulo: ${l.titulo}`);
            console.log(`\t- Autor: ${l.autor} | número de pag: ${l.paginas}`);
            console.log('\nEntre com os novos dados: \n');
            l.titulo = readline.question('Digite o titulo: ');
            l.autor = readline.question('Digite o nome do Autor(a): ');
            l.paginas = readline.questionInt('Digite quantidade de paginas: ', {limitMessage: 'Digite um numero valido'});
            console.clear()
            console.log('***** ALTERAR CADASTRO DE UM LIVRO *****');
            console.log('Dados alterados: \n');
            console.log(`Titulo: ${l.titulo}`);
            console.log(`\t- Autor: ${l.autor}`);
            console.log(`\t- pag: ${l.paginas}`);
            cont()
            console.clear()
        }
    }
    if (!this.found) {
        console.log('Livro nao encontrado!!!');
        cont()
        console.clear()
    }
}

// Delete

function excluirLivro() {
    console.clear()
    this.found = found;
    console.log('***** EXCLUIR CADASTRO DE UM LIVRO *****');
    let excluirLivro = readline.questionInt('Digite o ID do Livro a ser excluido: ', {limitMessage: 'Digite um numero valido'});
    for (const l of livros) {
        if (l.id == excluirLivro) {
            this.found = true;
            let indice = livros.indexOf(l)
            console.log(`O registro do "${l.titulo}" foi excluido!!!`);
            livros.splice(indice, 1)
            cont()
            console.clear()
        }
    }
    
    if (!this.found) {
        console.log('ID nao encontrado!!!');
        cont()
        console.clear()
    }
}

let loop = true;

do {
    console.clear()
    menu();
    opcaoMenu = readline.questionInt('Escolha uma opcao: ', {limitMessage: 'Digite um numero valido'});
    switch (opcaoMenu) {
        case 0:
            console.clear();
            console.log('Saindo do sistema!!!');
            loop = false;
            break;
        case 1:
            if (geradorID == null) {
                console.clear()
                console.log('Nao ha registro!!!');
                cont()
                console.clear()
                break
            } else {
                listarLivros();
                cont()
                console.clear()
                break;
            }
        case 2:
            console.clear()
            adicionarLivro();
            do {
                console.clear()
                subMenu()
                this.novaIteracao = novaIteracao;
                opcaoMenu2 = readline.questionInt('Escolha uma opcao: ', {limitMessage: 'Digite um numero valido'});
                switch (opcaoMenu2) {
                    case 1:
                        this.novaIteracao = true;
                        adicionarLivro()
                        break;
                    case 2:
                        menu()
                        break;
                    default:
                        break;
                }
            } while (this.novaIteracao);
            console.clear();
            break;
        case 3:
            console.clear()
            procurarLivro();
            do {
                subMenu()
                this.novaIteracao = novaIteracao;
                opcaoMenu2 = readline.questionInt('Escolha uma opcao: ', {limitMessage: 'Digite um numero valido'});
                switch (opcaoMenu2) {
                    case 1:
                        this.novaIteracao = true;
                        procurarLivro()
                        break;
                    case 2:
                        menu()
                        break;
                    default:
                        break;
                }
            } while (this.novaIteracao);
            console.clear();
            break;
        case 4:
            console.clear()
            alterarLivro();
            do {
                subMenu()
                this.novaIteracao = novaIteracao;
                opcaoMenu2 = readline.questionInt('Escolha uma opcao: ', {limitMessage: 'Digite um numero valido'});
                switch (opcaoMenu2) {
                    case 1:
                        this.novaIteracao = true;
                        alterarLivro()
                        break;
                    case 2:
                        menu()
                        break;
                    default:
                        break;
                }
            } while (this.novaIteracao);
            console.clear();
            break;
        case 5:
            console.clear()
            excluirLivro();
            do {
                subMenu()
                this.novaIteracao = novaIteracao;
                opcaoMenu2 = readline.questionInt('Escolha uma opcao: ', {limitMessage: 'Digite um numero valido'});
                switch (opcaoMenu2) {
                    case 1:
                        this.novaIteracao = true;
                        excluirLivro()
                        break;
                    case 2:
                        menu()
                        break;
                    default:
                        break;
                }
            } while (this.novaIteracao);
            console.clear();
            break;
        default:
            console.log('Opcao invalida');
            break;
    }
} while (loop);
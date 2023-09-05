
// Importar o módulo readline
const { log } = require('console');
const readline = require('readline');

// Criar uma interface de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Criar um array para armazenar os alunos
let alunos = [];

// Criar uma função para cadastrar um aluno
function cadastrarAluno() {
  // Perguntar o nome do aluno
  rl.question('Digite o nome do aluno: ', (nome) => {
    // Perguntar as três notas do aluno
    rl.question('Digite as três notas do aluno separadas por espaço: ', (notas) => {
      // Converter as notas em números e calcular a média
      notas = notas.split(' ').map(Number);
      let media = (notas[0] + notas[1] + notas[2]) / 3;
      // Criar um objeto com o nome, as notas e a média do aluno
      let aluno = {
        nome: nome,
        notas: notas,
        media: media
      };
      // Adicionar o aluno ao array de alunos
      alunos.push(aluno);
      // Mostrar uma mensagem de sucesso
      console.log('Aluno cadastrado com sucesso!');
      // Chamar a função para mostrar o menu principal
      mostrarMenu();
    });
  });
}

// Criar uma função para listar os alunos
function listarAlunos() {
  // Verificar se há alunos cadastrados
  if (alunos.length === 0) {
    // Mostrar uma mensagem de erro
    console.log('Não há alunos cadastrados!');
  } else {
    // Mostrar o cabeçalho da tabela
    console.log('Nome\tNota 1\tNota 2\tNota 3\tMédia');
    // Percorrer o array de alunos e mostrar os dados de cada um
    for (let aluno of alunos) {
      console.log(`${aluno.nome}\t${aluno.notas[0]}\t${aluno.notas[1]}\t${aluno.notas[2]}\t${aluno.media.toFixed(2)}`);
    }
  }
  // Chamar a função para mostrar o menu principal
  mostrarMenu();
}
// Criar uma função para excluir um aluno
function excluirAluno() {
    // Perguntar o nome do aluno a ser excluído
    rl.question('Digite o nome do aluno a ser excluído: ', (nome) => {
      // Procurar o aluno no array de alunos
      let indice = alunos.findIndex(aluno => aluno.nome === nome);
      // Verificar se o aluno foi encontrado
      if (indice === -1) {
        // Mostrar uma mensagem de erro
        console.log('Aluno não encontrado!');
      } else {
        // Remover o aluno do array de alunos
        alunos.splice(indice, 1);
        // Mostrar uma mensagem de sucesso
        console.log('Aluno excluído com sucesso!');
      }
      // Chamar a função para mostrar o menu principal
      mostrarMenu();
    });
  }

  function alterarNota() {
    rl.question('Digite o nome do aluno a ser alterado: ', (nome) => {
      let indice = alunos.findIndex(aluno => aluno.nome === nome);
  
      if (indice === -1) {
        console.log('Aluno não encontrado!');
        mostrarMenu();
      } else {
        rl.question('Digite qual nota será alterada (1, 2 ou 3): ', (nota) => {
          if (nota < 1 || nota > 3) {
            console.log('Nota inválida!');
            mostrarMenu();
          } else {
            rl.question('Digite o novo valor da nota: ', (valor) => {
              valor = Number(valor);
  
              if (valor < 0 || valor > 10 || isNaN(valor)) {
                console.log('Valor inválido!');
                mostrarMenu();
              } else {
                alunos[indice].notas[nota - 1] = valor;
                alunos[indice].media = (alunos[indice].notas[0] + alunos[indice].notas[1] + alunos[indice].notas[2]) / 3;
                console.log('Nota alterada com sucesso!');
                mostrarMenu();
              }
            });
          }
        });
      }
    });
  }
  

// Criar uma função para mostrar o menu principal
function mostrarMenu() {
  // Mostrar as opções do menu
  console.log(' ---- Escolha uma opção: ----');
  console.log(' ---- MENU ----');
  console.log('1 --- Cadastrar um aluno ---');
  console.log('2 --- Listar os alunos ---');
  console.log('3 --- Excluir Aluno ---');
  console.log('4 --- Alterar Nota ---');
  console.log('5 --- Sair do Sistema');
  // Perguntar a opção do usuário
  rl.question('Digite a opção desejada: ', (opcao) => {
    // Verificar qual opção foi escolhida e chamar a função correspondente
    switch (opcao) {
      case '1':
        cadastrarAluno();
        break;
      case '2':
        listarAlunos();
        break;
      case '3':
        excluirAluno();
      case '4':
        alterarNota(); 
        break;
      case '5':
        // Fechar a interface de readline e encerrar o programa
        rl.close();
        break;
      default:
        // Mostrar uma mensagem de erro e chamar a função para mostrar o menu novamente
        console.log('Opção inválida!');
        mostrarMenu();
    }
  });
}

// Chamar a função para mostrar o menu principal pela primeira vez
mostrarMenu();
//Variaveis
const dataAtual = new Date().toLocaleDateString('pt-BR');
let dataRetirada;
let dataFichaDefinida;
let banco = lerBanco()
let Alunos = banco.alunos
let DADOS_INICIAIS = {
  //Banco de Dados
alunos: [
    { cpf: '19283746501', nome: 'João Pereira', ficha: 0, },
    { cpf: '98765432109', nome: 'Maria Schmitt', ficha: 0, },
    { cpf: '12345678912', nome: 'Pedro Souza', ficha: 0, },
    { cpf: '55566677788', nome: 'Ana Clara', ficha: 0, },
    { cpf: '99988877766', nome: 'Lucas Martins', ficha: 0, },
    { cpf: '11122233344', nome: 'Juliana Costa', ficha: 0, },
    { cpf: '44455566677', nome: 'Carlos Eduardo', ficha: 0, },
    { cpf: '88899900011', nome: 'Fernanda Lima', ficha: 0, },
    { cpf: '22233344455', nome: 'Roberto Alves', ficha: 0, },
    { cpf: '66677788899', nome: 'Camila Rocha', ficha: 0, }
    ],
  };
function darFichas(){
  verificacao(1, dataRetirada, dataAtual, dataAtual, dataFichaDefinida, "Tentativa de Definição Dupla!")
    for(let index = 0; index < Alunos.length; index++){
      alunos[index].ficha = 1;
    };
    dataFichaDefinida = dataAtual
    console.log("Fichas definidas com sucesso");
    };
function Retirar(){
  let Input = document.getElementById('cpfPlaced');
  let cpfInput = Input.value
  verificacao(1, dataRetirada, dataAtual, 0, 1, "Tentativa de Retirada dupla!")
    for(i = 0; i < lista.length; i++){
      cpf = lista[i].cpf
      if(cpfInput == cpf && lista[i].ficha == 1){
        lista[i].ficha = 0;
        dataRetirada = dataAtual;
        console.log("Ficha Retirada com sucesso");
      }
    };
  };
// Funções
function verificacao(Modo, V1, V2, V3, V4, R) {
  //Modo = Modo que vai ser utilizado. V1 - V4 = Valores a serem Utilizados. R = Mensagem do Return
  if(Modo==1){
    if(V1 == V2 || V3 == V4){return console.log(`${R}`)}}
}
function lerBanco() {
  if (localStorage.getItem('banco') === null) {gravarBanco(DADOS_INICIAIS);}
  return JSON.parse(localStorage.getItem('banco'));
}

function gravarBanco(banco) {localStorage.setItem('banco', JSON.stringify(banco));}
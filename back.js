//Variaveis
const dataAtual = new Date().toLocaleDateString('pt-BR');
let dataRetirada;
let dataFichaDefinida;
let R;
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
let banco = lerBanco()
let Alunos = banco.alunos
//Função dar Ficha
function darFichas(){
  verificacao(1, dataRetirada, dataAtual, dataAtual, dataFichaDefinida)
  if(R == true){return console.log("Tentativa de Definição Dupla!")}
  for(let index = 0; index < Alunos.length; index++){
    lerBanco()
    Alunos[index].ficha = 1
  };
    dataFichaDefinida = dataAtual
    gravarBanco(banco)
    console.log("Fichas definidas com sucesso");
    };
//função Retirar
function Retirar(){
  //variaveis
  event.preventDefault()//interrompe recarregamento
  let Input = document.getElementById('cpfPlaced').value
  //verificação
  if(dataRetirada == dataAtual){return console.log("Tentativa de Retirada dupla!")}
  for(let index = 0; index < Alunos.length; index++){
    cpf = Alunos[index].cpf
    if(Input == cpf && Alunos[index].ficha == 1){
      Alunos[index].ficha = 0;
      dataRetirada = dataAtual;
      gravarBanco(banco)
      console.log("Ficha Retirada com sucesso");
    }
  };
};
// Funções
function verificacao(Modo, V1, V2, V3, V4) {
  //Modo = Modo que vai ser utilizado. V1 - V4 = Valores a serem Utilizados. R = Mensagem do Return
  if(Modo==1){
    if(V1 == V2 || V3 == V4){R = true}}
}
function lerBanco() {
  if (localStorage.getItem('banco') === null) {gravarBanco(DADOS_INICIAIS);}
  return JSON.parse(localStorage.getItem('banco'));
}

function gravarBanco(banco) {localStorage.setItem('banco', JSON.stringify(banco));}
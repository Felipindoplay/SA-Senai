const dataAtual = new Date().toLocaleDateString('pt-BR');
let dataRetirada;
let dataFichaDefinida;
let DADOS_INICIAIS = {
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
  if(dataRetirada == dataAtual || dataAtual == dataFichaDefinida){
    return console.log("Tentativa de Definição dupla!")
  }
  else{
    let banco = helpFuncs(1, )
    let lista = banco.alunos;
    for(let i = 0; i < lista.length; i++){
      lista[i].ficha = 1;
    };
    dataFichaDefinida = dataAtual
    console.log("Fichas definidas com sucesso");
    };
  };
function Retirar(){
  let Input = document.getElementById('cpfPlaced');
  let cpfInput = Input.value
  if(dataRetirada == dataAtual){
    return console.log("Tentativa de Retirada dupla!");
  }
  else{
    let banco = helpFuncs(1, )
    let lista = banco.alunos;
    for(i = 0; i < lista.length; i++){
      cpf = lista[i].cpf
      if(cpfInput == cpf && lista[i].ficha == 1){
        lista[i].ficha = 0;
        dataRetirada = dataAtual;
        console.log("Ficha Retirada com sucesso");
      }
    };
  };
};
function helpFuncs(funcID, addInfo1, addInfo2){
  if(funcID==1){
    if (localStorage.getItem('banco') === null) {
      helpFuncs(2, DADOS_INICIAIS);
    }
    return JSON.parse(localStorage.getItem('banco'));
  }
  if(funcID==2){localStorage.setItem('banco', JSON.stringify(addInfo1));}
}
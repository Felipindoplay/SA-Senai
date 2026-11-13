const dataAtual = new Date().toLocaleDateString('pt-BR');
let dataRetirada
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
  if(dataRetirada == dataAtual){
    return console.log("Tentativa de Definição dupla!")
  }
  else{
    let lista = DADOS_INICIAIS.alunos
    for(let i = 0; i < lista.length; i++){
      lista[i].ficha = 1
    }
    console.log("Fichas definidas com sucesso")
    }
  }
function Retirar(cpfInput){
  if(dataRetirada == dataAtual){
    return console.log("Tentativa de Retirada dupla!")
  }
  else{
    let lista = DADOS_INICIAIS.alunos
    for(i = 0; i < lista.length; i++){
      let cpf = lista[i].cpf
      if(cpf == cpf && ficha == 1){
        lista[i].ficha = 0
        dataRetirada = dataAtual
        console.log("Ficha Retirada com sucesso")
      } 
    }
  }
}
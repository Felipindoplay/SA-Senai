const dataAtual = new Date().toLocaleDateString('pt-BR');
let dataRetirada
let DADOS_INICIAIS = {
alunos: [
    { cpf: '19283746501', nome: 'João Pereira', ficha: 0, usou_ficha: false },
    { cpf: '98765432109', nome: 'Maria Schmitt', ficha: 0, usou_ficha: false },
    { cpf: '12345678912', nome: 'Pedro Souza', ficha: 0, usou_ficha: false },
    { cpf: '55566677788', nome: 'Ana Clara', ficha: 0, usou_ficha: false },
    { cpf: '99988877766', nome: 'Lucas Martins', ficha: 0, usou_ficha: false },
    { cpf: '11122233344', nome: 'Juliana Costa', ficha: 0, usou_ficha: false },
    { cpf: '44455566677', nome: 'Carlos Eduardo', ficha: 0, usou_ficha: false },
    { cpf: '88899900011', nome: 'Fernanda Lima', ficha: 0, usou_ficha: false },
    { cpf: '22233344455', nome: 'Roberto Alves', ficha: 0, usou_ficha: false },
    { cpf: '66677788899', nome: 'Camila Rocha', ficha: 0, usou_ficha: false }
    ],
  };
function editarBanco(operacao, banco){
  if(operacao == 1){
    //Editar Banco
    localStorage.setItem('banco', JSON.stringify(banco));
  }
  else{
    //caso banco não exista, cria ele
    if (localStorage.getItem('banco') === null) {
      editarBanco(1, DADOS_INICIAIS);
    }
    //Ler Banco
    return JSON.parse(localStorage.getItem('banco'));
  } 
}
function darFichas(){
  if(dataRetirada == dataAtual){
    return null
  }
  else{
    let banco = editarBanco(2, )
    function buscarPorId(lista, id) {
      for (let i = 0; i < lista.length; i++) {
        if (lista[i].id == id) return lista[i];
      }
      return null;
    }
    }
  }
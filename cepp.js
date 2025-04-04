function coletarCep() {
    let cep = document.querySelector("#cep").value
    console.log(cep)
    Dados(cep)
}

//https://viacep.com.br/ws/01001000/json/
//todas as vezes que mestura texto com java strip tem que interpolarizar usando carse. 
async function Dados(cep) {
  let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json() )
  console.log(dados)
  dadosTela(dados)
}
//permuta dos dados na tela
function dadosTela(dados) {
  document.querySelector("#endereco").value =  dados.logradouro;
  document.querySelector("#bairro").value =  dados.bairro; 
  document.querySelector("#cidade").value = dados.localidade;
  document.querySelector("#estado").value = dados.estado;
  document.querySelector("#regiao").value = dados.regiao;
  document.querySelector("#complemento").value = dados.complemento;
}

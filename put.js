//Array de parametros 'chave=valor'
let params = window.location.search.substring(1).split('&');

//Criar objeto que vai conter os parametros
let paramArray = {};

//Passar por todos os parametros
for(var i=0; i<params.length; i++) {
    //Dividir os parametros chave e valor
    var param = params[i].split('=')

    //Adicionar ao objeto criado antes
    paramArray[param[0]] = param[1]
}

let idUsuario = paramArray['id']

function Get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function usuarioPorId(idUsuario) {
  
    let data = Get('https://api.box3.work/api/Contato/36092947-1c6d-4b24-856c-b31a4cebce82/'+idUsuario)
    let usuario = JSON.parse(data)

    let dataNascimento = usuario.dataNascimento.substr(0,10);
   
    document.getElementById('nome').value = usuario.nome
    document.getElementById('telefone').value = usuario.telefone
    document.getElementById('email').value = usuario.email
    document.getElementById('ativo').value = usuario.ativo
    document.getElementById('dataNascimento').value = dataNascimento
}
usuarioPorId(idUsuario)

function Put(url, body) {
    let request = new XMLHttpRequest()
    request.open("PUT", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
   
    request.onload = function () {
        console.log(this.responseText)
        window.location.href = "index.html?atualizou=true"
    }

    return request.responseText
}
   
function atualizarContato() {
    event.preventDefault()
    let url = 'https://api.box3.work/api/Contato/36092947-1c6d-4b24-856c-b31a4cebce82/'+idUsuario
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let ativo = document.getElementById('ativo').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    
    let body = {
        "nome" : nome,
        "telefone" : telefone,
        "email" : email,
        "ativo" : ativo,
        "dataNascimento" : dataNascimento,
    }
    

    Put(url, body)
}
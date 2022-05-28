// Token = 36092947-1c6d-4b24-856c-b31a4cebce82

// https://api.box3.work/api/Contato/36092947-1c6d-4b24-856c-b31a4cebce82
function Get(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario) {
    let linha = document.createElement("tr")
    let tdId = document.createElement("td")
    let tdNome = document.createElement("td")
    let tdTelefone = document.createElement("td")
    let tdEmail = document.createElement("td")
    let tdAtivo = document.createElement("td")
    let tdDataNascimento = document.createElement("td")
    let tdBotoes = document.createElement("td")

    let buttonEdit = document.createElement('i')
    buttonEdit.id = 'buttonEdit'
    buttonEdit.className = 'fas fa-edit fa-lg p-3'
    buttonEdit.setAttribute('onclick', 'Atualizar('+usuario.id+')')
    let buttonRemove = document.createElement('i')
    buttonRemove.id = 'buttonRemove'
    buttonRemove.className = 'fas fa-trash-alt fa-lg p-3'
    buttonRemove.setAttribute('onclick', 'Delete('+usuario.id+')')
   

    tdId.innerHTML = usuario.id
    tdNome.innerHTML = usuario.nome
    tdTelefone.innerHTML = usuario.telefone
    tdEmail.innerHTML = usuario.email
    tdAtivo.innerHTML = usuario.ativo
    data = new Date(usuario.dataNascimento)
    dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
    tdDataNascimento.innerHTML = dataFormatada
    
    
    

    tdBotoes.appendChild(buttonEdit);
    tdBotoes.appendChild(buttonRemove);


    linha.appendChild(tdId)
    linha.appendChild(tdNome)
    linha.appendChild(tdTelefone)
    linha.appendChild(tdEmail)
    linha.appendChild(tdAtivo)
    linha.appendChild(tdDataNascimento)
    linha.appendChild(tdBotoes)


    return linha
    
}

function main() {
    let data = Get("https://api.box3.work/api/Contato/36092947-1c6d-4b24-856c-b31a4cebce82");
    let usuarios = JSON.parse(data)
    let tabela = document.getElementById('tabelaUsuarios');

    usuarios.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
}

main()

function Delete(id){
    let request = new XMLHttpRequest()
    request.open("DELETE", "https://api.box3.work/api/Contato/36092947-1c6d-4b24-856c-b31a4cebce82/"+id, false)
    request.send()
    // document.location.reload(true)
    window.location.href = "index.html?deletou=true"
}

function Atualizar(id){
    window.location.href = 'atualizar.html?id='+id
}

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

if(paramArray['inseriu'] == 'true') {
    let divMsg = document.getElementById('msg')
    divMsg.className = "bg-success p-2 mb-2"

    let h3msg = document.createElement("h5")
    h3msg.className = "text-white text-center"
    h3msg.innerHTML = "Contato Inserido Com Sucesso!"
    divMsg.appendChild(h3msg)
    setTimeout(function(){
        divMsg.innerHTML = ""
        divMsg.className = ""
    },3000);
}

if(paramArray['deletou'] == 'true') {
    let divMsg = document.getElementById('msg')
    divMsg.className = "bg-success p-2 mb-2"

    let h3msg = document.createElement("h5")
    h3msg.className = "text-white text-center"
    h3msg.innerHTML = "Contato Deletado Com Sucesso!"
    divMsg.appendChild(h3msg)
    setTimeout(function(){
        divMsg.innerHTML = ""
        divMsg.className = ""
    },3000);
}

if(paramArray['atualizou'] == 'true') {
    let divMsg = document.getElementById('msg')
    divMsg.className = "bg-success p-2 mb-2"

    let h3msg = document.createElement("h5")
    h3msg.className = "text-white text-center"
    h3msg.innerHTML = "Contato Atualizado Com Sucesso!"
    divMsg.appendChild(h3msg)
    setTimeout(function(){
        divMsg.innerHTML = ""
        divMsg.className = ""
    },3000);
}




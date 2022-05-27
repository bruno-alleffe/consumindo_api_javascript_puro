function Post(url, body) {
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))
   
    request.onload = function () {
        console.log(this.responseText)
        window.location.href = "index.html?inseriu=true"
    }

    return request.responseText
    
}

function inserirContato() {
    event.preventDefault()
    let url = "https://api.box3.work/api/Contato/36092947-1c6d-4b24-856c-b31a4cebce82"
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

    Post(url, body)
}



/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}
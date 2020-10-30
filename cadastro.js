//Função para rodar script depois de carregar o html
document.addEventListener('DOMContentLoaded', function() {  

    //ano
    var dias = document.getElementById("day");

    for(i = 1; i <= 31; i++){
    var teste = document.createElement("option");
    teste.value = i;
    teste.text = i;
    dias.add(teste, dias.options[i]);

    }

    //mes
    var meses = document.getElementById("month");

    var mes = new Array();
    mes[1] = "Janeiro";
    mes[2] = "Fevereiro";
    mes[3] = "Março";
    mes[4] = "Abril";
    mes[5] = "Maio";
    mes[6] = "Junho";
    mes[7] = "Julho";
    mes[8] = "Agosto";
    mes[9] = "Setembro";
    mes[10] = "Outubro";
    mes[11] = "Novembro";
    mes[12] = "Dezembro";

    for(i = 1; i < mes.length; i++){
    var teste = document.createElement("option");
    teste.value = mes[i];
    teste.text = mes[i];
    meses.add(teste, meses.options[i]);
    }

    //ano
    var anos = document.getElementById("year");

    var ano = new Date();
    var ano = ano.getFullYear();

    for(i = 1960; i <= ano; i++){
        teste = document.createElement("option")
        teste.value = i;
        teste.text = i;
        anos.add(teste, anos.options[i]);
    }

}, false);

//Função para carregar foto
var carregarFoto = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};

//Função para deletar foto
var deletarFoto = function(event) {
    var image = document.getElementById('output');
    image.src = ("assets/user.png");
};

//Função para validação dos dados do fomulário
var emailOgt = function(event){
    var email = document.getElementById('email');
    var er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;

    if (er.exec(email)) {
        return false;
    } else {
        return true;
    }
}

//Funções para campos obrigatórios    
var validar = function(event){
    var email = document.getElementById('email');
    var er = /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2}/;

    //nome
    if (document.getElementById('nome').value == '') {
        return false;
    } 

    //sobrenome   
    if (document.getElementById('sobrenome').value == '') {
        return false;
    } 

    //email
    if (er.exec(email)) {
        return false;
    }
    
    //idioma
    if (document.getElementById('idioma').value == '') {
        return false;
    } 
    //telefone
    if (document.getElementById('telefone').value == '' || document.getElementById('telefone').value == String) {
        return false;
    }

}

//Funções para campos obrigatórios
var icon = document.getElementsByClassName('icon');
var msgErro = document.getElementsByClassName('msgErro');

//Nome
var nomeOgt = function(event) {
    if (document.getElementById('nome').value === '') {
        msgErro[0].style.visibility = 'visible';
        icon[0].innerText = '!';
        icon[0].style.color = 'rgb(255, 166, 0)';
    } else {
        msgErro[0].style.visibility = 'hidden';
        icon[0].innerText = '*';
        icon[0].style.color = 'rgb(0, 0, 0)';
    }
}

//Sobrenome
var sobrenomeOgt = function(event) {
    if (document.getElementById('sobrenome').value === '') {
        msgErro[1].style.visibility = 'visible';
        icon[1].innerText = '!';
        icon[1].style.color = 'rgb(255, 166, 0)';
    } else {
        msgErro[1].style.visibility = 'hidden';
        icon[1].innerText = '*';
        icon[1].style.color = 'rgb(0, 0, 0)';
    }
}

//Email
var emailOgt = function(event) {
    if(document.getElementById('email').value == "" || document.getElementById('email').value.indexOf('@') == -1 || document.getElementById('email').value.indexOf('.') == -1){
        msgErro[2].style.visibility = 'visible';
        icon[3].innerText = '!';
        icon[3].style.color = 'rgb(255, 166, 0)';
    } else {
        msgErro[2].style.visibility = 'hidden';
        icon[3].innerText = '*';
        icon[3].style.color = 'rgb(0, 0, 0)';
    }
}

//Nascimento
var nascimentoOgt = function(event) {
    if (document.getElementById('day').selectedIndex != 0 && document.getElementById('month').selectedIndex != 0 && document.getElementById('year').selectedIndex != 0) {
        msgErro[3].style.visibility = 'hidden';
    } else {
        msgErro[3].style.visibility = 'visible';
    }
}

//Idioma
var idiomaOgt = function(event) {
    if (document.getElementById('idioma').value === '') {
        msgErro[4].style.visibility = 'visible';
        icon[4].innerText = '!';
        icon[4].style.color = 'rgb(255, 166, 0)';
    } else {
        msgErro[4].style.visibility = 'hidden';
        icon[4].innerText = '*';
        icon[4].style.color = 'rgb(0, 0, 0)';
    }
}

//Telefone
var telefoneOgt = function(event) {
    var tel = document.getElementById('telefone');
    //Máscara telefone
    tel.value = tel.value.replace(/\D/g, "");
    tel.value = tel.value.replace(/^(\d{2})(\d)/g, "($1) $2");
    tel.value = tel.value.replace(/(\d)(\d{4})$/, "$1-$2");

    if (tel.value === '' || tel.value === String || tel.value.length < 15) {
        msgErro[5].style.visibility = 'visible';
        icon[8].innerText = '!';
        icon[8].style.color = 'rgb(255, 166, 0)';
    } else {
        msgErro[5].style.visibility = 'hidden';
        icon[8].innerText = '*';
        icon[8].style.color = 'rgb(0, 0, 0)';
    }
}

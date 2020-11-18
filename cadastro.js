var login = JSON.parse(localStorage.getItem('login'));

if (!login) {
    window.location = `login.html`;
}

//pegar itens do localstorage
const func = JSON.parse(localStorage.getItem('users'));

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

//Função para rodar script depois de carregar o html
document.addEventListener('DOMContentLoaded', function() {  
    var nome = document.getElementById('nome');
    var sobrenome = document.getElementById('sobrenome');
    var senha = document.getElementById('senha');
    var email = document.getElementById('email');
    var idioma = document.getElementById('idioma');
    var pais = document.getElementById('pais');
    var nacio = document.getElementById('nacio');
    var telefone = document.getElementById('telefone');    
    var cargo = document.getElementById('cargo');  
    var image = document.getElementById('output');
    //pegar input
    var input = document.getElementsByTagName('input');
    //data
    var dias = document.getElementById("day");
    
    for(i = 1; i <= 31; i++){
    var data = document.createElement("option");
    data.value = i;
    data.text = i;
    dias.add(data, dias.options[i]);
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

    for(i = 1930; i <= ano; i++){
        teste = document.createElement("option")
        teste.value = i;
        teste.text = i;
        anos.add(teste, anos.options[i]);
    }

    console.log(queryString);
    if (queryString != '') {
        nome.value = func[id].nome;
        sobrenome.value = func[id].sobrenome;
        senha.value = func[id].senha;
        email.value = func[id].email;
        dias.value = func[id].dia;
        meses.value = func[id].mes;
        anos.value = func[id].ano;
        idioma.value = func[id].idioma;
        pais.value = func[id].pais;
        nacio.value = func[id].nacio;
        endereco.value = func[id].endereco;
        telefone.value = func[id].telefone;
        cargo.value = func[id].cargo;
        image.src = func[id].foto;  
    } else {
        console.log('sem id')
    }

}, false);


//Funções para campos obrigatórios
var icon = document.getElementsByClassName('icon');
var msgErro = document.getElementsByClassName('msgErro');

var aviso = function(event) {
    // pegando itens pela id
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var email = document.getElementById('email').value;
    var idioma = document.getElementById('idioma').value;
    var tel = document.getElementById('telefone');

    //Nome
    if (nome == '') {
        msgErro[0].style.visibility = 'visible';
        icon[0].innerText = '!';
        icon[0].style.color = 'rgb(255, 166, 0)';
    } else {
        msgErro[0].style.visibility = 'hidden';
        icon[0].innerText = '*';
        icon[0].style.color = 'rgb(0, 0, 0)';
    }
    //Sobrenome
    if (sobrenome === '') {
        msgErro[1].style.visibility = 'visible';
        icon[1].innerText = '!';
        icon[1].style.color = 'rgb(255, 166, 0)';
    } else {
        msgErro[1].style.visibility = 'hidden';
        icon[1].innerText = '*';
        icon[1].style.color = 'rgb(0, 0, 0)';
    }
    //Email
    if(email == "" || email.indexOf('@') == -1 || email.indexOf('.') == -1){
        msgErro[2].style.visibility = 'visible';
        icon[3].innerText = '!';
        icon[3].style.color = 'rgb(255, 166, 0)';
    } else {
        msgErro[2].style.visibility = 'hidden';
        icon[3].innerText = '*';
        icon[3].style.color = 'rgb(0, 0, 0)';
    }
    //Nascimento
    if (document.getElementById('day').selectedIndex != 0 && document.getElementById('month').selectedIndex != 0 && document.getElementById('year').selectedIndex != 0) {
        msgErro[3].style.visibility = 'hidden';
    } else {
        msgErro[3].style.visibility = 'visible';
    }
    //Idioma
    if (idioma === '') {
        msgErro[4].style.visibility = 'visible';
        icon[4].innerText = '!';
        icon[4].style.color = 'rgb(255, 166, 0)';
    } else {
        msgErro[4].style.visibility = 'hidden';
        icon[4].innerText = '*';
        icon[4].style.color = 'rgb(0, 0, 0)';
    }
    //Telefone
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

//Máscara telefone
var mascaraTel = function(event) {
    var tel = document.getElementById('telefone');

    tel.value = tel.value.replace(/\D/g, "");
    tel.value = tel.value.replace(/^(\d{2})(\d)/g, "($1) $2");
    tel.value = tel.value.replace(/(\d)(\d{4})$/, "$1-$2");
}

//variavel com endereco foto
let fotoEnd;
//funcao para pegar endereco foto
function pegarFoto() {
    var foto = document.getElementById('selecionar').files[0];
    var reader = new FileReader();
    reader.onload = function(fileLoadedEvent) {
        fotoEnd = fileLoadedEvent.target.result;
    }
    reader.readAsDataURL(foto);
}

//Função para carregar foto
var carregarFoto = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    pegarFoto();
};

//Função para deletar foto
var deletarFoto = function(event) {
    var image = document.getElementById('output');
    image.src = ("/assets/users/user.png");
};

//Funções para campos obrigatórios    
var validar = function(event){

    event.preventDefault();
    //pegar input
    var input = document.getElementsByTagName('input');
    //criar data
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();

    var dias = document.getElementById("day");
    var meses = document.getElementById("month");
    var anos = document.getElementById("year");

    if (input[0].value === '') {
        aviso();
    } else if (input[1].value === '') {
        aviso();
    } else if (input[3].value == '' || input[3].value.indexOf('@') == -1 || input[3].value.indexOf('.') == -1){
        aviso();
    } else if (document.getElementById('day').selectedIndex == null && document.getElementById('month').selectedIndex == null && document.getElementById('year').selectedIndex == null) {
        aviso();
    } else if (input[4].value === '') {
        aviso();
    } else if (input[8].value === '' || input[8].value === String || input[8].value.length < 15) {
        aviso();
    } else if (queryString != '') {
        func[id] = {id: id, nome: input[0].value, sobrenome: input[1].value, senha: input[2].value, email: input[3].value, dia: dias.value, mes: meses.value, ano: anos.value, data: dia + '/' + mes + '/' + ano, idioma: input[4].value, pais: input[5].value, nacio: input[6].value, endereco: input[7].value, telefone: input[8].value, foto: fotoEnd, cargo: input[9].value, status: 'Active'};

        localStorage.setItem('users', JSON.stringify(func));

        window.location='dashboard.html';
    } else {
        aviso();
        //add itens no localStorage
        func.push({id: func.length, nome: input[0].value, sobrenome: input[1].value, senha: input[2].value, email: input[3].value, dia: dias.value, mes: meses.value, ano: anos.value, data: dia + '/' + mes + '/' + ano, idioma: input[4].value, pais: input[5].value, nacio: input[6].value, endereco: input[7].value, telefone: input[8].value, foto: fotoEnd, cargo: input[9].value, status: 'Active'});

        localStorage.setItem('users', JSON.stringify(func));

        window.location='dashboard.html';
    }
}
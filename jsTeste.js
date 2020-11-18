var funcs = [
    {nome: 'Hannibal Lecter', sobrenome: 'assets/users/9.jpg', data: '14/02/1991', cargo: 'CEO', status: 'Ativo'},
    {nome: 'Simon Pegg', sobrenome: 'assets/users/2.jpg', data: '29/03/2004', cargo: 'CTO', status: 'Ativo'},
    {nome: 'Owen Wilson', sobrenome: 'assets/users/3.jpg', data: '30/08/2013', cargo: 'Estagiario', status: 'Ativo'},
    {nome: 'Vince Vaughn', sobrenome: 'assets/users/4.jpg', data: '30/08/2013', cargo: 'Estagiario', status: 'Ativo'},
    {nome: 'Peter Parker', sobrenome: 'assets/users/5.jpg', data: '17/05/2002', cargo: 'Photographer', status: 'Ativo'}
]


{nome: input[0].value, foto: input[10].value, data: dia + '/' + mes + '/' + ano, cargo: 'Photographer', status: 'Inactive'}

document.addEventListener('DOMContentLoaded', function() {
    var id = document.getElementsByClassName('id');
    var foto = document.getElementsByClassName('img');
    var nome = document.getElementsByTagName('p');
    var dataAdm = document.getElementsByClassName('dataAdm');
    var cargo = document.getElementsByClassName('cargo');
    var presenca = document.getElementsByClassName('presenca');

    if(!localStorage.getItem('users')) {
        console.info('-------> ENTROU AQUI, quem nunca fez isso que atire a primeira pedra <-------')
        localStorage.setItem('users', JSON.stringify({
            nome: ['Jim Carrey', 'Simon Pegg', 'Owen Wilson', 'Vince Vaughn', 'Jamal Malik'], 
            img: ['assets/users/1.jpg', 'assets/users/2.jpg', 'assets/users/3.jpg', 'assets/users/4.jpg', 'assets/users/5.jpg'],
            data: ['14/06/1996', '04/10/2013', '01/01/2020', '01/01/2020', '01/01/2020'],
            cargo: ['Admin', 'Publisher', 'Trainee', 'Trainee', 'Trainee'],
            status: ['Active', 'Active', 'Suspended', 'Suspended', 'Inactive']
        }));
    }   

    var func = JSON.parse(localStorage.getItem('users'))
    

    for (let i = 0; i <= func.cargo.length; i++) {
        id[i].innerHTML = i + 1;
        nome[i].innerHTML = func.nome[i];  
        foto[i].src = func.img[i]; 
        dataAdm[i].innerHTML += func.data[i];
        cargo[i].innerHTML = func.cargo[i]; 
        if (func.status[i] == 'Active') {
            presenca[i].innerHTML = "<span class = 'ponto-verde'></span>";
        } else if (func.status[i] == 'Inactive') {
            presenca[i].innerHTML = "<span class = 'ponto-alaranjado'></span>";
        } else {
            presenca[i].innerHTML = "<span class = 'ponto-vermelho'></span>";
        }        
        presenca[i].innerHTML +=  func.status[i];
    }

}, false);

function excluir(botao){
    botao.parentElement.parentElement.parentElement.remove();
}


var html =
    `<tr class="user">
        <td class="id"></td>
        <td class="nome">
            <div>
                <img src="assets/users/1.jpg" alt="" class="img"> 
                <p></p>
            </div>
        </td>
        <td class="dataAdm"></td>
        <td class="cargo"></td>
        <td class="presenca"></td>
        <td><span class="icon"><i class="fa fa-cog"></i><i class="fa fa-times-circle" onclick="excluir(this)"></i></td>
    </tr>`;



//Funcao para aviso
var aviso = function(event) {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var email = document.getElementById('email').value;
    var idioma = document.getElementById('idioma').value;
    var tel = document.getElementById('telefone');
    //Nome
    if (nome === '') {
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
    } else {
        

        console.log(reader);
        //add itens no localStorage
        func.push({nome: input[0].value + ' ' + input[1].value, foto: '', data: dia + '/' + mes + '/' + ano, cargo: input[9].value, status: 'Active'});
        localStorage.setItem(localStorage.setItem('users', JSON.stringify(func)));
    }



    function excluir(botao){
        botao.parentElement.parentElement.parentElement.remove();
    }
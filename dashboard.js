var login = JSON.parse(localStorage.getItem('login'));

if (!login) {
    window.location = `login.html`;
}


var id = document.getElementsByClassName('id');
var foto = document.getElementsByClassName('img');
var nome = document.getElementsByTagName('p');
var dataAdm = document.getElementsByClassName('dataAdm');
var cargo = document.getElementsByClassName('cargo');
var presenca = document.getElementsByClassName('presenca');

document.addEventListener('DOMContentLoaded', function() {

    if(!localStorage.getItem('users')) {
        console.warn('-------> ENTROU AQUI, quem nunca fez isso que atire a primeira pedra <-------')
        localStorage.setItem('users', JSON.stringify([
            {id: 0, nome: 'Hannibal', sobrenome: 'Lecter', senha: 'Qwer1234', email: 'lecter@gmail.com', dia: '31', mes: 'Dezembro', ano: '1937', data: '14/02/1991', idioma: 'Ingles', pais: 'EUA', nacio:'Americano', endereco: 'Logo ali', telefone: '(47) 99999-9999', foto: 'assets/users/9.jpg',  cargo: 'CEO', status: 'Active'},
            {id: 1, nome: 'Simon', sobrenome: 'Pegg', senha: 'Qwer1234', email: 'pegg@gmail.com', dia: '14', mes: 'Fevereiro', ano: '1970', data: '29/03/2004', idioma: 'Ingles', pais: 'EUA', nacio:'Americano', endereco: 'Logo ali', telefone: '(47) 99999-9999', foto: 'assets/users/2.jpg', cargo: 'CTO', status: 'Active'},
            {id: 2, nome: 'Owen', sobrenome: 'Wilson', senha: 'Qwer1234', email: 'wilson@gmail.com', dia: '18', mes: 'Novembro', ano: '1968', data: '30/08/2013', idioma: 'Ingles', pais: 'EUA', nacio:'Americano', endereco: 'Logo ali', telefone: '(47) 99999-9999', foto: 'assets/users/3.jpg', cargo: 'Trainee', status: 'Inactive'},
            {id: 3, nome: 'Vince', sobrenome: 'Vaughn', senha: 'Qwer1234', email: 'vaughn@gmail.com', dia: '28', mes: 'Março', ano: '1970', data: '30/08/2013', idioma: 'Ingles', pais: 'EUA', nacio:'Americano', endereco: 'Logo ali', telefone: '(47) 99999-9999', foto: 'assets/users/4.jpg', cargo: 'Trainee', status: 'Inactive'},
            {id: 4, nome: 'Peter', sobrenome: 'Parker', senha: 'Qwer1234', email: 'parker@clarim.net', dia: '27', mes: 'Junho', ano: '1975', data: '17/05/2002', idioma: 'Ingles', pais: 'EUA', nacio:'Americano', endereco: 'Logo ali', telefone: '(47) 99999-9999', foto: 'assets/users/5.jpg', cargo: 'Photographer', status: 'Suspended'}
        ]));
    } 

    //variavel que recebe valores de users do localStorage
    var func = JSON.parse(localStorage.getItem('users'));
    //variavel que contem tabel
    var tabela = document.getElementsByTagName('table');
    //variavel com elementos da tabela
    var html = ``;

    for (let i = 0; i < func.length; i++) {

        
        
        html = `<tr class="user">
            <td class="id">${i+1}</td>
            <td class="nome">
                <div>
                    <img src="${func[i].foto}" alt="" class="img"> 
                    <p>${func[i].nome} ${func[i].sobrenome}</p>
                </div>
            </td>
            <td class="dataAdm">${func[i].data}</td>
            <td class="cargo">${func[i].cargo}</td>
            <td class="presenca">
                <span class='ponto-verde'></span>
                <select class="status" onchange="presenca(${func[i].id})">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Suspended">Suspended</option>
                </select>
            </td>
            <td><div class="icon">
                    <i class="fa fa-cog" onClick="editar(${func[i].id})"></i>
                    <i class="fa fa-times-circle" onclick="excluir(this)"></i>
                </div>
            </td>
        </tr>`;

        tabela[0].innerHTML += html;
        //
    }

    // pegar status
    var teste = document.getElementsByClassName('status');
    var ponto = document.getElementsByTagName('span');
    for (let i = 0; i < func.length; i++){
        teste[i].value = func[i].status;
        if (teste[i].value == 'Active') {
            ponto[i].className = 'ponto-verde';
        } else if (teste[i].value == 'Inactive') {
            ponto[i].className = 'ponto-alaranjado';
        } else {
            ponto[i].className = 'ponto-vermelho';
        }
    }
    

}, false);

//funcao status
var presenca = function(id){
    var func = JSON.parse(localStorage.getItem('users'));
    var status = document.getElementsByClassName('status');
    var ponto = document.getElementsByTagName('span');
    
    if (status[id].value == 'Active') {
        ponto[id].className = 'ponto-verde';
        alert('Status do usuário alterado para ATIVO');
    } else if (status[id].value == 'Inactive') {
        ponto[id].className = 'ponto-alaranjado';
        alert('Status do usuário alterado para INATIVO');
    } else {
        ponto[id].className = 'ponto-vermelho';
        alert('Status do usuário alterado para SUSPENSO');
    }
    // inserir novo status ao usuario
    func[id].status = status[id].value;
    // inserir itens no local storage
    localStorage.setItem('users', JSON.stringify(func))
}

//função para excluir elementos
function excluir(botao){
    var func = JSON.parse(localStorage.getItem('users'));
    var item = document.getElementsByClassName('fa-times-circle');
    var posicao;
    // contador para encontrar item clicado
    for (let i = 0; i < item.length; i++) {
        if (botao == item[i]) {
            posicao = i;
        } 
    }
    // variavel que guarda item clicado
    var pivo = func[posicao];
    //trocar itens de posicacao
    if (posicao == 0) {
        for (let i = 0; i < func.length; i++) {
            id[i].textContent = i;
        }
        func.shift();
    } else {
        for (let i = posicao; i < func.length; i++) {
            func[i] = func[i + 1];
            // atualizar id
            id[i].textContent = i;
        }
        func.pop();
    }
    
    console.log(func);
    // inserir itens no local storage
    localStorage.setItem('users', JSON.stringify(func));
    // remove item html
    item[posicao].parentElement.parentElement.parentElement.remove();
}

function editar(id){
    window.location=`cadastro.html?id=${id}`;    
}

function exit(){
    localStorage.removeItem('login');
    document.location.reload(true)
}
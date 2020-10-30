document.addEventListener('DOMContentLoaded', function() {
    var id = document.getElementsByClassName('id');
    var foto = document.getElementsByClassName('img');
    var nome = document.getElementsByTagName('p');
    var dataAdm = document.getElementsByClassName('dataAdm');
    var cargo = document.getElementsByClassName('cargo');
    var presenca = document.getElementsByClassName('presenca');


    var func = {
        nome: ['Jim Carrey', 'Simon Pegg', 'Owen Wilson', 'Vince Vaughn', 'Jamal Malik'], 
        img: ['assets/users/1.jpg', 'assets/users/2.jpg', 'assets/users/3.jpg', 'assets/users/4.jpg', 'assets/users/5.jpg'],
        data: ['14/06/1996', '04/10/2013', '01/01/2020', '01/01/2020', '01/01/2020'],
        cargo: ['Admin', 'Publisher', 'Trainee', 'Trainee', 'Trainee'],
        status: ['Active', 'Active', 'Suspended', 'Suspended', 'Inactive']
    };

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

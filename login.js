document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementsByTagName('form');
    const func = JSON.parse(localStorage.getItem('users'));
    var login = JSON.parse(localStorage.getItem('login'));
    
    form[0].addEventListener('submit', function(e) {
        var input = document.getElementsByTagName('input');
        var msg = document.getElementsByTagName('p');

        e.preventDefault();

        for (let i = 0; i < func.length; i++) {
            if (func[i].email == input[0].value & func[i].senha == input[1].value & func[i].status == 'Active') {
                msg[0].style.visibility = 'hidden';
                login += 1;
                localStorage.setItem('login', JSON.stringify(login));
                window.location=`dashboard.html`;
                break;
            } else {
                msg[0].style.visibility = 'visible';
            }           
        }
    })

  }, false);
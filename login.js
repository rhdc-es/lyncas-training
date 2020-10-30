document.addEventListener('DOMContentLoaded', function() {

    //var onButtonClick = 
    const form = document.getElementsByTagName('form');

    form[0].addEventListener('submit', function(e) {
        var input = document.getElementsByTagName('input');
        var teste = document.getElementsByTagName('p');

        
        if (input[0].value != "admin") {
            e.preventDefault();
            teste[0].style.visibility = 'visible';
        } else if (input[1].value != "lyncas@2020"){
            e.preventDefault();
            teste[0].style.visibility = 'visible';
        }
    })

  }, false);
 

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
            input.style.background = '#31a935';
            input.style.color = 'white';
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
            input.style.background = '#f44336';
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
            input.style.background = '#ffbdad';
        }
        else if(e.target.innerHTML == '%'){
            string = eval(string)/100;
            // string = string(string/100);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
            input.style.background = '#fff';
            input.style.color = '#000';
        }    
    });

})
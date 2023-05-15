let string = "";

function addClass () {
   
  let x = document.querySelector('input');
   x.classList.add('on');
 setTimeout(() => {
   x.classList.remove('on');
 }, 1250);
  }

   //x.classList.remove('on');

let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '=')
        {
           string = eval(string);
           document.querySelector('input').value  = string;

        }
        else if(e.target.innerHTML == 'AC')
        {
           string = "";
           document.querySelector('input').value  = string;

        }
        else if(e.target.innerHTML == 'C')
        {
          document.querySelector('input').value  = "NOT IN USE";

        }
        else if(e.target.innerHTML == '+/-')
        {
           
           document.querySelector('input').value  = '-(' + string + ')';

        }
        else{
        string = string + e.target.innerHTML;
        document.querySelector('input').value  = string;
        }

        
    })
})
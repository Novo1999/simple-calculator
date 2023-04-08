let screenValue = '';

const btns = document.querySelectorAll('.btn');

btns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            screenValue = eval(screenValue);
            document.querySelector('input').value = screenValue;
        }
        else if(e.target.innerHTML == 'C'){
            screenValue = '';
            document.querySelector('input').value = screenValue;
        }
        else{
            screenValue = screenValue + e.target.innerHTML;
            document.querySelector('input').value = screenValue;
        }
    });
});


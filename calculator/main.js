const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn  = document.querySelector('.btn-clear');
for (let i = 0; i < btns.length; i++) {
     btns[i].addEventListener('click',  () => {
                let number = btns[i].getAttribute('data-num');
                screen.value  += number;
                //console.log(screen.value);
                
     })
}

equalBtn.addEventListener('click', () => {
    if (screen.value === '' ) {
         alert("Please fill the number ");
    }else{
        let value = eval(screen.value);
        screen.value = value;
    }
})
clearBtn.addEventListener('click', () => {
       screen.value = '';
})




//console.log(equalBtn,clearBtn);
//console.log(screen);
//console.log(btns);

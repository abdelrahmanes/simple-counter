let count = 0, 
increase = document.getElementById('increase'),
num = document.getElementById('number');

increase = () => {
    count++ ;
    num.textContent = count;
    checkColor();
}

decrease = () => {
    count-- ;
    num.textContent =count;
    checkColor();
}

reset = () => {
    count = 0;
    num.textContent = count;
    checkColor();
}
function checkColor() {
    if(count<0){
        num.style.color = 'red'
    }else if(count>0){
        num.style.color = 'green'
    }else{
        num.style.color='hsl(209, 61%, 16%)'
    }
    
}

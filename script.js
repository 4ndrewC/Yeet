const yeetbutton = document.querySelector('.counter-section button');
let counter = document.querySelector('.countNum h2')
console.log(yeetbutton);

if(yeetbutton!=null){
    yeetbutton.addEventListener('click', countUp);
}
function countUp(){
    counter.innerHTML++;
}

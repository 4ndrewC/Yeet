const yeetbutton = document.querySelector('.counter-section button');
let counter = document.querySelector('.countNum h2')
console.log(yeetbutton);
let clickSound = new Audio('MinecraftPlaceSound.mp3');
if(yeetbutton!=null){
    yeetbutton.addEventListener('click', countUp,);
    
}
function countUp(){
    counter.innerHTML++;
    clickSound = null;
    clickSound = new Audio('MinecraftPlaceSound.mp3');
    clickSound.play();
}

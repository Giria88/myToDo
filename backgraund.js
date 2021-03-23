const body = document.querySelector('body');
const imageNumber = 4;

function showImage(number){
    const img = new Image();
    img.src = `kartinki/${number + 1}.jpg`;
    img.classList.add('bgImage');
    body.prepend(img);
}

function getRandom(){
    const number = Math.floor(Math.random() * 4);
    return number;
}
function init(){
    const randomNumber = getRandom();
    showImage(randomNumber);
}

init();
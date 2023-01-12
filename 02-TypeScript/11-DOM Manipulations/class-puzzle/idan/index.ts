const diceGen:HTMLHeadingElement|null = document.querySelector("#diceGen")

const randomNumber = getRandomInt(6);
if(diceGen){
    diceGen.innerHTML = `<div class="die"><h1>${randomNumber}</h1></div>`
}



function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1;
}
console.log("hello");

let x = 1;

let tempRightNow = 81;

tempRightNow = tempRightNow + 1;

console.log("temp before too much Diablo" , tempRightNow);

tempRightNow += 5;

tempRightNow ++;
console.log(tempRightNow);
let tempLater = '<p class="container">cool</p>'
let game = "zelda";
let title = "TotK"
//let year = "2023";
game = game + ' ' + title;
console.log('game' , game);

let isCloudy = false;

let toReplace = document.querySelector('#fun2');

toReplace.innerHTML = tempLater;

if (isCloudy === false) {
    console.log('clear skies.');
} else {
    console.log('rainy day');
}
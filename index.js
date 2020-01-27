// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

var i;

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
return gifts;
} 
wrapGifts(gifts);

function writeCards(names, event) {
    let new_array = []
    for (let i = 0; i < names.length; i++) {
        new_array.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return new_array
}

function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i--);
    }
    
}
// function countDown(10) {
//     while (let i = 10, i > 0, i--) {
//         console.log 
//     }
// }
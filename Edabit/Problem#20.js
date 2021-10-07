//This isn't from Edabit. This is just a funny Find the Price game I made because I was bored.

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin
})
var x = Math.floor(Math.random() * 100)
function Price(input2){

if(isNaN(input2)){
    console.log("Please, input a number!")
}
else if(!isNaN(input2)){
    if(input2 > 100){
        console.log("Number cannot be higher than 100!")
    }
    else if(input2 < 0){
        console.log("Number cannot be below 0!")
    }
    else{
if(input2 > x){
console.log("Number is lower!")
}
else if(input2 < x){
console.log("Number is higher!")
}
else if(input2 == x){
console.log("Congrats! The number was " + x)
rl.close();
}
    }
}
}
rl.on("line", (y) => {
Price(y)
})

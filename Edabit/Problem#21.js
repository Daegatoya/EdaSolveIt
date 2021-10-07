//Check if the given number is harshade.

function IsHarshade(...input){
    var x = input.toString()
var y = x.split("").map(function(a){
    return parseInt(a, 10);
})
var z = (previousValue, currentValue) => previousValue + currentValue;
var y2 = y.reduce(z)
var lol = input / y2
if(lol % 1 == 0){
    console.log(true)
}
else if(lol % 1 != 0){
    console.log(false)
}
}

IsHarshade(516)

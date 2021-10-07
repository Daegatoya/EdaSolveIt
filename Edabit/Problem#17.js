//Check if the highest number minus the lowest number of the given array appears inside this said array.

function HappyorSad(...input){
 if(typeof(input) == "string"){
        return console.log(":/");
    }
var x = input.sort(function (a, b){
    return a - b;
})
var y = x.pop();
var z = x.shift();
var p = y - z;
var Reg = new RegExp(p, 'g');
var u = x.toString()
if(u.match(Reg)){
    return console.log(":)");
}
else if(!u.match(Reg)){
    return console.log(":(");
}
}

HappyorSad([1, 5, 3, 4])

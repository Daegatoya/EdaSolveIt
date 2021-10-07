//Change the order of every words from the given string to make it reversed.

function SwitchString(...input){
var x = input.toString();
var y = x.split(" ")
var z = y.reverse()
var t = z.join(" ")
var p = t.toString()
console.log(p)
}

SwitchString("Hello World I'm Eli_!")

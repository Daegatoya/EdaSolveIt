//Check how many time does the string says potato.

function Potato(input){
var Regex = /potato/g
var x = input.match(Regex)
var y = x.length
console.log(y)
}

Potato("potatopotatopotato")

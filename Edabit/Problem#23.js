//Split every letters from a string and keep the voyels together.

function SplitIt(input){
var Voyels = /([^aeiou]|[aeiou]+)/g
var z = input.match(Voyels)
console.log(z)
}

SplitIt("spoonful")

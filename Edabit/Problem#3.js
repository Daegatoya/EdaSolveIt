//Make it so the function will log only non-capitals letters from the given string.

function FindWord(input){
var Regex = /[\d]/g
var x = input.match(Regex)
var y = x.sort(function (a, b){
    return a - b;
})
var NewArr = y.join("");
console.log(NewArr)

var Regex2 = /[a-z]/g
var x2 = input.match(Regex2);
var NewArr2 = x2.join("");
console.log(NewArr2)
}

FindWord("SJAFJBASFJ6KsSNJKNSaSNJKSNlNSKDJN1uSFJKNASK5Jt")

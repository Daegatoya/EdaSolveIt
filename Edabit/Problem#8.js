//Check how many digits are there in the given string.

function NumberofDigit(input){
    var Reg = /[1-9]/g
    var y = input.toString();
    var x = y.match(Reg);
    console.log(x.length)
}

NumberofDigit(121353)

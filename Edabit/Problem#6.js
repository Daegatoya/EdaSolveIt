//Check how many true there is.

function NumberOfTrue(input){
    var x = input.toString();
    var Reg = /true/g
    var y = x.match(Reg);
    var z = y.length;
    console.log(z)
}

NumberOfTrue([true, false, true, true, true, false])

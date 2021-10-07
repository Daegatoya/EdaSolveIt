//Check if the number is higher than the initial number when the 2 digits are switched.

function NumFalseTrue(input){
    var x = input.toString();
    var y = x.split("")
    var arr = [y[1], y[0]];
    var NewArr = arr.join("");
    
    if(NewArr > input){
        return console.log(false)
    }
    else{
        return console.log(true)
    }
}

NumFalseTrue(41)

//Check if there is 7 in the array and says Boom! if there is.

function Boom(...input){
    var Reg = /7/g
    var y = input.toString();
    if(y.match(Reg)){
        console.log("Boom!")
    }
    else{
        return console.log(false);
    }

}

Boom([6, 4, 7])

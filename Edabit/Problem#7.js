//Make it so the function check if it's possible to reach input2 with a 6 faces dice if you are in <input> position.

function IsItPossible(input, input2){
if(input > input2){
    return console.log(false);
}
else{
    var x = input + 6
    if(x < input2){
        return console.log(false)
    }
    else{
if(x >= input2){
    console.log(true)
}
    }
}
}

IsItPossible(2, 4);

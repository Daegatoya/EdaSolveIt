//Create a slot machine from an array.

function Slot(input){
    var x = input.sort();
    if(x[0] == x[1] && x[0] == x[2] && x[0] == x[3]){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

Slot(["$", "$", "$", "$"])

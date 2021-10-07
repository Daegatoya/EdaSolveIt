//Sort the array depending on the given sorting technic as <input2>.

function ArraySort(input, input2){
    if(input2 == "Asc"){
var x = input.sort(function(a, b){
return a - b;
})
console.log(x)
    }
    else if(input2 == "Des"){
var y = input.sort(function(a, b){
return a - b;
})
var z = input.reverse();
console.log(z)
    }
    else if(input2 == "None"){
        return console.log(input);
    }
}

ArraySort([4, 5, 1, 3, 2], "Asc")

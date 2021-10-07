//Create an array of every possible result of <input> x <input2>.

function MultipleArray(input, input2){
    var result = input * input2;
    i = 0;
    var array = [result];
    while(i < result){
array.push(i);
i = i + input;
    }
var newarray = array.sort(function (a, b){
    return a - b;
})
console.log(newarray)
}

MultipleArray(5, 3)

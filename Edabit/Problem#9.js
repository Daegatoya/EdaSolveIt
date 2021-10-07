//Check what is the second largest number of the given array.

function SecondLargest(input){
    var x = input.sort(function(a, b){
return a - b;
    })
x.pop();
var y = x.pop();
console.log(y);
}

SecondLargest([23, 15, 54, 76, 12, 56, 75])

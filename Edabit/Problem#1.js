//Make it so the function log down the highest and the lowest number of the given array.

function HigherLower(input){

var x = input.sort(function(a, b){
return a - b;
});

var lower = input.shift(x);

var higher = input.pop(x);

var arr = [lower, higher];

console.log(arr)
}

HigherLower(["56", "76", "43", "36"])

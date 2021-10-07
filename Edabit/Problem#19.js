//Make it so the function evaluate the given array and evaluate pairwise.

function And(input){
return console.log(input.reduce((a, b) => a&&b));
}

And([true, true, false, true]);

function Xor(input){
return console.log(input.reduce((a, b) => a!==b));
}

Xor([true, true, false, false]);

function Or(input){
return console.log(input.reduce((a, b) => a||b));
}

Or([true, true, false, false]);

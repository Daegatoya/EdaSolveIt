//Check if each number is odd or even. If the number is odd, add 2 to it the amount of time <input2> says. Else, if it's even, remove 2 the amount of time <input2> says.

function EvenOrOdd(input, input2){
        var x = input.map(x=>(x%2==0)?x-2*input2:x+2*input2);
        console.log(x)
}

EvenOrOdd([3, 4, 9], 3)

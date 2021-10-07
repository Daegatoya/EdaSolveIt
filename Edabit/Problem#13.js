//Clone the array and put it in.

function Clone(input) {
    input.push(input.slice(0))
    return console.log(input)
  }

Clone([1, 2])

//Find where does it says Nemo in the given string.

function FindNemo(input){
    var x = input.split(" ");
    var z = "Nemo";
    var y = x.indexOf(z)
    console.log("I found " + z + " at position " + y + "!");
}

FindNemo("I am Nemo !");

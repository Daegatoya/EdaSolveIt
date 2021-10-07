//Give the position of each capitals letters.

function WhereAreCaps(input){
var x = [];
for(let i = 0; i < input.length; i++){
    if(input[i].match(/[A-Z]/) != null){
        x.push(i)
    }
}
console.log(x)
}

WhereAreCaps("LuEfdaT")

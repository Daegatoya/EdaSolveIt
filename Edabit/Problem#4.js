//Check if the given date is 11/24 or not.

function DateEve(input){
var x = input.getMonth()
var y = input.getDate()
if(x == 11 && y == 24){
    return console.log(true)
}
else{
    return console.log(false)
}
}

DateEve(new Date(2021, 11, 24))

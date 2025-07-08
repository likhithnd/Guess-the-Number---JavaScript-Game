let data = prompt("Guess a number between 1 and 100")
function getrandomnumber(){
    let rand = Math.floor(0 + Math.random()*100 + 1)
    // range of the above line of code is (0<=x<=100)
    return rand   
}
let count = 0
let randomNumber = getrandomnumber()
function engine(data,randomNumber){
    if (data>randomNumber){
        data = prompt("Entre a small number")
        count++
        engine(data,randomNumber)

    }   
    else if(data<randomNumber){
        data = prompt("Entre a Big number")
        count++
        engine(data,randomNumber)
    }
    else{
        alert(`WoW You won the match by guessing the correct number in ${count} times that is : ${randomNumber}`)
    }
    
    
}
engine(data,randomNumber)
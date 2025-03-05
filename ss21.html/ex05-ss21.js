for (let i = 0 ;i < 100 ;i = i+1 ){
    console.log(i)
    if(i %3 == 0 ){
        console.log("Fizz")
    }
    if(i %5 == 0 ){
        console.log("Buzz")
    } 
    if(i %3 == 0 && i %5 == 0){
        console.log("FizzBuzz")
    }
}
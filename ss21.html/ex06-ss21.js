let num = +prompt("Mời bạn nhập 1 số nguyên bất kì")
for(let i =0 ; i <= num; i= i +1){
    if(num % i == 0){
        console.log(i)
    }
}
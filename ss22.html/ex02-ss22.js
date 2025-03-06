let arr = [2,5,7,4,1,8,6]
let check = +prompt("Mời bạn nhập vào số ")
let count = 0
for(let i= 0 ; i < arr.length ; i = i + 1){
    if(check === arr[i]){
        count = 1
    }
}
if(count === 1){
    console.log("Bingo")
}else{
    console.log("chúc bạn may mắn lần sau")
}

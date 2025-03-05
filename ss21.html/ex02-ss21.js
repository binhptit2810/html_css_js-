let sole = 0
let sochan = 0
for(i = 0 ;i<5 ;i = i+1){
    let num = +prompt("Mời bạn nhập vào 1 số")
    if(num % 2 ==0){
        sochan = sochan + 1
    }else{
        sole = sole + 1
    }
}
alert("Số lượng số chẵn là: " + sochan)
alert("số lượng số lẻ là: " + sole)
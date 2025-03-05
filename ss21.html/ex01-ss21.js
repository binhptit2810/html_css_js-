let total = 0
for(i =0 ;i< 5;i = i + 1){
    let num = +prompt("Mời bạn nhập vào 1 số")
    if(num % 2 != 0){
        total += num
    }
}
alert("Tổng các số lẻ là: " + total)
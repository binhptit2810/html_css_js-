let num = +prompt("Mời bạn nhập số để kiểm tra số có chia hết cho cả 3 và 5 không")
if( num % 3 == 0 && num % 5 == 0 ){
    alert(num + " chia hết cho cả 3 và 5")
}else{
    alert(num + " không chia hết cho cả 3 và 5")
}
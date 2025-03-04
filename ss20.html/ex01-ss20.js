let num = +prompt("Mời bạn nhập vào 1 số");
let total = 0;
if(num < 0){
    alert("dữ liệu nhập vào không hợp lệ")
}else if(isNaN(num)){
    alert("dữ liệu nhập vào không hợp lệ")

}else{
    for (let i = 1; i <= num; i = i +1) {
        total += i;
    }
    alert("Tổng các chữ số từ 1 đến " + num + " là: " + total);   
}

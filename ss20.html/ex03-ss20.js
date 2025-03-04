let num = +prompt("Mời bạn nhập vào 1 số nguyên")
let temp = num;
let m = 0;
if(num < 0){
    alert("số không hợp lệ")
}else if(isNaN(num)){
    alert("số không hợp lệ")
}else {
    while (num != 0) {
        m = m * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    if(temp === m ){
        alert(temp + " là số đối xứng")
    }else{
        alert(temp + " không phải là số đối xứng")
    }
}









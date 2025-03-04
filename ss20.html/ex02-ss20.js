let num = +prompt("Mời bạn nhập vào 1 số");
if(num < 0){
    alert("dữ liệu nhập vào không hợp lệ")
}else if(isNaN(num)){
    alert("dữ liệu nhập vào không hợp lệ")
}else{
    for(let i = 0; i < num; i = i +1){
        if(i % 5 == 0){
            console.log(i);
        }
    }
}

let type = +prompt("Mời bạn chọn loại tiền muốn đổi( 1 : VND > USD 2 : USD > VND")
if(type === 1){
    let cash = + prompt("Mời bạn nhập số tiền đổi từ VND > USD")
    if(cash > 0){
        let change = cash / 23000
        alert("Số tiền đổi sang USD là " + change.toLocaleString("vi-VN") + " USD")
    }else{
        alert("Số tiền bạn nhập phải lớn hơn 0")
    }
}else if(type === 2){
    let cash = +prompt("Mời bạn nhập số tiền muốn đổi từ USD sang VND")
    if(cash > 0){
        let change  = cash * 23000
        alert("Số tiền đổi sang VND là " + change.toLocaleString("vi-VN") + " VND")
    }else{
        alert("Số tiền bạn nhập phải lớn hơn 0")
    }
}else{
    alert(" mời bạn nhập lại số 1 hoặc 2")
}
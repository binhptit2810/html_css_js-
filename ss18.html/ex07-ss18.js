let num1 = +prompt("Mời bạn nhập vào số a")
let num2 = +prompt("Mời bạn nhập vào số b")
let pheptinh = prompt("Mời bạn nhập vào các phép tính (+,-,*,/)")
if(pheptinh === "+"){
    let total = num1 + num2
    alert("Kết quả của phép tính trên: a + b = " + total)
}else if (pheptinh === "-"){
    let total = num1 - num2
    alert("Kết quả của phép tính trên: a - b = " + total)
}else if (pheptinh === "*"){
    let total = num1 * num2
    alert("Kết quả của phép tính trên: a * b = " + total)
}else if(pheptinh === "/"){
    let total = num1 / num2
    alert("Kết quả của phép tính trên: a / b = " + total)
}else{
    alert("Phép tính bạn nhập chưa đúng")
}
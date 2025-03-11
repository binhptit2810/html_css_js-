function total(a, b) {
    let num1 = +prompt("Mời bạn nhập vào số a")
    let num2 = +prompt("Mời bạn nhập vào số b")
    if (isNaN(num1) || isNaN(num2) || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        console.log("Dữ liệu bạn nhập ko hợp lệ")
        return; 
    }
    return num1 + num2;
}
console.log(total());
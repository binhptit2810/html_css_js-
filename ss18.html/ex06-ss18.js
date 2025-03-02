let year = +prompt("Mời bạn nhập vào năm")
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    alert("năm " + year + " là năm nhuận")
} else if (year < 0) {
    alert("Năm không được nhỏ hơn 0")
} else {
    alert("năm " + year + " không phải là năm nhuận")
}
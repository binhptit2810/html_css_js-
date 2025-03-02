let num1 = +prompt("Mời bạn nhập vào điểm môn toán");
let num2 = +prompt("Mời bạn nhập vào điểm môn văn");
let num3 = +prompt("Mời bạn nhập vào điểm môn anh");
let average = (num1 + num2 + num3) / 3;

if (average >= 8.0) {
    alert("Giỏi");
} else if (average >= 6.5 && average < 8.0) {
    alert("Khá");
} else if (average >= 5.0 && average < 6.5) {
    alert("Trung bình");
} else if (average < 5.0 && average >= 0) {
    alert("Yếu");
} else {
    alert("Số điểm bạn nhập không hợp lệ");
}
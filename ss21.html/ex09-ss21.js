let num = +prompt("Mời bạn nhập vào 1 số nguyên");
let count = 0;

if (Number.isNaN(num)) {
    alert("Vui lòng nhập số");
} else if (num <= 1) {
    alert("Không phải là số nguyên tố");
} else {
    for (let i = 2; i <= Math.sqrt(num); i = i + 1) {
        if (num % i === 0) {
            count = count + 1;
        }
    }
    if (count > 0) {
        alert("Không phải là số nguyên tố");
    } else {
        alert("Là số nguyên tố");
    }
}
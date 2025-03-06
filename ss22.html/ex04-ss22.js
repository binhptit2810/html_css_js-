let text = prompt("Mời bạn nhập vào 1 dãy số bất kì");
const arr = text.split(" ").map(Number);
let hasNaN = false;
for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
        hasNaN = true;
        break;
    }
}
if (hasNaN) {
    alert("dãy số không hợp lệ");
} else {
    let max = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("Số lớn nhất trong mảng là " + max);
}
let arr = [];
let num = +prompt("Mời bạn nhập số phần tử muốn thêm");
if (num > 0 && !isNaN(num)) {
    for (let i = 0; i < num; i = i + 1) {
        let value = +prompt("Mời bạn nhập phần tử");
        arr.push(value);
    }
}
function searchMin(arr) {
    if (arr.length === 0) {
        console.log("Mảng không có phần tử");
        return;
    }
    let min = arr[0];
    for (let i = 0; i < arr.length; i = i + 1) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log("Phần tử nhỏ nhất trong mảng là " + min);
}
searchMin(arr);
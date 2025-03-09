let arr = [];
let num = +prompt("Mời bạn nhập số phần tử");
if (num < 0) {
    console.log("Số lượng phần tử không được âm");
} else if (num === 0) {
    console.log("Mảng không có phần tử");
} else {
    for(let i = 0; i < num; i =i + 1) {
        let number = prompt("Mời bạn nhập phần tử");
        arr.push(number);
    }
    let sum = 0;
    let hasNumber = false;
    for(let i = 0; i < arr.length; i= i+ 1) {
        let value = Number(arr[i]);
        if (!isNaN(value) && arr[i] !== '') {
            sum += value;
            hasNumber = true;
        }
    }
    if (hasNumber){
        console.log(sum);
    } else {
        console.log("Không có phần tử nào là số");
    }
}
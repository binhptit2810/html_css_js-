let arr = [];
let count = 0;
let num = +prompt("Mời bạn nhập số phần tử");
for(let i = 0; i < num; i = i+ 1){
    let number = prompt("Mời bạn nhập phần tử");
    arr.push(number);
}
let numbers = [];
for(let i = 0; i < arr.length; i = i + 1){
    if (!isNaN(arr[i]) && arr[i] !== '') {
        numbers.push(arr[i]);
    }
}
if (numbers.length > 0) {
    let result = "";
    for(let i = 0; i < numbers.length; i = i+1) {
        result = result + numbers[i];
        if (i < numbers.length -1){
            result = result + " ";
        }
    }
    console.log(result);
} else {
    console.log("Không có ký tự số");
}
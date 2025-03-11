let arr = [];
let num;
let count =0
do {
    num = +prompt("Mời bạn nhập số phần tử muốn thêm");
    if (isNaN(num) || num <= 0) {
        console.log("dữ liệu không hợp lệ");
    }
} while (isNaN(num) || num <= 0);
for (let i = 0; i < num; i = i + 1) {
    let value = prompt("Mời bạn nhập phần tử");
    if (!isNaN(value)) {
        arr.push(+value);
    } else {
        console.log("Dữ liệu không hợp lệ");
        i--; 
    }
}
function check (arr){
    for(let i =0; i< arr.length;i = i+1){
        if(arr[i] >= 0 && Number.isInteger(arr[i])){
            count = count +1
        }
    }
    if(count > 1){
        console.log(count)
    }else{
        console.log("không có số nguyên dương trong mảng")
    }
}

console.log(check(arr))
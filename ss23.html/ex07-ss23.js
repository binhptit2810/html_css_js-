let arr = [];
let num = +prompt("Mời bạn nhập số phần tử");
if (num < 0) {
    console.log("Số lượng phần tử không được nhỏ hơn 0");
} else if (num === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    for (let i = 0; i < num; i= i+1) {
        let number = +prompt("Mời bạn nhập phần tử");
        arr.push(number);
    }
    let max = arr[0];         
    let secondMax = null;     
    for (let i = 1; i < arr.length; i= i+ 1) {
        if (arr[i] > max){
            secondMax = max;    
            max = arr[i];       
        } else if (arr[i] < max && (secondMax === null || arr[i] > secondMax)) {
            secondMax = arr[i];
        }
    }
    if (arr.length < 2) {
        console.log("Mảng không đủ phần tử để tìm số lớn thứ hai");
    } else{
        console.log(secondMax);
    }
}
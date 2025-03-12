let arr = []
let max = 0
for (let i = 0; i < 10; i = i + 1) {
    let element = +prompt("Mời bạn nhập phần tử thứ " + (i + 1))
    if (!isNaN(element) && !Number.isNaN(element)) {  
        arr.push(element)
    } else {
        console.log("Dữ liệu ko hợp lệ")
    }
}
let result = arr.reduce(function(acc,cur,i) {
    if (cur > acc.max) {
        acc.max = cur;
        acc.position = i
    }
    return acc;
}, { max: 0, position: -1 });

if (arr.length === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    console.log("max = " + result.max);
    console.log("position = " + result.position);
}
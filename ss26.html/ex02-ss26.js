let arr = [];
let num = +prompt("Mời bạn nhập số chuỗi của mảng");
if (num > 0 && !Number.isNaN(num)) {
    for (let i = 0; i < num; i =i + 1) {
        let element = prompt("Mời bạn nhập chuỗi");
            arr.push(element); 
    }
}else{
    console.log("dữ liệu bạn nhập ko hợp lệ")
}
let newArr = arr.filter(function(element, index) {
    return element.length > 5;
});
if(newArr.length === 0){
    console.log("Mảng ko có chuỗi nào")
}else{
    console.log(newArr);
}

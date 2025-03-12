let arr = [];
let num = +prompt("Mời bạn nhập số phần tử của mảng");
if (num > 0 && !Number.isNaN(num)) {
    for (let i = 0; i < num; i = i + 1) {
        let element = +prompt("Mời bạn nhập phần tử");
        if (!isNaN(element) && !Number.isNaN(element) && Number.isInteger(element)) {  
            arr.push(element);
        } else {
            console.log("Dữ liệu bạn nhập không hợp lệ")
        }
    }
} else {
    console.log("Dữ liệu bạn nhập không hợp lệ")
}
function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i= i+1) {
        if (num % i === 0) return false
    }
    return true;
}
let primeArr = arr.filter(function(element) {
    return isPrime(element);
})
if (primeArr.length === 0) {
    console.log("Mảng không có phần tử nào");
} else {
    console.log(primeArr);
}
let arr = [];
let num = +prompt("Mời bạn nhập số phần tử của mảng");
if (num > 0 && !Number.isNaN(num)) {
    for (let i = 0; i < num; i = i + 1) {
        let element = +prompt("Mời bạn nhập phần tử");
        if (!isNaN(element) && !Number.isNaN(element) && Number.isInteger(element)) {  
            arr.push(element);
        } else {
            console.log("Dữ liệu nhập không hợp lệ")
        }
    }
} else {
    console.log("Dữ liệu bạn không hợp lệ")
}
function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i = i + 1) {
        if (num % i === 0) return false
    }
    return true;
}
let primeArr = arr.filter(function(element) {
    return isPrime(element) && element % 2 !== 0; 
})
if (primeArr.length === 0) {
    console.log("Mảng không có dữ liệu");
} else {
    console.log(primeArr);
}
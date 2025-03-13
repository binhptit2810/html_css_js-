let num = prompt("Mời bạn nhập số nguyên");
if (!isNaN(num) && Number.isInteger(Number(num))) {
    console.log(findLargestNumber(Number(num)))
}else{
    console.log("dữ liệu bạn nhập ko hợp lệ");
}
function findLargestNumber(n) {
    let number1 = {};
    let result = "";
    while (n > 0) {
        let number2 = n % 10;
        if (number1[number2]) {
            number1[number2] = number1[number2] + 1;
        } else {
            number1[number2] = 1;
        }
        n = Math.floor(n / 10);
    }
    for (let i = 9; i >= 0; i = i - 1) {
        if (number1[i]) {
            for (let j = 0; j < number1[i]; j = j + 1) {
                result = result + i;
            }
        }
    }
    return Number(result);
}


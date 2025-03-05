let num = +prompt("Mời bạn nhập vào 1 số nguyên");
if (Number.isNaN(num) || num < 2) {
    alert("nhập số từ 2 trở lên");
} else {
    let result = "in ra n số nguyên tố đầu tiên " + num + ": ";
    let hasPrime = false; 
    for (let i = 2; i <= num; i++) {
        let count = 0;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                count ++;
                break; 
            }
        }
        if (count === 0) {
            result += i; 
            hasPrime = true; 
        }
    }
    if (hasPrime){
        alert(result);
        console.log(result);
    }else{
        alert(`Không có số nguyên tố nào nhỏ hơn hoặc bằng ${num}`);
    }
}
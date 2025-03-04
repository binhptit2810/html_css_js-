let num1 = +prompt("Mời bạn nhập vào số a");
let num2 = +prompt("Mời bạn nhập vào số b"); 
if (isNaN(num1) || isNaN(num2)) {
    alert("Không hợp lệ");
} else {
    let result = 1; 
    if (num2 >= 0) {
        for (let i = 0; i < num2; i = i + 1) {
            result *= num1; 
        }
        alert(result);
    }else {
        if (num1 === 0){
            alert("Không thể tính với cơ số 0 và số mũ âm!");
        } else{
            for (let i = 0; i < -num2; i = i + 1) {
                result /= num1; 
            }
            alert(result);
        }
    }
}
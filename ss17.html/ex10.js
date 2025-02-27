let num1 = +prompt("Mời bạn nhập vào 1 số")
let num2 = isNaN(num1) ? "Vui lòng nhập một số hợp lệ!" 
           : num1 < 0 ? "Vui lòng nhập số không âm!" 
           : Number.isInteger(Math.sqrt(num1)) ? `${num1} là số chính phương` 
           : `${num1} không phải số chính phương`;
alert(num2)
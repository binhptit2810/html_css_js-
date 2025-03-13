let choice;
let result = 0
let loop = true;
let menu = `
================== MENU ===================
1. Cộng hai số
2. Trừ 2 số
3. Nhân hai số
4. Chia 2 số
5. Thoát
===========================================

Lựa chọn của bạn là gì?
`;
while (loop) {
  choice = +prompt(menu);
  switch (choice) {
    case 1: 
    let num1 = +prompt("Mời bạn nhập số thứ nhất")
    let num2 = +prompt("Mời bạn nhập số thứ 2")
    if(!Number.isNaN(num1) && !Number.isNaN(num2)){
        result = num1 + num2
    }else{
        console.log("dữ liệu bạn nhập ko hợp lệ")
    }
    console.log(result)
    break;
    case 2:
        let numA = +prompt("Mời bạn nhập số thứ nhất")
        let numB = +prompt("Mời bạn nhập số thứ 2")
        if(!Number.isNaN(numA) && !Number.isNaN(numB)){
            result = numA - numB
        }else{
            console.log("dữ liệu bạn nhập ko hợp lệ")
        }
        console.log(result)
    
      break;
    case 3:
        let firstNum = +prompt("Mời bạn nhập số thứ nhất")
        let secondNum = +prompt("Mời bạn nhập số thứ 2")
        if(!Number.isNaN(firstNum) && !Number.isNaN(secondNum)){
            result = firstNum * secondNum
        }else{
            console.log("dữ liệu bạn nhập ko hợp lệ")
        }
        console.log(result)
      break
    case 4:
        let firstNumber = +prompt("Mời bạn nhập số thứ nhất")
        let secondNumber = +prompt("Mời bạn nhập số thứ 2")
        if(!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)){
            result = firstNumber / secondNumber
        }else{
            console.log("dữ liệu bạn nhập ko hợp lệ")
        }
        console.log(result)
      break;
    case 5:
      console.log("Kết thúc chương trình. Cảm ơn!");
      loop = false;
      break;
    default:
      console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
      break;
  }
}
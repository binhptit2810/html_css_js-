let arr = [];
let choice;
let loop = true;
let menu = `
================== MENU ===================
1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra giá trị các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
7. Thêm một phần tử vào vị trí chỉ định
8. Thoát
============================================

Lựa chọn của bạn là gì?
`;
while (loop) {
  choice = +prompt(menu);
  switch (choice) {
    case 1: 
      let count = +prompt("Mời nhập số phần tử:");
      if (count < 0) {
        console.log("Số phần tử không được nhỏ hơn 0");
      } else {
        arr = []; 
        for (let i = 0; i < count; i++) {
          let value = +prompt("Mời nhập phần tử thứ " + (i + 1) + ":");
          arr.push(value);
        }
        console.log("Đã nhập mảng thành công:", arr);
      }
      break;
    case 2:
      if (arr.length === 0) {
        console.log("Mảng rỗng!");
      } else {
        for (let i = 0; i < arr.length; i++) {
          console.log(`${i}. ${arr[i]}`);
        }
      }
      break;
    case 3: 
      if (arr.length === 0) {
        console.log("Mảng rỗng!");
      } else {
        let evenArr = [];
        let evenSum = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]); 
            evenSum += arr[i];
          }
        }
        if (evenArr.length > 0) {
          for (let i = 0; i < evenArr.length; i++) {
            console.log(`${i}. ${evenArr[i]}`);
          }
          console.log("Tổng các số chẵn: " + evenSum);
        } else {
          console.log("Không có số chẵn trong mảng!");
        }
      }
      break;
    case 4: 
      if (arr.length === 0) {
        console.log("Mảng rỗng!");
      } else {
        let max = Math.max(...arr); 
        let min = Math.min(...arr); 
        console.log("Giá trị lớn nhất: " + max);
        console.log("Giá trị nhỏ nhất: " + min);
      }
      break;
    case 5: 
      if (arr.length === 0) {
        console.log("Mảng rỗng!");
      } else {
        let primeArr = [];
        let primeSum = 0;
        for (let i = 0; i < arr.length; i++) {
          let isPrime = true;
          if (arr[i] < 2) {
            isPrime = false;
          } else {
            for (let j = 2; j <= Math.sqrt(arr[i]);j++) { 
              if (arr[i] % j === 0) {
                isPrime = false;
                break;
              }
            }
          }
          if (isPrime) {
            primeArr.push(arr[i]); 
            primeSum += arr[i];
          }
        }
        if (primeArr.length > 0) {
          for (let i = 0; i < primeArr.length; i++) {
            console.log(`${i}. ${primeArr[i]}`);
          }
          console.log("Tổng các số nguyên tố: " + primeSum);
        }else{
          console.log("Không có số nguyên tố trong mảng!");
        }
      }
      break;
    case 6: 
      if (arr.length === 0) {
        console.log("Mảng rỗng!");
      } else {
        let target = +prompt("Nhập số cần tìm:");
        let countTarget = arr.filter(num => num === target).length;
        console.log("Số " + target + " xuất hiện " + countTarget +" lần trong mảng");
      }
      break;
    case 7:
      if (arr.length === 0) {
        console.log("Mảng rỗng, hãy nhập mảng trước!");
      } else {
        let newValue = +prompt("Nhập giá trị cần thêm:");
        let position = +prompt("Nhập vị trí (0 đến " + arr.length + "):");
        if (position < 0 || position > arr.length) {
          console.log("Vị trí không hợp lệ!");
        }else {
          arr.splice(position, 0, newValue);
          console.log("Mảng sau khi thêm:", arr);
        }
      }
      break;
    case 8:
      console.log("Kết thúc chương trình. Cảm ơn!");
      loop = false;
      break;
    default:
      console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
      break;
  }
}
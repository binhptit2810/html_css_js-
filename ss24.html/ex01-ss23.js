let arr = [];
let choice;
let loop = true;
let menu = `
================== MENU ===================
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình
===========================================

Lựa chọn của bạn là gì?
`;
while (loop) {
  choice = +prompt(menu);
  switch (choice) {
    case 1: 
    // let arr = [];
    let count = +prompt("Mời nhập số phần tử:");
    if (isNaN(count) || count < 0 || !Number.isInteger(count)) {
      console.log("Số phần tử phải là số nguyên không âm");
    } else {
    let i = 0;
    while (i < count) {
        let value = +prompt(`Mời nhập phần tử thứ ${i + 1}:`);
        if (isNaN(value)) {
            console.log("Hãy nhập một số");
            continue;
        }
        if (!Number.isInteger(value)) {
            console.log("Hãy nhập số nguyên");
            continue;
        }
        arr.push(value);
        i++;
    }
    console.log("Đã nhập mảng thành công:", arr);
  }
    break;
    case 2:
        if (arr.length === 0) {
            console.log("Không có phần tử trong mảng");
          } else {
            for (let i = 0; i < arr.length; i++) {
              console.log(`${i}. ${arr[i]}`);
            }
          }
      break;
    case 3:
      let max = arr[0]; 
      for(let i = 0; i < arr.length; i = i + 1) {
        if(max < arr[i]) {
        max = arr[i]; 
        }
      }
      console.log("Phần tử lớn nhất trong mảng là: " + max);
      let min = arr[0]; 
      for(let i = 0; i < arr.length; i = i + 1) {
        if(min > arr[i]) {
        min = arr[i]; 
        }
      }
      console.log("Phần tử nhỏ nhất trong mảng là: " + min);
      break
    case 4:
      let total = 0
      for(let i = 0; i < arr.length; i = i +1){
        total += arr[i]
      } 
      console.log("tổng các phần tử trong mảng là " + total)
      break;
    case 5: 
      let check = +prompt("Mời bạn nhập vào phần tử muốn đếm số lần xuất hiện")
      let counts = 0 
      for(let i = 0 ; i< arr.length ; i= i +1){
        if(arr[i] === check){
          counts = counts + 1
        }
      }
      if(counts > 1){
        console.log("Phần tử " + check + " xuất hiên " + counts + " lần trong mảng")
      }else{
        console.log("Phần tử không tồn tại trong mảng")
      }
      break;
    case 6: 
      for(let i = 0; i< arr.length -1 ; i= i+ 1){
        for(let j = 0; j < arr.length - i -1; j= j +1){
          if(arr[j] > arr[j + 1]){
            let temp = arr[j]
            arr[j] = arr[j +1]
            arr[j + 1] = temp
          }
        }
      }
      console.log("Mảng sau khi sắp xếp tăng dần là " + arr )
      break;
    case 7:
      console.log("Kết thúc chương trình. Cảm ơn!");
      loop = false;
      break;
    default:
      console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!");
      break;
  }
}
let arr = [];
let choice;
let loop = true;

let menu = `
------ MENU ------
1. Nhập vào mảng
2. Hiển thị mảng
3. Thêm phần tử
4. Sửa phần tử
5. Xóa phần tử
6. Thoát

Lựa chọn của bạn là gì?
`;

while (loop) {
  choice = +prompt(menu);

  switch (choice) {
    case 1:
      let count = +prompt("Mời nhập vào số lượng phần tử muốn thêm");
      for (let i = 0; i < count; i++) {
        let input = prompt("Mời bạn nhập vào phần tử muốn thêm");
        arr.push(input);
      }
      console.log(arr);
      break;
    case 2:
      for (let i in arr) {
        console.log(`${i}. ${arr[i]}`);
      }
      break;
    case 3:
      let addNumber = +prompt("Mời nhập số lượng phần tử muốn thêm");
      let addIndex = +prompt("Mời nhập vào vị trí muốn thêm phần tử");
      for (let i = 0; i < addNumber; i++) {
        let addValue = +prompt("Mời nhập phần tử muốn thêm");
        arr.splice(addIndex, 0, addValue);
      }
      break;
    case 4: 
      let editIndex = +prompt("Mời nhập vị trí phần tử muốn sửa (bắt đầu từ 0):");
      if (editIndex >= 0 && editIndex < arr.length) {
        let newValue = prompt("Mời nhập giá trị mới:");
        arr[editIndex] = newValue;
        console.log("Mảng sau khi sửa:", arr);
      } else {
        console.log("Vị trí không hợp lệ!");
      }
      break;
    case 5: 
      let deleteIndex = +prompt("Mời nhập vị trí phần tử muốn xóa (bắt đầu từ 0):");
      if (deleteIndex >= 0 && deleteIndex < arr.length) {
        arr.splice(deleteIndex, 1);
        console.log("Mảng sau khi xóa:", arr);
      } else {
        console.log("Vị trí không hợp lệ!");
      }
      break;
    case 6:
      console.log("Kết thúc chương trình. Cảm ơn !!!!!");
      loop = false;
      break;
  }
}
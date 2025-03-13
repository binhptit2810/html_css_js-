let arr = [];
let choice;
let result = 0
let loop = true;
let menu = `
================== MENU ===================
1. Nhập danh sách sinh viên
2. Hiển thị danh sách sinh viên
3. Tìm sinh viên theo tên
4. Xóa sinh viên khỏi danh sách
5. Thoát
===========================================

Lựa chọn của bạn là gì?
`;
while (loop) {
  choice = +prompt(menu);
  switch (choice) {
    case 1: 
    let num = +prompt("Mời bạn nhập số lượng sinh viên")
    if(num > 0 && !isNaN(num) && Number.isInteger(num)){
        for(let i = 0 ; i< num; i= i +1){
            let element = prompt("Mời bạn nhập sinh viên ")
                arr.push(element)
        }
        console.log("thêm sv thành công")
    }else{
        console.log("Số lượng sv ko hợp lệ")
    }
    // console.log(arr)
    break;
    case 2:
       if(arr.length === 0){
        console.log("không có sv trong mảng")
       }else{
        for(let i = 0; i< arr.length;i = i+1){
            console.log(arr[i])
        }
       }
      break;
    case 3:
        let count = 0
        if(arr.length === 0){
            console.log("ko có sv trong mảng")
        }else{
            let search = prompt("Mời bạn nhập tên sv cần tìm")
            for(let i = 0;i < arr.length;i= i+1){
            if(arr[i].includes(search)){
                console.log(arr[i])
                count = count +1
            }
        }
        }
        if(count ===0){
            console.log("ko có sv bạn tìm kiếm trong mảng")
        }
      break
    case 4:
        if (arr.length === 0) {
            console.log("Không có sinh viên trong mảng");
        } else {
            let dele = prompt("Mời bạn nhập tên sv cần xóa");
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].includes(dele)) {
                    arr.splice(i, 1);
                    i--; 
                }
            }
        }
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
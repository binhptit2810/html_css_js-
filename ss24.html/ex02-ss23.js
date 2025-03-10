let arr = [];
let choice;
let loop = true;
let menu = `
================== MENU ===================
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. tính trung bình cộng của mảng
5. xóa phần tử tại vị trí chỉ định
6. tìm phần tử lớn thứ 2 trong mảng
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
            for (let i = 0; i < arr.length; i = i + 1) {
                if (arr[i] % 2 == 0) {
                    console.log("số chẵn trong mảng là : " + arr[i])
                } else {
                    console.log("số lẻ trong mảng là : " + arr[i])
                }
            }
            break
        case 4:
            let result = 0
            for (let i = 0; i < arr.length; i = i + 1) {
                result += arr[i]
            }
            let avg = result / arr.length
            console.log("trung bình cộng của mảng là : " + avg)
            break;
        case 5:
            let pos = +prompt("Mời bạn nhập vào vị trí phần tử muốn xóa")
            if (pos >= 0 && !isNaN(pos)) {
                arr.splice(pos, 1)
                for (let i = 0; i < arr.length; i = i + 1) {
                    console.log("Mảng sau khi xóa phần tử là " + arr)
                }
            } else {
                console.log("hãy nhập vị trí >= 0 và là số ")
            }
            break;
        case 6:
            let max = arr[0];
            let secondMax = null;
            for (let i = 1; i < arr.length; i = i + 1) {
                if (arr[i] > max) {
                    secondMax = max;
                    max = arr[i];
                } else if (arr[i] < max && (secondMax === null || arr[i] > secondMax)) {
                    secondMax = arr[i];
                }
            }
            if (arr.length < 2) {
                console.log("Mảng không đủ phần tử để tìm số lớn thứ hai");
            } else {
                console.log("Phần tử lớn thứ 2 trong mảng là : " + secondMax);
            }
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
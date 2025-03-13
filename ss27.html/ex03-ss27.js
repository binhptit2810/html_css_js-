let loop = true;
let menu = `
======== MENU HÌNH HỌC =======
1. Tính diện tích hình tròn
2. Tính chu vi hình tròn
3. Tính diện tích hình chữ nhật
4. Tính chu vi hình chữ nhật
5. Thoát
==============================

Lựa chọn của bạn là gì?
`;

while (loop) {
    let choice = +prompt(menu);
    switch (choice) {
        case 1:
            let radius = +prompt("Nhập bán kính: ");
            if (radius > 0 && radius * 1 === radius) {
                let acreage = 3.14 * radius * radius;
                console.log("Diện tích: " + acreage);
            } else {
                console.log("Bán kính không hợp lệ");
            }
            break;

        case 2: 
            let radius1 = +prompt("Nhập bán kính: ");
            if (radius1 > 0 && radius1 * 1 === radius1) {
                let perimeter = 2 * 3.14 * radius1;
                console.log("Chu vi: " + perimeter);
            } else {
                console.log("Bán kính không hợp lệ");
            }
            break;

        case 3: 
            let length = +prompt("Nhập chiều dài: ");
            let width = +prompt("Nhập chiều rộng: ");
            if (length > 0 && width > 0 && length * 1 === length && width * 1 === width) {
                let acreage2 = length * width;
                console.log("Diện tích: " + acreage2);
            } else {
                console.log("Kích thước không hợp lệ");
            }
            break;

        case 4: 
            let length2 = +prompt("Nhập chiều dài: ");
            let width2 = +prompt("Nhập chiều rộng: ");
            if (length2 > 0 && width2 > 0 && length2 * 1 === length2 && width2 * 1 === width2) {
                let perimeter2 = 2 * (length2 + width2);
                console.log("Chu vi: " + perimeter2);
            } else {
                console.log("Kích thước không hợp lệ");
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
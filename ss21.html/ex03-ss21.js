let password = "123456789";
let check; 

do {
    check = prompt("Mời bạn nhập vào mật khẩu"); 
    if (check === password) {
        alert("Mật khẩu đúng");
    } else {
        alert("Mật khẩu sai vui lòng nhập lại");
    }
} while (check !== password);
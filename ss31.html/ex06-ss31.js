function checkLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let correctUsername = "huanrose@gmail.com";
    let correctPassword = "123456";
    if(username === correctUsername && password === correctPassword){
        console.log("Thông báo đăng nhập thành công");
    }else{
        console.log("Thông báo đăng nhập thất bại");
    }
}
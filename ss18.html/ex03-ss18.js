let name = prompt("Mời bạn nhập tên đăng nhập")
if(name === "ADMIN"){
    let passWord = prompt("Mời bạn nhập mật khẩu")
    if(passWord === "TheMaster"){
        alert("Welcome")
    }else if(passWord === "null"){
        alert("Cancelled")
    }else{
        alert("Wrong password")
    }
}else if( name === "null"){
    alert("Cancelled")
}else{
    alert("I don't know you")
}
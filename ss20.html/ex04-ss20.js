let str = prompt("Mời bạn nhập vào chuỗi");
let search = prompt("Mời bạn nhập vào kí tự cần tìm")
let count = 0;
for(let i = 0; i < str.length; i = i + 1){
    if(str[i] === search){
        count = count + 1;
    }
}
if(count === 0){
    alert("không tồn tại phần tử cần tìm")
}else{
    alert("tồn tại từ cần tìm")
}
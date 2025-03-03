let character = prompt("Mời bạn nhập vào ký tự để kiểm tra");
let length = character.length
if(length <= 1 ){
    if ((character >= "a" && character <= "z") || (character >= "A" && character <= "Z")) {
        alert("Kí tự " + character + " là chữ cái");
    }else {
        alert("Kí tự bạn nhập không phải chữ cái")
    }
}else{
    alert("hãy nhập lại chỉ 1 kí tự")
}

let num = +prompt("Mời bạn nhập vào 1 số nguyên")
let count = 0;
if(num <= 1){
    alert("Không phải là số nguyên tố")
}else{
    for(let i = 0 ; i < num; i = i + 1){
        if(num % i === 0){
            count = count + 1;  
        }
    }
    if(count > 2){
        alert("không phải là số nguyên tố")
    }else{
        alert("là số nguyên tố")
    }
}


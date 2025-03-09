let arr = []
let count = 0;
let num = +prompt("Mời bạn nhập số phần tử")
for(let i = 0 ; i < num;i ++){
    let number = +prompt("Mời bạn nhập phần tử")
    arr.push(number)
}
for(let i = 0 ; i < arr.length; i = i + 1){
    if(arr[i] < 0 && Number.isInteger(arr[i])){
        count = count + 1
    }

}
if( num ===0 ){
    alert("mảng ko có phần tử")
}else if(num < 0 ){
    alert("Số lượng phần tử không hợp lệ")
}else{
    alert(count)
}
    

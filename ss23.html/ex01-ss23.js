let arr = []
for(let i = 0 ; i < 10;i ++){
    let number = +prompt("Mời bạn nhập phần tử")
    arr.push(number)
}
let count = 0;
for(let i = 0; i < arr.length;i = i + 1){
    if(arr[i] >= 10){
        console.log(arr[i])
        count = count + 1
    }
}
if(count < 1){
    console.log("Không có số nào lớn hơn 10")
}
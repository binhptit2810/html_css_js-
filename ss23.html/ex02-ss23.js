let arr = []
let max = 0
for(let i = 0 ; i < 10;i ++){
    let number = Number(prompt("Mời bạn nhập phần tử"))
    arr[i] = number
}
console.log(arr)
max = arr[0]; 
for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
        
    }
}
if(arr.length === 0){
    alert("Không có số lớn nhất ")
}else{
    let pos = arr.indexOf(max)
    console.log("vị trí " + pos)
    console.log("số lớn nhất " + max)
}

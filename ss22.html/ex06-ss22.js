let arr = [2,5,7,4,1,8,6,2,5,7]
let check = +prompt("Mời bạn nhập vào 1 số")
let count = 0

for(let i = 0 ; i < arr.length ; i = i +1){
    if(check == arr[i]){
        count = count +1
    }
}
if(count > 1){
    alert("số " + check + " xuất hiện " + count + " lần trong mảng")
}else{
    alert("số " + check + " không tồn tại trong mảng")
}


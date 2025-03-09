let arr = []
let num = +prompt("Mời bạn nhập số phần tử")
if (num < 0){
    console.log("Số lượng phần tử không được nhỏ hơn 0")
} else if (num <= 2) {
    console.log("Không phải dãy số fibonacci")
} else{
    for (let i = 0; i < num; i= i+1) {
        let number = +prompt("Mời bạn nhập phần tử");
        arr.push(number);
    }
    let isFibonacci = true;
    for (let i = 2; i < arr.length; i++){
        if (arr[i] !== arr[i - 1] + arr[i - 2]) {
            isFibonacci = false;
            break; 
        }
    }
    if(isFibonacci){
        console.log("Là dãy số fibonacci");
    }else{
        console.log("Không phải dãy số fibonacci");
    }
}
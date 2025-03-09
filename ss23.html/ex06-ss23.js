let arr = ["", false, 0, 5, 10, "Hello world!"];
let result = [];
for (let i = 0; i < arr.length; i = i+1) {
    if (arr[i]) {
        result.push(arr[i]);
    }
}
console.log(result);

let times = +prompt("Mời bạn nhập số ngày:")
while (isNaN(times) || times < 0) {
    times = +prompt("Hãy nhập lại ");
}
let arr = []
for (let i = 0; i < times; i = i + 1){
    let element = prompt("Mời bạn nhập chuỗi ngày thứ " + (i + 1))
    arr.push(element ? element.trim() : "");
}let result;
if (arr.length === 0) {
    result = "Mảng không có phần tử nào";
} else {
    result = arr.map(dateStr => {
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) {
            return "Dữ liệu không hợp lệ";
        }
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    });
}
console.log("Kết quả:", result);